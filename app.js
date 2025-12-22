const fs = require('fs');

fs.writeFileSync('notes.txt','this file created for node.js practise')

fs.appendFileSync('notes.txt','\nthis is appended text')