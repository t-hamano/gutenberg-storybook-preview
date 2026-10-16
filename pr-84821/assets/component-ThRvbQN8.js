import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { l as init_values, u as isValueDefined } from "./hook-Qs2bSUH_.js";
import { a as hasConnectNamespace, n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-DpkzZnKH.js";
import { n as init_component$1, t as component_default$1 } from "./component-CFOx0tK5.js";
import { c as useFlex, n as init_component$2, s as init_hook$1, t as component_default$2 } from "./component-2hv2PPn7.js";
//#region ../packages/components/build-module/h-stack/utils.mjs
function getAlignmentProps(alignment, direction = "row") {
	if (!isValueDefined(alignment)) return {};
	const props = direction === "column" ? V_ALIGNMENTS : H_ALIGNMENTS;
	return alignment in props ? props[alignment] : { align: alignment };
}
var H_ALIGNMENTS, V_ALIGNMENTS;
function init_utils() {
	return (init_utils = __esmMin((() => {
		init_values();
		H_ALIGNMENTS = {
			bottom: {
				align: "flex-end",
				justify: "center"
			},
			bottomLeft: {
				align: "flex-end",
				justify: "flex-start"
			},
			bottomRight: {
				align: "flex-end",
				justify: "flex-end"
			},
			center: {
				align: "center",
				justify: "center"
			},
			edge: {
				align: "center",
				justify: "space-between"
			},
			left: {
				align: "center",
				justify: "flex-start"
			},
			right: {
				align: "center",
				justify: "flex-end"
			},
			stretch: { align: "stretch" },
			top: {
				align: "flex-start",
				justify: "center"
			},
			topLeft: {
				align: "flex-start",
				justify: "flex-start"
			},
			topRight: {
				align: "flex-start",
				justify: "flex-end"
			}
		};
		V_ALIGNMENTS = {
			bottom: {
				justify: "flex-end",
				align: "center"
			},
			bottomLeft: {
				justify: "flex-end",
				align: "flex-start"
			},
			bottomRight: {
				justify: "flex-end",
				align: "flex-end"
			},
			center: {
				justify: "center",
				align: "center"
			},
			edge: {
				justify: "space-between",
				align: "center"
			},
			left: {
				justify: "center",
				align: "flex-start"
			},
			right: {
				justify: "center",
				align: "flex-end"
			},
			stretch: { align: "stretch" },
			top: {
				justify: "flex-start",
				align: "center"
			},
			topLeft: {
				justify: "flex-start",
				align: "flex-start"
			},
			topRight: {
				justify: "flex-start",
				align: "flex-end"
			}
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/utils/get-valid-children.mjs
function getValidChildren(children) {
	if (typeof children === "string") return [children];
	return import_react.Children.toArray(children).filter((child) => (0, import_react.isValidElement)(child));
}
function init_get_valid_children() {
	return (init_get_valid_children = __esmMin((() => {
		init_react();
	})))();
}
//#endregion
//#region ../packages/components/build-module/h-stack/hook.mjs
function useHStack(props) {
	const { alignment = "edge", children, direction, spacing = 2, ...otherProps } = useContextSystem(props, "HStack");
	const align = getAlignmentProps(alignment, direction);
	const propsForFlex = {
		children: getValidChildren(children).map((child, index) => {
			if (hasConnectNamespace(child, ["Spacer"])) {
				const childElement = child;
				const _key = childElement.key || `hstack-${index}`;
				return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(component_default$2, {
					isBlock: true,
					...childElement.props
				}, _key);
			}
			return child;
		}),
		direction,
		justify: "center",
		...align,
		...otherProps,
		gap: spacing
	};
	const { isColumn, ...flexProps } = useFlex(propsForFlex);
	return flexProps;
}
var import_jsx_runtime$1;
function init_hook() {
	return (init_hook = __esmMin((() => {
		init_context_connect(), init_use_context_system();
		init_component$2(), init_hook$1();
		init_utils();
		init_get_valid_children();
		import_jsx_runtime$1 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../packages/components/build-module/h-stack/component.mjs
function UnconnectedHStack(props, forwardedRef) {
	const hStackProps = useHStack(props);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(component_default$1, {
		...hStackProps,
		ref: forwardedRef
	});
}
var import_jsx_runtime, HStack, component_default;
function init_component() {
	return (init_component = __esmMin((() => {
		init_context_connect();
		init_component$1();
		init_hook();
		import_jsx_runtime = require_jsx_runtime();
		HStack = contextConnect(UnconnectedHStack, "HStack");
		component_default = HStack;
	})))();
}
//#endregion
export { useHStack as i, init_component as n, init_hook as r, component_default as t };
