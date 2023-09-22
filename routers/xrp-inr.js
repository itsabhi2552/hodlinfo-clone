const express = require('express');
const router = express.Router();

const xrp_inr = require('../controllers/xrp-inr');

router.route('/xrp-inr').get(xrp_inr.get);

module.exports = router;