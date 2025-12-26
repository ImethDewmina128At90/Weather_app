const express = require('express');
const app = express();
const path = require('path');

const publicDirectory =path.join(__dirname,'../public')

app.use(express.static(publicDirectory))

// app.get('',)

// app.get('/', (req, res) => {
//   res.send(`
//     <!DOCTYPE html>
//     <html>
//       <head>
//         <title>Home Page</title>
//       </head>
//       <body>
//         <h1>Hello! Express!</h1>
//       </body>
//     </html>
//   `);
// });

app.get('/help', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Help Page</title>
      </head>
      <body>
        <h1>Hello! Help Page!</h1>
      </body>
    </html>
  `);
});

app.get('/weather', (req, res) => {
  res.send({
    weather: 'snowing'
  });
});
app.get('/help_section', (req, res) => {
  res.send(
    '<h1>help section</h1>');
});



app.listen(3000, () => {
  console.log('server started is on 300');
});