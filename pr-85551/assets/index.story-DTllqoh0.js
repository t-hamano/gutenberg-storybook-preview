import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_circular_option_picker, t as circular_option_picker_default } from "./circular-option-picker-BWLNOGZQ.js";
//#region ../packages/components/src/circular-option-picker/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, CircularOptionPickerStoryContext, meta, colors, DefaultOptions, DefaultActions, Template, Default, AsToggleButtons, WithLoopingDisabled, WithButtonAction, WithDropdownLinkAction;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_circular_option_picker();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/circular-option-picker/stories/index.story.tsx";
		CircularOptionPickerStoryContext = (0, import_react.createContext)({});
		meta = {
			title: "Components/@wordpress-components/Selection & Input/Color/CircularOptionPicker",
			id: "components-circularoptionpicker",
			component: circular_option_picker_default,
			subcomponents: {
				"CircularOptionPicker.Option": circular_option_picker_default.Option,
				"CircularOptionPicker.OptionGroup": circular_option_picker_default.OptionGroup,
				"CircularOptionPicker.ButtonAction": circular_option_picker_default.ButtonAction,
				"CircularOptionPicker.DropdownLinkAction": circular_option_picker_default.DropdownLinkAction
			},
			argTypes: {
				actions: { control: false },
				options: { control: false },
				children: { control: { type: "text" } }
			},
			parameters: {
				controls: { expanded: true },
				docs: {
					canvas: { sourceState: "shown" },
					source: { excludeDecorators: true }
				},
				componentStatus: {
					status: "use-with-caution",
					whereUsed: "global",
					notes: "Mostly intended for internal use."
				}
			},
			decorators: [(Story) => {
				const [currentColor, setCurrentColor] = (0, import_react.useState)();
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircularOptionPickerStoryContext.Provider, {
					value: {
						currentColor,
						setCurrentColor
					},
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Story, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 50,
						columnNumber: 6
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 44,
					columnNumber: 5
				}, void 0);
			}]
		};
		colors = [
			{
				color: "#f00",
				name: "Red"
			},
			{
				color: "#0f0",
				name: "Green"
			},
			{
				color: "#0af",
				name: "Blue"
			}
		];
		DefaultOptions = () => {
			const { currentColor, setCurrentColor } = (0, import_react.useContext)(CircularOptionPickerStoryContext);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: colors.map(({ color, name }, index) => {
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(circular_option_picker_default.Option, {
					tooltipText: name,
					style: {
						backgroundColor: color,
						color
					},
					isSelected: color === currentColor,
					onClick: () => {
						setCurrentColor?.(color);
					}
				}, `${color}-${index}`, false, {
					fileName: _jsxFileName,
					lineNumber: 73,
					columnNumber: 6
				}, void 0);
			}) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 70,
				columnNumber: 3
			}, void 0);
		};
		DefaultActions = () => {
			const { setCurrentColor } = (0, import_react.useContext)(CircularOptionPickerStoryContext);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(circular_option_picker_default.ButtonAction, {
				onClick: () => setCurrentColor?.(void 0),
				children: "Clear"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 92,
				columnNumber: 3
			}, void 0);
		};
		Template = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(circular_option_picker_default, { ...props }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 101,
			columnNumber: 2
		}, void 0);
		Default = Template.bind({});
		Default.args = {
			"aria-label": "Circular Option Picker",
			options: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DefaultOptions, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 107,
				columnNumber: 11
			}, void 0)
		};
		AsToggleButtons = Template.bind({});
		AsToggleButtons.args = {
			...Default.args,
			presentation: "toggle-buttons"
		};
		WithLoopingDisabled = Template.bind({});
		WithLoopingDisabled.args = {
			...Default.args,
			loop: false
		};
		WithLoopingDisabled.parameters = { docs: { source: { code: `<CircularOptionPicker
  'aria-label': 'Circular Option Picker',
  loop={false}
  options={<DefaultOptions />}
/>` } } };
		WithButtonAction = Template.bind({});
		WithButtonAction.args = {
			...Default.args,
			actions: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DefaultActions, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 136,
				columnNumber: 11
			}, void 0)
		};
		WithButtonAction.storyName = "With ButtonAction";
		WithDropdownLinkAction = Template.bind({});
		WithDropdownLinkAction.args = {
			...Default.args,
			actions: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(circular_option_picker_default.DropdownLinkAction, {
				dropdownProps: {
					popoverProps: { placement: "top-end" },
					renderContent: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "This is an example of a DropdownLinkAction." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 148,
						columnNumber: 6
					}, void 0)
				},
				linkText: "Learn More"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 144,
				columnNumber: 3
			}, void 0)
		};
		WithDropdownLinkAction.storyName = "With DropdownLinkAction";
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "props => <CircularOptionPicker {...props} />",
					...Default.parameters?.docs?.source
				}
			}
		};
		AsToggleButtons.parameters = {
			...AsToggleButtons.parameters,
			docs: {
				...AsToggleButtons.parameters?.docs,
				source: {
					originalSource: "props => <CircularOptionPicker {...props} />",
					...AsToggleButtons.parameters?.docs?.source
				}
			}
		};
		WithLoopingDisabled.parameters = {
			...WithLoopingDisabled.parameters,
			docs: {
				...WithLoopingDisabled.parameters?.docs,
				source: {
					originalSource: "props => <CircularOptionPicker {...props} />",
					...WithLoopingDisabled.parameters?.docs?.source
				}
			}
		};
		WithButtonAction.parameters = {
			...WithButtonAction.parameters,
			docs: {
				...WithButtonAction.parameters?.docs,
				source: {
					originalSource: "props => <CircularOptionPicker {...props} />",
					...WithButtonAction.parameters?.docs?.source
				}
			}
		};
		WithDropdownLinkAction.parameters = {
			...WithDropdownLinkAction.parameters,
			docs: {
				...WithDropdownLinkAction.parameters?.docs,
				source: {
					originalSource: "props => <CircularOptionPicker {...props} />",
					...WithDropdownLinkAction.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { AsToggleButtons, Default, WithButtonAction, WithDropdownLinkAction, WithLoopingDisabled, meta as default };
