/**
 * Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
 */

// Create array for users name 

let usersName = ['Liam', 'Lucas', 'James', 'Oliver', 'Elijah'];
console.log(usersName);

//Generate number when click button
let btnPush = document.getElementById('btnPush');
btnPush.addEventListener('click', pushNumber);

function pushNumber(e){
    e.preventDefault();
    let numberUser = Math.floor(Math.random() * 6) + 1;
    let numberComputer = Math.floor(Math.random() * 6) + 1;
    console.log(numberUser, numberComputer);

    if(numberUser > numberComputer){
        console.log('Hai vinto');
    } else if(numberUser < numberComputer){
        console.log('Hai perso');
    } else{
        console.log('Pareggio')
    }
}

