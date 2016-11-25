import './index.css';
import $ from 'jquery';
import 'jquery.ripples';

$('.test').ripples({
	resolution: 512,
	dropRadius: 20,
	perturbance: 0.04,
});
