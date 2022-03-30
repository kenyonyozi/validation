const mongoose = require('mongoose');
const tyreSchema = mongoose.Schema({
    tyre: {
        type: String
    },

    tyresize: {
        type: String
    },

    carmodel:{
        type: String
    },

    tyrepressure:{
        type: Number
    }, 

    puncture:{
        type: Number
    },

    valves: {
        type: Number
    },

    date: {
        type: String
    }

});

module.exports = mongoose.model('Tyre', tyreSchema);