var request = require('request');
var https = require('https');
https.globalAgent.options.secureProtocol = 'SSLv3_method';

var Elastique = function (apiKey, apiSecret) {
	this.serverUrl = 'https://push.elastique.nl/api'
	this.apiKey = apiKey
	this.apiSecret = apiSecret
};

Elastique.prototype.__proto__ = require('events').EventEmitter.prototype;

Elastique.prototype.getAuthorizationHeader = function(){
	b = new Buffer(this.apiKey + ':' + this.apiSecret);
	s = b.toString('base64')
	return "Basic " + s
};

Elastique.prototype.push = function(message){
	_this = this
	pushMessage = {
		audience: 'all',
		notification: {
			alert: message
		}
	}
	request.post({
		url: "" + _this.serverUrl + "/push",
		json: pushMessage,
		headers: {
			'Authorization': _this.getAuthorizationHeader()
		}
	}, function(err, res, body) {
		if (err) _this.emit('error', err)
		else
			if (res.statusCode === 200) _this.emit('success')
			else _this.emit('error', new Error('Elastique:: Push notification not sent', res.statusCode, body))
	});
};

module.exports = Elastique