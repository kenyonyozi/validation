const express = require('express');
const router = express.Router();
const passport = require('passport');
// const UserRegister = require('../models/userRegist_model');

router.get('/', (req,res) => {
    res.render('index');
});

router.post('/', passport.authenticate('local', { failureRedirect: '/' }),(req, res) => {
	// console.log("This is the login data", req.body)  prints the user's credentials
	req.session.user = req.user
	res.redirect('/home');
})

//This is the router for processing the data from the login form
// router.post('/', (req, res, next) =>{
//     passport.authenticate('local', {
//         successRedirect:'/vehicleReg', 
//         failureRedirect: '/',
//         // failureFlash: true
//     });

//     // (req, res, next); //Helps fetch data using next
// });

module.exports = router;