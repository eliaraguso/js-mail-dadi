// Chiedere all'utente di inserire la sua mail
var mailUtente = prompt("Vuoi scoprire se hai accesso al nostro Vip Club? Inserisci la tua email.");

// Definisco il gruppo di mail selezionate per l'accesso esclusivo al Vip Club.
var verifiedMails = ["ginoamiocuggino@mail.com", "pincopallo@mail.com", "mail@mail.com"];

// Definisco una variabile di controllo
var accesso = false

// Controllo che la mail inserita dall'utente sia nella lista di chi può accedere
for ( var i = 0; i < verifiedMails.length; i++) {
    // Se fa parte della lista la variabile di controllo assume il valore di true 
    if (mailUtente == verifiedMails[i]) {
        accesso = true;
    }
}


    // Se la variabile assume il valore di true e quindi la mail inserita fa parte della lista scrivo
if (accesso = false){
    alert("Ci dispiace ma non potrai mai far parte del nostro gruppo esclusivo.");  

    // Se la variabile assume il valore di true e quindi la mail inserita fa parte della lista scrivo
} else {
    alert("Complimenti, abbiamo verificato la tua mail e d'ora in poi sei ufficialmente dei nostri.");
}