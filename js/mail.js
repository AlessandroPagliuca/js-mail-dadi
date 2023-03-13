/**
 * Mail
    Chiedi all’utente la sua email,
    controlla che sia nella lista di chi può accedere,
    stampa un messaggio appropriato sull’esito del controllo.
 */

//list of who can access
let usersList = ['liam@email.com', 'lucas@email.com', 'james@email.com', 'oliver@email.com', 'elijah@email.com'];
console.log(usersList);
//Ask the user for his email
let userMail = '';

//prints an appropriate message on the result of the check
let message = '';

let submit = document.getElementById('submit');
submit.addEventListener('click', checklist);


function checklist(e){
    e.preventDefault();
    let invitated = '';
    let search = document.getElementById('mail').value;

    for(let i = 0; i < usersList.length; i++){
        if(usersList[i].toLowerCase() === search.toLowerCase()){
            invitated = usersList[i];
        }
    }
    if(invitated){
       console.log('Benvenuto');
    } else{
        console.log('Non sei stato invitato')
    }


}