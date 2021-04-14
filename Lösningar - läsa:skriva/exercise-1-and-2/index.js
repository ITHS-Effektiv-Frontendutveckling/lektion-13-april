const fs = require('fs');

//Övning 1
const quote = "Why, sometimes I've believed as many as six impossible things before breakfast.";
fs.writeFile('alicequotes.txt', quote, (error) => {
  console.log('Quote saved');
});

//Övning 2
fs.readFile('alicequotes.txt', 'utf8', (error, content) => {
  console.log('Innehåll i alicequotes.txt: ', content);
});