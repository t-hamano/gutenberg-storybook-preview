import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { o as init_context_connect, r as contextConnect } from "./use-context-system-BCQpAcZ4.js";
import { n as UnconnectedElevation, r as init_component } from "./component-B7xT59qg.js";
//#region ../packages/components/src/elevation/deprecated.tsx
function UnconnectedDeprecatedElevation(props, forwardedRef) {
	deprecated("wp.components.__experimentalElevation", {
		since: "7.2",
		version: "7.4"
	});
	return UnconnectedElevation(props, forwardedRef);
}
var DeprecatedElevation;
function init_deprecated() {
	return (init_deprecated = __esmMin((() => {
		init_build_module();
		init_context_connect();
		init_component();
		DeprecatedElevation = contextConnect(UnconnectedDeprecatedElevation, "Elevation");
	})))();
}
//#endregion
//#region ../packages/components/src/elevation/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Template, InteractiveTemplate, Default, WithInteractive, WithCustomInteractive;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_deprecated();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/elevation/stories/index.story.tsx";
		meta = {
			component: DeprecatedElevation,
			title: "Components/@wordpress-components/Deprecated/Elevation",
			id: "components-elevation",
			argTypes: {
				as: { control: { type: "text" } },
				borderRadius: { control: { type: "text" } }
			},
			tags: ["status-experimental"],
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "not-recommended",
					whereUsed: "global",
					notes: "Deprecated. Use [`elevation tokens`](?path=/docs/foundations-design-language-elevation--page) from `@wordpress/base-styles` instead."
				}
			}
		};
		Template = (args) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					width: 150,
					height: 150,
					position: "relative"
				},
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DeprecatedElevation, { ...args }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 36,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 29,
				columnNumber: 3
			}, void 0);
		};
		InteractiveTemplate = (args) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				style: {
					border: 0,
					background: "transparent",
					width: 150,
					height: 150,
					position: "relative"
				},
				children: ["Click me", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DeprecatedElevation, { ...args }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 4
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 43,
				columnNumber: 3
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = { value: 5 };
		WithInteractive = InteractiveTemplate.bind({});
		WithInteractive.args = {
			...Default.args,
			isInteractive: true
		};
		WithCustomInteractive = InteractiveTemplate.bind({});
		WithCustomInteractive.args = {
			...Default.args,
			hover: 7,
			active: 1,
			focus: 10
		};
		try {
			WithInteractive.__docgenInfo = {
				"description": "Enable the `isInteractive` prop to automatically generate values\nfor the hover/active/focus states.",
				"displayName": "WithInteractive",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/elevation/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithCustomInteractive.__docgenInfo = {
				"description": "You can also provide custom values for the hover/active/focus states\ninstead of using the `isInteractive` prop.",
				"displayName": "WithCustomInteractive",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/elevation/stories/index.story.tsx",
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
					originalSource: "args => {\n  return <div style={{\n    width: 150,\n    height: 150,\n    position: 'relative'\n  }}>\n            <Elevation {...args} />\n        </div>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithInteractive.parameters = {
			...WithInteractive.parameters,
			docs: {
				...WithInteractive.parameters?.docs,
				source: {
					originalSource: "args => {\n  return <button style={{\n    border: 0,\n    background: 'transparent',\n    width: 150,\n    height: 150,\n    position: 'relative'\n  }}>\n            Click me\n            <Elevation {...args} />\n        </button>;\n}",
					...WithInteractive.parameters?.docs?.source
				},
				description: {
					story: "Enable the `isInteractive` prop to automatically generate values\nfor the hover/active/focus states.",
					...WithInteractive.parameters?.docs?.description
				}
			}
		};
		WithCustomInteractive.parameters = {
			...WithCustomInteractive.parameters,
			docs: {
				...WithCustomInteractive.parameters?.docs,
				source: {
					originalSource: "args => {\n  return <button style={{\n    border: 0,\n    background: 'transparent',\n    width: 150,\n    height: 150,\n    position: 'relative'\n  }}>\n            Click me\n            <Elevation {...args} />\n        </button>;\n}",
					...WithCustomInteractive.parameters?.docs?.source
				},
				description: {
					story: "You can also provide custom values for the hover/active/focus states\ninstead of using the `isInteractive` prop.",
					...WithCustomInteractive.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, WithCustomInteractive, WithInteractive, meta as default };
