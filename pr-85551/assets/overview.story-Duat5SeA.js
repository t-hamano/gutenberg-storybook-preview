import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_debounce, t as debounce } from "./debounce-ga5YZOAF.js";
import { n as init_button, t as Button } from "./button--ei7vTao.js";
import { n as init_stack, t as Stack } from "./stack-B_tyTWv7.js";
import { a as Popup, d as Content, f as init_content, i as init_root, l as Header, n as init_title, o as init_popup, r as Root, t as Title, u as init_header } from "./title-C0W6JgrE.js";
import { n as init_validated_input_control, t as ValidatedInputControl } from "./validated-input-control-DTasYuom.js";
import { a as Popup$1, i as init_root$1, m as init_arrow, n as init_trigger, o as init_popup$1, p as Arrow, r as Root$1, t as Trigger } from "./trigger-DihPe4VX.js";
import { i as init_shared, r as formDecorator } from "./shared-BRqYhAs4.js";
//#region ../packages/ui/src/form/with-validation/stories/overview.story.tsx
var overview_story_exports = /* @__PURE__ */ __exportAll({
	AsyncValidation: () => AsyncValidation,
	CustomErrorsOnSubmit: () => CustomErrorsOnSubmit,
	ShowingErrorsAtArbitraryTimes: () => ShowingErrorsAtArbitraryTimes,
	ShowingErrorsWithoutMovingFocus: () => ShowingErrorsWithoutMovingFocus,
	ValidateInModal: () => ValidateInModal,
	ValidateOnPopoverClose: () => ValidateOnPopoverClose,
	WithMultipleControls: () => WithMultipleControls,
	default: () => meta
});
var import_jsx_dev_runtime, expect, userEvent, waitFor, within, _jsxFileName, meta, WithMultipleControls, AsyncValidation, CustomErrorsOnSubmit, ShowingErrorsAtArbitraryTimes, ShowingErrorsWithoutMovingFocus, ValidateInModal, ValidateOnPopoverClose;
function init_overview_story() {
	return (init_overview_story = __esmMin((() => {
		init_react();
		init_debounce();
		init_button();
		init_root(), init_popup(), init_header(), init_title(), init_content();
		init_root$1(), init_trigger(), init_popup$1(), init_arrow();
		init_stack();
		init_shared();
		init_validated_input_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({expect, userEvent, waitFor, within} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/with-validation/stories/overview.story.tsx";
		meta = {
			title: "Components/@wordpress-ui/Form/With Validation/Overview",
			id: "design-system-form-with-validation-overview",
			parameters: { controls: { disable: true } }
		};
		WithMultipleControls = {
			decorators: [formDecorator],
			render: function Template() {
				const [text, setText] = (0, import_react.useState)("");
				const [text2, setText2] = (0, import_react.useState)("");
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ValidatedInputControl, {
					label: "Text",
					required: true,
					value: text,
					description: "The word 'error' will trigger an error.",
					onValueChange: (next) => setText(next ?? ""),
					customValidity: text.toLowerCase() === "error" ? {
						type: "invalid",
						message: "The word \"error\" is not allowed."
					} : void 0
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 36,
					columnNumber: 5
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ValidatedInputControl, {
					label: "Text",
					required: true,
					value: text2,
					description: "The word 'error' will trigger an error.",
					onValueChange: (next) => setText2(next ?? ""),
					customValidity: text2.toLowerCase() === "error" ? {
						type: "invalid",
						message: "The word \"error\" is not allowed."
					} : void 0
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 5
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 35,
					columnNumber: 4
				}, this);
			}
		};
		AsyncValidation = {
			decorators: [formDecorator],
			render: function Template({ ...args }) {
				const [text, setText] = (0, import_react.useState)("");
				const [customValidity, setCustomValidity] = (0, import_react.useState)(void 0);
				const timeoutRef = (0, import_react.useRef)(void 0);
				const debouncedValidate = (0, import_react.useCallback)(debounce((v) => {
					if (v === "") return;
					setCustomValidity({
						type: "validating",
						message: "Validating..."
					});
					timeoutRef.current = setTimeout(() => {
						if (v?.toString().toLowerCase() === "error") setCustomValidity({
							type: "invalid",
							message: "The word \"error\" is not allowed."
						});
						else setCustomValidity({
							type: "valid",
							message: "Validated"
						});
					}, 1500);
				}, 500), []);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ValidatedInputControl, {
					...args,
					value: text,
					onValueChange: (newValue) => {
						setText(newValue ?? "");
						setCustomValidity(void 0);
						clearTimeout(timeoutRef.current);
						debouncedValidate(newValue);
					},
					customValidity
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 123,
					columnNumber: 4
				}, this);
			},
			args: {
				label: "Text",
				description: "The word \"error\" will trigger an error asynchronously.",
				required: true
			}
		};
		({ ...AsyncValidation });
		CustomErrorsOnSubmit = {
			decorators: [formDecorator],
			args: {
				label: "Text",
				required: true,
				description: "The word \"error\" will trigger an error."
			},
			render: function Template({ ...args }) {
				const [text, setText] = (0, import_react.useState)("error");
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ValidatedInputControl, {
					...args,
					value: text,
					onValueChange: (next) => setText(next ?? ""),
					customValidity: text === "error" ? {
						type: "invalid",
						message: "The word \"error\" is not allowed."
					} : void 0
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 235,
					columnNumber: 4
				}, this);
			}
		};
		ShowingErrorsAtArbitraryTimes = {
			args: {
				label: "Text",
				required: true,
				description: "The word \"error\" will trigger an error."
			},
			decorators: [],
			render: function Template({ ...args }) {
				const [text, setText] = (0, import_react.useState)("error");
				const ref = (0, import_react.useRef)(null);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
					direction: "column",
					gap: "md",
					align: "start",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ValidatedInputControl, {
						ref,
						...args,
						value: text,
						onValueChange: (next) => setText(next ?? ""),
						customValidity: text === "error" ? {
							type: "invalid",
							message: "The word \"error\" is not allowed."
						} : void 0
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 274,
						columnNumber: 5
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "outline",
						onClick: () => ref.current?.reportValidity(),
						children: "Report validity"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 288,
						columnNumber: 5
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 273,
					columnNumber: 4
				}, this);
			}
		};
		ShowingErrorsWithoutMovingFocus = {
			args: {
				label: "Text",
				required: true,
				description: "The word \"error\" will trigger an error."
			},
			decorators: [],
			render: function Template({ ...args }) {
				const [text, setText] = (0, import_react.useState)("error");
				const ref = (0, import_react.useRef)(null);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
					direction: "column",
					gap: "md",
					align: "start",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ValidatedInputControl, {
						ref,
						...args,
						value: text,
						onValueChange: (next) => setText(next ?? ""),
						customValidity: text === "error" ? {
							type: "invalid",
							message: "The word \"error\" is not allowed."
						} : void 0
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 318,
						columnNumber: 5
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "outline",
						onClick: () => ref.current?.dispatchEvent(new Event("invalid", { cancelable: true })),
						children: "Show errors"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 332,
						columnNumber: 5
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 317,
					columnNumber: 4
				}, this);
			}
		};
		ValidateInModal = {
			render: function Template({ ...args }) {
				const [isOpen, setIsOpen] = (0, import_react.useState)(false);
				const [text, setText] = (0, import_react.useState)("");
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					variant: "outline",
					onClick: () => setIsOpen(true),
					children: "Open in modal"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 366,
					columnNumber: 5
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
					open: isOpen,
					disablePointerDismissal: true,
					onOpenChange: (nextOpen, eventDetails) => {
						if (!nextOpen && eventDetails.reason === "escape-key") {
							eventDetails.cancel();
							return;
						}
						setIsOpen(nextOpen);
					},
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Dialog title" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 386,
						columnNumber: 8
					}, this) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 385,
						columnNumber: 7
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
						onSubmit: (event) => {
							event.preventDefault();
							setIsOpen(false);
						},
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
							direction: "column",
							gap: "sm",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ValidatedInputControl, {
								...args,
								value: text,
								onValueChange: (next) => setText(next ?? ""),
								customValidity: text === "error" ? {
									type: "invalid",
									message: "The word \"error\" is not allowed."
								} : void 0
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 396,
								columnNumber: 10
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
								direction: "row",
								gap: "sm",
								justify: "flex-end",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									variant: "outline",
									type: "button",
									onClick: () => setIsOpen(false),
									children: "Cancel"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 417,
									columnNumber: 11
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									type: "submit",
									children: "Save"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 424,
									columnNumber: 11
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 412,
								columnNumber: 10
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 395,
							columnNumber: 9
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 389,
						columnNumber: 8
					}, this) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 388,
						columnNumber: 7
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 384,
						columnNumber: 6
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 369,
					columnNumber: 5
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 365,
					columnNumber: 4
				}, this);
			},
			args: {
				label: "Text",
				required: true,
				description: "The word \"error\" will trigger an error."
			}
		};
		ValidateOnPopoverClose = {
			render: function Template({ ...args }) {
				const [isOpen, setIsOpen] = (0, import_react.useState)(false);
				const formRef = (0, import_react.useRef)(null);
				const [text, setText] = (0, import_react.useState)("");
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root$1, {
					open: isOpen,
					onOpenChange: (nextOpen) => {
						if (!nextOpen) {
							const isValid = formRef.current?.reportValidity() ?? true;
							setIsOpen(!isValid);
							return;
						}
						setIsOpen(true);
					},
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, {
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 467,
							columnNumber: 32
						}, this),
						children: "Open in popover"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 467,
						columnNumber: 6
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup$1, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 471,
						columnNumber: 7
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
						ref: formRef,
						style: { width: 200 },
						onSubmit: (event) => {
							event.preventDefault();
							setIsOpen(false);
						},
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ValidatedInputControl, {
							...args,
							value: text,
							onValueChange: (next) => setText(next ?? ""),
							customValidity: text === "error" ? {
								type: "invalid",
								message: "The word \"error\" is not allowed."
							} : void 0
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 480,
							columnNumber: 8
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 472,
						columnNumber: 7
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 470,
						columnNumber: 6
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 454,
					columnNumber: 5
				}, this);
			},
			args: {
				label: "Text",
				description: "The word \"error\" will trigger an error.",
				required: true
			}
		};
		try {
			WithMultipleControls.__docgenInfo = {
				"description": "When there are multiple controls with errors, attempting to submit will\nmove focus to the first control with an error.",
				"displayName": "WithMultipleControls",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/with-validation/stories/overview.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			AsyncValidation.__docgenInfo = {
				"description": "To provide feedback from server-side validation, the `customValidity` prop can be used\nto show additional status indicators while waiting for the server response,\nand after the response is received.\n\nThese indicators are intended for asynchronous validation calls that may take more than 1 second to complete.\nThey may be unnecessary when responses are generally quick.",
				"displayName": "AsyncValidation",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/with-validation/stories/overview.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			CustomErrorsOnSubmit.__docgenInfo = {
				"description": "Custom validity errors are effective immediately, even when they are not yet visible\nto the user. For example, in this form where the initial value is already invalid,\nthe error message will be shown to the user once the submit button is clicked,\neven if the input has never been interacted with.",
				"displayName": "CustomErrorsOnSubmit",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/with-validation/stories/overview.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			ShowingErrorsAtArbitraryTimes.__docgenInfo = {
				"description": "While it is recommended to rely on the built-in behavior for showing errors by\nusing a `form` element and `type=\"submit\"` button around validated fields,\nit is also possible to show errors at arbitrary times.\nThis can be done by calling the [`reportValidity()` method](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reportValidity)\non a ref of the field itself, or the wrapping `form` element.",
				"displayName": "ShowingErrorsAtArbitraryTimes",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/with-validation/stories/overview.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			ShowingErrorsWithoutMovingFocus.__docgenInfo = {
				"description": "A synthetic `invalid` event can be dispatched to reveal an existing error\nwithout moving focus.",
				"displayName": "ShowingErrorsWithoutMovingFocus",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/with-validation/stories/overview.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			ValidateInModal.__docgenInfo = {
				"description": "A `form` wrapper and `type=\"submit\"` button can be used to force validation when\nthe user tries to commit their changes, while still allowing the dialog to be\nclosed by canceling.\n\nOptionally, `disablePointerDismissal` on `Dialog.Root` and blocking dismissal\non Escape in `onOpenChange` can force users to more explicitly signal whether\nthey are trying to \"submit close\" or \"cancel close\" the dialog, as well as\npreventing data loss on accidental closures.",
				"displayName": "ValidateInModal",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/with-validation/stories/overview.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			ValidateOnPopoverClose.__docgenInfo = {
				"description": "[Form methods](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement#instance_methods) like\n`reportValidity()` can be used to validate the fields when a popover is about to be closed,\nand prevent the closing of the popover when invalid.",
				"displayName": "ValidateOnPopoverClose",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/with-validation/stories/overview.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		WithMultipleControls.parameters = {
			...WithMultipleControls.parameters,
			docs: {
				...WithMultipleControls.parameters?.docs,
				source: {
					originalSource: "{\n  decorators: [formDecorator],\n  render: function Template() {\n    const [text, setText] = useState('');\n    const [text2, setText2] = useState('');\n    return <>\n                <ValidatedInputControl label=\"Text\" required value={text} description=\"The word 'error' will trigger an error.\" onValueChange={next => setText(next ?? '')} customValidity={text.toLowerCase() === 'error' ? {\n        type: 'invalid',\n        message: 'The word \"error\" is not allowed.'\n      } : undefined} />\n                <ValidatedInputControl label=\"Text\" required value={text2} description=\"The word 'error' will trigger an error.\" onValueChange={next => setText2(next ?? '')} customValidity={text2.toLowerCase() === 'error' ? {\n        type: 'invalid',\n        message: 'The word \"error\" is not allowed.'\n      } : undefined} />\n            </>;\n  }\n}",
					...WithMultipleControls.parameters?.docs?.source
				},
				description: {
					story: "When there are multiple controls with errors, attempting to submit will\nmove focus to the first control with an error.",
					...WithMultipleControls.parameters?.docs?.description
				}
			}
		};
		AsyncValidation.parameters = {
			...AsyncValidation.parameters,
			docs: {
				...AsyncValidation.parameters?.docs,
				source: {
					originalSource: "{\n  decorators: [formDecorator],\n  render: function Template({\n    ...args\n  }) {\n    const [text, setText] = useState('');\n    const [customValidity, setCustomValidity] = useState<React.ComponentProps<typeof ValidatedInputControl>['customValidity']>(undefined);\n    const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);\n\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    const debouncedValidate = useCallback(debounce(v => {\n      if (v === '') {\n        return;\n      }\n      setCustomValidity({\n        type: 'validating',\n        message: 'Validating...'\n      });\n      timeoutRef.current = setTimeout(() => {\n        if (v?.toString().toLowerCase() === 'error') {\n          setCustomValidity({\n            type: 'invalid',\n            message: 'The word \"error\" is not allowed.'\n          });\n        } else {\n          setCustomValidity({\n            type: 'valid',\n            message: 'Validated'\n          });\n        }\n      }, 1500);\n    }, 500), []);\n    return <ValidatedInputControl {...args} value={text} onValueChange={newValue => {\n      setText(newValue ?? '');\n      setCustomValidity(undefined);\n      clearTimeout(timeoutRef.current);\n      debouncedValidate(newValue);\n    }} customValidity={customValidity} />;\n  },\n  args: {\n    label: 'Text',\n    description: 'The word \"error\" will trigger an error asynchronously.',\n    required: true\n  }\n}",
					...AsyncValidation.parameters?.docs?.source
				},
				description: {
					story: "To provide feedback from server-side validation, the `customValidity` prop can be used\nto show additional status indicators while waiting for the server response,\nand after the response is received.\n\nThese indicators are intended for asynchronous validation calls that may take more than 1 second to complete.\nThey may be unnecessary when responses are generally quick.",
					...AsyncValidation.parameters?.docs?.description
				}
			}
		};
		CustomErrorsOnSubmit.parameters = {
			...CustomErrorsOnSubmit.parameters,
			docs: {
				...CustomErrorsOnSubmit.parameters?.docs,
				source: {
					originalSource: "{\n  decorators: [formDecorator],\n  args: {\n    label: 'Text',\n    required: true,\n    description: 'The word \"error\" will trigger an error.'\n  },\n  render: function Template({\n    ...args\n  }) {\n    const [text, setText] = useState('error');\n    return <ValidatedInputControl {...args} value={text} onValueChange={next => setText(next ?? '')} customValidity={text === 'error' ? {\n      type: 'invalid',\n      message: 'The word \"error\" is not allowed.'\n    } : undefined} />;\n  }\n}",
					...CustomErrorsOnSubmit.parameters?.docs?.source
				},
				description: {
					story: "Custom validity errors are effective immediately, even when they are not yet visible\nto the user. For example, in this form where the initial value is already invalid,\nthe error message will be shown to the user once the submit button is clicked,\neven if the input has never been interacted with.",
					...CustomErrorsOnSubmit.parameters?.docs?.description
				}
			}
		};
		ShowingErrorsAtArbitraryTimes.parameters = {
			...ShowingErrorsAtArbitraryTimes.parameters,
			docs: {
				...ShowingErrorsAtArbitraryTimes.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    label: 'Text',\n    required: true,\n    description: 'The word \"error\" will trigger an error.'\n  },\n  decorators: [],\n  render: function Template({\n    ...args\n  }) {\n    const [text, setText] = useState('error');\n    const ref = useRef<HTMLInputElement>(null);\n    return <Stack direction=\"column\" gap=\"md\" align=\"start\">\n                <ValidatedInputControl ref={ref} {...args} value={text} onValueChange={next => setText(next ?? '')} customValidity={text === 'error' ? {\n        type: 'invalid',\n        message: 'The word \"error\" is not allowed.'\n      } : undefined} />\n                <Button variant=\"outline\" onClick={() => ref.current?.reportValidity()}>\n                    Report validity\n                </Button>\n            </Stack>;\n  }\n}",
					...ShowingErrorsAtArbitraryTimes.parameters?.docs?.source
				},
				description: {
					story: "While it is recommended to rely on the built-in behavior for showing errors by\nusing a `form` element and `type=\"submit\"` button around validated fields,\nit is also possible to show errors at arbitrary times.\nThis can be done by calling the [`reportValidity()` method](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reportValidity)\non a ref of the field itself, or the wrapping `form` element.",
					...ShowingErrorsAtArbitraryTimes.parameters?.docs?.description
				}
			}
		};
		ShowingErrorsWithoutMovingFocus.parameters = {
			...ShowingErrorsWithoutMovingFocus.parameters,
			docs: {
				...ShowingErrorsWithoutMovingFocus.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    label: 'Text',\n    required: true,\n    description: 'The word \"error\" will trigger an error.'\n  },\n  decorators: [],\n  render: function Template({\n    ...args\n  }) {\n    const [text, setText] = useState('error');\n    const ref = useRef<HTMLInputElement>(null);\n    return <Stack direction=\"column\" gap=\"md\" align=\"start\">\n                <ValidatedInputControl ref={ref} {...args} value={text} onValueChange={next => setText(next ?? '')} customValidity={text === 'error' ? {\n        type: 'invalid',\n        message: 'The word \"error\" is not allowed.'\n      } : undefined} />\n                <Button variant=\"outline\" onClick={() => ref.current?.dispatchEvent(new Event('invalid', {\n        cancelable: true\n      }))}>\n                    Show errors\n                </Button>\n            </Stack>;\n  }\n}",
					...ShowingErrorsWithoutMovingFocus.parameters?.docs?.source
				},
				description: {
					story: "A synthetic `invalid` event can be dispatched to reveal an existing error\nwithout moving focus.",
					...ShowingErrorsWithoutMovingFocus.parameters?.docs?.description
				}
			}
		};
		ValidateInModal.parameters = {
			...ValidateInModal.parameters,
			docs: {
				...ValidateInModal.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Template({\n    ...args\n  }) {\n    const [isOpen, setIsOpen] = useState(false);\n    const [text, setText] = useState('');\n    return <>\n                <Button variant=\"outline\" onClick={() => setIsOpen(true)}>\n                    Open in modal\n                </Button>\n                <Dialog.Root open={isOpen} disablePointerDismissal onOpenChange={(nextOpen, eventDetails) => {\n        if (!nextOpen && eventDetails.reason === 'escape-key') {\n          eventDetails.cancel();\n          return;\n        }\n        setIsOpen(nextOpen);\n      }}>\n                    <Dialog.Popup>\n                        <Dialog.Header>\n                            <Dialog.Title>Dialog title</Dialog.Title>\n                        </Dialog.Header>\n                        <Dialog.Content>\n                            <form onSubmit={event => {\n              event.preventDefault();\n              setIsOpen(false);\n            }}>\n                                <Stack direction=\"column\" gap=\"sm\">\n                                    <ValidatedInputControl {...args} value={text} onValueChange={next => setText(next ?? '')} customValidity={text === 'error' ? {\n                  type: 'invalid',\n                  message: 'The word \"error\" is not allowed.'\n                } : undefined} />\n                                    <Stack direction=\"row\" gap=\"sm\" justify=\"flex-end\">\n                                        <Button variant=\"outline\" type=\"button\" onClick={() => setIsOpen(false)}>\n                                            Cancel\n                                        </Button>\n                                        <Button type=\"submit\">Save</Button>\n                                    </Stack>\n                                </Stack>\n                            </form>\n                        </Dialog.Content>\n                    </Dialog.Popup>\n                </Dialog.Root>\n            </>;\n  },\n  args: {\n    label: 'Text',\n    required: true,\n    description: 'The word \"error\" will trigger an error.'\n  }\n}",
					...ValidateInModal.parameters?.docs?.source
				},
				description: {
					story: "A `form` wrapper and `type=\"submit\"` button can be used to force validation when\nthe user tries to commit their changes, while still allowing the dialog to be\nclosed by canceling.\n\nOptionally, `disablePointerDismissal` on `Dialog.Root` and blocking dismissal\non Escape in `onOpenChange` can force users to more explicitly signal whether\nthey are trying to \"submit close\" or \"cancel close\" the dialog, as well as\npreventing data loss on accidental closures.",
					...ValidateInModal.parameters?.docs?.description
				}
			}
		};
		ValidateOnPopoverClose.parameters = {
			...ValidateOnPopoverClose.parameters,
			docs: {
				...ValidateOnPopoverClose.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Template({\n    ...args\n  }) {\n    const [isOpen, setIsOpen] = useState(false);\n    const formRef = useRef<HTMLFormElement>(null);\n    const [text, setText] = useState('');\n    return <Popover.Root open={isOpen} onOpenChange={nextOpen => {\n      if (!nextOpen) {\n        const isValid = formRef.current?.reportValidity() ?? true;\n        setIsOpen(!isValid);\n        return;\n      }\n      setIsOpen(true);\n    }}>\n                    <Popover.Trigger render={<Button variant=\"outline\" />}>\n                        Open in popover\n                    </Popover.Trigger>\n                    <Popover.Popup>\n                        <Popover.Arrow />\n                        <form ref={formRef} style={{\n          width: 200\n        }} onSubmit={event => {\n          event.preventDefault();\n          setIsOpen(false);\n        }}>\n                            <ValidatedInputControl {...args} value={text} onValueChange={next => setText(next ?? '')} customValidity={text === 'error' ? {\n            type: 'invalid',\n            message: 'The word \"error\" is not allowed.'\n          } : undefined} />\n                        </form>\n                    </Popover.Popup>\n                </Popover.Root>;\n  },\n  args: {\n    label: 'Text',\n    description: 'The word \"error\" will trigger an error.',\n    required: true\n  }\n}",
					...ValidateOnPopoverClose.parameters?.docs?.source
				},
				description: {
					story: "[Form methods](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement#instance_methods) like\n`reportValidity()` can be used to validate the fields when a popover is about to be closed,\nand prevent the closing of the popover when invalid.",
					...ValidateOnPopoverClose.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
export { overview_story_exports as n, init_overview_story as t };
