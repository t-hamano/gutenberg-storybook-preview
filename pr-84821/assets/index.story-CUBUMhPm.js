import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { i as init_utils, n as unit_control_default, o as useCustomUnits, t as init_unit_control$1 } from "./unit-control-Ch49FAD3.js";
import { n as useSettings, t as init_use_settings } from "./use-settings-DBuseju1.js";
//#region ../packages/block-editor/src/components/unit-control/index.jsx
function UnitControl({ units: unitsProp, ...props }) {
	const [availableUnits] = useSettings("spacing.units");
	const units = useCustomUnits({
		availableUnits: availableUnits || [
			"%",
			"px",
			"em",
			"rem",
			"vw"
		],
		units: unitsProp
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(unit_control_default, {
		units,
		...props
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 14,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_unit_control() {
	return (init_unit_control = __esmMin((() => {
		init_utils(), init_unit_control$1();
		init_use_settings();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/unit-control/index.jsx";
		UnitControl.__docgenInfo = {
			"description": "",
			"methods": [],
			"displayName": "UnitControl"
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/unit-control/stories/index.story.jsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_unit_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/unit-control/stories/index.story.jsx";
		meta = {
			id: "blockeditor-unitcontrol",
			title: "Editor/Block Editor/UnitControl",
			component: UnitControl,
			parameters: { docs: {
				canvas: { sourceState: "shown" },
				description: { component: "UnitControl allows the user to set a numeric quantity as well as a unit." }
			} },
			argTypes: {
				onChange: {
					action: "onChange",
					description: "Callback function when the value changes.",
					table: { type: { summary: "function" } }
				},
				onUnitChange: {
					action: "onUnitChange",
					description: "Callback function when the unit changes.",
					table: { type: { summary: "function" } }
				},
				labelPosition: {
					control: "radio",
					options: [
						"top",
						"side",
						"bottom",
						"edge"
					],
					description: "The position of the label.",
					table: { type: { summary: "string" } }
				},
				label: {
					control: "text",
					description: "The label for the control.",
					table: { type: { summary: "string" } }
				},
				value: {
					control: { type: null },
					description: "The value of the control.",
					table: { type: { summary: "string" } }
				},
				size: {
					control: "radio",
					options: ["default", "small"],
					description: "The size of the control.",
					table: {
						type: { summary: "string" },
						defaultValue: { summary: "default" }
					}
				},
				disabled: {
					control: "boolean",
					description: "Whether the control is disabled.",
					table: {
						type: { summary: "boolean" },
						defaultValue: { summary: false }
					}
				},
				disableUnits: {
					control: "boolean",
					description: "If true, the unit select is hidden.",
					table: {
						type: { summary: "boolean" },
						defaultValue: { summary: false }
					}
				},
				isPressEnterToChange: {
					control: "boolean",
					description: "If true, the ENTER key press is required to trigger onChange. Change is also triggered on blur.",
					table: {
						type: { summary: "boolean" },
						defaultValue: { summary: false }
					}
				},
				isUnitSelectTabbable: {
					control: "boolean",
					description: "Determines if the unit select is tabbable.",
					table: {
						type: { summary: "boolean" },
						defaultValue: { summary: true }
					}
				}
			}
		};
		Default = {
			render: function Template({ onChange, ...args }) {
				const [value, setValue] = (0, import_react.useState)();
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UnitControl, {
					...args,
					value,
					onChange: (...changeArgs) => {
						onChange(...changeArgs);
						setValue(...changeArgs);
					}
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 105,
					columnNumber: 4
				}, this);
			},
			args: { label: "Label" }
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Template({\n    onChange,\n    ...args\n  }) {\n    const [value, setValue] = useState();\n    return <UnitControl {...args} value={value} onChange={(...changeArgs) => {\n      onChange(...changeArgs);\n      setValue(...changeArgs);\n    }} />;\n  },\n  args: {\n    label: 'Label'\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
