import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { i as contextConnectWithoutRef, n as useContextSystem, o as init_context_connect, t as init_use_context_system } from "./use-context-system-DpkzZnKH.js";
import { n as init_component, t as component_default } from "./component-6Aui1e4Q.js";
import { i as init_polymorphic_element, r as PolymorphicElement } from "./component-CFOx0tK5.js";
import { a as init_hooks } from "./use-animated-offset-rect-BBsICW0E.js";
//#region ../packages/components/build-module/base-control/styles/base-control-styles.mjs
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
function UnforwardedWrapper({ className, ...props }, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(PolymorphicElement, {
		ref,
		...props,
		className: clsx(style_module_default.wrapper, className)
	});
}
function UnforwardedStyledField({ className, ...props }, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(PolymorphicElement, {
		ref,
		...props,
		className: clsx(style_module_default.field, className)
	});
}
function UnforwardedStyledLabel({ as, className, ...props }, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(PolymorphicElement, {
		as: as ?? "label",
		ref,
		...props,
		className: clsx(style_module_default.label, className)
	});
}
function UnforwardedStyledHelp({ as, className, ...props }, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(PolymorphicElement, {
		as: as ?? "p",
		ref,
		...props,
		className: clsx(style_module_default.help, className)
	});
}
function UnforwardedStyledVisualLabel({ as, className, ...props }, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(PolymorphicElement, {
		as: as ?? "span",
		ref,
		...props,
		className: clsx(style_module_default.label, className)
	});
}
var import_jsx_runtime$1, STYLE_HASH_ATTRIBUTE, style_module_default, Wrapper, StyledField, StyledLabel, StyledHelp, StyledVisualLabel;
function init_base_control_styles() {
	return (init_base_control_styles = __esmMin((() => {
		init_clsx();
		init_react();
		init_polymorphic_element();
		import_jsx_runtime$1 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("2afb2a4628", "._94dff8a2f7c49fc8__wrapper{box-sizing:border-box;font-family:-apple-system,system-ui,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-size:13px}._94dff8a2f7c49fc8__wrapper *,._94dff8a2f7c49fc8__wrapper :after,._94dff8a2f7c49fc8__wrapper :before{box-sizing:inherit}.components-panel__row .d9ac8e2c0db95cc7__field{margin-bottom:inherit}.a54361fe302593c3__label{color:var(--wpds-color-foreground-content-neutral,#1e1e1e);display:block;font-size:11px;font-weight:var(--wpds-typography-font-weight-emphasis,600);line-height:1.4;margin-bottom:8px;padding:0;text-transform:uppercase}.de68669d18f359f5__help{text-wrap:pretty;color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070));font-size:12px;font-style:normal;margin-bottom:0;margin-top:8px}");
		style_module_default = {
			"wrapper": "_94dff8a2f7c49fc8__wrapper",
			"field": "d9ac8e2c0db95cc7__field",
			"label": "a54361fe302593c3__label",
			"help": "de68669d18f359f5__help"
		};
		Wrapper = (0, import_react.forwardRef)(UnforwardedWrapper);
		StyledField = (0, import_react.forwardRef)(UnforwardedStyledField);
		StyledLabel = (0, import_react.forwardRef)(UnforwardedStyledLabel);
		StyledHelp = (0, import_react.forwardRef)(UnforwardedStyledHelp);
		StyledVisualLabel = (0, import_react.forwardRef)(UnforwardedStyledVisualLabel);
	})))();
}
//#endregion
//#region ../packages/components/build-module/base-control/index.mjs
var import_jsx_runtime, UnconnectedBaseControl, UnforwardedVisualLabel, VisualLabel, BaseControl, base_control_default;
function init_base_control() {
	return (init_base_control = __esmMin((() => {
		init_clsx();
		init_react();
		init_component();
		init_base_control_styles();
		init_context_connect(), init_use_context_system();
		init_hooks();
		import_jsx_runtime = require_jsx_runtime();
		UnconnectedBaseControl = (props) => {
			const { id, label, hideLabelFromVision = false, help, className, children } = useContextSystem(props, "BaseControl");
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrapper, {
				className,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StyledField, {
					className: "components-base-control__field",
					children: [
						label && id && (hideLabelFromVision ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(component_default, {
							as: "label",
							htmlFor: id,
							children: label
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledLabel, {
							className: "components-base-control__label",
							htmlFor: id,
							children: label
						})),
						label && !id && (hideLabelFromVision ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(component_default, {
							as: "label",
							children: label
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisualLabel, { children: label })),
						children
					]
				}), !!help && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledHelp, {
					id: id ? id + "__help" : void 0,
					className: "components-base-control__help",
					children: help
				})]
			});
		};
		UnforwardedVisualLabel = (props, ref) => {
			const { className, children, ...restProps } = props;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledVisualLabel, {
				ref,
				...restProps,
				className: clsx("components-base-control__label", className),
				children
			});
		};
		VisualLabel = (0, import_react.forwardRef)(UnforwardedVisualLabel);
		BaseControl = Object.assign(contextConnectWithoutRef(UnconnectedBaseControl, "BaseControl"), { 
		/**
		* `BaseControl.VisualLabel` is used to render a purely visual label inside a `BaseControl` component.
		*
		* It should only be used in cases where the children being rendered inside `BaseControl` are already accessibly labeled,
		* e.g., a button, but we want an additional visual label for that section equivalent to the labels `BaseControl` would
		* otherwise use if the `label` prop was passed.
		*
		* ```jsx
		* import { BaseControl } from '@wordpress/components';
		*
		* const MyBaseControl = () => (
		* 	<BaseControl help="This button is already accessibly labeled.">
		* 		<BaseControl.VisualLabel>Author</BaseControl.VisualLabel>
		* 		<Button>Select an author</Button>
		* 	</BaseControl>
		* );
		* ```
		*/
VisualLabel });
		base_control_default = BaseControl;
	})))();
}
//#endregion
export { StyledLabel as a, StyledHelp as i, base_control_default as n, init_base_control_styles as o, init_base_control as r, BaseControl as t };
