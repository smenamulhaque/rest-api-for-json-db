

const express = require(`express`);
const dotenv = require(`dotenv`); 
const colors = require(`colors`); 
const path = require(`path`);
// const expressLaouts = require('express-ejs-layouts');




// invironment variable
dotenv.config();
const PORT = process.env.PORT || 4000;

// init express
const app = express();

// inite jason and form data
app.use(express.json());
app.use(express.urlencoded({ extended : false }));


//ejs init
app.set("view engine", "ejs");
// app.use(expressLaouts);
// app.set('layout', 'layouts/app');

// static folder
app.use(express.static(`public`));

// //route
// app.use('/user', studentroute)


// server listen
app.listen(PORT, () => {

   console.log(`server is runnig on port ${PORT}`.bgGreen.black);

});



