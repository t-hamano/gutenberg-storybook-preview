import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react$1 } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useRenderElement, t as init_useRenderElement } from "./useRenderElement-QwAlaybP.js";
import { _ as init_constants, f as init_FieldRootContext, g as fieldValidityMapping, p as useFieldRootContext } from "./useLabelableId-DZRYsuBw.js";
import { n as init_FieldItemContext, t as FieldItemContext } from "./FieldItemContext-dWi7yUT6.js";
import { c as init_LabelableProvider, s as LabelableProvider } from "./FieldDescription-DxOxl-GC.js";
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/field/item/FieldItem.mjs
var import_react, import_jsx_runtime, FieldItem;
function init_FieldItem() {
	return (init_FieldItem = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_FieldRootContext();
		init_constants();
		init_useRenderElement();
		init_FieldItemContext();
		init_LabelableProvider();
		import_jsx_runtime = require_jsx_runtime();
		FieldItem = /*#__PURE__*/ import_react.forwardRef(function FieldItem(componentProps, forwardedRef) {
			const { render, className, style, disabled: disabledProp = false, ...elementProps } = componentProps;
			const { state: fieldState, disabled: rootDisabled } = useFieldRootContext(false);
			const disabled = rootDisabled || disabledProp;
			const state = {
				...fieldState,
				disabled
			};
			const fieldItemContext = import_react.useMemo(() => ({ disabled }), [disabled]);
			const element = useRenderElement("div", componentProps, {
				ref: forwardedRef,
				state,
				props: elementProps,
				stateAttributesMapping: fieldValidityMapping
			});
			return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(LabelableProvider, { children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FieldItemContext.Provider, {
				value: fieldItemContext,
				children: element
			}) });
		});
		FieldItem.displayName = "FieldItem";
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/field/item.tsx
var import_jsx_dev_runtime, _jsxFileName, Item;
function init_item() {
	return (init_item = __esmMin((() => {
		init_FieldItem();
		init_react();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/field/item.tsx";
		Item = (0, import_react$1.forwardRef)(function UnforwardedItem(props, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldItem, {
				ref,
				...props
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 8,
				columnNumber: 9
			}, this);
		});
		try {
			Item.__docgenInfo = {
				"description": "",
				"displayName": "Item",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/field/item.tsx",
				"methods": [],
				"props": {
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/field/item/FieldItem.d.mts",
							"name": "FieldItemProps"
						}],
						"description": "Whether the wrapped control should ignore user interaction.\nThe `disabled` prop on `<Field.Root>` takes precedence over this.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/field/item/FieldItem.d.mts",
							"name": "FieldItemProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
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
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_item as n, Item as t };
