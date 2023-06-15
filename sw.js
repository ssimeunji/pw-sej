self.addEventListener('push', function (e) {
	const title = '2023';

	var options = {
		body: 'This notification was generated from a push!',
		icon: 'images/example.png',
		dir: 'rtl',
		image: 'images/imgExam.jpg',
		vibrate: [100, 50, 100],
		data: {
			dateOfArrival: Date.now(),
			primaryKey: '2'
		},
		actions: [
			{
				action: 'explore', title: 'Explore this new world',
				icon: 'images/checkmark.png'
			},
			{
				action: 'close', title: 'Close',
				ison: 'images/xmark.png'
			},
		]
	};

	e.waitUntil(
		self.registration.showNotification(title, options)
	);
});
