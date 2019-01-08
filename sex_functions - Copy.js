function pickAction() {
	let sexualActionArray = ['Hand Job', 'Blow Job', 'Make Out'];
	const randomIndex = Math.floor(Math.random() * sexualActionArray.length - 1) + 1
	const sexualAction = sexualActionArray[randomIndex]
	document.getElementById("demo").innerHTML = sexualAction;
};

   function pickActionGirl() {
	let sexualActionArrayG = ['Eat Out', 'Finger', 'Make Out']
	const randomIndexG = Math.floor(Math.random() * sexualActionArrayG.length - 1) +1
	const sexualActionG = sexualActionArrayG[randomIndexG]
	document.getElementById("demoG").innerHTML = sexualActionG;
  };

function pickNumber() {
	let sexualDurationArray = [5, 10, 15, 20];
    const randomDuration = Math.floor(Math.random() * sexualDurationArray.length - 1) + 1
    const sexualNumAction = sexualDurationArray[randomDuration]
    document.getElementById("demoNum").innerHTML = sexualNumAction;
};