const express = require('express');
const morgan = require('morgan');
const layout = require('./views/layout.js');
const { db } = require('./models');
const app = express();

db.authenticate() 
  .then(() => { 
    console.log('connected to the database'); 
})

// Middleware logging incoming requests
app.use(morgan('dev'));

// Middleware serving static files from public folder (name could be changed)
app.use(express.static('public'));

// Middleware parsing request bodies
app.use(express.urlencoded({extended: true}));

// Route GET
app.get('/', (req, res) => {
  const content =  ``;
  const renderTest = layout(content);
  res.send(renderTest);
});

// Start our server
const port = 3000;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

