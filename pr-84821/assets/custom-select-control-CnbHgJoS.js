import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { n as __, r as _n, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { t as icon_default } from "./icon-DEDMwo2v.js";
import { t as check_default } from "./check-Cpe2xAFk.js";
import { i as init_dist, s as useStoreState } from "./CDh2UhnG-eN0icMPG.js";
import { a as SelectLabel, c as init_select_item_check, d as Select, f as init_select, i as init_select_popover, l as SelectItem, n as useSelectStore, o as init_select_label, r as SelectPopover, s as SelectItemCheck, t as init_select_store, u as init_select_item } from "./select-store-CWKY3DZ1.js";
import { n as input_base_default, t as init_input_base } from "./input-base-C2uO--ud.js";
import { n as init_component, t as VisuallyHidden } from "./component-DtWxfX7z.js";
import { n as init_base_control, t as BaseControl } from "./base-control-CSASrsP8.js";
import { n as init_chevron_down, t as SelectControlChevronDown } from "./chevron-down-CA-MkELF.js";
import { r as init_build_module$1 } from "./library.story-CFsmdbdz.js";
//#region ../packages/components/src/custom-select-control-v2/style.module.scss
var select, item, popover, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		select = "_select_16hfs_49";
		item = "_item_16hfs_89";
		popover = "_popover_16hfs_142";
		style_module_default = {
			select,
			"has-custom-render": "_has-custom-render_16hfs_64",
			"is-small": "_is-small_16hfs_73",
			item,
			"is-compact": "_is-compact_16hfs_94",
			popover,
			"slide-down": "_slide-down_16hfs_1",
			"fade-in": "_fade-in_16hfs_1",
			"selected-hint-wrapper": "_selected-hint-wrapper_16hfs_186",
			"selected-hint": "_selected-hint_16hfs_186",
			"hint-wrapper": "_hint-wrapper_16hfs_197",
			"item-hint": "_item-hint_16hfs_206",
			"item-check": "_item-check_16hfs_214"
		};
	})))();
}
//#endregion
//#region ../packages/components/src/custom-select-control-v2/custom-select.tsx
function defaultRenderSelectedValue(value) {
	if (Array.isArray(value) ? value.length === 0 : value === void 0 || value === null) return __("Select an item");
	if (Array.isArray(value)) return value.length === 1 ? value[0] : sprintf(_n("%d item selected", "%d items selected", value.length), value.length);
	return value;
}
function CustomSelect(props) {
	const { children, hideLabelFromVision = false, label, size, store, className, isLegacy = false, ...restProps } = props;
	const onSelectPopoverKeyDown = (0, import_react.useCallback)((e) => {
		if (isLegacy) e.stopPropagation();
	}, [isLegacy]);
	const contextValue = (0, import_react.useMemo)(() => ({
		store,
		size
	}), [store, size]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("div", {
		className,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(SelectLabel, {
			store,
			render: hideLabelFromVision ? /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(VisuallyHidden, {}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 119,
				columnNumber: 7
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(BaseControl.VisualLabel, { as: "div" }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 122,
				columnNumber: 7
			}, this),
			children: label
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 114,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(input_base_default, {
			size,
			suffix: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(SelectControlChevronDown, {}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 128,
				columnNumber: 38
			}, this),
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(CustomSelectButton, {
				...restProps,
				size,
				store,
				showOnKeyDown: !isLegacy
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 129,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(SelectPopover, {
				className: style_module_default.popover,
				gutter: 12,
				store,
				sameWidth: true,
				slide: false,
				onKeyDown: onSelectPopoverKeyDown,
				flip: !isLegacy,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(CustomSelectContext.Provider, {
					value: contextValue,
					children
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 146,
					columnNumber: 6
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 136,
				columnNumber: 5
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 128,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 113,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$2, _jsxFileName$2, CustomSelectContext, CustomSelectButton;
function init_custom_select() {
	return (init_custom_select = __esmMin((() => {
		init_dist(), init_select(), init_select_label(), init_select_popover();
		init_clsx();
		init_react();
		init_build_module();
		init_component();
		init_style_module();
		init_input_base();
		init_chevron_down();
		init_base_control();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/custom-select-control-v2/custom-select.tsx";
		CustomSelectContext = (0, import_react.createContext)(void 0);
		CustomSelectContext.displayName = "CustomSelectContext";
		CustomSelectButton = ({ renderSelectedValue, size = "default", store, className, ...restProps }) => {
			const { value: currentValue } = useStoreState(store);
			const computedRenderSelectedValue = (0, import_react.useMemo)(() => renderSelectedValue ?? defaultRenderSelectedValue, [renderSelectedValue]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Select, {
				...restProps,
				className: clsx(style_module_default.select, className, {
					[style_module_default["is-compact"]]: size === "compact",
					[style_module_default["is-small"]]: size === "small",
					[style_module_default["has-custom-render"]]: !!renderSelectedValue
				}),
				store,
				children: computedRenderSelectedValue(currentValue)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 68,
				columnNumber: 3
			}, void 0);
		};
		try {
			CustomSelectContext.__docgenInfo = {
				"description": "",
				"displayName": "CustomSelectContext",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/custom-select-control-v2/custom-select.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/custom-select-control-v2/item.tsx
function CustomSelectItem({ children, className, ...props }) {
	const customSelectContext = (0, import_react.useContext)(CustomSelectContext);
	const size = customSelectContext?.size ?? "default";
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(SelectItem, {
		store: customSelectContext?.store,
		...props,
		className: clsx(style_module_default.item, className, {
			[style_module_default["is-compact"]]: size === "compact",
			[style_module_default["is-small"]]: size === "small"
		}),
		children: [children ?? props.value, /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(SelectItemCheck, {
			className: style_module_default["item-check"],
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(icon_default, { icon: check_default }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 28,
				columnNumber: 5
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 27,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 18,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_item() {
	return (init_item = __esmMin((() => {
		init_select_item(), init_select_item_check();
		init_clsx();
		init_react();
		init_build_module$1();
		init_style_module();
		init_custom_select();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/custom-select-control-v2/item.tsx";
		CustomSelectItem.displayName = "CustomSelectControlV2.Item";
		try {
			CustomSelectItem.__docgenInfo = {
				"description": "",
				"displayName": "CustomSelectItem",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/custom-select-control-v2/item.tsx",
				"methods": [],
				"props": {
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control-v2/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The value of the select item. This will be used as the children if\nchildren are left `undefined`.",
						"name": "value",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control-v2/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The children to display for each select item. The `value` will be\nused if left `undefined`.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control-v2/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If true, the item will be disabled.\n\nYou will need to add your own styles (e.g. reduced opacity) to visually show that they are disabled.",
						"name": "disabled",
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
//#region ../packages/components/src/custom-select-control/index.tsx
function useDeprecatedProps({ __experimentalShowSelectedHint, ...otherProps }) {
	return {
		showSelectedHint: __experimentalShowSelectedHint,
		...otherProps
	};
}
function applyOptionDeprecations({ __experimentalHint, ...rest }) {
	return {
		hint: __experimentalHint,
		...rest
	};
}
function getDescribedBy(currentName, describedBy) {
	if (describedBy) return describedBy;
	return sprintf(__("Currently selected: %s"), currentName);
}
/**
* `CustomSelectControl` is a dropdown for selecting a single option from a
* list, with support for custom styling. Use it instead of the `SelectControl`
* when options need richer markup (e.g. per-option styles or hints).
*/
function CustomSelectControl(props) {
	const { __next40pxDefaultSize: _next40pxDefaultSize, describedBy, options, onChange, size = "default", value, className: classNameProp, showSelectedHint = false, ...restProps } = useDeprecatedProps(props);
	const descriptionId = use_instance_id_default(CustomSelectControl, "custom-select-control__description");
	const store = useSelectStore({
		async setValue(nextValue) {
			const nextOption = options.find((item) => item.key === nextValue);
			if (!onChange || !nextOption) return;
			await Promise.resolve();
			const state = store.getState();
			const changeObject = {
				highlightedIndex: state.renderedItems.findIndex((item) => item.value === nextValue),
				inputValue: "",
				isOpen: state.open,
				selectedItem: nextOption,
				type: ""
			};
			onChange(changeObject);
		},
		value: value?.key,
		defaultValue: options[0]?.key
	});
	const children = options.map(applyOptionDeprecations).map(({ name, key, hint, style, className }) => {
		const withHint = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: style_module_default["hint-wrapper"],
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: name }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 110,
				columnNumber: 6
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: clsx(style_module_default["item-hint"], "components-custom-select-control__item-hint"),
				children: hint
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 111,
				columnNumber: 6
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 109,
			columnNumber: 5
		}, this);
		return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomSelectItem, {
			value: key,
			children: hint ? withHint : name,
			style,
			className: clsx(className, "components-custom-select-control__item", { "has-hint": hint })
		}, key, false, {
			fileName: _jsxFileName,
			lineNumber: 124,
			columnNumber: 5
		}, this);
	});
	const currentValue = useStoreState(store, "value");
	const selectedOption = options?.map(applyOptionDeprecations)?.find(({ key }) => currentValue === key) ?? options[0];
	const renderSelectedValue = () => {
		if (!showSelectedHint || !selectedOption.hint) return selectedOption?.name;
		return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: style_module_default["selected-hint-wrapper"],
			children: [selectedOption?.name, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: clsx(style_module_default["selected-hint"], "components-custom-select-control__hint"),
				children: selectedOption?.hint
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 156,
				columnNumber: 5
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 154,
			columnNumber: 4
		}, this);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomSelect, {
		"aria-describedby": descriptionId,
		renderSelectedValue,
		size,
		store,
		className: clsx("components-custom-select-control", classNameProp),
		isLegacy: true,
		...restProps,
		children
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 171,
		columnNumber: 4
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		id: descriptionId,
		children: getDescribedBy(selectedOption?.name, describedBy)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 187,
		columnNumber: 5
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 186,
		columnNumber: 4
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 170,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName;
function init_custom_select_control() {
	return (init_custom_select_control = __esmMin((() => {
		init_select_store(), init_dist();
		init_clsx();
		init_use_instance_id();
		init_build_module();
		init_custom_select();
		init_item();
		init_style_module();
		init_component();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/custom-select-control/index.tsx";
		try {
			CustomSelectControl.__docgenInfo = {
				"description": "`CustomSelectControl` is a dropdown for selecting a single option from a\nlist, with support for custom styling. Use it instead of the `SelectControl`\nwhen options need richer markup (e.g. per-option styles or hints).",
				"displayName": "CustomSelectControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/custom-select-control/index.tsx",
				"methods": [],
				"props": {
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Optional classname for the component.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Hide the label visually, while keeping available to assistive technology.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"describedBy": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Description for the select trigger button used by assistive technology.\nIf no value is passed, the text \"Currently selected: selectedItem.name\"\nwill be used fully translated.",
						"name": "describedBy",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label for the control.",
						"name": "label",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Function called with the control's internal state changes. The `selectedItem`\nproperty contains the next selected item.",
						"name": "onChange",
						"required": false,
						"tags": {},
						"type": { "name": "((newValue: CustomSelectChangeObject<NoInfer<T>>) => void)" }
					},
					"onBlur": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A handler for `blur` events on the trigger button.\n@ignore",
						"name": "onBlur",
						"required": false,
						"tags": {},
						"type": { "name": "FocusEventHandler<HTMLButtonElement>" }
					},
					"onFocus": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A handler for `focus` events on the trigger button.\n@ignore",
						"name": "onFocus",
						"required": false,
						"tags": {},
						"type": { "name": "FocusEventHandler<HTMLButtonElement>" }
					},
					"onMouseOut": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A handler for `mouseout` events on the trigger button.\n@ignore",
						"name": "onMouseOut",
						"required": false,
						"tags": {},
						"type": { "name": "MouseEventHandler<HTMLButtonElement>" }
					},
					"onMouseOver": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A handler for `mouseover` events on the trigger button.\n@ignore",
						"name": "onMouseOver",
						"required": false,
						"tags": {},
						"type": { "name": "MouseEventHandler<HTMLButtonElement>" }
					},
					"options": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The list of options that can be chosen from.",
						"name": "options",
						"required": true,
						"tags": {},
						"type": { "name": "readonly T[]" }
					},
					"size": {
						"defaultValue": { "value": "'default'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The size of the control.",
						"name": "size",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"small\" | \"default\"",
							"value": [{ "value": "\"small\"" }, { "value": "\"default\"" }]
						}
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Can be used to externally control the value of the control.",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "CustomSelectOption" }
					},
					"__experimentalShowSelectedHint": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Use the `showSelectedHint` property instead.\n@deprecated\n@ignore",
						"name": "__experimentalShowSelectedHint",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"showSelectedHint": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Show the hint of the selected item in the trigger button.",
						"name": "showSelectedHint",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__nextUnconstrainedWidth": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Opt-in prop for an unconstrained width style which became the default in\nWordPress 6.5. The prop is no longer needed and can be safely removed.\n@deprecated\n@ignore",
						"name": "__nextUnconstrainedWidth",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__next40pxDefaultSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting into the larger default height that will become the default size in a future version.\n@deprecated Default behavior since WordPress 7.1. Prop can be safely removed.\n@ignore",
						"name": "__next40pxDefaultSize",
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
export { init_custom_select_control as n, CustomSelectControl as t };
