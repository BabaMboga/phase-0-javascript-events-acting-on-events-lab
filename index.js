// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers,10);

    if (left > 0){
        dodger.style.left = `${left - 1}px`;
    }
}


function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers,10);
    const gameWidth = document.querySelector('#game').style.width;
    const dodgerWidth = 40+'px';

    if(left < gameWidth - dodgerWidth){
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown",e => {
    if(e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if(e.key === "ArrowRight"){
        moveDodgerRight();
    }
})

