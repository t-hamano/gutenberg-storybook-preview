import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { t as fullscreen_default } from "./fullscreen-PqotIzqf.js";
import { n as init_input_control, t as InputControl } from "./input-control-Dse9Lf8b.js";
import { n as init_button, t as Button } from "./button-wsTfHPkm.js";
import { n as init_modal, t as Modal } from "./modal-BjnE1lgM.js";
import { r as init_build_module } from "./library.story-DawnfKTW.js";
//#region ../packages/components/src/modal/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default, WithsizeSmall, WithHeaderActions;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_build_module();
		init_button();
		init_input_control();
		init_modal();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/modal/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			component: Modal,
			title: "Components/@wordpress-components/Overlays/Modal",
			id: "components-modal",
			argTypes: {
				children: { control: false },
				onKeyDown: { control: false },
				focusOnMount: {
					options: [
						true,
						false,
						"firstElement",
						"firstContentElement"
					],
					control: { type: "select" }
				},
				role: { control: { type: "text" } },
				onRequestClose: { action: "onRequestClose" },
				isDismissible: { control: { type: "boolean" } }
			},
			parameters: {
				controls: { expanded: true },
				componentStatus: {
					status: "recommended",
					whereUsed: "global",
					notes: "Will be superseded by [`Dialog`](?path=/docs/design-system-components-dialog--docs) in `@wordpress/ui`, but continue using for now."
				}
			}
		};
		Template = ({ onRequestClose, ...args }) => {
			const [isOpen, setOpen] = (0, import_react.useState)(false);
			const openModal = () => setOpen(true);
			const closeModal = (event) => {
				setOpen(false);
				onRequestClose(event);
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				__next40pxDefaultSize: true,
				variant: "secondary",
				onClick: openModal,
				children: "Open Modal"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 56,
				columnNumber: 4
			}, void 0), isOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal, {
				onRequestClose: closeModal,
				...args,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 65,
						columnNumber: 6
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputControl, { style: { marginBottom: "20px" } }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 77,
						columnNumber: 6
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						__next40pxDefaultSize: true,
						variant: "secondary",
						onClick: closeModal,
						children: "Close Modal"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 79,
						columnNumber: 6
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 64,
				columnNumber: 5
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 55,
				columnNumber: 3
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = { title: "Title" };
		Default.parameters = { docs: { source: { code: "" } } };
		WithsizeSmall = Template.bind({});
		WithsizeSmall.args = { size: "small" };
		WithsizeSmall.storyName = "With size: small";
		WithHeaderActions = Template.bind({});
		WithHeaderActions.args = {
			...Default.args,
			headerActions: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				icon: fullscreen_default,
				label: "Fullscreen mode",
				size: "compact"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 117,
				columnNumber: 3
			}, void 0),
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { height: "200px" } }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 119,
				columnNumber: 12
			}, void 0)
		};
		WithHeaderActions.parameters = { ...Default.parameters };
		try {
			WithHeaderActions.__docgenInfo = {
				"description": "The `headerActions` prop can be used to add auxiliary actions to the header, for example a fullscreen mode toggle.",
				"displayName": "WithHeaderActions",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/modal/stories/index.story.tsx",
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
					originalSource: "({\n  onRequestClose,\n  ...args\n}) => {\n  const [isOpen, setOpen] = useState(false);\n  const openModal = () => setOpen(true);\n  const closeModal: ModalProps['onRequestClose'] = event => {\n    setOpen(false);\n    onRequestClose(event);\n  };\n  return <>\n            <Button __next40pxDefaultSize variant=\"secondary\" onClick={openModal}>\n                Open Modal\n            </Button>\n            {isOpen && <Modal onRequestClose={closeModal} {...args}>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n                        sed do eiusmod tempor incididunt ut labore et magna\n                        aliqua. Ut enim ad minim veniam, quis nostrud\n                        exercitation ullamco laboris nisi ut aliquip ex ea ea\n                        commodo consequat. Duis aute irure dolor in\n                        reprehenderit in voluptate velit esse cillum dolore eu\n                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n                        non proident, sunt in culpa qui officia deserunt mollit\n                        anim id est laborum.\n                    </p>\n\n                    <InputControl style={{\n        marginBottom: '20px'\n      }} />\n\n                    <Button __next40pxDefaultSize variant=\"secondary\" onClick={closeModal}>\n                        Close Modal\n                    </Button>\n                </Modal>}\n        </>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithsizeSmall.parameters = {
			...WithsizeSmall.parameters,
			docs: {
				...WithsizeSmall.parameters?.docs,
				source: {
					originalSource: "({\n  onRequestClose,\n  ...args\n}) => {\n  const [isOpen, setOpen] = useState(false);\n  const openModal = () => setOpen(true);\n  const closeModal: ModalProps['onRequestClose'] = event => {\n    setOpen(false);\n    onRequestClose(event);\n  };\n  return <>\n            <Button __next40pxDefaultSize variant=\"secondary\" onClick={openModal}>\n                Open Modal\n            </Button>\n            {isOpen && <Modal onRequestClose={closeModal} {...args}>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n                        sed do eiusmod tempor incididunt ut labore et magna\n                        aliqua. Ut enim ad minim veniam, quis nostrud\n                        exercitation ullamco laboris nisi ut aliquip ex ea ea\n                        commodo consequat. Duis aute irure dolor in\n                        reprehenderit in voluptate velit esse cillum dolore eu\n                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n                        non proident, sunt in culpa qui officia deserunt mollit\n                        anim id est laborum.\n                    </p>\n\n                    <InputControl style={{\n        marginBottom: '20px'\n      }} />\n\n                    <Button __next40pxDefaultSize variant=\"secondary\" onClick={closeModal}>\n                        Close Modal\n                    </Button>\n                </Modal>}\n        </>;\n}",
					...WithsizeSmall.parameters?.docs?.source
				}
			}
		};
		WithHeaderActions.parameters = {
			...WithHeaderActions.parameters,
			docs: {
				...WithHeaderActions.parameters?.docs,
				source: {
					originalSource: "({\n  onRequestClose,\n  ...args\n}) => {\n  const [isOpen, setOpen] = useState(false);\n  const openModal = () => setOpen(true);\n  const closeModal: ModalProps['onRequestClose'] = event => {\n    setOpen(false);\n    onRequestClose(event);\n  };\n  return <>\n            <Button __next40pxDefaultSize variant=\"secondary\" onClick={openModal}>\n                Open Modal\n            </Button>\n            {isOpen && <Modal onRequestClose={closeModal} {...args}>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n                        sed do eiusmod tempor incididunt ut labore et magna\n                        aliqua. Ut enim ad minim veniam, quis nostrud\n                        exercitation ullamco laboris nisi ut aliquip ex ea ea\n                        commodo consequat. Duis aute irure dolor in\n                        reprehenderit in voluptate velit esse cillum dolore eu\n                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n                        non proident, sunt in culpa qui officia deserunt mollit\n                        anim id est laborum.\n                    </p>\n\n                    <InputControl style={{\n        marginBottom: '20px'\n      }} />\n\n                    <Button __next40pxDefaultSize variant=\"secondary\" onClick={closeModal}>\n                        Close Modal\n                    </Button>\n                </Modal>}\n        </>;\n}",
					...WithHeaderActions.parameters?.docs?.source
				},
				description: {
					story: "The `headerActions` prop can be used to add auxiliary actions to the header, for example a fullscreen mode toggle.",
					...WithHeaderActions.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, WithHeaderActions, WithsizeSmall, meta as default };
