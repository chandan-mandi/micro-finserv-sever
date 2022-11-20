const mongoose = require('mongoose')

// schema design
const investorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true 
    },
    contact_no: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
});

const Investor = mongoose.model('Investor', investorSchema);

module.exports = Investor;