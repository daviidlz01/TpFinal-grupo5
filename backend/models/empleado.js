const mongoose = require('mongoose');
const notificacion = require('./notificacion');
const {Schema}= mongoose;
const empleadoSchema = new Schema({

    nombre : {type:String,required:true},
    apellido :  {type:String,required:true},
    email :  {type:String,required:true},
    dependencia :  {type:String,required:true},//puede ser otra clase 
    legajo :  {type:String,required:true},
    leido: {type:Boolean,required:true}


})
module.exports = mongoose.models.Empleado || mongoose.model('Empleado',empleadoSchema)



