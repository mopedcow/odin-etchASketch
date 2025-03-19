const container = document.querySelector('#container');
const btn = document.querySelector('button');
let gridLength = 16;

btn.addEventListener("click", () => {
    let newGridLength = prompt("how big grid ?");
    if (newGridLength === null) {
        return;
    }
    while (!Number(newGridLength)) {
        newGridLength = prompt("number only");
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
            e.target.classList.add("hover");
        });
    }
}

function eraseGrid() {
    const columns = document.getElementsByClassName('column');
    for (i = columns.length-1; i >= 0; i--) {
        columns[i].remove();
    }
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