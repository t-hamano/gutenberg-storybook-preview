import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { n as useContextSystem, t as init_use_context_system } from "./use-context-system-6z_jGcZR.js";
import { n as useResponsiveValue, t as init_use_responsive_value } from "./use-responsive-value-Dwht8NmM.js";
import { n as space, t as init_space } from "./space-BUoQC8K7.js";
//#region ../packages/components/src/flex/style.module.scss
var flex, item, block, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		flex = "_flex_1lkek_1";
		item = "_item_1lkek_18";
		block = "_block_1lkek_26";
		style_module_default = {
			flex,
			"expanded-column": "_expanded-column_1lkek_10",
			"expanded-row": "_expanded-row_1lkek_14",
			item,
			block,
			"items-column": "_items-column_1lkek_30",
			"items-row": "_items-row_1lkek_34"
		};
	})))();
}
//#endregion
//#region ../packages/components/src/flex/flex/hook.ts
function useDeprecatedProps(props) {
	const { isReversed, ...otherProps } = props;
	if (typeof isReversed !== "undefined") {
		deprecated("Flex isReversed", {
			alternative: "Flex direction=\"row-reverse\" or \"column-reverse\"",
			since: "5.9"
		});
		return {
			...otherProps,
			direction: isReversed ? "row-reverse" : "row"
		};
	}
	return otherProps;
}
function useFlex(props) {
	const { align, className, direction: directionProp = "row", expanded = true, gap = 2, justify = "space-between", style, wrap = false, ...otherProps } = useContextSystem(useDeprecatedProps(props), "Flex");
	const direction = useResponsiveValue(Array.isArray(directionProp) ? directionProp : [directionProp]);
	const isColumn = typeof direction === "string" && !!direction.includes("column");
	const flexStyle = {
		...style,
		"--wp-components-flex-align": align ?? (isColumn ? "normal" : "center"),
		"--wp-components-flex-direction": direction,
		"--wp-components-flex-wrap": wrap ? "wrap" : "nowrap",
		"--wp-components-flex-gap": space(gap),
		"--wp-components-flex-justify": justify
	};
	return {
		...otherProps,
		className: clsx(style_module_default.flex, isColumn ? style_module_default["items-column"] : style_module_default["items-row"], expanded && (isColumn ? style_module_default["expanded-column"] : style_module_default["expanded-row"]), className),
		style: flexStyle,
		isColumn
	};
}
function init_hook() {
	return (init_hook = __esmMin((() => {
		init_clsx();
		init_build_module();
		init_use_context_system();
		init_use_responsive_value();
		init_space();
		init_style_module();
	})))();
}
//#endregion
//#region ../packages/components/src/flex/context.ts
var FlexContext, useFlexContext;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		FlexContext = (0, import_react.createContext)({ flexItemDisplay: void 0 });
		useFlexContext = () => (0, import_react.useContext)(FlexContext);
	})))();
}
//#endregion
export { useFlex as a, init_hook as i, init_context as n, init_style_module as o, useFlexContext as r, style_module_default as s, FlexContext as t };
