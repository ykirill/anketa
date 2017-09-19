import autoSize from 'autosize';

export default () => {
	const textArea = document.querySelector('.js-text-area');
	autoSize(textArea);
};
