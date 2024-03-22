console.log('JS Paliedispari');

// Chiedere all'utente di inserire una parola

let parola = prompt('Inserisci una parola');
// console.log(parola);

// Creare una funzione per capire se la parola inserita è palindroma.

// SE parola è palindroma ALLORA 'Rispondi positivamente'
if (palindroma(parola)) {
    console.log('La parola è Palindroma!');
    // ALTRIMENTI 'Rispondi negativamente'
} else {
    console.log('La parola non è Palindroma');
}

// Diamo il nome alla funzione che andremo ad invocare

// Input: text da controllare se palindromo
// Output: true SE palindromo ALTRIMENTI False
function palindroma(text) {

    let reversWord = ''

    for (let i = text.length -1; i >= 0; i--) {
        console.log(text[i]);
        reversWord += text[i];
        console.log(reversWord)
    }

    if (text === reversWord) {
        return true
    } else {
        return false
    }

}
