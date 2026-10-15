import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_container, t as NavigableContainer } from "./container-B_optQg9.js";
//#region ../packages/components/src/navigable-container/tabbable.tsx
function UnforwardedTabbableContainer({ eventToOffset, ...props }, ref) {
	const innerEventToOffset = (evt) => {
		const { code, shiftKey } = evt;
		if ("Tab" === code) return shiftKey ? -1 : 1;
		if (eventToOffset) return eventToOffset(evt);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(NavigableContainer, {
		ref,
		stopNavigationEvents: true,
		onlyBrowserTabstops: true,
		eventToOffset: innerEventToOffset,
		...props
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 35,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, TabbableContainer;
function init_tabbable() {
	return (init_tabbable = __esmMin((() => {
		init_react();
		init_container();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/navigable-container/tabbable.tsx";
		TabbableContainer = (0, import_react.forwardRef)(UnforwardedTabbableContainer);
		TabbableContainer.displayName = "TabbableContainer";
		try {
			TabbableContainer.__docgenInfo = {
				"description": "A container for tabbable elements.\n\n ```jsx\n import {\n   TabbableContainer,\n   Button,\n } from '@wordpress/components';\n\n function onNavigate( index, target ) {\n   console.log( `Navigates to ${ index }`, target );\n }\n\n const MyTabbableContainer = () => (\n   <div>\n     <span>Tabbable Container:</span>\n     <TabbableContainer onNavigate={ onNavigate }>\n       <Button variant=\"secondary\" tabIndex=\"0\">\n         Section 1\n       </Button>\n       <Button variant=\"secondary\" tabIndex=\"0\">\n         Section 2\n       </Button>\n       <Button variant=\"secondary\" tabIndex=\"0\">\n         Section 3\n       </Button>\n       <Button variant=\"secondary\" tabIndex=\"0\">\n         Section 4\n       </Button>\n     </TabbableContainer>\n   </div>\n );\n ```",
				"displayName": "TabbableContainer",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/navigable-container/tabbable.tsx",
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
						"required": false,
						"tags": {},
						"type": { "name": "((event: KeyboardEvent) => 0 | 1 | -1)" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/navigable-container/stories/tabbable-container.story.tsx
var import_jsx_dev_runtime, fn, _jsxFileName, meta, Default;
function init_tabbable_container_story() {
	return (init_tabbable_container_story = __esmMin((() => {
		init_tabbable();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({fn} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/navigable-container/stories/tabbable-container.story.tsx";
		meta = {
			title: "Components/@wordpress-components/Containers/TabbableContainer",
			id: "components-tabbablecontainer",
			component: TabbableContainer,
			argTypes: { children: { control: false } },
			args: {
				onKeyDown: fn(),
				onNavigate: fn()
			},
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "not-recommended",
					whereUsed: "global",
					notes: "Planned for deprecation."
				}
			}
		};
		Default = (args) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { children: "Before tabbable container" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 33,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabbableContainer, {
					...args,
					style: {
						margin: "32px 0",
						padding: "16px",
						border: "1px solid black"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { children: "Item 1" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 42,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { children: "Item 2" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 43,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							disabled: true,
							children: "Item 3 (disabled)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 44,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							tabIndex: -1,
							children: "Item 4 (non-tabbable)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 45,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							tabIndex: 0,
							children: "Item 5"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 46,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { children: "Item 6" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 47,
							columnNumber: 5
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 34,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { children: "After tabbable container" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 4
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 32,
				columnNumber: 3
			}, void 0);
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "args => {\n  return <>\n            <button>Before tabbable container</button>\n            <TabbableContainer {...args} style={{\n      margin: '32px 0',\n      padding: '16px',\n      border: '1px solid black'\n    }}>\n                <button>Item 1</button>\n                <button>Item 2</button>\n                <button disabled>Item 3 (disabled)</button>\n                <button tabIndex={-1}>Item 4 (non-tabbable)</button>\n                <button tabIndex={0}>Item 5</button>\n                <button>Item 6</button>\n            </TabbableContainer>\n            <button>After tabbable container</button>\n        </>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_tabbable_container_story();
export { Default, meta as default };
