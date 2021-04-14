const fs = require('fs');

fs.readFile('index.html', 'utf8', (error, content) => {
  console.log('index.html\n', content);
});