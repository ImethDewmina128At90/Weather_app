const {name,add} = require('./utils.js');
const getNotes = require('./notes.js')
const vali = require('validator')


console.log(name);


console.log(add(5, 3))

const msg = getNotes()

console.log(msg)

console.log(vali.isEmail('imeth128@gmail.com'))





