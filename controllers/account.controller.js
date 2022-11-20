const Account = require("../models/account");
const { createAccountService, getAccountByIdService, updateAccountByIdService } = require("../services/account.service");

exports.getAccounts = async (req, res, next) => {
    try {
        const account = await Account.find({});
        res.json({
            status: "success",
            data: account
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Can't get the data",
            error: error.message
        })
    }
}

exports.createAccount = async (req, res, next) => {
    const query = req.query;
    console.log('params', query.id)
    try {
        const user = await createAccountService(req.body, query.id);
        res.status(200).json({
            status: "success",
            data: user
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Can't post the data",
            error: error.message
        })
    }
}

exports.getAccountById = async (req, res, next) => {
    const id = req.params;
    try {
        const account = await getAccountByIdService(id);
        
        res.status(200).json({
            status: "success",
            data: account
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Can't get the account data",
            error: error.message
        })
    }
}

exports.updateAccountById = async (req, res, next) => {
    const id = req.params;
    const {pay_amt, pay_date, due_date, remarks, collector} = req.body;
    console.log('pay-amt', pay_amt, pay_date, due_date)

    try {
        const account = await getAccountByIdService(id);
        const updateAc = (account) => {
            if (account) {
                const result = [];
                // console.log('get ac', account.installments)
                for (const installment of account.installments) {
                    if(installment.due_date)
                    if (installment.due_date.includes(due_date)) {
                        console.log(installment.due_date)
                        result.push({ ...installment, 
                            pay_amt: Number(pay_amt),
                            pay_date: pay_date,
                            remarks,
                            collector
                        })
                    }
                    else {
                        result.push(installment)
                    }
                }
                return result;
            }
        }

        const newInstallments = updateAc(account)
        // console.log('upateac:', newInstallments)
        const updatedAc = await updateAccountByIdService(id, newInstallments);
        res.status(200).json({
            status: "success",
            data: updatedAc
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Can't update the account data failed!",
            error: error.message
        })
    }
}