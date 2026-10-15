import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
//#region \0virtual:vips-stub
var setLocation, cancelOperations, convertImageFormat, compressImage, resizeImage, rotateImage, hasTransparency, vipsConvertImageFormat, vipsCompressImage, vipsResizeImage, vipsRotateImage, vipsHasTransparency, vipsCancelOperations, terminateVipsWorker;
function init__virtual_vips_stub() {
	return (init__virtual_vips_stub = __esmMin((() => {
		setLocation = () => {};
		cancelOperations = async () => false;
		convertImageFormat = async () => /* @__PURE__ */ new ArrayBuffer(0);
		compressImage = async () => /* @__PURE__ */ new ArrayBuffer(0);
		resizeImage = async () => ({
			buffer: /* @__PURE__ */ new ArrayBuffer(0),
			width: 0,
			height: 0,
			originalWidth: 0,
			originalHeight: 0
		});
		rotateImage = async () => ({
			buffer: /* @__PURE__ */ new ArrayBuffer(0),
			width: 0,
			height: 0
		});
		hasTransparency = async () => false;
		vipsConvertImageFormat = convertImageFormat;
		vipsCompressImage = compressImage;
		vipsResizeImage = resizeImage;
		vipsRotateImage = rotateImage;
		vipsHasTransparency = hasTransparency;
		vipsCancelOperations = cancelOperations;
		terminateVipsWorker = () => {};
	})))();
}
//#endregion
init__virtual_vips_stub();
export { cancelOperations, compressImage, convertImageFormat, hasTransparency, resizeImage, rotateImage, setLocation, terminateVipsWorker, vipsCancelOperations, vipsCompressImage, vipsConvertImageFormat, vipsHasTransparency, vipsResizeImage, vipsRotateImage };
