import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as __, o as isRTL, t as init_build_module$1 } from "./build-module-v04us4E2.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as plus_default } from "./plus-9ndJHGzu.js";
import { n as reset_default } from "./reset-BNKWWBQ_.js";
import { a as isValueEmpty, r as init_values, t as ensureNumber } from "./values-Dw4yFgqQ.js";
import { n as init_component, t as HStack } from "./component-D91dSxn4.js";
import { n as init_component$1, t as Spacer } from "./component-j14m8az7.js";
import { n as init_input_control, t as InputControl } from "./input-control-Dse9Lf8b.js";
import { f as init_actions } from "./actions-BKLQwEs8.js";
import { n as init_button, t as Button } from "./button-wsTfHPkm.js";
import { r as init_build_module$2 } from "./library.story-DawnfKTW.js";
//#region ../packages/components/src/number-control/style.module.scss
var style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		style_module_default = {
			"hide-html-arrows": "_hide-html-arrows_1fhdz_46",
			"spin-button": "_spin-button_1fhdz_55",
			"is-small": "_is-small_1fhdz_58"
		};
	})))();
}
//#endregion
//#region ../packages/components/src/utils/math.ts
/**
* Parses and retrieves a number value.
*
* @param value The incoming value.
*
* @return The parsed number value.
*/
function getNumber(value) {
	const number = Number(value);
	return isNaN(number) ? 0 : number;
}
/**
* Safely adds 2 values.
*
* @param args Values to add together.
*
* @return The sum of values.
*/
function add(...args) {
	return args.reduce((sum, arg) => sum + getNumber(arg), 0);
}
/**
* Safely subtracts 2 values.
*
* @param args Values to subtract together.
*
* @return The difference of the values.
*/
function subtract(...args) {
	return args.reduce((diff, arg, index) => {
		const value = getNumber(arg);
		return index === 0 ? value : diff - value;
	}, 0);
}
/**
* Determines the decimal position of a number value.
*
* @param value The number to evaluate.
*
* @return The number of decimal places.
*/
function getPrecision(value) {
	const split = (value + "").split(".");
	return split[1] !== void 0 ? split[1].length : 0;
}
/**
* Clamps a value based on a min/max range.
*
* @param value The value.
* @param min   The minimum range.
* @param max   The maximum range.
*
* @return The clamped value.
*/
function clamp(value, min, max) {
	const baseValue = getNumber(value);
	return Math.max(min, Math.min(baseValue, max));
}
/**
* Rounds a value to the nearest step offset by a minimum.
*
* @param value The value.
* @param min   The minimum range.
* @param step  The increment for the value.
*
* @return The value as a valid step.
*/
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
//#region ../packages/components/src/number-control/index.tsx
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
	/**
	* "Middleware" function that intercepts updates from InputControl.
	* This allows us to tap into actions to transform the (next) state for
	* InputControl.
	*
	* @return The updated state to apply to InputControl
	*/
	const numberControlStateReducer = (state, action) => {
		const nextState = { ...state };
		const { type, payload } = action;
		const event = payload.event;
		const currentValue = nextState.value;
		/**
		* Handles custom UP and DOWN Keyboard events
		*/
		if (type === "PRESS_UP" || type === "PRESS_DOWN") nextState.value = spinValue(currentValue, type === "PRESS_UP" ? "up" : "down", event);
		/**
		* Handles drag to update events
		*/
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
		/**
		* Handles commit (ENTER key press or blur)
		*/
		if (type === "PRESS_ENTER" || type === "COMMIT") nextState.value = required === false && currentValue === "" ? currentValue : constrainValue(currentValue);
		return stateReducerProp?.(nextState, action) ?? nextState;
	};
	const buildSpinButtonClickHandler = (direction) => (event) => onChange(String(spinValue(valueProp, direction, event)), { event: {
		...event,
		target: inputRef.current
	} });
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputControl, {
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
		suffix: spinControls === "custom" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [suffix, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spacer, {
			marginBottom: 0,
			marginRight: 2,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HStack, {
				spacing: 1,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					className: spinButtonClasses,
					icon: plus_default,
					size: "small",
					label: __("Increment"),
					onClick: buildSpinButtonClickHandler("up")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 230,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					className: spinButtonClasses,
					icon: reset_default,
					size: "small",
					label: __("Decrement"),
					onClick: buildSpinButtonClickHandler("down")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 239,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 229,
				columnNumber: 8
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 228,
			columnNumber: 7
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 226,
			columnNumber: 6
		}, this) : suffix,
		onChange
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 206,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, noop, NumberControl;
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
		init_style_module();
		init_actions();
		init_values();
		init_component();
		init_component$1();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/number-control/index.tsx";
		noop = () => {};
		NumberControl = (0, import_react.forwardRef)(UnforwardedNumberControl);
		NumberControl.displayName = "NumberControl";
		try {
			NumberControl.__docgenInfo = {
				"description": "`NumberControl` is a text input control that lets users enter and adjust a\nnumeric value.",
				"displayName": "NumberControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/number-control/index.tsx",
				"methods": [],
				"props": {
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						}],
						"description": "If this property is added, a label will be generated using label property as the content.",
						"name": "label",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"prefix": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						}],
						"description": "Renders an element on the left side of the input.\n\nBy default, the prefix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in\nthe provided `<InputControlPrefixWrapper>` component.\n\n```jsx\nimport {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlPrefixWrapper as InputControlPrefixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  prefix={<InputControlPrefixWrapper>@</InputControlPrefixWrapper>}\n/>\n```",
						"name": "prefix",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "A function that receives the value of the input.",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "InputChangeCallback<{}>" }
					},
					"onDrag": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "onDrag",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((dragProps: Omit<FullGestureState<\"drag\">, \"event\"> & { event: unknown; }) => void)" }
					},
					"onDragEnd": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "onDragEnd",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((dragProps: Omit<FullGestureState<\"drag\">, \"event\"> & { event: unknown; }) => void)" }
					},
					"onDragStart": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "onDragStart",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((dragProps: Omit<FullGestureState<\"drag\">, \"event\"> & { event: unknown; }) => void)" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						}],
						"description": "If true, the `input` will be disabled.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"size": {
						"defaultValue": { "value": "'default'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						}],
						"description": "Adjusts the size of the input.",
						"name": "size",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Size",
							"value": [
								{ "value": "\"small\"" },
								{ "value": "\"default\"" },
								{ "value": "\"compact\"" }
							]
						}
					},
					"suffix": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						}],
						"description": "Renders an element on the right side of the input.\n\nBy default, the suffix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in\nthe provided `<InputControlSuffixWrapper>` component.\n\n```jsx\nimport {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlSuffixWrapper as InputControlSuffixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  suffix={<InputControlSuffixWrapper>%</InputControlSuffixWrapper>}\n/>\n```",
						"name": "suffix",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"hideLabelFromVision": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						}],
						"description": "If true, the label will only be visible to screen readers.",
						"name": "hideLabelFromVision",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"labelPosition": {
						"defaultValue": { "value": "'top'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						}],
						"description": "The position of the label.",
						"name": "labelPosition",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "LabelPosition",
							"value": [
								{ "value": "\"top\"" },
								{ "value": "\"side\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"edge\"" }
							]
						}
					},
					"help": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Additional description for the control.\n\nOnly use for meaningful description or instructions for the control. An element containing the description will be programmatically associated to the BaseControl by the means of an `aria-describedby` attribute.",
						"name": "help",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"__unstableInputWidth": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						}],
						"description": "",
						"name": "__unstableInputWidth",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Width<string | number>" }
					},
					"dragDirection": {
						"defaultValue": { "value": "'n'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "Determines the drag axis.",
						"name": "dragDirection",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "DragDirection",
							"value": [
								{ "value": "\"s\"" },
								{ "value": "\"n\"" },
								{ "value": "\"e\"" },
								{ "value": "\"w\"" }
							]
						}
					},
					"dragThreshold": {
						"defaultValue": { "value": "10" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "If `isDragEnabled` is true, this controls the amount of `px` to have been dragged before\nthe drag gesture is actually triggered.",
						"name": "dragThreshold",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"isPressEnterToChange": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "If true, the `ENTER` key press is required in order to trigger an `onChange`.\nIf enabled, a change is also triggered when tabbing away (`onBlur`).",
						"name": "isPressEnterToChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onValidate": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "onValidate",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((nextValue: string, event?: SyntheticEvent<HTMLInputElement, Event>) => void)" }
					},
					"__next36pxDefaultSize": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlProps"
						}],
						"description": "Deprecated. Use `__next40pxDefaultSize` instead.\n@deprecated\n@ignore",
						"name": "__next36pxDefaultSize",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__next40pxDefaultSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlProps"
						}],
						"description": "@deprecated Default behavior since WordPress 7.1. Prop can be safely removed.\n@ignore",
						"name": "__next40pxDefaultSize",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__unstableStateReducer": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlProps"
						}],
						"description": "",
						"name": "__unstableStateReducer",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "StateReducer" }
					},
					"hideHTMLArrows": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/number-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If true, the default `input` HTML arrows will be hidden.\n@deprecated",
						"name": "hideHTMLArrows",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"spinControls": {
						"defaultValue": { "value": "'native'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/number-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The type of spin controls to display. These are buttons that allow the\nuser to quickly increment and decrement the number.\n\n- 'none' - Do not show spin controls.\n- 'native' - Use browser's native HTML `input` controls.\n- 'custom' - Use plus and minus icon buttons.",
						"name": "spinControls",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"none\" | \"custom\" | \"native\"",
							"value": [
								{ "value": "\"none\"" },
								{ "value": "\"custom\"" },
								{ "value": "\"native\"" }
							]
						}
					},
					"isDragEnabled": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/number-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If true, enables mouse drag gestures.",
						"name": "isDragEnabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isShiftStepEnabled": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/number-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If true, pressing `UP` or `DOWN` along with the `SHIFT` key will increment the\nvalue by the `shiftStep` value.",
						"name": "isShiftStepEnabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"max": {
						"defaultValue": { "value": "Infinity" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/number-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The maximum `value` allowed.",
						"name": "max",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"min": {
						"defaultValue": { "value": "-Infinity" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/number-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The minimum `value` allowed.",
						"name": "min",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"required": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/number-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If `true` enforces a valid number within the control's min/max range.\nIf `false` allows an empty string as a valid value.",
						"name": "required",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"shiftStep": {
						"defaultValue": { "value": "10" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/number-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Amount to increment by when the `SHIFT` key is held down. This shift value is\na multiplier to the `step` value. For example, if the `step` value is `5`,\nand `shiftStep` is `10`, each jump would increment/decrement by `50`.",
						"name": "shiftStep",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"step": {
						"defaultValue": { "value": "1" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/number-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Amount by which the `value` is changed when incrementing/decrementing.\nIt is also a factor in validation as `value` must be a multiple of `step`\n(offset by `min`, if specified) to be valid. Accepts the special string value `any`\nthat voids the validation constraint and causes stepping actions to increment/decrement by `1`.",
						"name": "step",
						"required": false,
						"tags": {},
						"type": { "name": "string | number" }
					},
					"spinFactor": {
						"defaultValue": { "value": "1" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/number-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Optional multiplication factor in spin changes. i.e. A spin changes\nby `spinFactor * step` (if `step` is \"any\", 1 is used instead).",
						"name": "spinFactor",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"type": {
						"defaultValue": { "value": "'number'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/number-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The `type` attribute of the `input` element.",
						"name": "type",
						"required": false,
						"tags": {},
						"type": { "name": "HTMLInputTypeAttribute" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/number-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The value of the input.",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "string | number" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_math as i, init_number_control as n, clamp as r, NumberControl as t };
