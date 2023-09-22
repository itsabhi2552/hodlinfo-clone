const express = require('express');
const router = express.Router();

const bat_inr = require('../controllers/bat-inr');

router.route('/bat-inr').get(bat_inr.get);

module.exports = router;