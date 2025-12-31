const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=c1bf736e89dec5bbd419016db06f3479&query=45,-75&units=f'

const request = http.request(url, (res) => {
    let data = ''

    res.on('data', (chunk) => {
        data += chunk  // Accumulate the data
    })

    res.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('Error:', error.message)
})

request.end()


