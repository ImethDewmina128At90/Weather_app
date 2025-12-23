const fs = require('fs')

// const dataBufferr = fs.readFileSync('json.json')

// const dataJSON = dataBufferr.toString()

// const data =JSON.parse(dataJSON)

// console.log(data.author)


const dataBufferr = fs.readFileSync('json.json')

const dataJSON = dataBufferr.toString() 

const data_m = JSON.parse(dataJSON)
data_m.age = 23

const userJSON = JSON.stringify(data_m)

fs.writeFileSync('json.json', userJSON)