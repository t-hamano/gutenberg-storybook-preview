import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_textarea, t as Textarea } from "./textarea-DgE6P52o.js";
//#region ../packages/ui/src/form/primitives/textarea/stories/index.story.tsx
var meta, Default, Disabled, WithOverflow, WithOneRow;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_textarea();
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-ui/Form/Primitives/Textarea",
			id: "design-system-components-form-primitives-textarea",
			component: Textarea,
			argTypes: { onValueChange: { action: "onValueChange" } },
			parameters: { componentStatus: {
				status: "recommended",
				whereUsed: "global"
			} }
		};
		Default = { args: {
			placeholder: "Placeholder",
			"aria-label": "Value"
		} };
		Disabled = { args: {
			...Default.args,
			disabled: true
		} };
		WithOverflow = { args: {
			...Default.args,
			defaultValue: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
		} };
		WithOneRow = { args: {
			...Default.args,
			rows: 1
		} };
		try {
			WithOneRow.__docgenInfo = {
				"description": "When `rows` is set to `1`, the textarea will have the same footprint as a default `Input`.",
				"displayName": "WithOneRow",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/textarea/stories/index.story.tsx",
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
		WithOverflow.parameters = {
			...WithOverflow.parameters,
			docs: {
				...WithOverflow.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    defaultValue: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`\n  }\n}",
					...WithOverflow.parameters?.docs?.source
				}
			}
		};
		WithOneRow.parameters = {
			...WithOneRow.parameters,
			docs: {
				...WithOneRow.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    rows: 1\n  }\n}",
					...WithOneRow.parameters?.docs?.source
				},
				description: {
					story: "When `rows` is set to `1`, the textarea will have the same footprint as a default `Input`.",
					...WithOneRow.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, Disabled, WithOneRow, WithOverflow, meta as default };
