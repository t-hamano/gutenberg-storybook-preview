import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { o as init_style_module, s as style_module_default } from "./color-palette-DAKQlc0r.js";
import { a as warnIfCircularOptionPickerAsButtonsIsSet, n as init_circular_option_picker, r as getComputeCircularOptionPickerCommonProps, t as circular_option_picker_default } from "./circular-option-picker-NfDTwxvt.js";
import { n as init_component, t as VStack } from "./component-C9_4TU-Q.js";
import { n as init_component$1, t as Heading } from "./component-BhlVl1tv.js";
import { n as init_custom_gradient_picker, t as CustomGradientPicker } from "./custom-gradient-picker-CfpdX4k1.js";
//#region ../packages/components/src/gradient-picker/index.tsx
function SingleOrigin({ className, clearGradient, gradients, onChange, value, selectedSlug, presentation, ...additionalProps }) {
	const gradientOptions = (0, import_react.useMemo)(() => {
		return gradients.map(({ gradient, name, slug }, index) => {
			const isSelected = presentation !== "command-buttons" && (selectedSlug ? slug === selectedSlug : value === gradient);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(circular_option_picker_default.Option, {
				value: gradient,
				isSelected,
				tooltipText: name || sprintf(__("Gradient code: %s"), gradient),
				style: {
					color: "rgba( 0,0,0,0 )",
					background: gradient
				},
				onClick: isSelected ? clearGradient : () => onChange(gradient, index, slug),
				"aria-label": name ? sprintf(__("Gradient: %s"), name) : sprintf(__("Gradient code: %s"), gradient)
			}, slug, false, {
				fileName: _jsxFileName,
				lineNumber: 53,
				columnNumber: 5
			}, this);
		});
	}, [
		gradients,
		value,
		onChange,
		clearGradient,
		selectedSlug,
		presentation
	]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(circular_option_picker_default.OptionGroup, {
		className,
		options: gradientOptions,
		...additionalProps
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 90,
		columnNumber: 3
	}, this);
}
function MultipleOrigin({ className, clearGradient, gradients, onChange, value, selectedSlug, headingLevel, presentation }) {
	const instanceId = use_instance_id_default(MultipleOrigin);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VStack, {
		spacing: 3,
		className,
		children: gradients.map(({ name, gradients: gradientSet }, index) => {
			const id = `color-palette-${instanceId}-${index}`;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VStack, {
				spacing: 2,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, {
					className: style_module_default["color-heading"],
					level: headingLevel,
					id,
					children: name
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 116,
					columnNumber: 7
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SingleOrigin, {
					clearGradient,
					gradients: gradientSet,
					onChange: (gradient, _index, slug) => onChange(gradient, index, slug),
					value,
					selectedSlug,
					presentation,
					"aria-labelledby": id
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 123,
					columnNumber: 7
				}, this)]
			}, index, true, {
				fileName: _jsxFileName,
				lineNumber: 115,
				columnNumber: 6
			}, this);
		})
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 111,
		columnNumber: 3
	}, this);
}
function Component(props) {
	const { asButtons, presentation, loop, actions, headingLevel, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, ...additionalProps } = props;
	warnIfCircularOptionPickerAsButtonsIsSet("GradientPicker", asButtons);
	const { metaProps, labelProps, resolvedPresentation } = getComputeCircularOptionPickerCommonProps(asButtons, loop, ariaLabel, ariaLabelledby, presentation);
	const options = isMultipleOriginArray(props.gradients) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MultipleOrigin, {
		headingLevel,
		...additionalProps,
		presentation: resolvedPresentation
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 163,
		columnNumber: 3
	}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SingleOrigin, {
		...additionalProps,
		presentation: resolvedPresentation
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 169,
		columnNumber: 3
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(circular_option_picker_default, {
		...metaProps,
		...labelProps,
		actions,
		options
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 176,
		columnNumber: 3
	}, this);
}
/**
* GradientPicker is a React component that renders a color gradient picker to
* define a multi step gradient. There's either a _linear_ or a _radial_ type
* available.
*
* ```jsx
* import { useState } from 'react';
* import { GradientPicker } from '@wordpress/components';
*
* const MyGradientPicker = () => {
*   const [ gradient, setGradient ] = useState( null );
*
*   return (
*     <GradientPicker
*       value={ gradient }
*       onChange={ ( currentGradient ) => setGradient( currentGradient ) }
*       gradients={ [
*         {
*           name: 'JShine',
*           gradient:
*             'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
*           slug: 'jshine',
*         },
*         {
*           name: 'Moonlit Asteroid',
*           gradient:
*             'linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)',
*           slug: 'moonlit-asteroid',
*         },
*         {
*           name: 'Rastafarie',
*           gradient:
*             'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',
*           slug: 'rastafari',
*         },
*       ] }
*     />
*   );
* };
*```
*
*/
function GradientPicker({ className, gradients = [], onChange, value, clearable = true, enableAlpha = true, disableCustomGradients = false, __experimentalIsRenderedInSidebar, headingLevel = 2, ...additionalProps }) {
	const clearGradient = (0, import_react.useCallback)(() => onChange(void 0), [onChange]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VStack, {
		spacing: gradients.length ? 4 : 0,
		children: [!disableCustomGradients && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomGradientPicker, {
			__experimentalIsRenderedInSidebar,
			enableAlpha,
			value,
			onChange
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 247,
			columnNumber: 5
		}, this), (gradients.length > 0 || clearable) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Component, {
			...additionalProps,
			className,
			clearGradient,
			gradients,
			onChange,
			value,
			actions: clearable && !disableCustomGradients && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(circular_option_picker_default.ButtonAction, {
				onClick: clearGradient,
				accessibleWhenDisabled: true,
				disabled: !value,
				children: __("Clear")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 267,
				columnNumber: 8
			}, this),
			headingLevel
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 257,
			columnNumber: 5
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 245,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, isMultipleOriginObject, isMultipleOriginArray;
function init_gradient_picker() {
	return (init_gradient_picker = __esmMin((() => {
		init_build_module();
		init_use_instance_id();
		init_react();
		init_circular_option_picker();
		init_custom_gradient_picker();
		init_component();
		init_component$1();
		init_style_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/gradient-picker/index.tsx";
		isMultipleOriginObject = (obj) => Array.isArray(obj.gradients) && !("gradient" in obj);
		isMultipleOriginArray = (arr) => {
			return arr.length > 0 && arr.every((gradientObj) => isMultipleOriginObject(gradientObj));
		};
		try {
			GradientPicker.__docgenInfo = {
				"description": "GradientPicker is a React component that renders a color gradient picker to\ndefine a multi step gradient. There's either a _linear_ or a _radial_ type\navailable.\n\n```jsx\nimport { useState } from 'react';\nimport { GradientPicker } from '@wordpress/components';\n\nconst MyGradientPicker = () => {\n  const [ gradient, setGradient ] = useState( null );\n\n  return (\n    <GradientPicker\n      value={ gradient }\n      onChange={ ( currentGradient ) => setGradient( currentGradient ) }\n      gradients={ [\n        {\n          name: 'JShine',\n          gradient:\n            'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',\n          slug: 'jshine',\n        },\n        {\n          name: 'Moonlit Asteroid',\n          gradient:\n            'linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)',\n          slug: 'moonlit-asteroid',\n        },\n        {\n          name: 'Rastafarie',\n          gradient:\n            'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',\n          slug: 'rastafari',\n        },\n      ] }\n    />\n  );\n};\n```",
				"displayName": "GradientPicker",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/gradient-picker/index.tsx",
				"methods": [],
				"props": {
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The class name added to the wrapper.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The function called when a new gradient has been defined. It is passed\nthe `currentGradient` as an argument. When a predefined gradient is\nselected, the second argument is its index (or, for multiple-origin\ngradients, the origin index) and the third argument is its slug.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(currentGradient: string | undefined, index?: number | undefined, slug?: string | undefined) => void" }
					},
					"value": {
						"defaultValue": { "value": "'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The current value of the gradient. Pass a css gradient string (See default value for example).\nOptionally pass in a `null` value to specify no gradient is currently selected.",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "string | null" }
					},
					"selectedSlug": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The slug of the currently selected predefined gradient.\n\nWhen set to a non-empty string, selection is determined by slug rather\nthan by gradient value, which correctly handles palettes where two\nentries share the same gradient. Entries whose slug does not match will\nnot appear selected in this mode, even if their gradient value matches\n`value`.\n\nAn empty string is treated the same as `undefined`: selection falls\nback to matching by gradient value.",
						"name": "selectedSlug",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"clearable": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the palette should have a clearing button or not.",
						"name": "clearable",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"headingLevel": {
						"defaultValue": { "value": "2" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The heading level. Only applies in cases where gradients are provided\nfrom multiple origins (i.e. when the array passed as the `gradients` prop\ncontains two or more items).",
						"name": "headingLevel",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "HeadingSize",
							"value": [
								{ "value": "1" },
								{ "value": "2" },
								{ "value": "\"1\"" },
								{ "value": "3" },
								{ "value": "4" },
								{ "value": "5" },
								{ "value": "6" },
								{ "value": "\"2\"" },
								{ "value": "\"3\"" },
								{ "value": "\"4\"" },
								{ "value": "\"5\"" },
								{ "value": "\"6\"" }
							]
						}
					},
					"presentation": {
						"defaultValue": { "value": "'listbox'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "How predefined gradient swatches behave and are exposed to assistive\ntechnology.\n\n- `listbox` uses one tab stop and arrow-key navigation, and exposes\n  selection with `aria-selected`.\n- `toggle-buttons` gives each swatch a tab stop and exposes selection with\n  `aria-pressed`.\n- `command-buttons` gives each swatch a tab stop and exposes no selection\n  state. `value` and `selectedSlug` do not mark predefined swatches as\n  selected, and activating a swatch always calls `onChange` with that\n  swatch. `value` still controls the custom gradient picker.",
						"name": "presentation",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"listbox\" | \"toggle-buttons\" | \"command-buttons\"",
							"value": [
								{ "value": "\"listbox\"" },
								{ "value": "\"toggle-buttons\"" },
								{ "value": "\"command-buttons\"" }
							]
						}
					},
					"asButtons": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the control should present as toggle buttons.\n@deprecated Use `presentation=\"toggle-buttons\"` instead. An explicit\n`presentation` takes precedence.\n@ignore",
						"name": "asButtons",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"loop": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Prevents keyboard interaction from wrapping around.\nOnly used with the `listbox` presentation.",
						"name": "loop",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"enableAlpha": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to enable alpha transparency options in the picker.",
						"name": "enableAlpha",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"aria-label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/gradient-picker/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A label to identify the purpose of the control.",
						"name": "aria-label",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"aria-labelledby": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/gradient-picker/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An ID of an element to provide a label for the control.",
						"name": "aria-labelledby",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"gradients": {
						"defaultValue": { "value": "[]" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An array of objects as predefined gradients displayed above the gradient\nselector. Alternatively, if there are multiple sets (or 'origins') of\ngradients, you can pass an array of objects each with a `name` and a\n`gradients` array which will in turn contain the predefined gradient objects.",
						"name": "gradients",
						"required": false,
						"tags": {},
						"type": { "name": "GradientsProp" }
					},
					"__nextHasNoMargin": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting in to the new margin-free styles that will become the default\nin a future version, currently scheduled to be WordPress 6.4. (The prop\ncan be safely removed once this happens.)\n@deprecated Default behavior since WP 6.5. Prop can be safely removed.\n@ignore",
						"name": "__nextHasNoMargin",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disableCustomGradients": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If true, the gradient picker will not be displayed and only defined\ngradients from `gradients` will be shown.",
						"name": "disableCustomGradients",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__experimentalIsRenderedInSidebar": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/gradient-picker/types.ts",
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
export { init_gradient_picker as n, GradientPicker as t };
