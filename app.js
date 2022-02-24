const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// const url='http://api.weatherstack.com/current?access_key=b169493988acb896a79f649d96166c7e&query=37.8267,-122.4233&units=f'

// request({ url: url, json: true}, (error, response) => {
//     if(error){
//         console.log('Unable to connect the weather service')
//     }
//     else if(response.body.error){
//         console.log('Unable to find location')
//     }
//     else {
//         console.log(`${response.body.current.weather_descriptions[0]}. The weather is ${response.body.current.temperature} degrees. It feels like ${response.body.current.feelslike} degrees`)
//     }
// })


const address = process.argv[2]
if(!address){
    console.log('Please provide an address')
}
else{
    geocode(address, (error, {latitude, longitude, location} ) => {

        if(error){
            return console.log(error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
          })
    })

}

