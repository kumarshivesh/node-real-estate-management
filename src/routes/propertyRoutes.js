const express = require('express');
const { addNewProperty, fetchAllProperties, updatePropertyDetails, deletePropertyRecord } = require('../controllers/propertyController');
const router = express.Router();

router.post('/add', addNewProperty);
router.get('/fetch', fetchAllProperties);
router.put('/update', updatePropertyDetails);
router.delete('/delete', deletePropertyRecord);

module.exports = router;
