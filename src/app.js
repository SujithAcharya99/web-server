const path = require('path')
const express = require('express')

//defines paths for expresss config
pubilDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../views_1')
const app = express()

//sepup handel bar engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

//Setup static directory to server
app.use(express.static(pubilDirectoryPath))

app.get('', (req, res) => {
    
    res.render('index',{
        title : 'Weather-App',
        name: 'Sujith s'
    })
 
 })

 app.get('/about', (req, res) => {
    res.render('about',{
        title : 'About Me',
        name : 'Sujith S'
    })
})

app.get('/help', (req, res) => {
    res.render('help',{
        helptetx : 'Help Page'
    })
})


app.get('/weather', (req, res) => {
    res.send({
        forecate: 'clear',
        location : 'mangalore' 
    })
})


app.listen(3000, () => {
    console.log('server is runing.... on port : 3000')
})
