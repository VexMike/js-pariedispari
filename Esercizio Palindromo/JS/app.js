console.log('JS Paliedispari');

// Chiedere all'utente di inserire una parola

let parola = prompt('Inserisci una parola');
// console.log(parola);

// Creare una funzione per capire se la parola inserita è palindroma.

// Diamo il nome alla funzione che andremo ad invocare
function palindroma(text) {

    // Controlliamo con un ciclo for la parola partendo dalla sua metà o dalle sue estremità
    for (let i = 0; i < parola.length / 2; i++) {

        // La parola:
        // SE la prima lettera coinciderà con la prima lettera scritta
        // - allora sarà true
        // ALTRIMENTI sarà false
        if (parola[i] !== parola[parola.length - 1 - i]) {
            // Return false
            return false;
        }
        // Return true
        return true;
    }
}



if (palindroma(parola)) {
    console.log('La parola è Palindroma!');
} else {
    console.log('La parola non è Palindroma');
}
