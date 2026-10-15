import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as init_separator, t as Separator } from "./separator-CoDgWKl4.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-D7pcITcN.js";
import { n as space, t as init_space } from "./space-BUoQC8K7.js";
//#region ../packages/components/src/divider/style.module.scss
var divider, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		divider = "_divider_1qbzt_1";
		style_module_default = { divider };
	})))();
}
//#endregion
//#region ../packages/components/src/divider/component.tsx
function UnconnectedDivider(props, forwardedRef) {
	const { className, margin, marginEnd, marginStart, style, ...contextProps } = useContextSystem(props, "Divider");
	const dividerStyle = { ...style };
	const resolvedMarginStart = space(marginStart ?? margin);
	const resolvedMarginEnd = space(marginEnd ?? margin);
	if (resolvedMarginStart) dividerStyle["--wp-components-divider-margin-start"] = resolvedMarginStart;
	if (resolvedMarginEnd) dividerStyle["--wp-components-divider-margin-end"] = resolvedMarginEnd;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, {
		className: clsx(style_module_default.divider, className),
		style: dividerStyle,
		...contextProps,
		ref: forwardedRef
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 38,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, Divider;
function init_component() {
	return (init_component = __esmMin((() => {
		init_separator();
		init_clsx();
		init_context_connect(), init_use_context_system();
		init_space();
		init_style_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/divider/component.tsx";
		Divider = contextConnect(UnconnectedDivider, "Divider");
		try {
			UnconnectedDivider.__docgenInfo = {
				"description": "",
				"displayName": "UnconnectedDivider",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/divider/component.tsx",
				"methods": [],
				"props": {
					"wrapElement": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@ariakit/react-utils@0.2.7-w6BBn4LVqMPN0vaiP2Jw4Q/node_modules/@ariakit/react-utils/dist/index.d.ts",
							"name": "Options"
						}],
						"description": "",
						"name": "wrapElement",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@ariakit/react-utils@0.2.7-w6BBn4LVqMPN0vaiP2Jw4Q/node_modules/@ariakit/react-utils/dist/index.d.ts",
							"name": "Options"
						},
						"required": false,
						"tags": {},
						"type": { "name": "WrapElement" }
					},
					"margin": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/divider/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts all margins on the inline dimension.\n\nCan either be a number (which will act as a multiplier to the library's grid system base of 4px),\nor a literal CSS value string.",
						"name": "margin",
						"required": false,
						"tags": {},
						"type": { "name": "SpaceInput" }
					},
					"marginEnd": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/divider/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts the inline-end margin.\n\nCan either be a number (which will act as a multiplier to the library's grid system base of 4px),\nor a literal CSS value string.",
						"name": "marginEnd",
						"required": false,
						"tags": {},
						"type": { "name": "SpaceInput" }
					},
					"marginStart": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/divider/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts the inline-start margin.\n\nCan either be a number (which will act as a multiplier to the library's grid system base of 4px),\nor a literal CSS value string.",
						"name": "marginStart",
						"required": false,
						"tags": {},
						"type": { "name": "SpaceInput" }
					},
					"orientation": {
						"defaultValue": { "value": "'horizontal'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/divider/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Divider's orientation. When using inside a flex container, you may need\nto make sure the divider is `stretch` aligned in order for it to be\nvisible.",
						"name": "orientation",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"horizontal\" | \"vertical\"",
							"value": [{ "value": "\"horizontal\"" }, { "value": "\"vertical\"" }]
						}
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Divider.__docgenInfo = {
				"description": "`Divider` is a layout component that separates groups of related content.\n\n```js\nimport {\n		__experimentalDivider as Divider,\n		__experimentalText as Text,\n		__experimentalVStack as VStack,\n} from `@wordpress/components`;\n\nfunction Example() {\n	return (\n		<VStack spacing={4}>\n			<Text>Some text here</Text>\n			<Divider />\n			<Text>Some more text here</Text>\n		</VStack>\n	);\n}\n```",
				"displayName": "Divider",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/divider/component.tsx",
				"methods": [],
				"props": {
					"wrapElement": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@ariakit/react-utils@0.2.7-w6BBn4LVqMPN0vaiP2Jw4Q/node_modules/@ariakit/react-utils/dist/index.d.ts",
							"name": "Options"
						}],
						"description": "",
						"name": "wrapElement",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@ariakit/react-utils@0.2.7-w6BBn4LVqMPN0vaiP2Jw4Q/node_modules/@ariakit/react-utils/dist/index.d.ts",
							"name": "Options"
						},
						"required": false,
						"tags": {},
						"type": { "name": "WrapElement" }
					},
					"margin": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/divider/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts all margins on the inline dimension.\n\nCan either be a number (which will act as a multiplier to the library's grid system base of 4px),\nor a literal CSS value string.",
						"name": "margin",
						"required": false,
						"tags": {},
						"type": { "name": "SpaceInput" }
					},
					"marginEnd": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/divider/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts the inline-end margin.\n\nCan either be a number (which will act as a multiplier to the library's grid system base of 4px),\nor a literal CSS value string.",
						"name": "marginEnd",
						"required": false,
						"tags": {},
						"type": { "name": "SpaceInput" }
					},
					"marginStart": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/divider/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts the inline-start margin.\n\nCan either be a number (which will act as a multiplier to the library's grid system base of 4px),\nor a literal CSS value string.",
						"name": "marginStart",
						"required": false,
						"tags": {},
						"type": { "name": "SpaceInput" }
					},
					"orientation": {
						"defaultValue": { "value": "'horizontal'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/divider/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Divider's orientation. When using inside a flex container, you may need\nto make sure the divider is `stretch` aligned in order for it to be\nvisible.",
						"name": "orientation",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"horizontal\" | \"vertical\"",
							"value": [{ "value": "\"horizontal\"" }, { "value": "\"vertical\"" }]
						}
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { UnconnectedDivider as n, init_component as r, Divider as t };
