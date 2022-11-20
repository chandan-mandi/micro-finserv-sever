const express = require('express');
const accountController = require('../controllers/account.controller');
const router = express.Router();

router.route("/")
.get(accountController.getAccounts)
.post(accountController.createAccount);

router.route("/:id")
.get(accountController.getAccountById)
.patch(accountController.updateAccountById)


module.exports = router;