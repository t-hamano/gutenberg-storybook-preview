import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as Trigger, c as init_root, n as init_popup, o as init_trigger, s as Root, t as Popup } from "./popup-Cp4rq1-q.js";
import { _ as CloseIconButton, a as Root$1, b as init_action, c as init_popup$1, d as Header, f as init_header, g as init_content, h as Content, i as init_title, m as init_footer, n as init_trigger$1, o as init_root$1, p as Footer, r as Title, s as Popup$1, t as Trigger$1, v as init_close_icon_button, y as Action } from "./trigger-aPe3CCrs.js";
import { n as init_stack, t as Stack } from "./stack-s_FjhA7z.js";
import { a as Description, c as init_close_icon_button$1, i as init_footer$1, l as Action$1, n as init_trigger$2, o as init_description, r as Footer$1, s as CloseIconButton$1, t as Trigger$2, u as init_action$1 } from "./trigger-D9s--fjO.js";
import { a as Popup$2, d as Content$1, f as init_content$1, i as init_root$2, l as Header$1, n as init_title$1, o as init_popup$2, r as Root$2, t as Title$1, u as init_header$1 } from "./title-J_8LQ4TA.js";
import { a as Root$3, i as init_label, o as init_root$3, r as Label } from "./description-D29ruIHn.js";
import { n as init_textarea, t as Textarea } from "./textarea-CUyWimYi.js";
import { n as init_input_control, t as InputControl } from "./input-control-zY4sVtCD.js";
//#region ../packages/ui/src/dialog/stories/usage-guidelines.story.tsx
var usage_guidelines_story_exports = /* @__PURE__ */ __exportAll({
	AlertDialogForDeliberateInterruption: () => AlertDialogForDeliberateInterruption,
	DialogForFocusedTask: () => DialogForFocusedTask,
	DrawerForContextualEditing: () => DrawerForContextualEditing,
	default: () => meta
});
var import_jsx_dev_runtime, _jsxFileName, meta, DialogForFocusedTask, AlertDialogForDeliberateInterruption, DrawerForContextualEditing;
function init_usage_guidelines_story() {
	return (init_usage_guidelines_story = __esmMin((() => {
		init_root(), init_trigger(), init_popup();
		init_root$1(), init_trigger$1(), init_popup$1(), init_header(), init_title(), init_close_icon_button(), init_content(), init_footer(), init_action();
		init_input_control();
		init_root$3(), init_label(), init_textarea();
		init_stack();
		init_root$2(), init_trigger$2(), init_popup$2(), init_header$1(), init_title$1(), init_close_icon_button$1(), init_content$1(), init_description(), init_footer$1(), init_action$1();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/dialog/stories/usage-guidelines.story.tsx";
		meta = {
			title: "Components/@wordpress-ui/Dialog/Usage Guidelines",
			id: "design-system-components-dialog-usage-guidelines",
			parameters: { controls: { disable: true } },
			tags: ["!dev"]
		};
		DialogForFocusedTask = { render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root$2, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger$2, { children: "Add tax rate" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 28,
			columnNumber: 4
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup$2, {
			size: "small",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header$1, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title$1, { children: "Add tax rate" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 31,
					columnNumber: 6
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CloseIconButton$1, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 32,
					columnNumber: 6
				}, void 0)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 30,
					columnNumber: 5
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content$1, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
					direction: "column",
					gap: "sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "Enter a name and percentage for the new tax rate." }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 36,
							columnNumber: 7
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputControl, {
							label: "Name",
							defaultValue: "Standard rate"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 39,
							columnNumber: 7
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputControl, {
							label: "Rate (%)",
							type: "number",
							defaultValue: "8.5"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 43,
							columnNumber: 7
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 35,
					columnNumber: 6
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 34,
					columnNumber: 5
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer$1, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Action$1, {
					variant: "outline",
					children: "Cancel"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 6
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Action$1, { children: "Add tax rate" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 6
				}, void 0)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 5
				}, void 0)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 29,
			columnNumber: 4
		}, void 0)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 27,
			columnNumber: 3
		}, void 0) };
		AlertDialogForDeliberateInterruption = { render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Remove customer" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 66,
			columnNumber: 4
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
			intent: "irreversible",
			title: "Remove customer?",
			description: "This customer will lose access to their account. This action cannot be undone.",
			confirmButtonText: "Remove customer"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 67,
			columnNumber: 4
		}, void 0)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 65,
			columnNumber: 3
		}, void 0) };
		DrawerForContextualEditing = { render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root$1, {
			modal: false,
			swipeDirection: "right",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger$1, { children: "Edit order details" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 84,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup$1, {
				size: "medium",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Order details" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 87,
						columnNumber: 6
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CloseIconButton, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 88,
						columnNumber: 6
					}, void 0)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 86,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
						direction: "column",
						gap: "md",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputControl, {
								label: "Customer name",
								defaultValue: "Alex Rivera"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 92,
								columnNumber: 7
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root$3, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Shipping address" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 97,
								columnNumber: 8
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, {
								defaultValue: "123 Market Street\nSan Francisco, CA 94103",
								rows: 3
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 98,
								columnNumber: 8
							}, void 0)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 96,
								columnNumber: 7
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root$3, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Internal note" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 106,
								columnNumber: 8
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, {
								defaultValue: "Gift wrap requested.",
								rows: 2
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 107,
								columnNumber: 8
							}, void 0)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 105,
								columnNumber: 7
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 91,
						columnNumber: 6
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 90,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Action, {
						variant: "outline",
						children: "Cancel"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 115,
						columnNumber: 6
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Action, { children: "Save changes" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 116,
						columnNumber: 6
					}, void 0)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 114,
						columnNumber: 5
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 85,
				columnNumber: 4
			}, void 0)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 83,
			columnNumber: 3
		}, void 0) };
		try {
			DialogForFocusedTask.__docgenInfo = {
				"description": "Dialog works well for a focused task with one primary action that can be\nopened from many places without needing surrounding page context.",
				"displayName": "DialogForFocusedTask",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/dialog/stories/usage-guidelines.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			AlertDialogForDeliberateInterruption.__docgenInfo = {
				"description": "AlertDialog is appropriate when the overlay is a deliberate interruption,\nsuch as confirming a destructive action.",
				"displayName": "AlertDialogForDeliberateInterruption",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/dialog/stories/usage-guidelines.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			DrawerForContextualEditing.__docgenInfo = {
				"description": "Drawer fits contextual editing where the user benefits from keeping the\nunderlying page visible while working through multiple fields or sections.",
				"displayName": "DrawerForContextualEditing",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/dialog/stories/usage-guidelines.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		DialogForFocusedTask.parameters = {
			...DialogForFocusedTask.parameters,
			docs: {
				...DialogForFocusedTask.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <Dialog.Root>\n            <Dialog.Trigger>Add tax rate</Dialog.Trigger>\n            <Dialog.Popup size=\"small\">\n                <Dialog.Header>\n                    <Dialog.Title>Add tax rate</Dialog.Title>\n                    <Dialog.CloseIconButton />\n                </Dialog.Header>\n                <Dialog.Content>\n                    <Stack direction=\"column\" gap=\"sm\">\n                        <Dialog.Description>\n                            Enter a name and percentage for the new tax rate.\n                        </Dialog.Description>\n                        <InputControl label=\"Name\" defaultValue=\"Standard rate\" />\n                        <InputControl label=\"Rate (%)\" type=\"number\" defaultValue=\"8.5\" />\n                    </Stack>\n                </Dialog.Content>\n                <Dialog.Footer>\n                    <Dialog.Action variant=\"outline\">Cancel</Dialog.Action>\n                    <Dialog.Action>Add tax rate</Dialog.Action>\n                </Dialog.Footer>\n            </Dialog.Popup>\n        </Dialog.Root>\n}",
					...DialogForFocusedTask.parameters?.docs?.source
				},
				description: {
					story: "Dialog works well for a focused task with one primary action that can be\nopened from many places without needing surrounding page context.",
					...DialogForFocusedTask.parameters?.docs?.description
				}
			}
		};
		AlertDialogForDeliberateInterruption.parameters = {
			...AlertDialogForDeliberateInterruption.parameters,
			docs: {
				...AlertDialogForDeliberateInterruption.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <AlertDialog.Root>\n            <AlertDialog.Trigger>Remove customer</AlertDialog.Trigger>\n            <AlertDialog.Popup intent=\"irreversible\" title=\"Remove customer?\" description=\"This customer will lose access to their account. This action cannot be undone.\" confirmButtonText=\"Remove customer\" />\n        </AlertDialog.Root>\n}",
					...AlertDialogForDeliberateInterruption.parameters?.docs?.source
				},
				description: {
					story: "AlertDialog is appropriate when the overlay is a deliberate interruption,\nsuch as confirming a destructive action.",
					...AlertDialogForDeliberateInterruption.parameters?.docs?.description
				}
			}
		};
		DrawerForContextualEditing.parameters = {
			...DrawerForContextualEditing.parameters,
			docs: {
				...DrawerForContextualEditing.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <Drawer.Root modal={false} swipeDirection=\"right\">\n            <Drawer.Trigger>Edit order details</Drawer.Trigger>\n            <Drawer.Popup size=\"medium\">\n                <Drawer.Header>\n                    <Drawer.Title>Order details</Drawer.Title>\n                    <Drawer.CloseIconButton />\n                </Drawer.Header>\n                <Drawer.Content>\n                    <Stack direction=\"column\" gap=\"md\">\n                        <InputControl label=\"Customer name\" defaultValue=\"Alex Rivera\" />\n                        <Field.Root>\n                            <Field.Label>Shipping address</Field.Label>\n                            <Textarea defaultValue={'123 Market Street\\nSan Francisco, CA 94103'} rows={3} />\n                        </Field.Root>\n                        <Field.Root>\n                            <Field.Label>Internal note</Field.Label>\n                            <Textarea defaultValue=\"Gift wrap requested.\" rows={2} />\n                        </Field.Root>\n                    </Stack>\n                </Drawer.Content>\n                <Drawer.Footer>\n                    <Drawer.Action variant=\"outline\">Cancel</Drawer.Action>\n                    <Drawer.Action>Save changes</Drawer.Action>\n                </Drawer.Footer>\n            </Drawer.Popup>\n        </Drawer.Root>\n}",
					...DrawerForContextualEditing.parameters?.docs?.source
				},
				description: {
					story: "Drawer fits contextual editing where the user benefits from keeping the\nunderlying page visible while working through multiple fields or sections.",
					...DrawerForContextualEditing.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
export { usage_guidelines_story_exports as a, init_usage_guidelines_story as i, DialogForFocusedTask as n, DrawerForContextualEditing as r, AlertDialogForDeliberateInterruption as t };
