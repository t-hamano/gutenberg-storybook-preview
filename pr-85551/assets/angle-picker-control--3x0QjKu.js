import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useDragging, t as init_use_dragging } from "./use-dragging-BjSRePBP.js";
import { n as __, o as isRTL, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { n as init_component, t as Flex } from "./component-DsRVYDtI.js";
import { n as init_component$1, t as FlexBlock } from "./component-CmmRIgcK.js";
import { n as init_component$2, t as Spacer } from "./component-Bc4OQbO4.js";
import { n as init_number_control, t as NumberControl } from "./number-control-DmcFblem.js";
import { n as init_input_prefix_wrapper, t as InputControlPrefixWrapper } from "./input-prefix-wrapper-ByQWCBpq.js";
import { n as init_input_suffix_wrapper, t as InputControlSuffixWrapper } from "./input-suffix-wrapper-2X1hSqMG.js";
//#region ../packages/components/src/angle-picker-control/style.module.scss
var style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		style_module_default = {
			"circle-root": "_circle-root_b086v_46",
			"circle-indicator-wrapper": "_circle-indicator-wrapper_b086v_59",
			"circle-indicator": "_circle-indicator_b086v_59"
		};
	})))();
}
//#endregion
//#region ../packages/components/src/angle-picker-control/angle-circle.tsx
function AngleCircle({ value, onChange, className, ...props }) {
	const angleCircleRef = (0, import_react.useRef)(null);
	const angleCircleCenterRef = (0, import_react.useRef)(void 0);
	const previousCursorValueRef = (0, import_react.useRef)(void 0);
	const setAngleCircleCenter = () => {
		if (angleCircleRef.current === null) return;
		const rect = angleCircleRef.current.getBoundingClientRect();
		angleCircleCenterRef.current = {
			x: rect.x + rect.width / 2,
			y: rect.y + rect.height / 2
		};
	};
	const changeAngleToPosition = (event) => {
		if (event === void 0) return;
		event.preventDefault();
		event.target?.focus();
		if (angleCircleCenterRef.current !== void 0 && onChange !== void 0) {
			const { x: centerX, y: centerY } = angleCircleCenterRef.current;
			onChange(getAngle(centerX, centerY, event.clientX, event.clientY));
		}
	};
	const { startDrag, isDragging } = useDragging({
		onDragStart: (event) => {
			setAngleCircleCenter();
			changeAngleToPosition(event);
		},
		onDragMove: changeAngleToPosition,
		onDragEnd: changeAngleToPosition
	});
	(0, import_react.useEffect)(() => {
		if (isDragging) {
			if (previousCursorValueRef.current === void 0) previousCursorValueRef.current = document.body.style.cursor;
			document.body.style.cursor = "grabbing";
		} else {
			document.body.style.cursor = previousCursorValueRef.current || "";
			previousCursorValueRef.current = void 0;
		}
	}, [isDragging]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
		ref: angleCircleRef,
		onMouseDown: startDrag,
		className: clsx("components-angle-picker-control__angle-circle", style_module_default["circle-root"], className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
			style: value ? { transform: `rotate(${value}deg)` } : void 0,
			className: clsx("components-angle-picker-control__angle-circle-indicator-wrapper", style_module_default["circle-indicator-wrapper"]),
			tabIndex: -1,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", { className: clsx("components-angle-picker-control__angle-circle-indicator", style_module_default["circle-indicator"]) }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 104,
				columnNumber: 5
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 94,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 84,
		columnNumber: 3
	}, this);
}
function getAngle(centerX, centerY, pointX, pointY) {
	const y = pointY - centerY;
	const x = pointX - centerX;
	const angleInDeg = Math.round(Math.atan2(y, x) * (180 / Math.PI)) + 90;
	if (angleInDeg < 0) return 360 + angleInDeg;
	return angleInDeg;
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_angle_circle() {
	return (init_angle_circle = __esmMin((() => {
		init_clsx();
		init_react();
		init_use_dragging();
		init_style_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/angle-picker-control/angle-circle.tsx";
		try {
			AngleCircle.__docgenInfo = {
				"description": "",
				"displayName": "AngleCircle",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/angle-picker-control/angle-circle.tsx",
				"methods": [],
				"props": {
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/angle-picker-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function that receives the new value of the input.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: number) => void" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/angle-picker-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The current value of the input. The value represents an angle in degrees\nand should be a value between 0 and 360.",
						"name": "value",
						"required": true,
						"tags": {},
						"type": { "name": "string | number" }
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
//#region ../packages/components/src/angle-picker-control/index.tsx
function UnforwardedAnglePickerControl(props, ref) {
	const { className, label = __("Angle"), onChange, value, ...restProps } = props;
	const handleOnNumberChange = (unprocessedValue) => {
		if (onChange === void 0) return;
		onChange(unprocessedValue !== void 0 && unprocessedValue !== "" ? parseInt(unprocessedValue, 10) : 0);
	};
	const classes = clsx("components-angle-picker-control", className);
	const prefixOrSuffixProp = isRTL() ? { prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputControlPrefixWrapper, { children: "°" }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 43,
		columnNumber: 15
	}, this) } : { suffix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputControlSuffixWrapper, { children: "°" }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 44,
		columnNumber: 15
	}, this) };
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, {
		...restProps,
		ref,
		className: classes,
		gap: 2,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FlexBlock, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NumberControl, {
			label,
			className: "components-angle-picker-control__input-field",
			max: 360,
			min: 0,
			onChange: handleOnNumberChange,
			step: "1",
			value,
			spinControls: "none",
			...prefixOrSuffixProp
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 49,
			columnNumber: 5
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 48,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spacer, {
			marginBottom: "1",
			marginTop: "auto",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AngleCircle, {
				"aria-hidden": "true",
				value,
				onChange
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 62,
				columnNumber: 5
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 61,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 47,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, AnglePickerControl;
function init_angle_picker_control() {
	return (init_angle_picker_control = __esmMin((() => {
		init_clsx();
		init_react();
		init_build_module();
		init_component(), init_component$1();
		init_component$2();
		init_number_control();
		init_input_prefix_wrapper();
		init_input_suffix_wrapper();
		init_angle_circle();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/angle-picker-control/index.tsx";
		AnglePickerControl = (0, import_react.forwardRef)(UnforwardedAnglePickerControl);
		AnglePickerControl.displayName = "AnglePickerControl";
		try {
			AnglePickerControl.__docgenInfo = {
				"description": "`AnglePickerControl` is a React component to render a UI that allows users to\npick an angle. Users can choose an angle in a visual UI with the mouse by\ndragging an angle indicator inside a circle or by directly inserting the\ndesired angle in a text field.\n\n```jsx\nimport { useState } from '@wordpress/element';\nimport { AnglePickerControl } from '@wordpress/components';\n\nfunction Example() {\n  const [ angle, setAngle ] = useState( 0 );\n  return (\n    <AnglePickerControl\n      value={ angle }\n      onChange={ setAngle }\n    />\n  );\n}\n```",
				"displayName": "AnglePickerControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/angle-picker-control/index.tsx",
				"methods": [],
				"props": {
					"__nextHasNoMarginBottom": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/angle-picker-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting into the new margin-free styles that will become the default\nin a future version.\n@deprecated Default behavior since WP 6.5. Prop can be safely removed.\n@ignore",
						"name": "__nextHasNoMarginBottom",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"label": {
						"defaultValue": { "value": "__( 'Angle' )" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/angle-picker-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label to use for the angle picker.",
						"name": "label",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/angle-picker-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function that receives the new value of the input.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: number) => void" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/angle-picker-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The current value of the input. The value represents an angle in degrees\nand should be a value between 0 and 360.",
						"name": "value",
						"required": true,
						"tags": {},
						"type": { "name": "string | number" }
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
export { init_angle_picker_control as n, AnglePickerControl as t };
