import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { r as init_react_platform, t as createPortal } from "./react-platform-BqLbFOjq.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as use_isomorphic_layout_effect_default, t as init_use_isomorphic_layout_effect } from "./use-isomorphic-layout-effect-XEh9CxbX.js";
import { n as init_PopoverClose, t as PopoverClose } from "./PopoverClose-DIXI2bj_.js";
import { t as close_default } from "./close-CkxG9D71.js";
import { t as info_default } from "./info-CB8DsEiH.js";
import { n as init_icon, t as Icon } from "./icon-DD-nOZ1R.js";
import { n as init_visually_hidden, t as VisuallyHidden } from "./visually-hidden-Iq8CthQl.js";
import { n as init_link, t as Link } from "./link-BEx2TFXH.js";
import { n as init_icon_button, t as IconButton } from "./icon-button-CljljWsV.js";
import { a as Popup, c as init_positioner, i as init_root, l as Portal, m as init_arrow, n as init_trigger, o as init_popup, p as Arrow, r as Root, s as Positioner, t as Trigger, u as init_portal } from "./trigger-BAt7DM_Q.js";
import { i as init_description, n as init_title, r as Description, t as Title } from "./title-zMH2Ipi5.js";
import { r as init_build_module } from "./library.story-DawnfKTW.js";
//#region ../packages/ui/src/popover/close.tsx
var import_jsx_dev_runtime$2, _jsxFileName$2, Close;
function init_close() {
	return (init_close = __esmMin((() => {
		init_PopoverClose();
		init_react();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/close.tsx";
		Close = (0, import_react.forwardRef)(function PopoverClose$1(props, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(PopoverClose, {
				ref,
				"data-wp-ui-popover-close": "",
				...props
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 15,
				columnNumber: 4
			}, this);
		});
		try {
			Close.__docgenInfo = {
				"description": "Renders a button that closes the popover when clicked.\n\nWhen the popover opens, initial focus skips this button in favor of\nthe first interactive element inside the popup (unless `initialFocus`\non `Popover.Popup` overrides this behavior).",
				"displayName": "Close",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/close.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/popover/types.ts",
							"name": "CloseProps"
						}],
						"description": "The content to be rendered inside the component.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/popover/types.ts",
							"name": "CloseProps"
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
//#region ../packages/ui/src/popover/stories/utils.tsx
/**
* Tracks the dimensions of a DOM element via ResizeObserver.
* Returns a ref callback to attach to the element and its current size.
*
* The ref callback performs a synchronous `getBoundingClientRect` read so
* the first render already has accurate dimensions (avoids a 0×0 flash).
*/
function useMeasure() {
	const [element, setElement] = (0, import_react.useState)(null);
	const [elementSize, setElementSize] = (0, import_react.useState)({
		width: 0,
		height: 0
	});
	use_isomorphic_layout_effect_default(() => {
		if (!element) return;
		const resizeObserver = new ResizeObserver(() => {
			const bcr = element.getBoundingClientRect();
			setElementSize({
				width: bcr.width,
				height: bcr.height
			});
		});
		resizeObserver.observe(element);
		return () => {
			resizeObserver.disconnect();
		};
	}, [element]);
	return [(0, import_react.useCallback)((node) => {
		if (node) {
			const bcr = node.getBoundingClientRect();
			setElementSize({
				width: bcr.width,
				height: bcr.height
			});
		}
		setElement(node);
	}, []), elementSize];
}
var import_jsx_dev_runtime$1, _jsxFileName$1, GenericIframe;
function init_utils() {
	return (init_utils = __esmMin((() => {
		init_react_platform(), init_react();
		init_use_isomorphic_layout_effect(), init_use_merge_refs();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/stories/utils.tsx";
		GenericIframe = (0, import_react.forwardRef)(function UnforwardedGenericIframe({ children, ...props }, ref) {
			const [containerNode, setContainerNode] = (0, import_react.useState)(null);
			const iframeRef = (0, import_react.useRef)(null);
			const mergedRef = useMergeRefs([ref, iframeRef]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("iframe", {
				title: "Iframe",
				...props,
				ref: mergedRef,
				srcDoc: "<!doctype html><html><body></body></html>",
				onLoad: (event) => {
					const doc = event.currentTarget.contentDocument;
					if (doc) setContainerNode(doc.body);
				},
				children: containerNode && createPortal(children, containerNode)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 71,
				columnNumber: 3
			}, this);
		});
		try {
			useMeasure.__docgenInfo = {
				"description": "Tracks the dimensions of a DOM element via ResizeObserver.\nReturns a ref callback to attach to the element and its current size.\n\nThe ref callback performs a synchronous `getBoundingClientRect` read so\nthe first render already has accurate dimensions (avoids a 0×0 flash).",
				"displayName": "useMeasure",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/stories/utils.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			GenericIframe.__docgenInfo = {
				"description": "Renders an iframe and portals its `children` into the iframe's body.\nForwards a ref to the underlying `<iframe>` element.\n\nWaits for the iframe's `load` event before portaling to ensure\ncompatibility with Firefox.\nSee https://github.com/facebook/react/issues/22847#issuecomment-991394558",
				"displayName": "GenericIframe",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/stories/utils.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/popover/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default, NoArrow, Positioning, WithCloseButton, Controlled, Modal, Unstyled, OverlayPlacement, Inline, CollisionAvoidance, CrossIframe, WithCustomZIndex, Anchor, ToolbarVariant, ViewportConstrainedSize, OnOpenChangeDetails, InitialFocus, TrapFocus, HoverTrigger, Infotip, InfotipWithLink;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_build_module();
		init_root(), init_trigger(), init_portal(), init_positioner(), init_popup(), init_arrow(), init_title(), init_description(), init_close();
		init_visually_hidden();
		init_icon();
		init_icon_button();
		init_link();
		init_utils();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-ui/Popover",
			id: "design-system-components-popover",
			component: Root,
			subcomponents: {
				"Popover.Trigger": Trigger,
				"Popover.Portal": Portal,
				"Popover.Positioner": Positioner,
				"Popover.Popup": Popup,
				"Popover.Arrow": Arrow,
				"Popover.Title": Title,
				"Popover.Description": Description,
				"Popover.Close": Close
			},
			argTypes: { children: { control: false } },
			parameters: { componentStatus: {
				status: "use-with-caution",
				whereUsed: "global",
				notes: "Not yet recommended for use alongside components from `@wordpress/components`, pending review of overlays compatibility. See [WordPress/gutenberg#76135](https://github.com/WordPress/gutenberg/issues/76135)."
			} }
		};
		Default = {
			argTypes: { children: { control: { type: "text" } } },
			args: { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Open Popover" }, "trigger", false, {
				fileName: _jsxFileName,
				lineNumber: 46,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 48,
					columnNumber: 5
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {
					style: { marginBottom: "var(--wpds-dimension-gap-xs, 4px)" },
					children: "Popover title"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 5
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "Popover description" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 5
				}, void 0)
			] }, "popup", true, {
				fileName: _jsxFileName,
				lineNumber: 47,
				columnNumber: 4
			}, void 0)] }
		};
		NoArrow = { args: { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Open Popover" }, "trigger", false, {
			fileName: _jsxFileName,
			lineNumber: 69,
			columnNumber: 4
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {
			style: { marginBottom: "var(--wpds-dimension-gap-xs, 4px)" },
			children: "Popover title"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 71,
			columnNumber: 5
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "Popover description" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 78,
			columnNumber: 5
		}, void 0)] }, "popup", true, {
			fileName: _jsxFileName,
			lineNumber: 70,
			columnNumber: 4
		}, void 0)] } };
		Positioning = {
			parameters: { controls: { disable: true } },
			render: function Render() {
				const sides = [
					"top",
					"right",
					"bottom",
					"left"
				];
				const aligns = [
					"start",
					"center",
					"end"
				];
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(3, 1fr)",
						gap: "6rem",
						padding: "6rem 4rem",
						justifyItems: "center"
					},
					children: sides.flatMap((side) => aligns.map((align) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
						open: true,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: [
							side,
							" / ",
							align
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 109,
							columnNumber: 8
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
							positioner: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Positioner, {
								side,
								align,
								collisionAvoidance: {
									side: "none",
									align: "none"
								}
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 114,
								columnNumber: 10
							}, this),
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, {
									render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 124,
										columnNumber: 34
									}, this),
									children: [
										side,
										" / ",
										align
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 124,
									columnNumber: 9
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 127,
									columnNumber: 9
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: [
									side,
									" side / ",
									align,
									" align"
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 128,
									columnNumber: 9
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 112,
							columnNumber: 8
						}, this)]
					}, `${side}-${align}`, true, {
						fileName: _jsxFileName,
						lineNumber: 108,
						columnNumber: 7
					}, this)))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 97,
					columnNumber: 4
				}, this);
			}
		};
		WithCloseButton = { args: { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Settings" }, "trigger", false, {
			fileName: _jsxFileName,
			lineNumber: 149,
			columnNumber: 4
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 151,
				columnNumber: 5
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					marginBottom: "var(--wpds-dimension-gap-sm, 8px)"
				},
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Settings" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 160,
					columnNumber: 6
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Close, { render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, {
					variant: "minimal",
					size: "compact",
					tone: "neutral",
					icon: close_default,
					label: "Close"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 163,
					columnNumber: 8
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 161,
					columnNumber: 6
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 152,
				columnNumber: 5
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "Configure your notification preferences and display settings." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 173,
				columnNumber: 5
			}, void 0)
		] }, "popup", true, {
			fileName: _jsxFileName,
			lineNumber: 150,
			columnNumber: 4
		}, void 0)] } };
		Controlled = {
			argTypes: {
				open: { control: false },
				onOpenChange: { control: false },
				defaultOpen: { control: false }
			},
			args: { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Toggle Popover" }, "trigger", false, {
				fileName: _jsxFileName,
				lineNumber: 198,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 200,
					columnNumber: 5
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {
					style: { marginBottom: "var(--wpds-dimension-gap-xs, 4px)" },
					children: "Controlled Popover"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 201,
					columnNumber: 5
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "This popover is controlled by external state." }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 208,
					columnNumber: 5
				}, void 0)
			] }, "popup", true, {
				fileName: _jsxFileName,
				lineNumber: 199,
				columnNumber: 4
			}, void 0)] },
			render: function Render(args) {
				const [isOpen, setIsOpen] = (0, import_react.useState)(false);
				const checkboxId = (0, import_react.useId)();
				const checkboxRef = (0, import_react.useRef)(null);
				const labelRef = (0, import_react.useRef)(null);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						display: "flex",
						gap: "1rem",
						alignItems: "center"
					},
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
						...args,
						open: isOpen,
						onOpenChange: (nextOpen, eventDetails) => {
							if (["outside-press", "focus-out"].includes(eventDetails.reason) && !!eventDetails.event.target && [checkboxRef.current, labelRef.current].filter(Boolean).includes(eventDetails.event.target)) return;
							setIsOpen(nextOpen);
						}
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 228,
						columnNumber: 5
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
						htmlFor: checkboxId,
						ref: labelRef,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							ref: checkboxRef,
							id: checkboxId,
							type: "checkbox",
							checked: isOpen,
							onChange: (e) => setIsOpen(e.target.checked)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 252,
							columnNumber: 6
						}, this), "Open"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 251,
						columnNumber: 5
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 221,
					columnNumber: 4
				}, this);
			}
		};
		Modal = {
			argTypes: { modal: { control: false } },
			args: {
				modal: true,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Edit Settings" }, "trigger", false, {
					fileName: _jsxFileName,
					lineNumber: 284,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
					backdrop: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 286,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {
							style: { marginBottom: "var(--wpds-dimension-gap-xs, 4px)" },
							children: "Settings"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 287,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
							style: {
								display: "flex",
								flexDirection: "column",
								gap: "var(--wpds-dimension-gap-sm, 8px)",
								marginTop: "var(--wpds-dimension-gap-sm, 8px)"
							},
							onSubmit: (e) => e.preventDefault(),
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
									htmlFor: "popover-test-name-id",
									style: {
										display: "flex",
										flexDirection: "column",
										gap: "var(--wpds-dimension-gap-xs, 4px)",
										fontSize: "inherit"
									},
									children: ["Name", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
										id: "popover-test-name-id",
										type: "text",
										placeholder: "Enter your name"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 313,
										columnNumber: 7
									}, void 0)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 303,
									columnNumber: 6
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
									htmlFor: "popover-test-email-id",
									style: {
										display: "flex",
										flexDirection: "column",
										gap: "var(--wpds-dimension-gap-xs, 4px)",
										fontSize: "inherit"
									},
									children: ["Email", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
										id: "popover-test-email-id",
										type: "email",
										placeholder: "Enter your email"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 329,
										columnNumber: 7
									}, void 0)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 319,
									columnNumber: 6
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									style: {
										display: "flex",
										justifyContent: "flex-end",
										gap: "var(--wpds-dimension-gap-sm, 8px)",
										marginTop: "var(--wpds-dimension-gap-xs, 4px)"
									},
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Close, {
										style: {
											all: "unset",
											cursor: "pointer"
										},
										children: "Cancel"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 343,
										columnNumber: 7
									}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "submit",
										children: "Save"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 351,
										columnNumber: 7
									}, void 0)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 335,
									columnNumber: 6
								}, void 0)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 294,
							columnNumber: 5
						}, void 0)
					]
				}, "popup", true, {
					fileName: _jsxFileName,
					lineNumber: 285,
					columnNumber: 4
				}, void 0)]
			}
		};
		Unstyled = { args: { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Open Unstyled" }, "trigger", false, {
			fileName: _jsxFileName,
			lineNumber: 366,
			columnNumber: 4
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
			variant: "unstyled",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {
				style: { marginBottom: "var(--wpds-dimension-gap-xs, 4px)" },
				children: "Custom Styled"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 368,
				columnNumber: 5
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "This popup has no default styling — the consumer controls all visual appearance." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 375,
				columnNumber: 5
			}, void 0)]
		}, "popup", true, {
			fileName: _jsxFileName,
			lineNumber: 367,
			columnNumber: 4
		}, void 0)] } };
		OverlayPlacement = {
			args: { defaultOpen: true },
			argTypes: { defaultOpen: { control: false } },
			render: function Render({ children: _children, ...args }) {
				const [popupRef, popupSize] = useMeasure();
				const [triggerRef, triggerSize] = useMeasure();
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						padding: "4rem",
						textAlign: "center"
					},
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
						...args,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, {
							ref: triggerRef,
							children: "Trigger (covered by popover)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 402,
							columnNumber: 6
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
							ref: popupRef,
							positioner: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Positioner, {
								side: "bottom",
								align: "center",
								sideOffset: -1 * (popupSize.height / 2 + triggerSize.height / 2),
								collisionAvoidance: {
									side: "none",
									align: "none"
								}
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 408,
								columnNumber: 8
							}, this),
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {
								style: { marginBottom: "var(--wpds-dimension-gap-xs, 4px)" },
								children: "Overlay"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 423,
								columnNumber: 7
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: [
								"This popover is centered over its trigger using a negative sideOffset.",
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 433,
									columnNumber: 8
								}, this),
								"The trigger is currently hidden under the popover.",
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 435,
									columnNumber: 8
								}, this),
								"Try resizing the browser — collision avoidance is disabled so the popover stays overlaid."
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 430,
								columnNumber: 7
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 405,
							columnNumber: 6
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 401,
						columnNumber: 5
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 400,
					columnNumber: 4
				}, this);
			}
		};
		Inline = {
			parameters: { controls: { disable: true } },
			render: function Render() {
				const inlineContainerRef = (0, import_react.useRef)(null);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					"data-testid": "inline-wrapper",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Open Inline" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 463,
							columnNumber: 6
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							ref: inlineContainerRef,
							style: { display: "contents" }
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 464,
							columnNumber: 6
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
							portal: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Portal, { container: inlineContainerRef }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 471,
								columnNumber: 8
							}, this),
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 474,
									columnNumber: 7
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {
									style: { marginBottom: "var(--wpds-dimension-gap-xs, 4px)" },
									children: "Inline Popover"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 475,
									columnNumber: 7
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "This example still uses `Popover.Portal`, but the portal `container` is the in-tree span above, so the portal node mounts inside the wrapper instead of `document.body`." }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 482,
									columnNumber: 7
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 469,
							columnNumber: 6
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 462,
						columnNumber: 5
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 461,
					columnNumber: 4
				}, this);
			}
		};
		CollisionAvoidance = {
			parameters: { controls: { disable: true } },
			render: function Render() {
				const [boundary, setBoundary] = (0, import_react.useState)(null);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					ref: setBoundary,
					style: {
						height: 300,
						overflow: "auto",
						border: "1px solid #ccc",
						padding: "200px 2rem"
					},
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: {
							display: "flex",
							gap: "2rem",
							justifyContent: "center"
						},
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
							defaultOpen: true,
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Flip (default)" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 533,
								columnNumber: 7
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
								positioner: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Positioner, {
									side: "top",
									collisionBoundary: boundary ?? void 0
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 536,
									columnNumber: 9
								}, this),
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {
									style: { marginBottom: "var(--wpds-dimension-gap-xs, 4px)" },
									children: "Flip"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 542,
									columnNumber: 8
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "Flips to bottom when clipped" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 550,
									columnNumber: 8
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 534,
								columnNumber: 7
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 532,
							columnNumber: 6
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
							defaultOpen: true,
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "No collision" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 557,
								columnNumber: 7
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
								positioner: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Positioner, {
									side: "top",
									collisionBoundary: boundary ?? void 0,
									collisionAvoidance: {
										side: "none",
										align: "none"
									}
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 560,
									columnNumber: 9
								}, this),
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {
									style: { marginBottom: "var(--wpds-dimension-gap-xs, 4px)" },
									children: "None"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 570,
									columnNumber: 8
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "Stays on top even when clipped" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 578,
									columnNumber: 8
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 558,
								columnNumber: 7
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 556,
							columnNumber: 6
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 525,
						columnNumber: 5
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { height: 600 } }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 584,
						columnNumber: 5
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 516,
					columnNumber: 4
				}, this);
			}
		};
		CrossIframe = {
			args: { defaultOpen: true },
			argTypes: { defaultOpen: { control: false } },
			render: function Render({ children: _children, ...args }) {
				const portalContainerRef = (0, import_react.useRef)(null);
				const [iframeBoundary, setIframeBoundary] = (0, import_react.useState)(null);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: portalContainerRef }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 611,
					columnNumber: 5
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GenericIframe, {
					ref: setIframeBoundary,
					style: {
						width: "100%",
						height: 400,
						border: 0,
						outline: "1px solid purple"
					},
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: {
							height: "200vh",
							paddingTop: "10vh"
						},
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							style: {
								maxWidth: 200,
								marginTop: 100,
								marginInline: "auto"
							},
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
								...args,
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, {
									style: {
										padding: 8,
										background: "salmon"
									},
									children: "Popover's anchor (inside iframe)"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 635,
									columnNumber: 9
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
									portal: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Portal, { container: portalContainerRef }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 645,
										columnNumber: 11
									}, this),
									positioner: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Positioner, { collisionBoundary: iframeBoundary ?? void 0 }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 652,
										columnNumber: 11
									}, this),
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 659,
											columnNumber: 10
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {
											style: { marginBottom: "var(--wpds-dimension-gap-xs, 4px)" },
											children: "Cross-Iframe Popover"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 660,
											columnNumber: 10
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "This popup is rendered in the parent document, not inside the iframe. Scroll the iframe to see the popover track the trigger." }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 668,
											columnNumber: 10
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 643,
									columnNumber: 9
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 634,
								columnNumber: 8
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 627,
							columnNumber: 7
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 621,
						columnNumber: 6
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 612,
					columnNumber: 5
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 610,
					columnNumber: 4
				}, this);
			}
		};
		WithCustomZIndex = {
			name: "With Custom z-index",
			args: { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Open Popover" }, "trigger", false, {
				fileName: _jsxFileName,
				lineNumber: 704,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
				portal: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Portal, { style: { "--wp-ui-popover-z-index": "9999" } }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 707,
					columnNumber: 6
				}, void 0),
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 713,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {
						style: { marginBottom: "var(--wpds-dimension-gap-xs, 4px)" },
						children: "Custom z-index"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 714,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "This popover renders at `z-index: 9999` via the `--wp-ui-popover-z-index` CSS custom property, set on `Popover.Portal` through the `portal` prop." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 721,
						columnNumber: 5
					}, void 0)
				]
			}, "popup", true, {
				fileName: _jsxFileName,
				lineNumber: 705,
				columnNumber: 4
			}, void 0)] }
		};
		Anchor = {
			parameters: { controls: { disable: true } },
			render: function Render() {
				const [elementAnchor, setElementAnchor] = (0, import_react.useState)(null);
				const refAnchor = (0, import_react.useRef)(null);
				const virtualAnchorLabel = (0, import_react.useRef)(null);
				const callbackTarget = (0, import_react.useRef)(null);
				const virtualAnchor = { getBoundingClientRect: () => virtualAnchorLabel.current?.getBoundingClientRect() ?? new DOMRect() };
				const anchorBoxStyle = {
					padding: "8px 12px",
					border: "2px dashed currentcolor",
					borderRadius: 4,
					fontSize: 12,
					textAlign: "center"
				};
				const sharedPositionerProps = { collisionAvoidance: {
					side: "none",
					align: "none"
				} };
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "1fr 1fr",
						gap: "4rem",
						padding: "4rem 2rem"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							ref: setElementAnchor,
							style: anchorBoxStyle,
							children: "Element anchor"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 786,
							columnNumber: 6
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
							open: true,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
								positioner: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Positioner, {
									anchor: elementAnchor ?? void 0,
									...sharedPositionerProps
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 792,
									columnNumber: 9
								}, this),
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, {
										render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 798,
											columnNumber: 33
										}, this),
										children: "Element anchor"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 798,
										columnNumber: 8
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 801,
										columnNumber: 8
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "Anchored to a DOM element" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 802,
										columnNumber: 8
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 790,
								columnNumber: 7
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 789,
							columnNumber: 6
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 785,
							columnNumber: 5
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							ref: virtualAnchorLabel,
							style: anchorBoxStyle,
							children: "VirtualElement anchor"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 811,
							columnNumber: 6
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
							open: true,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
								positioner: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Positioner, {
									anchor: virtualAnchor,
									...sharedPositionerProps
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 817,
									columnNumber: 9
								}, this),
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, {
										render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 823,
											columnNumber: 33
										}, this),
										children: "Virtual anchor"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 823,
										columnNumber: 8
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 826,
										columnNumber: 8
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "Anchored to a virtual element" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 827,
										columnNumber: 8
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 815,
								columnNumber: 7
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 814,
							columnNumber: 6
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 810,
							columnNumber: 5
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							ref: refAnchor,
							style: anchorBoxStyle,
							children: "RefObject anchor"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 836,
							columnNumber: 6
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
							open: true,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
								positioner: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Positioner, {
									anchor: refAnchor,
									...sharedPositionerProps
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 842,
									columnNumber: 9
								}, this),
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, {
										render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 848,
											columnNumber: 33
										}, this),
										children: "Ref anchor"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 848,
										columnNumber: 8
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 851,
										columnNumber: 8
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "Anchored via useRef" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 852,
										columnNumber: 8
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 840,
								columnNumber: 7
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 839,
							columnNumber: 6
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 835,
							columnNumber: 5
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							ref: callbackTarget,
							style: anchorBoxStyle,
							children: "Callback anchor"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 861,
							columnNumber: 6
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
							open: true,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
								positioner: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Positioner, {
									anchor: () => callbackTarget.current,
									...sharedPositionerProps
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 867,
									columnNumber: 9
								}, this),
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, {
										render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 873,
											columnNumber: 33
										}, this),
										children: "Callback anchor"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 873,
										columnNumber: 8
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 876,
										columnNumber: 8
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "Anchored via callback function" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 877,
										columnNumber: 8
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 865,
								columnNumber: 7
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 864,
							columnNumber: 6
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 860,
							columnNumber: 5
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 776,
					columnNumber: 4
				}, this);
			}
		};
		ToolbarVariant = { args: { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Open Toolbar" }, "trigger", false, {
			fileName: _jsxFileName,
			lineNumber: 898,
			columnNumber: 4
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
			variant: "unstyled",
			style: {
				display: "flex",
				gap: "var(--wpds-dimension-gap-xs, 4px)",
				padding: "4px 8px",
				border: "1px solid #1e1e1e",
				borderRadius: 2,
				background: "#fff",
				fontSize: 13
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, {
					render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 912,
						columnNumber: 30
					}, void 0),
					children: "Formatting"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 912,
					columnNumber: 5
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					children: "B"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 915,
					columnNumber: 5
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					children: "I"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 916,
					columnNumber: 5
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					children: "U"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 917,
					columnNumber: 5
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					children: "Link"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 918,
					columnNumber: 5
				}, void 0)
			]
		}, "popup", true, {
			fileName: _jsxFileName,
			lineNumber: 899,
			columnNumber: 4
		}, void 0)] } };
		ViewportConstrainedSize = {
			name: "Viewport-Constrained Size",
			args: { defaultOpen: true },
			argTypes: { defaultOpen: { control: false } },
			render: function Render({ children: _children, ...args }) {
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						height: 250,
						overflow: "auto",
						border: "1px solid #ccc",
						padding: "60px 2rem"
					},
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
						...args,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Show Content" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 950,
							columnNumber: 6
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
							positioner: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Positioner, { side: "bottom" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 952,
								columnNumber: 20
							}, this),
							style: {
								maxHeight: "var(--available-height, 300px)",
								maxWidth: "var(--available-width, 300px)"
							},
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								style: {
									overflow: "auto",
									height: "100%"
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {
										style: { marginBottom: "var(--wpds-dimension-gap-xs, 4px)" },
										children: "Constrained"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 959,
										columnNumber: 8
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "This popup constrains its size using the `--available-height` and `--available-width` CSS variables exposed by the positioner." }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 967,
										columnNumber: 8
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										style: { height: 400 },
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Scroll inside this popup — its max-height is capped to the available viewport space." }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 973,
											columnNumber: 9
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 972,
										columnNumber: 8
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 958,
								columnNumber: 7
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 951,
							columnNumber: 6
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 949,
						columnNumber: 5
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { height: 600 } }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 981,
						columnNumber: 5
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 941,
					columnNumber: 4
				}, this);
			}
		};
		OnOpenChangeDetails = {
			name: "onOpenChange Details",
			parameters: { controls: { disable: true } },
			render: function Render() {
				const [log, setLog] = (0, import_react.useState)([]);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						display: "flex",
						gap: "2rem"
					},
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
						onOpenChange: (nextOpen, eventDetails) => {
							setLog((prev) => [...prev.slice(-9), `open=${nextOpen} reason=${eventDetails.reason}`]);
						},
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Toggle" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 1015,
							columnNumber: 6
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1017,
								columnNumber: 7
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {
								style: { marginBottom: "var(--wpds-dimension-gap-xs, 4px)" },
								children: "Event Log"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1018,
								columnNumber: 7
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "Dismiss this popover via Escape, click-outside, or moving focus away." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1025,
								columnNumber: 7
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 1016,
							columnNumber: 6
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 1007,
						columnNumber: 5
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", {
						style: {
							flex: 1,
							padding: 8,
							fontSize: 12,
							lineHeight: 1.5,
							background: "#f5f5f5",
							borderRadius: 4,
							minHeight: 100,
							margin: 0
						},
						children: log.length ? log.join("\n") : "Interact with the popover to see events…"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 1032,
						columnNumber: 5
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 1006,
					columnNumber: 4
				}, this);
			}
		};
		InitialFocus = {
			parameters: { controls: { disable: true } },
			render: function Render() {
				const emailRef = (0, import_react.useRef)(null);
				const nameId = (0, import_react.useId)();
				const emailId = (0, import_react.useId)();
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Open Form" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 1070,
					columnNumber: 5
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
					initialFocus: emailRef,
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 1072,
							columnNumber: 6
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {
							style: { marginBottom: "var(--wpds-dimension-gap-xs, 4px)" },
							children: "Contact"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 1073,
							columnNumber: 6
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
							style: {
								display: "flex",
								flexDirection: "column",
								gap: "var(--wpds-dimension-gap-sm, 8px)"
							},
							onSubmit: (e) => e.preventDefault(),
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
									htmlFor: nameId,
									style: {
										display: "flex",
										flexDirection: "column",
										gap: "var(--wpds-dimension-gap-xs, 4px)",
										fontSize: "inherit"
									},
									children: "Name"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1088,
									columnNumber: 7
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
									id: nameId,
									type: "text",
									placeholder: "Enter name"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1099,
									columnNumber: 7
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
									htmlFor: emailId,
									style: {
										display: "flex",
										flexDirection: "column",
										gap: "var(--wpds-dimension-gap-xs, 4px)",
										fontSize: "inherit"
									},
									children: "Email (auto-focused)"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1105,
									columnNumber: 7
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
									id: emailId,
									ref: emailRef,
									type: "email",
									placeholder: "Enter email"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1116,
									columnNumber: 7
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 1080,
							columnNumber: 6
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 1071,
					columnNumber: 5
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 1069,
					columnNumber: 4
				}, this);
			}
		};
		TrapFocus = {
			argTypes: { modal: { control: false } },
			args: { modal: "trap-focus" },
			render: function Render(args) {
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						display: "flex",
						gap: "2rem"
					},
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
						...args,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Open" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 1153,
							columnNumber: 6
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1155,
								columnNumber: 7
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {
								style: { marginBottom: "var(--wpds-dimension-gap-xs, 4px)" },
								children: "Trap Focus"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1156,
								columnNumber: 7
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "Tab cycles within this popover, but clicking outside still works." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1163,
								columnNumber: 7
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								style: {
									display: "flex",
									gap: "var(--wpds-dimension-gap-sm, 8px)",
									marginTop: "var(--wpds-dimension-gap-sm, 8px)"
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { placeholder: "Field A" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1174,
										columnNumber: 8
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { placeholder: "Field B" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1175,
										columnNumber: 8
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Close, { children: "Close" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1176,
										columnNumber: 8
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1167,
								columnNumber: 7
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 1154,
							columnNumber: 6
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 1152,
						columnNumber: 5
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => window.alert("Outside button clicked!"),
						children: "Outside button"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 1181,
						columnNumber: 5
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 1151,
					columnNumber: 4
				}, this);
			}
		};
		HoverTrigger = {
			parameters: { controls: { disable: true } },
			render: function Render(args) {
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
					...args,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, {
						openOnHover: true,
						delay: 200,
						closeDelay: 150,
						children: "Hover me"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 1207,
						columnNumber: 5
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 1211,
							columnNumber: 6
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {
							style: { marginBottom: "var(--wpds-dimension-gap-xs, 4px)" },
							children: "Hover Popover"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 1212,
							columnNumber: 6
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "This popover opens on hover with a 200ms delay and closes 150ms after the pointer leaves." }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 1219,
							columnNumber: 6
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 1210,
						columnNumber: 5
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 1206,
					columnNumber: 4
				}, this);
			}
		};
		Infotip = {
			parameters: { controls: { disable: true } },
			render: function Render(args) {
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						display: "flex",
						alignItems: "center",
						gap: "var(--wpds-dimension-gap-xs, 4px)"
					},
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Label" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 1251,
						columnNumber: 5
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
						...args,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, {
							openOnHover: true,
							delay: 200,
							closeDelay: 200,
							"aria-label": "More information",
							style: {
								background: "none",
								border: "none",
								padding: 0,
								cursor: "var(--wpds-cursor-control, pointer)",
								display: "inline-flex",
								alignItems: "center",
								borderRadius: "var(--wpds-border-radius-sm, 2px)"
							},
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
								icon: info_default,
								size: 20
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1268,
								columnNumber: 7
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 1253,
							columnNumber: 6
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1271,
								columnNumber: 7
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, {
								render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1272,
									columnNumber: 32
								}, this),
								children: "More information"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1272,
								columnNumber: 7
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "This is additional context about the label. Unlike tooltips, this content is accessible to touch and screen reader users." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1275,
								columnNumber: 7
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 1270,
							columnNumber: 6
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 1252,
						columnNumber: 5
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 1244,
					columnNumber: 4
				}, this);
			}
		};
		InfotipWithLink = {
			parameters: { controls: { disable: true } },
			render: function Render(args) {
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						display: "flex",
						alignItems: "center",
						gap: "var(--wpds-dimension-gap-xs, 4px)"
					},
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Label" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 1307,
						columnNumber: 5
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
						...args,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, {
							openOnHover: true,
							delay: 200,
							closeDelay: 200,
							"aria-label": "More information",
							style: {
								background: "none",
								border: "none",
								padding: 0,
								cursor: "var(--wpds-cursor-control, pointer)",
								display: "inline-flex",
								alignItems: "center",
								borderRadius: "var(--wpds-border-radius-sm, 2px)"
							},
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
								icon: info_default,
								size: 20
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1324,
								columnNumber: 7
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 1309,
							columnNumber: 6
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1327,
								columnNumber: 7
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, {
								render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1328,
									columnNumber: 32
								}, this),
								children: "More information"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1328,
								columnNumber: 7
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: [
								"This is additional context about the label.",
								" ",
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									href: "https://wordpress.org",
									openInNewTab: true,
									children: "Read more"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1333,
									columnNumber: 8
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1331,
								columnNumber: 7
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 1326,
							columnNumber: 6
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 1308,
						columnNumber: 5
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 1300,
					columnNumber: 4
				}, this);
			}
		};
		try {
			NoArrow.__docgenInfo = {
				"description": "A popover without the arrow sub-component. Omit `Popover.Arrow`\nfrom the popup content when an arrow indicator is not desired.",
				"displayName": "NoArrow",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Positioning.__docgenInfo = {
				"description": "All combinations of `side` and `align` props on `Popover.Positioner`.\n\nEach row shows a side (`top`, `right`, `bottom`, `left`), and each column\nshows an alignment (`start`, `center`, `end`).",
				"displayName": "Positioning",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithCloseButton.__docgenInfo = {
				"description": "A popover with a close icon button, title, and description. The\n`Popover.Close` component renders a button that closes the popover when\nclicked. Here it wraps an `IconButton` for a properly sized, accessible\nclose action — matching the Dialog close-icon pattern.",
				"displayName": "WithCloseButton",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Controlled.__docgenInfo = {
				"description": "Use the `open` and `onOpenChange` props on `Popover.Root` to control the\npopover's visibility programmatically.\n\nThe checkbox drives the popover state externally. The popover's trigger\nand click-outside dismiss both sync back to the same state via\n`onOpenChange`, keeping everything in sync.",
				"displayName": "Controlled",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Modal.__docgenInfo = {
				"description": "Set `modal` to `true` to trap focus inside the popover when it is open.\nThis is useful for complex popover content that requires user interaction,\nsuch as forms. Try tabbing through the fields — focus stays inside the\npopover until it is dismissed.\n\n**Note:** focus trapping requires a `Popover.Close` part inside the popup\nso that screen readers always have an escape route. It can be visually\nhidden if needed.\n\nPass `backdrop` to `Popover.Popup` to display a semi-transparent overlay\nbeneath the popover, signalling that the page is blocked.",
				"displayName": "Modal",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Unstyled.__docgenInfo = {
				"description": "The `variant=\"unstyled\"` option strips all visual styling from the popup,\nmaking it a blank positioning container for fully custom content.",
				"displayName": "Unstyled",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			OverlayPlacement.__docgenInfo = {
				"description": "Overlay placement positions the popover centered on top of its trigger,\neffectively covering it. This is achieved by computing a negative\n`sideOffset` based on the measured sizes of the trigger and popup.\n\nThis technique is useful when you want the popover to visually replace\nthe trigger element in place.",
				"displayName": "OverlayPlacement",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Inline.__docgenInfo = {
				"description": "To keep the floating layer **in page flow** next to surrounding layout,\ncreate a local ref to a `<span>` with `display: contents` and pass\n`portal={ <Popover.Portal container={ ref } /> }`. The popup still uses a\nportal, but the portal **mounts** into that subtree instead of\n`document.body`, while retaining positioning behavior.\n\n**Note:** `backdrop` will not cover the full viewport in this mode.",
				"displayName": "Inline",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			CollisionAvoidance.__docgenInfo = {
				"description": "Use the `collisionAvoidance` prop to control how the popover behaves when\nit collides with the edges of its collision boundary.\n\nBecause the popup renders via a portal (outside the scrollable container),\nthe container must be passed as `collisionBoundary` so Floating UI treats\nit as the clipping edge.\n\n- `side: 'flip'` flips to the opposite side (default).\n- `side: 'none'` disables collision handling.\n\nScroll the container to see collision avoidance in action.",
				"displayName": "CollisionAvoidance",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			CrossIframe.__docgenInfo = {
				"description": "When the popover's trigger lives inside an iframe but the popover should\nrender in the parent document, pass a parent-document element through\n`portal={ <Popover.Portal container={ ... } /> }` on `Popover.Popup`.\n\nThis technique is used in Gutenberg where the block editor canvas is an\niframe but toolbars and menus must appear outside it.\n\nScroll inside the iframe to verify that the popover tracks the trigger\nposition across document boundaries.",
				"displayName": "CrossIframe",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithCustomZIndex.__docgenInfo = {
				"description": "Popovers in Gutenberg are managed with explicit z-index values, which can\ncreate situations where a popover renders below another popover when you\nwant it above.\n\nThe `--wp-ui-popover-z-index` CSS variable controls the z-index of the\npopover's positioner (and its optional backdrop). Override it either:\n\n- **Globally**, by setting the variable on `:root` or `body` (raises every\n  popover in the page), or\n- **Per instance**, by passing a `Popover.Portal` with a `style` (or\n  `className`) to `Popover.Popup`'s `portal` prop. The variable cascades\n  from the portal wrapper to everything rendered inside it.\n\nThis story demonstrates the per-instance approach.",
				"displayName": "WithCustomZIndex",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Anchor.__docgenInfo = {
				"description": "Pass an `anchor` to `Popover.Positioner` (via `Popover.Popup`'s `positioner`\nslot) to position the popover against an arbitrary element instead of the\nbuilt-in trigger. `anchor` accepts four types:\n\n1. **Element** — a direct DOM element reference.\n2. **VirtualElement** — an object with a `getBoundingClientRect()` method.\n3. **RefObject** — a `React.RefObject` pointing to an element.\n4. **Callback** — a function returning an Element or VirtualElement.\n\nThis is the most-used pattern in Gutenberg: block popovers anchor to\nselected block elements, the link popover anchors to the text selection, and\ndata views anchor to right-click positions.",
				"displayName": "Anchor",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			ToolbarVariant.__docgenInfo = {
				"description": "Use `variant=\"unstyled\"` and custom inline styles to replicate a toolbar-like\nappearance: high-contrast border, no shadow, and a smaller border radius.\n\nA first-class `variant=\"toolbar\"` may be added in the future if this pattern\nbecomes widespread.",
				"displayName": "ToolbarVariant",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			ViewportConstrainedSize.__docgenInfo = {
				"description": "`Popover.Positioner` exposes `--available-height` and `--available-width`\nCSS variables representing the space between the anchor and the viewport\nedge. These cascade down to `Popover.Popup`, where applying them as\n`max-height` / `max-width` via the `style` prop constrains the popup size.\nThen add `overflow: auto` on an inner wrapper so scrolling happens inside\nthe popup content area — this replaces the legacy Popover's `resize` prop.\n\nOpen the popover and resize or scroll the container to see the popup shrink\nto fit.",
				"displayName": "ViewportConstrainedSize",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			OnOpenChangeDetails.__docgenInfo = {
				"description": "The `onOpenChange` callback on `Popover.Root` receives an `eventDetails`\nobject with a `reason` field that describes why the popover is\nopening/closing. This replaces the legacy Popover's separate `onClose` and\n`onFocusOutside` callbacks:\n\n- `reason === 'escape-key'` — user pressed Escape (was `onClose`)\n- `reason === 'outside-press'` — user clicked outside (was `onClose`)\n- `reason === 'focus-out'` — focus moved outside (was `onFocusOutside`)\n\nOpen the popover, then dismiss it in different ways to see the logged reason.",
				"displayName": "OnOpenChangeDetails",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			InitialFocus.__docgenInfo = {
				"description": "Pass a ref to `initialFocus` on `Popover.Popup` to focus a specific element\nwhen the popover opens. This replaces the legacy Popover's `focusOnMount`\nprop.\n\nIn this example, the Email field receives focus instead of the first\nfocusable element (Name).",
				"displayName": "InitialFocus",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			TrapFocus.__docgenInfo = {
				"description": "Set `modal=\"trap-focus\"` on `Popover.Root` to trap keyboard focus inside the\npopover without making it fully modal. Unlike `modal={true}`, this mode:\n\n- Traps Tab/Shift+Tab cycling within the popover\n- Does **not** lock page scroll\n- Does **not** block pointer interaction outside\n\nA `Popover.Close` part must be rendered inside the popup so that screen\nreaders can escape. It can be visually hidden if not needed visually.\n\nThis replaces the legacy Popover's `constrainTabbing` prop. Try tabbing\nthrough the fields — focus stays inside — then click the button outside\nto verify that pointer interaction still works.",
				"displayName": "TrapFocus",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			HoverTrigger.__docgenInfo = {
				"description": "Set `openOnHover` on `Popover.Trigger` to open the popover when the trigger\nis hovered. The `delay` and `closeDelay` props control the timing (in ms).\n\nThis is a capability the legacy Popover does not have natively — consumers\nwould need to wire up `mouseenter`/`mouseleave` handlers manually.",
				"displayName": "HoverTrigger",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Infotip.__docgenInfo = {
				"description": "Popups that open when hovering an info icon should use Popover with the\n`openOnHover` prop on the trigger instead of a\n[tooltip](https://wordpress.github.io/gutenberg/?path=/docs/design-system-components-tooltip--docs).\nThis way, touch users and screen reader users can access the content.\n\nTo know when to reach for a popover instead of a tooltip, consider the\npurpose of the trigger element: If the trigger's purpose is to open the\npopup itself, it's a popover. If the trigger's purpose is unrelated to\nopening the popup, it's a tooltip.",
				"displayName": "Infotip",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			InfotipWithLink.__docgenInfo = {
				"description": "An infotip popup can contain interactive content, such as a `Link`. The\npopup stays open while the pointer moves from the trigger onto the popup\nitself, so the link stays reachable — satisfying the \"hoverable\"\nrequirement of\n[WCAG 1.4.13 Content on Hover or Focus](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html).\nThe link is also reachable by tabbing to it, since the trigger opens on\nfocus as well as hover.",
				"displayName": "InfotipWithLink",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/stories/index.story.tsx",
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
					originalSource: "{\n  argTypes: {\n    children: {\n      control: {\n        type: 'text'\n      }\n    }\n  },\n  args: {\n    children: [<Popover.Trigger key=\"trigger\">Open Popover</Popover.Trigger>, <Popover.Popup key=\"popup\">\n                <Popover.Arrow />\n                <Popover.Title style={{\n        marginBottom: 'var(--wpds-dimension-gap-xs)'\n      }}>\n                    Popover title\n                </Popover.Title>\n                <Popover.Description>Popover description</Popover.Description>\n            </Popover.Popup>]\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		NoArrow.parameters = {
			...NoArrow.parameters,
			docs: {
				...NoArrow.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: [<Popover.Trigger key=\"trigger\">Open Popover</Popover.Trigger>, <Popover.Popup key=\"popup\">\n                <Popover.Title style={{\n        marginBottom: 'var(--wpds-dimension-gap-xs)'\n      }}>\n                    Popover title\n                </Popover.Title>\n                <Popover.Description>Popover description</Popover.Description>\n            </Popover.Popup>]\n  }\n}",
					...NoArrow.parameters?.docs?.source
				},
				description: {
					story: "A popover without the arrow sub-component. Omit `Popover.Arrow`\nfrom the popup content when an arrow indicator is not desired.",
					...NoArrow.parameters?.docs?.description
				}
			}
		};
		Positioning.parameters = {
			...Positioning.parameters,
			docs: {
				...Positioning.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    controls: {\n      disable: true\n    }\n  },\n  render: function Render() {\n    const sides = ['top', 'right', 'bottom', 'left'] as const;\n    const aligns = ['start', 'center', 'end'] as const;\n    return <div style={{\n      display: 'grid',\n      gridTemplateColumns: 'repeat(3, 1fr)',\n      gap: '6rem',\n      padding: '6rem 4rem',\n      justifyItems: 'center'\n    }}>\n                {sides.flatMap(side => aligns.map(align => <Popover.Root key={`${side}-${align}`} open>\n                            <Popover.Trigger>\n                                {side} / {align}\n                            </Popover.Trigger>\n                            <Popover.Popup positioner={<Popover.Positioner side={side} align={align} collisionAvoidance={{\n          side: 'none',\n          align: 'none'\n        }} />}>\n                                <VisuallyHidden render={<Popover.Title />}>\n                                    {side} / {align}\n                                </VisuallyHidden>\n                                <Popover.Arrow />\n                                <Popover.Description>\n                                    {side} side / {align} align\n                                </Popover.Description>\n                            </Popover.Popup>\n                        </Popover.Root>))}\n            </div>;\n  }\n}",
					...Positioning.parameters?.docs?.source
				},
				description: {
					story: "All combinations of `side` and `align` props on `Popover.Positioner`.\n\nEach row shows a side (`top`, `right`, `bottom`, `left`), and each column\nshows an alignment (`start`, `center`, `end`).",
					...Positioning.parameters?.docs?.description
				}
			}
		};
		WithCloseButton.parameters = {
			...WithCloseButton.parameters,
			docs: {
				...WithCloseButton.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: [<Popover.Trigger key=\"trigger\">Settings</Popover.Trigger>, <Popover.Popup key=\"popup\">\n                <Popover.Arrow />\n                <div style={{\n        display: 'flex',\n        justifyContent: 'space-between',\n        alignItems: 'center',\n        marginBottom: 'var(--wpds-dimension-gap-sm)'\n      }}>\n                    <Popover.Title>Settings</Popover.Title>\n                    <Popover.Close render={<IconButton variant=\"minimal\" size=\"compact\" tone=\"neutral\" icon={close} label=\"Close\" />} />\n                </div>\n                <Popover.Description>\n                    Configure your notification preferences and display\n                    settings.\n                </Popover.Description>\n            </Popover.Popup>]\n  }\n}",
					...WithCloseButton.parameters?.docs?.source
				},
				description: {
					story: "A popover with a close icon button, title, and description. The\n`Popover.Close` component renders a button that closes the popover when\nclicked. Here it wraps an `IconButton` for a properly sized, accessible\nclose action — matching the Dialog close-icon pattern.",
					...WithCloseButton.parameters?.docs?.description
				}
			}
		};
		Controlled.parameters = {
			...Controlled.parameters,
			docs: {
				...Controlled.parameters?.docs,
				source: {
					originalSource: "{\n  argTypes: {\n    open: {\n      control: false\n    },\n    onOpenChange: {\n      control: false\n    },\n    defaultOpen: {\n      control: false\n    }\n  },\n  args: {\n    children: [<Popover.Trigger key=\"trigger\">Toggle Popover</Popover.Trigger>, <Popover.Popup key=\"popup\">\n                <Popover.Arrow />\n                <Popover.Title style={{\n        marginBottom: 'var(--wpds-dimension-gap-xs)'\n      }}>\n                    Controlled Popover\n                </Popover.Title>\n                <Popover.Description>\n                    This popover is controlled by external state.\n                </Popover.Description>\n            </Popover.Popup>]\n  },\n  render: function Render(args) {\n    const [isOpen, setIsOpen] = useState(false);\n    const checkboxId = useId();\n    const checkboxRef = useRef<HTMLInputElement>(null);\n    const labelRef = useRef<HTMLLabelElement>(null);\n    return <div style={{\n      display: 'flex',\n      gap: '1rem',\n      alignItems: 'center'\n    }}>\n                <Popover.Root {...args} open={isOpen} onOpenChange={(nextOpen, eventDetails) => {\n        if (['outside-press', 'focus-out'].includes(eventDetails.reason) && !!eventDetails.event.target && ([checkboxRef.current, labelRef.current].filter(Boolean) as EventTarget[]).includes(eventDetails.event.target)) {\n          return;\n        }\n        setIsOpen(nextOpen);\n      }} />\n\n                <label htmlFor={checkboxId} ref={labelRef}>\n                    <input ref={checkboxRef} id={checkboxId} type=\"checkbox\" checked={isOpen} onChange={e => setIsOpen(e.target.checked)} />\n                    Open\n                </label>\n            </div>;\n  }\n}",
					...Controlled.parameters?.docs?.source
				},
				description: {
					story: "Use the `open` and `onOpenChange` props on `Popover.Root` to control the\npopover's visibility programmatically.\n\nThe checkbox drives the popover state externally. The popover's trigger\nand click-outside dismiss both sync back to the same state via\n`onOpenChange`, keeping everything in sync.",
					...Controlled.parameters?.docs?.description
				}
			}
		};
		Modal.parameters = {
			...Modal.parameters,
			docs: {
				...Modal.parameters?.docs,
				source: {
					originalSource: "{\n  argTypes: {\n    modal: {\n      control: false\n    }\n  },\n  args: {\n    modal: true,\n    children: [<Popover.Trigger key=\"trigger\">Edit Settings</Popover.Trigger>, <Popover.Popup backdrop key=\"popup\">\n                <Popover.Arrow />\n                <Popover.Title style={{\n        marginBottom: 'var(--wpds-dimension-gap-xs)'\n      }}>\n                    Settings\n                </Popover.Title>\n                <form style={{\n        display: 'flex',\n        flexDirection: 'column',\n        gap: 'var(--wpds-dimension-gap-sm)',\n        marginTop: 'var(--wpds-dimension-gap-sm)'\n      }} onSubmit={e => e.preventDefault()}>\n                    <label htmlFor=\"popover-test-name-id\" style={{\n          display: 'flex',\n          flexDirection: 'column',\n          gap: 'var(--wpds-dimension-gap-xs)',\n          fontSize: 'inherit'\n        }}>\n                        Name\n                        <input id=\"popover-test-name-id\" type=\"text\" placeholder=\"Enter your name\" />\n                    </label>\n                    <label htmlFor=\"popover-test-email-id\" style={{\n          display: 'flex',\n          flexDirection: 'column',\n          gap: 'var(--wpds-dimension-gap-xs)',\n          fontSize: 'inherit'\n        }}>\n                        Email\n                        <input id=\"popover-test-email-id\" type=\"email\" placeholder=\"Enter your email\" />\n                    </label>\n                    <div style={{\n          display: 'flex',\n          justifyContent: 'flex-end',\n          gap: 'var(--wpds-dimension-gap-sm)',\n          marginTop: 'var(--wpds-dimension-gap-xs)'\n        }}>\n                        <Popover.Close style={{\n            all: 'unset',\n            cursor: 'pointer'\n          }}>\n                            Cancel\n                        </Popover.Close>\n                        <button type=\"submit\">Save</button>\n                    </div>\n                </form>\n            </Popover.Popup>]\n  }\n}",
					...Modal.parameters?.docs?.source
				},
				description: {
					story: "Set `modal` to `true` to trap focus inside the popover when it is open.\nThis is useful for complex popover content that requires user interaction,\nsuch as forms. Try tabbing through the fields — focus stays inside the\npopover until it is dismissed.\n\n**Note:** focus trapping requires a `Popover.Close` part inside the popup\nso that screen readers always have an escape route. It can be visually\nhidden if needed.\n\nPass `backdrop` to `Popover.Popup` to display a semi-transparent overlay\nbeneath the popover, signalling that the page is blocked.",
					...Modal.parameters?.docs?.description
				}
			}
		};
		Unstyled.parameters = {
			...Unstyled.parameters,
			docs: {
				...Unstyled.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: [<Popover.Trigger key=\"trigger\">Open Unstyled</Popover.Trigger>, <Popover.Popup variant=\"unstyled\" key=\"popup\">\n                <Popover.Title style={{\n        marginBottom: 'var(--wpds-dimension-gap-xs)'\n      }}>\n                    Custom Styled\n                </Popover.Title>\n                <Popover.Description>\n                    This popup has no default styling — the consumer controls\n                    all visual appearance.\n                </Popover.Description>\n            </Popover.Popup>]\n  }\n}",
					...Unstyled.parameters?.docs?.source
				},
				description: {
					story: "The `variant=\"unstyled\"` option strips all visual styling from the popup,\nmaking it a blank positioning container for fully custom content.",
					...Unstyled.parameters?.docs?.description
				}
			}
		};
		OverlayPlacement.parameters = {
			...OverlayPlacement.parameters,
			docs: {
				...OverlayPlacement.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    defaultOpen: true\n  },\n  argTypes: {\n    defaultOpen: {\n      control: false\n    }\n  },\n  render: function Render({\n    children: _children,\n    ...args\n  }) {\n    const [popupRef, popupSize] = useMeasure<HTMLDivElement>();\n    const [triggerRef, triggerSize] = useMeasure<HTMLButtonElement>();\n    return <div style={{\n      padding: '4rem',\n      textAlign: 'center'\n    }}>\n                <Popover.Root {...args}>\n                    <Popover.Trigger ref={triggerRef}>\n                        Trigger (covered by popover)\n                    </Popover.Trigger>\n                    <Popover.Popup ref={popupRef} positioner={<Popover.Positioner side=\"bottom\" align=\"center\" sideOffset={-1 * (popupSize.height / 2 + triggerSize.height / 2)} collisionAvoidance={{\n          side: 'none',\n          align: 'none'\n        }} />}>\n                        <Popover.Title style={{\n            marginBottom: 'var(--wpds-dimension-gap-xs)'\n          }}>\n                            Overlay\n                        </Popover.Title>\n                        <Popover.Description>\n                            This popover is centered over its trigger using a\n                            negative sideOffset.\n                            <br />\n                            The trigger is currently hidden under the popover.\n                            <br />\n                            Try resizing the browser — collision avoidance is\n                            disabled so the popover stays overlaid.\n                        </Popover.Description>\n                    </Popover.Popup>\n                </Popover.Root>\n            </div>;\n  }\n}",
					...OverlayPlacement.parameters?.docs?.source
				},
				description: {
					story: "Overlay placement positions the popover centered on top of its trigger,\neffectively covering it. This is achieved by computing a negative\n`sideOffset` based on the measured sizes of the trigger and popup.\n\nThis technique is useful when you want the popover to visually replace\nthe trigger element in place.",
					...OverlayPlacement.parameters?.docs?.description
				}
			}
		};
		Inline.parameters = {
			...Inline.parameters,
			docs: {
				...Inline.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    controls: {\n      disable: true\n    }\n  },\n  render: function Render() {\n    const inlineContainerRef = useRef<HTMLSpanElement>(null);\n    return <div data-testid=\"inline-wrapper\">\n                <Popover.Root>\n                    <Popover.Trigger>Open Inline</Popover.Trigger>\n                    <span ref={inlineContainerRef} style={{\n          display: 'contents'\n        }} />\n\n                    <Popover.Popup portal={<Popover.Portal container={inlineContainerRef} />}>\n                        <Popover.Arrow />\n                        <Popover.Title style={{\n            marginBottom: 'var(--wpds-dimension-gap-xs)'\n          }}>\n                            Inline Popover\n                        </Popover.Title>\n                        <Popover.Description>\n                            This example still uses `Popover.Portal`, but the\n                            portal `container` is the in-tree span above, so the\n                            portal node mounts inside the wrapper instead of\n                            `document.body`.\n                        </Popover.Description>\n                    </Popover.Popup>\n                </Popover.Root>\n            </div>;\n  }\n}",
					...Inline.parameters?.docs?.source
				},
				description: {
					story: "To keep the floating layer **in page flow** next to surrounding layout,\ncreate a local ref to a `<span>` with `display: contents` and pass\n`portal={ <Popover.Portal container={ ref } /> }`. The popup still uses a\nportal, but the portal **mounts** into that subtree instead of\n`document.body`, while retaining positioning behavior.\n\n**Note:** `backdrop` will not cover the full viewport in this mode.",
					...Inline.parameters?.docs?.description
				}
			}
		};
		CollisionAvoidance.parameters = {
			...CollisionAvoidance.parameters,
			docs: {
				...CollisionAvoidance.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    controls: {\n      disable: true\n    }\n  },\n  render: function Render() {\n    const [boundary, setBoundary] = useState<HTMLElement | null>(null);\n    return <div ref={setBoundary} style={{\n      height: 300,\n      overflow: 'auto',\n      border: '1px solid #ccc',\n      padding: '200px 2rem'\n    }}>\n                <div style={{\n        display: 'flex',\n        gap: '2rem',\n        justifyContent: 'center'\n      }}>\n                    <Popover.Root defaultOpen>\n                        <Popover.Trigger>Flip (default)</Popover.Trigger>\n                        <Popover.Popup positioner={<Popover.Positioner side=\"top\" collisionBoundary={boundary ?? undefined} />}>\n                            <Popover.Title style={{\n              marginBottom: 'var(--wpds-dimension-gap-xs)'\n            }}>\n                                Flip\n                            </Popover.Title>\n                            <Popover.Description>\n                                Flips to bottom when clipped\n                            </Popover.Description>\n                        </Popover.Popup>\n                    </Popover.Root>\n\n                    <Popover.Root defaultOpen>\n                        <Popover.Trigger>No collision</Popover.Trigger>\n                        <Popover.Popup positioner={<Popover.Positioner side=\"top\" collisionBoundary={boundary ?? undefined} collisionAvoidance={{\n            side: 'none',\n            align: 'none'\n          }} />}>\n                            <Popover.Title style={{\n              marginBottom: 'var(--wpds-dimension-gap-xs)'\n            }}>\n                                None\n                            </Popover.Title>\n                            <Popover.Description>\n                                Stays on top even when clipped\n                            </Popover.Description>\n                        </Popover.Popup>\n                    </Popover.Root>\n                </div>\n                <div style={{\n        height: 600\n      }} />\n            </div>;\n  }\n}",
					...CollisionAvoidance.parameters?.docs?.source
				},
				description: {
					story: "Use the `collisionAvoidance` prop to control how the popover behaves when\nit collides with the edges of its collision boundary.\n\nBecause the popup renders via a portal (outside the scrollable container),\nthe container must be passed as `collisionBoundary` so Floating UI treats\nit as the clipping edge.\n\n- `side: 'flip'` flips to the opposite side (default).\n- `side: 'none'` disables collision handling.\n\nScroll the container to see collision avoidance in action.",
					...CollisionAvoidance.parameters?.docs?.description
				}
			}
		};
		CrossIframe.parameters = {
			...CrossIframe.parameters,
			docs: {
				...CrossIframe.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    defaultOpen: true\n  },\n  argTypes: {\n    defaultOpen: {\n      control: false\n    }\n  },\n  render: function Render({\n    children: _children,\n    ...args\n  }) {\n    const portalContainerRef = useRef<HTMLDivElement>(null);\n    const [iframeBoundary, setIframeBoundary] = useState<HTMLIFrameElement | null>(null);\n    return <div>\n                <div ref={portalContainerRef} />\n                <GenericIframe ref={setIframeBoundary} style={{\n        width: '100%',\n        height: 400,\n        border: 0,\n        outline: '1px solid purple'\n      }}>\n                    <div style={{\n          height: '200vh',\n          paddingTop: '10vh'\n        }}>\n                        <div style={{\n            maxWidth: 200,\n            marginTop: 100,\n            marginInline: 'auto'\n          }}>\n                            <Popover.Root {...args}>\n                                <Popover.Trigger style={{\n                padding: 8,\n                background: 'salmon'\n              }}>\n                                    Popover&apos;s anchor (inside iframe)\n                                </Popover.Trigger>\n                                <Popover.Popup portal={<Popover.Portal container={portalContainerRef as React.RefObject<HTMLElement>} />} positioner={<Popover.Positioner collisionBoundary={iframeBoundary ?? undefined} />}>\n                                    <Popover.Arrow />\n                                    <Popover.Title style={{\n                  marginBottom: 'var(--wpds-dimension-gap-xs)'\n                }}>\n                                        Cross-Iframe Popover\n                                    </Popover.Title>\n                                    <Popover.Description>\n                                        This popup is rendered in the parent\n                                        document, not inside the iframe. Scroll\n                                        the iframe to see the popover track the\n                                        trigger.\n                                    </Popover.Description>\n                                </Popover.Popup>\n                            </Popover.Root>\n                        </div>\n                    </div>\n                </GenericIframe>\n            </div>;\n  }\n}",
					...CrossIframe.parameters?.docs?.source
				},
				description: {
					story: "When the popover's trigger lives inside an iframe but the popover should\nrender in the parent document, pass a parent-document element through\n`portal={ <Popover.Portal container={ ... } /> }` on `Popover.Popup`.\n\nThis technique is used in Gutenberg where the block editor canvas is an\niframe but toolbars and menus must appear outside it.\n\nScroll inside the iframe to verify that the popover tracks the trigger\nposition across document boundaries.",
					...CrossIframe.parameters?.docs?.description
				}
			}
		};
		WithCustomZIndex.parameters = {
			...WithCustomZIndex.parameters,
			docs: {
				...WithCustomZIndex.parameters?.docs,
				source: {
					originalSource: "{\n  name: 'With Custom z-index',\n  args: {\n    children: [<Popover.Trigger key=\"trigger\">Open Popover</Popover.Trigger>, <Popover.Popup portal={<Popover.Portal style={{\n      '--wp-ui-popover-z-index': '9999'\n    }} />} key=\"popup\">\n                <Popover.Arrow />\n                <Popover.Title style={{\n        marginBottom: 'var(--wpds-dimension-gap-xs)'\n      }}>\n                    Custom z-index\n                </Popover.Title>\n                <Popover.Description>\n                    This popover renders at `z-index: 9999` via the\n                    `--wp-ui-popover-z-index` CSS custom property, set on\n                    `Popover.Portal` through the `portal` prop.\n                </Popover.Description>\n            </Popover.Popup>]\n  }\n}",
					...WithCustomZIndex.parameters?.docs?.source
				},
				description: {
					story: "Popovers in Gutenberg are managed with explicit z-index values, which can\ncreate situations where a popover renders below another popover when you\nwant it above.\n\nThe `--wp-ui-popover-z-index` CSS variable controls the z-index of the\npopover's positioner (and its optional backdrop). Override it either:\n\n- **Globally**, by setting the variable on `:root` or `body` (raises every\n  popover in the page), or\n- **Per instance**, by passing a `Popover.Portal` with a `style` (or\n  `className`) to `Popover.Popup`'s `portal` prop. The variable cascades\n  from the portal wrapper to everything rendered inside it.\n\nThis story demonstrates the per-instance approach.",
					...WithCustomZIndex.parameters?.docs?.description
				}
			}
		};
		Anchor.parameters = {
			...Anchor.parameters,
			docs: {
				...Anchor.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    controls: {\n      disable: true\n    }\n  },\n  render: function Render() {\n    const [elementAnchor, setElementAnchor] = useState<HTMLElement | null>(null);\n    const refAnchor = useRef<HTMLDivElement>(null);\n    const virtualAnchorLabel = useRef<HTMLDivElement>(null);\n    const callbackTarget = useRef<HTMLDivElement>(null);\n    const virtualAnchor = {\n      getBoundingClientRect: () => virtualAnchorLabel.current?.getBoundingClientRect() ?? new DOMRect()\n    };\n    const anchorBoxStyle = {\n      padding: '8px 12px',\n      border: '2px dashed currentcolor',\n      borderRadius: 4,\n      fontSize: 12,\n      textAlign: 'center' as const\n    };\n    const sharedPositionerProps = {\n      collisionAvoidance: {\n        side: 'none' as const,\n        align: 'none' as const\n      }\n    };\n    return <div style={{\n      display: 'grid',\n      gridTemplateColumns: '1fr 1fr',\n      gap: '4rem',\n      padding: '4rem 2rem'\n    }}>\n                {/* 1. Element anchor */}\n                <div>\n                    <div ref={setElementAnchor} style={anchorBoxStyle}>\n                        Element anchor\n                    </div>\n                    <Popover.Root open>\n                        <Popover.Popup positioner={<Popover.Positioner anchor={elementAnchor ?? undefined} {...sharedPositionerProps} />}>\n                            <VisuallyHidden render={<Popover.Title />}>\n                                Element anchor\n                            </VisuallyHidden>\n                            <Popover.Arrow />\n                            <Popover.Description>\n                                Anchored to a DOM element\n                            </Popover.Description>\n                        </Popover.Popup>\n                    </Popover.Root>\n                </div>\n\n                {/* 2. VirtualElement anchor */}\n                <div>\n                    <div ref={virtualAnchorLabel} style={anchorBoxStyle}>\n                        VirtualElement anchor\n                    </div>\n                    <Popover.Root open>\n                        <Popover.Popup positioner={<Popover.Positioner anchor={virtualAnchor} {...sharedPositionerProps} />}>\n                            <VisuallyHidden render={<Popover.Title />}>\n                                Virtual anchor\n                            </VisuallyHidden>\n                            <Popover.Arrow />\n                            <Popover.Description>\n                                Anchored to a virtual element\n                            </Popover.Description>\n                        </Popover.Popup>\n                    </Popover.Root>\n                </div>\n\n                {/* 3. RefObject anchor */}\n                <div>\n                    <div ref={refAnchor} style={anchorBoxStyle}>\n                        RefObject anchor\n                    </div>\n                    <Popover.Root open>\n                        <Popover.Popup positioner={<Popover.Positioner anchor={refAnchor} {...sharedPositionerProps} />}>\n                            <VisuallyHidden render={<Popover.Title />}>\n                                Ref anchor\n                            </VisuallyHidden>\n                            <Popover.Arrow />\n                            <Popover.Description>\n                                Anchored via useRef\n                            </Popover.Description>\n                        </Popover.Popup>\n                    </Popover.Root>\n                </div>\n\n                {/* 4. Callback anchor */}\n                <div>\n                    <div ref={callbackTarget} style={anchorBoxStyle}>\n                        Callback anchor\n                    </div>\n                    <Popover.Root open>\n                        <Popover.Popup positioner={<Popover.Positioner anchor={() => callbackTarget.current} {...sharedPositionerProps} />}>\n                            <VisuallyHidden render={<Popover.Title />}>\n                                Callback anchor\n                            </VisuallyHidden>\n                            <Popover.Arrow />\n                            <Popover.Description>\n                                Anchored via callback function\n                            </Popover.Description>\n                        </Popover.Popup>\n                    </Popover.Root>\n                </div>\n            </div>;\n  }\n}",
					...Anchor.parameters?.docs?.source
				},
				description: {
					story: "Pass an `anchor` to `Popover.Positioner` (via `Popover.Popup`'s `positioner`\nslot) to position the popover against an arbitrary element instead of the\nbuilt-in trigger. `anchor` accepts four types:\n\n1. **Element** — a direct DOM element reference.\n2. **VirtualElement** — an object with a `getBoundingClientRect()` method.\n3. **RefObject** — a `React.RefObject` pointing to an element.\n4. **Callback** — a function returning an Element or VirtualElement.\n\nThis is the most-used pattern in Gutenberg: block popovers anchor to\nselected block elements, the link popover anchors to the text selection, and\ndata views anchor to right-click positions.",
					...Anchor.parameters?.docs?.description
				}
			}
		};
		ToolbarVariant.parameters = {
			...ToolbarVariant.parameters,
			docs: {
				...ToolbarVariant.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: [<Popover.Trigger key=\"trigger\">Open Toolbar</Popover.Trigger>, <Popover.Popup variant=\"unstyled\" style={{\n      display: 'flex',\n      gap: 'var(--wpds-dimension-gap-xs)',\n      padding: '4px 8px',\n      border: '1px solid #1e1e1e',\n      borderRadius: 2,\n      background: '#fff',\n      fontSize: 13\n    }} key=\"popup\">\n                <VisuallyHidden render={<Popover.Title />}>\n                    Formatting\n                </VisuallyHidden>\n                <button type=\"button\">B</button>\n                <button type=\"button\">I</button>\n                <button type=\"button\">U</button>\n                <button type=\"button\">Link</button>\n            </Popover.Popup>]\n  }\n}",
					...ToolbarVariant.parameters?.docs?.source
				},
				description: {
					story: "Use `variant=\"unstyled\"` and custom inline styles to replicate a toolbar-like\nappearance: high-contrast border, no shadow, and a smaller border radius.\n\nA first-class `variant=\"toolbar\"` may be added in the future if this pattern\nbecomes widespread.",
					...ToolbarVariant.parameters?.docs?.description
				}
			}
		};
		ViewportConstrainedSize.parameters = {
			...ViewportConstrainedSize.parameters,
			docs: {
				...ViewportConstrainedSize.parameters?.docs,
				source: {
					originalSource: "{\n  name: 'Viewport-Constrained Size',\n  args: {\n    defaultOpen: true\n  },\n  argTypes: {\n    defaultOpen: {\n      control: false\n    }\n  },\n  render: function Render({\n    children: _children,\n    ...args\n  }) {\n    return <div style={{\n      height: 250,\n      overflow: 'auto',\n      border: '1px solid #ccc',\n      padding: '60px 2rem'\n    }}>\n                <Popover.Root {...args}>\n                    <Popover.Trigger>Show Content</Popover.Trigger>\n                    <Popover.Popup positioner={<Popover.Positioner side=\"bottom\" />} style={{\n          maxHeight: 'var(--available-height, 300px)',\n          maxWidth: 'var(--available-width, 300px)'\n        }}>\n                        <div style={{\n            overflow: 'auto',\n            height: '100%'\n          }}>\n                            <Popover.Title style={{\n              marginBottom: 'var(--wpds-dimension-gap-xs)'\n            }}>\n                                Constrained\n                            </Popover.Title>\n                            <Popover.Description>\n                                This popup constrains its size using the\n                                `--available-height` and `--available-width` CSS\n                                variables exposed by the positioner.\n                            </Popover.Description>\n                            <div style={{\n              height: 400\n            }}>\n                                <p>\n                                    Scroll inside this popup — its max-height is\n                                    capped to the available viewport space.\n                                </p>\n                            </div>\n                        </div>\n                    </Popover.Popup>\n                </Popover.Root>\n                <div style={{\n        height: 600\n      }} />\n            </div>;\n  }\n}",
					...ViewportConstrainedSize.parameters?.docs?.source
				},
				description: {
					story: "`Popover.Positioner` exposes `--available-height` and `--available-width`\nCSS variables representing the space between the anchor and the viewport\nedge. These cascade down to `Popover.Popup`, where applying them as\n`max-height` / `max-width` via the `style` prop constrains the popup size.\nThen add `overflow: auto` on an inner wrapper so scrolling happens inside\nthe popup content area — this replaces the legacy Popover's `resize` prop.\n\nOpen the popover and resize or scroll the container to see the popup shrink\nto fit.",
					...ViewportConstrainedSize.parameters?.docs?.description
				}
			}
		};
		OnOpenChangeDetails.parameters = {
			...OnOpenChangeDetails.parameters,
			docs: {
				...OnOpenChangeDetails.parameters?.docs,
				source: {
					originalSource: "{\n  name: 'onOpenChange Details',\n  parameters: {\n    controls: {\n      disable: true\n    }\n  },\n  render: function Render() {\n    const [log, setLog] = useState<string[]>([]);\n    return <div style={{\n      display: 'flex',\n      gap: '2rem'\n    }}>\n                <Popover.Root onOpenChange={(nextOpen, eventDetails) => {\n        setLog(prev => [...prev.slice(-9), `open=${nextOpen} reason=${eventDetails.reason}`]);\n      }}>\n                    <Popover.Trigger>Toggle</Popover.Trigger>\n                    <Popover.Popup>\n                        <Popover.Arrow />\n                        <Popover.Title style={{\n            marginBottom: 'var(--wpds-dimension-gap-xs)'\n          }}>\n                            Event Log\n                        </Popover.Title>\n                        <Popover.Description>\n                            Dismiss this popover via Escape, click-outside, or\n                            moving focus away.\n                        </Popover.Description>\n                    </Popover.Popup>\n                </Popover.Root>\n\n                <pre style={{\n        flex: 1,\n        padding: 8,\n        fontSize: 12,\n        lineHeight: 1.5,\n        background: '#f5f5f5',\n        borderRadius: 4,\n        minHeight: 100,\n        margin: 0\n      }}>\n                    {log.length ? log.join('\\n') : 'Interact with the popover to see events…'}\n                </pre>\n            </div>;\n  }\n}",
					...OnOpenChangeDetails.parameters?.docs?.source
				},
				description: {
					story: "The `onOpenChange` callback on `Popover.Root` receives an `eventDetails`\nobject with a `reason` field that describes why the popover is\nopening/closing. This replaces the legacy Popover's separate `onClose` and\n`onFocusOutside` callbacks:\n\n- `reason === 'escape-key'` — user pressed Escape (was `onClose`)\n- `reason === 'outside-press'` — user clicked outside (was `onClose`)\n- `reason === 'focus-out'` — focus moved outside (was `onFocusOutside`)\n\nOpen the popover, then dismiss it in different ways to see the logged reason.",
					...OnOpenChangeDetails.parameters?.docs?.description
				}
			}
		};
		InitialFocus.parameters = {
			...InitialFocus.parameters,
			docs: {
				...InitialFocus.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    controls: {\n      disable: true\n    }\n  },\n  render: function Render() {\n    const emailRef = useRef<HTMLInputElement>(null);\n    const nameId = useId();\n    const emailId = useId();\n    return <Popover.Root>\n                <Popover.Trigger>Open Form</Popover.Trigger>\n                <Popover.Popup initialFocus={emailRef}>\n                    <Popover.Arrow />\n                    <Popover.Title style={{\n          marginBottom: 'var(--wpds-dimension-gap-xs)'\n        }}>\n                        Contact\n                    </Popover.Title>\n                    <form style={{\n          display: 'flex',\n          flexDirection: 'column',\n          gap: 'var(--wpds-dimension-gap-sm)'\n        }} onSubmit={e => e.preventDefault()}>\n                        <label htmlFor={nameId} style={{\n            display: 'flex',\n            flexDirection: 'column',\n            gap: 'var(--wpds-dimension-gap-xs)',\n            fontSize: 'inherit'\n          }}>\n                            Name\n                        </label>\n                        <input id={nameId} type=\"text\" placeholder=\"Enter name\" />\n\n                        <label htmlFor={emailId} style={{\n            display: 'flex',\n            flexDirection: 'column',\n            gap: 'var(--wpds-dimension-gap-xs)',\n            fontSize: 'inherit'\n          }}>\n                            Email (auto-focused)\n                        </label>\n                        <input id={emailId} ref={emailRef} type=\"email\" placeholder=\"Enter email\" />\n                    </form>\n                </Popover.Popup>\n            </Popover.Root>;\n  }\n}",
					...InitialFocus.parameters?.docs?.source
				},
				description: {
					story: "Pass a ref to `initialFocus` on `Popover.Popup` to focus a specific element\nwhen the popover opens. This replaces the legacy Popover's `focusOnMount`\nprop.\n\nIn this example, the Email field receives focus instead of the first\nfocusable element (Name).",
					...InitialFocus.parameters?.docs?.description
				}
			}
		};
		TrapFocus.parameters = {
			...TrapFocus.parameters,
			docs: {
				...TrapFocus.parameters?.docs,
				source: {
					originalSource: "{\n  argTypes: {\n    modal: {\n      control: false\n    }\n  },\n  args: {\n    modal: 'trap-focus' as const\n  },\n  render: function Render(args) {\n    return <div style={{\n      display: 'flex',\n      gap: '2rem'\n    }}>\n                <Popover.Root {...args}>\n                    <Popover.Trigger>Open</Popover.Trigger>\n                    <Popover.Popup>\n                        <Popover.Arrow />\n                        <Popover.Title style={{\n            marginBottom: 'var(--wpds-dimension-gap-xs)'\n          }}>\n                            Trap Focus\n                        </Popover.Title>\n                        <Popover.Description>\n                            Tab cycles within this popover, but clicking outside\n                            still works.\n                        </Popover.Description>\n                        <div style={{\n            display: 'flex',\n            gap: 'var(--wpds-dimension-gap-sm)',\n            marginTop: 'var(--wpds-dimension-gap-sm)'\n          }}>\n                            <input placeholder=\"Field A\" />\n                            <input placeholder=\"Field B\" />\n                            <Popover.Close>Close</Popover.Close>\n                        </div>\n                    </Popover.Popup>\n                </Popover.Root>\n\n                <button type=\"button\" onClick={() =>\n      // eslint-disable-next-line no-alert\n      window.alert('Outside button clicked!')}>\n                    Outside button\n                </button>\n            </div>;\n  }\n}",
					...TrapFocus.parameters?.docs?.source
				},
				description: {
					story: "Set `modal=\"trap-focus\"` on `Popover.Root` to trap keyboard focus inside the\npopover without making it fully modal. Unlike `modal={true}`, this mode:\n\n- Traps Tab/Shift+Tab cycling within the popover\n- Does **not** lock page scroll\n- Does **not** block pointer interaction outside\n\nA `Popover.Close` part must be rendered inside the popup so that screen\nreaders can escape. It can be visually hidden if not needed visually.\n\nThis replaces the legacy Popover's `constrainTabbing` prop. Try tabbing\nthrough the fields — focus stays inside — then click the button outside\nto verify that pointer interaction still works.",
					...TrapFocus.parameters?.docs?.description
				}
			}
		};
		HoverTrigger.parameters = {
			...HoverTrigger.parameters,
			docs: {
				...HoverTrigger.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    controls: {\n      disable: true\n    }\n  },\n  render: function Render(args) {\n    return <Popover.Root {...args}>\n                <Popover.Trigger openOnHover delay={200} closeDelay={150}>\n                    Hover me\n                </Popover.Trigger>\n                <Popover.Popup>\n                    <Popover.Arrow />\n                    <Popover.Title style={{\n          marginBottom: 'var(--wpds-dimension-gap-xs)'\n        }}>\n                        Hover Popover\n                    </Popover.Title>\n                    <Popover.Description>\n                        This popover opens on hover with a 200ms delay and\n                        closes 150ms after the pointer leaves.\n                    </Popover.Description>\n                </Popover.Popup>\n            </Popover.Root>;\n  }\n}",
					...HoverTrigger.parameters?.docs?.source
				},
				description: {
					story: "Set `openOnHover` on `Popover.Trigger` to open the popover when the trigger\nis hovered. The `delay` and `closeDelay` props control the timing (in ms).\n\nThis is a capability the legacy Popover does not have natively — consumers\nwould need to wire up `mouseenter`/`mouseleave` handlers manually.",
					...HoverTrigger.parameters?.docs?.description
				}
			}
		};
		Infotip.parameters = {
			...Infotip.parameters,
			docs: {
				...Infotip.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    controls: {\n      disable: true\n    }\n  },\n  render: function Render(args) {\n    return <div style={{\n      display: 'flex',\n      alignItems: 'center',\n      gap: 'var(--wpds-dimension-gap-xs)'\n    }}>\n                <span>Label</span>\n                <Popover.Root {...args}>\n                    <Popover.Trigger openOnHover delay={200} closeDelay={200} aria-label=\"More information\" style={{\n          background: 'none',\n          border: 'none',\n          padding: 0,\n          cursor: 'var(--wpds-cursor-control)',\n          display: 'inline-flex',\n          alignItems: 'center',\n          borderRadius: 'var(--wpds-border-radius-sm)'\n        }}>\n                        <Icon icon={info} size={20} />\n                    </Popover.Trigger>\n                    <Popover.Popup>\n                        <Popover.Arrow />\n                        <VisuallyHidden render={<Popover.Title />}>\n                            More information\n                        </VisuallyHidden>\n                        <Popover.Description>\n                            This is additional context about the label. Unlike\n                            tooltips, this content is accessible to touch and\n                            screen reader users.\n                        </Popover.Description>\n                    </Popover.Popup>\n                </Popover.Root>\n            </div>;\n  }\n}",
					...Infotip.parameters?.docs?.source
				},
				description: {
					story: "Popups that open when hovering an info icon should use Popover with the\n`openOnHover` prop on the trigger instead of a\n[tooltip](https://wordpress.github.io/gutenberg/?path=/docs/design-system-components-tooltip--docs).\nThis way, touch users and screen reader users can access the content.\n\nTo know when to reach for a popover instead of a tooltip, consider the\npurpose of the trigger element: If the trigger's purpose is to open the\npopup itself, it's a popover. If the trigger's purpose is unrelated to\nopening the popup, it's a tooltip.",
					...Infotip.parameters?.docs?.description
				}
			}
		};
		InfotipWithLink.parameters = {
			...InfotipWithLink.parameters,
			docs: {
				...InfotipWithLink.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    controls: {\n      disable: true\n    }\n  },\n  render: function Render(args) {\n    return <div style={{\n      display: 'flex',\n      alignItems: 'center',\n      gap: 'var(--wpds-dimension-gap-xs)'\n    }}>\n                <span>Label</span>\n                <Popover.Root {...args}>\n                    <Popover.Trigger openOnHover delay={200} closeDelay={200} aria-label=\"More information\" style={{\n          background: 'none',\n          border: 'none',\n          padding: 0,\n          cursor: 'var(--wpds-cursor-control)',\n          display: 'inline-flex',\n          alignItems: 'center',\n          borderRadius: 'var(--wpds-border-radius-sm)'\n        }}>\n                        <Icon icon={info} size={20} />\n                    </Popover.Trigger>\n                    <Popover.Popup>\n                        <Popover.Arrow />\n                        <VisuallyHidden render={<Popover.Title />}>\n                            More information\n                        </VisuallyHidden>\n                        <Popover.Description>\n                            This is additional context about the label.{' '}\n                            <Link href=\"https://wordpress.org\" openInNewTab>\n                                Read more\n                            </Link>\n                        </Popover.Description>\n                    </Popover.Popup>\n                </Popover.Root>\n            </div>;\n  }\n}",
					...InfotipWithLink.parameters?.docs?.source
				},
				description: {
					story: "An infotip popup can contain interactive content, such as a `Link`. The\npopup stays open while the pointer moves from the trigger onto the popup\nitself, so the link stays reachable — satisfying the \"hoverable\"\nrequirement of\n[WCAG 1.4.13 Content on Hover or Focus](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html).\nThe link is also reachable by tabbing to it, since the trigger opens on\nfocus as well as hover.",
					...InfotipWithLink.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Anchor, CollisionAvoidance, Controlled, CrossIframe, Default, HoverTrigger, Infotip, InfotipWithLink, InitialFocus, Inline, Modal, NoArrow, OnOpenChangeDetails, OverlayPlacement, Positioning, ToolbarVariant, TrapFocus, Unstyled, ViewportConstrainedSize, WithCloseButton, WithCustomZIndex, meta as default };
