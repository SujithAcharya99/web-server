const path = require('path');
const express = require('express');
const hbs = require('hbs');

//console.log(__dirname)
//console.log(__filename)
//console.log(path.join(__dirname, '../public'))

//defines paths for expresss config
const pubilDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname,'../views_1/views');
const partialsPath = path.join(__dirname,'../views_1/partials')

const app = express();

const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

//sepup handel bar engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath)

//Setup static directory to server
app.use(express.static(pubilDirectoryPath));

// app.get('', (req, res) => {
//    // res.send('hello express!')
//     res.send('<h1> welcome to home page </h1>')

// })

app.get('', (req, res) => {
    
    res.render('index',{
        title : 'Weather-App',
        name: 'Sujith s'
    });
 
 });

 app.get('/about', (req, res) =>{
    res.render('about',{
        title : 'About Me',
        name : 'Sujith S'
    });
});

app.get('/help', (req, res) =>{
    res.render('help',{
        helptetx : 'Help Page',
        title : 'help',
        name : 'Sujith S'
    });
});

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

    if (!req.query.address) {
        return res.send({
        error : 'you must provide a location...!'
    })
    }

    //console.log(req.query.address)

    // res.send({
    //     forecate: 'clear',
    //     location : 'mangalore',
    //     address : req.query.address
    // });

    geocode(req.query.address,(error, {latitude , longitude , location} = {}) => {
        if (error) {
            return res.send({error})
        }
         forecast(latitude, longitude, (error, fdata) => {    
            if (error) {
                return res.send({error})      
            }
        //    console.log('Location Data :', location)
        //     console.log('Weather Data :', fdata)
        res.send({
            forecast : fdata, 
            location,
            address : req.query.address
        })
          }) 
    })


});


app.get('/product', (req, res) =>{

    if (!req.query.search) {
            return res.send({
            error : 'you must provide a search term...!'
        })
    }
    console.log(req.query.search)

    res.send({
        products: [],
        
    });
    
});



app.get('/help/*', (req, res) =>{
    //res.send('Help 404 ERROR PAGE');
    res.render('404',{
        title : '404',
        errorMessage : 'Help Article Not Found',
        name : 'Sujith S'
    });
 });


app.get('*', (req, res) =>{
   //res.send('My 404 ERROR PAGE');
   res.render('404',{
    title : '404',
    name : 'Sujith S',
    errorMessage : 'Page Not Found'
});
   
});

//app.com
//app.com/help
//app.com/about

app.listen(3008, () =>{
    console.log('server is runing.... on port : 3008');
});