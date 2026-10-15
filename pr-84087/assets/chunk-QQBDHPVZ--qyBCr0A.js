import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
//#region ../node_modules/.store/@storybook/addon-docs@10.6.1-q2ZL0AB67huD8qQa9CiruQ/node_modules/@storybook/addon-docs/dist/_browser-chunks/chunk-QQBDHPVZ.js
var getControlId, getControlSetterButtonId;
function init_chunk_QQBDHPVZ() {
	return (init_chunk_QQBDHPVZ = __esmMin((() => {
		getControlId = (value, storyId, controlsId) => {
			let base = value.replace(/\s+/g, "-"), parts = ["control"];
			return controlsId && parts.push(controlsId), storyId && parts.push(storyId), parts.push(base), parts.join("-");
		};
		getControlSetterButtonId = (value, storyId, controlsId) => {
			let base = value.replace(/\s+/g, "-"), parts = ["set"];
			return controlsId && parts.push(controlsId), storyId && parts.push(storyId), parts.push(base), parts.join("-");
		};
	})))();
}
//#endregion
export { getControlSetterButtonId as n, init_chunk_QQBDHPVZ as r, getControlId as t };
