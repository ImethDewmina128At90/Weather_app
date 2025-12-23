// const {name,add} = require('./utils.js');
// const getNotes = require('./notes.js')
// const vali = require('validator')


// console.log(name);

// console.log(add(5, 3))

// const msg = getNotes()

// console.log(msg)

// console.log("just checking email " + vali.isEmail('imeth128@gmail.com'))

const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js') 
// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title :{ 
            describe : 'note title',
            demandOption :'true',
            type : 'string'

    },
       body:{
        describe : 'note body',
        demandOption:true,
        type :'string'
       }
    },
    handler: function (argv) {

        console.log('Adding a new note!')
        console.log('title'+ " " + argv.title)
        console.log('body '+" " + argv.body)
        notes.addnotes(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type :'string',
        }
    },
    handler: function (argv) {
        notes.removenotes(argv.title)
        
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log('Listing out all notes')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note')
    }
})


yargs.parse()

