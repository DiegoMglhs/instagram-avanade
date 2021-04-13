const express = require('express');
const router = express.Router();
const potsController = require('../controllers/postsController');

router.get('/', potsController.index);

router.post('/', potsController.create);

router.put('/:upid', potsController.update);

router.delete('/:delId', potsController.delete);

module.exports = router;