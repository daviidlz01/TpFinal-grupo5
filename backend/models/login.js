const mongoose = require('mongoose');
const empleado = require('./empleado');
const {Schema}= mongoose;
const loginSchema = new Schema({
    usuario : {type:String,required:true},
    password : {type:String,required:true},
    empleado : {type:Schema.type.objectId,ref:empleado,required:true}
})


module.exports = mongoose.models.Login || mongoose.model('Login',loginSchema)