var nome, cognome, colorePreferito;

nome= prompt('Inserisci il nome:')
cognome= prompt('Inserisci il cognome:')
colorePreferito= prompt('Inserisci il tuo colore preferito:')

somma = nome+cognome+colorePreferito+19

console.log(somma);

document.getElementById('password').innerHTML = somma
