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

const switch = new Switch($switch);
switch.init();
```

## Keyboard support

| Key   | Function                                     |
| ----- | -------------------------------------------- |
| Tab   | Moves keyboard focus to the `switch`.        |
| Space | Toggle switch between checked and unchecked. |

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

-   [switch](https://rawgit.com/w3c/aria-practices/switch/examples/switch/switch.html)
-   [Switch Design Pattern in WAI-ARIA Authoring Practices 1.1](https://rawgit.com/w3c/aria-practices/switch/#switch)
