// Chiedere all'utente di inserire la sua mail
var mailUtente = prompt("Vuoi scoprire se hai accesso al nostro Vip Club? Inserisci la tua email.");

// Definisco il gruppo di mail selezionate per l'accesso esclusivo al Vip Club.
var verifiedMails = ["ginoamiocuggino@mail.com", "pincopallo@mail.com", "mail@mail.com"];

// Controllo che la mail inserita dall'utente sia nella lista di chi può accedere
for ( var i = 0; i < verifiedMails.length; i++) {
    // Se fa parte della lista scrivo questo    
    if (mailUtente == verifiedMails[i]) {
        alert("Complimenti, abbiamo verificato la tua mail e d'ora in poi sei ufficialmente dei nostri.");
    //   Se invece non fa parte della lista scrivo questo.s  
    } else {
        alert("Ci dispiace ma non potrai mai far parte del nostro gruppo esclusivo.");
    }
}


  
