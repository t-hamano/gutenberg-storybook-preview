import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { a as __assign, i as noCase, l as init_tslib_es6, r as init_dist_es2015$1 } from "./dist.es2015-BYklxwDS.js";
//#region ../node_modules/.store/pascal-case@3.1.2-khtSA9hpCTEVLYfMgyRdoA/node_modules/pascal-case/dist.es2015/index.js
function pascalCaseTransform(input, index) {
	var firstChar = input.charAt(0);
	var lowerChars = input.substr(1).toLowerCase();
	if (index > 0 && firstChar >= "0" && firstChar <= "9") return "_" + firstChar + lowerChars;
	return "" + firstChar.toUpperCase() + lowerChars;
}
function pascalCase(input, options) {
	if (options === void 0) options = {};
	return noCase(input, __assign({
		delimiter: "",
		transform: pascalCaseTransform
	}, options));
}
function init_dist_es2015() {
	return (init_dist_es2015 = __esmMin((() => {
		init_tslib_es6();
		init_dist_es2015$1();
	})))();
}
//#endregion
export { pascalCase as n, pascalCaseTransform as r, init_dist_es2015 as t };
