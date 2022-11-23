const container = document.querySelector('.container');


// creates a grid of 16x16 divs
function createGrid() {

    for(let i=0;i<16;i++){

        const rowContainer = document.createElement('div');
        rowContainer.classList.add('row-container');

            for(let j=0;j<16;j++){
                const box = document.createElement('div');
                box.classList.add('box');
                //box.addEventListener('mouseover',colorBox);
                colorBox(box);
                rowContainer.appendChild(box);           
            }  

        container.appendChild(rowContainer);   
                 
    }

    return;
}

function colorBox(element) {
    //e.target.classList.add('colored');
    element.addEventListener('mouseover', (e) => e.target.classList.add('colored') );
 
}


function changeColor(element){
    element.style.backgroundColor='pink';
}

createGrid();



