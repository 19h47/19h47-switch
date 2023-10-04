import { EventEmitter } from 'events';

export default class Switch extends EventEmitter {
	el: HTMLElement;
	$input: HTMLInputElement | null = null;
	checked: boolean = false;

	constructor(el : HTMLElement) {
		super();

		this.el = el;

		this.$input = this.el.querySelector<HTMLInputElement>('input[type="checkbox"]');
	}

	init(): void {
		this.initEvents();
	}

	initEvents() {
		this.el.addEventListener('click', this.handleClick);
		this.el.addEventListener('keydown', this.handleKeydown);
	}

	handleClick = () => this.toggle();

	handleKeydown = (event: KeyboardEvent) => {
		const key = event.code;

		const toggle = () => {
			this.toggle();

			event.preventDefault();
		};

		const codes : any = {
			Space: toggle,
			Enter: toggle,
			default: () => false,
		};

		return (codes[key] || codes.default)();
	}

	toggle(): boolean {
		if (this.checked) {
			return this.deactivate();
		}

		return this.activate();
	}

	activate(): boolean {
		if (this.checked) {
			return false;
		}

		this.checked = true;
		this.$input!.checked = true;
		this.$input!.setAttribute('checked', '');

		this.el.setAttribute('aria-checked', 'true');

		return this.emit('Switch.activate', this.el);
	}

	deactivate(): boolean {
		if (!this.checked) {
			return false;
		}

		this.checked = false;
		this.$input!.checked = false;
		this.$input!.removeAttribute('checked');

		this.el.setAttribute('aria-checked', 'false');

		return this.emit('Switch.deactivate', this.el);
	}
}
