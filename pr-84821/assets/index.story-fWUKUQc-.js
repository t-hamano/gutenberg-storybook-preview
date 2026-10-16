import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as plus_default } from "./plus-BflIATCD.js";
import { n as reset_default } from "./reset-CF3TDagv.js";
import { n as seen_default } from "./seen-BqfaQMmn.js";
import { n as unseen_default } from "./unseen-DUXOlgts.js";
import { n as init_stack, t as Stack } from "./stack-s_FjhA7z.js";
import { n as init_icon_button, t as IconButton } from "./icon-button-1MUTgcAK.js";
import { n as init_input_layout, t as InputLayout } from "./input-layout-CGFIMmI0.js";
import { n as init_input_control, t as InputControl } from "./input-control-zY4sVtCD.js";
import { i as init_shared, n as WITH_DETAILS_DESCRIPTION, t as DETAILS_EXAMPLE } from "./shared-BIawwOG6.js";
import { i as init_index_story$1, n as WithSuffixControl$1, t as WithPrefix$1 } from "./index.story-UX9tAqP-.js";
import { r as init_build_module } from "./library.story-CFsmdbdz.js";
//#region ../packages/ui/src/form/input-control/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default, VisuallyHiddenLabel, WithDetails, WithPrefix, WithSuffixControl, Password, Date, Number, NumberWithSteppers, Disabled;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_build_module();
		init_input_control();
		init_icon_button();
		init_input_layout();
		init_stack();
		init_index_story$1();
		init_shared();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/input-control/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-ui/Form/InputControl",
			id: "design-system-components-form-inputcontrol",
			component: InputControl,
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
		WithPrefix = { args: {
			...WithPrefix$1.args,
			ref: void 0,
			...Default.args
		} };
		WithSuffixControl = {
			args: {
				...WithSuffixControl$1.args,
				ref: void 0,
				...Default.args
			},
			parameters: { a11y: { test: "error" } }
		};
		Password = {
			render: function Template(args) {
				const [show, setShow] = (0, import_react.useState)(false);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputControl, {
					...args,
					type: show ? "text" : "password",
					suffix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputLayout.Slot, {
						padding: "minimal",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, {
							label: show ? "Hide password" : "Show password",
							onClick: () => setShow(!show),
							icon: show ? unseen_default : seen_default,
							size: "small",
							variant: "minimal"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 94,
							columnNumber: 7
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 93,
						columnNumber: 6
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 89,
					columnNumber: 4
				}, this);
			},
			args: {
				...Default.args,
				defaultValue: "password"
			}
		};
		Date = { args: {
			...Default.args,
			type: "date"
		} };
		Number = { args: {
			...Default.args,
			placeholder: "0",
			type: "number"
		} };
		NumberWithSteppers = {
			render: function Template(args) {
				const [value, setValue] = (0, import_react.useState)(0);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputControl, {
					...args,
					value,
					onValueChange: (v) => setValue(parseInt(v, 10)),
					suffix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputLayout.Slot, {
						padding: "minimal",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
							direction: "row",
							gap: "xs",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, {
								label: "Increment",
								icon: plus_default,
								onClick: () => setValue(value + 1),
								size: "small",
								variant: "minimal"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 139,
								columnNumber: 8
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, {
								label: "Decrement",
								icon: reset_default,
								onClick: () => setValue(value - 1),
								size: "small",
								variant: "minimal"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 146,
								columnNumber: 8
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 138,
							columnNumber: 7
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 137,
						columnNumber: 6
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 132,
					columnNumber: 4
				}, this);
			},
			args: {
				...Number.args,
				type: "number"
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
		WithPrefix.parameters = {
			...WithPrefix.parameters,
			docs: {
				...WithPrefix.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...InputWithPrefix.args,\n    ref: undefined,\n    ...Default.args\n  }\n}",
					...WithPrefix.parameters?.docs?.source
				}
			}
		};
		WithSuffixControl.parameters = {
			...WithSuffixControl.parameters,
			docs: {
				...WithSuffixControl.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...InputWithSuffixControl.args,\n    ref: undefined,\n    ...Default.args\n  },\n  parameters: {\n    a11y: {\n      test: 'error'\n    }\n  }\n}",
					...WithSuffixControl.parameters?.docs?.source
				}
			}
		};
		Password.parameters = {
			...Password.parameters,
			docs: {
				...Password.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Template(args) {\n    const [show, setShow] = useState(false);\n    return <InputControl {...args} type={show ? 'text' : 'password'} suffix={<InputLayout.Slot padding=\"minimal\">\n                        <IconButton label={show ? 'Hide password' : 'Show password'} onClick={() => setShow(!show)} icon={show ? unseen : seen} size=\"small\" variant=\"minimal\" />\n                    </InputLayout.Slot>} />;\n  },\n  args: {\n    ...Default.args,\n    defaultValue: 'password'\n  }\n}",
					...Password.parameters?.docs?.source
				}
			}
		};
		Date.parameters = {
			...Date.parameters,
			docs: {
				...Date.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    type: 'date'\n  }\n}",
					...Date.parameters?.docs?.source
				}
			}
		};
		Number.parameters = {
			...Number.parameters,
			docs: {
				...Number.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    placeholder: '0',\n    type: 'number'\n  }\n}",
					...Number.parameters?.docs?.source
				}
			}
		};
		NumberWithSteppers.parameters = {
			...NumberWithSteppers.parameters,
			docs: {
				...NumberWithSteppers.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Template(args) {\n    const [value, setValue] = useState(0);\n    return <InputControl {...args} value={value} onValueChange={v => setValue(parseInt(v, 10))} suffix={<InputLayout.Slot padding=\"minimal\">\n                        <Stack direction=\"row\" gap=\"xs\">\n                            <IconButton label=\"Increment\" icon={plus} onClick={() => setValue(value + 1)} size=\"small\" variant=\"minimal\" />\n                            <IconButton label=\"Decrement\" icon={reset} onClick={() => setValue(value - 1)} size=\"small\" variant=\"minimal\" />\n                        </Stack>\n                    </InputLayout.Slot>} />;\n  },\n  args: {\n    ...Number.args,\n    type: 'number'\n  }\n}",
					...NumberWithSteppers.parameters?.docs?.source
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
export { Date, Default, Disabled, Number, NumberWithSteppers, Password, VisuallyHiddenLabel, WithDetails, WithPrefix, WithSuffixControl, meta as default };
