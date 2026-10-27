import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as __, t as init_build_module$1 } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { t as close_small_default } from "./close-small-BRQ3N94m.js";
import { n as search_default } from "./search-D_OZk2AM.js";
import { n as init_input_control, t as InputControl } from "./input-control-Blid3S0A.js";
import { n as init_icon, t as Icon } from "./icon-DxWIlbNr.js";
import { n as init_button, t as Button } from "./button-BO8bp-IJ.js";
import { n as init_input_prefix_wrapper, t as InputControlPrefixWrapper } from "./input-prefix-wrapper-ByQWCBpq.js";
import { n as init_input_suffix_wrapper, t as InputControlSuffixWrapper } from "./input-suffix-wrapper-2X1hSqMG.js";
import { r as init_build_module$2 } from "./library.story-CbQx3MQ6.js";
//#region ../packages/components/src/search-control/style.module.scss
var input, icon, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		input = "_input_1ut33_1";
		icon = "_icon_1ut33_5";
		style_module_default = {
			input,
			icon
		};
	})))();
}
//#endregion
//#region ../packages/components/src/search-control/index.tsx
function SuffixItem({ searchRef, onChange, onClose }) {
	if (onClose) deprecated("`onClose` prop in wp.components.SearchControl", { since: "6.8" });
	const onReset = () => {
		onChange("");
		searchRef.current?.focus();
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(InputControlSuffixWrapper, {
		variant: "control",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Button, {
			size: "small",
			icon: close_small_default,
			label: onClose ? __("Close search") : __("Reset search"),
			onClick: onClose ?? onReset
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 31,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 30,
		columnNumber: 3
	}, this);
}
function UnforwardedSearchControl({ __nextHasNoMarginBottom: _, __next40pxDefaultSize: _next40pxDefaultSize, className, onChange, value, label = __("Search"), placeholder = __("Search"), hideLabelFromVision = true, onClose, size = "default", ...restProps }, forwardedRef) {
	const { disabled, ...filteredRestProps } = restProps;
	const searchRef = (0, import_react.useRef)(null);
	const instanceId = use_instance_id_default(SearchControl, "components-search-control");
	const hasSuffix = !!onClose || !!value;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(InputControl, {
		id: instanceId,
		hideLabelFromVision,
		label,
		ref: useMergeRefs([searchRef, forwardedRef]),
		type: "search",
		size,
		className: clsx(style_module_default.input, "components-search-control", className),
		onChange: (nextValue) => onChange(nextValue ?? ""),
		autoComplete: "off",
		placeholder,
		value: value ?? "",
		prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(InputControlPrefixWrapper, {
			variant: "icon",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Icon, {
				className: style_module_default.icon,
				icon: search_default,
				fill: "currentColor"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 92,
				columnNumber: 6
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 91,
			columnNumber: 5
		}, this),
		suffix: hasSuffix && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(SuffixItem, {
			searchRef,
			onChange,
			onClose
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 101,
			columnNumber: 6
		}, this),
		...filteredRestProps
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 74,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, SearchControl;
function init_search_control() {
	return (init_search_control = __esmMin((() => {
		init_clsx();
		init_use_instance_id(), init_use_merge_refs();
		init_build_module$1();
		init_build_module$2();
		init_react();
		init_build_module();
		init_button();
		init_input_control();
		init_icon();
		init_input_prefix_wrapper();
		init_input_suffix_wrapper();
		init_style_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/search-control/index.tsx";
		SearchControl = (0, import_react.forwardRef)(UnforwardedSearchControl);
		SearchControl.displayName = "SearchControl";
		try {
			SearchControl.__docgenInfo = {
				"description": "SearchControl components let users display a search control.\n\n```jsx\nimport { SearchControl } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nfunction MySearchControl( { className, setState } ) {\n  const [ searchInput, setSearchInput ] = useState( '' );\n\n  return (\n    <SearchControl\n      value={ searchInput }\n      onChange={ setSearchInput }\n    />\n  );\n}\n```",
				"displayName": "SearchControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/search-control/index.tsx",
				"methods": [],
				"props": {
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "The current value of the input.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
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
					"__next40pxDefaultSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/search-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "@deprecated This is now the default.\n@ignore",
						"name": "__next40pxDefaultSize",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__nextHasNoMarginBottom": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/search-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting into the new margin-free styles that will become the default in a future version.\n@deprecated Default behavior since WordPress 7.0. Prop can be safely removed.\n@ignore",
						"name": "__nextHasNoMarginBottom",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"hideLabelFromVision": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/search-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If true, the label will only be visible to screen readers.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"label": {
						"defaultValue": { "value": "'Search'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/search-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The accessible label for the input.\n\nA label should always be provided as an accessibility best practice,\neven when a placeholder is defined and `hideLabelFromVision` is `true`.",
						"name": "label",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/search-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function that receives the value of the input when the value is changed.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: string) => void" }
					},
					"onClose": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/search-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "When an `onClose` callback is provided, the search control will render a close button\nthat will trigger the given callback.\n\nUse this if you want the button to trigger your own logic to close the search field entirely,\nrather than just clearing the input value.\n@deprecated\n@ignore",
						"name": "onClose",
						"required": false,
						"tags": {},
						"type": { "name": "(() => void)" }
					},
					"onDrag": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/search-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "@ignore",
						"name": "onDrag",
						"required": false,
						"tags": {},
						"type": { "name": "((dragProps: Omit<FullGestureState<\"drag\">, \"event\"> & { event: unknown; }) => void)" }
					},
					"onDragStart": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/search-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "@ignore",
						"name": "onDragStart",
						"required": false,
						"tags": {},
						"type": { "name": "((dragProps: Omit<FullGestureState<\"drag\">, \"event\"> & { event: unknown; }) => void)" }
					},
					"onDragEnd": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/search-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "@ignore",
						"name": "onDragEnd",
						"required": false,
						"tags": {},
						"type": { "name": "((dragProps: Omit<FullGestureState<\"drag\">, \"event\"> & { event: unknown; }) => void)" }
					},
					"placeholder": {
						"defaultValue": { "value": "'Search'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/search-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A placeholder for the input.",
						"name": "placeholder",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"size": {
						"defaultValue": { "value": "'default'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/search-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The size of the component",
						"name": "size",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"default\" | \"compact\"",
							"value": [{ "value": "\"default\"" }, { "value": "\"compact\"" }]
						}
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/search-control/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_search_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/search-control/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-components/Selection & Input/Common/SearchControl",
			id: "components-searchcontrol",
			component: SearchControl,
			argTypes: {
				onChange: { action: "onChange" },
				value: { control: false }
			},
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "global",
					notes: "Will be superseded by `SearchControl` in `@wordpress/ui`, but continue using for now."
				}
			}
		};
		Template = ({ onChange, ...props }) => {
			const [value, setValue] = (0, import_react.useState)();
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchControl, {
				...props,
				value,
				onChange: (...changeArgs) => {
					setValue(...changeArgs);
					onChange(...changeArgs);
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 33,
				columnNumber: 3
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = { help: "Help text to explain the input." };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "({\n  onChange,\n  ...props\n}) => {\n  const [value, setValue] = useState<string>();\n  return <SearchControl {...props} value={value} onChange={(...changeArgs) => {\n    setValue(...changeArgs);\n    onChange(...changeArgs);\n  }} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
