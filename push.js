var push = require('web-push');

let vapidKeys = {
	publicKey: 'BIZTkCSCNNoMIcJaGPnrz32nMWULJ7rCOs7mJh1EIcs7H8WFILqlwuBsibesh5TGBwyVTDZliuXJLO7PMK-ppiI',
	privateKey: 'WTqG7lM9Vc-gMwLN4yjPHnrbbWUZZqVXY4ZyvjflizA'
};

push.setVapidDetails('mailto:ssimeunji24@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://web.push.apple.com/QI09j08py8zIOIBM-knvNgGLCjkFsxd45_6H5vvG_MHH-BGCoAfnIe8qYBhQhVY2FMCTsethWXbQlYOafjlvpV4HjG1PqeT0rslmbNX4ig1jyuRPS9wv9o4c2kAmMrz2CwqRniS9R9tdq7N08hpYvJJ-5DuRYLmn7tU2AejTl-A","keys":{"p256dh":"BLEX3bfiH_8ZVoSF0QfqvVlEyvOyymtnGrQEka05R6j-FMpDsDUueR-gskuJp_Z6jkGFOLgmLmFHAi6Axe-TXC0","auth":"YAGj269sNp6110vqJgh_Yg"}};

push.sendNotification(sub, 'test message');