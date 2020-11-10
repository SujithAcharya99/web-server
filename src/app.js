const path = require('path')
const express = require('express')

//console.log(__dirname)
//console.log(__filename)
//console.log(path.join(__dirname, '../public'))

//defines paths for expresss config
pubilDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../views_1')
const app = express()

//sepup handel bar engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

//Setup static directory to server
app.use(express.static(pubilDirectoryPath))

// app.get('', (req, res) => {
//    // res.send('hello express!')
//     res.send('<h1> welcome to home page </h1>')

// })

app.get('', (req, res) => {
    
    res.render('index',{
        title : 'Weather-App',
        name: 'Sujith s'
    })
 
 })

 app.get('/about', (req, res) =>{
    res.render('about',{
        title : 'About Me',
        name : 'Sujith S'
    })
})

app.get('/help', (req, res) =>{
    res.render('help',{
        helptetx : 'Help Page'
    })
})

// app.get('/help', (req, res) =>{
//     // res.send('help page')
//     // res.send({
//     //     name : 'Sujith',
//     //     age : 22,
//     //     address : 'mangalore'

//     // })
//     res.send([{
//         name:'sujith',
//         age:22
//     },{
//         name :'sanjay',
//         age:22
//     }])
    
// })

// app.get('/about', (req, res) =>{
//     res.send('<h1>About </h1>')
// })


app.get('/weather', (req, res) =>{
    res.send({
        forecate: 'clear',
        location : 'mangalore' 
    })
})




//app.com
//app.com/help
//app.com/about

app.listen(3000, () =>{
    console.log('server is runing.... on port : 3000')
})