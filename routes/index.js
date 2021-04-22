const express = require('express');
const postsController = require('../controllers/postsController');
const router = express.Router();

/* GET home page. */
router.get('/', postsController.index);

module.exports = router;
