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
let messageInv = 'Benvenuto';
let messageNotInv = 'Non sei stato invitato';

let submit = document.getElementById('submit');
submit.addEventListener('click', checklist);


function checklist(e){
    e.preventDefault();
    let invitated = '';
    let search = document.getElementById('mail').value;
    let boxMail = '';

    for(let i = 0; i < usersList.length; i++){
        if(usersList[i].toLowerCase() === search.toLowerCase()){
            invitated = usersList[i];
        }
    }
    if(invitated){
        boxMail = document.getElementById('boxMail').innerHTML = `<h3 class="text-white">${messageInv}</h3>`
       console.log(messageInv);
    } else{
        boxMail = document.getElementById('boxMail').innerHTML = `<h3 class="text-white">${messageNotInv}</h3>`
        console.log(messageNotInv)
    }

}