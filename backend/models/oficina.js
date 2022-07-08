const mongoose = require('mongoose');
const {Schema}= mongoose;
const oficinaSchema = new Schema( {

    numero: { type:Number},
    nombre: {type: String , required:true}


})
module.exports = mongoose.models.Oficina || mongoose.model('Oficina',oficinaSchema)