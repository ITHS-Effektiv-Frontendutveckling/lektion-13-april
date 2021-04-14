const fs = require('fs')

function writeToFile(fileName, text) {
  fs.writeFile(fileName, text, (error) => {
    console.log(`Text sparad i ${fileName}`);
    process.exit();
  });
}

function getText(fileName) {
  console.log('Vad ska det stå i filen?');
  process.stdin.once('data', (input) => {
    //Input kommer som bytes så vi gör om det till en sträng för att kunna läsa
    const text = input.toString().trim();
    writeToFile(fileName, text)
  });
}

console.log('Vad ska filen heta?');
process.stdin.once('data', (input) => {
  //Input kommer som bytes så vi gör om det till en sträng för att kunna läsa
  const fileName = input.toString().trim();
  getText(fileName);
});
