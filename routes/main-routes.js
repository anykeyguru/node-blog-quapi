const express = require('express');
const { getIndex } = require('../controllers/main-controllers')
const router = express.Router();


router.get('/', getIndex);

module.exports = router;