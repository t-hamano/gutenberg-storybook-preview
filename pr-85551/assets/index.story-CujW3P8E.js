import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_control_with_error, t as ControlWithError } from "./control-with-error-Bf1qAcu7.js";
import { n as init_input_control, t as InputControl } from "./input-control-CqpP_bqn.js";
import { i as init_shared, r as formDecorator } from "./shared-BRqYhAs4.js";
//#region ../packages/ui/src/form/primitives/control-with-error/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default, WithCustomValidity;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_control_with_error();
		init_input_control();
		init_shared();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/control-with-error/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-ui/Form/Primitives/ControlWithError",
			id: "design-system-components-form-primitives-controlwitherror",
			component: ControlWithError,
			argTypes: {
				children: { control: false },
				getValidityTarget: { control: false },
				customValidity: { control: false }
			},
			decorators: [formDecorator],
			parameters: { componentStatus: {
				status: "use-with-caution",
				whereUsed: "global",
				notes: "APIs and behavior are still prone to change."
			} }
		};
		Default = {
			args: { required: true },
			render: function Template(args) {
				const inputRef = (0, import_react.useRef)(null);
				const [value, setValue] = (0, import_react.useState)("");
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ControlWithError, {
					...args,
					getValidityTarget: () => inputRef.current,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputControl, {
						ref: inputRef,
						label: "Text",
						value,
						onValueChange: (next) => setValue(next ?? "")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 46,
						columnNumber: 5
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 42,
					columnNumber: 4
				}, this);
			}
		};
		WithCustomValidity = { render: function Template(args) {
			const inputRef = (0, import_react.useRef)(null);
			const [value, setValue] = (0, import_react.useState)("");
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ControlWithError, {
				...args,
				customValidity: value.toLowerCase() === "error" ? {
					type: "invalid",
					message: "The word \"error\" is not allowed."
				} : void 0,
				getValidityTarget: () => inputRef.current,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputControl, {
					ref: inputRef,
					label: "Text",
					description: "The word 'error' will trigger an error.",
					value,
					onValueChange: (next) => setValue(next ?? "")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 79,
					columnNumber: 5
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 67,
				columnNumber: 4
			}, this);
		} };
		try {
			Default.__docgenInfo = {
				"description": "Native constraint validation (here, `required`) is reported inline when the\ncontrol is blurred or the form is submitted.",
				"displayName": "Default",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/control-with-error/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithCustomValidity.__docgenInfo = {
				"description": "Consumer-driven validation results are passed through the `customValidity`\nprop. Type the word \"error\" and blur the field to trigger the custom error.",
				"displayName": "WithCustomValidity",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/control-with-error/stories/index.story.tsx",
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
					originalSource: "{\n  args: {\n    required: true\n  },\n  render: function Template(args) {\n    const inputRef = useRef<HTMLInputElement>(null);\n    const [value, setValue] = useState('');\n    return <ControlWithError {...args} getValidityTarget={() => inputRef.current}>\n                <InputControl ref={inputRef} label=\"Text\" value={value} onValueChange={next => setValue(next ?? '')} />\n            </ControlWithError>;\n  }\n}",
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
					originalSource: "{\n  render: function Template(args) {\n    const inputRef = useRef<HTMLInputElement>(null);\n    const [value, setValue] = useState('');\n    return <ControlWithError {...args} customValidity={value.toLowerCase() === 'error' ? {\n      type: 'invalid',\n      message: 'The word \"error\" is not allowed.'\n    } : undefined} getValidityTarget={() => inputRef.current}>\n                <InputControl ref={inputRef} label=\"Text\" description=\"The word 'error' will trigger an error.\" value={value} onValueChange={next => setValue(next ?? '')} />\n            </ControlWithError>;\n  }\n}",
					...WithCustomValidity.parameters?.docs?.source
				},
				description: {
					story: "Consumer-driven validation results are passed through the `customValidity`\nprop. Type the word \"error\" and blur the field to trigger the custom error.",
					...WithCustomValidity.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, WithCustomValidity, meta as default };
