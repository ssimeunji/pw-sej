var push = require('web-push');

let vapidKeys = {
	publicKey: 'BIZTkCSCNNoMIcJaGPnrz32nMWULJ7rCOs7mJh1EIcs7H8WFILqlwuBsibesh5TGBwyVTDZliuXJLO7PMK-ppiI',
	privateKey: 'WTqG7lM9Vc-gMwLN4yjPHnrbbWUZZqVXY4ZyvjflizA'
};

push.setVapidDetails('mailto:ssimeunji24@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/eQr427TlMts:APA91bEgObfwdPJAZjSzYOZFWBYvZVUaeAAA5pRJKfe8SW7isdlOg_Ux_2heCSLPtr4lJ2POJSLuEXpox7h2DUJF5UruO6Am7jlWDCRd0_pG4fJO4fNsGL2-_r7RuoHhNewRM3RTk-pc","expirationTime":null,"keys":{"p256dh":"BBZHFxNMb75ex9jo9BAxkeS0L3HfHH9ngaRV40TXJAW7sDPEUiuAZKDVsOzbGWhEF_bRrtpt9tZSdV0Xk34N570","auth":"Yi2tQWAldFnP59IF6M2Vfw"}};

push.sendNotification(sub, 'test message');