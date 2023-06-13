var push = require('web-push');

let vapidKeys = {
	publicKey: 'BIZTkCSCNNoMIcJaGPnrz32nMWULJ7rCOs7mJh1EIcs7H8WFILqlwuBsibesh5TGBwyVTDZliuXJLO7PMK-ppiI',
	privateKey: 'WTqG7lM9Vc-gMwLN4yjPHnrbbWUZZqVXY4ZyvjflizA'
};

push.setVapidDetails('mailto:ssimeunji24@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {};

push.sendNotification(sub, 'test message');