const mongoose = require('mongoose');
const notificacion = require('./notificacion');
const Dependencia = require('./dependencia');
const reunion = require('./reunion');
const {Schema}= mongoose;
const empleadoSchema = new Schema({
    nombre : {type:String,required:true},
    apellido :  {type:String,required:true},
    email :  {type:String,required:true},
    dependencia:{type:String,required:true},
    legajo : {type:String,required:true},
    reuniones:[{type: Schema.Types.ObjectId,ref: reunion}]
})
module.exports = mongoose.models.Empleado || mongoose.model('Empleado',empleadoSchema)



