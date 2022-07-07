const mongoose = require('mongoose');
const {Schema} = mongoose;
const EmailSchema = new Schema({
    
    email : {type:String,required:true},
    asunto : {type:String,required:true},
    mensaje : {type:String,required:true}
   
})
module.exports = mongoose.models.Email || mongoose.model('Email', EmailSchema);