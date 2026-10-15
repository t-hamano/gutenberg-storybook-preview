import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-BrNgZl6E.js";
import { n as init_component$1, t as component_default$1 } from "./component-CFOx0tK5.js";
import { l as init_use_responsive_value, u as useResponsiveValue } from "./component-CU_5aj14.js";
//#region ../packages/components/build-module/grid/utils.mjs
function getAlignmentProps(alignment) {
	return alignment ? ALIGNMENTS[alignment] ?? {} : {};
}
var ALIGNMENTS;
function init_utils() {
	return (init_utils = __esmMin((() => {
		ALIGNMENTS = {
			bottom: {
				alignItems: "flex-end",
				justifyContent: "center"
			},
			bottomLeft: {
				alignItems: "flex-start",
				justifyContent: "flex-end"
			},
			bottomRight: {
				alignItems: "flex-end",
				justifyContent: "flex-end"
			},
			center: {
				alignItems: "center",
				justifyContent: "center"
			},
			spaced: {
				alignItems: "center",
				justifyContent: "space-between"
			},
			left: {
				alignItems: "center",
				justifyContent: "flex-start"
			},
			right: {
				alignItems: "center",
				justifyContent: "flex-end"
			},
			stretch: { alignItems: "stretch" },
			top: {
				alignItems: "flex-start",
				justifyContent: "center"
			},
			topLeft: {
				alignItems: "flex-start",
				justifyContent: "flex-start"
			},
			topRight: {
				alignItems: "flex-start",
				justifyContent: "flex-end"
			}
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/grid/hook.mjs
function getRuntime() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE) === hash) return true;
	return false;
}
function injectStyle(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument(targetDocument) {
	const runtime = getRuntime();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle(targetDocument, hash, css);
	return () => {
		const count = runtime.documents.get(targetDocument);
		if (count === void 0) return;
		if (count <= 1) {
			runtime.documents.delete(targetDocument);
			return;
		}
		runtime.documents.set(targetDocument, count - 1);
	};
}
function registerStyle(hash, css) {
	const runtime = getRuntime();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle(targetDocument, hash, css);
}
function toCSSValue(value) {
	return typeof value === "number" ? `${value}px` : value?.trim() || void 0;
}
function useGrid(props) {
	const { align, alignment, className, columnGap, columns = 2, gap = 3, isInline = false, justify, rowGap, rows, style, templateColumns, templateRows, ...otherProps } = useContextSystem(props, "Grid");
	const column = useResponsiveValue(Array.isArray(columns) ? columns : [columns]);
	const row = useResponsiveValue(Array.isArray(rows) ? rows : [rows]);
	const gridTemplateColumns = templateColumns || !!column && `repeat( ${column}, 1fr )`;
	const gridTemplateRows = templateRows || !!row && `repeat( ${row}, 1fr )`;
	const alignmentProps = getAlignmentProps(alignment);
	const values = {
		align: alignmentProps.alignItems ?? align,
		justify: alignmentProps.justifyContent ?? justify,
		"template-columns": gridTemplateColumns || void 0,
		"template-rows": gridTemplateRows || void 0,
		"row-gap": rowGap,
		"column-gap": columnGap
	};
	return {
		...otherProps,
		className: clsx(style_module_default.grid, {
			[style_module_default["is-inline"]]: isInline,
			[style_module_default["has-align"]]: !!values.align?.trim(),
			[style_module_default["has-justify"]]: !!values.justify?.trim(),
			[style_module_default["has-template-columns"]]: !!toCSSValue(values["template-columns"]),
			[style_module_default["has-template-rows"]]: !!toCSSValue(values["template-rows"])
		}, Object.entries(values).map(([property, value]) => {
			const keyword = typeof value === "string" ? value.trim().toLowerCase() : "";
			return CSS_WIDE_KEYWORDS.has(keyword) && style_module_default[`${property}-${keyword}`];
		}), className),
		style: {
			"--wp-components-grid-align": values.align,
			"--wp-components-grid-justify": values.justify,
			"--wp-components-grid-gap": gap,
			"--wp-components-grid-template-columns": toCSSValue(values["template-columns"]),
			"--wp-components-grid-template-rows": toCSSValue(values["template-rows"]),
			"--wp-components-grid-row-gap": toCSSValue(rowGap),
			"--wp-components-grid-column-gap": toCSSValue(columnGap),
			...style
		}
	};
}
var STYLE_HASH_ATTRIBUTE, style_module_default, CSS_WIDE_KEYWORDS;
function init_hook() {
	return (init_hook = __esmMin((() => {
		init_clsx();
		init_use_context_system();
		init_utils();
		init_use_responsive_value();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("79bac25858", "._631b7063b4047c89__grid{--wp-components-grid-align:initial;--wp-components-grid-justify:initial;--wp-components-grid-gap:initial;--wp-components-grid-template-columns:initial;--wp-components-grid-template-rows:initial;--wp-components-grid-row-gap:initial;--wp-components-grid-column-gap:initial;display:grid}._631b7063b4047c89__grid:not(:where(._51fa5e5688d538e7__row-gap-inherit,._3940112538797bb2__row-gap-initial,._9dc0e80dad95eb11__row-gap-unset,._964ec4132d3d0776__row-gap-revert,._9219888d7c4749d5__row-gap-revert-layer)){row-gap:var(--wp-components-grid-row-gap,calc(4px*var(--wp-components-grid-gap)))}._631b7063b4047c89__grid:not(:where(._149fd947497e8690__column-gap-inherit,.a018e74b0f04c517__column-gap-initial,.b1e45f9587eb70e5__column-gap-unset,._4da312511f64af94__column-gap-revert,.b51ead67217c210a__column-gap-revert-layer)){column-gap:var(--wp-components-grid-column-gap,calc(4px*var(--wp-components-grid-gap)))}._4cae76607d36422b__has-align:not(:where(._2c693b642b24e0d9__align-inherit,.fd4c5676ad7e83d4__align-initial,.c4c0cde44ab0ed21__align-unset,._8c23efb61db2f04e__align-revert,.c3adc4c41efa56d1__align-revert-layer)){align-items:var(--wp-components-grid-align)}._9bcd99517d001b4b__has-justify:not(:where(.a72d35ee0eda5e6b__justify-inherit,.d386403fd02ebc45__justify-initial,._7d60510a69e8ddf9__justify-unset,._857dfb6521d0cae3__justify-revert,._1537fff8402f1ca1__justify-revert-layer)){justify-content:var(--wp-components-grid-justify)}._983f7df07cd35a72__has-template-columns:not(:where(.df2216db1a717825__template-columns-inherit,._9016934ed273a0b8__template-columns-initial,._74966333f352d829__template-columns-unset,.b3ce45d005011688__template-columns-revert,._9ff0250b9bed5764__template-columns-revert-layer)){grid-template-columns:var(--wp-components-grid-template-columns)}._7e0fa0c081c20f6e__has-template-rows:not(:where(._10cfd24f62672d27__template-rows-inherit,.da1333be6b2af8c3__template-rows-initial,._919938d55c0cf234__template-rows-unset,.db40efe5796b7ffb__template-rows-revert,._1080cc5b99823c58__template-rows-revert-layer)){grid-template-rows:var(--wp-components-grid-template-rows)}.f4729d54fca65af1__is-inline{display:inline-grid;vertical-align:middle}._2c693b642b24e0d9__align-inherit{align-items:inherit}.fd4c5676ad7e83d4__align-initial{align-items:normal}.c4c0cde44ab0ed21__align-unset{align-items:unset}._8c23efb61db2f04e__align-revert{align-items:revert}.c3adc4c41efa56d1__align-revert-layer{align-items:revert-layer}.a72d35ee0eda5e6b__justify-inherit{justify-content:inherit}.d386403fd02ebc45__justify-initial{justify-content:normal}._7d60510a69e8ddf9__justify-unset{justify-content:unset}._857dfb6521d0cae3__justify-revert{justify-content:revert}._1537fff8402f1ca1__justify-revert-layer{justify-content:revert-layer}.df2216db1a717825__template-columns-inherit{grid-template-columns:inherit}._9016934ed273a0b8__template-columns-initial{grid-template-columns:none}._74966333f352d829__template-columns-unset{grid-template-columns:unset}.b3ce45d005011688__template-columns-revert{grid-template-columns:revert}._9ff0250b9bed5764__template-columns-revert-layer{grid-template-columns:revert-layer}._10cfd24f62672d27__template-rows-inherit{grid-template-rows:inherit}.da1333be6b2af8c3__template-rows-initial{grid-template-rows:none}._919938d55c0cf234__template-rows-unset{grid-template-rows:unset}.db40efe5796b7ffb__template-rows-revert{grid-template-rows:revert}._1080cc5b99823c58__template-rows-revert-layer{grid-template-rows:revert-layer}._51fa5e5688d538e7__row-gap-inherit{row-gap:inherit}._3940112538797bb2__row-gap-initial{row-gap:normal}._9dc0e80dad95eb11__row-gap-unset{row-gap:unset}._964ec4132d3d0776__row-gap-revert{row-gap:revert}._9219888d7c4749d5__row-gap-revert-layer{row-gap:revert-layer}._149fd947497e8690__column-gap-inherit{column-gap:inherit}.a018e74b0f04c517__column-gap-initial{column-gap:normal}.b1e45f9587eb70e5__column-gap-unset{column-gap:unset}._4da312511f64af94__column-gap-revert{column-gap:revert}.b51ead67217c210a__column-gap-revert-layer{column-gap:revert-layer}");
		style_module_default = {
			"grid": "_631b7063b4047c89__grid",
			"row-gap-inherit": "_51fa5e5688d538e7__row-gap-inherit",
			"row-gap-initial": "_3940112538797bb2__row-gap-initial",
			"row-gap-unset": "_9dc0e80dad95eb11__row-gap-unset",
			"row-gap-revert": "_964ec4132d3d0776__row-gap-revert",
			"row-gap-revert-layer": "_9219888d7c4749d5__row-gap-revert-layer",
			"column-gap-inherit": "_149fd947497e8690__column-gap-inherit",
			"column-gap-initial": "a018e74b0f04c517__column-gap-initial",
			"column-gap-unset": "b1e45f9587eb70e5__column-gap-unset",
			"column-gap-revert": "_4da312511f64af94__column-gap-revert",
			"column-gap-revert-layer": "b51ead67217c210a__column-gap-revert-layer",
			"has-align": "_4cae76607d36422b__has-align",
			"align-inherit": "_2c693b642b24e0d9__align-inherit",
			"align-initial": "fd4c5676ad7e83d4__align-initial",
			"align-unset": "c4c0cde44ab0ed21__align-unset",
			"align-revert": "_8c23efb61db2f04e__align-revert",
			"align-revert-layer": "c3adc4c41efa56d1__align-revert-layer",
			"has-justify": "_9bcd99517d001b4b__has-justify",
			"justify-inherit": "a72d35ee0eda5e6b__justify-inherit",
			"justify-initial": "d386403fd02ebc45__justify-initial",
			"justify-unset": "_7d60510a69e8ddf9__justify-unset",
			"justify-revert": "_857dfb6521d0cae3__justify-revert",
			"justify-revert-layer": "_1537fff8402f1ca1__justify-revert-layer",
			"has-template-columns": "_983f7df07cd35a72__has-template-columns",
			"template-columns-inherit": "df2216db1a717825__template-columns-inherit",
			"template-columns-initial": "_9016934ed273a0b8__template-columns-initial",
			"template-columns-unset": "_74966333f352d829__template-columns-unset",
			"template-columns-revert": "b3ce45d005011688__template-columns-revert",
			"template-columns-revert-layer": "_9ff0250b9bed5764__template-columns-revert-layer",
			"has-template-rows": "_7e0fa0c081c20f6e__has-template-rows",
			"template-rows-inherit": "_10cfd24f62672d27__template-rows-inherit",
			"template-rows-initial": "da1333be6b2af8c3__template-rows-initial",
			"template-rows-unset": "_919938d55c0cf234__template-rows-unset",
			"template-rows-revert": "db40efe5796b7ffb__template-rows-revert",
			"template-rows-revert-layer": "_1080cc5b99823c58__template-rows-revert-layer",
			"is-inline": "f4729d54fca65af1__is-inline"
		};
		CSS_WIDE_KEYWORDS = /* @__PURE__ */ new Set([
			"inherit",
			"initial",
			"unset",
			"revert",
			"revert-layer"
		]);
	})))();
}
//#endregion
//#region ../packages/components/build-module/grid/component.mjs
function UnconnectedGrid(props, forwardedRef) {
	const gridProps = useGrid(props);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(component_default$1, {
		...gridProps,
		ref: forwardedRef
	});
}
var import_jsx_runtime, Grid, component_default;
function init_component() {
	return (init_component = __esmMin((() => {
		init_context_connect();
		init_component$1();
		init_hook();
		import_jsx_runtime = require_jsx_runtime();
		Grid = contextConnect(UnconnectedGrid, "Grid");
		component_default = Grid;
	})))();
}
//#endregion
export { init_component as n, component_default as t };
