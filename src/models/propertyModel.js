const db = require('../config/db');

const Property = {
    add: (property_name, locality_id, owner_name) => {
        return db.query(
            'INSERT INTO properties (property_name, locality_id, owner_name) VALUES ($1, $2, $3) RETURNING property_id',
            [property_name, locality_id, owner_name]
        );
    },
    getAllByLocality: (locality_id) => {
        return db.query(
            'SELECT property_id, property_name, owner_name FROM properties WHERE locality_id = $1',
            [locality_id]
        );
    },
    update: (property_id, locality_id, owner_name) => {
        return db.query(
            'UPDATE properties SET locality_id = $1, owner_name = $2 WHERE property_id = $3',
            [locality_id, owner_name, property_id]
        );
    },
    delete: (property_id) => {
        return db.query('DELETE FROM properties WHERE property_id = $1', [property_id]);
    },
};

module.exports = Property;
