const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the site. connecting do db')
})

app.listen(PORT, () => {
        console.log('server is listening on  ' + PORT);
    }

)

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('database connected');
});