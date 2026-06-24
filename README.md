# @19h47/switch

A switch is an on/off control that represents a binary setting. It provides an accessible, keyboard-navigable interface following the [ARIA switch pattern](https://www.w3.org/WAI/ARIA/apg/patterns/switch/), reads its state from the markup, and dispatches native DOM events when toggled.

## Installation

```
pnpm add @19h47/switch
```

## HTML

```html
<div role="switch" tabindex="0" aria-checked="false">
	<span class="label">Notifications</span>
	<span class="switch"><span></span></span>
	<span class="on" aria-hidden="true">On</span>
	<span class="off" aria-hidden="true">Off</span>
	<div hidden><input type="checkbox" /></div>
</div>
```

When disabled, use `aria-disabled="true"` and `tabindex="-1"`.

```html
<div role="switch" tabindex="-1" aria-checked="false" aria-disabled="true">
	<span class="label">Disabled switch</span>
	<span class="switch"><span></span></span>
	<div hidden><input type="checkbox" /></div>
</div>
```

## JavaScript

```javascript
import Switch from '@19h47/switch';

const $switch = document.querySelector('[role="switch"]');

const switchButton = new Switch($switch);
switchButton.init();
```

## Keyboard support

| Key                                  | Function                                                |
| ------------------------------------ | ------------------------------------------------------- |
| <kbd>Tab</kbd>                       | <ul><li>Moves keyboard focus to the `switch`.</li></ul> |
| <kbd>Space</kbd><br><kbd>Enter</kbd> | <ul><li>Toggle switch between on and off.</li></ul>     |

## Event

Events are dispatched on the switch element.

| Event             | Description              |
| ----------------- | ------------------------ |
| Switch.activate   | Fired when activated.    |
| Switch.deactivate | Fired when deactivated.  |

```javascript
import Switch from '@19h47/switch';

const $switch = document.querySelector('[role="switch"]');

const switchButton = new Switch($switch);
switchButton.init();

$switch.addEventListener('Switch.deactivate', () => {
	console.log('deactivated');
});

$switch.addEventListener('Switch.activate', () => {
	console.log('activated');
});
```

## Acknowledgment

-   [Switch Example](https://www.w3.org/WAI/ARIA/apg/patterns/switch/examples/switch/)
-   [Switch Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/switch/)
