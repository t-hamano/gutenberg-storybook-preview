import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { r as init_react_platform, t as createPortal } from "./react-platform-BqLbFOjq.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_button, t as Button } from "./button-wsTfHPkm.js";
import { i as init_slot_fill, t as Provider } from "./slot-fill-CKXX0yAb.js";
import { n as init_popover, t as Popover } from "./popover-BHDSr2aY.js";
//#region ../packages/components/src/popover/stories/utils.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, GenericIframe, PopoverInsideIframeRenderedInExternalSlot;
function init_utils() {
	return (init_utils = __esmMin((() => {
		init_react_platform(), init_react();
		init_popover();
		init_slot_fill();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/popover/stories/utils.tsx";
		GenericIframe = ({ children, ...props }) => {
			const [containerNode, setContainerNode] = (0, import_react.useState)();
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("iframe", {
				...props,
				title: "My Iframe",
				srcDoc: "<!doctype html><html><body></body></html>",
				onLoad: (event) => {
					if (event.currentTarget.contentDocument) setContainerNode(event.currentTarget.contentDocument.body);
				},
				children: containerNode && createPortal(children, containerNode)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 13,
				columnNumber: 3
			}, void 0);
		};
		PopoverInsideIframeRenderedInExternalSlot = (props) => {
			const SLOT_NAME = "my-slot";
			const [anchorRef, setAnchorRef] = (0, import_react.useState)(null);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Provider, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Popover.Slot, { name: SLOT_NAME }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 42,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(GenericIframe, {
				style: {
					width: "100%",
					height: "400px",
					border: "0",
					outline: "1px solid purple"
				},
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
					style: {
						height: "200vh",
						paddingTop: "10vh"
					},
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("p", {
						style: {
							padding: "8px",
							background: "salmon",
							maxWidth: "200px",
							marginTop: "100px",
							marginLeft: "auto",
							marginRight: "auto"
						},
						ref: setAnchorRef,
						children: "Popover's anchor"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 57,
						columnNumber: 6
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Popover, {
						...props,
						__unstableSlotName: SLOT_NAME,
						anchor: anchorRef
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 70,
						columnNumber: 6
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 51,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 43,
				columnNumber: 4
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 41,
				columnNumber: 3
			}, void 0);
		};
		try {
			PopoverInsideIframeRenderedInExternalSlot.__docgenInfo = {
				"description": "",
				"displayName": "PopoverInsideIframeRenderedInExternalSlot",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/popover/stories/utils.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The `children` elements rendered as the popover's content.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"animate": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the popover should animate when opening.",
						"name": "animate",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"shift": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Enables the `Popover` to shift in order to stay in view when meeting the\nviewport edges.\n_Note: The `resize` and `shift` props are not intended to be used together.\nEnabling both can cause unexpected behavior._",
						"name": "shift",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"inline": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to render the popover inline or within the slot.",
						"name": "inline",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"anchor": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The element that should be used by the popover as its anchor. It can either\nbe an `Element` or, alternatively, a `VirtualElement` — ie. an object with\nthe `getBoundingClientRect()` and the `ownerDocument` properties defined.\n\n**The anchor element should be stored in local state** rather than a\nplain React ref to ensure reactive updating when it changes.",
						"name": "anchor",
						"required": false,
						"tags": {},
						"type": { "name": "Element | VirtualElement | null" }
					},
					"variant": {
						"defaultValue": { "value": "undefined" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Specifies the popover's style.\n\nLeave undefined for the default style. Other values are:\n- 'unstyled':  The popover is essentially without any visible style, it\n               has no background, border, outline or drop shadow, but\n               the popover contents are still displayed.\n- 'toolbar':   A style that has no elevation, but a high contrast with\n               other elements. This is matches the style of the\n               `Toolbar` component.",
						"name": "variant",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"toolbar\" | \"unstyled\"",
							"value": [{ "value": "\"toolbar\"" }, { "value": "\"unstyled\"" }]
						}
					},
					"offset": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The distance (in px) between the anchor and the popover. Pass an object to\nalso displace the popover along its cross axis.",
						"name": "offset",
						"required": false,
						"tags": {},
						"type": { "name": "number | { mainAxis?: number; crossAxis?: number; } | undefined" }
					},
					"onClose": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A callback invoked when the popover should be closed.",
						"name": "onClose",
						"required": false,
						"tags": {},
						"type": { "name": "(() => void)" }
					},
					"position": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Legacy way to specify the popover's position with respect to its anchor.\n_Note: this prop is deprecated. Use the `placement` prop instead._",
						"name": "position",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"top left\" | \"top right\" | \"middle left\" | \"middle right\" | \"bottom left\" | \"bottom right\" | \"top center\" | \"bottom center\" | PositionYAxis | \"middle center\" | ... 36 more ...",
							"value": [
								{ "value": "\"top\"" },
								{ "value": "\"middle\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"top left\"" },
								{ "value": "\"top right\"" },
								{ "value": "\"middle left\"" },
								{ "value": "\"middle right\"" },
								{ "value": "\"bottom left\"" },
								{ "value": "\"bottom right\"" },
								{ "value": "\"top center\"" },
								{ "value": "\"bottom center\"" },
								{ "value": "\"middle center\"" },
								{ "value": "\"top center left\"" },
								{ "value": "\"top center right\"" },
								{ "value": "\"top center top\"" },
								{ "value": "\"top center bottom\"" },
								{ "value": "\"top left left\"" },
								{ "value": "\"top left right\"" },
								{ "value": "\"top left top\"" },
								{ "value": "\"top left bottom\"" },
								{ "value": "\"top right left\"" },
								{ "value": "\"top right right\"" },
								{ "value": "\"top right top\"" },
								{ "value": "\"top right bottom\"" },
								{ "value": "\"middle center left\"" },
								{ "value": "\"middle center right\"" },
								{ "value": "\"middle center top\"" },
								{ "value": "\"middle center bottom\"" },
								{ "value": "\"middle left left\"" },
								{ "value": "\"middle left right\"" },
								{ "value": "\"middle left top\"" },
								{ "value": "\"middle left bottom\"" },
								{ "value": "\"middle right left\"" },
								{ "value": "\"middle right right\"" },
								{ "value": "\"middle right top\"" },
								{ "value": "\"middle right bottom\"" },
								{ "value": "\"bottom center left\"" },
								{ "value": "\"bottom center right\"" },
								{ "value": "\"bottom center top\"" },
								{ "value": "\"bottom center bottom\"" },
								{ "value": "\"bottom left left\"" },
								{ "value": "\"bottom left right\"" },
								{ "value": "\"bottom left top\"" },
								{ "value": "\"bottom left bottom\"" },
								{ "value": "\"bottom right left\"" },
								{ "value": "\"bottom right right\"" },
								{ "value": "\"bottom right top\"" },
								{ "value": "\"bottom right bottom\"" }
							]
						}
					},
					"flip": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Specifies whether the popover should flip across its axis if there isn't\nspace for it in the normal placement.\nWhen the using a 'top' placement, the popover will switch to a 'bottom'\nplacement. When using a 'left' placement, the popover will switch to a\n`right' placement.\nThe popover will retain its alignment of 'start' or 'end' when flipping.",
						"name": "flip",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"placement": {
						"defaultValue": { "value": "'bottom-start'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Used to specify the popover's position with respect to its anchor.",
						"name": "placement",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "PopoverPlacement",
							"value": [
								{ "value": "\"left\"" },
								{ "value": "\"right\"" },
								{ "value": "\"top\"" },
								{ "value": "\"overlay\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"left-end\"" },
								{ "value": "\"left-start\"" },
								{ "value": "\"right-end\"" },
								{ "value": "\"right-start\"" },
								{ "value": "\"top-end\"" },
								{ "value": "\"top-start\"" },
								{ "value": "\"bottom-end\"" },
								{ "value": "\"bottom-start\"" }
							]
						}
					},
					"getAnchorRect": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function returning the same value as the one expected by the `anchorRect`\nprop, used to specify a dynamic popover position.\n@deprecated",
						"name": "getAnchorRect",
						"required": false,
						"tags": {},
						"type": { "name": "((fallbackReferenceElement: Element | null) => DomRectWithOwnerDocument)" }
					},
					"resize": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts the size of the popover to prevent its contents from going out of\nview when meeting the viewport edges.\n_Note: The `resize` and `shift` props are not intended to be used together.\nEnabling both can cause unexpected behavior._",
						"name": "resize",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"expandOnMobile": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Show the popover fullscreen on mobile viewports.",
						"name": "expandOnMobile",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"focusOnMount": {
						"defaultValue": { "value": "'firstElement'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines focus behavior when the popover mounts.\n\n- `\"firstElement\"` focuses the first tabbable element within.\n- `\"firstInputElement\"` focuses the first value control within.\n- `true` focuses the element itself.\n- `false` does nothing and _should not be used unless an accessible\n   substitute behavior is implemented_.",
						"name": "focusOnMount",
						"required": false,
						"tags": {},
						"type": { "name": "Mode" }
					},
					"headerTitle": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Used to customize the header text shown when the popover is toggled to\nfullscreen on mobile viewports (see the `expandOnMobile` prop).",
						"name": "headerTitle",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"__unstableSlotName": {
						"defaultValue": { "value": "'Popover'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The name of the Slot in which the popover should be rendered. It should\nbe also passed to the corresponding `PopoverSlot` component.",
						"name": "__unstableSlotName",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"constrainTabbing": {
						"defaultValue": { "value": "`focusOnMount` !== false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines whether tabbing is constrained to within the popover,\npreventing keyboard focus from leaving the popover content without\nexplicit focus elsewhere, or whether the popover remains part of the wider\ntab order. If no value is passed, it will be derived from `focusOnMount`.",
						"name": "constrainTabbing",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onFocusOutside": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A callback invoked when the focus leaves the opened popover. This should\nonly be provided in advanced use-cases when a popover should close under\nspecific circumstances (for example, if the new `document.activeElement`\nis content of or otherwise controlling popover visibility).\n\nWhen not provided, the `onClose` callback will be called instead.",
						"name": "onFocusOutside",
						"required": false,
						"tags": {},
						"type": { "name": "((event: SyntheticEvent<Element, Event>) => void)" }
					},
					"noArrow": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Used to show/hide the arrow that points at the popover's anchor.",
						"name": "noArrow",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__unstableForcePosition": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Prevent the popover from flipping and resizing when meeting the viewport\nedges. _Note: this prop is deprecated. Instead, provide use the individual\n`flip` and `resize` props._\n@deprecated",
						"name": "__unstableForcePosition",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"anchorRect": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An object extending a `DOMRect` with an additional optional `ownerDocument`\nproperty, used to specify a fixed popover position.\n@deprecated",
						"name": "anchorRect",
						"required": false,
						"tags": {},
						"type": { "name": "DomRectWithOwnerDocument" }
					},
					"anchorRef": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Used to specify a fixed popover position. It can be an `Element`, a React\nreference to an `element`, an object with a `top` and a `bottom` properties\n(both pointing to elements), or a `range`.\n@deprecated",
						"name": "anchorRef",
						"required": false,
						"tags": {},
						"type": { "name": "Element | PopoverAnchorRefReference | PopoverAnchorRefTopBottom | Range" }
					},
					"isAlternate": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Used to enable a different visual style for the popover.\n_Note: this prop is deprecated. Use the `variant` prop with the\n'toolbar' value instead._\n@deprecated",
						"name": "isAlternate",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/popover/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, AVAILABLE_PLACEMENTS, meta, PopoverWithAnchor, Default, Unstyled, AllPlacements, DynamicHeight, WithSlotOutsideIframe, WithCloseHandlers;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_button();
		init_popover();
		init_utils();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/popover/stories/index.story.tsx";
		AVAILABLE_PLACEMENTS = [
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
		];
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-components/Overlays/Popover",
			id: "components-popover",
			component: Popover,
			subcomponents: { "Popover.Slot": Popover.Slot },
			argTypes: {
				anchor: { control: false },
				anchorRef: { control: false },
				anchorRect: { control: false },
				children: { control: false },
				focusOnMount: {
					control: { type: "select" },
					options: [
						"firstElement",
						true,
						false
					]
				},
				getAnchorRect: { control: false },
				onClose: { action: "onClose" },
				onFocusOutside: { action: "onFocusOutside" },
				__unstableSlotName: { control: false }
			},
			parameters: {
				controls: { expanded: true },
				componentStatus: {
					status: "recommended",
					whereUsed: "global"
				}
			}
		};
		PopoverWithAnchor = (args) => {
			const [popoverAnchor, setPopoverAnchor] = (0, import_react.useState)(null);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					height: "200px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center"
				},
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					style: {
						padding: "8px",
						background: "salmon"
					},
					ref: setPopoverAnchor,
					children: "Popover's anchor"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 71,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popover, {
					...args,
					anchor: popoverAnchor
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 77,
					columnNumber: 4
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 63,
				columnNumber: 3
			}, void 0);
		};
		Default = {
			decorators: [(Story) => {
				const [isVisible, setIsVisible] = (0, import_react.useState)(false);
				const buttonRef = (0, import_react.useRef)(void 0);
				const toggleVisible = (event) => {
					if (buttonRef.current && event.target !== buttonRef.current) return;
					setIsVisible((state) => !state);
				};
				(0, import_react.useEffect)(() => {
					buttonRef.current?.scrollIntoView?.({
						block: "center",
						inline: "center"
					});
				}, []);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						width: "300vw",
						height: "300vh",
						display: "flex",
						alignItems: "center",
						justifyContent: "center"
					},
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						__next40pxDefaultSize: true,
						variant: "secondary",
						onClick: toggleVisible,
						ref: buttonRef,
						children: ["Toggle Popover", isVisible && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Story, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 117,
							columnNumber: 22
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 110,
						columnNumber: 6
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 101,
					columnNumber: 5
				}, void 0);
			}],
			args: { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					width: "280px",
					whiteSpace: "normal"
				},
				children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 125,
				columnNumber: 4
			}, void 0) }
		};
		Unstyled = {
			...Default,
			args: {
				...Default.args,
				variant: "unstyled"
			}
		};
		AllPlacements = {
			render: ({ children, ...args }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					minWidth: "600px",
					marginLeft: "auto",
					marginRight: "auto"
				},
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Resize / scroll the viewport to test the behavior of the popovers when they reach the viewport boundaries." }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 153,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: AVAILABLE_PLACEMENTS.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PopoverWithAnchor, {
					placement: p,
					...args,
					resize: p === "overlay" ? true : args.resize,
					children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: [
						"(placement: ",
						p,
						")"
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 167,
						columnNumber: 8
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 166,
						columnNumber: 7
					}, void 0)]
				}, p, true, {
					fileName: _jsxFileName,
					lineNumber: 159,
					columnNumber: 6
				}, void 0)) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 157,
					columnNumber: 4
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 146,
				columnNumber: 3
			}, void 0),
			parameters: {
				a11y: { test: "todo" },
				controls: { exclude: ["placement", "position"] }
			},
			args: {
				...Default.args,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						width: "280px",
						whiteSpace: "normal"
					},
					children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 187,
					columnNumber: 4
				}, void 0),
				noArrow: false,
				offset: 10,
				resize: false,
				flip: false
			}
		};
		DynamicHeight = {
			decorators: [(Story) => {
				const [height, setHeight] = (0, import_react.useState)(200);
				const increase = () => setHeight(height + 100);
				const decrease = () => setHeight(height - 100);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: { padding: "20px" },
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							__next40pxDefaultSize: true,
							variant: "primary",
							onClick: increase,
							style: { marginRight: "20px" },
							children: "Increase Size"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 209,
							columnNumber: 7
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							__next40pxDefaultSize: true,
							variant: "primary",
							onClick: decrease,
							children: "Decrease Size"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 220,
							columnNumber: 7
						}, void 0)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 208,
							columnNumber: 6
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "When the height of the popover exceeds the available space in the canvas, a scrollbar inside the popover should appear." }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 229,
							columnNumber: 6
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { children: `.components-popover { --dynamic-height: ${height}px; }` }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 236,
							columnNumber: 7
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Story, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 237,
							columnNumber: 7
						}, void 0)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 235,
							columnNumber: 6
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 207,
					columnNumber: 5
				}, void 0);
			}],
			args: {
				...Default.args,
				animate: false,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						height: "var(--dynamic-height)",
						background: "#eee",
						padding: "20px"
					},
					children: "Content with dynamic height"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 247,
					columnNumber: 4
				}, void 0)
			}
		};
		WithSlotOutsideIframe = {
			render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PopoverInsideIframeRenderedInExternalSlot, { ...args }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 262,
				columnNumber: 3
			}, void 0),
			args: { ...Default.args }
		};
		WithCloseHandlers = {
			render: function WithCloseHandlersStory(args) {
				const [isVisible, setIsVisible] = (0, import_react.useState)(false);
				const buttonRef = (0, import_react.useRef)(null);
				const toggleVisible = (event) => {
					if (buttonRef.current && event.target !== buttonRef.current) return;
					setIsVisible((prev) => !prev);
				};
				const handleClose = () => {
					args.onClose?.();
					setIsVisible(false);
				};
				const handleFocusOutside = (e) => {
					args.onFocusOutside?.(e);
					setIsVisible(false);
				};
				(0, import_react.useEffect)(() => {
					buttonRef.current?.scrollIntoView({
						block: "center",
						inline: "center"
					});
				}, []);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						width: "300vw",
						height: "300vh",
						display: "flex",
						alignItems: "center",
						justifyContent: "center"
					},
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						__next40pxDefaultSize: true,
						variant: "secondary",
						onClick: toggleVisible,
						ref: buttonRef,
						children: ["Toggle Popover", isVisible && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popover, {
							...args,
							onClose: handleClose,
							onFocusOutside: handleFocusOutside,
							children: args.children
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 316,
							columnNumber: 7
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 308,
						columnNumber: 5
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 299,
					columnNumber: 4
				}, this);
			},
			args: {
				...Default.args,
				focusOnMount: true,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						width: "280px",
						whiteSpace: "normal"
					},
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Clicking outside triggers the onFocusOutside callback prop." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 333,
						columnNumber: 5
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Pressing the Escape key triggers the onClose callback prop." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 336,
						columnNumber: 5
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 332,
					columnNumber: 4
				}, void 0)
			}
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  decorators: [Story => {\n    const [isVisible, setIsVisible] = useState(false);\n    const buttonRef = useRef<HTMLButtonElement>(undefined);\n    const toggleVisible = (event: React.MouseEvent) => {\n      if (buttonRef.current && event.target !== buttonRef.current) {\n        return;\n      }\n      setIsVisible(state => !state);\n    };\n    useEffect(() => {\n      buttonRef.current?.scrollIntoView?.({\n        block: 'center',\n        inline: 'center'\n      });\n    }, []);\n    return <div style={{\n      width: '300vw',\n      height: '300vh',\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center'\n    }}>\n                    <Button __next40pxDefaultSize variant=\"secondary\" onClick={toggleVisible} ref={buttonRef}>\n                        Toggle Popover\n                        {isVisible && <Story />}\n                    </Button>\n                </div>;\n  }],\n  args: {\n    children: <div style={{\n      width: '280px',\n      whiteSpace: 'normal'\n    }}>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n                enim ad minim veniam, quis nostrud exercitation ullamco laboris\n                nisi ut aliquip ex ea commodo consequat.\n            </div>\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		Unstyled.parameters = {
			...Unstyled.parameters,
			docs: {
				...Unstyled.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    variant: 'unstyled'\n  }\n}",
					...Unstyled.parameters?.docs?.source
				}
			}
		};
		AllPlacements.parameters = {
			...AllPlacements.parameters,
			docs: {
				...AllPlacements.parameters?.docs,
				source: {
					originalSource: "{\n  render: ({\n    children,\n    ...args\n  }) => <div style={{\n    minWidth: '600px',\n    marginLeft: 'auto',\n    marginRight: 'auto'\n  }}>\n            <h2>\n                Resize / scroll the viewport to test the behavior of the\n                popovers when they reach the viewport boundaries.\n            </h2>\n            <div>\n                {AVAILABLE_PLACEMENTS.map(p => <PopoverWithAnchor key={p} placement={p} {...args} resize={p === 'overlay' ? true : args.resize}>\n                        {children}\n                        <div>\n                            <small>(placement: {p})</small>\n                        </div>\n                    </PopoverWithAnchor>)}\n            </div>\n        </div>,\n  // Excluding placement and position since they all possible values\n  // are passed directly in code.\n  parameters: {\n    // FIXME: All Placements: scrollable demo region is not keyboard-accessible (scrollable-region-focusable).\n    // See: https://github.com/WordPress/gutenberg/issues/81596\n    a11y: {\n      test: 'todo'\n    },\n    controls: {\n      exclude: ['placement', 'position']\n    }\n  },\n  args: {\n    ...Default.args,\n    children: <div style={{\n      width: '280px',\n      whiteSpace: 'normal'\n    }}>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n                eiusmod tempor incididunt ut labore et dolore magna aliqua.\n            </div>,\n    noArrow: false,\n    offset: 10,\n    resize: false,\n    flip: false\n  }\n}",
					...AllPlacements.parameters?.docs?.source
				}
			}
		};
		DynamicHeight.parameters = {
			...DynamicHeight.parameters,
			docs: {
				...DynamicHeight.parameters?.docs,
				source: {
					originalSource: "{\n  decorators: [Story => {\n    const [height, setHeight] = useState(200);\n    const increase = () => setHeight(height + 100);\n    const decrease = () => setHeight(height - 100);\n    return <div style={{\n      padding: '20px'\n    }}>\n                    <div>\n                        <Button __next40pxDefaultSize variant=\"primary\" onClick={increase} style={{\n          marginRight: '20px'\n        }}>\n                            Increase Size\n                        </Button>\n\n                        <Button __next40pxDefaultSize variant=\"primary\" onClick={decrease}>\n                            Decrease Size\n                        </Button>\n                    </div>\n\n                    <p>\n                        When the height of the popover exceeds the available\n                        space in the canvas, a scrollbar inside the popover\n                        should appear.\n                    </p>\n\n                    <div>\n                        <style>{`.components-popover { --dynamic-height: ${height}px; }`}</style>\n                        <Story />\n                    </div>\n                </div>;\n  }],\n  args: {\n    ...Default.args,\n    animate: false,\n    children: <div style={{\n      height: 'var(--dynamic-height)',\n      background: '#eee',\n      padding: '20px'\n    }}>\n                Content with dynamic height\n            </div>\n  }\n}",
					...DynamicHeight.parameters?.docs?.source
				}
			}
		};
		WithSlotOutsideIframe.parameters = {
			...WithSlotOutsideIframe.parameters,
			docs: {
				...WithSlotOutsideIframe.parameters?.docs,
				source: {
					originalSource: "{\n  render: args => <PopoverInsideIframeRenderedInExternalSlot {...args} />,\n  args: {\n    ...Default.args\n  }\n}",
					...WithSlotOutsideIframe.parameters?.docs?.source
				}
			}
		};
		WithCloseHandlers.parameters = {
			...WithCloseHandlers.parameters,
			docs: {
				...WithCloseHandlers.parameters?.docs,
				source: {
					originalSource: "{\n  render: function WithCloseHandlersStory(args) {\n    const [isVisible, setIsVisible] = useState(false);\n    const buttonRef = useRef<HTMLButtonElement>(null);\n    const toggleVisible = (event: React.MouseEvent) => {\n      if (buttonRef.current && event.target !== buttonRef.current) {\n        return;\n      }\n      setIsVisible(prev => !prev);\n    };\n    const handleClose = () => {\n      args.onClose?.();\n      setIsVisible(false);\n    };\n    const handleFocusOutside = (e: React.SyntheticEvent) => {\n      args.onFocusOutside?.(e);\n      setIsVisible(false);\n    };\n    useEffect(() => {\n      buttonRef.current?.scrollIntoView({\n        block: 'center',\n        inline: 'center'\n      });\n    }, []);\n    return <div style={{\n      width: '300vw',\n      height: '300vh',\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center'\n    }}>\n                <Button __next40pxDefaultSize variant=\"secondary\" onClick={toggleVisible} ref={buttonRef}>\n                    Toggle Popover\n                    {isVisible && <Popover {...args} onClose={handleClose} onFocusOutside={handleFocusOutside}>\n                            {args.children}\n                        </Popover>}\n                </Button>\n            </div>;\n  },\n  args: {\n    ...Default.args,\n    focusOnMount: true,\n    children: <div style={{\n      width: '280px',\n      whiteSpace: 'normal'\n    }}>\n                <p>\n                    Clicking outside triggers the onFocusOutside callback prop.\n                </p>\n                <p>\n                    Pressing the Escape key triggers the onClose callback prop.\n                </p>\n            </div>\n  }\n}",
					...WithCloseHandlers.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { AllPlacements, Default, DynamicHeight, Unstyled, WithCloseHandlers, WithSlotOutsideIframe, meta as default };
