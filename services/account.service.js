const Account = require("../models/account");
const User = require("../models/user");

exports.createAccountService = async(data, userId) => {
    const account = await Account.create(data);
    const result = await User.updateOne(
        { _id: userId }, 
        { $push: { account_no: account._id } }, 
        {
            runValidators: true
        }
    )
    console.log('user final update', result)
    return account;
}

exports.getAccountByIdService = async({id}) => {
    // console.log('ac id:', id)
    const account = await Account.findOne({_id: id})
    return account;
}

exports.updateAccountByIdService = async({id}, newInstallments) => {
    console.log('new inst', newInstallments)
    // console.log('new id', id)
    const updatedAc = await Account.updateOne({_id: id}, {$set: {installments: newInstallments}}, {
        runValidators: true
    })
    return updatedAc;
}