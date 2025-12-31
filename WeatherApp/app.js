const request = require('request')
const forecast = require('./forecast')
const geocode = require('./geocode')

//variables
const address = process.argv[2]




if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, { longitude, latitude, location } = {}) => {
        if (error) {
            return console.log(error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(location)
            console.log(forecastData)
        })
    })
}
