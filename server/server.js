const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bp = require('body-parser');
require('dotenv').config();

const PORT = process.env.PORT || 8080

const app = express();
app.use(cors());
app.use(bp.json());

const Cat = require('./modules/cat');
mongoose.connect(process.env.DATABASE_URL);

app.get('/', (req, res) => {
    res.status(200).json('Hello there!')
});

app.get('/cats', async (req, res) => {
    const allCats = await Cat.find(req.query);
    res.status(200).json(allCats);
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));

