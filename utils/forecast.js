const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url='http://api.weatherstack.com/current?access_key=b169493988acb896a79f649d96166c7e&query='+longitude+',' +latitude+ '&units=f'
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to location services', undefined)
        }
        else if (body.error){
            callback('Unable to find the location', undefined)
        }
        else{
            callback(undefined,
                `${body.current.weather_descriptions[0]}. The weather is ${body.current.temperature} degrees. It feels like ${body.current.feelslike} degrees`)
            }
        })
}


module.exports = forecast