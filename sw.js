self.addEventListener('push', function (e) {
	const title = '2023년 6월 20일';

	var options = {
		body: '오늘은 화요일이당 !!',
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
				action: 'explore', title: 'Check',
				icon: 'images/checkmark.png'
			},
			{
				action: 'close', title: 'Close',
				icon: 'images/xmark.png'
			},
		]
	};

	e.waitUntil(
		self.registration.showNotification(title, options)
	);
});
