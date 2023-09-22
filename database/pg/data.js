const client = require('./getClient');

const get = (name, callback) => {
    client
        .query(`SELECT * FROM TICKERS WHERE NAME = '${name}' ORDER BY ID DESC LIMIT 5`)
        .then(data => callback(null, data.rows))
        .catch(err => callback(err.stack, null));
};

const set = (data, callback) => {
    const { name, last, buy, sell, volume, base_unit } = data;

    client
        .query(`INSERT INTO TICKERS(NAME, LAST, BUY, SELL, VOLUME, BASE_UNIT) 
        VALUES('${name}', '${last}', '${buy}', '${sell}', '${volume}', '${base_unit}')`)
        .then(data => callback(null, 'sucessfully inserted...'))
        .catch(err => callback(err.stack, null));
};

module.exports = { get, set };