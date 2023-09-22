const express = require('express');
const router = express.Router();

const eos_inr = require('../controllers/eos-inr');

router.route('/eos-inr').get(eos_inr.get);

module.exports = router;