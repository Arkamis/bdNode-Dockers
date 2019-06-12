const express = require('express');
const router = express.Router();
const fs = require('fs');
const Trabajadores = require('../models/trabajadores');
const Asignacion = require('../models/asignaciones');
const path = require('path');

router.get('/upAllData', async (req, res) => {
   var arrayOfData =  fs.readFileSync(path.join(__dirname, '../data/insert-many-trabajadores.json'));
   arrayOfData = JSON.parse(arrayOfData);
   await Trabajadores.insertMany(arrayOfData)
    .then(doc => {
       console.log(doc);
       res.status(200).send(doc);
   }).catch(err => {
       
       res.status(500).json({
           respuesta: "Error has occured",
           message: err.message
       })
   })
});

router.get('/updateB', async (req, res) => {
    var arrayOfData =  fs.readFileSync(path.join(__dirname, '../data/insert-many-asignaciones.json'));
    arrayOfData = JSON.parse(arrayOfData);

    await Asignacion.insertMany(arrayOfData)
     .then(doc => {
        console.log(doc);
        res.status(200).send(doc);
    }).catch(err => {
        
        res.status(500).json({
            respuesta: "Error has occured",
            message: err.message
        })
    })
});


module.exports = router;