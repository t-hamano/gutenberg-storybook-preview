import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_input, t as Input } from "./input-BGcHJKgk.js";
import { n as init_input_layout, t as InputLayout } from "./input-layout-CGFIMmI0.js";
import { r as init_index_story$1, t as WithSuffixControl$1 } from "./index.story-Bx0cphKv.js";
//#region ../packages/ui/src/form/primitives/input/stories/index.story.tsx
var index_story_exports = /* @__PURE__ */ __exportAll({
	Default: () => Default,
	Disabled: () => Disabled,
	WithPrefix: () => WithPrefix,
	WithSuffixControl: () => WithSuffixControl,
	default: () => meta
});
var import_jsx_dev_runtime, _jsxFileName, meta, Default, WithPrefix, WithSuffixControl, Disabled;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_input();
		init_input_layout();
		init_index_story$1();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/input/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-ui/Form/Primitives/Input",
			id: "design-system-components-form-primitives-input",
			component: Input,
			argTypes: {
				defaultValue: { control: false },
				onValueChange: { action: "onValueChange" },
				value: { control: false },
				type: { control: "text" }
			},
			parameters: { componentStatus: {
				status: "recommended",
				whereUsed: "global"
			} }
		};
		Default = { args: {
			placeholder: "Placeholder",
			"aria-label": "Value"
		} };
		WithPrefix = { args: {
			placeholder: "username",
			"aria-label": "Username",
			prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputLayout.Slot, { children: "@" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 43,
				columnNumber: 11
			}, void 0)
		} };
		WithSuffixControl = { args: {
			"aria-label": "Value",
			suffix: WithSuffixControl$1.args?.suffix
		} };
		Disabled = { args: {
			...Default.args,
			disabled: true
		} };
		try {
			WithPrefix.__docgenInfo = {
				"description": "The `InputLayout.Slot` component can be used to add standard padding in\nthe `prefix` or `suffix` slot.",
				"displayName": "WithPrefix",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/input/stories/index.story.tsx",
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
					originalSource: "{\n  args: {\n    placeholder: 'Placeholder',\n    'aria-label': 'Value'\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithPrefix.parameters = {
			...WithPrefix.parameters,
			docs: {
				...WithPrefix.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    placeholder: 'username',\n    'aria-label': 'Username',\n    prefix: <InputLayout.Slot>@</InputLayout.Slot>\n  }\n}",
					...WithPrefix.parameters?.docs?.source
				},
				description: {
					story: "The `InputLayout.Slot` component can be used to add standard padding in\nthe `prefix` or `suffix` slot.",
					...WithPrefix.parameters?.docs?.description
				}
			}
		};
		WithSuffixControl.parameters = {
			...WithSuffixControl.parameters,
			docs: {
				...WithSuffixControl.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    'aria-label': 'Value',\n    suffix: InputLayoutWithSuffixControl.args?.suffix\n  }\n}",
					...WithSuffixControl.parameters?.docs?.source
				}
			}
		};
		Disabled.parameters = {
			...Disabled.parameters,
			docs: {
				...Disabled.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    disabled: true\n  }\n}",
					...Disabled.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
export { init_index_story as i, WithSuffixControl as n, index_story_exports as r, WithPrefix as t };
