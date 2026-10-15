import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { i as D, n as init_names, o as init_colord, r as A, t as e } from "./names-C15GzMmJ.js";
import { t as require_node } from "./node-DMt3YwJ0.js";
import { n as init_component, t as Flex } from "./component-Csfc8XyP.js";
import { n as init_component$1, t as FlexBlock } from "./component-Bf4F7MIt.js";
import { n as init_angle_picker_control, t as AnglePickerControl } from "./angle-picker-control-CbKoX2zJ.js";
import { n as init_select_control, t as SelectControl } from "./select-control-CRXHwQpH.js";
import { n as init_component$2, t as VStack } from "./component-C6EDknKF.js";
import { n as init_gradient_bar, t as CustomGradientBar } from "./gradient-bar-DCCzcV1B.js";
//#region ../packages/components/src/custom-gradient-picker/constants.ts
var DEFAULT_GRADIENT, HORIZONTAL_GRADIENT_ORIENTATION, GRADIENT_OPTIONS, DIRECTIONAL_ORIENTATION_ANGLE_MAP;
function init_constants() {
	return (init_constants = __esmMin((() => {
		init_build_module();
		DEFAULT_GRADIENT = "linear-gradient(135deg, rgba(6, 147, 227, 1) 0%, rgb(155, 81, 224) 100%)";
		HORIZONTAL_GRADIENT_ORIENTATION = {
			type: "angular",
			value: "90"
		};
		GRADIENT_OPTIONS = [{
			value: "linear-gradient",
			label: __("Linear")
		}, {
			value: "radial-gradient",
			label: __("Radial")
		}];
		DIRECTIONAL_ORIENTATION_ANGLE_MAP = {
			top: 0,
			"top right": 45,
			"right top": 45,
			right: 90,
			"right bottom": 135,
			"bottom right": 135,
			bottom: 180,
			"bottom left": 225,
			"left bottom": 225,
			left: 270,
			"top left": 315,
			"left top": 315
		};
	})))();
}
//#endregion
//#region ../packages/components/src/custom-gradient-picker/serializer.ts
function serializeGradientColor({ type, value }) {
	if (type === "literal") return value;
	if (type === "hex") return `#${value}`;
	if (type === "var") return `var(${value})`;
	if (type === "hsl") {
		const [hue, saturation, lightness] = value;
		return `hsl(${hue},${saturation}%,${lightness}%)`;
	}
	if (type === "hsla") {
		const [hue, saturation, lightness, alpha] = value;
		return `hsla(${hue},${saturation}%,${lightness}%,${alpha})`;
	}
	return `${type}(${value.join(",")})`;
}
function serializeGradientPosition(position) {
	if (!position) return "";
	const { value, type } = position;
	if (type === "calc") return `calc(${value})`;
	return `${value}${type}`;
}
function serializeGradientColorStop({ type, value, length }) {
	return `${serializeGradientColor({
		type,
		value
	})} ${serializeGradientPosition(length)}`;
}
function serializeGradientOrientation(orientation) {
	if (Array.isArray(orientation) || !orientation || orientation.type !== "angular") return;
	return `${orientation.value}deg`;
}
function serializeGradient({ type, orientation, colorStops }) {
	return `${type}(${[serializeGradientOrientation(orientation), ...colorStops.sort((colorStop1, colorStop2) => {
		const getNumericStopValue = (colorStop) => {
			return colorStop?.length?.value === void 0 ? 0 : parseInt(colorStop.length.value);
		};
		return getNumericStopValue(colorStop1) - getNumericStopValue(colorStop2);
	}).map(serializeGradientColorStop)].filter(Boolean).join(",")})`;
}
//#endregion
//#region ../packages/components/src/custom-gradient-picker/utils.ts
function getLinearGradientRepresentation(gradientAST) {
	return serializeGradient({
		type: "linear-gradient",
		orientation: HORIZONTAL_GRADIENT_ORIENTATION,
		colorStops: gradientAST.colorStops
	});
}
function hasUnsupportedLength(item) {
	return item.length === void 0 || item.length.type !== "%";
}
function getGradientAstWithDefault(value) {
	let gradientAST;
	let hasGradient = !!value;
	const valueToParse = value ?? "linear-gradient(135deg, rgba(6, 147, 227, 1) 0%, rgb(155, 81, 224) 100%)";
	try {
		gradientAST = import_node.parse(valueToParse)[0];
	} catch (error) {
		console.warn("wp.components.CustomGradientPicker failed to parse the gradient with error", error);
		gradientAST = import_node.parse(DEFAULT_GRADIENT)[0];
		hasGradient = false;
	}
	if (!Array.isArray(gradientAST.orientation) && gradientAST.orientation?.type === "directional") gradientAST.orientation = {
		type: "angular",
		value: DIRECTIONAL_ORIENTATION_ANGLE_MAP[gradientAST.orientation.value].toString()
	};
	if (gradientAST.colorStops.some(hasUnsupportedLength)) {
		const { colorStops } = gradientAST;
		const step = 100 / (colorStops.length - 1);
		colorStops.forEach((stop, index) => {
			stop.length = {
				value: `${step * index}`,
				type: "%"
			};
		});
	}
	return {
		gradientAST,
		hasGradient
	};
}
function getGradientAstWithControlPoints(gradientAST, newControlPoints) {
	return {
		...gradientAST,
		colorStops: newControlPoints.map(({ position, color }) => {
			const { r, g, b, a } = A(color).toRgb();
			return {
				length: {
					type: "%",
					value: position?.toString()
				},
				type: a < 1 ? "rgba" : "rgb",
				value: a < 1 ? [
					`${r}`,
					`${g}`,
					`${b}`,
					`${a}`
				] : [
					`${r}`,
					`${g}`,
					`${b}`
				]
			};
		})
	};
}
function getStopCssColor(colorStop) {
	switch (colorStop.type) {
		case "hex": return `#${colorStop.value}`;
		case "literal": return colorStop.value;
		case "var": return `${colorStop.type}(${colorStop.value})`;
		case "rgb":
		case "rgba": return `${colorStop.type}(${colorStop.value.join(",")})`;
		case "hsl": {
			const [hue, saturation, lightness] = colorStop.value;
			return `hsl(${hue},${saturation}%,${lightness}%)`;
		}
		case "hsla": {
			const [hue, saturation, lightness, alpha] = colorStop.value;
			return `hsla(${hue},${saturation}%,${lightness}%,${alpha})`;
		}
		default: return "transparent";
	}
}
var import_node;
function init_utils() {
	return (init_utils = __esmMin((() => {
		import_node = /* @__PURE__ */ __toESM(require_node());
		init_colord();
		init_names();
		init_constants();
		D([e]);
	})))();
}
//#endregion
//#region ../packages/components/src/custom-gradient-picker/style.module.scss
var style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		style_module_default = { "control-wrapper": "_control-wrapper_1c1c2_1" };
	})))();
}
//#endregion
//#region ../packages/components/src/custom-gradient-picker/index.tsx
/**
* CustomGradientPicker is a React component that renders a UI for specifying
* linear or radial gradients. Radial gradients are displayed in the picker as
* a slice of the gradient from the center to the outside.
*
* ```jsx
* import { CustomGradientPicker } from '@wordpress/components';
* import { useState } from '@wordpress/element';
*
* const MyCustomGradientPicker = () => {
*   const [ gradient, setGradient ] = useState();
*
*   return (
*     <CustomGradientPicker
*			value={ gradient }
*			onChange={ setGradient }
*     />
*   );
* };
* ```
*/
function CustomGradientPicker({ value, onChange, enableAlpha = true, __experimentalIsRenderedInSidebar = false }) {
	const { gradientAST, hasGradient } = getGradientAstWithDefault(value);
	const background = getLinearGradientRepresentation(gradientAST);
	const controlPoints = gradientAST.colorStops.map((colorStop) => {
		return {
			color: getStopCssColor(colorStop),
			position: parseInt(colorStop.length.value)
		};
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VStack, {
		spacing: 4,
		className: "components-custom-gradient-picker",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomGradientBar, {
			__experimentalIsRenderedInSidebar,
			disableAlpha: !enableAlpha,
			background,
			hasGradient,
			value: controlPoints,
			onChange: (newControlPoints) => {
				onChange(serializeGradient(getGradientAstWithControlPoints(gradientAST, newControlPoints)));
			}
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 162,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, {
			gap: 3,
			className: "components-custom-gradient-picker__ui-line",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FlexBlock, {
				className: style_module_default["control-wrapper"],
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GradientTypePicker, {
					gradientAST,
					hasGradient,
					onChange
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 186,
					columnNumber: 6
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 185,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FlexBlock, {
				className: style_module_default["control-wrapper"],
				children: gradientAST.type === "linear-gradient" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GradientAnglePicker, {
					gradientAST,
					hasGradient,
					onChange
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 194,
					columnNumber: 7
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 192,
				columnNumber: 5
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 181,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 161,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, GradientAnglePicker, GradientTypePicker;
function init_custom_gradient_picker() {
	return (init_custom_gradient_picker = __esmMin((() => {
		init_build_module();
		init_react();
		init_angle_picker_control();
		init_gradient_bar();
		init_component(), init_component$1();
		init_select_control();
		init_component$2();
		init_utils();
		init_constants();
		init_style_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/index.tsx";
		GradientAnglePicker = ({ gradientAST, hasGradient, onChange }) => {
			const angle = gradientAST?.orientation?.value ?? 180;
			const onAngleChange = (newAngle) => {
				onChange(serializeGradient({
					...gradientAST,
					orientation: {
						type: "angular",
						value: `${newAngle}`
					}
				}));
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnglePickerControl, {
				onChange: onAngleChange,
				value: hasGradient ? angle : ""
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 47,
				columnNumber: 3
			}, void 0);
		};
		GradientTypePicker = ({ gradientAST, hasGradient, onChange }) => {
			const { type } = gradientAST;
			const lastLinearOrientationAngle = (0, import_react.useRef)(Number(HORIZONTAL_GRADIENT_ORIENTATION.value));
			if (type === "linear-gradient" && gradientAST.orientation) lastLinearOrientationAngle.current = Number(gradientAST.orientation.value);
			const onSetLinearGradient = () => {
				onChange(serializeGradient({
					...gradientAST,
					orientation: {
						type: "angular",
						value: `${lastLinearOrientationAngle.current}`
					},
					type: "linear-gradient"
				}));
			};
			const onSetRadialGradient = () => {
				const { orientation, ...restGradientAST } = gradientAST;
				onChange(serializeGradient({
					...restGradientAST,
					type: "radial-gradient"
				}));
			};
			const handleOnChange = (next) => {
				if (next === "linear-gradient") onSetLinearGradient();
				if (next === "radial-gradient") onSetRadialGradient();
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl, {
				className: "components-custom-gradient-picker__type-picker",
				label: __("Type"),
				labelPosition: "top",
				onChange: handleOnChange,
				options: GRADIENT_OPTIONS,
				value: hasGradient ? type : void 0
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 103,
				columnNumber: 3
			}, void 0);
		};
		try {
			CustomGradientPicker.__docgenInfo = {
				"description": "CustomGradientPicker is a React component that renders a UI for specifying\nlinear or radial gradients. Radial gradients are displayed in the picker as\na slice of the gradient from the center to the outside.\n\n```jsx\nimport { CustomGradientPicker } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyCustomGradientPicker = () => {\n  const [ gradient, setGradient ] = useState();\n\n  return (\n    <CustomGradientPicker\n		value={ gradient }\n		onChange={ setGradient }\n    />\n  );\n};\n```",
				"displayName": "CustomGradientPicker",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/index.tsx",
				"methods": [],
				"props": {
					"__nextHasNoMargin": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting in to the new margin-free styles that will become the default\nin a future version, currently scheduled to be WordPress 6.4. (The prop\ncan be safely removed once this happens.)\n@deprecated Default behavior since WP 6.5. Prop can be safely removed.\n@ignore",
						"name": "__nextHasNoMargin",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"value": {
						"defaultValue": { "value": "'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The current value of the gradient. Pass a css gradient string (See default value for example).\nOptionally pass in a `null` value to specify no gradient is currently selected.",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "string | null" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The function called when a new gradient has been defined. It is passed to\nthe `currentGradient` as an argument.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(currentGradient: string) => void" }
					},
					"enableAlpha": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to enable alpha transparency options in the picker.",
						"name": "enableAlpha",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__experimentalIsRenderedInSidebar": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether this is rendered in the sidebar.",
						"name": "__experimentalIsRenderedInSidebar",
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
export { init_constants as i, init_custom_gradient_picker as n, DEFAULT_GRADIENT as r, CustomGradientPicker as t };
