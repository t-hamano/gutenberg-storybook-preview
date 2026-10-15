import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-D7pcITcN.js";
import { n as init_component$2, t as View } from "./component-CkY7eURU.js";
//#region ../packages/components/src/item-group/style.module.scss
var item, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		item = "_item_cbac3_103";
		style_module_default = {
			"item-group": "_item-group_cbac3_103",
			"is-bordered": "_is-bordered_cbac3_103",
			"is-separated": "_is-separated_cbac3_106",
			"is-rounded": "_is-rounded_cbac3_112",
			"item-wrapper": "_item-wrapper_cbac3_124",
			item,
			"is-unstyled-button": "_is-unstyled-button_cbac3_136",
			"is-unstyled-link": "_is-unstyled-link_cbac3_136",
			"is-spaced-around": "_is-spaced-around_cbac3_161",
			"is-size-small": "_is-size-small_cbac3_164",
			"is-size-medium": "_is-size-medium_cbac3_167",
			"is-size-large": "_is-size-large_cbac3_170"
		};
	})))();
}
//#endregion
//#region ../packages/components/src/item-group/item-group/hook.ts
function useItemGroup(props) {
	const { className, isBordered = false, isRounded = true, isSeparated = false, role = "list", ...otherProps } = useContextSystem(props, "ItemGroup");
	return {
		isBordered,
		className: clsx(style_module_default["item-group"], {
			[style_module_default["is-bordered"]]: isBordered,
			[style_module_default["is-separated"]]: isSeparated,
			[style_module_default["is-rounded"]]: isRounded
		}, className),
		role,
		isSeparated,
		...otherProps
	};
}
function init_hook() {
	return (init_hook = __esmMin((() => {
		init_clsx();
		init_use_context_system();
		init_style_module();
	})))();
}
//#endregion
//#region ../packages/components/src/item-group/context.ts
var ItemGroupContext, useItemGroupContext;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		ItemGroupContext = (0, import_react.createContext)({
			isList: false,
			size: "medium"
		});
		ItemGroupContext.displayName = "ItemGroupContext";
		useItemGroupContext = () => (0, import_react.useContext)(ItemGroupContext);
	})))();
}
//#endregion
//#region ../packages/components/src/item-group/item-group/component.tsx
function UnconnectedItemGroup(props, forwardedRef) {
	const { isBordered, isSeparated, size: sizeProp, ...otherProps } = useItemGroup(props);
	const { size: contextSize } = useItemGroupContext();
	const spacedAround = !isBordered && !isSeparated;
	const size = sizeProp || contextSize;
	const contextValue = {
		isList: otherProps.role === "list" || otherProps.role === "directory",
		spacedAround,
		size
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ItemGroupContext.Provider, {
		value: contextValue,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(View, {
			...otherProps,
			ref: forwardedRef
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 33,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 32,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, ItemGroup;
function init_component() {
	return (init_component = __esmMin((() => {
		init_context_connect();
		init_hook();
		init_context();
		init_component$2();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/item-group/item-group/component.tsx";
		ItemGroup = contextConnect(UnconnectedItemGroup, "ItemGroup");
		try {
			ItemGroup.__docgenInfo = {
				"description": "`ItemGroup` displays a list of `Item`s grouped and styled together.\n\n```jsx\nimport {\n  __experimentalItemGroup as ItemGroup,\n  __experimentalItem as Item,\n} from '@wordpress/components';\n\nfunction Example() {\n  return (\n    <ItemGroup>\n      <Item>Code</Item>\n      <Item>is</Item>\n      <Item>Poetry</Item>\n    </ItemGroup>\n  );\n}\n```",
				"displayName": "ItemGroup",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/item-group/item-group/component.tsx",
				"methods": [],
				"props": {
					"isBordered": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/item-group/types.ts",
							"name": "ItemGroupProps"
						}],
						"description": "Renders a border around the itemgroup.",
						"name": "isBordered",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/item-group/types.ts",
							"name": "ItemGroupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isRounded": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/item-group/types.ts",
							"name": "ItemGroupProps"
						}],
						"description": "Renders with rounded corners.",
						"name": "isRounded",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/item-group/types.ts",
							"name": "ItemGroupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isSeparated": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/item-group/types.ts",
							"name": "ItemGroupProps"
						}],
						"description": "Renders a separator between each item.",
						"name": "isSeparated",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/item-group/types.ts",
							"name": "ItemGroupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"size": {
						"defaultValue": { "value": "'medium'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/item-group/types.ts",
							"name": "ItemGroupProps"
						}],
						"description": "Determines the amount of padding within the component.",
						"name": "size",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/item-group/types.ts",
							"name": "ItemGroupProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "ItemSize",
							"value": [
								{ "value": "\"small\"" },
								{ "value": "\"medium\"" },
								{ "value": "\"large\"" }
							]
						}
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/item-group/types.ts",
							"name": "ItemGroupProps"
						}],
						"description": "The children elements.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/item-group/types.ts",
							"name": "ItemGroupProps"
						},
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
						"description": "The HTML element to render the component as.",
						"name": "as",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "keyof IntrinsicElements",
							"value": [
								{ "value": "\"symbol\"" },
								{ "value": "\"object\"" },
								{ "value": "\"style\"" },
								{ "value": "\"div\"" },
								{ "value": "\"a\"" },
								{ "value": "\"abbr\"" },
								{ "value": "\"address\"" },
								{ "value": "\"area\"" },
								{ "value": "\"article\"" },
								{ "value": "\"aside\"" },
								{ "value": "\"audio\"" },
								{ "value": "\"b\"" },
								{ "value": "\"base\"" },
								{ "value": "\"bdi\"" },
								{ "value": "\"bdo\"" },
								{ "value": "\"big\"" },
								{ "value": "\"blockquote\"" },
								{ "value": "\"body\"" },
								{ "value": "\"br\"" },
								{ "value": "\"button\"" },
								{ "value": "\"canvas\"" },
								{ "value": "\"caption\"" },
								{ "value": "\"center\"" },
								{ "value": "\"cite\"" },
								{ "value": "\"code\"" },
								{ "value": "\"col\"" },
								{ "value": "\"colgroup\"" },
								{ "value": "\"data\"" },
								{ "value": "\"datalist\"" },
								{ "value": "\"dd\"" },
								{ "value": "\"del\"" },
								{ "value": "\"details\"" },
								{ "value": "\"dfn\"" },
								{ "value": "\"dialog\"" },
								{ "value": "\"dl\"" },
								{ "value": "\"dt\"" },
								{ "value": "\"em\"" },
								{ "value": "\"embed\"" },
								{ "value": "\"fieldset\"" },
								{ "value": "\"figcaption\"" },
								{ "value": "\"figure\"" },
								{ "value": "\"footer\"" },
								{ "value": "\"form\"" },
								{ "value": "\"h1\"" },
								{ "value": "\"h2\"" },
								{ "value": "\"h3\"" },
								{ "value": "\"h4\"" },
								{ "value": "\"h5\"" },
								{ "value": "\"h6\"" },
								{ "value": "\"head\"" },
								{ "value": "\"header\"" },
								{ "value": "\"hgroup\"" },
								{ "value": "\"hr\"" },
								{ "value": "\"html\"" },
								{ "value": "\"i\"" },
								{ "value": "\"iframe\"" },
								{ "value": "\"img\"" },
								{ "value": "\"input\"" },
								{ "value": "\"ins\"" },
								{ "value": "\"kbd\"" },
								{ "value": "\"keygen\"" },
								{ "value": "\"label\"" },
								{ "value": "\"legend\"" },
								{ "value": "\"li\"" },
								{ "value": "\"link\"" },
								{ "value": "\"main\"" },
								{ "value": "\"map\"" },
								{ "value": "\"mark\"" },
								{ "value": "\"menu\"" },
								{ "value": "\"menuitem\"" },
								{ "value": "\"meta\"" },
								{ "value": "\"meter\"" },
								{ "value": "\"nav\"" },
								{ "value": "\"noindex\"" },
								{ "value": "\"noscript\"" },
								{ "value": "\"ol\"" },
								{ "value": "\"optgroup\"" },
								{ "value": "\"option\"" },
								{ "value": "\"output\"" },
								{ "value": "\"p\"" },
								{ "value": "\"param\"" },
								{ "value": "\"picture\"" },
								{ "value": "\"pre\"" },
								{ "value": "\"progress\"" },
								{ "value": "\"q\"" },
								{ "value": "\"rp\"" },
								{ "value": "\"rt\"" },
								{ "value": "\"ruby\"" },
								{ "value": "\"s\"" },
								{ "value": "\"samp\"" },
								{ "value": "\"search\"" },
								{ "value": "\"slot\"" },
								{ "value": "\"script\"" },
								{ "value": "\"section\"" },
								{ "value": "\"select\"" },
								{ "value": "\"small\"" },
								{ "value": "\"source\"" },
								{ "value": "\"span\"" },
								{ "value": "\"strong\"" },
								{ "value": "\"sub\"" },
								{ "value": "\"summary\"" },
								{ "value": "\"sup\"" },
								{ "value": "\"table\"" },
								{ "value": "\"template\"" },
								{ "value": "\"tbody\"" },
								{ "value": "\"td\"" },
								{ "value": "\"textarea\"" },
								{ "value": "\"tfoot\"" },
								{ "value": "\"th\"" },
								{ "value": "\"thead\"" },
								{ "value": "\"time\"" },
								{ "value": "\"title\"" },
								{ "value": "\"tr\"" },
								{ "value": "\"track\"" },
								{ "value": "\"u\"" },
								{ "value": "\"ul\"" },
								{ "value": "\"var\"" },
								{ "value": "\"video\"" },
								{ "value": "\"wbr\"" },
								{ "value": "\"webview\"" },
								{ "value": "\"svg\"" },
								{ "value": "\"animate\"" },
								{ "value": "\"animateMotion\"" },
								{ "value": "\"animateTransform\"" },
								{ "value": "\"circle\"" },
								{ "value": "\"clipPath\"" },
								{ "value": "\"defs\"" },
								{ "value": "\"desc\"" },
								{ "value": "\"ellipse\"" },
								{ "value": "\"feBlend\"" },
								{ "value": "\"feColorMatrix\"" },
								{ "value": "\"feComponentTransfer\"" },
								{ "value": "\"feComposite\"" },
								{ "value": "\"feConvolveMatrix\"" },
								{ "value": "\"feDiffuseLighting\"" },
								{ "value": "\"feDisplacementMap\"" },
								{ "value": "\"feDistantLight\"" },
								{ "value": "\"feDropShadow\"" },
								{ "value": "\"feFlood\"" },
								{ "value": "\"feFuncA\"" },
								{ "value": "\"feFuncB\"" },
								{ "value": "\"feFuncG\"" },
								{ "value": "\"feFuncR\"" },
								{ "value": "\"feGaussianBlur\"" },
								{ "value": "\"feImage\"" },
								{ "value": "\"feMerge\"" },
								{ "value": "\"feMergeNode\"" },
								{ "value": "\"feMorphology\"" },
								{ "value": "\"feOffset\"" },
								{ "value": "\"fePointLight\"" },
								{ "value": "\"feSpecularLighting\"" },
								{ "value": "\"feSpotLight\"" },
								{ "value": "\"feTile\"" },
								{ "value": "\"feTurbulence\"" },
								{ "value": "\"filter\"" },
								{ "value": "\"foreignObject\"" },
								{ "value": "\"g\"" },
								{ "value": "\"image\"" },
								{ "value": "\"line\"" },
								{ "value": "\"linearGradient\"" },
								{ "value": "\"marker\"" },
								{ "value": "\"mask\"" },
								{ "value": "\"metadata\"" },
								{ "value": "\"mpath\"" },
								{ "value": "\"path\"" },
								{ "value": "\"pattern\"" },
								{ "value": "\"polygon\"" },
								{ "value": "\"polyline\"" },
								{ "value": "\"radialGradient\"" },
								{ "value": "\"rect\"" },
								{ "value": "\"set\"" },
								{ "value": "\"stop\"" },
								{ "value": "\"switch\"" },
								{ "value": "\"text\"" },
								{ "value": "\"textPath\"" },
								{ "value": "\"tspan\"" },
								{ "value": "\"use\"" },
								{ "value": "\"view\"" }
							]
						}
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/item-group/item/hook.ts
function useItem(props) {
	const { isList, spacedAround, size: contextSize } = useItemGroupContext();
	const { as: asProp, className, onClick, role = isList ? "listitem" : void 0, size: sizeProp, ...otherProps } = useContextSystem(props, "Item");
	const size = sizeProp || contextSize;
	const as = asProp || (typeof onClick !== "undefined" ? "button" : "div");
	return {
		as,
		className: clsx(style_module_default.item, as === "button" && style_module_default["is-unstyled-button"], as === "a" && style_module_default["is-unstyled-link"], sizeClassName[size] || sizeClassName.medium, spacedAround && style_module_default["is-spaced-around"], className),
		onClick,
		wrapperClassName: style_module_default["item-wrapper"],
		role,
		...otherProps
	};
}
var sizeClassName;
function init_hook$1() {
	return (init_hook$1 = __esmMin((() => {
		init_clsx();
		init_use_context_system();
		init_context();
		init_style_module();
		sizeClassName = {
			small: style_module_default["is-size-small"],
			medium: style_module_default["is-size-medium"],
			large: style_module_default["is-size-large"]
		};
	})))();
}
//#endregion
//#region ../packages/components/src/item-group/item/component.tsx
function UnconnectedItem(props, forwardedRef) {
	const { role, wrapperClassName, ...otherProps } = useItem(props);
	const itemRef = (0, import_react.useRef)(null);
	const { isList } = useItemGroupContext();
	(0, import_react.useEffect)(() => {
		if (isList && role === "listitem" && !itemRef.current?.closest("ol, ul, menu, [role=\"list\"], [role=\"directory\"]")) throw new Error("Item with list semantics must be rendered inside an element with role=\"list\".");
	}, [isList, role]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		ref: itemRef,
		role,
		className: wrapperClassName,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(View, {
			...otherProps,
			ref: forwardedRef
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 34,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 33,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, Item;
function init_component$1() {
	return (init_component$1 = __esmMin((() => {
		init_react();
		init_hook$1();
		init_context_connect();
		init_component$2();
		init_context();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/item-group/item/component.tsx";
		Item = contextConnect(UnconnectedItem, "Item");
		try {
			Item.__docgenInfo = {
				"description": "`Item` is used in combination with `ItemGroup` to display a list of items\ngrouped and styled together.\n\n```jsx\nimport {\n  __experimentalItemGroup as ItemGroup,\n  __experimentalItem as Item,\n} from '@wordpress/components';\n\nfunction Example() {\n  return (\n    <ItemGroup>\n      <Item>Code</Item>\n      <Item>is</Item>\n      <Item>Poetry</Item>\n    </ItemGroup>\n  );\n}\n```",
				"displayName": "Item",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/item-group/item/component.tsx",
				"methods": [],
				"props": {
					"size": {
						"defaultValue": { "value": "'medium'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/item-group/types.ts",
							"name": "ItemProps"
						}],
						"description": "Determines the amount of padding within the component.",
						"name": "size",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/item-group/types.ts",
							"name": "ItemProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "ItemSize",
							"value": [
								{ "value": "\"small\"" },
								{ "value": "\"medium\"" },
								{ "value": "\"large\"" }
							]
						}
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/item-group/types.ts",
							"name": "ItemProps"
						}],
						"description": "The children elements.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/item-group/types.ts",
							"name": "ItemProps"
						},
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
						"description": "The HTML element to render the component as.",
						"name": "as",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "keyof IntrinsicElements",
							"value": [
								{ "value": "\"symbol\"" },
								{ "value": "\"object\"" },
								{ "value": "\"style\"" },
								{ "value": "\"div\"" },
								{ "value": "\"a\"" },
								{ "value": "\"abbr\"" },
								{ "value": "\"address\"" },
								{ "value": "\"area\"" },
								{ "value": "\"article\"" },
								{ "value": "\"aside\"" },
								{ "value": "\"audio\"" },
								{ "value": "\"b\"" },
								{ "value": "\"base\"" },
								{ "value": "\"bdi\"" },
								{ "value": "\"bdo\"" },
								{ "value": "\"big\"" },
								{ "value": "\"blockquote\"" },
								{ "value": "\"body\"" },
								{ "value": "\"br\"" },
								{ "value": "\"button\"" },
								{ "value": "\"canvas\"" },
								{ "value": "\"caption\"" },
								{ "value": "\"center\"" },
								{ "value": "\"cite\"" },
								{ "value": "\"code\"" },
								{ "value": "\"col\"" },
								{ "value": "\"colgroup\"" },
								{ "value": "\"data\"" },
								{ "value": "\"datalist\"" },
								{ "value": "\"dd\"" },
								{ "value": "\"del\"" },
								{ "value": "\"details\"" },
								{ "value": "\"dfn\"" },
								{ "value": "\"dialog\"" },
								{ "value": "\"dl\"" },
								{ "value": "\"dt\"" },
								{ "value": "\"em\"" },
								{ "value": "\"embed\"" },
								{ "value": "\"fieldset\"" },
								{ "value": "\"figcaption\"" },
								{ "value": "\"figure\"" },
								{ "value": "\"footer\"" },
								{ "value": "\"form\"" },
								{ "value": "\"h1\"" },
								{ "value": "\"h2\"" },
								{ "value": "\"h3\"" },
								{ "value": "\"h4\"" },
								{ "value": "\"h5\"" },
								{ "value": "\"h6\"" },
								{ "value": "\"head\"" },
								{ "value": "\"header\"" },
								{ "value": "\"hgroup\"" },
								{ "value": "\"hr\"" },
								{ "value": "\"html\"" },
								{ "value": "\"i\"" },
								{ "value": "\"iframe\"" },
								{ "value": "\"img\"" },
								{ "value": "\"input\"" },
								{ "value": "\"ins\"" },
								{ "value": "\"kbd\"" },
								{ "value": "\"keygen\"" },
								{ "value": "\"label\"" },
								{ "value": "\"legend\"" },
								{ "value": "\"li\"" },
								{ "value": "\"link\"" },
								{ "value": "\"main\"" },
								{ "value": "\"map\"" },
								{ "value": "\"mark\"" },
								{ "value": "\"menu\"" },
								{ "value": "\"menuitem\"" },
								{ "value": "\"meta\"" },
								{ "value": "\"meter\"" },
								{ "value": "\"nav\"" },
								{ "value": "\"noindex\"" },
								{ "value": "\"noscript\"" },
								{ "value": "\"ol\"" },
								{ "value": "\"optgroup\"" },
								{ "value": "\"option\"" },
								{ "value": "\"output\"" },
								{ "value": "\"p\"" },
								{ "value": "\"param\"" },
								{ "value": "\"picture\"" },
								{ "value": "\"pre\"" },
								{ "value": "\"progress\"" },
								{ "value": "\"q\"" },
								{ "value": "\"rp\"" },
								{ "value": "\"rt\"" },
								{ "value": "\"ruby\"" },
								{ "value": "\"s\"" },
								{ "value": "\"samp\"" },
								{ "value": "\"search\"" },
								{ "value": "\"slot\"" },
								{ "value": "\"script\"" },
								{ "value": "\"section\"" },
								{ "value": "\"select\"" },
								{ "value": "\"small\"" },
								{ "value": "\"source\"" },
								{ "value": "\"span\"" },
								{ "value": "\"strong\"" },
								{ "value": "\"sub\"" },
								{ "value": "\"summary\"" },
								{ "value": "\"sup\"" },
								{ "value": "\"table\"" },
								{ "value": "\"template\"" },
								{ "value": "\"tbody\"" },
								{ "value": "\"td\"" },
								{ "value": "\"textarea\"" },
								{ "value": "\"tfoot\"" },
								{ "value": "\"th\"" },
								{ "value": "\"thead\"" },
								{ "value": "\"time\"" },
								{ "value": "\"title\"" },
								{ "value": "\"tr\"" },
								{ "value": "\"track\"" },
								{ "value": "\"u\"" },
								{ "value": "\"ul\"" },
								{ "value": "\"var\"" },
								{ "value": "\"video\"" },
								{ "value": "\"wbr\"" },
								{ "value": "\"webview\"" },
								{ "value": "\"svg\"" },
								{ "value": "\"animate\"" },
								{ "value": "\"animateMotion\"" },
								{ "value": "\"animateTransform\"" },
								{ "value": "\"circle\"" },
								{ "value": "\"clipPath\"" },
								{ "value": "\"defs\"" },
								{ "value": "\"desc\"" },
								{ "value": "\"ellipse\"" },
								{ "value": "\"feBlend\"" },
								{ "value": "\"feColorMatrix\"" },
								{ "value": "\"feComponentTransfer\"" },
								{ "value": "\"feComposite\"" },
								{ "value": "\"feConvolveMatrix\"" },
								{ "value": "\"feDiffuseLighting\"" },
								{ "value": "\"feDisplacementMap\"" },
								{ "value": "\"feDistantLight\"" },
								{ "value": "\"feDropShadow\"" },
								{ "value": "\"feFlood\"" },
								{ "value": "\"feFuncA\"" },
								{ "value": "\"feFuncB\"" },
								{ "value": "\"feFuncG\"" },
								{ "value": "\"feFuncR\"" },
								{ "value": "\"feGaussianBlur\"" },
								{ "value": "\"feImage\"" },
								{ "value": "\"feMerge\"" },
								{ "value": "\"feMergeNode\"" },
								{ "value": "\"feMorphology\"" },
								{ "value": "\"feOffset\"" },
								{ "value": "\"fePointLight\"" },
								{ "value": "\"feSpecularLighting\"" },
								{ "value": "\"feSpotLight\"" },
								{ "value": "\"feTile\"" },
								{ "value": "\"feTurbulence\"" },
								{ "value": "\"filter\"" },
								{ "value": "\"foreignObject\"" },
								{ "value": "\"g\"" },
								{ "value": "\"image\"" },
								{ "value": "\"line\"" },
								{ "value": "\"linearGradient\"" },
								{ "value": "\"marker\"" },
								{ "value": "\"mask\"" },
								{ "value": "\"metadata\"" },
								{ "value": "\"mpath\"" },
								{ "value": "\"path\"" },
								{ "value": "\"pattern\"" },
								{ "value": "\"polygon\"" },
								{ "value": "\"polyline\"" },
								{ "value": "\"radialGradient\"" },
								{ "value": "\"rect\"" },
								{ "value": "\"set\"" },
								{ "value": "\"stop\"" },
								{ "value": "\"switch\"" },
								{ "value": "\"text\"" },
								{ "value": "\"textPath\"" },
								{ "value": "\"tspan\"" },
								{ "value": "\"use\"" },
								{ "value": "\"view\"" }
							]
						}
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_component as i, init_component$1 as n, ItemGroup as r, Item as t };
