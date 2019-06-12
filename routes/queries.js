const express = require('express');

const Trabajadores = require('../models/trabajadores');
const Asignacion = require('../models/asignaciones');
const router = express.Router();

// Listado de cantidad de trabajadores,
// Listado de trabajadores que son electricistas,
// Listado de distintos oficios de trabajadores,
// Listado de trabajadores que tienen asignaciones en noviembre,
// Listado del trabajador 1311 con sus respectivas asignaciones.

router.get('/trabajadores', async (req, res) => {

    await Trabajadores.count()
      .then(doc => {
        res.status(200).json({
            message: "Success",
            Total: doc
        });
      })
      .catch(err => {
        res.status(500).json({
            message: "Error has occured",
            error: err.message
        });
      });
});
router.get('/asignaciones/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    var usersProjection = { 
        __v: false,
        _id: false,
        'trabajador.id': false
    };

    await Asignacion.find({'trabajador.id': id}, usersProjection)
      .then(doc => {
        res.status(200).json({
            message: "Success",
            InfoData: doc
        });
      })
      .catch(err => {
        res.status(500).json({
            message: "Error has occured",
            error: err.message
        });
      });
});

router.get('/trabajadores/oficios/:type', async (req, res) => {
    const query = req.params.type;
    await Trabajadores.find( { oficio: query })
      .then(doc => {
          if(doc.length > 0)
          {
            res.status(200).json({
                message: "Success",
                docs: doc
            });
          }
      })
      .catch(err => {
        res.status(500).json({
            message: "Error has occured",
            error: err.message
        });
      });
});


router.get('/trabajadores/oficios', async (req, res) => {

    await Trabajadores.distinct("oficio")
      .then(doc => {
        res.status(200).json({
            message: "Success",
            oficios: doc
        });
      })
      .catch(err => {
        res.status(500).json({
            message: "Error has occured",
            error: err.message
        });
      });
});

router.get('/asignaciones/fecha/:date', async (req, res) => {
    const query = parseInt(req.params.date);
    await Asignacion.aggregate([
        {$addFields: {  "month" : {$month: '$fecha_inicio'}}},
        {$match: { month: query}}
      ])
      .then(doc => {
          if(doc.length > 0)
          {
            res.status(200).json({
                message: "Success",
                docs: doc
            });
          }
      })
      .catch(err => {
        res.status(500).json({
            message: "Error has occured",
            error: err.message
        });
      });
});
module.exports = router;