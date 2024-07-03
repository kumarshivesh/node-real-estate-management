require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const propertyRoutes = require('./routes/propertyRoutes');
const localityRoutes = require('./routes/localityRoutes');
const db = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/properties', propertyRoutes);
app.use('/api/localities', localityRoutes);

db.connect()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => console.error('Database connection error:', err));
