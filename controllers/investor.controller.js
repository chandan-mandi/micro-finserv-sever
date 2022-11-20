const Investor = require("../models/investor");
const { createInvestorService } = require("../services/investor.service");

exports.getInvestors = async(req, res, next) => {
    try {
        const investors = await Investor.find({});
        res.json({
            status: "success",
            data: investors
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Can't get the data",
            error: error.message
        })
    }
}

exports.createInvestor = async(req, res, next) => {
    try {
        const investor = await createInvestorService(req.body);
        res.status(200).json({
            status: "success",
            data: investor
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Can't post the data",
            error: error.message
        })
    }
}