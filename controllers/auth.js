const { response } = require('express');
const bcrypt = require('bcryptjs');

const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/jwt');

const login = async (req, res = response)=>{

    const { email, password } = req.body;

    try {
        //verificar email
        const usuarioDB = await Usuario.findOne({email});
        if(!usuarioDB){
            return res.status(404).json({
                ok:false,
                msg:'Usuario o Contrasena incorrecto'
            });
        }

        //verificar contrasena
        const validarPassword = bcrypt.compareSync(password, usuarioDB.password);

        if(!validarPassword){
            return res.status(400).json({
                ok:false,
                msg:'Usuario o contrasena incorrecto'
            });
        }

        //Generar un TOKEN - JWT
        const token = await generarJWT(usuarioDB._id);        

        res.json({
            ok: true,
            token
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado ... ver logs'
        });
    }    

}

module.exports = {
    login,
}