import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_textarea_control, t as TextareaControl } from "./textarea-control-CXzJQ00f.js";
import { i as init_shared, n as WITH_DETAILS_DESCRIPTION, t as DETAILS_EXAMPLE } from "./shared-D3MbP_jP.js";
//#region ../packages/ui/src/form/textarea-control/stories/index.story.tsx
var meta, Default, VisuallyHiddenLabel, WithDetails, Resize, WithOverflow, Disabled;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_textarea_control();
		init_shared();
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-ui/Form/TextareaControl",
			id: "design-system-components-form-textareacontrol",
			component: TextareaControl,
			argTypes: {
				defaultValue: { control: false },
				onValueChange: { action: "onValueChange" },
				value: { control: false }
			},
			parameters: { componentStatus: {
				status: "recommended",
				whereUsed: "global"
			} }
		};
		Default = { args: {
			label: "Label",
			description: "This is the description.",
			placeholder: "Placeholder"
		} };
		VisuallyHiddenLabel = { args: {
			...Default.args,
			hideLabelFromVision: true
		} };
		WithDetails = {
			parameters: { docs: { description: { story: WITH_DETAILS_DESCRIPTION } } },
			args: {
				...Default.args,
				description: void 0,
				details: DETAILS_EXAMPLE
			}
		};
		Resize = { args: { ...Default.args } };
		WithOverflow = { args: {
			...Default.args,
			defaultValue: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
		} };
		Disabled = { args: {
			...Default.args,
			disabled: true
		} };
		try {
			Resize.__docgenInfo = {
				"description": "By default, the textarea is resizable in the vertical direction,\nusing the `resize` handle at the bottom right. Although it is possible to modify\nor disable this [resize behavior through CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/resize),\nwe generally do not recommend it, as the default behavior is best for usability in most cases.",
				"displayName": "Resize",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/textarea-control/stories/index.story.tsx",
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
					originalSource: "{\n  args: {\n    label: 'Label',\n    description: 'This is the description.',\n    placeholder: 'Placeholder'\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		VisuallyHiddenLabel.parameters = {
			...VisuallyHiddenLabel.parameters,
			docs: {
				...VisuallyHiddenLabel.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    hideLabelFromVision: true\n  }\n}",
					...VisuallyHiddenLabel.parameters?.docs?.source
				}
			}
		};
		WithDetails.parameters = {
			...WithDetails.parameters,
			docs: {
				...WithDetails.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    docs: {\n      description: {\n        story: WITH_DETAILS_DESCRIPTION\n      }\n    }\n  },\n  args: {\n    ...Default.args,\n    description: undefined,\n    details: DETAILS_EXAMPLE\n  }\n}",
					...WithDetails.parameters?.docs?.source
				}
			}
		};
		Resize.parameters = {
			...Resize.parameters,
			docs: {
				...Resize.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args\n  }\n}",
					...Resize.parameters?.docs?.source
				},
				description: {
					story: "By default, the textarea is resizable in the vertical direction,\nusing the `resize` handle at the bottom right. Although it is possible to modify\nor disable this [resize behavior through CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/resize),\nwe generally do not recommend it, as the default behavior is best for usability in most cases.",
					...Resize.parameters?.docs?.description
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
init_index_story();
export { Default, Disabled, Resize, VisuallyHiddenLabel, WithDetails, WithOverflow, meta as default };
