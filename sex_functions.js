function pickAction() {
	let sexualActionArray = ['Hand Job', 'Blow Job', 'Make Out'];
	const randomIndex = Math.floor(Math.random() * sexualActionArray.length - 1) + 1
	const sexualAction = sexualActionArray[randomIndex]
    document.getElementById("demo").innerHTML = sexualAction;

    var element = document.getElementById("demoG");
    element.classList.add("hidden");

    var elementG = document.getElementById("demo");
    elementG.classList.remove("hidden");
 

};

function pickActionGirl() {
	let sexualActionArrayG = ['Eat Out', 'Finger', 'Make Out']
	const randomIndexG = Math.floor(Math.random() * sexualActionArrayG.length - 1) +1
    const sexualActionG = sexualActionArrayG[randomIndexG]
    document.getElementById("demoG").innerHTML = sexualActionG

    var element = document.getElementById("demo");
    element.classList.add("hidden");

    var elementG = document.getElementById("demoG");
    elementG.classList.remove("hidden");
   

};


function pickNumber() {
	let sexualDurationArray = [5, 10, 15, 20];
    const randomDuration = Math.floor(Math.random() * sexualDurationArray.length - 1) + 1
    const sexualNumAction = sexualDurationArray[randomDuration]
    document.getElementById("demoNum").innerHTML = sexualNumAction;
};


function clock() {
    let sexualDurationArray = [5, 10, 15, 20];
    const randomDuration = Math.floor(Math.random() * sexualDurationArray.length - 1) + 1
    var c = sexualDurationArray[randomDuration];
    document.getElementById("buttonNumber").disabled = true;
    
    
    var myTimer = setInterval(myClock, 1000);
    
    function myClock() {
        document.getElementById("demot").innerHTML = --c;
        if (c === 0) {
          console.log(c);
          clearInterval(myTimer);          
          document.getElementById("buttonNumber").disabled = false;
          document.getElementById("MySound").play();
        }
  }
};

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};