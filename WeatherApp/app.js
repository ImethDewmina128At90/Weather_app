const request = require('request')

const URL = 'https://api.weatherstack.com/current?access_key=c1bf736e89dec5bbd419016db06f3479&query=7.0933385,2079.993689&units=m'


request({ url: URL,json:true }, (error,response) => {


    //resonpose.body.error you can add that in to error 
    if(error){
        console.log('unabale to connect to weather sevice')

    }else{

    console.log('this is temp right now ' + response.body.current.temperature+ "C "  + 'but  feels like '+response.body.current.feelslike+ "C" )
}
})

