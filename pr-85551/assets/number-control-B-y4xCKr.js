import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as __, o as isRTL, t as init_build_module$1 } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { n as plus_default } from "./plus-Dg5_68lB.js";
import { n as reset_default } from "./reset-7DubdZqZ.js";
import { d as isValueEmpty, l as init_values, s as ensureNumber } from "./hook-8Ggu2zt9.js";
import { n as init_component, t as component_default } from "./component-CGFBrMki.js";
import { l as init_actions, n as init_input_control, r as input_control_default } from "./input-control-nLdfCkqP.js";
import { n as button_default, r as init_button } from "./button-BxmZjN4X.js";
import { n as init_component$1, t as component_default$1 } from "./component-CbGAmvwd.js";
import { r as init_build_module$2 } from "./library.story-CbQx3MQ6.js";
//#region ../packages/components/build-module/utils/math.mjs
function getNumber(value) {
	const number = Number(value);
	return isNaN(number) ? 0 : number;
}
function add(...args) {
	return args.reduce((sum, arg) => sum + getNumber(arg), 0);
}
function subtract(...args) {
	return args.reduce((diff, arg, index) => {
		const value = getNumber(arg);
		return index === 0 ? value : diff - value;
	}, 0);
}
function getPrecision(value) {
	const split = (value + "").split(".");
	return split[1] !== void 0 ? split[1].length : 0;
}
function clamp(value, min, max) {
	const baseValue = getNumber(value);
	return Math.max(min, Math.min(baseValue, max));
}
function ensureValidStep(value, min, step) {
	const baseValue = getNumber(value);
	const minValue = getNumber(min);
	const stepValue = getNumber(step);
	const precision = Math.max(getPrecision(step), getPrecision(min));
	const tare = minValue % stepValue ? minValue : 0;
	const fromMin = Math.round((baseValue - tare) / stepValue) * stepValue + tare;
	return precision ? getNumber(fromMin.toFixed(precision)) : fromMin;
}
function init_math() {
	return (init_math = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/components/build-module/number-control/index.mjs
function getRuntime() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE) === hash) return true;
	return false;
}
function injectStyle(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument(targetDocument) {
	const runtime = getRuntime();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle(targetDocument, hash, css);
	return () => {
		const count = runtime.documents.get(targetDocument);
		if (count === void 0) return;
		if (count <= 1) {
			runtime.documents.delete(targetDocument);
			return;
		}
		runtime.documents.set(targetDocument, count - 1);
	};
}
function registerStyle(hash, css) {
	const runtime = getRuntime();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle(targetDocument, hash, css);
}
function UnforwardedNumberControl(props, forwardedRef) {
	const { __unstableStateReducer: stateReducerProp, className, dragDirection = "n", hideHTMLArrows = false, spinControls = hideHTMLArrows ? "none" : "native", isDragEnabled = true, isShiftStepEnabled = true, label, max = Infinity, min = -Infinity, required = false, shiftStep = 10, step = 1, spinFactor = 1, type: typeProp = "number", value: valueProp, size = "default", suffix, onChange = noop, ...restProps } = props;
	if (hideHTMLArrows) deprecated("wp.components.NumberControl hideHTMLArrows prop ", {
		alternative: "spinControls=\"none\"",
		since: "6.2",
		version: "6.3"
	});
	const inputRef = (0, import_react.useRef)(null);
	const mergedRef = useMergeRefs([inputRef, forwardedRef]);
	const isStepAny = step === "any";
	const baseStep = isStepAny ? 1 : ensureNumber(step);
	const baseSpin = ensureNumber(spinFactor) * baseStep;
	const constrainValue = (value, stepOverride) => {
		if (!isStepAny) value = ensureValidStep(value, min, stepOverride ?? baseStep);
		return `${clamp(value, min, max)}`;
	};
	const baseValue = constrainValue(0);
	const autoComplete = typeProp === "number" ? "off" : void 0;
	const classes = clsx("components-number-control", className, { [style_module_default["hide-html-arrows"]]: spinControls !== "native" });
	const spinButtonClasses = clsx(style_module_default["spin-button"], { [style_module_default["is-small"]]: size === "small" });
	const spinValue = (value, direction, event) => {
		event?.preventDefault();
		const shift = event?.shiftKey && isShiftStepEnabled;
		const delta = shift ? ensureNumber(shiftStep) * baseSpin : baseSpin;
		let nextValue = isValueEmpty(value) ? baseValue : value;
		if (direction === "up") nextValue = add(nextValue, delta);
		else if (direction === "down") nextValue = subtract(nextValue, delta);
		return constrainValue(nextValue, shift ? delta : void 0);
	};
	const numberControlStateReducer = (state, action) => {
		const nextState = { ...state };
		const { type, payload } = action;
		const event = payload.event;
		const currentValue = nextState.value;
		if (type === "PRESS_UP" || type === "PRESS_DOWN") nextState.value = spinValue(currentValue, type === "PRESS_UP" ? "up" : "down", event);
		if (type === "DRAG" && isDragEnabled) {
			const [x, y] = payload.delta;
			const enableShift = payload.shiftKey && isShiftStepEnabled;
			const modifier = enableShift ? ensureNumber(shiftStep) * baseSpin : baseSpin;
			let directionModifier;
			let delta;
			switch (dragDirection) {
				case "n":
					delta = y;
					directionModifier = -1;
					break;
				case "e":
					delta = x;
					directionModifier = isRTL() ? -1 : 1;
					break;
				case "s":
					delta = y;
					directionModifier = 1;
					break;
				case "w":
					delta = x;
					directionModifier = isRTL() ? 1 : -1;
			}
			if (delta !== 0) {
				delta = Math.ceil(Math.abs(delta)) * Math.sign(delta);
				const distance = delta * modifier * directionModifier;
				nextState.value = constrainValue(add(currentValue, distance), enableShift ? modifier : void 0);
			}
		}
		if (type === "PRESS_ENTER" || type === "COMMIT") nextState.value = required === false && currentValue === "" ? currentValue : constrainValue(currentValue);
		return stateReducerProp?.(nextState, action) ?? nextState;
	};
	const buildSpinButtonClickHandler = (direction) => (event) => onChange(String(spinValue(valueProp, direction, event)), { event: {
		...event,
		target: inputRef.current
	} });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_control_default, {
		autoComplete,
		inputMode: "numeric",
		...restProps,
		className: classes,
		dragDirection,
		isDragEnabled,
		label,
		max: max === Infinity ? void 0 : max,
		min: min === -Infinity ? void 0 : min,
		ref: mergedRef,
		required,
		step,
		type: typeProp,
		value: valueProp,
		__unstableStateReducer: numberControlStateReducer,
		size,
		suffix: spinControls === "custom" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [suffix, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(component_default, {
			marginBottom: 0,
			marginRight: 2,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(component_default$1, {
				spacing: 1,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, {
					className: spinButtonClasses,
					icon: plus_default,
					size: "small",
					label: __("Increment"),
					onClick: buildSpinButtonClickHandler("up")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, {
					className: spinButtonClasses,
					icon: reset_default,
					size: "small",
					label: __("Decrement"),
					onClick: buildSpinButtonClickHandler("down")
				})]
			})
		})] }) : suffix,
		onChange
	});
}
var import_jsx_runtime, STYLE_HASH_ATTRIBUTE, style_module_default, noop, NumberControl, number_control_default;
function init_number_control() {
	return (init_number_control = __esmMin((() => {
		init_clsx();
		init_react();
		init_build_module$1();
		init_build_module$2();
		init_use_merge_refs();
		init_build_module();
		init_input_control();
		init_button();
		init_actions();
		init_values();
		init_component$1();
		init_component();
		import_jsx_runtime = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("bf20d54b32", ".e6152a48fdb42a43__hide-html-arrows input[type=number]::-webkit-inner-spin-button,.e6152a48fdb42a43__hide-html-arrows input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none!important;margin:0!important}.e6152a48fdb42a43__hide-html-arrows input[type=number]{-moz-appearance:textfield}.b4facf2af387e66d__spin-button.b4facf2af387e66d__spin-button.b4facf2af387e66d__spin-button.b4facf2af387e66d__spin-button.b4facf2af387e66d__spin-button{color:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9))}.b4facf2af387e66d__spin-button:where(._99c9a6404136b1df__is-small){height:20px;min-width:20px;width:20px}");
		style_module_default = {
			"hide-html-arrows": "e6152a48fdb42a43__hide-html-arrows",
			"spin-button": "b4facf2af387e66d__spin-button",
			"is-small": "_99c9a6404136b1df__is-small"
		};
		noop = () => {};
		NumberControl = (0, import_react.forwardRef)(UnforwardedNumberControl);
		NumberControl.displayName = "NumberControl";
		number_control_default = NumberControl;
	})))();
}
//#endregion
export { init_math as i, number_control_default as n, clamp as r, init_number_control as t };
