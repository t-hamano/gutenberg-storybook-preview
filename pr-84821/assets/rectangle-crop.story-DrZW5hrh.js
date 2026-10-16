import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { r as speak, t as init_build_module$1 } from "./build-module-DsAeWnrG.js";
import { n as rotate_left_default, r as cloud_upload_default } from "./rotate-left-CXzO0fO4.js";
import { t as download_default } from "./download-OAdBEzAR.js";
import { a as flip_horizontal_default, n as rotate_right_default, r as flip_vertical_default } from "./rotate-right-B5-rIh2z.js";
import { n as reset_default } from "./reset-CF3TDagv.js";
import { n as init_select_control, t as SelectControl } from "./select-control-BaQ9cGOe.js";
import { n as init_component, t as component_default } from "./component-2hv2PPn7.js";
import { n as init_component$1, t as component_default$1 } from "./component-DKizmr6G.js";
import { n as button_default, r as init_button } from "./button-BxEkUQAF.js";
import { n as range_control_default, t as init_range_control } from "./range-control-Zoz8xOxu.js";
import { n as toggle_control_default, t as init_toggle_control } from "./toggle-control-B4X9HIoI.js";
import { r as init_build_module$2 } from "./library.story-CFsmdbdz.js";
//#region ../node_modules/.store/gl-matrix@3.4.4-1XVyx70pzRCYPPp9mdmgdA/node_modules/gl-matrix/esm/common.js
var ARRAY_TYPE;
function init_common() {
	return (init_common = __esmMin((() => {
		ARRAY_TYPE = typeof Float32Array !== "undefined" ? Float32Array : Array;
	})))();
}
//#endregion
//#region ../node_modules/.store/gl-matrix@3.4.4-1XVyx70pzRCYPPp9mdmgdA/node_modules/gl-matrix/esm/mat2d.js
/**
* 2x3 Matrix
* @module mat2d
* @description
* A mat2d contains six elements defined as:
* <pre>
* [a, b,
*  c, d,
*  tx, ty]
* </pre>
* This is a short form for the 3x3 matrix:
* <pre>
* [a, b, 0,
*  c, d, 0,
*  tx, ty, 1]
* </pre>
* The last column is ignored so the array is shorter and operations are faster.
*/
/**
* Creates a new identity mat2d
*
* @returns {mat2d} a new 2x3 matrix
*/
function create$1() {
	var out = new ARRAY_TYPE(6);
	if (ARRAY_TYPE != Float32Array) {
		out[1] = 0;
		out[2] = 0;
		out[4] = 0;
		out[5] = 0;
	}
	out[0] = 1;
	out[3] = 1;
	return out;
}
/**
* Inverts a mat2d
*
* @param {mat2d} out the receiving matrix
* @param {ReadonlyMat2d} a the source matrix
* @returns {mat2d | null} out, or null if source matrix is not invertible
*/
function invert(out, a) {
	var aa = a[0], ab = a[1], ac = a[2], ad = a[3];
	var atx = a[4], aty = a[5];
	var det = aa * ad - ab * ac;
	if (!det) return null;
	det = 1 / det;
	out[0] = ad * det;
	out[1] = -ab * det;
	out[2] = -ac * det;
	out[3] = aa * det;
	out[4] = (ac * aty - ad * atx) * det;
	out[5] = (ab * atx - aa * aty) * det;
	return out;
}
/**
* Rotates a mat2d by the given angle
*
* @param {mat2d} out the receiving matrix
* @param {ReadonlyMat2d} a the matrix to rotate
* @param {Number} rad the angle to rotate the matrix by
* @returns {mat2d} out
*/
function rotate(out, a, rad) {
	var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
	var s = Math.sin(rad);
	var c = Math.cos(rad);
	out[0] = a0 * c + a2 * s;
	out[1] = a1 * c + a3 * s;
	out[2] = a0 * -s + a2 * c;
	out[3] = a1 * -s + a3 * c;
	out[4] = a4;
	out[5] = a5;
	return out;
}
/**
* Scales the mat2d by the dimensions in the given vec2
*
* @param {mat2d} out the receiving matrix
* @param {ReadonlyMat2d} a the matrix to translate
* @param {ReadonlyVec2} v the vec2 to scale the matrix by
* @returns {mat2d} out
**/
function scale(out, a, v) {
	var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
	var v0 = v[0], v1 = v[1];
	out[0] = a0 * v0;
	out[1] = a1 * v0;
	out[2] = a2 * v1;
	out[3] = a3 * v1;
	out[4] = a4;
	out[5] = a5;
	return out;
}
/**
* Translates the mat2d by the dimensions in the given vec2
*
* @param {mat2d} out the receiving matrix
* @param {ReadonlyMat2d} a the matrix to translate
* @param {ReadonlyVec2} v the vec2 to translate the matrix by
* @returns {mat2d} out
**/
function translate(out, a, v) {
	var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
	var v0 = v[0], v1 = v[1];
	out[0] = a0;
	out[1] = a1;
	out[2] = a2;
	out[3] = a3;
	out[4] = a0 * v0 + a2 * v1 + a4;
	out[5] = a1 * v0 + a3 * v1 + a5;
	return out;
}
function init_mat2d() {
	return (init_mat2d = __esmMin((() => {
		init_common();
	})))();
}
//#endregion
//#region ../node_modules/.store/gl-matrix@3.4.4-1XVyx70pzRCYPPp9mdmgdA/node_modules/gl-matrix/esm/vec2.js
/**
* 2 Dimensional Vector
* @module vec2
*/
/**
* Creates a new, empty vec2
*
* @returns {vec2} a new 2D vector
*/
function create() {
	var out = new ARRAY_TYPE(2);
	if (ARRAY_TYPE != Float32Array) {
		out[0] = 0;
		out[1] = 0;
	}
	return out;
}
/**
* Creates a new vec2 initialized with the given values
*
* @param {Number} x X component
* @param {Number} y Y component
* @returns {vec2} a new 2D vector
*/
function fromValues(x, y) {
	var out = new ARRAY_TYPE(2);
	out[0] = x;
	out[1] = y;
	return out;
}
/**
* Transforms the vec2 with a mat2d
*
* @param {vec2} out the receiving vector
* @param {ReadonlyVec2} a the vector to transform
* @param {ReadonlyMat2d} m matrix to transform with
* @returns {vec2} out
*/
function transformMat2d(out, a, m) {
	var x = a[0], y = a[1];
	out[0] = m[0] * x + m[2] * y + m[4];
	out[1] = m[1] * x + m[3] * y + m[5];
	return out;
}
function init_vec2() {
	return (init_vec2 = __esmMin((() => {
		init_common();
		(function() {
			var vec = create();
			return function(a, stride, offset, count, fn, arg) {
				var i, l;
				if (!stride) stride = 2;
				if (!offset) offset = 0;
				if (count) l = Math.min(count * stride + offset, a.length);
				else l = a.length;
				for (i = offset; i < l; i += stride) {
					vec[0] = a[i];
					vec[1] = a[i + 1];
					fn(vec, vec, arg);
					a[i] = vec[0];
					a[i + 1] = vec[1];
				}
				return a;
			};
		})();
	})))();
}
//#endregion
//#region ../packages/media-editor/src/image-editor/core/math/rotation.ts
/**
* Normalizes a rotation value to the range [0, 360).
*
* Negative rotations are converted to their positive clockwise equivalent.
* For example, -90 becomes 270, -45 becomes 315, and 450 becomes 90.
*
* @param degrees The rotation value in degrees.
* @return The normalized rotation in the range [0, 360).
*/
function normalizeRotation(degrees) {
	if (degrees >= 0) return degrees % 360;
	return (360 + degrees % 360) % 360;
}
/**
* Converts an angle from degrees to radians.
*
* @param degrees The angle in degrees.
* @return The angle in radians.
*/
function degreesToRadians(degrees) {
	return degrees * Math.PI / 180;
}
//#endregion
//#region ../packages/media-editor/src/image-editor/core/math/sanitize.ts
/**
* Returns `value` if it's finite and within `[-MAX_SAFE_MAGNITUDE,
* MAX_SAFE_MAGNITUDE]`, otherwise `fallback`. Stricter than `Number.isFinite`
* because extreme finite magnitudes (e.g. `Number.MAX_VALUE`) overflow
* downstream trig/matrix math even though the spec reports them as finite.
*
* Note: sub-normal denormals (e.g. `Number.MIN_VALUE`) are accepted by this
* function — they don't overflow on their own. Protection against divisions
* by sub-normal values lives in `sanitizeCropperState`'s zoom guard.
*
* @param value    The candidate value.
* @param fallback The replacement to return when `value` is unsafe.
* @return Either `value` or `fallback`.
*/
function safeBoundedNumber(value, fallback) {
	if (!Number.isFinite(value)) return fallback;
	if (Math.abs(value) > MAX_SAFE_MAGNITUDE) return fallback;
	return value;
}
/**
* Returns `true` when `value` is finite and within `[-MAX_SAFE_MAGNITUDE,
* MAX_SAFE_MAGNITUDE]`. The predicate companion to {@link safeBoundedNumber}
* for callers that need to short-circuit rather than substitute a fallback.
*
* @param value The candidate value.
* @return Whether `value` is safe to use in math.
*/
function isSafeNumber(value) {
	return Number.isFinite(value) && Math.abs(value) <= MAX_SAFE_MAGNITUDE;
}
/**
* Returns `true` when both dimensions are finite and within the safe
* range `[Number.EPSILON, MAX_SAFE_MAGNITUDE]`. The lower bound matters
* because sub-normal dimensions (e.g. `Number.MIN_VALUE`) pass `> 0` but
* make `container / dim` overflow to `Infinity` downstream in
* `getImageFit` / `createCamera`. Use this to short-circuit math that
* would otherwise produce non-finite output.
*
* @param size The size to check.
* @return Whether `size` is safe to use in math.
*/
function isValidSize(size) {
	return Number.isFinite(size.width) && Number.isFinite(size.height) && size.width >= Number.EPSILON && size.height >= Number.EPSILON && size.width <= MAX_SAFE_MAGNITUDE && size.height <= MAX_SAFE_MAGNITUDE;
}
/**
* Returns a copy of `rect` with every numeric field replaced by a safe
* value via {@link safeBoundedNumber}. Returns the same reference when no
* field needed substitution so callers can keep their reference-equality
* short-circuits intact for clean inputs.
*
* @param rect The rect to sanitize.
* @return A rect with all numeric fields finite.
*/
function sanitizeRect(rect) {
	const x = safeBoundedNumber(rect.x, 0);
	const y = safeBoundedNumber(rect.y, 0);
	const width = safeBoundedNumber(rect.width, 0);
	const height = safeBoundedNumber(rect.height, 0);
	if (x === rect.x && y === rect.y && width === rect.width && height === rect.height) return rect;
	return {
		x,
		y,
		width,
		height
	};
}
/**
* Returns a copy of `state` with the cropper-math numeric fields replaced
* by safe defaults. Covers `pan`, `zoom`, `rotation`, the matching base
* pose, and `cropRect`. The `state.image` numeric fields (naturalWidth /
* naturalHeight) are intentionally NOT sanitized — image dimensions reach
* the math layer as a separate `imageSize` argument, and cloning the
* image object here would break the reducer's reference-equality
* short-circuit.
*
* Returns the same `state` reference when no field needed substitution
* so callers in hot paths (every pointermove via `restrictPanZoom`) can
* keep their reference-equality optimizations. Sub-object references
* (`pan`, `basePan`, `cropRect`) are also preserved when their fields
* are individually clean.
*
* @param state The cropper state to sanitize.
* @return A cropper state with the math-relevant numeric fields finite.
*/
function sanitizeCropperState(state) {
	const panX = safeBoundedNumber(state.pan.x, 0);
	const panY = safeBoundedNumber(state.pan.y, 0);
	const basePanX = safeBoundedNumber(state.basePan.x, 0);
	const basePanY = safeBoundedNumber(state.basePan.y, 0);
	const rotation = safeBoundedNumber(state.rotation, 0);
	const baseRotation = safeBoundedNumber(state.baseRotation, 0);
	const rawZoom = safeBoundedNumber(state.zoom, 1);
	const zoom = rawZoom >= Number.EPSILON ? rawZoom : 1;
	const rawBaseZoom = safeBoundedNumber(state.baseZoom, 1);
	const baseZoom = rawBaseZoom >= Number.EPSILON ? rawBaseZoom : 1;
	const cropRect = sanitizeRect(state.cropRect);
	const panUnchanged = panX === state.pan.x && panY === state.pan.y;
	const basePanUnchanged = basePanX === state.basePan.x && basePanY === state.basePan.y;
	if (panUnchanged && basePanUnchanged && zoom === state.zoom && baseZoom === state.baseZoom && rotation === state.rotation && baseRotation === state.baseRotation && cropRect === state.cropRect) return state;
	return {
		...state,
		pan: panUnchanged ? state.pan : {
			x: panX,
			y: panY
		},
		zoom,
		rotation,
		basePan: basePanUnchanged ? state.basePan : {
			x: basePanX,
			y: basePanY
		},
		baseZoom,
		baseRotation,
		cropRect
	};
}
var MAX_SAFE_MAGNITUDE;
function init_sanitize() {
	return (init_sanitize = __esmMin((() => {
		MAX_SAFE_MAGNITUDE = 1e6;
	})))();
}
//#endregion
//#region ../packages/media-editor/src/image-editor/core/camera.ts
/**
* Compute the axis-aligned bounding box of a rectangle after rotation.
*
* @param width    The width of the rectangle.
* @param height   The height of the rectangle.
* @param rotation The rotation angle in degrees.
* @return The bounding box size after rotation.
*/
function getRotatedBBox(width, height, rotation) {
	if (!isSafeNumber(width) || !isSafeNumber(height) || !isSafeNumber(rotation) || width <= 0 || height <= 0) return {
		width: 0,
		height: 0
	};
	const rad = degreesToRadians(rotation);
	const cosR = Math.abs(Math.cos(rad));
	const sinR = Math.abs(Math.sin(rad));
	return {
		width: cosR * width + sinR * height,
		height: sinR * width + cosR * height
	};
}
/**
* Compute the fitted (unrotated) image element dimensions and the visual
* (rotated) bounding box dimensions for a given container, image, and rotation.
*
* This is the same "contain" fit logic used by createCamera, extracted so
* cropper.tsx can size the <img> element and position overlays without
* duplicating the math.
*
* @param containerSize The container dimensions in pixels.
* @param imageSize     The natural image dimensions in pixels.
* @param rotation      The rotation angle in degrees.
* @return The fitted element size and visual bounding box size.
*/
function getImageFit(containerSize, imageSize, rotation) {
	if (!isValidSize(containerSize) || !isValidSize(imageSize)) return {
		elementSize: {
			width: 0,
			height: 0
		},
		visualSize: {
			width: 0,
			height: 0
		}
	};
	const safeRotation = safeBoundedNumber(rotation, 0);
	const snapRotation = Math.round(safeRotation / 90) * 90;
	const naturalBBox = getRotatedBBox(imageSize.width, imageSize.height, snapRotation);
	if (naturalBBox.width === 0 || naturalBBox.height === 0) return {
		elementSize: {
			width: 0,
			height: 0
		},
		visualSize: {
			width: 0,
			height: 0
		}
	};
	const fitScale = Math.min(containerSize.width / naturalBBox.width, containerSize.height / naturalBBox.height);
	const renderedW = imageSize.width * fitScale;
	const renderedH = imageSize.height * fitScale;
	const visualSize = getRotatedBBox(renderedW, renderedH, snapRotation);
	return {
		elementSize: {
			width: renderedW,
			height: renderedH
		},
		visualSize
	};
}
/**
* Resolve the presentational view magnification that makes the crop fill the
* canvas.
*
* The crop overlay is laid out as `cropRect * visualSize` (the contain-fit
* footprint, with no zoom), so its on-screen size is capped by that footprint.
* When a crop's aspect differs from the image's, it can be much smaller than
* the canvas could show (e.g. a square crop in a tall image is bound by the
* footprint's narrow axis). Scaling `elementSize` and `visualSize` together by
* the returned factor uniformly magnifies the whole scene — image, crop
* overlay, and overlays — so the crop reaches `targetFill` of its constraining
* canvas axis, with the image bleeding past the canvas (clipped by the host).
*
* Purely presentational: it does not touch `zoom`/`pan`/`cropRect`/`rotation`,
* so the framed source region — and therefore the export — is unchanged.
*
* @param cropRect   The crop rectangle, normalized to the footprint.
* @param canvasSize The canvas size in pixels.
* @param visualSize The contain-fit (rotated) image footprint in pixels.
* @param targetFill Fraction of the constraining canvas axis to fill (0–1].
* @param maxScale   Upper bound on the magnification.
* @return A magnification factor in [1, maxScale]; 1 when none is needed.
*/
function getViewScale(cropRect, canvasSize, visualSize, targetFill, maxScale) {
	const cropScreenW = cropRect.width * visualSize.width;
	const cropScreenH = cropRect.height * visualSize.height;
	if (!isValidSize(canvasSize) || !isValidSize(visualSize) || !(cropScreenW > 0) || !(cropScreenH > 0) || !Number.isFinite(targetFill) || !Number.isFinite(maxScale) || !(targetFill > 0) || !(maxScale >= 1)) return 1;
	const kW = targetFill * canvasSize.width / cropScreenW;
	const kH = targetFill * canvasSize.height / cropScreenH;
	return Math.min(maxScale, Math.max(1, Math.min(kW, kH)));
}
/**
* Compose a camera matrix from cropper state, container, and image dimensions.
*
* The matrix maps normalized world coordinates [0,1] x [0,1] to screen pixels.
* Input (0,0) = image top-left, (1,1) = image bottom-right.
*
* Composition order (left-to-right = outermost first, applied last to point):
*   M = T_containerCenter * T_pan * S_flip * R_rotation * S_zoom * T_center * S_toRenderedPixels
*
* Flip is composed outside rotation, so `flip.horizontal` / `flip.vertical`
* are viewport-relative: the image mirrors across the viewport's vertical /
* horizontal axis regardless of current rotation.
*
* @param state         The current cropper state (zoom, rotation, flip, crop).
* @param containerSize The size of the container in pixels.
* @param imageSize     The natural size of the image in pixels.
* @return The composed camera matrix.
*/
function createCamera(state, containerSize, imageSize) {
	const m = create$1();
	if (!isValidSize(containerSize) || !isValidSize(imageSize)) return m;
	const safeState = sanitizeCropperState(state);
	const snapRotation = Math.round(safeState.rotation / 90) * 90;
	const naturalBBox = getRotatedBBox(imageSize.width, imageSize.height, snapRotation);
	if (naturalBBox.width === 0 || naturalBBox.height === 0) return m;
	const fitScale = Math.min(containerSize.width / naturalBBox.width, containerSize.height / naturalBBox.height);
	const renderedW = imageSize.width * fitScale;
	const renderedH = imageSize.height * fitScale;
	const { width: visualW, height: visualH } = getRotatedBBox(renderedW, renderedH, snapRotation);
	translate(m, m, [containerSize.width / 2, containerSize.height / 2]);
	translate(m, m, [safeState.pan.x * visualW, safeState.pan.y * visualH]);
	scale(m, m, [safeState.flip.horizontal ? -1 : 1, safeState.flip.vertical ? -1 : 1]);
	rotate(m, m, degreesToRadians(safeState.rotation));
	scale(m, m, [safeState.zoom, safeState.zoom]);
	translate(m, m, [-renderedW / 2, -renderedH / 2]);
	scale(m, m, [renderedW, renderedH]);
	return m;
}
/**
* Transform a screen pixel point to normalized world coordinates [0,1].
*
* @param camera  The camera matrix from createCamera.
* @param point   The screen pixel coordinate to transform.
* @param point.x The x component of the screen pixel coordinate.
* @param point.y The y component of the screen pixel coordinate.
* @return The normalized world coordinate.
*/
function screenToWorld(camera, point) {
	invert(_scratchMat$1, camera);
	const out = _scratchVec$1;
	transformMat2d(out, [point.x, point.y], _scratchMat$1);
	return {
		x: out[0],
		y: out[1]
	};
}
/**
* Compute the axis-aligned bounding box of a set of corners after
* transforming them through a camera matrix.
*
* @param camera  The camera matrix from createCamera.
* @param corners The corners to transform (each as [x, y]).
* @return The screen-space bounding box.
*/
function aabb(camera, corners) {
	const screenCorners = corners.map((c) => {
		const out = create();
		transformMat2d(out, c, camera);
		return out;
	});
	let minX = screenCorners[0][0];
	let maxX = screenCorners[0][0];
	let minY = screenCorners[0][1];
	let maxY = screenCorners[0][1];
	for (let i = 1; i < screenCorners.length; i++) {
		const s = screenCorners[i];
		if (s[0] < minX) minX = s[0];
		if (s[0] > maxX) maxX = s[0];
		if (s[1] < minY) minY = s[1];
		if (s[1] > maxY) maxY = s[1];
	}
	return {
		left: minX,
		top: minY,
		width: maxX - minX,
		height: maxY - minY
	};
}
/**
* Returns the axis-aligned bounding box of the full image (normalized [0,1]x[0,1])
* after applying the camera transform.
*
* @param camera The camera matrix from createCamera.
* @return The screen-space bounding box of the full image.
*/
function getVisibleBounds(camera) {
	return aabb(camera, [
		[0, 0],
		[1, 0],
		[1, 1],
		[0, 1]
	]);
}
/**
* Compose a camera matrix for exporting to a canvas.
*
* The resulting matrix maps image-pixel coordinates directly to output-canvas
* coordinates. Apply it with `ctx.setTransform( ...camera )` then
* `ctx.drawImage( image, 0, 0 )`.
*
* The transform chain mirrors the `renderToCanvas` function in canvas-renderer.ts:
*   translate(visualCenter - cropOffset + outCenter) → flip → rotate → zoom → translate(-imgCenter)
*
* @param state      The current cropper state.
* @param imageSize  The natural size of the source image in pixels.
* @param outputSize The desired output canvas size in pixels.
* @return The composed export camera matrix.
*/
function createExportCamera(state, imageSize, outputSize) {
	const m = create$1();
	if (!isValidSize(imageSize) || !isValidSize(outputSize)) return m;
	const { rotation, flip, cropRect, zoom, pan } = sanitizeCropperState(state);
	const snapRotation = Math.round(rotation / 90) * 90;
	const { width: rotW, height: rotH } = getRotatedBBox(imageSize.width, imageSize.height, snapRotation);
	const naturalCropW = cropRect.width * rotW;
	const naturalCropH = cropRect.height * rotH;
	const outputScaleX = naturalCropW > 0 ? outputSize.width / naturalCropW : 1;
	const outputScaleY = naturalCropH > 0 ? outputSize.height / naturalCropH : 1;
	const cropOffsetX = cropRect.x * rotW + outputSize.width / 2 / outputScaleX;
	const cropOffsetY = cropRect.y * rotH + outputSize.height / 2 / outputScaleY;
	const visualCenterX = rotW / 2 + pan.x * rotW;
	const visualCenterY = rotH / 2 + pan.y * rotH;
	scale(m, m, [outputScaleX, outputScaleY]);
	translate(m, m, [visualCenterX - cropOffsetX + outputSize.width / 2 / outputScaleX, visualCenterY - cropOffsetY + outputSize.height / 2 / outputScaleY]);
	scale(m, m, [flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1]);
	rotate(m, m, degreesToRadians(rotation));
	scale(m, m, [zoom, zoom]);
	translate(m, m, [-imageSize.width / 2, -imageSize.height / 2]);
	return m;
}
var _scratchMat$1, _scratchVec$1;
function init_camera() {
	return (init_camera = __esmMin((() => {
		init_mat2d(), init_vec2();
		init_sanitize();
		_scratchMat$1 = create$1();
		_scratchVec$1 = create();
	})))();
}
//#endregion
//#region ../packages/media-editor/src/image-editor/core/constants.ts
var ABSOLUTE_MIN_ZOOM, SETTLE_TARGET_CANVAS_FILL, DEFAULT_CROP_RECT, DEFAULT_FLIP, DEFAULT_PAN, DEFAULT_STATE, DEFAULT_ASPECT_RATIOS;
function init_constants() {
	return (init_constants = __esmMin((() => {
		init_build_module();
		ABSOLUTE_MIN_ZOOM = .1;
		SETTLE_TARGET_CANVAS_FILL = .8;
		DEFAULT_CROP_RECT = {
			x: 0,
			y: 0,
			width: 1,
			height: 1
		};
		DEFAULT_FLIP = {
			horizontal: false,
			vertical: false
		};
		DEFAULT_PAN = {
			x: 0,
			y: 0
		};
		DEFAULT_STATE = {
			image: null,
			pan: { ...DEFAULT_PAN },
			zoom: 1,
			rotation: 0,
			basePan: { ...DEFAULT_PAN },
			baseZoom: 1,
			baseRotation: 0,
			flip: { ...DEFAULT_FLIP },
			cropRect: { ...DEFAULT_CROP_RECT }
		};
		DEFAULT_ASPECT_RATIOS = [
			{
				label: __("Free"),
				value: 0
			},
			{
				label: __("Original"),
				value: -1
			},
			{
				label: __("Square (1:1)"),
				value: 1
			},
			{
				label: __("Landscape (16:9)"),
				value: 16 / 9
			},
			{
				label: __("Portrait (9:16)"),
				value: 9 / 16
			},
			{
				label: __("Classic (4:3)"),
				value: 4 / 3
			},
			{
				label: __("Classic portrait (3:4)"),
				value: 3 / 4
			},
			{
				label: __("Photo (3:2)"),
				value: 3 / 2
			},
			{
				label: __("Photo portrait (2:3)"),
				value: 2 / 3
			}
		];
	})))();
}
//#endregion
//#region ../packages/media-editor/src/image-editor/core/containment.ts
/**
* Compute the visual (rotated) bounding-box dimensions in pixel-proportional
* units where the unrotated image is `a × 1` (renderedW = a, renderedH = 1).
*
* @param rotation         Rotation angle in degrees.
* @param imageAspectRatio Image width / height ratio.
* @return Visual dimensions and trig helpers.
*/
function getVisualDimensions(rotation, imageAspectRatio) {
	const rad = degreesToRadians(rotation);
	const absC = Math.abs(Math.cos(rad));
	const absS = Math.abs(Math.sin(rad));
	const bbox = getRotatedBBox(imageAspectRatio, 1, rotation);
	return {
		visualW: bbox.width,
		visualH: bbox.height,
		absC,
		absS
	};
}
/**
* The geometric minimum zoom required for the rotated image to fully cover the
* crop rectangle. Works in pixel-proportional space where the unrotated image
* is a×1; the crop rect lives in visual-normalized space and is scaled by the
* rotation-dependent visual dimensions before projecting into the image-local
* frame.
*
* Returns 0 for a degenerate (zero-area) crop — callers compose the result
* with their own floor (typically the current zoom or `MIN_ZOOM`).
*
* @param rotation         Rotation angle in degrees.
* @param imageAspectRatio Image width / height ratio.
* @param cropRect         The crop rectangle in normalized coordinates.
* @return The minimum zoom factor needed for coverage.
*/
function getMinZoomForCover(rotation, imageAspectRatio, cropRect) {
	const aspectRatio = Math.max(imageAspectRatio, Number.EPSILON);
	const { visualW: snapVisualW, visualH: snapVisualH } = getVisualDimensions(Math.round(rotation / 90) * 90, aspectRatio);
	const { absC, absS } = getVisualDimensions(rotation, aspectRatio);
	const cropHalfW = cropRect.width * snapVisualW / 2;
	const cropHalfH = cropRect.height * snapVisualH / 2;
	const spanAlpha = cropHalfW * absC + cropHalfH * absS;
	const spanBeta = cropHalfW * absS + cropHalfH * absC;
	const zoomFromAlpha = 2 * spanAlpha / aspectRatio;
	const zoomFromBeta = 2 * spanBeta;
	return Math.max(zoomFromAlpha, zoomFromBeta);
}
/**
* Resolves the effective minimum zoom for the current state — the coverage-
* aware floor when an image is loaded, falling back to `MIN_ZOOM` otherwise.
* Used by both the cropper's interaction layer and the zoom slider so the
* floor stays consistent across surfaces.
*
* @param state The current cropper state.
* @return The minimum zoom factor.
*/
function getMinZoom(state) {
	if (!state.image) return 1;
	const imageSize = {
		width: state.image.naturalWidth,
		height: state.image.naturalHeight
	};
	if (!isValidSize(imageSize)) return 1;
	const safeState = sanitizeCropperState(state);
	const aspectRatio = imageSize.width / imageSize.height;
	return Math.max(ABSOLUTE_MIN_ZOOM, getMinZoomForCover(safeState.rotation, aspectRatio, safeState.cropRect));
}
/**
* Compute the crop handle bounds in normalized visual space — the
* axis-aligned bounding box (AABB) of the actual image footprint at the
* current pan/zoom/rotation.
*
* Returns the full image AABB without intersecting with the container
* viewport. The viewport pan mechanism in the Cropper component allows
* the canvas to scroll so handles can reach the image edge even when it
* lies outside the visible canvas area.
*
* Unlike a static centerline-based calculation, this accounts for the
* current pan position — if the user pans right, the left bound tightens
* because the image's left edge has moved right.
*
* @param state       The current cropper state (crop, zoom, rotation, flip).
* @param elementSize The fitted (unrotated) image element dimensions in pixels.
* @param visualSize  The visual (rotated) image bounding box in pixels.
* @return The min/max x and y that a crop rect edge can reach in normalized space.
*/
function getImageCropBounds(state, elementSize, visualSize) {
	if (!isValidSize(elementSize) || !isValidSize(visualSize)) return {
		minX: 0,
		minY: 0,
		maxX: 1,
		maxY: 1
	};
	const safeState = sanitizeCropperState(state);
	const tx = safeState.pan.x * visualSize.width;
	const ty = safeState.pan.y * visualSize.height;
	const rad = degreesToRadians(safeState.rotation);
	const cos = Math.cos(rad);
	const sin = Math.sin(rad);
	const sx = safeState.flip.horizontal ? -1 : 1;
	const sy = safeState.flip.vertical ? -1 : 1;
	const z = safeState.zoom;
	const ma = sx * cos * z;
	const mb = sy * sin * z;
	const mc = -sx * sin * z;
	const md = sy * cos * z;
	const hw = elementSize.width / 2;
	const hh = elementSize.height / 2;
	const corners = [
		[-hw, -hh],
		[hw, -hh],
		[hw, hh],
		[-hw, hh]
	];
	let imgMinX = Infinity;
	let imgMaxX = -Infinity;
	let imgMinY = Infinity;
	let imgMaxY = -Infinity;
	for (const [cx, cy] of corners) {
		const screenX = ma * cx + mc * cy + tx;
		const screenY = mb * cx + md * cy + ty;
		const nx = screenX / visualSize.width + .5;
		const ny = screenY / visualSize.height + .5;
		imgMinX = Math.min(imgMinX, nx);
		imgMaxX = Math.max(imgMaxX, nx);
		imgMinY = Math.min(imgMinY, ny);
		imgMaxY = Math.max(imgMaxY, ny);
	}
	return {
		minX: imgMinX,
		minY: imgMinY,
		maxX: imgMaxX,
		maxY: imgMaxY
	};
}
/**
* Restricts a crop rectangle so that the rotated, zoomed image can fully cover it.
* If the crop rect is too large for the current zoom and rotation, it is scaled
* down proportionally and re-centered.
*
* Works in pixel-proportional space where the unrotated image is a×1.
*
* @param cropRect         The crop rectangle in normalized coordinates.
* @param zoom             The current zoom factor.
* @param rotation         The rotation angle in degrees.
* @param imageAspectRatio The image width / height ratio.
* @return The restricted crop rectangle.
*/
function restrictCropRect(cropRect, zoom, rotation, imageAspectRatio) {
	const safeRect = sanitizeRect(cropRect);
	const zoomCandidate = safeBoundedNumber(zoom, 1);
	const safeZoom = zoomCandidate >= Number.EPSILON ? zoomCandidate : 1;
	const safeRotation = safeBoundedNumber(rotation, 0);
	const safeAspect = safeBoundedNumber(imageAspectRatio, 1);
	const aspectRatio = Math.max(safeAspect, Number.EPSILON);
	const { visualW, visualH } = getVisualDimensions(Math.round(safeRotation / 90) * 90, aspectRatio);
	const { absC, absS } = getVisualDimensions(safeRotation, aspectRatio);
	const W = safeRect.width;
	const H = safeRect.height;
	const cropWPx = W * visualW;
	const cropHPx = H * visualH;
	const spanAlpha = cropWPx * absC + cropHPx * absS;
	const spanBeta = cropWPx * absS + cropHPx * absC;
	const limitAlpha = aspectRatio * safeZoom;
	const limitBeta = safeZoom;
	let t = 1;
	if (spanAlpha > 0) t = Math.min(t, limitAlpha / spanAlpha);
	if (spanBeta > 0) t = Math.min(t, limitBeta / spanBeta);
	if (t >= .999999999) return safeRect;
	const newW = W * t;
	const newH = H * t;
	const centerX = safeRect.x + W / 2;
	const centerY = safeRect.y + H / 2;
	let newX = centerX - newW / 2;
	let newY = centerY - newH / 2;
	newX = Math.max(0, Math.min(newX, 1 - newW));
	newY = Math.max(0, Math.min(newY, 1 - newH));
	return {
		x: newX,
		y: newY,
		width: newW,
		height: newH
	};
}
/**
* Clamps pan and adjusts zoom so that the zoomed, rotated image fully covers
* the crop rectangle.
*
* Uses the camera matrix to project: builds a camera from the candidate state,
* maps the stencil corners (axis-aligned in the visual bounding box) to world
* space via the inverse camera, and checks that all world points lie within
* [0,1]×[0,1]. If any point is outside, computes the minimal pan correction.
*
* @param state     The current cropper state.
* @param imageSize The natural size of the image in pixels.
* @param cropRect  The crop rectangle in normalized coordinates.
* @return The restricted crop pan and zoom values.
*/
function restrictPanZoom(state, imageSize, cropRect) {
	const safeState = sanitizeCropperState(state);
	const safeCropRect = sanitizeRect(cropRect);
	const aspectRatio = isValidSize(imageSize) ? imageSize.width / imageSize.height : 1;
	const minZoom = Math.max(ABSOLUTE_MIN_ZOOM, getMinZoomForCover(safeState.rotation, aspectRatio, safeCropRect));
	const zoom = Math.min(10, Math.max(safeState.zoom, minZoom));
	const candidateState = {
		...safeState,
		zoom
	};
	const camera = createCamera(candidateState, CANONICAL_CONTAINER, imageSize);
	const snapRotation = Math.round(safeState.rotation / 90) * 90;
	const visibleBounds = getVisibleBounds(createCamera({
		...candidateState,
		pan: {
			x: 0,
			y: 0
		},
		zoom: 1,
		rotation: snapRotation
	}, CANONICAL_CONTAINER, imageSize));
	const stencilCorners = [
		[visibleBounds.left + safeCropRect.x * visibleBounds.width, visibleBounds.top + safeCropRect.y * visibleBounds.height],
		[visibleBounds.left + (safeCropRect.x + safeCropRect.width) * visibleBounds.width, visibleBounds.top + safeCropRect.y * visibleBounds.height],
		[visibleBounds.left + (safeCropRect.x + safeCropRect.width) * visibleBounds.width, visibleBounds.top + (safeCropRect.y + safeCropRect.height) * visibleBounds.height],
		[visibleBounds.left + safeCropRect.x * visibleBounds.width, visibleBounds.top + (safeCropRect.y + safeCropRect.height) * visibleBounds.height]
	];
	invert(_scratchMat, camera);
	let minWx = Infinity;
	let maxWx = -Infinity;
	let minWy = Infinity;
	let maxWy = -Infinity;
	for (const corner of stencilCorners) {
		transformMat2d(_scratchVec, corner, _scratchMat);
		const w = _scratchVec;
		if (w[0] < minWx) minWx = w[0];
		if (w[0] > maxWx) maxWx = w[0];
		if (w[1] < minWy) minWy = w[1];
		if (w[1] > maxWy) maxWy = w[1];
	}
	if (minWx >= -1e-9 && maxWx <= 1.000000001 && minWy >= -1e-9 && maxWy <= 1.000000001) return {
		pan: safeState.pan,
		zoom
	};
	let dwx = 0;
	let dwy = 0;
	if (minWx < 0 && maxWx <= 1.000000001) dwx = -minWx;
	else if (maxWx > 1 && minWx >= -1e-9) dwx = 1 - maxWx;
	else if (minWx < 0 && maxWx > 1) dwx = (1 - maxWx - minWx) / 2;
	if (minWy < 0 && maxWy <= 1.000000001) dwy = -minWy;
	else if (maxWy > 1 && minWy >= -1e-9) dwy = 1 - maxWy;
	else if (minWy < 0 && maxWy > 1) dwy = (1 - maxWy - minWy) / 2;
	const dsx = camera[0] * dwx + camera[2] * dwy;
	const dsy = camera[1] * dwx + camera[3] * dwy;
	return {
		pan: {
			x: safeState.pan.x - (visibleBounds.width > 0 ? dsx / visibleBounds.width : 0),
			y: safeState.pan.y - (visibleBounds.height > 0 ? dsy / visibleBounds.height : 0)
		},
		zoom
	};
}
var CANONICAL_CONTAINER, _scratchMat, _scratchVec;
function init_containment() {
	return (init_containment = __esmMin((() => {
		init_mat2d(), init_vec2();
		init_constants();
		init_sanitize();
		init_camera();
		CANONICAL_CONTAINER = {
			width: 1e3,
			height: 1e3
		};
		_scratchMat = create$1();
		_scratchVec = create();
	})))();
}
//#endregion
//#region ../packages/media-editor/src/image-editor/core/crop-rect.ts
/**
* Largest rect of the given pixel aspect ratio that fits inside the
* visual bounds, centered in [0,1] × [0,1] normalized space. Returns
* a full-frame rect (1×1) if `aspectRatio` is unset or non-positive.
*
* The returned rect is the same in either freeform or fixed-crop
* mode — it's the canonical "centered crop for this ratio at this
* canvas size".
*
* @param aspectRatio Desired pixel width/height ratio. `undefined`
*                    (or 0/negative) means no lock — returns full frame.
* @param visualSize  Rendered image dimensions in pixels.
*/
function computeInscribedRect(aspectRatio, visualSize) {
	let w = 1;
	let h = 1;
	if (aspectRatio && aspectRatio > 0 && visualSize.width > 0) {
		const normalizedRatio = aspectRatio * visualSize.height / visualSize.width;
		if (normalizedRatio <= 1) w = normalizedRatio;
		else h = 1 / normalizedRatio;
	}
	return {
		x: (1 - w) / 2,
		y: (1 - h) / 2,
		width: w,
		height: h
	};
}
//#endregion
//#region ../packages/media-editor/src/image-editor/core/stencil-math.ts
/**
* Resolve the minimum crop dimension, in source-image pixels, for the current
* display scale.
*
* Two floors compete: a fixed source-pixel floor (`MIN_CROP_PIXELS`) that
* avoids sub-pixel crops, and an on-screen floor (`MIN_CROP_SCREEN_PX`) that
* keeps the crop large enough to grab. The on-screen floor converted to source
* pixels is `MIN_CROP_SCREEN_PX / displayScale`; the binding constraint is the
* larger of the two. When the image is shown small (small `displayScale`) the
* on-screen floor dominates; once it is shown large enough the source-pixel
* floor takes over.
*
* @param displayScale CSS pixels rendered per source pixel
*                     (fit scale × zoom × view scale).
* @return Minimum crop dimension in source-image pixels.
*/
function getMinCropPixels(displayScale) {
	if (displayScale <= 0) return 16;
	return Math.max(16, 44 / displayScale);
}
/**
* Compute the new crop rect for a free (no aspect ratio) resize.
*
* Each edge moves independently based on the handle being dragged.
* Edges are clamped to the provided bounds and maintain a minimum size.
*
* @param drag        The current drag state.
* @param clientX     Current mouse/touch X position in pixels.
* @param clientY     Current mouse/touch Y position in pixels.
* @param imageSize   The rendered image dimensions in pixels.
* @param bounds      The allowed crop area bounds.
* @param minCropSize Minimum crop rect dimension in normalized space, per axis.
* @return The new crop rect in normalized coordinates.
*/
function computeFreeResizeRect(drag, clientX, clientY, imageSize, bounds, minCropSize = DEFAULT_MIN_CROP_SIZE) {
	const dx = imageSize.width > 0 ? (clientX - drag.startX) / imageSize.width : 0;
	const dy = imageSize.height > 0 ? (clientY - drag.startY) / imageSize.height : 0;
	const s = drag.startRect;
	const handle = drag.handle;
	let edgeTop = s.y;
	let edgeBottom = s.y + s.height;
	let edgeLeft = s.x;
	let edgeRight = s.x + s.width;
	if (handle === "n" || handle === "nw" || handle === "ne") edgeTop = Math.max(bounds.minY, Math.min(s.y + dy, edgeBottom - minCropSize.height));
	if (handle === "s" || handle === "sw" || handle === "se") edgeBottom = Math.max(edgeTop + minCropSize.height, Math.min(s.y + s.height + dy, bounds.maxY));
	if (handle === "w" || handle === "nw" || handle === "sw") edgeLeft = Math.max(bounds.minX, Math.min(s.x + dx, edgeRight - minCropSize.width));
	if (handle === "e" || handle === "ne" || handle === "se") edgeRight = Math.max(edgeLeft + minCropSize.width, Math.min(s.x + s.width + dx, bounds.maxX));
	return {
		x: edgeLeft,
		y: edgeTop,
		width: edgeRight - edgeLeft,
		height: edgeBottom - edgeTop
	};
}
/**
* Compute the new crop rect for a locked-aspect-ratio corner resize.
*
* The opposite corner is the anchor. The dragged corner moves freely
* but the result is clamped to maintain the aspect ratio and stay
* within bounds.
*
* @param drag            The current drag state.
* @param clientX         Current mouse/touch X position in pixels.
* @param clientY         Current mouse/touch Y position in pixels.
* @param imageSize       The rendered image dimensions in pixels.
* @param bounds          The allowed crop area bounds.
* @param normalizedRatio The locked aspect ratio (width / height in normalized space).
* @param minCropSize     Minimum crop rect dimension in normalized space, per axis.
* @param driverAxis      Optional explicit driver axis. Used for keyboard
*                        resize, where one arrow axis should determine the step.
* @return The new crop rect in normalized coordinates.
*/
function computeLockedResizeRect(drag, clientX, clientY, imageSize, bounds, normalizedRatio, minCropSize = DEFAULT_MIN_CROP_SIZE, driverAxis) {
	if (normalizedRatio <= 0 || imageSize.width <= 0 || imageSize.height <= 0) return { ...drag.startRect };
	const dx = (clientX - drag.startX) / imageSize.width;
	const dy = (clientY - drag.startY) / imageSize.height;
	const s = drag.startRect;
	const handle = drag.handle;
	const anchorX = handle === "nw" || handle === "sw" ? s.x + s.width : s.x;
	const anchorY = handle === "nw" || handle === "ne" ? s.y + s.height : s.y;
	const dirX = handle === "nw" || handle === "sw" ? -1 : 1;
	const dirY = handle === "nw" || handle === "ne" ? -1 : 1;
	const draggedX = (handle === "nw" || handle === "sw" ? s.x : s.x + s.width) + dx;
	const draggedY = (handle === "nw" || handle === "ne" ? s.y : s.y + s.height) + dy;
	let distW = (draggedX - anchorX) * dirX;
	let distH = (draggedY - anchorY) * dirY;
	const minDistW = Math.max(minCropSize.width, minCropSize.height * normalizedRatio);
	const minDistH = minDistW / normalizedRatio;
	distW = Math.max(distW, minDistW);
	distH = Math.max(distH, minDistH);
	const pixelRatio = normalizedRatio * imageSize.width / imageSize.height;
	if (driverAxis === "width" || !driverAxis && distW * imageSize.width / (distH * imageSize.height) > pixelRatio) distH = distW / normalizedRatio;
	else distW = distH * normalizedRatio;
	const maxW = dirX > 0 ? bounds.maxX - anchorX : anchorX - bounds.minX;
	const maxH = dirY > 0 ? bounds.maxY - anchorY : anchorY - bounds.minY;
	if (distW > maxW) {
		distW = maxW;
		distH = distW / normalizedRatio;
	}
	if (distH > maxH) {
		distH = maxH;
		distW = distH * normalizedRatio;
	}
	distW = Math.max(distW, minDistW);
	distH = Math.max(distH, minDistH);
	return {
		x: dirX > 0 ? anchorX : anchorX - distW,
		y: dirY > 0 ? anchorY : anchorY - distH,
		width: distW,
		height: distH
	};
}
/**
* Compute the new crop rect for a resize that temporarily locks the
* aspect ratio to `drag.startRect`'s ratio (e.g. while Shift is held).
*
* Corner handles delegate to {@link computeLockedResizeRect}. Edge
* handles size the dragged axis freely, then expand the perpendicular
* axis symmetrically around the rect's center to preserve the ratio,
* clamping symmetrically so the rect stays within bounds.
*
* @param drag        The current drag state.
* @param clientX     Current mouse/touch X position in pixels.
* @param clientY     Current mouse/touch Y position in pixels.
* @param imageSize   The rendered image dimensions in pixels.
* @param bounds      The allowed crop area bounds.
* @param minCropSize Minimum crop rect dimension in normalized space, per axis.
* @return The new crop rect in normalized coordinates.
*/
function computeShiftLockedResizeRect(drag, clientX, clientY, imageSize, bounds, minCropSize = DEFAULT_MIN_CROP_SIZE) {
	const s = drag.startRect;
	const pixelW = s.width * imageSize.width;
	if (s.height * imageSize.height <= 0 || pixelW <= 0) return computeFreeResizeRect(drag, clientX, clientY, imageSize, bounds, minCropSize);
	const normalizedRatio = s.width / s.height;
	const handle = drag.handle;
	if (handle === "nw" || handle === "ne" || handle === "sw" || handle === "se") return computeLockedResizeRect(drag, clientX, clientY, imageSize, bounds, normalizedRatio, minCropSize);
	const free = computeFreeResizeRect(drag, clientX, clientY, imageSize, bounds, minCropSize);
	if (handle === "n" || handle === "s") {
		let newHeight = free.height;
		let newWidth = newHeight * normalizedRatio;
		const centerX = s.x + s.width / 2;
		const maxWidth = Math.min(centerX - bounds.minX, bounds.maxX - centerX) * 2;
		if (newWidth > maxWidth) {
			newWidth = maxWidth;
			newHeight = newWidth / normalizedRatio;
		}
		const minHeight = Math.max(minCropSize.height, minCropSize.width / normalizedRatio);
		if (newHeight < minHeight) {
			newHeight = minHeight;
			newWidth = newHeight * normalizedRatio;
		}
		const newY = handle === "n" ? s.y + s.height - newHeight : s.y;
		return {
			x: centerX - newWidth / 2,
			y: newY,
			width: newWidth,
			height: newHeight
		};
	}
	let newWidth = free.width;
	let newHeight = newWidth / normalizedRatio;
	const centerY = s.y + s.height / 2;
	const maxHeight = Math.min(centerY - bounds.minY, bounds.maxY - centerY) * 2;
	if (newHeight > maxHeight) {
		newHeight = maxHeight;
		newWidth = newHeight * normalizedRatio;
	}
	const minWidth = Math.max(minCropSize.width, minCropSize.height * normalizedRatio);
	if (newWidth < minWidth) {
		newWidth = minWidth;
		newHeight = newWidth / normalizedRatio;
	}
	return {
		x: handle === "w" ? s.x + s.width - newWidth : s.x,
		y: centerY - newHeight / 2,
		width: newWidth,
		height: newHeight
	};
}
var DEFAULT_MIN_CROP_SIZE;
function init_stencil_math() {
	return (init_stencil_math = __esmMin((() => {
		init_constants();
		DEFAULT_MIN_CROP_SIZE = {
			width: .05,
			height: .05
		};
	})))();
}
//#endregion
//#region ../packages/media-editor/src/image-editor/core/interaction-controller.ts
/**
* Get the natural image dimensions from cropper state, falling back to 1x1.
*
* @param state The current cropper state.
* @return The image dimensions.
*/
function getImageSizeFromState(state) {
	return state.image ? {
		width: state.image.naturalWidth,
		height: state.image.naturalHeight
	} : {
		width: 1,
		height: 1
	};
}
/**
* Get the distance between two touch points.
*
* @param t1 The first touch.
* @param t2 The second touch.
* @return The pixel distance between the two touches.
*/
function getTouchDistance(t1, t2) {
	const dx = t1.clientX - t2.clientX;
	const dy = t1.clientY - t2.clientY;
	return Math.sqrt(dx * dx + dy * dy);
}
var DOUBLE_TAP_TIME, DOUBLE_TAP_DISTANCE, ZOOM_ANIMATION_DURATION, InteractionController;
function init_interaction_controller() {
	return (init_interaction_controller = __esmMin((() => {
		init_constants();
		init_containment();
		DOUBLE_TAP_TIME = 300;
		DOUBLE_TAP_DISTANCE = 30;
		ZOOM_ANIMATION_DURATION = 200;
		InteractionController = class {
			options;
			/** Current drag/zoom status. */
			isDragging = false;
			isZooming = false;
			/** Active drag state during pointer interactions. */
			drag = null;
			/** Active touch state during touch interactions. */
			touch = null;
			/** Cleanup function for active touch listeners on document. */
			touchCleanup = null;
			/**
			* Cleanup function for active pointer-drag listeners on the
			* captured element. Set while a pointer drag is in progress so
			* `destroy()` can tear the drag down cleanly if the consumer
			* unmounts mid-drag. Cleared on pointerup/lostpointercapture.
			*/
			pointerCleanup = null;
			/** Last tap info for double-tap detection. */
			lastTap = null;
			/** Timer for the zoom animation state (double-tap). */
			zoomTimer;
			/** Timer for wheel gesture debounce. */
			wheelGestureTimer;
			/** Whether a wheel gesture is currently active. */
			wheelGestureActive = false;
			/** Current requestAnimationFrame ID. */
			rafId = 0;
			constructor(options) {
				this.options = options;
			}
			/** Read minZoom lazily so option changes take effect immediately. */
			get minZoom() {
				return this.options.minZoom ?? 1;
			}
			/** Read maxZoom lazily so option changes take effect immediately. */
			get maxZoom() {
				return this.options.maxZoom ?? 10;
			}
			/** Read zoomSpeed lazily so option changes take effect immediately. */
			get zoomSpeed() {
				return this.options.zoomSpeed ?? .0025;
			}
			/** Read keyboardStep lazily so option changes take effect immediately. */
			get keyboardStep() {
				return this.options.keyboardStep ?? .01;
			}
			/**
			* Get the keyboard pan step, including modifier-based coarse movement.
			*
			* @param event The native KeyboardEvent.
			* @return The normalized pan step.
			*/
			getKeyboardStep(event) {
				return event.shiftKey ? this.keyboardStep * 10 : this.keyboardStep;
			}
			/** Read doubleTapZoom lazily so option changes take effect immediately. */
			get doubleTapZoom() {
				return this.options.doubleTapZoom ?? 2;
			}
			/**
			* Update the drag/zoom status and notify via callback if changed.
			*
			* @param update Partial status with isDragging and/or isZooming.
			*/
			setStatus(update) {
				let changed = false;
				if (update.isDragging !== void 0 && update.isDragging !== this.isDragging) {
					this.isDragging = update.isDragging;
					changed = true;
				}
				if (update.isZooming !== void 0 && update.isZooming !== this.isZooming) {
					this.isZooming = update.isZooming;
					changed = true;
				}
				if (changed) this.options.onStatusChange?.({
					isDragging: this.isDragging,
					isZooming: this.isZooming
				});
			}
			/**
			* Handle a pointer-down event on the container element.
			*
			* Initiates a drag (pan) interaction. Captures the pointer on the
			* provided element and registers pointermove/pointerup/lostpointercapture
			* listeners for the duration of the drag.
			*
			* @param e  The native PointerEvent.
			* @param el The DOM element to capture the pointer on.
			*/
			handlePointerDown(e, el) {
				if (e.button !== 0) return;
				if (e.pointerType === "touch") return;
				e.preventDefault();
				const ownerDoc = el.ownerDocument;
				if (ownerDoc?.activeElement instanceof HTMLElement && ownerDoc.activeElement !== el) ownerDoc.activeElement.blur();
				el.focus();
				el.setPointerCapture(e.pointerId);
				if (this.wheelGestureActive) {
					clearTimeout(this.wheelGestureTimer);
					this.wheelGestureActive = false;
					this.options.onGestureEnd?.();
				}
				this.setStatus({ isDragging: true });
				this.options.onGestureStart?.();
				const currentState = this.options.getState();
				this.drag = {
					startX: e.clientX,
					startY: e.clientY,
					startPanX: currentState.pan.x,
					startPanY: currentState.pan.y
				};
				const onPointerMove = (moveEvent) => {
					const drag = this.drag;
					if (!drag) return;
					const pe = moveEvent;
					cancelAnimationFrame(this.rafId);
					this.rafId = requestAnimationFrame(() => {
						const s = this.options.getState();
						const imgSize = this.options.getImageSize();
						const containerSize = this.options.getContainerSize();
						const panSize = imgSize ?? containerSize;
						const deltaX = panSize.width > 0 ? (pe.clientX - drag.startX) / panSize.width : 0;
						const deltaY = panSize.height > 0 ? (pe.clientY - drag.startY) / panSize.height : 0;
						const { pan: newCrop } = restrictPanZoom({
							...s,
							pan: {
								x: drag.startPanX + deltaX,
								y: drag.startPanY + deltaY
							}
						}, getImageSizeFromState(s), s.cropRect);
						this.options.actions.setPan(newCrop);
					});
				};
				const removeListeners = () => {
					el.removeEventListener("pointermove", onPointerMove);
					el.removeEventListener("pointerup", onPointerUp);
					el.removeEventListener("lostpointercapture", onPointerUp);
				};
				const onPointerUp = () => {
					this.setStatus({ isDragging: false });
					this.options.onGestureEnd?.();
					this.drag = null;
					cancelAnimationFrame(this.rafId);
					removeListeners();
					this.pointerCleanup = null;
				};
				el.addEventListener("pointermove", onPointerMove);
				el.addEventListener("pointerup", onPointerUp);
				el.addEventListener("lostpointercapture", onPointerUp);
				this.pointerCleanup = removeListeners;
			}
			/**
			* Handle a wheel event on the container element.
			*
			* Implements focal-point zoom: the point under the cursor stays
			* stationary on screen while the zoom level changes.
			*
			* Must be registered with `{ passive: false }` to allow preventDefault.
			*
			* @param e The native WheelEvent.
			*/
			handleWheel(e) {
				e.preventDefault();
				if (this.drag) return;
				if (!this.wheelGestureActive) {
					this.wheelGestureActive = true;
					this.options.onGestureStart?.();
				}
				clearTimeout(this.wheelGestureTimer);
				this.wheelGestureTimer = setTimeout(() => {
					this.wheelGestureActive = false;
					this.options.onGestureEnd?.();
				}, DOUBLE_TAP_TIME);
				const s = this.options.getState();
				const delta = -e.deltaY * this.zoomSpeed;
				const newZoom = Math.min(this.maxZoom, Math.max(this.minZoom, s.zoom + delta));
				if (newZoom === s.zoom) return;
				const containerSize = this.options.getContainerSize();
				const visSize = this.options.getImageSize() ?? containerSize;
				const target = e.currentTarget;
				const rect = target instanceof Element ? target.getBoundingClientRect() : void 0;
				if (visSize.width > 0 && visSize.height > 0 && rect) {
					const fx = e.clientX - rect.left - containerSize.width / 2;
					const fy = e.clientY - rect.top - containerSize.height / 2;
					const zoomRatio = 1 - newZoom / s.zoom;
					const focalNormX = fx / visSize.width;
					const focalNormY = fy / visSize.height;
					const newCropX = s.pan.x + (focalNormX - s.pan.x) * zoomRatio;
					const newCropY = s.pan.y + (focalNormY - s.pan.y) * zoomRatio;
					const { pan: clampedCrop } = restrictPanZoom({
						...s,
						zoom: newZoom,
						pan: {
							x: newCropX,
							y: newCropY
						}
					}, getImageSizeFromState(s), s.cropRect);
					this.options.actions.setZoomAtPoint(newZoom, clampedCrop);
				} else this.options.actions.setZoom(newZoom);
			}
			/**
			* Handle a touch-start event on the container element.
			*
			* Supports single-finger pan, two-finger pinch zoom, and
			* double-tap to toggle between fit and 2x zoom. Registers
			* touchmove/touchend/touchcancel on the provided document for the
			* duration of the gesture.
			*
			* @param e             The native TouchEvent.
			* @param containerRect The bounding rect of the container element.
			* @param doc           The document to register move/end listeners on.
			*                      Defaults to globalThis.document. Pass the iframe's
			*                      contentDocument when running inside an iframe.
			*/
			handleTouchStart(e, containerRect, doc = document) {
				if (this.touch && e.touches.length === 2) {
					const s = this.options.getState();
					const distance = getTouchDistance(e.touches[0], e.touches[1]);
					const midX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
					const midY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
					this.touch.didPinch = true;
					this.touch.startDistance = distance;
					this.touch.startZoom = s.zoom;
					this.touch.startPanX = s.pan.x;
					this.touch.startPanY = s.pan.y;
					this.touch.startMidX = midX;
					this.touch.startMidY = midY;
					this.touch.containerRect = containerRect;
					this.setStatus({ isDragging: false });
					return;
				}
				if (e.touches.length === 1) {
					const tapX = e.touches[0].clientX;
					const tapY = e.touches[0].clientY;
					if (this.tryDoubleTap(e, tapX, tapY, containerRect)) return;
					const currentState = this.options.getState();
					this.touch = {
						startDistance: 0,
						startZoom: currentState.zoom,
						lastTouchX: e.touches[0].clientX,
						lastTouchY: e.touches[0].clientY,
						startPanX: currentState.pan.x,
						startPanY: currentState.pan.y,
						containerRect,
						startMidX: 0,
						startMidY: 0,
						didPinch: false,
						moved: false
					};
					this.options.onGestureStart?.();
				} else if (e.touches.length === 2) {
					const currentState = this.options.getState();
					const distance = getTouchDistance(e.touches[0], e.touches[1]);
					const midX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
					const midY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
					this.touch = {
						startDistance: distance,
						startZoom: currentState.zoom,
						lastTouchX: 0,
						lastTouchY: 0,
						startPanX: currentState.pan.x,
						startPanY: currentState.pan.y,
						containerRect,
						startMidX: midX,
						startMidY: midY,
						didPinch: true,
						moved: false
					};
					this.options.onGestureStart?.();
				}
				const onTouchEnd = () => {
					this.touch = null;
					this.touchCleanup = null;
					cancelAnimationFrame(this.rafId);
					doc.removeEventListener("touchmove", this.handleTouchMove);
					doc.removeEventListener("touchend", onTouchEnd);
					doc.removeEventListener("touchcancel", onTouchEnd);
					this.setStatus({ isDragging: false });
					this.options.onGestureEnd?.();
				};
				this.touchCleanup?.();
				doc.addEventListener("touchmove", this.handleTouchMove, { passive: false });
				doc.addEventListener("touchend", onTouchEnd);
				doc.addEventListener("touchcancel", onTouchEnd);
				this.touchCleanup = onTouchEnd;
			}
			handleTouchMove = (moveEvent) => {
				const touch = this.touch;
				if (!touch) return;
				moveEvent.preventDefault();
				cancelAnimationFrame(this.rafId);
				this.rafId = requestAnimationFrame(() => {
					const s = this.options.getState();
					if (moveEvent.touches.length === 2) {
						if (!touch.didPinch) {
							touch.didPinch = true;
							touch.startDistance = getTouchDistance(moveEvent.touches[0], moveEvent.touches[1]);
							touch.startZoom = s.zoom;
							touch.startPanX = s.pan.x;
							touch.startPanY = s.pan.y;
							touch.startMidX = (moveEvent.touches[0].clientX + moveEvent.touches[1].clientX) / 2;
							touch.startMidY = (moveEvent.touches[0].clientY + moveEvent.touches[1].clientY) / 2;
							this.setStatus({ isDragging: false });
							return;
						}
						const latestContainerSize = this.options.getContainerSize();
						const latestImageSize = this.options.getImageSize();
						const t0 = moveEvent.touches[0];
						const t1 = moveEvent.touches[1];
						const ratio = getTouchDistance(t0, t1) / touch.startDistance;
						const newZoom = Math.min(this.maxZoom, Math.max(this.minZoom, touch.startZoom * ratio));
						const visSize = latestImageSize ?? latestContainerSize;
						const rect = touch.containerRect;
						if (visSize.width > 0 && visSize.height > 0 && rect) {
							const mx = (t0.clientX + t1.clientX) / 2 - rect.left - latestContainerSize.width / 2;
							const my = (t0.clientY + t1.clientY) / 2 - rect.top - latestContainerSize.height / 2;
							const startMx = touch.startMidX - rect.left - latestContainerSize.width / 2;
							const startMy = touch.startMidY - rect.top - latestContainerSize.height / 2;
							const panDx = visSize.width > 0 ? (mx - startMx) / visSize.width : 0;
							const panDy = visSize.height > 0 ? (my - startMy) / visSize.height : 0;
							const zoomRatio = touch.startZoom !== 0 ? 1 - newZoom / touch.startZoom : 0;
							const startFocalNormX = startMx / visSize.width;
							const startFocalNormY = startMy / visSize.height;
							const newCropX = touch.startPanX + panDx + (startFocalNormX - touch.startPanX) * zoomRatio;
							const newCropY = touch.startPanY + panDy + (startFocalNormY - touch.startPanY) * zoomRatio;
							const { pan: clampedCrop } = restrictPanZoom({
								...s,
								zoom: newZoom,
								pan: {
									x: newCropX,
									y: newCropY
								}
							}, getImageSizeFromState(s), s.cropRect);
							this.options.actions.setZoomAtPoint(newZoom, clampedCrop);
						} else if (newZoom !== s.zoom) this.options.actions.setZoom(newZoom);
					} else if (moveEvent.touches.length === 1 && !touch.didPinch) {
						if (!touch.moved) {
							touch.moved = true;
							this.setStatus({ isDragging: true });
						}
						const panImageSize = this.options.getImageSize();
						const panContainerSize = this.options.getContainerSize();
						const panSize = panImageSize ?? panContainerSize;
						const deltaX = panSize.width > 0 ? (moveEvent.touches[0].clientX - touch.lastTouchX) / panSize.width : 0;
						const deltaY = panSize.height > 0 ? (moveEvent.touches[0].clientY - touch.lastTouchY) / panSize.height : 0;
						const { pan: newCrop } = restrictPanZoom({
							...s,
							pan: {
								x: touch.startPanX + deltaX,
								y: touch.startPanY + deltaY
							}
						}, getImageSizeFromState(s), s.cropRect);
						this.options.actions.setPan(newCrop);
					}
				});
			};
			tryDoubleTap(e, tapX, tapY, containerRect) {
				const now = Date.now();
				const lastTap = this.lastTap;
				if (!lastTap) {
					this.lastTap = {
						time: now,
						x: tapX,
						y: tapY
					};
					return false;
				}
				const timeDelta = now - lastTap.time;
				const distDelta = Math.sqrt((tapX - lastTap.x) ** 2 + (tapY - lastTap.y) ** 2);
				if (!(timeDelta < DOUBLE_TAP_TIME && distDelta < DOUBLE_TAP_DISTANCE)) {
					this.lastTap = {
						time: now,
						x: tapX,
						y: tapY
					};
					return false;
				}
				e.preventDefault();
				this.lastTap = null;
				const currentState = this.options.getState();
				const containerSize = this.options.getContainerSize();
				const imgSize = this.options.getImageSize();
				const targetZoom = currentState.zoom > (this.minZoom + this.doubleTapZoom) / 2 ? this.minZoom : this.doubleTapZoom;
				const visSize = imgSize ?? containerSize;
				this.setStatus({ isZooming: true });
				clearTimeout(this.zoomTimer);
				this.zoomTimer = setTimeout(() => {
					this.setStatus({ isZooming: false });
				}, ZOOM_ANIMATION_DURATION);
				this.options.onGestureStart?.();
				if (visSize.width > 0 && visSize.height > 0) {
					const fx = tapX - containerRect.left - containerSize.width / 2;
					const fy = tapY - containerRect.top - containerSize.height / 2;
					const zoomRatio = 1 - targetZoom / currentState.zoom;
					const focalNormX = fx / visSize.width;
					const focalNormY = fy / visSize.height;
					const newCropX = currentState.pan.x + (focalNormX - currentState.pan.x) * zoomRatio;
					const newCropY = currentState.pan.y + (focalNormY - currentState.pan.y) * zoomRatio;
					const { pan: clampedCrop } = restrictPanZoom({
						...currentState,
						zoom: targetZoom,
						pan: {
							x: newCropX,
							y: newCropY
						}
					}, getImageSizeFromState(currentState), currentState.cropRect);
					this.options.actions.setZoomAtPoint(targetZoom, clampedCrop);
				} else this.options.actions.setZoom(targetZoom);
				this.options.onGestureEnd?.();
				return true;
			}
			/**
			* Handle a keydown event on the container element.
			*
			* Supports arrow keys for panning, +/- for zoom, and r/R for rotation.
			*
			* @param e The native KeyboardEvent.
			*/
			handleKeyDown(e) {
				const currentState = this.options.getState();
				switch (e.key) {
					case "ArrowUp": {
						e.preventDefault();
						const keyboardStep = this.getKeyboardStep(e);
						const { pan: newCrop } = restrictPanZoom({
							...currentState,
							pan: {
								x: currentState.pan.x,
								y: currentState.pan.y + keyboardStep
							}
						}, getImageSizeFromState(currentState), currentState.cropRect);
						this.options.actions.setPan(newCrop);
						break;
					}
					case "ArrowDown": {
						e.preventDefault();
						const keyboardStep = this.getKeyboardStep(e);
						const { pan: newCrop } = restrictPanZoom({
							...currentState,
							pan: {
								x: currentState.pan.x,
								y: currentState.pan.y - keyboardStep
							}
						}, getImageSizeFromState(currentState), currentState.cropRect);
						this.options.actions.setPan(newCrop);
						break;
					}
					case "ArrowLeft": {
						e.preventDefault();
						const keyboardStep = this.getKeyboardStep(e);
						const { pan: newCrop } = restrictPanZoom({
							...currentState,
							pan: {
								x: currentState.pan.x + keyboardStep,
								y: currentState.pan.y
							}
						}, getImageSizeFromState(currentState), currentState.cropRect);
						this.options.actions.setPan(newCrop);
						break;
					}
					case "ArrowRight": {
						e.preventDefault();
						const keyboardStep = this.getKeyboardStep(e);
						const { pan: newCrop } = restrictPanZoom({
							...currentState,
							pan: {
								x: currentState.pan.x - keyboardStep,
								y: currentState.pan.y
							}
						}, getImageSizeFromState(currentState), currentState.cropRect);
						this.options.actions.setPan(newCrop);
						break;
					}
					case "+":
					case "=": {
						e.preventDefault();
						const newZoom = Math.min(this.maxZoom, Math.max(this.minZoom, currentState.zoom + .5));
						this.options.actions.setZoom(newZoom);
						break;
					}
					case "-":
					case "_": {
						e.preventDefault();
						const newZoom = Math.min(this.maxZoom, Math.max(this.minZoom, currentState.zoom - .5));
						this.options.actions.setZoom(newZoom);
						break;
					}
					case "r":
					case "R":
						if (e.metaKey || e.ctrlKey || e.altKey) break;
						e.preventDefault();
						this.options.actions.snapRotate90(e.shiftKey ? -1 : 1);
						break;
					case "h":
					case "H":
						if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) break;
						e.preventDefault();
						this.options.actions.toggleFlip?.("horizontal");
						break;
					case "v":
					case "V":
						if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) break;
						e.preventDefault();
						this.options.actions.toggleFlip?.("vertical");
				}
			}
			/**
			* Clean up all timers, animation frames, and active touch listeners.
			*
			* Must be called when the controller is no longer needed (e.g., on
			* component unmount or element removal).
			*/
			destroy() {
				cancelAnimationFrame(this.rafId);
				clearTimeout(this.zoomTimer);
				clearTimeout(this.wheelGestureTimer);
				this.touchCleanup?.();
				this.touchCleanup = null;
				this.pointerCleanup?.();
				this.pointerCleanup = null;
				this.drag = null;
				this.touch = null;
				this.lastTap = null;
				this.wheelGestureActive = false;
				this.isDragging = false;
				this.isZooming = false;
			}
		};
	})))();
}
//#endregion
//#region ../packages/media-editor/src/image-editor/react/hooks/use-interaction.ts
function isHandledKeyboardPan(event) {
	switch (event.key) {
		case "ArrowUp":
		case "ArrowDown":
		case "ArrowLeft":
		case "ArrowRight": return true;
		default: return false;
	}
}
function isHandledKeyboardZoom(event) {
	switch (event.key) {
		case "+":
		case "=":
		case "-":
		case "_": return true;
		default: return false;
	}
}
/**
* Mouse, touch, and keyboard event handling for pan, zoom,
* and crop manipulation.
*
* Returns event handler props to spread on the container element.
* Uses requestAnimationFrame for drag/pinch updates to avoid
* layout thrashing.
*
* @param state         The current cropper state.
* @param actions       Named state updates for cropper interactions.
* @param containerSize The container dimensions in pixels.
* @param imageSize     The rendered image dimensions in pixels.
* @param options       Optional configuration for zoom and keyboard behavior.
* @return Event handler props for the container element.
*/
function useInteraction(state, actions, containerSize, imageSize, options) {
	const [isDragging, setIsDragging] = (0, import_react.useState)(false);
	const [isZooming, setIsZooming] = (0, import_react.useState)(false);
	const [isGestureActive, setIsGestureActive] = (0, import_react.useState)(false);
	const [isKeyboardPanning, setIsKeyboardPanning] = (0, import_react.useState)(false);
	const keyboardInteractionTimerRef = (0, import_react.useRef)(void 0);
	const isKeyboardGestureActiveRef = (0, import_react.useRef)(false);
	const stateRef = (0, import_react.useRef)(state);
	stateRef.current = state;
	const containerSizeRef = (0, import_react.useRef)(containerSize);
	containerSizeRef.current = containerSize;
	const imageSizeRef = (0, import_react.useRef)(imageSize);
	imageSizeRef.current = imageSize;
	const optionsRef = (0, import_react.useRef)(options);
	optionsRef.current = options;
	const actionsRef = (0, import_react.useRef)(actions);
	actionsRef.current = actions;
	const controllerRef = (0, import_react.useRef)(null);
	const startPlacementGesture = (0, import_react.useCallback)(() => {
		setIsGestureActive(true);
	}, []);
	const stopPlacementGesture = (0, import_react.useCallback)(() => {
		setIsGestureActive(false);
	}, []);
	const signalKeyboardGesture = (0, import_react.useCallback)(() => {
		if (!isKeyboardGestureActiveRef.current) {
			isKeyboardGestureActiveRef.current = true;
			optionsRef.current?.onGestureStart?.();
		}
		clearTimeout(keyboardInteractionTimerRef.current);
		keyboardInteractionTimerRef.current = setTimeout(() => {
			isKeyboardGestureActiveRef.current = false;
			setIsKeyboardPanning(false);
			optionsRef.current?.onGestureEnd?.();
		}, KEYBOARD_INTERACTION_IDLE_MS);
	}, []);
	(0, import_react.useEffect)(() => {
		return () => {
			clearTimeout(keyboardInteractionTimerRef.current);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const controller = new InteractionController({
			getState: () => stateRef.current,
			actions: {
				setPan: (pan) => actionsRef.current.setPan(pan),
				setZoom: (zoom) => actionsRef.current.setZoom(zoom),
				setZoomAtPoint: (zoom, pan) => actionsRef.current.setZoomAtPoint(zoom, pan),
				snapRotate90: (direction) => actionsRef.current.snapRotate90(direction),
				toggleFlip: (direction) => actionsRef.current.toggleFlip?.(direction)
			},
			getContainerSize: () => containerSizeRef.current,
			getImageSize: () => imageSizeRef.current,
			get minZoom() {
				return optionsRef.current?.minZoom;
			},
			get maxZoom() {
				return optionsRef.current?.maxZoom;
			},
			get zoomSpeed() {
				return optionsRef.current?.zoomSpeed;
			},
			get keyboardStep() {
				return optionsRef.current?.keyboardStep;
			},
			get doubleTapZoom() {
				return optionsRef.current?.doubleTapZoom;
			},
			onGestureStart: () => {
				startPlacementGesture();
				optionsRef.current?.onGestureStart?.();
			},
			onGestureEnd: () => {
				stopPlacementGesture();
				optionsRef.current?.onGestureEnd?.();
			},
			onStatusChange: (status) => {
				setIsDragging(status.isDragging);
				setIsZooming(status.isZooming);
			}
		});
		controllerRef.current = controller;
		return () => {
			controller.destroy();
			controllerRef.current = null;
		};
	}, [startPlacementGesture, stopPlacementGesture]);
	const isDisabled = options?.disabled ?? false;
	(0, import_react.useEffect)(() => {
		if (!isDisabled) return;
		controllerRef.current?.destroy();
		setIsDragging(false);
		setIsZooming(false);
		setIsKeyboardPanning(false);
		const wasGestureOpen = isGestureActive || isKeyboardGestureActiveRef.current;
		if (isKeyboardGestureActiveRef.current) {
			isKeyboardGestureActiveRef.current = false;
			clearTimeout(keyboardInteractionTimerRef.current);
		}
		stopPlacementGesture();
		if (wasGestureOpen) optionsRef.current?.onGestureEnd?.();
	}, [
		isDisabled,
		isGestureActive,
		stopPlacementGesture
	]);
	const onPointerDown = (0, import_react.useCallback)((e) => {
		if (optionsRef.current?.disabled) return;
		const el = e.currentTarget;
		controllerRef.current?.handlePointerDown(e.nativeEvent, el);
	}, []);
	const onTouchStart = (0, import_react.useCallback)((e) => {
		if (optionsRef.current?.disabled) return;
		const el = e.currentTarget;
		const rect = el.getBoundingClientRect();
		controllerRef.current?.handleTouchStart(e.nativeEvent, rect, el.ownerDocument);
	}, []);
	const onKeyDown = (0, import_react.useCallback)((e) => {
		if (optionsRef.current?.disabled) return;
		if (isHandledKeyboardPan(e.nativeEvent)) {
			setIsKeyboardPanning(true);
			signalKeyboardGesture();
		} else if (isHandledKeyboardZoom(e.nativeEvent)) signalKeyboardGesture();
		controllerRef.current?.handleKeyDown(e.nativeEvent);
	}, [signalKeyboardGesture]);
	const onWheelNative = (0, import_react.useCallback)((e) => {
		if (optionsRef.current?.disabled) return;
		controllerRef.current?.handleWheel(e);
	}, []);
	return {
		handlers: {
			onPointerDown,
			onTouchStart,
			onKeyDown
		},
		onWheelNative,
		isDragging,
		isZooming,
		isPlacementActive: isGestureActive || isKeyboardPanning || isZooming
	};
}
var KEYBOARD_INTERACTION_IDLE_MS;
function init_use_interaction() {
	return (init_use_interaction = __esmMin((() => {
		init_react();
		init_interaction_controller();
		KEYBOARD_INTERACTION_IDLE_MS = 300;
	})))();
}
//#endregion
//#region ../packages/media-editor/src/image-editor/core/transform-style.ts
/**
* Computes a CSS matrix() transform string from the cropper state.
*
* The combined transform is: translate(tx, ty) * scale(sx, sy) * rotate(r) * scale(z)
* expressed as a 2D CSS matrix(a, b, c, d, tx, ty).
*
* Flip is composed outside rotation so it is viewport-relative — horizontal
* flip mirrors across the viewport's vertical axis regardless of rotation.
* Must match the matrix order in `createCamera` / `getImageCropBounds`.
*
* This is a pure function with no framework dependencies. The React hook
* `useTransformStyle` wraps this in `useMemo` for memoization.
*
* @param state     The current cropper state.
* @param imageSize The rendered image dimensions in pixels.
* @return A CSS transform string.
*/
function computeTransformStyle(state, imageSize) {
	if (!isValidSize(imageSize)) return IDENTITY_MATRIX_STYLE;
	const safeState = sanitizeCropperState(state);
	const translateX = safeState.pan.x * imageSize.width;
	const translateY = safeState.pan.y * imageSize.height;
	const rad = degreesToRadians(safeState.rotation);
	const cos = Math.cos(rad);
	const sin = Math.sin(rad);
	const sx = safeState.flip.horizontal ? -1 : 1;
	const sy = safeState.flip.vertical ? -1 : 1;
	const z = safeState.zoom;
	return `matrix(${sx * cos * z}, ${sy * sin * z}, ${-sx * sin * z}, ${sy * cos * z}, ${translateX}, ${translateY})`;
}
var IDENTITY_MATRIX_STYLE;
function init_transform_style() {
	return (init_transform_style = __esmMin((() => {
		init_sanitize();
		IDENTITY_MATRIX_STYLE = "matrix(1, 0, 0, 1, 0, 0)";
	})))();
}
//#endregion
//#region ../packages/media-editor/src/image-editor/react/hooks/use-transform-style.ts
/**
* React hook that computes a memoized CSS matrix() transform string
* from the cropper state.
*
* Delegates to the pure `computeTransformStyle` function in core.
*
* @param state     The current cropper state.
* @param imageSize The rendered image dimensions in pixels.
* @return A CSS transform string.
*/
function useTransformStyle(state, imageSize) {
	return (0, import_react.useMemo)(() => computeTransformStyle(state, imageSize), [state, imageSize]);
}
function init_use_transform_style() {
	return (init_use_transform_style = __esmMin((() => {
		init_react();
		init_transform_style();
	})))();
}
//#endregion
//#region ../packages/media-editor/src/image-editor/core/source-region.ts
/**
* Get the selected image region in source-pixel coordinates.
*
* Converts the current crop state (normalized visual space) to the actual
* region of the original image that's selected. This is the bridge between
* the cropper's internal coordinate system and external tools (image
* processing libraries, AI APIs, server-side processing) that work in
* source-pixel coordinates.
*
* The returned rectangle accounts for pan, zoom, and the crop rect position,
* but expresses the crop in the unrotated image's coordinate space. Rotation
* and flip are included as separate fields since they represent transforms,
* not a region.
*
* @param state     The current cropper state.
* @param imageSize The natural dimensions of the source image.
* @return The selected region in source pixels plus rotation/flip metadata.
*/
function getSourceRegion(state, imageSize) {
	const safeState = sanitizeCropperState(state);
	if (!isValidSize(imageSize)) return {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		rotation: safeState.rotation,
		flip: { ...safeState.flip },
		zoom: safeState.zoom
	};
	const syntheticContainer = {
		width: 1e3,
		height: 1e3
	};
	const camera = createCamera(safeState, syntheticContainer, imageSize);
	const inv = create$1();
	invert(inv, camera);
	const visibleBounds = getVisibleBounds(createCamera({
		...safeState,
		pan: {
			x: 0,
			y: 0
		},
		zoom: 1
	}, syntheticContainer, imageSize));
	const cropRect = safeState.cropRect;
	const cropCenterScreenX = visibleBounds.left + (cropRect.x + cropRect.width / 2) * visibleBounds.width;
	const cropCenterScreenY = visibleBounds.top + (cropRect.y + cropRect.height / 2) * visibleBounds.height;
	const srcCenter = create();
	transformMat2d(srcCenter, [cropCenterScreenX, cropCenterScreenY], inv);
	const snapRotation = Math.round(safeState.rotation / 90) * 90;
	const { width: rotW, height: rotH } = getRotatedBBox(imageSize.width, imageSize.height, snapRotation);
	const sourceW = cropRect.width * rotW / safeState.zoom;
	const sourceH = cropRect.height * rotH / safeState.zoom;
	return {
		x: srcCenter[0] * imageSize.width - sourceW / 2,
		y: srcCenter[1] * imageSize.height - sourceH / 2,
		width: sourceW,
		height: sourceH,
		rotation: safeState.rotation,
		flip: { ...safeState.flip },
		zoom: safeState.zoom
	};
}
/**
* Convert a source-pixel region back to the cropper's normalized crop rect.
*
* The math intentionally mirrors `getSourceRegion`: map the requested source
* center through the current camera, then express that screen point inside the
* same base visible bounds used to position crop overlays.
*
* @param state     The current cropper state.
* @param imageSize The natural dimensions of the source image.
* @param region    The source-pixel region to represent as a crop rect.
* @return The normalized crop rect, or null when inputs cannot be mapped.
*/
function getCropRectFromSourceRegion(state, imageSize, region) {
	if (!isValidSize(imageSize) || region.width <= 0 || region.height <= 0) return null;
	const safeState = sanitizeCropperState(state);
	const syntheticContainer = {
		width: 1e3,
		height: 1e3
	};
	const visibleBounds = getVisibleBounds(createCamera({
		...safeState,
		pan: {
			x: 0,
			y: 0
		},
		zoom: 1
	}, syntheticContainer, imageSize));
	if (visibleBounds.width <= 0 || visibleBounds.height <= 0) return null;
	const sourceCenter = fromValues((region.x + region.width / 2) / imageSize.width, (region.y + region.height / 2) / imageSize.height);
	const screenCenter = create();
	transformMat2d(screenCenter, sourceCenter, createCamera(safeState, syntheticContainer, imageSize));
	const snapRotation = Math.round(safeState.rotation / 90) * 90;
	const { width: rotW, height: rotH } = getRotatedBBox(imageSize.width, imageSize.height, snapRotation);
	if (rotW <= 0 || rotH <= 0) return null;
	const width = region.width * safeState.zoom / rotW;
	const height = region.height * safeState.zoom / rotH;
	const centerX = (screenCenter[0] - visibleBounds.left) / visibleBounds.width;
	const centerY = (screenCenter[1] - visibleBounds.top) / visibleBounds.height;
	return {
		x: centerX - width / 2,
		y: centerY - height / 2,
		width,
		height
	};
}
/**
* Check whether a rotation is effectively at a 90-degree stop.
*
* @param rotation The rotation angle in degrees.
* @return Whether the rotation is close enough to a cardinal angle.
*/
function isCardinalRotation(rotation) {
	const normalizedRotation = normalizeRotation(rotation);
	const nearestCardinal = Math.round(normalizedRotation / 90) * 90;
	return Math.abs(normalizedRotation - nearestCardinal) < CARDINAL_ROTATION_EPSILON$1;
}
/**
* Snap a crop rect so the selected source-region edges land on whole pixels.
*
* This is a display-time affordance for visible pixel grids; it does not alter
* pan/zoom/rotation. Callers decide when snapping is appropriate.
*
* @param state     The current cropper state.
* @param imageSize The natural dimensions of the source image.
* @param cropRect  The candidate crop rect from resize math.
* @param handle    The active resize handle. Only edges moved by the handle snap.
* @return A crop rect whose selected source-region edges are whole pixels.
*/
function snapCropRectToSourcePixels(state, imageSize, cropRect, handle) {
	const safeState = sanitizeCropperState(state);
	if (!isCardinalRotation(safeState.rotation)) return cropRect;
	return snapCropRectEdgesToSourcePixels(safeState, imageSize, cropRect, {
		left: handle.includes("w"),
		top: handle.includes("n"),
		right: handle.includes("e"),
		bottom: handle.includes("s")
	});
}
/**
* Snap all source-region edges for a crop rect to the nearest whole pixels.
*
* @param state     The current cropper state.
* @param imageSize The natural dimensions of the source image.
* @param cropRect  The crop rect to align to the source-pixel grid.
* @return A crop rect whose source-region edges are whole pixels.
*/
function snapCropRectToSourcePixelGrid(state, imageSize, cropRect) {
	return snapCropRectEdgesToSourcePixels(state, imageSize, cropRect, {
		left: true,
		top: true,
		right: true,
		bottom: true
	});
}
function snapCropRectEdgesToSourcePixels(state, imageSize, cropRect, edges) {
	if (!isValidSize(imageSize)) return cropRect;
	const stateWithCrop = sanitizeCropperState({
		...state,
		cropRect
	});
	const region = getSourceRegion(stateWithCrop, imageSize);
	const shouldSnapX = edges.left || edges.right;
	const shouldSnapY = edges.top || edges.bottom;
	const left = edges.left ? Math.round(region.x) : region.x;
	const top = edges.top ? Math.round(region.y) : region.y;
	const right = edges.right ? Math.round(region.x + region.width) : region.x + region.width;
	const bottom = edges.bottom ? Math.round(region.y + region.height) : region.y + region.height;
	if (right <= left || bottom <= top) return cropRect;
	const snappedCropRect = getCropRectFromSourceRegion(stateWithCrop, imageSize, {
		...region,
		x: left,
		y: top,
		width: right - left,
		height: bottom - top
	});
	if (!snappedCropRect) return cropRect;
	return {
		x: shouldSnapX ? snappedCropRect.x : cropRect.x,
		y: shouldSnapY ? snappedCropRect.y : cropRect.y,
		width: shouldSnapX ? snappedCropRect.width : cropRect.width,
		height: shouldSnapY ? snappedCropRect.height : cropRect.height
	};
}
var CARDINAL_ROTATION_EPSILON$1;
function init_source_region() {
	return (init_source_region = __esmMin((() => {
		init_mat2d(), init_vec2();
		init_camera();
		init_sanitize();
		CARDINAL_ROTATION_EPSILON$1 = 1e-6;
	})))();
}
//#endregion
//#region ../packages/media-editor/src/image-editor/react/hooks/use-aria-announcer.ts
function getFlipAnnouncement(state, previousState) {
	if (!previousState || previousState.flip.horizontal === state.flip.horizontal && previousState.flip.vertical === state.flip.vertical) return;
	const { horizontal, vertical } = state.flip;
	if (horizontal && vertical) return __("Flipped horizontally and vertically");
	if (horizontal) return __("Flipped horizontally");
	if (vertical) return __("Flipped vertically");
	return __("Flip removed");
}
function getRotationAnnouncement(state, previousState) {
	if (previousState && Math.round(previousState.rotation) === Math.round(state.rotation)) return;
	const visualDir = state.flip.horizontal !== state.flip.vertical ? -1 : 1;
	let visualRotation = Math.round(state.rotation) * visualDir % 360;
	if (visualRotation > 180) visualRotation -= 360;
	if (visualRotation <= -180) visualRotation += 360;
	if (visualRotation === 0) return previousState ? __("Rotation 0 degrees") : void 0;
	if (visualRotation > 0) return sprintf(__("Rotated %d degrees clockwise"), visualRotation);
	return sprintf(__("Rotated %d degrees counterclockwise"), Math.abs(visualRotation));
}
function getCropAnnouncement(state, previousState) {
	if (!state.image) return;
	const imageSize = {
		width: state.image.naturalWidth,
		height: state.image.naturalHeight
	};
	const region = getSourceRegion(state, imageSize);
	if (previousState?.image) {
		const previousRegion = getSourceRegion({
			...state,
			cropRect: previousState.cropRect
		}, imageSize);
		if (Math.round(previousRegion.width) === Math.round(region.width) && Math.round(previousRegion.height) === Math.round(region.height)) return;
	}
	return sprintf(__("Crop %1$d by %2$d pixels"), Math.round(region.width), Math.round(region.height));
}
function getZoomAnnouncement(state, previousState) {
	if (previousState && Math.round(previousState.zoom * 100) === Math.round(state.zoom * 100)) return;
	return sprintf(__("Zoom %d%%"), Math.round(state.zoom * 100));
}
function buildAnnouncement(state, previousState) {
	const flip = getFlipAnnouncement(state, previousState);
	if (flip) return flip;
	return [
		getRotationAnnouncement(state, previousState),
		getZoomAnnouncement(state, previousState),
		getCropAnnouncement(state, previousState)
	].filter((part) => part !== void 0).join(", ");
}
/**
* Debounce and dedupe ARIA-live announcements for screen readers as the
* cropper state changes. Calls `speak()` from `@wordpress/a11y` to use the
* centralized, persistent live region instead of a local one that may be
* dynamically mounted.
*
* Debouncing avoids flooding announcements during drag/pointermove bursts;
* deduping avoids re-announcing the same state.
*
* @param state The current cropper state to announce.
*/
function useAriaAnnouncer(state) {
	const timerRef = (0, import_react.useRef)(void 0);
	const prevMessageRef = (0, import_react.useRef)("");
	const prevStateRef = (0, import_react.useRef)(null);
	const latestStateRef = (0, import_react.useRef)(state);
	(0, import_react.useLayoutEffect)(() => {
		latestStateRef.current = state;
	}, [state]);
	(0, import_react.useEffect)(() => {
		clearTimeout(timerRef.current);
		timerRef.current = setTimeout(() => {
			const current = latestStateRef.current;
			const msg = buildAnnouncement(current, prevStateRef.current);
			prevStateRef.current = current;
			if (msg !== prevMessageRef.current) {
				prevMessageRef.current = msg;
				speak(msg);
			}
		}, ARIA_DEBOUNCE_MS);
		return () => {
			clearTimeout(timerRef.current);
		};
	}, [
		state.zoom,
		state.rotation,
		state.cropRect.width,
		state.cropRect.height,
		state.flip.horizontal,
		state.flip.vertical
	]);
}
var ARIA_DEBOUNCE_MS;
function init_use_aria_announcer() {
	return (init_use_aria_announcer = __esmMin((() => {
		init_build_module$1();
		init_react();
		init_build_module();
		init_source_region();
		ARIA_DEBOUNCE_MS = 300;
	})))();
}
//#endregion
//#region ../packages/media-editor/src/image-editor/react/visually-hidden-style.ts
var VISUALLY_HIDDEN_STYLE;
function init_visually_hidden_style() {
	return (init_visually_hidden_style = __esmMin((() => {
		VISUALLY_HIDDEN_STYLE = {
			position: "absolute",
			width: 1,
			height: 1,
			padding: 0,
			margin: -1,
			overflow: "hidden",
			clip: "rect(0, 0, 0, 0)",
			whiteSpace: "nowrap",
			border: 0
		};
	})))();
}
//#endregion
//#region ../packages/media-editor/src/image-editor/react/components/stencils/rectangle-stencil.tsx
/**
* Get the translated aria-label for a resize handle position.
*
* @param pos The handle position identifier.
* @return The translated label string.
*/
function getHandleLabel(pos) {
	switch (pos) {
		case "n": return __("Resize from top edge");
		case "s": return __("Resize from bottom edge");
		case "e": return __("Resize from right edge");
		case "w": return __("Resize from left edge");
		case "nw": return __("Resize from top-left corner");
		case "ne": return __("Resize from top-right corner");
		case "sw": return __("Resize from bottom-left corner");
		case "se": return __("Resize from bottom-right corner");
	}
}
/**
* A rectangular crop stencil with resize handles.
*
* In freeform mode, handles resize the crop area. Clicks inside the
* crop pass through to the container for image panning. The crop
* auto-centers after resize via SETTLE_CROP.
*
* @param props                    Component props implementing StencilProps.
* @param props.cropRect           The crop rectangle in normalized coordinates.
* @param props.containerSize      The container element dimensions in pixels.
* @param props.imageSize          The rendered image dimensions in pixels.
* @param props.onCropChange       Callback fired when the crop rect changes.
* @param props.onResizeStart      Callback fired when a resize drag starts.
* @param props.onResizeEnd        Callback fired when a resize drag ends (mouseup).
* @param props.aspectRatio        Optional fixed aspect ratio (width / height).
* @param props.freeformCrop       Whether resize handles are shown.
* @param props.isResizeDisabled   Whether resize handles should ignore pointer and keyboard input.
* @param props.stencilTransition  CSS transition string for settle animation.
* @param props.cropBounds         Maximum crop rect bounds from camera (zoom/rotation-aware).
* @param props.onEscape           Called when Escape is pressed on a resize handle.
* @param props.minCropSize        Minimum crop rect dimension in normalized space, per axis.
* @param props.snapCropRect       Optional post-processor for freeform resize output.
* @param props.keyboardResizeStep Optional keyboard resize step in normalized space, per axis.
* @return The rectangle stencil element.
*/
function RectangleStencil({ cropRect, containerSize, imageSize, onCropChange, onResizeStart, onResizeEnd, aspectRatio, freeformCrop = false, isResizeDisabled = false, stencilTransition, cropBounds, onEscape, minCropSize, snapCropRect, keyboardResizeStep }) {
	const boundsMinX = cropBounds?.minX ?? 0;
	const boundsMinY = cropBounds?.minY ?? 0;
	const boundsMaxX = cropBounds?.maxX ?? 1;
	const boundsMaxY = cropBounds?.maxY ?? 1;
	const bounds = (0, import_react.useMemo)(() => ({
		minX: boundsMinX,
		minY: boundsMinY,
		maxX: boundsMaxX,
		maxY: boundsMaxY
	}), [
		boundsMinX,
		boundsMinY,
		boundsMaxX,
		boundsMaxY
	]);
	const keyboardSettleTimerRef = (0, import_react.useRef)(void 0);
	const keyboardResizeActiveRef = (0, import_react.useRef)(false);
	const resizeHandleDescriptionId = (0, import_react.useId)();
	const hasLockedRatio = !!(aspectRatio && aspectRatio > 0);
	const activePointerResizeRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		return () => {
			clearTimeout(keyboardSettleTimerRef.current);
			keyboardResizeActiveRef.current = false;
			activePointerResizeRef.current?.cancel(false);
		};
	}, []);
	const latestHandlersRef = (0, import_react.useRef)(null);
	const normalizedRatio = (0, import_react.useMemo)(() => {
		if (!hasLockedRatio || imageSize.width === 0) return 0;
		return aspectRatio * imageSize.height / imageSize.width;
	}, [
		aspectRatio,
		hasLockedRatio,
		imageSize.width,
		imageSize.height
	]);
	const offsetX = (containerSize.width - imageSize.width) / 2;
	const offsetY = (containerSize.height - imageSize.height) / 2;
	const left = offsetX + cropRect.x * imageSize.width;
	const top = offsetY + cropRect.y * imageSize.height;
	const width = cropRect.width * imageSize.width;
	const height = cropRect.height * imageSize.height;
	/**
	* Start a resize drag on a handle. Registers pointer listeners
	* synchronously so no events are missed between capture and the
	* next React commit.
	*/
	const handlePointerDown = (0, import_react.useCallback)((handle, event) => {
		if (isResizeDisabled || event.pointerType === "touch" && event.isPrimary === false) {
			event.preventDefault();
			event.stopPropagation();
			return;
		}
		if (event.button !== 0) return;
		event.preventDefault();
		event.stopPropagation();
		const ownerDoc = event.currentTarget.ownerDocument;
		if (ownerDoc.activeElement instanceof HTMLElement) ownerDoc.activeElement.blur();
		const el = event.currentTarget;
		el.setPointerCapture(event.pointerId);
		const drag = {
			handle,
			startX: event.clientX,
			startY: event.clientY,
			startRect: { ...cropRect }
		};
		let rafId = 0;
		let latestX = event.clientX;
		let latestY = event.clientY;
		let latestShift = event.shiftKey;
		const onMove = (e) => {
			const pe = e;
			latestX = pe.clientX;
			latestY = pe.clientY;
			latestShift = pe.shiftKey;
			if (rafId) return;
			rafId = requestAnimationFrame(() => {
				rafId = 0;
				const h = latestHandlersRef.current;
				if (!h) return;
				let newRect;
				if (h.hasLockedRatio) newRect = h.computeLockedRect(drag, latestX, latestY);
				else if (latestShift) newRect = h.computeShiftLockedRect(drag, latestX, latestY);
				else {
					newRect = h.computeFreeRect(drag, latestX, latestY);
					newRect = h.snapCropRect?.(newRect, drag.handle) ?? newRect;
				}
				h.onCropChange(newRect);
			});
		};
		let ended = false;
		const endResize = (notifyResizeEnd = true, restoreFocus = true) => {
			if (ended) return;
			ended = true;
			if (rafId) {
				cancelAnimationFrame(rafId);
				rafId = 0;
			}
			el.removeEventListener("pointermove", onMove);
			el.removeEventListener("pointerup", onEnd);
			el.removeEventListener("lostpointercapture", onEnd);
			activePointerResizeRef.current = null;
			if (notifyResizeEnd) latestHandlersRef.current?.onResizeEnd?.();
			if (restoreFocus) el.focus({ preventScroll: true });
		};
		const cancelResize = (notifyResizeEnd = true) => endResize(notifyResizeEnd, false);
		const onEnd = () => endResize();
		el.addEventListener("pointermove", onMove);
		el.addEventListener("pointerup", onEnd);
		el.addEventListener("lostpointercapture", onEnd);
		activePointerResizeRef.current = { cancel: cancelResize };
		onResizeStart?.(handle);
		clearTimeout(keyboardSettleTimerRef.current);
		keyboardResizeActiveRef.current = false;
	}, [
		cropRect,
		isResizeDisabled,
		onResizeStart
	]);
	/**
	* Compute the new crop rect for a free (no aspect ratio) resize.
	* Delegates to the pure function in core/stencil-math.ts.
	*/
	const computeFreeRect = (0, import_react.useCallback)((drag, clientX, clientY) => computeFreeResizeRect(drag, clientX, clientY, imageSize, bounds, minCropSize), [
		imageSize,
		bounds,
		minCropSize
	]);
	/**
	* Compute the new crop rect for a locked-aspect-ratio corner resize.
	* Delegates to the pure function in core/stencil-math.ts.
	*/
	const computeLockedRect = (0, import_react.useCallback)((drag, clientX, clientY, driverAxis) => computeLockedResizeRect(drag, clientX, clientY, imageSize, bounds, normalizedRatio, minCropSize, driverAxis), [
		imageSize,
		bounds,
		normalizedRatio,
		minCropSize
	]);
	latestHandlersRef.current = {
		hasLockedRatio,
		computeLockedRect,
		computeFreeRect,
		computeShiftLockedRect: (0, import_react.useCallback)((drag, clientX, clientY) => computeShiftLockedResizeRect(drag, clientX, clientY, imageSize, bounds, minCropSize), [
			imageSize,
			bounds,
			minCropSize
		]),
		onCropChange,
		onResizeEnd,
		snapCropRect
	};
	(0, import_react.useEffect)(() => {
		if (!isResizeDisabled) return;
		activePointerResizeRef.current?.cancel();
		if (keyboardResizeActiveRef.current) {
			clearTimeout(keyboardSettleTimerRef.current);
			keyboardResizeActiveRef.current = false;
			latestHandlersRef.current?.onResizeEnd?.();
		}
	}, [isResizeDisabled]);
	/**
	* Handle keyboard events on a resize handle.
	* Arrow keys resize; Escape returns focus to the canvas.
	* Shift multiplies the step size by 10 for coarser movement.
	*/
	const handleKeyDown = (0, import_react.useCallback)((handle, event) => {
		const key = event.key;
		if (isResizeDisabled) return;
		if (key === "Escape") {
			event.preventDefault();
			event.stopPropagation();
			onEscape?.();
			return;
		}
		if (key !== "ArrowUp" && key !== "ArrowDown" && key !== "ArrowLeft" && key !== "ArrowRight") return;
		event.preventDefault();
		event.stopPropagation();
		if (!keyboardResizeActiveRef.current) {
			keyboardResizeActiveRef.current = true;
			onResizeStart?.(handle);
		}
		const scheduleKeyboardResizeEnd = () => {
			clearTimeout(keyboardSettleTimerRef.current);
			keyboardSettleTimerRef.current = setTimeout(() => {
				keyboardResizeActiveRef.current = false;
				onResizeEnd?.();
			}, KEYBOARD_SETTLE_DELAY);
		};
		const stepMultiplier = event.shiftKey ? 10 : 1;
		const stepX = keyboardResizeStep?.width ?? .01;
		const stepY = keyboardResizeStep?.height ?? .01;
		const adjustedStepX = stepX * stepMultiplier;
		const adjustedStepY = stepY * stepMultiplier;
		let dx = 0;
		let dy = 0;
		if (key === "ArrowLeft") dx = -adjustedStepX;
		if (key === "ArrowRight") dx = adjustedStepX;
		if (key === "ArrowUp") dy = -adjustedStepY;
		if (key === "ArrowDown") dy = adjustedStepY;
		const keyboardDriverAxis = dx !== 0 ? "width" : "height";
		if (hasLockedRatio) {
			const syntheticDrag = {
				handle,
				startX: 0,
				startY: 0,
				startRect: { ...cropRect }
			};
			const clientX = dx * imageSize.width;
			const clientY = dy * imageSize.height;
			onCropChange(computeLockedRect(syntheticDrag, clientX, clientY, keyboardDriverAxis));
			scheduleKeyboardResizeEnd();
		} else {
			const syntheticDrag = {
				handle,
				startX: 0,
				startY: 0,
				startRect: { ...cropRect }
			};
			const clientX = dx * imageSize.width;
			const clientY = dy * imageSize.height;
			const rect = computeFreeRect(syntheticDrag, clientX, clientY);
			onCropChange(snapCropRect?.(rect, handle) ?? rect);
			scheduleKeyboardResizeEnd();
		}
	}, [
		cropRect,
		hasLockedRatio,
		imageSize.width,
		imageSize.height,
		computeLockedRect,
		computeFreeRect,
		onCropChange,
		onResizeStart,
		onResizeEnd,
		onEscape,
		keyboardResizeStep,
		snapCropRect,
		isResizeDisabled
	]);
	if (containerSize.width === 0 || containerSize.height === 0) return null;
	const handles = hasLockedRatio ? CORNER_POSITIONS : ALL_POSITIONS;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)("div", {
		className: "wp-media-editor-image-editor__stencil",
		"data-testid": "cropper-stencil",
		style: {
			left,
			top,
			width,
			height,
			transition: stencilTransition
		},
		children: [
			freeformCrop && /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)("div", {
				id: resizeHandleDescriptionId,
				style: VISUALLY_HIDDEN_STYLE,
				children: __("Use arrow keys to resize the crop area. Hold Shift for larger steps.")
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 572,
				columnNumber: 5
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)("div", {
				className: "wp-media-editor-image-editor__stencil-rect",
				style: {
					width: "100%",
					height: "100%",
					top: 0,
					left: 0
				}
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 583,
				columnNumber: 4
			}, this),
			freeformCrop && handles.map((pos) => /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)("button", {
				type: "button",
				className: `wp-media-editor-image-editor__handle wp-media-editor-image-editor__handle--${pos}`,
				onPointerDown: (event) => handlePointerDown(pos, event),
				onTouchStart: (event) => {
					if (event.touches.length < 2) event.stopPropagation();
				},
				onKeyDown: (event) => handleKeyDown(pos, event),
				disabled: isResizeDisabled,
				"aria-label": getHandleLabel(pos),
				"aria-describedby": resizeHandleDescriptionId
			}, pos, false, {
				fileName: _jsxFileName$6,
				lineNumber: 600,
				columnNumber: 6
			}, this))
		]
	}, void 0, true, {
		fileName: _jsxFileName$6,
		lineNumber: 560,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$6, _jsxFileName$6, CORNER_POSITIONS, ALL_POSITIONS, KEYBOARD_SETTLE_DELAY;
function init_rectangle_stencil() {
	return (init_rectangle_stencil = __esmMin((() => {
		init_react();
		init_build_module();
		init_constants();
		init_stencil_math();
		init_visually_hidden_style();
		import_jsx_dev_runtime$6 = require_jsx_dev_runtime();
		_jsxFileName$6 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/stencils/rectangle-stencil.tsx";
		CORNER_POSITIONS = [
			"nw",
			"ne",
			"se",
			"sw"
		];
		ALL_POSITIONS = [
			"nw",
			"n",
			"ne",
			"e",
			"se",
			"s",
			"sw",
			"w"
		];
		KEYBOARD_SETTLE_DELAY = 500;
		try {
			RectangleStencil.__docgenInfo = {
				"description": "A rectangular crop stencil with resize handles.\n\nIn freeform mode, handles resize the crop area. Clicks inside the\ncrop pass through to the container for image panning. The crop\nauto-centers after resize via SETTLE_CROP.",
				"displayName": "RectangleStencil",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/stencils/rectangle-stencil.tsx",
				"methods": [],
				"props": {
					"cropRect": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/core/types.ts",
							"name": "StencilProps"
						}],
						"description": "The current crop rectangle in normalized coordinates.",
						"name": "cropRect",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/core/types.ts",
							"name": "StencilProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedRect" }
					},
					"containerSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/core/types.ts",
							"name": "StencilProps"
						}],
						"description": "The container element dimensions in pixels.",
						"name": "containerSize",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/core/types.ts",
							"name": "StencilProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "Size" }
					},
					"imageSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/core/types.ts",
							"name": "StencilProps"
						}],
						"description": "The rendered image dimensions in pixels within the container.",
						"name": "imageSize",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/core/types.ts",
							"name": "StencilProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "Size" }
					},
					"onCropChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/core/types.ts",
							"name": "StencilProps"
						}],
						"description": "Callback when the crop rectangle changes (during drag).",
						"name": "onCropChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/core/types.ts",
							"name": "StencilProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(rect: NormalizedRect) => void" }
					},
					"onResizeStart": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/core/types.ts",
							"name": "StencilProps"
						}],
						"description": "Callback when a resize interaction starts — pointerdown on a handle\nor the first arrow-key press on a focused handle. The handle direction\nis passed so downstream overlays can anchor to it. The argument is\noptional to keep custom stencils that don't track a direction\nbackward-compatible.",
						"name": "onResizeStart",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/core/types.ts",
							"name": "StencilProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((handle?: HandlePosition) => void)" }
					},
					"onResizeEnd": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/core/types.ts",
							"name": "StencilProps"
						}],
						"description": "Callback when a resize drag ends (mouseup after handle drag).",
						"name": "onResizeEnd",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/core/types.ts",
							"name": "StencilProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "(() => void)" }
					},
					"aspectRatio": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/core/types.ts",
							"name": "StencilProps"
						}],
						"description": "Optional fixed aspect ratio (width / height) in pixel space.",
						"name": "aspectRatio",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/core/types.ts",
							"name": "StencilProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"freeformCrop": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/core/types.ts",
							"name": "StencilProps"
						}],
						"description": "Whether the crop handles are shown for freeform resizing.",
						"name": "freeformCrop",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/core/types.ts",
							"name": "StencilProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isResizeDisabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/core/types.ts",
							"name": "StencilProps"
						}],
						"description": "Whether resize handles should ignore pointer and keyboard input.",
						"name": "isResizeDisabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/core/types.ts",
							"name": "StencilProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"stencilTransition": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/core/types.ts",
							"name": "StencilProps"
						}],
						"description": "CSS transition string for settle animation.",
						"name": "stencilTransition",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/core/types.ts",
							"name": "StencilProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"cropBounds": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/core/types.ts",
							"name": "StencilProps"
						}],
						"description": "Maximum crop rect bounds based on current zoom/rotation.",
						"name": "cropBounds",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/core/types.ts",
							"name": "StencilProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "{ minX: number; minY: number; maxX: number; maxY: number; }" }
					},
					"onEscape": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/core/types.ts",
							"name": "StencilProps"
						}],
						"description": "Called when Escape is pressed on a resize handle.",
						"name": "onEscape",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/core/types.ts",
							"name": "StencilProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "(() => void)" }
					},
					"minCropSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/core/types.ts",
							"name": "StencilProps"
						}],
						"description": "Minimum crop rect dimension in normalized space, per axis. Derived\nby the host from a pixel-based floor (see `MIN_CROP_PIXELS`) and\nthe source image dimensions. Omit to use the stencil's default.",
						"name": "minCropSize",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/core/types.ts",
							"name": "StencilProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Size" }
					},
					"snapCropRect": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/core/types.ts",
							"name": "StencilProps"
						}],
						"description": "Optional post-processor for freeform resize output. Hosts use this for\ndisplay-gated behavior such as snapping visible pixel grids to source\npixel boundaries.",
						"name": "snapCropRect",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/core/types.ts",
							"name": "StencilProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((rect: NormalizedRect, handle: HandlePosition) => NormalizedRect)" }
					},
					"keyboardResizeStep": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/core/types.ts",
							"name": "StencilProps"
						}],
						"description": "Optional keyboard resize step in normalized space, per axis. Hosts use\nthis when keyboard resize should follow the rendered image scale instead\nof the default percentage-based step.",
						"name": "keyboardResizeStep",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/core/types.ts",
							"name": "StencilProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Size" }
					}
				},
				"tags": {
					"param": "props Component props implementing StencilProps.\nprops.cropRect The crop rectangle in normalized coordinates.\nprops.containerSize The container element dimensions in pixels.\nprops.imageSize The rendered image dimensions in pixels.\nprops.onCropChange Callback fired when the crop rect changes.\nprops.onResizeStart Callback fired when a resize drag starts.\nprops.onResizeEnd Callback fired when a resize drag ends (mouseup).\nprops.aspectRatio Optional fixed aspect ratio (width / height).\nprops.freeformCrop Whether resize handles are shown.\nprops.isResizeDisabled Whether resize handles should ignore pointer and keyboard input.\nprops.stencilTransition CSS transition string for settle animation.\nprops.cropBounds Maximum crop rect bounds from camera (zoom/rotation-aware).\nprops.onEscape Called when Escape is pressed on a resize handle.\nprops.minCropSize Minimum crop rect dimension in normalized space, per axis.\nprops.snapCropRect Optional post-processor for freeform resize output.\nprops.keyboardResizeStep Optional keyboard resize step in normalized space, per axis.",
					"return": "The rectangle stencil element."
				}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/media-editor/src/image-editor/react/components/overlays/dimming-overlay.tsx
function DimmingOverlay({ cropRect, containerSize, imageSize, transition }) {
	if (containerSize.width === 0 || containerSize.height === 0) return null;
	const offsetX = (containerSize.width - imageSize.width) / 2;
	const offsetY = (containerSize.height - imageSize.height) / 2;
	const left = offsetX + cropRect.x * imageSize.width;
	const top = offsetY + cropRect.y * imageSize.height;
	const width = cropRect.width * imageSize.width;
	const height = cropRect.height * imageSize.height;
	const composedTransition = transition ? `${transition}, box-shadow 0.15s ease` : void 0;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)("div", {
		className: "wp-media-editor-image-editor__dimming",
		"data-testid": "cropper-dimming",
		style: {
			left,
			top,
			width,
			height,
			transition: composedTransition
		}
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 43,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$5, _jsxFileName$5;
function init_dimming_overlay() {
	return (init_dimming_overlay = __esmMin((() => {
		import_jsx_dev_runtime$5 = require_jsx_dev_runtime();
		_jsxFileName$5 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/overlays/dimming-overlay.tsx";
		try {
			DimmingOverlay.__docgenInfo = {
				"description": "",
				"displayName": "DimmingOverlay",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/overlays/dimming-overlay.tsx",
				"methods": [],
				"props": {
					"cropRect": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/overlays/dimming-overlay.tsx",
							"name": "DimmingOverlayProps"
						}],
						"description": "The crop rectangle in normalized coordinates.",
						"name": "cropRect",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/overlays/dimming-overlay.tsx",
							"name": "DimmingOverlayProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedRect" }
					},
					"containerSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/overlays/dimming-overlay.tsx",
							"name": "DimmingOverlayProps"
						}],
						"description": "The container element dimensions in pixels.",
						"name": "containerSize",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/overlays/dimming-overlay.tsx",
							"name": "DimmingOverlayProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "Size" }
					},
					"imageSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/overlays/dimming-overlay.tsx",
							"name": "DimmingOverlayProps"
						}],
						"description": "The rendered image dimensions in pixels within the container.",
						"name": "imageSize",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/overlays/dimming-overlay.tsx",
							"name": "DimmingOverlayProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "Size" }
					},
					"transition": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/overlays/dimming-overlay.tsx",
							"name": "DimmingOverlayProps"
						}],
						"description": "CSS transition string, e.g. during settle animation.",
						"name": "transition",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/overlays/dimming-overlay.tsx",
							"name": "DimmingOverlayProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/media-editor/src/image-editor/react/components/overlays/grid-overlay.tsx
/**
* Renders a rule-of-thirds grid inside the crop rectangle.
*
* Displays 2 horizontal and 2 vertical lines at 1/3 and 2/3
* positions within the crop area.
*
* @param props               Component props.
* @param props.cropRect      The crop rectangle in normalized coordinates.
* @param props.containerSize The container element dimensions in pixels.
* @param props.imageSize     The rendered image dimensions in pixels.
* @return The grid overlay element.
*/
function GridOverlay({ cropRect, containerSize, imageSize }) {
	if (containerSize.width === 0 || containerSize.height === 0) return null;
	const offsetX = (containerSize.width - imageSize.width) / 2;
	const offsetY = (containerSize.height - imageSize.height) / 2;
	const left = offsetX + cropRect.x * imageSize.width;
	const top = offsetY + cropRect.y * imageSize.height;
	const width = cropRect.width * imageSize.width;
	const height = cropRect.height * imageSize.height;
	const thirdW = width / 3;
	const thirdH = height / 3;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)("div", {
		className: "wp-media-editor-image-editor__grid",
		"data-testid": "cropper-grid",
		style: {
			left,
			top,
			width,
			height
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)("div", {
				className: "wp-media-editor-image-editor__grid-line wp-media-editor-image-editor__grid-line--horizontal",
				style: { top: thirdH }
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 58,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)("div", {
				className: "wp-media-editor-image-editor__grid-line wp-media-editor-image-editor__grid-line--horizontal",
				style: { top: thirdH * 2 }
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 62,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)("div", {
				className: "wp-media-editor-image-editor__grid-line wp-media-editor-image-editor__grid-line--vertical",
				style: { left: thirdW }
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 67,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)("div", {
				className: "wp-media-editor-image-editor__grid-line wp-media-editor-image-editor__grid-line--vertical",
				style: { left: thirdW * 2 }
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 71,
				columnNumber: 4
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$4,
		lineNumber: 47,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$4, _jsxFileName$4;
function init_grid_overlay() {
	return (init_grid_overlay = __esmMin((() => {
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/overlays/grid-overlay.tsx";
		try {
			GridOverlay.__docgenInfo = {
				"description": "Renders a rule-of-thirds grid inside the crop rectangle.\n\nDisplays 2 horizontal and 2 vertical lines at 1/3 and 2/3\npositions within the crop area.",
				"displayName": "GridOverlay",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/overlays/grid-overlay.tsx",
				"methods": [],
				"props": {
					"cropRect": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/overlays/grid-overlay.tsx",
							"name": "GridOverlayProps"
						}],
						"description": "The crop rectangle in normalized coordinates.",
						"name": "cropRect",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/overlays/grid-overlay.tsx",
							"name": "GridOverlayProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedRect" }
					},
					"containerSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/overlays/grid-overlay.tsx",
							"name": "GridOverlayProps"
						}],
						"description": "The container element dimensions in pixels.",
						"name": "containerSize",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/overlays/grid-overlay.tsx",
							"name": "GridOverlayProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "Size" }
					},
					"imageSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/overlays/grid-overlay.tsx",
							"name": "GridOverlayProps"
						}],
						"description": "The rendered image dimensions in pixels within the container.",
						"name": "imageSize",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/overlays/grid-overlay.tsx",
							"name": "GridOverlayProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "Size" }
					}
				},
				"tags": {
					"param": "props Component props.\nprops.cropRect The crop rectangle in normalized coordinates.\nprops.containerSize The container element dimensions in pixels.\nprops.imageSize The rendered image dimensions in pixels.",
					"return": "The grid overlay element."
				}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/media-editor/src/image-editor/react/components/overlays/dimensions-overlay.tsx
/**
* Preferred anchor for a handle, before edge-clipping is considered:
* tooltip sits outward from the crop rectangle's center.
*
* @param handle
*/
function preferredAnchor(handle) {
	let x = "center";
	if (handle.includes("w")) x = "before";
	else if (handle.includes("e")) x = "after";
	let y = "center";
	if (handle.includes("n")) y = "before";
	else if (handle.includes("s")) y = "after";
	return {
		x,
		y
	};
}
/**
* Start coordinate of a tooltip placed on the given side of `handlePos`,
* accounting for the per-side handle gap and the tooltip's own length.
*
* @param side
* @param handlePos
* @param length
*/
function sideStart(side, handlePos, length) {
	if (side === "before") return handlePos - HANDLE_GAP_PX - length;
	if (side === "after") return handlePos + HANDLE_GAP_PX;
	return handlePos - length / 2;
}
/**
* Picks a side that keeps the tooltip inside the container along one
* axis, preferring the supplied side and falling back to its opposite,
* then center.
*
* @param preferred
* @param handlePos
* @param length
* @param containerLength
*/
function fittingSide(preferred, handlePos, length, containerLength) {
	const fits = (side) => {
		const start = sideStart(side, handlePos, length);
		return start >= 0 && start + length <= containerLength;
	};
	if (fits(preferred)) return preferred;
	const opposite = OPPOSITE_SIDE[preferred];
	if (opposite !== preferred && fits(opposite)) return opposite;
	if (preferred !== "center" && fits("center")) return "center";
	const overflow = (side) => {
		const start = sideStart(side, handlePos, length);
		return Math.max(0, -start) + Math.max(0, start + length - containerLength);
	};
	return [
		preferred,
		opposite,
		"center"
	].reduce((best, side) => overflow(side) < overflow(best) ? side : best);
}
/**
* Tooltip that follows the active resize handle during a pointer drag,
* showing the current output dimensions of the crop in source pixels.
*
* Renders nothing outside of a pointer-driven resize, so keyboard
* arrow-key adjustments and pan/zoom gestures stay quiet.
*
* @param props
* @param props.cropRect
* @param props.containerSize
* @param props.imageSize
* @param props.activeHandle
* @param props.outputWidth
* @param props.outputHeight
*/
function DimensionsOverlay({ cropRect, containerSize, imageSize, activeHandle, outputWidth, outputHeight }) {
	const tooltipRef = (0, import_react.useRef)(null);
	const [tooltipSize, setTooltipSize] = (0, import_react.useState)(null);
	(0, import_react.useLayoutEffect)(() => {
		if (!tooltipRef.current) return;
		const rect = tooltipRef.current.getBoundingClientRect();
		setTooltipSize((prev) => {
			if (prev && prev.width === rect.width && prev.height === rect.height) return prev;
			return {
				width: rect.width,
				height: rect.height
			};
		});
	}, [outputWidth, outputHeight]);
	if (!activeHandle || containerSize.width === 0 || containerSize.height === 0) return null;
	const offsetX = (containerSize.width - imageSize.width) / 2;
	const offsetY = (containerSize.height - imageSize.height) / 2;
	const left = offsetX + cropRect.x * imageSize.width;
	const top = offsetY + cropRect.y * imageSize.height;
	const width = cropRect.width * imageSize.width;
	const height = cropRect.height * imageSize.height;
	let handleX = left + width / 2;
	if (activeHandle.includes("w")) handleX = left;
	else if (activeHandle.includes("e")) handleX = left + width;
	let handleY = top + height / 2;
	if (activeHandle.includes("n")) handleY = top;
	else if (activeHandle.includes("s")) handleY = top + height;
	const preferred = preferredAnchor(activeHandle);
	const anchor = tooltipSize ? {
		x: fittingSide(preferred.x, handleX, tooltipSize.width, containerSize.width),
		y: fittingSide(preferred.y, handleY, tooltipSize.height, containerSize.height)
	} : preferred;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("div", {
		ref: tooltipRef,
		className: "wp-media-editor-image-editor__dimensions-tooltip",
		"data-testid": "cropper-dimensions-tooltip",
		style: {
			left: handleX + GAP_DIRECTION[anchor.x] * HANDLE_GAP_PX,
			top: handleY + GAP_DIRECTION[anchor.y] * HANDLE_GAP_PX,
			transform: `translate(${TRANSLATE_PERCENT[anchor.x]}, ${TRANSLATE_PERCENT[anchor.y]})`
		},
		"aria-hidden": "true",
		children: `W: ${Math.round(outputWidth)}px H: ${Math.round(outputHeight)}px`
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 244,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$3, _jsxFileName$3, HANDLE_GAP_PX, TRANSLATE_PERCENT, GAP_DIRECTION, OPPOSITE_SIDE;
function init_dimensions_overlay() {
	return (init_dimensions_overlay = __esmMin((() => {
		init_react();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/overlays/dimensions-overlay.tsx";
		HANDLE_GAP_PX = 12;
		TRANSLATE_PERCENT = {
			before: "-100%",
			center: "-50%",
			after: "0"
		};
		GAP_DIRECTION = {
			before: -1,
			center: 0,
			after: 1
		};
		OPPOSITE_SIDE = {
			before: "after",
			center: "center",
			after: "before"
		};
		try {
			DimensionsOverlay.__docgenInfo = {
				"description": "Tooltip that follows the active resize handle during a pointer drag,\nshowing the current output dimensions of the crop in source pixels.\n\nRenders nothing outside of a pointer-driven resize, so keyboard\narrow-key adjustments and pan/zoom gestures stay quiet.",
				"displayName": "DimensionsOverlay",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/overlays/dimensions-overlay.tsx",
				"methods": [],
				"props": {
					"cropRect": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/overlays/dimensions-overlay.tsx",
							"name": "DimensionsOverlayProps"
						}],
						"description": "Crop rectangle in normalized coordinates.",
						"name": "cropRect",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/overlays/dimensions-overlay.tsx",
							"name": "DimensionsOverlayProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedRect" }
					},
					"containerSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/overlays/dimensions-overlay.tsx",
							"name": "DimensionsOverlayProps"
						}],
						"description": "Container element dimensions in pixels.",
						"name": "containerSize",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/overlays/dimensions-overlay.tsx",
							"name": "DimensionsOverlayProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "Size" }
					},
					"imageSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/overlays/dimensions-overlay.tsx",
							"name": "DimensionsOverlayProps"
						}],
						"description": "Rendered image dimensions in pixels within the container.",
						"name": "imageSize",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/overlays/dimensions-overlay.tsx",
							"name": "DimensionsOverlayProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "Size" }
					},
					"activeHandle": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/overlays/dimensions-overlay.tsx",
							"name": "DimensionsOverlayProps"
						}],
						"description": "Currently-dragged handle, or null when no pointer drag is active.",
						"name": "activeHandle",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/overlays/dimensions-overlay.tsx",
							"name": "DimensionsOverlayProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "HandlePosition | null" }
					},
					"outputWidth": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/overlays/dimensions-overlay.tsx",
							"name": "DimensionsOverlayProps"
						}],
						"description": "Output crop width in source pixels.",
						"name": "outputWidth",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/overlays/dimensions-overlay.tsx",
							"name": "DimensionsOverlayProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "number" }
					},
					"outputHeight": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/overlays/dimensions-overlay.tsx",
							"name": "DimensionsOverlayProps"
						}],
						"description": "Output crop height in source pixels.",
						"name": "outputHeight",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/overlays/dimensions-overlay.tsx",
							"name": "DimensionsOverlayProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "number" }
					}
				},
				"tags": { "param": "props\nprops.cropRect\nprops.containerSize\nprops.imageSize\nprops.activeHandle\nprops.outputWidth\nprops.outputHeight" }
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/media-editor/src/image-editor/core/viewport-state.ts
function viewportReducer(state, action) {
	switch (action.type) {
		case "SET_VIEWPORT_ZOOM": {
			const zoom = Math.min(4, Math.max(.1, action.payload));
			return zoom === state.zoom ? state : {
				...state,
				zoom
			};
		}
		case "SET_VIEWPORT_PAN": {
			const { x, y } = action.payload;
			return x === state.pan.x && y === state.pan.y ? state : {
				...state,
				pan: action.payload
			};
		}
		case "RESET_VIEWPORT": return state.zoom === DEFAULT_VIEWPORT_STATE.zoom && state.pan.x === DEFAULT_VIEWPORT_STATE.pan.x && state.pan.y === DEFAULT_VIEWPORT_STATE.pan.y ? state : DEFAULT_VIEWPORT_STATE;
	}
}
var DEFAULT_VIEWPORT_STATE;
function init_viewport_state() {
	return (init_viewport_state = __esmMin((() => {
		DEFAULT_VIEWPORT_STATE = {
			zoom: 1,
			pan: {
				x: 0,
				y: 0
			}
		};
	})))();
}
//#endregion
//#region ../packages/media-editor/src/image-editor/react/hooks/use-viewport-state.ts
function useViewportState() {
	const [viewport, dispatch] = (0, import_react.useReducer)(viewportReducer, DEFAULT_VIEWPORT_STATE);
	const setViewportZoom = (0, import_react.useCallback)((zoom) => {
		dispatch({
			type: "SET_VIEWPORT_ZOOM",
			payload: zoom
		});
	}, []);
	const setViewportPan = (0, import_react.useCallback)((pan) => {
		dispatch({
			type: "SET_VIEWPORT_PAN",
			payload: pan
		});
	}, []);
	const resetViewport = (0, import_react.useCallback)(() => {
		dispatch({ type: "RESET_VIEWPORT" });
	}, []);
	return (0, import_react.useMemo)(() => ({
		viewport,
		setViewportZoom,
		setViewportPan,
		resetViewport
	}), [
		viewport,
		setViewportZoom,
		setViewportPan,
		resetViewport
	]);
}
function init_use_viewport_state() {
	return (init_use_viewport_state = __esmMin((() => {
		init_react();
		init_viewport_state();
	})))();
}
//#endregion
//#region ../packages/media-editor/src/image-editor/react/components/viewport-provider.tsx
function ViewportProvider({ children }) {
	const viewportState = useViewportState();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(ViewportContext.Provider, {
		value: viewportState,
		children
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 18,
		columnNumber: 3
	}, this);
}
function useViewport() {
	const context = (0, import_react.useContext)(ViewportContext);
	if (!context) throw new Error("useViewport must be used within a ViewportProvider.");
	return context;
}
var import_jsx_dev_runtime$2, _jsxFileName$2, ViewportContext;
function init_viewport_provider() {
	return (init_viewport_provider = __esmMin((() => {
		init_react();
		init_use_viewport_state();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/viewport-provider.tsx";
		ViewportContext = (0, import_react.createContext)(null);
		try {
			ViewportProvider.__docgenInfo = {
				"description": "",
				"displayName": "ViewportProvider",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/viewport-provider.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/media-editor/src/image-editor/react/components/cropper.tsx
/**
* The main image cropper component.
*
* Renders an image within a container with interactive crop overlays.
* Creates the camera once per render via getImageFit, then passes
* derived values to stencil, overlays, and interaction hooks.
*
* The component fills its parent container (100% width and height).
* Wrap it in a sized container to control its dimensions.
*
* @param root0                   Component props implementing CropperProps.
* @param root0.src               Image source URL.
* @param root0.controller        The cropper controller from `useCropperReducer` or a composite store.
* @param root0.stencil           Custom stencil component.
* @param root0.showGrid          Grid overlay mode: false | true | 'interactive'.
* @param root0.isPlacementActive Keep grid visible during external placement activity.
* @param root0.showDimming       Show dimming overlay outside crop.
* @param root0.showDimensions    Show live dimensions tooltip during resize.
* @param root0.minZoom           Minimum zoom level override.
* @param root0.maxZoom           Maximum zoom level.
* @param root0.aspectRatio       Fixed aspect ratio (width/height).
* @param root0.freeformCrop      Enable resize handles.
* @param root0.focusOnMount      Focus the crop area on mount.
* @param root0.disabled          Ignore all crop interaction.
* @param root0.onImageLoaded     Image load callback.
* @param root0.onStateChange     Every-frame state callback.
* @param root0.onGestureStart    Gesture boundary start.
* @param root0.onGestureEnd      Gesture boundary end.
* @param root0.className         Additional CSS class.
* @param ref                     Forwarded ref for the container div.
*/
function CropperInner({ src, controller, stencil: StencilComponent = RectangleStencil, showGrid = false, isPlacementActive = false, showDimming = true, showDimensions = true, minZoom, maxZoom, aspectRatio, freeformCrop = false, focusOnMount = false, disabled = false, onImageLoaded, onStateChange, onGestureStart, onGestureEnd, className }, ref) {
	const { state, setImage, setCropRect, settleCrop, setVisualSize, adjustCropRectForViewport } = controller;
	const { viewport: viewportState, setViewportPan, resetViewport } = useViewport();
	const canvasRef = (0, import_react.useRef)(null);
	const cropAreaDescriptionId = (0, import_react.useId)();
	const [isCropAreaFocused, setIsCropAreaFocused] = (0, import_react.useState)(focusOnMount);
	const [isFocusVisible, setIsFocusVisible] = (0, import_react.useState)(false);
	const [canvasSize, setCanvasSize] = (0, import_react.useState)({
		width: 0,
		height: 0
	});
	(0, import_react.useLayoutEffect)(() => {
		if (focusOnMount) canvasRef.current?.focus({ preventScroll: true });
	}, [focusOnMount]);
	const handleCropAreaFocus = (0, import_react.useCallback)((event) => {
		const target = event.target;
		if (target === event.currentTarget) setIsCropAreaFocused(true);
		if (event.relatedTarget !== null && target.matches(":focus-visible")) setIsFocusVisible(true);
	}, []);
	const handleCropAreaBlur = (0, import_react.useCallback)((event) => {
		if (event.target === event.currentTarget) setIsCropAreaFocused(false);
		if (!event.currentTarget.contains(event.relatedTarget)) setIsFocusVisible(false);
	}, []);
	(0, import_react.useEffect)(() => {
		const element = canvasRef.current;
		if (!element) return;
		const observer = new ResizeObserver((entries) => {
			for (const entry of entries) {
				const { width, height } = entry.contentRect;
				setCanvasSize((prev) => {
					if (prev.width === width && prev.height === height) return prev;
					return {
						width,
						height
					};
				});
			}
		});
		observer.observe(element);
		return () => {
			observer.disconnect();
		};
	}, []);
	(0, import_react.useEffect)(() => {
		onStateChange?.(state);
	}, [state, onStateChange]);
	useAriaAnnouncer(state);
	const naturalWidth = state.image?.naturalWidth ?? 0;
	const naturalHeight = state.image?.naturalHeight ?? 0;
	const { elementSize, visualSize } = (0, import_react.useMemo)(() => getImageFit(canvasSize, {
		width: naturalWidth,
		height: naturalHeight
	}, state.rotation), [
		canvasSize,
		naturalWidth,
		naturalHeight,
		state.rotation
	]);
	(0, import_react.useEffect)(() => {
		setVisualSize(visualSize);
	}, [visualSize, setVisualSize]);
	(0, import_react.useEffect)(() => {
		if (freeformCrop || visualSize.width === 0 || visualSize.height === 0 || !aspectRatio || aspectRatio <= 0) return;
		const rect = computeInscribedRect(aspectRatio, visualSize);
		const current = state.cropRect;
		if (Math.abs(current.x - rect.x) < CROP_RECT_EPSILON && Math.abs(current.y - rect.y) < CROP_RECT_EPSILON && Math.abs(current.width - rect.width) < CROP_RECT_EPSILON && Math.abs(current.height - rect.height) < CROP_RECT_EPSILON) return;
		adjustCropRectForViewport(rect);
	}, [
		freeformCrop,
		aspectRatio,
		visualSize,
		adjustCropRectForViewport,
		state.cropRect
	]);
	const prevAspectRatioRef = (0, import_react.useRef)(aspectRatio);
	(0, import_react.useEffect)(() => {
		if (prevAspectRatioRef.current === aspectRatio) return;
		prevAspectRatioRef.current = aspectRatio;
		if (!freeformCrop || visualSize.width === 0 || visualSize.height === 0 || !aspectRatio || aspectRatio <= 0) return;
		const rect = computeInscribedRect(aspectRatio, visualSize);
		const current = state.cropRect;
		if (Math.abs(current.x - rect.x) < CROP_RECT_EPSILON && Math.abs(current.y - rect.y) < CROP_RECT_EPSILON && Math.abs(current.width - rect.width) < CROP_RECT_EPSILON && Math.abs(current.height - rect.height) < CROP_RECT_EPSILON) return;
		adjustCropRectForViewport(rect);
	}, [
		aspectRatio,
		freeformCrop,
		visualSize,
		adjustCropRectForViewport,
		state.cropRect
	]);
	const cropBounds = (0, import_react.useMemo)(() => {
		if (!state.image || elementSize.width === 0) return;
		return getImageCropBounds(state, elementSize, visualSize);
	}, [
		state,
		elementSize,
		visualSize
	]);
	const effectiveMinZoom = minZoom !== void 0 ? minZoom : getMinZoom(state);
	const [isResizing, setIsResizing] = (0, import_react.useState)(false);
	const isResizingRef = (0, import_react.useRef)(false);
	const isSettlingRef = (0, import_react.useRef)(false);
	const [isTouchPinching, setIsTouchPinchingState] = (0, import_react.useState)(false);
	const isTouchPinchingRef = (0, import_react.useRef)(false);
	const setTouchPinching = (0, import_react.useCallback)((isPinching) => {
		isTouchPinchingRef.current = isPinching;
		setIsTouchPinchingState(isPinching);
	}, []);
	const [activeHandle, setActiveHandle] = (0, import_react.useState)(null);
	const viewScaleRest = (0, import_react.useMemo)(() => getViewScale(state.cropRect, canvasSize, visualSize, SETTLE_TARGET_CANVAS_FILL, 8), [
		state.cropRect,
		canvasSize,
		visualSize
	]);
	const [frozenViewScale, setFrozenViewScale] = (0, import_react.useState)(1);
	const viewScale = isResizing ? frozenViewScale : viewScaleRest;
	const scaledVisualSize = (0, import_react.useMemo)(() => ({
		width: visualSize.width * viewScale,
		height: visualSize.height * viewScale
	}), [
		visualSize.width,
		visualSize.height,
		viewScale
	]);
	const displayScale = naturalWidth > 0 ? elementSize.width / naturalWidth * state.zoom * viewScale : 0;
	const keyboardResizeStep = (0, import_react.useMemo)(() => {
		if (displayScale < 1 || aspectRatio && aspectRatio > 0 || naturalWidth <= 0 || naturalHeight <= 0) return;
		const snapRotation = Math.round(state.rotation / 90) * 90;
		if (Math.abs(state.rotation - snapRotation) >= CARDINAL_ROTATION_EPSILON) return;
		const bbox = getRotatedBBox(naturalWidth, naturalHeight, snapRotation);
		if (bbox.width <= 0 || bbox.height <= 0) return;
		return {
			width: state.zoom / bbox.width,
			height: state.zoom / bbox.height
		};
	}, [
		displayScale,
		aspectRatio,
		naturalWidth,
		naturalHeight,
		state.rotation,
		state.zoom
	]);
	const minCropSize = (0, import_react.useMemo)(() => {
		if (naturalWidth <= 0 || naturalHeight <= 0) return;
		const snapRotation = Math.round(state.rotation / 90) * 90;
		const bbox = getRotatedBBox(naturalWidth, naturalHeight, snapRotation);
		const minPixels = getMinCropPixels(displayScale);
		return {
			width: Math.min(1, minPixels * state.zoom / bbox.width),
			height: Math.min(1, minPixels * state.zoom / bbox.height)
		};
	}, [
		naturalWidth,
		naturalHeight,
		state.rotation,
		state.zoom,
		displayScale
	]);
	const snapCropRect = (0, import_react.useCallback)((rect, handle) => {
		if (displayScale < 1 || naturalWidth <= 0 || naturalHeight <= 0) return rect;
		return snapCropRectToSourcePixels(state, {
			width: naturalWidth,
			height: naturalHeight
		}, rect, handle);
	}, [
		displayScale,
		naturalWidth,
		naturalHeight,
		state
	]);
	const wasPixelSnapEnabledRef = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		const isPixelSnapEnabled = freeformCrop && (!aspectRatio || aspectRatio <= 0) && displayScale >= 1 && naturalWidth > 0 && naturalHeight > 0;
		const wasPixelSnapEnabled = wasPixelSnapEnabledRef.current;
		wasPixelSnapEnabledRef.current = isPixelSnapEnabled;
		if (!isPixelSnapEnabled || wasPixelSnapEnabled) return;
		const snappedCropRect = snapCropRectToSourcePixelGrid(state, {
			width: naturalWidth,
			height: naturalHeight
		}, state.cropRect);
		const currentCropRect = state.cropRect;
		if (Math.abs(currentCropRect.x - snappedCropRect.x) < CROP_RECT_EPSILON && Math.abs(currentCropRect.y - snappedCropRect.y) < CROP_RECT_EPSILON && Math.abs(currentCropRect.width - snappedCropRect.width) < CROP_RECT_EPSILON && Math.abs(currentCropRect.height - snappedCropRect.height) < CROP_RECT_EPSILON) return;
		adjustCropRectForViewport(snappedCropRect);
	}, [
		adjustCropRectForViewport,
		aspectRatio,
		displayScale,
		freeformCrop,
		naturalWidth,
		naturalHeight,
		state
	]);
	const { handlers, onWheelNative, isDragging, isZooming, isPlacementActive: isInteractionPlacementActive } = useInteraction(state, controller, canvasSize, scaledVisualSize, {
		minZoom: effectiveMinZoom,
		maxZoom,
		onGestureStart,
		onGestureEnd,
		disabled
	});
	const canvasHandlers = {
		...handlers,
		onPointerDownCapture: () => {
			setIsFocusVisible(false);
		},
		onTouchStartCapture: (event) => {
			if (event.touches.length > 1) setTouchPinching(true);
		},
		onTouchMoveCapture: (event) => {
			if (event.touches.length > 1) setTouchPinching(true);
		},
		onTouchEndCapture: (event) => {
			if (event.touches.length === 0) setTouchPinching(false);
		},
		onTouchCancelCapture: (event) => {
			if (event.touches.length === 0) setTouchPinching(false);
		},
		onKeyDownCapture: (event) => {
			if (![
				"Shift",
				"Control",
				"Alt",
				"Meta"
			].includes(event.key)) setIsFocusVisible(true);
		},
		onPointerDown: (event) => {
			if (disabled || isResizingRef.current || isTouchPinchingRef.current || event.pointerType === "touch" && event.isPrimary === false) {
				event.preventDefault();
				return;
			}
			handlers.onPointerDown?.(event);
			setIsFocusVisible(false);
		}
	};
	(0, import_react.useEffect)(() => {
		const el = canvasRef.current;
		if (!el) return;
		const handleWheel = (event) => {
			if (isResizingRef.current || isSettlingRef.current) {
				event.preventDefault();
				return;
			}
			onWheelNative(event);
		};
		el.addEventListener("wheel", handleWheel, { passive: false });
		return () => {
			el.removeEventListener("wheel", handleWheel);
		};
	}, [onWheelNative]);
	const transformString = useTransformStyle(state, visualSize);
	/**
	* Handle the image load event.
	*/
	const handleImageLoad = (0, import_react.useCallback)((event) => {
		const img = event.currentTarget;
		const size = {
			width: img.naturalWidth,
			height: img.naturalHeight
		};
		setImage({
			src,
			naturalWidth: size.width,
			naturalHeight: size.height
		});
		onImageLoaded?.(size);
	}, [
		src,
		setImage,
		onImageLoaded
	]);
	const handleCropChange = (0, import_react.useCallback)((rect) => {
		if (isTouchPinchingRef.current) return;
		setCropRect(rect);
		if (isResizingRef.current && scaledVisualSize.width > 0 && scaledVisualSize.height > 0) {
			const offsetX = (canvasSize.width - scaledVisualSize.width) / 2;
			const offsetY = (canvasSize.height - scaledVisualSize.height) / 2;
			const rightOverflow = Math.max(0, offsetX + (rect.x + rect.width) * scaledVisualSize.width - canvasSize.width);
			const leftOverflow = Math.max(0, -(offsetX + rect.x * scaledVisualSize.width));
			const bottomOverflow = Math.max(0, offsetY + (rect.y + rect.height) * scaledVisualSize.height - canvasSize.height);
			const topOverflow = Math.max(0, -(offsetY + rect.y * scaledVisualSize.height));
			setViewportPan({
				x: -rightOverflow + leftOverflow,
				y: -bottomOverflow + topOverflow
			});
		}
	}, [
		setCropRect,
		setViewportPan,
		canvasSize,
		scaledVisualSize
	]);
	const [settling, setSettling] = (0, import_react.useState)(false);
	const settleTimerRef = (0, import_react.useRef)(void 0);
	const finishSettling = (0, import_react.useCallback)(() => {
		clearTimeout(settleTimerRef.current);
		isSettlingRef.current = false;
		setSettling(false);
	}, []);
	(0, import_react.useEffect)(() => {
		return () => {
			clearTimeout(settleTimerRef.current);
		};
	}, []);
	const isInteractiveGrid = showGrid === "interactive";
	const showInteractiveGrid = isInteractiveGrid && (isInteractionPlacementActive || isResizing || isPlacementActive);
	const outputSize = (0, import_react.useMemo)(() => {
		if (!showDimensions || !activeHandle || !state.image) return null;
		const region = getSourceRegion(state, {
			width: state.image.naturalWidth,
			height: state.image.naturalHeight
		});
		return {
			width: region.width,
			height: region.height
		};
	}, [
		showDimensions,
		activeHandle,
		state
	]);
	/**
	* Handle Escape on a resize handle — return focus to the canvas so
	* arrow keys pan the image rather than resize.
	*/
	const handleEscape = (0, import_react.useCallback)(() => {
		setIsFocusVisible(true);
		canvasRef.current?.focus({ preventScroll: true });
	}, []);
	const handleResizeStart = (0, import_react.useCallback)((handle) => {
		if (isTouchPinchingRef.current) return;
		setFrozenViewScale(viewScaleRest);
		isResizingRef.current = true;
		setIsResizing(true);
		setActiveHandle(handle ?? null);
		finishSettling();
		resetViewport();
		onGestureStart?.();
	}, [
		finishSettling,
		onGestureStart,
		resetViewport,
		viewScaleRest
	]);
	/**
	* Handle resize end — settle the crop rect (re-center, fill height)
	* and reset the viewport pan back to neutral.
	*/
	const handleResizeEnd = (0, import_react.useCallback)(() => {
		const isCancellingForPinch = isTouchPinchingRef.current;
		isResizingRef.current = false;
		setIsResizing(false);
		setActiveHandle(null);
		clearTimeout(settleTimerRef.current);
		if (isCancellingForPinch) {
			finishSettling();
			resetViewport();
			return;
		}
		isSettlingRef.current = true;
		setSettling(true);
		resetViewport();
		settleCrop();
		onGestureEnd?.();
		settleTimerRef.current = setTimeout(finishSettling, SETTLE_TRANSITION_FALLBACK_MS);
	}, [
		finishSettling,
		settleCrop,
		onGestureEnd,
		resetViewport
	]);
	/**
	* Finish settling when the settle transform transition actually completes.
	* The handler lives on the stage, but in the common (un-panned) case the
	* transform transition runs on the image layer and its `transitionend`
	* bubbles up to here. Other transitionend events (stencil left/top/width/
	* height) also bubble up, so only the transform transition should clear the
	* settle state.
	*/
	const handleSettleTransitionEnd = (0, import_react.useCallback)((event) => {
		if (!isSettlingRef.current || event.propertyName !== "transform") return;
		finishSettling();
	}, [finishSettling]);
	let imageTransition;
	if (settling) imageTransition = SETTLE_TRANSFORM_TRANSITION;
	else if (isZooming) imageTransition = "transform 150ms linear";
	const settleStencilTransition = settling ? SETTLE_STENCIL_TRANSITION : void 0;
	const imageStyle = (0, import_react.useMemo)(() => {
		if (elementSize.width === 0 || elementSize.height === 0) return {};
		const centerX = (canvasSize.width - elementSize.width) / 2;
		const centerY = (canvasSize.height - elementSize.height) / 2;
		return {
			width: elementSize.width,
			height: elementSize.height,
			maxWidth: elementSize.width,
			maxHeight: elementSize.height,
			left: centerX,
			top: centerY,
			transform: `scale(${viewScale}) ${transformString}`,
			transition: imageTransition,
			imageRendering: displayScale > 1 ? "pixelated" : void 0
		};
	}, [
		canvasSize,
		elementSize,
		transformString,
		imageTransition,
		displayScale,
		viewScale
	]);
	const settleTransition = settling ? SETTLE_TRANSFORM_TRANSITION : void 0;
	const willChange = isResizing || settling ? "transform" : void 0;
	let stageStyle;
	if (viewportState.pan.x !== 0 || viewportState.pan.y !== 0) stageStyle = {
		transform: `translate(${viewportState.pan.x}px, ${viewportState.pan.y}px)`,
		transition: settleTransition,
		willChange
	};
	else if (settling) stageStyle = {
		transform: "translate(0px, 0px)",
		transition: settleTransition,
		willChange
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
		ref,
		className: clsx("wp-media-editor-image-editor", isDragging && "wp-media-editor-image-editor--dragging", className),
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
			ref: canvasRef,
			className: clsx("wp-media-editor-image-editor__canvas", isInteractiveGrid && "wp-media-editor-image-editor__canvas--grid-interactive", showInteractiveGrid && "wp-media-editor-image-editor__canvas--show-grid", settling && "wp-media-editor-image-editor__canvas--settling", isFocusVisible && "wp-media-editor-image-editor__canvas--focus-visible"),
			tabIndex: 0,
			role: "group",
			"aria-label": __("Crop area"),
			"aria-describedby": isCropAreaFocused ? cropAreaDescriptionId : void 0,
			onFocus: handleCropAreaFocus,
			onBlur: handleCropAreaBlur,
			...canvasHandlers,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
				id: cropAreaDescriptionId,
				style: VISUALLY_HIDDEN_STYLE,
				children: __("When this area is focused, use arrow keys to move the image and plus or minus to zoom. Tab to resize handles and controls.")
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 1019,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
				className: "wp-media-editor-image-editor__stage",
				"data-testid": "cropper-stage",
				style: stageStyle,
				onTransitionEnd: handleSettleTransitionEnd,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("img", {
						className: "wp-media-editor-image-editor__image",
						"data-testid": "cropper-image",
						src,
						alt: "",
						onLoad: handleImageLoad,
						style: imageStyle,
						draggable: false
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 1041,
						columnNumber: 6
					}, this),
					showDimming && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DimmingOverlay, {
						cropRect: state.cropRect,
						containerSize: canvasSize,
						imageSize: scaledVisualSize,
						transition: settleStencilTransition
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 1053,
						columnNumber: 7
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(StencilComponent, {
						cropRect: state.cropRect,
						containerSize: canvasSize,
						imageSize: scaledVisualSize,
						onCropChange: handleCropChange,
						onResizeStart: handleResizeStart,
						onResizeEnd: handleResizeEnd,
						onEscape: handleEscape,
						aspectRatio,
						freeformCrop,
						isResizeDisabled: isTouchPinching || disabled,
						stencilTransition: settleStencilTransition,
						cropBounds,
						minCropSize,
						snapCropRect,
						keyboardResizeStep
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 1062,
						columnNumber: 6
					}, this),
					(showGrid === true || isInteractiveGrid) && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(GridOverlay, {
						cropRect: state.cropRect,
						containerSize: canvasSize,
						imageSize: scaledVisualSize
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 1082,
						columnNumber: 7
					}, this),
					activeHandle && outputSize && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DimensionsOverlay, {
						cropRect: state.cropRect,
						containerSize: canvasSize,
						imageSize: scaledVisualSize,
						activeHandle,
						outputWidth: outputSize.width,
						outputHeight: outputSize.height
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 1091,
						columnNumber: 7
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 1034,
				columnNumber: 5
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 991,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 971,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, CROP_RECT_EPSILON, CARDINAL_ROTATION_EPSILON, SETTLE_TRANSITION_DURATION_MS, SETTLE_TRANSITION_FALLBACK_MS, SETTLE_TRANSFORM_TRANSITION, SETTLE_STENCIL_TRANSITION, CropperInnerWithRef, Cropper;
function init_cropper() {
	return (init_cropper = __esmMin((() => {
		init_clsx();
		init_react();
		init_build_module();
		init_camera();
		init_containment();
		init_constants();
		init_stencil_math();
		init_use_interaction();
		init_use_transform_style();
		init_use_aria_announcer();
		init_rectangle_stencil();
		init_dimming_overlay();
		init_grid_overlay();
		init_dimensions_overlay();
		init_source_region();
		init_viewport_provider();
		init_visually_hidden_style();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx";
		CROP_RECT_EPSILON = 1e-6;
		CARDINAL_ROTATION_EPSILON = 1e-6;
		SETTLE_TRANSITION_DURATION_MS = 200;
		SETTLE_TRANSITION_FALLBACK_MS = 300;
		SETTLE_TRANSFORM_TRANSITION = `transform ${SETTLE_TRANSITION_DURATION_MS}ms ease-out`;
		SETTLE_STENCIL_TRANSITION = [
			`left ${SETTLE_TRANSITION_DURATION_MS}ms ease-out`,
			`top ${SETTLE_TRANSITION_DURATION_MS}ms ease-out`,
			`width ${SETTLE_TRANSITION_DURATION_MS}ms ease-out`,
			`height ${SETTLE_TRANSITION_DURATION_MS}ms ease-out`
		].join(", ");
		CropperInnerWithRef = (0, import_react.forwardRef)(CropperInner);
		Cropper = (0, import_react.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ViewportProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(CropperInnerWithRef, {
			...props,
			ref
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 1113,
			columnNumber: 4
		}, void 0) }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 1112,
			columnNumber: 3
		}, void 0));
		try {
			Cropper.__docgenInfo = {
				"description": "",
				"displayName": "Cropper",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
				"methods": [],
				"props": {
					"src": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						}],
						"description": "Image source URL.",
						"name": "src",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"controller": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						}],
						"description": "The cropper controller from `useCropperReducer` or a composite store.",
						"name": "controller",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "CropperController" }
					},
					"stencil": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						}],
						"description": "Stencil component for the crop area. Defaults to RectangleStencil.",
						"name": "stencil",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ComponentType<StencilProps>" }
					},
					"showGrid": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						}],
						"description": "Show the rule-of-thirds grid overlay, or only during interactions.",
						"name": "showGrid",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean | \"interactive\"" }
					},
					"isPlacementActive": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						}],
						"description": "Whether external placement activity should keep the grid visible.",
						"name": "isPlacementActive",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"showDimming": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						}],
						"description": "Show the dimming overlay outside the crop area.",
						"name": "showDimming",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"showDimensions": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						}],
						"description": "Show the live output dimensions tooltip during a resize.",
						"name": "showDimensions",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"minZoom": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						}],
						"description": "Minimum zoom level override. Defaults to the coverage-aware minimum.",
						"name": "minZoom",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"maxZoom": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						}],
						"description": "Maximum zoom level.",
						"name": "maxZoom",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"aspectRatio": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						}],
						"description": "Fixed aspect ratio (width / height) in pixel space for the crop area.",
						"name": "aspectRatio",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"freeformCrop": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						}],
						"description": "Enable freeform crop mode with resizable handles.\nWhen false (default), the crop area is fixed and centered.\nWhen true, the crop area has resize handles and can be freely repositioned.",
						"name": "freeformCrop",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"focusOnMount": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						}],
						"description": "Focus the crop area when the cropper mounts.",
						"name": "focusOnMount",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						}],
						"description": "Ignore all crop interaction: pointer drags, wheel zoom, keyboard\npan/zoom and the stencil's resize handles. Any gesture already in\nflight is cancelled. Used while the edit is being saved, so the\nmodifiers sent to the server cannot change after the request starts.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onImageLoaded": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						}],
						"description": "Callback fired when the image is loaded.",
						"name": "onImageLoaded",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((size: Size) => void)" }
					},
					"onStateChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						}],
						"description": "Callback fired on every state change. Fires at pointermove rate\nduring drags, so keep the handler light — no heavy work, no\nexpensive parent re-renders. For commit-style events (drag end,\nsettled crop), use `onGestureEnd` instead.\n\nUseful for lightweight syncing with external tools, analytics,\nor AI agents. Receives the full state so consumers can derive\nwhatever they need.",
						"name": "onStateChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((state: CropperState) => void)" }
					},
					"onGestureStart": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						}],
						"description": "Fires when a continuous gesture begins (pan drag, handle resize, pinch zoom).",
						"name": "onGestureStart",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "(() => void)" }
					},
					"onGestureEnd": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						}],
						"description": "Fires when a continuous gesture ends (pointerup, resize settle).",
						"name": "onGestureEnd",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "(() => void)" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						}],
						"description": "Additional className for the container.",
						"name": "className",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/image-editor/react/components/cropper.tsx",
							"name": "CropperProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/media-editor/src/image-editor/core/export/canvas-renderer.ts
/**
* Load an image from a URL with CORS support.
*
* @param src - The image URL to load.
* @return A promise that resolves to the loaded HTMLImageElement.
*/
function loadImage(src) {
	return new Promise((resolve, reject) => {
		const image = new Image();
		image.addEventListener("load", () => resolve(image));
		image.addEventListener("error", (error) => reject(error));
		image.crossOrigin = "anonymous";
		image.src = src;
	});
}
/**
* Apply rectangular crop, rotation, and flip transforms to produce a canvas.
*
* Uses createExportCamera to compose the full transform matrix, then applies
* it in a single ctx.setTransform call before drawing the image.
*
* @param image - The source image element.
* @param state - The full cropper state containing crop, rotation, and flip settings.
* @return A canvas element containing the transformed and cropped image.
*/
function renderToCanvas(image, state) {
	const { naturalWidth, naturalHeight } = image;
	const { rotation, cropRect } = state;
	const imageSize = {
		width: naturalWidth,
		height: naturalHeight
	};
	const rotBBox = getRotatedBBox(naturalWidth, naturalHeight, Math.round(rotation / 90) * 90);
	const outW = Math.round(cropRect.width * rotBBox.width);
	const outH = Math.round(cropRect.height * rotBBox.height);
	const canvas = document.createElement("canvas");
	canvas.width = outW;
	canvas.height = outH;
	const ctx = canvas.getContext("2d");
	if (!ctx) throw new Error("Could not obtain a 2D context for the export canvas.");
	const camera = createExportCamera(state, imageSize, {
		width: outW,
		height: outH
	});
	ctx.setTransform(camera[0], camera[1], camera[2], camera[3], camera[4], camera[5]);
	ctx.drawImage(image, 0, 0);
	return canvas;
}
/**
* Convert a canvas to a Blob with configurable MIME type and quality.
*
* @param canvas   - The canvas to export.
* @param mimeType - The output MIME type. Defaults to 'image/png'.
* @param quality  - The quality parameter for lossy formats (0-1). Defaults to DEFAULT_QUALITY.
* @return A promise that resolves to the canvas content as a Blob.
*/
function canvasToBlob(canvas, mimeType = "image/png", quality = DEFAULT_QUALITY) {
	return new Promise((resolve, reject) => {
		canvas.toBlob((blob) => {
			if (blob) resolve(blob);
			else reject(/* @__PURE__ */ new Error("Canvas toBlob returned null."));
		}, mimeType, quality);
	});
}
/**
* Convert a canvas to a data URL string.
*
* @param canvas   - The canvas to export.
* @param mimeType - The output MIME type. Defaults to 'image/png'.
* @param quality  - The quality parameter for lossy formats (0-1). Defaults to DEFAULT_QUALITY.
* @return The canvas content as a data URL string.
*/
function canvasToDataURL(canvas, mimeType = "image/png", quality = DEFAULT_QUALITY) {
	return canvas.toDataURL(mimeType, quality);
}
/**
* Load an image, render with transforms, and export as a Blob.
*
* Throws on failure so callers can distinguish error cases:
* - Image load failures (network errors, 404s) throw the native
*   load error from the Image element.
* - Cross-origin failures manifest as tainted-canvas errors from
*   `canvas.toBlob()` — the browser rejects reading pixel data
*   from a canvas that drew an image without valid CORS headers.
*   Ensure the source server sets `Access-Control-Allow-Origin`.
* - Canvas context creation failures throw a descriptive Error.
*
* Only works in browser environments (needs DOM / HTMLCanvasElement).
*
* @param src      - The image URL to load.
* @param state    - The cropper state with all transform settings.
* @param mimeType - The output MIME type. Defaults to 'image/png'.
* @param quality  - The quality parameter for lossy formats (0-1). Defaults to DEFAULT_QUALITY.
* @return A promise that resolves to the exported Blob.
* @throws If the image fails to load, canvas creation fails, or
*         the resulting canvas is tainted by CORS restrictions.
*/
async function exportCroppedImage(src, state, mimeType = "image/png", quality = DEFAULT_QUALITY) {
	return canvasToBlob(renderToCanvas(await loadImage(src), state), mimeType, quality);
}
/**
* Download the cropped image as a file.
*
* Loads the source image, applies all transforms, and triggers a
* browser download via exportCroppedImage() + object URL + anchor click.
*
* Throws on export failure (see `exportCroppedImage`).
*
* @param src      - The image URL to load.
* @param state    - The cropper state with all transform settings.
* @param filename - The download filename. Defaults to 'cropped-image'.
* @param mimeType - The output MIME type. Defaults to 'image/png'.
* @param quality  - The quality parameter for lossy formats (0-1). Defaults to DEFAULT_QUALITY.
* @return A promise that resolves when the download is triggered.
*/
async function downloadCroppedImage(src, state, filename = "cropped-image", mimeType = "image/png", quality = DEFAULT_QUALITY) {
	const blob = await exportCroppedImage(src, state, mimeType, quality);
	const ext = mimeType.split("/")[1] ?? "png";
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = `${filename}.${ext}`;
	a.click();
	URL.revokeObjectURL(url);
}
var DEFAULT_QUALITY;
function init_canvas_renderer() {
	return (init_canvas_renderer = __esmMin((() => {
		init_camera();
		DEFAULT_QUALITY = .92;
	})))();
}
//#endregion
//#region ../packages/media-editor/src/image-editor/core/state.ts
function nearlyEqual(a, b) {
	return Math.abs(a - b) < STATE_EPSILON;
}
function clampRequestedZoom(state, zoom) {
	if (state.image) return Math.min(10, Math.max(ABSOLUTE_MIN_ZOOM, zoom));
	return Math.min(10, Math.max(1, zoom));
}
/**
* Translate a pipeline transform operation into the equivalent
* reducer action. Pipeline ops aren't 1:1 with reducer actions —
* `rotate` is a delta here, whereas SET_ROTATION takes an absolute
* angle — so deltas are resolved against the current state.
*
* Used by APPLY_OPERATION (and by the pipeline module's
* `applyOperationToState`, which is now a thin wrapper around the
* reducer) so that pipeline replay produces identical bounded
* state to UI interaction or direct setters.
*
* @param state The current cropper state.
* @param op    The pipeline operation.
* @return The equivalent reducer action.
*/
function operationToAction(state, op) {
	switch (op.type) {
		case "crop": return {
			type: "SET_CROP_RECT",
			payload: { ...op.rect }
		};
		case "rotate": {
			const fieldDelta = state.flip.horizontal !== state.flip.vertical ? -op.degrees : op.degrees;
			return {
				type: "SET_ROTATION",
				payload: normalizeRotation(state.rotation + fieldDelta)
			};
		}
		case "flip": return {
			type: "SET_FLIP",
			payload: {
				...state.flip,
				[op.direction]: !state.flip[op.direction]
			}
		};
		case "zoom": return {
			type: "SET_ZOOM",
			payload: op.factor
		};
	}
}
/**
* Enforces containment: restricts the crop rect to fit within the
* rotated image, computes minimum zoom, clamps zoom, and restricts
* the pan position so the image always covers the crop area.
* Called after every relevant state transition.
*
* @param state The state to enforce containment on.
* @return The state with cropRect, zoom, and position restricted.
*/
function enforceContainment(state) {
	if (!state.image) return state;
	const imageSize = {
		width: state.image.naturalWidth,
		height: state.image.naturalHeight
	};
	const imageAspectRatio = imageSize.width / imageSize.height;
	const { pan: panAfterZoom, zoom } = restrictPanZoom(state, imageSize, state.cropRect);
	const cropRect = restrictCropRect(state.cropRect, zoom, state.rotation, imageAspectRatio);
	let pan = panAfterZoom;
	if (cropRect !== state.cropRect) ({pan} = restrictPanZoom({
		...state,
		zoom,
		cropRect
	}, imageSize, cropRect));
	if (pan.x === state.pan.x && pan.y === state.pan.y && zoom === state.zoom && cropRect === state.cropRect) return state;
	return {
		...state,
		pan,
		zoom,
		cropRect
	};
}
/**
* Snapshot the current `crop`, `zoom`, and `rotation` into the
* corresponding `basePan`, `baseZoom`, `baseRotation` fields. Called
* by every committing action so that the next SET_ROTATION derives
* its transient pan from a fresh base (not from a drifted one).
*
* SET_ROTATION is the only action that does NOT commit base — it
* reads the base, computes a transient pan, and leaves the base
* alone. This is what eliminates rotation drift near edges.
*
* @param next The post-containment state to commit.
* @return The state with base fields synced to current.
*/
function commitBase(next) {
	if (next.basePan.x === next.pan.x && next.basePan.y === next.pan.y && next.baseZoom === next.zoom && next.baseRotation === next.rotation) return next;
	return {
		...next,
		basePan: {
			x: next.pan.x,
			y: next.pan.y
		},
		baseZoom: next.zoom,
		baseRotation: next.rotation
	};
}
/**
* Reducer function for cropper state management.
*
* Every state transition that could invalidate the containment invariant
* (crop, zoom, rotation, cropRect, flip) is followed by enforceContainment
* to ensure the image always covers the crop area.
*
* Committing actions (everything except SET_ROTATION) also call
* `commitBase` to snapshot the post-containment state as the new
* base pose. SET_ROTATION derives from that base without mutating
* it, which prevents accumulated-clamp drift during continuous fine
* rotation.
*
* @param state  The current cropper state.
* @param action The action to process.
* @return The new cropper state.
*/
function cropperReducer(state, action) {
	switch (action.type) {
		case "SET_IMAGE": return commitBase(enforceContainment({
			...state,
			image: action.payload
		}));
		case "SET_PAN": return commitBase(enforceContainment({
			...state,
			pan: action.payload
		}));
		case "SET_ZOOM": {
			const z = clampRequestedZoom(state, action.payload);
			return commitBase(enforceContainment({
				...state,
				zoom: z
			}));
		}
		case "SET_ZOOM_AT_POINT": {
			const z = clampRequestedZoom(state, action.payload.zoom);
			return commitBase(enforceContainment({
				...state,
				zoom: z,
				pan: action.payload.pan
			}));
		}
		case "SET_ROTATION": {
			const newRotation = normalizeRotation(action.payload);
			const singleFlip = state.flip.horizontal !== state.flip.vertical;
			const deltaRad = degreesToRadians(newRotation - state.baseRotation);
			const cos = Math.cos(deltaRad);
			const sin = Math.sin(deltaRad) * (singleFlip ? -1 : 1);
			const cropCx = state.cropRect.x + state.cropRect.width / 2;
			const cropCy = state.cropRect.y + state.cropRect.height / 2;
			const ox = cropCx - .5;
			const oy = cropCy - .5;
			const dx = state.basePan.x - ox;
			const dy = state.basePan.y - oy;
			return enforceContainment({
				...state,
				rotation: newRotation,
				zoom: state.baseZoom,
				pan: {
					x: ox + cos * dx - sin * dy,
					y: oy + sin * dx + cos * dy
				}
			});
		}
		case "SNAP_ROTATE_90": {
			const rawDir = action.payload.direction;
			const fieldDir = state.flip.horizontal !== state.flip.vertical ? -rawDir : rawDir;
			const rot90 = normalizeRotation(state.rotation + fieldDir * 90);
			const rect = state.cropRect;
			const cx = rect.x + rect.width / 2;
			const cy = rect.y + rect.height / 2;
			const newPanX = rawDir === 1 ? -state.pan.y : state.pan.y;
			const newPanY = rawDir === 1 ? state.pan.x : -state.pan.x;
			return commitBase(enforceContainment({
				...state,
				rotation: rot90,
				zoom: state.baseZoom,
				pan: {
					x: newPanX,
					y: newPanY
				},
				cropRect: {
					x: cx - rect.height / 2,
					y: cy - rect.width / 2,
					width: rect.height,
					height: rect.width
				}
			}));
		}
		case "SET_FLIP": {
			const oldFlip = state.flip;
			const newFlip = action.payload;
			const flippedH = oldFlip.horizontal !== newFlip.horizontal;
			const flippedV = oldFlip.vertical !== newFlip.vertical;
			const rect = state.cropRect;
			return commitBase(enforceContainment({
				...state,
				flip: newFlip,
				pan: {
					x: flippedH ? -state.pan.x : state.pan.x,
					y: flippedV ? -state.pan.y : state.pan.y
				},
				cropRect: {
					x: flippedH ? 1 - rect.x - rect.width : rect.x,
					y: flippedV ? 1 - rect.y - rect.height : rect.y,
					width: rect.width,
					height: rect.height
				}
			}));
		}
		case "SET_CROP_RECT": return commitBase(enforceContainment({
			...state,
			cropRect: action.payload
		}));
		case "SETTLE_CROP": {
			const rect = state.cropRect;
			if (rect.width === 0 || rect.height === 0 || !state.image) return state;
			const fitScale = 1 / Math.max(rect.width, rect.height);
			const zoomCap = state.zoom > 0 ? 10 / state.zoom : fitScale;
			const s = Math.min(fitScale, zoomCap);
			const newW = rect.width * s;
			const newH = rect.height * s;
			const oldCx = rect.x + rect.width / 2;
			const oldCy = rect.y + rect.height / 2;
			return commitBase(enforceContainment({
				...state,
				zoom: state.zoom * s,
				pan: {
					x: (state.pan.x - oldCx + .5) * s,
					y: (state.pan.y - oldCy + .5) * s
				},
				cropRect: {
					x: (1 - newW) / 2,
					y: (1 - newH) / 2,
					width: newW,
					height: newH
				}
			}));
		}
		case "APPLY_OPERATION": return cropperReducer(state, operationToAction(state, action.payload));
		case "RESET": return commitBase(enforceContainment({
			...DEFAULT_STATE,
			image: state.image,
			...action.payload
		}));
	}
}
/**
* Shallow comparison of key cropper state fields to determine if
* the state has been modified from an initial snapshot.
*
* @param current The current cropper state.
* @param initial The initial cropper state snapshot.
* @return True if any tracked field differs.
*/
function isStateDirty(current, initial) {
	return !nearlyEqual(current.pan.x, initial.pan.x) || !nearlyEqual(current.pan.y, initial.pan.y) || !nearlyEqual(current.zoom, initial.zoom) || !nearlyEqual(current.rotation, initial.rotation) || current.flip.horizontal !== initial.flip.horizontal || current.flip.vertical !== initial.flip.vertical || !nearlyEqual(current.cropRect.x, initial.cropRect.x) || !nearlyEqual(current.cropRect.y, initial.cropRect.y) || !nearlyEqual(current.cropRect.width, initial.cropRect.width) || !nearlyEqual(current.cropRect.height, initial.cropRect.height);
}
var STATE_EPSILON;
function init_state() {
	return (init_state = __esmMin((() => {
		init_constants();
		init_containment();
		STATE_EPSILON = 1e-6;
	})))();
}
//#endregion
//#region ../packages/media-editor/src/image-editor/core/setter-helpers.ts
/**
* Build the reducer action that produces a "cursorless" zoom — zoom
* anchored at the current crop-rect center, with pan clamped to keep
* the image covering the crop.
*
* The slider, the `+`/`-` keys, and the toolbar buttons have no
* natural focal point (unlike wheel/pinch zoom), so they default to
* the crop center. Returns `null` when the clamped zoom matches the
* current zoom (no-op).
*
* Extracted so multiple hooks (the pure `useCropperReducer` and the
* composite `useMediaEditorState`) can share the math without
* duplicating it.
*
* @param state         The current cropper state.
* @param requestedZoom The zoom value the caller asked for.
* @return A `SET_ZOOM_AT_POINT` action, or `null` if no change is required.
*/
function buildFocalPointZoomAction(state, requestedZoom) {
	const clampedZoom = Math.min(10, Math.max(getMinZoom(state), requestedZoom));
	if (clampedZoom === state.zoom) return null;
	const { cropRect } = state;
	const focalNormX = cropRect.x + cropRect.width / 2 - .5;
	const focalNormY = cropRect.y + cropRect.height / 2 - .5;
	const zoomRatio = 1 - clampedZoom / state.zoom;
	const newPanX = state.pan.x + (focalNormX - state.pan.x) * zoomRatio;
	const newPanY = state.pan.y + (focalNormY - state.pan.y) * zoomRatio;
	const imageSize = state.image ? {
		width: state.image.naturalWidth,
		height: state.image.naturalHeight
	} : {
		width: 1,
		height: 1
	};
	const { pan: clampedPan } = restrictPanZoom({
		...state,
		zoom: clampedZoom,
		pan: {
			x: newPanX,
			y: newPanY
		}
	}, imageSize, state.cropRect);
	return {
		type: "SET_ZOOM_AT_POINT",
		payload: {
			zoom: clampedZoom,
			pan: clampedPan
		}
	};
}
function init_setter_helpers() {
	return (init_setter_helpers = __esmMin((() => {
		init_constants();
		init_containment();
	})))();
}
//#endregion
//#region ../packages/media-editor/src/image-editor/react/hooks/build-cropper-setters.ts
/**
* Build the named cropper setters from a dispatch function and a
* state getter. The two consuming hooks differ in how they dispatch:
*
* - `useCropperReducer` dispatches directly into its `useReducer`.
* - `useMediaEditorState` wraps cropper actions in a composite
*   `CROPPER` envelope so the history machinery can record them.
*
* Both pass their own dispatch function and a getter that returns
* the current `CropperState`. The factory shape keeps the two hooks
* in lockstep — add a setter here once, both hooks get it.
*
* @param dispatchCropperAction Apply a `CropperAction` to the
*                              underlying reducer.
* @param getCropperState       Return the current `CropperState`.
*                              Used by setters that need to read
*                              the latest state to compute their
*                              payload (focal-point zoom, flip toggle).
* @return The named cropper setters.
*/
function buildCropperSetters(dispatchCropperAction, getCropperState) {
	return {
		setPan: (pan) => dispatchCropperAction({
			type: "SET_PAN",
			payload: pan
		}),
		setZoom: (zoom) => {
			const action = buildFocalPointZoomAction(getCropperState(), zoom);
			if (action) dispatchCropperAction(action);
		},
		setZoomAtPoint: (zoom, pan) => dispatchCropperAction({
			type: "SET_ZOOM_AT_POINT",
			payload: {
				zoom,
				pan
			}
		}),
		setRotation: (rotation) => dispatchCropperAction({
			type: "SET_ROTATION",
			payload: rotation
		}),
		setFlip: (flip) => dispatchCropperAction({
			type: "SET_FLIP",
			payload: flip
		}),
		toggleFlip: (direction) => {
			const { flip } = getCropperState();
			dispatchCropperAction({
				type: "SET_FLIP",
				payload: {
					...flip,
					[direction]: !flip[direction]
				}
			});
		},
		snapRotate90: (direction) => dispatchCropperAction({
			type: "SNAP_ROTATE_90",
			payload: { direction }
		}),
		setCropRect: (rect) => dispatchCropperAction({
			type: "SET_CROP_RECT",
			payload: rect
		}),
		settleCrop: () => dispatchCropperAction({ type: "SETTLE_CROP" }),
		applyOperation: (op) => dispatchCropperAction({
			type: "APPLY_OPERATION",
			payload: op
		})
	};
}
function init_build_cropper_setters() {
	return (init_build_cropper_setters = __esmMin((() => {
		init_setter_helpers();
	})))();
}
//#endregion
//#region ../packages/media-editor/src/image-editor/react/hooks/use-cropper-reducer.ts
function areCropperImagesEqual(a, b) {
	return a?.src === b?.src && a?.naturalWidth === b?.naturalWidth && a?.naturalHeight === b?.naturalHeight;
}
/**
* Pure reducer hook for the image cropper.
*
* Wraps the framework-agnostic `cropperReducer` and exposes named
* setters (built from the shared `buildCropperSetters` factory).
* Does NOT manage undo/redo history — that responsibility belongs to
* the surrounding application (see `useMediaEditorState` for the
* composite store used by the media editor).
*
* @param initialState Optional partial state to merge with DEFAULT_STATE.
* @return The cropper controller — state, setters, and helpers.
*/
function useCropperReducer(initialState) {
	const [state, dispatch] = (0, import_react.useReducer)(cropperReducer, initialState, (init) => enforceContainment({
		...DEFAULT_STATE,
		...init
	}));
	const [initialBaseline, setInitialBaseline] = (0, import_react.useState)(() => enforceContainment({
		...DEFAULT_STATE,
		...initialState
	}));
	const stateRef = (0, import_react.useRef)(state);
	const dispatchAndSync = (0, import_react.useCallback)((action) => {
		const next = cropperReducer(stateRef.current, action);
		stateRef.current = next;
		dispatch(action);
		return next;
	}, []);
	const setImage = (0, import_react.useCallback)((image) => {
		if (areCropperImagesEqual(stateRef.current.image, image)) return;
		const next = dispatchAndSync({
			type: "SET_IMAGE",
			payload: image
		});
		setInitialBaseline(next);
	}, [dispatchAndSync]);
	const reset = (0, import_react.useCallback)((resetState) => {
		const nextInitialState = dispatchAndSync({
			type: "RESET",
			payload: resetState
		});
		setInitialBaseline(nextInitialState);
	}, [dispatchAndSync]);
	const setters = (0, import_react.useMemo)(() => buildCropperSetters(dispatchAndSync, () => stateRef.current), [dispatchAndSync]);
	const isDirty = isStateDirty(state, initialBaseline);
	const getCroppedImage = (0, import_react.useCallback)((mimeType, quality) => {
		if (!state.image) return Promise.reject(/* @__PURE__ */ new Error("No image loaded — call setImage first."));
		return exportCroppedImage(state.image.src, state, mimeType, quality);
	}, [state]);
	const setVisualSize = (0, import_react.useCallback)(() => {}, []);
	const adjustCropRectForViewport = setters.setCropRect;
	return {
		...setters,
		state,
		setImage,
		reset,
		isDirty,
		getCroppedImage,
		setVisualSize,
		adjustCropRectForViewport
	};
}
function init_use_cropper_reducer() {
	return (init_use_cropper_reducer = __esmMin((() => {
		init_react();
		init_constants();
		init_canvas_renderer();
		init_state();
		init_build_cropper_setters();
	})))();
}
//#endregion
//#region ../packages/media-editor/src/image-editor/stories/style.module.css
var container, resizable, toolbar, sliders, state, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		container = "_container_o6t8t_1";
		resizable = "_resizable_o6t8t_9";
		toolbar = "_toolbar_o6t8t_21";
		sliders = "_sliders_o6t8t_32";
		state = "_state_o6t8t_43";
		style_module_default = {
			container,
			resizable,
			toolbar,
			sliders,
			"hidden-file": "_hidden-file_o6t8t_39",
			state,
			"export-preview": "_export-preview_o6t8t_54",
			"export-image": "_export-image_o6t8t_59"
		};
	})))();
}
//#endregion
//#region ../packages/media-editor/src/image-editor/stories/rectangle-crop.story.tsx
function useUploadableImage() {
	const [src, setSrc] = (0, import_react.useState)(SAMPLE_IMAGE);
	const [isCustom, setIsCustom] = (0, import_react.useState)(false);
	return {
		src,
		isCustom,
		handleFileChange: (0, import_react.useCallback)((event) => {
			const file = event.target.files?.[0];
			if (!file) return;
			const reader = new FileReader();
			reader.onload = () => {
				if (typeof reader.result === "string") {
					setSrc(reader.result);
					setIsCustom(true);
				}
			};
			reader.readAsDataURL(file);
		}, []),
		resetToSample: (0, import_react.useCallback)(() => {
			setSrc(SAMPLE_IMAGE);
			setIsCustom(false);
		}, [])
	};
}
/**
* Resolve an aspect ratio value from the select dropdown.
* 0 = free (no lock), ORIGINAL_ASPECT_RATIO (-1) = image's natural ratio.
*/
function resolveAspectRatio(value, imageState) {
	const num = parseFloat(value);
	if (num === 0) return;
	if (num === -1 && imageState) return imageState.naturalWidth / imageState.naturalHeight;
	if (num > 0) return num;
}
var import_jsx_dev_runtime, _jsxFileName, aspectRatioItems, gridItems, formatItems, SAMPLE_IMAGE, GRID_MODES, IMAGE_CREDIT, meta, DefaultComponent, Default, WithControlsComponent, WithControls, DebugComponent, Debug;
function init_rectangle_crop_story() {
	return (init_rectangle_crop_story = __esmMin((() => {
		init_react();
		init_button(), init_range_control(), init_toggle_control(), init_component$1(), init_component();
		init_select_control();
		init_build_module$2();
		init_cropper();
		init_use_cropper_reducer();
		init_constants();
		init_containment();
		init_canvas_renderer();
		init_camera();
		init_source_region();
		init_style_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/media-editor/src/image-editor/stories/rectangle-crop.story.tsx";
		aspectRatioItems = DEFAULT_ASPECT_RATIOS.map((preset) => ({
			label: preset.label,
			value: preset.value.toString()
		}));
		gridItems = [
			{
				label: "Grid: off",
				value: "off"
			},
			{
				label: "Grid: always on",
				value: "on"
			},
			{
				label: "Grid: interactive",
				value: "interactive"
			}
		];
		formatItems = [
			{
				label: "JPEG",
				value: "image/jpeg"
			},
			{
				label: "PNG",
				value: "image/png"
			},
			{
				label: "WebP",
				value: "image/webp"
			}
		];
		SAMPLE_IMAGE = "image-editor-demo.jpeg";
		GRID_MODES = {
			off: false,
			on: true,
			interactive: "interactive"
		};
		IMAGE_CREDIT = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			style: {
				fontSize: 10,
				color: "#aaa",
				margin: "4px 0 0"
			},
			children: [
				"\"A fashionable melange of English words (1887)\" ",
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
					href: "http://publicdomainreview.org/2013/01/23/a-fashionable-melange-of-english-words-1887",
					style: { color: "#bbb" },
					children: "publicdomainreview.org"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 73,
					columnNumber: 3
				}, void 0),
				" by See-ming Lee (SML) is licensed under CC BY 2.0."
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 71,
			columnNumber: 2
		}, void 0);
		meta = {
			id: "mediaeditor-imageeditor",
			title: "Editor/Media Editor/ImageEditor",
			component: Cropper,
			tags: ["status-experimental"]
		};
		DefaultComponent = () => {
			const controller = useCropperReducer();
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: style_module_default.container,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cropper, {
					src: SAMPLE_IMAGE,
					controller,
					showDimming: true
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 155,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 154,
				columnNumber: 4
			}, void 0), IMAGE_CREDIT] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 153,
				columnNumber: 3
			}, void 0);
		};
		Default = {
			parameters: { a11y: { test: "todo" } },
			render: DefaultComponent
		};
		WithControlsComponent = () => {
			const controller = useCropperReducer();
			const { state, setRotation, setFlip, setZoom, setCropRect, snapRotate90, reset, isDirty } = controller;
			const [aspectRatioValue, setAspectRatioValue] = (0, import_react.useState)("0");
			const [freeformCrop, setFreeformCrop] = (0, import_react.useState)(false);
			const [gridMode, setGridMode] = (0, import_react.useState)("interactive");
			const { src, isCustom, handleFileChange, resetToSample } = useUploadableImage();
			const fileInputRef = (0, import_react.useRef)(null);
			const openFilePicker = (0, import_react.useCallback)(() => {
				fileInputRef.current?.click();
			}, []);
			const prevSrcRef = (0, import_react.useRef)(src);
			(0, import_react.useEffect)(() => {
				if (prevSrcRef.current !== src) {
					prevSrcRef.current = src;
					reset();
					setAspectRatioValue("0");
				}
			}, [src, reset]);
			const cropDimensions = state.image ? getSourceRegion(state, {
				width: state.image.naturalWidth,
				height: state.image.naturalHeight
			}) : null;
			const baseAngle = Math.round(state.rotation / 90) * 90;
			const visualDir = state.flip.horizontal !== state.flip.vertical ? -1 : 1;
			const fineOffset = (state.rotation - baseAngle) * visualDir;
			const handleRotateLeft = (0, import_react.useCallback)(() => {
				snapRotate90(-1);
			}, [snapRotate90]);
			const handleRotateRight = (0, import_react.useCallback)(() => {
				snapRotate90(1);
			}, [snapRotate90]);
			const handleRotationSlider = (0, import_react.useCallback)((value) => {
				if (value === void 0) return;
				setRotation(baseAngle + Math.max(-44.99, Math.min(44.99, value)) * visualDir);
			}, [
				baseAngle,
				setRotation,
				visualDir
			]);
			const handleFlipHorizontal = (0, import_react.useCallback)(() => {
				setFlip({
					horizontal: !state.flip.horizontal,
					vertical: state.flip.vertical
				});
			}, [state.flip, setFlip]);
			const handleFlipVertical = (0, import_react.useCallback)(() => {
				setFlip({
					horizontal: state.flip.horizontal,
					vertical: !state.flip.vertical
				});
			}, [state.flip, setFlip]);
			const handleZoomChange = (0, import_react.useCallback)((value) => {
				if (value === void 0) return;
				setZoom(value);
			}, [setZoom]);
			const handleAspectRatioChange = (0, import_react.useCallback)((value) => {
				setAspectRatioValue(value);
				const resolved = resolveAspectRatio(value, state.image);
				if (freeformCrop && resolved && resolved > 0 && state.image) {
					const ratio = resolved;
					const natW = state.image.naturalWidth;
					const natH = state.image.naturalHeight;
					const visualBBox = getRotatedBBox(natW, natH, state.rotation);
					const normalizedRatio = ratio * visualBBox.height / visualBBox.width;
					let w = state.cropRect.width;
					let h = w / normalizedRatio;
					if (h > 1) {
						h = state.cropRect.height;
						w = h * normalizedRatio;
					}
					w = Math.min(w, 1);
					h = Math.min(h, 1);
					setCropRect({
						x: (1 - w) / 2,
						y: (1 - h) / 2,
						width: w,
						height: h
					});
				}
			}, [
				freeformCrop,
				state.image,
				state.cropRect,
				state.rotation,
				setCropRect
			]);
			const handleReset = (0, import_react.useCallback)(() => {
				reset();
				setAspectRatioValue("0");
			}, [reset]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
					ref: fileInputRef,
					type: "file",
					accept: "image/*",
					onChange: handleFileChange,
					className: style_module_default["hidden-file"]
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 334,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: style_module_default.toolbar,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default$1, {
						align: "center",
						gap: 2,
						wrap: true,
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, {
								__next40pxDefaultSize: true,
								variant: "primary",
								icon: cloud_upload_default,
								onClick: openFilePicker,
								children: "Upload"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 344,
								columnNumber: 7
							}, void 0) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 343,
								columnNumber: 6
							}, void 0),
							isCustom && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, {
								__next40pxDefaultSize: true,
								variant: "tertiary",
								onClick: resetToSample,
								children: "Use sample"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 355,
								columnNumber: 8
							}, void 0) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 354,
								columnNumber: 7
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, {
								__next40pxDefaultSize: true,
								variant: "secondary",
								icon: rotate_left_default,
								label: "Rotate 90° counter-clockwise",
								showTooltip: true,
								onClick: handleRotateLeft
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 365,
								columnNumber: 7
							}, void 0) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 364,
								columnNumber: 6
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, {
								__next40pxDefaultSize: true,
								variant: "secondary",
								icon: rotate_right_default,
								label: "Rotate 90° clockwise",
								showTooltip: true,
								onClick: handleRotateRight
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 375,
								columnNumber: 7
							}, void 0) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 374,
								columnNumber: 6
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, {
								__next40pxDefaultSize: true,
								variant: "secondary",
								icon: flip_horizontal_default,
								label: "Flip horizontal",
								showTooltip: true,
								isPressed: state.flip.horizontal,
								onClick: handleFlipHorizontal
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 385,
								columnNumber: 7
							}, void 0) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 384,
								columnNumber: 6
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, {
								__next40pxDefaultSize: true,
								variant: "secondary",
								icon: flip_vertical_default,
								label: "Flip vertical",
								showTooltip: true,
								isPressed: state.flip.vertical,
								onClick: handleFlipVertical
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 396,
								columnNumber: 7
							}, void 0) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 395,
								columnNumber: 6
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl, {
								label: "Aspect ratio",
								hideLabelFromVision: true,
								value: aspectRatioItems.find((item) => item.value === aspectRatioValue) ?? null,
								onValueChange: (item) => {
									if (item && item.value !== null) handleAspectRatioChange(item.value);
								},
								items: aspectRatioItems
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 407,
								columnNumber: 7
							}, void 0) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 406,
								columnNumber: 6
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(toggle_control_default, {
								label: "Freeform",
								checked: freeformCrop,
								onChange: setFreeformCrop
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 424,
								columnNumber: 7
							}, void 0) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 423,
								columnNumber: 6
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl, {
								label: "Grid",
								hideLabelFromVision: true,
								value: gridItems.find((item) => item.value === gridMode) ?? null,
								onValueChange: (item) => {
									if (item && item.value !== null) setGridMode(item.value);
								},
								items: gridItems
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 431,
								columnNumber: 7
							}, void 0) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 430,
								columnNumber: 6
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, { isBlock: true }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 447,
								columnNumber: 6
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, {
								__next40pxDefaultSize: true,
								variant: "primary",
								icon: reset_default,
								disabled: !isDirty,
								accessibleWhenDisabled: true,
								onClick: handleReset,
								children: "Reset"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 449,
								columnNumber: 7
							}, void 0) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 448,
								columnNumber: 6
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 342,
						columnNumber: 5
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: style_module_default.sliders,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(range_control_default, {
							label: "Fine rotation",
							min: -45,
							max: 45,
							step: .5,
							value: fineOffset,
							onChange: handleRotationSlider
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 462,
							columnNumber: 6
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(range_control_default, {
							label: "Zoom",
							min: getMinZoom(state),
							max: 10,
							step: .1,
							value: state.zoom,
							onChange: handleZoomChange
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 470,
							columnNumber: 6
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 461,
						columnNumber: 5
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 341,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: style_module_default.resizable,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cropper, {
						src,
						controller,
						showGrid: GRID_MODES[gridMode],
						showDimming: true,
						freeformCrop,
						aspectRatio: resolveAspectRatio(aspectRatioValue, state.image)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 482,
						columnNumber: 5
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 481,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default$1, {
					justify: "space-between",
					align: "center",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, { children: !isCustom && IMAGE_CREDIT }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 495,
						columnNumber: 5
					}, void 0), cropDimensions && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, {
						style: {
							fontSize: 11,
							color: "#757575",
							fontFamily: "monospace"
						},
						children: [
							Math.round(cropDimensions.width),
							" ×",
							" ",
							Math.round(cropDimensions.height),
							" px"
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 497,
						columnNumber: 6
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 494,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: { marginTop: 16 },
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Current State:" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 511,
						columnNumber: 5
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", {
						className: style_module_default.state,
						children: JSON.stringify({
							rotation: state.rotation,
							zoom: state.zoom,
							cropRect: state.cropRect,
							pan: state.pan,
							image: state.image ? {
								naturalWidth: state.image.naturalWidth,
								naturalHeight: state.image.naturalHeight
							} : null
						}, null, 2)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 512,
						columnNumber: 5
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 510,
					columnNumber: 4
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 333,
				columnNumber: 3
			}, void 0);
		};
		WithControls = {
			parameters: { a11y: { test: "todo" } },
			render: WithControlsComponent
		};
		DebugComponent = () => {
			const controller = useCropperReducer();
			const { state, setRotation, setZoom, setFlip, snapRotate90, reset, isDirty } = controller;
			const [freeformCrop, setFreeformCrop] = (0, import_react.useState)(false);
			const [exportFormat, setExportFormat] = (0, import_react.useState)("image/jpeg");
			const { src, isCustom, handleFileChange, resetToSample } = useUploadableImage();
			const fileInputRef = (0, import_react.useRef)(null);
			const [previewSrc, setPreviewSrc] = (0, import_react.useState)(null);
			const imageRef = (0, import_react.useRef)(null);
			const prevSrcRef = (0, import_react.useRef)(src);
			(0, import_react.useEffect)(() => {
				if (prevSrcRef.current !== src) {
					prevSrcRef.current = src;
					reset();
				}
			}, [src, reset]);
			const [containerSize, setContainerSize] = (0, import_react.useState)({
				width: 0,
				height: 0
			});
			const containerRef = (0, import_react.useRef)(null);
			(0, import_react.useEffect)(() => {
				let cancelled = false;
				loadImage(src).then((img) => {
					if (!cancelled) imageRef.current = img;
				});
				return () => {
					cancelled = true;
				};
			}, [src]);
			(0, import_react.useEffect)(() => {
				if (!imageRef.current || !state.image) return;
				const canvas = renderToCanvas(imageRef.current, state);
				setPreviewSrc(canvasToDataURL(canvas, "image/jpeg", .85));
			}, [state]);
			(0, import_react.useEffect)(() => {
				const el = containerRef.current;
				if (!el) return;
				const ro = new ResizeObserver((entries) => {
					const { width, height } = entries[0].contentRect;
					setContainerSize({
						width,
						height
					});
				});
				ro.observe(el);
				return () => ro.disconnect();
			}, []);
			const imageSize = state.image ? {
				width: state.image.naturalWidth,
				height: state.image.naturalHeight
			} : {
				width: 0,
				height: 0
			};
			const hasImage = imageSize.width > 0 && containerSize.width > 0;
			const { elementSize, visualSize } = hasImage ? getImageFit(containerSize, imageSize, state.rotation) : {
				elementSize: {
					width: 0,
					height: 0
				},
				visualSize: {
					width: 0,
					height: 0
				}
			};
			const camera = hasImage ? createCamera(state, containerSize, imageSize) : null;
			const baseCamera = hasImage ? createCamera({
				...state,
				pan: {
					x: 0,
					y: 0
				},
				zoom: 1
			}, containerSize, imageSize) : null;
			const vb = baseCamera ? getVisibleBounds(baseCamera) : null;
			const cropWorldCorners = camera && vb ? [screenToWorld(camera, {
				x: vb.left + state.cropRect.x * vb.width,
				y: vb.top + state.cropRect.y * vb.height
			}), screenToWorld(camera, {
				x: vb.left + (state.cropRect.x + state.cropRect.width) * vb.width,
				y: vb.top + (state.cropRect.y + state.cropRect.height) * vb.height
			})] : null;
			const restrictionResult = hasImage ? restrictPanZoom(state, imageSize, state.cropRect) : null;
			const sourceRegion = hasImage ? getSourceRegion(state, imageSize) : null;
			const isContained = cropWorldCorners && cropWorldCorners[0].x >= -.001 && cropWorldCorners[0].y >= -.001 && cropWorldCorners[1].x <= 1.001 && cropWorldCorners[1].y <= 1.001;
			const baseAngle = Math.round(state.rotation / 90) * 90;
			const visualDir = state.flip.horizontal !== state.flip.vertical ? -1 : 1;
			const fineOffset = (state.rotation - baseAngle) * visualDir;
			const handleRotateLeft = (0, import_react.useCallback)(() => {
				snapRotate90(-1);
			}, [snapRotate90]);
			const handleRotateRight = (0, import_react.useCallback)(() => {
				snapRotate90(1);
			}, [snapRotate90]);
			const handleRotationSlider = (0, import_react.useCallback)((value) => {
				if (value === void 0) return;
				setRotation(baseAngle + Math.max(-44.99, Math.min(44.99, value)) * visualDir);
			}, [
				baseAngle,
				setRotation,
				visualDir
			]);
			const handleZoomChange = (0, import_react.useCallback)((value) => {
				if (value === void 0) return;
				setZoom(value);
			}, [setZoom]);
			const handleFlipHorizontal = (0, import_react.useCallback)(() => {
				setFlip({
					horizontal: !state.flip.horizontal,
					vertical: state.flip.vertical
				});
			}, [state.flip, setFlip]);
			const handleFlipVertical = (0, import_react.useCallback)(() => {
				setFlip({
					horizontal: state.flip.horizontal,
					vertical: !state.flip.vertical
				});
			}, [state.flip, setFlip]);
			const openFilePicker = (0, import_react.useCallback)(() => {
				fileInputRef.current?.click();
			}, []);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
					ref: fileInputRef,
					type: "file",
					accept: "image/*",
					onChange: handleFileChange,
					className: style_module_default["hidden-file"]
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 753,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: style_module_default.toolbar,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default$1, {
						align: "center",
						gap: 2,
						wrap: true,
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, {
								__next40pxDefaultSize: true,
								variant: "primary",
								icon: cloud_upload_default,
								onClick: openFilePicker,
								children: "Upload"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 763,
								columnNumber: 7
							}, void 0) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 762,
								columnNumber: 6
							}, void 0),
							isCustom && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, {
								__next40pxDefaultSize: true,
								variant: "tertiary",
								onClick: resetToSample,
								children: "Use sample"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 774,
								columnNumber: 8
							}, void 0) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 773,
								columnNumber: 7
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, {
								__next40pxDefaultSize: true,
								variant: "secondary",
								icon: rotate_left_default,
								label: "Rotate 90° counter-clockwise",
								showTooltip: true,
								onClick: handleRotateLeft
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 784,
								columnNumber: 7
							}, void 0) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 783,
								columnNumber: 6
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, {
								__next40pxDefaultSize: true,
								variant: "secondary",
								icon: rotate_right_default,
								label: "Rotate 90° clockwise",
								showTooltip: true,
								onClick: handleRotateRight
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 794,
								columnNumber: 7
							}, void 0) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 793,
								columnNumber: 6
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, {
								__next40pxDefaultSize: true,
								variant: "secondary",
								icon: flip_horizontal_default,
								label: "Flip horizontal",
								showTooltip: true,
								isPressed: state.flip.horizontal,
								onClick: handleFlipHorizontal
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 804,
								columnNumber: 7
							}, void 0) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 803,
								columnNumber: 6
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, {
								__next40pxDefaultSize: true,
								variant: "secondary",
								icon: flip_vertical_default,
								label: "Flip vertical",
								showTooltip: true,
								isPressed: state.flip.vertical,
								onClick: handleFlipVertical
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 815,
								columnNumber: 7
							}, void 0) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 814,
								columnNumber: 6
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(toggle_control_default, {
								label: "Freeform",
								checked: freeformCrop,
								onChange: setFreeformCrop
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 826,
								columnNumber: 7
							}, void 0) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 825,
								columnNumber: 6
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, { isBlock: true }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 832,
								columnNumber: 6
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, {
								__next40pxDefaultSize: true,
								variant: "primary",
								icon: reset_default,
								disabled: !isDirty,
								accessibleWhenDisabled: true,
								onClick: () => reset(),
								children: "Reset"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 834,
								columnNumber: 7
							}, void 0) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 833,
								columnNumber: 6
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl, {
								label: "Format",
								hideLabelFromVision: true,
								value: formatItems.find((item) => item.value === exportFormat) ?? null,
								onValueChange: (item) => {
									if (item && item.value !== null) setExportFormat(item.value);
								},
								items: formatItems
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 846,
								columnNumber: 7
							}, void 0) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 845,
								columnNumber: 6
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, {
								__next40pxDefaultSize: true,
								variant: "primary",
								icon: download_default,
								onClick: () => downloadCroppedImage(src, state, "cropped", exportFormat, .9),
								children: "Download"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 863,
								columnNumber: 7
							}, void 0) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 862,
								columnNumber: 6
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 761,
						columnNumber: 5
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: style_module_default.sliders,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(range_control_default, {
							label: "Fine rotation",
							min: -45,
							max: 45,
							step: .5,
							value: fineOffset,
							onChange: handleRotationSlider
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 882,
							columnNumber: 6
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(range_control_default, {
							label: "Zoom",
							min: getMinZoom(state),
							max: 10,
							step: .1,
							value: state.zoom,
							onChange: handleZoomChange
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 890,
							columnNumber: 6
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 881,
						columnNumber: 5
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 760,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						display: "flex",
						gap: 16,
						alignItems: "flex-start"
					},
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						ref: containerRef,
						style: {
							flex: "1 1 60%",
							minWidth: 0
						},
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: style_module_default.container,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cropper, {
								src,
								controller,
								showGrid: true,
								showDimming: true,
								freeformCrop
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 909,
								columnNumber: 7
							}, void 0)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 908,
							columnNumber: 6
						}, void 0), !isCustom && IMAGE_CREDIT]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 904,
						columnNumber: 5
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: {
							flex: "0 0 320px",
							fontSize: 11,
							fontFamily: "monospace",
							lineHeight: 1.5,
							overflow: "auto",
							maxHeight: 500
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: style_module_default["export-preview"],
								children: previewSrc ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
									className: style_module_default["export-image"],
									src: previewSrc,
									alt: "Crop preview"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 932,
									columnNumber: 8
								}, void 0) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Loading..." }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 938,
									columnNumber: 8
								}, void 0)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 930,
								columnNumber: 6
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Containment" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 941,
								columnNumber: 6
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								style: {
									padding: "2px 6px",
									background: isContained ? "#d4edda" : "#f8d7da",
									borderRadius: 3,
									marginBottom: 8,
									display: "inline-block"
								},
								children: isContained ? "COVERED" : "NOT COVERED"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 942,
								columnNumber: 6
							}, void 0),
							state.image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Image info" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 956,
								columnNumber: 8
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", {
								style: { margin: "4px 0" },
								children: `original: ${state.image.naturalWidth}×${state.image.naturalHeight}
aspect ratio: ${(state.image.naturalWidth / state.image.naturalHeight).toFixed(2)}`
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 957,
								columnNumber: 8
							}, void 0)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 955,
								columnNumber: 7
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "State" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 970,
								columnNumber: 7
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", {
								style: { margin: "4px 0" },
								children: `zoom: ${state.zoom.toFixed(3)}
rotation: ${state.rotation.toFixed(1)}°
pan: (${state.pan.x.toFixed(4)}, ${state.pan.y.toFixed(4)})
cropRect: (${state.cropRect.x.toFixed(3)}, ${state.cropRect.y.toFixed(3)}) ${state.cropRect.width.toFixed(3)}×${state.cropRect.height.toFixed(3)}
flip: h=${state.flip.horizontal} v=${state.flip.vertical}`
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 971,
								columnNumber: 7
							}, void 0)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 969,
								columnNumber: 6
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Sizes" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 985,
								columnNumber: 7
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", {
								style: { margin: "4px 0" },
								children: `container: ${containerSize.width}×${containerSize.height}
element: ${elementSize.width.toFixed(0)}×${elementSize.height.toFixed(0)}
visual: ${visualSize.width.toFixed(0)}×${visualSize.height.toFixed(0)}`
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 986,
								columnNumber: 7
							}, void 0)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 984,
								columnNumber: 6
							}, void 0),
							camera && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Camera matrix" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1001,
								columnNumber: 8
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", {
								style: { margin: "4px 0" },
								children: `[${Array.from(camera).map((v) => v.toFixed(2)).join(", ")}]`
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1002,
								columnNumber: 8
							}, void 0)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1e3,
								columnNumber: 7
							}, void 0),
							cropWorldCorners && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Crop corners (world space)" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1012,
									columnNumber: 8
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", {
									style: { margin: "4px 0" },
									children: `TL: (${cropWorldCorners[0].x.toFixed(4)}, ${cropWorldCorners[0].y.toFixed(4)})
BR: (${cropWorldCorners[1].x.toFixed(4)}, ${cropWorldCorners[1].y.toFixed(4)})`
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1013,
									columnNumber: 8
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									style: {
										fontSize: 10,
										color: "#666"
									},
									children: "Should be within [0,1] when contained"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1023,
									columnNumber: 8
								}, void 0)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1011,
								columnNumber: 7
							}, void 0),
							restrictionResult && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Restriction result" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1031,
								columnNumber: 8
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", {
								style: { margin: "4px 0" },
								children: `zoom: ${restrictionResult.zoom.toFixed(3)}
pan: (${restrictionResult.pan.x.toFixed(4)}, ${restrictionResult.pan.y.toFixed(4)})`
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1032,
								columnNumber: 8
							}, void 0)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1030,
								columnNumber: 7
							}, void 0),
							sourceRegion && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Source region (px)" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1047,
								columnNumber: 8
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", {
								style: { margin: "4px 0" },
								children: `x: ${sourceRegion.x.toFixed(0)}  y: ${sourceRegion.y.toFixed(0)}
w: ${sourceRegion.width.toFixed(0)}  h: ${sourceRegion.height.toFixed(0)}`
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1048,
								columnNumber: 8
							}, void 0)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1046,
								columnNumber: 7
							}, void 0),
							sourceRegion && sourceRegion.width > 0 && sourceRegion.height > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Crop output" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1063,
								columnNumber: 9
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", {
								style: { margin: "4px 0" },
								children: `dimensions: ${Math.round(sourceRegion.width)}×${Math.round(sourceRegion.height)}
aspect ratio: ${(sourceRegion.width / sourceRegion.height).toFixed(2)}
% of original: ${(sourceRegion.width * sourceRegion.height / (imageSize.width * imageSize.height) * 100).toFixed(1)}%`
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1064,
								columnNumber: 9
							}, void 0)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1062,
								columnNumber: 8
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 920,
						columnNumber: 5
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 901,
					columnNumber: 4
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 752,
				columnNumber: 3
			}, void 0);
		};
		Debug = {
			parameters: { a11y: { test: "todo" } },
			render: DebugComponent
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    // FIXME: Image credit text and its link fail color-contrast.\n    // See: https://github.com/WordPress/gutenberg/issues/81596\n    a11y: {\n      test: 'todo'\n    }\n  },\n  render: DefaultComponent\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithControls.parameters = {
			...WithControls.parameters,
			docs: {
				...WithControls.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    // FIXME: The state dump scrolls once its content overflows, and is not keyboard-accessible (scrollable-region-focusable). Whether it overflows depends on the numbers rendered, so this appears intermittently.\n    // See: https://github.com/WordPress/gutenberg/issues/81596\n    a11y: {\n      test: 'todo'\n    }\n  },\n  render: WithControlsComponent\n}",
					...WithControls.parameters?.docs?.source
				}
			}
		};
		Debug.parameters = {
			...Debug.parameters,
			docs: {
				...Debug.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    // FIXME: Image credit text and its link fail color-contrast.\n    // See: https://github.com/WordPress/gutenberg/issues/81596\n    a11y: {\n      test: 'todo'\n    }\n  },\n  render: DebugComponent\n}",
					...Debug.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_rectangle_crop_story();
export { Debug, Default, WithControls, meta as default };
