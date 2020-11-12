/*
    Path: '/api/articulos'
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { getArticulos, crearArticulos, actualizarArticulos, borrarArticulos } = require('../controllers/articulos');

const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.get('/', validarJWT, getArticulos);

router.post('/', 
    [
        validarJWT,
        check('titulo', 'El titulo del articulo es obligatorio').not().isEmpty(),
        check('texto', 'El texto del articulo es obligatorio').not().isEmpty(),
        validarCampos
    ],
    crearArticulos
);

router.put('/:id', 
    [
        validarJWT,
        check('titulo', 'El titulo del articulo es obligatorio').not().isEmpty(),
        check('texto', 'El texto del articulo es obligatorio').not().isEmpty(),
        validarCampos
    ],
    actualizarArticulos
 );

 router.delete('/:id', validarJWT,borrarArticulos);


module.exports = router;