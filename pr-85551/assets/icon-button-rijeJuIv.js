import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { n as init_icon, t as Icon } from "./icon-n5i0-U3z.js";
import { n as init_button, t as Button } from "./button-DruDjqNA.js";
import { i as useKeyboardShortcutProps, n as KeyboardShortcutDisplay, r as init_keyboard_shortcut, t as KeyboardShortcutDescription } from "./keyboard-shortcut-C_zXjoAg.js";
import { a as Popup, i as init_trigger, n as init_root, o as init_popup, r as Trigger, t as Root } from "./root-DlJcNgeY.js";
//#region ../packages/ui/build-module/icon-button/icon-button.mjs
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
var import_jsx_runtime, STYLE_HASH_ATTRIBUTE, style_default, IconButton;
function init_icon_button() {
	return (init_icon_button = __esmMin((() => {
		init_clsx();
		init_react();
		init_button();
		init_icon();
		init_root(), init_trigger(), init_popup();
		init_keyboard_shortcut();
		import_jsx_runtime = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("c5cdafb1bc", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer compositions{._28cfdc260e755391__icon-button{--wp-ui-button-aspect-ratio:1;--wp-ui-button-padding-inline:0px;--wp-ui-button-min-width:unset}.f1c70d719989a85a__icon{margin:-1px}}}");
		style_default = {
			"icon-button": "_28cfdc260e755391__icon-button",
			"icon": "f1c70d719989a85a__icon"
		};
		IconButton = (0, import_react.forwardRef)(function UnforwardedIconButton({ label, className, children: _children, disabled, focusableWhenDisabled = true, icon, size, shortcut, positioner, "aria-describedby": ariaDescribedBy, "aria-keyshortcuts": ariaKeyShortcuts, ...restProps }, ref) {
			const classes = clsx(style_default["icon-button"], className);
			const { descriptionId, targetProps } = useKeyboardShortcutProps({
				"aria-describedby": ariaDescribedBy,
				"aria-keyshortcuts": ariaKeyShortcuts,
				shortcut
			});
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger, {
				ref,
				...targetProps,
				disabled: disabled && !focusableWhenDisabled,
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					...restProps,
					size,
					"aria-label": label,
					disabled,
					focusableWhenDisabled
				}),
				className: classes,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					icon,
					size: 24,
					className: style_default.icon
				}), shortcut && descriptionId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyboardShortcutDescription, {
					descriptionId,
					shortcut
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popup, {
				positioner,
				children: [label, shortcut && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [" ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyboardShortcutDisplay, { shortcut })] })]
			})] });
		});
	})))();
}
//#endregion
export { init_icon_button as n, IconButton as t };
