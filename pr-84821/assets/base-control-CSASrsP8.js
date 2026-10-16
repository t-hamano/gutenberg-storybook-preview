import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { i as contextConnectWithoutRef, n as useContextSystem, o as init_context_connect, t as init_use_context_system } from "./use-context-system-BCQpAcZ4.js";
import { n as init_component, t as VisuallyHidden } from "./component-DtWxfX7z.js";
import { a as Wrapper, i as StyledVisualLabel, n as StyledHelp, o as init_base_control_styles, r as StyledLabel, t as StyledField } from "./base-control-styles-BpBSJQcA.js";
import { t as init_hooks } from "./hooks-DVyPZyaM.js";
//#region ../packages/components/src/base-control/index.tsx
var import_jsx_dev_runtime, _jsxFileName, UnconnectedBaseControl, UnforwardedVisualLabel, VisualLabel, BaseControl;
function init_base_control() {
	return (init_base_control = __esmMin((() => {
		init_clsx();
		init_react();
		init_component();
		init_base_control_styles();
		init_context_connect(), init_use_context_system();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		init_hooks();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/base-control/index.tsx";
		UnconnectedBaseControl = (props) => {
			const { id, label, hideLabelFromVision = false, help, className, children } = useContextSystem(props, "BaseControl");
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wrapper, {
				className,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledField, {
					className: "components-base-control__field",
					children: [
						label && id && (hideLabelFromVision ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, {
							as: "label",
							htmlFor: id,
							children: label
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 36,
							columnNumber: 7
						}, void 0) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledLabel, {
							className: "components-base-control__label",
							htmlFor: id,
							children: label
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 40,
							columnNumber: 7
						}, void 0)),
						label && !id && (hideLabelFromVision ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, {
							as: "label",
							children: label
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 50,
							columnNumber: 7
						}, void 0) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisualLabel, { children: label }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 52,
							columnNumber: 7
						}, void 0)),
						children
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 32,
					columnNumber: 4
				}, void 0), !!help && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledHelp, {
					id: id ? id + "__help" : void 0,
					className: "components-base-control__help",
					children: help
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 57,
					columnNumber: 5
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 31,
				columnNumber: 3
			}, void 0);
		};
		UnforwardedVisualLabel = (props, ref) => {
			const { className, children, ...restProps } = props;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledVisualLabel, {
				ref,
				...restProps,
				className: clsx("components-base-control__label", className),
				children
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 75,
				columnNumber: 3
			}, void 0);
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
		try {
			VisualLabel.__docgenInfo = {
				"description": "",
				"displayName": "VisualLabel",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/base-control/index.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The content to be displayed within the `BaseControl.VisualLabel`.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/context/wordpress-component.ts",
							"name": "TypeLiteral"
						}],
						"description": "The HTML element or React component to render the component as.",
						"name": "as",
						"required": false,
						"tags": {},
						"type": { "name": "JSXElementConstructor<any> | keyof IntrinsicElements" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			BaseControl.__docgenInfo = {
				"description": "`BaseControl` is a low-level component used to generate labels and help text for components handling user inputs.\n\n```jsx\nimport { BaseControl, useBaseControlProps } from '@wordpress/components';\n\n// Render a `BaseControl` for a textarea input\nconst MyCustomTextareaControl = ({ children, ...baseProps }) => (\n	// `useBaseControlProps` is a convenience hook to get the props for the `BaseControl`\n	// and the inner control itself. Namely, it takes care of generating a unique `id`,\n	// properly associating it with the `label` and `help` elements.\n	const { baseControlProps, controlProps } = useBaseControlProps( baseProps );\n\n	return (\n		<BaseControl { ...baseControlProps }>\n			<textarea { ...controlProps }>\n			  { children }\n			</textarea>\n		</BaseControl>\n	);\n);\n```",
				"displayName": "BaseControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/base-control/index.tsx",
				"methods": [],
				"props": {
					"__nextHasNoMarginBottom": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting into the new margin-free styles that will become the default in a future version.\n@deprecated Default behavior since WordPress 7.0. Prop can be safely removed.\n@ignore",
						"name": "__nextHasNoMarginBottom",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"id": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The HTML `id` of the control element (passed in as a child to `BaseControl`) to which labels and help text are being generated.\nThis is necessary to accessibly associate the label with that element.\n\nThe recommended way is to use the `useBaseControlProps` hook, which takes care of generating a unique `id` for you.\nOtherwise, if you choose to pass an explicit `id` to this prop, you are responsible for ensuring the uniqueness of the `id`.",
						"name": "id",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"help": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Additional description for the control.\n\nOnly use for meaningful description or instructions for the control. An element containing the description will be programmatically associated to the BaseControl by the means of an `aria-describedby` attribute.",
						"name": "help",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If this property is added, a label will be generated using label property as the content.",
						"name": "label",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"hideLabelFromVision": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If true, the label will only be visible to screen readers.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The content to be displayed within the `BaseControl`.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			BaseControl.__docgenInfo = {
				"description": "`BaseControl` is a low-level component used to generate labels and help text for components handling user inputs.\n\n```jsx\nimport { BaseControl, useBaseControlProps } from '@wordpress/components';\n\n// Render a `BaseControl` for a textarea input\nconst MyCustomTextareaControl = ({ children, ...baseProps }) => (\n	// `useBaseControlProps` is a convenience hook to get the props for the `BaseControl`\n	// and the inner control itself. Namely, it takes care of generating a unique `id`,\n	// properly associating it with the `label` and `help` elements.\n	const { baseControlProps, controlProps } = useBaseControlProps( baseProps );\n\n	return (\n		<BaseControl { ...baseControlProps }>\n			<textarea { ...controlProps }>\n			  { children }\n			</textarea>\n		</BaseControl>\n	);\n);\n```",
				"displayName": "basecontrol",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/base-control/index.tsx",
				"methods": [],
				"props": {
					"__nextHasNoMarginBottom": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting into the new margin-free styles that will become the default in a future version.\n@deprecated Default behavior since WordPress 7.0. Prop can be safely removed.\n@ignore",
						"name": "__nextHasNoMarginBottom",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"id": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The HTML `id` of the control element (passed in as a child to `BaseControl`) to which labels and help text are being generated.\nThis is necessary to accessibly associate the label with that element.\n\nThe recommended way is to use the `useBaseControlProps` hook, which takes care of generating a unique `id` for you.\nOtherwise, if you choose to pass an explicit `id` to this prop, you are responsible for ensuring the uniqueness of the `id`.",
						"name": "id",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"help": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Additional description for the control.\n\nOnly use for meaningful description or instructions for the control. An element containing the description will be programmatically associated to the BaseControl by the means of an `aria-describedby` attribute.",
						"name": "help",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If this property is added, a label will be generated using label property as the content.",
						"name": "label",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"hideLabelFromVision": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If true, the label will only be visible to screen readers.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The content to be displayed within the `BaseControl`.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_base_control as n, BaseControl as t };
