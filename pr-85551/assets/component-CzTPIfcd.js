import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { o as isRTL, t as init_build_module } from "./build-module-v04us4E2.js";
import { n as usePrevious, t as init_use_previous } from "./use-previous-BYjjquxs.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { i as init_dist, s as useStoreState } from "./CDh2UhnG-BRjcGYWx.js";
import { n as init_radio, t as Radio } from "./radio-CczecD6p.js";
import { i as init_radio_group, n as useRadioStore, r as RadioGroup, t as init_radio_store } from "./radio-store-CvLJK0g1.js";
import { i as tooltip_default, r as init_tooltip } from "./component-Cvxw1Y5Q.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-4MMWHyS1.js";
import { n as useControlledValue, t as init_use_controlled_value } from "./use-controlled-value-CCRFAPBO.js";
import { n as init_component$2, t as component_default$2 } from "./component-CFOx0tK5.js";
import { n as base_control_default, r as init_base_control } from "./base-control-COIsJz79.js";
import { i as useTrackElementOffsetRect, n as useAnimatedOffsetRect, o as useBaseControlProps, r as init_element_rect, t as init_use_animated_offset_rect } from "./use-animated-offset-rect-BrlFeMg1.js";
//#region ../packages/components/build-module/toggle-group-control/context.mjs
var ToggleGroupControlContext, useToggleGroupControlContext, context_default;
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
		context_default = ToggleGroupControlContext;
	})))();
}
//#endregion
//#region ../packages/components/build-module/toggle-group-control/toggle-group-control/utils.mjs
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
//#region ../packages/components/build-module/toggle-group-control/toggle-group-control/as-radio-group.mjs
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
	return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(context_default.Provider, {
		value: groupContextValue,
		children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(RadioGroup, {
			store: radio,
			"aria-label": label,
			render: /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(component_default$2, {}),
			...otherProps,
			id: baseId,
			ref: forwardedRef,
			disabled: disabled || void 0,
			children
		})
	});
}
var import_jsx_runtime$3, ToggleGroupControlAsRadioGroup;
function init_as_radio_group() {
	return (init_as_radio_group = __esmMin((() => {
		init_radio_store(), init_dist(), init_radio_group();
		init_use_instance_id();
		init_react();
		init_build_module();
		init_component$2();
		init_context();
		init_utils();
		import_jsx_runtime$3 = require_jsx_runtime();
		ToggleGroupControlAsRadioGroup = (0, import_react.forwardRef)(UnforwardedToggleGroupControlAsRadioGroup);
		ToggleGroupControlAsRadioGroup.displayName = "ToggleGroupControlAsRadioGroup";
	})))();
}
//#endregion
//#region ../packages/components/build-module/toggle-group-control/toggle-group-control/as-button-group.mjs
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
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(context_default.Provider, {
		value: groupContextValue,
		children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(component_default$2, {
			"aria-label": label,
			...otherProps,
			ref: forwardedRef,
			role: "group",
			id: baseId,
			"aria-disabled": disabled || void 0,
			children
		})
	});
}
var import_jsx_runtime$2, ToggleGroupControlAsButtonGroup;
function init_as_button_group() {
	return (init_as_button_group = __esmMin((() => {
		init_use_instance_id();
		init_react();
		init_component$2();
		init_use_controlled_value();
		init_context();
		init_utils();
		import_jsx_runtime$2 = require_jsx_runtime();
		ToggleGroupControlAsButtonGroup = (0, import_react.forwardRef)(UnforwardedToggleGroupControlAsButtonGroup);
		ToggleGroupControlAsButtonGroup.displayName = "ToggleGroupControlAsButtonGroup";
	})))();
}
//#endregion
//#region ../packages/components/build-module/toggle-group-control/toggle-group-control/component.mjs
function getRuntime$1() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$1(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$1(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$1}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$1) === hash) return true;
	return false;
}
function injectStyle$1(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$1();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$1(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$1, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$1(targetDocument) {
	const runtime = getRuntime$1();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$1(targetDocument, hash, css);
	return () => {
		const count = runtime.documents.get(targetDocument);
		if (count === void 0) return;
		if (count <= 1) {
			runtime.documents.delete(targetDocument);
			return;
		}
		runtime.documents.set(targetDocument, count - 1);
	};
}
function registerStyle$1(hash, css) {
	const runtime = getRuntime$1();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$1(targetDocument, hash, css);
}
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
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(base_control_default, {
		...baseControlProps,
		children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(MainControl, {
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
		})
	});
}
var import_jsx_runtime$1, STYLE_HASH_ATTRIBUTE$1, style_module_default$1, ToggleGroupControl, component_default$1;
function init_component() {
	return (init_component = __esmMin((() => {
		init_clsx();
		init_react();
		init_use_merge_refs();
		init_context_connect(), init_use_context_system();
		init_base_control();
		init_as_radio_group();
		init_as_button_group();
		init_element_rect();
		init_use_animated_offset_rect();
		import_jsx_runtime$1 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$1 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$1("86a73788d7", ".f3fd102dd2f0e90e__toggle-group-control{background:var(--wp-components-color-background,var(--wpds-color-background-surface-neutral-strong,#fff));border:1px solid transparent;border-radius:var(--wpds-border-radius-sm,2px);display:inline-flex;height:40px;min-width:0;position:relative}@media not (prefers-reduced-motion){.f3fd102dd2f0e90e__toggle-group-control[data-indicator-animated]:before{transition-duration:.2s;transition-property:transform,border-radius;transition-timing-function:ease-out}}.f3fd102dd2f0e90e__toggle-group-control:before{background:var(--wp-components-color-gray-100,var(--wpds-color-background-surface-neutral,#fcfcfc));border:1px solid var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070));border-radius:var(--wpds-border-radius-sm,2px);content:\"\";height:calc(var(--selected-height, 0)*1px + 2px);left:-2px;opacity:min(1,max(0,var(--selected-width,0),var(--selected-height,0)));outline:2px solid transparent;outline-offset:-3px;pointer-events:none;position:absolute;top:-1px;transform:translateX(calc(var(--selected-left, 0)*1px));width:calc(var(--selected-width, 0)*1px + 2px)}.f3fd102dd2f0e90e__toggle-group-control[aria-disabled=true]:before{opacity:calc(min(1, max(0, var(--selected-width, 0), var(--selected-height, 0))) * .4)}._1344586004ce6119__has-border{border-color:var(--wp-components-color-gray-300,var(--wpds-color-stroke-surface-neutral,#dbdbdb))}.aa98fad5b5d333be__has-enclosing-borders:hover:not([aria-disabled=true]){border-color:var(--wp-components-color-gray-400,var(--wpds-color-stroke-interactive-neutral,#8d8d8d))}.aa98fad5b5d333be__has-enclosing-borders:focus-within{outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline-offset:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px));z-index:1}._4068eff8d72c19b3__is-block{display:flex;width:100%}");
		style_module_default$1 = {
			"toggle-group-control": "f3fd102dd2f0e90e__toggle-group-control",
			"has-border": "_1344586004ce6119__has-border",
			"has-enclosing-borders": "aa98fad5b5d333be__has-enclosing-borders",
			"is-block": "_4068eff8d72c19b3__is-block"
		};
		ToggleGroupControl = contextConnect(UnconnectedToggleGroupControl, "ToggleGroupControl");
		component_default$1 = ToggleGroupControl;
	})))();
}
//#endregion
//#region ../packages/components/build-module/toggle-group-control/toggle-group-control-option-base/component.mjs
function getRuntime() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE) === hash) return true;
	return false;
}
function injectStyle(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument(targetDocument) {
	const runtime = getRuntime();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle(targetDocument, hash, css);
	return () => {
		const count = runtime.documents.get(targetDocument);
		if (count === void 0) return;
		if (count <= 1) {
			runtime.documents.delete(targetDocument);
			return;
		}
		runtime.documents.set(targetDocument, count - 1);
	};
}
function registerStyle(hash, css) {
	const runtime = getRuntime();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle(targetDocument, hash, css);
}
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: labelRef,
		className: labelClasses,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WithToolTip, {
			showTooltip,
			text: otherButtonProps["aria-label"],
			children: isDeselectable ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				...commonProps,
				disabled: isOptionDisabled,
				"aria-pressed": isPressed,
				type: "button",
				onClick: buttonOnClick,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					...buttonContentProps,
					children
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, {
				disabled,
				onFocusVisible: () => {
					if (!(toggleGroupControlContext.value === null || toggleGroupControlContext.value === "") || toggleGroupControlContext.activeItemIsNotFirstItem?.()) toggleGroupControlContext.setValue(value);
				},
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					...commonProps
				}),
				value,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					...buttonContentProps,
					children
				})
			})
		})
	});
}
var import_jsx_runtime, STYLE_HASH_ATTRIBUTE, style_module_default, WithToolTip, component_default;
function init_component$1() {
	return (init_component$1 = __esmMin((() => {
		init_clsx();
		init_radio();
		init_use_instance_id();
		init_react();
		init_context_connect(), init_use_context_system();
		init_context();
		init_tooltip();
		import_jsx_runtime = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("377412b511", "._1dec843460a3c9d5__label{display:inline-flex;max-width:100%;min-width:0;position:relative}._50ddec5669c9d4a6__label-block{flex:1}._1563c8aa5e21d063__button{fill:currentColor;align-items:center;appearance:none;background:transparent;border:none;border-radius:var(--wpds-border-radius-xs,1px);color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070));cursor:var(--wpds-cursor-control,pointer);display:flex;font-family:inherit;height:100%;justify-content:center;line-height:1;outline:none;padding:0 12px;position:relative;text-align:center}@media not (prefers-reduced-motion){._1563c8aa5e21d063__button{transition:color .16s linear,font-weight 60ms linear}}._1563c8aa5e21d063__button{user-select:none;width:100%;z-index:2}._1563c8aa5e21d063__button::-moz-focus-inner{border:0}._1563c8aa5e21d063__button[aria-disabled=true],._1563c8aa5e21d063__button[disabled]{cursor:default;opacity:.4}._1563c8aa5e21d063__button:hover:not([disabled]):not([aria-disabled=true]){color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e))}.e1b6a1f76b7eb2bb__is-deselectable:focus{outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline-offset:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px))}.e1b6a1f76b7eb2bb__is-deselectable:focus[aria-pressed=false]{background:var(--wp-components-color-background,var(--wpds-color-background-surface-neutral-strong,#fff));box-shadow:0 0 0 2px var(--wp-components-color-background,var(--wpds-color-background-surface-neutral-strong,#fff))}._407216dd3e301287__is-icon{aspect-ratio:1;height:38px;padding:0}._617c0f0a1c161590__is-pressed{color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e));font-weight:var(--wpds-typography-font-weight-emphasis,600)}._2850882d974e5419__button-content{display:flex;font-size:var(--wpds-typography-font-size-md,13px);line-height:1}._2850882d974e5419__button-content[data-label]{align-items:center;flex-direction:column}._2850882d974e5419__button-content[data-label]:after{content:attr(data-label)/\"\";font-weight:var(--wpds-typography-font-weight-emphasis,600);height:0;overflow:hidden;visibility:hidden}");
		style_module_default = {
			"label": "_1dec843460a3c9d5__label",
			"label-block": "_50ddec5669c9d4a6__label-block",
			"button": "_1563c8aa5e21d063__button",
			"is-deselectable": "e1b6a1f76b7eb2bb__is-deselectable",
			"is-icon": "_407216dd3e301287__is-icon",
			"is-pressed": "_617c0f0a1c161590__is-pressed",
			"button-content": "_2850882d974e5419__button-content"
		};
		WithToolTip = ({ showTooltip, text, children }) => {
			if (showTooltip && text) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default, {
				text,
				placement: "top",
				children
			});
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
		};
		component_default = contextConnect(ToggleGroupControlOptionBase, "ToggleGroupControlOptionBase");
	})))();
}
//#endregion
export { init_context as a, init_component as i, init_component$1 as n, useToggleGroupControlContext as o, component_default$1 as r, component_default as t };
