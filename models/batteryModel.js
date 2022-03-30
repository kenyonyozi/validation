const mongoose = require('mongoose');
const batterySchema = mongoose.Schema({
    battery: {
        type:String,
        required: true
    },

    date:{
        type: String,
        required: true
    },

    amount: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Battery', batterySchema);