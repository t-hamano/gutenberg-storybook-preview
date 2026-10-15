import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-BrNgZl6E.js";
import { n as useControlledValue, t as init_use_controlled_value } from "./use-controlled-value-CCRFAPBO.js";
import { n as popover_default, t as init_popover } from "./popover-U8QQZ1i9.js";
//#region ../packages/components/build-module/dropdown/index.mjs
var import_jsx_runtime, UnconnectedDropdown, Dropdown, dropdown_default;
function init_dropdown() {
	return (init_dropdown = __esmMin((() => {
		init_clsx();
		init_react();
		init_use_merge_refs();
		init_build_module();
		init_context_connect(), init_use_context_system();
		init_use_controlled_value();
		init_popover();
		import_jsx_runtime = require_jsx_runtime();
		UnconnectedDropdown = (props, forwardedRef) => {
			const { renderContent, renderToggle, className, contentClassName, expandOnMobile, headerTitle, focusOnMount, popoverProps, onClose, onToggle, style, open, defaultOpen, position, variant } = useContextSystem(props, "Dropdown");
			if (position !== void 0) deprecated("`position` prop in wp.components.Dropdown", {
				since: "6.2",
				alternative: "`popoverProps.placement` prop",
				hint: "Note that the `position` prop will override any values passed through the `popoverProps.placement` prop."
			});
			const [fallbackPopoverAnchor, setFallbackPopoverAnchor] = (0, import_react.useState)(null);
			const containerRef = (0, import_react.useRef)(null);
			const [isOpen, setIsOpen] = useControlledValue({
				defaultValue: defaultOpen,
				value: open,
				onChange: onToggle
			});
			function closeIfFocusOutside() {
				if (!containerRef.current) return;
				const { ownerDocument } = containerRef.current;
				const dialog = ownerDocument?.activeElement?.closest("[role=\"dialog\"]");
				if (!containerRef.current.contains(ownerDocument.activeElement) && (!dialog || dialog.contains(containerRef.current))) close();
			}
			function close() {
				onClose?.();
				setIsOpen(false);
			}
			const args = {
				isOpen: !!isOpen,
				onToggle: () => setIsOpen(!isOpen),
				onClose: close
			};
			const popoverPropsHaveAnchor = !!popoverProps?.anchor || !!popoverProps?.anchorRef || !!popoverProps?.getAnchorRect || !!popoverProps?.anchorRect;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className,
				ref: useMergeRefs([
					containerRef,
					forwardedRef,
					setFallbackPopoverAnchor
				]),
				tabIndex: -1,
				style,
				children: [renderToggle(args), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default, {
					position,
					onClose: close,
					onFocusOutside: closeIfFocusOutside,
					expandOnMobile,
					headerTitle,
					focusOnMount,
					offset: 13,
					anchor: !popoverPropsHaveAnchor ? fallbackPopoverAnchor : void 0,
					variant,
					...popoverProps,
					className: clsx("components-dropdown__content", popoverProps?.className, contentClassName),
					children: renderContent(args)
				})]
			});
		};
		Dropdown = contextConnect(UnconnectedDropdown, "Dropdown");
		dropdown_default = Dropdown;
	})))();
}
//#endregion
export { init_dropdown as n, dropdown_default as t };
