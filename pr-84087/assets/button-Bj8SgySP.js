import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { a as init_utils, n as tooltip_default, s as positionToPlacement, t as init_tooltip } from "./tooltip-nD89te0a.js";
import { n as init_component, t as component_default } from "./component-CutCA7Si.js";
import { n as init_icon, t as icon_default } from "./icon-oSwa7eHF.js";
//#region ../packages/components/build-module/button/index.mjs
function useDeprecatedProps({ __experimentalIsFocusable, isDefault, isPrimary, isSecondary, isTertiary, isLink, isPressed, isSmall, size, variant, describedBy, ...otherProps }) {
	let computedSize = size;
	let computedVariant = variant;
	const newProps = {
		accessibleWhenDisabled: __experimentalIsFocusable,
		"aria-pressed": isPressed,
		description: describedBy
	};
	if (isSmall) computedSize ??= "small";
	if (isPrimary) computedVariant ??= "primary";
	if (isTertiary) computedVariant ??= "tertiary";
	if (isSecondary) computedVariant ??= "secondary";
	if (isDefault) {
		deprecated("wp.components.Button `isDefault` prop", {
			since: "5.4",
			alternative: "variant=\"secondary\""
		});
		computedVariant ??= "secondary";
	}
	if (isLink) computedVariant ??= "link";
	return {
		...newProps,
		...otherProps,
		size: computedSize,
		variant: computedVariant
	};
}
var import_jsx_runtime, disabledEventsOnDisabledButton, hasRenderableChildren, Button, button_default;
function init_button() {
	return (init_button = __esmMin((() => {
		init_clsx();
		init_build_module();
		init_react();
		init_use_instance_id();
		init_tooltip();
		init_icon();
		init_component();
		init_utils();
		import_jsx_runtime = require_jsx_runtime();
		disabledEventsOnDisabledButton = ["onMouseDown", "onClick"];
		hasRenderableChildren = (children) => import_react.Children.toArray(children).some((child) => {
			if (!(0, import_react.isValidElement)(child)) return child !== "";
			if (child.type === import_react.Fragment) return hasRenderableChildren(child.props.children);
			return child.props.className !== "components-tooltip";
		});
		Button = (0, import_react.forwardRef)(function UnforwardedButton(props, ref) {
			const { __next40pxDefaultSize, accessibleWhenDisabled, isBusy, isDestructive, className, disabled, icon, iconPosition = "left", iconSize, showTooltip, tooltipPosition, shortcut, label, children, size = "default", text, variant, description, ...buttonOrAnchorProps } = useDeprecatedProps(props);
			const { href, target, "aria-checked": ariaChecked, "aria-pressed": ariaPressed, "aria-selected": ariaSelected, ...additionalProps } = "href" in buttonOrAnchorProps ? buttonOrAnchorProps : {
				href: void 0,
				target: void 0,
				...buttonOrAnchorProps
			};
			const instanceId = use_instance_id_default(Button, "components-button__description");
			const classes = clsx("components-button", className, {
				"is-next-40px-default-size": __next40pxDefaultSize,
				"is-secondary": variant === "secondary",
				"is-primary": variant === "primary",
				"is-small": size === "small",
				"is-compact": size === "compact",
				"is-tertiary": variant === "tertiary",
				"is-pressed": [
					true,
					"true",
					"mixed"
				].includes(ariaPressed),
				"is-pressed-mixed": ariaPressed === "mixed",
				"is-busy": isBusy,
				"is-link": variant === "link",
				"is-destructive": isDestructive,
				"has-text": !!icon && (text || hasRenderableChildren(children)),
				"has-icon": !!icon,
				"has-icon-right": iconPosition === "right"
			});
			const trulyDisabled = disabled && !accessibleWhenDisabled;
			const Tag = href !== void 0 && !disabled ? "a" : "button";
			const buttonProps = Tag === "button" ? {
				type: "button",
				disabled: trulyDisabled,
				"aria-checked": ariaChecked,
				"aria-pressed": ariaPressed,
				"aria-selected": ariaSelected
			} : {};
			const anchorProps = Tag === "a" ? {
				href,
				target
			} : {};
			const disableEventProps = {};
			if (disabled && accessibleWhenDisabled) {
				buttonProps["aria-disabled"] = true;
				anchorProps["aria-disabled"] = true;
				for (const disabledEvent of disabledEventsOnDisabledButton) disableEventProps[disabledEvent] = (event) => {
					if (event) {
						event.stopPropagation();
						event.preventDefault();
					}
				};
			}
			const shouldShowTooltip = !trulyDisabled && (showTooltip && !!label || !!shortcut || !!label && !children?.length && false !== showTooltip);
			const descriptionId = description ? instanceId : void 0;
			const describedById = additionalProps["aria-describedby"] || descriptionId;
			const commonProps = {
				className: classes,
				"aria-label": additionalProps["aria-label"] || label,
				"aria-describedby": describedById,
				ref
			};
			const elementChildren = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				icon && iconPosition === "left" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_default, {
					icon,
					size: iconSize
				}),
				text && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: text }),
				children,
				icon && iconPosition === "right" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_default, {
					icon,
					size: iconSize
				})
			] });
			const element = Tag === "a" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				...anchorProps,
				...additionalProps,
				...disableEventProps,
				...commonProps,
				children: elementChildren
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				...buttonProps,
				...additionalProps,
				...disableEventProps,
				...commonProps,
				children: elementChildren
			});
			const tooltipProps = shouldShowTooltip ? {
				text: children?.length && description ? description : label,
				shortcut,
				placement: tooltipPosition && positionToPlacement(tooltipPosition)
			} : {};
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default, {
				...tooltipProps,
				children: element
			}), description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(component_default, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				id: descriptionId,
				children: description
			}) })] });
		});
		button_default = Button;
	})))();
}
//#endregion
export { button_default as n, init_button as r, Button as t };
