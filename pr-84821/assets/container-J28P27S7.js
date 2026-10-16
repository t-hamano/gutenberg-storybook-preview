import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module, t as focus } from "./build-module-Bh_sM-WV.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
//#region ../packages/components/src/navigable-container/container.tsx
function cycleValue(value, total, offset) {
	const nextValue = value + offset;
	if (nextValue < 0) return total + nextValue;
	else if (nextValue >= total) return nextValue - total;
	return nextValue;
}
function getFocusableContext(container, target, tabbableOnly) {
	const focusables = (tabbableOnly ? focus.tabbable : focus.focusable).find(container);
	const index = focusables.indexOf(target);
	if (index > -1) return {
		index,
		target,
		focusables
	};
	return null;
}
function UnforwardedNavigableContainer({ children, stopNavigationEvents, eventToOffset, onNavigate = noop, onKeyDown, cycle = true, onlyBrowserTabstops, ...restProps }, ref) {
	const containerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const container = containerRef.current;
		if (!container) return;
		function handleKeyDown(event) {
			if (onKeyDown) onKeyDown(event);
			const offset = eventToOffset(event);
			if (offset !== void 0 && stopNavigationEvents) {
				event.stopImmediatePropagation();
				const targetRole = event.target?.getAttribute("role");
				if (!!targetRole && MENU_ITEM_ROLES.includes(targetRole)) event.preventDefault();
			}
			if (!offset) return;
			const activeElement = event.target?.ownerDocument?.activeElement;
			if (!activeElement) return;
			const context = getFocusableContext(container, activeElement, !!onlyBrowserTabstops);
			if (!context) return;
			const { index, focusables } = context;
			const nextIndex = cycle ? cycleValue(index, focusables.length, offset) : index + offset;
			if (nextIndex >= 0 && nextIndex < focusables.length) {
				focusables[nextIndex].focus();
				onNavigate(nextIndex, focusables[nextIndex]);
				if (event.code === "Tab") event.preventDefault();
			}
		}
		container.addEventListener("keydown", handleKeyDown);
		return () => {
			container.removeEventListener("keydown", handleKeyDown);
		};
	}, [
		onKeyDown,
		eventToOffset,
		stopNavigationEvents,
		cycle,
		onNavigate,
		onlyBrowserTabstops
	]);
	const mergedRef = useMergeRefs([containerRef, ref]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		ref: mergedRef,
		...restProps,
		children
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 141,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, noop, MENU_ITEM_ROLES, NavigableContainer;
function init_container() {
	return (init_container = __esmMin((() => {
		init_react();
		init_use_merge_refs();
		init_build_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/navigable-container/container.tsx";
		noop = () => {};
		MENU_ITEM_ROLES = [
			"menuitem",
			"menuitemradio",
			"menuitemcheckbox"
		];
		NavigableContainer = (0, import_react.forwardRef)(UnforwardedNavigableContainer);
		NavigableContainer.displayName = "NavigableContainer";
		try {
			NavigableContainer.__docgenInfo = {
				"description": "",
				"displayName": "container",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/navigable-container/container.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/navigable-container/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The component children.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"cycle": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/navigable-container/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A boolean which tells the component whether or not to cycle from the end back to the beginning and vice versa.",
						"name": "cycle",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onKeyDown": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/navigable-container/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A callback invoked on the keydown event.",
						"name": "onKeyDown",
						"required": false,
						"tags": {},
						"type": { "name": "((event: KeyboardEvent) => void)" }
					},
					"onNavigate": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/navigable-container/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A callback invoked when the menu navigates to one of its children passing the index and child as an argument",
						"name": "onNavigate",
						"required": false,
						"tags": {},
						"type": { "name": "((index: number, focusable: HTMLElement) => void)" }
					},
					"eventToOffset": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/navigable-container/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Gets an offset, given an event.",
						"name": "eventToOffset",
						"required": true,
						"tags": {},
						"type": { "name": "(event: KeyboardEvent) => 0 | 1 | -1 | undefined" }
					},
					"onlyBrowserTabstops": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/navigable-container/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to only consider browser tab stops.",
						"name": "onlyBrowserTabstops",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"stopNavigationEvents": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/navigable-container/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to stop navigation events.",
						"name": "stopNavigationEvents",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_container as n, NavigableContainer as t };
