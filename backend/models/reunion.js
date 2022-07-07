const mongoose = require('mongoose');
const empleado = require('./empleado');
const recursos = require('./recursos');
const {Schema}= mongoose;
const reunionSchema = new Schema({
    titulo:{type:String, required:true},
    caracter:{type:String, required:true},
    fecha: {type:String, required:true},
    horaInicio :{type:String   ,required:true},
    horaFin : {type:String,required:true},
    estado : {type:String,required:true},
    recursos :[{type: Schema.Types.ObjectId,ref: recursos}],
    participantes : [{type: Schema.Types.ObjectId, ref: empleado}]  

})
module.exports = mongoose.models.Reunion || mongoose.model('Reunion',reunionSchema)