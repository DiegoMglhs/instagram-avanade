const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const validarcadastro = require('../middlewares/validarcadastro');

router.get('/', usuariosController.index);

router.post('/',validarcadastro, usuariosController.create);

router.put('/:upid', usuariosController.update);

router.delete('/:delId', usuariosController.delete);

module.exports = router;