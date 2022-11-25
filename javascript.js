const container = document.querySelector('.grid-container');
const redrawBtn = document.querySelector('.redraw-btn');
const restartBtn = document.querySelector('.restart-btn');

createGrid(16);

restartBtn.addEventListener('click',restartGrid);
redrawBtn.addEventListener('click',redrawGrid);


// creates a grid of 16x16 divs 
function createGrid(gridSize) {

    for(let i=0;i<gridSize;i++){

        const rowContainer = document.createElement('div');
        rowContainer.classList.add('row-container');

            for(let j=0;j<gridSize;j++){
                const box = document.createElement('div');
                box.classList.add('box');
                //colorBox(box);
                rowContainer.appendChild(box);           
            }  

        container.appendChild(rowContainer);   
                 
    }

    colorBox();

    return;
}


function generateColor () {

    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function colorBox() {

    let boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {

        box.addEventListener('mouseover', ()=> box.classList.add('colored'));
    });

}

function redrawGrid() {

let gridSize=0;
 
    do {  
        gridSize = prompt('Enter a number between 1 and 100:');   
    } while (gridSize<1 || gridSize>100);
       
    cleanGrid();
    createGrid(gridSize);

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









