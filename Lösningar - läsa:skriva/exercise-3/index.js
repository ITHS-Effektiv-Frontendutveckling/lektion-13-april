const fs = require('fs');

fs.readFile('style.css', 'utf8', (error, content) => {
  const contentAsArray = content.split('#');
  console.log('Antal id:', contentAsArray.length - 1); // -1 för att index 0 i arrayen är tom.
});