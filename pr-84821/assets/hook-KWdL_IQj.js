import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { n as useContextSystem, t as init_use_context_system } from "./use-context-system-BCQpAcZ4.js";
import { n as init_context, o as init_style_module, r as useFlexContext, s as style_module_default } from "./context-DRcCe4l-.js";
//#region ../packages/components/src/flex/flex-item/hook.ts
function useFlexItem(props) {
	const { className, display: displayProp, isBlock = false, style, ...otherProps } = useContextSystem(props, "FlexItem");
	const contextDisplay = useFlexContext().flexItemDisplay;
	const display = displayProp || contextDisplay;
	const itemStyle = {
		...style,
		"--wp-components-flex-item-display": display || "block"
	};
	return {
		...otherProps,
		className: clsx(style_module_default.item, isBlock && style_module_default.block, className),
		style: itemStyle
	};
}
function init_hook() {
	return (init_hook = __esmMin((() => {
		init_clsx();
		init_use_context_system();
		init_context();
		init_style_module();
	})))();
}
//#endregion
export { useFlexItem as n, init_hook as t };
