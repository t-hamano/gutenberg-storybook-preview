import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { o as init_context_connect, r as contextConnect } from "./use-context-system-6z_jGcZR.js";
import { n as init_component$1, t as View } from "./component-CkY7eURU.js";
import { n as init_component$2, t as Text } from "./component-CWmndQns.js";
import { n as useSurface, t as init_hook } from "./hook-D2gANUe4.js";
//#region ../packages/components/src/surface/component.tsx
function UnconnectedSurface(props, forwardedRef) {
	deprecated("wp.components.__experimentalSurface", {
		since: "7.2",
		version: "7.4"
	});
	const surfaceProps = useSurface(props);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(View, {
		...surfaceProps,
		ref: forwardedRef
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 20,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, Surface;
function init_component() {
	return (init_component = __esmMin((() => {
		init_build_module();
		init_context_connect();
		init_component$1();
		init_hook();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/surface/component.tsx";
		Surface = contextConnect(UnconnectedSurface, "Surface");
		try {
			Surface.__docgenInfo = {
				"description": "`Surface` is a core component that renders a primary background color.\n\nThis component is deprecated. Write your own CSS instead,\npreferably using the [design tokens](https://wordpress.github.io/gutenberg/?path=/docs/design-system-tokens-introduction--docs)\navailable in `@wordpress/theme`.",
				"displayName": "Surface",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/surface/component.tsx",
				"methods": [],
				"props": {
					"backgroundSize": {
						"defaultValue": { "value": "12" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/surface/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines the grid size for \"dotted\" and \"grid\" variants.",
						"name": "backgroundSize",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"borderBottom": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/surface/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders a bottom border.",
						"name": "borderBottom",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"borderLeft": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/surface/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders a left border.",
						"name": "borderLeft",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"borderRight": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/surface/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders a right border.",
						"name": "borderRight",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"borderTop": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/surface/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders a top border.",
						"name": "borderTop",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"variant": {
						"defaultValue": { "value": "'primary'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/surface/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Modifies the background color of `Surface`.\n\n* `primary`: Used for almost all cases.\n* `secondary`: Used as a secondary background for inner `Surface` components.\n* `tertiary`: Used as the app/site wide background. Visible in **dark mode** only. Use case is rare.\n* `grid`: Used to show a grid.\n* `dotted`: Used to show a dots grid.",
						"name": "variant",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "SurfaceVariant",
							"value": [
								{ "value": "\"grid\"" },
								{ "value": "\"primary\"" },
								{ "value": "\"dotted\"" },
								{ "value": "\"secondary\"" },
								{ "value": "\"tertiary\"" }
							]
						}
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/surface/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The children elements.",
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
								{ "value": "\"span\"" },
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
								{ "value": "\"div\"" },
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
				"tags": { "deprecated": "In the example below, notice how the `Surface` renders in white (or dark gray if in dark mode).\n\n```jsx\nimport {\n__experimentalSurface as Surface,\n__experimentalText as Text,\n} from '@wordpress/components';\n\nfunction Example() {\n	return (\n		<Surface>\n			<Text>Code is Poetry</Text>\n		</Surface>\n	);\n}\n```" }
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/surface/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_component();
		init_component$2();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/surface/stories/index.story.tsx";
		meta = {
			component: Surface,
			title: "Components/@wordpress-components/Deprecated/Surface",
			id: "components-surface",
			argTypes: {
				children: { control: false },
				as: { control: { type: "text" } }
			},
			tags: ["status-experimental"],
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "not-recommended",
					whereUsed: "global",
					notes: "Deprecated. Write your own CSS instead, preferably using the [`design tokens`](?path=/docs/design-system-tokens-introduction--docs) available in `@wordpress/theme`."
				}
			}
		};
		Template = (args) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Surface, {
				...args,
				style: {
					padding: 20,
					maxWidth: 400,
					margin: "20vh auto"
				},
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Code is Poetry" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 34,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 30,
				columnNumber: 3
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = {};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "args => {\n  return <Surface {...args} style={{\n    padding: 20,\n    maxWidth: 400,\n    margin: '20vh auto'\n  }}>\n            <Text>Code is Poetry</Text>\n        </Surface>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
