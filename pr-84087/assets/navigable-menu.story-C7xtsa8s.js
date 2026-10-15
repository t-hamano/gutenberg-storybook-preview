import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_menu, t as NavigableMenu } from "./menu-s5E2VxEW.js";
//#region ../packages/components/src/navigable-container/stories/navigable-menu.story.tsx
var import_jsx_dev_runtime, fn, _jsxFileName, meta, Default;
function init_navigable_menu_story() {
	return (init_navigable_menu_story = __esmMin((() => {
		init_menu();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({fn} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/navigable-container/stories/navigable-menu.story.tsx";
		meta = {
			title: "Components/@wordpress-components/Containers/NavigableMenu",
			id: "components-navigablemenu",
			component: NavigableMenu,
			argTypes: { children: { control: false } },
			args: {
				onKeyDown: fn(),
				onNavigate: fn()
			},
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "unaudited",
					whereUsed: "global"
				}
			}
		};
		Default = (args) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { children: "Before navigable menu" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 32,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigableMenu, {
					...args,
					style: {
						margin: "32px 0",
						padding: "16px",
						border: "1px solid black"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							role: "menuitem",
							children: "Item 1 (non-tabbable, non-focusable)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 41,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							role: "menuitem",
							children: "Item 2 (tabbable, focusable)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 42,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							role: "menuitem",
							disabled: true,
							children: "Item 3 (disabled, therefore non-tabbable and not-focusable)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 43,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							role: "menuitem",
							tabIndex: -1,
							children: "Item 4 (non-tabbable, non-focusable)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 46,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							role: "menuitem",
							tabIndex: 0,
							children: "Item 5 (tabbable, focusable)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 49,
							columnNumber: 5
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 33,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { children: "After navigable menu" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 4
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 31,
				columnNumber: 3
			}, void 0);
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "args => {\n  return <>\n            <button>Before navigable menu</button>\n            <NavigableMenu {...args} style={{\n      margin: '32px 0',\n      padding: '16px',\n      border: '1px solid black'\n    }}>\n                <div role=\"menuitem\">Item 1 (non-tabbable, non-focusable)</div>\n                <button role=\"menuitem\">Item 2 (tabbable, focusable)</button>\n                <button role=\"menuitem\" disabled>\n                    Item 3 (disabled, therefore non-tabbable and not-focusable)\n                </button>\n                <span role=\"menuitem\" tabIndex={-1}>\n                    Item 4 (non-tabbable, non-focusable)\n                </span>\n                <div role=\"menuitem\" tabIndex={0}>\n                    Item 5 (tabbable, focusable)\n                </div>\n            </NavigableMenu>\n            <button>After navigable menu</button>\n        </>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_navigable_menu_story();
export { Default, meta as default };
