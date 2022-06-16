const mongoose = require('mongoose');
const {Schema}= mongoose;
const empleadoSchema = new Schema({

    nombre : {type:String,required:true},
    apellido :  {type:String,required:true},
    email :  {type:String,required:true},
    dependencia :  {type:String,required:true},
    legajo :  {type:String,required:true},
    participante :  {type:String,required:true}, 

})
module.exports = mongoose.models.Empleado || mongoose.model('Empleado',empleadoSchema)