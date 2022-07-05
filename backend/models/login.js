const mongoose = require('mongoose');
const empleado = require('./empleado');
const {Schema}= mongoose;
const loginSchema = new Schema({
    usuario : {type:String,required:true},
    password : {type:String,required:true},
    admin:{type:Boolean,required:true},
    empleado : {type:Schema.Types.ObjectId,ref:empleado,required:true}
})


module.exports = mongoose.models.Login || mongoose.model('Login',loginSchema)