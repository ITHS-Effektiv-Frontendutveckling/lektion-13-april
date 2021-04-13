//Importera vår listmodul
const list = require('./list');

//Anropar funktion i list.js
list.addToList(1);
list.addToList(2);

//Anropar funktion i list.js
console.log('List:', list.getList());