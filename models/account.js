const mongoose = require('mongoose')

const accountSchema = mongoose.Schema({
    principal_amount: {
        type: Number,
        required: true,
    },
    interest_rate: {
        type: Number,
        required: true
    },
    loan_duration: {
        type: Number,
        required: true
    },
    loan_duration_type: {
        type: String,
        required: true
    },
    installments: {

    },
    total_interest: {},
    total_amt_with_interest: {},
    installment_amount: {},
    last_installment: {},
    extra_amount: {},
    user_id: {}

}, {
    timestamps: true
})

const Account = mongoose.model('account', accountSchema);

module.exports = Account;