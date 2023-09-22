const express = require('express');
const router = express.Router();

const zil_inr = require('../controllers/zil-inr');

router.route('/zil-inr').get(zil_inr.get);

module.exports = router;