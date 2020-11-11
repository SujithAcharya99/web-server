const request = require('request')

const forecast = (laltitude , longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=6a1b6574ccd23d52015bfd7e5769f897&query=' + laltitude + ',' + longitude + '&units=m'
    //const url = 'http://api.weatherstack.com/current?access_key=6a1b6574ccd23d52015bfd7e5769f897&query=12.871169,%2074.842214&units=m'

  //  request({url: furl, json: true}, (error, response) =>{
    request({url, json: true}, (error, {body} = {}) =>{

        if (error) {
            callback('unable to connect to weather server', undefined )

        } else if(body.error){

            callback('unable to find locaion ....!', undefined)

        } else{

            callback(undefined, body.current.weather_descriptions[0]+'. It is currently '+body.current.temperature+' degrees out . It feels like '+body.current.feelslike + ' degrees out. the chances of rain is :' + body.current.precip + '%')
        }

    })

}



module.exports = forecast