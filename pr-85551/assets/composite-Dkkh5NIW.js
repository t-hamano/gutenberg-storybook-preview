import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { o as isRTL, t as init_build_module } from "./build-module-v04us4E2.js";
import { n as warning, t as init_build_module$1 } from "./build-module-B5spW8IS.js";
import { n as init_composite_item, t as CompositeItem } from "./composite-item-JNO_FG0t.js";
import { a as Composite, n as useCompositeStore, o as init_composite$1, t as init_composite_store } from "./composite-store-1UKEKg_X.js";
import { a as init_composite_typeahead, i as CompositeTypeahead, n as init_composite_hover, t as CompositeHover } from "./composite-hover-Dw66ed1y.js";
import { a as init_composite_group, i as CompositeGroup, n as init_composite_group_label, t as CompositeGroupLabel } from "./composite-group-label-DWthIT6s.js";
import { n as init_composite_row, t as CompositeRow } from "./composite-row-C5Z-S4Kx.js";
//#region ../packages/components/build-module/composite/context.mjs
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
	})))();
}
//#endregion
//#region ../packages/components/build-module/composite/group.mjs
var import_jsx_runtime$6, CompositeGroup2;
function init_group() {
	return (init_group = __esmMin((() => {
		init_composite_group();
		init_react();
		init_context();
		import_jsx_runtime$6 = require_jsx_runtime();
		CompositeGroup2 = (0, import_react.forwardRef)(function UnforwardedCompositeGroup(props, ref) {
			const context = useCompositeContext();
			const { children, ...restProps } = props;
			const store = props.store ?? context.store;
			return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(CompositeGroup, {
				store,
				...restProps,
				ref,
				children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(CompositeGroupContext.Provider, {
					value: true,
					children
				})
			});
		});
	})))();
}
//#endregion
//#region ../packages/components/build-module/composite/group-label.mjs
var import_jsx_runtime$5, CompositeGroupLabel2;
function init_group_label() {
	return (init_group_label = __esmMin((() => {
		init_composite_group_label();
		init_react();
		init_context();
		import_jsx_runtime$5 = require_jsx_runtime();
		CompositeGroupLabel2 = (0, import_react.forwardRef)(function UnforwardedCompositeGroupLabel(props, ref) {
			const context = useCompositeContext();
			if (!useCompositeGroupContext()) throw new Error("Composite.GroupLabel can only be rendered inside Composite.Group.");
			const store = props.store ?? context.store;
			return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(CompositeGroupLabel, {
				store,
				...props,
				ref
			});
		});
	})))();
}
//#endregion
//#region ../packages/components/build-module/composite/hover.mjs
var import_jsx_runtime$4, CompositeHover2;
function init_hover() {
	return (init_hover = __esmMin((() => {
		init_composite_hover();
		init_react();
		init_context();
		import_jsx_runtime$4 = require_jsx_runtime();
		CompositeHover2 = (0, import_react.forwardRef)(function UnforwardedCompositeHover(props, ref) {
			const context = useCompositeContext();
			const store = props.store ?? context.store;
			return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(CompositeHover, {
				store,
				...props,
				ref
			});
		});
	})))();
}
//#endregion
//#region ../packages/components/build-module/composite/item.mjs
var import_jsx_runtime$3, CompositeItem2;
function init_item() {
	return (init_item = __esmMin((() => {
		init_composite_item();
		init_react();
		init_build_module$1();
		init_context();
		import_jsx_runtime$3 = require_jsx_runtime();
		CompositeItem2 = (0, import_react.forwardRef)(function UnforwardedCompositeItem(props, ref) {
			const context = useCompositeContext();
			const store = props.store ?? context.store;
			if (!store) warning("Composite.Item: Missing composite state. Render inside Composite to enable composite keyboard behavior.");
			return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(CompositeItem, {
				store,
				...props,
				ref
			});
		});
	})))();
}
//#endregion
//#region ../packages/components/build-module/composite/row.mjs
var import_jsx_runtime$2, CompositeRow2;
function init_row() {
	return (init_row = __esmMin((() => {
		init_composite_row();
		init_react();
		init_context();
		import_jsx_runtime$2 = require_jsx_runtime();
		CompositeRow2 = (0, import_react.forwardRef)(function UnforwardedCompositeRow(props, ref) {
			const context = useCompositeContext();
			const store = props.store ?? context.store;
			return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(CompositeRow, {
				store,
				...props,
				ref
			});
		});
	})))();
}
//#endregion
//#region ../packages/components/build-module/composite/typeahead.mjs
var import_jsx_runtime$1, CompositeTypeahead2;
function init_typeahead() {
	return (init_typeahead = __esmMin((() => {
		init_composite_typeahead();
		init_react();
		init_context();
		import_jsx_runtime$1 = require_jsx_runtime();
		CompositeTypeahead2 = (0, import_react.forwardRef)(function UnforwardedCompositeTypeahead(props, ref) {
			const context = useCompositeContext();
			const store = props.store ?? context.store;
			return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(CompositeTypeahead, {
				store,
				...props,
				ref
			});
		});
	})))();
}
//#endregion
//#region ../packages/components/build-module/composite/index.mjs
var import_jsx_runtime, Composite2;
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
		import_jsx_runtime = require_jsx_runtime();
		Composite2 = Object.assign((0, import_react.forwardRef)(function UnforwardedComposite({ activeId, defaultActiveId, setActiveId, focusLoop = false, focusWrap = false, focusShift = false, virtualFocus = false, orientation = "both", rtl = isRTL(), children, disabled = false, ...props }, ref) {
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
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Composite, {
				disabled,
				store,
				...props,
				ref,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompositeContext.Provider, {
					value: contextValue,
					children
				})
			});
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
			Group: Object.assign(CompositeGroup2, { displayName: "Composite.Group" }),
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
			GroupLabel: Object.assign(CompositeGroupLabel2, { displayName: "Composite.GroupLabel" }),
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
			Item: Object.assign(CompositeItem2, { displayName: "Composite.Item" }),
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
			Row: Object.assign(CompositeRow2, { displayName: "Composite.Row" }),
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
			Hover: Object.assign(CompositeHover2, { displayName: "Composite.Hover" }),
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
			Typeahead: Object.assign(CompositeTypeahead2, { displayName: "Composite.Typeahead" }),
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
	})))();
}
//#endregion
export { init_composite as n, Composite2 as t };
