//Here we shall define and store schemas where our data is
//Schema is data that describes another data.

const mongoose = require('mongoose');
const registerSchema = mongoose.Schema({

    vehicle: {
        type: String,
        required: true
    },

    numberplate: {
        type: String,
        required: true
    },

    carmodel: {
        type: String,
        required: true
    },

    carcolor: {
        type: String
    },

    drivername: {
        type: String,
        required: true
    },

    drivernin:{
        type: String,

    },

    phonenumber: {
        type: String,
        required: true
    },

    entrydate: {
        type: String,
        required: true
    },

    entrytime:{
        type: String,
        required: true

    },
    parkingtime: {
        type: String,
        require: true
    },

    amount:{
        type: Number,
        required:true
    }
    
 
});

module.exports = mongoose.model('Register', registerSchema );