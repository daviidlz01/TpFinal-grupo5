const mongoose = require('mongoose');
const {Schema}= mongoose;
const reunionSchema = new Schema({

    fecha : {type:String,required:true},
    hora :  {type:String,required:true},
    horaFin :  {type:String,required:true},
    oficina :  {type:String,required:true},
    estado :  {type:String,required:true},
    recursos :  {type:String,required:true}, //agregar array//
    participante :  {type:String,required:true}, //agregar array//

})
module.exports = mongoose.models.Reunion || mongoose.model('Reunion',reunionSchema)