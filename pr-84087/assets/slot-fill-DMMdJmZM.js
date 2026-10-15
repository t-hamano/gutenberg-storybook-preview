import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { r as init_react_platform, t as createPortal } from "./react-platform-BqLbFOjq.js";
import { a as init_utils, i as observableMap, n as useObservableValue, o as isEmptyElement, t as init_use_observable_value } from "./use-observable-value-HJZ_Kgzf.js";
import { lt as init_use_slot_fills } from "./utils-dsqiVm_K.js";
import { n as isShallowEqual, t as init_build_module } from "./build-module-COHfMY9T.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as init_component, t as component_default } from "./component-CFOx0tK5.js";
import { r as init_use_slot } from "./popover-U8QQZ1i9.js";
import { n as init_style_provider, r as style_provider_default } from "./style-provider-BlGZcMa2.js";
//#region ../packages/components/build-module/slot-fill/context.mjs
var initialValue, SlotFillContext, context_default;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		initialValue = {
			slots: observableMap(),
			fills: observableMap(),
			registerSlot: () => {},
			unregisterSlot: () => {},
			updateSlot: () => {},
			registerFill: () => {},
			unregisterFill: () => {},
			updateFill: () => {},
			isDefault: true
		};
		SlotFillContext = (0, import_react.createContext)(initialValue);
		SlotFillContext.displayName = "SlotFillContext";
		context_default = SlotFillContext;
	})))();
}
//#endregion
//#region ../packages/components/build-module/slot-fill/fill.mjs
function Fill({ name, children }) {
	const registry = (0, import_react.useContext)(context_default);
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
	return createPortal(/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(style_provider_default, {
		document: portalEl.ownerDocument,
		children: wrappedChildren
	}), portalEl);
}
var import_jsx_runtime$4;
function init_fill() {
	return (init_fill = __esmMin((() => {
		init_use_observable_value();
		init_react(), init_react_platform();
		init_context();
		init_style_provider();
		import_jsx_runtime$4 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../packages/components/build-module/slot-fill/slot.mjs
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
	const registry = (0, import_react.useContext)(context_default);
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
	return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(import_jsx_runtime$3.Fragment, { children: isFunction(children) ? children(renderedFills) : renderedFills });
}
var import_jsx_runtime$3, slot_default$1;
function init_slot() {
	return (init_slot = __esmMin((() => {
		init_use_observable_value();
		init_react(), init_utils();
		init_context();
		import_jsx_runtime$3 = require_jsx_runtime();
		slot_default$1 = Slot$2;
	})))();
}
//#endregion
//#region ../packages/components/build-module/slot-fill/bubbles-virtually/slot.mjs
function Slot$1(props, forwardedRef) {
	const { name, fillProps = {}, as, children, ...restProps } = props;
	const registry = (0, import_react.useContext)(context_default);
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
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(component_default, {
		as,
		ref: useMergeRefs([forwardedRef, ref]),
		...restProps
	});
}
var import_jsx_runtime$2, slot_default;
function init_slot$1() {
	return (init_slot$1 = __esmMin((() => {
		init_react();
		init_use_merge_refs();
		init_component();
		init_context();
		import_jsx_runtime$2 = require_jsx_runtime();
		slot_default = (0, import_react.forwardRef)(Slot$1);
	})))();
}
//#endregion
//#region ../packages/components/build-module/slot-fill/provider.mjs
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
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(context_default.Provider, {
		value: contextValue,
		children
	});
}
var import_jsx_runtime$1, provider_default;
function init_provider() {
	return (init_provider = __esmMin((() => {
		init_react();
		init_build_module();
		init_context();
		import_jsx_runtime$1 = require_jsx_runtime();
		provider_default = SlotFillProvider;
	})))();
}
//#endregion
//#region ../packages/components/build-module/slot-fill/index.mjs
function Provider({ children, passthrough = false }) {
	if (!(0, import_react.useContext)(context_default).isDefault && passthrough) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(provider_default, { children });
}
function createSlotFill(key) {
	const baseName = typeof key === "symbol" ? key.description : key;
	const FillComponent = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fill, {
		name: key,
		...props
	});
	FillComponent.displayName = `${baseName}Fill`;
	const SlotComponent = (0, import_react.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slot, {
		name: key,
		ref,
		...props
	}));
	SlotComponent.displayName = `${baseName}Slot`;
	SlotComponent.__unstableName = key;
	return {
		name: key,
		Fill: FillComponent,
		Slot: SlotComponent
	};
}
var import_jsx_runtime, Slot;
function init_slot_fill() {
	return (init_slot_fill = __esmMin((() => {
		init_react();
		init_fill();
		init_slot();
		init_slot$1();
		init_provider();
		init_context();
		import_jsx_runtime = require_jsx_runtime();
		init_use_slot();
		init_use_slot_fills();
		Slot = (0, import_react.forwardRef)((props, ref) => {
			const { bubblesVirtually, ...restProps } = props;
			if (bubblesVirtually) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slot_default, {
				...restProps,
				ref
			});
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slot_default$1, { ...restProps });
		});
		Slot.displayName = "Slot";
		Provider.displayName = "SlotFillProvider";
	})))();
}
//#endregion
export { Fill as a, init_context as c, init_slot_fill as i, Slot as n, init_fill as o, createSlotFill as r, context_default as s, Provider as t };
