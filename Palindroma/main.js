/* -----------------------------------------------------------------

Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

----------------------------------------------------------------- */

// this funtion returns an array reversed
function reverseArray(array) {
    const arrayReversed = [];

    for (let i = array.length-1; i >= 0; i--) {
        arrayReversed.push(array[i]);
    }

    return arrayReversed;
}

// this function returns a word reversed
function reverseWord(word) {
    const arrayWord = Array.from(word);
    const arrayWordReversed = reverseArray(arrayWord);
    let wordReversed = "";

    for (let i = 0; i < arrayWordReversed.length; i++){
        wordReversed += arrayWordReversed[i];
    }

    return wordReversed;

}

// this function checks whether the word is palindrome
function palindroma(word) {
    const reversed = reverseWord(word);

    if (word === reversed) {
        return true;
    } else {
        return false;
    }
}

const userWord = prompt('Inserisci una parola:');

if (palindroma(userWord)) {
    console.log(`La parola ${userWord} è palindroma`);
} else {
    console.log(`La parola ${userWord} non è palindroma`);
}


