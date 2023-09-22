const express = require('express');
const app = express();
const port = 3000;

const client = require('./database/pg/getClient');

const home = require('./routers/home');
const requestToApi = require('./routers/requestToApi');

const bat_inr = require('./routers/bat-inr');
const btc_inr = require('./routers/btc-inr');
const eos_inr = require('./routers/eos-inr');
const eth_inr = require('./routers/eth-inr');
const nuls_inr = require('./routers/nuls-inr');
const req_inr = require('./routers/req-inr');
const trx_inr = require('./routers/trx-inr');
const xrp_inr = require('./routers/xrp-inr');
const zil_inr = require('./routers/zil-inr');
const zrx_inr = require('./routers/zrx-inr');

app.use(express.static('public'));
app.use(express.static('img'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');

app.use(home);
app.use(requestToApi);

app.use(bat_inr);
app.use(btc_inr);
app.use(eos_inr);
app.use(eth_inr);
app.use(nuls_inr);
app.use(req_inr);
app.use(trx_inr);
app.use(xrp_inr);
app.use(zil_inr);
app.use(zrx_inr);

app.listen(port, (err) => {
    if (err) { console.log(`server is not running...`); }
    else { console.log(`server is running at http://localhost:${port}`); }
});

client.connect((err) => {
    if (err) { console.log('postgresql db not connected...'); }
    else { console.log('postgresql db connected...'); }
});