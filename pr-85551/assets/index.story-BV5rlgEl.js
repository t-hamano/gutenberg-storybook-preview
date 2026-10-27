import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_checkbox_control, t as CheckboxControl } from "./checkbox-control-BRuRIIsZ.js";
import { i as init_shared, n as WITH_DETAILS_DESCRIPTION, t as DETAILS_EXAMPLE } from "./shared-BRqYhAs4.js";
//#region ../packages/ui/src/form/checkbox-control/stories/index.story.tsx
var meta, Default, WithDescription, WithLongLabel, VisuallyHiddenLabel, WithDetails, Disabled;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_checkbox_control();
		init_shared();
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-ui/Form/CheckboxControl",
			id: "design-system-components-form-checkboxcontrol",
			component: CheckboxControl,
			argTypes: {
				checked: { control: false },
				onCheckedChange: { action: "onCheckedChange" }
			},
			parameters: { componentStatus: {
				status: "recommended",
				whereUsed: "global"
			} }
		};
		Default = { args: { label: "Label" } };
		WithDescription = { args: {
			...Default.args,
			description: "This is the description."
		} };
		WithLongLabel = { args: {
			...Default.args,
			label: "This is a long label that should wrap to the next line. This is a long label that should wrap to the next line. This is a long label that should wrap to the next line."
		} };
		VisuallyHiddenLabel = { args: {
			...Default.args,
			hideLabelFromVision: true
		} };
		WithDetails = {
			parameters: { docs: { description: { story: WITH_DETAILS_DESCRIPTION } } },
			args: {
				...Default.args,
				details: DETAILS_EXAMPLE
			}
		};
		Disabled = { args: {
			...Default.args,
			disabled: true
		} };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    label: 'Label'\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithDescription.parameters = {
			...WithDescription.parameters,
			docs: {
				...WithDescription.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    description: 'This is the description.'\n  }\n}",
					...WithDescription.parameters?.docs?.source
				}
			}
		};
		WithLongLabel.parameters = {
			...WithLongLabel.parameters,
			docs: {
				...WithLongLabel.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    label: 'This is a long label that should wrap to the next line. This is a long label that should wrap to the next line. This is a long label that should wrap to the next line.'\n  }\n}",
					...WithLongLabel.parameters?.docs?.source
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
					originalSource: "{\n  parameters: {\n    docs: {\n      description: {\n        story: WITH_DETAILS_DESCRIPTION\n      }\n    }\n  },\n  args: {\n    ...Default.args,\n    details: DETAILS_EXAMPLE\n  }\n}",
					...WithDetails.parameters?.docs?.source
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
export { Default, Disabled, VisuallyHiddenLabel, WithDescription, WithDetails, WithLongLabel, meta as default };
