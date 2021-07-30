var lancioUtente = Math.floor(Math.random() * 6) + 1;

var lancioComputer = Math.floor(Math.random() * 6) + 1;

alert ("Il risultato del computer è " + lancioComputer);

alert ("Il tuo risultato è " + lancioUtente);

if (lancioUtente > lancioComputer) {
    alert ("Hai vinto!!!");
} else if (lancioUtente == lancioComputer) {
    alert ("Avete pareggiato!!!!");
} else {
    alert ("Hai perso!!!!");
}