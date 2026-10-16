import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { t as check_default } from "./check-Cpe2xAFk.js";
import { i as init_menu_item, r as MenuItem } from "./menu-group-Dt-jzg_l.js";
import { r as init_build_module } from "./library.story-CFsmdbdz.js";
//#region ../packages/components/src/menu-items-choice/index.tsx
/**
* `MenuItemsChoice` functions similarly to a set of `MenuItem`s, but allows the user to select one option from a set of multiple choices.
*
*
* ```jsx
* import { MenuGroup, MenuItemsChoice } from '@wordpress/components';
* import { useState } from '@wordpress/element';
*
* const MyMenuItemsChoice = () => {
* 	const [ mode, setMode ] = useState( 'visual' );
* 	const choices = [
* 		{
* 			value: 'visual',
* 			label: 'Visual editor',
* 		},
* 		{
* 			value: 'text',
* 			label: 'Code editor',
* 		},
* 	];
*
* 	return (
* 		<MenuGroup label="Editor">
* 			<MenuItemsChoice
* 				choices={ choices }
* 				value={ mode }
* 				onSelect={ ( newMode ) => setMode( newMode ) }
* 			/>
* 		</MenuGroup>
* 	);
* };
* ```
*/
function MenuItemsChoice({ choices = [], onHover = noop, onSelect, value }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: choices.map((item) => {
		const isSelected = value === item.value;
		return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem, {
			role: "menuitemradio",
			disabled: item.disabled,
			icon: isSelected ? check_default : null,
			info: item.info,
			isSelected,
			shortcut: item.shortcut,
			className: "components-menu-items-choice",
			onClick: () => {
				if (!isSelected) onSelect(item.value);
			},
			onMouseEnter: () => onHover(item.value),
			onMouseLeave: () => onHover(null),
			"aria-label": item["aria-label"],
			children: item.label
		}, item.value, false, {
			fileName: _jsxFileName,
			lineNumber: 51,
			columnNumber: 6
		}, this);
	}) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 47,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, noop;
function init_menu_items_choice() {
	return (init_menu_items_choice = __esmMin((() => {
		init_build_module();
		init_menu_item();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/menu-items-choice/index.tsx";
		noop = () => {};
		try {
			MenuItemsChoice.__docgenInfo = {
				"description": "`MenuItemsChoice` functions similarly to a set of `MenuItem`s, but allows the user to select one option from a set of multiple choices.\n\n\n```jsx\nimport { MenuGroup, MenuItemsChoice } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyMenuItemsChoice = () => {\n	const [ mode, setMode ] = useState( 'visual' );\n	const choices = [\n		{\n			value: 'visual',\n			label: 'Visual editor',\n		},\n		{\n			value: 'text',\n			label: 'Code editor',\n		},\n	];\n\n	return (\n		<MenuGroup label=\"Editor\">\n			<MenuItemsChoice\n				choices={ choices }\n				value={ mode }\n				onSelect={ ( newMode ) => setMode( newMode ) }\n			/>\n		</MenuGroup>\n	);\n};\n```",
				"displayName": "MenuItemsChoice",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/menu-items-choice/index.tsx",
				"methods": [],
				"props": {
					"choices": {
						"defaultValue": { "value": "[]" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/menu-items-choice/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Array of choices.",
						"name": "choices",
						"required": false,
						"tags": {},
						"type": { "name": "readonly MenuItemChoice[]" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/menu-items-choice/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Value of currently selected choice (should match a `value` property\nfrom a choice in `choices`).",
						"name": "value",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"onSelect": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/menu-items-choice/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback function to be called with the selected choice when user\nselects a new choice.",
						"name": "onSelect",
						"required": true,
						"tags": {},
						"type": { "name": "(value: string) => void" }
					},
					"onHover": {
						"defaultValue": { "value": "() => {}" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/menu-items-choice/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback function to be called with a choice when user\nhovers over a new choice (will be empty on mouse leave).",
						"name": "onHover",
						"required": false,
						"tags": {},
						"type": { "name": "(value: string | null) => void" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_menu_items_choice as n, MenuItemsChoice as t };
