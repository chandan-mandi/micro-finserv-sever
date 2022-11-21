const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const fast2sms = require('fast-two-sms');
const dotenv = require('dotenv').config();
var unirest = require("unirest");

app.use(express.json());
app.use(cors());

//routes
const investorRoute = require('./routes/investor.route')
const userRoute = require('./routes/user.route')
const accountRoute = require('./routes/account.route');

app.get('/', (req, res) => {
    res.send('Yay! app is working now!');
})
app.post('/api/v1/sendMessage', async(req, res) => {

var uniReq = unirest("POST", "https://www.fast2sms.com/dev/bulkV2");

uniReq.headers({
  "authorization": process.env.FAST_TWO_SMS_API_KEY
});

uniReq.form({
//   "sender_id": "TXTIND",
  "message": req.body.message,
  "language": "english",
  "route": "q",
  "numbers": req.body.number,
});

uniReq.end(function (response) {
    if(response.body){
        res.json(response.body);
    }
});
})

app.use('/api/v1/investor', investorRoute);
app.use('/api/v1/user', userRoute);
app.use('/api/v1/account', accountRoute);



module.exports = app;
