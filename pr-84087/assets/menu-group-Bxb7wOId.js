import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as init_shortcut, t as Shortcut } from "./shortcut-D6ctWgOA.js";
import { n as init_icon, t as Icon } from "./icon-BPBhgF1b.js";
import { n as init_button, t as Button } from "./button-wsTfHPkm.js";
//#region ../packages/components/src/menu-item/index.tsx
function UnforwardedMenuItem(props, ref) {
	let { children, info, className, icon, iconPosition = "right", shortcut, isSelected, role = "menuitem", suffix, ...buttonProps } = props;
	className = clsx("components-menu-item__button", className);
	if (info) children = /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("span", {
		className: "components-menu-item__info-wrapper",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("span", {
			className: "components-menu-item__item",
			children
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 32,
			columnNumber: 5
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("span", {
			className: "components-menu-item__info",
			children: info
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 33,
			columnNumber: 5
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 31,
		columnNumber: 4
	}, this);
	if (icon && typeof icon !== "string") icon = (0, import_react.cloneElement)(icon, { className: clsx("components-menu-items__item-icon", { "has-icon-right": iconPosition === "right" }) });
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Button, {
		size: "compact",
		ref,
		"aria-checked": role === "menuitemcheckbox" || role === "menuitemradio" ? isSelected : void 0,
		role,
		icon: iconPosition === "left" ? icon : void 0,
		className,
		accessibleWhenDisabled: true,
		...buttonProps,
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("span", {
				className: "components-menu-item__item",
				children
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 62,
				columnNumber: 4
			}, this),
			!suffix && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Shortcut, {
				className: "components-menu-item__shortcut",
				shortcut
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 64,
				columnNumber: 5
			}, this),
			!suffix && icon && iconPosition === "right" && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Icon, { icon }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 70,
				columnNumber: 5
			}, this),
			suffix
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 47,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, MenuItem;
function init_menu_item() {
	return (init_menu_item = __esmMin((() => {
		init_clsx();
		init_react();
		init_shortcut();
		init_button();
		init_icon();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/menu-item/index.tsx";
		MenuItem = (0, import_react.forwardRef)(UnforwardedMenuItem);
		MenuItem.displayName = "MenuItem";
		try {
			MenuItem.__docgenInfo = {
				"description": "MenuItem is a component which renders a button intended to be used in combination with the `DropdownMenu` component.\n\n```jsx\nimport { MenuItem } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyMenuItem = () => {\n	const [ isActive, setIsActive ] = useState( true );\n\n	return (\n		<MenuItem\n			icon={ isActive ? 'yes' : 'no' }\n			isSelected={ isActive }\n			role=\"menuitemcheckbox\"\n			onClick={ () => setIsActive( ( state ) => ! state ) }\n		>\n			Toggle\n		</MenuItem>\n	);\n};\n```",
				"displayName": "MenuItem",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/menu-item/index.tsx",
				"methods": [],
				"props": {
					"isDestructive": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders a red text-based button style to indicate destructive behavior.",
						"name": "isDestructive",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/menu-item/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A CSS `class` to give to the container element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/menu-item/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The children elements.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"info": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/menu-item/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Text to use as description for button text.",
						"name": "info",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"icon": {
						"defaultValue": { "value": "null" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/menu-item/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The icon to render. Supported values are: Dashicons (specified as\nstrings), functions, Component instances and `null`.",
						"name": "icon",
						"required": false,
						"tags": {},
						"type": { "name": "Element | null" }
					},
					"iconPosition": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/menu-item/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines where to display the provided `icon`.",
						"name": "iconPosition",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"left\" | \"right\"",
							"value": [{ "value": "\"left\"" }, { "value": "\"right\"" }]
						}
					},
					"isSelected": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/menu-item/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether or not the menu item is currently selected, `isSelected` is only taken into\naccount when the `role` prop is either `\"menuitemcheckbox\"` or `\"menuitemradio\"`.",
						"name": "isSelected",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"shortcut": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/menu-item/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If shortcut is a string, it is expecting the display text. If shortcut is an object,\nit will accept the properties of `display` (string) and `ariaLabel` (string).",
						"name": "shortcut",
						"required": false,
						"tags": {},
						"type": { "name": "string | { display: string; ariaLabel: string; }" }
					},
					"role": {
						"defaultValue": { "value": "'menuitem'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/menu-item/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If you need to have selectable menu items use menuitemradio for single select,\nand menuitemcheckbox for multiselect.",
						"name": "role",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"suffix": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/menu-item/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Allows for markup other than icons or shortcuts to be added to the menu item.",
						"name": "suffix",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/menu-item/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Human-readable label for item.",
						"name": "label",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/menu-group/index.tsx
/**
* `MenuGroup` wraps a series of related `MenuItem` components into a common
* section.
*
* ```jsx
* import { MenuGroup, MenuItem } from '@wordpress/components';
*
* const MyMenuGroup = () => (
*   <MenuGroup label="Settings">
*     <MenuItem>Setting 1</MenuItem>
*     <MenuItem>Setting 2</MenuItem>
*   </MenuGroup>
* );
* ```
*/
function MenuGroup(props) {
	const { children, className = "", label, hideSeparator } = props;
	const instanceId = use_instance_id_default(MenuGroup);
	if (!import_react.Children.count(children)) return null;
	const labelId = `components-menu-group-label-${instanceId}`;
	const classNames = clsx(className, "components-menu-group", { "has-hidden-separator": hideSeparator });
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: classNames,
		children: [label && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "components-menu-group__label",
			id: labelId,
			"aria-hidden": "true",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 37,
			columnNumber: 5
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			role: "group",
			"aria-labelledby": label ? labelId : void 0,
			children
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 45,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 35,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName;
function init_menu_group() {
	return (init_menu_group = __esmMin((() => {
		init_clsx();
		init_react();
		init_use_instance_id();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/menu-group/index.tsx";
		try {
			MenuGroup.__docgenInfo = {
				"description": "`MenuGroup` wraps a series of related `MenuItem` components into a common\nsection.\n\n```jsx\nimport { MenuGroup, MenuItem } from '@wordpress/components';\n\nconst MyMenuGroup = () => (\n  <MenuGroup label=\"Settings\">\n    <MenuItem>Setting 1</MenuItem>\n    <MenuItem>Setting 2</MenuItem>\n  </MenuGroup>\n);\n```",
				"displayName": "MenuGroup",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/menu-group/index.tsx",
				"methods": [],
				"props": {
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/menu-group/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A CSS `class` to give to the container element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"hideSeparator": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/menu-group/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Hide the top border on the container.",
						"name": "hideSeparator",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/menu-group/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Text to be displayed as the menu group header.",
						"name": "label",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/menu-group/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The children elements.",
						"name": "children",
						"required": false,
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
export { init_menu_item as i, init_menu_group as n, MenuItem as r, MenuGroup as t };
