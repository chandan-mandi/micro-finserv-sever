const mongoose = require('mongoose')
const dotenv = require('dotenv').config();
const color = require('colors')


const app = require('./app');

// database connection
mongoose.connect(process.env.DATABASE_SERVER).then(() => {
    console.log(`Micro-Finserv Database connection is successful.`.yellow.bold);
})

const port = process.env.PORT || 8009;

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`)
})