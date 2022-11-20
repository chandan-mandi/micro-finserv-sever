const Investor = require("../models/investor")

exports.createInvestorService = async(data) => {
    const investor = await Investor.create(data);
    return investor;
}