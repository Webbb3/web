$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.nav-menu').toggleClass('active');
	});
	$('.header__burger').click(function (event) {
		$('body').toggleClass('lock');
	});
	$('.nav-menu__items').click(function (event) {
		$('.header__burger,.nav-menu').removeClass('active');
		$('body').removeClass('lock');
	});
});