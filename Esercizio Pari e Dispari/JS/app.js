console.log('Pari e Dispari');

// L'utente sceglie tra pari e dispari
const pariDispari = prompt('pari o dispari?');
// console.log(pariDispari);

// L'utente sceglie un numero da 0 a 5 con un prompt
const numeroUtente = parseInt(prompt('Scrivi un numero'));
// console.log(numeroUtente);
// Generiamo un numero random utilizzando una funzione

// Aggiungiamo una funzione
// La funziona dovrà creare un numero random
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

getRandomIntInclusive();

  