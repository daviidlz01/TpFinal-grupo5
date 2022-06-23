const mongoose = require('mongoose');
const {Schema}= mongoose;
const notificacionSchema = new Schema({

    mensaje : {type:String,required:true},
    usuario : {type:String,required:true}

})
module.exports = mongoose.models.Notificacion || mongoose.model('Notificacion',notificacionSchema)