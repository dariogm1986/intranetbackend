/*
    Path: '/api/upload'
*/

const { Router } = require('express');
const { fileUpload } = require('../controllers/upload');

const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.put('/:tipo/:id', validarJWT, fileUpload);


module.exports = router;