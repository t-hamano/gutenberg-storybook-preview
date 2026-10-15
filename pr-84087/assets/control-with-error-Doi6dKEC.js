import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { a as mergeProps, r as init_mergeProps } from "./useRenderElement-QwAlaybP.js";
import { n as useRender, t as init_useRender } from "./useRender-CcjNad8x.js";
import { n as init_spinner, t as Spinner } from "./spinner-BFdni8Vh.js";
import { n as init_icon, t as Icon } from "./icon-TYj7I5OY.js";
import { n as published_default, r as error_default } from "./published-BuOJO-QD.js";
import { n as init_stack, t as Stack } from "./stack-DCjz3kq7.js";
import { r as init_build_module$1 } from "./library.story-DawnfKTW.js";
//#region ../packages/ui/build-module/form/primitives/validity-indicator/validity-indicator.mjs
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
function ValidityIndicator({ id, type, message }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("p", {
		id,
		className: clsx(global_css_defense_default.p, style_default.indicator, style_default[`is-${type}`]),
		children: [type === "validating" ? /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Spinner, { className: style_default["indicator-spinner"] }) : /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Icon, {
			className: style_default["indicator-icon"],
			icon: ICON[type],
			size: 16,
			fill: "currentColor"
		}), message]
	});
}
var import_jsx_runtime$1, STYLE_HASH_ATTRIBUTE, global_css_defense_default, style_default, ICON;
function init_validity_indicator() {
	return (init_validity_indicator = __esmMin((() => {
		init_clsx();
		init_build_module$1();
		init_icon();
		init_spinner();
		import_jsx_runtime$1 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("e8e31009f5", "._6defc79820e382c6__button{box-sizing:var(--_gcd-button-box-sizing,border-box);font-family:var(--_gcd-button-font-family,inherit);font-size:var(--_gcd-button-font-size,inherit);font-weight:var(--_gcd-button-font-weight,inherit)}.d2cff2e5dea83bd1__input{box-sizing:var(--_gcd-input-box-sizing,border-box);font-family:var(--_gcd-input-font-family,inherit);font-size:var(--_gcd-input-font-size,inherit);font-weight:var(--_gcd-input-font-weight,inherit);margin:var(--_gcd-input-margin,0);&::placeholder{color:var(--_gcd-input-placeholder-color,var(--wpds-color-foreground-interactive-neutral-weak,#707070))}&:is(textarea,[type=text],[type=password],[type=color],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){background-color:var(--_gcd-input-background-color,transparent);border:var(--_gcd-input-border,none);border-radius:var(--_gcd-input-border-radius,0);box-shadow:var(--_gcd-input-box-shadow,0 0 0 transparent);color:var(--_gcd-input-color,var(--wpds-color-foreground-interactive-neutral,#1e1e1e));&:focus{border-color:var(--_gcd-input-border-color-focus,var(--wp-admin-theme-color));box-shadow:var(--_gcd-input-box-shadow-focus,none);outline:var(--_gcd-input-outline-focus,none)}&:disabled{background:var(--_gcd-input-background-disabled,transparent);border-color:var(--_gcd-input-border-color-disabled,transparent);box-shadow:var(--_gcd-input-box-shadow-disabled,none);color:var(--_gcd-input-color-disabled,var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d))}}&:is(textarea,[type=text],[type=password],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){line-height:var(--_gcd-input-line-height,inherit);min-height:var(--_gcd-input-min-height,auto);padding:var(--_gcd-input-padding,0)}}._547d86373d02e108__textarea{box-sizing:var(--_gcd-textarea-box-sizing,border-box);overflow:var(--_gcd-textarea-overflow,auto);resize:var(--_gcd-textarea-resize,block)}._8c15fd0ed9f28ba4__div{outline:var(--_gcd-div-outline,0 solid transparent)}p._43cec3e1eec1066d__p{font-size:var(--_gcd-p-font-size,13px);line-height:var(--_gcd-p-line-height,1.5);margin:var(--_gcd-p-margin,0)}:is(h1,h2,h3,h4,h5,h6).e97669c6d9a38497__heading{color:var(--_gcd-heading-color,var(--wpds-color-foreground-content-neutral,#1e1e1e));font-size:var(--_gcd-heading-font-size,inherit);font-weight:var(--_gcd-heading-font-weight,var(--wpds-typography-font-weight-emphasis,600));margin:var(--_gcd-heading-margin,0)}._2c0831b0499dbd6e__a,._2c0831b0499dbd6e__a:is(:hover,:focus,:active){border-radius:var(--_gcd-a-border-radius,0);box-shadow:var(--_gcd-a-box-shadow,none);color:var(--_gcd-a-color,inherit);outline:var(--_gcd-a-outline,0 solid transparent);transition:var(--_gcd-a-transition,none)}.c59a0ebebd71fa4a__ol{list-style:var(--_gcd-ol-list-style,none);margin:var(--_gcd-ol-margin,0);padding-block:var(--_gcd-ol-padding-block,0);padding-inline:var(--_gcd-ol-padding-inline,0)}._46b5cb0c8e24e8c9__li{margin:var(--_gcd-li-margin,0)}");
		global_css_defense_default = {
			"button": "_6defc79820e382c6__button",
			"input": "d2cff2e5dea83bd1__input",
			"textarea": "_547d86373d02e108__textarea",
			"div": "_8c15fd0ed9f28ba4__div",
			"p": "_43cec3e1eec1066d__p",
			"heading": "e97669c6d9a38497__heading",
			"a": "_2c0831b0499dbd6e__a",
			"ol": "c59a0ebebd71fa4a__ol",
			"li": "_46b5cb0c8e24e8c9__li"
		};
		if (typeof process === "undefined" || false) registerStyle("d11816833c", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{._7a7ac88e306348e7__indicator{--_gcd-p-font-size:var(--wpds-typography-font-size-sm,12px);--_gcd-p-line-height:var(--wpds-typography-line-height-xs,16px);align-items:flex-start;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-sm,12px);gap:var(--wpds-dimension-gap-xs,4px);line-height:var(--wpds-typography-line-height-xs,16px);@media not (prefers-reduced-motion){animation:_48722cc5dd090ce4__indicator-jump var(--wpds-motion-duration-md,.2s) cubic-bezier(.68,-.55,.27,1.55)}}._57a3bbbfbe38a5c6__is-invalid{color:var(--wpds-color-foreground-content-error-weak,#cc1818)}._9e944dc198aac10b__is-valid{color:var(--wpds-color-foreground-content-success-weak,#008030)}.e482806667437c6a__indicator-icon{flex-shrink:0}._6e46434cc23019d2__indicator-spinner{height:var(--wpds-dimension-size-3xs,12px);margin:2px;width:var(--wpds-dimension-size-3xs,12px)}@keyframes _48722cc5dd090ce4__indicator-jump{0%{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}}}");
		style_default = {
			"indicator": "_7a7ac88e306348e7__indicator",
			"indicator-jump": "_48722cc5dd090ce4__indicator-jump",
			"is-invalid": "_57a3bbbfbe38a5c6__is-invalid",
			"is-valid": "_9e944dc198aac10b__is-valid",
			"indicator-icon": "e482806667437c6a__indicator-icon",
			"indicator-spinner": "_6e46434cc23019d2__indicator-spinner"
		};
		ICON = {
			valid: published_default,
			invalid: error_default
		};
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/primitives/control-with-error/control-with-error.mjs
function appendRequiredIndicator(label, required, markWhenOptional) {
	let suffix;
	if (required && !markWhenOptional) suffix = `(${__("Required")})`;
	else if (!required && markWhenOptional) suffix = `(${__("Optional")})`;
	if (!suffix) return label;
	if (typeof label === "string") return `${label} ${suffix}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		label,
		" ",
		suffix
	] });
}
var import_jsx_runtime, DEFAULT_RENDER, VALIDITY_VISIBLE_ATTRIBUTE, ControlWithError;
function init_control_with_error() {
	return (init_control_with_error = __esmMin((() => {
		init_mergeProps(), init_useRender();
		init_build_module();
		init_react();
		init_stack();
		init_validity_indicator();
		import_jsx_runtime = require_jsx_runtime();
		DEFAULT_RENDER = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, {
			...props,
			direction: "column",
			gap: "sm"
		});
		VALIDITY_VISIBLE_ATTRIBUTE = "data-validity-visible";
		ControlWithError = (0, import_react.forwardRef)(function UnforwardedControlWithError({ required, markWhenOptional, customValidity, getValidityTarget, children, render = DEFAULT_RENDER, ...restProps }, forwardedRef) {
			const [errorMessage, setErrorMessage] = (0, import_react.useState)();
			const [statusMessage, setStatusMessage] = (0, import_react.useState)();
			const [showMessage, setShowMessage] = (0, import_react.useState)(false);
			const [isTouched, setIsTouched] = (0, import_react.useState)(false);
			const wrapperRef = (0, import_react.useRef)(null);
			(0, import_react.useEffect)(() => {
				const validityTarget = getValidityTarget();
				const handler = () => {
					if (customValidity?.type !== "validating") setErrorMessage(validityTarget?.validationMessage);
					setShowMessage(true);
					validityTarget?.setAttribute(VALIDITY_VISIBLE_ATTRIBUTE, "");
				};
				validityTarget?.addEventListener("invalid", handler);
				return () => validityTarget?.removeEventListener("invalid", handler);
			}, [customValidity?.type, getValidityTarget]);
			(0, import_react.useEffect)(() => {
				const validityTarget = getValidityTarget();
				const suppressNativePopover = (event) => {
					event.preventDefault();
					if (!event.isTrusted) return;
					const target = event.target;
					const firstErrorInForm = Array.from(target.form?.elements ?? []).find((el) => !el.validity.valid);
					if (!target.form || firstErrorInForm === target) target.focus();
				};
				const radioSiblings = validityTarget?.type === "radio" && validityTarget?.name ? Array.from(wrapperRef.current?.querySelectorAll(`input[type="radio"][name="${validityTarget?.name}"]`) ?? []).filter((sibling) => sibling !== validityTarget) : [];
				validityTarget?.addEventListener("invalid", suppressNativePopover);
				radioSiblings.forEach((sibling) => sibling.addEventListener("invalid", suppressNativePopover));
				return () => {
					validityTarget?.removeEventListener("invalid", suppressNativePopover);
					radioSiblings.forEach((sibling) => sibling.removeEventListener("invalid", suppressNativePopover));
				};
			}, [getValidityTarget]);
			(0, import_react.useEffect)(() => {
				const validityTarget = getValidityTarget();
				if (!customValidity?.type) {
					validityTarget?.setCustomValidity("");
					setErrorMessage(validityTarget?.validationMessage);
					setStatusMessage(void 0);
					return;
				}
				switch (customValidity.type) {
					case "validating":
						validityTarget?.setCustomValidity("");
						setErrorMessage(void 0);
						setStatusMessage({
							type: "validating",
							message: customValidity.message
						});
						break;
					case "valid":
						validityTarget?.setCustomValidity("");
						setErrorMessage(validityTarget?.validationMessage);
						setStatusMessage({
							type: "valid",
							message: customValidity.message
						});
						break;
					case "invalid":
						validityTarget?.setCustomValidity(customValidity.message ?? "");
						setErrorMessage(validityTarget?.validationMessage);
						setStatusMessage(void 0);
				}
			}, [customValidity, getValidityTarget]);
			(0, import_react.useEffect)(() => {
				if (!isTouched || showMessage) return;
				if (customValidity?.type === "validating") {
					const timer = setTimeout(() => {
						setShowMessage(true);
					}, 1e3);
					return () => clearTimeout(timer);
				}
				setShowMessage(true);
			}, [
				isTouched,
				customValidity?.type,
				showMessage
			]);
			const onBlur = (event) => {
				if (event.relatedTarget && event.currentTarget.contains(event.relatedTarget)) return;
				if (!isTouched) {
					setIsTouched(true);
					getValidityTarget()?.setAttribute(VALIDITY_VISIBLE_ATTRIBUTE, "");
				}
				const validityTarget = getValidityTarget();
				const isValidating = customValidity?.type === "validating";
				window.queueMicrotask(() => {
					if (!isValidating) setErrorMessage(validityTarget?.validationMessage);
				});
			};
			const messageId = (0, import_react.useId)();
			const message = (() => {
				if (errorMessage) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValidityIndicator, {
					id: messageId,
					type: "invalid",
					message: errorMessage
				});
				if (statusMessage?.type) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValidityIndicator, {
					id: messageId,
					type: statusMessage.type,
					message: statusMessage.message
				});
				return null;
			})();
			const visibleMessage = showMessage ? message : null;
			(0, import_react.useEffect)(() => {
				const target = getValidityTarget();
				if (!target) return;
				function setDescribedBy(el, shouldAdd) {
					const ids = (el.getAttribute("aria-describedby") ?? "").split(" ").filter((id) => id && id !== messageId);
					if (shouldAdd) ids.push(messageId);
					if (ids.length) el.setAttribute("aria-describedby", ids.join(" "));
					else el.removeAttribute("aria-describedby");
				}
				setDescribedBy(target, !!visibleMessage);
				return () => setDescribedBy(target, false);
			}, [
				visibleMessage,
				messageId,
				getValidityTarget
			]);
			return useRender({
				render,
				ref: [forwardedRef, wrapperRef],
				props: mergeProps(restProps, {
					onBlur,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_react.cloneElement)(children, {
						label: appendRequiredIndicator(children.props.label, required, markWhenOptional),
						required
					}), visibleMessage] })
				})
			});
		});
	})))();
}
//#endregion
export { init_validity_indicator as i, init_control_with_error as n, ValidityIndicator as r, ControlWithError as t };
