const {Router} = require('express');
const router = Router();

const { 
    obtenerUsuario
} = require('../controllers/usuarioController');

router.get('/:id', obtenerUsuario);

module.exports = router;