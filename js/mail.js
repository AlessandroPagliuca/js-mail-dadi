/**
 * Mail
    Chiedi all’utente la sua email,
    controlla che sia nella lista di chi può accedere,
    stampa un messaggio appropriato sull’esito del controllo.
 */

//list of who can access
let usersList = ['Liam', 'Lucas', 'James', 'Oliver', 'Elijah'];

//Ask the user for his email
let userMail = '';

//prints an appropriate message on the result of the check
let message = '';

let submit = document.getElementById('submit');
submit.addEventListener('click',);


function checklist(e){
    e.preventDefault();
    let invitated = '';
    let search = document.getElementById('mail').value;

    for(let i = 0; i < usersList.length; i++){
        if(usersList[i].toLowerCase() === search.toLowerCase()){
            invitated = usersList[i];
        }
    }
    switch(true){
        case(invitated):
            console.log(invitated);
        break;

    default:
        console.log()
    }


}