const container = document.querySelector('#container');
const gridLength = 24;

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
console.log(squares.length);
for (i=0; i < squares.length; i++) {
    squares[i].addEventListener("mouseenter", (e) => {
        e.target.classList.add("hover");
    });
}
