import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
//#region ../packages/components/src/scroll-lock/index.tsx
function setLocked(locked) {
	const scrollingElement = document.scrollingElement || document.body;
	if (locked) previousScrollTop = scrollingElement.scrollTop;
	const methodName = locked ? "add" : "remove";
	scrollingElement.classList[methodName]("lockscroll");
	document.documentElement.classList[methodName]("lockscroll");
	if (!locked) scrollingElement.scrollTop = previousScrollTop;
}
/**
* ScrollLock is a content-free React component for declaratively preventing
* scroll bleed from modal UI to the page body. This component applies a
* `lockscroll` class to the `document.documentElement` and
* `document.scrollingElement` elements to stop the body from scrolling. When it
* is present, the lock is applied.
*
* ```jsx
* import { ScrollLock, Button } from '@wordpress/components';
* import { useState } from '@wordpress/element';
*
* const MyScrollLock = () => {
*   const [ isScrollLocked, setIsScrollLocked ] = useState( false );
*
*   const toggleLock = () => {
*     setIsScrollLocked( ( locked ) => ! locked ) );
*   };
*
*   return (
*     <div>
*       <Button variant="secondary" onClick={ toggleLock }>
*         Toggle scroll lock
*       </Button>
*       { isScrollLocked && <ScrollLock /> }
*       <p>
*         Scroll locked:
*         <strong>{ isScrollLocked ? 'Yes' : 'No' }</strong>
*       </p>
*     </div>
*   );
* };
* ```
*/
function ScrollLock() {
	(0, import_react.useEffect)(() => {
		if (lockCounter === 0) setLocked(true);
		++lockCounter;
		return () => {
			if (lockCounter === 1) setLocked(false);
			--lockCounter;
		};
	}, []);
	return null;
}
var previousScrollTop, lockCounter;
function init_scroll_lock() {
	return (init_scroll_lock = __esmMin((() => {
		init_react();
		previousScrollTop = 0;
		lockCounter = 0;
		try {
			ScrollLock.__docgenInfo = {
				"description": "ScrollLock is a content-free React component for declaratively preventing\nscroll bleed from modal UI to the page body. This component applies a\n`lockscroll` class to the `document.documentElement` and\n`document.scrollingElement` elements to stop the body from scrolling. When it\nis present, the lock is applied.\n\n```jsx\nimport { ScrollLock, Button } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyScrollLock = () => {\n  const [ isScrollLocked, setIsScrollLocked ] = useState( false );\n\n  const toggleLock = () => {\n    setIsScrollLocked( ( locked ) => ! locked ) );\n  };\n\n  return (\n    <div>\n      <Button variant=\"secondary\" onClick={ toggleLock }>\n        Toggle scroll lock\n      </Button>\n      { isScrollLocked && <ScrollLock /> }\n      <p>\n        Scroll locked:\n        <strong>{ isScrollLocked ? 'Yes' : 'No' }</strong>\n      </p>\n    </div>\n  );\n};\n```",
				"displayName": "ScrollLock",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/scroll-lock/index.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_scroll_lock as n, ScrollLock as t };
