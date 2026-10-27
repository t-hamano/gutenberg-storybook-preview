import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { l as TooltipProviderContext, m as init_FloatingDelayGroup, p as FloatingDelayGroup, u as init_TooltipProviderContext } from "./TooltipPopup-BoeaPoDc.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/tooltip/provider/TooltipProvider.mjs
var import_react, import_jsx_runtime, TooltipProvider;
function init_TooltipProvider() {
	return (init_TooltipProvider = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_FloatingDelayGroup();
		init_TooltipProviderContext();
		import_jsx_runtime = require_jsx_runtime();
		TooltipProvider = function TooltipProvider(props) {
			const { delay, closeDelay, timeout = 400 } = props;
			const delayValue = import_react.useMemo(() => ({
				open: delay,
				close: closeDelay
			}), [delay, closeDelay]);
			return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(TooltipProviderContext.Provider, {
				value: delay,
				children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FloatingDelayGroup, {
					delay: delayValue,
					timeoutMs: timeout,
					children: props.children
				})
			});
		};
		TooltipProvider.displayName = "TooltipProvider";
	})))();
}
//#endregion
export { init_TooltipProvider as n, TooltipProvider as t };
