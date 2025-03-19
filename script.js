const container = document.querySelector('#container');
const resetBtn = document.querySelector('#reset');
const monoBtn = document.querySelector('#mono');
const colorBtn = document.querySelector('#color');
let gridLength = 16;
let squareColor = 'black';

monoBtn.addEventListener("click", () => {
    //toggle a class attribute that tells drawGrid which color to paint squares ?
});

colorBtn.addEventListener("click", () => {
    //toggle a class attribute that tells drawGrid which color to paint squares ?
});

resetBtn.addEventListener("click", () => {
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
            const active = e.target.classList[1];
            const inc = 0.1;
            let opacity = Number(e.target.style.opacity);
            if (active && opacity < 1 && opacity > 0) {
                e.target.style.opacity = opacity + inc;
            } else if (opacity === 0) {
                e.target.classList.add("active");
                //e.target.style.backgroundColor = "black";
                e.target.style.backgroundColor = getRandomRGB();
                e.target.style.opacity = inc;
            }
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