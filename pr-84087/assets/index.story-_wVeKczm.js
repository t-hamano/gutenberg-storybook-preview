import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as init_icon, t as Icon } from "./icon-TYj7I5OY.js";
import { n as wordpress_default } from "./wordpress-Brhxv8eP.js";
import { n as init_stack, t as Stack } from "./stack-DCjz3kq7.js";
import { n as init_component, t as FlexBlock } from "./component-Bf4F7MIt.js";
import { n as init_component$1, t as HStack } from "./component-D91dSxn4.js";
import { n as init_base_control, t as BaseControl } from "./base-control-DsOU5iCO.js";
import { n as init_form_toggle, t as FormToggle } from "./form-toggle-CZcq6coa.js";
import { r as init_build_module } from "./library.story-DawnfKTW.js";
//#region ../packages/components/src/toggle-control/index.tsx
function UnforwardedToggleControl({ label, checked, help, className, onChange, disabled, __nextHasNoMarginBottom: _, ...additionalProps }, ref) {
	function onChangeToggle(event) {
		onChange(event.target.checked);
	}
	const id = `inspector-toggle-control-${use_instance_id_default(ToggleControl)}`;
	let describedBy, helpLabel;
	if (help) {
		if (typeof help === "function") {
			if (checked !== void 0) helpLabel = help(checked);
		} else helpLabel = help;
		if (helpLabel) describedBy = id + "__help";
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(BaseControl, {
		id,
		help: helpLabel && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("span", {
			className: "components-toggle-control__help",
			children: helpLabel
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 54,
			columnNumber: 6
		}, this),
		className: clsx("components-toggle-control", className),
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(HStack, {
			justify: "flex-start",
			spacing: 2,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(FormToggle, {
				id,
				checked,
				onChange: onChangeToggle,
				"aria-describedby": describedBy,
				disabled,
				ref,
				...additionalProps
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 62,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(FlexBlock, {
				as: "label",
				htmlFor: id,
				className: clsx("components-toggle-control__label", { "is-disabled": disabled }),
				children: label
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 71,
				columnNumber: 5
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 61,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 50,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, ToggleControl;
function init_toggle_control() {
	return (init_toggle_control = __esmMin((() => {
		init_clsx();
		init_react();
		init_use_instance_id();
		init_component();
		init_form_toggle();
		init_base_control();
		init_component$1();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toggle-control/index.tsx";
		ToggleControl = (0, import_react.forwardRef)(UnforwardedToggleControl);
		ToggleControl.displayName = "ToggleControl";
		try {
			ToggleControl.__docgenInfo = {
				"description": "ToggleControl is used to generate a toggle user interface.\n\n```jsx\nimport { ToggleControl } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyToggleControl = () => {\n  const [ value, setValue ] = useState( false );\n\n  return (\n    <ToggleControl\n      label=\"Fixed Background\"\n      checked={ value }\n      onChange={ () => setValue( ( state ) => ! state ) }\n    />\n  );\n};\n```",
				"displayName": "ToggleControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toggle-control/index.tsx",
				"methods": [],
				"props": {
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-toggle/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If disabled is true the toggle will be disabled and apply the appropriate\nstyles.",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"checked": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-toggle/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If checked is true the toggle will be checked. If checked is false the\ntoggle will be unchecked. If no value is passed the toggle will be\nunchecked.",
						"name": "checked",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"__nextHasNoMarginBottom": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting into the new margin-free styles that will become the default in a future version.\n@deprecated Default behavior since WordPress 7.0. Prop can be safely removed.\n@ignore",
						"name": "__nextHasNoMarginBottom",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"help": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "help",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode | ((checked: boolean) => ReactNode)" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The label for the toggle.",
						"name": "label",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A callback function invoked when the toggle is clicked.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: boolean) => void" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/toggle-control/stories/index.story.tsx
var index_story_exports = /* @__PURE__ */ __exportAll({
	Default: () => Default,
	WithHelpText: () => WithHelpText,
	WithVisual: () => WithVisual,
	default: () => meta
});
function ControlledToggleControl({ onChange, ...props }) {
	const [checked, setChecked] = (0, import_react.useState)(true);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleControl, {
		...props,
		checked,
		onChange: (...changeArgs) => {
			setChecked(...changeArgs);
			onChange(...changeArgs);
		}
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 37,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, meta, Default, WithHelpText, WithVisual;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_build_module();
		init_icon(), init_stack();
		init_toggle_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toggle-control/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-components/Selection & Input/Common/ToggleControl",
			id: "components-togglecontrol",
			component: ToggleControl,
			argTypes: {
				checked: { control: false },
				help: { control: { type: "text" } },
				label: { control: { type: "text" } },
				onChange: { action: "onChange" }
			},
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "not-recommended",
					whereUsed: "global",
					notes: "Use [`SwitchControl`](?path=/docs/design-system-components-form-switchcontrol--docs) from `@wordpress/ui` instead. See the [migration guide](?path=/docs/components-togglecontrol--migration-guide)."
				}
			}
		};
		ControlledToggleControl.displayName = "ToggleControl";
		Default = {
			render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ControlledToggleControl, { ...args }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 50,
				columnNumber: 22
			}, void 0),
			args: { label: "Enable something" }
		};
		WithHelpText = {
			...Default,
			args: {
				...Default.args,
				help: "This is some help text."
			}
		};
		WithVisual = {
			...Default,
			render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
				gap: "md",
				align: "flex-start",
				justify: "space-between",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ControlledToggleControl, { ...args }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 73,
					columnNumber: 5
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 72,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
					align: "center",
					justify: "center",
					style: {
						backgroundColor: "var(--wpds-color-background-surface-neutral-weak, #f4f4f4)",
						borderRadius: "var(--wpds-border-radius-md, 4px)",
						flexShrink: 0,
						height: "var(--wpds-dimension-size-lg, 40px)",
						width: "var(--wpds-dimension-size-lg, 40px)"
					},
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: wordpress_default }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 87,
						columnNumber: 5
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 75,
					columnNumber: 4
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 71,
				columnNumber: 3
			}, void 0),
			args: {
				...Default.args,
				help: "Additional context that helps users understand what this setting does and when they might want to turn it on or off."
			}
		};
		try {
			WithVisual.__docgenInfo = {
				"description": "When adding a visual aid, prefer placing it at the trailing end of the row,\nrather than placing it directly before the label, or moving the toggle to the trailing end.",
				"displayName": "WithVisual",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toggle-control/stories/index.story.tsx",
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
					originalSource: "{\n  render: args => <ControlledToggleControl {...args} />,\n  args: {\n    label: 'Enable something'\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithHelpText.parameters = {
			...WithHelpText.parameters,
			docs: {
				...WithHelpText.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    help: 'This is some help text.'\n  }\n}",
					...WithHelpText.parameters?.docs?.source
				}
			}
		};
		WithVisual.parameters = {
			...WithVisual.parameters,
			docs: {
				...WithVisual.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  render: args => <Stack gap=\"md\" align=\"flex-start\" justify=\"space-between\">\n            <Stack>\n                <ControlledToggleControl {...args} />\n            </Stack>\n            <Stack align=\"center\" justify=\"center\" style={{\n      backgroundColor: 'var(--wpds-color-background-surface-neutral-weak)',\n      borderRadius: 'var(--wpds-border-radius-md)',\n      flexShrink: 0,\n      height: 'var(--wpds-dimension-size-lg)',\n      width: 'var(--wpds-dimension-size-lg)'\n    }}>\n                <Icon icon={wordpress} />\n            </Stack>\n        </Stack>,\n  args: {\n    ...Default.args,\n    help: 'Additional context that helps users understand what this setting does and when they might want to turn it on or off.'\n  }\n}",
					...WithVisual.parameters?.docs?.source
				},
				description: {
					story: "When adding a visual aid, prefer placing it at the trailing end of the row,\nrather than placing it directly before the label, or moving the toggle to the trailing end.",
					...WithVisual.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
export { init_index_story as n, index_story_exports as t };
