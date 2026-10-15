import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as seen_default } from "./seen-B1o-in-5.js";
import { n as unseen_default } from "./unseen-rtz9uq14.js";
import { n as init_icon_button, t as IconButton } from "./icon-button-CljljWsV.js";
import { n as init_input_layout, t as InputLayout } from "./input-layout-D9fKXny2.js";
import { n as init_validated_input_control, t as ValidatedInputControl } from "./validated-input-control-C08jHw_I.js";
import { i as init_shared, r as formDecorator } from "./shared-D3MbP_jP.js";
import { r as init_build_module } from "./library.story-DawnfKTW.js";
//#region ../packages/ui/src/form/with-validation/validated-input-control/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default, WithCustomValidity, Password;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_build_module();
		init_validated_input_control();
		init_icon_button();
		init_input_layout();
		init_shared();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/with-validation/validated-input-control/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-ui/Form/With Validation/ValidatedInputControl",
			id: "design-system-components-form-with-validation-validatedinputcontrol",
			component: ValidatedInputControl,
			argTypes: {
				customValidity: { control: false },
				defaultValue: { control: false },
				onValueChange: { action: "onValueChange" },
				prefix: { control: false },
				suffix: { control: false },
				type: { control: "text" },
				value: { control: false }
			},
			decorators: [formDecorator],
			parameters: { componentStatus: {
				status: "use-with-caution",
				whereUsed: "global",
				notes: "APIs and behavior are still prone to change."
			} }
		};
		Default = { args: {
			label: "Text",
			required: true
		} };
		WithCustomValidity = {
			render: function Template(args) {
				const [value, setValue] = (0, import_react.useState)("");
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ValidatedInputControl, {
					...args,
					value,
					onValueChange: (next) => setValue(next ?? ""),
					customValidity: value.toLowerCase() === "error" ? {
						type: "invalid",
						message: "The word \"error\" is not allowed."
					} : void 0
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 55,
					columnNumber: 4
				}, this);
			},
			args: {
				label: "Text",
				description: "The word 'error' will trigger an error."
			}
		};
		Password = {
			render: function Template(args) {
				const [value, setValue] = (0, import_react.useState)("");
				const [visible, setVisible] = (0, import_react.useState)(false);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ValidatedInputControl, {
					...args,
					type: visible ? "text" : "password",
					suffix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputLayout.Slot, {
						padding: "minimal",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, {
							label: visible ? "Hide password" : "Show password",
							icon: visible ? unseen_default : seen_default,
							onClick: () => setVisible((v) => !v),
							size: "small",
							variant: "minimal"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 91,
							columnNumber: 7
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 90,
						columnNumber: 6
					}, this),
					value,
					onValueChange: (next) => setValue(next ?? ""),
					customValidity: (() => {
						if (!value) return;
						if (!/\d/.test(value)) return {
							type: "invalid",
							message: "Password must include at least one number."
						};
						if (!/[A-Z]/.test(value)) return {
							type: "invalid",
							message: "Password must include at least one capital letter."
						};
					})()
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 86,
					columnNumber: 4
				}, this);
			},
			args: {
				label: "Password",
				description: "Minimum 8 characters, include a number and a capital letter.",
				minLength: 8,
				required: true
			}
		};
		try {
			Default.__docgenInfo = {
				"description": "Native constraint validation (here, `required`) is reported inline when the\ncontrol is blurred or the form is submitted.",
				"displayName": "Default",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/with-validation/validated-input-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithCustomValidity.__docgenInfo = {
				"description": "Consumer-driven validation results are passed through the `customValidity`\nprop. Type the word \"error\" and blur the field to trigger the custom error.",
				"displayName": "WithCustomValidity",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/with-validation/validated-input-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Password.__docgenInfo = {
				"description": "This demonstrates how password validation would work with the standard\nimplementation.",
				"displayName": "Password",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/with-validation/validated-input-control/stories/index.story.tsx",
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
					originalSource: "{\n  args: {\n    label: 'Text',\n    required: true\n  }\n}",
					...Default.parameters?.docs?.source
				},
				description: {
					story: "Native constraint validation (here, `required`) is reported inline when the\ncontrol is blurred or the form is submitted.",
					...Default.parameters?.docs?.description
				}
			}
		};
		WithCustomValidity.parameters = {
			...WithCustomValidity.parameters,
			docs: {
				...WithCustomValidity.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Template(args) {\n    const [value, setValue] = useState('');\n    return <ValidatedInputControl {...args} value={value} onValueChange={next => setValue(next ?? '')} customValidity={value.toLowerCase() === 'error' ? {\n      type: 'invalid',\n      message: 'The word \"error\" is not allowed.'\n    } : undefined} />;\n  },\n  args: {\n    label: 'Text',\n    description: \"The word 'error' will trigger an error.\"\n  }\n}",
					...WithCustomValidity.parameters?.docs?.source
				},
				description: {
					story: "Consumer-driven validation results are passed through the `customValidity`\nprop. Type the word \"error\" and blur the field to trigger the custom error.",
					...WithCustomValidity.parameters?.docs?.description
				}
			}
		};
		Password.parameters = {
			...Password.parameters,
			docs: {
				...Password.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Template(args) {\n    const [value, setValue] = useState('');\n    const [visible, setVisible] = useState(false);\n    return <ValidatedInputControl {...args} type={visible ? 'text' : 'password'} suffix={<InputLayout.Slot padding=\"minimal\">\n                        <IconButton label={visible ? 'Hide password' : 'Show password'} icon={visible ? unseen : seen} onClick={() => setVisible(v => !v)} size=\"small\" variant=\"minimal\" />\n                    </InputLayout.Slot>} value={value} onValueChange={next => setValue(next ?? '')} customValidity={(() => {\n      if (!value) {\n        return undefined;\n      }\n      if (!/\\d/.test(value)) {\n        return {\n          type: 'invalid' as const,\n          message: 'Password must include at least one number.'\n        };\n      }\n      if (!/[A-Z]/.test(value)) {\n        return {\n          type: 'invalid' as const,\n          message: 'Password must include at least one capital letter.'\n        };\n      }\n      return undefined;\n    })()} />;\n  },\n  args: {\n    label: 'Password',\n    description: 'Minimum 8 characters, include a number and a capital letter.',\n    minLength: 8,\n    required: true\n  }\n}",
					...Password.parameters?.docs?.source
				},
				description: {
					story: "This demonstrates how password validation would work with the standard\nimplementation.",
					...Password.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, Password, WithCustomValidity, meta as default };
