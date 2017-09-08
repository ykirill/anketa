import noUiSlider from 'nouislider';

const windowWidth = window.innerWidth || document.body.clientWidth;
const values = [
	'Не владею',
	'Использую готовые решения',
	'Использую готовые решения и умею их переделывать',
	'Пишу сложный JS с нуля'
];

const slider = document.querySelector('.js-level__js-slider');
const input = document.querySelector('.js-level__input');
const options = {
	animate: true,
	animationDuration: 300,
	start: 3,
	snap: true,
	orientation: windowWidth < 800 ? 'vertical' : 'horizontal',
	range: {
		min: 1,
		'18.6%': 2,
		'49.4%': 3,
		max: 4
	},
	pips: {
		mode: 'steps',
		density: 100
	}
};

const addClassName = (elem, className) => {
	elem.className += ` ${className}`;
};

const changePimps = (sliderNode, vals) => {
	const valNodes = [].slice.apply(sliderNode.querySelectorAll('.noUi-value'));
	const pipNodes = [].slice.apply(sliderNode.querySelectorAll('.noUi-marker'));
	const firstPipNode = pipNodes[0];
	const lastPipNode = pipNodes[pipNodes.length - 1];

	addClassName(firstPipNode, 'firstPipNode');
	addClassName(lastPipNode, 'lastPipNode');

	return valNodes.map((node, index) => {
		node.innerHTML = vals[index];
	});
};

export default () => {
	noUiSlider.create(slider, options);
	slider.noUiSlider.set(input.value);
	changePimps(slider, values);
};
