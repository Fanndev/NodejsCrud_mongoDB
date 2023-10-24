const express = require('express');
const expressLayout = require('express-ejs-layouts');
const app = express();
const mongoose = require('mongoose');

const port = 8000;

mongoose.connect('mongodb://127.0.0.1:27017/db_mahasiswa')
.then(() => {
    console.log('database Has Connected')
}).catch(() => {
    console.log('not Connected')
});


// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// midleware routes
app.use('/api', require('./routes/mahasiswa.routes'));

app.listen(port, () => console.log(`server running on port ${port}`))