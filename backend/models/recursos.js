const mongoose = require('mongoose');
const { Schema } = mongoose;
const recursosSchema = new Schema({

    nombre: { type: String, required: true },
    tipoRecurso: { type: Boolean, required: true },

})
module.exports = mongoose.models.Recursos || mongoose.model('Recursos', recursosSchema)