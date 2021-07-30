// Chiedere all'utente di inserire la sua mail
var mailUtente = prompt("Vuoi scoprire se hai accesso al nostro Vip Club? Inserisci la tua email.");

// Definisco il gruppo di mail selezionate per l'accesso esclusivo al Vip Club.
var verifiedMails = ["ginoamiocuggino@mail.com", "pincopallo@mail.com", "mail@mail.com"];

// Controllo se la mail inserita dall'utente fa parte del mio array di mails e solo in quel caso accetto l'entrata dell'utente nel Vip Club
if (mailUtente == verifiedMails[0]) {
    alert("Complimenti, abbiamo verificato la tua mail e d'ora in poi sei ufficialmente dei nostri. Il tuo numero utente è 1");
} else if (mailUtente == verifiedMails[1]) {
    alert("Complimenti, abbiamo verificato la tua mail e d'ora in poi sei ufficialmente dei nostri. Il tuo numero utente è 2");
} else if (mailUtente == verifiedMails[2]) {
    alert("Complimenti, abbiamo verificato la tua mail e d'ora in poi sei ufficialmente dei nostri. Il tuo numero utente è 3");
} else {
    alert("Ci dispiace ma non potrai mai entrare a far parte del nostro Vip Club");
}