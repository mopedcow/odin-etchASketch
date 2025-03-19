const container = document.querySelector('#container');
const btn = document.querySelector('button');
let gridLength = 16;

btn.addEventListener("click", () => {
    let newGridLength = prompt("how big grid ?");

    while (!Number(newGridLength) ||
        newGridLength > 100 ||
        newGridLength < 4) {
        if (newGridLength === null) {
            return;
        } else if (!Number(newGridLength)) {
            newGridLength = prompt("number only");
        } else if (newGridLength > 100) {
            newGridLength = prompt("i can only count to 100");
        } else {
            newGridLength = prompt("i like bigger numbers");
        }
    };
    eraseGrid();
    drawGrid(newGridLength);
});

function drawGrid(gridLength) {
    for (i = gridLength; i > 0; i--) {
        const column = document.createElement('div');
        column.classList.add('column');
        container.append (column);
        for (j = gridLength; j > 0; j--) {
            const square = document.createElement('div');
            square.classList.add('square');
            column.append(square);
        }
    }
    const squares = document.getElementsByClassName('square');
    for (i = 0; i < squares.length; i++) {
        squares[i].addEventListener("mouseenter", (e) => {
            let checkClass = e.target.classList;
            console.log(checkClass[1]);
            if (checkClass[1] === "active") {
                return;
            } else {
                e.target.classList.add("active");
                e.target.style.backgroundColor = getRandomRGB();
            };
        });
    }
}

function eraseGrid() {
    const columns = document.getElementsByClassName('column');
    for (i = columns.length-1; i >= 0; i--) {
        columns[i].remove();
    }
}

function getRandomRGB() {
    const randomR = (Math.floor(Math.random() * 255 + 1));
    const randomG = (Math.floor(Math.random() * 255 + 1));
    const randomB = (Math.floor(Math.random() * 255 + 1));
    const randomRGB = `rgb(${randomR}, ${randomG}, ${randomB})`;
    return randomRGB;
}

drawGrid(gridLength);

/* 
//why doesn't this work? leaving here in case i revisit later

squaresArray = Array.from(squares);
        // transform html collection into array - necessary ?
for (const square in squaresArray) {
    this.addEventListener("mouseenter", (e) => {
        e.target.classList.add("hover");
    });
}
*/