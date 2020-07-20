import { ENTER, SPACE } from '@19h47/keycode';
import EventDispatcher from './EventDispatcher';

export default class Switch extends EventDispatcher {
	constructor(element) {
		super(['Switch.activate', 'Switch.deactivate']);

		this.rootElement = element;

		this.$input = this.rootElement.querySelector('input[type="checkbox"]');

		this.checked = false;

		// Bind.
		this.toggle = this.toggle.bind(this);
		this.onKeydown = this.onKeydown.bind(this);
	}

	init() {
		this.initEvents();
	}

	initEvents() {
		this.rootElement.addEventListener('click', this.toggle);
		this.rootElement.addEventListener('keydown', this.onKeydown);
	}

	onKeydown(event) {
		const key = event.keyCode || event.which;

		const toggle = () => {
			this.toggle();

			event.preventDefault();
		};

		const codes = {
			[SPACE]: toggle,
			[ENTER]: toggle,
			default: () => false,
		};

		return (codes[key] || codes.default)();
	}

	toggle() {
		if (this.checked) {
			return this.deactivate();
		}

		return this.activate();
	}

	activate() {
		// console.log('Switch.on');

		if (this.checked) {
			return false;
		}

		this.checked = true;
		this.$input.checked = true;
		this.$input.setAttribute('checked', true);

		this.rootElement.setAttribute('aria-checked', true);

		return this.emit('Switch.activate', this.rootElement);
	}

	deactivate() {
		if (!this.checked) {
			return false;
		}

		this.checked = false;
		this.$input.checked = false;
		this.$input.setAttribute('checked', false);

		this.rootElement.setAttribute('aria-checked', false);

		return this.emit('Switch.deactivate', this.rootElement);
	}
}
