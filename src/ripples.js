import $ from 'jquery';
import 'jquery.ripples';

$('body').ripples({
	resolution: 128, //512,
	dropRadius: 20,
	perturbance: 0.04,
});

// setInterval(function() {
// 	const $el = $('body');
// 	const x = Math.random() * $el.outerWidth();
// 	const y = Math.random() * $el.outerHeight();
// 	const dropRadius = 20;
// 	const strength = 0.04 + Math.random() * 0.04;
// 	$el.ripples('drop', x, y, dropRadius, strength);
// }, 500);
