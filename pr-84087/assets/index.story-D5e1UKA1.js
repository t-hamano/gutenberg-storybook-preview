import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { o as isRTL, t as init_build_module } from "./build-module-v04us4E2.js";
import { n as useResizeObserver, t as init_use_resize_observer } from "./use-resize-observer-C4Y8OHRi.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as init_lib, t as Resizable } from "./lib-DrMtfNtB.js";
import { i as init_polymorphic_element, r as PolymorphicElement } from "./component-CkY7eURU.js";
import { n as init_component, t as Text } from "./component-D1HS87lF.js";
//#region ../packages/components/src/resizable-box/resize-tooltip/utils.ts
/**
* Custom hook that manages resize listener events. It also provides a label
* based on current resize width x height values.
*
* @param props
* @param props.axis        Only shows the label corresponding to the axis.
* @param props.fadeTimeout Duration (ms) before deactivating the resize label.
* @param props.onResize    Callback when a resize occurs. Provides { width, height } callback.
* @param props.position    Adjusts label value.
* @param props.showPx      Whether to add `PX` to the label.
*
* @return Properties for hook.
*/
function useResizeLabel({ axis, fadeTimeout = 180, onResize = noop$1, position = POSITIONS.bottom, showPx = false }) {
	const [resizeListener, sizes] = useResizeObserver();
	const isAxisControlled = !!axis;
	const [moveX, setMoveX] = (0, import_react.useState)(false);
	const [moveY, setMoveY] = (0, import_react.useState)(false);
	const { width, height } = sizes;
	const heightRef = (0, import_react.useRef)(height);
	const widthRef = (0, import_react.useRef)(width);
	const moveTimeoutRef = (0, import_react.useRef)(void 0);
	const debounceUnsetMoveXY = (0, import_react.useCallback)(() => {
		const unsetMoveXY = () => {
			if (isAxisControlled) return;
			setMoveX(false);
			setMoveY(false);
		};
		if (moveTimeoutRef.current) window.clearTimeout(moveTimeoutRef.current);
		moveTimeoutRef.current = window.setTimeout(unsetMoveXY, fadeTimeout);
	}, [fadeTimeout, isAxisControlled]);
	(0, import_react.useEffect)(() => {
		if (!(width !== null || height !== null)) return;
		const didWidthChange = width !== widthRef.current;
		const didHeightChange = height !== heightRef.current;
		if (!didWidthChange && !didHeightChange) return;
		if (width && !widthRef.current && height && !heightRef.current) {
			widthRef.current = width;
			heightRef.current = height;
			return;
		}
		if (didWidthChange) {
			setMoveX(true);
			widthRef.current = width;
		}
		if (didHeightChange) {
			setMoveY(true);
			heightRef.current = height;
		}
		onResize({
			width,
			height
		});
		debounceUnsetMoveXY();
	}, [
		width,
		height,
		onResize,
		debounceUnsetMoveXY
	]);
	return {
		label: getSizeLabel({
			axis,
			height,
			moveX,
			moveY,
			position,
			showPx,
			width
		}),
		resizeListener
	};
}
/**
* Gets the resize label based on width and height values (as well as recent changes).
*
* @param props
* @param props.axis     Only shows the label corresponding to the axis.
* @param props.height   Height value.
* @param props.moveX    Recent width (x axis) changes.
* @param props.moveY    Recent width (y axis) changes.
* @param props.position Adjusts label value.
* @param props.showPx   Whether to add `PX` to the label.
* @param props.width    Width value.
*
* @return The rendered label.
*/
function getSizeLabel({ axis, height, moveX = false, moveY = false, position = POSITIONS.bottom, showPx = false, width }) {
	if (!moveX && !moveY) return;
	if (position === POSITIONS.corner) return `${width} x ${height}`;
	const labelUnit = showPx ? " px" : "";
	if (axis) {
		if (axis === "x" && moveX) return `${width}${labelUnit}`;
		if (axis === "y" && moveY) return `${height}${labelUnit}`;
	}
	if (moveX && moveY) return `${width} x ${height}`;
	if (moveX) return `${width}${labelUnit}`;
	if (moveY) return `${height}${labelUnit}`;
}
var noop$1, POSITIONS;
function init_utils() {
	return (init_utils = __esmMin((() => {
		init_react();
		init_use_resize_observer();
		noop$1 = () => {};
		POSITIONS = {
			bottom: "bottom",
			corner: "corner"
		};
	})))();
}
//#endregion
//#region ../packages/components/src/resizable-box/resize-tooltip/style.module.scss
var root, tooltip, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		root = "_root_chkrw_46";
		tooltip = "_tooltip_chkrw_53";
		style_module_default = {
			root,
			"tooltip-wrapper": "_tooltip-wrapper_chkrw_53",
			tooltip,
			"label-text": "_label-text_chkrw_74"
		};
	})))();
}
//#endregion
//#region ../packages/components/src/resizable-box/resize-tooltip/label.tsx
function Label({ label, position = POSITIONS.corner, zIndex = 1e3, ...props }, ref) {
	const showLabel = !!label;
	const isBottom = position === POSITIONS.bottom;
	const isCorner = position === POSITIONS.corner;
	if (!showLabel) return null;
	let style = {
		opacity: showLabel ? 1 : void 0,
		zIndex
	};
	let labelStyle = {};
	if (isBottom) {
		style = {
			...style,
			position: "absolute",
			bottom: -10,
			left: "50%",
			transform: "translate(-50%, 0)"
		};
		labelStyle = { transform: `translate(0, 100%)` };
	}
	if (isCorner) style = {
		...style,
		position: "absolute",
		top: CORNER_OFFSET,
		right: isRTL() ? void 0 : CORNER_OFFSET,
		left: isRTL() ? CORNER_OFFSET : void 0
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("div", {
		"aria-hidden": "true",
		className: clsx("components-resizable-tooltip__tooltip-wrapper", style_module_default["tooltip-wrapper"]),
		ref,
		style,
		...props,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("div", {
			className: clsx("components-resizable-tooltip__tooltip", style_module_default.tooltip),
			style: labelStyle,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Text, {
				as: "span",
				className: style_module_default["label-text"],
				children: label
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 84,
				columnNumber: 5
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 77,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 67,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$3, _jsxFileName$3, CORNER_OFFSET, ForwardedComponent$1;
function init_label() {
	return (init_label = __esmMin((() => {
		init_clsx();
		init_react();
		init_build_module();
		init_component();
		init_utils();
		init_style_module();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/resizable-box/resize-tooltip/label.tsx";
		CORNER_OFFSET = 4;
		ForwardedComponent$1 = (0, import_react.forwardRef)(Label);
		try {
			ForwardedComponent$1.__docgenInfo = {
				"description": "",
				"displayName": "label",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/resizable-box/resize-tooltip/label.tsx",
				"methods": [],
				"props": {
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/resizable-box/resize-tooltip/label.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "label",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"position": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/resizable-box/resize-tooltip/label.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "position",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Position",
							"value": [{ "value": "\"bottom\"" }, { "value": "\"corner\"" }]
						}
					},
					"zIndex": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/resizable-box/resize-tooltip/label.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "zIndex",
						"required": true,
						"tags": {},
						"type": { "name": "number" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/resizable-box/resize-tooltip/index.tsx
function ResizeTooltip({ as = "div", axis, className, fadeTimeout = 180, isVisible = true, labelRef, onResize = noop, position = POSITIONS.bottom, showPx = true, zIndex = 1e3, ...props }, ref) {
	const { label, resizeListener } = useResizeLabel({
		axis,
		fadeTimeout,
		onResize,
		showPx,
		position
	});
	if (!isVisible) return null;
	const classes = clsx("components-resize-tooltip", style_module_default.root, className);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(PolymorphicElement, {
		"aria-hidden": "true",
		as,
		...props,
		className: classes,
		ref,
		children: [resizeListener, /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(ForwardedComponent$1, {
			"aria-hidden": props["aria-hidden"],
			label,
			position,
			ref: labelRef,
			zIndex
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 65,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 57,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$2, _jsxFileName$2, noop, ForwardedComponent;
function init_resize_tooltip() {
	return (init_resize_tooltip = __esmMin((() => {
		init_clsx();
		init_react();
		init_polymorphic_element();
		init_label();
		init_utils();
		init_style_module();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/resizable-box/resize-tooltip/index.tsx";
		noop = () => {};
		ForwardedComponent = (0, import_react.forwardRef)(ResizeTooltip);
		try {
			ForwardedComponent.__docgenInfo = {
				"description": "",
				"displayName": "resizetooltip",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/resizable-box/resize-tooltip/index.tsx",
				"methods": [],
				"props": {
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/resizable-box/resize-tooltip/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "as",
						"required": false,
						"tags": {},
						"type": { "name": "ElementType" }
					},
					"axis": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/resizable-box/resize-tooltip/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "axis",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Axis",
							"value": [{ "value": "\"x\"" }, { "value": "\"y\"" }]
						}
					},
					"fadeTimeout": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/resizable-box/resize-tooltip/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "fadeTimeout",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"isVisible": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/resizable-box/resize-tooltip/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "isVisible",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"labelRef": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/resizable-box/resize-tooltip/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "labelRef",
						"required": false,
						"tags": {},
						"type": { "name": "Ref<HTMLDivElement>" }
					},
					"onResize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/resizable-box/resize-tooltip/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "onResize",
						"required": false,
						"tags": {},
						"type": { "name": "((data: { width: number | null; height: number | null; }) => void)" }
					},
					"position": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/resizable-box/resize-tooltip/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "position",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Position",
							"value": [{ "value": "\"bottom\"" }, { "value": "\"corner\"" }]
						}
					},
					"showPx": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/resizable-box/resize-tooltip/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "showPx",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"zIndex": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/resizable-box/resize-tooltip/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "zIndex",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/resizable-box/index.tsx
function UnforwardedResizableBox({ className, children, showHandle = true, __experimentalShowTooltip: showTooltip = false, __experimentalTooltipProps: tooltipProps = {}, ...props }, ref) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Resizable, {
		className: clsx("components-resizable-box__container", showHandle && "has-show-handle", className),
		handleComponent: Object.fromEntries(Object.keys(HANDLE_CLASSES).map((key) => [key, /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", { tabIndex: -1 }, key, false, {
			fileName: _jsxFileName$1,
			lineNumber: 110,
			columnNumber: 6
		}, this)])),
		handleClasses: HANDLE_CLASSES,
		handleStyles: HANDLE_STYLES,
		ref,
		...props,
		children: [children, showTooltip && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ForwardedComponent, { ...tooltipProps }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 119,
			columnNumber: 21
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 97,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, HANDLE_CLASS_NAME, SIDE_HANDLE_CLASS_NAME, CORNER_HANDLE_CLASS_NAME, HANDLE_CLASSES, HANDLE_STYLES_OVERRIDES, HANDLE_STYLES, ResizableBox;
function init_resizable_box() {
	return (init_resizable_box = __esmMin((() => {
		init_react();
		init_clsx();
		init_lib();
		init_resize_tooltip();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/resizable-box/index.tsx";
		HANDLE_CLASS_NAME = "components-resizable-box__handle";
		SIDE_HANDLE_CLASS_NAME = "components-resizable-box__side-handle";
		CORNER_HANDLE_CLASS_NAME = "components-resizable-box__corner-handle";
		HANDLE_CLASSES = {
			top: clsx(HANDLE_CLASS_NAME, SIDE_HANDLE_CLASS_NAME, "components-resizable-box__handle-top"),
			right: clsx(HANDLE_CLASS_NAME, SIDE_HANDLE_CLASS_NAME, "components-resizable-box__handle-right"),
			bottom: clsx(HANDLE_CLASS_NAME, SIDE_HANDLE_CLASS_NAME, "components-resizable-box__handle-bottom"),
			left: clsx(HANDLE_CLASS_NAME, SIDE_HANDLE_CLASS_NAME, "components-resizable-box__handle-left"),
			topLeft: clsx(HANDLE_CLASS_NAME, CORNER_HANDLE_CLASS_NAME, "components-resizable-box__handle-top", "components-resizable-box__handle-left"),
			topRight: clsx(HANDLE_CLASS_NAME, CORNER_HANDLE_CLASS_NAME, "components-resizable-box__handle-top", "components-resizable-box__handle-right"),
			bottomRight: clsx(HANDLE_CLASS_NAME, CORNER_HANDLE_CLASS_NAME, "components-resizable-box__handle-bottom", "components-resizable-box__handle-right"),
			bottomLeft: clsx(HANDLE_CLASS_NAME, CORNER_HANDLE_CLASS_NAME, "components-resizable-box__handle-bottom", "components-resizable-box__handle-left")
		};
		HANDLE_STYLES_OVERRIDES = {
			width: void 0,
			height: void 0,
			top: void 0,
			right: void 0,
			bottom: void 0,
			left: void 0
		};
		HANDLE_STYLES = {
			top: HANDLE_STYLES_OVERRIDES,
			right: HANDLE_STYLES_OVERRIDES,
			bottom: HANDLE_STYLES_OVERRIDES,
			left: HANDLE_STYLES_OVERRIDES,
			topLeft: HANDLE_STYLES_OVERRIDES,
			topRight: HANDLE_STYLES_OVERRIDES,
			bottomRight: HANDLE_STYLES_OVERRIDES,
			bottomLeft: HANDLE_STYLES_OVERRIDES
		};
		ResizableBox = (0, import_react.forwardRef)(UnforwardedResizableBox);
		ResizableBox.displayName = "ResizableBox";
		try {
			ResizableBox.__docgenInfo = {
				"description": "`ResizableBox` wraps content in a container with draggable handles, letting\nusers interactively resize it along one or more edges or corners.",
				"displayName": "ResizableBox",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/resizable-box/index.tsx",
				"methods": [],
				"props": {
					"showHandle": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/resizable-box/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "showHandle",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__experimentalShowTooltip": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/resizable-box/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "__experimentalShowTooltip",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__experimentalTooltipProps": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/resizable-box/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "__experimentalTooltipProps",
						"required": false,
						"tags": {},
						"type": { "name": "(Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, \"ref\"> & { as?: ElementType; ... 9 more ...; zIndex?: number; } & RefAttributes<...>) | undefined" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/resizable-box/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default, DisabledDirections, WithResizeTooltip;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_resizable_box();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/resizable-box/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-components/Utilities/ResizableBox",
			id: "components-resizablebox",
			component: ResizableBox,
			argTypes: {
				children: { control: false },
				enable: { control: "object" },
				onResizeStop: { action: "onResizeStop" },
				__experimentalShowTooltip: { control: "boolean" }
			},
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "global"
				}
			}
		};
		Template = ({ onResizeStop, ...props }) => {
			const [{ height, width }, setAttributes] = (0, import_react.useState)({
				height: 200,
				width: 400
			});
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResizableBox, {
				...props,
				size: {
					height,
					width
				},
				onResizeStop: (event, direction, elt, delta) => {
					onResizeStop?.(event, direction, elt, delta);
					setAttributes({
						height: height + delta.height,
						width: width + delta.width
					});
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 37,
				columnNumber: 3
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			style: {
				background: "#eee",
				display: "flex",
				height: "100%",
				width: "100%",
				alignItems: "center",
				justifyContent: "center"
			},
			children: "Resize"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 57,
			columnNumber: 3
		}, void 0) };
		DisabledDirections = Template.bind({});
		DisabledDirections.args = {
			...Default.args,
			enable: {
				top: false,
				right: true,
				bottom: true,
				left: false,
				topRight: false,
				bottomRight: true,
				bottomLeft: false,
				topLeft: false
			}
		};
		WithResizeTooltip = Template.bind({});
		WithResizeTooltip.args = {
			...Default.args,
			__experimentalShowTooltip: true
		};
		try {
			DisabledDirections.__docgenInfo = {
				"description": "The `enable` prop can be used to disable resizing in specific directions.",
				"displayName": "DisabledDirections",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/resizable-box/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithResizeTooltip.__docgenInfo = {
				"description": "The resize size label is hidden by default. Enable it with\n`__experimentalShowTooltip`, or toggle that control in Storybook.",
				"displayName": "WithResizeTooltip",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/resizable-box/stories/index.story.tsx",
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
					originalSource: "({\n  onResizeStop,\n  ...props\n}) => {\n  const [{\n    height,\n    width\n  }, setAttributes] = useState({\n    height: 200,\n    width: 400\n  });\n  return <ResizableBox {...props} size={{\n    height,\n    width\n  }} onResizeStop={(event, direction, elt, delta) => {\n    onResizeStop?.(event, direction, elt, delta);\n    setAttributes({\n      height: height + delta.height,\n      width: width + delta.width\n    });\n  }} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		DisabledDirections.parameters = {
			...DisabledDirections.parameters,
			docs: {
				...DisabledDirections.parameters?.docs,
				source: {
					originalSource: "({\n  onResizeStop,\n  ...props\n}) => {\n  const [{\n    height,\n    width\n  }, setAttributes] = useState({\n    height: 200,\n    width: 400\n  });\n  return <ResizableBox {...props} size={{\n    height,\n    width\n  }} onResizeStop={(event, direction, elt, delta) => {\n    onResizeStop?.(event, direction, elt, delta);\n    setAttributes({\n      height: height + delta.height,\n      width: width + delta.width\n    });\n  }} />;\n}",
					...DisabledDirections.parameters?.docs?.source
				},
				description: {
					story: "The `enable` prop can be used to disable resizing in specific directions.",
					...DisabledDirections.parameters?.docs?.description
				}
			}
		};
		WithResizeTooltip.parameters = {
			...WithResizeTooltip.parameters,
			docs: {
				...WithResizeTooltip.parameters?.docs,
				source: {
					originalSource: "({\n  onResizeStop,\n  ...props\n}) => {\n  const [{\n    height,\n    width\n  }, setAttributes] = useState({\n    height: 200,\n    width: 400\n  });\n  return <ResizableBox {...props} size={{\n    height,\n    width\n  }} onResizeStop={(event, direction, elt, delta) => {\n    onResizeStop?.(event, direction, elt, delta);\n    setAttributes({\n      height: height + delta.height,\n      width: width + delta.width\n    });\n  }} />;\n}",
					...WithResizeTooltip.parameters?.docs?.source
				},
				description: {
					story: "The resize size label is hidden by default. Enable it with\n`__experimentalShowTooltip`, or toggle that control in Storybook.",
					...WithResizeTooltip.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, DisabledDirections, WithResizeTooltip, meta as default };
