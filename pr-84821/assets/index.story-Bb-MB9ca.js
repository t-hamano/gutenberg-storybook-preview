import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as wordpress_default } from "./wordpress-Dmkk4E44.js";
import { n as init_icon, t as Icon } from "./icon-C8ogYiCq.js";
import { r as init_build_module } from "./library.story-CFsmdbdz.js";
//#region ../packages/ui/src/icon/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_build_module();
		init_icon();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/icon/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-ui/Icon",
			id: "design-system-components-icon",
			component: Icon,
			tags: ["manifest"],
			decorators: [(Story) => {
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: { color: "var(--wpds-color-foreground-content-neutral, #1e1e1e)" },
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Story, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 18,
						columnNumber: 6
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 13,
					columnNumber: 5
				}, void 0);
			}],
			parameters: { componentStatus: {
				status: "recommended",
				whereUsed: "global",
				notes: "Prefer this component over the `Icon` component from `@wordpress/components` or `@wordpress/icons`."
			} }
		};
		Default = { args: { icon: wordpress_default } };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    icon: wordpress\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
