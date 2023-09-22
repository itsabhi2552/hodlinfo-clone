const express = require('express');
const router = express.Router();

const eth_inr = require('../controllers/eth-inr');

router.route('/eth-inr').get(eth_inr.get);

module.exports = router;