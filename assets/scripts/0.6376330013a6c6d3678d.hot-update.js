webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _nouislider = __webpack_require__(2);
	
	var _nouislider2 = _interopRequireDefault(_nouislider);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var windowWidth = window.innerWidth || document.body.clientWidth;
	var values = ['Не владею', 'Использую готовые решения', 'Использую готовые решения и умею их переделывать', 'Пишу сложный JS с нуля'];
	
	var slider = document.querySelector('.js-level__js-slider');
	var input = document.querySelector('.js-level__input');
	var options = {
		start: 3,
		snap: true,
		orientation: windowWidth < 768 ? 'vertical' : 'horizontal',
		range: windowWidth < 768 ? {
			min: 0,
			'33.3%': 1,
			'66.7%%': 2,
			max: 3
		} : {
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
	
	var addClassName = function addClassName(elem, className) {
		elem.className += ' ' + className;
	};
	
	var changePimps = function changePimps(sliderNode, vals) {
		var valNodes = [].slice.apply(sliderNode.querySelectorAll('.noUi-value'));
		var pipNodes = [].slice.apply(sliderNode.querySelectorAll('.noUi-marker'));
		var firstPipNode = pipNodes[0];
		var lastPipNode = pipNodes[pipNodes.length - 1];
	
		addClassName(firstPipNode, 'firstPipNode');
		addClassName(lastPipNode, 'lastPipNode');
	
		return valNodes.map(function (node, index) {
			node.innerHTML = vals[index];
			node.addEventListener('click', function () {
				slider.noUiSlider.set(index);
				input.value = index;
			});
		});
	};
	
	exports.default = function () {
		_nouislider2.default.create(slider, options);
		slider.noUiSlider.set(input.value);
		changePimps(slider, values);
	};

/***/ })
])
//# sourceMappingURL=0.6376330013a6c6d3678d.hot-update.js.map