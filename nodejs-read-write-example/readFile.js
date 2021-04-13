/**
 * 1. Läs in från terminalen vilken fil vi vill läsa ifrån
 * 2. Läs från filen om den finns
 * 3. Om filen finns, skriv ut innehållet från filen i terminalen
 * 4. Om filen inte finns, skriv ut felmeddelande
 */

const fs = require('fs');

function read(name) {
  fs.readFile(name, 'utf8', (error, content) => {
    if (content) {
      console.log('Innehåll i', name);
      console.log('----------------');
      console.log(content);
    } else {
      console.log('Filen kunde inte hittas');
    }
    process.exit();
  });
}

console.log('Vilken fil vill du läsa ifrån? (filnamn)');
process.stdin.once('data', (input) => {
  //Input kommer som bytes så vi gör om det till en sträng för att kunna läsa
  const fileName = input.toString().trim();
  console.log('Du vill läsa ifrån filen:', fileName);
  read(fileName);
});