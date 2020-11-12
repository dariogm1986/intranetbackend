const { Schema, model } = require('mongoose');

const ArticuloSchema = Schema({
    titulo: {
        type: String,
        required: true
    },
    texto: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    usuario: {
        required:true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
});


module.exports = model('Articulo', ArticuloSchema);