const Property = require('../models/propertyModel');
const Locality = require('../models/localityModel');

const addNewProperty = async (req, res) => {
    const { property_name, locality, owner_name } = req.body;
    try {
        const locality_id = await Locality.findOrCreate(locality);
        const result = await Property.add(property_name, locality_id, owner_name);
        res.json({ message: 'Property added successfully', property_id: result.rows[0].property_id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const fetchAllProperties = async (req, res) => {
    const { locality_id } = req.query;
    try {
        const result = await Property.getAllByLocality(locality_id);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updatePropertyDetails = async (req, res) => {
    const { property_id, locality_id, owner_name } = req.body;
    try {
        await Property.update(property_id, locality_id, owner_name);
        res.json({ message: 'Property updated successfully', details: { property_id, locality_id, owner_name } });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deletePropertyRecord = async (req, res) => {
    const { property_id } = req.body;
    try {
        await Property.delete(property_id);
        res.json({ message: 'Property deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    addNewProperty,
    fetchAllProperties,
    updatePropertyDetails,
    deletePropertyRecord,
};
