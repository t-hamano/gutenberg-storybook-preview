import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
//#region ../packages/blob/build-module/index.mjs
function createBlobURL(file) {
	const url = window.URL.createObjectURL(file);
	cache[url] = file;
	return url;
}
function getBlobByURL(url) {
	return cache[url];
}
function getBlobTypeByURL(url) {
	return getBlobByURL(url)?.type.split("/")[0];
}
function revokeBlobURL(url) {
	if (cache[url]) window.URL.revokeObjectURL(url);
	delete cache[url];
}
function isBlobURL(url) {
	if (!url || !url.indexOf) return false;
	return url.indexOf("blob:") === 0;
}
var cache;
function init_build_module() {
	return (init_build_module = __esmMin((() => {
		cache = {};
	})))();
}
//#endregion
export { isBlobURL as a, init_build_module as i, getBlobByURL as n, revokeBlobURL as o, getBlobTypeByURL as r, createBlobURL as t };
