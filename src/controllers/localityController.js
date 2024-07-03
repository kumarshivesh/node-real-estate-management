const Locality = require('../models/localityModel');

const getAllLocalities = async (req, res) => {
    try {
        const result = await Locality.getAll();
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getAllLocalities,
};
