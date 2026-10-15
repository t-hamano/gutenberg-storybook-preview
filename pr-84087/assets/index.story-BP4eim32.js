import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-D7pcITcN.js";
import { i as init_polymorphic_element, n as init_component$1, r as PolymorphicElement, t as View } from "./component-CkY7eURU.js";
import { n as init_get_valid_children, t as getValidChildren } from "./get-valid-children-o8fxOEFN.js";
import { r as init_component$2, t as Elevation } from "./component-BVEZ80Ho.js";
//#region ../packages/components/src/z-stack/style.module.scss
var child, layered, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		child = "_child_bfj5k_6";
		layered = "_layered_bfj5k_11";
		style_module_default = {
			"z-stack": "_z-stack_bfj5k_1",
			child,
			layered
		};
	})))();
}
//#endregion
//#region ../packages/components/src/z-stack/component.tsx
function UnconnectedZStack(props, forwardedRef) {
	deprecated("wp.components.__experimentalZStack", {
		since: "7.2",
		version: "7.4",
		alternative: "your own CSS"
	});
	const { children, className, isLayered = true, isReversed = false, offset = 0, ...otherProps } = useContextSystem(props, "ZStack");
	const validChildren = getValidChildren(children);
	const childrenLastIndex = validChildren.length - 1;
	const clonedChildren = validChildren.map((child, index) => {
		const zIndex = isReversed ? childrenLastIndex - index : index;
		const offsetAmount = isLayered ? offset * index : offset;
		const key = (0, import_react.isValidElement)(child) ? child.key : index;
		return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
			className: style_module_default.child,
			style: {
				"--z-stack-offset": `${offsetAmount}px`,
				"--z-stack-z-index": zIndex
			},
			children: child
		}, key, false, {
			fileName: _jsxFileName$1,
			lineNumber: 43,
			columnNumber: 4
		}, this);
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(PolymorphicElement, {
		...otherProps,
		className: clsx(style_module_default["z-stack"], isLayered && style_module_default.layered, className),
		ref: forwardedRef,
		children: clonedChildren
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 57,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, ZStack;
function init_component() {
	return (init_component = __esmMin((() => {
		init_clsx();
		init_build_module();
		init_react();
		init_get_valid_children();
		init_context_connect(), init_use_context_system();
		init_polymorphic_element();
		init_style_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/z-stack/component.tsx";
		ZStack = contextConnect(UnconnectedZStack, "ZStack");
		try {
			ZStack.__docgenInfo = {
				"description": "`ZStack` allows you to stack things along the Z-axis.\n\nThis component is deprecated. Write your own CSS instead.",
				"displayName": "ZStack",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/z-stack/component.tsx",
				"methods": [],
				"props": {
					"isLayered": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/z-stack/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Layers children elements on top of each other (first: highest z-index,\nlast: lowest z-index).",
						"name": "isLayered",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isReversed": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/z-stack/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Reverse the layer ordering (first: lowest z-index, last: highest\nz-index).",
						"name": "isReversed",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"offset": {
						"defaultValue": { "value": "0" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/z-stack/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The amount of space between each child element. Its value is\nautomatically inverted (i.e. from positive to negative, and viceversa)\nwhen switching from LTR to RTL.",
						"name": "offset",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/z-stack/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The children to stack.",
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
				"tags": { "deprecated": "```jsx\nimport { __experimentalZStack as ZStack } from '@wordpress/components';\n\nfunction Example() {\n  return (\n    <ZStack offset={ 20 } isLayered>\n      <ExampleImage />\n      <ExampleImage />\n      <ExampleImage />\n    </ZStack>\n  );\n}\n```" }
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/z-stack/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Avatar, Template, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_component$2();
		init_component$1();
		init_component();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/z-stack/stories/index.story.tsx";
		meta = {
			component: ZStack,
			id: "components-zstack",
			title: "Components/@wordpress-components/Deprecated/ZStack",
			argTypes: {
				as: { control: { type: "text" } },
				children: { control: false }
			},
			tags: ["status-experimental"],
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "not-recommended",
					whereUsed: "global",
					notes: "Deprecated. Write your own CSS instead."
				}
			}
		};
		Avatar = ({ backgroundColor }) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(View, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(View, { style: {
				border: "3px solid black",
				borderRadius: "9999px",
				height: "48px",
				width: "48px",
				backgroundColor
			} }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 37,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Elevation, {
				borderRadius: 9999,
				isInteractive: false,
				value: 3
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 46,
				columnNumber: 4
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 36,
				columnNumber: 3
			}, void 0);
		};
		Template = (args) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ZStack, {
				...args,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Avatar, { backgroundColor: "#444" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 58,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Avatar, { backgroundColor: "#777" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 59,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Avatar, { backgroundColor: "#aaa" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 60,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Avatar, { backgroundColor: "#fff" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 61,
						columnNumber: 4
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 57,
				columnNumber: 3
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = { offset: 20 };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "args => {\n  return <ZStack {...args}>\n            <Avatar backgroundColor=\"#444\" />\n            <Avatar backgroundColor=\"#777\" />\n            <Avatar backgroundColor=\"#aaa\" />\n            <Avatar backgroundColor=\"#fff\" />\n        </ZStack>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
