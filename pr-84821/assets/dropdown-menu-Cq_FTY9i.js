import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as init_build_module, t as focus } from "./build-module-Bh_sM-WV.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { n as menu_default$1 } from "./menu-lO1-TVx9.js";
import { i as contextConnectWithoutRef, n as useContextSystem, o as init_context_connect, t as init_use_context_system } from "./use-context-system-DpkzZnKH.js";
import { n as button_default, r as init_button } from "./button-BxEkUQAF.js";
import { n as init_dropdown, t as dropdown_default } from "./dropdown-CT5qcp8z.js";
import { r as init_build_module$1 } from "./library.story-CFsmdbdz.js";
//#region ../packages/components/build-module/navigable-container/container.mjs
function cycleValue(value, total, offset) {
	const nextValue = value + offset;
	if (nextValue < 0) return total + nextValue;
	else if (nextValue >= total) return nextValue - total;
	return nextValue;
}
function getFocusableContext(container, target, tabbableOnly) {
	const focusables = (tabbableOnly ? focus.tabbable : focus.focusable).find(container);
	const index = focusables.indexOf(target);
	if (index > -1) return {
		index,
		target,
		focusables
	};
	return null;
}
function UnforwardedNavigableContainer({ children, stopNavigationEvents, eventToOffset, onNavigate = noop, onKeyDown, cycle = true, onlyBrowserTabstops, ...restProps }, ref) {
	const containerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const container = containerRef.current;
		if (!container) return;
		function handleKeyDown(event) {
			if (onKeyDown) onKeyDown(event);
			const offset = eventToOffset(event);
			if (offset !== void 0 && stopNavigationEvents) {
				event.stopImmediatePropagation();
				const targetRole = event.target?.getAttribute("role");
				if (!!targetRole && MENU_ITEM_ROLES.includes(targetRole)) event.preventDefault();
			}
			if (!offset) return;
			const activeElement = event.target?.ownerDocument?.activeElement;
			if (!activeElement) return;
			const context = getFocusableContext(container, activeElement, !!onlyBrowserTabstops);
			if (!context) return;
			const { index, focusables } = context;
			const nextIndex = cycle ? cycleValue(index, focusables.length, offset) : index + offset;
			if (nextIndex >= 0 && nextIndex < focusables.length) {
				focusables[nextIndex].focus();
				onNavigate(nextIndex, focusables[nextIndex]);
				if (event.code === "Tab") event.preventDefault();
			}
		}
		container.addEventListener("keydown", handleKeyDown);
		return () => {
			container.removeEventListener("keydown", handleKeyDown);
		};
	}, [
		onKeyDown,
		eventToOffset,
		stopNavigationEvents,
		cycle,
		onNavigate,
		onlyBrowserTabstops
	]);
	const mergedRef = useMergeRefs([containerRef, ref]);
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("div", {
		ref: mergedRef,
		...restProps,
		children
	});
}
var import_jsx_runtime$2, noop, MENU_ITEM_ROLES, NavigableContainer, container_default;
function init_container() {
	return (init_container = __esmMin((() => {
		init_react();
		init_use_merge_refs();
		init_build_module();
		import_jsx_runtime$2 = require_jsx_runtime();
		noop = () => {};
		MENU_ITEM_ROLES = [
			"menuitem",
			"menuitemradio",
			"menuitemcheckbox"
		];
		NavigableContainer = (0, import_react.forwardRef)(UnforwardedNavigableContainer);
		NavigableContainer.displayName = "NavigableContainer";
		container_default = NavigableContainer;
	})))();
}
//#endregion
//#region ../packages/components/build-module/navigable-container/menu.mjs
function UnforwardedNavigableMenu({ role = "menu", orientation = "vertical", ...rest }, ref) {
	const eventToOffset = (evt) => {
		const { code } = evt;
		let next = ["ArrowDown"];
		let previous = ["ArrowUp"];
		if (orientation === "horizontal") {
			next = ["ArrowRight"];
			previous = ["ArrowLeft"];
		}
		if (orientation === "both") {
			next = ["ArrowRight", "ArrowDown"];
			previous = ["ArrowLeft", "ArrowUp"];
		}
		if (next.includes(code)) return 1;
		else if (previous.includes(code)) return -1;
		else if ([
			"ArrowDown",
			"ArrowUp",
			"ArrowLeft",
			"ArrowRight"
		].includes(code)) return 0;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(container_default, {
		ref,
		stopNavigationEvents: true,
		onlyBrowserTabstops: false,
		role,
		"aria-orientation": role !== "presentation" && (orientation === "vertical" || orientation === "horizontal") ? orientation : void 0,
		eventToOffset,
		...rest
	});
}
var import_jsx_runtime$1, NavigableMenu, menu_default;
function init_menu() {
	return (init_menu = __esmMin((() => {
		init_react();
		init_container();
		import_jsx_runtime$1 = require_jsx_runtime();
		NavigableMenu = (0, import_react.forwardRef)(UnforwardedNavigableMenu);
		NavigableMenu.displayName = "NavigableMenu";
		menu_default = NavigableMenu;
	})))();
}
//#endregion
//#region ../packages/components/build-module/dropdown-menu/index.mjs
function mergeProps(defaultProps = {}, props = {}) {
	const mergedProps = {
		...defaultProps,
		...props
	};
	if (props.className && defaultProps.className) mergedProps.className = clsx(props.className, defaultProps.className);
	return mergedProps;
}
function isFunction(maybeFunc) {
	return typeof maybeFunc === "function";
}
function UnconnectedDropdownMenu(dropdownMenuProps) {
	const { children, className, controls, icon = menu_default$1, label, popoverProps, toggleProps, menuProps, disableOpenOnArrowDown = false, text, noIcons, open, defaultOpen, onToggle: onToggleProp, variant } = useContextSystem(dropdownMenuProps, "DropdownMenu");
	if (!controls?.length && !isFunction(children)) return null;
	let controlSets;
	if (controls?.length) {
		controlSets = controls;
		if (!Array.isArray(controlSets[0])) controlSets = [controls];
	}
	const mergedPopoverProps = mergeProps({
		className: "components-dropdown-menu__popover",
		variant
	}, popoverProps);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_default, {
		className,
		popoverProps: mergedPopoverProps,
		renderToggle: ({ isOpen, onToggle }) => {
			const openOnArrowDown = (event) => {
				if (disableOpenOnArrowDown || toggleProps?.disabled) return;
				if (!isOpen && event.code === "ArrowDown") {
					event.preventDefault();
					onToggle();
				}
			};
			const { as: Toggle = button_default, ...restToggleProps } = toggleProps ?? {};
			const mergedToggleProps = mergeProps({ className: clsx("components-dropdown-menu__toggle", { "is-opened": isOpen }) }, restToggleProps);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
				...mergedToggleProps,
				icon,
				onClick: ((event) => {
					onToggle();
					if (mergedToggleProps.onClick) mergedToggleProps.onClick(event);
				}),
				onKeyDown: ((event) => {
					openOnArrowDown(event);
					if (mergedToggleProps.onKeyDown) mergedToggleProps.onKeyDown(event);
				}),
				"aria-haspopup": "true",
				"aria-expanded": isOpen,
				label,
				text,
				showTooltip: toggleProps?.showTooltip ?? true,
				children: mergedToggleProps.children
			});
		},
		renderContent: (props) => {
			const mergedMenuProps = mergeProps({
				"aria-label": label,
				className: clsx("components-dropdown-menu__menu", { "no-icons": noIcons })
			}, menuProps);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(menu_default, {
				...mergedMenuProps,
				role: "menu",
				children: [isFunction(children) ? children(props) : null, controlSets?.flatMap((controlSet, indexOfSet) => controlSet.map((control, indexOfControl) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, {
					size: "compact",
					onClick: (event) => {
						event.stopPropagation();
						props.onClose();
						if (control.onClick) control.onClick();
					},
					className: clsx("components-dropdown-menu__menu-item", {
						"has-separator": indexOfSet > 0 && indexOfControl === 0,
						"is-active": control.isActive,
						"is-icon-only": !control.title
					}),
					icon: control.icon,
					label: control.label,
					"aria-checked": control.role === "menuitemcheckbox" || control.role === "menuitemradio" ? control.isActive : void 0,
					role: control.role === "menuitemcheckbox" || control.role === "menuitemradio" ? control.role : "menuitem",
					accessibleWhenDisabled: true,
					disabled: control.isDisabled,
					children: control.title
				}, [indexOfSet, indexOfControl].join())))]
			});
		},
		open,
		defaultOpen,
		onToggle: onToggleProp
	});
}
var import_jsx_runtime, DropdownMenu, dropdown_menu_default;
function init_dropdown_menu() {
	return (init_dropdown_menu = __esmMin((() => {
		init_clsx();
		init_build_module$1();
		init_context_connect(), init_use_context_system();
		init_button();
		init_dropdown();
		init_menu();
		import_jsx_runtime = require_jsx_runtime();
		DropdownMenu = contextConnectWithoutRef(UnconnectedDropdownMenu, "DropdownMenu");
		dropdown_menu_default = DropdownMenu;
	})))();
}
//#endregion
export { menu_default as i, init_dropdown_menu as n, init_menu as r, dropdown_menu_default as t };
