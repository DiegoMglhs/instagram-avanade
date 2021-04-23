const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const validarcadastro = require('../middlewares/validarcadastro');

router.get('/', usuariosController.index);

router.get('/login', usuariosController.login);

router.post('/login', usuariosController.auth);

router.get('/registro', usuariosController.registro);
// localhost:3000/usuarios/registro
router.post('/',validarcadastro, usuariosController.create);

router.put('/:upid', usuariosController.update);

router.delete('/:delId', usuariosController.delete);

module.exports = router;