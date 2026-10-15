import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { E as useCommand, O as withDefaultButtonType, T as init_command } from "./composite-item-BEBg8wzM.js";
import { K as getPopupRole, _ as useMetadataProps, a as init_dist, at as isButton, b as useTagName, g as useMergeRefs, i as forwardRef, l as useBooleanEvent, n as createHook, nt as init_dist$1, rt as invariant, t as createElement, u as useEvent, w as useWrapElement } from "./dist-DgYpwR44.js";
import { i as init_dist$2, s as useStoreState } from "./CDh2UhnG-rjC-Q4Bk.js";
import { A as useDisclosureProviderContext, D as init_dialog_context, O as useDialogProviderContext, _ as PopoverScopedContextProvider, b as usePopoverProviderContext, k as init_disclosure_context, v as init_popover_context } from "./popover-store-DxNhIkVj.js";
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-b-7fAlfpqRg2Jp6O33r7Tg/node_modules/@ariakit/react-components/dist/button/button.js
var import_react$3, TagName$4, useButton;
function init_button() {
	return (init_button = __esmMin((() => {
		init_command();
		init_dist();
		init_dist$1();
		import_react$3 = require_react();
		TagName$4 = "button";
		useButton = createHook(function useButton(props) {
			const ref = (0, import_react$3.useRef)(null);
			const tagName = useTagName(ref, TagName$4);
			const [isNativeButton, setIsNativeButton] = (0, import_react$3.useState)(() => !!tagName && isButton({
				tagName,
				type: props.type
			}));
			(0, import_react$3.useEffect)(() => {
				if (!ref.current) return;
				setIsNativeButton(isButton(ref.current));
			}, []);
			props = {
				role: !isNativeButton && tagName !== "a" ? "button" : void 0,
				...props,
				ref: useMergeRefs(ref, props.ref)
			};
			props = useCommand(props);
			return props;
		});
		forwardRef(function Button(props) {
			const htmlProps = useButton(withDefaultButtonType(props));
			return createElement(TagName$4, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-b-7fAlfpqRg2Jp6O33r7Tg/node_modules/@ariakit/react-components/dist/disclosure/disclosure.js
var import_react$2, TagName$3, symbol, useDisclosure;
function init_disclosure() {
	return (init_disclosure = __esmMin((() => {
		init_button();
		init_disclosure_context();
		init_dist();
		init_dist$1();
		import_react$2 = require_react();
		init_dist$2();
		TagName$3 = "button";
		symbol = Symbol("disclosure");
		useDisclosure = createHook(function useDisclosure({ store, toggleOnClick = true, ...props }) {
			const context = useDisclosureProviderContext();
			store = store || context;
			invariant(store, "Disclosure must receive a `store` prop or be wrapped in a DisclosureProvider component.");
			const ref = (0, import_react$2.useRef)(null);
			const [expanded, setExpanded] = (0, import_react$2.useState)(false);
			const disclosureElement = useStoreState(store, "disclosureElement");
			const open = useStoreState(store, "open");
			const setDisclosureElement = (0, import_react$2.useCallback)((element) => {
				const previousElement = ref.current;
				ref.current = element;
				if (element) {
					if (!(store?.getState().disclosureElement)?.isConnected) store.setDisclosureElement(element);
					return;
				}
				if (store?.getState().disclosureElement !== previousElement) return;
				store.setDisclosureElement(null);
			}, [store]);
			(0, import_react$2.useEffect)(() => {
				let isCurrentDisclosure = disclosureElement === ref.current;
				if (!disclosureElement?.isConnected) {
					store?.setDisclosureElement(ref.current);
					isCurrentDisclosure = true;
				}
				setExpanded(open && isCurrentDisclosure);
			}, [
				disclosureElement,
				store,
				open
			]);
			const onClickProp = props.onClick;
			const toggleOnClickProp = useBooleanEvent(toggleOnClick);
			const [isDuplicate, metadataProps] = useMetadataProps(props, symbol, true);
			const onClick = useEvent((event) => {
				onClickProp?.(event);
				if (event.defaultPrevented) return;
				if (isDuplicate) return;
				if (!toggleOnClickProp(event)) return;
				store?.setDisclosureElement(event.currentTarget);
				store?.toggle();
			});
			props = {
				"aria-expanded": expanded,
				"aria-controls": useStoreState(store, "contentElement")?.id,
				...metadataProps,
				...props,
				ref: useMergeRefs(setDisclosureElement, props.ref),
				onClick
			};
			props = useButton(props);
			return props;
		});
		forwardRef(function Disclosure(props) {
			const htmlProps = useDisclosure(withDefaultButtonType(props));
			return createElement(TagName$3, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-b-7fAlfpqRg2Jp6O33r7Tg/node_modules/@ariakit/react-components/dist/dialog/dialog-disclosure.js
var TagName$2, useDialogDisclosure;
function init_dialog_disclosure() {
	return (init_dialog_disclosure = __esmMin((() => {
		init_dialog_context();
		init_disclosure();
		init_dist();
		init_dist$1();
		init_dist$2();
		TagName$2 = "button";
		useDialogDisclosure = createHook(function useDialogDisclosure({ store, ...props }) {
			const context = useDialogProviderContext();
			store = store || context;
			invariant(store, "DialogDisclosure must receive a `store` prop or be wrapped in a DialogProvider component.");
			const contentElement = useStoreState(store, "contentElement");
			props = {
				"aria-haspopup": getPopupRole(contentElement, "dialog"),
				...props
			};
			props = useDisclosure({
				store,
				...props
			});
			return props;
		});
		forwardRef(function DialogDisclosure(props) {
			const htmlProps = useDialogDisclosure(withDefaultButtonType(props));
			return createElement(TagName$2, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-b-7fAlfpqRg2Jp6O33r7Tg/node_modules/@ariakit/react-components/dist/popover/popover-disclosure.js
var import_jsx_runtime$1, TagName$1, usePopoverDisclosure;
function init_popover_disclosure() {
	return (init_popover_disclosure = __esmMin((() => {
		init_popover_context();
		init_dialog_disclosure();
		init_dist();
		init_dist$1();
		import_jsx_runtime$1 = require_jsx_runtime();
		TagName$1 = "button";
		usePopoverDisclosure = createHook(function usePopoverDisclosure({ store, ...props }) {
			const context = usePopoverProviderContext();
			store = store || context;
			invariant(store, "PopoverDisclosure must receive a `store` prop or be wrapped in a PopoverProvider component.");
			props = useWrapElement(props, (element) => /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(PopoverScopedContextProvider, {
				value: store,
				children: element
			}), [store]);
			props = useDialogDisclosure({
				store,
				...props
			});
			return props;
		});
		forwardRef(function PopoverDisclosure(props) {
			const htmlProps = usePopoverDisclosure(withDefaultButtonType(props));
			return createElement(TagName$1, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-b-7fAlfpqRg2Jp6O33r7Tg/node_modules/@ariakit/react-components/dist/checkbox/checkbox-checked-context.js
var import_react$1, CheckboxCheckedContext;
function init_checkbox_checked_context() {
	return (init_checkbox_checked_context = __esmMin((() => {
		import_react$1 = require_react();
		CheckboxCheckedContext = (0, import_react$1.createContext)(false);
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-b-7fAlfpqRg2Jp6O33r7Tg/node_modules/@ariakit/react-components/dist/checkbox/checkbox-check.js
function getChildren(props) {
	if (props.checked) return props.children || checkmark;
	return null;
}
var import_react, import_jsx_runtime, TagName, checkmark, useCheckboxCheck;
function init_checkbox_check() {
	return (init_checkbox_check = __esmMin((() => {
		init_checkbox_checked_context();
		init_dist();
		import_react = require_react();
		import_jsx_runtime = require_jsx_runtime();
		TagName = "span";
		checkmark = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			display: "block",
			fill: "none",
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: 1.5,
			viewBox: "0 0 16 16",
			height: "1em",
			width: "1em",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "4,8 7,12 12,4" })
		});
		useCheckboxCheck = createHook(function useCheckboxCheck({ store, checked, ...props }) {
			const context = (0, import_react.useContext)(CheckboxCheckedContext);
			checked = checked ?? context;
			const children = getChildren({
				checked,
				children: props.children
			});
			props = {
				"aria-hidden": true,
				...props,
				children,
				style: {
					width: "1em",
					height: "1em",
					pointerEvents: "none",
					...props.style
				}
			};
			return props;
		});
		forwardRef(function CheckboxCheck(props) {
			const htmlProps = useCheckboxCheck(props);
			return createElement(TagName, htmlProps);
		});
	})))();
}
//#endregion
export { init_popover_disclosure as a, init_checkbox_checked_context as i, useCheckboxCheck as n, usePopoverDisclosure as o, CheckboxCheckedContext as r, init_checkbox_check as t };
