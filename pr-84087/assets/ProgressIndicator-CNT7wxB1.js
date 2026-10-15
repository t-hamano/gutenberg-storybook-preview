import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as useRenderElement, t as init_useRenderElement } from "./useRenderElement-QwAlaybP.js";
import { n as visuallyHidden, t as init_visuallyHidden } from "./visuallyHidden-qJhXS9Ug.js";
import { t as clamp } from "./clamp-vv_wJWMO.js";
import { i as init_formatNumber, n as valueToPercent, r as formatNumber } from "./valueToPercent-CyBONdIY.js";
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/progress/root/ProgressRootContext.mjs
function useProgressRootContext() {
	const context = import_react$3.useContext(ProgressRootContext);
	if (context === void 0) throw new Error("Base UI: ProgressRootContext is missing. Progress parts must be placed within <Progress.Root>.");
	return context;
}
var import_react$3, ProgressRootContext;
function init_ProgressRootContext() {
	return (init_ProgressRootContext = __esmMin((() => {
		import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
		ProgressRootContext = /*#__PURE__*/ import_react$3.createContext(void 0);
		ProgressRootContext.displayName = "ProgressRootContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/progress/root/ProgressRootDataAttributes.mjs
var complete, indeterminate, progressing;
function init_ProgressRootDataAttributes() {
	return (init_ProgressRootDataAttributes = __esmMin((() => {
		complete = "data-complete";
		indeterminate = "data-indeterminate";
		progressing = "data-progressing";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/progress/root/stateAttributesMapping.mjs
var progressStateAttributesMapping;
function init_stateAttributesMapping() {
	return (init_stateAttributesMapping = __esmMin((() => {
		init_ProgressRootDataAttributes();
		progressStateAttributesMapping = { status(value) {
			if (value === "progressing") return { [progressing]: "" };
			if (value === "complete") return { [complete]: "" };
			if (value === "indeterminate") return { [indeterminate]: "" };
			return null;
		} };
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/progress/root/ProgressRoot.mjs
var import_react$2, import_jsx_runtime, ProgressRoot;
function init_ProgressRoot() {
	return (init_ProgressRoot = __esmMin((() => {
		import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_visuallyHidden();
		init_formatNumber();
		init_useRenderElement();
		init_ProgressRootContext();
		init_stateAttributesMapping();
		import_jsx_runtime = require_jsx_runtime();
		ProgressRoot = /*#__PURE__*/ import_react$2.forwardRef(function ProgressRoot(componentProps, forwardedRef) {
			const { format, getAriaValueText, locale, max = 100, min = 0, value, render, className, children, style, ...elementProps } = componentProps;
			const [labelId, setLabelId] = import_react$2.useState();
			let status = "indeterminate";
			let percentageValue = null;
			let clampedValue = null;
			let formattedValue = "";
			let defaultAriaValueText = "indeterminate progress";
			if (value != null && Number.isFinite(value)) {
				const rawPercentage = valueToPercent(value, min, max);
				percentageValue = clamp(Number.isNaN(rawPercentage) ? 0 : rawPercentage, 0, 100);
				clampedValue = clamp(value, min, max);
				status = clampedValue === max ? "complete" : "progressing";
				formattedValue = format ? formatNumber(clampedValue, locale, format) : formatNumber(percentageValue / 100, locale, { style: "percent" });
				defaultAriaValueText = formattedValue;
			}
			const state = import_react$2.useMemo(() => ({ status }), [status]);
			const defaultProps = {
				"aria-labelledby": labelId,
				"aria-valuemax": max,
				"aria-valuemin": min,
				"aria-valuenow": clampedValue ?? void 0,
				"aria-valuetext": getAriaValueText ? getAriaValueText(formattedValue, value) : defaultAriaValueText,
				role: "progressbar",
				children: /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(import_react$2.Fragment, { children: [children, /*#__PURE__*/ (0, import_jsx_runtime.jsx)("span", {
					role: "presentation",
					style: visuallyHidden,
					children: "x"
				})] })
			};
			const contextValue = import_react$2.useMemo(() => ({
				formattedValue,
				percentageValue,
				setLabelId,
				state,
				value
			}), [
				formattedValue,
				percentageValue,
				setLabelId,
				state,
				value
			]);
			const element = useRenderElement("div", componentProps, {
				state,
				ref: forwardedRef,
				props: [defaultProps, elementProps],
				stateAttributesMapping: progressStateAttributesMapping
			});
			return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ProgressRootContext.Provider, {
				value: contextValue,
				children: element
			});
		});
		ProgressRoot.displayName = "ProgressRoot";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/progress/track/ProgressTrack.mjs
var import_react$1, ProgressTrack;
function init_ProgressTrack() {
	return (init_ProgressTrack = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useRenderElement();
		init_ProgressRootContext();
		init_stateAttributesMapping();
		ProgressTrack = /*#__PURE__*/ import_react$1.forwardRef(function ProgressTrack(componentProps, forwardedRef) {
			const { render, className, style, ...elementProps } = componentProps;
			const { state } = useProgressRootContext();
			return useRenderElement("div", componentProps, {
				state,
				ref: forwardedRef,
				props: elementProps,
				stateAttributesMapping: progressStateAttributesMapping
			});
		});
		ProgressTrack.displayName = "ProgressTrack";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/progress/indicator/ProgressIndicator.mjs
var import_react, ProgressIndicator;
function init_ProgressIndicator() {
	return (init_ProgressIndicator = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useRenderElement();
		init_ProgressRootContext();
		init_stateAttributesMapping();
		ProgressIndicator = /*#__PURE__*/ import_react.forwardRef(function ProgressIndicator(componentProps, forwardedRef) {
			const { render, className, style, ...elementProps } = componentProps;
			const { percentageValue, state } = useProgressRootContext();
			const indicatorStyle = percentageValue == null ? {} : {
				insetInlineStart: 0,
				height: "inherit",
				width: `${percentageValue}%`
			};
			return useRenderElement("div", componentProps, {
				state,
				ref: forwardedRef,
				props: [{ style: indicatorStyle }, elementProps],
				stateAttributesMapping: progressStateAttributesMapping
			});
		});
		ProgressIndicator.displayName = "ProgressIndicator";
	})))();
}
//#endregion
export { ProgressRoot as a, progressStateAttributesMapping as c, init_ProgressTrack as i, init_ProgressRootContext as l, init_ProgressIndicator as n, init_ProgressRoot as o, ProgressTrack as r, init_stateAttributesMapping as s, ProgressIndicator as t, useProgressRootContext as u };
