import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-CqBohFOX.js";
import { n as init_implementation, t as __dangerousOptInToUnstableAPIsOnlyForCoreModules } from "./implementation-CMzZuaZ2.js";
import { a as createReduxStore } from "./default-registry-DXzr-urv.js";
import { Mt as init_provider } from "./utils-Dno6zrH7.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { n as __, t as init_build_module$1 } from "./build-module-v04us4E2.js";
import { a as register, i as init_build_module$2, n as v4, t as init_v4, u as select } from "./v4-41127LZM.js";
import { a as isBlobURL, i as init_build_module$3, o as revokeBlobURL, t as createBlobURL } from "./build-module-B4aG43Qg.js";
//#region ../packages/upload-media/build-module/store/types.mjs
var Type, ItemStatus, OperationType;
function init_types() {
	return (init_types = __esmMin((() => {
		Type = /* @__PURE__ */ ((Type2) => {
			Type2["Unknown"] = "REDUX_UNKNOWN";
			Type2["Add"] = "ADD_ITEM";
			Type2["Prepare"] = "PREPARE_ITEM";
			Type2["Cancel"] = "CANCEL_ITEM";
			Type2["Remove"] = "REMOVE_ITEM";
			Type2["RetryItem"] = "RETRY_ITEM";
			Type2["ScheduleRetry"] = "SCHEDULE_RETRY";
			Type2["PauseItem"] = "PAUSE_ITEM";
			Type2["ResumeItem"] = "RESUME_ITEM";
			Type2["PauseQueue"] = "PAUSE_QUEUE";
			Type2["ResumeQueue"] = "RESUME_QUEUE";
			Type2["OperationStart"] = "OPERATION_START";
			Type2["OperationFinish"] = "OPERATION_FINISH";
			Type2["AddOperations"] = "ADD_OPERATIONS";
			Type2["CacheBlobUrl"] = "CACHE_BLOB_URL";
			Type2["RevokeBlobUrls"] = "REVOKE_BLOB_URLS";
			Type2["UpdateProgress"] = "UPDATE_PROGRESS";
			Type2["AccumulateSubSize"] = "ACCUMULATE_SUB_SIZE";
			Type2["UpdateSettings"] = "UPDATE_SETTINGS";
			return Type2;
		})(Type || {});
		ItemStatus = /* @__PURE__ */ ((ItemStatus2) => {
			ItemStatus2["Queued"] = "QUEUED";
			ItemStatus2["Processing"] = "PROCESSING";
			ItemStatus2["Paused"] = "PAUSED";
			ItemStatus2["PendingRetry"] = "PENDING_RETRY";
			ItemStatus2["Uploaded"] = "UPLOADED";
			ItemStatus2["Error"] = "ERROR";
			return ItemStatus2;
		})(ItemStatus || {});
		OperationType = /* @__PURE__ */ ((OperationType2) => {
			OperationType2["Prepare"] = "PREPARE";
			OperationType2["Upload"] = "UPLOAD";
			OperationType2["ResizeCrop"] = "RESIZE_CROP";
			OperationType2["Rotate"] = "ROTATE";
			OperationType2["TranscodeImage"] = "TRANSCODE_IMAGE";
			OperationType2["TranscodeGif"] = "TRANSCODE_GIF";
			OperationType2["ThumbnailGeneration"] = "THUMBNAIL_GENERATION";
			OperationType2["Finalize"] = "FINALIZE";
			OperationType2["DetectUltraHdr"] = "DETECT_ULTRAHDR";
			return OperationType2;
		})(OperationType || {});
	})))();
}
//#endregion
//#region ../packages/upload-media/build-module/store/constants.mjs
var STORE_NAME, DEFAULT_RETRY_SETTINGS, CLIENT_SIDE_SUPPORTED_MIME_TYPES, HEIC_MIME_TYPES;
function init_constants() {
	return (init_constants = __esmMin((() => {
		STORE_NAME = "core/upload-media";
		DEFAULT_RETRY_SETTINGS = {
			maxRetryAttempts: 3,
			initialRetryDelayMs: 1e3,
			maxRetryDelayMs: 3e4,
			backoffMultiplier: 2,
			retryJitter: .1
		};
		CLIENT_SIDE_SUPPORTED_MIME_TYPES = [
			"image/jpeg",
			"image/png",
			"image/gif",
			"image/webp",
			"image/avif"
		];
		HEIC_MIME_TYPES = ["image/heic", "image/heif"];
	})))();
}
//#endregion
//#region ../packages/upload-media/build-module/store/reducer.mjs
function reducer(state = DEFAULT_STATE, action = { type: Type.Unknown }) {
	switch (action.type) {
		case Type.PauseQueue: return {
			...state,
			queueStatus: "paused"
		};
		case Type.ResumeQueue: return {
			...state,
			queueStatus: "active"
		};
		case Type.PauseItem: return {
			...state,
			queue: state.queue.map((item) => item.id === action.id ? {
				...item,
				status: ItemStatus.Paused
			} : item)
		};
		case Type.ResumeItem: return {
			...state,
			queue: state.queue.map((item) => item.id === action.id ? {
				...item,
				status: ItemStatus.Processing
			} : item)
		};
		case Type.Add: return {
			...state,
			queue: [...state.queue, action.item]
		};
		case Type.Cancel: {
			const cancelled = state.queue.find((item) => item.id === action.id);
			return {
				...state,
				failureCount: cancelled && !cancelled.parentId ? state.failureCount + 1 : state.failureCount,
				queue: state.queue.map((item) => item.id === action.id ? {
					...item,
					error: action.error
				} : item)
			};
		}
		case Type.RetryItem: return {
			...state,
			queue: state.queue.map((item) => item.id === action.id ? {
				...item,
				status: ItemStatus.Processing,
				error: void 0,
				retryCount: (item.retryCount ?? 0) + 1,
				abortController: new AbortController(),
				currentOperation: void 0
			} : item)
		};
		case Type.ScheduleRetry: return {
			...state,
			queue: state.queue.map((item) => item.id === action.id ? {
				...item,
				status: ItemStatus.PendingRetry,
				error: action.error,
				retryCount: action.retryCount,
				nextRetryTimestamp: action.nextRetryTimestamp
			} : item)
		};
		case Type.Remove: return {
			...state,
			queue: state.queue.filter((item) => item.id !== action.id)
		};
		case Type.OperationStart: return {
			...state,
			queue: state.queue.map((item) => item.id === action.id ? {
				...item,
				currentOperation: action.operation
			} : item)
		};
		case Type.AddOperations: return {
			...state,
			queue: state.queue.map((item) => {
				if (item.id !== action.id) return item;
				return {
					...item,
					operations: [...item.operations || [], ...action.operations]
				};
			})
		};
		case Type.OperationFinish: return {
			...state,
			queue: state.queue.map((item) => {
				if (item.id !== action.id) return item;
				const operations = item.operations ? item.operations.slice(1) : [];
				const attachment = item.attachment || action.item.attachment ? {
					...item.attachment,
					...action.item.attachment
				} : void 0;
				return {
					...item,
					currentOperation: void 0,
					operations,
					...action.item,
					attachment,
					additionalData: {
						...item.additionalData,
						...action.item.additionalData
					}
				};
			})
		};
		case Type.CacheBlobUrl: {
			const blobUrls = state.blobUrls[action.id] || [];
			return {
				...state,
				blobUrls: {
					...state.blobUrls,
					[action.id]: [...blobUrls, action.blobUrl]
				}
			};
		}
		case Type.RevokeBlobUrls: {
			const newBlobUrls = { ...state.blobUrls };
			delete newBlobUrls[action.id];
			return {
				...state,
				blobUrls: newBlobUrls
			};
		}
		case Type.UpdateProgress: return {
			...state,
			queue: state.queue.map((item) => item.id === action.id ? {
				...item,
				progress: action.progress
			} : item)
		};
		case Type.AccumulateSubSize: return {
			...state,
			queue: state.queue.map((item) => item.id === action.id ? {
				...item,
				subSizes: [...item.subSizes || [], action.subSize]
			} : item)
		};
		case Type.UpdateSettings: return {
			...state,
			settings: {
				...state.settings,
				...action.settings
			}
		};
	}
	return state;
}
var noop, DEFAULT_STATE, reducer_default;
function init_reducer() {
	return (init_reducer = __esmMin((() => {
		init_types();
		init_constants();
		noop = () => {};
		DEFAULT_STATE = {
			queue: [],
			queueStatus: "active",
			blobUrls: {},
			settings: {
				mediaUpload: noop,
				maxConcurrentUploads: 5,
				maxConcurrentImageProcessing: 2,
				retry: { ...DEFAULT_RETRY_SETTINGS }
			},
			failureCount: 0
		};
		reducer_default = reducer;
	})))();
}
//#endregion
//#region ../packages/upload-media/build-module/store/selectors.mjs
var selectors_exports = /* @__PURE__ */ __exportAll({
	getItems: () => getItems,
	getSettings: () => getSettings,
	isUploading: () => isUploading,
	isUploadingById: () => isUploadingById,
	isUploadingByUrl: () => isUploadingByUrl
});
function getItems(state) {
	return state.queue;
}
function isUploading(state) {
	return state.queue.length >= 1;
}
function isUploadingByUrl(state, url) {
	return state.queue.some((item) => item.attachment?.url === url || item.sourceUrl === url);
}
function isUploadingById(state, attachmentId) {
	return state.queue.some((item) => item.attachment?.id === attachmentId || item.sourceAttachmentId === attachmentId);
}
function getSettings(state) {
	return state.settings;
}
//#endregion
//#region ../packages/upload-media/build-module/store/private-selectors.mjs
var private_selectors_exports = /* @__PURE__ */ __exportAll({
	getActiveImageProcessingCount: () => getActiveImageProcessingCount,
	getActiveUploadCount: () => getActiveUploadCount,
	getActiveVideoProcessingCount: () => getActiveVideoProcessingCount,
	getAllItems: () => getAllItems,
	getBlobUrls: () => getBlobUrls,
	getFailedItems: () => getFailedItems,
	getFailureCount: () => getFailureCount,
	getItem: () => getItem,
	getItemProgress: () => getItemProgress,
	getPendingImageProcessing: () => getPendingImageProcessing,
	getPendingUploads: () => getPendingUploads,
	getPendingVideoProcessing: () => getPendingVideoProcessing,
	hasPendingItemsByParentId: () => hasPendingItemsByParentId,
	isBatchUploaded: () => isBatchUploaded,
	isPaused: () => isPaused
});
function getAllItems(state) {
	return state.queue;
}
function getFailureCount(state) {
	return state.failureCount;
}
function getItem(state, id) {
	return state.queue.find((item) => item.id === id);
}
function isBatchUploaded(state, batchId) {
	return state.queue.filter((item) => batchId === item.batchId).length === 0;
}
function isPaused(state) {
	return state.queueStatus === "paused";
}
function getBlobUrls(state, id) {
	return state.blobUrls[id] || [];
}
function getActiveUploadCount(state) {
	return state.queue.filter((item) => item.currentOperation === OperationType.Upload).length;
}
function getPendingUploads(state) {
	return state.queue.filter((item) => {
		return (Array.isArray(item.operations?.[0]) ? item.operations[0][0] : item.operations?.[0]) === OperationType.Upload && item.currentOperation !== OperationType.Upload;
	});
}
function getActiveImageProcessingCount(state) {
	return state.queue.filter((item) => item.currentOperation === OperationType.ResizeCrop || item.currentOperation === OperationType.Rotate).length;
}
function getActiveVideoProcessingCount(state) {
	return state.queue.filter((item) => item.currentOperation === OperationType.TranscodeGif).length;
}
function getPendingImageProcessing(state) {
	return state.queue.filter((item) => {
		const nextOperation = Array.isArray(item.operations?.[0]) ? item.operations[0][0] : item.operations?.[0];
		return (nextOperation === OperationType.ResizeCrop || nextOperation === OperationType.Rotate) && item.currentOperation !== OperationType.ResizeCrop && item.currentOperation !== OperationType.Rotate;
	});
}
function getPendingVideoProcessing(state) {
	return state.queue.filter((item) => {
		return (Array.isArray(item.operations?.[0]) ? item.operations[0][0] : item.operations?.[0]) === OperationType.TranscodeGif && item.currentOperation !== OperationType.TranscodeGif;
	});
}
function getFailedItems(state) {
	return state.queue.filter((item) => item.error !== void 0);
}
function hasPendingItemsByParentId(state, parentId) {
	return state.queue.some((item) => item.parentId === parentId);
}
function getItemProgress(state, id) {
	return state.queue.find((i) => i.id === id)?.progress;
}
function init_private_selectors() {
	return (init_private_selectors = __esmMin((() => {
		init_types();
	})))();
}
//#endregion
//#region ../packages/upload-media/build-module/store/utils/retry.mjs
function calculateRetryDelay(options) {
	const { attempt, initialDelay, maxDelay, multiplier, jitter } = options;
	const exponentialDelay = initialDelay * Math.pow(multiplier, attempt - 1);
	const cappedDelay = Math.min(exponentialDelay, maxDelay);
	const jitterFactor = 1 + (Math.random() * 2 - 1) * jitter;
	return Math.floor(cappedDelay * jitterFactor);
}
function shouldRetryError(error, retryCount, maxRetries) {
	if (retryCount >= maxRetries) return false;
	const message = typeof error === "string" ? error : error?.message || "";
	return RETRYABLE_MESSAGE_PATTERNS.some((pattern) => pattern.test(message));
}
function clearRetryTimer(id) {
	const pendingTimer = retryTimers.get(id);
	if (pendingTimer !== void 0) {
		clearTimeout(pendingTimer);
		retryTimers.delete(id);
	}
}
var RETRYABLE_MESSAGE_PATTERNS, retryTimers;
function init_retry() {
	return (init_retry = __esmMin((() => {
		RETRYABLE_MESSAGE_PATTERNS = [
			/network/i,
			/timeout/i,
			/ECONNRESET/i,
			/fetch failed/i,
			/connection/i,
			/socket/i,
			/ETIMEDOUT/i,
			/ENOTFOUND/i,
			/Could not get a valid response/i,
			/Failed to fetch/i,
			/Load failed/i
		];
		retryTimers = /* @__PURE__ */ new Map();
	})))();
}
//#endregion
//#region ../packages/upload-media/build-module/feature-detection.mjs
function detectClientSideMediaSupport() {
	if (cachedResult !== null) return cachedResult;
	if (typeof WebAssembly === "undefined") {
		cachedResult = {
			supported: false,
			reason: "WebAssembly is not supported in this browser."
		};
		return cachedResult;
	}
	if (typeof SharedArrayBuffer === "undefined") {
		cachedResult = {
			supported: false,
			reason: "SharedArrayBuffer is not available. This may be due to missing cross-origin isolation headers."
		};
		return cachedResult;
	}
	if (typeof Worker === "undefined") {
		cachedResult = {
			supported: false,
			reason: "Web Workers are not supported in this browser."
		};
		return cachedResult;
	}
	if (typeof navigator !== "undefined" && "deviceMemory" in navigator && navigator.deviceMemory <= 2) {
		cachedResult = {
			supported: false,
			reason: "Device has insufficient memory for client-side media processing."
		};
		return cachedResult;
	}
	if (typeof navigator !== "undefined" && "hardwareConcurrency" in navigator && navigator.hardwareConcurrency < 2) {
		cachedResult = {
			supported: false,
			reason: "Device has insufficient CPU cores for client-side media processing."
		};
		return cachedResult;
	}
	if (typeof navigator !== "undefined") {
		const connection = navigator.connection;
		if (connection) {
			if (connection.saveData) {
				cachedResult = {
					supported: false,
					reason: "Data saver mode is enabled."
				};
				return cachedResult;
			}
			if (connection.effectiveType === "slow-2g" || connection.effectiveType === "2g") {
				cachedResult = {
					supported: false,
					reason: "Network connection is too slow for client-side media processing."
				};
				return cachedResult;
			}
		}
	}
	if (typeof window !== "undefined") try {
		const testBlob = new Blob([""], { type: "application/javascript" });
		const testUrl = URL.createObjectURL(testBlob);
		try {
			new Worker(testUrl).terminate();
		} finally {
			URL.revokeObjectURL(testUrl);
		}
	} catch {
		cachedResult = {
			supported: false,
			reason: "The site's Content Security Policy (CSP) does not allow blob: workers. The worker-src directive must include blob: to enable client-side media processing."
		};
		return cachedResult;
	}
	cachedResult = { supported: true };
	return cachedResult;
}
function isClientSideMediaSupported() {
	return detectClientSideMediaSupport().supported;
}
function isHeicCanvasSupported() {
	return typeof createImageBitmap !== "undefined" && typeof OffscreenCanvas !== "undefined";
}
function exceedsClientProcessingMemory(dimensions) {
	const { width, height, interlaced } = dimensions;
	return width * height * BYTES_PER_PIXEL > (interlaced ? INTERLACED_MEMORY_BUDGET : BASELINE_MEMORY_BUDGET);
}
var cachedResult, BYTES_PER_PIXEL, INTERLACED_MEMORY_BUDGET, BASELINE_MEMORY_BUDGET;
function init_feature_detection() {
	return (init_feature_detection = __esmMin((() => {
		cachedResult = null;
		BYTES_PER_PIXEL = 4;
		INTERLACED_MEMORY_BUDGET = 805306368;
		BASELINE_MEMORY_BUDGET = 1610612736;
	})))();
}
//#endregion
//#region ../packages/upload-media/build-module/image-file.mjs
var ImageFile;
function init_image_file() {
	return (init_image_file = __esmMin((() => {
		ImageFile = class extends File {
			width = 0;
			height = 0;
			originalWidth = 0;
			originalHeight = 0;
			get wasResized() {
				return (this.originalWidth || 0) > this.width || (this.originalHeight || 0) > this.height;
			}
			constructor(file, width, height, originalWidth, originalHeight) {
				super([file], file.name, {
					type: file.type,
					lastModified: file.lastModified
				});
				this.width = width;
				this.height = height;
				this.originalWidth = originalWidth;
				this.originalHeight = originalHeight;
			}
		};
	})))();
}
//#endregion
//#region ../packages/upload-media/build-module/utils.mjs
function convertBlobToFile(fileOrBlob) {
	if (fileOrBlob instanceof File) return fileOrBlob;
	if ("name" in fileOrBlob && typeof fileOrBlob.name === "string") return new File([fileOrBlob], fileOrBlob.name, {
		type: fileOrBlob.type,
		lastModified: fileOrBlob.lastModified
	});
	const ext = fileOrBlob.type.split("/")[1];
	const mediaType = "application/pdf" === fileOrBlob.type ? "document" : fileOrBlob.type.split("/")[0];
	return new File([fileOrBlob], `${mediaType}.${ext}`, { type: fileOrBlob.type });
}
function renameFile(file, name) {
	return new File([file], name, {
		type: file.type,
		lastModified: file.lastModified
	});
}
function cloneFile(file) {
	return renameFile(file, file.name);
}
function getFileBasename(name) {
	return name.includes(".") ? name.split(".").slice(0, -1).join(".") : name;
}
function isAnimatedGif(buffer) {
	const view = new Uint8Array(buffer);
	if (view.length < 4 || view[0] !== 71 || view[1] !== 73 || view[2] !== 70 || view[3] !== 56) return false;
	let frameCount = 0;
	for (let i = 0; i < view.length - 2; i++) if (view[i] === 0 && view[i + 1] === 33 && view[i + 2] === 249) {
		frameCount++;
		if (frameCount > 1) return true;
	}
	return false;
}
function isHeicBuffer(buffer) {
	const view = new Uint8Array(buffer);
	const readBrand = (offset) => String.fromCharCode(...view.subarray(offset, offset + 4));
	if (view.length < 12 || readBrand(4) !== "ftyp") return false;
	const boxEnd = Math.min(view.length, new DataView(buffer).getUint32(0));
	const brands = [readBrand(8)];
	for (let offset = 16; offset + 4 <= boxEnd; offset += 4) brands.push(readBrand(offset));
	if (brands.some((brand) => AVIF_BRANDS.includes(brand))) return false;
	return brands.some((brand) => HEIC_BRANDS.includes(brand));
}
async function isHeicFile(file) {
	if (HEIC_MIME_TYPES.includes(file.type)) return true;
	if (file.type && !file.type.startsWith("image/")) return false;
	try {
		return isHeicBuffer(await file.slice(0, 64).arrayBuffer());
	} catch {
		return false;
	}
}
var HEIC_BRANDS, AVIF_BRANDS;
function init_utils() {
	return (init_utils = __esmMin((() => {
		init_constants();
		HEIC_BRANDS = [
			"heic",
			"heix",
			"heim",
			"heis",
			"hevc",
			"hevx",
			"hevm",
			"hevs",
			"mif1",
			"msf1"
		];
		AVIF_BRANDS = ["avif", "avis"];
	})))();
}
//#endregion
//#region ../packages/upload-media/build-module/store/utils/index.mjs
function loadVipsModule() {
	if (!vipsModulePromise) vipsModulePromise = __vitePreload(() => import("./_virtual_vips-stub-DV7LkLcI.js").then((mod) => {
		vipsModule = mod;
		return mod;
	}), [], import.meta.url);
	return vipsModulePromise;
}
async function vipsConvertImageFormat(id, file, type, options = {}) {
	const { vipsConvertImageFormat: convertImageFormat } = await loadVipsModule();
	const buffer = await convertImageFormat(id, await file.arrayBuffer(), file.type, type, options);
	const ext = type.split("/")[1];
	const fileName = `${getFileBasename(file.name)}.${ext}`;
	return new File([new Blob([buffer])], fileName, { type });
}
async function vipsEncodeCanvasAsJpeg(id, canvas, source, quality) {
	const { width, height } = canvas;
	if (exceedsClientProcessingMemory({
		width,
		height,
		interlaced: true
	})) return null;
	const { vipsEncodePixelsAsJpeg: encodePixelsAsJpeg } = await loadVipsModule();
	const ctx = canvas.getContext("2d");
	if (!ctx) throw new Error("Could not get canvas 2d context");
	const pixels = ctx.getImageData(0, 0, width, height).data.buffer;
	const buffer = await encodePixelsAsJpeg(id, pixels, width, height, {
		quality,
		metadataSource: await source.arrayBuffer()
	});
	return new Blob([buffer], { type: "image/jpeg" });
}
async function vipsHasTransparency(url) {
	const { vipsHasTransparency: hasTransparency } = await loadVipsModule();
	const response = await fetch(url);
	if (!response.ok) throw new Error(`Failed to fetch image: ${response.status}`);
	return hasTransparency(await response.arrayBuffer());
}
async function vipsGetUltraHdrInfo(buffer) {
	const { vipsGetUltraHdrInfo: getUltraHdrInfo } = await loadVipsModule();
	return getUltraHdrInfo(buffer);
}
async function vipsResizeImage(id, file, resize, options = {}) {
	const { smartCrop = false, addSuffix = false, signal, scaledSuffix, quality, stripMeta, maxBitdepth, preserveAnimation } = options;
	if (signal?.aborted) throw new Error("Operation aborted");
	const { vipsResizeImage: resizeImage } = await loadVipsModule();
	const { buffer, width, height, originalWidth, originalHeight } = await resizeImage(id, await file.arrayBuffer(), file.type, resize, {
		smartCrop,
		quality,
		stripMeta,
		maxBitdepth,
		preserveAnimation
	});
	let fileName = file.name;
	if (originalWidth > width || originalHeight > height) {
		const basename = getFileBasename(file.name);
		if (scaledSuffix) fileName = file.name.replace(basename, `${basename}-scaled`);
		else if (addSuffix) fileName = file.name.replace(basename, `${basename}-${width}x${height}`);
	}
	return new ImageFile(new File([new Blob([buffer], { type: file.type })], fileName, { type: file.type }), width, height, originalWidth, originalHeight);
}
async function vipsRotateImage(id, file, orientation, signal) {
	if (signal?.aborted) throw new Error("Operation aborted");
	if (orientation === 1) return file;
	const { vipsRotateImage: rotateImage } = await loadVipsModule();
	const { buffer, width, height } = await rotateImage(id, await file.arrayBuffer(), file.type, orientation);
	const basename = getFileBasename(file.name);
	const fileName = file.name.replace(basename, `${basename}-rotated`);
	return new ImageFile(new File([new Blob([buffer], { type: file.type })], fileName, { type: file.type }), width, height);
}
async function vipsCancelOperations(id) {
	if (!vipsModule) return false;
	return vipsModule.vipsCancelOperations(id);
}
function terminateVipsWorker() {
	if (vipsModule) vipsModule.terminateVipsWorker();
}
function maybeRecycleVipsWorker(activeImageProcessingCount) {
	completedVipsOperations++;
	if (completedVipsOperations >= MAX_VIPS_OPS_BEFORE_RECYCLE && activeImageProcessingCount === 0) {
		terminateVipsWorker();
		completedVipsOperations = 0;
	}
}
var vipsModulePromise, vipsModule, completedVipsOperations, MAX_VIPS_OPS_BEFORE_RECYCLE;
function init_utils$1() {
	return (init_utils$1 = __esmMin((() => {
		init_feature_detection();
		init_image_file();
		init_utils();
		init_preload_helper();
		completedVipsOperations = 0;
		MAX_VIPS_OPS_BEFORE_RECYCLE = 50;
	})))();
}
//#endregion
//#region ../packages/upload-media/build-module/store/utils/video-conversion.mjs
function isUnsupportedConversionError(error) {
	return error instanceof Error && error.message.startsWith(UNSUPPORTED_ERROR_PREFIX);
}
function isSizeLimitConversionError(error) {
	return error instanceof Error && error.message.startsWith(SIZE_LIMIT_ERROR_PREFIX);
}
function isConversionTimeoutError(error) {
	return error instanceof Error && error.message.startsWith(CONVERSION_TIMEOUT_ERROR_PREFIX);
}
function loadVideoConversionModule() {
	if (!videoConversionModulePromise) videoConversionModulePromise = __vitePreload(() => import("./video-conversion-worker-Dcy0iTtG.js").then((mod) => {
		videoConversionModule = mod;
		return mod;
	}), [], import.meta.url).catch((error) => {
		videoConversionModulePromise = void 0;
		throw error;
	});
	return videoConversionModulePromise;
}
async function convertGifToVideo(id, file, outputMimeType, { maxDimensions, timeout = DEFAULT_CONVERSION_TIMEOUT, maxTotalPixels } = {}) {
	const mod = await loadVideoConversionModule();
	const conversion = mod.convertGifToVideo(id, file, outputMimeType, maxDimensions, maxTotalPixels);
	let buffer;
	if (timeout > 0) {
		let timer;
		try {
			buffer = await Promise.race([conversion, new Promise((_, reject) => {
				timer = setTimeout(() => {
					reject(/* @__PURE__ */ new Error(`${CONVERSION_TIMEOUT_ERROR_PREFIX} after ${timeout}ms`));
				}, timeout);
			})]);
		} catch (error) {
			if (isConversionTimeoutError(error)) {
				conversion.catch(() => {});
				mod.cancelGifToVideoOperations(id).catch(() => {});
			}
			throw error;
		} finally {
			clearTimeout(timer);
		}
	} else buffer = await conversion;
	const ext = outputMimeType === "video/webm" ? "webm" : "mp4";
	const fileName = `${getFileBasename(file.name)}.${ext}`;
	return new File([new Blob([buffer], { type: outputMimeType })], fileName, { type: outputMimeType });
}
async function cancelGifToVideoOperations(id) {
	const mod = videoConversionModule ?? (videoConversionModulePromise ? await videoConversionModulePromise.catch(() => void 0) : void 0);
	if (!mod) return false;
	return mod.cancelGifToVideoOperations(id);
}
function terminateVideoConversionWorker() {
	if (videoConversionModule) {
		videoConversionModule.terminateVideoConversionWorker();
		return;
	}
	if (videoConversionModulePromise) videoConversionModulePromise.then((mod) => mod.terminateVideoConversionWorker()).catch(() => {});
}
var UNSUPPORTED_ERROR_PREFIX, SIZE_LIMIT_ERROR_PREFIX, CONVERSION_TIMEOUT_ERROR_PREFIX, DEFAULT_CONVERSION_TIMEOUT, videoConversionModulePromise, videoConversionModule;
function init_video_conversion() {
	return (init_video_conversion = __esmMin((() => {
		init_utils();
		init_preload_helper();
		UNSUPPORTED_ERROR_PREFIX = "Unsupported";
		SIZE_LIMIT_ERROR_PREFIX = `${UNSUPPORTED_ERROR_PREFIX}: GIF exceeds maximum conversion size`;
		CONVERSION_TIMEOUT_ERROR_PREFIX = "GIF to video conversion timed out";
		DEFAULT_CONVERSION_TIMEOUT = 3e4;
	})))();
}
//#endregion
//#region ../packages/upload-media/build-module/store/utils/debug-logger.mjs
function isDebugEnabled() {
	return false;
}
function debug(message, ...args) {
	if (!isDebugEnabled()) return;
	console.debug(`[upload-media] ${message}`, ...args);
}
function measure(options) {
	if (!isDebugEnabled()) return;
	const { measureName, startTime, endTime = performance.now(), tooltipText, properties } = options;
	const detail = { devtools: {
		dataType: "track-entry",
		track: "Upload Media",
		tooltipText,
		properties: properties?.map(([key, value]) => ({
			key,
			value
		}))
	} };
	try {
		performance.measure(measureName, {
			start: startTime,
			end: endTime,
			detail
		});
	} catch {}
}
//#endregion
//#region ../packages/upload-media/build-module/upload-error.mjs
var ErrorCode, UploadError;
function init_upload_error() {
	return (init_upload_error = __esmMin((() => {
		ErrorCode = /* @__PURE__ */ ((ErrorCode2) => {
			ErrorCode2["EMPTY_FILE"] = "EMPTY_FILE";
			ErrorCode2["SIZE_ABOVE_LIMIT"] = "SIZE_ABOVE_LIMIT";
			ErrorCode2["MIME_TYPE_NOT_SUPPORTED"] = "MIME_TYPE_NOT_SUPPORTED";
			ErrorCode2["MIME_TYPE_NOT_ALLOWED_FOR_USER"] = "MIME_TYPE_NOT_ALLOWED_FOR_USER";
			ErrorCode2["HEIC_DECODE_ERROR"] = "HEIC_DECODE_ERROR";
			ErrorCode2["IMAGE_TRANSCODING_ERROR"] = "IMAGE_TRANSCODING_ERROR";
			ErrorCode2["IMAGE_ROTATION_ERROR"] = "IMAGE_ROTATION_ERROR";
			ErrorCode2["MEDIA_TRANSCODING_ERROR"] = "MEDIA_TRANSCODING_ERROR";
			ErrorCode2["GIF_TRANSCODING_ERROR"] = "GIF_TRANSCODING_ERROR";
			ErrorCode2["MEDIA_FINALIZE_ERROR"] = "MEDIA_FINALIZE_ERROR";
			ErrorCode2["GENERAL"] = "GENERAL";
			return ErrorCode2;
		})(ErrorCode || {});
		UploadError = class extends Error {
			code;
			file;
			constructor({ code, message, file, cause }) {
				super(message, { cause });
				Object.setPrototypeOf(this, new.target.prototype);
				this.code = code;
				this.file = file;
			}
		};
	})))();
}
//#endregion
//#region ../packages/upload-media/build-module/validate-mime-type.mjs
function validateMimeType(file, allowedTypes) {
	if (!allowedTypes) return;
	const isAllowedType = allowedTypes.some((allowedType) => {
		if (allowedType.includes("/")) return allowedType === file.type;
		return file.type.startsWith(`${allowedType}/`);
	});
	if (file.type && !isAllowedType) throw new UploadError({
		code: ErrorCode.MIME_TYPE_NOT_SUPPORTED,
		message: sprintf(__("%s: Sorry, this file type is not supported here."), file.name),
		file
	});
}
function init_validate_mime_type() {
	return (init_validate_mime_type = __esmMin((() => {
		init_build_module$1();
		init_upload_error();
	})))();
}
//#endregion
//#region ../packages/upload-media/build-module/get-mime-types-array.mjs
function getMimeTypesArray(wpMimeTypesObject) {
	if (!wpMimeTypesObject) return null;
	return Object.entries(wpMimeTypesObject).flatMap(([extensionsString, mime]) => {
		const [type] = mime.split("/");
		return [mime, ...extensionsString.split("|").map((extension) => `${type}/${extension}`)];
	});
}
//#endregion
//#region ../packages/upload-media/build-module/validate-mime-type-for-user.mjs
function validateMimeTypeForUser(file, wpAllowedMimeTypes) {
	const allowedMimeTypesForUser = getMimeTypesArray(wpAllowedMimeTypes);
	if (!allowedMimeTypesForUser) return;
	const isAllowedMimeTypeForUser = allowedMimeTypesForUser.includes(file.type);
	if (file.type && !isAllowedMimeTypeForUser) throw new UploadError({
		code: ErrorCode.MIME_TYPE_NOT_ALLOWED_FOR_USER,
		message: sprintf(__("%s: Sorry, you are not allowed to upload this file type."), file.name),
		file
	});
}
function init_validate_mime_type_for_user() {
	return (init_validate_mime_type_for_user = __esmMin((() => {
		init_build_module$1();
		init_upload_error();
	})))();
}
//#endregion
//#region ../packages/upload-media/build-module/validate-file-size.mjs
function validateFileSize(file, maxUploadFileSize) {
	if (file.size <= 0) throw new UploadError({
		code: ErrorCode.EMPTY_FILE,
		message: sprintf(__("%s: This file is empty."), file.name),
		file
	});
	if (maxUploadFileSize && file.size > maxUploadFileSize) throw new UploadError({
		code: ErrorCode.SIZE_ABOVE_LIMIT,
		message: sprintf(__("%s: This file exceeds the maximum upload size for this site."), file.name),
		file
	});
}
function init_validate_file_size() {
	return (init_validate_file_size = __esmMin((() => {
		init_build_module$1();
		init_upload_error();
	})))();
}
//#endregion
//#region ../packages/upload-media/build-module/store/actions.mjs
var actions_exports = /* @__PURE__ */ __exportAll({
	addItems: () => addItems,
	cancelItem: () => cancelItem,
	executeRetry: () => executeRetry,
	retryItem: () => retryItem,
	scheduleRetry: () => scheduleRetry
});
function addItems({ files, onChange, onSuccess, onError, onBatchSuccess, additionalData, allowedTypes }) {
	return async ({ select, dispatch }) => {
		const batchId = v4();
		for (const file of files) {
			try {
				validateMimeType(file, allowedTypes);
				validateMimeTypeForUser(file, select.getSettings().allowedMimeTypes);
			} catch (error) {
				onError?.(error);
				continue;
			}
			try {
				validateFileSize(file, select.getSettings().maxUploadFileSize);
			} catch (error) {
				onError?.(error);
				continue;
			}
			dispatch.addItem({
				file,
				batchId,
				onChange,
				onSuccess,
				onBatchSuccess,
				onError,
				additionalData
			});
		}
	};
}
function cancelItem(id, error, silent = false) {
	return async ({ select, dispatch }) => {
		const item = select.getItem(id);
		if (!item) return;
		clearRetryTimer(id);
		if (!silent && error && !item.parentId && !item.attachment?.id) {
			const retrySettings = select.getSettings().retry;
			if (retrySettings) {
				const retryCount = item.retryCount ?? 0;
				const maxRetries = retrySettings.maxRetryAttempts;
				if (shouldRetryError(error, retryCount, maxRetries)) {
					dispatch.scheduleRetry(id, error);
					return;
				}
			}
		}
		item.abortController?.abort();
		vipsCancelOperations(id).catch(() => {});
		cancelGifToVideoOperations(id).catch(() => {});
		if (!silent) {
			const { onError } = item;
			onError?.(error ?? /* @__PURE__ */ new Error("Upload cancelled"));
			if (!onError && error && !item.parentId) console.error("Upload cancelled", error);
		} else debug(`Item cancelled: ${item.file.name} (item ${id}): ${error instanceof Error ? error.message : error}`);
		const { currentOperation, parentId, batchId } = item;
		dispatch({
			type: Type.Cancel,
			id,
			error
		});
		dispatch.removeItem(id);
		dispatch.revokeBlobUrls(id);
		if (currentOperation === OperationType.ResizeCrop || currentOperation === OperationType.Rotate) for (const pending of select.getPendingImageProcessing()) dispatch.processItem(pending.id);
		if (currentOperation === OperationType.Upload) for (const pending of select.getPendingUploads()) dispatch.processItem(pending.id);
		if (currentOperation === OperationType.TranscodeGif) for (const pending of select.getPendingVideoProcessing()) dispatch.processItem(pending.id);
		if (currentOperation === OperationType.ResizeCrop || currentOperation === OperationType.Rotate || currentOperation === OperationType.TranscodeImage) maybeRecycleVipsWorker(select.getActiveImageProcessingCount());
		if (parentId) {
			const parentItem = select.getItem(parentId);
			if (parentItem) {
				const isOptionalCompanion = item.additionalData?.image_size === "animated_video" || item.additionalData?.image_size === "animated_video_poster";
				if (select.hasPendingItemsByParentId(parentId)) {
					if (parentItem.operations && parentItem.operations.length > 0) dispatch.processItem(parentId);
				} else if (parentItem.subSizes && parentItem.subSizes.length > 0 || isOptionalCompanion) {
					if (parentItem.operations && parentItem.operations.length > 0) dispatch.processItem(parentId);
				} else {
					const parentAttachmentId = parentItem.attachment?.id;
					const { mediaDelete } = select.getSettings();
					if (parentAttachmentId && mediaDelete) mediaDelete(parentAttachmentId).catch(() => {});
					await dispatch.cancelItem(parentId, new UploadError({
						code: error instanceof UploadError && error.code || ErrorCode.GENERAL,
						message: error?.message || __("The image could not be uploaded."),
						file: parentItem.file,
						cause: error instanceof Error ? error : void 0
					}));
				}
			}
		}
		if (batchId && select.isBatchUploaded(batchId)) {
			debug(`Batch completed: ${batchId}`);
			item.onBatchSuccess?.();
		}
	};
}
function retryItem(id) {
	return async ({ select, dispatch }) => {
		const item = select.getItem(id);
		if (!item) return;
		if (!item.error) return;
		dispatch({
			type: Type.RetryItem,
			id
		});
		dispatch.processItem(id);
	};
}
function scheduleRetry(id, error) {
	return async ({ select, dispatch }) => {
		const item = select.getItem(id);
		if (!item) return;
		const retrySettings = select.getSettings().retry;
		if (!retrySettings) return;
		const currentRetryCount = item.retryCount ?? 0;
		const delay = calculateRetryDelay({
			attempt: currentRetryCount + 1,
			initialDelay: retrySettings.initialRetryDelayMs,
			maxDelay: retrySettings.maxRetryDelayMs,
			multiplier: retrySettings.backoffMultiplier,
			jitter: retrySettings.retryJitter
		});
		const timerId = setTimeout(() => {
			retryTimers.delete(id);
			dispatch.executeRetry(id);
		}, delay);
		retryTimers.set(id, timerId);
		dispatch({
			type: Type.ScheduleRetry,
			id,
			error,
			retryCount: currentRetryCount,
			nextRetryTimestamp: Date.now() + delay
		});
	};
}
function executeRetry(id) {
	return async ({ select, dispatch }) => {
		const item = select.getItem(id);
		if (!item || item.status !== ItemStatus.PendingRetry) return;
		if (select.isPaused()) return;
		dispatch({
			type: Type.RetryItem,
			id
		});
		dispatch.processItem(id);
	};
}
function init_actions() {
	return (init_actions = __esmMin((() => {
		init_v4();
		init_build_module$1();
		init_types();
		init_retry();
		init_utils$1();
		init_video_conversion();
		init_upload_error();
		init_validate_mime_type();
		init_validate_mime_type_for_user();
		init_validate_file_size();
	})))();
}
//#endregion
//#region ../packages/upload-media/build-module/heic-parser.mjs
function readBox(r) {
	if (r.pos + 8 > r.view.byteLength) return null;
	const offset = r.pos;
	let size = r.u32();
	const type = r.str(4);
	let headerSize = 8;
	if (size === 1) {
		size = r.u64();
		headerSize = 16;
	} else if (size === 0) size = r.view.byteLength - offset;
	return {
		type,
		offset,
		size,
		headerSize
	};
}
function findBoxes(r, start, end) {
	const boxes = [];
	r.pos = start;
	while (r.pos < end) {
		const box = readBox(r);
		if (!box || box.size < 8) break;
		boxes.push(box);
		r.pos = box.offset + box.size;
	}
	return boxes;
}
function findBox(r, start, end, type) {
	r.pos = start;
	while (r.pos < end) {
		const box = readBox(r);
		if (!box || box.size < 8) break;
		if (box.type === type) return box;
		r.pos = box.offset + box.size;
	}
}
function parsePitm(r, box) {
	r.pos = box.offset + box.headerSize;
	const version = r.u8();
	r.pos += 3;
	return version === 0 ? r.u16() : r.u32();
}
function parseIloc(r, box) {
	r.pos = box.offset + box.headerSize;
	const version = r.u8();
	r.pos += 3;
	const byte1 = r.u8();
	const offsetSize = byte1 >> 4 & 15;
	const lengthSize = byte1 & 15;
	const byte2 = r.u8();
	const baseOffsetSize = byte2 >> 4 & 15;
	const indexSize = version >= 1 ? byte2 & 15 : 0;
	const itemCount = version < 2 ? r.u16() : r.u32();
	const items = /* @__PURE__ */ new Map();
	for (let i = 0; i < itemCount; i++) {
		const itemId = version < 2 ? r.u16() : r.u32();
		let constructionMethod = 0;
		if (version === 1 || version === 2) constructionMethod = r.u16() & 15;
		r.u16();
		const baseOffset = r.uN(baseOffsetSize);
		const extentCount = r.u16();
		const extents = [];
		for (let j = 0; j < extentCount; j++) {
			if (version >= 1) r.uN(indexSize);
			const extOffset = r.uN(offsetSize);
			const extLength = r.uN(lengthSize);
			extents.push({
				offset: baseOffset + extOffset,
				length: extLength
			});
		}
		items.set(itemId, {
			constructionMethod,
			extents
		});
	}
	return items;
}
function parseIpma(r, box) {
	r.pos = box.offset + box.headerSize;
	const vf = r.u32();
	const version = vf >>> 24;
	const largeIndex = (vf & 1) !== 0;
	const entryCount = r.u32();
	const associations = /* @__PURE__ */ new Map();
	for (let i = 0; i < entryCount; i++) {
		const itemId = version < 1 ? r.u16() : r.u32();
		const assocCount = r.u8();
		const indices = [];
		for (let j = 0; j < assocCount; j++) if (largeIndex) indices.push(r.u16() & 32767);
		else indices.push(r.u8() & 127);
		associations.set(itemId, indices);
	}
	return associations;
}
function parseIspe(r, box) {
	r.pos = box.offset + box.headerSize + 4;
	return {
		width: r.u32(),
		height: r.u32()
	};
}
function parseIrot(r, box) {
	r.pos = box.offset + box.headerSize;
	return (r.u8() & 3) * 90;
}
function parseIinf(r, box) {
	r.pos = box.offset + box.headerSize;
	const version = r.u8();
	r.pos += 3;
	const entryCount = version === 0 ? r.u16() : r.u32();
	const itemTypes = /* @__PURE__ */ new Map();
	const entriesStart = r.pos;
	const infeBoxes = findBoxes(r, entriesStart, box.offset + box.size);
	for (let i = 0; i < Math.min(entryCount, infeBoxes.length); i++) {
		const infe = infeBoxes[i];
		if (infe.type !== "infe") continue;
		r.pos = infe.offset + infe.headerSize;
		const infeVersion = r.u8();
		r.pos += 3;
		if (infeVersion >= 2) {
			const itemId = infeVersion === 2 ? r.u16() : r.u32();
			r.u16();
			const itemType = r.str(4);
			itemTypes.set(itemId, itemType);
		}
	}
	return itemTypes;
}
function parseIref(r, box, refType) {
	r.pos = box.offset + box.headerSize;
	const version = r.u8();
	r.pos += 3;
	const refs = /* @__PURE__ */ new Map();
	const boxEnd = box.offset + box.size;
	while (r.pos < boxEnd) {
		const refBox = readBox(r);
		if (!refBox || refBox.size < 8) break;
		r.pos = refBox.offset + refBox.headerSize;
		const fromId = version === 0 ? r.u16() : r.u32();
		const refCount = r.u16();
		const toIds = [];
		for (let i = 0; i < refCount; i++) toIds.push(version === 0 ? r.u16() : r.u32());
		if (refBox.type === refType) refs.set(fromId, toIds);
		r.pos = refBox.offset + refBox.size;
	}
	return refs;
}
function reverseBits32(n) {
	n = n >>> 1 & 1431655765 | (n & 1431655765) << 1;
	n = n >>> 2 & 858993459 | (n & 858993459) << 2;
	n = n >>> 4 & 252645135 | (n & 252645135) << 4;
	n = n >>> 8 & 16711935 | (n & 16711935) << 8;
	n = n >>> 16 | n << 16;
	return n >>> 0;
}
function buildCodecString(r, recordOffset) {
	r.pos = recordOffset;
	r.u8();
	const byte1 = r.u8();
	const profileSpace = byte1 >> 6 & 3;
	const tierFlag = byte1 >> 5 & 1;
	const profileIdc = byte1 & 31;
	const compatFlags = r.u32();
	const constraintBytes = r.bytes(6);
	const levelIdc = r.u8();
	const spacePrefix = profileSpace > 0 ? String.fromCharCode(64 + profileSpace) : "";
	const compatHex = reverseBits32(compatFlags).toString(16).toUpperCase();
	const tierChar = tierFlag ? "H" : "L";
	let lastNonZero = -1;
	for (let i = 5; i >= 0; i--) if (constraintBytes[i] !== 0) {
		lastNonZero = i;
		break;
	}
	let constraintStr = "";
	if (lastNonZero >= 0) {
		const parts = [];
		for (let i = 0; i <= lastNonZero; i++) parts.push(constraintBytes[i].toString(16).toUpperCase());
		constraintStr = "." + parts.join(".");
	}
	return `hvc1.${spacePrefix}${profileIdc}.${compatHex}.${tierChar}${levelIdc}${constraintStr}`;
}
function readItemData(buffer, loc, idatOffset) {
	const baseOffset = loc.constructionMethod === 1 ? idatOffset : 0;
	for (const ext of loc.extents) if (baseOffset + ext.offset + ext.length > buffer.byteLength) throw new Error("HEIC item data extends past the end of the file");
	if (loc.extents.length === 1) {
		const ext = loc.extents[0];
		const start = baseOffset + ext.offset;
		return new Uint8Array(buffer.slice(start, start + ext.length));
	}
	let totalLength = 0;
	for (const ext of loc.extents) totalLength += ext.length;
	const data = new Uint8Array(totalLength);
	let pos = 0;
	for (const ext of loc.extents) {
		const start = baseOffset + ext.offset;
		data.set(new Uint8Array(buffer.slice(start, start + ext.length)), pos);
		pos += ext.length;
	}
	return data;
}
function findHvcProperties(propIndices, properties) {
	let hvcCBox;
	let ispeBox;
	let irotBox;
	for (const idx of propIndices) {
		if (idx < 1 || idx > properties.length) continue;
		const prop = properties[idx - 1];
		if (prop.type === "hvcC" && !hvcCBox) hvcCBox = prop;
		if (prop.type === "ispe" && !ispeBox) ispeBox = prop;
		if (prop.type === "irot" && !irotBox) irotBox = prop;
	}
	if (!hvcCBox) throw new Error("No HEVC configuration (hvcC) found");
	if (!ispeBox) throw new Error("No image dimensions (ispe) found");
	return {
		hvcCBox,
		ispeBox,
		irotBox
	};
}
function parseHeic(buffer) {
	const r = new Reader(buffer);
	const fileEnd = buffer.byteLength;
	const metaBox = findBox(r, 0, fileEnd, "meta");
	if (!metaBox) throw new Error("No meta box found in HEIC file");
	const children = findBoxes(r, metaBox.offset + metaBox.headerSize + 4, metaBox.offset + metaBox.size);
	const pitmBox = children.find((b) => b.type === "pitm");
	const ilocBox = children.find((b) => b.type === "iloc");
	const iprpBox = children.find((b) => b.type === "iprp");
	const iinfBox = children.find((b) => b.type === "iinf");
	const irefBox = children.find((b) => b.type === "iref");
	const idatBox = children.find((b) => b.type === "idat");
	const idatOffset = idatBox ? idatBox.offset + idatBox.headerSize : 0;
	if (!pitmBox || !ilocBox || !iprpBox) throw new Error("Missing required boxes (pitm, iloc, iprp) in HEIC");
	const primaryId = parsePitm(r, pitmBox);
	const locations = parseIloc(r, ilocBox);
	const iprpChildren = findBoxes(r, iprpBox.offset + iprpBox.headerSize, iprpBox.offset + iprpBox.size);
	const ipcoBox = iprpChildren.find((b) => b.type === "ipco");
	const ipmaBox = iprpChildren.find((b) => b.type === "ipma");
	if (!ipcoBox || !ipmaBox) throw new Error("Missing ipco or ipma in HEIC properties");
	const allAssoc = parseIpma(r, ipmaBox);
	const properties = findBoxes(r, ipcoBox.offset + ipcoBox.headerSize, ipcoBox.offset + ipcoBox.size);
	let primaryItemType = "hvc1";
	if (iinfBox) {
		const t = parseIinf(r, iinfBox).get(primaryId);
		if (t) primaryItemType = t;
	}
	if (primaryItemType === "grid") return parseGridImage(r, buffer, primaryId, locations, allAssoc, properties, irefBox, idatOffset);
	const primaryLoc = locations.get(primaryId);
	if (!primaryLoc || primaryLoc.extents.length === 0) throw new Error(`No location data for primary item ${primaryId}`);
	const primaryPropIndices = allAssoc.get(primaryId);
	if (!primaryPropIndices || primaryPropIndices.length === 0) throw new Error("No property associations for primary item");
	const { hvcCBox, ispeBox, irotBox } = findHvcProperties(primaryPropIndices, properties);
	const hvcCDataStart = hvcCBox.offset + hvcCBox.headerSize;
	const hvcCDataSize = hvcCBox.size - hvcCBox.headerSize;
	const description = new Uint8Array(buffer.slice(hvcCDataStart, hvcCDataStart + hvcCDataSize));
	const codecString = buildCodecString(r, hvcCDataStart);
	const { width, height } = parseIspe(r, ispeBox);
	const rotation = irotBox ? parseIrot(r, irotBox) : 0;
	return {
		codecString,
		description,
		tiles: [{
			data: readItemData(buffer, primaryLoc, idatOffset),
			x: 0,
			y: 0
		}],
		tileWidth: width,
		tileHeight: height,
		outputWidth: width,
		outputHeight: height,
		rotation,
		exifOrientation: rotation === 0 ? getUnappliedExifOrientation(buffer) : 1
	};
}
function parseGridImage(r, buffer, gridItemId, locations, allAssoc, properties, irefBox, idatOffset) {
	const gridLoc = locations.get(gridItemId);
	if (!gridLoc || gridLoc.extents.length === 0) throw new Error("No location data for grid item");
	const gridData = readItemData(buffer, gridLoc, idatOffset);
	const largeFields = gridData.length > 1 && (gridData[1] & 1) !== 0;
	const minGridSize = largeFields ? 12 : 8;
	if (gridData.length < minGridSize) throw new Error(`Grid descriptor too short: ${gridData.length} bytes`);
	const rows = gridData[2] + 1;
	const columns = gridData[3] + 1;
	const gv = new DataView(gridData.buffer, gridData.byteOffset);
	let outputWidth;
	let outputHeight;
	if (largeFields) {
		outputWidth = gv.getUint32(4);
		outputHeight = gv.getUint32(8);
	} else {
		outputWidth = gv.getUint16(4);
		outputHeight = gv.getUint16(6);
	}
	if (!irefBox) throw new Error("Grid image requires iref box");
	const tileItemIds = parseIref(r, irefBox, "dimg").get(gridItemId);
	if (!tileItemIds || tileItemIds.length === 0) throw new Error("No tile references found for grid item");
	const expectedTiles = rows * columns;
	if (tileItemIds.length < expectedTiles) throw new Error(`Grid expects ${expectedTiles} tiles but found ${tileItemIds.length}`);
	const firstTileProps = allAssoc.get(tileItemIds[0]);
	if (!firstTileProps || firstTileProps.length === 0) throw new Error("No property associations for tile item");
	const { hvcCBox, ispeBox } = findHvcProperties(firstTileProps, properties);
	const gridProps = allAssoc.get(gridItemId) || [];
	let irotBox;
	for (const idx of gridProps) if (idx >= 1 && idx <= properties.length) {
		const prop = properties[idx - 1];
		if (prop.type === "irot") {
			irotBox = prop;
			break;
		}
	}
	const hvcCDataStart = hvcCBox.offset + hvcCBox.headerSize;
	const hvcCDataSize = hvcCBox.size - hvcCBox.headerSize;
	const description = new Uint8Array(buffer.slice(hvcCDataStart, hvcCDataStart + hvcCDataSize));
	const codecString = buildCodecString(r, hvcCDataStart);
	const { width: tileWidth, height: tileHeight } = parseIspe(r, ispeBox);
	const tiles = [];
	for (let row = 0; row < rows; row++) for (let col = 0; col < columns; col++) {
		const tileId = tileItemIds[row * columns + col];
		const tileLoc = locations.get(tileId);
		if (!tileLoc || tileLoc.extents.length === 0) throw new Error(`No location data for tile item ${tileId}`);
		tiles.push({
			data: readItemData(buffer, tileLoc, idatOffset),
			x: col * tileWidth,
			y: row * tileHeight
		});
	}
	const rotation = irotBox ? parseIrot(r, irotBox) : 0;
	return {
		codecString,
		description,
		tiles,
		tileWidth,
		tileHeight,
		outputWidth,
		outputHeight,
		rotation,
		exifOrientation: rotation === 0 ? getUnappliedExifOrientation(buffer) : 1
	};
}
function readTiffOrientation(payload) {
	if (payload.length < 8) return 1;
	const view = new DataView(payload.buffer, payload.byteOffset, payload.byteLength);
	let tiffStart = 0;
	const firstWord = view.getUint16(0);
	if (firstWord !== 18761 && firstWord !== 19789) tiffStart = view.getUint32(0) + 4;
	if (tiffStart + 8 > payload.length) return 1;
	const byteOrder = view.getUint16(tiffStart);
	let little;
	if (byteOrder === 18761) little = true;
	else if (byteOrder === 19789) little = false;
	else return 1;
	const ifd0 = tiffStart + view.getUint32(tiffStart + 4, little);
	if (ifd0 + 2 > payload.length) return 1;
	const entryCount = view.getUint16(ifd0, little);
	for (let i = 0; i < entryCount; i++) {
		const entry = ifd0 + 2 + i * 12;
		if (entry + 12 > payload.length) break;
		if (view.getUint16(entry, little) === 274) {
			const value = view.getUint16(entry + 8, little);
			return value >= 1 && value <= 8 ? value : 1;
		}
	}
	return 1;
}
function findMeta(r) {
	const metaBox = findBox(r, 0, r.view.byteLength, "meta");
	if (!metaBox) return null;
	return {
		box: metaBox,
		children: findBoxes(r, metaBox.offset + metaBox.headerSize + 4, metaBox.offset + metaBox.size)
	};
}
function parseExifOrientation(buffer) {
	try {
		const r = new Reader(buffer);
		const meta = findMeta(r);
		if (!meta) return 1;
		const iinfBox = meta.children.find((b) => b.type === "iinf");
		const ilocBox = meta.children.find((b) => b.type === "iloc");
		if (!iinfBox || !ilocBox) return 1;
		const itemTypes = parseIinf(r, iinfBox);
		let exifItemId;
		for (const [id, type] of itemTypes) if (type === "Exif") {
			exifItemId = id;
			break;
		}
		if (exifItemId === void 0) return 1;
		const loc = parseIloc(r, ilocBox).get(exifItemId);
		if (!loc || loc.extents.length === 0) return 1;
		const idatBox = meta.children.find((b) => b.type === "idat");
		return readTiffOrientation(readItemData(buffer, loc, idatBox ? idatBox.offset + idatBox.headerSize : 0));
	} catch {
		return 1;
	}
}
function hasNativeTransform(r) {
	const meta = findMeta(r);
	if (!meta) return false;
	const iprp = meta.children.find((b) => b.type === "iprp");
	if (!iprp) return false;
	const ipco = findBox(r, iprp.offset + iprp.headerSize, iprp.offset + iprp.size, "ipco");
	if (!ipco) return false;
	const start = ipco.offset + ipco.headerSize;
	const end = ipco.offset + ipco.size;
	return Boolean(findBox(r, start, end, "irot") || findBox(r, start, end, "imir"));
}
function getUnappliedExifOrientation(buffer) {
	try {
		if (hasNativeTransform(new Reader(buffer))) return 1;
	} catch {
		return 1;
	}
	return parseExifOrientation(buffer);
}
var Reader;
function init_heic_parser() {
	return (init_heic_parser = __esmMin((() => {
		Reader = class {
			view;
			buffer;
			pos;
			constructor(buffer, offset = 0) {
				this.buffer = buffer;
				this.view = new DataView(buffer);
				this.pos = offset;
			}
			u8() {
				const v = this.view.getUint8(this.pos);
				this.pos += 1;
				return v;
			}
			u16() {
				const v = this.view.getUint16(this.pos);
				this.pos += 2;
				return v;
			}
			u32() {
				const v = this.view.getUint32(this.pos);
				this.pos += 4;
				return v;
			}
			u64() {
				const hi = this.view.getUint32(this.pos);
				const lo = this.view.getUint32(this.pos + 4);
				this.pos += 8;
				return hi * 4294967296 + lo;
			}
			/**
			* Read a variable-width unsigned integer (0, 4 or 8 bytes).
			*
			* @param size Byte width to read (0, 4, or 8).
			*/
			uN(size) {
				if (size === 0) return 0;
				if (size === 4) return this.u32();
				if (size === 8) return this.u64();
				throw new Error(`Unsupported uint size: ${size}`);
			}
			str(len) {
				let s = "";
				for (let i = 0; i < len; i++) s += String.fromCharCode(this.view.getUint8(this.pos + i));
				this.pos += len;
				return s;
			}
			bytes(len) {
				const b = new Uint8Array(this.buffer, this.pos, len);
				this.pos += len;
				return new Uint8Array(b);
			}
		};
	})))();
}
//#endregion
//#region ../packages/upload-media/build-module/heic-support.mjs
function detectBrowserFamily() {
	if (typeof navigator === "undefined") return null;
	const brands = navigator.userAgentData?.brands;
	if (brands?.length) {
		if (brands.some(({ brand }) => /Chromium/i.test(brand))) return "chromium";
	}
	const userAgent = navigator.userAgent || "";
	if (/Firefox|FxiOS/i.test(userAgent)) return "firefox";
	if (/Chrome|Chromium|CriOS|Edg|OPR/i.test(userAgent)) return "chromium";
	if (/Safari/i.test(userAgent)) return "safari";
	return null;
}
function detectPlatform() {
	if (typeof navigator === "undefined") return "other";
	const platform = navigator.userAgentData?.platform || navigator.userAgent || "";
	if (/iPhone|iPad|iPod|iOS/i.test(platform)) return "other";
	if (/macOS|Mac OS X|Macintosh/i.test(platform)) return "macos";
	if (/Windows/i.test(platform)) return "windows";
	if (/Android|CrOS|Chrome OS/i.test(platform)) return "other";
	if (/Linux|X11/i.test(platform)) return "linux";
	return "other";
}
function getBrowserName() {
	if (detectBrowserFamily() === "chromium") {
		const brands = navigator.userAgentData?.brands ?? [];
		const userAgent = navigator.userAgent || "";
		if (brands.some(({ brand }) => /Edge/i.test(brand)) || /Edg\//i.test(userAgent)) return "Edge";
		if (brands.some(({ brand }) => /Opera/i.test(brand)) || /OPR\//i.test(userAgent)) return "Opera";
		return "Chrome";
	}
	switch (detectBrowserFamily()) {
		case "firefox": return "Firefox";
		case "safari": return "Safari";
		default: return null;
	}
}
function getHeicConversionAdvice() {
	const platform = detectPlatform();
	const family = detectBrowserFamily();
	if (platform === "macos") {
		if (family === "chromium") return __("Safari usually can, or you can upload a JPEG instead.");
		if (family !== "safari") return __("Safari or Chrome usually can, or you can upload a JPEG instead.");
	}
	if (platform === "windows" && family === "firefox") return __("Chrome or Edge might, or you can upload a JPEG instead.");
	return __("You can upload a JPEG instead.");
}
function getHeicUnsupportedMessage() {
	const platform = detectPlatform();
	const family = detectBrowserFamily();
	const browserName = getBrowserName();
	let cause;
	if (platform === "linux") cause = __("HEIC photos can't be decoded on Linux, so unfortunately we couldn't convert this one.");
	else if (family === "firefox") cause = __("Firefox can't read HEIC photos, so we couldn't convert this one.");
	else if (browserName && platform === "windows") cause = sprintf(__("%s couldn't decode HEIC on this PC, so we couldn't convert this one."), browserName);
	else if (browserName && platform === "macos") cause = sprintf(__("%s couldn't decode HEIC on this Mac, so we couldn't convert this one."), browserName);
	else if (browserName) cause = sprintf(__("%s couldn't decode HEIC on this device, so we couldn't convert this one."), browserName);
	else cause = __("This browser can't read HEIC photos, so we couldn't convert this one.");
	return `${cause} ${getHeicConversionAdvice()}`;
}
function init_heic_support() {
	return (init_heic_support = __esmMin((() => {
		init_build_module$1();
	})))();
}
//#endregion
//#region ../packages/upload-media/build-module/canvas-utils.mjs
async function canvasConvertToJpeg(file, quality = .82, encode) {
	const jpegBlob = await encodeCanvas(await decodeToCanvas(file), quality, encode);
	return new File([jpegBlob], `${getFileBasename(file.name)}.jpg`, { type: "image/jpeg" });
}
async function encodeCanvas(canvas, quality, encode) {
	if (encode) try {
		const encoded = await encode(canvas, quality);
		if (encoded) return encoded;
	} catch {}
	return canvas.convertToBlob({
		type: "image/jpeg",
		quality
	});
}
async function decodeToCanvas(file) {
	try {
		const bitmap = await createImageBitmap(file);
		try {
			const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
			const ctx = canvas.getContext("2d");
			if (!ctx) throw new Error("Could not get canvas 2d context");
			ctx.drawImage(bitmap, 0, 0);
			return canvas;
		} finally {
			bitmap.close();
		}
	} catch {}
	if (typeof ImageDecoder !== "undefined") {
		if (await ImageDecoder.isTypeSupported(file.type)) {
			const decoder = new ImageDecoder({
				type: file.type,
				data: file.stream()
			});
			let videoFrame;
			let timeoutId;
			let timedOut = false;
			try {
				videoFrame = (await Promise.race([decoder.decode(), new Promise((_resolve, reject) => {
					timeoutId = setTimeout(() => {
						timedOut = true;
						decoder.close();
						reject(/* @__PURE__ */ new Error("ImageDecoder decode timed out"));
					}, IMAGE_DECODER_TIMEOUT);
				})])).image;
			} catch (error) {
				if (!timedOut) throw error;
			} finally {
				clearTimeout(timeoutId);
				if (!timedOut) decoder.close();
			}
			if (videoFrame) try {
				const canvas = new OffscreenCanvas(videoFrame.displayWidth, videoFrame.displayHeight);
				const ctx = canvas.getContext("2d");
				if (!ctx) throw new Error("Could not get canvas 2d context");
				ctx.drawImage(videoFrame, 0, 0);
				return canvas;
			} finally {
				videoFrame.close();
			}
		}
	}
	let heicData;
	try {
		heicData = parseHeic(await file.arrayBuffer());
	} catch (error) {
		throw new Error("The HEIC file could not be parsed", { cause: error });
	}
	if (typeof VideoDecoder !== "undefined") {
		let supported = false;
		try {
			supported = (await VideoDecoder.isConfigSupported({ codec: heicData.codecString })).supported === true;
		} catch {}
		if (supported) {
			const canvas = new OffscreenCanvas(heicData.outputWidth, heicData.outputHeight);
			const ctx = canvas.getContext("2d");
			if (!ctx) throw new Error("Could not get canvas 2d context");
			for (const tile of heicData.tiles) {
				const frame = await decodeHevcFrame(heicData.codecString, heicData.description, heicData.tileWidth, heicData.tileHeight, tile.data);
				try {
					ctx.drawImage(frame, tile.x, tile.y);
				} finally {
					frame.close();
				}
			}
			return heicData.rotation !== 0 ? applyRotation(canvas, heicData.rotation) : applyExifOrientation(canvas, heicData.exifOrientation);
		}
	}
	throw new HeicUnsupportedError(getHeicUnsupportedMessage());
}
function applyRotation(source, rotation) {
	if (rotation === 0) return source;
	const swap = rotation === 90 || rotation === 270;
	const w = swap ? source.height : source.width;
	const h = swap ? source.width : source.height;
	const rotated = new OffscreenCanvas(w, h);
	const ctx = rotated.getContext("2d");
	if (!ctx) return source;
	ctx.translate(w / 2, h / 2);
	ctx.rotate(-rotation * Math.PI / 180);
	ctx.drawImage(source, -source.width / 2, -source.height / 2);
	return rotated;
}
function applyExifOrientation(source, orientation) {
	if (orientation <= 1 || orientation > 8) return source;
	const { width: sw, height: sh } = source;
	const swap = orientation >= 5;
	const out = new OffscreenCanvas(swap ? sh : sw, swap ? sw : sh);
	const ctx = out.getContext("2d");
	if (!ctx) return source;
	switch (orientation) {
		case 2:
			ctx.transform(-1, 0, 0, 1, sw, 0);
			break;
		case 3:
			ctx.transform(-1, 0, 0, -1, sw, sh);
			break;
		case 4:
			ctx.transform(1, 0, 0, -1, 0, sh);
			break;
		case 5:
			ctx.transform(0, 1, 1, 0, 0, 0);
			break;
		case 6:
			ctx.transform(0, 1, -1, 0, sh, 0);
			break;
		case 7:
			ctx.transform(0, -1, -1, 0, sh, sw);
			break;
		case 8: ctx.transform(0, -1, 1, 0, 0, sw);
	}
	ctx.drawImage(source, 0, 0);
	return out;
}
function decodeHevcFrame(codec, description, width, height, data) {
	return new Promise((resolve, reject) => {
		const decoder = new VideoDecoder({
			output: (frame) => {
				decoder.close();
				resolve(frame);
			},
			error: (e) => {
				if (decoder.state !== "closed") decoder.close();
				reject(e);
			}
		});
		decoder.configure({
			codec,
			codedWidth: width,
			codedHeight: height,
			description
		});
		decoder.decode(new EncodedVideoChunk({
			type: "key",
			timestamp: 0,
			data
		}));
		decoder.flush().catch((e) => {
			if (decoder.state !== "closed") decoder.close();
			reject(e);
		});
	});
}
var IMAGE_DECODER_TIMEOUT, HeicUnsupportedError;
function init_canvas_utils() {
	return (init_canvas_utils = __esmMin((() => {
		init_utils();
		init_heic_parser();
		init_heic_support();
		IMAGE_DECODER_TIMEOUT = 15e3;
		HeicUnsupportedError = class extends Error {};
	})))();
}
//#endregion
//#region ../packages/upload-media/build-module/get-image-dimensions.mjs
function parseJpeg(view) {
	let offset = 2;
	while (offset < view.byteLength) {
		if (view.getUint8(offset) !== 255) return null;
		while (offset < view.byteLength && view.getUint8(offset) === 255) offset++;
		if (offset >= view.byteLength) return null;
		const marker = view.getUint8(offset);
		offset++;
		if (marker === 1 || marker >= 208 && marker <= 217) continue;
		if (marker === 218) return null;
		if (offset + 2 > view.byteLength) return null;
		const segmentLength = view.getUint16(offset);
		if (segmentLength < 2) return null;
		if (marker >= 192 && marker <= 207 && marker !== 196 && marker !== 200 && marker !== 204) {
			if (offset + 7 > view.byteLength) return null;
			const height = view.getUint16(offset + 3);
			return {
				width: view.getUint16(offset + 5),
				height,
				interlaced: marker === 194 || marker === 198 || marker === 202 || marker === 206
			};
		}
		offset += segmentLength;
	}
	return null;
}
function parsePng(view) {
	if (view.byteLength < 29) return null;
	if (!(view.getUint8(12) === 73 && view.getUint8(13) === 72 && view.getUint8(14) === 68 && view.getUint8(15) === 82)) return null;
	return {
		width: view.getUint32(16),
		height: view.getUint32(20),
		interlaced: view.getUint8(28) !== 0
	};
}
async function getImageDimensions(file) {
	try {
		const headerBytes = Math.min(file.size, MAX_HEADER_BYTES);
		const buffer = await file.slice(0, headerBytes).arrayBuffer();
		const view = new DataView(buffer);
		if (view.byteLength >= 3 && view.getUint16(0) === 65496) return parseJpeg(view);
		if (view.byteLength >= 8 && view.getUint32(0) === 2303741511 && view.getUint32(4) === 218765834) return parsePng(view);
		return null;
	} catch {
		return null;
	}
}
var MAX_HEADER_BYTES;
function init_get_image_dimensions() {
	return (init_get_image_dimensions = __esmMin((() => {
		MAX_HEADER_BYTES = 524288;
	})))();
}
//#endregion
//#region ../packages/upload-media/build-module/stub-file.mjs
var StubFile;
function init_stub_file() {
	return (init_stub_file = __esmMin((() => {
		StubFile = class extends File {
			constructor(fileName = "stub-file") {
				super([], fileName);
			}
		};
	})))();
}
//#endregion
//#region ../packages/upload-media/build-module/store/private-actions.mjs
var private_actions_exports = /* @__PURE__ */ __exportAll({
	addItem: () => addItem,
	addSideloadItem: () => addSideloadItem,
	detectUltraHdr: () => detectUltraHdr,
	finalizeItem: () => finalizeItem,
	finishOperation: () => finishOperation,
	generateThumbnails: () => generateThumbnails,
	getTranscodeImageOperation: () => getTranscodeImageOperation,
	pauseItem: () => pauseItem,
	pauseQueue: () => pauseQueue,
	prepareItem: () => prepareItem,
	processItem: () => processItem,
	removeItem: () => removeItem,
	resizeCropItem: () => resizeCropItem,
	resumeQueue: () => resumeQueue,
	revokeBlobUrls: () => revokeBlobUrls,
	rotateItem: () => rotateItem,
	sideloadItem: () => sideloadItem,
	transcodeGifItem: () => transcodeGifItem,
	transcodeImageItem: () => transcodeImageItem,
	updateItemProgress: () => updateItemProgress,
	updateSettings: () => updateSettings,
	uploadItem: () => uploadItem
});
function addItem({ file: fileOrBlob, batchId, onChange, onSuccess, onBatchSuccess, onError, additionalData = {}, sourceUrl, sourceAttachmentId, abortController, operations }) {
	return async ({ dispatch }) => {
		const itemId = v4();
		const file = convertBlobToFile(fileOrBlob);
		let blobUrl;
		if (!(file instanceof StubFile)) {
			blobUrl = createBlobURL(file);
			dispatch({
				type: Type.CacheBlobUrl,
				id: itemId,
				blobUrl
			});
		}
		dispatch({
			type: Type.Add,
			item: {
				id: itemId,
				batchId,
				status: ItemStatus.Processing,
				sourceFile: cloneFile(file),
				file,
				attachment: { url: blobUrl },
				additionalData: {
					generate_sub_sizes: false,
					...additionalData
				},
				onChange,
				onSuccess,
				onBatchSuccess,
				onError,
				sourceUrl,
				sourceAttachmentId,
				abortController: abortController || new AbortController(),
				operations: Array.isArray(operations) ? operations : [OperationType.Prepare]
			}
		});
		dispatch.processItem(itemId);
	};
}
function addSideloadItem({ file, onChange, additionalData, operations, batchId, parentId }) {
	return ({ dispatch }) => {
		const itemId = v4();
		dispatch({
			type: Type.Add,
			item: {
				id: itemId,
				batchId,
				status: ItemStatus.Processing,
				sourceFile: cloneFile(file),
				file,
				onChange,
				additionalData: { ...additionalData },
				parentId,
				operations: Array.isArray(operations) ? operations : [OperationType.Prepare],
				abortController: new AbortController()
			}
		});
		dispatch.processItem(itemId);
	};
}
function processItem(id) {
	return async ({ select, dispatch }) => {
		if (select.isPaused()) return;
		const item = select.getItem(id);
		if (!item) return;
		if (item.currentOperation) return;
		const { attachment, onChange, onSuccess, onBatchSuccess, batchId, parentId } = item;
		const operation = Array.isArray(item.operations?.[0]) ? item.operations[0][0] : item.operations?.[0];
		const operationArgs = Array.isArray(item.operations?.[0]) ? item.operations[0][1] : void 0;
		if (operation === OperationType.Upload) {
			const settings = select.getSettings();
			if (select.getActiveUploadCount() >= settings.maxConcurrentUploads) return;
		}
		if (operation === OperationType.ResizeCrop || operation === OperationType.Rotate) {
			const settings = select.getSettings();
			if (select.getActiveImageProcessingCount() >= settings.maxConcurrentImageProcessing) return;
		}
		if (operation === OperationType.TranscodeGif) {
			if (select.getActiveVideoProcessingCount() >= 1) return;
		}
		if (attachment) {
			if (!(attachment.url && /\.hei[cf]$/i.test(attachment.url))) onChange?.([attachment]);
		}
		if (!operation) {
			if (parentId || !parentId && !select.hasPendingItemsByParentId(id)) {
				if (attachment) onSuccess?.([attachment]);
				dispatch.removeItem(id);
				dispatch.revokeBlobUrls(id);
				if (batchId && select.isBatchUploaded(batchId)) onBatchSuccess?.();
			}
			if (parentId && batchId && select.isBatchUploaded(batchId)) {
				const parentItem = select.getItem(parentId);
				if (!parentItem) return;
				if (parentItem.operations && parentItem.operations.length > 0) {
					dispatch.processItem(parentId);
					return;
				}
				if (attachment) parentItem.onSuccess?.([attachment]);
				dispatch.removeItem(parentId);
				dispatch.revokeBlobUrls(parentId);
				if (parentItem.batchId && select.isBatchUploaded(parentItem.batchId)) parentItem.onBatchSuccess?.();
			}
			return;
		}
		if (operation === OperationType.Finalize && select.hasPendingItemsByParentId(id)) return;
		dispatch({
			type: Type.OperationStart,
			id,
			operation
		});
		debug(`Starting operation ${operation} for ${item.file.name} (item ${item.id})`);
		switch (operation) {
			case OperationType.Prepare:
				dispatch.prepareItem(item.id);
				break;
			case OperationType.ResizeCrop:
				dispatch.resizeCropItem(item.id, operationArgs);
				break;
			case OperationType.Rotate:
				dispatch.rotateItem(item.id, operationArgs);
				break;
			case OperationType.TranscodeImage:
				dispatch.transcodeImageItem(item.id, operationArgs);
				break;
			case OperationType.TranscodeGif:
				dispatch.transcodeGifItem(item.id, operationArgs);
				break;
			case OperationType.Upload:
				if (item.parentId) dispatch.sideloadItem(id);
				else dispatch.uploadItem(id);
				break;
			case OperationType.ThumbnailGeneration:
				dispatch.generateThumbnails(id);
				break;
			case OperationType.Finalize:
				dispatch.finalizeItem(id);
				break;
			case OperationType.DetectUltraHdr: dispatch.detectUltraHdr(id);
		}
	};
}
function pauseQueue() {
	return { type: Type.PauseQueue };
}
function resumeQueue() {
	return async ({ select, dispatch }) => {
		dispatch({ type: Type.ResumeQueue });
		for (const item of select.getAllItems()) if (item.status === ItemStatus.PendingRetry) dispatch.executeRetry(item.id);
		else dispatch.processItem(item.id);
	};
}
function pauseItem(id) {
	return async ({ dispatch }) => {
		dispatch({
			type: Type.PauseItem,
			id
		});
	};
}
function removeItem(id) {
	return async ({ select, dispatch }) => {
		if (!select.getItem(id)) return;
		ultraHdrItems.delete(id);
		clearRetryTimer(id);
		dispatch({
			type: Type.Remove,
			id
		});
		if (select.getAllItems().length === 0) {
			terminateVipsWorker();
			terminateVideoConversionWorker();
		}
	};
}
function finishOperation(id, updates) {
	return async ({ select, dispatch }) => {
		const previousOperation = select.getItem(id)?.currentOperation;
		dispatch({
			type: Type.OperationFinish,
			id,
			item: updates
		});
		dispatch.processItem(id);
		if (previousOperation === OperationType.Upload) {
			const pendingUploads = select.getPendingUploads();
			for (const pendingItem of pendingUploads) dispatch.processItem(pendingItem.id);
		}
		if (previousOperation === OperationType.ResizeCrop || previousOperation === OperationType.Rotate) {
			const pendingItems = select.getPendingImageProcessing();
			for (const pendingItem of pendingItems) dispatch.processItem(pendingItem.id);
		}
		if (previousOperation === OperationType.TranscodeGif) {
			const pendingItems = select.getPendingVideoProcessing();
			for (const pendingItem of pendingItems) dispatch.processItem(pendingItem.id);
		}
		if (previousOperation === OperationType.ResizeCrop || previousOperation === OperationType.Rotate || previousOperation === OperationType.TranscodeImage) maybeRecycleVipsWorker(select.getActiveImageProcessingCount());
	};
}
function isValidImageFormat(format) {
	return VALID_IMAGE_FORMATS.includes(format);
}
async function getTranscodeImageOperation(file, outputMimeType, interlaced = false, quality = DEFAULT_OUTPUT_QUALITY) {
	if (file.type === "image/png" && outputMimeType === "image/jpeg") {
		const blobUrl = createBlobURL(file);
		try {
			if (await vipsHasTransparency(blobUrl)) return null;
		} catch {
			return null;
		} finally {
			revokeBlobURL(blobUrl);
		}
	}
	const formatPart = outputMimeType.split("/")[1];
	if (!isValidImageFormat(formatPart)) return null;
	return [OperationType.TranscodeImage, {
		outputFormat: formatPart,
		outputQuality: quality,
		interlaced
	}];
}
function prepareItem(id) {
	return async ({ select, dispatch }) => {
		const item = select.getItem(id);
		if (!item) return;
		const { file } = item;
		const operations = [];
		const settings = select.getSettings();
		if (file.type === "image/gif" && settings.gifConvert !== false && typeof ImageDecoder !== "undefined" && typeof VideoEncoder !== "undefined") {
			let isAnimated = false;
			try {
				isAnimated = isAnimatedGif(await file.arrayBuffer());
			} catch {
				isAnimated = false;
			}
			if (isAnimated) {
				let hasTransparency = false;
				const blobUrl = createBlobURL(file);
				try {
					hasTransparency = await vipsHasTransparency(blobUrl);
				} catch {
					hasTransparency = true;
				} finally {
					revokeBlobURL(blobUrl);
				}
				if (!hasTransparency) {
					operations.push(OperationType.Upload, OperationType.ThumbnailGeneration, OperationType.Finalize);
					dispatch({
						type: Type.AddOperations,
						id,
						operations
					});
					dispatch.finishOperation(id, { animatedGifFile: item.file });
					return;
				}
			}
		}
		let heicJpeg = null;
		const isHeic = await isHeicFile(file);
		const isMisnamedHeic = isHeic && !HEIC_MIME_TYPES.includes(file.type);
		const isImage = file.type.startsWith("image/") || isHeic;
		const isVipsSupported = !isHeic && CLIENT_SIDE_SUPPORTED_MIME_TYPES.includes(file.type);
		const heicFile = isMisnamedHeic ? new File([file], `${getFileBasename(file.name)}.heic`, {
			type: HEIC_MIME_TYPES[0],
			lastModified: file.lastModified
		}) : file;
		let tooLargeForClient = false;
		if (isImage && isVipsSupported) {
			const dimensions = await getImageDimensions(file);
			if (dimensions && exceedsClientProcessingMemory(dimensions)) tooLargeForClient = true;
		}
		if (file.type === "image/jpeg" && !isHeic && !tooLargeForClient) operations.push(OperationType.DetectUltraHdr);
		if (isImage && isVipsSupported && !tooLargeForClient) operations.push(OperationType.Upload, OperationType.ThumbnailGeneration, OperationType.Finalize);
		else if (isImage && isHeic) {
			const encode = isClientSideMediaSupported() ? (canvas, quality) => vipsEncodeCanvasAsJpeg(id, canvas, heicFile, quality) : void 0;
			try {
				heicJpeg = await canvasConvertToJpeg(heicFile, settings.imageQuality ?? DEFAULT_OUTPUT_QUALITY, encode);
			} catch (error) {
				const unsupported = error instanceof HeicUnsupportedError;
				dispatch.cancelItem(id, new UploadError({
					code: unsupported ? ErrorCode.HEIC_DECODE_ERROR : ErrorCode.IMAGE_TRANSCODING_ERROR,
					message: unsupported ? getHeicUnsupportedMessage() : __("This HEIC image could not be converted. Try converting it to JPEG before uploading."),
					file,
					cause: error instanceof Error ? error : void 0
				}));
				return;
			}
			operations.push(OperationType.Upload, OperationType.ThumbnailGeneration, OperationType.Finalize);
		} else operations.push(OperationType.Upload);
		dispatch({
			type: Type.AddOperations,
			id,
			operations
		});
		let updates;
		if (isHeic && heicJpeg) {
			const vipsAvailable = isClientSideMediaSupported();
			updates = {
				file: heicJpeg,
				sourceFile: heicJpeg,
				originalHeicFile: heicFile,
				additionalData: {
					...item.additionalData,
					generate_sub_sizes: !vipsAvailable,
					convert_format: true
				}
			};
		} else if (!isVipsSupported || !isImage || tooLargeForClient) updates = { additionalData: {
			...item.additionalData,
			generate_sub_sizes: true,
			convert_format: true
		} };
		else updates = { additionalData: {
			...item.additionalData,
			generate_sub_sizes: false
		} };
		dispatch.finishOperation(id, updates);
	};
}
function detectUltraHdr(id) {
	return async ({ select, dispatch }) => {
		const item = select.getItem(id);
		if (!item) return;
		let info;
		try {
			info = await vipsGetUltraHdrInfo(await item.file.arrayBuffer());
		} catch {}
		if (info) ultraHdrItems.add(id);
		dispatch.finishOperation(id, {});
	};
}
function uploadItem(id) {
	return async ({ select, dispatch }) => {
		const item = select.getItem(id);
		if (!item) return;
		const startTime = performance.now();
		let finished = false;
		const finishUpload = (attachment) => {
			if (finished) return;
			finished = true;
			measure({
				measureName: `Upload ${item.file.name}`,
				startTime,
				tooltipText: item.file.name,
				properties: [["Item ID", item.id], ["File name", item.file.name]]
			});
			dispatch.finishOperation(id, { attachment });
		};
		select.getSettings().mediaUpload({
			filesList: [item.file],
			additionalData: item.additionalData,
			signal: item.abortController?.signal,
			isTransportOnly: true,
			onFileChange: ([attachment]) => {
				if (attachment && !isBlobURL(attachment.url)) finishUpload(attachment);
			},
			onSuccess: ([attachment]) => {
				finishUpload(attachment);
			},
			onError: (error) => {
				dispatch.cancelItem(id, error);
			}
		});
	};
}
function sideloadItem(id) {
	return async ({ select, dispatch }) => {
		const item = select.getItem(id);
		if (!item) return;
		const { post, ...additionalData } = item.additionalData;
		const mediaSideload = select.getSettings().mediaSideload;
		if (!mediaSideload) {
			dispatch.finishOperation(id, {});
			return;
		}
		const startTime = performance.now();
		mediaSideload({
			file: item.file,
			attachmentId: post,
			additionalData,
			signal: item.abortController?.signal,
			onSuccess: (subSize) => {
				measure({
					measureName: `Sideload ${item.file.name}`,
					startTime,
					tooltipText: item.file.name,
					properties: [["Item ID", item.id], ["File name", item.file.name]]
				});
				if (item.parentId) dispatch({
					type: Type.AccumulateSubSize,
					id: item.parentId,
					subSize
				});
				dispatch.finishOperation(id, {});
			},
			onError: (error) => {
				dispatch.cancelItem(id, error);
			}
		});
	};
}
function resizeCropItem(id, args) {
	return async ({ select, dispatch }) => {
		const item = select.getItem(id);
		if (!item) return;
		if (!args?.resize) {
			dispatch.finishOperation(id, { file: item.file });
			return;
		}
		const startTime = performance.now();
		const addSuffix = Boolean(item.parentId);
		const scaledSuffix = Boolean(args.isThresholdResize);
		const { imageStripMeta, imageMaxBitDepth, generateAnimatedImageSubsizes } = select.getSettings();
		try {
			const file = await vipsResizeImage(item.id, item.file, args.resize, {
				smartCrop: false,
				addSuffix,
				signal: item.abortController?.signal,
				scaledSuffix,
				quality: args.quality,
				stripMeta: imageStripMeta,
				maxBitdepth: imageMaxBitDepth,
				preserveAnimation: false !== generateAnimatedImageSubsizes
			});
			measure({
				measureName: `ResizeCrop ${item.file.name}`,
				startTime,
				tooltipText: item.file.name,
				properties: [["Item ID", item.id], ["File name", item.file.name]]
			});
			const blobUrl = createBlobURL(file);
			dispatch({
				type: Type.CacheBlobUrl,
				id,
				blobUrl
			});
			dispatch.finishOperation(id, {
				file,
				attachment: { url: blobUrl }
			});
		} catch (error) {
			dispatch.cancelItem(id, new UploadError({
				code: ErrorCode.IMAGE_TRANSCODING_ERROR,
				message: __("The web server cannot generate responsive image sizes for this image. Convert it to JPEG or PNG before uploading."),
				file: item.file,
				cause: error instanceof Error ? error : void 0
			}));
		}
	};
}
function rotateItem(id, args) {
	return async ({ select, dispatch }) => {
		const item = select.getItem(id);
		if (!item) return;
		if (!args?.orientation || args.orientation === 1) {
			dispatch.finishOperation(id, { file: item.file });
			return;
		}
		const startTime = performance.now();
		try {
			const file = await vipsRotateImage(item.id, item.file, args.orientation, item.abortController?.signal);
			measure({
				measureName: `Rotate ${item.file.name}`,
				startTime,
				tooltipText: item.file.name,
				properties: [["Item ID", item.id], ["File name", item.file.name]]
			});
			const blobUrl = createBlobURL(file);
			dispatch({
				type: Type.CacheBlobUrl,
				id,
				blobUrl
			});
			dispatch.finishOperation(id, {
				file,
				attachment: { url: blobUrl }
			});
		} catch (error) {
			dispatch.cancelItem(id, new UploadError({
				code: ErrorCode.IMAGE_ROTATION_ERROR,
				message: __("The web server cannot generate responsive image sizes for this image. Convert it to JPEG or PNG before uploading."),
				file: item.file,
				cause: error instanceof Error ? error : void 0
			}));
		}
	};
}
function transcodeImageItem(id, args) {
	return async ({ select, dispatch }) => {
		const item = select.getItem(id);
		if (!item) return;
		if (!args?.outputFormat) {
			dispatch.finishOperation(id, { file: item.file });
			return;
		}
		const startTime = performance.now();
		const outputMimeType = `image/${args.outputFormat}`;
		const quality = args.outputQuality ?? DEFAULT_OUTPUT_QUALITY;
		const interlaced = args.interlaced ?? false;
		const { imageStripMeta, imageMaxBitDepth } = select.getSettings();
		try {
			const file = await vipsConvertImageFormat(item.id, item.file, outputMimeType, {
				quality,
				interlaced,
				stripMeta: imageStripMeta,
				maxBitdepth: imageMaxBitDepth
			});
			measure({
				measureName: `Transcode ${item.file.name}`,
				startTime,
				tooltipText: item.file.name,
				properties: [["Item ID", item.id], ["File name", item.file.name]]
			});
			const blobUrl = createBlobURL(file);
			dispatch({
				type: Type.CacheBlobUrl,
				id,
				blobUrl
			});
			dispatch.finishOperation(id, {
				file,
				attachment: { url: blobUrl }
			});
		} catch (error) {
			dispatch.cancelItem(id, new UploadError({
				code: ErrorCode.MEDIA_TRANSCODING_ERROR,
				message: "Image could not be transcoded to the target format",
				file: item.file,
				cause: error instanceof Error ? error : void 0
			}));
		}
	};
}
function transcodeGifItem(id, args) {
	return async ({ select, dispatch }) => {
		const item = select.getItem(id);
		if (!item) return;
		const outputMimeType = `video/${args?.outputFormat ?? "mp4"}`;
		const gifFile = item.file;
		try {
			const file = await convertGifToVideo(item.id, gifFile, outputMimeType, {
				timeout: args?.timeout,
				maxTotalPixels: args?.maxTotalPixels
			});
			dispatch.finishOperation(id, { file });
			dispatch.addSideloadItem({
				file: gifFile,
				batchId: v4(),
				parentId: item.parentId,
				additionalData: {
					post: item.additionalData?.post,
					image_size: "animated_video_poster",
					convert_format: false
				},
				operations: [[OperationType.TranscodeImage, {
					outputFormat: "jpeg",
					outputQuality: DEFAULT_OUTPUT_QUALITY,
					interlaced: false
				}], OperationType.Upload]
			});
		} catch (error) {
			if (isUnsupportedConversionError(error)) {
				if (isSizeLimitConversionError(error)) debug(`Skipping GIF to video conversion: ${error instanceof Error ? error.message : error}`);
				dispatch.cancelItem(id, /* @__PURE__ */ new Error("Animated GIF conversion unsupported"), true);
				return;
			}
			if (isConversionTimeoutError(error)) {
				debug(`GIF to video conversion timed out; keeping the original GIF only: ${error instanceof Error ? error.message : error}`);
				dispatch.cancelItem(id, /* @__PURE__ */ new Error("Animated GIF conversion timed out"), true);
				return;
			}
			console.error("[video-conversion] GIF to video conversion failed:", error);
			dispatch.cancelItem(id, new UploadError({
				code: ErrorCode.GIF_TRANSCODING_ERROR,
				message: "Animated GIF could not be converted to video",
				file: item.file,
				cause: error instanceof Error ? error : void 0
			}), true);
		}
	};
}
function generateThumbnails(id) {
	return async ({ select, dispatch }) => {
		const item = select.getItem(id);
		if (!item) return;
		if (!item.attachment) {
			dispatch.finishOperation(id, {});
			return;
		}
		const attachment = item.attachment;
		const settings = select.getSettings();
		if (item.originalHeicFile && attachment.id) dispatch.addSideloadItem({
			file: item.originalHeicFile,
			batchId: v4(),
			parentId: item.id,
			additionalData: {
				post: attachment.id,
				image_size: "source_original",
				convert_format: false
			},
			operations: [OperationType.Upload]
		});
		if (item.animatedGifFile && attachment.id) {
			const outputFormat = settings.videoOutputFormat === "video/webm" ? "webm" : "mp4";
			dispatch.addSideloadItem({
				file: item.animatedGifFile,
				batchId: v4(),
				parentId: item.id,
				additionalData: {
					post: attachment.id,
					image_size: "animated_video",
					convert_format: false
				},
				operations: [[OperationType.TranscodeGif, { outputFormat }], OperationType.Upload]
			});
		}
		let exifOrientation = attachment.exif_orientation || 1;
		const sourceType = item.sourceFile.type;
		const isHeifFamily = sourceType === "image/avif" || sourceType === "image/heif";
		let needsClientRotation = false;
		if (isHeifFamily) {
			exifOrientation = getUnappliedExifOrientation(await item.sourceFile.arrayBuffer());
			needsClientRotation = exifOrientation !== 1;
		}
		let rotatedSource;
		{
			const needsRotation = exifOrientation !== 1 && !item.file.name.includes("-scaled");
			if ((needsRotation || needsClientRotation) && attachment.id) try {
				rotatedSource = await vipsRotateImage(item.id, item.sourceFile, exifOrientation, item.abortController?.signal);
			} catch {
				console.warn("Failed to rotate image, continuing with thumbnails");
			}
			if (needsRotation && rotatedSource && attachment.id) dispatch.addSideloadItem({
				file: rotatedSource,
				batchId: v4(),
				parentId: item.id,
				additionalData: {
					post: attachment.id,
					image_size: "original",
					convert_format: false
				},
				operations: [OperationType.Upload]
			});
		}
		if (!item.parentId && attachment.missing_image_sizes && attachment.missing_image_sizes.length > 0) {
			const allImageSizes = settings.allImageSizes || {};
			const sizesToGenerate = attachment.missing_image_sizes;
			const thumbnailSource = needsClientRotation && rotatedSource ? rotatedSource : item.sourceFile;
			const file = attachment.filename ? renameFile(thumbnailSource, attachment.filename) : thumbnailSource;
			const batchId = v4();
			const isUltraHdr = ultraHdrItems.has(item.id);
			const outputMimeType = attachment.image_output_format;
			const interlaced = attachment.image_save_progressive ?? false;
			const imageQuality = attachment.image_quality;
			const fallbackQuality = settings.imageQuality ?? DEFAULT_OUTPUT_QUALITY;
			const defaultQuality = typeof imageQuality?.default === "number" ? imageQuality.default / 100 : fallbackQuality;
			const qualityForSize = (sizeName) => {
				const sized = imageQuality?.sizes?.[sizeName];
				if (typeof sized === "number") return sized / 100;
				return defaultQuality;
			};
			let thumbnailTranscodeOperation = null;
			if (!isUltraHdr && outputMimeType) thumbnailTranscodeOperation = await getTranscodeImageOperation(thumbnailSource, outputMimeType, interlaced, defaultQuality);
			const dimensionGroups = /* @__PURE__ */ new Map();
			for (const name of sizesToGenerate) {
				const imageSize = allImageSizes[name];
				if (!imageSize) {
					console.warn(`Image size "${name}" not found in configuration`);
					continue;
				}
				const key = `${imageSize.width}x${imageSize.height}x${imageSize.crop}`;
				const group = dimensionGroups.get(key);
				if (group) group.push(name);
				else dimensionGroups.set(key, [name]);
			}
			for (const [, names] of dimensionGroups) {
				const imageSize = allImageSizes[names[0]];
				const sizeQuality = qualityForSize(names[0]);
				const thumbnailOperations = [[OperationType.ResizeCrop, {
					resize: imageSize,
					quality: sizeQuality
				}]];
				if (!isUltraHdr && thumbnailTranscodeOperation) thumbnailOperations.push([thumbnailTranscodeOperation[0], {
					...thumbnailTranscodeOperation[1],
					outputQuality: sizeQuality
				}]);
				thumbnailOperations.push(OperationType.Upload);
				const imageSizeParam = names.length === 1 ? names[0] : names;
				dispatch.addSideloadItem({
					file,
					batchId,
					parentId: item.id,
					additionalData: {
						post: attachment.id,
						image_size: imageSizeParam,
						convert_format: false
					},
					operations: thumbnailOperations
				});
			}
			{
				const { bigImageSizeThreshold } = settings;
				if (bigImageSizeThreshold && attachment.id) {
					const bitmap = await createImageBitmap(thumbnailSource);
					const needsScaling = bitmap.width > bigImageSizeThreshold || bitmap.height > bigImageSizeThreshold;
					bitmap.close();
					if (needsScaling) {
						const sourceForScaled = attachment.filename ? renameFile(thumbnailSource, attachment.filename) : thumbnailSource;
						const scaledOperations = [[OperationType.ResizeCrop, {
							resize: {
								width: bigImageSizeThreshold,
								height: bigImageSizeThreshold
							},
							isThresholdResize: true,
							quality: defaultQuality
						}]];
						if (!isUltraHdr && thumbnailTranscodeOperation) scaledOperations.push(thumbnailTranscodeOperation);
						scaledOperations.push(OperationType.Upload);
						dispatch.addSideloadItem({
							file: sourceForScaled,
							batchId,
							parentId: item.id,
							additionalData: {
								post: attachment.id,
								image_size: "scaled",
								convert_format: false
							},
							operations: scaledOperations
						});
					}
				}
			}
		}
		dispatch.finishOperation(id, {});
	};
}
function finalizeItem(id) {
	return async ({ select, dispatch }) => {
		const item = select.getItem(id);
		if (!item) return;
		const attachment = item.attachment;
		const { mediaFinalize } = select.getSettings();
		const updates = {};
		if (attachment?.id && mediaFinalize) try {
			const updatedAttachment = await mediaFinalize(attachment.id, item.subSizes || []);
			if (updatedAttachment) updates.attachment = updatedAttachment;
		} catch (error) {
			console.warn("Media finalization failed:", error);
			dispatch.cancelItem(id, new UploadError({
				code: ErrorCode.MEDIA_FINALIZE_ERROR,
				message: __("Could not finalize the upload."),
				file: item.file
			}));
			return;
		}
		dispatch.finishOperation(id, updates);
	};
}
function revokeBlobUrls(id) {
	return async ({ select, dispatch }) => {
		const blobUrls = select.getBlobUrls(id);
		for (const blobUrl of blobUrls) revokeBlobURL(blobUrl);
		dispatch({
			type: Type.RevokeBlobUrls,
			id
		});
	};
}
function updateItemProgress(id, progress) {
	return async ({ dispatch }) => {
		dispatch({
			type: Type.UpdateProgress,
			id,
			progress
		});
	};
}
function updateSettings(settings) {
	return {
		type: Type.UpdateSettings,
		settings
	};
}
var DEFAULT_OUTPUT_QUALITY, ultraHdrItems, VALID_IMAGE_FORMATS;
function init_private_actions() {
	return (init_private_actions = __esmMin((() => {
		init_v4();
		init_build_module$3();
		init_build_module$1();
		init_utils();
		init_canvas_utils();
		init_heic_support();
		init_heic_parser();
		init_feature_detection();
		init_get_image_dimensions();
		init_constants();
		init_stub_file();
		init_upload_error();
		init_utils$1();
		init_video_conversion();
		init_types();
		init_retry();
		DEFAULT_OUTPUT_QUALITY = .82;
		ultraHdrItems = /* @__PURE__ */ new Set();
		VALID_IMAGE_FORMATS = [
			"jpeg",
			"webp",
			"avif",
			"png",
			"gif"
		];
	})))();
}
//#endregion
//#region ../packages/upload-media/build-module/lock-unlock.mjs
var lock, unlock;
function init_lock_unlock() {
	return (init_lock_unlock = __esmMin((() => {
		init_implementation();
		({lock, unlock} = __dangerousOptInToUnstableAPIsOnlyForCoreModules("I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.", "@wordpress/upload-media"));
	})))();
}
//#endregion
//#region ../packages/upload-media/build-module/store/index.mjs
var storeConfig, store;
function init_store() {
	return (init_store = __esmMin((() => {
		init_build_module$2();
		init_reducer();
		init_private_selectors();
		init_actions();
		init_private_actions();
		init_lock_unlock();
		init_constants();
		storeConfig = {
			reducer: reducer_default,
			selectors: selectors_exports,
			actions: actions_exports
		};
		store = createReduxStore(STORE_NAME, {
			reducer: reducer_default,
			selectors: selectors_exports,
			actions: actions_exports
		});
		if (!select(store)) register(store);
		unlock(store).registerPrivateActions(private_actions_exports);
		unlock(store).registerPrivateSelectors(private_selectors_exports);
	})))();
}
//#endregion
//#region ../packages/upload-media/build-module/index.mjs
function init_build_module() {
	return (init_build_module = __esmMin((() => {
		init_store();
		init_provider();
		init_upload_error();
		init_heic_support();
		init_feature_detection();
		init_utils();
	})))();
}
//#endregion
export { init_lock_unlock as a, isHeicFile as c, isHeicCanvasSupported as d, STORE_NAME as f, storeConfig as i, detectClientSideMediaSupport as l, init_store as n, unlock as o, init_constants as p, store as r, init_utils as s, init_build_module as t, init_feature_detection as u };
