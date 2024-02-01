// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft(){
    dodger.style.backgroundColor = "#FF69B4";
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers,10);

    if (left > 0){
        dodger.style.left = `${left - 1}px`;
    }
}


function moveDodgerRight(){
    dodger.style.backgroundColor = '#B0B21A';
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers,10);
    
    if(left < 360){
        dodger.style.left = `${left + 1}px`;
    }
}

function moveDodgerUp(){
    dodger.style.backgroundColor = '#5287E3';
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);

    if (bottom < 380){
        dodger.style.bottom = `${bottom + 1}px`;
    }
}

function moveDodgerDown(){
    dodger.style.backgroundColor = '#BE52E3';
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers,10);

    if (bottom > 0 ){
        dodger.style.bottom = `${bottom - 1}px`;
    }
}

document.addEventListener("keydown",e => {
    if(e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if(e.key === "ArrowRight"){
        moveDodgerRight();
    } else if(e.key === "ArrowUp"){
        moveDodgerUp();
    } else if(e.key === "ArrowDown"){
        moveDodgerDown();
    }
})

