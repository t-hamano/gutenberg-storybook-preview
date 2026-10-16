import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
//#region ../node_modules/.store/@base-ui/utils@0.5.0--7My7Lubseca8je9LSEweA/node_modules/@base-ui/utils/visuallyHidden.mjs
var visuallyHiddenBase, visuallyHidden, visuallyHiddenInput;
function init_visuallyHidden() {
	return (init_visuallyHidden = __esmMin((() => {
		visuallyHiddenBase = {
			clipPath: "inset(50%)",
			overflow: "hidden",
			whiteSpace: "nowrap",
			border: 0,
			padding: 0,
			width: 1,
			height: 1,
			margin: -1
		};
		visuallyHidden = {
			...visuallyHiddenBase,
			position: "fixed",
			margin: 0,
			top: 0,
			left: 0
		};
		visuallyHiddenInput = {
			...visuallyHiddenBase,
			position: "absolute"
		};
	})))();
}
//#endregion
export { visuallyHidden as n, visuallyHiddenInput as r, init_visuallyHidden as t };
