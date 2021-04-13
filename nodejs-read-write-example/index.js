//fs är en inbyggd modul i Node.js men behöver importeras för att användas
const fs = require('fs');

//När man läser filen får man det som en sträng
fs.readFile('name.txt', 'utf8', (error, content) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Mitt namn är', content);
  }
});

fs.readFile('index.html', 'utf8', (error, content) => {
  console.log('---------------');
  console.log(content);
});

const greeting = 'Hello!';
fs.writeFile('greeting.txt', greeting, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('File saved!');
  }
});

//Öppnar vi en ström till textfilen OscarWilde.txt
const writeStream = fs.createWriteStream('OscarWilde.txt');

//Skriver till textfilen OscarWilde.txt 5 gånger
for(let i = 0; i < 5; i++) {
  writeStream.write('You can never be overdressed or overeducated.\n' + i);
}

//Stänger "strömmen till OscarWilde.txt"
writeStream.end();