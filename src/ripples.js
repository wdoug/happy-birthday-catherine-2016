import $ from 'jquery';
import 'jquery.ripples';
import dat from 'dat.gui/build/dat.gui';

$('body').ripples({
	resolution: 246, //512,
	dropRadius: 20,
	perturbance: 0.04,
});

const RippleControls = function() {
  this.resolution = 246; //512,
	this.dropRadius = 20;
	this.perturbance = 0.04;

  this.rain = function() {
    setInterval(function() {
      const $el = $('body');
      const x = Math.random() * $el.outerWidth();
      const y = Math.random() * $el.outerHeight();
      const dropRadius = 20;
      const strength = 0.04 + Math.random() * 0.04;
      $el.ripples('drop', x, y, dropRadius, strength);
    }, 500);
  };
};

window.onload = function() {
  const ripples = new RippleControls();
  const gui = new dat.GUI({ autoPlace: false });

  const rippleBaseOpts = [
    ['resolution', 1, 1024],
    ['dropRadius', 15, 100],
    ['perturbance', 0.001, 0.1],
  ];

  rippleBaseOpts.forEach(opts => {
    gui.add(ripples, ...opts).onChange(newVal => {
      $('body').ripples('set', opts[0], newVal);
    });
  });

  gui.add(ripples, 'rain');

  gui.close();

  $('.dat-gui-container').append(gui.domElement);

  console.log('gui', gui);
  console.log('ripples', ripples);
};
