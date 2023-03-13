/**
 * Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
 */

// Create array for users name 

let usersName = ['Liam', 'Lucas', 'James', 'Oliver', 'Elijah'];
console.log(usersName);

//create random number

let getRandomNumber = Math.floor(Math.random() * 6) + 1;
//console.log(getRandomNumber);

//Generate number when click button
let btnPush = document.getElementById('btnPush');
btnPush.addEventListener('click', pushNumber);
function pushNumber(e){
    e.preventDefault();
    let numberUser = '';
    numberUser = getRandomNumber;
    console.log(getRandomNumber);
}

