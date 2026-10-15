import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { n as keyboard_return_default } from "./keyboard-return-C45C3WW6.js";
import { n as button_default, r as init_button } from "./button-Bj8SgySP.js";
import { n as toggle_control_default, t as init_toggle_control } from "./toggle-control-qNG9xs9Z.js";
import { n as init_url_popover, t as URLPopover } from "./url-popover-CpH8YWKy.js";
import { r as init_build_module$1 } from "./library.story-DawnfKTW.js";
//#region ../packages/block-editor/src/components/url-popover/stories/index.story.jsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_button(), init_toggle_control();
		init_react();
		init_build_module();
		init_build_module$1();
		init_url_popover();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/url-popover/stories/index.story.jsx";
		meta = {
			id: "blockeditor-urlpopover",
			title: "Editor/Block Editor/URLPopover",
			component: URLPopover,
			parameters: {
				a11y: { test: "todo" },
				docs: {
					canvas: { sourceState: "shown" },
					description: { component: "Popover component used for editing and viewing URLs." }
				}
			},
			argTypes: {
				onClose: {
					action: "onClose",
					description: "Callback when the popover is closed.",
					table: { type: { summary: "function" } }
				},
				renderSettings: {
					description: "Callback to render settings inside the popover.",
					table: { type: { summary: "function" } },
					control: false
				},
				additionalControls: {
					description: "Additional controls rendered below the input row. They are hidden while the settings drawer is open.",
					table: { type: { summary: "Element" } },
					control: false
				},
				placement: {
					control: { type: "select" },
					options: [
						"top",
						"top-start",
						"top-end",
						"right",
						"right-start",
						"right-end",
						"bottom",
						"bottom-start",
						"bottom-end",
						"left",
						"left-start",
						"left-end",
						"overlay"
					],
					description: "Placement of the popover relative to its parent.",
					table: {
						type: { summary: "string" },
						defaultValue: { summary: "'bottom'" }
					}
				},
				focusOnMount: {
					control: { type: "select" },
					options: [
						"firstElement",
						"firstInputElement",
						true,
						false
					],
					description: "Controls which element is focused when the popover mounts.",
					table: {
						type: { summary: "boolean | 'firstElement' | 'firstInputElement'" },
						defaultValue: { summary: "'firstElement'" }
					}
				}
			},
			args: {
				placement: "bottom",
				focusOnMount: "firstElement"
			}
		};
		Default = { render: function Template({ onClose, ...args }) {
			const [isVisible, setIsVisible] = (0, import_react.useState)(true);
			const [url, setUrl] = (0, import_react.useState)("");
			const [isOpenInNewTab, setIsOpenInNewTab] = (0, import_react.useState)(false);
			const closePopover = () => setIsVisible(false);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, {
				__next40pxDefaultSize: true,
				onClick: () => setIsVisible(true),
				children: __("Edit URL")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 101,
				columnNumber: 5
			}, this), isVisible && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(URLPopover, {
				...args,
				onClose: (...closeArgs) => {
					onClose(...closeArgs);
					closePopover();
				},
				renderSettings: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(toggle_control_default, {
					label: __("Open in new tab"),
					checked: isOpenInNewTab,
					onChange: setIsOpenInNewTab
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 115,
					columnNumber: 8
				}, this),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						closePopover();
					},
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
						type: "url",
						placeholder: __("Enter URL"),
						value: url,
						onChange: (e) => setUrl(e.target.value)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 128,
						columnNumber: 8
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, {
						__next40pxDefaultSize: true,
						icon: keyboard_return_default,
						label: __("Apply"),
						type: "submit"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 134,
						columnNumber: 8
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 122,
					columnNumber: 7
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 108,
				columnNumber: 6
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 100,
				columnNumber: 4
			}, this);
		} };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Template({\n    onClose,\n    ...args\n  }) {\n    const [isVisible, setIsVisible] = useState(true);\n    const [url, setUrl] = useState('');\n    const [isOpenInNewTab, setIsOpenInNewTab] = useState(false);\n\n    // Close the popover.\n    const closePopover = () => setIsVisible(false);\n    return <>\n                <Button __next40pxDefaultSize onClick={() => setIsVisible(true)}>\n                    {__('Edit URL')}\n                </Button>\n                {isVisible && <URLPopover {...args} onClose={(...closeArgs) => {\n        onClose(...closeArgs);\n        closePopover();\n      }} renderSettings={() => <ToggleControl label={__('Open in new tab')} checked={isOpenInNewTab} onChange={setIsOpenInNewTab} />}>\n                        <form onSubmit={e => {\n          e.preventDefault();\n          closePopover();\n        }}>\n                            <input type=\"url\" placeholder={__('Enter URL')} value={url} onChange={e => setUrl(e.target.value)} />\n                            <Button __next40pxDefaultSize icon={keyboardReturn} label={__('Apply')} type=\"submit\" />\n                        </form>\n                    </URLPopover>}\n            </>;\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
