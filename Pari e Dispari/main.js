/* -----------------------------------------------------------------

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

----------------------------------------------------------------- */

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function isEven(n) {
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const userChoice = prompt('Scegli tra pari e dispari:');
const userNumber = Number(prompt('Inserisci un numero da 1 a 5: '));
const comNumber = randomNumber(1, 5);
const result = userNumber + comNumber;

console.log(`Hai scelto: ${userChoice}`);
console.log(`Hai inserito il numero: ${userNumber}`);
console.log(`Il numero estratto per il computer è: ${comNumber}`);
console.log(`La somma dei numeri è: ${result}`);

switch (userChoice) {
    case "pari":
        if (isEven(result)) {
            console.log('Hai vinto!');
        } else {
            console.log('Hai perso');
        }
        break;

    case "dispari":
        if (isEven(result)) {
            console.log('Hai perso');
        } else {
            console.log('Hai vinto!');
        }
        break;
    
}

