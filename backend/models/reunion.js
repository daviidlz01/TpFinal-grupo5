const mongoose = require('mongoose');
const empleado = require('./empleado');
const recursos = require('./recursos');
const oficina = require ('./oficina')
const {Schema}= mongoose;
const reunionSchema = new Schema({

    fecha : {type:String,required:true},
    horaInicio : {type:String,required:true},
    horaFin :  {type:String,required:true},
    oficina :  {type:Schema.Types.ObjectId,ref:oficina ,required:true},
    estado :  {type:String,required:true},
    recursos :  {type:[Schema.Types.ObjectId], ref:recursos,required:false}, //agregar array//
    participantes :  {type:[Schema.Types.ObjectId], ref:empleado,required:true} //agregar array//

})
module.exports = mongoose.models.Reunion || mongoose.model('Reunion',reunionSchema)