const express = require('express');

const router = express.Router();


router.use('/category', require('../apis/category.api'));



module.exports = router;