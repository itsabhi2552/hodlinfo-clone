const express = require('express');
const router = express.Router();

const requestToApi = require('../controllers/requestToApi');

router.route('/requestToApi').get(requestToApi.get);

module.exports = router;