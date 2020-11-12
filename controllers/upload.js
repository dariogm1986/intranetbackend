const {response} = require('express');

const fileUpload = (req, res = response) => {

    const tipo = req.params.tipo;
    const id = req.params.id;

    const tiposValidos = ['usuarios', 'articulos'];
    if (!tiposValidos.includes(tipo)){
        return res.status(400).json({
            ok:false,
            msg:'El tipo no es un usuario ni un articulo'
        });
    }

    res.json({
        ok:true,
        msg:'Subir Archivo'
    })

}

module.exports = {
    fileUpload
}