import { n as __esmMin, o as __toESM, r as __exportAll } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { n as init_react, t as import_react$2 } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { r as useRenderElement, t as init_useRenderElement } from "./useRenderElement-Dkv6YH0v.js";
import { n as useRegisteredLabelId, t as init_useRegisteredLabelId } from "./useRegisteredLabelId-rzX4GRP8.js";
import { a as ProgressRoot, c as progressStateAttributesMapping, i as init_ProgressTrack, l as init_ProgressRootContext, n as init_ProgressIndicator, o as init_ProgressRoot, r as ProgressTrack, s as init_stateAttributesMapping, t as ProgressIndicator, u as useProgressRootContext } from "./ProgressIndicator-CRpAmsXc.js";
import { n as resets_module_default, t as init_resets_module } from "./resets.module-CJil9Bz6.js";
import { n as init_text, t as Text } from "./text-wjaOyqYP.js";
import { n as init_stack, t as Stack } from "./stack-B_tyTWv7.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/progress/value/ProgressValue.mjs
var import_react$1, ProgressValue;
function init_ProgressValue() {
	return (init_ProgressValue = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useRenderElement();
		init_ProgressRootContext();
		init_stateAttributesMapping();
		ProgressValue = /*#__PURE__*/ import_react$1.forwardRef(function ProgressValue(componentProps, forwardedRef) {
			const { className, render, children, style, ...elementProps } = componentProps;
			const { value, formattedValue, state } = useProgressRootContext();
			const indeterminate = state.status === "indeterminate";
			return useRenderElement("span", componentProps, {
				state,
				ref: forwardedRef,
				props: [{
					"aria-hidden": true,
					children: typeof children === "function" ? children(indeterminate ? "indeterminate" : formattedValue, value) : indeterminate ? null : formattedValue
				}, elementProps],
				stateAttributesMapping: progressStateAttributesMapping
			});
		});
		ProgressValue.displayName = "ProgressValue";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/progress/label/ProgressLabel.mjs
var import_react, ProgressLabel;
function init_ProgressLabel() {
	return (init_ProgressLabel = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useRenderElement();
		init_useRegisteredLabelId();
		init_ProgressRootContext();
		init_stateAttributesMapping();
		ProgressLabel = /*#__PURE__*/ import_react.forwardRef(function ProgressLabel(componentProps, forwardedRef) {
			const { render, className, style, id: idProp, ...elementProps } = componentProps;
			const { setLabelId, state } = useProgressRootContext();
			const id = useRegisteredLabelId(idProp, setLabelId);
			return useRenderElement("span", componentProps, {
				state,
				ref: forwardedRef,
				props: [{
					id,
					role: "presentation"
				}, elementProps],
				stateAttributesMapping: progressStateAttributesMapping
			});
		});
		ProgressLabel.displayName = "ProgressLabel";
	})))();
}
//#endregion
//#region ../packages/ui/src/progress/style.module.css
var root, label, value, track, indicator, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		root = "_root_1rjps_5";
		label = "_label_1rjps_10";
		value = "_value_1rjps_11";
		track = "_track_1rjps_19";
		indicator = "_indicator_1rjps_34";
		style_module_default = {
			root,
			label,
			value,
			track,
			indicator,
			"progress-slide": "_progress-slide_1rjps_1"
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/progress/root.tsx
var import_jsx_dev_runtime$5, _jsxFileName$5, DEFAULT_RENDER$2, Root;
function init_root() {
	return (init_root = __esmMin((() => {
		init_ProgressRoot();
		init_clsx();
		init_react();
		init_build_module();
		init_stack();
		init_resets_module();
		init_style_module();
		import_jsx_dev_runtime$5 = require_jsx_dev_runtime();
		_jsxFileName$5 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/progress/root.tsx";
		DEFAULT_RENDER$2 = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(Stack, {
			...props,
			direction: "column",
			gap: "sm"
		}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 11,
			columnNumber: 2
		}, void 0);
		Root = (0, import_react$2.forwardRef)(function ProgressRoot$1({ className, render = DEFAULT_RENDER$2, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(ProgressRoot, {
				ref,
				render,
				getAriaValueText: (formattedValue) => formattedValue || __("In progress"),
				className: clsx(resets_module_default["box-sizing"], style_module_default.root, className),
				...props
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 24,
				columnNumber: 3
			}, this);
		});
		try {
			Root.__docgenInfo = {
				"description": "Groups the progress bar, label, and value for a task.\nPass `null` as the value for indeterminate progress.\nUse `Progress.Label`, `aria-label`, or `aria-labelledby` to name the task.",
				"displayName": "Root",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/progress/root.tsx",
				"methods": [],
				"props": {
					"aria-valuetext": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/progress/root/ProgressRoot.d.mts",
							"name": "ProgressRootProps"
						}],
						"description": "A string value that provides a user-friendly name for `aria-valuenow`, the current value of the progress bar.",
						"name": "aria-valuetext",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/progress/root/ProgressRoot.d.mts",
							"name": "ProgressRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"format": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/progress/root/ProgressRoot.d.mts",
							"name": "ProgressRootProps"
						}],
						"description": "Options to format the value.",
						"name": "format",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/progress/root/ProgressRoot.d.mts",
							"name": "ProgressRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "NumberFormatOptions" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/progress/root/ProgressRoot.d.mts",
							"name": "ProgressRootProps"
						}],
						"description": "The current value. The component is indeterminate when value is `null`.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/progress/root/ProgressRoot.d.mts",
							"name": "ProgressRootProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "number | null" }
					},
					"locale": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/progress/root/ProgressRoot.d.mts",
							"name": "ProgressRootProps"
						}],
						"description": "The locale used by `Intl.NumberFormat` when formatting the value.\nDefaults to the user's runtime locale.",
						"name": "locale",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/progress/root/ProgressRoot.d.mts",
							"name": "ProgressRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "LocalesArgument" }
					},
					"max": {
						"defaultValue": { "value": "100" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/progress/root/ProgressRoot.d.mts",
							"name": "ProgressRootProps"
						}],
						"description": "The maximum value.",
						"name": "max",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/progress/root/ProgressRoot.d.mts",
							"name": "ProgressRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"min": {
						"defaultValue": { "value": "0" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/progress/root/ProgressRoot.d.mts",
							"name": "ProgressRootProps"
						}],
						"description": "The minimum value.",
						"name": "min",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/progress/root/ProgressRoot.d.mts",
							"name": "ProgressRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"getAriaValueText": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/progress/root/ProgressRoot.d.mts",
							"name": "ProgressRootProps"
						}],
						"description": "Accepts a function which returns a string value that provides a human-readable text alternative for the current value of the progress bar.",
						"name": "getAriaValueText",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/progress/root/ProgressRoot.d.mts",
							"name": "ProgressRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((formattedValue: string, value: number | null) => string)" }
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
							"fileName": "gutenberg-storybook-preview/packages/ui/src/progress/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The parts of the progress indicator, including its label and value.",
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
//#region ../packages/ui/src/progress/track.tsx
var import_jsx_dev_runtime$4, _jsxFileName$4, Track;
function init_track() {
	return (init_track = __esmMin((() => {
		init_ProgressTrack();
		init_clsx();
		init_react();
		init_resets_module();
		init_style_module();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/progress/track.tsx";
		Track = (0, import_react$2.forwardRef)(function ProgressTrack$1({ className, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(ProgressTrack, {
				ref,
				className: clsx(resets_module_default["box-sizing"], style_module_default.track, className),
				...props
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 16,
				columnNumber: 3
			}, this);
		});
		try {
			Track.__docgenInfo = {
				"description": "The neutral track containing the filled progress indicator.",
				"displayName": "Track",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/progress/track.tsx",
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
							"fileName": "gutenberg-storybook-preview/packages/ui/src/progress/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The progress indicator to render inside the track.",
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
//#region ../packages/ui/src/progress/indicator.tsx
var import_jsx_dev_runtime$3, _jsxFileName$3, Indicator;
function init_indicator() {
	return (init_indicator = __esmMin((() => {
		init_ProgressIndicator();
		init_clsx();
		init_react();
		init_resets_module();
		init_style_module();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/progress/indicator.tsx";
		Indicator = (0, import_react$2.forwardRef)(function ProgressIndicator$1({ color, className, style, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(ProgressIndicator, {
				ref,
				style: color === void 0 ? style : {
					...style,
					color
				},
				className: clsx(resets_module_default["box-sizing"], style_module_default.indicator, className),
				...props
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 14,
				columnNumber: 4
			}, this);
		});
		try {
			Indicator.__docgenInfo = {
				"description": "The filled portion of the track, or an animation for indeterminate progress.",
				"displayName": "Indicator",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/progress/indicator.tsx",
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
					"color": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/progress/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The filled indicator color. Accepts any CSS color value,\nincluding `currentColor` to inherit the surrounding text color.\nThe track, label, and value keep their own colors.",
						"name": "color",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/progress/label.tsx
var import_jsx_dev_runtime$2, _jsxFileName$2, DEFAULT_RENDER$1, Label;
function init_label() {
	return (init_label = __esmMin((() => {
		init_ProgressLabel();
		init_clsx();
		init_react();
		init_text();
		init_style_module();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/progress/label.tsx";
		DEFAULT_RENDER$1 = /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Text, {}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 8,
			columnNumber: 24
		}, void 0);
		Label = (0, import_react$2.forwardRef)(function ProgressLabel$1({ className, render = DEFAULT_RENDER$1, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(ProgressLabel, {
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
				"description": "The visible label, automatically used as the progress bar's accessible name.",
				"displayName": "Label",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/progress/label.tsx",
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
							"fileName": "gutenberg-storybook-preview/packages/ui/src/progress/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The visible, accessible name of the task.",
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
//#region ../packages/ui/src/progress/value.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, DEFAULT_RENDER, Value;
function init_value() {
	return (init_value = __esmMin((() => {
		init_ProgressValue();
		init_clsx();
		init_react();
		init_text();
		init_style_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/progress/value.tsx";
		DEFAULT_RENDER = /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Text, {}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 8,
			columnNumber: 24
		}, void 0);
		Value = (0, import_react$2.forwardRef)(function ProgressValue$1({ className, render = DEFAULT_RENDER, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ProgressValue, {
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
				"description": "Displays the formatted progress value. Use a child function to customize it.",
				"displayName": "Value",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/progress/value.tsx",
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
							"fileName": "gutenberg-storybook-preview/packages/ui/src/progress/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function that receives the formatted and numeric progress values and\nreturns the content to display. The numeric value is null for indeterminate progress.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "((formattedValue: string | null, value: number | null) => ReactNode) | null" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/progress/stories/index.story.tsx
var index_story_exports = /* @__PURE__ */ __exportAll({
	BarOnly: () => BarOnly,
	CurrentColor: () => CurrentColor,
	CustomColor: () => CustomColor,
	CustomValueFormat: () => CustomValueFormat,
	Default: () => Default,
	Indeterminate: () => Indeterminate,
	default: () => meta
});
var import_jsx_dev_runtime, _jsxFileName, meta, Default, Indeterminate, BarOnly, CustomColor, CurrentColor, CustomValueFormat;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_root(), init_track(), init_indicator(), init_label(), init_value();
		init_stack();
		init_text();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/progress/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-ui/Progress",
			id: "design-system-components-progress",
			component: Root,
			subcomponents: {
				"Progress.Track": Track,
				"Progress.Indicator": Indicator,
				"Progress.Label": Label,
				"Progress.Value": Value
			},
			parameters: { componentStatus: {
				status: "recommended",
				whereUsed: "global"
			} },
			args: { value: 60 },
			render: ({ color, ...args }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
				...args,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
					justify: "space-between",
					gap: "sm",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Uploading files" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 30,
						columnNumber: 5
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Value, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 31,
						columnNumber: 5
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 29,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Track, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Indicator, { color }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 34,
					columnNumber: 5
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 33,
					columnNumber: 4
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 28,
				columnNumber: 3
			}, void 0)
		};
		Default = {};
		Indeterminate = { args: { value: null } };
		BarOnly = {
			args: { "aria-label": "Uploading files" },
			render: ({ color, ...args }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
				...args,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Track, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Indicator, { color }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 54,
					columnNumber: 5
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 52,
				columnNumber: 3
			}, void 0)
		};
		CustomColor = { args: { color: "#e85d04" } };
		CurrentColor = {
			args: { color: "currentColor" },
			decorators: [(Story) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
				direction: "column",
				gap: "sm",
				style: { color: "#7f32c9" },
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "The indicator inherits this text color." }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 70,
					columnNumber: 5
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Story, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 71,
					columnNumber: 5
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 69,
				columnNumber: 4
			}, void 0)]
		};
		CustomValueFormat = {
			args: {
				value: 3,
				max: 10,
				format: { style: "decimal" },
				getAriaValueText: (formattedValue) => `${formattedValue} of 10 images uploaded`
			},
			render: ({ color, ...args }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
				...args,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Uploading images" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 88,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Track, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Indicator, { color }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 90,
						columnNumber: 5
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 89,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Value, { children: (formattedValue, value) => value === null ? "Preparing images" : `${formattedValue} of 10 images uploaded` }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 92,
						columnNumber: 4
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 87,
				columnNumber: 3
			}, void 0)
		};
		try {
			Indeterminate.__docgenInfo = {
				"description": "Pass null when the amount of completed work is unknown.",
				"displayName": "Indeterminate",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/progress/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			BarOnly.__docgenInfo = {
				"description": "A visible label is optional when the task has an accessible name.",
				"displayName": "BarOnly",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/progress/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			CustomColor.__docgenInfo = {
				"description": "The color prop changes the indicator, leaving the other parts unchanged.",
				"displayName": "CustomColor",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/progress/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			CustomValueFormat.__docgenInfo = {
				"description": "Use the same task-specific units for visible and accessible value text.",
				"displayName": "CustomValueFormat",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/progress/stories/index.story.tsx",
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
		Indeterminate.parameters = {
			...Indeterminate.parameters,
			docs: {
				...Indeterminate.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    value: null\n  }\n}",
					...Indeterminate.parameters?.docs?.source
				},
				description: {
					story: "Pass null when the amount of completed work is unknown.",
					...Indeterminate.parameters?.docs?.description
				}
			}
		};
		BarOnly.parameters = {
			...BarOnly.parameters,
			docs: {
				...BarOnly.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    'aria-label': 'Uploading files'\n  },\n  render: ({\n    color,\n    ...args\n  }) => <Progress.Root {...args}>\n            <Progress.Track>\n                <Progress.Indicator color={color} />\n            </Progress.Track>\n        </Progress.Root>\n}",
					...BarOnly.parameters?.docs?.source
				},
				description: {
					story: "A visible label is optional when the task has an accessible name.",
					...BarOnly.parameters?.docs?.description
				}
			}
		};
		CustomColor.parameters = {
			...CustomColor.parameters,
			docs: {
				...CustomColor.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    color: '#e85d04'\n  }\n}",
					...CustomColor.parameters?.docs?.source
				},
				description: {
					story: "The color prop changes the indicator, leaving the other parts unchanged.",
					...CustomColor.parameters?.docs?.description
				}
			}
		};
		CurrentColor.parameters = {
			...CurrentColor.parameters,
			docs: {
				...CurrentColor.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    color: 'currentColor'\n  },\n  decorators: [Story => <Stack direction=\"column\" gap=\"sm\" style={{\n    color: '#7f32c9'\n  }}>\n                <Text>The indicator inherits this text color.</Text>\n                <Story />\n            </Stack>]\n}",
					...CurrentColor.parameters?.docs?.source
				}
			}
		};
		CustomValueFormat.parameters = {
			...CustomValueFormat.parameters,
			docs: {
				...CustomValueFormat.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    value: 3,\n    max: 10,\n    format: {\n      style: 'decimal'\n    },\n    getAriaValueText: formattedValue => `${formattedValue} of 10 images uploaded`\n  },\n  render: ({\n    color,\n    ...args\n  }) => <Progress.Root {...args}>\n            <Progress.Label>Uploading images</Progress.Label>\n            <Progress.Track>\n                <Progress.Indicator color={color} />\n            </Progress.Track>\n            <Progress.Value>\n                {(formattedValue, value) => value === null ? 'Preparing images' : `${formattedValue} of 10 images uploaded`}\n            </Progress.Value>\n        </Progress.Root>\n}",
					...CustomValueFormat.parameters?.docs?.source
				},
				description: {
					story: "Use the same task-specific units for visible and accessible value text.",
					...CustomValueFormat.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
export { index_story_exports as a, Indeterminate as i, CustomValueFormat as n, init_index_story as o, Default as r, CustomColor as t };
