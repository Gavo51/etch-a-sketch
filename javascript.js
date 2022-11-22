const container = document.querySelector('.container');


// creates a grid of 16x16 divs
function createGrid() {

    for(let i=0;i<5;i++){

        const rowContainer = document.createElement('div');
        rowContainer.classList.add('row-container');

        for(let j=0;j<5;j++){
            const box = document.createElement('div');
            box.classList.add('box');

            rowContainer.appendChild(box);           
        }  

        container.appendChild(rowContainer);   
           
    }

    return;
}

createGrid();