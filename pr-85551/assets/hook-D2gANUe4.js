import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { n as useContextSystem, t as init_use_context_system } from "./use-context-system-6z_jGcZR.js";
//#region ../packages/components/src/surface/style.module.scss
var surface, secondary, dotted, grid, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		surface = "_surface_1tr05_1";
		secondary = "_secondary_1tr05_25";
		dotted = "_dotted_1tr05_29";
		grid = "_grid_1tr05_34";
		style_module_default = {
			surface,
			"border-bottom": "_border-bottom_1tr05_7",
			"border-left": "_border-left_1tr05_11",
			"border-right": "_border-right_1tr05_16",
			"border-top": "_border-top_1tr05_21",
			secondary,
			dotted,
			grid
		};
	})))();
}
//#endregion
//#region ../packages/components/src/surface/hook.ts
function useSurface(props) {
	const { backgroundSize = 12, borderBottom = false, borderLeft = false, borderRight = false, borderTop = false, className, style, variant = "primary", ...otherProps } = useContextSystem(props, "Surface");
	const surfaceStyle = variant === "dotted" || variant === "grid" ? {
		...style,
		"--wp-components-surface-background-size": `${backgroundSize}px`,
		"--wp-components-surface-background-size-dotted": `${backgroundSize - 1}px`
	} : style;
	return {
		...otherProps,
		className: clsx(style_module_default.surface, {
			[style_module_default["border-bottom"]]: borderBottom,
			[style_module_default["border-left"]]: borderLeft,
			[style_module_default["border-right"]]: borderRight,
			[style_module_default["border-top"]]: borderTop,
			[style_module_default.secondary]: variant === "secondary",
			[style_module_default.dotted]: variant === "dotted",
			[style_module_default.grid]: variant === "grid"
		}, className),
		style: surfaceStyle
	};
}
function init_hook() {
	return (init_hook = __esmMin((() => {
		init_clsx();
		init_use_context_system();
		init_style_module();
	})))();
}
//#endregion
export { useSurface as n, init_hook as t };
