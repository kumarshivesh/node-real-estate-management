const express = require('express');
const { getAllLocalities } = require('../controllers/localityController');
const router = express.Router();

router.get('/all', getAllLocalities);

module.exports = router;
