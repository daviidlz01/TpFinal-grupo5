const mongoose = require('mongoose');
const empleado = require('./empleado');
const recursos = require('./recursos');
const {Schema}= mongoose;
const reunionSchema = new Schema({

    fecha : {type:Date,required:true},
    horaInicio : {type:Date,required:true},
    horaFin :  {type:Date,required:true},
    oficina :  {type:String,required:true},
    estado :  {type:String,required:true},
    recursos :  {type:[Schema.Types.ObjectId], ref:recursos,required:true}, //agregar array//
    participante :  {type:[Schema.Types.ObjectId], ref:empleado,required:true} //agregar array//

})
module.exports = mongoose.models.Reunion || mongoose.model('Reunion',reunionSchema)