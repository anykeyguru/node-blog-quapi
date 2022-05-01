const express = require('express');
const { notFoundRoute } = require('../controllers/none-controllers')
const router = express.Router();

router.get({}, notFoundRoute);

module.exports = router;