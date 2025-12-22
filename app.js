// const {name,add} = require('./utils.js');
// const getNotes = require('./notes.js')
// const vali = require('validator')


// console.log(name);

// console.log(add(5, 3))

// const msg = getNotes()

// console.log(msg)

// console.log("just checking email " + vali.isEmail('imeth128@gmail.com'))

const chalk = require('chalk')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

console.log(chalk.green.italic.bgCyan('Sucesss'))

console.log('Raw argv:', process.argv)
console.log('Parsed argv:', yargs(hideBin(process.argv)).argv)


