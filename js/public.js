// 向下滚动时导航栏加上黑色阴影
window.addEventListener('scroll', function () {
	let t = $('body, html').scrollTop(); // 目前监听的是整个body的滚动条距离
	if (t > 0) {
		$('.navbar-style').addClass('navbar-style-down');
	} else {
		$('.navbar-style').removeClass('navbar-style-down');
	}
})