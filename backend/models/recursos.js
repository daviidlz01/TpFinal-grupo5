const mongoose = require('mongoose');
const { Schema } = mongoose;
const recursosSchema = new Schema({

    nombre: { type: String, required: true },
    disponible: { type: Boolean, required: true },
    tipoRecurso: { type: String, required: true },
    stock: { type: Number, required: true },

})
module.exports = mongoose.models.Recursos || mongoose.model('Recursos', recursosSchema)