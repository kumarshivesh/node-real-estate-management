const db = require('../config/db');

const Locality = {
    findOrCreate: (locality_name) => {
        return db.query('SELECT locality_id FROM localities WHERE locality_name = $1', [locality_name])
            .then(result => {
                if (result.rows.length === 0) {
                    return db.query('INSERT INTO localities (locality_name) VALUES ($1) RETURNING locality_id', [locality_name])
                        .then(newLocality => newLocality.rows[0].locality_id);
                } else {
                    return result.rows[0].locality_id;
                }
            });
    },
    getAll: () => {
        return db.query('SELECT locality_id, locality_name FROM localities');
    },
};

module.exports = Locality;
