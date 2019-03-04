let AMOUNT_OF_ITEMS = 5; // change this if there is a different amount of items
let segment_width = 360 / AMOUNT_OF_ITEMS;


let bottle = document.getElementById('bottle');
bottle.addEventListener('click', spin);

let alert = document.getElementById('alert');
alert.addEventListener('click', reset);

/**
 * hide the alert box
 *
 */
function reset() {
    alert.style.opacity = '0';
    alert.style.pointerEvents = 'none';
}

/**
 * spinn the bottle and call the function stop after a random time 
 *
 */
function spin() {
    bottle.style.animationPlayState = 'running';
    setTimeout(stop, randomFloat() * 1000);
}

/**
 * stop the bottle from spinning
 * get the angle of the bottle
 * show the alert box with the winner
 *
 */
function stop() {
    bottle.style.animationPlayState = 'paused';

    // get the angle of the bottle
    let matrix = getComputedStyle(bottle).transform;

    let values = matrix.split('(')[1];
    values = values.split(')')[0];
    values = values.split(',');

    let angle = Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI));

    if (angle < 0) {
        angle = Math.abs(180 + angle) + 180;
    }

    // check which item the bottle is pointing to
    let winner = Math.ceil((angle + segment_width / 2) / segment_width);
    if (winner == 6) winner = 1;

    // show the alert box
    alert.innerHTML = 'we have have a winner: item #' + winner;
    alert.style.opacity = '0.8';
    alert.style.pointerEvents = 'auto';
}


/**
 * return a random float between two values
 *
 * @param {number} [min=2] 
 * @param {number} [max=4] 
 */
function randomFloat(min = 2, max = 4) {
    return Math.random() * (max - min + 1) + min;
}