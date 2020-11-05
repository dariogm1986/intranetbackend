const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    role: {
        type: String,
        required: true,
        default: "USER_ROLE"
    }
});

//Para que no me muestre el password cuando devuelvo el Usuario
UsuarioSchema.method('toJSON', function(){
    const { password, ...object } = this.toObject();
    return object;
});

module.exports = model('Usuario', UsuarioSchema);