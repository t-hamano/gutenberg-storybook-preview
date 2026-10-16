import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { i as _x, n as __, t as init_build_module$1 } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { n as use_controlled_state_default, t as init_use_controlled_state } from "./use-controlled-state-BMghEqir.js";
import { n as number_control_default, t as init_number_control } from "./number-control-DH-M3uwi.js";
import { n as init_strings, t as escapeRegExp } from "./strings-ogU8BBr-.js";
//#region ../packages/components/build-module/unit-control/utils.mjs
function getParsedQuantityAndUnit(rawValue, fallbackUnit, allowedUnits) {
	return parseQuantityAndUnitFromRawValue(fallbackUnit ? `${rawValue ?? ""}${fallbackUnit}` : rawValue, allowedUnits);
}
function hasUnits(units) {
	return Array.isArray(units) && !!units.length;
}
function parseQuantityAndUnitFromRawValue(rawValue, allowedUnits = ALL_CSS_UNITS) {
	let trimmedValue;
	let quantityToReturn;
	if (typeof rawValue !== "undefined" || rawValue === null) {
		trimmedValue = `${rawValue}`.trim();
		const parsedQuantity = parseFloat(trimmedValue);
		quantityToReturn = !isFinite(parsedQuantity) ? void 0 : parsedQuantity;
	}
	const matchedUnit = (trimmedValue?.match(/[\d.\-\+]*\s*(.*)/))?.[1]?.toLowerCase();
	let unitToReturn;
	if (hasUnits(allowedUnits)) unitToReturn = allowedUnits.find((item) => item.value === matchedUnit)?.value;
	else unitToReturn = DEFAULT_UNIT.value;
	return [quantityToReturn, unitToReturn];
}
function getValidParsedQuantityAndUnit(rawValue, allowedUnits, fallbackQuantity, fallbackUnit) {
	const [parsedQuantity, parsedUnit] = parseQuantityAndUnitFromRawValue(rawValue, allowedUnits);
	const quantityToReturn = parsedQuantity ?? fallbackQuantity;
	let unitToReturn = parsedUnit || fallbackUnit;
	if (!unitToReturn && hasUnits(allowedUnits)) unitToReturn = allowedUnits[0].value;
	return [quantityToReturn, unitToReturn];
}
function filterUnitsWithSettings(allowedUnitValues = [], availableUnits) {
	return Array.isArray(availableUnits) ? availableUnits.filter((unit) => allowedUnitValues.includes(unit.value)) : [];
}
function getUnitsWithCurrentUnit(rawValue, legacyUnit, units = ALL_CSS_UNITS) {
	const unitsToReturn = Array.isArray(units) ? [...units] : [];
	const [, currentUnit] = getParsedQuantityAndUnit(rawValue, legacyUnit, ALL_CSS_UNITS);
	if (currentUnit && !unitsToReturn.some((unit) => unit.value === currentUnit)) {
		if (allUnits[currentUnit]) unitsToReturn.unshift(allUnits[currentUnit]);
	}
	return unitsToReturn;
}
var allUnits, ALL_CSS_UNITS, CSS_UNITS, DEFAULT_UNIT, useCustomUnits;
function init_utils() {
	return (init_utils = __esmMin((() => {
		init_build_module$1();
		allUnits = {
			px: {
				value: "px",
				label: "px",
				a11yLabel: __("Pixels (px)"),
				step: 1
			},
			"%": {
				value: "%",
				label: "%",
				a11yLabel: __("Percent (%)"),
				step: .1
			},
			em: {
				value: "em",
				label: "em",
				a11yLabel: _x("ems", "Relative to parent font size (em)"),
				step: .01
			},
			rem: {
				value: "rem",
				label: "rem",
				a11yLabel: _x("rems", "Relative to root font size (rem)"),
				step: .01
			},
			vw: {
				value: "vw",
				label: "vw",
				a11yLabel: __("Viewport width (vw)"),
				step: .1
			},
			vh: {
				value: "vh",
				label: "vh",
				a11yLabel: __("Viewport height (vh)"),
				step: .1
			},
			vmin: {
				value: "vmin",
				label: "vmin",
				a11yLabel: __("Viewport smallest dimension (vmin)"),
				step: .1
			},
			vmax: {
				value: "vmax",
				label: "vmax",
				a11yLabel: __("Viewport largest dimension (vmax)"),
				step: .1
			},
			ch: {
				value: "ch",
				label: "ch",
				a11yLabel: __("Width of the zero (0) character (ch)"),
				step: .01
			},
			ex: {
				value: "ex",
				label: "ex",
				a11yLabel: __("x-height of the font (ex)"),
				step: .01
			},
			cm: {
				value: "cm",
				label: "cm",
				a11yLabel: __("Centimeters (cm)"),
				step: .001
			},
			mm: {
				value: "mm",
				label: "mm",
				a11yLabel: __("Millimeters (mm)"),
				step: .1
			},
			in: {
				value: "in",
				label: "in",
				a11yLabel: __("Inches (in)"),
				step: .001
			},
			pc: {
				value: "pc",
				label: "pc",
				a11yLabel: __("Picas (pc)"),
				step: 1
			},
			pt: {
				value: "pt",
				label: "pt",
				a11yLabel: __("Points (pt)"),
				step: 1
			},
			svw: {
				value: "svw",
				label: "svw",
				a11yLabel: __("Small viewport width (svw)"),
				step: .1
			},
			svh: {
				value: "svh",
				label: "svh",
				a11yLabel: __("Small viewport height (svh)"),
				step: .1
			},
			svi: {
				value: "svi",
				label: "svi",
				a11yLabel: __("Small viewport width or height (svi)"),
				step: .1
			},
			svb: {
				value: "svb",
				label: "svb",
				a11yLabel: __("Small viewport width or height (svb)"),
				step: .1
			},
			svmin: {
				value: "svmin",
				label: "svmin",
				a11yLabel: __("Small viewport smallest dimension (svmin)"),
				step: .1
			},
			lvw: {
				value: "lvw",
				label: "lvw",
				a11yLabel: __("Large viewport width (lvw)"),
				step: .1
			},
			lvh: {
				value: "lvh",
				label: "lvh",
				a11yLabel: __("Large viewport height (lvh)"),
				step: .1
			},
			lvi: {
				value: "lvi",
				label: "lvi",
				a11yLabel: __("Large viewport width or height (lvi)"),
				step: .1
			},
			lvb: {
				value: "lvb",
				label: "lvb",
				a11yLabel: __("Large viewport width or height (lvb)"),
				step: .1
			},
			lvmin: {
				value: "lvmin",
				label: "lvmin",
				a11yLabel: __("Large viewport smallest dimension (lvmin)"),
				step: .1
			},
			dvw: {
				value: "dvw",
				label: "dvw",
				a11yLabel: __("Dynamic viewport width (dvw)"),
				step: .1
			},
			dvh: {
				value: "dvh",
				label: "dvh",
				a11yLabel: __("Dynamic viewport height (dvh)"),
				step: .1
			},
			dvi: {
				value: "dvi",
				label: "dvi",
				a11yLabel: __("Dynamic viewport width or height (dvi)"),
				step: .1
			},
			dvb: {
				value: "dvb",
				label: "dvb",
				a11yLabel: __("Dynamic viewport width or height (dvb)"),
				step: .1
			},
			dvmin: {
				value: "dvmin",
				label: "dvmin",
				a11yLabel: __("Dynamic viewport smallest dimension (dvmin)"),
				step: .1
			},
			dvmax: {
				value: "dvmax",
				label: "dvmax",
				a11yLabel: __("Dynamic viewport largest dimension (dvmax)"),
				step: .1
			},
			svmax: {
				value: "svmax",
				label: "svmax",
				a11yLabel: __("Small viewport largest dimension (svmax)"),
				step: .1
			},
			lvmax: {
				value: "lvmax",
				label: "lvmax",
				a11yLabel: __("Large viewport largest dimension (lvmax)"),
				step: .1
			}
		};
		ALL_CSS_UNITS = Object.values(allUnits);
		CSS_UNITS = [
			allUnits.px,
			allUnits["%"],
			allUnits.em,
			allUnits.rem,
			allUnits.vw,
			allUnits.vh
		];
		DEFAULT_UNIT = allUnits.px;
		useCustomUnits = ({ units = ALL_CSS_UNITS, availableUnits = [], defaultValues }) => {
			const customUnitsToReturn = filterUnitsWithSettings(availableUnits, units);
			if (!defaultValues) return customUnitsToReturn;
			return customUnitsToReturn.map((unit) => {
				const [defaultValue] = defaultValues[unit.value] ? parseQuantityAndUnitFromRawValue(defaultValues[unit.value]) : [];
				return {
					...unit,
					default: defaultValue
				};
			});
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/unit-control/unit-select-control.mjs
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
function UnitSelectControl({ className, isUnitSelectTabbable: isTabbable = true, onChange, size = "default", unit = "px", units = CSS_UNITS, ...props }, ref) {
	if (!hasUnits(units) || units?.length === 1) return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
		className: clsx("components-unit-control__unit-label", style_module_default$1["unit-label"], { [style_module_default$1["is-small"]]: size === "small" }),
		children: unit
	});
	const handleOnChange = (event) => {
		const { value: unitValue } = event.target;
		const data = units.find((option) => option.value === unitValue);
		onChange?.(unitValue, {
			event,
			data
		});
	};
	const classes = clsx("components-unit-control__select", style_module_default$1["unit-select"], className, { [style_module_default$1["is-small"]]: size === "small" });
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("select", {
		ref,
		className: classes,
		onChange: handleOnChange,
		tabIndex: isTabbable ? void 0 : -1,
		value: unit,
		...props,
		children: units.map((option) => /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("option", {
			value: option.value,
			children: option.label
		}, option.value))
	});
}
var import_jsx_runtime$1, STYLE_HASH_ATTRIBUTE$1, style_module_default$1, unit_select_control_default;
function init_unit_select_control() {
	return (init_unit_select_control = __esmMin((() => {
		init_clsx();
		init_react();
		init_utils();
		import_jsx_runtime$1 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$1 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$1("d340fb3930", "._6b9ed1defa67f4f6__value-input._6b9ed1defa67f4f6__value-input._6b9ed1defa67f4f6__value-input input{display:block;width:100%}._6b9ed1defa67f4f6__value-input._6b9ed1defa67f4f6__value-input._6b9ed1defa67f4f6__value-input .components-input-control__backdrop{transition:box-shadow .1s linear}._39344a069862b0a9__unit-label._39344a069862b0a9__unit-label._39344a069862b0a9__unit-label{color:#1e1e1e;pointer-events:none}._39344a069862b0a9__unit-label._39344a069862b0a9__unit-label._39344a069862b0a9__unit-label:where(:not(._5f8650c2c69ad46a__is-small)){field-sizing:content;box-sizing:border-box;font-size:13px;height:24px;line-height:1;margin-inline-end:8px;max-width:48px;min-width:24px;overflow:hidden;padding:4px;text-align-last:center;text-overflow:ellipsis;white-space:nowrap}._39344a069862b0a9__unit-label._39344a069862b0a9__unit-label._39344a069862b0a9__unit-label:where(:not(._5f8650c2c69ad46a__is-small)):not(:disabled){color:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9))}._39344a069862b0a9__unit-label._39344a069862b0a9__unit-label._39344a069862b0a9__unit-label:where(._5f8650c2c69ad46a__is-small){box-sizing:border-box;font-size:8px;letter-spacing:-.5px;line-height:1;padding:2px 1px;text-align-last:center;text-transform:uppercase;width:20px}._39344a069862b0a9__unit-label._39344a069862b0a9__unit-label._39344a069862b0a9__unit-label:where(._5f8650c2c69ad46a__is-small):not(:disabled){color:#2f2f2f}.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select{appearance:none;background:transparent;border:none;border-radius:1px;display:block;font-family:inherit;margin:0;min-height:auto;outline:none}.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select:not(:disabled){cursor:var(--wpds-cursor-control,pointer)}.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select:where(._5f8650c2c69ad46a__is-small){box-sizing:border-box;font-size:8px;letter-spacing:-.5px;line-height:1;padding:2px 1px;text-align-last:center;text-transform:uppercase;width:20px}.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select:where(._5f8650c2c69ad46a__is-small):not(:disabled){color:#2f2f2f}.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select:where(._5f8650c2c69ad46a__is-small){border:1px solid transparent;border-end-start-radius:0;border-start-start-radius:0;height:100%;transition:box-shadow .1s linear,border .1s linear}.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select:where(._5f8650c2c69ad46a__is-small):not(:disabled):hover{background-color:#f0f0f0}.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select:where(._5f8650c2c69ad46a__is-small):focus{border:1px solid var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));box-shadow:inset 0 0 0 1px var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));outline:2px solid transparent;outline-offset:0;z-index:1}.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select:where(:not(._5f8650c2c69ad46a__is-small)){field-sizing:content;box-sizing:border-box;font-size:13px;height:24px;line-height:1;margin-inline-end:8px;max-width:48px;min-width:24px;overflow:hidden;padding:4px;text-align-last:center;text-overflow:ellipsis;white-space:nowrap}.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select:where(:not(._5f8650c2c69ad46a__is-small)):not(:disabled){color:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9))}.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select:where(:not(._5f8650c2c69ad46a__is-small)){align-items:center;display:flex;justify-content:center}.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select:where(:not(._5f8650c2c69ad46a__is-small)):where(:not(:disabled)):hover{box-shadow:0 0 0 1px var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));outline:1px solid transparent}.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select:where(:not(._5f8650c2c69ad46a__is-small)):focus{box-shadow:0 0 0 1.5px var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));outline:1.5px solid transparent}");
		style_module_default$1 = {
			"value-input": "_6b9ed1defa67f4f6__value-input",
			"unit-label": "_39344a069862b0a9__unit-label",
			"is-small": "_5f8650c2c69ad46a__is-small",
			"unit-select": "e66c3cd98875163d__unit-select"
		};
		unit_select_control_default = (0, import_react.forwardRef)(UnitSelectControl);
	})))();
}
//#endregion
//#region ../packages/components/build-module/unit-control/index.mjs
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
function UnforwardedUnitControl(unitControlProps, forwardedRef) {
	const { __unstableStateReducer, autoComplete = "off", children, className, disabled = false, disableUnits = false, isPressEnterToChange = false, isResetValueOnUnitChange = false, isUnitSelectTabbable = true, label, onChange: onChangeProp, onUnitChange, size = "default", unit: unitProp, units: unitsProp = CSS_UNITS, value: valueProp, onFocus: onFocusProp, ...props } = unitControlProps;
	if ("unit" in unitControlProps) deprecated("UnitControl unit prop", {
		since: "5.6",
		hint: "The unit should be provided within the `value` prop.",
		version: "6.2"
	});
	const nonNullValueProp = valueProp ?? void 0;
	const [units, reFirstCharacterOfUnits] = (0, import_react.useMemo)(() => {
		const list = getUnitsWithCurrentUnit(nonNullValueProp, unitProp, unitsProp);
		const [{ value: firstUnitValue = "" } = {}, ...rest] = list;
		const firstCharacters = rest.reduce((carry, { value }) => {
			const first = escapeRegExp(value?.substring(0, 1) || "");
			return carry.includes(first) ? carry : `${carry}|${first}`;
		}, escapeRegExp(firstUnitValue.substring(0, 1)));
		return [list, new RegExp(`^(?:${firstCharacters})$`, "i")];
	}, [
		nonNullValueProp,
		unitProp,
		unitsProp
	]);
	const [parsedQuantity, parsedUnit] = getParsedQuantityAndUnit(nonNullValueProp, unitProp, units);
	const [unit, setUnit] = use_controlled_state_default(units.length === 1 ? units[0].value : unitProp, {
		initial: parsedUnit,
		fallback: ""
	});
	(0, import_react.useEffect)(() => {
		if (parsedUnit !== void 0) setUnit(parsedUnit);
	}, [parsedUnit, setUnit]);
	const classes = clsx("components-unit-control", "components-unit-control-wrapper", style_module_default["value-input"], className);
	const handleOnQuantityChange = (nextQuantityValue, changeProps) => {
		if (nextQuantityValue === "" || typeof nextQuantityValue === "undefined" || nextQuantityValue === null) {
			onChangeProp?.("", changeProps);
			return;
		}
		const fallbackUnit = units.some((option) => option.value === unit) ? unit : void 0;
		const onChangeValue = getValidParsedQuantityAndUnit(nextQuantityValue, units, parsedQuantity, fallbackUnit).join("");
		onChangeProp?.(onChangeValue, changeProps);
	};
	const handleOnUnitChange = (nextUnitValue, changeProps) => {
		const { data } = changeProps;
		let nextValue = `${parsedQuantity ?? ""}${nextUnitValue}`;
		if (isResetValueOnUnitChange && data?.default !== void 0) nextValue = `${data.default}${nextUnitValue}`;
		onChangeProp?.(nextValue, changeProps);
		onUnitChange?.(nextUnitValue, changeProps);
		setUnit(nextUnitValue);
	};
	let handleOnKeyDown;
	if (!disableUnits && isUnitSelectTabbable && units.length) handleOnKeyDown = (event) => {
		props.onKeyDown?.(event);
		if (!event.metaKey && !event.ctrlKey && reFirstCharacterOfUnits.test(event.key)) refInputSuffix.current?.focus();
	};
	const refInputSuffix = (0, import_react.useRef)(null);
	const inputSuffix = !disableUnits ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(unit_select_control_default, {
		ref: refInputSuffix,
		"aria-label": __("Select unit"),
		disabled,
		isUnitSelectTabbable,
		onChange: handleOnUnitChange,
		size: ["small", "compact"].includes(size) ? "small" : "default",
		unit,
		units,
		onFocus: onFocusProp,
		onBlur: unitControlProps.onBlur
	}) : null;
	let step = props.step;
	if (!step && units) step = units.find((option) => option.value === unit)?.step ?? 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(number_control_default, {
		...props,
		autoComplete,
		className: classes,
		disabled,
		spinControls: "none",
		isPressEnterToChange,
		label,
		onKeyDown: handleOnKeyDown,
		onChange: handleOnQuantityChange,
		ref: forwardedRef,
		size,
		suffix: inputSuffix,
		type: isPressEnterToChange ? "text" : "number",
		value: parsedQuantity ?? "",
		step,
		onFocus: onFocusProp,
		__unstableStateReducer
	});
}
var import_jsx_runtime, STYLE_HASH_ATTRIBUTE, style_module_default, UnitControl, unit_control_default;
function init_unit_control() {
	return (init_unit_control = __esmMin((() => {
		init_clsx();
		init_build_module();
		init_react();
		init_build_module$1();
		init_number_control();
		init_unit_select_control();
		init_utils();
		init_use_controlled_state();
		init_strings();
		import_jsx_runtime = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("d340fb3930", "._6b9ed1defa67f4f6__value-input._6b9ed1defa67f4f6__value-input._6b9ed1defa67f4f6__value-input input{display:block;width:100%}._6b9ed1defa67f4f6__value-input._6b9ed1defa67f4f6__value-input._6b9ed1defa67f4f6__value-input .components-input-control__backdrop{transition:box-shadow .1s linear}._39344a069862b0a9__unit-label._39344a069862b0a9__unit-label._39344a069862b0a9__unit-label{color:#1e1e1e;pointer-events:none}._39344a069862b0a9__unit-label._39344a069862b0a9__unit-label._39344a069862b0a9__unit-label:where(:not(._5f8650c2c69ad46a__is-small)){field-sizing:content;box-sizing:border-box;font-size:13px;height:24px;line-height:1;margin-inline-end:8px;max-width:48px;min-width:24px;overflow:hidden;padding:4px;text-align-last:center;text-overflow:ellipsis;white-space:nowrap}._39344a069862b0a9__unit-label._39344a069862b0a9__unit-label._39344a069862b0a9__unit-label:where(:not(._5f8650c2c69ad46a__is-small)):not(:disabled){color:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9))}._39344a069862b0a9__unit-label._39344a069862b0a9__unit-label._39344a069862b0a9__unit-label:where(._5f8650c2c69ad46a__is-small){box-sizing:border-box;font-size:8px;letter-spacing:-.5px;line-height:1;padding:2px 1px;text-align-last:center;text-transform:uppercase;width:20px}._39344a069862b0a9__unit-label._39344a069862b0a9__unit-label._39344a069862b0a9__unit-label:where(._5f8650c2c69ad46a__is-small):not(:disabled){color:#2f2f2f}.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select{appearance:none;background:transparent;border:none;border-radius:1px;display:block;font-family:inherit;margin:0;min-height:auto;outline:none}.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select:not(:disabled){cursor:var(--wpds-cursor-control,pointer)}.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select:where(._5f8650c2c69ad46a__is-small){box-sizing:border-box;font-size:8px;letter-spacing:-.5px;line-height:1;padding:2px 1px;text-align-last:center;text-transform:uppercase;width:20px}.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select:where(._5f8650c2c69ad46a__is-small):not(:disabled){color:#2f2f2f}.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select:where(._5f8650c2c69ad46a__is-small){border:1px solid transparent;border-end-start-radius:0;border-start-start-radius:0;height:100%;transition:box-shadow .1s linear,border .1s linear}.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select:where(._5f8650c2c69ad46a__is-small):not(:disabled):hover{background-color:#f0f0f0}.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select:where(._5f8650c2c69ad46a__is-small):focus{border:1px solid var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));box-shadow:inset 0 0 0 1px var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));outline:2px solid transparent;outline-offset:0;z-index:1}.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select:where(:not(._5f8650c2c69ad46a__is-small)){field-sizing:content;box-sizing:border-box;font-size:13px;height:24px;line-height:1;margin-inline-end:8px;max-width:48px;min-width:24px;overflow:hidden;padding:4px;text-align-last:center;text-overflow:ellipsis;white-space:nowrap}.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select:where(:not(._5f8650c2c69ad46a__is-small)):not(:disabled){color:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9))}.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select:where(:not(._5f8650c2c69ad46a__is-small)){align-items:center;display:flex;justify-content:center}.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select:where(:not(._5f8650c2c69ad46a__is-small)):where(:not(:disabled)):hover{box-shadow:0 0 0 1px var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));outline:1px solid transparent}.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select.e66c3cd98875163d__unit-select:where(:not(._5f8650c2c69ad46a__is-small)):focus{box-shadow:0 0 0 1.5px var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));outline:1.5px solid transparent}");
		style_module_default = {
			"value-input": "_6b9ed1defa67f4f6__value-input",
			"unit-label": "_39344a069862b0a9__unit-label",
			"is-small": "_5f8650c2c69ad46a__is-small",
			"unit-select": "e66c3cd98875163d__unit-select"
		};
		UnitControl = (0, import_react.forwardRef)(UnforwardedUnitControl);
		UnitControl.displayName = "UnitControl";
		unit_control_default = UnitControl;
	})))();
}
//#endregion
export { parseQuantityAndUnitFromRawValue as a, init_utils as i, unit_control_default as n, useCustomUnits as o, CSS_UNITS as r, init_unit_control as t };
