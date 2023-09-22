const data = require('../database/pg/data');

const get = (req, res) => {
    data.get('XRP/INR', (err, data) => {
        if(err) { res.status(err.status).send(err.message); }
        else { res.status(200).send(data); }
    });
};

module.exports = { get };