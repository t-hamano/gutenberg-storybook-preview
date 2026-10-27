import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { n as menu_default } from "./menu-NYLWxjb9.js";
import { i as contextConnectWithoutRef, n as useContextSystem, o as init_context_connect, t as init_use_context_system } from "./use-context-system-6z_jGcZR.js";
import { n as init_button, t as Button } from "./button-BO8bp-IJ.js";
import { n as init_dropdown, t as Dropdown } from "./dropdown-BtPElsmm.js";
import { n as init_menu$1, t as NavigableMenu } from "./menu-DHxrFlfL.js";
import { r as init_build_module } from "./library.story-CbQx3MQ6.js";
//#region ../packages/components/src/dropdown-menu/index.tsx
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
	const { children, className, controls, icon = menu_default, label, popoverProps, toggleProps, menuProps, disableOpenOnArrowDown = false, text, noIcons, open, defaultOpen, onToggle: onToggleProp, variant } = useContextSystem(dropdownMenuProps, "DropdownMenu");
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown, {
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
			const { as: Toggle = Button, ...restToggleProps } = toggleProps ?? {};
			const mergedToggleProps = mergeProps({ className: clsx("components-dropdown-menu__toggle", { "is-opened": isOpen }) }, restToggleProps);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toggle, {
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
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 112,
				columnNumber: 6
			}, this);
		},
		renderContent: (props) => {
			const mergedMenuProps = mergeProps({
				"aria-label": label,
				className: clsx("components-dropdown-menu__menu", { "no-icons": noIcons })
			}, menuProps);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigableMenu, {
				...mergedMenuProps,
				role: "menu",
				children: [isFunction(children) ? children(props) : null, controlSets?.flatMap((controlSet, indexOfSet) => controlSet.map((control, indexOfControl) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
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
				}, [indexOfSet, indexOfControl].join(), false, {
					fileName: _jsxFileName,
					lineNumber: 157,
					columnNumber: 9
				}, this)))]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 153,
				columnNumber: 6
			}, this);
		},
		open,
		defaultOpen,
		onToggle: onToggleProp
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 83,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, DropdownMenu;
function init_dropdown_menu() {
	return (init_dropdown_menu = __esmMin((() => {
		init_clsx();
		init_build_module();
		init_context_connect(), init_use_context_system();
		init_button();
		init_dropdown();
		init_menu$1();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/dropdown-menu/index.tsx";
		DropdownMenu = contextConnectWithoutRef(UnconnectedDropdownMenu, "DropdownMenu");
		try {
			DropdownMenu.__docgenInfo = {
				"description": "\nThe DropdownMenu displays a list of actions (each contained in a MenuItem,\nMenuItemsChoice, or MenuGroup) in a compact way. It appears in a Popover\nafter the user has interacted with an element (a button or icon) or when\nthey perform a specific action.\n\nWhen building for the Gutenberg repo, use `Menu` from `@wordpress/ui` instead.\nOtherwise, continue using `DropdownMenu` for now.\n\nRender a Dropdown Menu with a set of controls:\n\n```jsx\nimport { DropdownMenu } from '@wordpress/components';\nimport {\n	more,\n	arrowLeft,\n	arrowRight,\n	arrowUp,\n	arrowDown,\n} from '@wordpress/icons';\n\nconst MyDropdownMenu = () => (\n	<DropdownMenu\n		icon={ more }\n		label=\"Select a direction\"\n		controls={ [\n			{\n				title: 'Up',\n				icon: arrowUp,\n				onClick: () => console.log( 'up' ),\n			},\n			{\n				title: 'Right',\n				icon: arrowRight,\n				onClick: () => console.log( 'right' ),\n			},\n			{\n				title: 'Down',\n				icon: arrowDown,\n				onClick: () => console.log( 'down' ),\n			},\n			{\n				title: 'Left',\n				icon: arrowLeft,\n				onClick: () => console.log( 'left' ),\n			},\n		] }\n	/>\n);\n```\n\nAlternatively, specify a `children` function which returns elements valid for\nuse in a DropdownMenu: `MenuItem`, `MenuItemsChoice`, or `MenuGroup`.\n\n```jsx\nimport { DropdownMenu, MenuGroup, MenuItem } from '@wordpress/components';\nimport { more, arrowUp, arrowDown, trash } from '@wordpress/icons';\n\nconst MyDropdownMenu = () => (\n	<DropdownMenu icon={ more } label=\"Select a direction\">\n		{ ( { onClose } ) => (\n			<>\n				<MenuGroup>\n					<MenuItem icon={ arrowUp } onClick={ onClose }>\n						Move Up\n					</MenuItem>\n					<MenuItem icon={ arrowDown } onClick={ onClose }>\n						Move Down\n					</MenuItem>\n				</MenuGroup>\n				<MenuGroup>\n					<MenuItem icon={ trash } onClick={ onClose }>\n						Remove\n					</MenuItem>\n				</MenuGroup>\n			</>\n		) }\n	</DropdownMenu>\n);\n```",
				"displayName": "DropdownMenu",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/dropdown-menu/index.tsx",
				"methods": [],
				"props": {
					"icon": {
						"defaultValue": { "value": "\"menu\"" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The icon to be shown in the collapsed menu button.",
						"name": "icon",
						"required": false,
						"tags": {},
						"type": { "name": "IconType | null" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A human-readable label to present as accessibility text on the focused\ncollapsed menu button.",
						"name": "label",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A class name to apply to the dropdown menu's toggle element wrapper.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"popoverProps": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Properties of `popoverProps` object will be passed as props to the nested\n`Popover` component.\nUse this object to modify props available for the `Popover` component that\nare not already exposed in the `DropdownMenu` component, e.g.: the\ndirection in which the popover should open relative to its parent node\nset with `position` prop.",
						"name": "popoverProps",
						"required": false,
						"tags": {},
						"type": { "name": "Omit<Omit<Omit<WordPressComponentProps<PopoverProps, \"div\", false>, \"onDrag\" | \"onDragEnd\" | \"onDragStart\" | \"onAnimationStart\" | \"inherit\" | ... 52 more ... | \"whileTap\"> & Pick<...>, \"ref\">, \"children\">" }
					},
					"toggleProps": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Properties of `toggleProps` object will be passed as props to the nested\n`Button` component in the `renderToggle` implementation of the `Dropdown`\ncomponent used internally.\nUse this object to modify props available for the `Button` component that\nare not already exposed in the `DropdownMenu` component, e.g.: the tooltip\ntext displayed on hover set with `tooltip` prop.",
						"name": "toggleProps",
						"required": false,
						"tags": {},
						"type": { "name": "ToggleProps" }
					},
					"menuProps": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Properties of `menuProps` object will be passed as props to the nested\n`NavigableMenu` component in the `renderContent` implementation of the\n`Dropdown` component used internally.\nUse this object to modify props available for the `NavigableMenu`\ncomponent that are not already exposed in the `DropdownMenu` component,\ne.g.: the orientation of the menu set with `orientation` prop.",
						"name": "menuProps",
						"required": false,
						"tags": {},
						"type": { "name": "Omit<Partial<NavigableMenuProps>, \"children\">" }
					},
					"disableOpenOnArrowDown": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "In some contexts, the arrow down key used to open the dropdown menu might\nneed to be disabled—for example when that key is used to perform another\naction.",
						"name": "disableOpenOnArrowDown",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"text": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Text to display on the nested `Button` component in the `renderToggle`\nimplementation of the `Dropdown` component used internally.",
						"name": "text",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"noIcons": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether or not `no-icons` should be added to the menu's `className`.",
						"name": "noIcons",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A [function render prop](https://reactjs.org/docs/render-props.html#using-props-other-than-render)\nwhich should return an element or elements valid for use in a DropdownMenu:\n`MenuItem`, `MenuItemsChoice`, or `MenuGroup`. Its first argument is a\nprops object including the same values as given to a `Dropdown`'s\n`renderContent` (`isOpen`, `onToggle`, `onClose`).\n\nA valid DropdownMenu must specify a `controls` or `children` prop, or both.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "((callbackProps: DropdownCallbackProps) => ReactNode)" }
					},
					"controls": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An array or nested array of objects describing the options to be shown in\nthe expanded menu. Each object should include an `icon` Dashicon slug\nstring, a human-readable `title` string, `isDisabled` boolean flag, and\nan `onClick` function callback to invoke when the option is selected.\n\nA valid DropdownMenu must specify a `controls` or `children` prop, or both.",
						"name": "controls",
						"required": false,
						"tags": {},
						"type": { "name": "DropdownOption[] | DropdownOption[][]" }
					},
					"open": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The controlled open state of the dropdown menu.\nMust be used in conjunction with `onToggle`.",
						"name": "open",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"defaultOpen": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The open state of the dropdown menu when initially rendered.\nUse when you do not need to control its open state. It will be overridden\nby the `open` prop if it is specified on the component's first render.",
						"name": "defaultOpen",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onToggle": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown-menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A callback invoked when the state of the dropdown menu changes\nfrom open to closed and vice versa.",
						"name": "onToggle",
						"required": false,
						"tags": {},
						"type": { "name": "((willOpen: boolean) => void)" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_dropdown_menu as n, DropdownMenu as t };
