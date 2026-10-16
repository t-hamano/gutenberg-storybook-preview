import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
//#region ../packages/dom/build-module/data-transfer.mjs
function getFilesFromDataTransfer(dataTransfer) {
	const files = Array.from(dataTransfer.files);
	Array.from(dataTransfer.items).forEach((item) => {
		const file = item.getAsFile();
		if (file && !files.find(({ name, type, size }) => name === file.name && type === file.type && size === file.size)) files.push(file);
	});
	return files;
}
function init_data_transfer() {
	return (init_data_transfer = __esmMin((() => {})))();
}
//#endregion
export { init_data_transfer as n, getFilesFromDataTransfer as t };
