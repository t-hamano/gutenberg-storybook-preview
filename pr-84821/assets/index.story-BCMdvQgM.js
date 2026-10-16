import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_button, t as Button } from "./button-yiOgKsLV.js";
import { n as init_stack, t as Stack } from "./stack-s_FjhA7z.js";
import { n as init_visually_hidden, t as VisuallyHidden } from "./visually-hidden-FYENO0pz.js";
import { a as Description, c as init_close_icon_button, i as init_footer, l as Action, n as init_trigger, o as init_description, r as Footer, s as CloseIconButton, t as Trigger, u as init_action } from "./trigger-D9s--fjO.js";
import { a as Popup, c as init_portal, d as Content, f as init_content, i as init_root, l as Header, n as init_title, o as init_popup, r as Root, s as Portal, t as Title, u as init_header } from "./title-J_8LQ4TA.js";
//#region ../packages/ui/src/dialog/stories/index.story.tsx
function SizeSelector({ value, onChange }) {
	const selectId = (0, import_react.useId)();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
		direction: "row",
		gap: "sm",
		align: "center",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
			htmlFor: selectId,
			children: "Dialog size preset"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 92,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
			id: selectId,
			value,
			onChange: (e) => onChange(e.target.value),
			children: ALL_SIZES.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
				value: s,
				children: [s, s === "medium" ? " (default)" : ""]
			}, s, true, {
				fileName: _jsxFileName,
				lineNumber: 105,
				columnNumber: 6
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 93,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 91,
		columnNumber: 3
	}, this);
}
function SizePlaygroundContent() {
	const [size, setSize] = (0, import_react.useState)("medium");
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
		direction: "column",
		gap: "lg",
		align: "start",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SizeSelector, {
			value: size,
			onChange: setSize
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 121,
			columnNumber: 5
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Open Dialog" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 122,
			columnNumber: 5
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 120,
		columnNumber: 4
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
		size,
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Size Playground" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 126,
				columnNumber: 6
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CloseIconButton, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 127,
				columnNumber: 6
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 125,
				columnNumber: 5
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
				direction: "column",
				gap: "lg",
				align: "start",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SizeSelector, {
					value: size,
					onChange: setSize
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 131,
					columnNumber: 7
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					style: { margin: 0 },
					children: "Use the dropdown above (or outside the dialog) to change the popup size. Both controls stay in sync."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 132,
					columnNumber: 7
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 130,
				columnNumber: 6
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 129,
				columnNumber: 5
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Action, { children: "Got it" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 139,
				columnNumber: 6
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 138,
				columnNumber: 5
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 124,
		columnNumber: 4
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 119,
		columnNumber: 3
	}, this);
}
function AutoSizeContent() {
	const widths = [
		200,
		450,
		750,
		1600
	];
	const [index, setIndex] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Open content-sized dialog" }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 157,
		columnNumber: 4
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
		size: "auto",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Content width" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 160,
			columnNumber: 6
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CloseIconButton, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 161,
			columnNumber: 6
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 159,
			columnNumber: 5
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			style: {
				width: widths[index],
				maxWidth: "100%"
			},
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
				"Content width: ",
				widths[index],
				"px"
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 165,
				columnNumber: 7
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				onClick: () => setIndex((index + 1) % widths.length),
				children: "Next content width"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 166,
				columnNumber: 7
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 164,
			columnNumber: 6
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 163,
			columnNumber: 5
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 158,
		columnNumber: 4
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 156,
		columnNumber: 3
	}, this);
}
function StickyToggle({ stickyHeader, stickyFooter, onStickyHeaderChange, onStickyFooterChange }) {
	const headerId = (0, import_react.useId)();
	const footerId = (0, import_react.useId)();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
		direction: "row",
		gap: "md",
		align: "center",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
			direction: "row",
			gap: "xs",
			align: "center",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
				id: headerId,
				type: "checkbox",
				checked: stickyHeader,
				onChange: (e) => onStickyHeaderChange(e.target.checked)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 254,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
				htmlFor: headerId,
				children: "Sticky header"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 263,
				columnNumber: 5
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 253,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
			direction: "row",
			gap: "xs",
			align: "center",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
				id: footerId,
				type: "checkbox",
				checked: stickyFooter,
				onChange: (e) => onStickyFooterChange(e.target.checked)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 266,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
				htmlFor: footerId,
				children: "Sticky footer"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 275,
				columnNumber: 5
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 265,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 252,
		columnNumber: 3
	}, this);
}
function ScrollableContent() {
	const [size, setSize] = (0, import_react.useState)("medium");
	const [stickyHeader, setStickyHeader] = (0, import_react.useState)(true);
	const [stickyFooter, setStickyFooter] = (0, import_react.useState)(true);
	const header = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Terms of service" }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 289,
		columnNumber: 4
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CloseIconButton, {}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 290,
		columnNumber: 4
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 288,
		columnNumber: 3
	}, this);
	const footer = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Action, {
		variant: "outline",
		children: "Decline"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 296,
		columnNumber: 4
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Action, { children: "Accept" }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 297,
		columnNumber: 4
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 295,
		columnNumber: 3
	}, this);
	const controls = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
		direction: "column",
		gap: "sm",
		align: "start",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SizeSelector, {
			value: size,
			onChange: setSize
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 303,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StickyToggle, {
			stickyHeader,
			stickyFooter,
			onStickyHeaderChange: setStickyHeader,
			onStickyFooterChange: setStickyFooter
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 304,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 302,
		columnNumber: 3
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
		direction: "column",
		gap: "lg",
		align: "start",
		children: [controls, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Open Dialog" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 317,
			columnNumber: 5
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 315,
		columnNumber: 4
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
		size,
		children: [
			stickyHeader && header,
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: [
				!stickyHeader && header,
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
					direction: "column",
					gap: "lg",
					children: [controls, Array.from({ length: 20 }).map((_, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						style: { margin: 0 },
						children: [
							"Paragraph ",
							index + 1,
							": Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
						]
					}, index, true, {
						fileName: _jsxFileName,
						lineNumber: 326,
						columnNumber: 8
					}, this))]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 323,
					columnNumber: 6
				}, this),
				!stickyFooter && footer
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 321,
				columnNumber: 5
			}, this),
			stickyFooter && footer
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 319,
		columnNumber: 4
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 314,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, meta, _Default, ALL_SIZES, AllSizes, AutoSize, WithCustomZIndex, Scrollable, WithVisuallyHiddenTitle;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_stack();
		init_button();
		init_visually_hidden();
		init_root(), init_trigger(), init_portal(), init_popup(), init_header(), init_title(), init_description(), init_content(), init_close_icon_button(), init_action(), init_footer();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/dialog/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-ui/Dialog",
			id: "design-system-components-dialog",
			component: Root,
			subcomponents: {
				"Dialog.Trigger": Trigger,
				"Dialog.Portal": Portal,
				"Dialog.Popup": Popup,
				"Dialog.Header": Header,
				"Dialog.Title": Title,
				"Dialog.Description": Description,
				"Dialog.Content": Content,
				"Dialog.CloseIconButton": CloseIconButton,
				"Dialog.Action": Action,
				"Dialog.Footer": Footer
			},
			argTypes: { modal: {
				control: "inline-radio",
				options: [
					true,
					false,
					"trap-focus"
				]
			} },
			parameters: { componentStatus: {
				status: "use-with-caution",
				whereUsed: "global",
				notes: "Not yet recommended for use alongside components from `@wordpress/components`, pending review of overlays compatibility. See [WordPress/gutenberg#76135](https://github.com/WordPress/gutenberg/issues/76135)."
			} }
		};
		_Default = { args: { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Open Dialog" }, "trigger", false, {
			fileName: _jsxFileName,
			lineNumber: 50,
			columnNumber: 4
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Welcome" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 53,
				columnNumber: 6
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CloseIconButton, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 54,
				columnNumber: 6
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 52,
				columnNumber: 5
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "This dialog demonstrates best practices for informational dialogs. It includes a close icon because dismissing it is safe and expected." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 57,
				columnNumber: 6
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 56,
				columnNumber: 5
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Action, { children: "Got it" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 64,
				columnNumber: 6
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 63,
				columnNumber: 5
			}, void 0)
		] }, "popup", true, {
			fileName: _jsxFileName,
			lineNumber: 51,
			columnNumber: 4
		}, void 0)] } };
		ALL_SIZES = Object.keys({
			small: true,
			medium: true,
			large: true,
			stretch: true,
			full: true,
			auto: true
		});
		AllSizes = { args: { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SizePlaygroundContent, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 148,
			columnNumber: 13
		}, void 0) } };
		AutoSize = { args: { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AutoSizeContent, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 186,
			columnNumber: 13
		}, void 0) } };
		WithCustomZIndex = {
			name: "With Custom z-index",
			args: { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Open Dialog" }, "trigger", false, {
				fileName: _jsxFileName,
				lineNumber: 210,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
				portal: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Portal, { style: { "--wp-ui-dialog-z-index": "9999" } }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 213,
					columnNumber: 6
				}, void 0),
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Custom z-index" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 220,
						columnNumber: 6
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CloseIconButton, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 221,
						columnNumber: 6
					}, void 0)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 219,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "The backdrop and popup render at `z-index: 9999` via the `--wp-ui-dialog-z-index` CSS custom property, set on `Dialog.Portal` through the `portal` prop." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 224,
						columnNumber: 6
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 223,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Action, { children: "Got it" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 231,
						columnNumber: 6
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 230,
						columnNumber: 5
					}, void 0)
				]
			}, "popup", true, {
				fileName: _jsxFileName,
				lineNumber: 211,
				columnNumber: 4
			}, void 0)] }
		};
		Scrollable = { args: { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollableContent, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 361,
			columnNumber: 13
		}, void 0) } };
		WithVisuallyHiddenTitle = { args: { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Open Dialog" }, "trigger", false, {
			fileName: _jsxFileName,
			lineNumber: 375,
			columnNumber: 4
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, {
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 378,
					columnNumber: 31
				}, void 0),
				children: "Accessible dialog heading"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 378,
				columnNumber: 6
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CloseIconButton, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 381,
				columnNumber: 6
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 377,
				columnNumber: 5
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				style: { margin: 0 },
				children: "This dialog has a visually hidden title. Inspect the DOM or use a screen reader to verify the heading is present."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 384,
				columnNumber: 6
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 383,
				columnNumber: 5
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Action, { children: "Got it" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 390,
				columnNumber: 6
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 389,
				columnNumber: 5
			}, void 0)
		] }, "popup", true, {
			fileName: _jsxFileName,
			lineNumber: 376,
			columnNumber: 4
		}, void 0)] } };
		try {
			_Default.__docgenInfo = {
				"description": "An informational dialog with a close icon, where there is no ambiguity on\nwhat happens when clicking the close icon.",
				"displayName": "_Default",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/dialog/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			AutoSize.__docgenInfo = {
				"description": "Fits changing content widths while retaining the responsive minimum and\nviewport inset. Wide content must also be constrained to the content area.",
				"displayName": "AutoSize",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/dialog/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithCustomZIndex.__docgenInfo = {
				"description": "Popovers in Gutenberg are managed with explicit z-index values, which can\ncreate situations where a dialog renders below another popover when you\nwant it above.\n\nThe `--wp-ui-dialog-z-index` CSS variable controls the z-index of the\ndialog's backdrop and popup. Override it either:\n\n- **Globally**, by setting the variable on `:root` or `body` (raises every\n  dialog in the page), or\n- **Per instance**, by passing a `Dialog.Portal` with a `style` (or\n  `className`) to `Dialog.Popup`'s `portal` prop. The variable cascades\n  from the portal wrapper to everything rendered inside it.\n\nThis story demonstrates the per-instance approach.",
				"displayName": "WithCustomZIndex",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/dialog/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Scrollable.__docgenInfo = {
				"description": "When dialog content overflows the available height, `Dialog.Content`\nscrolls while `Dialog.Header` and `Dialog.Footer` stay pinned to the\npopup's top and bottom edges. Separator lines appear only when there\nis off-screen content above the header or below the footer.\n\nTo let the header or footer scroll with the body instead of staying\npinned, render it *inside* `Dialog.Content` rather than as a sibling.\nThe inline \"Sticky header / Sticky footer\" checkboxes toggle exactly\nthat placement at runtime.\n\nUse the inline controls to change the popup `size` and the sticky\nplacement. The same controls render both outside and inside the\ndialog and stay in sync.",
				"displayName": "Scrollable",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/dialog/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithVisuallyHiddenTitle.__docgenInfo = {
				"description": "A dialog with a visually hidden title. The title is still present in the\nDOM for `aria-labelledby`, but is not visible to sighted users.\n\nUse `<VisuallyHidden render={ <Dialog.Title /> }>` so that `Dialog.Title`\nkeeps its `<h2>` element while being visually hidden.",
				"displayName": "WithVisuallyHiddenTitle",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/dialog/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		_Default.parameters = {
			..._Default.parameters,
			docs: {
				..._Default.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: [<Dialog.Trigger key=\"trigger\">Open Dialog</Dialog.Trigger>, <Dialog.Popup key=\"popup\">\n                <Dialog.Header>\n                    <Dialog.Title>Welcome</Dialog.Title>\n                    <Dialog.CloseIconButton />\n                </Dialog.Header>\n                <Dialog.Content>\n                    <Dialog.Description>\n                        This dialog demonstrates best practices for\n                        informational dialogs. It includes a close icon because\n                        dismissing it is safe and expected.\n                    </Dialog.Description>\n                </Dialog.Content>\n                <Dialog.Footer>\n                    <Dialog.Action>Got it</Dialog.Action>\n                </Dialog.Footer>\n            </Dialog.Popup>]\n  }\n}",
					..._Default.parameters?.docs?.source
				},
				description: {
					story: "An informational dialog with a close icon, where there is no ambiguity on\nwhat happens when clicking the close icon.",
					..._Default.parameters?.docs?.description
				}
			}
		};
		AllSizes.parameters = {
			...AllSizes.parameters,
			docs: {
				...AllSizes.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: <SizePlaygroundContent />\n  }\n}",
					...AllSizes.parameters?.docs?.source
				}
			}
		};
		AutoSize.parameters = {
			...AutoSize.parameters,
			docs: {
				...AutoSize.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: <AutoSizeContent />\n  }\n}",
					...AutoSize.parameters?.docs?.source
				},
				description: {
					story: "Fits changing content widths while retaining the responsive minimum and\nviewport inset. Wide content must also be constrained to the content area.",
					...AutoSize.parameters?.docs?.description
				}
			}
		};
		WithCustomZIndex.parameters = {
			...WithCustomZIndex.parameters,
			docs: {
				...WithCustomZIndex.parameters?.docs,
				source: {
					originalSource: "{\n  name: 'With Custom z-index',\n  args: {\n    children: [<Dialog.Trigger key=\"trigger\">Open Dialog</Dialog.Trigger>, <Dialog.Popup portal={<Dialog.Portal style={{\n      '--wp-ui-dialog-z-index': '9999'\n    }} />} key=\"popup\">\n                <Dialog.Header>\n                    <Dialog.Title>Custom z-index</Dialog.Title>\n                    <Dialog.CloseIconButton />\n                </Dialog.Header>\n                <Dialog.Content>\n                    <Dialog.Description>\n                        The backdrop and popup render at `z-index: 9999` via the\n                        `--wp-ui-dialog-z-index` CSS custom property, set on\n                        `Dialog.Portal` through the `portal` prop.\n                    </Dialog.Description>\n                </Dialog.Content>\n                <Dialog.Footer>\n                    <Dialog.Action>Got it</Dialog.Action>\n                </Dialog.Footer>\n            </Dialog.Popup>]\n  }\n}",
					...WithCustomZIndex.parameters?.docs?.source
				},
				description: {
					story: "Popovers in Gutenberg are managed with explicit z-index values, which can\ncreate situations where a dialog renders below another popover when you\nwant it above.\n\nThe `--wp-ui-dialog-z-index` CSS variable controls the z-index of the\ndialog's backdrop and popup. Override it either:\n\n- **Globally**, by setting the variable on `:root` or `body` (raises every\n  dialog in the page), or\n- **Per instance**, by passing a `Dialog.Portal` with a `style` (or\n  `className`) to `Dialog.Popup`'s `portal` prop. The variable cascades\n  from the portal wrapper to everything rendered inside it.\n\nThis story demonstrates the per-instance approach.",
					...WithCustomZIndex.parameters?.docs?.description
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
					story: "When dialog content overflows the available height, `Dialog.Content`\nscrolls while `Dialog.Header` and `Dialog.Footer` stay pinned to the\npopup's top and bottom edges. Separator lines appear only when there\nis off-screen content above the header or below the footer.\n\nTo let the header or footer scroll with the body instead of staying\npinned, render it *inside* `Dialog.Content` rather than as a sibling.\nThe inline \"Sticky header / Sticky footer\" checkboxes toggle exactly\nthat placement at runtime.\n\nUse the inline controls to change the popup `size` and the sticky\nplacement. The same controls render both outside and inside the\ndialog and stay in sync.",
					...Scrollable.parameters?.docs?.description
				}
			}
		};
		WithVisuallyHiddenTitle.parameters = {
			...WithVisuallyHiddenTitle.parameters,
			docs: {
				...WithVisuallyHiddenTitle.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: [<Dialog.Trigger key=\"trigger\">Open Dialog</Dialog.Trigger>, <Dialog.Popup key=\"popup\">\n                <Dialog.Header>\n                    <VisuallyHidden render={<Dialog.Title />}>\n                        Accessible dialog heading\n                    </VisuallyHidden>\n                    <Dialog.CloseIconButton />\n                </Dialog.Header>\n                <Dialog.Content>\n                    <p style={{\n          margin: 0\n        }}>\n                        This dialog has a visually hidden title. Inspect the DOM\n                        or use a screen reader to verify the heading is present.\n                    </p>\n                </Dialog.Content>\n                <Dialog.Footer>\n                    <Dialog.Action>Got it</Dialog.Action>\n                </Dialog.Footer>\n            </Dialog.Popup>]\n  }\n}",
					...WithVisuallyHiddenTitle.parameters?.docs?.source
				},
				description: {
					story: "A dialog with a visually hidden title. The title is still present in the\nDOM for `aria-labelledby`, but is not visible to sighted users.\n\nUse `<VisuallyHidden render={ <Dialog.Title /> }>` so that `Dialog.Title`\nkeeps its `<h2>` element while being visually hidden.",
					...WithVisuallyHiddenTitle.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { AllSizes, AutoSize, Scrollable, WithCustomZIndex, WithVisuallyHiddenTitle, _Default, meta as default };
