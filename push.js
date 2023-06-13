var push = require('web-push');

let vapidKeys = {
	publicKey: 'BIZTkCSCNNoMIcJaGPnrz32nMWULJ7rCOs7mJh1EIcs7H8WFILqlwuBsibesh5TGBwyVTDZliuXJLO7PMK-ppiI',
	privateKey: 'WTqG7lM9Vc-gMwLN4yjPHnrbbWUZZqVXY4ZyvjflizA'
};

push.setVapidDetails('mailto:ssimeunji24@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/cv6Tjztgl4Q:APA91bGEZaSjkjurkIqeAtDaBYUKUee1DpB-HSTyemV8ypTZ1hTCvwt7ivlj8mvpEFifIJJ90TePQmHdFKECaFVD5vdjuj84YSHEQSmfABZkEuDnQPn7swvai_yXCJI7bfkIaachcysD","expirationTime":null,"keys":{"p256dh":"BNI_sY5EadiQjPhjewn6mKs6_ioXQvrOF0CgxGpWbH-C4G8I6GVKgiR8aeIj2LUw68NZx6ztTYiaV186KdNiFvg","auth":"jMfeOBDxr5HjKiCbPQePDA"}};

push.sendNotification(sub, 'test message');