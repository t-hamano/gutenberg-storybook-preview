import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as init_control_with_error, t as ControlWithError } from "./control-with-error-A_nDeOHg.js";
import { n as init_input_control, t as InputControl } from "./input-control-ChmeIMFG.js";
//#region ../packages/ui/src/form/with-validation/validated-input-control/validated-input-control.tsx
var import_jsx_dev_runtime, _jsxFileName, ValidatedInputControl;
function init_validated_input_control() {
	return (init_validated_input_control = __esmMin((() => {
		init_react();
		init_use_merge_refs();
		init_control_with_error();
		init_input_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/with-validation/validated-input-control/validated-input-control.tsx";
		ValidatedInputControl = (0, import_react.forwardRef)(function UnforwardedValidatedInputControl({ required, markWhenOptional, customValidity, ...restProps }, forwardedRef) {
			const validityTargetRef = (0, import_react.useRef)(null);
			const mergedRefs = useMergeRefs([forwardedRef, validityTargetRef]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ControlWithError, {
				required,
				markWhenOptional,
				customValidity,
				getValidityTarget: () => validityTargetRef.current,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputControl, {
					ref: mergedRefs,
					...restProps
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 33,
					columnNumber: 4
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 27,
				columnNumber: 3
			}, this);
		});
		try {
			ValidatedInputControl.__docgenInfo = {
				"description": "An `InputControl` with inline validation feedback, based on the native\nConstraint Validation API.\n\nNative constraint violations (e.g. `required`, `pattern`) and custom\nvalidity messages passed through the `customValidity` prop are reported\ninline once the control has been touched (blurred at least once) or the\nenclosing form is submitted.",
				"displayName": "ValidatedInputControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/with-validation/validated-input-control/validated-input-control.tsx",
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
						"defaultValue": null,
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
					"details": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Additional information about the field, which unlike a normal description,\ncan include links and other semantic elements.\n\nDo not use this prop when the content is only plain text;\nuse `description` instead.",
						"name": "details",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The accessible label. All controls must be labeled.",
						"name": "label",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"defaultValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/input/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The default value to use in uncontrolled mode.",
						"name": "defaultValue",
						"required": false,
						"tags": {},
						"type": { "name": "string | number | readonly string[]" }
					},
					"prefix": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/input-layout/types.ts",
							"name": "InputLayoutProps"
						}],
						"description": "Element to render before the input.",
						"name": "prefix",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/input-layout/types.ts",
							"name": "InputLayoutProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/input/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the field is disabled.",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/input/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The value to use in controlled mode.",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "string | number | readonly string[]" }
					},
					"onValueChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/input/Input.d.mts",
							"name": "InputProps"
						}],
						"description": "Callback fired when the `value` changes. Use when controlled.",
						"name": "onValueChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/input/Input.d.mts",
							"name": "InputProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((value: string, eventDetails: { reason: \"none\"; event: Event; cancel: () => void; allowPropagation: () => void; isCanceled: boolean; isPropagationAllowed: boolean; trigger: Element; }) => void)" }
					},
					"size": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/input/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The size of the field.",
						"name": "size",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"default\" | \"compact\"",
							"value": [{ "value": "\"default\"" }, { "value": "\"compact\"" }]
						}
					},
					"type": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/input/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The type of the input element.",
						"name": "type",
						"required": false,
						"tags": {},
						"type": { "name": "HTMLInputTypeAttribute" }
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
					"suffix": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/input-layout/types.ts",
							"name": "InputLayoutProps"
						}],
						"description": "Element to render after the input.",
						"name": "suffix",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/input-layout/types.ts",
							"name": "InputLayoutProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"description": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The accessible description, associated using `aria-describedby`.\n\nFor screen reader accessibility, this should only contain plain text,\nand no semantics such as links.",
						"name": "description",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"hideLabelFromVision": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to visually hide the label while keeping it accessible\nto screen readers.",
						"name": "hideLabelFromVision",
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
export { init_validated_input_control as n, ValidatedInputControl as t };
