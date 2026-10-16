import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_DialogDescription, t as DialogDescription } from "./DialogDescription-DehIBOF0.js";
import { _ as CloseIconButton, a as Root, b as init_action, c as init_popup, d as Header, f as init_header, g as init_content, h as Content, i as init_title, l as Portal, m as init_footer, n as init_trigger, o as init_root, p as Footer, r as Title, s as Popup, t as Trigger, u as init_portal, v as init_close_icon_button, y as Action } from "./trigger-aPe3CCrs.js";
import { n as init_stack, t as Stack } from "./stack-s_FjhA7z.js";
import { n as init_text, t as Text } from "./text-B-YUcwFZ.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/drawer/description/DrawerDescription.mjs
var DrawerDescription;
function init_DrawerDescription() {
	return (init_DrawerDescription = __esmMin((() => {
		init_DialogDescription();
		DrawerDescription = DialogDescription;
	})))();
}
//#endregion
//#region ../packages/ui/src/drawer/description.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, Description;
function init_description() {
	return (init_description = __esmMin((() => {
		init_DrawerDescription();
		init_react();
		init_text();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/drawer/description.tsx";
		Description = (0, import_react.forwardRef)(function DrawerDescription$1({ children, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Text, {
				ref,
				variant: "body-md",
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DrawerDescription, { ...props }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 17,
					columnNumber: 14
				}, this),
				children
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 14,
				columnNumber: 4
			}, this);
		});
		try {
			Description.__docgenInfo = {
				"description": "Renders an optional paragraph that describes the drawer content.\n\nThe rendered element is linked to the popup via `aria-describedby`.",
				"displayName": "Description",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/drawer/description.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/drawer/types.ts",
							"name": "DescriptionProps"
						}],
						"description": "The description content to be rendered inside the component.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/drawer/types.ts",
							"name": "DescriptionProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS class name to apply to the element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS style to apply to the element.",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"render": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Replaces the component's default HTML element using a given React\nelement, or a function that returns a React element.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ComponentRenderFn<HTMLAttributesWithRef<any>> | ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>>" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/drawer/stories/index.story.tsx
function SizeSelector({ value, onChange }) {
	const selectId = (0, import_react.useId)();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		style: {
			display: "flex",
			gap: 8,
			alignItems: "center"
		},
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
			htmlFor: selectId,
			children: "Size"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 212,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
			id: selectId,
			value: value ?? "",
			onChange: (e) => onChange(e.target.value || void 0),
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
				value: "",
				children: "default"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 224,
				columnNumber: 5
			}, this), ALL_SIZES.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
				value: s,
				children: s
			}, s, false, {
				fileName: _jsxFileName,
				lineNumber: 226,
				columnNumber: 6
			}, this))]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 213,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 211,
		columnNumber: 3
	}, this);
}
function DirectionSelector({ value, onChange }) {
	const selectId = (0, import_react.useId)();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		style: {
			display: "flex",
			gap: 8,
			alignItems: "center"
		},
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
			htmlFor: selectId,
			children: "Direction"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 247,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
			id: selectId,
			value,
			onChange: (e) => onChange(e.target.value),
			children: [
				"left",
				"right",
				"down",
				"up"
			].map((d) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
				value: d,
				children: d
			}, d, false, {
				fileName: _jsxFileName,
				lineNumber: 260,
				columnNumber: 6
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 248,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 246,
		columnNumber: 3
	}, this);
}
function StickyToggle({ stickyHeader, stickyFooter, setStickyHeader, setStickyFooter }) {
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
				onChange: (e) => setStickyHeader(e.target.checked)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 416,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
				htmlFor: headerId,
				children: "Sticky header"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 423,
				columnNumber: 5
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 415,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
			direction: "row",
			gap: "xs",
			align: "center",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
				id: footerId,
				type: "checkbox",
				checked: stickyFooter,
				onChange: (e) => setStickyFooter(e.target.checked)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 426,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
				htmlFor: footerId,
				children: "Sticky footer"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 433,
				columnNumber: 5
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 425,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 414,
		columnNumber: 3
	}, this);
}
function ScrollableControls({ size, setSize, direction, setDirection, stickyHeader, setStickyHeader, stickyFooter, setStickyFooter }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
		direction: "column",
		gap: "sm",
		align: "start",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
			direction: "row",
			gap: "lg",
			align: "center",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SizeSelector, {
				value: size,
				onChange: setSize
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 452,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DirectionSelector, {
				value: direction,
				onChange: setDirection
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 453,
				columnNumber: 5
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 451,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StickyToggle, {
			stickyHeader,
			stickyFooter,
			setStickyHeader,
			setStickyFooter
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 458,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 450,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, meta, _Default, directions, AllSides, Controlled, NonModal, ALL_SIZES, WithCustomZIndex, SizePlayground, Scrollable;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_stack();
		init_root(), init_trigger(), init_portal(), init_popup(), init_header(), init_title(), init_description(), init_content(), init_close_icon_button(), init_action(), init_footer();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/drawer/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-ui/Drawer",
			id: "design-system-components-drawer",
			component: Root,
			subcomponents: {
				"Drawer.Trigger": Trigger,
				"Drawer.Portal": Portal,
				"Drawer.Popup": Popup,
				"Drawer.Header": Header,
				"Drawer.Title": Title,
				"Drawer.Description": Description,
				"Drawer.Content": Content,
				"Drawer.CloseIconButton": CloseIconButton,
				"Drawer.Action": Action,
				"Drawer.Footer": Footer
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
		_Default = { args: { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Open Drawer" }, "trigger", false, {
			fileName: _jsxFileName,
			lineNumber: 48,
			columnNumber: 4
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Navigation" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 51,
				columnNumber: 6
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CloseIconButton, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 52,
				columnNumber: 6
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 50,
				columnNumber: 5
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "Browse through the available sections below." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 55,
				columnNumber: 6
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 54,
				columnNumber: 5
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Action, { children: "Done" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 60,
				columnNumber: 6
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 59,
				columnNumber: 5
			}, void 0)
		] }, "popup", true, {
			fileName: _jsxFileName,
			lineNumber: 49,
			columnNumber: 4
		}, void 0)] } };
		directions = [
			{
				swipeDirection: "left",
				label: "Left",
				title: "Left Drawer"
			},
			{
				swipeDirection: "right",
				label: "Right",
				title: "Right Drawer"
			},
			{
				swipeDirection: "down",
				label: "Bottom",
				title: "Bottom Sheet"
			},
			{
				swipeDirection: "up",
				label: "Top",
				title: "Top Drawer"
			}
		];
		AllSides = {
			render: function AllSidesRender(args) {
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "1fr 1fr",
						gap: "8px",
						maxWidth: "300px"
					},
					children: directions.map(({ swipeDirection, label, title }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
						...args,
						swipeDirection,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: label }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 95,
							columnNumber: 7
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: title }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 98,
								columnNumber: 9
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CloseIconButton, {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 99,
								columnNumber: 9
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 97,
								columnNumber: 8
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: [
								"Slides in from the ",
								label.toLowerCase(),
								" ",
								"edge. Swipe to dismiss."
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 102,
								columnNumber: 9
							}, this) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 101,
								columnNumber: 8
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Action, { children: "Close" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 108,
								columnNumber: 9
							}, this) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 107,
								columnNumber: 8
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 96,
							columnNumber: 7
						}, this)]
					}, swipeDirection, true, {
						fileName: _jsxFileName,
						lineNumber: 90,
						columnNumber: 6
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 81,
					columnNumber: 4
				}, this);
			},
			argTypes: {
				children: { control: false },
				swipeDirection: { control: false }
			}
		};
		Controlled = {
			render: function ControlledRender(args) {
				const [open, setOpen] = (0, import_react.useState)(false);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
					...args,
					open,
					onOpenChange: setOpen,
					children: args.children
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 129,
					columnNumber: 4
				}, this);
			},
			args: { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Open Controlled Drawer" }, "trigger", false, {
				fileName: _jsxFileName,
				lineNumber: 136,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Controlled Drawer" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 141,
					columnNumber: 6
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CloseIconButton, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 142,
					columnNumber: 6
				}, void 0)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 140,
					columnNumber: 5
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: [
					"The open state is managed externally via",
					" ",
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "open" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 147,
						columnNumber: 7
					}, void 0),
					" and ",
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "onOpenChange" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 147,
						columnNumber: 29
					}, void 0),
					"."
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 145,
					columnNumber: 6
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 144,
					columnNumber: 5
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Action, { children: "Close" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 151,
					columnNumber: 6
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 150,
					columnNumber: 5
				}, void 0)
			] }, "popup", true, {
				fileName: _jsxFileName,
				lineNumber: 139,
				columnNumber: 4
			}, void 0)] },
			argTypes: {
				open: { control: false },
				defaultOpen: { control: false },
				onOpenChange: { control: false },
				onOpenChangeComplete: { control: false }
			}
		};
		NonModal = {
			args: {
				swipeDirection: "right",
				modal: false,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Open Non-Modal Drawer" }, "trigger", false, {
					fileName: _jsxFileName,
					lineNumber: 173,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Non-Modal" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 178,
						columnNumber: 6
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CloseIconButton, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 179,
						columnNumber: 6
					}, void 0)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 177,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "This drawer does not trap focus and allows interaction with the rest of the page while open." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 182,
						columnNumber: 6
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 181,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Action, { children: "Close" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 188,
						columnNumber: 6
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 187,
						columnNumber: 5
					}, void 0)
				] }, "popup", true, {
					fileName: _jsxFileName,
					lineNumber: 176,
					columnNumber: 4
				}, void 0)]
			},
			render: function NonModalRender(args) {
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
					...args,
					children: args.children
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 194,
					columnNumber: 10
				}, this);
			}
		};
		ALL_SIZES = [
			"small",
			"medium",
			"large",
			"stretch",
			"auto"
		];
		WithCustomZIndex = {
			name: "With Custom z-index",
			args: { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Open Drawer" }, "trigger", false, {
				fileName: _jsxFileName,
				lineNumber: 289,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
				portal: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Portal, { style: { "--wp-ui-drawer-z-index": "9999" } }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 292,
					columnNumber: 6
				}, void 0),
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Custom z-index" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 299,
						columnNumber: 6
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CloseIconButton, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 300,
						columnNumber: 6
					}, void 0)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 298,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "The backdrop, viewport, and popup render at `z-index: 9999` via the `--wp-ui-drawer-z-index` CSS custom property, set on `Drawer.Portal` through the `portal` prop." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 303,
						columnNumber: 6
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 302,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Action, { children: "Got it" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 311,
						columnNumber: 6
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 310,
						columnNumber: 5
					}, void 0)
				]
			}, "popup", true, {
				fileName: _jsxFileName,
				lineNumber: 290,
				columnNumber: 4
			}, void 0)] }
		};
		SizePlayground = {
			render: function SizePlaygroundRender(args) {
				const [size, setSize] = (0, import_react.useState)();
				const [direction, setDirection] = (0, import_react.useState)(args.swipeDirection ?? "left");
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
					...args,
					swipeDirection: direction,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: {
							display: "flex",
							flexDirection: "column",
							gap: 16,
							alignItems: "start"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DirectionSelector, {
								value: direction,
								onChange: setDirection
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 339,
								columnNumber: 6
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SizeSelector, {
								value: size,
								onChange: setSize
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 344,
								columnNumber: 6
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Open Drawer" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 345,
								columnNumber: 6
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 331,
						columnNumber: 5
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
						size,
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Size Playground" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 349,
								columnNumber: 7
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CloseIconButton, {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 350,
								columnNumber: 7
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 348,
								columnNumber: 6
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
								direction: "column",
								gap: "lg",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									style: {
										display: "grid",
										gap: 8
									},
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SizeSelector, {
										value: size,
										onChange: setSize
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 360,
										columnNumber: 9
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DirectionSelector, {
										value: direction,
										onChange: setDirection
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 365,
										columnNumber: 9
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 354,
									columnNumber: 8
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "Use the dropdowns to change the size and direction. Both inside and outside controls stay in sync." }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 370,
									columnNumber: 8
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 353,
								columnNumber: 7
							}, this) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 352,
								columnNumber: 6
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Action, { children: "Got it" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 378,
								columnNumber: 7
							}, this) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 377,
								columnNumber: 6
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 347,
						columnNumber: 5
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 330,
					columnNumber: 4
				}, this);
			},
			argTypes: { swipeDirection: { control: false } }
		};
		Scrollable = {
			render: function ScrollableRender(args) {
				const [size, setSize] = (0, import_react.useState)();
				const [direction, setDirection] = (0, import_react.useState)(args.swipeDirection ?? "left");
				const [stickyHeader, setStickyHeader] = (0, import_react.useState)(true);
				const [stickyFooter, setStickyFooter] = (0, import_react.useState)(true);
				const controlProps = {
					size,
					setSize,
					direction,
					setDirection,
					stickyHeader,
					setStickyHeader,
					stickyFooter,
					setStickyFooter
				};
				const header = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Terms of service" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 505,
					columnNumber: 5
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CloseIconButton, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 506,
					columnNumber: 5
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 504,
					columnNumber: 4
				}, this);
				const footer = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Action, {
					variant: "outline",
					children: "Decline"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 512,
					columnNumber: 5
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Action, { children: "Accept" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 513,
					columnNumber: 5
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 511,
					columnNumber: 4
				}, this);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
					...args,
					swipeDirection: direction,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
						direction: "column",
						gap: "lg",
						align: "start",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollableControls, { ...controlProps }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 520,
							columnNumber: 6
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Open Drawer" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 521,
							columnNumber: 6
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 519,
						columnNumber: 5
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
						size,
						children: [
							stickyHeader && header,
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: [
								!stickyHeader && header,
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
									direction: "column",
									gap: "lg",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollableControls, { ...controlProps }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 528,
										columnNumber: 8
									}, this), Array.from({ length: 20 }).map((_, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										style: { margin: 0 },
										children: [
											"Paragraph ",
											index + 1,
											": Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
										]
									}, index, true, {
										fileName: _jsxFileName,
										lineNumber: 531,
										columnNumber: 10
									}, this))]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 527,
									columnNumber: 7
								}, this),
								!stickyFooter && footer
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 525,
								columnNumber: 6
							}, this),
							stickyFooter && footer
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 523,
						columnNumber: 5
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 518,
					columnNumber: 4
				}, this);
			},
			argTypes: { swipeDirection: { control: false } }
		};
		try {
			_Default.__docgenInfo = {
				"description": "A basic drawer sliding in from the left edge. Use the controls to\nexperiment with `swipeDirection` and `modal`.",
				"displayName": "_Default",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/drawer/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			AllSides.__docgenInfo = {
				"description": "Four drawers, one for each swipe direction. Each trigger opens a\ndrawer from the corresponding edge.",
				"displayName": "AllSides",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/drawer/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Controlled.__docgenInfo = {
				"description": "A controlled drawer where the open state is managed externally.",
				"displayName": "Controlled",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/drawer/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			NonModal.__docgenInfo = {
				"description": "A non-modal drawer that does not trap focus or lock page scroll.\nUsers can interact with content behind the drawer while it is open.",
				"displayName": "NonModal",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/drawer/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithCustomZIndex.__docgenInfo = {
				"description": "Popovers in Gutenberg are managed with explicit z-index values, which can\ncreate situations where a drawer renders below another popover when you\nwant it above.\n\nThe `--wp-ui-drawer-z-index` CSS variable controls the z-index of the\ndrawer's backdrop, viewport, and popup. Override it either:\n\n- **Globally**, by setting the variable on `:root` or `body` (raises every\n  drawer in the page), or\n- **Per instance**, by passing a `Drawer.Portal` with a `style` (or\n  `className`) to `Drawer.Popup`'s `portal` prop. The variable cascades\n  from the portal wrapper to everything rendered inside it.\n\nThis story demonstrates the per-instance approach.",
				"displayName": "WithCustomZIndex",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/drawer/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			SizePlayground.__docgenInfo = {
				"description": "Interactive playground to test the `size` prop across all swipe\ndirections. Size controls the width (left/right) or height (up/down).",
				"displayName": "SizePlayground",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/drawer/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Scrollable.__docgenInfo = {
				"description": "When drawer content overflows the available space, `Drawer.Content`\nscrolls while `Drawer.Header` and `Drawer.Footer` stay pinned to the\npopup's edges. Separator lines appear only when there is off-screen\ncontent above the header or below the footer.\n\nTo let the header or footer scroll with the body instead of staying\npinned, render it *inside* `Drawer.Content` rather than as a sibling.\nThe inline \"Sticky header / Sticky footer\" checkboxes toggle exactly\nthat placement at runtime.\n\nUse the inline controls to change the popup `size`, `swipeDirection`,\nand sticky placement. The same controls render both outside and inside\nthe drawer and stay in sync.",
				"displayName": "Scrollable",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/drawer/stories/index.story.tsx",
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
					originalSource: "{\n  args: {\n    children: [<Drawer.Trigger key=\"trigger\">Open Drawer</Drawer.Trigger>, <Drawer.Popup key=\"popup\">\n                <Drawer.Header>\n                    <Drawer.Title>Navigation</Drawer.Title>\n                    <Drawer.CloseIconButton />\n                </Drawer.Header>\n                <Drawer.Content>\n                    <Drawer.Description>\n                        Browse through the available sections below.\n                    </Drawer.Description>\n                </Drawer.Content>\n                <Drawer.Footer>\n                    <Drawer.Action>Done</Drawer.Action>\n                </Drawer.Footer>\n            </Drawer.Popup>]\n  }\n}",
					..._Default.parameters?.docs?.source
				},
				description: {
					story: "A basic drawer sliding in from the left edge. Use the controls to\nexperiment with `swipeDirection` and `modal`.",
					..._Default.parameters?.docs?.description
				}
			}
		};
		AllSides.parameters = {
			...AllSides.parameters,
			docs: {
				...AllSides.parameters?.docs,
				source: {
					originalSource: "{\n  render: function AllSidesRender(args) {\n    return <div style={{\n      display: 'grid',\n      gridTemplateColumns: '1fr 1fr',\n      gap: '8px',\n      maxWidth: '300px'\n    }}>\n                {directions.map(({\n        swipeDirection,\n        label,\n        title\n      }) => <Drawer.Root key={swipeDirection} {...args} swipeDirection={swipeDirection}>\n                        <Drawer.Trigger>{label}</Drawer.Trigger>\n                        <Drawer.Popup>\n                            <Drawer.Header>\n                                <Drawer.Title>{title}</Drawer.Title>\n                                <Drawer.CloseIconButton />\n                            </Drawer.Header>\n                            <Drawer.Content>\n                                <Drawer.Description>\n                                    Slides in from the {label.toLowerCase()}{' '}\n                                    edge. Swipe to dismiss.\n                                </Drawer.Description>\n                            </Drawer.Content>\n                            <Drawer.Footer>\n                                <Drawer.Action>Close</Drawer.Action>\n                            </Drawer.Footer>\n                        </Drawer.Popup>\n                    </Drawer.Root>)}\n            </div>;\n  },\n  argTypes: {\n    children: {\n      control: false\n    },\n    swipeDirection: {\n      control: false\n    }\n  }\n}",
					...AllSides.parameters?.docs?.source
				},
				description: {
					story: "Four drawers, one for each swipe direction. Each trigger opens a\ndrawer from the corresponding edge.",
					...AllSides.parameters?.docs?.description
				}
			}
		};
		Controlled.parameters = {
			...Controlled.parameters,
			docs: {
				...Controlled.parameters?.docs,
				source: {
					originalSource: "{\n  render: function ControlledRender(args) {\n    const [open, setOpen] = useState(false);\n    return <Drawer.Root {...args} open={open} onOpenChange={setOpen}>\n                {args.children}\n            </Drawer.Root>;\n  },\n  args: {\n    children: [<Drawer.Trigger key=\"trigger\">\n                Open Controlled Drawer\n            </Drawer.Trigger>, <Drawer.Popup key=\"popup\">\n                <Drawer.Header>\n                    <Drawer.Title>Controlled Drawer</Drawer.Title>\n                    <Drawer.CloseIconButton />\n                </Drawer.Header>\n                <Drawer.Content>\n                    <Drawer.Description>\n                        The open state is managed externally via{' '}\n                        <code>open</code> and <code>onOpenChange</code>.\n                    </Drawer.Description>\n                </Drawer.Content>\n                <Drawer.Footer>\n                    <Drawer.Action>Close</Drawer.Action>\n                </Drawer.Footer>\n            </Drawer.Popup>]\n  },\n  argTypes: {\n    open: {\n      control: false\n    },\n    defaultOpen: {\n      control: false\n    },\n    onOpenChange: {\n      control: false\n    },\n    onOpenChangeComplete: {\n      control: false\n    }\n  }\n}",
					...Controlled.parameters?.docs?.source
				},
				description: {
					story: "A controlled drawer where the open state is managed externally.",
					...Controlled.parameters?.docs?.description
				}
			}
		};
		NonModal.parameters = {
			...NonModal.parameters,
			docs: {
				...NonModal.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    swipeDirection: 'right',\n    modal: false,\n    children: [<Drawer.Trigger key=\"trigger\">\n                Open Non-Modal Drawer\n            </Drawer.Trigger>, <Drawer.Popup key=\"popup\">\n                <Drawer.Header>\n                    <Drawer.Title>Non-Modal</Drawer.Title>\n                    <Drawer.CloseIconButton />\n                </Drawer.Header>\n                <Drawer.Content>\n                    <Drawer.Description>\n                        This drawer does not trap focus and allows interaction\n                        with the rest of the page while open.\n                    </Drawer.Description>\n                </Drawer.Content>\n                <Drawer.Footer>\n                    <Drawer.Action>Close</Drawer.Action>\n                </Drawer.Footer>\n            </Drawer.Popup>]\n  },\n  render: function NonModalRender(args) {\n    return <Drawer.Root {...args}>{args.children}</Drawer.Root>;\n  }\n}",
					...NonModal.parameters?.docs?.source
				},
				description: {
					story: "A non-modal drawer that does not trap focus or lock page scroll.\nUsers can interact with content behind the drawer while it is open.",
					...NonModal.parameters?.docs?.description
				}
			}
		};
		WithCustomZIndex.parameters = {
			...WithCustomZIndex.parameters,
			docs: {
				...WithCustomZIndex.parameters?.docs,
				source: {
					originalSource: "{\n  name: 'With Custom z-index',\n  args: {\n    children: [<Drawer.Trigger key=\"trigger\">Open Drawer</Drawer.Trigger>, <Drawer.Popup portal={<Drawer.Portal style={{\n      '--wp-ui-drawer-z-index': '9999'\n    }} />} key=\"popup\">\n                <Drawer.Header>\n                    <Drawer.Title>Custom z-index</Drawer.Title>\n                    <Drawer.CloseIconButton />\n                </Drawer.Header>\n                <Drawer.Content>\n                    <Drawer.Description>\n                        The backdrop, viewport, and popup render at `z-index:\n                        9999` via the `--wp-ui-drawer-z-index` CSS custom\n                        property, set on `Drawer.Portal` through the `portal`\n                        prop.\n                    </Drawer.Description>\n                </Drawer.Content>\n                <Drawer.Footer>\n                    <Drawer.Action>Got it</Drawer.Action>\n                </Drawer.Footer>\n            </Drawer.Popup>]\n  }\n}",
					...WithCustomZIndex.parameters?.docs?.source
				},
				description: {
					story: "Popovers in Gutenberg are managed with explicit z-index values, which can\ncreate situations where a drawer renders below another popover when you\nwant it above.\n\nThe `--wp-ui-drawer-z-index` CSS variable controls the z-index of the\ndrawer's backdrop, viewport, and popup. Override it either:\n\n- **Globally**, by setting the variable on `:root` or `body` (raises every\n  drawer in the page), or\n- **Per instance**, by passing a `Drawer.Portal` with a `style` (or\n  `className`) to `Drawer.Popup`'s `portal` prop. The variable cascades\n  from the portal wrapper to everything rendered inside it.\n\nThis story demonstrates the per-instance approach.",
					...WithCustomZIndex.parameters?.docs?.description
				}
			}
		};
		SizePlayground.parameters = {
			...SizePlayground.parameters,
			docs: {
				...SizePlayground.parameters?.docs,
				source: {
					originalSource: "{\n  render: function SizePlaygroundRender(args) {\n    const [size, setSize] = useState<ComponentProps<typeof Drawer.Popup>['size']>();\n    const [direction, setDirection] = useState<ComponentProps<typeof Drawer.Root>['swipeDirection']>(args.swipeDirection ?? 'left');\n    return <Drawer.Root {...args} swipeDirection={direction}>\n                <div style={{\n        display: 'flex',\n        flexDirection: 'column',\n        gap: 16,\n        alignItems: 'start'\n      }}>\n                    <DirectionSelector value={direction} onChange={setDirection} />\n\n                    <SizeSelector value={size} onChange={setSize} />\n                    <Drawer.Trigger>Open Drawer</Drawer.Trigger>\n                </div>\n                <Drawer.Popup size={size}>\n                    <Drawer.Header>\n                        <Drawer.Title>Size Playground</Drawer.Title>\n                        <Drawer.CloseIconButton />\n                    </Drawer.Header>\n                    <Drawer.Content>\n                        <Stack direction=\"column\" gap=\"lg\">\n                            <div style={{\n              display: 'grid',\n              gap: 8\n            }}>\n                                <SizeSelector value={size} onChange={setSize} />\n\n                                <DirectionSelector value={direction} onChange={setDirection} />\n                            </div>\n                            <Drawer.Description>\n                                Use the dropdowns to change the size and\n                                direction. Both inside and outside controls stay\n                                in sync.\n                            </Drawer.Description>\n                        </Stack>\n                    </Drawer.Content>\n                    <Drawer.Footer>\n                        <Drawer.Action>Got it</Drawer.Action>\n                    </Drawer.Footer>\n                </Drawer.Popup>\n            </Drawer.Root>;\n  },\n  argTypes: {\n    swipeDirection: {\n      control: false\n    }\n  }\n}",
					...SizePlayground.parameters?.docs?.source
				},
				description: {
					story: "Interactive playground to test the `size` prop across all swipe\ndirections. Size controls the width (left/right) or height (up/down).",
					...SizePlayground.parameters?.docs?.description
				}
			}
		};
		Scrollable.parameters = {
			...Scrollable.parameters,
			docs: {
				...Scrollable.parameters?.docs,
				source: {
					originalSource: "{\n  render: function ScrollableRender(args) {\n    const [size, setSize] = useState<ComponentProps<typeof Drawer.Popup>['size']>();\n    const [direction, setDirection] = useState<ComponentProps<typeof Drawer.Root>['swipeDirection']>(args.swipeDirection ?? 'left');\n    const [stickyHeader, setStickyHeader] = useState(true);\n    const [stickyFooter, setStickyFooter] = useState(true);\n    const controlProps: ScrollableControlProps = {\n      size,\n      setSize,\n      direction,\n      setDirection,\n      stickyHeader,\n      setStickyHeader,\n      stickyFooter,\n      setStickyFooter\n    };\n    const header = <Drawer.Header>\n                <Drawer.Title>Terms of service</Drawer.Title>\n                <Drawer.CloseIconButton />\n            </Drawer.Header>;\n    const footer = <Drawer.Footer>\n                <Drawer.Action variant=\"outline\">Decline</Drawer.Action>\n                <Drawer.Action>Accept</Drawer.Action>\n            </Drawer.Footer>;\n    return <Drawer.Root {...args} swipeDirection={direction}>\n                <Stack direction=\"column\" gap=\"lg\" align=\"start\">\n                    <ScrollableControls {...controlProps} />\n                    <Drawer.Trigger>Open Drawer</Drawer.Trigger>\n                </Stack>\n                <Drawer.Popup size={size}>\n                    {stickyHeader && header}\n                    <Drawer.Content>\n                        {!stickyHeader && header}\n                        <Stack direction=\"column\" gap=\"lg\">\n                            <ScrollableControls {...controlProps} />\n                            {Array.from({\n              length: 20\n            }).map((_, index) => <p key={index} style={{\n              margin: 0\n            }}>\n                                        Paragraph {index + 1}: Lorem ipsum\n                                        dolor sit amet, consectetur adipiscing\n                                        elit. Sed do eiusmod tempor incididunt\n                                        ut labore et dolore magna aliqua. Ut\n                                        enim ad minim veniam, quis nostrud\n                                        exercitation ullamco laboris nisi ut\n                                        aliquip ex ea commodo consequat.\n                                    </p>)}\n                        </Stack>\n                        {!stickyFooter && footer}\n                    </Drawer.Content>\n                    {stickyFooter && footer}\n                </Drawer.Popup>\n            </Drawer.Root>;\n  },\n  argTypes: {\n    swipeDirection: {\n      control: false\n    }\n  }\n}",
					...Scrollable.parameters?.docs?.source
				},
				description: {
					story: "When drawer content overflows the available space, `Drawer.Content`\nscrolls while `Drawer.Header` and `Drawer.Footer` stay pinned to the\npopup's edges. Separator lines appear only when there is off-screen\ncontent above the header or below the footer.\n\nTo let the header or footer scroll with the body instead of staying\npinned, render it *inside* `Drawer.Content` rather than as a sibling.\nThe inline \"Sticky header / Sticky footer\" checkboxes toggle exactly\nthat placement at runtime.\n\nUse the inline controls to change the popup `size`, `swipeDirection`,\nand sticky placement. The same controls render both outside and inside\nthe drawer and stay in sync.",
					...Scrollable.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { AllSides, Controlled, NonModal, Scrollable, SizePlayground, WithCustomZIndex, _Default, meta as default };
