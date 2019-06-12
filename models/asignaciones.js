const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

var asignacionSchema = new mongoose.Schema({
    _id: {
        type: ObjectId,
    },
    trabajador:{
        id: Number,
        nombre: String
    },
    fecha_inicio: {
        type: Date,
        required: true
    },
    num_dias: {
        type: Number,
        min: 1,
        required: true
    },
    edificio:{
        direccion: {
            type: String,
        },
        tipo: String,
        nivel_calidad:{
            type: Number,
            min:1,
            max: 3
        },
        categoria: Number
    }
   
});

var Asignacion = mongoose.model('Asignacion', asignacionSchema);
module.exports = Asignacion;

asignacionSchema.methods.insertManyAsign = async dataArray => {
    var Asignaciones = await Asignacion.insertMany({dataArray});

    return Asignacion;
}
