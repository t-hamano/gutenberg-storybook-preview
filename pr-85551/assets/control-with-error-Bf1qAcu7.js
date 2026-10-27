import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { i as init_mergeProps, o as mergeProps } from "./useRenderElement-Dkv6YH0v.js";
import { n as useRender, t as init_useRender } from "./useRender-JXgJ-9ZS.js";
import { n as init_stack, t as Stack } from "./stack-B_tyTWv7.js";
import { n as init_validity_indicator, t as ValidityIndicator } from "./validity-indicator-B9oYEGpm.js";
//#region ../packages/ui/src/form/primitives/control-with-error/control-with-error.tsx
function appendRequiredIndicator(label, required, markWhenOptional) {
	let suffix;
	if (required && !markWhenOptional) suffix = `(${__("Required")})`;
	else if (!required && markWhenOptional) suffix = `(${__("Optional")})`;
	if (!suffix) return label;
	if (typeof label === "string") return `${label} ${suffix}`;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		label,
		" ",
		suffix
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 40,
		columnNumber: 3
	}, this);
}
function getValidity(customValidity, validityTarget) {
	if (customValidity?.type === "validating") return customValidity;
	if (validityTarget?.validationMessage) return {
		type: "invalid",
		message: validityTarget.validationMessage
	};
	return customValidity?.type === "valid" ? customValidity : void 0;
}
function isSameValidity(a, b) {
	return a?.type === b?.type && a?.message === b?.message;
}
var import_jsx_dev_runtime, _jsxFileName, DEFAULT_RENDER, VALIDITY_VISIBLE_ATTRIBUTE, ControlWithError;
function init_control_with_error() {
	return (init_control_with_error = __esmMin((() => {
		init_mergeProps(), init_useRender();
		init_build_module();
		init_react();
		init_stack();
		init_validity_indicator();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/control-with-error/control-with-error.tsx";
		DEFAULT_RENDER = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
			...props,
			direction: "column",
			gap: "sm"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 16,
			columnNumber: 2
		}, void 0);
		VALIDITY_VISIBLE_ATTRIBUTE = "data-validity-visible";
		ControlWithError = (0, import_react.forwardRef)(function UnforwardedControlWithError({ required, markWhenOptional, customValidity, getValidityTarget, children, render = DEFAULT_RENDER, ...restProps }, forwardedRef) {
			const [validity, setValidity] = (0, import_react.useState)();
			const [showMessage, setShowMessage] = (0, import_react.useState)(false);
			const [isTouched, setIsTouched] = (0, import_react.useState)(false);
			const wrapperRef = (0, import_react.useRef)(null);
			(0, import_react.useEffect)(() => {
				const validityTarget = getValidityTarget();
				const handler = () => {
					if (customValidity?.type !== "validating") setValidity(getValidity(customValidity, validityTarget));
					setShowMessage(true);
					validityTarget?.setAttribute(VALIDITY_VISIBLE_ATTRIBUTE, "");
				};
				validityTarget?.addEventListener("invalid", handler);
				return () => validityTarget?.removeEventListener("invalid", handler);
			}, [customValidity, getValidityTarget]);
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
				validityTarget?.setCustomValidity(customValidity?.type === "invalid" ? customValidity.message ?? "" : "");
				const nextValidity = getValidity(customValidity, validityTarget);
				if (!isSameValidity(nextValidity, validity)) setValidity(nextValidity);
			});
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
					if (!isValidating) setValidity(getValidity(customValidity, validityTarget));
				});
			};
			const messageId = (0, import_react.useId)();
			const message = validity ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ValidityIndicator, {
				id: messageId,
				type: validity.type,
				message: validity.message
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 243,
				columnNumber: 3
			}, this) : null;
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
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [(0, import_react.cloneElement)(children, {
						label: appendRequiredIndicator(children.props.label, required, markWhenOptional),
						required
					}), visibleMessage] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 288,
						columnNumber: 5
					}, this)
				})
			});
		});
		try {
			ControlWithError.__docgenInfo = {
				"description": "A wrapper that adds inline validation feedback to a form control, based on\nthe native Constraint Validation API.\n\nThe wrapped control is cloned with `label` and `required` props, and the\nvalidity state is read from the element returned by `getValidityTarget`.\nValidation messages become visible once the control has been touched\n(blurred at least once), when the enclosing form is submitted, or when an\n`invalid` event is dispatched on the validity target.",
				"displayName": "ControlWithError",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/control-with-error/control-with-error.tsx",
				"methods": [],
				"props": {
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS class name to apply to the element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"render": {
						"defaultValue": { "value": "( props: React.ComponentProps< typeof Stack > ) => (\n	<Stack { ...props } direction=\"column\" gap=\"sm\" />\n)" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Replaces the component's default HTML element using a given React\nelement, or a function that returns a React element.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ComponentRenderFn<HTMLAttributesWithRef<any>> | ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>>" }
					},
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS style to apply to the element.",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"required": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/control-with-error/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the control is required.",
						"name": "required",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/control-with-error/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label the control as \"optional\" when _not_ `required`, instead of the inverse.",
						"name": "markWhenOptional",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"customValidity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/control-with-error/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Show a custom message based on the validation status.\n\n- When `type` is `invalid`, the message will be applied to the underlying element using the\nnative [`setCustomValidity()` method](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity).\nThis means the custom message will be prioritized over any existing validity messages\ntriggered by HTML attribute-based validation.\n- When `type` is `validating` or `valid`, the custom validity message of the underlying element\nwill be cleared. If there are no remaining validity messages triggered by HTML attribute-based validation,\nthe message will be presented as a status indicator rather than an error. These indicators are intended\nfor asynchronous validation calls that may take more than 1 second to complete.\nOtherwise, custom errors can simply be cleared by setting the `customValidity` prop to `undefined`.",
						"name": "customValidity",
						"required": false,
						"tags": {},
						"type": { "name": "{ type: \"invalid\" | \"validating\" | \"valid\"; message: string; }" }
					},
					"getValidityTarget": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/control-with-error/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function that returns the actual element on which the validity data should be applied.",
						"name": "getValidityTarget",
						"required": true,
						"tags": {},
						"type": { "name": "() => ValidityTarget | null | undefined" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/control-with-error/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The control component to apply validation to.\n\nAs `children` will be cloned with additional props,\nthe component at the root of `children` should accept\n`label`, `onChange`, and `required` props, and process them\nappropriately.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactElement<{ label?: ReactNode; required?: boolean | undefined; }, string | JSXElementConstructor<any>>" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_control_with_error as n, ControlWithError as t };
