import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module, t as decodeEntities } from "./build-module-CUTW1uKI.js";
import { n as init_select_control, t as SelectControl } from "./select-control-CRXHwQpH.js";
//#region ../packages/components/src/tree-select/index.tsx
function getSelectOptions(tree, level = 0) {
	return tree.flatMap((treeNode) => [{
		value: treeNode.id,
		label: "\xA0".repeat(level * 3) + decodeEntities(treeNode.name)
	}, ...getSelectOptions(treeNode.children || [], level + 1)]);
}
/**
* Generates a hierarchical select input.
*
* ```jsx
* import { useState } from 'react';
* import { TreeSelect } from '@wordpress/components';
*
* const MyTreeSelect = () => {
* 	const [ page, setPage ] = useState( 'p21' );
*
* 	return (
* 		<TreeSelect
* 			label="Parent page"
* 			noOptionLabel="No parent page"
* 			onChange={ ( newPage ) => setPage( newPage ) }
* 			selectedId={ page }
* 			tree={ [
* 				{
* 					name: 'Page 1',
* 					id: 'p1',
* 					children: [
* 						{ name: 'Descend 1 of page 1', id: 'p11' },
* 						{ name: 'Descend 2 of page 1', id: 'p12' },
* 					],
* 				},
* 				{
* 					name: 'Page 2',
* 					id: 'p2',
* 					children: [
* 						{
* 							name: 'Descend 1 of page 2',
* 							id: 'p21',
* 							children: [
* 								{
* 									name: 'Descend 1 of Descend 1 of page 2',
* 									id: 'p211',
* 								},
* 							],
* 						},
* 					],
* 				},
* 			] }
* 		/>
* 	);
* }
* ```
*/
function TreeSelect(props) {
	const { __nextHasNoMarginBottom: _, __next40pxDefaultSize: _next40pxDefaultSize, label, noOptionLabel, onChange, selectedId, tree = [], ...restProps } = props;
	const options = (0, import_react.useMemo)(() => {
		return [noOptionLabel && {
			value: "",
			label: noOptionLabel
		}, ...getSelectOptions(tree)].filter((option) => !!option);
	}, [noOptionLabel, tree]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl, {
		label,
		options,
		onChange,
		value: selectedId,
		...restProps
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 88,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName;
function init_tree_select() {
	return (init_tree_select = __esmMin((() => {
		init_react();
		init_build_module();
		init_select_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tree-select/index.tsx";
		try {
			TreeSelect.__docgenInfo = {
				"description": "Generates a hierarchical select input.\n\n```jsx\nimport { useState } from 'react';\nimport { TreeSelect } from '@wordpress/components';\n\nconst MyTreeSelect = () => {\n	const [ page, setPage ] = useState( 'p21' );\n\n	return (\n		<TreeSelect\n			label=\"Parent page\"\n			noOptionLabel=\"No parent page\"\n			onChange={ ( newPage ) => setPage( newPage ) }\n			selectedId={ page }\n			tree={ [\n				{\n					name: 'Page 1',\n					id: 'p1',\n					children: [\n						{ name: 'Descend 1 of page 1', id: 'p11' },\n						{ name: 'Descend 2 of page 1', id: 'p12' },\n					],\n				},\n				{\n					name: 'Page 2',\n					id: 'p2',\n					children: [\n						{\n							name: 'Descend 1 of page 2',\n							id: 'p21',\n							children: [\n								{\n									name: 'Descend 1 of Descend 1 of page 2',\n									id: 'p211',\n								},\n							],\n						},\n					],\n				},\n			] }\n		/>\n	);\n}\n```",
				"displayName": "TreeSelect",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tree-select/index.tsx",
				"methods": [],
				"props": {
					"noOptionLabel": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tree-select/types.ts",
							"name": "TreeSelectProps"
						}],
						"description": "If this property is added, an option will be added with this label to represent empty selection.",
						"name": "noOptionLabel",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/tree-select/types.ts",
							"name": "TreeSelectProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tree-select/types.ts",
							"name": "TreeSelectProps"
						}],
						"description": "A function that receives the value of the new option that is being selected as input.",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/tree-select/types.ts",
							"name": "TreeSelectProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((value: string, extra?: { event?: ChangeEvent<HTMLSelectElement, Element>; }) => void) | undefined" }
					},
					"tree": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tree-select/types.ts",
							"name": "TreeSelectProps"
						}],
						"description": "An array containing the tree objects with the possible nodes the user can select.",
						"name": "tree",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/tree-select/types.ts",
							"name": "TreeSelectProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Tree[]" }
					},
					"selectedId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tree-select/types.ts",
							"name": "TreeSelectProps"
						}],
						"description": "The id of the currently selected node.",
						"name": "selectedId",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/tree-select/types.ts",
							"name": "TreeSelectProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "As an alternative to the `options` prop, `optgroup`s and `options` can be\npassed in as `children` for more customizability.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						}],
						"description": "If this property is added, a label will be generated using label property as the content.",
						"name": "label",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"prefix": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						}],
						"description": "Renders an element on the left side of the input.\n\nBy default, the prefix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in\nthe provided `<InputControlPrefixWrapper>` component.\n\n```jsx\nimport {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlPrefixWrapper as InputControlPrefixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  prefix={<InputControlPrefixWrapper>@</InputControlPrefixWrapper>}\n/>\n```",
						"name": "prefix",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						}],
						"description": "If true, the `input` will be disabled.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"size": {
						"defaultValue": { "value": "'default'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						}],
						"description": "Adjusts the size of the input.",
						"name": "size",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Size",
							"value": [
								{ "value": "\"small\"" },
								{ "value": "\"default\"" },
								{ "value": "\"compact\"" }
							]
						}
					},
					"variant": {
						"defaultValue": { "value": "'default'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The style variant of the control.",
						"name": "variant",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"default\" | \"minimal\"",
							"value": [{ "value": "\"default\"" }, { "value": "\"minimal\"" }]
						}
					},
					"suffix": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						}],
						"description": "Renders an element on the right side of the input.\n\nBy default, the suffix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in\nthe provided `<InputControlSuffixWrapper>` component.\n\n```jsx\nimport {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlSuffixWrapper as InputControlSuffixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  suffix={<InputControlSuffixWrapper>%</InputControlSuffixWrapper>}\n/>\n```",
						"name": "suffix",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"hideLabelFromVision": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						}],
						"description": "If true, the label will only be visible to screen readers.",
						"name": "hideLabelFromVision",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"labelPosition": {
						"defaultValue": { "value": "'top'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						}],
						"description": "The position of the label.",
						"name": "labelPosition",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "LabelPosition",
							"value": [
								{ "value": "\"top\"" },
								{ "value": "\"side\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"edge\"" }
							]
						}
					},
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
					"__next36pxDefaultSize": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Deprecated. Use `__next40pxDefaultSize` instead.\n@deprecated\n@ignore",
						"name": "__next36pxDefaultSize",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__next40pxDefaultSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting into the larger default height that will become the default size in a future version.\n@deprecated Default behavior since WordPress 7.1. Prop can be safely removed.\n@ignore",
						"name": "__next40pxDefaultSize",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"options": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An array of option property objects to be rendered,\neach with a `label` and `value` property, as well as any other\n`<option>` attributes.",
						"name": "options",
						"required": false,
						"tags": {},
						"type": { "name": "readonly ({ label: string; value: string; } & Omit<OptionHTMLAttributes<HTMLOptionElement>, \"label\" | \"value\">)[]" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_tree_select as n, TreeSelect as t };
