var Elastique = require('../lib/elastique');

var elastique = new Elastique(process.env.ELASTIQUE_API_KEY, process.env.ELASTIQUE_API_SECRET);

elastique.push("test");

elastique.on('success', function(){
	console.log('Push notificiation successfully sent');
});

elastique.on('error', function(err){
	console.error('Error sending push notificiation', err);
});