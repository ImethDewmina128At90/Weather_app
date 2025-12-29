const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

// define paths for express config
const publicDirectory = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials')

// Set up static directory
app.set('views', viewsPath);
app.use(express.static(publicDirectory));
hbs.registerPartials(partialsPath)

// Set up view engine and views directory //
app.set('view engine', 'hbs');


// Home route
app.get('/', (req, res) => {
  res.render('index',{
    title:'weatherapp',
    source:'about',
    name:"Imeth dewmina",
  });
});
// about route 
app.get('/about',(req,res) =>{
  res.render('about',{
    name:"Imeth dewmina",
    title:"about me",
  })
})

// help route 

app.get('/help', (req, res) => {
  res.render('help', {
    title:'help page',
    name:"Imeth dewmina",
  });

});

//weather route 
app.get('/weather', (req, res) => {

  if(!req.query.address){
    return res.send({
      error:'you must provide  a address'
    })
  }
  res.send({
    weather: 'snowing',
    name:"Imeth dewmina",
    title:'weatherpage',
    location: req.query.address

  });
});
//products route 
app.get('/products',(req,res)=>{
  if(!req.query.search){
    return res.send({
      error:'you must provide  seasch item',

    })
    console.log(req.query.search)
    res.send({
      products:[]
    })
  }
})
//404 route 

app.use((req, res) => {
  res.status(404).render('404', {
    title: '404',
    name: 'Imeth',
    errorMessage: '404 page not found',
  });
});






app.listen(3000, () => {
  console.log('server started is on 300');
});