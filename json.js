const fs = require('fs')

const dataBufferr = fs.readFileSync('json.json')

const dataJSON = dataBufferr.toString()

const data =JSON.parse(dataJSON)

console.log(data.author)