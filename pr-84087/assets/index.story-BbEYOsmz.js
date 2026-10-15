import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as Trigger, c as init_root, i as init_portal, n as init_popup, o as init_trigger, r as Portal, s as Root, t as Popup } from "./popup-BxFj6P9A.js";
import { n as init_stack, t as Stack } from "./stack-DYoOf63N.js";
import { n as init_text, t as Text } from "./text-7MhcSnkB.js";
import { a as Popup$1, d as Item, g as init_item_label, h as ItemLabel, i as init_root$1, n as init_trigger$1, o as init_popup$1, p as init_item, r as Root$1, t as Trigger$1 } from "./trigger-DSu4664c.js";
//#region ../packages/ui/src/alert-dialog/stories/index.story.tsx
function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
function StickyToggle({ label, value, onChange }) {
	const id = (0, import_react.useId)();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
		direction: "row",
		gap: "sm",
		align: "center",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
			id,
			type: "checkbox",
			checked: value,
			onChange: (event) => onChange(event.target.checked)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 299,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
			htmlFor: id,
			children: label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 306,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 298,
		columnNumber: 3
	}, this);
}
function ScrollableContent() {
	const [stickyHeader, setStickyHeader] = (0, import_react.useState)(true);
	const [stickyFooter, setStickyFooter] = (0, import_react.useState)(true);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
		direction: "column",
		gap: "lg",
		align: "start",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
			direction: "row",
			gap: "lg",
			align: "center",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StickyToggle, {
				label: "Sticky header",
				value: stickyHeader,
				onChange: setStickyHeader
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 318,
				columnNumber: 6
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StickyToggle, {
				label: "Sticky footer",
				value: stickyFooter,
				onChange: setStickyFooter
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 324,
				columnNumber: 6
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 317,
			columnNumber: 5
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Review terms" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 330,
			columnNumber: 5
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 316,
		columnNumber: 4
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
		title: "Terms of service",
		description: "Please review the terms before continuing.",
		confirmButtonText: "Accept",
		cancelButtonText: "Decline",
		stickyHeader,
		stickyFooter,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
			direction: "column",
			gap: "lg",
			children: Array.from({ length: 20 }).map((_, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				style: { margin: 0 },
				children: [
					"Paragraph ",
					index + 1,
					": Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
				]
			}, index, true, {
				fileName: _jsxFileName,
				lineNumber: 342,
				columnNumber: 7
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 340,
			columnNumber: 5
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 332,
		columnNumber: 4
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 315,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, action, fn, _jsxFileName, meta, Default, Irreversible, CustomLabels, WithCustomContent, WithCustomZIndex, MenuTrigger, AsyncConfirm, Scrollable, Controlled;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_root(), init_trigger(), init_portal(), init_popup();
		init_root$1(), init_trigger$1(), init_popup$1(), init_item(), init_item_label();
		init_stack();
		init_text();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({action} = __STORYBOOK_MODULE_ACTIONS__);
		({fn} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/alert-dialog/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-ui/AlertDialog",
			id: "design-system-components-alertdialog",
			component: Root,
			subcomponents: {
				"AlertDialog.Trigger": Trigger,
				"AlertDialog.Portal": Portal,
				"AlertDialog.Popup": Popup
			},
			argTypes: {
				onConfirm: { action: fn() },
				onOpenChange: { action: fn() }
			},
			parameters: { componentStatus: {
				status: "use-with-caution",
				whereUsed: "global",
				notes: "Not yet recommended for use alongside components from `@wordpress/components`, pending review of overlays compatibility. See [WordPress/gutenberg#76135](https://github.com/WordPress/gutenberg/issues/76135)."
			} }
		};
		Default = { args: { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Move to trash" }, "trigger", false, {
			fileName: _jsxFileName,
			lineNumber: 43,
			columnNumber: 4
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
			title: "Move to trash?",
			description: "This post will be moved to trash. You can restore it later."
		}, "popup", false, {
			fileName: _jsxFileName,
			lineNumber: 46,
			columnNumber: 4
		}, void 0)] } };
		Irreversible = { args: { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Delete permanently" }, "trigger", false, {
			fileName: _jsxFileName,
			lineNumber: 62,
			columnNumber: 4
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
			intent: "irreversible",
			title: "Delete permanently?",
			description: "This action cannot be undone. All data will be lost.",
			confirmButtonText: "Delete permanently"
		}, "popup", false, {
			fileName: _jsxFileName,
			lineNumber: 65,
			columnNumber: 4
		}, void 0)] } };
		CustomLabels = { args: { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Send feedback" }, "trigger", false, {
			fileName: _jsxFileName,
			lineNumber: 82,
			columnNumber: 4
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
			title: "Send feedback?",
			description: "Your feedback helps us improve. Would you like to send it now?",
			confirmButtonText: "Send feedback",
			cancelButtonText: "Not now"
		}, "popup", false, {
			fileName: _jsxFileName,
			lineNumber: 85,
			columnNumber: 4
		}, void 0)] } };
		WithCustomContent = { args: { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Remove pages" }, "trigger", false, {
			fileName: _jsxFileName,
			lineNumber: 104,
			columnNumber: 4
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
			title: "Remove 3 pages?",
			description: "These pages will be moved to trash.",
			confirmButtonText: "Delete pages",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
				style: {
					margin: "var(--wpds-dimension-gap-sm, 8px) 0 0",
					paddingInlineStart: "var(--wpds-dimension-gap-lg, 16px)"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 119,
							columnNumber: 21
						}, void 0),
						children: "About us"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 119,
						columnNumber: 6
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 120,
							columnNumber: 21
						}, void 0),
						children: "Contact"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 120,
						columnNumber: 6
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 121,
							columnNumber: 21
						}, void 0),
						children: "Privacy policy"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 121,
						columnNumber: 6
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 113,
				columnNumber: 5
			}, void 0)
		}, "popup", false, {
			fileName: _jsxFileName,
			lineNumber: 107,
			columnNumber: 4
		}, void 0)] } };
		WithCustomZIndex = {
			name: "With Custom z-index",
			args: { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Move to trash" }, "trigger", false, {
				fileName: _jsxFileName,
				lineNumber: 149,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
				title: "Move to trash?",
				description: "This post will be moved to trash. You can restore it later.",
				portal: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Portal, { style: { "--wp-ui-dialog-z-index": "9999" } }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 156,
					columnNumber: 6
				}, void 0)
			}, "popup", false, {
				fileName: _jsxFileName,
				lineNumber: 152,
				columnNumber: 4
			}, void 0)] }
		};
		MenuTrigger = { render: () => {
			const [dialogOpen, setDialogOpen] = (0, import_react.useState)(false);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
				open: dialogOpen,
				onOpenChange: setDialogOpen,
				onConfirm: () => action("onConfirm")(),
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root$1, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger$1, { children: "Actions ▾" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 182,
					columnNumber: 6
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup$1, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Edit" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 185,
					columnNumber: 8
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 184,
					columnNumber: 7
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
					onClick: () => setDialogOpen(true),
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Delete…" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 188,
						columnNumber: 8
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 187,
					columnNumber: 7
				}, void 0)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 183,
					columnNumber: 6
				}, void 0)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 181,
					columnNumber: 5
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
					intent: "irreversible",
					title: "Delete permanently?",
					description: "This action cannot be undone. All data will be lost.",
					confirmButtonText: "Delete permanently"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 192,
					columnNumber: 5
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 176,
				columnNumber: 4
			}, void 0);
		} };
		AsyncConfirm = { render: function AsyncConfirmRender(args) {
			const [shouldFail, setShouldFail] = (0, import_react.useState)(false);
			const successId = (0, import_react.useId)();
			const failureId = (0, import_react.useId)();
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", { children: "Async task outcome" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 228,
						columnNumber: 6
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
						htmlFor: successId,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							id: successId,
							type: "radio",
							name: "async-outcome",
							checked: !shouldFail,
							onChange: () => setShouldFail(false)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 230,
							columnNumber: 7
						}, this), "Success (closes dialog)"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 229,
						columnNumber: 6
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
						htmlFor: failureId,
						style: { marginInlineStart: 12 },
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							id: failureId,
							type: "radio",
							name: "async-outcome",
							checked: shouldFail,
							onChange: () => setShouldFail(true)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 243,
							columnNumber: 7
						}, this), "Failure (dialog stays open, shows error)"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 239,
						columnNumber: 6
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 227,
					columnNumber: 5
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 253,
					columnNumber: 5
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
					...args,
					onConfirm: async () => {
						action("onConfirm")();
						try {
							await sleep(2e3);
							if (shouldFail) throw new Error("Task failed");
						} catch {
							return {
								close: false,
								error: "Something went wrong. Please try again."
							};
						}
					},
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Delete permanently" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 272,
						columnNumber: 6
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
						intent: "irreversible",
						title: "Delete permanently?",
						description: "This action cannot be undone. All data will be lost.",
						confirmButtonText: "Delete permanently"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 275,
						columnNumber: 6
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 254,
					columnNumber: 5
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 226,
				columnNumber: 4
			}, this);
		} };
		Scrollable = { args: { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollableContent, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 367,
			columnNumber: 13
		}, void 0) } };
		Controlled = { render: function ControlledRender(args) {
			const [isOpen, setIsOpen] = (0, import_react.useState)(false);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				onClick: () => setIsOpen(true),
				children: "Open Dialog"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 382,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
				...args,
				open: isOpen,
				onOpenChange: (open, eventDetails) => {
					setIsOpen(open);
					args.onOpenChange?.(open, eventDetails);
				},
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
					title: "Move to trash?",
					description: "This post will be moved to trash. You can restore it later."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 391,
					columnNumber: 6
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 383,
				columnNumber: 5
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 381,
				columnNumber: 4
			}, this);
		} };
		try {
			Default.__docgenInfo = {
				"description": "Standard confirmation dialog for reversible actions. The dialog can be\ndismissed via Escape key or the cancel/confirm buttons. Backdrop click\nis blocked.",
				"displayName": "Default",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/alert-dialog/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Irreversible.__docgenInfo = {
				"description": "Confirmation dialog for irreversible actions that cannot be undone.\nThe confirm button uses error/danger coloring.",
				"displayName": "Irreversible",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/alert-dialog/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			CustomLabels.__docgenInfo = {
				"description": "Example with custom button labels for both confirm and cancel buttons.",
				"displayName": "CustomLabels",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/alert-dialog/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithCustomContent.__docgenInfo = {
				"description": "Use `children` to render custom content between the description and the\naction buttons. The `description` should be self-contained for\naccessibility (`aria-describedby`); `children` adds supplementary detail.",
				"displayName": "WithCustomContent",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/alert-dialog/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithCustomZIndex.__docgenInfo = {
				"description": "Popovers in Gutenberg are managed with explicit z-index values, which can\ncreate situations where an alert dialog renders below another popover when\nyou want it above.\n\n`AlertDialog` reuses `Dialog`'s styles, so the same\n`--wp-ui-dialog-z-index` CSS variable controls the z-index of the alert\ndialog's backdrop and popup. Override it either:\n\n- **Globally**, by setting the variable on `:root` or `body` (raises every\n  dialog and alert dialog in the page), or\n- **Per instance**, by passing an `AlertDialog.Portal` with a `style` (or\n  `className`) to `AlertDialog.Popup`'s `portal` prop. The variable\n  cascades from the portal wrapper to everything rendered inside it.\n\nThis story demonstrates the per-instance approach.",
				"displayName": "WithCustomZIndex",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/alert-dialog/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			MenuTrigger.__docgenInfo = {
				"description": "Control the alert dialog when opening it from a menu item. This lets the\nmenu close before the dialog opens and keeps the dialog mounted while the\nmenu popup unmounts.",
				"displayName": "MenuTrigger",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/alert-dialog/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			AsyncConfirm.__docgenInfo = {
				"description": "Async confirm flow. The consumer returns a promise from `onConfirm`.\nThe dialog automatically manages the pending state: buttons are disabled\nand a spinner appears on the confirm button. Toggle between success and\nfailure to test both outcomes.\n\nOn failure, the consumer catches the error and returns\n`{ close: false, error: '...' }`. The component displays the message\nbelow the action buttons and announces it to screen readers. The error\nis automatically cleared on the next confirm attempt or when the dialog\nreopens.",
				"displayName": "AsyncConfirm",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/alert-dialog/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Scrollable.__docgenInfo = {
				"description": "When the dialog's body overflows the available height, the title/description\narea stays pinned to the top of the popup and the action buttons stay pinned\nto the bottom so users keep sight of the context and primary actions while\nscrolling. Separator borders appear only when there is off-screen content\nabove or below. Pass `stickyHeader={ false }` or `stickyFooter={ false }` on\n`AlertDialog.Popup` to opt out — the toggles in this story drive both props\nindependently.",
				"displayName": "Scrollable",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/alert-dialog/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Controlled.__docgenInfo = {
				"description": "The `AlertDialog.Trigger` element is not necessary when the open state is\ncontrolled externally. This is useful when the dialog needs to be opened\nfrom code or from a non-standard trigger element.",
				"displayName": "Controlled",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/alert-dialog/stories/index.story.tsx",
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
					originalSource: "{\n  args: {\n    children: [<AlertDialog.Trigger key=\"trigger\">\n                Move to trash\n            </AlertDialog.Trigger>, <AlertDialog.Popup title=\"Move to trash?\" description=\"This post will be moved to trash. You can restore it later.\" key=\"popup\" />]\n  }\n}",
					...Default.parameters?.docs?.source
				},
				description: {
					story: "Standard confirmation dialog for reversible actions. The dialog can be\ndismissed via Escape key or the cancel/confirm buttons. Backdrop click\nis blocked.",
					...Default.parameters?.docs?.description
				}
			}
		};
		Irreversible.parameters = {
			...Irreversible.parameters,
			docs: {
				...Irreversible.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: [<AlertDialog.Trigger key=\"trigger\">\n                Delete permanently\n            </AlertDialog.Trigger>, <AlertDialog.Popup intent=\"irreversible\" title=\"Delete permanently?\" description=\"This action cannot be undone. All data will be lost.\" confirmButtonText=\"Delete permanently\" key=\"popup\" />]\n  }\n}",
					...Irreversible.parameters?.docs?.source
				},
				description: {
					story: "Confirmation dialog for irreversible actions that cannot be undone.\nThe confirm button uses error/danger coloring.",
					...Irreversible.parameters?.docs?.description
				}
			}
		};
		CustomLabels.parameters = {
			...CustomLabels.parameters,
			docs: {
				...CustomLabels.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: [<AlertDialog.Trigger key=\"trigger\">\n                Send feedback\n            </AlertDialog.Trigger>, <AlertDialog.Popup title=\"Send feedback?\" description=\"Your feedback helps us improve. Would you like to send it now?\" confirmButtonText=\"Send feedback\" cancelButtonText=\"Not now\" key=\"popup\" />]\n  }\n}",
					...CustomLabels.parameters?.docs?.source
				},
				description: {
					story: "Example with custom button labels for both confirm and cancel buttons.",
					...CustomLabels.parameters?.docs?.description
				}
			}
		};
		WithCustomContent.parameters = {
			...WithCustomContent.parameters,
			docs: {
				...WithCustomContent.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: [<AlertDialog.Trigger key=\"trigger\">\n                Remove pages\n            </AlertDialog.Trigger>, <AlertDialog.Popup title=\"Remove 3 pages?\" description=\"These pages will be moved to trash.\" confirmButtonText=\"Delete pages\" key=\"popup\">\n                <ul style={{\n        margin: 'var(--wpds-dimension-gap-sm) 0 0',\n        paddingInlineStart: 'var(--wpds-dimension-gap-lg)'\n      }}>\n                    <Text render={<li />}>About us</Text>\n                    <Text render={<li />}>Contact</Text>\n                    <Text render={<li />}>Privacy policy</Text>\n                </ul>\n            </AlertDialog.Popup>]\n  }\n}",
					...WithCustomContent.parameters?.docs?.source
				},
				description: {
					story: "Use `children` to render custom content between the description and the\naction buttons. The `description` should be self-contained for\naccessibility (`aria-describedby`); `children` adds supplementary detail.",
					...WithCustomContent.parameters?.docs?.description
				}
			}
		};
		WithCustomZIndex.parameters = {
			...WithCustomZIndex.parameters,
			docs: {
				...WithCustomZIndex.parameters?.docs,
				source: {
					originalSource: "{\n  name: 'With Custom z-index',\n  args: {\n    children: [<AlertDialog.Trigger key=\"trigger\">\n                Move to trash\n            </AlertDialog.Trigger>, <AlertDialog.Popup title=\"Move to trash?\" description=\"This post will be moved to trash. You can restore it later.\" portal={<AlertDialog.Portal style={{\n      '--wp-ui-dialog-z-index': '9999'\n    }} />} key=\"popup\" />]\n  }\n}",
					...WithCustomZIndex.parameters?.docs?.source
				},
				description: {
					story: "Popovers in Gutenberg are managed with explicit z-index values, which can\ncreate situations where an alert dialog renders below another popover when\nyou want it above.\n\n`AlertDialog` reuses `Dialog`'s styles, so the same\n`--wp-ui-dialog-z-index` CSS variable controls the z-index of the alert\ndialog's backdrop and popup. Override it either:\n\n- **Globally**, by setting the variable on `:root` or `body` (raises every\n  dialog and alert dialog in the page), or\n- **Per instance**, by passing an `AlertDialog.Portal` with a `style` (or\n  `className`) to `AlertDialog.Popup`'s `portal` prop. The variable\n  cascades from the portal wrapper to everything rendered inside it.\n\nThis story demonstrates the per-instance approach.",
					...WithCustomZIndex.parameters?.docs?.description
				}
			}
		};
		MenuTrigger.parameters = {
			...MenuTrigger.parameters,
			docs: {
				...MenuTrigger.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => {\n    const [dialogOpen, setDialogOpen] = useState(false);\n    return <AlertDialog.Root open={dialogOpen} onOpenChange={setDialogOpen} onConfirm={() => action('onConfirm')()}>\n                <Menu.Root>\n                    <Menu.Trigger>Actions ▾</Menu.Trigger>\n                    <Menu.Popup>\n                        <Menu.Item>\n                            <Menu.ItemLabel>Edit</Menu.ItemLabel>\n                        </Menu.Item>\n                        <Menu.Item onClick={() => setDialogOpen(true)}>\n                            <Menu.ItemLabel>Delete…</Menu.ItemLabel>\n                        </Menu.Item>\n                    </Menu.Popup>\n                </Menu.Root>\n                <AlertDialog.Popup intent=\"irreversible\" title=\"Delete permanently?\" description=\"This action cannot be undone. All data will be lost.\" confirmButtonText=\"Delete permanently\" />\n            </AlertDialog.Root>;\n  }\n}",
					...MenuTrigger.parameters?.docs?.source
				},
				description: {
					story: "Control the alert dialog when opening it from a menu item. This lets the\nmenu close before the dialog opens and keeps the dialog mounted while the\nmenu popup unmounts.",
					...MenuTrigger.parameters?.docs?.description
				}
			}
		};
		AsyncConfirm.parameters = {
			...AsyncConfirm.parameters,
			docs: {
				...AsyncConfirm.parameters?.docs,
				source: {
					originalSource: "{\n  render: function AsyncConfirmRender(args) {\n    const [shouldFail, setShouldFail] = useState(false);\n    const successId = useId();\n    const failureId = useId();\n    return <>\n                <fieldset>\n                    <legend>Async task outcome</legend>\n                    <label htmlFor={successId}>\n                        <input id={successId} type=\"radio\" name=\"async-outcome\" checked={!shouldFail} onChange={() => setShouldFail(false)} />\n                        Success (closes dialog)\n                    </label>\n                    <label htmlFor={failureId} style={{\n          marginInlineStart: 12\n        }}>\n                        <input id={failureId} type=\"radio\" name=\"async-outcome\" checked={shouldFail} onChange={() => setShouldFail(true)} />\n                        Failure (dialog stays open, shows error)\n                    </label>\n                </fieldset>\n                <br />\n                <AlertDialog.Root {...args} onConfirm={async () => {\n        action('onConfirm')();\n        try {\n          await sleep(2000);\n          if (shouldFail) {\n            throw new Error('Task failed');\n          }\n        } catch {\n          return {\n            close: false,\n            error: 'Something went wrong. Please try again.'\n          };\n        }\n        return undefined;\n      }}>\n                    <AlertDialog.Trigger>\n                        Delete permanently\n                    </AlertDialog.Trigger>\n                    <AlertDialog.Popup intent=\"irreversible\" title=\"Delete permanently?\" description=\"This action cannot be undone. All data will be lost.\" confirmButtonText=\"Delete permanently\" />\n                </AlertDialog.Root>\n            </>;\n  }\n}",
					...AsyncConfirm.parameters?.docs?.source
				},
				description: {
					story: "Async confirm flow. The consumer returns a promise from `onConfirm`.\nThe dialog automatically manages the pending state: buttons are disabled\nand a spinner appears on the confirm button. Toggle between success and\nfailure to test both outcomes.\n\nOn failure, the consumer catches the error and returns\n`{ close: false, error: '...' }`. The component displays the message\nbelow the action buttons and announces it to screen readers. The error\nis automatically cleared on the next confirm attempt or when the dialog\nreopens.",
					...AsyncConfirm.parameters?.docs?.description
				}
			}
		};
		Scrollable.parameters = {
			...Scrollable.parameters,
			docs: {
				...Scrollable.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: <ScrollableContent />\n  }\n}",
					...Scrollable.parameters?.docs?.source
				},
				description: {
					story: "When the dialog's body overflows the available height, the title/description\narea stays pinned to the top of the popup and the action buttons stay pinned\nto the bottom so users keep sight of the context and primary actions while\nscrolling. Separator borders appear only when there is off-screen content\nabove or below. Pass `stickyHeader={ false }` or `stickyFooter={ false }` on\n`AlertDialog.Popup` to opt out — the toggles in this story drive both props\nindependently.",
					...Scrollable.parameters?.docs?.description
				}
			}
		};
		Controlled.parameters = {
			...Controlled.parameters,
			docs: {
				...Controlled.parameters?.docs,
				source: {
					originalSource: "{\n  render: function ControlledRender(args) {\n    const [isOpen, setIsOpen] = useState(false);\n    return <>\n                <button onClick={() => setIsOpen(true)}>Open Dialog</button>\n                <AlertDialog.Root {...args} open={isOpen} onOpenChange={(open, eventDetails) => {\n        setIsOpen(open);\n        args.onOpenChange?.(open, eventDetails);\n      }}>\n                    <AlertDialog.Popup title=\"Move to trash?\" description=\"This post will be moved to trash. You can restore it later.\" />\n                </AlertDialog.Root>\n            </>;\n  }\n}",
					...Controlled.parameters?.docs?.source
				},
				description: {
					story: "The `AlertDialog.Trigger` element is not necessary when the open state is\ncontrolled externally. This is useful when the dialog needs to be opened\nfrom code or from a non-standard trigger element.",
					...Controlled.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { AsyncConfirm, Controlled, CustomLabels, Default, Irreversible, MenuTrigger, Scrollable, WithCustomContent, WithCustomZIndex, meta as default };
