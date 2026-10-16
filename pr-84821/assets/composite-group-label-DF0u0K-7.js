import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { a as init_dist, f as useId, i as forwardRef, n as createHook, t as createElement, w as useWrapElement, y as useSafeLayoutEffect } from "./dist-DgYpwR44.js";
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/group/group-label-context.js
var import_react$2, GroupLabelContext;
function init_group_label_context() {
	return (init_group_label_context = __esmMin((() => {
		import_react$2 = require_react();
		GroupLabelContext = (0, import_react$2.createContext)(void 0);
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/group/group.js
var import_react$1, import_jsx_runtime, TagName$3, useGroup;
function init_group() {
	return (init_group = __esmMin((() => {
		init_group_label_context();
		init_dist();
		import_react$1 = require_react();
		import_jsx_runtime = require_jsx_runtime();
		TagName$3 = "div";
		useGroup = createHook(function useGroup(props) {
			const [labelId, setLabelId] = (0, import_react$1.useState)();
			props = useWrapElement(props, (element) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GroupLabelContext.Provider, {
				value: setLabelId,
				children: element
			}), []);
			props = {
				role: "group",
				"aria-labelledby": props["aria-label"] != null ? void 0 : labelId,
				...props
			};
			return props;
		});
		forwardRef(function Group(props) {
			const htmlProps = useGroup(props);
			return createElement(TagName$3, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/composite/composite-group.js
var TagName$2, useCompositeGroup, CompositeGroup;
function init_composite_group() {
	return (init_composite_group = __esmMin((() => {
		init_group();
		init_dist();
		TagName$2 = "div";
		useCompositeGroup = createHook(function useCompositeGroup({ store, ...props }) {
			props = useGroup(props);
			return props;
		});
		CompositeGroup = forwardRef(function CompositeGroup(props) {
			const htmlProps = useCompositeGroup(props);
			return createElement(TagName$2, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/group/group-label.js
var import_react, TagName$1, useGroupLabel;
function init_group_label() {
	return (init_group_label = __esmMin((() => {
		init_group_label_context();
		init_dist();
		import_react = require_react();
		TagName$1 = "div";
		useGroupLabel = createHook(function useGroupLabel(props) {
			const setLabelId = (0, import_react.useContext)(GroupLabelContext);
			const id = useId(props.id);
			useSafeLayoutEffect(() => {
				setLabelId?.(id);
				return () => setLabelId?.(void 0);
			}, [setLabelId, id]);
			props = {
				"aria-hidden": true,
				...props,
				id
			};
			return props;
		});
		forwardRef(function GroupLabel(props) {
			const htmlProps = useGroupLabel(props);
			return createElement(TagName$1, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/composite/composite-group-label.js
var TagName, useCompositeGroupLabel, CompositeGroupLabel;
function init_composite_group_label() {
	return (init_composite_group_label = __esmMin((() => {
		init_group_label();
		init_dist();
		TagName = "div";
		useCompositeGroupLabel = createHook(function useCompositeGroupLabel({ store, ...props }) {
			props = useGroupLabel(props);
			return props;
		});
		CompositeGroupLabel = forwardRef(function CompositeGroupLabel(props) {
			const htmlProps = useCompositeGroupLabel(props);
			return createElement(TagName, htmlProps);
		});
	})))();
}
//#endregion
export { init_composite_group as a, CompositeGroup as i, init_composite_group_label as n, useCompositeGroup as o, useCompositeGroupLabel as r, CompositeGroupLabel as t };
