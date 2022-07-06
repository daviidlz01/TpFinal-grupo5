const mongoose = require('mongoose');
const {Schema}= mongoose;
empleado = require('./empleado')
const notificacionSchema = new Schema({

    mensaje : {type:String,required:true},
    usuario : [{type: Schema.Types.ObjectId, ref: empleado}]  

})
module.exports = mongoose.models.Notificacion || mongoose.model('Notificacion',notificacionSchema)