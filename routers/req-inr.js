const express = require('express');
const router = express.Router();

const req_inr = require('../controllers/req-inr');

router.route('/req-inr').get(req_inr.get);

module.exports = router;