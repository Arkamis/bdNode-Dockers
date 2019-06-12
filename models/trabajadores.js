const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

var trabajoresSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        minlength: 5,
        required: true
    },
    tarifa_hr:{
        type: Number,
        required: true,
        min: 0
    },
    oficio: {
        type: String,
        required: true,
    },
    boss: {id: Number, name: String}
}, {versionKey: false});

var Trabajador = mongoose.model('Trabajador', trabajoresSchema);

module.exports = Trabajador;

trabajoresSchema.statics.contar = async () => {
    var todos = Trabajador.count();
    return workers;
}


     