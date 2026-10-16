import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { t as icon_default } from "./icon-DEDMwo2v.js";
import { t as close_small_default } from "./close-small-BAxZctqD.js";
import { n as link_default } from "./link-B6xih8Jw.js";
import { n as seen_default } from "./seen-BqfaQMmn.js";
import { n as unseen_default } from "./unseen-DUXOlgts.js";
import { n as init_input_control, t as InputControl } from "./input-control-C54OF_Dl.js";
import { n as init_button, t as Button } from "./button-BqvmAVeL.js";
import { n as init_input_prefix_wrapper, t as InputControlPrefixWrapper } from "./input-prefix-wrapper-CKGIiYfr.js";
import { n as init_input_suffix_wrapper, t as InputControlSuffixWrapper } from "./input-suffix-wrapper-PiUi4PnV.js";
import { r as init_build_module } from "./library.story-CFsmdbdz.js";
//#region ../packages/components/src/input-control/stories/index.story.tsx
var index_story_exports = /* @__PURE__ */ __exportAll({
	Default: () => Default,
	ShowPassword: () => ShowPassword,
	WithEdgeLabel: () => WithEdgeLabel,
	WithHelpText: () => WithHelpText,
	WithIconOrControl: () => WithIconOrControl,
	WithPrefix: () => WithPrefix,
	WithSideLabel: () => WithSideLabel,
	WithSuffix: () => WithSuffix,
	default: () => meta
});
var import_jsx_dev_runtime, fn, _jsxFileName, meta, Template, Default, WithHelpText, WithPrefix, WithSuffix, WithIconOrControl, WithSideLabel, WithEdgeLabel, ShowPassword;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_build_module();
		init_react();
		init_input_control();
		init_input_prefix_wrapper();
		init_input_suffix_wrapper();
		init_button();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({fn} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/input-control/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-components/Selection & Input/Common/InputControl",
			id: "components-inputcontrol",
			component: InputControl,
			subcomponents: {
				InputControlPrefixWrapper,
				InputControlSuffixWrapper
			},
			argTypes: {
				__unstableInputWidth: { control: { type: "text" } },
				__unstableStateReducer: { control: false },
				onChange: { control: false },
				prefix: { control: false },
				suffix: { control: false },
				type: { control: { type: "text" } },
				value: { control: { disable: true } }
			},
			tags: ["status-experimental"],
			args: {
				onChange: fn(),
				onValidate: fn(),
				onKeyDown: fn()
			},
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "not-recommended",
					whereUsed: "global",
					notes: "Use [`InputControl`](?path=/docs/design-system-components-form-inputcontrol--docs) from `@wordpress/ui` instead. See the [migration guide](?path=/docs/components-inputcontrol--migration-guide)."
				}
			}
		};
		Template = (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputControl, { ...args }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 43,
			columnNumber: 2
		}, void 0);
		Default = Template.bind({});
		Default.args = {
			label: "Value",
			placeholder: "Placeholder"
		};
		WithHelpText = Template.bind({});
		WithHelpText.args = {
			...Default.args,
			help: "Help text to describe the control."
		};
		WithPrefix = Template.bind({});
		WithPrefix.args = {
			...Default.args,
			prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputControlPrefixWrapper, { children: "@" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 66,
				columnNumber: 10
			}, void 0)
		};
		WithSuffix = Template.bind({});
		WithSuffix.args = {
			...Default.args,
			suffix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputControlSuffixWrapper, { children: "%" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 77,
				columnNumber: 10
			}, void 0)
		};
		WithIconOrControl = Template.bind({});
		WithIconOrControl.args = {
			...Default.args,
			prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputControlPrefixWrapper, {
				variant: "icon",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(icon_default, { icon: link_default }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 93,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 92,
				columnNumber: 3
			}, void 0),
			suffix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputControlSuffixWrapper, {
				variant: "control",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					icon: close_small_default,
					size: "small",
					label: "Clear"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 98,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 97,
				columnNumber: 3
			}, void 0)
		};
		WithSideLabel = Template.bind({});
		WithSideLabel.args = {
			...Default.args,
			labelPosition: "side"
		};
		WithEdgeLabel = Template.bind({});
		WithEdgeLabel.args = {
			...Default.args,
			__unstableInputWidth: "20em",
			labelPosition: "edge"
		};
		ShowPassword = (args) => {
			const [visible, setVisible] = (0, import_react.useState)(false);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputControl, {
				type: visible ? "text" : "password",
				suffix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputControlSuffixWrapper, {
					variant: "control",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						size: "small",
						icon: visible ? unseen_default : seen_default,
						onClick: () => setVisible((value) => !value),
						label: visible ? "Hide password" : "Show password"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 123,
						columnNumber: 6
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 122,
					columnNumber: 5
				}, void 0),
				...args
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 119,
				columnNumber: 3
			}, void 0);
		};
		ShowPassword.args = {
			...Default.args,
			label: "Password",
			placeholder: void 0
		};
		try {
			WithPrefix.__docgenInfo = {
				"description": "A `prefix` can be inserted before the input. By default, the prefix is aligned with the edge of the input border,\nwith no padding. If you want to apply standard padding in accordance with the size variant, use the provided\n`<InputControlPrefixWrapper>` convenience wrapper.",
				"displayName": "WithPrefix",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/input-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithSuffix.__docgenInfo = {
				"description": "A `suffix` can be inserted after the input. By default, the suffix is aligned with the edge of the input border,\nwith no padding. If you want to apply standard padding in accordance with the size variant, use the provided\n`<InputControlSuffixWrapper>` convenience wrapper.",
				"displayName": "WithSuffix",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/input-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithIconOrControl.__docgenInfo = {
				"description": "`<InputControlPrefixWrapper>` and `<InputControlSuffixWrapper>` have a `variant` prop that can be used to\nadjust the wrapper based on the prefix or suffix content.\n\n- `'default'`: Standard padding for text content.\n- `'icon'`: For icons.\n- `'control'`: For controls, like buttons or selects.",
				"displayName": "WithIconOrControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/input-control/stories/index.story.tsx",
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
					originalSource: "args => <InputControl {...args} />",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithHelpText.parameters = {
			...WithHelpText.parameters,
			docs: {
				...WithHelpText.parameters?.docs,
				source: {
					originalSource: "args => <InputControl {...args} />",
					...WithHelpText.parameters?.docs?.source
				}
			}
		};
		WithPrefix.parameters = {
			...WithPrefix.parameters,
			docs: {
				...WithPrefix.parameters?.docs,
				source: {
					originalSource: "args => <InputControl {...args} />",
					...WithPrefix.parameters?.docs?.source
				},
				description: {
					story: "A `prefix` can be inserted before the input. By default, the prefix is aligned with the edge of the input border,\nwith no padding. If you want to apply standard padding in accordance with the size variant, use the provided\n`<InputControlPrefixWrapper>` convenience wrapper.",
					...WithPrefix.parameters?.docs?.description
				}
			}
		};
		WithSuffix.parameters = {
			...WithSuffix.parameters,
			docs: {
				...WithSuffix.parameters?.docs,
				source: {
					originalSource: "args => <InputControl {...args} />",
					...WithSuffix.parameters?.docs?.source
				},
				description: {
					story: "A `suffix` can be inserted after the input. By default, the suffix is aligned with the edge of the input border,\nwith no padding. If you want to apply standard padding in accordance with the size variant, use the provided\n`<InputControlSuffixWrapper>` convenience wrapper.",
					...WithSuffix.parameters?.docs?.description
				}
			}
		};
		WithIconOrControl.parameters = {
			...WithIconOrControl.parameters,
			docs: {
				...WithIconOrControl.parameters?.docs,
				source: {
					originalSource: "args => <InputControl {...args} />",
					...WithIconOrControl.parameters?.docs?.source
				},
				description: {
					story: "`<InputControlPrefixWrapper>` and `<InputControlSuffixWrapper>` have a `variant` prop that can be used to\nadjust the wrapper based on the prefix or suffix content.\n\n- `'default'`: Standard padding for text content.\n- `'icon'`: For icons.\n- `'control'`: For controls, like buttons or selects.",
					...WithIconOrControl.parameters?.docs?.description
				}
			}
		};
		WithSideLabel.parameters = {
			...WithSideLabel.parameters,
			docs: {
				...WithSideLabel.parameters?.docs,
				source: {
					originalSource: "args => <InputControl {...args} />",
					...WithSideLabel.parameters?.docs?.source
				}
			}
		};
		WithEdgeLabel.parameters = {
			...WithEdgeLabel.parameters,
			docs: {
				...WithEdgeLabel.parameters?.docs,
				source: {
					originalSource: "args => <InputControl {...args} />",
					...WithEdgeLabel.parameters?.docs?.source
				}
			}
		};
		ShowPassword.parameters = {
			...ShowPassword.parameters,
			docs: {
				...ShowPassword.parameters?.docs,
				source: {
					originalSource: "args => {\n  const [visible, setVisible] = useState(false);\n  return <InputControl type={visible ? 'text' : 'password'} suffix={<InputControlSuffixWrapper variant=\"control\">\n                    <Button size=\"small\" icon={visible ? unseen : seen} onClick={() => setVisible(value => !value)} label={visible ? 'Hide password' : 'Show password'} />\n                </InputControlSuffixWrapper>} {...args} />;\n}",
					...ShowPassword.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
export { init_index_story as n, index_story_exports as t };
