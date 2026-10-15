import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as __, o as isRTL, t as init_build_module$1 } from "./build-module-v04us4E2.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { t as icon_default } from "./icon-DEDMwo2v.js";
import { t as check_default } from "./check-BrSqqlF_.js";
import { n as init_composite, t as Composite } from "./composite-CLFO7Vk_.js";
import { n as init_button, t as Button } from "./button-wsTfHPkm.js";
import { n as init_dropdown, t as Dropdown } from "./dropdown-BAlSpBg6.js";
import { r as init_build_module$2 } from "./library.story-DawnfKTW.js";
//#region ../packages/components/src/circular-option-picker/circular-option-picker-context.tsx
var CircularOptionPickerContext;
function init_circular_option_picker_context() {
	return (init_circular_option_picker_context = __esmMin((() => {
		init_react();
		CircularOptionPickerContext = (0, import_react.createContext)({});
		CircularOptionPickerContext.displayName = "CircularOptionPickerContext";
		try {
			CircularOptionPickerContext.__docgenInfo = {
				"description": "",
				"displayName": "CircularOptionPickerContext",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/circular-option-picker/circular-option-picker-context.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/circular-option-picker/circular-option-picker-option.tsx
function UnforwardedOptionAsButton(props, forwardedRef) {
	const { isPressed, label, ...additionalProps } = props;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Button, {
		__next40pxDefaultSize: true,
		...additionalProps,
		"aria-pressed": isPressed,
		ref: forwardedRef,
		label
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 22,
		columnNumber: 3
	}, this);
}
function UnforwardedOptionAsOption(props, forwardedRef) {
	const { id, isSelected, label, ...additionalProps } = props;
	const { setActiveId, activeId } = (0, import_react.useContext)(CircularOptionPickerContext);
	(0, import_react.useEffect)(() => {
		if (isSelected && !activeId) window.setTimeout(() => setActiveId?.(id), 0);
	}, [
		isSelected,
		setActiveId,
		activeId,
		id
	]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Composite.Item, {
		render: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Button, {
			__next40pxDefaultSize: true,
			...additionalProps,
			role: "option",
			"aria-selected": !!isSelected,
			ref: forwardedRef,
			label
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 59,
			columnNumber: 5
		}, this),
		id
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 57,
		columnNumber: 3
	}, this);
}
function Option({ className, isSelected, selectedIconProps = {}, tooltipText, ...additionalProps }) {
	const { baseId, presentation = "toggle-buttons" } = (0, import_react.useContext)(CircularOptionPickerContext);
	const commonProps = {
		id: use_instance_id_default(Option, baseId || "components-circular-option-picker__option"),
		className: "components-circular-option-picker__option",
		...additionalProps
	};
	const optionControl = presentation === "listbox" ? /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(OptionAsOption, {
		...commonProps,
		label: tooltipText,
		isSelected
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 100,
		columnNumber: 4
	}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(OptionAsButton, {
		...commonProps,
		label: tooltipText,
		isPressed: presentation === "toggle-buttons" ? !!isSelected : void 0
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 106,
		columnNumber: 4
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("div", {
		className: clsx(className, "components-circular-option-picker__option-wrapper"),
		children: [optionControl, presentation !== "command-buttons" && isSelected && /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(icon_default, {
			icon: check_default,
			...selectedIconProps
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 126,
			columnNumber: 5
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 118,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$3, _jsxFileName$3, OptionAsButton, OptionAsOption;
function init_circular_option_picker_option() {
	return (init_circular_option_picker_option = __esmMin((() => {
		init_clsx();
		init_use_instance_id();
		init_react();
		init_build_module$2();
		init_circular_option_picker_context();
		init_button();
		init_composite();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/circular-option-picker/circular-option-picker-option.tsx";
		OptionAsButton = (0, import_react.forwardRef)(UnforwardedOptionAsButton);
		OptionAsOption = (0, import_react.forwardRef)(UnforwardedOptionAsOption);
		try {
			Option.__docgenInfo = {
				"description": "",
				"displayName": "Option",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/circular-option-picker/circular-option-picker-option.tsx",
				"methods": [],
				"props": {
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
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the button is disabled. If `true`, this will force a `button` element\nto be rendered, even when an `href` is given.\n\nIn most cases, it is recommended to also set the `accessibleWhenDisabled` prop to `true`.",
						"name": "disabled",
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
							"raw": "\"top left\" | \"top right\" | \"middle left\" | \"middle right\" | \"bottom left\" | \"bottom right\" | \"top center\" | \"bottom center\" | PositionYAxis | \"middle center\" | ... 36 more ...",
							"value": [
								{ "value": "\"top\"" },
								{ "value": "\"middle\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"top left\"" },
								{ "value": "\"top right\"" },
								{ "value": "\"middle left\"" },
								{ "value": "\"middle right\"" },
								{ "value": "\"bottom left\"" },
								{ "value": "\"bottom right\"" },
								{ "value": "\"top center\"" },
								{ "value": "\"bottom center\"" },
								{ "value": "\"middle center\"" },
								{ "value": "\"top center left\"" },
								{ "value": "\"top center right\"" },
								{ "value": "\"top center top\"" },
								{ "value": "\"top center bottom\"" },
								{ "value": "\"top left left\"" },
								{ "value": "\"top left right\"" },
								{ "value": "\"top left top\"" },
								{ "value": "\"top left bottom\"" },
								{ "value": "\"top right left\"" },
								{ "value": "\"top right right\"" },
								{ "value": "\"top right top\"" },
								{ "value": "\"top right bottom\"" },
								{ "value": "\"middle center left\"" },
								{ "value": "\"middle center right\"" },
								{ "value": "\"middle center top\"" },
								{ "value": "\"middle center bottom\"" },
								{ "value": "\"middle left left\"" },
								{ "value": "\"middle left right\"" },
								{ "value": "\"middle left top\"" },
								{ "value": "\"middle left bottom\"" },
								{ "value": "\"middle right left\"" },
								{ "value": "\"middle right right\"" },
								{ "value": "\"middle right top\"" },
								{ "value": "\"middle right bottom\"" },
								{ "value": "\"bottom center left\"" },
								{ "value": "\"bottom center right\"" },
								{ "value": "\"bottom center top\"" },
								{ "value": "\"bottom center bottom\"" },
								{ "value": "\"bottom left left\"" },
								{ "value": "\"bottom left right\"" },
								{ "value": "\"bottom left top\"" },
								{ "value": "\"bottom left bottom\"" },
								{ "value": "\"bottom right left\"" },
								{ "value": "\"bottom right right\"" },
								{ "value": "\"bottom right top\"" },
								{ "value": "\"bottom right bottom\"" }
							]
						}
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"tooltipText": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "tooltipText",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"isSelected": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "isSelected",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"selectedIconProps": {
						"defaultValue": { "value": "{}" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "selectedIconProps",
						"required": false,
						"tags": {},
						"type": { "name": "Omit<IconProps & RefAttributes<Element>, \"size\" | \"icon\">" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/circular-option-picker/circular-option-picker-option-group.tsx
function OptionGroup({ className, options, ...additionalProps }) {
	const role = "aria-label" in additionalProps || "aria-labelledby" in additionalProps ? "group" : void 0;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("div", {
		...additionalProps,
		role,
		className: clsx("components-circular-option-picker__option-group", "components-circular-option-picker__swatches", className),
		children: options
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 15,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$2, _jsxFileName$2;
function init_circular_option_picker_option_group() {
	return (init_circular_option_picker_option_group = __esmMin((() => {
		init_clsx();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/circular-option-picker/circular-option-picker-option-group.tsx";
		try {
			OptionGroup.__docgenInfo = {
				"description": "",
				"displayName": "OptionGroup",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/circular-option-picker/circular-option-picker-option-group.tsx",
				"methods": [],
				"props": {
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"options": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "options",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/circular-option-picker/circular-option-picker-actions.tsx
function DropdownLinkAction({ buttonProps, className, dropdownProps, linkText }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Dropdown, {
		className: clsx("components-circular-option-picker__dropdown-link-action", className),
		renderToggle: ({ isOpen, onToggle }) => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Button, {
			"aria-expanded": isOpen,
			"aria-haspopup": "true",
			onClick: onToggle,
			variant: "link",
			...buttonProps,
			children: linkText
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 21,
			columnNumber: 5
		}, this),
		...dropdownProps
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 15,
		columnNumber: 3
	}, this);
}
function ButtonAction({ className, children, ...additionalProps }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Button, {
		__next40pxDefaultSize: true,
		className: clsx("components-circular-option-picker__clear", className),
		variant: "tertiary",
		...additionalProps,
		children
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 42,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_circular_option_picker_actions() {
	return (init_circular_option_picker_actions = __esmMin((() => {
		init_clsx();
		init_button();
		init_dropdown();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/circular-option-picker/circular-option-picker-actions.tsx";
		try {
			DropdownLinkAction.__docgenInfo = {
				"description": "",
				"displayName": "DropdownLinkAction",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/circular-option-picker/circular-option-picker-actions.tsx",
				"methods": [],
				"props": {
					"buttonProps": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "buttonProps",
						"required": false,
						"tags": {},
						"type": { "name": "Omit<WordPressComponentProps<ButtonAsButtonProps, \"button\", false>, \"children\">" }
					},
					"linkText": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "linkText",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"dropdownProps": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "dropdownProps",
						"required": true,
						"tags": {},
						"type": { "name": "Omit<DropdownProps, \"className\" | \"renderToggle\">" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			ButtonAction.__docgenInfo = {
				"description": "",
				"displayName": "ButtonAction",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/circular-option-picker/circular-option-picker-actions.tsx",
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
							"raw": "\"top left\" | \"top right\" | \"middle left\" | \"middle right\" | \"bottom left\" | \"bottom right\" | \"top center\" | \"bottom center\" | PositionYAxis | \"middle center\" | ... 36 more ...",
							"value": [
								{ "value": "\"top\"" },
								{ "value": "\"middle\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"top left\"" },
								{ "value": "\"top right\"" },
								{ "value": "\"middle left\"" },
								{ "value": "\"middle right\"" },
								{ "value": "\"bottom left\"" },
								{ "value": "\"bottom right\"" },
								{ "value": "\"top center\"" },
								{ "value": "\"bottom center\"" },
								{ "value": "\"middle center\"" },
								{ "value": "\"top center left\"" },
								{ "value": "\"top center right\"" },
								{ "value": "\"top center top\"" },
								{ "value": "\"top center bottom\"" },
								{ "value": "\"top left left\"" },
								{ "value": "\"top left right\"" },
								{ "value": "\"top left top\"" },
								{ "value": "\"top left bottom\"" },
								{ "value": "\"top right left\"" },
								{ "value": "\"top right right\"" },
								{ "value": "\"top right top\"" },
								{ "value": "\"top right bottom\"" },
								{ "value": "\"middle center left\"" },
								{ "value": "\"middle center right\"" },
								{ "value": "\"middle center top\"" },
								{ "value": "\"middle center bottom\"" },
								{ "value": "\"middle left left\"" },
								{ "value": "\"middle left right\"" },
								{ "value": "\"middle left top\"" },
								{ "value": "\"middle left bottom\"" },
								{ "value": "\"middle right left\"" },
								{ "value": "\"middle right right\"" },
								{ "value": "\"middle right top\"" },
								{ "value": "\"middle right bottom\"" },
								{ "value": "\"bottom center left\"" },
								{ "value": "\"bottom center right\"" },
								{ "value": "\"bottom center top\"" },
								{ "value": "\"bottom center bottom\"" },
								{ "value": "\"bottom left left\"" },
								{ "value": "\"bottom left right\"" },
								{ "value": "\"bottom left top\"" },
								{ "value": "\"bottom left bottom\"" },
								{ "value": "\"bottom right left\"" },
								{ "value": "\"bottom right right\"" },
								{ "value": "\"bottom right top\"" },
								{ "value": "\"bottom right bottom\"" }
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
						}],
						"description": "Whether the button is disabled. If `true`, this will force a `button` element\nto be rendered, even when an `href` is given.\n\nIn most cases, it is recommended to also set the `accessibleWhenDisabled` prop to `true`.",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/circular-option-picker/utils.tsx
function warnIfCircularOptionPickerAsButtonsIsSet(componentName, asButtons) {
	if (asButtons === void 0) return;
	deprecated(`\`asButtons\` prop in wp.components.${componentName}`, {
		since: "7.2",
		alternative: "`presentation`",
		hint: "`asButtons={ true }` maps to `presentation=\"toggle-buttons\"`. Explicit `presentation` takes precedence."
	});
}
function resolveCircularOptionPickerPresentation(presentation, asButtons) {
	return presentation ?? (asButtons ? "toggle-buttons" : "listbox");
}
/**
* Computes the common props for the CircularOptionPicker.
*/
function getComputeCircularOptionPickerCommonProps(asButtons, loop, ariaLabel, ariaLabelledby, presentation) {
	const resolvedPresentation = resolveCircularOptionPickerPresentation(presentation, asButtons);
	return {
		metaProps: resolvedPresentation === "listbox" ? {
			presentation: "listbox",
			loop
		} : { presentation: resolvedPresentation },
		labelProps: {
			"aria-labelledby": ariaLabelledby,
			"aria-label": ariaLabelledby ? void 0 : ariaLabel || __("Custom color picker")
		},
		resolvedPresentation
	};
}
function init_utils() {
	return (init_utils = __esmMin((() => {
		init_build_module$1();
		init_build_module();
		try {
			getComputeCircularOptionPickerCommonProps.__docgenInfo = {
				"description": "Computes the common props for the CircularOptionPicker.",
				"displayName": "getComputeCircularOptionPickerCommonProps",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/circular-option-picker/utils.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/circular-option-picker/circular-option-picker.tsx
/**
*`CircularOptionPicker` is a component that displays a set of options as circular buttons.
*
* ```jsx
* import { CircularOptionPicker } from '../circular-option-picker';
* import { useState } from '@wordpress/element';
*
* const Example = () => {
* 	const [ currentColor, setCurrentColor ] = useState();
* 	const colors = [
* 		{ color: '#f00', name: 'Red' },
* 		{ color: '#0f0', name: 'Green' },
* 		{ color: '#00f', name: 'Blue' },
* 	];
* 	const colorOptions = (
* 		<>
* 			{ colors.map( ( { color, name }, index ) => {
* 				return (
* 					<CircularOptionPicker.Option
* 						key={ `${ color }-${ index }` }
* 						tooltipText={ name }
* 						style={ { backgroundColor: color, color } }
* 						isSelected={ index === currentColor }
* 						onClick={ () => setCurrentColor( index ) }
* 					/>
* 				);
* 			} ) }
* 		</>
* 	);
* 	return (
* 		<CircularOptionPicker
* 				options={ colorOptions }
* 				actions={
* 					<CircularOptionPicker.ButtonAction
* 						onClick={ () => setCurrentColor( undefined ) }
* 					>
* 						{ 'Clear' }
* 					</CircularOptionPicker.ButtonAction>
* 				}
* 			/>
* 	);
* };
* ```
*/
function ListboxCircularOptionPicker(props) {
	const { actions, options, baseId, className, loop = true, children, ...additionalProps } = props;
	const [activeId, setActiveId] = (0, import_react.useState)(void 0);
	const contextValue = (0, import_react.useMemo)(() => ({
		baseId,
		activeId,
		setActiveId,
		presentation: "listbox"
	}), [
		baseId,
		activeId,
		setActiveId
	]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircularOptionPickerContext.Provider, {
			value: contextValue,
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite, {
					...additionalProps,
					id: baseId,
					focusLoop: loop,
					rtl: isRTL(),
					role: "listbox",
					activeId,
					setActiveId,
					children: options
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 98,
					columnNumber: 5
				}, this),
				children,
				actions
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 97,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 96,
		columnNumber: 3
	}, this);
}
function ButtonsCircularOptionPicker(props) {
	const { actions, options, children, baseId, presentation, ...additionalProps } = props;
	const contextValue = (0, import_react.useMemo)(() => ({
		baseId,
		presentation
	}), [baseId, presentation]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		...additionalProps,
		role: "group",
		id: baseId,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircularOptionPickerContext.Provider, {
			value: contextValue,
			children: [
				options,
				children,
				actions
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 138,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 137,
		columnNumber: 3
	}, this);
}
function CircularOptionPicker(props) {
	const { asButtons, presentation, loop, actions: actionsProp, options: optionsProp, children, className, ...additionalProps } = props;
	warnIfCircularOptionPickerAsButtonsIsSet("CircularOptionPicker", asButtons);
	const resolvedPresentation = resolveCircularOptionPickerPresentation(presentation, asButtons);
	const baseId = use_instance_id_default(CircularOptionPicker, "components-circular-option-picker", additionalProps.id);
	const actions = actionsProp ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "components-circular-option-picker__custom-clear-wrapper",
		children: actionsProp
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 174,
		columnNumber: 3
	}, this) : void 0;
	const options = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "components-circular-option-picker__swatches",
		children: optionsProp
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 180,
		columnNumber: 3
	}, this);
	const sharedProps = {
		baseId,
		className: clsx("components-circular-option-picker", className),
		actions,
		options,
		children
	};
	if (resolvedPresentation === "listbox") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListboxCircularOptionPicker, {
		...additionalProps,
		...sharedProps,
		loop
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 195,
		columnNumber: 4
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonsCircularOptionPicker, {
		...additionalProps,
		...sharedProps,
		presentation: resolvedPresentation
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 204,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName;
function init_circular_option_picker() {
	return (init_circular_option_picker = __esmMin((() => {
		init_clsx();
		init_use_instance_id();
		init_build_module$1();
		init_react();
		init_circular_option_picker_context();
		init_composite();
		init_circular_option_picker_option();
		init_circular_option_picker_option_group();
		init_circular_option_picker_actions();
		init_utils();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/circular-option-picker/circular-option-picker.tsx";
		CircularOptionPicker.Option = Option;
		CircularOptionPicker.OptionGroup = OptionGroup;
		CircularOptionPicker.ButtonAction = ButtonAction;
		CircularOptionPicker.DropdownLinkAction = DropdownLinkAction;
		CircularOptionPicker.displayName = "CircularOptionPicker";
		try {
			CircularOptionPicker.__docgenInfo = {
				"description": "",
				"displayName": "CircularOptionPicker",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/circular-option-picker/circular-option-picker.tsx",
				"methods": [],
				"props": {
					"id": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An ID to apply to the component.",
						"name": "id",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A CSS class to apply to the wrapper element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"actions": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The action(s) to be rendered after the options,\nsuch as a 'clear' button as seen in `ColorPalette`.\nUsually a `CircularOptionPicker.ButtonAction` or\n`CircularOptionPicker.DropdownLinkAction` component.",
						"name": "actions",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"options": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The options to be rendered, such as color swatches.\nUsually a `CircularOptionPicker.Option` component.",
						"name": "options",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The child elements.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"presentation": {
						"defaultValue": { "value": "'listbox'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "How the swatches behave and are exposed to assistive technology.\n\n- `listbox` uses one tab stop and arrow-key navigation, and exposes\n  selection with `aria-selected`.\n- `toggle-buttons` gives each swatch a tab stop and exposes selection with\n  `aria-pressed`.\n- `command-buttons` gives each swatch a tab stop and exposes no selection\n  state. Use it when swatches run commands such as opening an editor.",
						"name": "presentation",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"listbox\" | \"toggle-buttons\" | \"command-buttons\"",
							"value": [
								{ "value": "\"listbox\"" },
								{ "value": "\"toggle-buttons\"" },
								{ "value": "\"command-buttons\"" }
							]
						}
					},
					"asButtons": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the control should present as toggle buttons.\n@deprecated Use `presentation=\"toggle-buttons\"` instead. An explicit\n`presentation` takes precedence.\n@ignore",
						"name": "asButtons",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"loop": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Prevents keyboard interaction from wrapping around.\nOnly used with the `listbox` presentation.",
						"name": "loop",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"aria-labelledby": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The ID reference list of one or more elements that label the wrapper\nelement.",
						"name": "aria-labelledby",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"aria-label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The label for the wrapper element. Defaults to 'Custom color picker'. Not\nused if an 'aria-labelledby' is provided.",
						"name": "aria-label",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			CircularOptionPicker.Option.__docgenInfo = {
				"description": "",
				"displayName": "CircularOptionPicker.Option",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/circular-option-picker/circular-option-picker.tsx",
				"methods": [],
				"props": {
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
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the button is disabled. If `true`, this will force a `button` element\nto be rendered, even when an `href` is given.\n\nIn most cases, it is recommended to also set the `accessibleWhenDisabled` prop to `true`.",
						"name": "disabled",
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
							"raw": "\"top left\" | \"top right\" | \"middle left\" | \"middle right\" | \"bottom left\" | \"bottom right\" | \"top center\" | \"bottom center\" | PositionYAxis | \"middle center\" | ... 36 more ...",
							"value": [
								{ "value": "\"top\"" },
								{ "value": "\"middle\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"top left\"" },
								{ "value": "\"top right\"" },
								{ "value": "\"middle left\"" },
								{ "value": "\"middle right\"" },
								{ "value": "\"bottom left\"" },
								{ "value": "\"bottom right\"" },
								{ "value": "\"top center\"" },
								{ "value": "\"bottom center\"" },
								{ "value": "\"middle center\"" },
								{ "value": "\"top center left\"" },
								{ "value": "\"top center right\"" },
								{ "value": "\"top center top\"" },
								{ "value": "\"top center bottom\"" },
								{ "value": "\"top left left\"" },
								{ "value": "\"top left right\"" },
								{ "value": "\"top left top\"" },
								{ "value": "\"top left bottom\"" },
								{ "value": "\"top right left\"" },
								{ "value": "\"top right right\"" },
								{ "value": "\"top right top\"" },
								{ "value": "\"top right bottom\"" },
								{ "value": "\"middle center left\"" },
								{ "value": "\"middle center right\"" },
								{ "value": "\"middle center top\"" },
								{ "value": "\"middle center bottom\"" },
								{ "value": "\"middle left left\"" },
								{ "value": "\"middle left right\"" },
								{ "value": "\"middle left top\"" },
								{ "value": "\"middle left bottom\"" },
								{ "value": "\"middle right left\"" },
								{ "value": "\"middle right right\"" },
								{ "value": "\"middle right top\"" },
								{ "value": "\"middle right bottom\"" },
								{ "value": "\"bottom center left\"" },
								{ "value": "\"bottom center right\"" },
								{ "value": "\"bottom center top\"" },
								{ "value": "\"bottom center bottom\"" },
								{ "value": "\"bottom left left\"" },
								{ "value": "\"bottom left right\"" },
								{ "value": "\"bottom left top\"" },
								{ "value": "\"bottom left bottom\"" },
								{ "value": "\"bottom right left\"" },
								{ "value": "\"bottom right right\"" },
								{ "value": "\"bottom right top\"" },
								{ "value": "\"bottom right bottom\"" }
							]
						}
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"tooltipText": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "tooltipText",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"isSelected": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "isSelected",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"selectedIconProps": {
						"defaultValue": { "value": "{}" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "selectedIconProps",
						"required": false,
						"tags": {},
						"type": { "name": "Omit<IconProps & RefAttributes<Element>, \"size\" | \"icon\">" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			CircularOptionPicker.OptionGroup.__docgenInfo = {
				"description": "",
				"displayName": "CircularOptionPicker.OptionGroup",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/circular-option-picker/circular-option-picker.tsx",
				"methods": [],
				"props": {
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"options": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "options",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			CircularOptionPicker.ButtonAction.__docgenInfo = {
				"description": "",
				"displayName": "CircularOptionPicker.ButtonAction",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/circular-option-picker/circular-option-picker.tsx",
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
							"raw": "\"top left\" | \"top right\" | \"middle left\" | \"middle right\" | \"bottom left\" | \"bottom right\" | \"top center\" | \"bottom center\" | PositionYAxis | \"middle center\" | ... 36 more ...",
							"value": [
								{ "value": "\"top\"" },
								{ "value": "\"middle\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"top left\"" },
								{ "value": "\"top right\"" },
								{ "value": "\"middle left\"" },
								{ "value": "\"middle right\"" },
								{ "value": "\"bottom left\"" },
								{ "value": "\"bottom right\"" },
								{ "value": "\"top center\"" },
								{ "value": "\"bottom center\"" },
								{ "value": "\"middle center\"" },
								{ "value": "\"top center left\"" },
								{ "value": "\"top center right\"" },
								{ "value": "\"top center top\"" },
								{ "value": "\"top center bottom\"" },
								{ "value": "\"top left left\"" },
								{ "value": "\"top left right\"" },
								{ "value": "\"top left top\"" },
								{ "value": "\"top left bottom\"" },
								{ "value": "\"top right left\"" },
								{ "value": "\"top right right\"" },
								{ "value": "\"top right top\"" },
								{ "value": "\"top right bottom\"" },
								{ "value": "\"middle center left\"" },
								{ "value": "\"middle center right\"" },
								{ "value": "\"middle center top\"" },
								{ "value": "\"middle center bottom\"" },
								{ "value": "\"middle left left\"" },
								{ "value": "\"middle left right\"" },
								{ "value": "\"middle left top\"" },
								{ "value": "\"middle left bottom\"" },
								{ "value": "\"middle right left\"" },
								{ "value": "\"middle right right\"" },
								{ "value": "\"middle right top\"" },
								{ "value": "\"middle right bottom\"" },
								{ "value": "\"bottom center left\"" },
								{ "value": "\"bottom center right\"" },
								{ "value": "\"bottom center top\"" },
								{ "value": "\"bottom center bottom\"" },
								{ "value": "\"bottom left left\"" },
								{ "value": "\"bottom left right\"" },
								{ "value": "\"bottom left top\"" },
								{ "value": "\"bottom left bottom\"" },
								{ "value": "\"bottom right left\"" },
								{ "value": "\"bottom right right\"" },
								{ "value": "\"bottom right top\"" },
								{ "value": "\"bottom right bottom\"" }
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
						}],
						"description": "Whether the button is disabled. If `true`, this will force a `button` element\nto be rendered, even when an `href` is given.\n\nIn most cases, it is recommended to also set the `accessibleWhenDisabled` prop to `true`.",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			CircularOptionPicker.DropdownLinkAction.__docgenInfo = {
				"description": "",
				"displayName": "CircularOptionPicker.DropdownLinkAction",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/circular-option-picker/circular-option-picker.tsx",
				"methods": [],
				"props": {
					"buttonProps": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "buttonProps",
						"required": false,
						"tags": {},
						"type": { "name": "Omit<WordPressComponentProps<ButtonAsButtonProps, \"button\", false>, \"children\">" }
					},
					"linkText": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "linkText",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"dropdownProps": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "dropdownProps",
						"required": true,
						"tags": {},
						"type": { "name": "Omit<DropdownProps, \"className\" | \"renderToggle\">" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "className",
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
//#region ../packages/components/src/circular-option-picker/index.tsx
var circular_option_picker_default;
function init_circular_option_picker$1() {
	return (init_circular_option_picker$1 = __esmMin((() => {
		init_circular_option_picker();
		init_utils();
		circular_option_picker_default = CircularOptionPicker;
		try {
			CircularOptionPicker.Option.__docgenInfo = {
				"description": "",
				"displayName": "CircularOptionPicker.Option",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/circular-option-picker/index.tsx",
				"methods": [],
				"props": {
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
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the button is disabled. If `true`, this will force a `button` element\nto be rendered, even when an `href` is given.\n\nIn most cases, it is recommended to also set the `accessibleWhenDisabled` prop to `true`.",
						"name": "disabled",
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
							"raw": "\"top left\" | \"top right\" | \"middle left\" | \"middle right\" | \"bottom left\" | \"bottom right\" | \"top center\" | \"bottom center\" | PositionYAxis | \"middle center\" | ... 36 more ...",
							"value": [
								{ "value": "\"top\"" },
								{ "value": "\"middle\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"top left\"" },
								{ "value": "\"top right\"" },
								{ "value": "\"middle left\"" },
								{ "value": "\"middle right\"" },
								{ "value": "\"bottom left\"" },
								{ "value": "\"bottom right\"" },
								{ "value": "\"top center\"" },
								{ "value": "\"bottom center\"" },
								{ "value": "\"middle center\"" },
								{ "value": "\"top center left\"" },
								{ "value": "\"top center right\"" },
								{ "value": "\"top center top\"" },
								{ "value": "\"top center bottom\"" },
								{ "value": "\"top left left\"" },
								{ "value": "\"top left right\"" },
								{ "value": "\"top left top\"" },
								{ "value": "\"top left bottom\"" },
								{ "value": "\"top right left\"" },
								{ "value": "\"top right right\"" },
								{ "value": "\"top right top\"" },
								{ "value": "\"top right bottom\"" },
								{ "value": "\"middle center left\"" },
								{ "value": "\"middle center right\"" },
								{ "value": "\"middle center top\"" },
								{ "value": "\"middle center bottom\"" },
								{ "value": "\"middle left left\"" },
								{ "value": "\"middle left right\"" },
								{ "value": "\"middle left top\"" },
								{ "value": "\"middle left bottom\"" },
								{ "value": "\"middle right left\"" },
								{ "value": "\"middle right right\"" },
								{ "value": "\"middle right top\"" },
								{ "value": "\"middle right bottom\"" },
								{ "value": "\"bottom center left\"" },
								{ "value": "\"bottom center right\"" },
								{ "value": "\"bottom center top\"" },
								{ "value": "\"bottom center bottom\"" },
								{ "value": "\"bottom left left\"" },
								{ "value": "\"bottom left right\"" },
								{ "value": "\"bottom left top\"" },
								{ "value": "\"bottom left bottom\"" },
								{ "value": "\"bottom right left\"" },
								{ "value": "\"bottom right right\"" },
								{ "value": "\"bottom right top\"" },
								{ "value": "\"bottom right bottom\"" }
							]
						}
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"tooltipText": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "tooltipText",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"isSelected": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "isSelected",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"selectedIconProps": {
						"defaultValue": { "value": "{}" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "selectedIconProps",
						"required": false,
						"tags": {},
						"type": { "name": "Omit<IconProps & RefAttributes<Element>, \"size\" | \"icon\">" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			CircularOptionPicker.OptionGroup.__docgenInfo = {
				"description": "",
				"displayName": "CircularOptionPicker.OptionGroup",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/circular-option-picker/index.tsx",
				"methods": [],
				"props": {
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"options": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "options",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			CircularOptionPicker.ButtonAction.__docgenInfo = {
				"description": "",
				"displayName": "CircularOptionPicker.ButtonAction",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/circular-option-picker/index.tsx",
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
							"raw": "\"top left\" | \"top right\" | \"middle left\" | \"middle right\" | \"bottom left\" | \"bottom right\" | \"top center\" | \"bottom center\" | PositionYAxis | \"middle center\" | ... 36 more ...",
							"value": [
								{ "value": "\"top\"" },
								{ "value": "\"middle\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"top left\"" },
								{ "value": "\"top right\"" },
								{ "value": "\"middle left\"" },
								{ "value": "\"middle right\"" },
								{ "value": "\"bottom left\"" },
								{ "value": "\"bottom right\"" },
								{ "value": "\"top center\"" },
								{ "value": "\"bottom center\"" },
								{ "value": "\"middle center\"" },
								{ "value": "\"top center left\"" },
								{ "value": "\"top center right\"" },
								{ "value": "\"top center top\"" },
								{ "value": "\"top center bottom\"" },
								{ "value": "\"top left left\"" },
								{ "value": "\"top left right\"" },
								{ "value": "\"top left top\"" },
								{ "value": "\"top left bottom\"" },
								{ "value": "\"top right left\"" },
								{ "value": "\"top right right\"" },
								{ "value": "\"top right top\"" },
								{ "value": "\"top right bottom\"" },
								{ "value": "\"middle center left\"" },
								{ "value": "\"middle center right\"" },
								{ "value": "\"middle center top\"" },
								{ "value": "\"middle center bottom\"" },
								{ "value": "\"middle left left\"" },
								{ "value": "\"middle left right\"" },
								{ "value": "\"middle left top\"" },
								{ "value": "\"middle left bottom\"" },
								{ "value": "\"middle right left\"" },
								{ "value": "\"middle right right\"" },
								{ "value": "\"middle right top\"" },
								{ "value": "\"middle right bottom\"" },
								{ "value": "\"bottom center left\"" },
								{ "value": "\"bottom center right\"" },
								{ "value": "\"bottom center top\"" },
								{ "value": "\"bottom center bottom\"" },
								{ "value": "\"bottom left left\"" },
								{ "value": "\"bottom left right\"" },
								{ "value": "\"bottom left top\"" },
								{ "value": "\"bottom left bottom\"" },
								{ "value": "\"bottom right left\"" },
								{ "value": "\"bottom right right\"" },
								{ "value": "\"bottom right top\"" },
								{ "value": "\"bottom right bottom\"" }
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
						}],
						"description": "Whether the button is disabled. If `true`, this will force a `button` element\nto be rendered, even when an `href` is given.\n\nIn most cases, it is recommended to also set the `accessibleWhenDisabled` prop to `true`.",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			CircularOptionPicker.DropdownLinkAction.__docgenInfo = {
				"description": "",
				"displayName": "CircularOptionPicker.DropdownLinkAction",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/circular-option-picker/index.tsx",
				"methods": [],
				"props": {
					"buttonProps": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "buttonProps",
						"required": false,
						"tags": {},
						"type": { "name": "Omit<WordPressComponentProps<ButtonAsButtonProps, \"button\", false>, \"children\">" }
					},
					"linkText": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "linkText",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"dropdownProps": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "dropdownProps",
						"required": true,
						"tags": {},
						"type": { "name": "Omit<DropdownProps, \"className\" | \"renderToggle\">" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/circular-option-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "className",
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
export { warnIfCircularOptionPickerAsButtonsIsSet as a, init_utils as i, init_circular_option_picker$1 as n, getComputeCircularOptionPickerCommonProps as r, circular_option_picker_default as t };
