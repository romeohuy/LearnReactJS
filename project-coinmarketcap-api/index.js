var express = require('express');
var path = require('path');
const CoinMarketCap = require('coinmarketcap-api')

const apiKey = 'b308f16f-a55f-4fdb-89e6-87b1ba8e7225';
const client = new CoinMarketCap(apiKey)
	
var app = express();
app.use(express.static(path.join(__dirname, '/view')));

app.listen(777, function() {
	console.log('started listen port', 777);
	
	client.getTickers().then(console.log).catch(console.error);
	client.getGlobal().then(console.log).catch(console.error);

});