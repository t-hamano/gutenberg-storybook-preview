import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { o as isRTL, t as init_build_module } from "./build-module-v04us4E2.js";
import { n as warning, t as init_build_module$1 } from "./build-module-B5spW8IS.js";
import { n as init_composite_item, t as CompositeItem$1 } from "./composite-item-JNO_FG0t.js";
import { a as Composite$1, n as useCompositeStore, o as init_composite$1, t as init_composite_store } from "./composite-store-1UKEKg_X.js";
import { a as init_composite_typeahead, i as CompositeTypeahead$1, n as init_composite_hover, t as CompositeHover$1 } from "./composite-hover-Dw66ed1y.js";
import { a as init_composite_group, i as CompositeGroup$1, n as init_composite_group_label, t as CompositeGroupLabel$1 } from "./composite-group-label-DWthIT6s.js";
import { n as init_composite_row, t as CompositeRow$1 } from "./composite-row-C5Z-S4Kx.js";
//#region ../packages/components/src/composite/context.tsx
var CompositeContext, useCompositeContext, CompositeGroupContext, useCompositeGroupContext;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		CompositeContext = (0, import_react.createContext)({});
		CompositeContext.displayName = "CompositeContext";
		useCompositeContext = () => (0, import_react.useContext)(CompositeContext);
		CompositeGroupContext = (0, import_react.createContext)(false);
		CompositeGroupContext.displayName = "CompositeGroupContext";
		useCompositeGroupContext = () => (0, import_react.useContext)(CompositeGroupContext);
		try {
			CompositeContext.__docgenInfo = {
				"description": "",
				"displayName": "CompositeContext",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/composite/context.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			CompositeGroupContext.__docgenInfo = {
				"description": "",
				"displayName": "CompositeGroupContext",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/composite/context.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/composite/group.tsx
var import_jsx_dev_runtime$6, _jsxFileName$6, CompositeGroup;
function init_group() {
	return (init_group = __esmMin((() => {
		init_composite_group();
		init_react();
		init_context();
		import_jsx_dev_runtime$6 = require_jsx_dev_runtime();
		_jsxFileName$6 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/composite/group.tsx";
		CompositeGroup = (0, import_react.forwardRef)(function UnforwardedCompositeGroup(props, ref) {
			const context = useCompositeContext();
			const { children, ...restProps } = props;
			const store = props.store ?? context.store;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(CompositeGroup$1, {
				store,
				...restProps,
				ref,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(CompositeGroupContext.Provider, {
					value: true,
					children
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 21,
					columnNumber: 4
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 20,
				columnNumber: 3
			}, this);
		});
		try {
			CompositeGroup.__docgenInfo = {
				"description": "",
				"displayName": "CompositeGroup",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/composite/group.tsx",
				"methods": [],
				"props": {
					"render": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Allows the component to be rendered as a different HTML element or React\ncomponent. The value can be a React element or a function that takes in the\noriginal component props and gives back a React element with the props\nmerged.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ReactElement<unknown, string | JSXElementConstructor<any>> | RenderProp<HTMLAttributes<any> & { ref?: Ref<any>; }>" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The contents of the component.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/composite/group-label.tsx
var import_jsx_dev_runtime$5, _jsxFileName$5, CompositeGroupLabel;
function init_group_label() {
	return (init_group_label = __esmMin((() => {
		init_composite_group_label();
		init_react();
		init_context();
		import_jsx_dev_runtime$5 = require_jsx_dev_runtime();
		_jsxFileName$5 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/composite/group-label.tsx";
		CompositeGroupLabel = (0, import_react.forwardRef)(function UnforwardedCompositeGroupLabel(props, ref) {
			const context = useCompositeContext();
			if (!useCompositeGroupContext()) throw new Error("Composite.GroupLabel can only be rendered inside Composite.Group.");
			const store = props.store ?? context.store;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(CompositeGroupLabel$1, {
				store,
				...props,
				ref
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 26,
				columnNumber: 3
			}, this);
		});
		try {
			CompositeGroupLabel.__docgenInfo = {
				"description": "",
				"displayName": "CompositeGroupLabel",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/composite/group-label.tsx",
				"methods": [],
				"props": {
					"render": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Allows the component to be rendered as a different HTML element or React\ncomponent. The value can be a React element or a function that takes in the\noriginal component props and gives back a React element with the props\nmerged.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ReactElement<unknown, string | JSXElementConstructor<any>> | RenderProp<HTMLAttributes<any> & { ref?: Ref<any>; }>" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The contents of the component.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/composite/hover.tsx
var import_jsx_dev_runtime$4, _jsxFileName$4, CompositeHover;
function init_hover() {
	return (init_hover = __esmMin((() => {
		init_composite_hover();
		init_react();
		init_context();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/composite/hover.tsx";
		CompositeHover = (0, import_react.forwardRef)(function UnforwardedCompositeHover(props, ref) {
			const context = useCompositeContext();
			const store = props.store ?? context.store;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(CompositeHover$1, {
				store,
				...props,
				ref
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 18,
				columnNumber: 9
			}, this);
		});
		try {
			CompositeHover.__docgenInfo = {
				"description": "",
				"displayName": "CompositeHover",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/composite/hover.tsx",
				"methods": [],
				"props": {
					"render": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Allows the component to be rendered as a different HTML element or React\ncomponent. The value can be a React element or a function that takes in the\noriginal component props and gives back a React element with the props\nmerged.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ReactElement<unknown, string | JSXElementConstructor<any>> | RenderProp<HTMLAttributes<any> & { ref?: Ref<any>; }>" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The contents of the component.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/composite/item.tsx
var import_jsx_dev_runtime$3, _jsxFileName$3, CompositeItem;
function init_item() {
	return (init_item = __esmMin((() => {
		init_composite_item();
		init_react();
		init_build_module$1();
		init_context();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/composite/item.tsx";
		CompositeItem = (0, import_react.forwardRef)(function UnforwardedCompositeItem(props, ref) {
			const context = useCompositeContext();
			const store = props.store ?? context.store;
			if (!store) warning("Composite.Item: Missing composite state. Render inside Composite to enable composite keyboard behavior.");
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(CompositeItem$1, {
				store,
				...props,
				ref
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 24,
				columnNumber: 9
			}, this);
		});
		try {
			CompositeItem.__docgenInfo = {
				"description": "",
				"displayName": "CompositeItem",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/composite/item.tsx",
				"methods": [],
				"props": {
					"render": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Allows the component to be rendered as a different HTML element or React\ncomponent. The value can be a React element or a function that takes in the\noriginal component props and gives back a React element with the props\nmerged.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ReactElement<unknown, string | JSXElementConstructor<any>> | RenderProp<HTMLAttributes<any> & { ref?: Ref<any>; }>" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The contents of the component.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"accessibleWhenDisabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Indicates whether the element should be focusable even when it is\n`disabled`.\n\nThis is important when discoverability is a concern. For example:\n\n> A toolbar in an editor contains a set of special smart paste functions\nthat are disabled when the clipboard is empty or when the function is not\napplicable to the current content of the clipboard. It could be helpful to\nkeep the disabled buttons focusable if the ability to discover their\nfunctionality is primarily via their presence on the toolbar.\n\nLearn more on [Focusability of disabled\ncontrols](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#focusabilityofdisabledcontrols).",
						"name": "accessibleWhenDisabled",
						"required": false,
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
//#region ../packages/components/src/composite/row.tsx
var import_jsx_dev_runtime$2, _jsxFileName$2, CompositeRow;
function init_row() {
	return (init_row = __esmMin((() => {
		init_composite_row();
		init_react();
		init_context();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/composite/row.tsx";
		CompositeRow = (0, import_react.forwardRef)(function UnforwardedCompositeRow(props, ref) {
			const context = useCompositeContext();
			const store = props.store ?? context.store;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(CompositeRow$1, {
				store,
				...props,
				ref
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 18,
				columnNumber: 9
			}, this);
		});
		try {
			CompositeRow.__docgenInfo = {
				"description": "",
				"displayName": "CompositeRow",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/composite/row.tsx",
				"methods": [],
				"props": {
					"render": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Allows the component to be rendered as a different HTML element or React\ncomponent. The value can be a React element or a function that takes in the\noriginal component props and gives back a React element with the props\nmerged.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ReactElement<unknown, string | JSXElementConstructor<any>> | RenderProp<HTMLAttributes<any> & { ref?: Ref<any>; }>" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The contents of the component.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/composite/typeahead.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, CompositeTypeahead;
function init_typeahead() {
	return (init_typeahead = __esmMin((() => {
		init_composite_typeahead();
		init_react();
		init_context();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/composite/typeahead.tsx";
		CompositeTypeahead = (0, import_react.forwardRef)(function UnforwardedCompositeTypeahead(props, ref) {
			const context = useCompositeContext();
			const store = props.store ?? context.store;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(CompositeTypeahead$1, {
				store,
				...props,
				ref
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 19,
				columnNumber: 3
			}, this);
		});
		try {
			CompositeTypeahead.__docgenInfo = {
				"description": "",
				"displayName": "CompositeTypeahead",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/composite/typeahead.tsx",
				"methods": [],
				"props": {
					"render": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Allows the component to be rendered as a different HTML element or React\ncomponent. The value can be a React element or a function that takes in the\noriginal component props and gives back a React element with the props\nmerged.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ReactElement<unknown, string | JSXElementConstructor<any>> | RenderProp<HTMLAttributes<any> & { ref?: Ref<any>; }>" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The contents of the component.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/composite/index.tsx
var import_jsx_dev_runtime, _jsxFileName, Composite;
function init_composite() {
	return (init_composite = __esmMin((() => {
		init_composite_store(), init_composite$1();
		init_build_module();
		init_react();
		init_context();
		init_group();
		init_group_label();
		init_hover();
		init_item();
		init_row();
		init_typeahead();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/composite/index.tsx";
		Composite = Object.assign((0, import_react.forwardRef)(function UnforwardedComposite({ activeId, defaultActiveId, setActiveId, focusLoop = false, focusWrap = false, focusShift = false, virtualFocus = false, orientation = "both", rtl = isRTL(), children, disabled = false, ...props }, ref) {
			const storeProp = props.store;
			const internalStore = useCompositeStore({
				activeId,
				defaultActiveId,
				setActiveId,
				focusLoop,
				focusWrap,
				focusShift,
				virtualFocus,
				orientation,
				rtl
			});
			const store = storeProp ?? internalStore;
			const contextValue = (0, import_react.useMemo)(() => ({ store }), [store]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite$1, {
				disabled,
				store,
				...props,
				ref,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeContext.Provider, {
					value: contextValue,
					children
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 95,
					columnNumber: 5
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 89,
				columnNumber: 4
			}, this);
		}), {
			/**
			* Renders a group element for composite items.
			*
			* @example
			* ```jsx
			* import { Composite } from '@wordpress/components';
			*
			* <Composite>
			*   <Composite.Group>
			*     <Composite.GroupLabel>Label</Composite.GroupLabel>
			*     <Composite.Item>Item 1</Composite.Item>
			*     <Composite.Item>Item 2</Composite.Item>
			*   </CompositeGroup>
			* </Composite>
			* ```
			*/
			Group: Object.assign(CompositeGroup, { displayName: "Composite.Group" }),
			/**
			* Renders a label in a composite group. This component must be wrapped with
			* `Composite.Group` so the `aria-labelledby` prop is properly set on the
			* composite group element.
			*
			* @example
			* ```jsx
			* import { Composite } from '@wordpress/components';
			*
			* <Composite>
			*   <Composite.Group>
			*     <Composite.GroupLabel>Label</Composite.GroupLabel>
			*     <Composite.Item>Item 1</Composite.Item>
			*     <Composite.Item>Item 2</Composite.Item>
			*   </CompositeGroup>
			* </Composite>
			* ```
			*/
			GroupLabel: Object.assign(CompositeGroupLabel, { displayName: "Composite.GroupLabel" }),
			/**
			* Renders a composite item.
			*
			* @example
			* ```jsx
			* import { Composite } from '@wordpress/components';
			*
			* <Composite>
			*   <Composite.Item>Item 1</Composite.Item>
			*   <Composite.Item>Item 2</Composite.Item>
			*   <Composite.Item>Item 3</Composite.Item>
			* </Composite>
			* ```
			*/
			Item: Object.assign(CompositeItem, { displayName: "Composite.Item" }),
			/**
			* Renders a composite row. Wrapping `Composite.Item` elements within
			* `Composite.Row` will create a two-dimensional composite widget, such as a
			* grid.
			*
			* @example
			* ```jsx
			* import { Composite } from '@wordpress/components';
			*
			* <Composite>
			*   <Composite.Row>
			*     <Composite.Item>Item 1.1</Composite.Item>
			*     <Composite.Item>Item 1.2</Composite.Item>
			*     <Composite.Item>Item 1.3</Composite.Item>
			*   </Composite.Row>
			*   <Composite.Row>
			*     <Composite.Item>Item 2.1</Composite.Item>
			*     <Composite.Item>Item 2.2</Composite.Item>
			*     <Composite.Item>Item 2.3</Composite.Item>
			*   </Composite.Row>
			* </Composite>
			* ```
			*/
			Row: Object.assign(CompositeRow, { displayName: "Composite.Row" }),
			/**
			* Renders an element in a composite widget that receives focus on mouse move
			* and loses focus to the composite base element on mouse leave. This should
			* be combined with the `Composite.Item` component.
			*
			* @example
			* ```jsx
			* import { Composite } from '@wordpress/components';
			*
			* <Composite>
			*   <Composite.Hover render={ <Composite.Item /> }>
			*     Item 1
			*   </Composite.Hover>
			*   <Composite.Hover render={ <Composite.Item /> }>
			*     Item 2
			*   </Composite.Hover>
			* </Composite>
			* ```
			*/
			Hover: Object.assign(CompositeHover, { displayName: "Composite.Hover" }),
			/**
			* Renders a component that adds typeahead functionality to composite
			* components. Hitting printable character keys will move focus to the next
			* composite item that begins with the input characters.
			*
			* @example
			* ```jsx
			* import { Composite } from '@wordpress/components';
			*
			* <Composite render={ <CompositeTypeahead /> }>
			*   <Composite.Item>Item 1</Composite.Item>
			*   <Composite.Item>Item 2</Composite.Item>
			* </Composite>
			* ```
			*/
			Typeahead: Object.assign(CompositeTypeahead, { displayName: "Composite.Typeahead" }),
			/**
			* The React context used by the composite components. It can be used by
			* to access the composite store, and to forward the context when composite
			* sub-components are rendered across portals (ie. `SlotFill` components)
			* that would not otherwise forward the context to the `Fill` children.
			*
			* @example
			* ```jsx
			* import { Composite } from '@wordpress/components';
			* import { useContext } from '@wordpress/element';
			*
			* const compositeContext = useContext( Composite.Context );
			* ```
			*/
			Context: Object.assign(CompositeContext, { displayName: "Composite.Context" })
		});
		try {
			Composite.__docgenInfo = {
				"description": "Renders a widget based on the WAI-ARIA [`composite`](https://w3c.github.io/aria/#composite)\nrole, which provides a single tab stop on the page and arrow key navigation\nthrough the focusable descendants.",
				"displayName": "Composite",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/composite/index.tsx",
				"methods": [],
				"props": {
					"activeId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The current active item `id`. The active item is the element within the\ncomposite widget that has either DOM or virtual focus (in case\nthe `virtualFocus` prop is enabled).\n- `null` represents the base composite element (the one with a [composite\n  role](https://w3c.github.io/aria/#composite)). Users will be able to\n  navigate out of it using arrow keys.\n- If `activeId` is initially set to `null`, the base composite element\n  itself will have focus and users will be able to navigate to it using\n  arrow keys.",
						"name": "activeId",
						"required": false,
						"tags": {},
						"type": { "name": "string | null" }
					},
					"defaultActiveId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The composite item id that should be active by default when the composite\nwidget is rendered. If `null`, the composite element itself will have focus\nand users will be able to navigate to it using arrow keys. If `undefined`,\nthe first enabled item will be focused.",
						"name": "defaultActiveId",
						"required": false,
						"tags": {},
						"type": { "name": "string | null" }
					},
					"setActiveId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A callback that gets called when the `activeId` state changes.",
						"name": "setActiveId",
						"required": false,
						"tags": {},
						"type": { "name": "((activeId: string | null) => void)" }
					},
					"focusLoop": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines how the focus behaves when the user reaches the end of the\ncomposite widget.\n\nOn one-dimensional composite widgets:\n- `true` loops from the last item to the first item and vice-versa.\n- `horizontal` loops only if `orientation` is `horizontal` or not set.\n- `vertical` loops only if `orientation` is `vertical` or not set.\n- If `activeId` is initially set to `null`, the composite element will\n  be focused in between the last and first items.\n\nOn two-dimensional composite widgets (ie. when using `CompositeRow`):\n- `true` loops from the last row/column item to the first item in the same\n  row/column and vice-versa. If it's the last item in the last row, it\n  moves to the first item in the first row and vice-versa.\n- `horizontal` loops only from the last row item to the first item in the\n  same row.\n- `vertical` loops only from the last column item to the first item in the\n  column row.\n- If `activeId` is initially set to `null`, vertical loop will have no\n  effect as moving down from the last row or up from the first row will\n  focus on the composite element.\n- If `focusWrap` matches the value of `focusLoop`, it'll wrap between the\n  last item in the last row or column and the first item in the first row or\n  column and vice-versa.",
						"name": "focusLoop",
						"required": false,
						"tags": {},
						"type": { "name": "boolean | Orientation" }
					},
					"focusWrap": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "**Works only on two-dimensional composite widgets**.\n\nIf enabled, moving to the next item from the last one in a row or column\nwill focus on the first item in the next row or column and vice-versa.\n- `true` wraps between rows and columns.\n- `horizontal` wraps only between rows.\n- `vertical` wraps only between columns.\n- If `focusLoop` matches the value of `focusWrap`, it'll wrap between the\n  last item in the last row or column and the first item in the first row or\n  column and vice-versa.",
						"name": "focusWrap",
						"required": false,
						"tags": {},
						"type": { "name": "boolean | Orientation" }
					},
					"focusShift": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "**Works only on two-dimensional composite widgets**.\n\nIf enabled, moving up or down when there's no next item or when the next\nitem is disabled will shift to the item right before it.",
						"name": "focusShift",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"virtualFocus": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If enabled, the composite element will act as an\n[`aria-activedescendant`](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_focus_activedescendant)\ncontainer instead of [roving\ntabindex](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex).\nDOM focus will remain on the composite element while its items receive\nvirtual focus.\n\nIn both scenarios, the item in focus will carry the `data-active-item`\nattribute.",
						"name": "virtualFocus",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"orientation": {
						"defaultValue": { "value": "\"both\"" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Defines the orientation of the composite widget. If the composite has a\nsingle row or column (one-dimensional), the `orientation` value determines\nwhich arrow keys can be used to move focus:\n- `both`: all arrow keys work.\n- `horizontal`: only left and right arrow keys work.\n- `vertical`: only up and down arrow keys work.\n\nIt doesn't have any effect on two-dimensional composites.",
						"name": "orientation",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Orientation",
							"value": [
								{ "value": "\"both\"" },
								{ "value": "\"horizontal\"" },
								{ "value": "\"vertical\"" }
							]
						}
					},
					"rtl": {
						"defaultValue": { "value": "`isRtl()`" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Controls how the previous and next items are determined.\nIf `rtl` is set to `true`, they will be inverted.\n\nThis only affects the composite widget behavior. You still need to set\n`dir=\"rtl\"` on HTML/CSS.",
						"name": "rtl",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"render": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Allows the component to be rendered as a different HTML element or React\ncomponent. The value can be a React element or a function that takes in the\noriginal component props and gives back a React element with the props\nmerged.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ReactElement<unknown, string | JSXElementConstructor<any>> | RenderProp<HTMLAttributes<any> & { ref?: Ref<any>; }>" }
					},
					"focusable": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Makes the component a focusable element. When this element gains keyboard\nfocus, it gets a `data-focus-visible` attribute and triggers the\n`onFocusVisible` prop.\nThe component supports the `disabled` prop even for those elements not\nsupporting the native `disabled` attribute. Disabled elements may be\nstill accessible via keyboard by using the `accessibleWhenDisabled`\nprop.\nNon-native focusable elements will lose their focusability entirely.\nHowever, native focusable elements will retain their inherent focusability.",
						"name": "focusable",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines if the element is disabled. This sets the `aria-disabled`\nattribute accordingly, enabling support for all elements, including those\nthat don't support the native `disabled` attribute.\n\nThis feature can be combined with the `accessibleWhenDisabled` prop to\nmake disabled elements still accessible via keyboard.\n\n**Note**: For this prop to work, the `focusable` prop must be set to\n`true`, if it's not set by default.",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"accessibleWhenDisabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Indicates whether the element should be focusable even when it is\n`disabled`.\n\nThis is important when discoverability is a concern. For example:\n\n> A toolbar in an editor contains a set of special smart paste functions\nthat are disabled when the clipboard is empty or when the function is not\napplicable to the current content of the clipboard. It could be helpful to\nkeep the disabled buttons focusable if the ability to discover their\nfunctionality is primarily via their presence on the toolbar.\n\nLearn more on [Focusability of disabled\ncontrols](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#focusabilityofdisabledcontrols).",
						"name": "accessibleWhenDisabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onFocusVisible": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Custom event handler invoked when the element gains focus through keyboard\ninteraction or a key press occurs while the element is in focus. This is\nthe programmatic equivalent of the `data-focus-visible` attribute.\n\n**Note**: For this prop to work, the `focusable` prop must be set to `true`\nif it's not set by default.",
						"name": "onFocusVisible",
						"required": false,
						"tags": {},
						"type": { "name": "BivariantCallback<(event: SyntheticEvent<HTMLElement, Event>) => void>" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The contents of the component.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					}
				},
				"tags": { "example": "```jsx\nimport { Composite } from '@wordpress/components';\n\n<Composite>\n  <Composite.Item>Item 1</Composite.Item>\n  <Composite.Item>Item 2</Composite.Item>\n</Composite>\n```" }
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_composite as n, Composite as t };
