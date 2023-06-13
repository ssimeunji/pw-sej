var push = require('web-push');

let vapidKeys = {
	publicKey: 'BIZTkCSCNNoMIcJaGPnrz32nMWULJ7rCOs7mJh1EIcs7H8WFILqlwuBsibesh5TGBwyVTDZliuXJLO7PMK-ppiI',
	privateKey: 'WTqG7lM9Vc-gMwLN4yjPHnrbbWUZZqVXY4ZyvjflizA'
};

push.setVapidDetails('mailto:ssimeunji24@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/clB0RCCfeDo:APA91bFlLZbsbsIz-F3xhmnaEiZSc9Icnj4lVdI5I6U_aHkQ1pMf7anHGAN9c2y8IykMrtTvZdrJuH3an9LrTcER-5wEwX0ou-PpcVPZsz8J7a6Z_cNzHRZj5F9P2TNl-leejiiq7ix0","expirationTime":null,"keys":{"p256dh":"BCpIsotCi8PksDzFGH1V5tIuNjOQTIYLq9aN28kuhZPjK_h7C_0Cmeh0ZAL6qn_88vByEODBP8k74q2Eib2QlNk","auth":"8elXQPSIYypAWAl68KMSuA"}};

push.sendNotification(sub, 'test message');