const axios = require('axios');
const apiUrl = 'https://api.wazirx.com/api/v2/tickers';

const dbData = require('../database/pg/data');

const get = (req, res) => {
    axios.get(apiUrl)
        .then(response => {
            const data = Object.entries(response.data);

            for (let i = 0; i < 10; i++) {
                dbData.set(data[i][1], (err, data) => {
                    if (err) { console.log(err); }
                    else { console.log(data); }
                });
            }

            res.status(200).send('success');
        })
        .catch(err => { res.status(err.status).send(err.message); });

};

module.exports = { get };