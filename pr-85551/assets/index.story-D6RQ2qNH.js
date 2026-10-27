import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as useRefEffect, t as init_use_ref_effect } from "./use-ref-effect-DguFui9C.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { n as init_icon, t as Icon } from "./icon-n5i0-U3z.js";
import { t as icon_default } from "./icon-DEDMwo2v.js";
import { t as check_default } from "./check-BK5allCs.js";
import { n as reset_default } from "./reset-7DubdZqZ.js";
import { n as wordpress_default } from "./wordpress-BwlgBeE7.js";
import { n as init_stack, t as Stack } from "./stack-BHmRFw1F.js";
import { n as init_component, t as HStack } from "./component--i8sR2uB.js";
import { n as init_base_control, t as BaseControl } from "./base-control-pNrjopap.js";
import { n as init_component$1, t as VStack } from "./component-9S7Padmp.js";
import { r as init_build_module$1 } from "./library.story-CbQx3MQ6.js";
//#region ../packages/components/src/checkbox-control/index.tsx
/**
* Checkboxes allow the user to select one or more items from a set.
*
* ```jsx
* import { CheckboxControl } from '@wordpress/components';
* import { useState } from '@wordpress/element';
*
* const MyCheckboxControl = () => {
*   const [ isChecked, setChecked ] = useState( true );
*   return (
*     <CheckboxControl
*       label="Is author"
*       help="Is the user a author or not?"
*       checked={ isChecked }
*       onChange={ setChecked }
*     />
*   );
* };
* ```
*/
function CheckboxControl(props) {
	const { __nextHasNoMarginBottom: _, label, className, heading, checked, indeterminate, help, id: idProp, onChange, onClick, ...additionalProps } = props;
	if (heading) deprecated("`heading` prop in `CheckboxControl`", {
		alternative: "a separate element to implement a heading",
		since: "5.8"
	});
	const [showCheckedIcon, setShowCheckedIcon] = (0, import_react.useState)(false);
	const [showIndeterminateIcon, setShowIndeterminateIcon] = (0, import_react.useState)(false);
	const ref = useRefEffect((node) => {
		if (!node) return;
		node.indeterminate = !!indeterminate;
		setShowCheckedIcon(node.matches(":checked"));
		setShowIndeterminateIcon(node.matches(":indeterminate"));
	}, [checked, indeterminate]);
	const id = use_instance_id_default(CheckboxControl, "inspector-checkbox-control", idProp);
	const onChangeValue = (event) => onChange(event.target.checked);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(BaseControl, {
		label: heading,
		id,
		help: help && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("span", {
			className: "components-checkbox-control__help",
			children: help
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 91,
			columnNumber: 6
		}, this),
		className: clsx("components-checkbox-control", className),
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(HStack, {
			spacing: 0,
			justify: "start",
			alignment: "top",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("span", {
				className: "components-checkbox-control__input-container",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("input", {
						ref,
						id,
						className: "components-checkbox-control__input",
						type: "checkbox",
						value: "1",
						onChange: onChangeValue,
						checked,
						"aria-describedby": !!help ? id + "__help" : void 0,
						onClick: (event) => {
							event.currentTarget.focus();
							onClick?.(event);
						},
						...additionalProps
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 100,
						columnNumber: 6
					}, this),
					showIndeterminateIcon ? /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(icon_default, {
						icon: reset_default,
						className: "components-checkbox-control__indeterminate",
						role: "presentation",
						size: 16,
						viewBox: "4 4 16 16"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 118,
						columnNumber: 7
					}, this) : null,
					showCheckedIcon ? /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(icon_default, {
						icon: check_default,
						className: "components-checkbox-control__checked",
						role: "presentation",
						size: 16,
						viewBox: "4 4 16 16"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 127,
						columnNumber: 7
					}, this) : null
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 99,
				columnNumber: 5
			}, this), label && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("label", {
				className: "components-checkbox-control__label",
				htmlFor: id,
				children: label
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 137,
				columnNumber: 6
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 98,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 86,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_checkbox_control() {
	return (init_checkbox_control = __esmMin((() => {
		init_clsx();
		init_react();
		init_use_instance_id(), init_use_ref_effect();
		init_build_module();
		init_build_module$1();
		init_base_control();
		init_component();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/checkbox-control/index.tsx";
		try {
			CheckboxControl.__docgenInfo = {
				"description": "Checkboxes allow the user to select one or more items from a set.\n\n```jsx\nimport { CheckboxControl } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyCheckboxControl = () => {\n  const [ isChecked, setChecked ] = useState( true );\n  return (\n    <CheckboxControl\n      label=\"Is author\"\n      help=\"Is the user a author or not?\"\n      checked={ isChecked }\n      onChange={ setChecked }\n    />\n  );\n};\n```",
				"displayName": "CheckboxControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/checkbox-control/index.tsx",
				"methods": [],
				"props": {
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
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Additional description for the control.\n\nOnly use for meaningful description or instructions for the control. An element containing the description will be programmatically associated to the BaseControl by the means of an `aria-describedby` attribute.",
						"name": "help",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/checkbox-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the checkbox should be disabled.",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/checkbox-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function that receives the checked state (boolean) as input.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: boolean) => void" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/checkbox-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A label for the input field, that appears at the side of the checkbox.\nThe prop will be rendered as content a label element. If no prop is\npassed an empty label is rendered.",
						"name": "label",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"checked": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/checkbox-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If checked is true the checkbox will be checked. If checked is false the\ncheckbox will be unchecked. If no value is passed the checkbox will be\nunchecked.",
						"name": "checked",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"indeterminate": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/checkbox-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If indeterminate is true the state of the checkbox will be indeterminate.",
						"name": "indeterminate",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"heading": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/checkbox-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "@deprecated",
						"name": "heading",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/checkbox-control/stories/index.story.tsx
var index_story_exports = /* @__PURE__ */ __exportAll({
	Default: () => Default,
	Indeterminate: () => Indeterminate,
	WithCustomLabel: () => WithCustomLabel,
	WithVisual: () => WithVisual,
	default: () => meta
});
function ControlledCheckboxControl({ onChange, ...props }) {
	const [isChecked, setChecked] = (0, import_react.useState)(true);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxControl, {
		...props,
		checked: isChecked,
		onChange: (v) => {
			setChecked(v);
			onChange(v);
		}
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 46,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, meta, Default, Indeterminate, WithCustomLabel, WithVisual;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_build_module$1();
		init_icon(), init_stack();
		init_checkbox_control();
		init_component$1();
		init_component();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/checkbox-control/stories/index.story.tsx";
		meta = {
			component: CheckboxControl,
			title: "Components/@wordpress-components/Selection & Input/Common/CheckboxControl",
			id: "components-checkboxcontrol",
			argTypes: {
				onChange: { action: "onChange" },
				checked: { control: false },
				help: { control: { type: "text" } }
			},
			parameters: {
				controls: {
					expanded: true,
					exclude: ["heading"]
				},
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "not-recommended",
					whereUsed: "global",
					notes: "Use [`CheckboxControl`](?path=/docs/design-system-components-form-checkboxcontrol--docs) from `@wordpress/ui` instead. See the [migration guide](?path=/docs/components-checkboxcontrol--migration-guide)."
				}
			}
		};
		ControlledCheckboxControl.displayName = "CheckboxControl";
		Default = {
			render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ControlledCheckboxControl, { ...args }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 59,
				columnNumber: 22
			}, void 0),
			args: {
				label: "Is author",
				help: "Is the user an author or not?"
			}
		};
		Indeterminate = {
			render: ({ onChange, ...args }) => {
				const [fruits, setFruits] = (0, import_react.useState)({
					apple: false,
					orange: false
				});
				const isAllChecked = Object.values(fruits).every(Boolean);
				const isIndeterminate = Object.values(fruits).some(Boolean) && !isAllChecked;
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VStack, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxControl, {
						...args,
						checked: isAllChecked,
						indeterminate: isIndeterminate,
						onChange: (v) => {
							setFruits({
								apple: v,
								orange: v
							});
							onChange(v);
						}
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 79,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxControl, {
						label: "Apple",
						checked: fruits.apple,
						onChange: (apple) => setFruits((prevState) => ({
							...prevState,
							apple
						}))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 91,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxControl, {
						label: "Orange",
						checked: fruits.orange,
						onChange: (orange) => setFruits((prevState) => ({
							...prevState,
							orange
						}))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 101,
						columnNumber: 5
					}, void 0)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 78,
					columnNumber: 4
				}, void 0);
			},
			args: { label: "Select all" }
		};
		WithCustomLabel = { render: ({ onChange, ...args }) => {
			const [isChecked, setChecked] = (0, import_react.useState)(true);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HStack, {
				justify: "flex-start",
				alignment: "top",
				spacing: 0,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxControl, {
					...args,
					checked: isChecked,
					onChange: (v) => {
						setChecked(v);
						onChange(v);
					},
					id: "my-checkbox-with-custom-label",
					"aria-describedby": "my-custom-description"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 135,
					columnNumber: 5
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VStack, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
					htmlFor: "my-checkbox-with-custom-label",
					children: "My custom label"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 146,
					columnNumber: 6
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					id: "my-custom-description",
					style: { fontSize: 13 },
					children: "A custom description."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 149,
					columnNumber: 6
				}, void 0)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 145,
					columnNumber: 5
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 134,
				columnNumber: 4
			}, void 0);
		} };
		WithVisual = {
			...Default,
			render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
				gap: "md",
				align: "flex-start",
				justify: "space-between",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ControlledCheckboxControl, { ...args }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 167,
					columnNumber: 5
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 166,
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
						lineNumber: 181,
						columnNumber: 5
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 169,
					columnNumber: 4
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 165,
				columnNumber: 3
			}, void 0),
			args: {
				...Default.args,
				help: "Additional context that helps users understand what this setting does and when they might want to turn it on or off."
			}
		};
		try {
			WithCustomLabel.__docgenInfo = {
				"description": "For more complex designs, a custom `<label>` element can be associated with the checkbox\nby leaving the `label` prop undefined and using the `id` and `htmlFor` props instead.\nBecause the label element also functions as a click target for the checkbox, [do not\nplace interactive elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#interactive_content)\nsuch as links or buttons inside the `<label>` node.\n\nSimilarly, a custom description can be added by omitting the `help` prop\nand using the `aria-describedby` prop instead.",
				"displayName": "WithCustomLabel",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/checkbox-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithVisual.__docgenInfo = {
				"description": "When adding a visual aid, prefer placing it at the trailing end of the row,\nrather than placing it directly before the label, or moving the checkbox to the trailing end.",
				"displayName": "WithVisual",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/checkbox-control/stories/index.story.tsx",
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
					originalSource: "{\n  render: args => <ControlledCheckboxControl {...args} />,\n  args: {\n    label: 'Is author',\n    help: 'Is the user an author or not?'\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		Indeterminate.parameters = {
			...Indeterminate.parameters,
			docs: {
				...Indeterminate.parameters?.docs,
				source: {
					originalSource: "{\n  render: ({\n    onChange,\n    ...args\n  }) => {\n    const [fruits, setFruits] = useState({\n      apple: false,\n      orange: false\n    });\n    const isAllChecked = Object.values(fruits).every(Boolean);\n    const isIndeterminate = Object.values(fruits).some(Boolean) && !isAllChecked;\n    return <VStack>\n                <CheckboxControl {...args} checked={isAllChecked} indeterminate={isIndeterminate} onChange={v => {\n        setFruits({\n          apple: v,\n          orange: v\n        });\n        onChange(v);\n      }} />\n                <CheckboxControl label=\"Apple\" checked={fruits.apple} onChange={apple => setFruits(prevState => ({\n        ...prevState,\n        apple\n      }))} />\n                <CheckboxControl label=\"Orange\" checked={fruits.orange} onChange={orange => setFruits(prevState => ({\n        ...prevState,\n        orange\n      }))} />\n            </VStack>;\n  },\n  args: {\n    label: 'Select all'\n  }\n}",
					...Indeterminate.parameters?.docs?.source
				}
			}
		};
		WithCustomLabel.parameters = {
			...WithCustomLabel.parameters,
			docs: {
				...WithCustomLabel.parameters?.docs,
				source: {
					originalSource: "{\n  render: ({\n    onChange,\n    ...args\n  }) => {\n    const [isChecked, setChecked] = useState(true);\n    return <HStack justify=\"flex-start\" alignment=\"top\" spacing={0}>\n                <CheckboxControl {...args} checked={isChecked} onChange={v => {\n        setChecked(v);\n        onChange(v);\n      }} id=\"my-checkbox-with-custom-label\" aria-describedby=\"my-custom-description\" />\n                <VStack>\n                    <label htmlFor=\"my-checkbox-with-custom-label\">\n                        My custom label\n                    </label>\n                    <div id=\"my-custom-description\" style={{\n          fontSize: 13\n        }}>\n                        A custom description.\n                    </div>\n                </VStack>\n            </HStack>;\n  }\n}",
					...WithCustomLabel.parameters?.docs?.source
				},
				description: {
					story: "For more complex designs, a custom `<label>` element can be associated with the checkbox\nby leaving the `label` prop undefined and using the `id` and `htmlFor` props instead.\nBecause the label element also functions as a click target for the checkbox, [do not\nplace interactive elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#interactive_content)\nsuch as links or buttons inside the `<label>` node.\n\nSimilarly, a custom description can be added by omitting the `help` prop\nand using the `aria-describedby` prop instead.",
					...WithCustomLabel.parameters?.docs?.description
				}
			}
		};
		WithVisual.parameters = {
			...WithVisual.parameters,
			docs: {
				...WithVisual.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  render: args => <Stack gap=\"md\" align=\"flex-start\" justify=\"space-between\">\n            <Stack>\n                <ControlledCheckboxControl {...args} />\n            </Stack>\n            <Stack align=\"center\" justify=\"center\" style={{\n      backgroundColor: 'var(--wpds-color-background-surface-neutral-weak)',\n      borderRadius: 'var(--wpds-border-radius-md)',\n      flexShrink: 0,\n      height: 'var(--wpds-dimension-size-lg)',\n      width: 'var(--wpds-dimension-size-lg)'\n    }}>\n                <Icon icon={wordpress} />\n            </Stack>\n        </Stack>,\n  args: {\n    ...Default.args,\n    help: 'Additional context that helps users understand what this setting does and when they might want to turn it on or off.'\n  }\n}",
					...WithVisual.parameters?.docs?.source
				},
				description: {
					story: "When adding a visual aid, prefer placing it at the trailing end of the row,\nrather than placing it directly before the label, or moving the checkbox to the trailing end.",
					...WithVisual.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
export { init_index_story as n, index_story_exports as t };
