const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const expressValidator = require('express-validator');
const passport = require('passport');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
  });

  const cors = require('cors')



  

const config = require('./config/database');
// const database = require('./config/database');
const loginPage = require('./routes/loginPage');
const vehicleRegister = require('./routes/vehicleRegist');
const userRegister = require('./routes/register');
const UserRegister = require('./models/userRegist_model');
const homepage = require('./routes/homepage');
const batteryRoute = require('./routes/battery');
const Battery = require('./models/batteryModel');
const tyreRouter = require('./routes/tyre');


mongoose.connect(config.database);
const db = mongoose.connection;

//Checking connection
const application = express();

db.once('open', () => {
    console.log('Successfully connected to the Database');
});

db.on('error', (err) => {
    console.error(err);
});

//Setting the view engine
application.engine('pug', require('pug').__express);
application.set('view engine', 'pug');
application.set('views', path.join(__dirname, 'views') );

//Express session middleware
// application.use(expressSession({
//     secret: 'keyboard cat',
//     resave: true,
//     saveUninitialized: true
//   }));

//Password configuration
// require('./config/passport')(passport);

// application.use(passport.initialize());
// application.use(passport.session());
// application.get('*', (req, res, next) => {
//     res.locals.user = req.user || null;
//     next();
// });
  

//Body parser middle-ware section
application.use(express.urlencoded({extended:false}));
application.use(express.json());
application.use(express.static(path.join(__dirname, "public")));


//These are login methods
application.use(expressSession);
application.use(passport.initialize()); 
application.use(passport.session()); 
application.use(cors());

passport.use(UserRegister.createStrategy());
passport.serializeUser(UserRegister.serializeUser()); //This generates a serial number to the user who has logged in
passport.deserializeUser(UserRegister.deserializeUser()); //This terminates the serial number after user logs out



//Express message middleware called flash
application.use(require('connect-flash')());
application.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});




//Routes section
application.use('/', loginPage);
application.use('/', vehicleRegister);
application.use('/', userRegister);
application.use('/', homepage);
application.use('/', batteryRoute);
application.use('/', tyreRouter);
// application.get('/', () => {
//     res.render('message', {message: req.flash('Sucessfully submitted')});
// })
// application.use('/vehicleRegister', vehicleRegister);
//application.use('/register', userRegister);

//Check listening now

application.get('*', (req, res) => {
    res.status(404).send('This is an invalid URL')
  }); //Thss is a message just incase a user hits unexistent router instead of crushing

  
application.listen(4000, () => {
    console.log('Listening at port 4000');
});

