const express = require('express');
const errorHandler = require('../middlewares/errorHandler');
const authRouter = require('./auth');
const router = express.Router();

router.use(authRouter)
router.use(errorHandler)

module.exports = router;