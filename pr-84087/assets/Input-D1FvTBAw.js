import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_FieldControl, t as FieldControl } from "./FieldControl-DACyu5Kd.js";
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/input/Input.mjs
var import_react, import_jsx_runtime, Input;
function init_Input() {
	return (init_Input = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_FieldControl();
		import_jsx_runtime = require_jsx_runtime();
		Input = /*#__PURE__*/ import_react.forwardRef(function Input(props, forwardedRef) {
			return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FieldControl, {
				ref: forwardedRef,
				...props
			});
		});
		Input.displayName = "Input";
	})))();
}
//#endregion
export { init_Input as n, Input as t };
