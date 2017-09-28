'use strict';
var mg = require('mailgun-js')({
		apiKey: process.env.MAILGUN_API_KEY || 'YOUR_API_KEY',
		domain: process.env.MAILGUN_DOMAIN || 'DOMAIN_NAME'
	});

exports.sendEmail = function(event, context, callback){
	mg.messages().send({
		from: 'mohamed.labouardy@gmail.com',
		to: 'mohamed@labouardy.com',
		subject: 'Hello',
		text: 'Sent from lambda on a defined schedule'
	}, function(err, body){
		callback(err, body)
	})	
}
