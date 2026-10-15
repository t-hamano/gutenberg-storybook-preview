import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { o as init_context_connect, r as contextConnect } from "./use-context-system-D7pcITcN.js";
import { n as init_component, t as View } from "./component-CkY7eURU.js";
import { n as UnconnectedScrollable, r as init_component$1 } from "./component-DAsJsPGB.js";
//#region ../packages/components/src/scrollable/deprecated.tsx
function UnconnectedDeprecatedScrollable(props, forwardedRef) {
	deprecated("wp.components.__experimentalScrollable", {
		since: "7.2",
		version: "7.4"
	});
	return UnconnectedScrollable(props, forwardedRef);
}
var DeprecatedScrollable;
function init_deprecated() {
	return (init_deprecated = __esmMin((() => {
		init_build_module();
		init_context_connect();
		init_component$1();
		DeprecatedScrollable = contextConnect(UnconnectedDeprecatedScrollable, "Scrollable");
	})))();
}
//#endregion
//#region ../packages/components/src/scrollable/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_component();
		init_deprecated();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/scrollable/stories/index.story.tsx";
		meta = {
			component: DeprecatedScrollable,
			title: "Components/@wordpress-components/Deprecated/Scrollable",
			id: "components-scrollable",
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
		Template = ({ ...args }) => {
			const targetRef = (0, import_react.useRef)(null);
			const onButtonClick = () => {
				targetRef.current?.focus();
			};
			const containerWidth = 300;
			const containerHeight = 400;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DeprecatedScrollable, {
				style: {
					height: containerHeight,
					width: containerWidth
				},
				...args,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(View, {
					style: {
						backgroundColor: "#eee",
						height: args.scrollDirection === "x" ? containerHeight : 1e3,
						width: args.scrollDirection === "y" ? containerWidth : 1e3,
						position: "relative"
					},
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: onButtonClick,
						children: "Move focus to an element out of view"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 57,
						columnNumber: 5
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
						ref: targetRef,
						style: {
							position: "absolute",
							bottom: args.scrollDirection === "x" ? "initial" : 0,
							right: 0
						},
						type: "text",
						"aria-label": "Element out of view",
						value: "Focus me",
						readOnly: true
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 60,
						columnNumber: 5
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 48,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 44,
				columnNumber: 3
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = {
			smoothScroll: false,
			scrollDirection: "y"
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "({\n  ...args\n}) => {\n  const targetRef = useRef<HTMLInputElement>(null);\n  const onButtonClick = () => {\n    targetRef.current?.focus();\n  };\n  const containerWidth = 300;\n  const containerHeight = 400;\n  return <Scrollable style={{\n    height: containerHeight,\n    width: containerWidth\n  }} {...args}>\n            <View style={{\n      backgroundColor: '#eee',\n      height: args.scrollDirection === 'x' ? containerHeight : 1000,\n      width: args.scrollDirection === 'y' ? containerWidth : 1000,\n      position: 'relative'\n    }}>\n                <button onClick={onButtonClick}>\n                    Move focus to an element out of view\n                </button>\n                <input ref={targetRef} style={{\n        position: 'absolute',\n        bottom: args.scrollDirection === 'x' ? 'initial' : 0,\n        right: 0\n      }} type=\"text\" aria-label=\"Element out of view\" value=\"Focus me\" readOnly />\n            </View>\n        </Scrollable>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
