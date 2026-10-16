import { n as __esmMin, o as __toESM, r as __exportAll } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react$6 } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { r as useRenderElement, t as init_useRenderElement } from "./useRenderElement-Dkv6YH0v.js";
import { n as visuallyHidden, t as init_visuallyHidden } from "./visuallyHidden-BnauQW1F.js";
import { n as useRegisteredLabelId, t as init_useRegisteredLabelId } from "./useRegisteredLabelId-rzX4GRP8.js";
import { t as clamp } from "./clamp-BJoWiF_E.js";
import { i as init_formatNumber, n as valueToPercent, r as formatNumber } from "./valueToPercent-D-7WzkRW.js";
import { n as resets_module_default, t as init_resets_module } from "./resets.module-CJil9Bz6.js";
import { n as init_global_css_defense_module, t as global_css_defense_module_default } from "./global-css-defense.module-BTDDc07p.js";
import { n as init_stack, t as Stack } from "./stack-s_FjhA7z.js";
import { n as init_text, t as Text } from "./text-B-YUcwFZ.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/meter/root/MeterRootContext.mjs
function useMeterRootContext() {
	const context = import_react$5.useContext(MeterRootContext);
	if (context === void 0) throw new Error("Base UI: MeterRootContext is missing. Meter parts must be placed within <Meter.Root>.");
	return context;
}
var import_react$5, MeterRootContext;
function init_MeterRootContext() {
	return (init_MeterRootContext = __esmMin((() => {
		import_react$5 = /* @__PURE__ */ __toESM(require_react(), 1);
		MeterRootContext = /*#__PURE__*/ import_react$5.createContext(void 0);
		MeterRootContext.displayName = "MeterRootContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/meter/root/MeterRoot.mjs
var import_react$4, import_jsx_runtime, MeterRoot;
function init_MeterRoot() {
	return (init_MeterRoot = __esmMin((() => {
		import_react$4 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_visuallyHidden();
		init_formatNumber();
		init_MeterRootContext();
		init_useRenderElement();
		import_jsx_runtime = require_jsx_runtime();
		MeterRoot = /*#__PURE__*/ import_react$4.forwardRef(function MeterRoot(componentProps, forwardedRef) {
			const { format, getAriaValueText, locale, max = 100, min = 0, value: valueProp, render, className, children, style, ...elementProps } = componentProps;
			const [labelId, setLabelId] = import_react$4.useState();
			const rawPercentage = valueToPercent(valueProp, min, max);
			const percentageValue = clamp(Number.isNaN(rawPercentage) ? 0 : rawPercentage, 0, 100);
			const clampedValue = clamp(Number.isNaN(valueProp) ? min : valueProp, min, max);
			const formattedValue = format ? formatNumber(clampedValue, locale, format) : formatNumber(percentageValue / 100, locale, { style: "percent" });
			let ariaValuetext = formattedValue;
			if (getAriaValueText) ariaValuetext = getAriaValueText(formattedValue, valueProp);
			const defaultProps = {
				"aria-labelledby": labelId,
				"aria-valuemax": max,
				"aria-valuemin": min,
				"aria-valuenow": clampedValue,
				"aria-valuetext": ariaValuetext,
				role: "meter",
				children: /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(import_react$4.Fragment, { children: [children, /*#__PURE__*/ (0, import_jsx_runtime.jsx)("span", {
					role: "presentation",
					style: visuallyHidden,
					children: "x"
				})] })
			};
			const contextValue = import_react$4.useMemo(() => ({
				formattedValue,
				percentageValue,
				setLabelId,
				value: valueProp
			}), [
				formattedValue,
				percentageValue,
				setLabelId,
				valueProp
			]);
			const element = useRenderElement("div", componentProps, {
				ref: forwardedRef,
				props: [defaultProps, elementProps]
			});
			return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(MeterRootContext.Provider, {
				value: contextValue,
				children: element
			});
		});
		MeterRoot.displayName = "MeterRoot";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/meter/track/MeterTrack.mjs
var import_react$3, MeterTrack;
function init_MeterTrack() {
	return (init_MeterTrack = __esmMin((() => {
		import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useRenderElement();
		MeterTrack = /*#__PURE__*/ import_react$3.forwardRef(function MeterTrack(componentProps, forwardedRef) {
			const { render, className, style, ...elementProps } = componentProps;
			return useRenderElement("div", componentProps, {
				ref: forwardedRef,
				props: elementProps
			});
		});
		MeterTrack.displayName = "MeterTrack";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/meter/indicator/MeterIndicator.mjs
var import_react$2, MeterIndicator;
function init_MeterIndicator() {
	return (init_MeterIndicator = __esmMin((() => {
		import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_MeterRootContext();
		init_useRenderElement();
		MeterIndicator = /*#__PURE__*/ import_react$2.forwardRef(function MeterIndicator(componentProps, forwardedRef) {
			const { render, className, style, ...elementProps } = componentProps;
			const { percentageValue } = useMeterRootContext();
			return useRenderElement("div", componentProps, {
				ref: forwardedRef,
				props: [{ style: {
					insetInlineStart: 0,
					height: "inherit",
					width: `${percentageValue}%`
				} }, elementProps]
			});
		});
		MeterIndicator.displayName = "MeterIndicator";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/meter/value/MeterValue.mjs
var import_react$1, MeterValue;
function init_MeterValue() {
	return (init_MeterValue = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_MeterRootContext();
		init_useRenderElement();
		MeterValue = /*#__PURE__*/ import_react$1.forwardRef(function MeterValue(componentProps, forwardedRef) {
			const { className, render, children, style, ...elementProps } = componentProps;
			const { value, formattedValue } = useMeterRootContext();
			return useRenderElement("span", componentProps, {
				ref: forwardedRef,
				props: [{
					"aria-hidden": true,
					children: typeof children === "function" ? children(formattedValue, value) : formattedValue
				}, elementProps]
			});
		});
		MeterValue.displayName = "MeterValue";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/meter/label/MeterLabel.mjs
var import_react, MeterLabel;
function init_MeterLabel() {
	return (init_MeterLabel = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_MeterRootContext();
		init_useRenderElement();
		init_useRegisteredLabelId();
		MeterLabel = /*#__PURE__*/ import_react.forwardRef(function MeterLabel(componentProps, forwardedRef) {
			const { render, className, style, id: idProp, ...elementProps } = componentProps;
			const { setLabelId } = useMeterRootContext();
			const id = useRegisteredLabelId(idProp, setLabelId);
			return useRenderElement("span", componentProps, {
				ref: forwardedRef,
				props: [{
					id,
					role: "presentation"
				}, elementProps]
			});
		});
		MeterLabel.displayName = "MeterLabel";
	})))();
}
//#endregion
//#region ../packages/ui/src/meter/root.tsx
var import_jsx_dev_runtime$5, _jsxFileName$5, DEFAULT_RENDER$2, Root;
function init_root() {
	return (init_root = __esmMin((() => {
		init_MeterRoot();
		init_clsx();
		init_react();
		init_stack();
		init_resets_module();
		import_jsx_dev_runtime$5 = require_jsx_dev_runtime();
		_jsxFileName$5 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/meter/root.tsx";
		DEFAULT_RENDER$2 = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(Stack, {
			...props,
			direction: "column",
			gap: "sm"
		}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 9,
			columnNumber: 2
		}, void 0);
		Root = (0, import_react$6.forwardRef)(function MeterRoot$1({ className, render = DEFAULT_RENDER$2, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(MeterRoot, {
				ref,
				render,
				className: clsx(resets_module_default["box-sizing"], className),
				...props
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 21,
				columnNumber: 3
			}, this);
		});
		try {
			Root.__docgenInfo = {
				"description": "Groups the meter, label, and value for a measured quantity.\nUse `Meter.Label`, `aria-label`, or `aria-labelledby` to name the quantity.",
				"displayName": "Root",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/meter/root.tsx",
				"methods": [],
				"props": {
					"max": {
						"defaultValue": { "value": "100" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/meter/root/MeterRoot.d.mts",
							"name": "MeterRootProps"
						}],
						"description": "The maximum value",
						"name": "max",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/meter/root/MeterRoot.d.mts",
							"name": "MeterRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"min": {
						"defaultValue": { "value": "0" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/meter/root/MeterRoot.d.mts",
							"name": "MeterRootProps"
						}],
						"description": "The minimum value",
						"name": "min",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/meter/root/MeterRoot.d.mts",
							"name": "MeterRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"format": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/meter/root/MeterRoot.d.mts",
							"name": "MeterRootProps"
						}],
						"description": "Options to format the value.",
						"name": "format",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/meter/root/MeterRoot.d.mts",
							"name": "MeterRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "NumberFormatOptions" }
					},
					"aria-valuetext": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/meter/root/MeterRoot.d.mts",
							"name": "MeterRootProps"
						}],
						"description": "A string value that provides a user-friendly name for `aria-valuenow`, the current value of the meter.",
						"name": "aria-valuetext",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/meter/root/MeterRoot.d.mts",
							"name": "MeterRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/meter/root/MeterRoot.d.mts",
							"name": "MeterRootProps"
						}],
						"description": "The current value.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/meter/root/MeterRoot.d.mts",
							"name": "MeterRootProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "number" }
					},
					"getAriaValueText": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/meter/root/MeterRoot.d.mts",
							"name": "MeterRootProps"
						}],
						"description": "A function that returns a string value that provides a human-readable text alternative for `aria-valuenow`, the current value of the meter.",
						"name": "getAriaValueText",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/meter/root/MeterRoot.d.mts",
							"name": "MeterRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((formattedValue: string, value: number) => string)" }
					},
					"locale": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/meter/root/MeterRoot.d.mts",
							"name": "MeterRootProps"
						}],
						"description": "The locale used by `Intl.NumberFormat` when formatting the value.\nDefaults to the user's runtime locale.",
						"name": "locale",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/meter/root/MeterRoot.d.mts",
							"name": "MeterRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "LocalesArgument" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS class name to apply to the element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS style to apply to the element.",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"render": {
						"defaultValue": { "value": "( props: React.ComponentProps< typeof Stack > ) => (\n	<Stack { ...props } direction=\"column\" gap=\"sm\" />\n)" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Replaces the component's default HTML element using a given React\nelement, or a function that returns a React element.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ComponentRenderFn<HTMLAttributesWithRef<any>> | ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>>" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/meter/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The parts of the meter, including its label and value.",
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
//#region ../packages/ui/src/meter/style.module.css
var label, value, track, indicator, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		label = "_label_1sk52_5";
		value = "_value_1sk52_6";
		track = "_track_1sk52_14";
		indicator = "_indicator_1sk52_28";
		style_module_default = {
			label,
			value,
			track,
			indicator,
			"is-brand": "_is-brand_1sk52_41"
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/meter/track.tsx
var import_jsx_dev_runtime$4, _jsxFileName$4, Track;
function init_track() {
	return (init_track = __esmMin((() => {
		init_MeterTrack();
		init_clsx();
		init_react();
		init_global_css_defense_module();
		init_resets_module();
		init_style_module();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/meter/track.tsx";
		Track = (0, import_react$6.forwardRef)(function MeterTrack$1({ className, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(MeterTrack, {
				ref,
				className: clsx(resets_module_default["box-sizing"], global_css_defense_module_default.div, style_module_default.track, className),
				...props
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 17,
				columnNumber: 3
			}, this);
		});
		try {
			Track.__docgenInfo = {
				"description": "The neutral track containing the filled meter indicator.",
				"displayName": "Track",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/meter/track.tsx",
				"methods": [],
				"props": {
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS class name to apply to the element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS style to apply to the element.",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"render": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Replaces the component's default HTML element using a given React\nelement, or a function that returns a React element.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ComponentRenderFn<HTMLAttributesWithRef<any>> | ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>>" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/meter/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The meter indicator to render inside the track.",
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
//#region ../packages/ui/src/meter/indicator.tsx
var import_jsx_dev_runtime$3, _jsxFileName$3, Indicator;
function init_indicator() {
	return (init_indicator = __esmMin((() => {
		init_MeterIndicator();
		init_clsx();
		init_react();
		init_resets_module();
		init_style_module();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/meter/indicator.tsx";
		Indicator = (0, import_react$6.forwardRef)(function MeterIndicator$1({ tone = "neutral", className, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(MeterIndicator, {
				ref,
				className: clsx(resets_module_default["box-sizing"], style_module_default.indicator, style_module_default[`is-${tone}`], className),
				...props
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 14,
				columnNumber: 4
			}, this);
		});
		try {
			Indicator.__docgenInfo = {
				"description": "The filled portion of the track representing the measured value.",
				"displayName": "Indicator",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/meter/indicator.tsx",
				"methods": [],
				"props": {
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS style to apply to the element.",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS class name to apply to the element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"render": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Replaces the component's default HTML element using a given React\nelement, or a function that returns a React element.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ComponentRenderFn<HTMLAttributesWithRef<any>> | ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>>" }
					},
					"tone": {
						"defaultValue": { "value": "neutral" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/meter/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The color tone of the filled indicator.",
						"name": "tone",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"neutral\" | \"brand\"",
							"value": [{ "value": "\"neutral\"" }, { "value": "\"brand\"" }]
						}
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/meter/label.tsx
var import_jsx_dev_runtime$2, _jsxFileName$2, DEFAULT_RENDER$1, Label;
function init_label() {
	return (init_label = __esmMin((() => {
		init_MeterLabel();
		init_clsx();
		init_react();
		init_text();
		init_style_module();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/meter/label.tsx";
		DEFAULT_RENDER$1 = /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Text, {}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 8,
			columnNumber: 24
		}, void 0);
		Label = (0, import_react$6.forwardRef)(function MeterLabel$1({ className, render = DEFAULT_RENDER$1, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(MeterLabel, {
				ref,
				render,
				className: clsx(style_module_default.label, className),
				...props
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 18,
				columnNumber: 3
			}, this);
		});
		try {
			Label.__docgenInfo = {
				"description": "The visible label, automatically used as the meter bar's accessible name.",
				"displayName": "Label",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/meter/label.tsx",
				"methods": [],
				"props": {
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS class name to apply to the element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS style to apply to the element.",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"render": {
						"defaultValue": { "value": "<Text />" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Replaces the component's default HTML element using a given React\nelement, or a function that returns a React element.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ComponentRenderFn<HTMLAttributesWithRef<any>> | ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>>" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/meter/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The visible, accessible name of the measured quantity.",
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
//#region ../packages/ui/src/meter/value.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, DEFAULT_RENDER, Value;
function init_value() {
	return (init_value = __esmMin((() => {
		init_MeterValue();
		init_clsx();
		init_react();
		init_text();
		init_style_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/meter/value.tsx";
		DEFAULT_RENDER = /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Text, {}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 8,
			columnNumber: 24
		}, void 0);
		Value = (0, import_react$6.forwardRef)(function MeterValue$1({ className, render = DEFAULT_RENDER, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(MeterValue, {
				ref,
				render,
				className: clsx(style_module_default.value, className),
				...props
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 18,
				columnNumber: 3
			}, this);
		});
		try {
			Value.__docgenInfo = {
				"description": "Displays the formatted meter value. Use a child function to customize it.",
				"displayName": "Value",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/meter/value.tsx",
				"methods": [],
				"props": {
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS class name to apply to the element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS style to apply to the element.",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"render": {
						"defaultValue": { "value": "<Text />" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Replaces the component's default HTML element using a given React\nelement, or a function that returns a React element.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ComponentRenderFn<HTMLAttributesWithRef<any>> | ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>>" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/meter/stories/index.story.tsx
var index_story_exports = /* @__PURE__ */ __exportAll({
	BarOnly: () => BarOnly,
	Brand: () => Brand,
	CustomValueFormat: () => CustomValueFormat,
	Default: () => Default,
	default: () => meta
});
var import_jsx_dev_runtime, _jsxFileName, meta, Default, BarOnly, Brand, CustomValueFormat;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_root(), init_track(), init_indicator(), init_label(), init_value();
		init_stack();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/meter/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-ui/Meter",
			id: "design-system-components-meter",
			component: Root,
			subcomponents: {
				"Meter.Track": Track,
				"Meter.Indicator": Indicator,
				"Meter.Label": Label,
				"Meter.Value": Value
			},
			parameters: { componentStatus: {
				status: "use-with-caution",
				whereUsed: "global",
				notes: "API and design may change."
			} },
			args: {
				value: 24,
				tone: "neutral"
			},
			render: ({ tone, ...args }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
				...args,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
					justify: "space-between",
					gap: "sm",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Storage used" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 29,
						columnNumber: 5
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Value, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 30,
						columnNumber: 5
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 28,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Track, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Indicator, { tone }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 33,
					columnNumber: 5
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 32,
					columnNumber: 4
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 27,
				columnNumber: 3
			}, void 0)
		};
		Default = {};
		BarOnly = {
			args: { "aria-label": "Storage used" },
			render: ({ tone, ...args }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
				...args,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Track, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Indicator, { tone }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 5
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 48,
				columnNumber: 3
			}, void 0)
		};
		Brand = { args: { tone: "brand" } };
		CustomValueFormat = {
			args: {
				value: 3,
				max: 10,
				format: { style: "decimal" },
				getAriaValueText: (formattedValue) => `${formattedValue} of 10 GB used`,
				tone: "brand"
			},
			render: ({ tone, ...args }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
				...args,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Storage used" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Track, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Indicator, { tone }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 72,
						columnNumber: 5
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 71,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Value, { children: (formattedValue) => `${formattedValue} of 10 GB used` }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 74,
						columnNumber: 4
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 69,
				columnNumber: 3
			}, void 0)
		};
		try {
			BarOnly.__docgenInfo = {
				"description": "A visible label is optional when the quantity has an accessible name.",
				"displayName": "BarOnly",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/meter/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			CustomValueFormat.__docgenInfo = {
				"description": "Use the same measurement-specific units for visible and accessible value text.",
				"displayName": "CustomValueFormat",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/meter/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{}",
					...Default.parameters?.docs?.source
				}
			}
		};
		BarOnly.parameters = {
			...BarOnly.parameters,
			docs: {
				...BarOnly.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    'aria-label': 'Storage used'\n  },\n  render: ({\n    tone,\n    ...args\n  }) => <Meter.Root {...args}>\n            <Meter.Track>\n                <Meter.Indicator tone={tone} />\n            </Meter.Track>\n        </Meter.Root>\n}",
					...BarOnly.parameters?.docs?.source
				},
				description: {
					story: "A visible label is optional when the quantity has an accessible name.",
					...BarOnly.parameters?.docs?.description
				}
			}
		};
		Brand.parameters = {
			...Brand.parameters,
			docs: {
				...Brand.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    tone: 'brand'\n  }\n}",
					...Brand.parameters?.docs?.source
				}
			}
		};
		CustomValueFormat.parameters = {
			...CustomValueFormat.parameters,
			docs: {
				...CustomValueFormat.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    value: 3,\n    max: 10,\n    format: {\n      style: 'decimal'\n    },\n    getAriaValueText: formattedValue => `${formattedValue} of 10 GB used`,\n    tone: 'brand'\n  },\n  render: ({\n    tone,\n    ...args\n  }) => <Meter.Root {...args}>\n            <Meter.Label>Storage used</Meter.Label>\n            <Meter.Track>\n                <Meter.Indicator tone={tone} />\n            </Meter.Track>\n            <Meter.Value>\n                {formattedValue => `${formattedValue} of 10 GB used`}\n            </Meter.Value>\n        </Meter.Root>\n}",
					...CustomValueFormat.parameters?.docs?.source
				},
				description: {
					story: "Use the same measurement-specific units for visible and accessible value text.",
					...CustomValueFormat.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
export { index_story_exports as a, Default as i, Brand as n, init_index_story as o, CustomValueFormat as r, BarOnly as t };
