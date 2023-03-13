/**
 * Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
 */

// Create array for users name 

let usersName = ['Liam', 'Lucas', 'James', 'Oliver', 'Elijah'];
console.log(usersName);

//
let boxMessage = document.getElementById('boxMessage');

//Generate number when click button
let btnPush = document.getElementById('btnPush');
btnPush.addEventListener('click', pushNumber);

function pushNumber(e){
    e.preventDefault();
    let numberUser = Math.floor(Math.random() * 6) + 1;
    let numberComputer = Math.floor(Math.random() * 6) + 1;
    console.log(numberUser, numberComputer);

    boxMessage.innerHTML = '';
    let elementPara = '';
    let message = '';
    let element = '';

    if(numberUser > numberComputer){
        elementPara = document.createElement("p");
        message = document.createTextNode(`Il tuo risultato ${numberUser}, il risultato del bot ${numberComputer}: Hai vinto`);
        elementPara.appendChild(message);
        element = document.getElementById("boxMessage");
        element.appendChild(elementPara);
        console.log('Hai vinto');
        
    } else if(numberUser < numberComputer){
        elementPara = document.createElement("p");
        message = document.createTextNode(`Il tuo risultato ${numberUser}, il risultato del bot ${numberComputer}: Hai perso`);
        elementPara.appendChild(message);
        element = document.getElementById("boxMessage");
        element.appendChild(elementPara);

        console.log('Hai perso');
    } else{
        elementPara = document.createElement("p");
        message = document.createTextNode(`Il tuo risultato ${numberUser}, il risultato del bot ${numberComputer}: Pareggio`);
        elementPara.appendChild(message);
        element = document.getElementById("boxMessage");
        element.appendChild(elementPara);

        console.log('Pareggio')
    }
}

