import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as SVG, o as init_svg, r as Path } from "./svg-BLFZKYXr.js";
import { n as wordpress_default } from "./wordpress-BwlgBeE7.js";
import { n as init_icon, t as Icon } from "./icon-DxWIlbNr.js";
import { n as init_component, t as VStack } from "./component-9S7Padmp.js";
import { r as init_build_module } from "./library.story-CbQx3MQ6.js";
//#region ../packages/components/src/icon/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default, WithAFunction, MyIconComponent, WithAComponent, WithAnSVG, WithADashicon;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_svg();
		init_build_module();
		init_icon();
		init_component();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/icon/stories/index.story.tsx";
		meta = {
			id: "components-icon",
			title: "Components/@wordpress-components/Icon",
			component: Icon,
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "use-with-caution",
					whereUsed: "global",
					notes: "When rendering SVGs, use [`Icon`](?path=/docs/design-system-components-icon--docs) from `@wordpress/ui` instead."
				}
			}
		};
		Template = (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { ...args }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 23,
			columnNumber: 54
		}, void 0);
		Default = Template.bind({});
		Default.args = { icon: wordpress_default };
		WithAFunction = Template.bind({});
		WithAFunction.args = {
			...Default.args,
			icon: ({ size }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
				width: size,
				height: size,
				src: "https://s.w.org/style/images/about/WordPress-logotype-wmark.png",
				alt: "WordPress"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 37,
				columnNumber: 3
			}, void 0)
		};
		WithAFunction.parameters = { docs: { source: { code: `
<Icon
  icon={ ( { size } ) => (
    <img
      width={ size }
      height={ size }
      src="https://s.w.org/style/images/about/WordPress-logotype-wmark.png"
      alt="WordPress"
    />
  ) }
/>
        ` } } };
		MyIconComponent = ({ size }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SVG, {
			width: size,
			height: size,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Path, { d: "M5 4v3h5.5v12h3V7H19V4z" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 66,
				columnNumber: 3
			}, void 0)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 65,
			columnNumber: 2
		}, void 0);
		WithAComponent = Template.bind({});
		WithAComponent.args = {
			...Default.args,
			icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MyIconComponent, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 76,
				columnNumber: 8
			}, void 0)
		};
		WithAComponent.parameters = { docs: { source: { code: `
const MyIconComponent = ( { size } ) => (
  <SVG width={ size } height={ size }>
    <Path d="M5 4v3h5.5v12h3V7H19V4z" />
  </SVG>
);

<Icon icon={ <MyIconComponent /> } />
        ` } } };
		WithAnSVG = Template.bind({});
		WithAnSVG.args = {
			...Default.args,
			icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SVG, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Path, { d: "M5 4v3h5.5v12h3V7H19V4z" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 99,
				columnNumber: 4
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 98,
				columnNumber: 3
			}, void 0)
		};
		WithADashicon = (args) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VStack, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { ...args }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 112,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: "This won’t show an icon if the Dashicons stylesheet isn’t loaded." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 113,
				columnNumber: 4
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 111,
				columnNumber: 3
			}, void 0);
		};
		WithADashicon.args = {
			...Default.args,
			icon: "wordpress"
		};
		try {
			WithAFunction.__docgenInfo = {
				"description": "When `icon` is a function, it will be passed the `size` prop and any other additional props.",
				"displayName": "WithAFunction",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/icon/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithAComponent.__docgenInfo = {
				"description": "When `icon` is a component, it will be passed the `size` prop and any other additional props.",
				"displayName": "WithAComponent",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/icon/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithADashicon.__docgenInfo = {
				"description": "Although it's preferred to use icons from the `@wordpress/icons` package, [Dashicons](https://developer.wordpress.org/resource/dashicons/) are still supported,\nas long as you are in a context where the Dashicons stylesheet is loaded. To simulate that here,\nuse the Global CSS Injector in the Storybook toolbar at the top and select the \"WordPress\" preset.",
				"displayName": "WithADashicon",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/icon/stories/index.story.tsx",
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
					originalSource: "args => <Icon {...args} />",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithAFunction.parameters = {
			...WithAFunction.parameters,
			docs: {
				...WithAFunction.parameters?.docs,
				source: {
					originalSource: "args => <Icon {...args} />",
					...WithAFunction.parameters?.docs?.source
				},
				description: {
					story: "When `icon` is a function, it will be passed the `size` prop and any other additional props.",
					...WithAFunction.parameters?.docs?.description
				}
			}
		};
		WithAComponent.parameters = {
			...WithAComponent.parameters,
			docs: {
				...WithAComponent.parameters?.docs,
				source: {
					originalSource: "args => <Icon {...args} />",
					...WithAComponent.parameters?.docs?.source
				},
				description: {
					story: "When `icon` is a component, it will be passed the `size` prop and any other additional props.",
					...WithAComponent.parameters?.docs?.description
				}
			}
		};
		WithAnSVG.parameters = {
			...WithAnSVG.parameters,
			docs: {
				...WithAnSVG.parameters?.docs,
				source: {
					originalSource: "args => <Icon {...args} />",
					...WithAnSVG.parameters?.docs?.source
				}
			}
		};
		WithADashicon.parameters = {
			...WithADashicon.parameters,
			docs: {
				...WithADashicon.parameters?.docs,
				source: {
					originalSource: "args => {\n  return <VStack>\n            <Icon {...args} />\n            <small>\n                This won’t show an icon if the Dashicons stylesheet isn’t\n                loaded.\n            </small>\n        </VStack>;\n}",
					...WithADashicon.parameters?.docs?.source
				},
				description: {
					story: "Although it's preferred to use icons from the `@wordpress/icons` package, [Dashicons](https://developer.wordpress.org/resource/dashicons/) are still supported,\nas long as you are in a context where the Dashicons stylesheet is loaded. To simulate that here,\nuse the Global CSS Injector in the Storybook toolbar at the top and select the \"WordPress\" preset.",
					...WithADashicon.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, WithAComponent, WithADashicon, WithAFunction, WithAnSVG, meta as default };
