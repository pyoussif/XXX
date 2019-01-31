
function spin(){
    const faceOne1 = document.querySelector(".face-front");
    const faceTwo2 = document.querySelector(".face-back");
    const faceThree3 = document.querySelector(".face-left");
    const faceFour4 = document.querySelector(".face-right");
    const faceFive5 = document.querySelector(".face-top");
    const faceSix6 = document.querySelector(".face-bottom");  
    
    const faceOne = getComputedStyle(faceOne1);
    const faceTwo = getComputedStyle(faceTwo2);
    const faceThree = getComputedStyle(faceThree3);
    const faceFour = getComputedStyle(faceFour4);
    const faceFive = getComputedStyle(faceFive5);
    const faceSix = getComputedStyle(faceSix6);
    
    let faceArray = [faceOne, faceTwo, faceThree, faceFour, faceFive, faceSix]
    const randomDuration = Math.floor(Math.random() * faceArray.length - 1) + 1
    const faceNumAction = faceArray[randomDuration]
    document.getElementById("cubefunction").innerHTML = faceNumAction;

    console.log(faceNumAction);
};

function spinMe(){
    document.getElementById("cube").innerHTML;

    console.log(spinMe());
};
