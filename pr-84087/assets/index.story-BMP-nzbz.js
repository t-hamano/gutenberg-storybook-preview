import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { o as isRTL, t as init_build_module$1 } from "./build-module-v04us4E2.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { a as align_center_default, r as align_left_default, t as align_right_default } from "./align-right-B7M2C4Zv.js";
import { t as arrow_down_default } from "./arrow-down-i80sQXns.js";
import { r as arrow_left_default, t as arrow_right_default } from "./arrow-right-DBu-Qg9j.js";
import { t as arrow_up_default } from "./arrow-up-DuHorBlC.js";
import { t as chevron_down_default } from "./chevron-down-BHqt2Nym.js";
import { t as code_default } from "./code-BRFAlGAz.js";
import { r as format_bold_default, t as format_italic_default } from "./format-italic-BcFPHzAr.js";
import { t as format_strikethrough_default } from "./format-strikethrough-Dzkinwrs.js";
import { n as inline_image_default } from "./inline-image-Qs-egWcC.js";
import { n as link_default } from "./link-Dzvan7Nf.js";
import { n as more_default } from "./more-6oYR2p9z.js";
import { n as paragraph_default } from "./paragraph-CDUMjqOy.js";
import { n as warning, t as init_build_module$2 } from "./build-module-B5spW8IS.js";
import { n as init_toolbar_item$1, t as ToolbarItem$1 } from "./toolbar-item-BOrkHcpg.js";
import { i as useToolbarStore, n as init_toolbar$1, r as init_toolbar_store, t as Toolbar$1 } from "./toolbar-B7tjha2y.js";
import { c as init_context_system_provider, s as ContextSystemProvider } from "./use-context-system-D7pcITcN.js";
import { n as init_button, t as Button } from "./button-wsTfHPkm.js";
import { n as init_dropdown_menu, t as DropdownMenu } from "./dropdown-menu-DSYKzjsW.js";
import { r as init_build_module$3 } from "./library.story-DawnfKTW.js";
//#region ../packages/components/src/toolbar/toolbar-context/index.ts
var ToolbarContext;
function init_toolbar_context() {
	return (init_toolbar_context = __esmMin((() => {
		init_react();
		ToolbarContext = (0, import_react.createContext)(void 0);
		ToolbarContext.displayName = "ToolbarContext";
	})))();
}
//#endregion
//#region ../packages/components/src/toolbar/toolbar-item/index.tsx
function UnforwardedToolbarItem({ children, as: Component, ...props }, ref) {
	const accessibleToolbarStore = (0, import_react.useContext)(ToolbarContext);
	const isRenderProp = typeof children === "function";
	if (!isRenderProp && !Component) {
		warning("`ToolbarItem` is a generic headless component. You must pass either a `children` prop as a function or an `as` prop as a component. See https://developer.wordpress.org/block-editor/components/toolbar-item/");
		return null;
	}
	const allProps = {
		...props,
		ref,
		"data-toolbar-item": true
	};
	if (!accessibleToolbarStore) {
		if (Component) return /* @__PURE__ */ (0, import_jsx_dev_runtime$9.jsxDEV)(Component, {
			...allProps,
			children
		}, void 0, false, {
			fileName: _jsxFileName$9,
			lineNumber: 27,
			columnNumber: 11
		}, this);
		if (!isRenderProp) return null;
		return children(allProps);
	}
	const render = isRenderProp ? children : Component && /* @__PURE__ */ (0, import_jsx_dev_runtime$9.jsxDEV)(Component, { children }, void 0, false, {
		fileName: _jsxFileName$9,
		lineNumber: 37,
		columnNumber: 18
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$9.jsxDEV)(ToolbarItem$1, {
		accessibleWhenDisabled: true,
		...allProps,
		store: accessibleToolbarStore,
		render
	}, void 0, false, {
		fileName: _jsxFileName$9,
		lineNumber: 40,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$9, _jsxFileName$9, ToolbarItem;
function init_toolbar_item() {
	return (init_toolbar_item = __esmMin((() => {
		init_toolbar_item$1();
		init_react();
		init_build_module$2();
		init_toolbar_context();
		import_jsx_dev_runtime$9 = require_jsx_dev_runtime();
		_jsxFileName$9 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-item/index.tsx";
		ToolbarItem = (0, import_react.forwardRef)(UnforwardedToolbarItem);
		ToolbarItem.displayName = "ToolbarItem";
		try {
			ToolbarItem.__docgenInfo = {
				"description": "",
				"displayName": "ToolbarItem",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-item/index.tsx",
				"methods": [],
				"props": {
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-item/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Component type that will be used to render the toolbar item.",
						"name": "as",
						"required": false,
						"tags": {},
						"type": { "name": "ElementType" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-item/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function that receives the props that should be spread onto the element\nthat will be rendered as a toolbar item. If the `as` prop is not provided,\nthis prop will accept a ReactNode instead.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode | ((props: HTMLAttributes<any> & RefAttributes<any>) => ReactElement<unknown, string | JSXElementConstructor<any>> | null)" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/toolbar/toolbar-button/toolbar-button-container.tsx
var import_jsx_dev_runtime$8, _jsxFileName$8, ToolbarButtonContainer;
function init_toolbar_button_container() {
	return (init_toolbar_button_container = __esmMin((() => {
		import_jsx_dev_runtime$8 = require_jsx_dev_runtime();
		_jsxFileName$8 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-button/toolbar-button-container.tsx";
		ToolbarButtonContainer = ({ children, className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)("div", {
			className,
			children
		}, void 0, false, {
			fileName: _jsxFileName$8,
			lineNumber: 7,
			columnNumber: 2
		}, void 0);
		try {
			ToolbarButtonContainer.__docgenInfo = {
				"description": "",
				"displayName": "toolbarbuttoncontainer",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-button/toolbar-button-container.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Children to be rendered inside the button container.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An optional class name for the button container.",
						"name": "className",
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
//#region ../packages/components/src/toolbar/toolbar-button/index.tsx
function useDeprecatedProps({ isDisabled, ...otherProps }) {
	return {
		disabled: isDisabled,
		...otherProps
	};
}
function UnforwardedToolbarButton(props, ref) {
	const { children, className, containerClassName, extraProps, isActive, title, ...restProps } = useDeprecatedProps(props);
	if (!(0, import_react.useContext)(ToolbarContext)) return /* @__PURE__ */ (0, import_jsx_dev_runtime$7.jsxDEV)(ToolbarButtonContainer, {
		className: containerClassName,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$7.jsxDEV)(Button, {
			ref,
			icon: restProps.icon,
			size: "compact",
			label: title,
			shortcut: restProps.shortcut,
			"data-subscript": restProps.subscript,
			onClick: (event) => {
				event.stopPropagation();
				if (restProps.onClick) restProps.onClick(event);
			},
			className: clsx("components-toolbar__control", className),
			isPressed: isActive,
			accessibleWhenDisabled: true,
			"data-toolbar-item": true,
			...extraProps,
			...restProps,
			children
		}, void 0, false, {
			fileName: _jsxFileName$7,
			lineNumber: 43,
			columnNumber: 5
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$7,
		lineNumber: 42,
		columnNumber: 4
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$7.jsxDEV)(ToolbarItem, {
		className: clsx("components-toolbar-button", className),
		...extraProps,
		...restProps,
		ref,
		children: (toolbarItemProps) => /* @__PURE__ */ (0, import_jsx_dev_runtime$7.jsxDEV)(Button, {
			size: "compact",
			label: title,
			isPressed: isActive,
			...toolbarItemProps,
			children
		}, void 0, false, {
			fileName: _jsxFileName$7,
			lineNumber: 89,
			columnNumber: 5
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$7,
		lineNumber: 82,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$7, _jsxFileName$7, ToolbarButton;
function init_toolbar_button() {
	return (init_toolbar_button = __esmMin((() => {
		init_clsx();
		init_react();
		init_button();
		init_toolbar_item();
		init_toolbar_context();
		init_toolbar_button_container();
		import_jsx_dev_runtime$7 = require_jsx_dev_runtime();
		_jsxFileName$7 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-button/index.tsx";
		ToolbarButton = (0, import_react.forwardRef)(UnforwardedToolbarButton);
		ToolbarButton.displayName = "ToolbarButton";
		try {
			ToolbarButton.__docgenInfo = {
				"description": "ToolbarButton can be used to add actions to a toolbar, usually inside a Toolbar\nor ToolbarGroup when used to create general interfaces.\n\n```jsx\nimport { Toolbar, ToolbarButton } from '@wordpress/components';\nimport { pencil } from '@wordpress/icons';\n\nfunction MyToolbar() {\n  return (\n	<Toolbar label=\"Options\">\n		<ToolbarButton\n			icon={ pencil }\n			label=\"Edit\"\n			onClick={ () => alert( 'Editing' ) }\n		/>\n	</Toolbar>\n  );\n}\n```",
				"displayName": "ToolbarButton",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-button/index.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Children to be rendered inside the button.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Sets the `aria-label` of the component, if none is provided.\nSets the Tooltip content if `showTooltip` is provided.",
						"name": "label",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"title": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An optional title/label for the button.",
						"name": "title",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"text": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided, displays the given text inside the button. If the button contains children elements, the text is displayed before them.",
						"name": "text",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the button is disabled. If `true`, this will force a `button` element\nto be rendered, even when an `href` is given.\n\nIn most cases, it is recommended to also set the `accessibleWhenDisabled` prop to `true`.",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"size": {
						"defaultValue": { "value": "'default'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The size of the button.\n\n- `'default'`: For normal text-label buttons, unless it is a toggle button.\n- `'compact'`: For toggle buttons, icon buttons, and buttons when used in context of either.\n- `'small'`: For icon buttons associated with more advanced or auxiliary features.\n\nIf the deprecated `isSmall` prop is also defined, this prop will take precedence.",
						"name": "size",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"small\" | \"default\" | \"compact\"",
							"value": [
								{ "value": "\"small\"" },
								{ "value": "\"default\"" },
								{ "value": "\"compact\"" }
							]
						}
					},
					"variant": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Specifies the button's style.\n\nThe accepted values are:\n\n1. `'primary'` (the primary button styles)\n2. `'secondary'` (the default button styles)\n3. `'tertiary'` (the text-based button styles)\n4. `'link'` (the link button styles)",
						"name": "variant",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"link\" | \"primary\" | \"secondary\" | \"tertiary\"",
							"value": [
								{ "value": "\"link\"" },
								{ "value": "\"primary\"" },
								{ "value": "\"secondary\"" },
								{ "value": "\"tertiary\"" }
							]
						}
					},
					"description": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A visually hidden accessible description for the button.",
						"name": "description",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"isDisabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Indicates if the button is disabled.\n@deprecated Use `disabled` instead.\n@ignore",
						"name": "isDisabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"icon": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided, renders an Icon component inside the button.",
						"name": "icon",
						"required": false,
						"tags": {},
						"type": { "name": "IconType | null" }
					},
					"shortcut": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided with `showTooltip`, appends the Shortcut label to the tooltip content.\nIf an object is provided, it should contain `display` and `ariaLabel` keys.",
						"name": "shortcut",
						"required": false,
						"tags": {},
						"type": { "name": "string | { display: string; ariaLabel: string; }" }
					},
					"__next40pxDefaultSize": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting into the larger default height that will become the\ndefault size in a future version.",
						"name": "__next40pxDefaultSize",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"describedBy": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A visually hidden accessible description for the button.\n@deprecated Use the `description` prop instead.\n@ignore",
						"name": "describedBy",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"isPressed": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders a pressed button style.",
						"name": "isPressed",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"iconPosition": {
						"defaultValue": { "value": "'left'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided with `icon`, sets the position of icon relative to the `text`.",
						"name": "iconPosition",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"left\" | \"right\"",
							"value": [{ "value": "\"left\"" }, { "value": "\"right\"" }]
						}
					},
					"iconSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided with `icon`, sets the icon size.\nPlease refer to the Icon component for more details regarding\nthe default value of its `size` prop.",
						"name": "iconSize",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"isBusy": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Indicates activity while a action is being performed.",
						"name": "isBusy",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isDestructive": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders a red text-based button style to indicate destructive behavior.",
						"name": "isDestructive",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"showTooltip": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided, renders a Tooltip component for the button.",
						"name": "showTooltip",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"tooltipPosition": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided with `showTooltip`, sets the position of the tooltip.\nPlease refer to the Tooltip component for more details regarding the defaults.",
						"name": "tooltipPosition",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"top left\" | \"top right\" | \"middle left\" | \"middle right\" | \"bottom left\" | \"bottom right\" | \"top center\" | \"bottom center\" | PositionYAxis | \"middle center\" | ... 36 more ...",
							"value": [
								{ "value": "\"top\"" },
								{ "value": "\"middle\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"top left\"" },
								{ "value": "\"top right\"" },
								{ "value": "\"middle left\"" },
								{ "value": "\"middle right\"" },
								{ "value": "\"bottom left\"" },
								{ "value": "\"bottom right\"" },
								{ "value": "\"top center\"" },
								{ "value": "\"bottom center\"" },
								{ "value": "\"middle center\"" },
								{ "value": "\"top center left\"" },
								{ "value": "\"top center right\"" },
								{ "value": "\"top center top\"" },
								{ "value": "\"top center bottom\"" },
								{ "value": "\"top left left\"" },
								{ "value": "\"top left right\"" },
								{ "value": "\"top left top\"" },
								{ "value": "\"top left bottom\"" },
								{ "value": "\"top right left\"" },
								{ "value": "\"top right right\"" },
								{ "value": "\"top right top\"" },
								{ "value": "\"top right bottom\"" },
								{ "value": "\"middle center left\"" },
								{ "value": "\"middle center right\"" },
								{ "value": "\"middle center top\"" },
								{ "value": "\"middle center bottom\"" },
								{ "value": "\"middle left left\"" },
								{ "value": "\"middle left right\"" },
								{ "value": "\"middle left top\"" },
								{ "value": "\"middle left bottom\"" },
								{ "value": "\"middle right left\"" },
								{ "value": "\"middle right right\"" },
								{ "value": "\"middle right top\"" },
								{ "value": "\"middle right bottom\"" },
								{ "value": "\"bottom center left\"" },
								{ "value": "\"bottom center right\"" },
								{ "value": "\"bottom center top\"" },
								{ "value": "\"bottom center bottom\"" },
								{ "value": "\"bottom left left\"" },
								{ "value": "\"bottom left right\"" },
								{ "value": "\"bottom left top\"" },
								{ "value": "\"bottom left bottom\"" },
								{ "value": "\"bottom right left\"" },
								{ "value": "\"bottom right right\"" },
								{ "value": "\"bottom right top\"" },
								{ "value": "\"bottom right bottom\"" }
							]
						}
					},
					"__experimentalIsFocusable": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to keep the button focusable when disabled.\n@deprecated Use the `accessibleWhenDisabled` prop instead.\n@ignore",
						"name": "__experimentalIsFocusable",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isDefault": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Gives the button a default style.\n@deprecated Use the `'secondary'` value on the `variant` prop instead.\n@ignore",
						"name": "isDefault",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isLink": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Gives the button a link style.\n@deprecated Use the `'link'` value on the `variant` prop instead.\n@ignore",
						"name": "isLink",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isPrimary": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Gives the button a primary style.\n@deprecated Use the `'primary'` value on the `variant` prop instead.\n@ignore",
						"name": "isPrimary",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isSecondary": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Gives the button a default style.\n@deprecated Use the `'secondary'` value on the `variant` prop instead.\n@ignore",
						"name": "isSecondary",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isTertiary": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Gives the button a text-based style.\n@deprecated Use the `'tertiary'` value on the `variant` prop instead.\n@ignore",
						"name": "isTertiary",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isSmall": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Decreases the size of the button.\n@deprecated Use the `'small'` value on the `size` prop instead.\n@ignore",
						"name": "isSmall",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"containerClassName": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An optional class name for the button container.",
						"name": "containerClassName",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"extraProps": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Additional props to be passed alongside props.",
						"name": "extraProps",
						"required": false,
						"tags": {},
						"type": { "name": "any" }
					},
					"isActive": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Indicates if the button is active.",
						"name": "isActive",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"subscript": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An optional subscript for the button.",
						"name": "subscript",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"accessibleWhenDisabled": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to keep the button focusable when disabled.\n\nIn most cases, it is recommended to set this to `true`. Disabling a control without maintaining focusability\ncan cause accessibility issues, by hiding their presence from screen reader users,\nor by preventing focus from returning to a trigger element.\n\nLearn more about the [focusability of disabled controls](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#focusabilityofdisabledcontrols)\nin the WAI-ARIA Authoring Practices Guide.",
						"name": "accessibleWhenDisabled",
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
//#region ../packages/components/src/toolbar/toolbar-group/toolbar-group-container.tsx
var import_jsx_dev_runtime$6, _jsxFileName$6, ToolbarGroupContainer;
function init_toolbar_group_container() {
	return (init_toolbar_group_container = __esmMin((() => {
		import_jsx_dev_runtime$6 = require_jsx_dev_runtime();
		_jsxFileName$6 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-group/toolbar-group-container.tsx";
		ToolbarGroupContainer = ({ className, children, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)("div", {
			className,
			...props,
			children
		}, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 9,
			columnNumber: 2
		}, void 0);
		try {
			ToolbarGroupContainer.__docgenInfo = {
				"description": "",
				"displayName": "toolbargroupcontainer",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-group/toolbar-group-container.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-group/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Children to be rendered inside the toolbar.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-group/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Class to set on the container div.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"props": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-group/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Props to be passed.",
						"name": "props",
						"required": false,
						"tags": {},
						"type": { "name": "any" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/toolbar/toolbar-group/toolbar-group-collapsed.tsx
function ToolbarGroupCollapsed({ controls = [], toggleProps, ...props }) {
	const accessibleToolbarState = (0, import_react.useContext)(ToolbarContext);
	const renderDropdownMenu = (internalToggleProps) => /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(DropdownMenu, {
		controls,
		toggleProps: {
			...internalToggleProps,
			"data-toolbar-item": true
		},
		...props
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 20,
		columnNumber: 3
	}, this);
	if (accessibleToolbarState) return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(ToolbarItem, {
		...toggleProps,
		children: renderDropdownMenu
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 32,
		columnNumber: 4
	}, this);
	return renderDropdownMenu(toggleProps);
}
var import_jsx_dev_runtime$5, _jsxFileName$5;
function init_toolbar_group_collapsed() {
	return (init_toolbar_group_collapsed = __esmMin((() => {
		init_react();
		init_dropdown_menu();
		init_toolbar_context();
		init_toolbar_item();
		import_jsx_dev_runtime$5 = require_jsx_dev_runtime();
		_jsxFileName$5 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-group/toolbar-group-collapsed.tsx";
		try {
			ToolbarGroupCollapsed.__docgenInfo = {
				"description": "",
				"displayName": "ToolbarGroupCollapsed",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-group/toolbar-group-collapsed.tsx",
				"methods": [],
				"props": {
					"icon": {
						"defaultValue": { "value": "\"menu\"" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The icon to be shown in the collapsed menu button.",
						"name": "icon",
						"required": false,
						"tags": {},
						"type": { "name": "IconType | null" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A human-readable label to present as accessibility text on the focused\ncollapsed menu button.",
						"name": "label",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A class name to apply to the dropdown menu's toggle element wrapper.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"popoverProps": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Properties of `popoverProps` object will be passed as props to the nested\n`Popover` component.\nUse this object to modify props available for the `Popover` component that\nare not already exposed in the `DropdownMenu` component, e.g.: the\ndirection in which the popover should open relative to its parent node\nset with `position` prop.",
						"name": "popoverProps",
						"required": false,
						"tags": {},
						"type": { "name": "Omit<Omit<Omit<WordPressComponentProps<PopoverProps, \"div\", false>, \"onDrag\" | \"onDragEnd\" | \"onDragStart\" | \"onAnimationStart\" | \"inherit\" | ... 52 more ... | \"ignoreStrict\"> & Pick<...>, \"ref\">, \"children\">" }
					},
					"toggleProps": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Properties of `toggleProps` object will be passed as props to the nested\n`Button` component in the `renderToggle` implementation of the `Dropdown`\ncomponent used internally.\nUse this object to modify props available for the `Button` component that\nare not already exposed in the `DropdownMenu` component, e.g.: the tooltip\ntext displayed on hover set with `tooltip` prop.",
						"name": "toggleProps",
						"required": false,
						"tags": {},
						"type": { "name": "ToggleProps" }
					},
					"menuProps": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Properties of `menuProps` object will be passed as props to the nested\n`NavigableMenu` component in the `renderContent` implementation of the\n`Dropdown` component used internally.\nUse this object to modify props available for the `NavigableMenu`\ncomponent that are not already exposed in the `DropdownMenu` component,\ne.g.: the orientation of the menu set with `orientation` prop.",
						"name": "menuProps",
						"required": false,
						"tags": {},
						"type": { "name": "Omit<Partial<NavigableMenuProps>, \"children\">" }
					},
					"disableOpenOnArrowDown": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "In some contexts, the arrow down key used to open the dropdown menu might\nneed to be disabled—for example when that key is used to perform another\naction.",
						"name": "disableOpenOnArrowDown",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"text": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Text to display on the nested `Button` component in the `renderToggle`\nimplementation of the `Dropdown` component used internally.",
						"name": "text",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"noIcons": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether or not `no-icons` should be added to the menu's `className`.",
						"name": "noIcons",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A [function render prop](https://reactjs.org/docs/render-props.html#using-props-other-than-render)\nwhich should return an element or elements valid for use in a DropdownMenu:\n`MenuItem`, `MenuItemsChoice`, or `MenuGroup`. Its first argument is a\nprops object including the same values as given to a `Dropdown`'s\n`renderContent` (`isOpen`, `onToggle`, `onClose`).\n\nA valid DropdownMenu must specify a `controls` or `children` prop, or both.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "((callbackProps: DropdownCallbackProps) => ReactNode)" }
					},
					"controls": {
						"defaultValue": { "value": "[]" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An array or nested array of objects describing the options to be shown in\nthe expanded menu. Each object should include an `icon` Dashicon slug\nstring, a human-readable `title` string, `isDisabled` boolean flag, and\nan `onClick` function callback to invoke when the option is selected.\n\nA valid DropdownMenu must specify a `controls` or `children` prop, or both.",
						"name": "controls",
						"required": false,
						"tags": {},
						"type": { "name": "DropdownOption[] | DropdownOption[][]" }
					},
					"open": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The controlled open state of the dropdown menu.\nMust be used in conjunction with `onToggle`.",
						"name": "open",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"defaultOpen": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The open state of the dropdown menu when initially rendered.\nUse when you do not need to control its open state. It will be overridden\nby the `open` prop if it is specified on the component's first render.",
						"name": "defaultOpen",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onToggle": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A callback invoked when the state of the dropdown menu changes\nfrom open to closed and vice versa.",
						"name": "onToggle",
						"required": false,
						"tags": {},
						"type": { "name": "((willOpen: boolean) => void)" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/toolbar/toolbar-group/index.tsx
function isNestedArray(arr) {
	return Array.isArray(arr) && Array.isArray(arr[0]);
}
/**
* Renders a collapsible group of controls
*
* The `controls` prop accepts an array of sets. A set is an array of controls.
* Controls have the following shape:
*
* ```
* {
*   icon: string,
*   title: string,
*   subscript: string,
*   onClick: Function,
*   isActive: boolean,
*   isDisabled: boolean
* }
* ```
*
* For convenience it is also possible to pass only an array of controls. It is
* then assumed this is the only set.
*
* Either `controls` or `children` is required, otherwise this components
* renders nothing.
*
* @param props               Component props.
* @param [props.controls]    The controls to render in this toolbar.
* @param [props.children]    Any other things to render inside the toolbar besides the controls.
* @param [props.className]   Class to set on the container div.
* @param [props.isCollapsed] Turns ToolbarGroup into a dropdown menu.
* @param [props.title]       ARIA label for dropdown menu if is collapsed.
*/
function ToolbarGroup({ controls = [], children, className, isCollapsed, title, ...props }) {
	const accessibleToolbarState = (0, import_react.useContext)(ToolbarContext);
	if ((!controls || !controls.length) && !children) return null;
	const finalClassName = clsx(accessibleToolbarState ? "components-toolbar-group" : "components-toolbar", className);
	let controlSets;
	if (isNestedArray(controls)) controlSets = controls;
	else controlSets = [controls];
	if (isCollapsed) return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(ToolbarGroupCollapsed, {
		label: title,
		controls: controlSets,
		className: finalClassName,
		children,
		...props
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 78,
		columnNumber: 4
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(ToolbarGroupContainer, {
		className: finalClassName,
		...props,
		children: [controlSets?.flatMap((controlSet, indexOfSet) => controlSet.map((control, indexOfControl) => /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(ToolbarButton, {
			containerClassName: indexOfSet > 0 && indexOfControl === 0 ? "has-left-divider" : void 0,
			...control
		}, [indexOfSet, indexOfControl].join(), false, {
			fileName: _jsxFileName$4,
			lineNumber: 92,
			columnNumber: 6
		}, this))), children]
	}, void 0, true, {
		fileName: _jsxFileName$4,
		lineNumber: 89,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$4, _jsxFileName$4;
function init_toolbar_group() {
	return (init_toolbar_group = __esmMin((() => {
		init_clsx();
		init_react();
		init_toolbar_button();
		init_toolbar_group_container();
		init_toolbar_group_collapsed();
		init_toolbar_context();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-group/index.tsx";
		try {
			ToolbarGroup.__docgenInfo = {
				"description": "Renders a collapsible group of controls\n\nThe `controls` prop accepts an array of sets. A set is an array of controls.\nControls have the following shape:\n\n```\n{\n  icon: string,\n  title: string,\n  subscript: string,\n  onClick: Function,\n  isActive: boolean,\n  isDisabled: boolean\n}\n```\n\nFor convenience it is also possible to pass only an array of controls. It is\nthen assumed this is the only set.\n\nEither `controls` or `children` is required, otherwise this components\nrenders nothing.",
				"displayName": "ToolbarGroup",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-group/index.tsx",
				"methods": [],
				"props": {
					"controls": {
						"defaultValue": { "value": "[]" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-group/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The controls to render in this toolbar.",
						"name": "controls",
						"required": false,
						"tags": {},
						"type": { "name": "ToolbarGroupControls[] | ToolbarGroupControls[][]" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-group/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Class to set on the container div.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-group/types.ts",
								"name": "TypeLiteral"
							},
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-group/types.ts",
								"name": "TypeLiteral"
							},
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-group/types.ts",
								"name": "TypeLiteral"
							},
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-group/types.ts",
								"name": "TypeLiteral"
							}
						],
						"description": "Any other things to render inside the toolbar besides the controls.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode | ((string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<...> | null) & ((callbackProps: DropdownCallbackProps) => ReactNode))" }
					},
					"icon": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-group/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The Dashicon icon slug to be shown for the option.",
						"name": "icon",
						"required": false,
						"tags": {},
						"type": { "name": "IconType | null" }
					},
					"isCollapsed": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-group/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-group/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "When true, turns `ToolbarGroup` into a dropdown menu.",
						"name": "isCollapsed",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"title": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-group/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-group/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "ARIA label for dropdown menu if is collapsed.",
						"name": "title",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					}
				},
				"tags": { "param": "props Component props.\nprops.controls The controls to render in this toolbar.\nprops.children Any other things to render inside the toolbar besides the controls.\nprops.className Class to set on the container div.\nprops.isCollapsed Turns ToolbarGroup into a dropdown menu.\nprops.title ARIA label for dropdown menu if is collapsed." }
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/toolbar/toolbar/toolbar-container.tsx
function UnforwardedToolbarContainer({ label, ...props }, ref) {
	const toolbarStore = useToolbarStore({
		focusLoop: true,
		rtl: isRTL()
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(ToolbarContext.Provider, {
		value: toolbarStore,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Toolbar$1, {
			ref,
			"aria-label": label,
			store: toolbarStore,
			...props
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 21,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 20,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$3, _jsxFileName$3, ToolbarContainer;
function init_toolbar_container() {
	return (init_toolbar_container = __esmMin((() => {
		init_toolbar_store(), init_toolbar$1();
		init_react();
		init_build_module$1();
		init_toolbar_context();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toolbar/toolbar/toolbar-container.tsx";
		ToolbarContainer = (0, import_react.forwardRef)(UnforwardedToolbarContainer);
		ToolbarContainer.displayName = "ToolbarContainer";
		try {
			ToolbarContainer.__docgenInfo = {
				"description": "",
				"displayName": "ToolbarContainer",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toolbar/toolbar/toolbar-container.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toolbar/toolbar/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Children to be rendered inside the toolbar.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toolbar/toolbar/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An accessible label for the toolbar.",
						"name": "label",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"variant": {
						"defaultValue": { "value": "undefined" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toolbar/toolbar/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Specifies the toolbar's style.\n\nLeave undefined for the default style. Or `'unstyled'` which\nremoves the border from the toolbar, but keeps the default\npopover style.",
						"name": "variant",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"unstyled\"",
							"value": [{ "value": "\"unstyled\"" }]
						}
					},
					"orientation": {
						"defaultValue": { "value": "'horizontal'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toolbar/toolbar/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Orientation of the toolbar keyboard interactions.",
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
//#region ../packages/components/src/toolbar/toolbar/index.tsx
function UnforwardedToolbar({ className, label, variant, ...props }, ref) {
	const isVariantDefined = variant !== void 0;
	const contextSystemValue = (0, import_react.useMemo)(() => {
		if (isVariantDefined) return {};
		return {
			DropdownMenu: { variant: "toolbar" },
			Dropdown: { variant: "toolbar" },
			Menu: { variant: "toolbar" }
		};
	}, [isVariantDefined]);
	if (!label) {
		deprecated("Using Toolbar without label prop", {
			since: "5.6",
			alternative: "ToolbarGroup component",
			link: "https://developer.wordpress.org/block-editor/components/toolbar/"
		});
		const { title: _title, ...restProps } = props;
		return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(ToolbarGroup, {
			isCollapsed: false,
			...restProps,
			className
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 47,
			columnNumber: 4
		}, this);
	}
	const finalClassName = clsx("components-accessible-toolbar", className, variant && `is-${variant}`);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(ContextSystemProvider, {
		value: contextSystemValue,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(ToolbarContainer, {
			className: finalClassName,
			label,
			ref,
			...props
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 63,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 62,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$2, _jsxFileName$2, Toolbar;
function init_toolbar() {
	return (init_toolbar = __esmMin((() => {
		init_clsx();
		init_react();
		init_build_module();
		init_toolbar_group();
		init_toolbar_container();
		init_context_system_provider();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toolbar/toolbar/index.tsx";
		Toolbar = (0, import_react.forwardRef)(UnforwardedToolbar);
		Toolbar.displayName = "Toolbar";
		try {
			Toolbar.__docgenInfo = {
				"description": "Renders a toolbar.\n\nTo add controls, simply pass `ToolbarButton` components as children.\n\n```jsx\nimport { Toolbar, ToolbarButton } from '@wordpress/components';\nimport { formatBold, formatItalic, link } from '@wordpress/icons';\n\nfunction MyToolbar() {\n  return (\n    <Toolbar label=\"Options\">\n      <ToolbarButton icon={ formatBold } label=\"Bold\" />\n      <ToolbarButton icon={ formatItalic } label=\"Italic\" />\n      <ToolbarButton icon={ link } label=\"Link\" />\n    </Toolbar>\n  );\n}\n```",
				"displayName": "Toolbar",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toolbar/toolbar/index.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toolbar/toolbar/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Children to be rendered inside the toolbar.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toolbar/toolbar/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An accessible label for the toolbar.",
						"name": "label",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"variant": {
						"defaultValue": { "value": "undefined" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toolbar/toolbar/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Specifies the toolbar's style.\n\nLeave undefined for the default style. Or `'unstyled'` which\nremoves the border from the toolbar, but keeps the default\npopover style.",
						"name": "variant",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"unstyled\"",
							"value": [{ "value": "\"unstyled\"" }]
						}
					},
					"orientation": {
						"defaultValue": { "value": "'horizontal'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toolbar/toolbar/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Orientation of the toolbar keyboard interactions.",
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
//#region ../packages/components/src/toolbar/toolbar-dropdown-menu/index.tsx
function UnforwardedToolbarDropdownMenu(props, ref) {
	if (!(0, import_react.useContext)(ToolbarContext)) return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DropdownMenu, { ...props }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 15,
		columnNumber: 10
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ToolbarItem, {
		ref,
		...props.toggleProps,
		children: (toolbarItemProps) => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DropdownMenu, {
			...props,
			popoverProps: { ...props.popoverProps },
			toggleProps: toolbarItemProps
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 24,
			columnNumber: 5
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 22,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, ToolbarDropdownMenu;
function init_toolbar_dropdown_menu() {
	return (init_toolbar_dropdown_menu = __esmMin((() => {
		init_react();
		init_toolbar_item();
		init_toolbar_context();
		init_dropdown_menu();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-dropdown-menu/index.tsx";
		ToolbarDropdownMenu = (0, import_react.forwardRef)(UnforwardedToolbarDropdownMenu);
		ToolbarDropdownMenu.displayName = "ToolbarDropdownMenu";
		try {
			ToolbarDropdownMenu.__docgenInfo = {
				"description": "",
				"displayName": "ToolbarDropdownMenu",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toolbar/toolbar-dropdown-menu/index.tsx",
				"methods": [],
				"props": {
					"icon": {
						"defaultValue": { "value": "\"menu\"" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The icon to be shown in the collapsed menu button.",
						"name": "icon",
						"required": false,
						"tags": {},
						"type": { "name": "IconType | null" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A human-readable label to present as accessibility text on the focused\ncollapsed menu button.",
						"name": "label",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A class name to apply to the dropdown menu's toggle element wrapper.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"popoverProps": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Properties of `popoverProps` object will be passed as props to the nested\n`Popover` component.\nUse this object to modify props available for the `Popover` component that\nare not already exposed in the `DropdownMenu` component, e.g.: the\ndirection in which the popover should open relative to its parent node\nset with `position` prop.",
						"name": "popoverProps",
						"required": false,
						"tags": {},
						"type": { "name": "Omit<Omit<Omit<WordPressComponentProps<PopoverProps, \"div\", false>, \"onDrag\" | \"onDragEnd\" | \"onDragStart\" | \"onAnimationStart\" | \"inherit\" | ... 52 more ... | \"ignoreStrict\"> & Pick<...>, \"ref\">, \"children\">" }
					},
					"toggleProps": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Properties of `toggleProps` object will be passed as props to the nested\n`Button` component in the `renderToggle` implementation of the `Dropdown`\ncomponent used internally.\nUse this object to modify props available for the `Button` component that\nare not already exposed in the `DropdownMenu` component, e.g.: the tooltip\ntext displayed on hover set with `tooltip` prop.",
						"name": "toggleProps",
						"required": false,
						"tags": {},
						"type": { "name": "ToggleProps" }
					},
					"menuProps": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Properties of `menuProps` object will be passed as props to the nested\n`NavigableMenu` component in the `renderContent` implementation of the\n`Dropdown` component used internally.\nUse this object to modify props available for the `NavigableMenu`\ncomponent that are not already exposed in the `DropdownMenu` component,\ne.g.: the orientation of the menu set with `orientation` prop.",
						"name": "menuProps",
						"required": false,
						"tags": {},
						"type": { "name": "Omit<Partial<NavigableMenuProps>, \"children\">" }
					},
					"disableOpenOnArrowDown": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "In some contexts, the arrow down key used to open the dropdown menu might\nneed to be disabled—for example when that key is used to perform another\naction.",
						"name": "disableOpenOnArrowDown",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"text": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Text to display on the nested `Button` component in the `renderToggle`\nimplementation of the `Dropdown` component used internally.",
						"name": "text",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"noIcons": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether or not `no-icons` should be added to the menu's `className`.",
						"name": "noIcons",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A [function render prop](https://reactjs.org/docs/render-props.html#using-props-other-than-render)\nwhich should return an element or elements valid for use in a DropdownMenu:\n`MenuItem`, `MenuItemsChoice`, or `MenuGroup`. Its first argument is a\nprops object including the same values as given to a `Dropdown`'s\n`renderContent` (`isOpen`, `onToggle`, `onClose`).\n\nA valid DropdownMenu must specify a `controls` or `children` prop, or both.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "((callbackProps: DropdownCallbackProps) => ReactNode)" }
					},
					"controls": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An array or nested array of objects describing the options to be shown in\nthe expanded menu. Each object should include an `icon` Dashicon slug\nstring, a human-readable `title` string, `isDisabled` boolean flag, and\nan `onClick` function callback to invoke when the option is selected.\n\nA valid DropdownMenu must specify a `controls` or `children` prop, or both.",
						"name": "controls",
						"required": false,
						"tags": {},
						"type": { "name": "DropdownOption[] | DropdownOption[][]" }
					},
					"open": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The controlled open state of the dropdown menu.\nMust be used in conjunction with `onToggle`.",
						"name": "open",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"defaultOpen": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The open state of the dropdown menu when initially rendered.\nUse when you do not need to control its open state. It will be overridden\nby the `open` prop if it is specified on the component's first render.",
						"name": "defaultOpen",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onToggle": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A callback invoked when the state of the dropdown menu changes\nfrom open to closed and vice versa.",
						"name": "onToggle",
						"required": false,
						"tags": {},
						"type": { "name": "((willOpen: boolean) => void)" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/toolbar/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default, WithoutGroup, Unstyled;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_build_module$3();
		init_toolbar(), init_toolbar_button(), init_toolbar_group(), init_toolbar_item(), init_toolbar_dropdown_menu();
		init_dropdown_menu();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toolbar/stories/index.story.tsx";
		meta = {
			id: "components-toolbar",
			title: "Components/@wordpress-components/Toolbar",
			component: Toolbar,
			subcomponents: {
				ToolbarButton,
				ToolbarGroup,
				ToolbarItem,
				ToolbarDropdownMenu
			},
			argTypes: {
				children: { control: false },
				variant: {
					options: [void 0, "unstyled"],
					control: { type: "radio" }
				}
			},
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "editor"
				}
			}
		};
		Template = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			style: { height: 280 },
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toolbar, { ...props }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 60,
				columnNumber: 3
			}, void 0)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 59,
			columnNumber: 2
		}, void 0);
		Default = Template.bind({});
		Default.args = {
			label: "Options",
			id: "options-toolbar",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolbarGroup, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolbarButton, {
					icon: paragraph_default,
					text: "Paragraph"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 71,
					columnNumber: 5
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 70,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolbarGroup, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolbarItem, { children: (toggleProps) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, {
					icon: align_left_default,
					label: "Align",
					controls: [
						{
							icon: align_left_default,
							title: "Align left",
							isActive: true
						},
						{
							icon: align_center_default,
							title: "Align center"
						},
						{
							icon: align_right_default,
							title: "Align right"
						}
					],
					toggleProps
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 76,
					columnNumber: 7
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 74,
					columnNumber: 5
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 73,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolbarGroup, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolbarButton, { children: "Text" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 100,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolbarButton, {
						icon: format_bold_default,
						label: "Bold",
						isPressed: true
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 101,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolbarButton, {
						icon: format_italic_default,
						label: "Italic"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 102,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolbarButton, {
						icon: link_default,
						label: "Link"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 103,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolbarGroup, {
						isCollapsed: true,
						icon: null,
						title: "More rich text controls",
						controls: [
							{
								icon: code_default,
								title: "Inline code"
							},
							{
								icon: inline_image_default,
								title: "Inline image"
							},
							{
								icon: format_strikethrough_default,
								title: "Strikethrough"
							}
						]
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 104,
						columnNumber: 5
					}, void 0)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 99,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolbarGroup, {
					icon: more_default,
					title: "Align",
					isCollapsed: true,
					controls: [
						{
							icon: align_left_default,
							title: "Align left",
							isActive: true
						},
						{
							icon: align_center_default,
							title: "Align center"
						},
						{
							icon: align_right_default,
							title: "Align right"
						}
					]
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 118,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolbarDropdownMenu, {
					icon: chevron_down_default,
					label: "Select a direction",
					controls: [
						{
							title: "Up",
							icon: arrow_up_default
						},
						{
							title: "Right",
							icon: arrow_right_default
						},
						{
							title: "Down",
							icon: arrow_down_default
						},
						{
							title: "Left",
							icon: arrow_left_default
						}
					]
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 132,
					columnNumber: 4
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 69,
				columnNumber: 3
			}, void 0)
		};
		WithoutGroup = Template.bind({});
		WithoutGroup.args = {
			label: "Options",
			id: "options-toolbar-without-group",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolbarButton, {
					icon: format_bold_default,
					label: "Bold",
					isPressed: true
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 164,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolbarButton, {
					icon: format_italic_default,
					label: "Italic"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 165,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolbarButton, {
					icon: link_default,
					label: "Link"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 166,
					columnNumber: 4
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 163,
				columnNumber: 3
			}, void 0)
		};
		Unstyled = Template.bind({});
		Unstyled.args = {
			...Default.args,
			variant: "unstyled"
		};
		try {
			Unstyled.__docgenInfo = {
				"description": "Set the variant to `unstyled` to remove default border styles.\nOtherwise, leave it as `undefined` for default styles.",
				"displayName": "Unstyled",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toolbar/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "props => <div style={{\n  height: 280\n}}>\n        <Toolbar {...props} />\n    </div>",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithoutGroup.parameters = {
			...WithoutGroup.parameters,
			docs: {
				...WithoutGroup.parameters?.docs,
				source: {
					originalSource: "props => <div style={{\n  height: 280\n}}>\n        <Toolbar {...props} />\n    </div>",
					...WithoutGroup.parameters?.docs?.source
				}
			}
		};
		Unstyled.parameters = {
			...Unstyled.parameters,
			docs: {
				...Unstyled.parameters?.docs,
				source: {
					originalSource: "props => <div style={{\n  height: 280\n}}>\n        <Toolbar {...props} />\n    </div>",
					...Unstyled.parameters?.docs?.source
				},
				description: {
					story: "Set the variant to `unstyled` to remove default border styles.\nOtherwise, leave it as `undefined` for default styles.",
					...Unstyled.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, Unstyled, WithoutGroup, meta as default };
