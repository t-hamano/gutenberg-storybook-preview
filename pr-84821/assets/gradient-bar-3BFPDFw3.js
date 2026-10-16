import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { n as plus_default } from "./plus-BflIATCD.js";
import { o as init_colord, r as A } from "./names-C15GzMmJ.js";
import { n as init_component, t as VisuallyHidden } from "./component-DtWxfX7z.js";
import { n as init_component$1, t as HStack } from "./component-BAVSem4V.js";
import { n as init_button, t as Button } from "./button-BqvmAVeL.js";
import { c as LegacyAdapter, l as init_legacy_adapter, n as CustomColorPickerDropdown, r as init_color_palette } from "./color-palette-DAKQlc0r.js";
import { n as init_dropdown_content_wrapper, t as DropdownContentWrapper } from "./dropdown-content-wrapper-CakYyWtY.js";
import { r as init_build_module$1 } from "./library.story-CFsmdbdz.js";
//#region ../packages/components/src/custom-gradient-picker/gradient-bar/utils.ts
/**
* Clamps a number between 0 and 100.
*
* @param value Value to clamp.
*
* @return Value clamped between 0 and 100.
*/
function clampPercent(value) {
	return Math.max(0, Math.min(100, value));
}
/**
* Check if a control point is overlapping with another.
*
* @param value        Array of control points.
* @param initialIndex Index of the position to test.
* @param newPosition  New position of the control point.
* @param minDistance  Distance considered to be overlapping.
*
* @return True if the point is overlapping.
*/
function isOverlapping(value, initialIndex, newPosition, minDistance = 0) {
	const initialPosition = value[initialIndex].position;
	const minPosition = Math.min(initialPosition, newPosition);
	const maxPosition = Math.max(initialPosition, newPosition);
	return value.some(({ position }, index) => {
		return index !== initialIndex && (Math.abs(position - newPosition) < minDistance || minPosition < position && position < maxPosition);
	});
}
/**
* Adds a control point from an array and returns the new array.
*
* @param points   Array of control points.
* @param position Position to insert the new point.
* @param color    Color to update the control point at index.
*
* @return New array of control points.
*/
function addControlPoint(points, position, color) {
	const nextIndex = points.findIndex((point) => point.position > position);
	const newPoint = {
		color,
		position
	};
	const newPoints = points.slice();
	newPoints.splice(nextIndex - 1, 0, newPoint);
	return newPoints;
}
/**
* Removes a control point from an array and returns the new array.
*
* @param points Array of control points.
* @param index  Index to remove.
*
* @return New array of control points.
*/
function removeControlPoint(points, index) {
	return points.filter((_point, pointIndex) => {
		return pointIndex !== index;
	});
}
/**
* Updates a control point from an array and returns the new array.
*
* @param points   Array of control points.
* @param index    Index to update.
* @param newPoint New control point to replace the index.
*
* @return New array of control points.
*/
function updateControlPoint(points, index, newPoint) {
	const newValue = points.slice();
	newValue[index] = newPoint;
	return newValue;
}
/**
* Updates the position of a control point from an array and returns the new array.
*
* @param points      Array of control points.
* @param index       Index to update.
* @param newPosition Position to move the control point at index.
*
* @return New array of control points.
*/
function updateControlPointPosition(points, index, newPosition) {
	if (isOverlapping(points, index, newPosition)) return points;
	return updateControlPoint(points, index, {
		...points[index],
		position: newPosition
	});
}
/**
* Updates the position of a control point from an array and returns the new array.
*
* @param points   Array of control points.
* @param index    Index to update.
* @param newColor Color to update the control point at index.
*
* @return New array of control points.
*/
function updateControlPointColor(points, index, newColor) {
	return updateControlPoint(points, index, {
		...points[index],
		color: newColor
	});
}
/**
* Updates the position of a control point from an array and returns the new array.
*
* @param points   Array of control points.
* @param position Position of the color stop.
* @param newColor Color to update the control point at index.
*
* @return New array of control points.
*/
function updateControlPointColorByPosition(points, position, newColor) {
	return updateControlPointColor(points, points.findIndex((point) => point.position === position), newColor);
}
function getHorizontalRelativeGradientPosition(mouseXCoordinate, containerElement) {
	if (!containerElement) return;
	const { x, width } = containerElement.getBoundingClientRect();
	const absolutePositionValue = mouseXCoordinate - x;
	return Math.round(clampPercent(absolutePositionValue * 100 / width));
}
function init_utils() {
	return (init_utils = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/components/src/custom-gradient-picker/gradient-bar/control-points.tsx
function ControlPointButton({ isOpen, position, color, disablePositioning, ...additionalProps }) {
	const descriptionId = `components-custom-gradient-picker__control-point-button-description-${use_instance_id_default(ControlPointButton)}`;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(import_jsx_dev_runtime$1.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Button, {
		"aria-label": sprintf(__("Gradient control point at position %1$d%% with color code %2$s."), position, color),
		"aria-describedby": descriptionId,
		"aria-haspopup": "true",
		"aria-expanded": isOpen,
		__next40pxDefaultSize: true,
		className: clsx("components-custom-gradient-picker__control-point-button", { "is-active": isOpen }),
		...additionalProps
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 46,
		columnNumber: 4
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(VisuallyHidden, {
		id: descriptionId,
		children: disablePositioning ? __("Press the button to change the color.") : __("Use your left or right arrow keys or drag and drop with the mouse to change the gradient position. Press the button to change the color or remove the control point.")
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 67,
		columnNumber: 4
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 45,
		columnNumber: 3
	}, this);
}
function GradientColorPickerDropdown({ isRenderedInSidebar, className, ...props }) {
	const popoverProps = (0, import_react.useMemo)(() => ({
		placement: "bottom",
		offset: 8,
		resize: false
	}), []);
	const mergedClassName = clsx("components-custom-gradient-picker__control-point-dropdown", className);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(CustomColorPickerDropdown, {
		isRenderedInSidebar,
		popoverProps,
		className: mergedClassName,
		...props
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 103,
		columnNumber: 3
	}, this);
}
function ControlPoints({ disableRemove, disableAlpha, disablePositioning, gradientPickerDomRef, ignoreMarkerPosition, value: controlPoints, onChange, onStartControlPointChange, onStopControlPointChange, __experimentalIsRenderedInSidebar }) {
	const controlPointMoveStateRef = (0, import_react.useRef)(void 0);
	const onMouseMove = (event) => {
		if (controlPointMoveStateRef.current === void 0 || gradientPickerDomRef.current === null) return;
		const relativePosition = getHorizontalRelativeGradientPosition(event.clientX, gradientPickerDomRef.current);
		const { initialPosition, index, significantMoveHappened } = controlPointMoveStateRef.current;
		if (!significantMoveHappened && Math.abs(initialPosition - relativePosition) >= 5) controlPointMoveStateRef.current.significantMoveHappened = true;
		onChange(updateControlPointPosition(controlPoints, index, relativePosition));
	};
	const cleanEventListeners = () => {
		if (window && window.removeEventListener && controlPointMoveStateRef.current && controlPointMoveStateRef.current.listenersActivated) {
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("mouseup", cleanEventListeners);
			onStopControlPointChange();
			controlPointMoveStateRef.current.listenersActivated = false;
		}
	};
	const cleanEventListenersRef = (0, import_react.useRef)(void 0);
	cleanEventListenersRef.current = cleanEventListeners;
	(0, import_react.useEffect)(() => {
		return () => {
			cleanEventListenersRef.current?.();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(import_jsx_dev_runtime$1.Fragment, { children: controlPoints.map((point, index) => {
		const initialPosition = point?.position;
		return ignoreMarkerPosition !== initialPosition && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(GradientColorPickerDropdown, {
			isRenderedInSidebar: __experimentalIsRenderedInSidebar,
			onClose: onStopControlPointChange,
			renderToggle: ({ isOpen, onToggle }) => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ControlPointButton, {
				onClick: () => {
					if (controlPointMoveStateRef.current && controlPointMoveStateRef.current.significantMoveHappened) return;
					if (isOpen) onStopControlPointChange();
					else onStartControlPointChange();
					onToggle();
				},
				onMouseDown: () => {
					if (disablePositioning) return;
					if (window && window.addEventListener) {
						controlPointMoveStateRef.current = {
							initialPosition,
							index,
							significantMoveHappened: false,
							listenersActivated: true
						};
						onStartControlPointChange();
						window.addEventListener("mousemove", onMouseMove);
						window.addEventListener("mouseup", cleanEventListeners);
					}
				},
				onKeyDown: (event) => {
					if (disablePositioning) {
						if (event.code === "ArrowLeft" || event.code === "ArrowRight") event.stopPropagation();
						return;
					}
					if (event.code === "ArrowLeft") {
						event.stopPropagation();
						onChange(updateControlPointPosition(controlPoints, index, clampPercent(point.position - 10)));
					} else if (event.code === "ArrowRight") {
						event.stopPropagation();
						onChange(updateControlPointPosition(controlPoints, index, clampPercent(point.position + 10)));
					}
				},
				isOpen,
				position: point.position,
				color: point.color,
				disablePositioning
			}, index, false, {
				fileName: _jsxFileName$1,
				lineNumber: 195,
				columnNumber: 9
			}, this),
			renderContent: ({ onClose }) => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DropdownContentWrapper, {
				paddingSize: "none",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(LegacyAdapter, {
					enableAlpha: !disableAlpha,
					color: point.color,
					onChange: (color) => {
						onChange(updateControlPointColor(controlPoints, index, A(color).toRgbString()));
					}
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 291,
					columnNumber: 10
				}, this), !disableRemove && controlPoints.length > 2 && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(HStack, {
					className: "components-custom-gradient-picker__remove-control-point-wrapper",
					alignment: "center",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Button, {
						onClick: () => {
							onChange(removeControlPoint(controlPoints, index));
							onClose();
						},
						variant: "link",
						children: __("Remove Control Point")
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 312,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 308,
					columnNumber: 12
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 290,
				columnNumber: 9
			}, this),
			style: {
				left: `${point.position}%`,
				transform: "translateX( -50% )"
			}
		}, index, false, {
			fileName: _jsxFileName$1,
			lineNumber: 188,
			columnNumber: 7
		}, this);
	}) }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 183,
		columnNumber: 3
	}, this);
}
function InsertPoint({ value: controlPoints, onChange, onOpenInserter, onCloseInserter, insertPosition, disableAlpha, __experimentalIsRenderedInSidebar }) {
	const [alreadyInsertedPoint, setAlreadyInsertedPoint] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(GradientColorPickerDropdown, {
		isRenderedInSidebar: __experimentalIsRenderedInSidebar,
		className: "components-custom-gradient-picker__inserter",
		onClose: () => {
			onCloseInserter();
		},
		renderToggle: ({ isOpen, onToggle }) => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Button, {
			__next40pxDefaultSize: true,
			"aria-expanded": isOpen,
			"aria-haspopup": "true",
			onClick: () => {
				if (isOpen) onCloseInserter();
				else {
					setAlreadyInsertedPoint(false);
					onOpenInserter();
				}
				onToggle();
			},
			className: "components-custom-gradient-picker__insert-point-dropdown",
			icon: plus_default
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 362,
			columnNumber: 5
		}, this),
		renderContent: () => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DropdownContentWrapper, {
			paddingSize: "none",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(LegacyAdapter, {
				enableAlpha: !disableAlpha,
				onChange: (color) => {
					if (!alreadyInsertedPoint) {
						onChange(addControlPoint(controlPoints, insertPosition, A(color).toRgbString()));
						setAlreadyInsertedPoint(true);
					} else onChange(updateControlPointColorByPosition(controlPoints, insertPosition, A(color).toRgbString()));
				}
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 381,
				columnNumber: 6
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 380,
			columnNumber: 5
		}, this),
		style: insertPosition !== null ? {
			left: `${insertPosition}%`,
			transform: "translateX( -50% )"
		} : void 0
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 355,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_control_points() {
	return (init_control_points = __esmMin((() => {
		init_clsx();
		init_colord();
		init_use_instance_id();
		init_react();
		init_build_module();
		init_build_module$1();
		init_button();
		init_component$1();
		init_legacy_adapter();
		init_component();
		init_color_palette();
		init_utils();
		init_dropdown_content_wrapper();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/gradient-bar/control-points.tsx";
		ControlPoints.InsertPoint = InsertPoint;
		try {
			ControlPoints.__docgenInfo = {
				"description": "",
				"displayName": "ControlPoints",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/gradient-bar/control-points.tsx",
				"methods": [],
				"props": {
					"disableRemove": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "disableRemove",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disableAlpha": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "disableAlpha",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disablePositioning": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "disablePositioning",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"gradientPickerDomRef": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "gradientPickerDomRef",
						"required": true,
						"tags": {},
						"type": { "name": "RefObject<HTMLDivElement | null>" }
					},
					"ignoreMarkerPosition": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "ignoreMarkerPosition",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "value",
						"required": true,
						"tags": {},
						"type": { "name": "ControlPoint[]" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(controlPoints: ControlPoint[]) => void" }
					},
					"onStartControlPointChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "onStartControlPointChange",
						"required": true,
						"tags": {},
						"type": { "name": "() => void" }
					},
					"onStopControlPointChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "onStopControlPointChange",
						"required": true,
						"tags": {},
						"type": { "name": "() => void" }
					},
					"__experimentalIsRenderedInSidebar": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "__experimentalIsRenderedInSidebar",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			ControlPoints.InsertPoint.__docgenInfo = {
				"description": "",
				"displayName": "ControlPoints.InsertPoint",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/gradient-bar/control-points.tsx",
				"methods": [],
				"props": {
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "value",
						"required": true,
						"tags": {},
						"type": { "name": "ControlPoint[]" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(controlPoints: ControlPoint[]) => void" }
					},
					"onOpenInserter": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "onOpenInserter",
						"required": true,
						"tags": {},
						"type": { "name": "() => void" }
					},
					"onCloseInserter": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "onCloseInserter",
						"required": true,
						"tags": {},
						"type": { "name": "() => void" }
					},
					"insertPosition": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "insertPosition",
						"required": true,
						"tags": {},
						"type": { "name": "number" }
					},
					"disableAlpha": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "disableAlpha",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__experimentalIsRenderedInSidebar": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "__experimentalIsRenderedInSidebar",
						"required": true,
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
//#region ../packages/components/src/custom-gradient-picker/gradient-bar/index.tsx
function CustomGradientBar({ background, hasGradient, value: controlPoints, onChange, disableInserter = false, disableAlpha = false, disablePositioning = false, __experimentalIsRenderedInSidebar = false }) {
	const gradientMarkersContainerDomRef = (0, import_react.useRef)(null);
	const [gradientBarState, gradientBarStateDispatch] = (0, import_react.useReducer)(customGradientBarReducer, customGradientBarReducerInitialState);
	const onMouseEnterAndMove = (event) => {
		if (!gradientMarkersContainerDomRef.current) return;
		const insertPosition = getHorizontalRelativeGradientPosition(event.clientX, gradientMarkersContainerDomRef.current);
		if (controlPoints.some(({ position }) => {
			return Math.abs(insertPosition - position) < 10;
		})) {
			if (gradientBarState.id === "MOVING_INSERTER") gradientBarStateDispatch({ type: "STOP_INSERTER_MOVE" });
			return;
		}
		gradientBarStateDispatch({
			type: "MOVE_INSERTER",
			insertPosition
		});
	};
	const onMouseLeave = () => {
		gradientBarStateDispatch({ type: "STOP_INSERTER_MOVE" });
	};
	const isMovingInserter = gradientBarState.id === "MOVING_INSERTER";
	const isInsertingControlPoint = gradientBarState.id === "INSERTING_CONTROL_POINT";
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: clsx("components-custom-gradient-picker__gradient-bar", { "has-gradient": hasGradient }),
		onMouseEnter: onMouseEnterAndMove,
		onMouseMove: onMouseEnterAndMove,
		onMouseLeave,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "components-custom-gradient-picker__gradient-bar-background",
			style: {
				background,
				opacity: hasGradient ? 1 : .4
			}
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 134,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			ref: gradientMarkersContainerDomRef,
			className: "components-custom-gradient-picker__markers-container",
			children: [!disableInserter && (isMovingInserter || isInsertingControlPoint) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ControlPoints.InsertPoint, {
				__experimentalIsRenderedInSidebar,
				disableAlpha,
				insertPosition: gradientBarState.insertPosition,
				value: controlPoints,
				onChange,
				onOpenInserter: () => {
					gradientBarStateDispatch({ type: "OPEN_INSERTER" });
				},
				onCloseInserter: () => {
					gradientBarStateDispatch({ type: "CLOSE_INSERTER" });
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 147,
				columnNumber: 7
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ControlPoints, {
				__experimentalIsRenderedInSidebar,
				disableAlpha,
				disableRemove: disableInserter,
				disablePositioning,
				gradientPickerDomRef: gradientMarkersContainerDomRef,
				ignoreMarkerPosition: isInsertingControlPoint ? gradientBarState.insertPosition : void 0,
				value: controlPoints,
				onChange,
				onStartControlPointChange: () => {
					gradientBarStateDispatch({ type: "START_CONTROL_CHANGE" });
				},
				onStopControlPointChange: () => {
					gradientBarStateDispatch({ type: "STOP_CONTROL_CHANGE" });
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 167,
				columnNumber: 5
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 141,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 125,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, customGradientBarReducer, customGradientBarReducerInitialState;
function init_gradient_bar() {
	return (init_gradient_bar = __esmMin((() => {
		init_clsx();
		init_react();
		init_control_points();
		init_utils();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/gradient-bar/index.tsx";
		customGradientBarReducer = (state, action) => {
			switch (action.type) {
				case "MOVE_INSERTER":
					if (state.id === "IDLE" || state.id === "MOVING_INSERTER") return {
						id: "MOVING_INSERTER",
						insertPosition: action.insertPosition
					};
					break;
				case "STOP_INSERTER_MOVE":
					if (state.id === "MOVING_INSERTER") return { id: "IDLE" };
					break;
				case "OPEN_INSERTER":
					if (state.id === "MOVING_INSERTER") return {
						id: "INSERTING_CONTROL_POINT",
						insertPosition: state.insertPosition
					};
					break;
				case "CLOSE_INSERTER":
					if (state.id === "INSERTING_CONTROL_POINT") return { id: "IDLE" };
					break;
				case "START_CONTROL_CHANGE":
					if (state.id === "IDLE") return { id: "MOVING_CONTROL_POINT" };
					break;
				case "STOP_CONTROL_CHANGE": if (state.id === "MOVING_CONTROL_POINT") return { id: "IDLE" };
			}
			return state;
		};
		customGradientBarReducerInitialState = { id: "IDLE" };
		try {
			CustomGradientBar.__docgenInfo = {
				"description": "",
				"displayName": "gradientbar",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/gradient-bar/index.tsx",
				"methods": [],
				"props": {
					"background": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "background",
						"required": true,
						"tags": {},
						"type": { "name": "Background<string | number> | undefined" }
					},
					"hasGradient": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "hasGradient",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "value",
						"required": true,
						"tags": {},
						"type": { "name": "ControlPoint[]" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(newControlPoints: ControlPoint[]) => void" }
					},
					"disableInserter": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "disableInserter",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disableAlpha": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "disableAlpha",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disablePositioning": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether control points are fixed in place. Set by consumers whose value\nhas no positions to store, such as a duotone, so the control does not\noffer a move it cannot save.",
						"name": "disablePositioning",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__experimentalIsRenderedInSidebar": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "__experimentalIsRenderedInSidebar",
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
export { init_gradient_bar as n, CustomGradientBar as t };
