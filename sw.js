self.addEventListener('push', (event) => {

	if (!(self.Notification && self.Notification.permission === "granted")) {
		return;
	}

	const data = event.data?.json() ?? {};
	console.log("push:", data);

	const title = data.title || "Web Push";
	const message = data.body || "Web Push Test";
	const image =
		data.image || "img/iu.png";
	const icon =
		data.icon || "img/cat.png";

	const options = {
		title: title,
		body: message,
		//badge: "https://webpush-react-project.web.app/img/icon.png", //컴퓨터 엣지, 크롬 안나옴, 안드로이드 나옴
		image: image,
		icon: icon,
	};

	event.waitUntil(
		self.registration.showNotification(title, options).then(() => {
			self.clients.matchAll().then((clients) => {
				clients.forEach((client) => {
					client.postMessage({
						type: "pushEvent",
						payload: {
							title: title,
							body: options.body,
							image: options.image,
							icon: options.icon
						},
					});
				});
			});
		})
	);


	// const title = '2023년 6월 20일';

	// var options = {
	// 	body: '오늘은 화요일이당 !!',
	// 	icon: 'images/example.png',
	// 	dir: 'rtl',
	// 	image: 'images/imgExam.jpg',
	// 	vibrate: [100, 50, 100],
	// 	data: {
	// 		dateOfArrival: Date.now(),
	// 		primaryKey: '2'
	// 	},
	// 	actions: [
	// 		{
	// 			action: 'explore', title: 'Check',
	// 			icon: 'images/checkmark.png'
	// 		},
	// 		{
	// 			action: 'close', title: 'Close',
	// 			icon: 'images/xmark.png'
	// 		},
	// 	]
	// };

	// e.waitUntil(
	// 	self.registration.showNotification(title, options)
	// );
});
