import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { c as init_context_system_provider, n as useContextSystem, o as init_context_connect, r as contextConnect, s as ContextSystemProvider, t as init_use_context_system } from "./use-context-system-6z_jGcZR.js";
import { n as init_component, t as VisuallyHidden } from "./component-DWfXyJHZ.js";
import { n as init_component$1, t as Flex } from "./component-DsRVYDtI.js";
import { n as init_component$2, t as FlexItem } from "./component-za0yHv6F.js";
import { n as init_component$3, t as Text } from "./component-CWmndQns.js";
//#region ../packages/components/src/input-control/style.module.scss
var border, container, root, prefix, suffix, backdrop, input, label, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		border = "_border_j0uj8_46";
		container = "_container_j0uj8_49";
		root = "_root_j0uj8_66";
		prefix = "_prefix_j0uj8_120";
		suffix = "_suffix_j0uj8_125";
		backdrop = "_backdrop_j0uj8_132";
		input = "_input_j0uj8_144";
		label = "_label_j0uj8_234";
		style_module_default = {
			border,
			container,
			"is-disabled": "_is-disabled_j0uj8_49",
			"is-borderless": "_is-borderless_j0uj8_49",
			root,
			"full-width": "_full-width_j0uj8_90",
			"custom-width": "_custom-width_j0uj8_93",
			"edge-width": "_edge-width_j0uj8_96",
			"width-inherit": "_width-inherit_j0uj8_100",
			"width-initial": "_width-initial_j0uj8_104",
			"width-revert": "_width-revert_j0uj8_108",
			"width-revert-layer": "_width-revert-layer_j0uj8_112",
			"width-unset": "_width-unset_j0uj8_116",
			prefix,
			suffix,
			backdrop,
			input,
			"is-small": "_is-small_j0uj8_166",
			"is-compact": "_is-compact_j0uj8_176",
			"is-dragging": "_is-dragging_j0uj8_185",
			"has-drag-cursor": "_has-drag-cursor_j0uj8_193",
			label,
			"label-wrapper": "_label-wrapper_j0uj8_246",
			"prefix-wrapper": "_prefix-wrapper_j0uj8_250",
			"has-reduced-padding": "_has-reduced-padding_j0uj8_256",
			"suffix-wrapper": "_suffix-wrapper_j0uj8_264"
		};
	})))();
}
//#endregion
//#region ../packages/components/src/input-control/backdrop.tsx
function Backdrop({ disabled = false, isBorderless = false }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("div", {
		"aria-hidden": "true",
		className: clsx("components-input-control__backdrop", style_module_default.border, style_module_default.backdrop, disabled && style_module_default["is-disabled"], isBorderless && style_module_default["is-borderless"])
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 7,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$2, _jsxFileName$2, MemoizedBackdrop;
function init_backdrop() {
	return (init_backdrop = __esmMin((() => {
		init_clsx();
		init_react();
		init_style_module();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/input-control/backdrop.tsx";
		MemoizedBackdrop = (0, import_react.memo)(Backdrop);
		try {
			MemoizedBackdrop.__docgenInfo = {
				"description": "",
				"displayName": "backdrop",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/input-control/backdrop.tsx",
				"methods": [],
				"props": {
					"disabled": {
						"defaultValue": null,
						"description": "",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isBorderless": {
						"defaultValue": null,
						"description": "",
						"name": "isBorderless",
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
//#region ../packages/components/src/input-control/label.tsx
function Label({ children, hideLabelFromVision, htmlFor, className, labelPosition: _labelPosition, size: _size, ...props }) {
	if (!children) return null;
	if (hideLabelFromVision) return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(VisuallyHidden, {
		as: "label",
		htmlFor,
		children
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 24,
		columnNumber: 4
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(FlexItem, {
		className: style_module_default["label-wrapper"],
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Text, {
			...props,
			as: "label",
			htmlFor,
			className: clsx(style_module_default.label, className),
			children
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 32,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 31,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_label() {
	return (init_label = __esmMin((() => {
		init_clsx();
		init_component$2();
		init_component$3();
		init_style_module();
		init_component();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/input-control/label.tsx";
		try {
			Label.__docgenInfo = {
				"description": "",
				"displayName": "label",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/input-control/label.tsx",
				"methods": [],
				"props": {
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlLabelProps"
						}],
						"description": "",
						"name": "hideLabelFromVision",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlLabelProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"labelPosition": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlLabelProps"
						}],
						"description": "",
						"name": "labelPosition",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlLabelProps"
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
					"size": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlLabelProps"
						}],
						"description": "",
						"name": "size",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlLabelProps"
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
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/input-control/input-base.tsx
function useUniqueId(idProp) {
	const id = `input-base-control-${use_instance_id_default(InputBase)}`;
	return idProp || id;
}
function getUIFlexProps(labelPosition) {
	const props = {};
	switch (labelPosition) {
		case "top":
			props.direction = "column";
			props.expanded = false;
			props.gap = 0;
			break;
		case "bottom":
			props.direction = "column-reverse";
			props.expanded = false;
			props.gap = 0;
			break;
		case "edge": props.justify = "space-between";
	}
	return props;
}
function InputBase(props, ref) {
	const { __unstableInputWidth, children, className, disabled = false, hideLabelFromVision = false, labelPosition, id: idProp, isBorderless = false, label, prefix, size = "default", suffix, ...restProps } = useContextSystem(props, "InputBase");
	const id = useUniqueId(idProp);
	const prefixSuffixContextValue = (0, import_react.useMemo)(() => {
		return {
			InputControlPrefixWrapper: { size },
			InputControlSuffixWrapper: { size }
		};
	}, [size]);
	const normalizedWidth = typeof __unstableInputWidth === "string" ? __unstableInputWidth.trim().toLowerCase() : void 0;
	const widthKeyword = normalizedWidth && [
		"inherit",
		"initial",
		"revert",
		"revert-layer",
		"unset"
	].includes(normalizedWidth) ? normalizedWidth : void 0;
	const hasWidth = !!__unstableInputWidth;
	const hasCustomWidth = hasWidth && labelPosition !== "side" && labelPosition !== "edge";
	const hasEdgeWidth = labelPosition === "edge" && typeof __unstableInputWidth === "string" && hasWidth && !widthKeyword;
	const cssWidth = typeof __unstableInputWidth === "number" ? `${__unstableInputWidth}px` : __unstableInputWidth;
	const containerStyle = { "--_wp-components-input-control-width": hasCustomWidth && !widthKeyword || hasEdgeWidth ? cssWidth : void 0 };
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, {
		...restProps,
		...getUIFlexProps(labelPosition),
		className: clsx(style_module_default.root, className),
		gap: 2,
		ref,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
			className: "components-input-control__label",
			hideLabelFromVision,
			labelPosition,
			htmlFor: id,
			children: label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 120,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			disabled,
			className: clsx("components-input-control__container", style_module_default.container, {
				[style_module_default["is-disabled"]]: disabled,
				[style_module_default["full-width"]]: !hasWidth,
				[style_module_default["custom-width"]]: hasCustomWidth && !widthKeyword,
				[style_module_default["edge-width"]]: hasEdgeWidth
			}, hasCustomWidth && widthKeyword && style_module_default[`width-${widthKeyword}`]),
			style: containerStyle,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContextSystemProvider, {
				value: prefixSuffixContextValue,
				children: [
					prefix && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: clsx("components-input-control__prefix", style_module_default.prefix),
						children: prefix
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 148,
						columnNumber: 7
					}, this),
					children,
					suffix && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: clsx("components-input-control__suffix", style_module_default.suffix),
						children: suffix
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 159,
						columnNumber: 7
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 146,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MemoizedBackdrop, {
				disabled,
				isBorderless
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 169,
				columnNumber: 5
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 128,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 113,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, input_base_default;
function init_input_base() {
	return (init_input_base = __esmMin((() => {
		init_clsx();
		init_use_instance_id();
		init_react();
		init_backdrop();
		init_label();
		init_style_module();
		init_component$1();
		init_context_system_provider(), init_context_connect(), init_use_context_system();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/input-control/input-base.tsx";
		input_base_default = contextConnect(InputBase, "InputBase");
	})))();
}
//#endregion
export { style_module_default as i, input_base_default as n, init_style_module as r, init_input_base as t };
