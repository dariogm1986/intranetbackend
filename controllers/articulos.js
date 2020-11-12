const { response } = require('express');

const Articulo = require('../models/articulo');


const getArticulos = async (req, res = response ) => {

    const articulos = await Articulo.find()
                                    .populate('usuario','nombre img');

    res.json({
        ok:true,
        articulos
    });
}

const crearArticulos = async (req, res = response ) => {

    const _id = req._id;
    const articulo = new Articulo({
        usuario:_id,
        ...req.body
    });
    

    try {

        const articuloDB = await articulo.save();

        res.json({
            ok:true,
            articulo: articuloDB
        });
        
    } catch (error) {
        res.status(500).json({
            ok:false,
            msg:'Contacte con el administrador'
        });       
    }

}

const actualizarArticulos = async (req, res = response ) => {

    const _id = req.params.id;

    try {

        const articulo = await Articulo.findById(_id);

        if(!articulo){
            return res.status(404).json({
                ok:false,
                msg:'articulo no encontrado'
            });
        }

        const cambiosArticulos = {
            ...req.body
        }

        const articuloActualizado = await Articulo.findByIdAndUpdate(_id, cambiosArticulos, {new:true});
        
        res.json({
            ok:true,
            articulo: articuloActualizado
        });
    } catch (error) {
        res.status(500).json({
            ok:false,
            msg:'Contacte con el administrador'
        })
        
    }

}

const borrarArticulos = async (req, res = response ) => {

    const _id = req.params.id;

    try {

        const articulo = await Articulo.findById(_id);

        if(!articulo){
            return res.status(404).json({
                ok:false,
                msg:'articulo no encontrado'
            });
        }

        await Articulo.findByIdAndDelete(_id);
        
        res.json({
            ok:true,
            msg:'Hospital Eliminado'
        });
    } catch (error) {
        res.status(500).json({
            ok:false,
            msg:'Contacte con el administrador'
        })
        
    }
}


module.exports = {
    getArticulos,
    crearArticulos,
    actualizarArticulos,
    borrarArticulos
}