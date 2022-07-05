const mongoose = require('mongoose');
const empleado = require('./empleado');
const recursos = require('./recursos');
const {Schema}= mongoose;
const reunionSchema = new Schema({

    horaInicio : {type:Date,required:true},
    horaFin :  {type:Date,required:true},
    oficina :  {type:String,required:true},
    estado :  {type:Boolean,required:true},
    recursos :  {type:[Schema.Types.ObjectId], ref:recursos,required:true},
    participante :  {type:[Schema.Types.ObjectId], ref:empleado,required:true} 

})
module.exports = mongoose.models.Reunion || mongoose.model('Reunion',reunionSchema)