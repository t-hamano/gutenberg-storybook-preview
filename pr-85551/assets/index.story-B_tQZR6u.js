import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_checkbox, t as Checkbox } from "./checkbox-Al_Z74hM.js";
//#region ../packages/ui/src/form/primitives/checkbox/stories/index.story.tsx
var meta, Default, Checked, Indeterminate, Disabled, DisabledChecked;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_checkbox();
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-ui/Form/Primitives/Checkbox",
			id: "design-system-components-form-primitives-checkbox",
			component: Checkbox,
			argTypes: { onCheckedChange: { action: "onCheckedChange" } },
			parameters: { componentStatus: {
				status: "recommended",
				whereUsed: "global"
			} }
		};
		Default = { args: { "aria-label": "Option" } };
		Checked = { args: {
			...Default.args,
			defaultChecked: true
		} };
		Indeterminate = { args: {
			...Default.args,
			indeterminate: true
		} };
		Disabled = { args: {
			...Default.args,
			disabled: true
		} };
		DisabledChecked = { args: {
			...Default.args,
			disabled: true,
			defaultChecked: true
		} };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    'aria-label': 'Option'\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		Checked.parameters = {
			...Checked.parameters,
			docs: {
				...Checked.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    defaultChecked: true\n  }\n}",
					...Checked.parameters?.docs?.source
				}
			}
		};
		Indeterminate.parameters = {
			...Indeterminate.parameters,
			docs: {
				...Indeterminate.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    indeterminate: true\n  }\n}",
					...Indeterminate.parameters?.docs?.source
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
		DisabledChecked.parameters = {
			...DisabledChecked.parameters,
			docs: {
				...DisabledChecked.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    disabled: true,\n    defaultChecked: true\n  }\n}",
					...DisabledChecked.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Checked, Default, Disabled, DisabledChecked, Indeterminate, meta as default };
