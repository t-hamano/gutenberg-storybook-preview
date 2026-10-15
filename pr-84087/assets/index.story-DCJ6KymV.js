import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { t as icon_default } from "./icon-DEDMwo2v.js";
import { n as tip_default } from "./tip-CDeBfvT8.js";
import { r as init_build_module$1 } from "./library.story-DawnfKTW.js";
//#region ../packages/components/src/tip/index.tsx
/**
* Displays a contextual tip with a decorative light-bulb icon.
*
* @deprecated Use `Notice.Root` and `Notice.Description` from `@wordpress/ui` instead.
*/
function Tip(props) {
	const { children } = props;
	deprecated("wp.components.Tip", {
		since: "7.2",
		version: "7.4",
		alternative: "Notice from @wordpress/ui"
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
		className: "components-tip",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(icon_default, { icon: tip_default }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 21,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("p", { children }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 22,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 20,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_tip() {
	return (init_tip = __esmMin((() => {
		init_build_module$1();
		init_build_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tip/index.tsx";
		try {
			Tip.__docgenInfo = {
				"description": "Displays a contextual tip with a decorative light-bulb icon.",
				"displayName": "Tip",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tip/index.tsx",
				"methods": [],
				"props": { "children": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "gutenberg-storybook-preview/packages/components/src/tip/types.ts",
						"name": "TypeLiteral"
					}],
					"description": "Children to render in the tip.",
					"name": "children",
					"required": true,
					"tags": {},
					"type": { "name": "ReactNode" }
				} },
				"tags": { "deprecated": "Use `Notice.Root` and `Notice.Description` from `@wordpress/ui` instead." }
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/tip/stories/index.story.tsx
var index_story_exports = /* @__PURE__ */ __exportAll({
	Default: () => Default,
	default: () => meta
});
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_tip();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tip/stories/index.story.tsx";
		meta = {
			component: Tip,
			title: "Components/@wordpress-components/Deprecated/Tip",
			id: "components-tip",
			argTypes: { children: { control: { type: "text" } } },
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "not-recommended",
					whereUsed: "global",
					notes: "Deprecated. Use [`Notice`](?path=/docs/design-system-components-notice--docs) from `@wordpress/ui` instead. See the [migration guide](?path=/docs/components-tip--migration-guide)."
				}
			}
		};
		Template = (args) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tip, { ...args }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 26,
				columnNumber: 9
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = { children: "An example tip" };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "args => {\n  return <Tip {...args} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
export { init_index_story as n, index_story_exports as t };
