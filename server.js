// server.js
// set up ======================================================================
// Importamos todo lo necesario
const express = require('express');
const app = express();

const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

const configDB = require('./config/database.js');

// configuramos ===============================================================
mongoose.connect(configDB.url, { // connect to our database
	useMongoClient: true
});
require('./config/passport')(passport); // pass passport for configuration

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// middlewares
// set up our express application
app.use(morgan('dev')); //Para ver los mensajes por consola. Ej GET / 404
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({extended: false})); //false->sin imagenes.

// required for passport
app.use(session({
	secret: 'asdfjkl0987qwer5432poiu',
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
// load our routes and pass in our app and fully configured passport
require('./app/routes.js')(app, passport); 

// static files
app.use('/modules',express.static(path.join(__dirname, 'node_modules')))
app.use(express.static(path.join(__dirname, 'public')));

// launch ======================================================================
app.listen(app.get('port'), () => {
	console.log('Servidor corriendo en el puerto ', app.get('port'));
});
