import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { a as init_utils, n as init_tooltip, s as positionToPlacement, t as Tooltip } from "./tooltip-C9B-2Nhf.js";
import { n as init_component, t as VisuallyHidden } from "./component-DtWxfX7z.js";
import { n as init_icon, t as Icon } from "./icon-Bh2AlMz6.js";
//#region ../packages/components/src/button/index.tsx
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
var import_jsx_dev_runtime, _jsxFileName, disabledEventsOnDisabledButton, hasRenderableChildren, Button;
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
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/button/index.tsx";
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
			const elementChildren = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
				icon && iconPosition === "left" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
					icon,
					size: iconSize
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 261,
					columnNumber: 5
				}, this),
				text && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: text }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 263,
					columnNumber: 14
				}, this),
				children,
				icon && iconPosition === "right" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
					icon,
					size: iconSize
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 266,
					columnNumber: 5
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 259,
				columnNumber: 3
			}, this);
			const element = Tag === "a" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
				...anchorProps,
				...additionalProps,
				...disableEventProps,
				...commonProps,
				children: elementChildren
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 273,
				columnNumber: 4
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				...buttonProps,
				...additionalProps,
				...disableEventProps,
				...commonProps,
				children: elementChildren
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 282,
				columnNumber: 4
			}, this);
			const tooltipProps = shouldShowTooltip ? {
				text: children?.length && description ? description : label,
				shortcut,
				placement: tooltipPosition && positionToPlacement(tooltipPosition)
			} : {};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip, {
				...tooltipProps,
				children: element
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 313,
				columnNumber: 4
			}, this), description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				id: descriptionId,
				children: description
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 316,
				columnNumber: 6
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 315,
				columnNumber: 5
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 312,
				columnNumber: 3
			}, this);
		});
		try {
			Button.__docgenInfo = {
				"description": "Lets users take actions and make choices with a single click or tap.\n\n```jsx\nimport { Button } from '@wordpress/components';\nconst Mybutton = () => (\n  <Button\n    variant=\"primary\"\n    onClick={ handleClick }\n  >\n    Click here\n  </Button>\n);\n```",
				"displayName": "Button",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/button/index.tsx",
				"methods": [],
				"props": {
					"__next40pxDefaultSize": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting into the larger default height that will become the\ndefault size in a future version.",
						"name": "__next40pxDefaultSize",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"accessibleWhenDisabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to keep the button focusable when disabled.\n\nIn most cases, it is recommended to set this to `true`. Disabling a control without maintaining focusability\ncan cause accessibility issues, by hiding their presence from screen reader users,\nor by preventing focus from returning to a trigger element.\n\nLearn more about the [focusability of disabled controls](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#focusabilityofdisabledcontrols)\nin the WAI-ARIA Authoring Practices Guide.",
						"name": "accessibleWhenDisabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The button's children.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"description": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A visually hidden accessible description for the button.",
						"name": "description",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"icon": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided, renders an Icon component inside the button.",
						"name": "icon",
						"required": false,
						"tags": {},
						"type": { "name": "IconType | null" }
					},
					"iconPosition": {
						"defaultValue": { "value": "'left'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided with `icon`, sets the position of icon relative to the `text`.",
						"name": "iconPosition",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"left\" | \"right\"",
							"value": [{ "value": "\"left\"" }, { "value": "\"right\"" }]
						}
					},
					"iconSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided with `icon`, sets the icon size.\nPlease refer to the Icon component for more details regarding\nthe default value of its `size` prop.",
						"name": "iconSize",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"isBusy": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Indicates activity while a action is being performed.",
						"name": "isBusy",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isDestructive": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders a red text-based button style to indicate destructive behavior.",
						"name": "isDestructive",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isPressed": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders a pressed button style.",
						"name": "isPressed",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Sets the `aria-label` of the component, if none is provided.\nSets the Tooltip content if `showTooltip` is provided.",
						"name": "label",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"shortcut": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided with `showTooltip`, appends the Shortcut label to the tooltip content.\nIf an object is provided, it should contain `display` and `ariaLabel` keys.",
						"name": "shortcut",
						"required": false,
						"tags": {},
						"type": { "name": "string | { display: string; ariaLabel: string; }" }
					},
					"showTooltip": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided, renders a Tooltip component for the button.",
						"name": "showTooltip",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"size": {
						"defaultValue": { "value": "'default'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The size of the button.\n\n- `'default'`: For normal text-label buttons, unless it is a toggle button.\n- `'compact'`: For toggle buttons, icon buttons, and buttons when used in context of either.\n- `'small'`: For icon buttons associated with more advanced or auxiliary features.\n\nIf the deprecated `isSmall` prop is also defined, this prop will take precedence.",
						"name": "size",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"small\" | \"default\" | \"compact\"",
							"value": [
								{ "value": "\"small\"" },
								{ "value": "\"default\"" },
								{ "value": "\"compact\"" }
							]
						}
					},
					"text": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided, displays the given text inside the button. If the button contains children elements, the text is displayed before them.",
						"name": "text",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"tooltipPosition": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided with `showTooltip`, sets the position of the tooltip.\nPlease refer to the Tooltip component for more details regarding the defaults.",
						"name": "tooltipPosition",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"top left\" | \"top right\" | \"middle left\" | \"middle right\" | \"bottom left\" | \"bottom right\" | PositionYAxis | \"middle center\" | \"bottom center\" | \"top center\" | ... 36 more ...",
							"value": [
								{ "value": "\"middle\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"top\"" },
								{ "value": "\"top left\"" },
								{ "value": "\"top right\"" },
								{ "value": "\"middle left\"" },
								{ "value": "\"middle right\"" },
								{ "value": "\"bottom left\"" },
								{ "value": "\"bottom right\"" },
								{ "value": "\"middle center\"" },
								{ "value": "\"bottom center\"" },
								{ "value": "\"top center\"" },
								{ "value": "\"middle center left\"" },
								{ "value": "\"middle center right\"" },
								{ "value": "\"middle center bottom\"" },
								{ "value": "\"middle center top\"" },
								{ "value": "\"middle left left\"" },
								{ "value": "\"middle left right\"" },
								{ "value": "\"middle left bottom\"" },
								{ "value": "\"middle left top\"" },
								{ "value": "\"middle right left\"" },
								{ "value": "\"middle right right\"" },
								{ "value": "\"middle right bottom\"" },
								{ "value": "\"middle right top\"" },
								{ "value": "\"bottom center left\"" },
								{ "value": "\"bottom center right\"" },
								{ "value": "\"bottom center bottom\"" },
								{ "value": "\"bottom center top\"" },
								{ "value": "\"bottom left left\"" },
								{ "value": "\"bottom left right\"" },
								{ "value": "\"bottom left bottom\"" },
								{ "value": "\"bottom left top\"" },
								{ "value": "\"bottom right left\"" },
								{ "value": "\"bottom right right\"" },
								{ "value": "\"bottom right bottom\"" },
								{ "value": "\"bottom right top\"" },
								{ "value": "\"top center left\"" },
								{ "value": "\"top center right\"" },
								{ "value": "\"top center bottom\"" },
								{ "value": "\"top center top\"" },
								{ "value": "\"top left left\"" },
								{ "value": "\"top left right\"" },
								{ "value": "\"top left bottom\"" },
								{ "value": "\"top left top\"" },
								{ "value": "\"top right left\"" },
								{ "value": "\"top right right\"" },
								{ "value": "\"top right bottom\"" },
								{ "value": "\"top right top\"" }
							]
						}
					},
					"variant": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Specifies the button's style.\n\nThe accepted values are:\n\n1. `'primary'` (the primary button styles)\n2. `'secondary'` (the default button styles)\n3. `'tertiary'` (the text-based button styles)\n4. `'link'` (the link button styles)",
						"name": "variant",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"link\" | \"primary\" | \"secondary\" | \"tertiary\"",
							"value": [
								{ "value": "\"link\"" },
								{ "value": "\"primary\"" },
								{ "value": "\"secondary\"" },
								{ "value": "\"tertiary\"" }
							]
						}
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the button is disabled. If `true`, this will force a `button` element\nto be rendered, even when an `href` is given.\n\nIn most cases, it is recommended to also set the `accessibleWhenDisabled` prop to `true`.",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__experimentalIsFocusable": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to keep the button focusable when disabled.\n@deprecated Use the `accessibleWhenDisabled` prop instead.\n@ignore",
						"name": "__experimentalIsFocusable",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isDefault": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Gives the button a default style.\n@deprecated Use the `'secondary'` value on the `variant` prop instead.\n@ignore",
						"name": "isDefault",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isLink": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Gives the button a link style.\n@deprecated Use the `'link'` value on the `variant` prop instead.\n@ignore",
						"name": "isLink",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isPrimary": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Gives the button a primary style.\n@deprecated Use the `'primary'` value on the `variant` prop instead.\n@ignore",
						"name": "isPrimary",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isSecondary": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Gives the button a default style.\n@deprecated Use the `'secondary'` value on the `variant` prop instead.\n@ignore",
						"name": "isSecondary",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isTertiary": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Gives the button a text-based style.\n@deprecated Use the `'tertiary'` value on the `variant` prop instead.\n@ignore",
						"name": "isTertiary",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isSmall": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Decreases the size of the button.\n@deprecated Use the `'small'` value on the `size` prop instead.\n@ignore",
						"name": "isSmall",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"describedBy": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A visually hidden accessible description for the button.\n@deprecated Use the `description` prop instead.\n@ignore",
						"name": "describedBy",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"href": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided, renders `a` instead of `button`.",
						"name": "href",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"target": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided with `href`, sets the `target` attribute to the `a`.",
						"name": "target",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_button as n, Button as t };
