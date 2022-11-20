const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());

//routes
const investorRoute = require('./routes/investor.route')
const userRoute = require('./routes/user.route')
const accountRoute = require('./routes/account.route');

app.get('/', (req, res) => {
    res.send('Yay! app is working now!');
})

app.use('/api/v1/investor', investorRoute);
app.use('/api/v1/user', userRoute);
app.use('/api/v1/account', accountRoute);



module.exports = app;
