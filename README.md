Elastique
=========

http://push.elastique.nl/

## Installation
	$ npm install elastique --save

## Quick Start
```js
var Elastique = require('elastique');
var elastique = new Elastique([yourApiKey], [yourApiSecret]);
elastique.on('success', function(){ 
	console.log('Push notificiation successfully sent'); 
});
elastique.on('error', function(err){ 
	console.error('Error sending push notificiation', err); 
});
elastique.push('your awesome push notificiation');
```

## Example
	$ npm run-script example