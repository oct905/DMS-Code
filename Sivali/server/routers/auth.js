const express = require('express');
const authController = require('../controllers/authController');
const authRouter = express.Router();

authRouter.post('/client/login', authController.registerClient)
authRouter.post('/client/register   ', authController.loginClient)

module.exports = authRouter;