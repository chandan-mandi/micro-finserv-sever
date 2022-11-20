const Account = require("../models/account");
const User = require("../models/user");
const { createUserService } = require("../services/user.service");

exports.getUsers = async (req, res, next) => {
    // console.log('query: ', req.query.fields)
    const queries = {};
    if(req.query.fields){
        const fields=req.query.fields.split(',').join(' ')
        queries.fields=fields
        console.log(fields);
     }
    try {
        console.log('hit get user')
        const users = await User.find({})
        console.log('find user', users)
        // .select(req.query)
        res.json({
            status: "success",
            data: users
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Can't get the data",
            error: error.message
        })
    }
}

exports.createUser = async (req, res, next) => {
    try {
        const user = await createUserService(req.body);
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