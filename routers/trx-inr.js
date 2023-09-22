const express = require('express');
const router = express.Router();

const trx_inr = require('../controllers/trx-inr');

router.route('/trx-inr').get(trx_inr.get);

module.exports = router;