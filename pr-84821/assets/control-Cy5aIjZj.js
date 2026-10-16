import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { i as init_raw_html, n as serialize_default, r as RawHTML, t as init_serialize } from "./serialize-FHFXmm0_.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as useDragging, t as init_use_dragging } from "./use-dragging-BjSRePBP.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { n as __, o as isRTL, t as init_build_module$1 } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { r as speak, t as init_build_module$2 } from "./build-module-DsAeWnrG.js";
import { t as icon_default } from "./icon-DEDMwo2v.js";
import { t as check_default } from "./check-Cpe2xAFk.js";
import { t as close_small_default } from "./close-small-BAxZctqD.js";
import { n as plus_default } from "./plus-BflIATCD.js";
import { n as init_composite, t as Composite2 } from "./composite-DQ3JBw77.js";
import { i as D, n as init_names, o as init_colord, r as A, t as e } from "./names-C15GzMmJ.js";
import { n as init_component, t as component_default } from "./component-6Aui1e4Q.js";
import { n as init_component$1, t as component_default$1 } from "./component-DKizmr6G.js";
import { n as init_component$2, t as component_default$2 } from "./component-DQdvPzmr.js";
import { n as init_component$3, t as component_default$3 } from "./component-CLa3e4Ol.js";
import { c as init_component$4, n as privateApis, s as component_default$4, t as init_private_apis } from "./private-apis-C5gQmVAU.js";
import { n as base_control_default, r as init_base_control } from "./base-control-4RJ3L0hf.js";
import { n as button_default, r as init_button } from "./button-BxEkUQAF.js";
import { n as number_control_default, t as init_number_control } from "./number-control-DH-M3uwi.js";
import { n as init_component$5, t as component_default$5 } from "./component-ThRvbQN8.js";
import { n as init_input_prefix_wrapper, r as input_prefix_wrapper_default } from "./input-prefix-wrapper-DRLWORU6.js";
import { n as init_input_suffix_wrapper, r as input_suffix_wrapper_default } from "./input-suffix-wrapper-CvoP3AUi.js";
import { n as r, t as init_a11y } from "./a11y-YVbKxb3i.js";
import { n as init_dropdown, t as dropdown_default } from "./dropdown-CT5qcp8z.js";
import { i as init_legacy_adapter, n as init_dropdown_content_wrapper, o as init_select_control, r as LegacyAdapter, s as select_control_default, t as dropdown_content_wrapper_default } from "./dropdown-content-wrapper-BRUuct3E.js";
import { n as init_component$6, t as component_default$6 } from "./component-CMh1CLTm.js";
import { n as init_component$7, t as component_default$7 } from "./component-Bvw9DY3y.js";
import { n as init_esm, t as esm_default } from "./esm-C7W6P9-p.js";
import { r as unlock, t as init_lock_unlock } from "./lock-unlock-DigY61P5.js";
import { n as useSettings, t as init_use_settings } from "./use-settings-DBuseju1.js";
import { r as init_build_module$3 } from "./library.story-CFsmdbdz.js";
//#region ../packages/components/build-module/angle-picker-control/angle-circle.mjs
function getRuntime$3() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$3(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$3(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$3}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$3) === hash) return true;
	return false;
}
function injectStyle$3(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$3();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$3(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$3, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$3(targetDocument) {
	const runtime = getRuntime$3();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$3(targetDocument, hash, css);
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
function registerStyle$3(hash, css) {
	const runtime = getRuntime$3();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$3(targetDocument, hash, css);
}
function AngleCircle({ value, onChange, className, ...props }) {
	const angleCircleRef = (0, import_react.useRef)(null);
	const angleCircleCenterRef = (0, import_react.useRef)(void 0);
	const previousCursorValueRef = (0, import_react.useRef)(void 0);
	const setAngleCircleCenter = () => {
		if (angleCircleRef.current === null) return;
		const rect = angleCircleRef.current.getBoundingClientRect();
		angleCircleCenterRef.current = {
			x: rect.x + rect.width / 2,
			y: rect.y + rect.height / 2
		};
	};
	const changeAngleToPosition = (event) => {
		if (event === void 0) return;
		event.preventDefault();
		event.target?.focus();
		if (angleCircleCenterRef.current !== void 0 && onChange !== void 0) {
			const { x: centerX, y: centerY } = angleCircleCenterRef.current;
			onChange(getAngle(centerX, centerY, event.clientX, event.clientY));
		}
	};
	const { startDrag, isDragging } = useDragging({
		onDragStart: (event) => {
			setAngleCircleCenter();
			changeAngleToPosition(event);
		},
		onDragMove: changeAngleToPosition,
		onDragEnd: changeAngleToPosition
	});
	(0, import_react.useEffect)(() => {
		if (isDragging) {
			if (previousCursorValueRef.current === void 0) previousCursorValueRef.current = document.body.style.cursor;
			document.body.style.cursor = "grabbing";
		} else {
			document.body.style.cursor = previousCursorValueRef.current || "";
			previousCursorValueRef.current = void 0;
		}
	}, [isDragging]);
	return /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)("div", {
		ref: angleCircleRef,
		onMouseDown: startDrag,
		className: clsx("components-angle-picker-control__angle-circle", style_module_default$3["circle-root"], className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)("div", {
			style: value ? { transform: `rotate(${value}deg)` } : void 0,
			className: clsx("components-angle-picker-control__angle-circle-indicator-wrapper", style_module_default$3["circle-indicator-wrapper"]),
			tabIndex: -1,
			children: /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)("div", { className: clsx("components-angle-picker-control__angle-circle-indicator", style_module_default$3["circle-indicator"]) })
		})
	});
}
function getAngle(centerX, centerY, pointX, pointY) {
	const y = pointY - centerY;
	const x = pointX - centerX;
	const angleInDeg = Math.round(Math.atan2(y, x) * (180 / Math.PI)) + 90;
	if (angleInDeg < 0) return 360 + angleInDeg;
	return angleInDeg;
}
var import_jsx_runtime$11, STYLE_HASH_ATTRIBUTE$3, style_module_default$3, angle_circle_default;
function init_angle_circle() {
	return (init_angle_circle = __esmMin((() => {
		init_clsx();
		init_react();
		init_use_dragging();
		import_jsx_runtime$11 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$3 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$3("cbb20ea39f", "._8f57b8d483c51fbe__circle-root{border:1px solid var(--wp-components-color-gray-600,var(--wpds-color-stroke-interactive-neutral,#8d8d8d));border-radius:50%;box-sizing:border-box;cursor:grab;height:32px;overflow:hidden;width:32px}._8f57b8d483c51fbe__circle-root:active{cursor:grabbing}.b1bae984ac10fcc3__circle-indicator-wrapper{box-sizing:border-box;height:100%;position:relative;width:100%}.b1bae984ac10fcc3__circle-indicator-wrapper:focus-visible{outline:none}._6d2fe0a2cbb31bf0__circle-indicator{background:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));border-radius:50%;box-sizing:border-box;display:block;height:6px;left:50%;position:absolute;top:4px;transform:translateX(-50%);width:6px}");
		style_module_default$3 = {
			"circle-root": "_8f57b8d483c51fbe__circle-root",
			"circle-indicator-wrapper": "b1bae984ac10fcc3__circle-indicator-wrapper",
			"circle-indicator": "_6d2fe0a2cbb31bf0__circle-indicator"
		};
		angle_circle_default = AngleCircle;
	})))();
}
//#endregion
//#region ../packages/components/build-module/angle-picker-control/index.mjs
function UnforwardedAnglePickerControl(props, ref) {
	const { className, label = __("Angle"), onChange, value, ...restProps } = props;
	const handleOnNumberChange = (unprocessedValue) => {
		if (onChange === void 0) return;
		onChange(unprocessedValue !== void 0 && unprocessedValue !== "" ? parseInt(unprocessedValue, 10) : 0);
	};
	const classes = clsx("components-angle-picker-control", className);
	const prefixOrSuffixProp = isRTL() ? { prefix: /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(input_prefix_wrapper_default, { children: "°" }) } : { suffix: /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(input_suffix_wrapper_default, { children: "°" }) };
	return /* @__PURE__ */ (0, import_jsx_runtime$10.jsxs)(component_default$1, {
		...restProps,
		ref,
		className: classes,
		gap: 2,
		children: [/* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(component_default$2, { children: /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(number_control_default, {
			label,
			className: "components-angle-picker-control__input-field",
			max: 360,
			min: 0,
			onChange: handleOnNumberChange,
			step: "1",
			value,
			spinControls: "none",
			...prefixOrSuffixProp
		}) }), /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(component_default$3, {
			marginBottom: "1",
			marginTop: "auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(angle_circle_default, {
				"aria-hidden": "true",
				value,
				onChange
			})
		})]
	});
}
var import_jsx_runtime$10, AnglePickerControl, angle_picker_control_default;
function init_angle_picker_control() {
	return (init_angle_picker_control = __esmMin((() => {
		init_clsx();
		init_react();
		init_build_module$1();
		init_component$1(), init_component$2();
		init_component$3();
		init_number_control();
		init_input_prefix_wrapper();
		init_input_suffix_wrapper();
		init_angle_circle();
		import_jsx_runtime$10 = require_jsx_runtime();
		AnglePickerControl = (0, import_react.forwardRef)(UnforwardedAnglePickerControl);
		AnglePickerControl.displayName = "AnglePickerControl";
		angle_picker_control_default = AnglePickerControl;
	})))();
}
//#endregion
//#region ../packages/components/build-module/circular-option-picker/circular-option-picker-context.mjs
var CircularOptionPickerContext;
function init_circular_option_picker_context() {
	return (init_circular_option_picker_context = __esmMin((() => {
		init_react();
		CircularOptionPickerContext = (0, import_react.createContext)({});
		CircularOptionPickerContext.displayName = "CircularOptionPickerContext";
	})))();
}
//#endregion
//#region ../packages/components/build-module/circular-option-picker/circular-option-picker-option.mjs
function UnforwardedOptionAsButton(props, forwardedRef) {
	const { isPressed, label, ...additionalProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime$9.jsx)(button_default, {
		__next40pxDefaultSize: true,
		...additionalProps,
		"aria-pressed": isPressed,
		ref: forwardedRef,
		label
	});
}
function UnforwardedOptionAsOption(props, forwardedRef) {
	const { id, isSelected, label, ...additionalProps } = props;
	const { setActiveId, activeId } = (0, import_react.useContext)(CircularOptionPickerContext);
	(0, import_react.useEffect)(() => {
		if (isSelected && !activeId) window.setTimeout(() => setActiveId?.(id), 0);
	}, [
		isSelected,
		setActiveId,
		activeId,
		id
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime$9.jsx)(Composite2.Item, {
		render: /* @__PURE__ */ (0, import_jsx_runtime$9.jsx)(button_default, {
			__next40pxDefaultSize: true,
			...additionalProps,
			role: "option",
			"aria-selected": !!isSelected,
			ref: forwardedRef,
			label
		}),
		id
	});
}
function Option({ className, isSelected, selectedIconProps = {}, tooltipText, ...additionalProps }) {
	const { baseId, presentation = "toggle-buttons" } = (0, import_react.useContext)(CircularOptionPickerContext);
	const commonProps = {
		id: use_instance_id_default(Option, baseId || "components-circular-option-picker__option"),
		className: "components-circular-option-picker__option",
		...additionalProps
	};
	const optionControl = presentation === "listbox" ? /* @__PURE__ */ (0, import_jsx_runtime$9.jsx)(OptionAsOption, {
		...commonProps,
		label: tooltipText,
		isSelected
	}) : /* @__PURE__ */ (0, import_jsx_runtime$9.jsx)(OptionAsButton, {
		...commonProps,
		label: tooltipText,
		isPressed: presentation === "toggle-buttons" ? !!isSelected : void 0
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$9.jsxs)("div", {
		className: clsx(className, "components-circular-option-picker__option-wrapper"),
		children: [optionControl, presentation !== "command-buttons" && isSelected && /* @__PURE__ */ (0, import_jsx_runtime$9.jsx)(icon_default, {
			icon: check_default,
			...selectedIconProps
		})]
	});
}
var import_jsx_runtime$9, OptionAsButton, OptionAsOption;
function init_circular_option_picker_option() {
	return (init_circular_option_picker_option = __esmMin((() => {
		init_clsx();
		init_use_instance_id();
		init_react();
		init_build_module$3();
		init_circular_option_picker_context();
		init_button();
		init_composite();
		import_jsx_runtime$9 = require_jsx_runtime();
		OptionAsButton = (0, import_react.forwardRef)(UnforwardedOptionAsButton);
		OptionAsOption = (0, import_react.forwardRef)(UnforwardedOptionAsOption);
	})))();
}
//#endregion
//#region ../packages/components/build-module/circular-option-picker/circular-option-picker-option-group.mjs
function OptionGroup({ className, options, ...additionalProps }) {
	const role = "aria-label" in additionalProps || "aria-labelledby" in additionalProps ? "group" : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)("div", {
		...additionalProps,
		role,
		className: clsx("components-circular-option-picker__option-group", "components-circular-option-picker__swatches", className),
		children: options
	});
}
var import_jsx_runtime$8;
function init_circular_option_picker_option_group() {
	return (init_circular_option_picker_option_group = __esmMin((() => {
		init_clsx();
		import_jsx_runtime$8 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../packages/components/build-module/circular-option-picker/circular-option-picker-actions.mjs
function DropdownLinkAction({ buttonProps, className, dropdownProps, linkText }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(dropdown_default, {
		className: clsx("components-circular-option-picker__dropdown-link-action", className),
		renderToggle: ({ isOpen, onToggle }) => /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(button_default, {
			"aria-expanded": isOpen,
			"aria-haspopup": "true",
			onClick: onToggle,
			variant: "link",
			...buttonProps,
			children: linkText
		}),
		...dropdownProps
	});
}
function ButtonAction({ className, children, ...additionalProps }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(button_default, {
		__next40pxDefaultSize: true,
		className: clsx("components-circular-option-picker__clear", className),
		variant: "tertiary",
		...additionalProps,
		children
	});
}
var import_jsx_runtime$7;
function init_circular_option_picker_actions() {
	return (init_circular_option_picker_actions = __esmMin((() => {
		init_clsx();
		init_button();
		init_dropdown();
		import_jsx_runtime$7 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../packages/components/build-module/circular-option-picker/utils.mjs
function warnIfCircularOptionPickerAsButtonsIsSet(componentName, asButtons) {
	if (asButtons === void 0) return;
	deprecated(`\`asButtons\` prop in wp.components.${componentName}`, {
		since: "7.2",
		alternative: "`presentation`",
		hint: "`asButtons={ true }` maps to `presentation=\"toggle-buttons\"`. Explicit `presentation` takes precedence."
	});
}
function resolveCircularOptionPickerPresentation(presentation, asButtons) {
	return presentation ?? (asButtons ? "toggle-buttons" : "listbox");
}
function getComputeCircularOptionPickerCommonProps(asButtons, loop, ariaLabel, ariaLabelledby, presentation) {
	const resolvedPresentation = resolveCircularOptionPickerPresentation(presentation, asButtons);
	return {
		metaProps: resolvedPresentation === "listbox" ? {
			presentation: "listbox",
			loop
		} : { presentation: resolvedPresentation },
		labelProps: {
			"aria-labelledby": ariaLabelledby,
			"aria-label": ariaLabelledby ? void 0 : ariaLabel || __("Custom color picker")
		},
		resolvedPresentation
	};
}
function init_utils() {
	return (init_utils = __esmMin((() => {
		init_build_module$1();
		init_build_module();
	})))();
}
//#endregion
//#region ../packages/components/build-module/circular-option-picker/circular-option-picker.mjs
function ListboxCircularOptionPicker(props) {
	const { actions, options, baseId, className, loop = true, children, ...additionalProps } = props;
	const [activeId, setActiveId] = (0, import_react.useState)(void 0);
	const contextValue = (0, import_react.useMemo)(() => ({
		baseId,
		activeId,
		setActiveId,
		presentation: "listbox"
	}), [
		baseId,
		activeId,
		setActiveId
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)(CircularOptionPickerContext.Provider, {
			value: contextValue,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Composite2, {
					...additionalProps,
					id: baseId,
					focusLoop: loop,
					rtl: isRTL(),
					role: "listbox",
					activeId,
					setActiveId,
					children: options
				}),
				children,
				actions
			]
		})
	});
}
function ButtonsCircularOptionPicker(props) {
	const { actions, options, children, baseId, presentation, ...additionalProps } = props;
	const contextValue = (0, import_react.useMemo)(() => ({
		baseId,
		presentation
	}), [baseId, presentation]);
	return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
		...additionalProps,
		role: "group",
		id: baseId,
		children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)(CircularOptionPickerContext.Provider, {
			value: contextValue,
			children: [
				options,
				children,
				actions
			]
		})
	});
}
function CircularOptionPicker(props) {
	const { asButtons, presentation, loop, actions: actionsProp, options: optionsProp, children, className, ...additionalProps } = props;
	warnIfCircularOptionPickerAsButtonsIsSet("CircularOptionPicker", asButtons);
	const resolvedPresentation = resolveCircularOptionPickerPresentation(presentation, asButtons);
	const baseId = use_instance_id_default(CircularOptionPicker, "components-circular-option-picker", additionalProps.id);
	const actions = actionsProp ? /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
		className: "components-circular-option-picker__custom-clear-wrapper",
		children: actionsProp
	}) : void 0;
	const options = /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
		className: "components-circular-option-picker__swatches",
		children: optionsProp
	});
	const sharedProps = {
		baseId,
		className: clsx("components-circular-option-picker", className),
		actions,
		options,
		children
	};
	if (resolvedPresentation === "listbox") return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(ListboxCircularOptionPicker, {
		...additionalProps,
		...sharedProps,
		loop
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(ButtonsCircularOptionPicker, {
		...additionalProps,
		...sharedProps,
		presentation: resolvedPresentation
	});
}
var import_jsx_runtime$6, circular_option_picker_default$1;
function init_circular_option_picker() {
	return (init_circular_option_picker = __esmMin((() => {
		init_clsx();
		init_use_instance_id();
		init_build_module$1();
		init_react();
		init_circular_option_picker_context();
		init_composite();
		init_circular_option_picker_option();
		init_circular_option_picker_option_group();
		init_circular_option_picker_actions();
		init_utils();
		import_jsx_runtime$6 = require_jsx_runtime();
		CircularOptionPicker.Option = Option;
		CircularOptionPicker.OptionGroup = OptionGroup;
		CircularOptionPicker.ButtonAction = ButtonAction;
		CircularOptionPicker.DropdownLinkAction = DropdownLinkAction;
		CircularOptionPicker.displayName = "CircularOptionPicker";
		circular_option_picker_default$1 = CircularOptionPicker;
	})))();
}
//#endregion
//#region ../packages/components/build-module/circular-option-picker/index.mjs
var circular_option_picker_default;
function init_circular_option_picker$1() {
	return (init_circular_option_picker$1 = __esmMin((() => {
		init_circular_option_picker();
		init_circular_option_picker_option();
		init_circular_option_picker_option_group();
		init_circular_option_picker_actions();
		init_utils();
		circular_option_picker_default = circular_option_picker_default$1;
	})))();
}
//#endregion
//#region ../packages/components/build-module/color-palette/utils.mjs
var isSimpleCSSColor, extractColorNameFromCurrentValue, isMultiplePaletteObject, isMultiplePaletteArray, normalizeColorValue;
function init_utils$1() {
	return (init_utils$1 = __esmMin((() => {
		init_colord();
		init_names();
		init_a11y();
		init_build_module$1();
		D([e, r]);
		isSimpleCSSColor = (value) => {
			const valueIsCssVariable = /var\(/.test(value ?? "");
			const valueIsColorMix = /color-mix\(/.test(value ?? "");
			return !valueIsCssVariable && !valueIsColorMix;
		};
		extractColorNameFromCurrentValue = (currentValue, colors = [], showMultiplePalettes = false, selectedSlug) => {
			if (!currentValue) return "";
			const currentValueIsSimpleColor = currentValue ? isSimpleCSSColor(currentValue) : false;
			const normalizedCurrentValue = currentValueIsSimpleColor ? A(currentValue).toHex() : currentValue;
			const colorPalettes = showMultiplePalettes ? colors : [{ colors }];
			for (const { colors: paletteColors } of colorPalettes) for (const { name: colorName, color: colorValue, slug } of paletteColors) {
				if (selectedSlug) {
					if (slug === selectedSlug) return colorName;
					continue;
				}
				if (normalizedCurrentValue === (currentValueIsSimpleColor ? A(colorValue).toHex() : colorValue)) return colorName;
			}
			return __("Custom");
		};
		isMultiplePaletteObject = (obj) => Array.isArray(obj.colors) && !("color" in obj);
		isMultiplePaletteArray = (arr) => {
			return arr.length > 0 && arr.every((colorObj) => isMultiplePaletteObject(colorObj));
		};
		normalizeColorValue = (value, element) => {
			if (!value || !element || isSimpleCSSColor(value)) return value;
			const { ownerDocument } = element;
			const { defaultView } = ownerDocument;
			const computedBackgroundColor = defaultView?.getComputedStyle(element).backgroundColor;
			return computedBackgroundColor ? A(computedBackgroundColor).toHex() : value;
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/color-palette/index.mjs
function getRuntime$2() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$2(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$2(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$2}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$2) === hash) return true;
	return false;
}
function injectStyle$2(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$2();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$2(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$2, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$2(targetDocument) {
	const runtime = getRuntime$2();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$2(targetDocument, hash, css);
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
function registerStyle$2(hash, css) {
	const runtime = getRuntime$2();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$2(targetDocument, hash, css);
}
function SinglePalette({ className, clearColor, colors, onChange, value, selectedSlug, presentation, ...additionalProps }) {
	const colorOptions = (0, import_react.useMemo)(() => {
		return colors.map(({ color, name, slug }, index) => {
			const colordColor = A(color);
			const isSelected = presentation !== "command-buttons" && (selectedSlug ? slug === selectedSlug : value === color);
			return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(circular_option_picker_default.Option, {
				isSelected,
				selectedIconProps: isSelected ? { color: colordColor.contrast() > colordColor.contrast("#000") ? "#fff" : "#000" } : {},
				tooltipText: name || sprintf(__("Color code: %s"), color),
				style: {
					backgroundColor: color,
					color
				},
				onClick: isSelected ? clearColor : () => onChange(color, index, slug)
			}, slug ?? `${color}-${index}`);
		});
	}, [
		colors,
		value,
		selectedSlug,
		onChange,
		clearColor,
		presentation
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(circular_option_picker_default.OptionGroup, {
		className,
		options: colorOptions,
		...additionalProps
	});
}
function MultiplePalettes({ className, clearColor, colors, onChange, value, selectedSlug, headingLevel, presentation }) {
	const instanceId = use_instance_id_default(MultiplePalettes, "color-palette");
	if (colors.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(component_default$6, {
		spacing: 3,
		className,
		children: colors.map(({ name, colors: colorPalette }, index) => {
			const id = `${instanceId}-${index}`;
			return /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)(component_default$6, {
				spacing: 2,
				children: [/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(component_default$7, {
					className: style_module_default$2["color-heading"],
					id,
					level: headingLevel,
					children: name
				}), /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(SinglePalette, {
					clearColor,
					colors: colorPalette,
					onChange: (newColor, _colorIndex, slug) => onChange(newColor, index, slug),
					value,
					selectedSlug,
					presentation,
					"aria-labelledby": id
				})]
			}, index);
		})
	});
}
function CustomColorPickerDropdown({ isRenderedInSidebar, popoverProps: receivedPopoverProps, ...props }) {
	const popoverProps = (0, import_react.useMemo)(() => ({
		shift: true,
		resize: false,
		...isRenderedInSidebar ? {
			placement: "left-start",
			offset: 34
		} : {
			placement: "bottom",
			offset: 8
		},
		...receivedPopoverProps
	}), [isRenderedInSidebar, receivedPopoverProps]);
	return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(dropdown_default, {
		contentClassName: "components-color-palette__custom-color-dropdown-content",
		popoverProps,
		...props
	});
}
function UnforwardedColorPalette(props, forwardedRef) {
	const { asButtons, presentation, loop, clearable = true, colors = [], disableCustomColors = false, enableAlpha = false, onChange, value, selectedSlug, __experimentalIsRenderedInSidebar = false, headingLevel = 2, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, ...additionalProps } = props;
	warnIfCircularOptionPickerAsButtonsIsSet("ColorPalette", asButtons);
	const [normalizedColorValue, setNormalizedColorValue] = (0, import_react.useState)(value);
	const clearColor = (0, import_react.useCallback)(() => onChange(void 0), [onChange]);
	const customColorPaletteCallbackRef = (0, import_react.useCallback)((node) => {
		setNormalizedColorValue(normalizeColorValue(value, node));
	}, [value]);
	const hasMultipleColorOrigins = isMultiplePaletteArray(colors);
	const buttonLabelName = (0, import_react.useMemo)(() => extractColorNameFromCurrentValue(value, colors, hasMultipleColorOrigins, selectedSlug), [
		value,
		colors,
		hasMultipleColorOrigins,
		selectedSlug
	]);
	const renderCustomColorPicker = () => /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(dropdown_content_wrapper_default, {
		paddingSize: "none",
		children: /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(LegacyAdapter, {
			color: normalizedColorValue,
			onChange: (color) => onChange(color),
			enableAlpha
		})
	});
	const isHex = value?.startsWith("#");
	const displayValue = value?.replace(/^var\((.+)\)$/, "$1");
	const customColorAccessibleLabel = !!displayValue ? sprintf(__("Custom color picker. The currently selected color is called \"%1$s\" and has a value of \"%2$s\"."), buttonLabelName, displayValue) : __("Custom color picker");
	const { metaProps, labelProps, resolvedPresentation } = getComputeCircularOptionPickerCommonProps(asButtons, loop, ariaLabel, ariaLabelledby, presentation);
	const paletteCommonProps = {
		clearColor,
		onChange,
		value,
		selectedSlug,
		presentation: resolvedPresentation
	};
	const actions = !!clearable && /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(circular_option_picker_default.ButtonAction, {
		onClick: clearColor,
		accessibleWhenDisabled: true,
		disabled: !value,
		children: __("Clear")
	});
	if (disableCustomColors && colors.length === 0 && !actions) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)(component_default$6, {
		spacing: 3,
		ref: forwardedRef,
		...additionalProps,
		children: [!disableCustomColors && /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(CustomColorPickerDropdown, {
			isRenderedInSidebar: __experimentalIsRenderedInSidebar,
			renderContent: renderCustomColorPicker,
			renderToggle: ({ isOpen, onToggle }) => /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)(component_default$6, {
				className: "components-color-palette__custom-color-wrapper",
				spacing: 0,
				children: [/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("button", {
					ref: customColorPaletteCallbackRef,
					className: "components-color-palette__custom-color-button",
					"aria-expanded": isOpen,
					"aria-haspopup": "true",
					onClick: onToggle,
					"aria-label": customColorAccessibleLabel,
					style: { background: value },
					type: "button"
				}), /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)(component_default$6, {
					className: "components-color-palette__custom-color-text-wrapper",
					spacing: .5,
					children: [/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(component_default$4, {
						className: "components-color-palette__custom-color-name",
						children: value ? buttonLabelName : __("No color selected")
					}), /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(component_default$4, {
						className: clsx("components-color-palette__custom-color-value", { "components-color-palette__custom-color-value--is-hex": isHex }),
						children: displayValue
					})]
				})]
			})
		}), (colors.length > 0 || actions) && /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(circular_option_picker_default, {
			...metaProps,
			...labelProps,
			actions,
			options: hasMultipleColorOrigins ? /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(MultiplePalettes, {
				...paletteCommonProps,
				headingLevel,
				colors,
				value
			}) : /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(SinglePalette, {
				...paletteCommonProps,
				colors,
				value
			})
		})]
	});
}
var import_jsx_runtime$5, STYLE_HASH_ATTRIBUTE$2, style_module_default$2, ColorPalette, color_palette_default;
function init_color_palette() {
	return (init_color_palette = __esmMin((() => {
		init_colord();
		init_names();
		init_a11y();
		init_clsx();
		init_use_instance_id();
		init_build_module$1();
		init_react();
		init_dropdown();
		init_legacy_adapter();
		init_circular_option_picker$1();
		init_component$6();
		init_component$4();
		init_component$7();
		init_dropdown_content_wrapper();
		init_utils$1();
		import_jsx_runtime$5 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$2 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$2("a7b05d56c7", ".cf6db1948d5273a8__color-heading{text-transform:uppercase}.cf6db1948d5273a8__color-heading.cf6db1948d5273a8__color-heading.cf6db1948d5273a8__color-heading{font-size:11px;line-height:24px;margin-bottom:0}");
		style_module_default$2 = { "color-heading": "cf6db1948d5273a8__color-heading" };
		D([e, r]);
		ColorPalette = (0, import_react.forwardRef)(UnforwardedColorPalette);
		ColorPalette.displayName = "ColorPalette";
		color_palette_default = ColorPalette;
	})))();
}
//#endregion
//#region ../packages/components/build-module/custom-gradient-picker/gradient-bar/utils.mjs
function clampPercent(value) {
	return Math.max(0, Math.min(100, value));
}
function isOverlapping(value, initialIndex, newPosition, minDistance = 0) {
	const initialPosition = value[initialIndex].position;
	const minPosition = Math.min(initialPosition, newPosition);
	const maxPosition = Math.max(initialPosition, newPosition);
	return value.some(({ position }, index) => {
		return index !== initialIndex && (Math.abs(position - newPosition) < minDistance || minPosition < position && position < maxPosition);
	});
}
function addControlPoint(points, position, color) {
	const nextIndex = points.findIndex((point) => point.position > position);
	const newPoint = {
		color,
		position
	};
	const newPoints = points.slice();
	newPoints.splice(nextIndex - 1, 0, newPoint);
	return newPoints;
}
function removeControlPoint(points, index) {
	return points.filter((_point, pointIndex) => {
		return pointIndex !== index;
	});
}
function updateControlPoint(points, index, newPoint) {
	const newValue = points.slice();
	newValue[index] = newPoint;
	return newValue;
}
function updateControlPointPosition(points, index, newPosition) {
	if (isOverlapping(points, index, newPosition)) return points;
	return updateControlPoint(points, index, {
		...points[index],
		position: newPosition
	});
}
function updateControlPointColor(points, index, newColor) {
	return updateControlPoint(points, index, {
		...points[index],
		color: newColor
	});
}
function updateControlPointColorByPosition(points, position, newColor) {
	return updateControlPointColor(points, points.findIndex((point) => point.position === position), newColor);
}
function getHorizontalRelativeGradientPosition(mouseXCoordinate, containerElement) {
	if (!containerElement) return;
	const { x, width } = containerElement.getBoundingClientRect();
	const absolutePositionValue = mouseXCoordinate - x;
	return Math.round(clampPercent(absolutePositionValue * 100 / width));
}
function init_utils$2() {
	return (init_utils$2 = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/components/build-module/custom-gradient-picker/gradient-bar/control-points.mjs
function ControlPointButton({ isOpen, position, color, disablePositioning, ...additionalProps }) {
	const descriptionId = `components-custom-gradient-picker__control-point-button-description-${use_instance_id_default(ControlPointButton)}`;
	return /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)(import_jsx_runtime$4.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(button_default, {
		"aria-label": sprintf(__("Gradient control point at position %1$d%% with color code %2$s."), position, color),
		"aria-describedby": descriptionId,
		"aria-haspopup": "true",
		"aria-expanded": isOpen,
		__next40pxDefaultSize: true,
		className: clsx("components-custom-gradient-picker__control-point-button", { "is-active": isOpen }),
		...additionalProps
	}), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(component_default, {
		id: descriptionId,
		children: disablePositioning ? __("Press the button to change the color.") : __("Use your left or right arrow keys or drag and drop with the mouse to change the gradient position. Press the button to change the color or remove the control point.")
	})] });
}
function GradientColorPickerDropdown({ isRenderedInSidebar, className, ...props }) {
	const popoverProps = (0, import_react.useMemo)(() => ({
		placement: "bottom",
		offset: 8,
		resize: false
	}), []);
	const mergedClassName = clsx("components-custom-gradient-picker__control-point-dropdown", className);
	return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(CustomColorPickerDropdown, {
		isRenderedInSidebar,
		popoverProps,
		className: mergedClassName,
		...props
	});
}
function ControlPoints({ disableRemove, disableAlpha, disablePositioning, gradientPickerDomRef, ignoreMarkerPosition, value: controlPoints, onChange, onStartControlPointChange, onStopControlPointChange, __experimentalIsRenderedInSidebar }) {
	const controlPointMoveStateRef = (0, import_react.useRef)(void 0);
	const onMouseMove = (event) => {
		if (controlPointMoveStateRef.current === void 0 || gradientPickerDomRef.current === null) return;
		const relativePosition = getHorizontalRelativeGradientPosition(event.clientX, gradientPickerDomRef.current);
		const { initialPosition, index, significantMoveHappened } = controlPointMoveStateRef.current;
		if (!significantMoveHappened && Math.abs(initialPosition - relativePosition) >= 5) controlPointMoveStateRef.current.significantMoveHappened = true;
		onChange(updateControlPointPosition(controlPoints, index, relativePosition));
	};
	const cleanEventListeners = () => {
		if (window && window.removeEventListener && controlPointMoveStateRef.current && controlPointMoveStateRef.current.listenersActivated) {
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("mouseup", cleanEventListeners);
			onStopControlPointChange();
			controlPointMoveStateRef.current.listenersActivated = false;
		}
	};
	const cleanEventListenersRef = (0, import_react.useRef)(void 0);
	cleanEventListenersRef.current = cleanEventListeners;
	(0, import_react.useEffect)(() => {
		return () => {
			cleanEventListenersRef.current?.();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(import_jsx_runtime$4.Fragment, { children: controlPoints.map((point, index) => {
		const initialPosition = point?.position;
		return ignoreMarkerPosition !== initialPosition && /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(GradientColorPickerDropdown, {
			isRenderedInSidebar: __experimentalIsRenderedInSidebar,
			onClose: onStopControlPointChange,
			renderToggle: ({ isOpen, onToggle }) => /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(ControlPointButton, {
				onClick: () => {
					if (controlPointMoveStateRef.current && controlPointMoveStateRef.current.significantMoveHappened) return;
					if (isOpen) onStopControlPointChange();
					else onStartControlPointChange();
					onToggle();
				},
				onMouseDown: () => {
					if (disablePositioning) return;
					if (window && window.addEventListener) {
						controlPointMoveStateRef.current = {
							initialPosition,
							index,
							significantMoveHappened: false,
							listenersActivated: true
						};
						onStartControlPointChange();
						window.addEventListener("mousemove", onMouseMove);
						window.addEventListener("mouseup", cleanEventListeners);
					}
				},
				onKeyDown: (event) => {
					if (disablePositioning) {
						if (event.code === "ArrowLeft" || event.code === "ArrowRight") event.stopPropagation();
						return;
					}
					if (event.code === "ArrowLeft") {
						event.stopPropagation();
						onChange(updateControlPointPosition(controlPoints, index, clampPercent(point.position - 10)));
					} else if (event.code === "ArrowRight") {
						event.stopPropagation();
						onChange(updateControlPointPosition(controlPoints, index, clampPercent(point.position + 10)));
					}
				},
				isOpen,
				position: point.position,
				color: point.color,
				disablePositioning
			}, index),
			renderContent: ({ onClose }) => /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)(dropdown_content_wrapper_default, {
				paddingSize: "none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(LegacyAdapter, {
					enableAlpha: !disableAlpha,
					color: point.color,
					onChange: (color) => {
						onChange(updateControlPointColor(controlPoints, index, A(color).toRgbString()));
					}
				}), !disableRemove && controlPoints.length > 2 && /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(component_default$5, {
					className: "components-custom-gradient-picker__remove-control-point-wrapper",
					alignment: "center",
					children: /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(button_default, {
						onClick: () => {
							onChange(removeControlPoint(controlPoints, index));
							onClose();
						},
						variant: "link",
						children: __("Remove Control Point")
					})
				})]
			}),
			style: {
				left: `${point.position}%`,
				transform: "translateX( -50% )"
			}
		}, index);
	}) });
}
function InsertPoint({ value: controlPoints, onChange, onOpenInserter, onCloseInserter, insertPosition, disableAlpha, __experimentalIsRenderedInSidebar }) {
	const [alreadyInsertedPoint, setAlreadyInsertedPoint] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(GradientColorPickerDropdown, {
		isRenderedInSidebar: __experimentalIsRenderedInSidebar,
		className: "components-custom-gradient-picker__inserter",
		onClose: () => {
			onCloseInserter();
		},
		renderToggle: ({ isOpen, onToggle }) => /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(button_default, {
			__next40pxDefaultSize: true,
			"aria-expanded": isOpen,
			"aria-haspopup": "true",
			onClick: () => {
				if (isOpen) onCloseInserter();
				else {
					setAlreadyInsertedPoint(false);
					onOpenInserter();
				}
				onToggle();
			},
			className: "components-custom-gradient-picker__insert-point-dropdown",
			icon: plus_default
		}),
		renderContent: () => /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(dropdown_content_wrapper_default, {
			paddingSize: "none",
			children: /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(LegacyAdapter, {
				enableAlpha: !disableAlpha,
				onChange: (color) => {
					if (!alreadyInsertedPoint) {
						onChange(addControlPoint(controlPoints, insertPosition, A(color).toRgbString()));
						setAlreadyInsertedPoint(true);
					} else onChange(updateControlPointColorByPosition(controlPoints, insertPosition, A(color).toRgbString()));
				}
			})
		}),
		style: insertPosition !== null ? {
			left: `${insertPosition}%`,
			transform: "translateX( -50% )"
		} : void 0
	});
}
var import_jsx_runtime$4, control_points_default;
function init_control_points() {
	return (init_control_points = __esmMin((() => {
		init_clsx();
		init_colord();
		init_use_instance_id();
		init_react();
		init_build_module$1();
		init_build_module$3();
		init_button();
		init_component$5();
		init_legacy_adapter();
		init_component();
		init_color_palette();
		init_utils$2();
		init_dropdown_content_wrapper();
		import_jsx_runtime$4 = require_jsx_runtime();
		ControlPoints.InsertPoint = InsertPoint;
		control_points_default = ControlPoints;
	})))();
}
//#endregion
//#region ../packages/components/build-module/custom-gradient-picker/gradient-bar/index.mjs
function CustomGradientBar({ background, hasGradient, value: controlPoints, onChange, disableInserter = false, disableAlpha = false, disablePositioning = false, __experimentalIsRenderedInSidebar = false }) {
	const gradientMarkersContainerDomRef = (0, import_react.useRef)(null);
	const [gradientBarState, gradientBarStateDispatch] = (0, import_react.useReducer)(customGradientBarReducer, customGradientBarReducerInitialState);
	const onMouseEnterAndMove = (event) => {
		if (!gradientMarkersContainerDomRef.current) return;
		const insertPosition = getHorizontalRelativeGradientPosition(event.clientX, gradientMarkersContainerDomRef.current);
		if (controlPoints.some(({ position }) => {
			return Math.abs(insertPosition - position) < 10;
		})) {
			if (gradientBarState.id === "MOVING_INSERTER") gradientBarStateDispatch({ type: "STOP_INSERTER_MOVE" });
			return;
		}
		gradientBarStateDispatch({
			type: "MOVE_INSERTER",
			insertPosition
		});
	};
	const onMouseLeave = () => {
		gradientBarStateDispatch({ type: "STOP_INSERTER_MOVE" });
	};
	const isMovingInserter = gradientBarState.id === "MOVING_INSERTER";
	const isInsertingControlPoint = gradientBarState.id === "INSERTING_CONTROL_POINT";
	return /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("div", {
		className: clsx("components-custom-gradient-picker__gradient-bar", { "has-gradient": hasGradient }),
		onMouseEnter: onMouseEnterAndMove,
		onMouseMove: onMouseEnterAndMove,
		onMouseLeave,
		children: [/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("div", {
			className: "components-custom-gradient-picker__gradient-bar-background",
			style: {
				background,
				opacity: hasGradient ? 1 : .4
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("div", {
			ref: gradientMarkersContainerDomRef,
			className: "components-custom-gradient-picker__markers-container",
			children: [!disableInserter && (isMovingInserter || isInsertingControlPoint) && /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(control_points_default.InsertPoint, {
				__experimentalIsRenderedInSidebar,
				disableAlpha,
				insertPosition: gradientBarState.insertPosition,
				value: controlPoints,
				onChange,
				onOpenInserter: () => {
					gradientBarStateDispatch({ type: "OPEN_INSERTER" });
				},
				onCloseInserter: () => {
					gradientBarStateDispatch({ type: "CLOSE_INSERTER" });
				}
			}), /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(control_points_default, {
				__experimentalIsRenderedInSidebar,
				disableAlpha,
				disableRemove: disableInserter,
				disablePositioning,
				gradientPickerDomRef: gradientMarkersContainerDomRef,
				ignoreMarkerPosition: isInsertingControlPoint ? gradientBarState.insertPosition : void 0,
				value: controlPoints,
				onChange,
				onStartControlPointChange: () => {
					gradientBarStateDispatch({ type: "START_CONTROL_CHANGE" });
				},
				onStopControlPointChange: () => {
					gradientBarStateDispatch({ type: "STOP_CONTROL_CHANGE" });
				}
			})]
		})]
	});
}
var import_jsx_runtime$3, customGradientBarReducer, customGradientBarReducerInitialState;
function init_gradient_bar() {
	return (init_gradient_bar = __esmMin((() => {
		init_clsx();
		init_react();
		init_control_points();
		init_utils$2();
		import_jsx_runtime$3 = require_jsx_runtime();
		customGradientBarReducer = (state, action) => {
			switch (action.type) {
				case "MOVE_INSERTER":
					if (state.id === "IDLE" || state.id === "MOVING_INSERTER") return {
						id: "MOVING_INSERTER",
						insertPosition: action.insertPosition
					};
					break;
				case "STOP_INSERTER_MOVE":
					if (state.id === "MOVING_INSERTER") return { id: "IDLE" };
					break;
				case "OPEN_INSERTER":
					if (state.id === "MOVING_INSERTER") return {
						id: "INSERTING_CONTROL_POINT",
						insertPosition: state.insertPosition
					};
					break;
				case "CLOSE_INSERTER":
					if (state.id === "INSERTING_CONTROL_POINT") return { id: "IDLE" };
					break;
				case "START_CONTROL_CHANGE":
					if (state.id === "IDLE") return { id: "MOVING_CONTROL_POINT" };
					break;
				case "STOP_CONTROL_CHANGE": if (state.id === "MOVING_CONTROL_POINT") return { id: "IDLE" };
			}
			return state;
		};
		customGradientBarReducerInitialState = { id: "IDLE" };
	})))();
}
//#endregion
//#region ../packages/components/build-module/custom-gradient-picker/constants.mjs
var DEFAULT_GRADIENT, HORIZONTAL_GRADIENT_ORIENTATION, GRADIENT_OPTIONS, DIRECTIONAL_ORIENTATION_ANGLE_MAP, RECTANGULAR_INTERPOLATION_COLOR_SPACES, POLAR_INTERPOLATION_COLOR_SPACES, HUE_INTERPOLATION_METHODS;
function init_constants() {
	return (init_constants = __esmMin((() => {
		init_build_module$1();
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
//#region ../packages/components/build-module/custom-gradient-picker/serializer.mjs
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
//#region ../packages/components/build-module/custom-gradient-picker/utils.mjs
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
function init_utils$3() {
	return (init_utils$3 = __esmMin((() => {
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
//#region ../packages/components/build-module/custom-gradient-picker/index.mjs
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
function CustomGradientPicker({ value, onChange, enableAlpha = true, __experimentalIsRenderedInSidebar = false }) {
	const { gradientAST, hasGradient } = getGradientAstWithDefault(value);
	const background = getLinearGradientRepresentation(gradientAST);
	const controlPoints = gradientAST.colorStops.map((colorStop) => {
		return {
			color: getStopCssColor(colorStop),
			position: parseInt(colorStop.length.value)
		};
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)(component_default$6, {
		spacing: 4,
		className: "components-custom-gradient-picker",
		children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(CustomGradientBar, {
			__experimentalIsRenderedInSidebar,
			disableAlpha: !enableAlpha,
			background,
			hasGradient,
			value: controlPoints,
			onChange: (newControlPoints) => {
				onChange(serializeGradient(getGradientAstWithControlPoints(gradientAST, newControlPoints)));
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)(component_default$1, {
			gap: 3,
			className: "components-custom-gradient-picker__ui-line",
			children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(component_default$2, {
				className: style_module_default$1["control-wrapper"],
				children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(GradientTypePicker, {
					gradientAST,
					hasGradient,
					onChange
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(component_default$2, {
				className: style_module_default$1["control-wrapper"],
				children: gradientAST.type === "linear-gradient" && /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(GradientAnglePicker, {
					gradientAST,
					hasGradient,
					onChange
				})
			})]
		})]
	});
}
var import_jsx_runtime$2, STYLE_HASH_ATTRIBUTE$1, style_module_default$1, GradientAnglePicker, GradientTypePicker, custom_gradient_picker_default;
function init_custom_gradient_picker() {
	return (init_custom_gradient_picker = __esmMin((() => {
		init_build_module$1();
		init_react();
		init_angle_picker_control();
		init_gradient_bar();
		init_component$1(), init_component$2();
		init_select_control();
		init_component$6();
		init_utils$3();
		init_constants();
		import_jsx_runtime$2 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$1 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$1("4b86155b7b", "._7f9600d224140c59__control-wrapper{flex-grow:5}");
		style_module_default$1 = { "control-wrapper": "_7f9600d224140c59__control-wrapper" };
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
			return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(angle_picker_control_default, {
				onChange: onAngleChange,
				value: hasGradient ? angle : ""
			});
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
			return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(select_control_default, {
				className: "components-custom-gradient-picker__type-picker",
				label: __("Type"),
				labelPosition: "top",
				onChange: handleOnChange,
				options: GRADIENT_OPTIONS,
				value: hasGradient ? type : void 0
			});
		};
		custom_gradient_picker_default = CustomGradientPicker;
	})))();
}
//#endregion
//#region ../packages/components/build-module/gradient-picker/index.mjs
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
function SingleOrigin({ className, clearGradient, gradients, onChange, value, selectedSlug, presentation, ...additionalProps }) {
	const gradientOptions = (0, import_react.useMemo)(() => {
		return gradients.map(({ gradient, name, slug }, index) => {
			const isSelected = presentation !== "command-buttons" && (selectedSlug ? slug === selectedSlug : value === gradient);
			return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(circular_option_picker_default.Option, {
				value: gradient,
				isSelected,
				tooltipText: name || sprintf(__("Gradient code: %s"), gradient),
				style: {
					color: "rgba( 0,0,0,0 )",
					background: gradient
				},
				onClick: isSelected ? clearGradient : () => onChange(gradient, index, slug),
				"aria-label": name ? sprintf(__("Gradient: %s"), name) : sprintf(__("Gradient code: %s"), gradient)
			}, slug);
		});
	}, [
		gradients,
		value,
		onChange,
		clearGradient,
		selectedSlug,
		presentation
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(circular_option_picker_default.OptionGroup, {
		className,
		options: gradientOptions,
		...additionalProps
	});
}
function MultipleOrigin({ className, clearGradient, gradients, onChange, value, selectedSlug, headingLevel, presentation }) {
	const instanceId = use_instance_id_default(MultipleOrigin);
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(component_default$6, {
		spacing: 3,
		className,
		children: gradients.map(({ name, gradients: gradientSet }, index) => {
			const id = `color-palette-${instanceId}-${index}`;
			return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)(component_default$6, {
				spacing: 2,
				children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(component_default$7, {
					className: style_module_default["color-heading"],
					level: headingLevel,
					id,
					children: name
				}), /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(SingleOrigin, {
					clearGradient,
					gradients: gradientSet,
					onChange: (gradient, _index, slug) => onChange(gradient, index, slug),
					value,
					selectedSlug,
					presentation,
					"aria-labelledby": id
				})]
			}, index);
		})
	});
}
function Component(props) {
	const { asButtons, presentation, loop, actions, headingLevel, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, ...additionalProps } = props;
	warnIfCircularOptionPickerAsButtonsIsSet("GradientPicker", asButtons);
	const { metaProps, labelProps, resolvedPresentation } = getComputeCircularOptionPickerCommonProps(asButtons, loop, ariaLabel, ariaLabelledby, presentation);
	const options = isMultipleOriginArray(props.gradients) ? /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(MultipleOrigin, {
		headingLevel,
		...additionalProps,
		presentation: resolvedPresentation
	}) : /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(SingleOrigin, {
		...additionalProps,
		presentation: resolvedPresentation
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(circular_option_picker_default, {
		...metaProps,
		...labelProps,
		actions,
		options
	});
}
function GradientPicker({ className, gradients = [], onChange, value, clearable = true, enableAlpha = true, disableCustomGradients = false, __experimentalIsRenderedInSidebar, headingLevel = 2, ...additionalProps }) {
	const clearGradient = (0, import_react.useCallback)(() => onChange(void 0), [onChange]);
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)(component_default$6, {
		spacing: gradients.length ? 4 : 0,
		children: [!disableCustomGradients && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(custom_gradient_picker_default, {
			__experimentalIsRenderedInSidebar,
			enableAlpha,
			value,
			onChange
		}), (gradients.length > 0 || clearable) && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Component, {
			...additionalProps,
			className,
			clearGradient,
			gradients,
			onChange,
			value,
			actions: clearable && !disableCustomGradients && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(circular_option_picker_default.ButtonAction, {
				onClick: clearGradient,
				accessibleWhenDisabled: true,
				disabled: !value,
				children: __("Clear")
			}),
			headingLevel
		})]
	});
}
var import_jsx_runtime$1, STYLE_HASH_ATTRIBUTE, style_module_default, isMultipleOriginObject, isMultipleOriginArray, gradient_picker_default;
function init_gradient_picker() {
	return (init_gradient_picker = __esmMin((() => {
		init_build_module$1();
		init_use_instance_id();
		init_react();
		init_circular_option_picker$1();
		init_custom_gradient_picker();
		init_component$6();
		init_component$7();
		import_jsx_runtime$1 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("a7b05d56c7", ".cf6db1948d5273a8__color-heading{text-transform:uppercase}.cf6db1948d5273a8__color-heading.cf6db1948d5273a8__color-heading.cf6db1948d5273a8__color-heading{font-size:11px;line-height:24px;margin-bottom:0}");
		style_module_default = { "color-heading": "cf6db1948d5273a8__color-heading" };
		isMultipleOriginObject = (obj) => Array.isArray(obj.gradients) && !("gradient" in obj);
		isMultipleOriginArray = (arr) => {
			return arr.length > 0 && arr.every((gradientObj) => isMultipleOriginObject(gradientObj));
		};
		gradient_picker_default = GradientPicker;
	})))();
}
//#endregion
//#region ../packages/components/build-module/notice/index.mjs
function useSpokenMessage(message, politeness) {
	const spokenMessage = typeof message === "string" ? message : serialize_default(message);
	(0, import_react.useEffect)(() => {
		if (spokenMessage) speak(spokenMessage, politeness);
	}, [spokenMessage, politeness]);
}
function getDefaultPoliteness(status) {
	switch (status) {
		case "success":
		case "warning":
		case "info": return "polite";
		default: return "assertive";
	}
}
function getStatusLabel(status) {
	switch (status) {
		case "warning": return __("Warning notice");
		case "info": return __("Information notice");
		case "error": return __("Error notice");
		default: return __("Notice");
	}
}
function Notice({ className, status = "info", children, spokenMessage = children, onRemove = noop, isDismissible = true, actions = [], politeness = getDefaultPoliteness(status), __unstableHTML, onDismiss = noop }) {
	useSpokenMessage(spokenMessage, politeness);
	const classes = clsx(className, "components-notice", "is-" + status);
	if (__unstableHTML && typeof children === "string") children = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RawHTML, { children });
	const onDismissNotice = () => {
		onDismiss();
		onRemove();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: classes,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(component_default, { children: getStatusLabel(status) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "components-notice__content",
				children
			}),
			actions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "components-notice__actions",
				children: actions.map(({ className: buttonCustomClasses, label, isPrimary, variant, noDefaultClasses = false, onClick, url, disabled }, index) => {
					let computedVariant = variant;
					if (variant !== "primary" && !noDefaultClasses) computedVariant = !url ? "secondary" : "link";
					if (typeof computedVariant === "undefined" && isPrimary) computedVariant = "primary";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, {
						size: "compact",
						href: url,
						variant: computedVariant,
						onClick,
						disabled,
						accessibleWhenDisabled: true,
						className: clsx("components-notice__action", buttonCustomClasses),
						children: label
					}, index);
				})
			}),
			isDismissible && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, {
				size: "small",
				className: "components-notice__dismiss",
				icon: close_small_default,
				label: __("Close"),
				onClick: onDismissNotice
			})
		]
	});
}
var import_jsx_runtime, noop, notice_default;
function init_notice() {
	return (init_notice = __esmMin((() => {
		init_clsx();
		init_build_module$1();
		init_raw_html(), init_react(), init_serialize();
		init_build_module$2();
		init_build_module$3();
		init_button();
		init_component();
		import_jsx_runtime = require_jsx_runtime();
		noop = () => {};
		notice_default = Notice;
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/colors-gradients/control.jsx
function ColorGradientControlInner({ colors, gradients, disableCustomColors, disableCustomGradients, __experimentalIsRenderedInSidebar, className, label, onColorChange, onGradientChange, colorValue, colorSlug, gradientValue, gradientSlug, clearable, showTitle = true, enableAlpha, headingLevel, noticeProps }) {
	const canChooseAColor = onColorChange && (colors && colors.length > 0 || !disableCustomColors);
	const canChooseAGradient = onGradientChange && (gradients && gradients.length > 0 || !disableCustomGradients);
	if (!canChooseAColor && !canChooseAGradient) return null;
	const colorPalette = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(color_palette_default, {
		value: colorValue,
		selectedSlug: colorSlug,
		onChange: canChooseAGradient ? (newColor, _index, newSlug) => {
			onColorChange(newColor, newSlug);
			onGradientChange();
		} : (newColor, _index, newSlug) => onColorChange(newColor, newSlug),
		colors,
		disableCustomColors,
		__experimentalIsRenderedInSidebar,
		clearable,
		enableAlpha,
		headingLevel
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 63,
		columnNumber: 3
	}, this);
	const tabPanels = {
		[TAB_IDS.color]: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [colorPalette, noticeProps && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(notice_default, {
			isDismissible: false,
			...noticeProps
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 88,
			columnNumber: 6
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 85,
			columnNumber: 4
		}, this),
		[TAB_IDS.gradient]: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(gradient_picker_default, {
			value: gradientValue,
			selectedSlug: gradientSlug,
			onChange: canChooseAColor ? (newGradient, _index, newSlug) => {
				onGradientChange(newGradient, newSlug);
				onColorChange();
			} : (newGradient, _index, newSlug) => onGradientChange(newGradient, newSlug),
			gradients,
			disableCustomGradients,
			__experimentalIsRenderedInSidebar,
			clearable,
			headingLevel
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 93,
			columnNumber: 4
		}, this)
	};
	const renderPanelType = (type) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "block-editor-color-gradient-control__panel",
		children: tabPanels[type]
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 116,
		columnNumber: 3
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(base_control_default, {
		className: clsx("block-editor-color-gradient-control", className),
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", {
			className: "block-editor-color-gradient-control__fieldset",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default$6, {
				spacing: 1,
				children: [
					showTitle && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "block-editor-color-gradient-control__color-indicator",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(base_control_default.VisualLabel, { children: label }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 133,
							columnNumber: 9
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 132,
						columnNumber: 8
					}, this) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 131,
						columnNumber: 7
					}, this),
					canChooseAColor && canChooseAGradient && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, {
						defaultTabId: gradientValue ? TAB_IDS.gradient : !!canChooseAColor && TAB_IDS.color,
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.TabList, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.Tab, {
								tabId: TAB_IDS.color,
								children: __("Color")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 149,
								columnNumber: 10
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.Tab, {
								tabId: TAB_IDS.gradient,
								children: __("Gradient")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 152,
								columnNumber: 10
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 148,
								columnNumber: 9
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.TabPanel, {
								tabId: TAB_IDS.color,
								className: "block-editor-color-gradient-control__panel",
								focusable: false,
								children: tabPanels.color
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 156,
								columnNumber: 9
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.TabPanel, {
								tabId: TAB_IDS.gradient,
								className: "block-editor-color-gradient-control__panel",
								focusable: false,
								children: tabPanels.gradient
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 163,
								columnNumber: 9
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 141,
						columnNumber: 8
					}, this) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 140,
						columnNumber: 7
					}, this),
					!canChooseAGradient && renderPanelType(TAB_IDS.color),
					!canChooseAColor && renderPanelType(TAB_IDS.gradient)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 129,
				columnNumber: 5
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 128,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 122,
		columnNumber: 3
	}, this);
}
function ColorGradientControlSelect(props) {
	const [colors, gradients, customColors, customGradients] = useSettings("color.palette", "color.gradients", "color.custom", "color.customGradient");
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ColorGradientControlInner, {
		colors,
		gradients,
		disableCustomColors: !customColors,
		disableCustomGradients: !customGradients,
		...props
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 191,
		columnNumber: 3
	}, this);
}
function ColorGradientControl(props) {
	if (colorsAndGradientKeys.every((key) => props.hasOwnProperty(key))) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ColorGradientControlInner, { ...props }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 205,
		columnNumber: 10
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ColorGradientControlSelect, { ...props }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 207,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, Tabs, colorsAndGradientKeys, TAB_IDS;
function init_control() {
	return (init_control = __esmMin((() => {
		init_clsx();
		init_build_module$1();
		init_base_control(), init_component$6(), init_color_palette(), init_gradient_picker(), init_notice(), init_private_apis();
		init_use_settings();
		init_lock_unlock();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/colors-gradients/control.jsx";
		({Tabs} = unlock(privateApis));
		colorsAndGradientKeys = [
			"colors",
			"disableCustomColors",
			"gradients",
			"disableCustomGradients"
		];
		TAB_IDS = {
			color: "color",
			gradient: "gradient"
		};
		ColorGradientControl.__docgenInfo = {
			"description": "",
			"methods": [],
			"displayName": "ColorGradientControl"
		};
	})))();
}
//#endregion
export { circular_option_picker_default as _, gradient_picker_default as a, init_utils as b, init_custom_gradient_picker as c, CustomGradientBar as d, init_gradient_bar as f, isMultiplePaletteArray as g, init_utils$1 as h, notice_default as i, DEFAULT_GRADIENT as l, init_color_palette as m, init_control as n, init_gradient_picker as o, color_palette_default as p, init_notice as r, custom_gradient_picker_default as s, ColorGradientControl as t, init_constants as u, init_circular_option_picker$1 as v, warnIfCircularOptionPickerAsButtonsIsSet as x, getComputeCircularOptionPickerCommonProps as y };
