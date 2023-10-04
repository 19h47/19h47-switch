# @19h47/switch

## Installation

```
yarn add @19h47/switch
```

## HTML

```html
<div tabindex="0" aria-checked="false" role="switch">
	<span>Toggle this switch element</span>
	<span></span>
	<div style="display: none;"><input type="checkbox" /></div>
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

| Event             | Arguments | Description |
| ----------------- | --------- | ----------- |
| Switch.activate   |           |             |
| Switch.deactivate |           |             |

```javascript
import Switch from '@19h47/switch';

const $switch = document.querySelector('[role="switch"]');

const switchButton = new Switch($switch);
switchButton.init();

switchButton.on('Switch.deactivate', () => {
	console.log('deactivated');
});

switchButton.on('Switch.activate', () => {
	console.log('activated');
});
```

## Acknowledgment

-   [Switch Example](https://www.w3.org/WAI/ARIA/apg/patterns/switch/examples/switch/)
-   [Switch Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/switch/)
