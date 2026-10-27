import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { o as isRTL, t as init_build_module } from "./build-module-v04us4E2.js";
import { n as usePrevious, t as init_use_previous } from "./use-previous-BYjjquxs.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { i as init_dist, s as useStoreState } from "./CDh2UhnG-BRjcGYWx.js";
import { n as init_radio, t as Radio } from "./radio-CczecD6p.js";
import { i as init_radio_group, n as useRadioStore, r as RadioGroup, t as init_radio_store } from "./radio-store-CvLJK0g1.js";
import { n as init_tooltip, t as Tooltip } from "./tooltip-BfRTnUct.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-6z_jGcZR.js";
import { n as useControlledValue, t as init_use_controlled_value } from "./use-controlled-value-B56JrsG0.js";
import { n as init_component$2, t as View } from "./component-CkY7eURU.js";
import { n as useBaseControlProps } from "./hooks-BoRYqvdn.js";
import { n as init_base_control, t as BaseControl } from "./base-control-pNrjopap.js";
import { i as useTrackElementOffsetRect, n as useAnimatedOffsetRect, r as init_element_rect, t as init_use_animated_offset_rect } from "./use-animated-offset-rect-DvoMmdK4.js";
//#region ../packages/components/src/toggle-group-control/toggle-group-control/style.module.scss
var style_module_default$1;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		style_module_default$1 = {
			"toggle-group-control": "_toggle-group-control_1gsu8_96",
			"has-border": "_has-border_1gsu8_134",
			"has-enclosing-borders": "_has-enclosing-borders_1gsu8_138",
			"is-block": "_is-block_1gsu8_147"
		};
	})))();
}
//#endregion
//#region ../packages/components/src/toggle-group-control/context.ts
var ToggleGroupControlContext, useToggleGroupControlContext;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		ToggleGroupControlContext = (0, import_react.createContext)(void 0);
		ToggleGroupControlContext.displayName = "ToggleGroupControlContext";
		useToggleGroupControlContext = (componentName = "ToggleGroupControlOptionBase") => {
			const context = (0, import_react.useContext)(ToggleGroupControlContext);
			if (!context) throw new Error(`${componentName} can only be rendered inside ToggleGroupControl.`);
			return context;
		};
	})))();
}
//#endregion
//#region ../packages/components/src/toggle-group-control/toggle-group-control/utils.ts
/**
* Used to determine, via an internal heuristics, whether an `undefined` value
* received for the `value` prop should be interpreted as the component being
* used in uncontrolled mode, or as an "empty" value for controlled mode.
*
* @param valueProp The received `value`
*/
function useComputeControlledOrUncontrolledValue(valueProp) {
	const isInitialRenderRef = (0, import_react.useRef)(true);
	const prevValueProp = usePrevious(valueProp);
	const prevIsControlledRef = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (isInitialRenderRef.current) isInitialRenderRef.current = false;
	}, []);
	const isControlled = prevIsControlledRef.current || !isInitialRenderRef.current && prevValueProp !== valueProp;
	(0, import_react.useEffect)(() => {
		prevIsControlledRef.current = isControlled;
	}, [isControlled]);
	if (isControlled) return {
		value: valueProp ?? "",
		defaultValue: void 0
	};
	return {
		value: void 0,
		defaultValue: valueProp
	};
}
function init_utils() {
	return (init_utils = __esmMin((() => {
		init_use_previous();
		init_react();
	})))();
}
//#endregion
//#region ../packages/components/src/toggle-group-control/toggle-group-control/as-radio-group.tsx
function UnforwardedToggleGroupControlAsRadioGroup({ children, isAdaptiveWidth, label, onChange: onChangeProp, value: valueProp, id: idProp, setSelectedElement, disabled, ...otherProps }, forwardedRef) {
	const generatedId = use_instance_id_default(ToggleGroupControlAsRadioGroup, "toggle-group-control-as-radio-group");
	const baseId = idProp || generatedId;
	const { value, defaultValue } = useComputeControlledOrUncontrolledValue(valueProp);
	const radio = useRadioStore({
		defaultValue,
		value,
		setValue: onChangeProp ? (v) => {
			onChangeProp(v ?? void 0);
		} : void 0,
		rtl: isRTL()
	});
	const selectedValue = useStoreState(radio, "value");
	const setValue = radio.setValue;
	(0, import_react.useEffect)(() => {
		if (selectedValue === "") radio.setActiveId(void 0);
	}, [radio, selectedValue]);
	const groupContextValue = (0, import_react.useMemo)(() => ({
		activeItemIsNotFirstItem: () => radio.getState().activeId !== radio.first(),
		baseId,
		isBlock: !isAdaptiveWidth,
		value: selectedValue,
		setValue,
		setSelectedElement,
		disabled: Boolean(disabled)
	}), [
		baseId,
		isAdaptiveWidth,
		radio,
		selectedValue,
		setSelectedElement,
		setValue,
		disabled
	]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(ToggleGroupControlContext.Provider, {
		value: groupContextValue,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(RadioGroup, {
			store: radio,
			"aria-label": label,
			render: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(View, {}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 100,
				columnNumber: 14
			}, this),
			...otherProps,
			id: baseId,
			ref: forwardedRef,
			disabled: disabled || void 0,
			children
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 97,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 96,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$3, _jsxFileName$3, ToggleGroupControlAsRadioGroup;
function init_as_radio_group() {
	return (init_as_radio_group = __esmMin((() => {
		init_radio_store(), init_dist(), init_radio_group();
		init_use_instance_id();
		init_react();
		init_build_module();
		init_component$2();
		init_context();
		init_utils();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toggle-group-control/toggle-group-control/as-radio-group.tsx";
		ToggleGroupControlAsRadioGroup = (0, import_react.forwardRef)(UnforwardedToggleGroupControlAsRadioGroup);
		ToggleGroupControlAsRadioGroup.displayName = "ToggleGroupControlAsRadioGroup";
		try {
			ToggleGroupControlAsRadioGroup.__docgenInfo = {
				"description": "",
				"displayName": "ToggleGroupControlAsRadioGroup",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toggle-group-control/toggle-group-control/as-radio-group.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-group-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The options to render in the `ToggleGroupControl`, using either the `ToggleGroupControlOption` or\n`ToggleGroupControlOptionIcon` components.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-group-control/types.ts",
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
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-group-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback when a segment is selected.",
						"name": "onChange",
						"required": false,
						"tags": {},
						"type": { "name": "((value: string | number) => void)" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-group-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the control is disabled.",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-group-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The selected value.",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "string | number" }
					},
					"isAdaptiveWidth": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-group-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines if segments should be rendered with equal widths.",
						"name": "isAdaptiveWidth",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"setSelectedElement": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-group-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "setSelectedElement",
						"required": true,
						"tags": {},
						"type": { "name": "(element: HTMLElement | undefined) => void" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/toggle-group-control/toggle-group-control/as-button-group.tsx
function UnforwardedToggleGroupControlAsButtonGroup({ children, isAdaptiveWidth, label, onChange, value: valueProp, id: idProp, setSelectedElement, disabled, ...otherProps }, forwardedRef) {
	const generatedId = use_instance_id_default(ToggleGroupControlAsButtonGroup, "toggle-group-control-as-button-group");
	const baseId = idProp || generatedId;
	const { value, defaultValue } = useComputeControlledOrUncontrolledValue(valueProp);
	const [selectedValue, setSelectedValue] = useControlledValue({
		defaultValue,
		value,
		onChange
	});
	const groupContextValue = (0, import_react.useMemo)(() => ({
		baseId,
		value: selectedValue,
		setValue: setSelectedValue,
		isBlock: !isAdaptiveWidth,
		isDeselectable: true,
		setSelectedElement,
		disabled: Boolean(disabled)
	}), [
		baseId,
		selectedValue,
		setSelectedValue,
		isAdaptiveWidth,
		setSelectedElement,
		disabled
	]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(ToggleGroupControlContext.Provider, {
		value: groupContextValue,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(View, {
			"aria-label": label,
			...otherProps,
			ref: forwardedRef,
			role: "group",
			id: baseId,
			"aria-disabled": disabled || void 0,
			children
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 74,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 73,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$2, _jsxFileName$2, ToggleGroupControlAsButtonGroup;
function init_as_button_group() {
	return (init_as_button_group = __esmMin((() => {
		init_use_instance_id();
		init_react();
		init_component$2();
		init_use_controlled_value();
		init_context();
		init_utils();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toggle-group-control/toggle-group-control/as-button-group.tsx";
		ToggleGroupControlAsButtonGroup = (0, import_react.forwardRef)(UnforwardedToggleGroupControlAsButtonGroup);
		ToggleGroupControlAsButtonGroup.displayName = "ToggleGroupControlAsButtonGroup";
		try {
			ToggleGroupControlAsButtonGroup.__docgenInfo = {
				"description": "",
				"displayName": "ToggleGroupControlAsButtonGroup",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toggle-group-control/toggle-group-control/as-button-group.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-group-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The options to render in the `ToggleGroupControl`, using either the `ToggleGroupControlOption` or\n`ToggleGroupControlOptionIcon` components.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-group-control/types.ts",
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
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-group-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback when a segment is selected.",
						"name": "onChange",
						"required": false,
						"tags": {},
						"type": { "name": "((value: string | number) => void)" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-group-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the control is disabled.",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-group-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The selected value.",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "string | number" }
					},
					"isAdaptiveWidth": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-group-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines if segments should be rendered with equal widths.",
						"name": "isAdaptiveWidth",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"setSelectedElement": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-group-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "setSelectedElement",
						"required": true,
						"tags": {},
						"type": { "name": "(element: HTMLElement | undefined) => void" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/toggle-group-control/toggle-group-control/component.tsx
function UnconnectedToggleGroupControl(props, forwardedRef) {
	const { __nextHasNoMarginBottom: _, size: _size, __next40pxDefaultSize: _next40pxDefaultSize, className, isAdaptiveWidth = false, isBlock = false, isDeselectable = false, disabled = false, id, label, hideLabelFromVision = false, help, onChange, value, children, ...otherProps } = useContextSystem(props, "ToggleGroupControl");
	const { baseControlProps, controlProps } = useBaseControlProps({
		id,
		help,
		label,
		hideLabelFromVision
	});
	const [selectedElement, setSelectedElement] = (0, import_react.useState)();
	const [controlElement, setControlElement] = (0, import_react.useState)();
	const refs = useMergeRefs([setControlElement, forwardedRef]);
	const selectedRect = useTrackElementOffsetRect(value !== null && value !== void 0 ? selectedElement : void 0);
	useAnimatedOffsetRect(controlElement, selectedRect, {
		prefix: "selected",
		dataAttribute: "indicator-animated",
		transitionEndFilter: (event) => event.pseudoElement === "::before",
		roundRect: false
	});
	const classes = clsx(style_module_default$1["toggle-group-control"], {
		[style_module_default$1["is-block"]]: isBlock,
		[style_module_default$1["has-border"]]: isBlock && !isDeselectable,
		[style_module_default$1["has-enclosing-borders"]]: !isDeselectable
	}, className);
	const MainControl = isDeselectable ? ToggleGroupControlAsButtonGroup : ToggleGroupControlAsRadioGroup;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(BaseControl, {
		...baseControlProps,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(MainControl, {
			...otherProps,
			...controlProps,
			setSelectedElement,
			className: classes,
			isAdaptiveWidth,
			label,
			onChange,
			ref: refs,
			value,
			disabled,
			children
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 75,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 74,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, ToggleGroupControl;
function init_component() {
	return (init_component = __esmMin((() => {
		init_clsx();
		init_react();
		init_use_merge_refs();
		init_context_connect(), init_use_context_system();
		init_base_control();
		init_style_module();
		init_as_radio_group();
		init_as_button_group();
		init_element_rect();
		init_use_animated_offset_rect();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toggle-group-control/toggle-group-control/component.tsx";
		ToggleGroupControl = contextConnect(UnconnectedToggleGroupControl, "ToggleGroupControl");
		try {
			ToggleGroupControl.__docgenInfo = {
				"description": "`ToggleGroupControl` is a form component that lets users choose options\nrepresented in horizontal segments. To render options for this control use\n`ToggleGroupControlOption` component.\n\nThis component is intended for selecting a single persistent value from a set of options,\nsimilar to a how a radio button group would work. If you simply want a toggle to switch between views,\nuse `Tabs` from `@wordpress/ui` instead.\n\nOnly use this control when you know for sure the labels of items inside won't\nwrap. For items with longer labels, you can consider a `SelectControl` or a\n`CustomSelectControl` component instead.\n\n```jsx\nimport {\n  __experimentalToggleGroupControl as ToggleGroupControl,\n  __experimentalToggleGroupControlOption as ToggleGroupControlOption,\n} from '@wordpress/components';\n\nfunction Example() {\n  return (\n    <ToggleGroupControl\n      label=\"my label\"\n      value=\"vertical\"\n      isBlock\n    >\n      <ToggleGroupControlOption value=\"horizontal\" label=\"Horizontal\" />\n      <ToggleGroupControlOption value=\"vertical\" label=\"Vertical\" />\n    </ToggleGroupControl>\n  );\n}\n```",
				"displayName": "ToggleGroupControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toggle-group-control/toggle-group-control/component.tsx",
				"methods": [],
				"props": {
					"__nextHasNoMarginBottom": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting into the new margin-free styles that will become the default in a future version.\n@deprecated Default behavior since WordPress 7.0. Prop can be safely removed.\n@ignore",
						"name": "__nextHasNoMarginBottom",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
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
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-group-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label for the control.",
						"name": "label",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"hideLabelFromVision": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-group-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If true, the label will only be visible to screen readers.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isAdaptiveWidth": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-group-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines if segments should be rendered with equal widths.",
						"name": "isAdaptiveWidth",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isBlock": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-group-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders `ToggleGroupControl` as a (CSS) block element, spanning the entire width of\nthe available space. This is the recommended style when the options are text-based and not icons.",
						"name": "isBlock",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isDeselectable": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-group-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether an option can be deselected by clicking it again.",
						"name": "isDeselectable",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-group-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback when a segment is selected.",
						"name": "onChange",
						"required": false,
						"tags": {},
						"type": { "name": "((value: string | number) => void)" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-group-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The selected value.",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "string | number" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-group-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The options to render in the `ToggleGroupControl`, using either the `ToggleGroupControlOption` or\n`ToggleGroupControlOptionIcon` components.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-group-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the control is disabled.",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"size": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-group-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The size variant of the control.\n@deprecated This prop no longer has any effect.\n@ignore",
						"name": "size",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"default\" | \"__unstable-large\"",
							"value": [{ "value": "\"default\"" }, { "value": "\"__unstable-large\"" }]
						}
					},
					"__next40pxDefaultSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-group-control/types.ts",
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
//#region ../packages/components/src/toggle-group-control/toggle-group-control-option-base/style.module.scss
var label, button, style_module_default;
function init_style_module$1() {
	return (init_style_module$1 = __esmMin((() => {
		label = "_label_1nxty_96";
		button = "_button_1nxty_107";
		style_module_default = {
			label,
			"label-block": "_label-block_1nxty_103",
			button,
			"is-deselectable": "_is-deselectable_1nxty_147",
			"is-icon": "_is-icon_1nxty_156",
			"is-pressed": "_is-pressed_1nxty_162",
			"button-content": "_button-content_1nxty_167"
		};
	})))();
}
//#endregion
//#region ../packages/components/src/toggle-group-control/toggle-group-control-option-base/component.tsx
function ToggleGroupControlOptionBase(props, forwardedRef) {
	const toggleGroupControlContext = useToggleGroupControlContext();
	const id = use_instance_id_default(ToggleGroupControlOptionBase, toggleGroupControlContext.baseId || "toggle-group-control-option-base");
	const buttonProps = useContextSystem({
		...props,
		id
	}, "ToggleGroupControlOptionBase");
	const { isBlock = false, isDeselectable = false } = toggleGroupControlContext;
	const { className, isIcon = false, value, children, showTooltip = false, disabled, ...otherButtonProps } = buttonProps;
	const isOptionDisabled = Boolean(toggleGroupControlContext.disabled || disabled);
	const isPressed = toggleGroupControlContext.value === value;
	const labelClasses = clsx(style_module_default.label, isBlock && style_module_default["label-block"]);
	const itemClasses = clsx(style_module_default.button, {
		[style_module_default["is-deselectable"]]: isDeselectable,
		[style_module_default["is-icon"]]: isIcon,
		[style_module_default["is-pressed"]]: isPressed
	}, className);
	const buttonOnClick = () => {
		if (isDeselectable && isPressed) toggleGroupControlContext.setValue(void 0);
		else toggleGroupControlContext.setValue(value);
	};
	const commonProps = {
		...otherButtonProps,
		className: itemClasses,
		"data-value": value,
		ref: forwardedRef
	};
	const buttonContentProps = {
		className: style_module_default["button-content"],
		"data-label": typeof children === "string" ? children : void 0
	};
	const labelRef = (0, import_react.useRef)(null);
	(0, import_react.useLayoutEffect)(() => {
		if (isPressed && labelRef.current) toggleGroupControlContext.setSelectedElement(labelRef.current);
	}, [isPressed, toggleGroupControlContext]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		ref: labelRef,
		className: labelClasses,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WithToolTip, {
			showTooltip,
			text: otherButtonProps["aria-label"],
			children: isDeselectable ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				...commonProps,
				disabled: isOptionDisabled,
				"aria-pressed": isPressed,
				type: "button",
				onClick: buttonOnClick,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					...buttonContentProps,
					children
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 127,
					columnNumber: 7
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 120,
				columnNumber: 6
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Radio, {
				disabled,
				onFocusVisible: () => {
					if (!(toggleGroupControlContext.value === null || toggleGroupControlContext.value === "") || toggleGroupControlContext.activeItemIsNotFirstItem?.()) toggleGroupControlContext.setValue(value);
				},
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					...commonProps
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 146,
					columnNumber: 16
				}, this),
				value,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					...buttonContentProps,
					children
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 149,
					columnNumber: 7
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 130,
				columnNumber: 6
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 115,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 114,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, WithToolTip, ConnectedToggleGroupControlOptionBase;
function init_component$1() {
	return (init_component$1 = __esmMin((() => {
		init_clsx();
		init_radio();
		init_use_instance_id();
		init_react();
		init_context_connect(), init_use_context_system();
		init_context();
		init_style_module$1();
		init_tooltip();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toggle-group-control/toggle-group-control-option-base/component.tsx";
		WithToolTip = ({ showTooltip, text, children }) => {
			if (showTooltip && text) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip, {
				text,
				placement: "top",
				children
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 19,
				columnNumber: 4
			}, void 0);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 24,
				columnNumber: 9
			}, void 0);
		};
		ConnectedToggleGroupControlOptionBase = contextConnect(ToggleGroupControlOptionBase, "ToggleGroupControlOptionBase");
		try {
			ConnectedToggleGroupControlOptionBase.__docgenInfo = {
				"description": "A CSS selector used to fake component interpolation in styled components\nfor components not generated by `styled`. Anything passed to `contextConnect`\nwill get this property.\n\nWe restrict it to a class to align with the already existing class names that\nare generated by the context system.",
				"displayName": "selector",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toggle-group-control/toggle-group-control-option-base/component.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_context as a, init_component as i, init_component$1 as n, useToggleGroupControlContext as o, ToggleGroupControl as r, ConnectedToggleGroupControlOptionBase as t };
