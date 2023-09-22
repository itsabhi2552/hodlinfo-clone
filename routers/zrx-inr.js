const express = require('express');
const router = express.Router();

const zrx_inr = require('../controllers/zrx-inr');

router.route('/zrx-inr').get(zrx_inr.get);

module.exports = router;