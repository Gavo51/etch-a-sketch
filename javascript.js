const container = document.querySelector('.grid-container');
const redrawBtn = document.querySelector('.redraw-btn');
const restartBtn = document.querySelector('.restart-btn');


createGrid(16,16);

restartBtn.addEventListener('click',restartGrid);
redrawBtn.addEventListener('click',redrawGrid);


// creates a grid of 16x16 divs 
function createGrid(rows,columns) {

    for(let i=0;i<rows;i++){

        const rowContainer = document.createElement('div');
        rowContainer.classList.add('row-container');

            for(let j=0;j<columns;j++){
                const box = document.createElement('div');
                box.classList.add('box');
                colorBox(box);
                rowContainer.appendChild(box);           
            }  

        container.appendChild(rowContainer);   
                 
    }

    return;
}

function colorBox(element) {

    element.addEventListener('mouseover', (e) => e.target.classList.add('colored') ); 

}

function redrawGrid() {

    let rows = prompt('Number of rows');
    let columns = prompt('Number of columns');

    cleanGrid();
    createGrid(rows,columns);

}


function cleanGrid() {
    const gridRows =document.querySelectorAll('.row-container');
    
    gridRows.forEach(row => {
        row.remove();
    });
}

function restartGrid() {
    const coloredBoxes = document.querySelectorAll('.colored');   
    coloredBoxes.forEach((box) => box.classList.remove('colored'));
}









