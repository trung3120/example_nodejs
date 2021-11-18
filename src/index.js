const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const jsonwebtoken = require("jsonwebtoken");
const session = require('express-session');
const bodyParser = require('body-parser');

const route = require('./routes');

const app = express();
const port = 4000;

// Use static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(
    bodyParser.urlencoded({ 
        extended: true,
    }),
);
app.use(bodyParser.json());


app.engine('hbs', engine({ 
    extname: '.hbs' 
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})