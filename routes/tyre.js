const express = require('express');
const router = express.Router();
const Tyre = require('../models/tyreModel');
const expressValidator = require('express-validator');
router.use(expressValidator());


router.get('/tyre', (req, res) => {
    res.render('tyre');
});

router.post('/tyre', (req, res) => {
    const tyre = req.body.tyre;
    const tyresize = req.body.tyresize;
    const carmodel = req.body.carmodel;
    const tyrepressure = req.body.tyrepressure;
    const puncture = req.body.puncture;
    const valves = req.body.valves;
    const date = req.body.date;

    let errors = req.validationErrors();
    if(errors){
        res.render('tyre');
    }

    else{

        let newTyre = new Tyre({
            tyre:tyre,
            tyresize: tyresize,
            carmodel: carmodel,
            tyrepressure: tyrepressure,
            puncture: puncture,
            valves: valves,
            date: date

        });

        newTyre.save((err) => {
            if(err){
                console.error(err);
                return;
            }

            else{
                res.redirect('/home')
            }
        });
    }
});

module.exports = router;