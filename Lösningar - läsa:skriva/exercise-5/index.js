const fs = require('fs');

fs.readFile('insults.json', 'utf8', (error, content) => {
  const insultsJSON = JSON.parse(content);
  for (const insult of insultsJSON.insults) {
    console.log('-------');
    console.log(`${insult.insult} - ${insult.play}`)
    console.log('-------');
  }
  console.log('Antal insults:', insultsJSON.insults.length);
});