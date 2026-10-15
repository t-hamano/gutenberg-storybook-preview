import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as __, t as init_build_module$1 } from "./build-module-v04us4E2.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { t as close_small_default } from "./close-small-By1OyhLF.js";
import { n as search_default } from "./search-CMBDzVQT.js";
import { n as init_input_control, r as input_control_default } from "./input-control-hg4QQcQC.js";
import { n as init_icon, t as icon_default } from "./icon-oSwa7eHF.js";
import { n as button_default, r as init_button } from "./button-Bj8SgySP.js";
import { n as init_input_prefix_wrapper, t as InputControlPrefixWrapper } from "./input-prefix-wrapper-BtBYerqA.js";
import { n as init_input_suffix_wrapper, t as InputControlSuffixWrapper } from "./input-suffix-wrapper-vM1JQdLJ.js";
import { r as init_build_module$2 } from "./library.story-DawnfKTW.js";
//#region ../packages/components/build-module/search-control/index.mjs
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
function SuffixItem({ searchRef, onChange, onClose }) {
	if (onClose) deprecated("`onClose` prop in wp.components.SearchControl", { since: "6.8" });
	const onReset = () => {
		onChange("");
		searchRef.current?.focus();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputControlSuffixWrapper, {
		variant: "control",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, {
			size: "small",
			icon: close_small_default,
			label: onClose ? __("Close search") : __("Reset search"),
			onClick: onClose ?? onReset
		})
	});
}
function UnforwardedSearchControl({ __nextHasNoMarginBottom: _, __next40pxDefaultSize: _next40pxDefaultSize, className, onChange, value, label = __("Search"), placeholder = __("Search"), hideLabelFromVision = true, onClose, size = "default", ...restProps }, forwardedRef) {
	const { disabled, ...filteredRestProps } = restProps;
	const searchRef = (0, import_react.useRef)(null);
	const instanceId = use_instance_id_default(SearchControl, "components-search-control");
	const hasSuffix = !!onClose || !!value;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_control_default, {
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
		prefix: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputControlPrefixWrapper, {
			variant: "icon",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_default, {
				className: style_module_default.icon,
				icon: search_default,
				fill: "currentColor"
			})
		}),
		suffix: hasSuffix && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SuffixItem, {
			searchRef,
			onChange,
			onClose
		}),
		...filteredRestProps
	});
}
var import_jsx_runtime, STYLE_HASH_ATTRIBUTE, style_module_default, SearchControl, search_control_default;
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
		import_jsx_runtime = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("77f847972d", "._5e6152f7430df331__input input[type=search]::-webkit-search-cancel-button,._5e6152f7430df331__input input[type=search]::-webkit-search-decoration,._5e6152f7430df331__input input[type=search]::-webkit-search-results-button,._5e6152f7430df331__input input[type=search]::-webkit-search-results-decoration{-webkit-appearance:none}._9a856163f1b1aaae__icon:dir(ltr){transform:scaleX(-1)}");
		style_module_default = {
			"input": "_5e6152f7430df331__input",
			"icon": "_9a856163f1b1aaae__icon"
		};
		SearchControl = (0, import_react.forwardRef)(UnforwardedSearchControl);
		SearchControl.displayName = "SearchControl";
		search_control_default = SearchControl;
	})))();
}
//#endregion
export { search_control_default as n, init_search_control as t };
