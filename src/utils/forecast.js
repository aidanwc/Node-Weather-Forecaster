const request = require('request')

const forecast = (latitude, longtitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b3cfb7bf83080f689e4947d6e3791271&query='+latitude +','+longtitude
    request({url, json:true}, (error, {body}) => {
             if (error){
                 callback('Unable to connect to weather service', undefined)
             } else if (body.error){
                 callback('Unable to find location', undefined)
             } else {
                 console.log(body)
                 callback(undefined, 'It is currently '+ body.current.temperature + ' it feels like ' + body.current.feelslike + ' degrees out.' +
                 ' The current humidity is ' + body.current.humidity + '%')
             } 
         }) 
}

module.exports = forecast