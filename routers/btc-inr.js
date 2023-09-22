const express = require('express');
const router = express.Router();

const btc_inr = require('../controllers/btc-inr');

router.route('/btc-inr').get(btc_inr.get);

module.exports = router;