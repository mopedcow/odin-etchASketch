const container = document.querySelector('#container');

const gridLength = 16;

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