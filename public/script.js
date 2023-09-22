const timer = document.getElementById('timer');
const select = document.getElementById('select');

const speed = 1000;
let seconds = 59;

let endPoint;

function requestToApi() {
    const request = new XMLHttpRequest();
    request.open('GET', '/requestToApi');
    request.send();

    request.addEventListener('load', () => {
        console.log(request.responseText);
    });
}

setInterval(() => {
    if (seconds < 0) {
        seconds = 60;
        requestToApi();
        request();
    }
    timer.innerHTML = seconds--;
}, speed);

function request() {
    const request = new XMLHttpRequest();
    request.open('GET', '/' + endPoint);
    request.send();

    request.addEventListener('load', () => {
        let response = JSON.parse(request.responseText);
        const avg = document.getElementById('avg');

        let res = 0;

        for(let i = 1; i < response.length + 1; i++) {
            const name = document.getElementById('name'+i);
            const last = document.getElementById('last'+i);
            const buy_sell = document.getElementById('buy/sell'+i);
            const volume = document.getElementById('volume'+i);
            const base_unit = document.getElementById('base_unit'+i);

            name.innerHTML = response[i-1].name;
            last.innerHTML = response[i-1].last;
            buy_sell.innerHTML = '₹ ' + response[i-1].buy + ' / ' + '₹ ' + response[i-1].sell;
            volume.innerHTML = response[i-1].volume;
            base_unit.innerHTML = response[i-1].base_unit;

            res += parseFloat(response[i-1].last);
        }

        res = res / response.length;
        res = res.toFixed(2);

        avg.innerHTML = "₹ " + res;
    });
}

function bat_inr() {
    endPoint = 'bat-inr';
    request();
}

function btc_inr() {
    endPoint = 'btc-inr';
    request();
}

function eos_inr() {
    endPoint = 'eos-inr'
    request();
}

function eth_inr() {
    endPoint = 'eth-inr';
    request();
}

function nuls_inr() {
    endPoint = 'nuls-inr';
    request();
}

function req_inr() {
    endPoint = 'req-inr';
    request();
}

function trx_inr() {
    endPoint = 'trx-inr';
    request();
}

function xrp_inr() {
    endPoint = 'xrp-inr';
    request();
}

function zil_inr() {
    endPoint = 'zil-inr';
    request();
}

function zrx_inr() {
    endPoint = 'zrx-inr';
    request();
}

btc_inr();

select.addEventListener('change', () => {
    let value = select.value;
    
    if(value == 1) { btc_inr(); }
    else if(value == 2) { bat_inr(); }
    else if(value == 3) { eos_inr(); }
    else if(value == 4) { eth_inr(); }
    else if(value == 5) { nuls_inr(); }
    else if(value == 6) { req_inr(); }
    else if(value == 7) { trx_inr(); }
    else if(value == 8) { xrp_inr(); }
    else if(value == 9) { zil_inr(); }
    else if(value == 10) { zrx_inr(); }
    else { btc_inr(); }
});