export default class Switch {
	el: HTMLElement;
	$input: HTMLInputElement | null = null;
	checked: boolean = false;

	constructor(el: HTMLElement) {
		this.el = el;

		this.$input = this.el.querySelector<HTMLInputElement>('input[type="checkbox"]');
		this.checked = this.el.getAttribute('aria-checked') === 'true';
	}

	init(): void {
		this.initEvents();
	}

	initEvents() {
		this.el.addEventListener('click', this.handleClick);
		this.el.addEventListener('keydown', this.handleKeydown);
	}

	get disabled(): boolean {
		return this.el.getAttribute('aria-disabled') === 'true';
	}

	handleClick = () => {
		if (this.disabled) {
			return;
		}

		this.toggle();
	};

	handleKeydown = (event: KeyboardEvent) => {
		if (this.disabled) {
			return;
		}

		const key = event.code;

		const toggle = () => {
			this.toggle();

			event.preventDefault();
		};

		const codes: Record<string, () => boolean | void> = {
			Space: toggle,
			Enter: toggle,
			default: () => false,
		};

		return (codes[key] || codes.default)();
	};

	toggle(): boolean {
		if (this.disabled) {
			return false;
		}

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

		return this.el.dispatchEvent(
			new CustomEvent('Switch.activate', {
				bubbles: true,
			}),
		);
	}

	deactivate(): boolean {
		if (!this.checked) {
			return false;
		}

		this.checked = false;
		this.$input!.checked = false;
		this.$input!.removeAttribute('checked');

		this.el.setAttribute('aria-checked', 'false');

		return this.el.dispatchEvent(
			new CustomEvent('Switch.deactivate', {
				bubbles: true,
			}),
		);
	}
}
