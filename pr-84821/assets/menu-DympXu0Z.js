import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_container, t as NavigableContainer } from "./container-J28P27S7.js";
//#region ../packages/components/src/navigable-container/menu.tsx
function UnforwardedNavigableMenu({ role = "menu", orientation = "vertical", ...rest }, ref) {
	const eventToOffset = (evt) => {
		const { code } = evt;
		let next = ["ArrowDown"];
		let previous = ["ArrowUp"];
		if (orientation === "horizontal") {
			next = ["ArrowRight"];
			previous = ["ArrowLeft"];
		}
		if (orientation === "both") {
			next = ["ArrowRight", "ArrowDown"];
			previous = ["ArrowLeft", "ArrowUp"];
		}
		if (next.includes(code)) return 1;
		else if (previous.includes(code)) return -1;
		else if ([
			"ArrowDown",
			"ArrowUp",
			"ArrowLeft",
			"ArrowRight"
		].includes(code)) return 0;
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigableContainer, {
		ref,
		stopNavigationEvents: true,
		onlyBrowserTabstops: false,
		role,
		"aria-orientation": role !== "presentation" && (orientation === "vertical" || orientation === "horizontal") ? orientation : void 0,
		eventToOffset,
		...rest
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 45,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, NavigableMenu;
function init_menu() {
	return (init_menu = __esmMin((() => {
		init_react();
		init_container();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/navigable-container/menu.tsx";
		NavigableMenu = (0, import_react.forwardRef)(UnforwardedNavigableMenu);
		NavigableMenu.displayName = "NavigableMenu";
		try {
			NavigableMenu.__docgenInfo = {
				"description": "A container for a navigable menu.\n\n ```jsx\n import {\n   NavigableMenu,\n   Button,\n } from '@wordpress/components';\n\n function onNavigate( index, target ) {\n   console.log( `Navigates to ${ index }`, target );\n }\n\n const MyNavigableContainer = () => (\n   <div>\n     <span>Navigable Menu:</span>\n     <NavigableMenu onNavigate={ onNavigate } orientation=\"horizontal\">\n       <Button variant=\"secondary\">Item 1</Button>\n       <Button variant=\"secondary\">Item 2</Button>\n       <Button variant=\"secondary\">Item 3</Button>\n     </NavigableMenu>\n   </div>\n );\n ```",
				"displayName": "NavigableMenu",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/navigable-container/menu.tsx",
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
					"orientation": {
						"defaultValue": { "value": "'vertical'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/navigable-container/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The orientation of the menu.",
						"name": "orientation",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"both\" | \"horizontal\" | \"vertical\"",
							"value": [
								{ "value": "\"both\"" },
								{ "value": "\"horizontal\"" },
								{ "value": "\"vertical\"" }
							]
						}
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_menu as n, NavigableMenu as t };
