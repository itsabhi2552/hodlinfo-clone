const express = require('express');
const router = express.Router();

const nuls_inr = require('../controllers/nuls-inr');

router.route('/nuls-inr').get(nuls_inr.get);

module.exports = router;