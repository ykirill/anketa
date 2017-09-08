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
	start: 3,
	snap: true,
	orientation: windowWidth < 800 ? 'vertical' : 'horizontal',
	range: {
		min: 0,
		'18.6%': 1,
		'49.4%': 2,
		max: 3
	},
	pips: {
		mode: 'steps',
		density: 500
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
		node.addEventListener('click', () => {
			slider.noUiSlider.set(index);
			input.value = index;
			console.log(index);
		});
	});
};

export default () => {
	noUiSlider.create(slider, options);
	slider.noUiSlider.set(input.value);
	changePimps(slider, values);
};
