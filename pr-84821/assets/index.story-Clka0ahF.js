import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
//#region ../packages/components/src/progress-bar/style.module.scss
var track, indicator, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		track = "_track_162e2_1";
		indicator = "_indicator_162e2_14";
		style_module_default = {
			track,
			indicator,
			"is-indeterminate": "_is-indeterminate_162e2_30",
			"indeterminate-slide": "_indeterminate-slide_162e2_1",
			"progress-element": "_progress-element_162e2_50"
		};
	})))();
}
//#endregion
//#region ../packages/components/src/progress-bar/index.tsx
function UnforwardedProgressBar(props, ref) {
	const { className, value, ...progressProps } = props;
	const isIndeterminate = !Number.isFinite(value);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
		className: clsx(style_module_default.track, className),
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
			className: clsx(style_module_default.indicator, { [style_module_default["is-indeterminate"]]: isIndeterminate }),
			style: { "--indicator-width": !isIndeterminate ? `${value}%` : void 0 }
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 18,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("progress", {
			className: style_module_default["progress-element"],
			max: 100,
			value,
			"aria-label": __("Loading …"),
			ref,
			...progressProps
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 28,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 17,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, ProgressBar;
function init_progress_bar() {
	return (init_progress_bar = __esmMin((() => {
		init_clsx();
		init_build_module();
		init_react();
		init_style_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/progress-bar/index.tsx";
		ProgressBar = (0, import_react.forwardRef)(UnforwardedProgressBar);
		ProgressBar.displayName = "ProgressBar";
		try {
			ProgressBar.__docgenInfo = {
				"description": "A simple horizontal progress bar component.\n\nSupports two modes: determinate and indeterminate. A progress bar is determinate\nwhen a specific progress value has been specified (from 0 to 100), and indeterminate\nwhen a value hasn't been specified.\n\n```jsx\nimport { ProgressBar } from '@wordpress/components';\n\nconst MyLoadingComponent = () => {\n	return <ProgressBar />;\n};\n```",
				"displayName": "ProgressBar",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/progress-bar/index.tsx",
				"methods": [],
				"props": {
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/progress-bar/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Value of the progress bar.",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/progress-bar/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A CSS class to apply to the progress bar wrapper (track) element.",
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
//#region ../packages/components/src/progress-bar/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default, withCustomWidthCustomCSS, WithCustomWidth;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_progress_bar();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/progress-bar/stories/index.story.tsx";
		meta = {
			component: ProgressBar,
			title: "Components/@wordpress-components/Feedback/ProgressBar",
			id: "components-progressbar",
			argTypes: { value: { control: {
				type: "number",
				min: 0,
				max: 100,
				step: 1
			} } },
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "not-recommended",
					whereUsed: "global",
					notes: "Use [`Progress`](?path=/docs/design-system-components-progress--docs) from `@wordpress/ui` instead."
				}
			}
		};
		Template = ({ ...args }) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProgressBar, { ...args }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 26,
				columnNumber: 9
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = {};
		withCustomWidthCustomCSS = `
    .custom-progress-bar {
        width: 100%;
    }
`;
		WithCustomWidth = Template.bind({});
		WithCustomWidth.args = { className: "custom-progress-bar" };
		WithCustomWidth.decorators = [(Story) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { children: withCustomWidthCustomCSS }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 61,
			columnNumber: 4
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Story, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 62,
			columnNumber: 4
		}, void 0)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 60,
			columnNumber: 3
		}, void 0)];
		try {
			WithCustomWidth.__docgenInfo = {
				"description": "A progress bar with a custom width.\n\nYou can override the default `width` by passing a custom CSS class via the\n`className` prop.\n\nThis example shows a progress bar with an overridden `width` of `100%` which\nmakes it fit all available horizontal space of the parent element. The CSS\nclass looks like this:\n\n```css\n.custom-progress-bar {\n  width: 100%;\n}\n```",
				"displayName": "WithCustomWidth",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/progress-bar/stories/index.story.tsx",
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
					originalSource: "({\n  ...args\n}) => {\n  return <ProgressBar {...args} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithCustomWidth.parameters = {
			...WithCustomWidth.parameters,
			docs: {
				...WithCustomWidth.parameters?.docs,
				source: {
					originalSource: "({\n  ...args\n}) => {\n  return <ProgressBar {...args} />;\n}",
					...WithCustomWidth.parameters?.docs?.source
				},
				description: {
					story: "A progress bar with a custom width.\n\nYou can override the default `width` by passing a custom CSS class via the\n`className` prop.\n\nThis example shows a progress bar with an overridden `width` of `100%` which\nmakes it fit all available horizontal space of the parent element. The CSS\nclass looks like this:\n\n```css\n.custom-progress-bar {\n  width: 100%;\n}\n```",
					...WithCustomWidth.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, WithCustomWidth, meta as default };
