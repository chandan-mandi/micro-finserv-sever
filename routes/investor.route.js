const express = require('express');
const investorController = require('../controllers/investor.controller');
const router = express.Router();

router.route('/')
.get(investorController.getInvestors)
.post(investorController.createInvestor)

module.exports = router;