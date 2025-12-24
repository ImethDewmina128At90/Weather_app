const { default: chalk } = require('chalk')
const fs  = require('fs')

const getNotes = () => {
    return 'your notes'
}


const addnotes = (title, body) => {
    const notes = loadnotes()
    const duplicatenotes = notes.filter((note) => {  
        return note.title === title
    })
    debugger

    if(duplicatenotes.length === 0 ){ 

    notes.push({
        title: title,
        body:body
    })
    savenotes(notes)
    console.log('new note added')  
    } else{                         
        console.log('note title taken!')
    }
    
}

const savenotes = (notes) => {
    const  dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadnotes = () => {
    try{
    const databuffer = fs.readFileSync('notes.json')
    const dataJSON = databuffer.toString()
    return JSON.parse(dataJSON)
    }catch (e){
        return []
    }
}

const readnote = (title)=>{
    const notes = loadnotes()
    const note = notes.find((note) => note.title === title) 

    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }else{
         console.log(chalk.red.inverse('title not found'))
    }

}
const removenotes = (title) => {
    const notes = loadnotes()
    const notestokeep = notes.filter((note) => {
        return note.title !== title
    })
    savenotes(notestokeep)
}


module.exports = { 
    getNotes: getNotes,
    addnotes: addnotes,
    removenotes: removenotes,
    readnote:readnote
}