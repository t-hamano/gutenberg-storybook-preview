import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { i as D, n as init_names, o as init_colord, r as A, t as e } from "./names-C15GzMmJ.js";
import { n as init_esm, t as esm_default } from "./esm-C7W6P9-p.js";
import { n as init_component, t as Flex } from "./component-DsRVYDtI.js";
import { n as init_component$1, t as FlexBlock } from "./component-CmmRIgcK.js";
import { n as init_angle_picker_control, t as AnglePickerControl } from "./angle-picker-control--3x0QjKu.js";
import { n as init_component$2, t as VStack } from "./component-9S7Padmp.js";
import { n as init_gradient_bar, t as CustomGradientBar } from "./gradient-bar-DcPDWXV4.js";
import { n as init_select_control, t as SelectControl } from "./select-control-B1sl2vXY.js";
//#region ../packages/components/src/custom-gradient-picker/constants.ts
var DEFAULT_GRADIENT, HORIZONTAL_GRADIENT_ORIENTATION, GRADIENT_OPTIONS, DIRECTIONAL_ORIENTATION_ANGLE_MAP, RECTANGULAR_INTERPOLATION_COLOR_SPACES, POLAR_INTERPOLATION_COLOR_SPACES, HUE_INTERPOLATION_METHODS;
function init_constants() {
	return (init_constants = __esmMin((() => {
		init_build_module();
		DEFAULT_GRADIENT = "linear-gradient(135deg, rgba(6, 147, 227, 1) 0%, rgb(155, 81, 224) 100%)";
		HORIZONTAL_GRADIENT_ORIENTATION = {
			type: "angular",
			value: "90",
			unit: "deg"
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
		RECTANGULAR_INTERPOLATION_COLOR_SPACES = [
			"srgb",
			"srgb-linear",
			"display-p3",
			"display-p3-linear",
			"a98-rgb",
			"prophoto-rgb",
			"rec2020",
			"lab",
			"oklab",
			"xyz",
			"xyz-d50",
			"xyz-d65"
		];
		POLAR_INTERPOLATION_COLOR_SPACES = [
			"hsl",
			"hwb",
			"lch",
			"oklch"
		];
		HUE_INTERPOLATION_METHODS = [
			"shorter",
			"longer",
			"increasing",
			"decreasing"
		];
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
		const [hue, saturation, lightness, alpha = "1"] = value;
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
	return `${orientation.value}${orientation.unit}`;
}
function serializeGradient({ type, colorInterpolation, orientation, colorStops }) {
	return `${type}(${[[colorInterpolation, serializeGradientOrientation(orientation)].filter(Boolean).join(" "), ...colorStops.sort((colorStop1, colorStop2) => {
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
/**
* Reads the first argument of a gradient, the one that holds the orientation
* and the color interpolation method, as a list of space separated tokens.
*
* @param gradient CSS gradient.
* @param start    Index right after the opening parenthesis.
*/
function readFirstArgument(gradient, start) {
	const tokens = [];
	let token = "";
	let depth = 0;
	for (let index = start; index < gradient.length; index++) {
		const char = gradient[index];
		if (depth === 0 && (char === "," || char === ")")) {
			if (token) tokens.push(token);
			return {
				tokens,
				end: index
			};
		}
		if (char === "(") depth++;
		else if (char === ")") depth--;
		if (depth === 0 && /\s/.test(char)) {
			if (token) tokens.push(token);
			token = "";
		} else token += char;
	}
}
/**
* `gradient-parser` can't read a color interpolation method such as
* `in oklch`, so it is taken out of the gradient before it is parsed.
*
* Only the first argument is searched, at its top level, so a color stop like
* `color-mix( in srgb, … )` is never mistaken for one.
*
* This is a workaround until `gradient-parser` supports color interpolation
* methods. It can be removed once an upstream release does:
* https://github.com/rafaelcaricio/gradient-parser/issues/57
*
* @param gradient CSS gradient.
*/
function extractColorInterpolation(gradient) {
	const start = gradient.indexOf("(") + 1;
	const firstArgument = start && readFirstArgument(gradient, start);
	if (!firstArgument) return { gradient };
	const { tokens, end } = firstArgument;
	const words = tokens.map((token) => token.toLowerCase());
	const index = words.indexOf("in");
	if (index === -1) return { gradient };
	const colorSpace = words[index + 1];
	let length;
	if (POLAR_INTERPOLATION_COLOR_SPACES.includes(colorSpace) && HUE_INTERPOLATION_METHODS.includes(words[index + 2]) && words[index + 3] === "hue") length = 4;
	else if (RECTANGULAR_INTERPOLATION_COLOR_SPACES.includes(colorSpace) || POLAR_INTERPOLATION_COLOR_SPACES.includes(colorSpace)) length = 2;
	else return { gradient };
	const remainder = [...tokens.slice(0, index), ...tokens.slice(index + length)].join(" ");
	const hasEmptyFirstArgument = !remainder && gradient[end] === ",";
	return {
		gradient: gradient.slice(0, start) + remainder + gradient.slice(hasEmptyFirstArgument ? end + 1 : end),
		colorInterpolation: words.slice(index, index + length).join(" ")
	};
}
function getGradientAstWithDefault(value) {
	let gradientAST;
	let hasGradient = !!value;
	const { gradient: valueToParse, colorInterpolation } = extractColorInterpolation(value ?? "linear-gradient(135deg, rgba(6, 147, 227, 1) 0%, rgb(155, 81, 224) 100%)");
	try {
		gradientAST = esm_default.parse(valueToParse)[0];
		if (colorInterpolation) gradientAST.colorInterpolation = colorInterpolation;
	} catch (error) {
		console.warn("wp.components.CustomGradientPicker failed to parse the gradient with error", error);
	}
	if (!gradientAST || gradientAST.type === "conic-gradient" || gradientAST.type === "repeating-conic-gradient" || gradientAST.colorStops.some((stop) => stop.length2 !== void 0)) {
		gradientAST = esm_default.parse(DEFAULT_GRADIENT)[0];
		hasGradient = false;
	}
	if (!Array.isArray(gradientAST.orientation) && gradientAST.orientation?.type === "directional") {
		const direction = gradientAST.orientation.value.toLowerCase();
		gradientAST.orientation = {
			type: "angular",
			value: DIRECTIONAL_ORIENTATION_ANGLE_MAP[direction].toString(),
			unit: "deg"
		};
	}
	if (!Array.isArray(gradientAST.orientation) && gradientAST.orientation?.type === "angular" && gradientAST.orientation.unit !== "deg") {
		const { value: angle, unit } = gradientAST.orientation;
		gradientAST.orientation = {
			type: "angular",
			value: `${Number(angle) * ANGLE_UNIT_TO_DEGREES[unit]}`,
			unit: "deg"
		};
	}
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
			const [hue, saturation, lightness, alpha = "1"] = colorStop.value;
			return `hsla(${hue},${saturation}%,${lightness}%,${alpha})`;
		}
		default: return "transparent";
	}
}
var ANGLE_UNIT_TO_DEGREES;
function init_utils() {
	return (init_utils = __esmMin((() => {
		init_esm();
		init_colord();
		init_names();
		init_constants();
		D([e]);
		ANGLE_UNIT_TO_DEGREES = {
			deg: 1,
			rad: 180 / Math.PI,
			grad: .9,
			turn: 360
		};
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
			lineNumber: 164,
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
					lineNumber: 188,
					columnNumber: 6
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 187,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FlexBlock, {
				className: style_module_default["control-wrapper"],
				children: gradientAST.type === "linear-gradient" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GradientAnglePicker, {
					gradientAST,
					hasGradient,
					onChange
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 196,
					columnNumber: 7
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 194,
				columnNumber: 5
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 183,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 163,
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
						value: `${newAngle}`,
						unit: "deg"
					}
				}));
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnglePickerControl, {
				onChange: onAngleChange,
				value: hasGradient ? angle : ""
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 48,
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
						value: `${lastLinearOrientationAngle.current}`,
						unit: "deg"
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
				lineNumber: 105,
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
