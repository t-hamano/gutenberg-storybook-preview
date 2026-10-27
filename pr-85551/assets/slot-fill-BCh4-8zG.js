import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { r as init_react_platform, t as createPortal } from "./react-platform-BqLbFOjq.js";
import { a as init_utils, i as observableMap, n as useObservableValue, o as isEmptyElement, t as init_use_observable_value } from "./use-observable-value-HJZ_Kgzf.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as isShallowEqual, t as init_build_module } from "./build-module-COHfMY9T.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as warning, t as init_build_module$1 } from "./build-module-B5spW8IS.js";
import { n as init_component, t as View } from "./component-CkY7eURU.js";
import { n as init_style_provider, t as StyleProvider } from "./style-provider-CnKeKm7e.js";
import { r as init_use_slot } from "./popover-DZPLpaht.js";
//#region ../packages/components/src/slot-fill/context.ts
var initialValue, SlotFillContext;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		init_build_module$1();
		initialValue = {
			slots: observableMap(),
			fills: observableMap(),
			registerSlot: () => {
				warning("Components must be wrapped within `SlotFillProvider`. See https://developer.wordpress.org/block-editor/components/slot-fill/");
			},
			unregisterSlot: () => {},
			updateSlot: () => {},
			registerFill: () => {},
			unregisterFill: () => {},
			updateFill: () => {},
			isDefault: true
		};
		SlotFillContext = (0, import_react.createContext)(initialValue);
		SlotFillContext.displayName = "SlotFillContext";
	})))();
}
//#endregion
//#region ../packages/components/src/slot-fill/fill.tsx
function Fill({ name, children }) {
	const registry = (0, import_react.useContext)(SlotFillContext);
	const instanceRef = (0, import_react.useRef)({});
	const childrenRef = (0, import_react.useRef)(children);
	(0, import_react.useLayoutEffect)(() => {
		childrenRef.current = children;
	}, [children]);
	(0, import_react.useLayoutEffect)(() => {
		const instance = instanceRef.current;
		registry.registerFill(name, {
			instance,
			children: childrenRef.current
		});
		return () => registry.unregisterFill(name, instance);
	}, [registry, name]);
	(0, import_react.useLayoutEffect)(() => {
		registry.updateFill(name, {
			instance: instanceRef.current,
			children
		});
	}, [
		registry,
		name,
		children
	]);
	const slot = useObservableValue(registry.slots, name);
	if (!slot) return null;
	if (slot.type === "children") return null;
	const portalEl = slot.ref.current;
	if (!portalEl) return null;
	const wrappedChildren = typeof children === "function" ? children(slot.fillProps ?? {}) : children;
	return createPortal(/* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(StyleProvider, {
		document: portalEl.ownerDocument,
		children: wrappedChildren
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 61,
		columnNumber: 3
	}, this), portalEl);
}
var import_jsx_dev_runtime$4, _jsxFileName$4;
function init_fill() {
	return (init_fill = __esmMin((() => {
		init_use_observable_value();
		init_react(), init_react_platform();
		init_context();
		init_style_provider();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/slot-fill/fill.tsx";
		try {
			Fill.__docgenInfo = {
				"description": "",
				"displayName": "fill",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/slot-fill/fill.tsx",
				"methods": [],
				"props": {
					"name": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/slot-fill/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The name of the slot to fill into.",
						"name": "name",
						"required": true,
						"tags": {},
						"type": { "name": "SlotKey" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/slot-fill/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Children elements or render function.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "FillChildren" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/slot-fill/slot.tsx
/**
* Whether the argument is a function.
*
* @param maybeFunc The argument to check.
* @return True if the argument is a function, false otherwise.
*/
function isFunction(maybeFunc) {
	return typeof maybeFunc === "function";
}
function addKeysToChildren(children) {
	return import_react.Children.map(children, (child, childIndex) => {
		if (!child || typeof child === "string") return child;
		let childKey = childIndex;
		if (typeof child === "object" && "key" in child && child?.key) childKey = child.key;
		return (0, import_react.cloneElement)(child, { key: childKey });
	});
}
function Slot$2(props) {
	const { name, children, fillProps = {} } = props;
	const registry = (0, import_react.useContext)(SlotFillContext);
	const instanceRef = (0, import_react.useRef)({});
	(0, import_react.useLayoutEffect)(() => {
		const instance = instanceRef.current;
		registry.registerSlot(name, {
			type: "children",
			instance
		});
		return () => registry.unregisterSlot(name, instance);
	}, [registry, name]);
	let fills = useObservableValue(registry.fills, name) ?? [];
	const currentSlot = useObservableValue(registry.slots, name);
	if (!currentSlot || currentSlot.instance !== instanceRef.current) fills = [];
	const renderedFills = fills.map((fill) => {
		return addKeysToChildren(isFunction(fill.children) ? fill.children(fillProps) : fill.children);
	}).filter((element) => !isEmptyElement(element));
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(import_jsx_dev_runtime$3.Fragment, { children: isFunction(children) ? children(renderedFills) : renderedFills }, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 75,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$3, _jsxFileName$3;
function init_slot() {
	return (init_slot = __esmMin((() => {
		init_use_observable_value();
		init_react(), init_utils();
		init_context();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/slot-fill/slot.tsx";
		try {
			Slot$2.__docgenInfo = {
				"description": "",
				"displayName": "Slot",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/slot-fill/slot.tsx",
				"methods": [],
				"props": {
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/slot-fill/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/slot-fill/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Additional className for the `Slot` component.\nSupported only when `bubblesVirtually` is `true`.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/slot-fill/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/slot-fill/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function that returns nodes to be rendered.\nSupported only when `bubblesVirtually` is `false`.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "((fills: ReactNode) => ReactNode)" }
					},
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/slot-fill/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/slot-fill/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Additional styles for the `Slot` component.\nSupported only when `bubblesVirtually` is `true`.",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"name": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/slot-fill/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Slot name.",
						"name": "name",
						"required": true,
						"tags": {},
						"type": { "name": "SlotKey" }
					},
					"fillProps": {
						"defaultValue": { "value": "{}" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/slot-fill/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "props to pass from `Slot` to `Fill`.",
						"name": "fillProps",
						"required": false,
						"tags": {},
						"type": { "name": "FillProps" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/slot-fill/bubbles-virtually/slot.tsx
function Slot$1(props, forwardedRef) {
	const { name, fillProps = {}, as, children, ...restProps } = props;
	const registry = (0, import_react.useContext)(SlotFillContext);
	const instanceRef = (0, import_react.useRef)({});
	const ref = (0, import_react.useRef)(null);
	const fillPropsRef = (0, import_react.useRef)(fillProps);
	(0, import_react.useLayoutEffect)(() => {
		fillPropsRef.current = fillProps;
	}, [fillProps]);
	(0, import_react.useLayoutEffect)(() => {
		const instance = instanceRef.current;
		registry.registerSlot(name, {
			type: "portal",
			instance,
			ref,
			fillProps: fillPropsRef.current
		});
		return () => registry.unregisterSlot(name, instance);
	}, [registry, name]);
	(0, import_react.useLayoutEffect)(() => {
		registry.updateSlot(name, {
			type: "portal",
			instance: instanceRef.current,
			ref,
			fillProps: fillPropsRef.current
		});
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(View, {
		as,
		ref: useMergeRefs([forwardedRef, ref]),
		...restProps
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 61,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$2, _jsxFileName$2, slot_default;
function init_slot$1() {
	return (init_slot$1 = __esmMin((() => {
		init_react();
		init_use_merge_refs();
		init_component();
		init_context();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/slot-fill/bubbles-virtually/slot.tsx";
		slot_default = (0, import_react.forwardRef)(Slot$1);
		try {
			Slot$1.__docgenInfo = {
				"description": "",
				"displayName": "Slot",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/slot-fill/bubbles-virtually/slot.tsx",
				"methods": [],
				"props": {
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/slot-fill/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/slot-fill/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Additional className for the `Slot` component.\nSupported only when `bubblesVirtually` is `true`.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/slot-fill/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/slot-fill/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function that returns nodes to be rendered.\nSupported only when `bubblesVirtually` is `false`.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "((fills: ReactNode) => ReactNode)" }
					},
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/slot-fill/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/slot-fill/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Additional styles for the `Slot` component.\nSupported only when `bubblesVirtually` is `true`.",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"name": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/slot-fill/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Slot name.",
						"name": "name",
						"required": true,
						"tags": {},
						"type": { "name": "SlotKey" }
					},
					"fillProps": {
						"defaultValue": { "value": "{}" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/slot-fill/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "props to pass from `Slot` to `Fill`.",
						"name": "fillProps",
						"required": false,
						"tags": {},
						"type": { "name": "FillProps" }
					},
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/context/wordpress-component.ts",
							"name": "TypeLiteral"
						}],
						"description": "The HTML element or React component to render the component as.",
						"name": "as",
						"required": false,
						"tags": {},
						"type": { "name": "keyof IntrinsicElements | JSXElementConstructor<any>" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/slot-fill/provider.tsx
function createSlotRegistry() {
	const slots = observableMap();
	const fills = observableMap();
	function registerSlot(name, slot) {
		slots.set(name, slot);
	}
	function unregisterSlot(name, instance) {
		const currentSlot = slots.get(name);
		if (!currentSlot || currentSlot.instance !== instance) return;
		slots.delete(name);
	}
	function updateSlot(name, slot) {
		if (slot.type !== "portal") return;
		const slotForName = slots.get(name);
		if (!slotForName) return;
		if (slotForName.type !== "portal") return;
		if (slotForName.instance !== slot.instance) return;
		if (isShallowEqual(slotForName.fillProps, slot.fillProps)) return;
		slots.set(name, slot);
	}
	function registerFill(name, fill) {
		fills.set(name, [...fills.get(name) || [], fill]);
	}
	function unregisterFill(name, instance) {
		const fillsForName = fills.get(name);
		if (!fillsForName) return;
		fills.set(name, fillsForName.filter((fill) => fill.instance !== instance));
	}
	function updateFill(name, fill) {
		const fillsForName = fills.get(name);
		if (!fillsForName) return;
		const fillForInstance = fillsForName.find((f) => f.instance === fill.instance);
		if (!fillForInstance) return;
		if (fillForInstance.children === fill.children) return;
		fills.set(name, fillsForName.map((f) => {
			if (f.instance === fill.instance) return fill;
			return f;
		}));
	}
	return {
		slots,
		fills,
		registerSlot,
		unregisterSlot,
		updateSlot,
		registerFill,
		unregisterFill,
		updateFill
	};
}
function SlotFillProvider({ children }) {
	const [contextValue] = (0, import_react.useState)(createSlotRegistry);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(SlotFillContext.Provider, {
		value: contextValue,
		children
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 120,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_provider() {
	return (init_provider = __esmMin((() => {
		init_react();
		init_build_module();
		init_context();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/slot-fill/provider.tsx";
		try {
			SlotFillProvider.__docgenInfo = {
				"description": "",
				"displayName": "SlotFillProvider",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/slot-fill/provider.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/slot-fill/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The children elements.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"passthrough": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/slot-fill/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to pass slots to the parent provider if existent.",
						"name": "passthrough",
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
//#region ../packages/components/src/slot-fill/index.tsx
function Provider({ children, passthrough = false }) {
	if (!(0, import_react.useContext)(SlotFillContext).isDefault && passthrough) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 47,
		columnNumber: 10
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SlotFillProvider, { children }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 49,
		columnNumber: 9
	}, this);
}
function createSlotFill(key) {
	const baseName = typeof key === "symbol" ? key.description : key;
	const FillComponent = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fill, {
		name: key,
		...props
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 56,
		columnNumber: 3
	}, this);
	FillComponent.displayName = `${baseName}Fill`;
	const SlotComponent = (0, import_react.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, {
		name: key,
		ref,
		...props
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 65,
		columnNumber: 8
	}, this));
	SlotComponent.displayName = `${baseName}Slot`;
	/**
	* @deprecated 6.8.0
	* Please use `slotFill.name` instead of `slotFill.Slot.__unstableName`.
	*/
	SlotComponent.__unstableName = key;
	return {
		name: key,
		Fill: FillComponent,
		Slot: SlotComponent
	};
}
var import_jsx_dev_runtime, _jsxFileName, Slot;
function init_slot_fill() {
	return (init_slot_fill = __esmMin((() => {
		init_react();
		init_fill();
		init_slot();
		init_slot$1();
		init_provider();
		init_context();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		init_use_slot();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/slot-fill/index.tsx";
		Slot = (0, import_react.forwardRef)((props, ref) => {
			const { bubblesVirtually, ...restProps } = props;
			if (bubblesVirtually) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(slot_default, {
				...restProps,
				ref
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 34,
				columnNumber: 11
			}, void 0);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot$2, { ...restProps }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 36,
				columnNumber: 10
			}, void 0);
		});
		Slot.displayName = "Slot";
		Provider.displayName = "SlotFillProvider";
		try {
			Provider.__docgenInfo = {
				"description": "",
				"displayName": "Provider",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/slot-fill/index.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/slot-fill/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The children elements.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"passthrough": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/slot-fill/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to pass slots to the parent provider if existent.",
						"name": "passthrough",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			createSlotFill.__docgenInfo = {
				"description": "",
				"displayName": "createSlotFill",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/slot-fill/index.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Slot.__docgenInfo = {
				"description": "`Slot` marks a location where content rendered by matching `Fill` components\nelsewhere will appear. Use it to allow a component to define UI areas that\ncan be extended from other parts of the application.",
				"displayName": "Slot",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/slot-fill/index.tsx",
				"methods": [],
				"props": {
					"name": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/slot-fill/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Slot name.",
						"name": "name",
						"required": true,
						"tags": {},
						"type": { "name": "SlotKey" }
					},
					"fillProps": {
						"defaultValue": { "value": "{}" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/slot-fill/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "props to pass from `Slot` to `Fill`.",
						"name": "fillProps",
						"required": false,
						"tags": {},
						"type": { "name": "FillProps" }
					},
					"bubblesVirtually": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/slot-fill/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/slot-fill/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "By default, events will bubble to their parents on the DOM hierarchy (native event bubbling).\nIf set to true, events will bubble to their virtual parent in the React elements hierarchy instead,\nalso accept an optional `className`, `id`, etc.  to add to the slot container.",
						"name": "bubblesVirtually",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/slot-fill/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/slot-fill/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function that returns nodes to be rendered.\nSupported only when `bubblesVirtually` is `false`.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "((fills: ReactNode) => ReactNode)" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/slot-fill/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/slot-fill/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Additional className for the `Slot` component.\nSupported only when `bubblesVirtually` is `true`.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"style": {
						"defaultValue": null,
						"declarations": [
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/slot-fill/types.ts",
								"name": "TypeLiteral"
							},
							{
								"fileName": "gutenberg-storybook-preview/node_modules/.store/@types/react@19.3.0-8Cb6klKRzlU2xvNuV7s80Q/node_modules/@types/react/index.d.ts",
								"name": "HTMLAttributes"
							},
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/slot-fill/types.ts",
								"name": "TypeLiteral"
							},
							{
								"fileName": "gutenberg-storybook-preview/node_modules/.store/@types/react@19.3.0-8Cb6klKRzlU2xvNuV7s80Q/node_modules/@types/react/index.d.ts",
								"name": "HTMLAttributes"
							}
						],
						"description": "Additional styles for the `Slot` component.\nSupported only when `bubblesVirtually` is `true`.",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/context/wordpress-component.ts",
							"name": "TypeLiteral"
						}],
						"description": "The HTML element or React component to render the component as.",
						"name": "as",
						"required": false,
						"tags": {},
						"type": { "name": "keyof IntrinsicElements | JSXElementConstructor<any>" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { Fill as a, init_context as c, init_slot_fill as i, Slot as n, init_fill as o, createSlotFill as r, SlotFillContext as s, Provider as t };
