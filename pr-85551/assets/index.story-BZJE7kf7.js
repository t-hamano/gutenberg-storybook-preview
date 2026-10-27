import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { n as init_react, t as import_react$1 } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useEvent, t as init_use_event } from "./use-event-BTRhHipl.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { i as _x, n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { r as speak, t as init_build_module$1 } from "./build-module-DsAeWnrG.js";
import { t as check_default } from "./check-BK5allCs.js";
import { n as more_vertical_default } from "./more-vertical-CuarrvSu.js";
import { n as plus_default } from "./plus-Dg5_68lB.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-6z_jGcZR.js";
import { n as init_component$3, t as View } from "./component-CkY7eURU.js";
import { n as init_component$4, t as HStack } from "./component--i8sR2uB.js";
import { i as init_component$5, r as ToggleGroupControl } from "./component-CBkIK7Xd.js";
import { n as init_component$6, t as ToggleGroupControlOption } from "./component-DovGk6Y8.js";
import { i as init_slot_fill, r as createSlotFill, t as Provider } from "./slot-fill-BCh4-8zG.js";
import { n as init_component$7, t as Heading } from "./component-B-Ol-wDZ.js";
import { n as init_unit_control, t as UnitControl } from "./unit-control-DIbnSUmK.js";
import { n as init_component$8, t as Grid } from "./component-4m82em3s.js";
import { n as init_dropdown_menu, t as DropdownMenu } from "./dropdown-menu-DnJlab3U.js";
import { i as init_menu_item, n as init_menu_group, r as MenuItem, t as MenuGroup } from "./menu-group-Bld7aM7S.js";
import { n as init_panel, t as Panel } from "./panel-CrRqJkFM.js";
import { r as init_build_module$2 } from "./library.story-CbQx3MQ6.js";
//#region ../packages/components/src/tools-panel/style.module.scss
var style_module_default$1;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		style_module_default$1 = {
			"tools-panel": "_tools-panel_1es3k_46",
			"tools-panel-with-inner-wrapper": "_tools-panel-with-inner-wrapper_1es3k_52",
			"tools-panel-hidden-inner-wrapper": "_tools-panel-hidden-inner-wrapper_1es3k_60",
			"tools-panel-header": "_tools-panel-header_1es3k_64",
			"tools-panel-heading": "_tools-panel-heading_1es3k_78",
			"tools-panel-item": "_tools-panel-item_1es3k_84",
			"tools-panel-item-placeholder": "_tools-panel-item-placeholder_1es3k_104",
			"dropdown-menu": "_dropdown-menu_1es3k_108",
			"reset-label": "_reset-label_1es3k_112",
			"default-controls-item": "_default-controls-item_1es3k_121"
		};
	})))();
}
//#endregion
//#region ../packages/components/src/tools-panel/context.ts
var noop$1, ToolsPanelContext, useToolsPanelContext;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		noop$1 = () => void 0;
		ToolsPanelContext = (0, import_react$1.createContext)({
			menuItems: {
				default: {},
				optional: {}
			},
			hasMenuItems: false,
			isResetting: false,
			shouldRenderPlaceholderItems: false,
			registerPanelItem: noop$1,
			deregisterPanelItem: noop$1,
			flagItemCustomization: noop$1,
			registerResetAllFilter: noop$1,
			deregisterResetAllFilter: noop$1,
			areAllOptionalControlsHidden: true
		});
		ToolsPanelContext.displayName = "ToolsPanelContext";
		useToolsPanelContext = () => (0, import_react$1.useContext)(ToolsPanelContext);
	})))();
}
//#endregion
//#region ../packages/components/src/tools-panel/tools-panel-header/hook.ts
function useToolsPanelHeader(props) {
	const { className, headingLevel = 2, ...otherProps } = useContextSystem(props, "ToolsPanelHeader");
	const { menuItems, hasMenuItems, areAllOptionalControlsHidden } = useToolsPanelContext();
	return {
		...otherProps,
		areAllOptionalControlsHidden,
		defaultControlsItemClassName: style_module_default$1["default-controls-item"],
		dropdownMenuClassName: style_module_default$1["dropdown-menu"],
		hasMenuItems,
		headingClassName: style_module_default$1["tools-panel-heading"],
		headingLevel,
		menuItems,
		className: clsx(style_module_default$1["tools-panel-header"], className)
	};
}
function init_hook() {
	return (init_hook = __esmMin((() => {
		init_clsx();
		init_style_module();
		init_context();
		init_use_context_system();
	})))();
}
//#endregion
//#region ../packages/components/src/tools-panel/tools-panel-header/component.tsx
var import_jsx_dev_runtime$3, _jsxFileName$3, DefaultControlsGroup, OptionalControlsGroup, ToolsPanelHeader, ConnectedToolsPanelHeader;
function init_component() {
	return (init_component = __esmMin((() => {
		init_build_module$1();
		init_build_module$2();
		init_build_module();
		init_dropdown_menu();
		init_menu_group();
		init_menu_item();
		init_component$4();
		init_component$7();
		init_hook();
		init_style_module();
		init_context_connect();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tools-panel/tools-panel-header/component.tsx";
		DefaultControlsGroup = ({ itemClassName, items, toggleItem }) => {
			if (!items.length) return null;
			const resetSuffix = /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("span", {
				"aria-hidden": true,
				className: style_module_default$1["reset-label"],
				children: __("Reset")
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 29,
				columnNumber: 3
			}, void 0);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(import_jsx_dev_runtime$3.Fragment, { children: items.map(([label, hasValue]) => {
				if (hasValue) return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(MenuItem, {
					className: itemClassName,
					role: "menuitem",
					label: sprintf(__("%s, reset to default"), label),
					onClick: () => {
						toggleItem(label);
						speak(sprintf(__("%s reset to default"), label), "assertive");
					},
					suffix: resetSuffix,
					children: label
				}, label, false, {
					fileName: _jsxFileName$3,
					lineNumber: 39,
					columnNumber: 7
				}, void 0);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(MenuItem, {
					icon: check_default,
					className: itemClassName,
					role: "menuitemcheckbox",
					isSelected: true,
					"aria-disabled": true,
					children: label
				}, label, false, {
					fileName: _jsxFileName$3,
					lineNumber: 67,
					columnNumber: 6
				}, void 0);
			}) }, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 35,
				columnNumber: 3
			}, void 0);
		};
		OptionalControlsGroup = ({ items, toggleItem }) => {
			if (!items.length) return null;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(import_jsx_dev_runtime$3.Fragment, { children: items.map(([label, isSelected]) => {
				const itemLabel = isSelected ? sprintf(__("%s, hide and reset"), label) : sprintf(_x("%s, show", "input control"), label);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(MenuItem, {
					icon: isSelected ? check_default : null,
					isSelected,
					label: itemLabel,
					onClick: () => {
						if (isSelected) speak(sprintf(__("%s hidden and reset to default"), label), "assertive");
						else speak(sprintf(__("%s is now visible"), label), "assertive");
						toggleItem(label);
					},
					role: "menuitemcheckbox",
					children: label
				}, label, false, {
					fileName: _jsxFileName$3,
					lineNumber: 107,
					columnNumber: 6
				}, void 0);
			}) }, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 92,
				columnNumber: 3
			}, void 0);
		};
		ToolsPanelHeader = (props, forwardedRef) => {
			const { areAllOptionalControlsHidden, defaultControlsItemClassName, dropdownMenuClassName, hasMenuItems, headingClassName, headingLevel = 2, label: labelText, menuItems, resetAll, toggleItem, dropdownMenuProps, ...headerProps } = useToolsPanelHeader(props);
			if (!labelText) return null;
			const defaultItems = Object.entries(menuItems?.default || {});
			const optionalItems = Object.entries(menuItems?.optional || {});
			const dropDownMenuIcon = areAllOptionalControlsHidden ? plus_default : more_vertical_default;
			const dropDownMenuLabelText = sprintf(_x("%s options", "Button label to reveal tool panel options"), labelText);
			const dropdownMenuDescriptionText = areAllOptionalControlsHidden ? __("All options are currently hidden") : void 0;
			const canResetAll = [...defaultItems, ...optionalItems].some(([, isSelected]) => isSelected);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(HStack, {
				...headerProps,
				ref: forwardedRef,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Heading, {
					level: headingLevel,
					className: headingClassName,
					children: labelText
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 185,
					columnNumber: 4
				}, void 0), hasMenuItems && /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(DropdownMenu, {
					...dropdownMenuProps,
					icon: dropDownMenuIcon,
					label: dropDownMenuLabelText,
					menuProps: { className: dropdownMenuClassName },
					toggleProps: {
						size: "small",
						description: dropdownMenuDescriptionText
					},
					children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(import_jsx_dev_runtime$3.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(MenuGroup, {
						label: labelText,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(DefaultControlsGroup, {
							items: defaultItems,
							toggleItem,
							itemClassName: defaultControlsItemClassName
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 202,
							columnNumber: 9
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(OptionalControlsGroup, {
							items: optionalItems,
							toggleItem
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 209,
							columnNumber: 9
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 201,
						columnNumber: 8
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(MenuGroup, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(MenuItem, {
						"aria-disabled": !canResetAll,
						variant: "tertiary",
						onClick: () => {
							if (canResetAll) {
								resetAll();
								speak(__("All options reset"), "assertive");
							}
						},
						children: __("Reset all")
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 215,
						columnNumber: 9
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 214,
						columnNumber: 8
					}, void 0)] }, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 200,
						columnNumber: 7
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 189,
					columnNumber: 5
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 184,
				columnNumber: 3
			}, void 0);
		};
		ConnectedToolsPanelHeader = contextConnect(ToolsPanelHeader, "ToolsPanelHeader");
	})))();
}
//#endregion
//#region ../packages/components/src/tools-panel/tools-panel/hook.ts
function emptyState() {
	return {
		panelItems: [],
		menuItemOrder: [],
		menuItemValues: {}
	};
}
function panelItemsReducer(panelItems, action) {
	switch (action.type) {
		case "REGISTER_PANEL": {
			const existingIndex = panelItems.findIndex((item) => item.label === action.item.label);
			const newItems = [...panelItems];
			if (existingIndex !== -1) newItems.splice(existingIndex, 1);
			newItems.push(action.item);
			return newItems;
		}
		case "UNREGISTER_PANEL": {
			const index = panelItems.findIndex((item) => item.label === action.label);
			if (index === -1) return panelItems;
			if (action.item && panelItems[index] !== action.item) return panelItems;
			const newItems = [...panelItems];
			newItems.splice(index, 1);
			return newItems;
		}
		default: return panelItems;
	}
}
function menuItemOrderReducer(menuItemOrder, action) {
	switch (action.type) {
		case "REGISTER_PANEL":
			if (menuItemOrder.includes(action.item.label)) return menuItemOrder;
			return [...menuItemOrder, action.item.label];
		default: return menuItemOrder;
	}
}
function menuItemValuesReducer(state, action) {
	const values = state.menuItemValues;
	switch (action.type) {
		case "REGISTER_PANEL": {
			if (!values.hasOwnProperty(action.item.label)) return values;
			const { [action.item.label]: unusedValue, ...rest } = values;
			return rest;
		}
		case "UPDATE_VALUE":
			if (values[action.label] === action.value) return values;
			return {
				...values,
				[action.label]: action.value
			};
		case "TOGGLE_VALUE": {
			const item = state.panelItems.find(({ label }) => label === action.label);
			if (!item) return values;
			const current = values[action.label] ?? getSeedValue(item);
			return {
				...values,
				[action.label]: !current
			};
		}
		case "RESET_ALL": {
			const hidden = state.panelItems.filter((item) => !item.isShownByDefault && values[item.label] !== false);
			if (!hidden.length) return values;
			const next = { ...values };
			hidden.forEach(({ label }) => {
				next[label] = false;
			});
			return next;
		}
		default: return values;
	}
}
function panelReducer(state, action) {
	const panelItems = panelItemsReducer(state.panelItems, action);
	const menuItemOrder = menuItemOrderReducer(state.menuItemOrder, action);
	const menuItemValues = menuItemValuesReducer({
		...state,
		panelItems
	}, action);
	if (panelItems === state.panelItems && menuItemOrder === state.menuItemOrder && menuItemValues === state.menuItemValues) return state;
	return {
		panelItems,
		menuItemOrder,
		menuItemValues
	};
}
function resetAllFiltersReducer(filters, action) {
	switch (action.type) {
		case "REGISTER": return [...filters, action.filter];
		case "UNREGISTER": return filters.filter((f) => f !== action.filter);
		default: return filters;
	}
}
function useToolsPanel(props) {
	const { className, headingLevel = 2, resetAll, panelId, hasInnerWrapper = false, shouldRenderPlaceholderItems = false, __experimentalFirstVisibleItemClass, __experimentalLastVisibleItemClass, ...otherProps } = useContextSystem(props, "ToolsPanel");
	const [isResetting, setIsResetting] = (0, import_react$1.useState)(false);
	(0, import_react$1.useEffect)(() => {
		if (isResetting) setIsResetting(false);
	}, [isResetting]);
	const [{ panelItems, menuItemOrder, menuItemValues }, panelDispatch] = (0, import_react$1.useReducer)(panelReducer, void 0, emptyState);
	const [externalResetAllFilters, dispatchResetAllFilters] = (0, import_react$1.useReducer)(resetAllFiltersReducer, []);
	const registerPanelItem = (0, import_react$1.useCallback)((item) => {
		panelDispatch({
			type: "REGISTER_PANEL",
			item
		});
	}, []);
	const deregisterPanelItem = (0, import_react$1.useCallback)((label, item) => {
		panelDispatch({
			type: "UNREGISTER_PANEL",
			label,
			item
		});
	}, []);
	const registerResetAllFilter = (0, import_react$1.useCallback)((filter) => {
		dispatchResetAllFilters({
			type: "REGISTER",
			filter
		});
	}, []);
	const deregisterResetAllFilter = (0, import_react$1.useCallback)((filter) => {
		dispatchResetAllFilters({
			type: "UNREGISTER",
			filter
		});
	}, []);
	const flagItemCustomization = (0, import_react$1.useCallback)((value, label) => {
		panelDispatch({
			type: "UPDATE_VALUE",
			label,
			value
		});
	}, []);
	const menuItems = (0, import_react$1.useMemo)(() => {
		const result = {
			default: {},
			optional: {}
		};
		const byLabel = new Map(panelItems.map((item) => [item.label, item]));
		menuItemOrder.forEach((label) => {
			const item = byLabel.get(label);
			if (!item) return;
			result[getMenuGroup(item)][label] = menuItemValues[label] ?? getSeedValue(item);
		});
		return result;
	}, [
		panelItems,
		menuItemOrder,
		menuItemValues
	]);
	const areAllOptionalControlsHidden = (0, import_react$1.useMemo)(() => {
		return isMenuItemTypeEmpty(menuItems.default) && !isMenuItemTypeEmpty(menuItems.optional) && Object.values(menuItems.optional).every((isSelected) => !isSelected);
	}, [menuItems]);
	const classes = clsx(style_module_default$1["tools-panel"], hasInnerWrapper && style_module_default$1["tools-panel-with-inner-wrapper"], areAllOptionalControlsHidden && style_module_default$1["tools-panel-hidden-inner-wrapper"], className);
	const toggleItem = (0, import_react$1.useCallback)((label) => {
		const currentItem = panelItems.find((item) => item.label === label);
		if (!currentItem) return;
		panelDispatch({
			type: "TOGGLE_VALUE",
			label
		});
		if (currentItem.isShownByDefault) return;
		currentItem.onShownChange?.(!menuItems.optional[label]);
	}, [menuItems, panelItems]);
	const resetAllFilters = (0, import_react$1.useMemo)(() => {
		return [...panelItems.map((item) => item.resetAllFilter).filter((filter) => !!filter), ...externalResetAllFilters];
	}, [panelItems, externalResetAllFilters]);
	const resetAllItems = (0, import_react$1.useCallback)(() => {
		if (typeof resetAll === "function") {
			setIsResetting(true);
			resetAll(resetAllFilters);
		}
		panelDispatch({ type: "RESET_ALL" });
	}, [resetAllFilters, resetAll]);
	const getFirstVisibleItemLabel = (items) => {
		const optionalItems = menuItems.optional || {};
		return items.find((item) => item.isShownByDefault || optionalItems[item.label])?.label;
	};
	const firstDisplayedItem = getFirstVisibleItemLabel(panelItems);
	const lastDisplayedItem = getFirstVisibleItemLabel([...panelItems].reverse());
	const hasMenuItems = panelItems.length > 0;
	const panelContext = (0, import_react$1.useMemo)(() => ({
		areAllOptionalControlsHidden,
		deregisterPanelItem,
		deregisterResetAllFilter,
		firstDisplayedItem,
		flagItemCustomization,
		hasMenuItems,
		isResetting,
		lastDisplayedItem,
		menuItems,
		panelId,
		registerPanelItem,
		registerResetAllFilter,
		shouldRenderPlaceholderItems,
		__experimentalFirstVisibleItemClass,
		__experimentalLastVisibleItemClass
	}), [
		areAllOptionalControlsHidden,
		deregisterPanelItem,
		deregisterResetAllFilter,
		firstDisplayedItem,
		flagItemCustomization,
		isResetting,
		lastDisplayedItem,
		menuItems,
		panelId,
		hasMenuItems,
		registerResetAllFilter,
		registerPanelItem,
		shouldRenderPlaceholderItems,
		__experimentalFirstVisibleItemClass,
		__experimentalLastVisibleItemClass
	]);
	return {
		...otherProps,
		headingLevel,
		panelContext,
		resetAllItems,
		toggleItem,
		className: classes
	};
}
var getSeedValue, getMenuGroup, isMenuItemTypeEmpty;
function init_hook$1() {
	return (init_hook$1 = __esmMin((() => {
		init_clsx();
		init_react();
		init_style_module();
		init_use_context_system();
		getSeedValue = (item) => item.hasValue() || !item.isShownByDefault && !!item.defaultShown;
		getMenuGroup = (item) => item.isShownByDefault ? "default" : "optional";
		isMenuItemTypeEmpty = (obj) => Object.keys(obj).length === 0;
	})))();
}
//#endregion
//#region ../packages/components/src/tools-panel/tools-panel/component.tsx
var import_jsx_dev_runtime$2, _jsxFileName$2, UnconnectedToolsPanel, ToolsPanel;
function init_component$1() {
	return (init_component$1 = __esmMin((() => {
		init_component();
		init_context();
		init_hook$1();
		init_component$8();
		init_context_connect();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tools-panel/tools-panel/component.tsx";
		UnconnectedToolsPanel = (props, forwardedRef) => {
			const { children, label, panelContext, resetAllItems, toggleItem, headingLevel, dropdownMenuProps, ...toolsPanelProps } = useToolsPanel(props);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Grid, {
				...toolsPanelProps,
				columns: 2,
				gap: 4,
				columnGap: "var(--wpds-dimension-gap-lg, 16px)",
				rowGap: "var(--wpds-dimension-gap-lg, 16px)",
				templateColumns: "repeat( 2, minmax(0, 1fr) )",
				ref: forwardedRef,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(ToolsPanelContext.Provider, {
					value: panelContext,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(ConnectedToolsPanelHeader, {
						label,
						resetAll: resetAllItems,
						toggleItem,
						headingLevel,
						dropdownMenuProps
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 36,
						columnNumber: 5
					}, void 0), children]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 35,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 26,
				columnNumber: 3
			}, void 0);
		};
		ToolsPanel = contextConnect(UnconnectedToolsPanel, "ToolsPanel");
		try {
			ToolsPanel.__docgenInfo = {
				"description": "The `ToolsPanel` is a container component that displays its children preceded\nby a header. The header includes a dropdown menu which is automatically\ngenerated from the panel's inner `ToolsPanelItems`.\n\n```jsx\nimport { __ } from '@wordpress/i18n';\nimport {\n  __experimentalToolsPanel as ToolsPanel,\n  __experimentalToolsPanelItem as ToolsPanelItem,\n  __experimentalUnitControl as UnitControl\n} from '@wordpress/components';\n\nfunction Example() {\n  const [ height, setHeight ] = useState();\n  const [ width, setWidth ] = useState();\n\n  const resetAll = () => {\n    setHeight();\n    setWidth();\n  }\n\n  return (\n    <ToolsPanel label={ __( 'Dimensions' ) } resetAll={ resetAll }>\n      <ToolsPanelItem\n        hasValue={ () => !! height }\n        label={ __( 'Height' ) }\n        onDeselect={ () => setHeight() }\n      >\n        <UnitControl\n          label={ __( 'Height' ) }\n          onChange={ setHeight }\n          value={ height }\n        />\n      </ToolsPanelItem>\n      <ToolsPanelItem\n        hasValue={ () => !! width }\n        label={ __( 'Width' ) }\n        onDeselect={ () => setWidth() }\n      >\n        <UnitControl\n          label={ __( 'Width' ) }\n          onChange={ setWidth }\n          value={ width }\n        />\n      </ToolsPanelItem>\n    </ToolsPanel>\n  );\n}\n```",
				"displayName": "ToolsPanel",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tools-panel/tools-panel/component.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tools-panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The child elements.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"dropdownMenuProps": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tools-panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The dropdown menu props to configure the panel's `DropdownMenu`.",
						"name": "dropdownMenuProps",
						"required": false,
						"tags": {},
						"type": { "name": "Omit<DropdownMenuProps, \"label\">" }
					},
					"hasInnerWrapper": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tools-panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Flags that the items in this ToolsPanel will be contained within an inner\nwrapper element allowing the panel to lay them out accordingly.",
						"name": "hasInnerWrapper",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"headingLevel": {
						"defaultValue": { "value": "2" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tools-panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The heading level of the panel's header.",
						"name": "headingLevel",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "HeadingSize",
							"value": [
								{ "value": "1" },
								{ "value": "\"1\"" },
								{ "value": "\"2\"" },
								{ "value": "\"3\"" },
								{ "value": "\"4\"" },
								{ "value": "2" },
								{ "value": "3" },
								{ "value": "4" },
								{ "value": "5" },
								{ "value": "6" },
								{ "value": "\"5\"" },
								{ "value": "\"6\"" }
							]
						}
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tools-panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Text to be displayed within the panel's header and as the `aria-label`\nfor the panel's dropdown menu.",
						"name": "label",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"panelId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tools-panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If a `panelId` is set, it is passed through the `ToolsPanelContext` and\nused to restrict panel items. When a `panelId` is set, items can only\nregister themselves if the `panelId` is explicitly `null` or the item's\n`panelId` matches exactly.",
						"name": "panelId",
						"required": false,
						"tags": {},
						"type": { "name": "string | null" }
					},
					"resetAll": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tools-panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function to call when the `Reset all` menu option is selected. As an\nargument, it receives an array containing the `resetAllFilter` callbacks\nof all the valid registered `ToolsPanelItems`.",
						"name": "resetAll",
						"required": true,
						"tags": {},
						"type": { "name": "ResetAll" }
					},
					"shouldRenderPlaceholderItems": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tools-panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Advises the `ToolsPanel` that its child `ToolsPanelItem`s should render\nplaceholder content instead of null when they are toggled off and hidden.\nNote that placeholder items won't apply the `className` that would be\nnormally applied to a visible `ToolsPanelItem` via the `className` prop.",
						"name": "shouldRenderPlaceholderItems",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__experimentalFirstVisibleItemClass": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tools-panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Experimental prop allowing for a custom CSS class to be applied to the\nfirst visible `ToolsPanelItem` within the `ToolsPanel`.",
						"name": "__experimentalFirstVisibleItemClass",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"__experimentalLastVisibleItemClass": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tools-panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Experimental prop allowing for a custom CSS class to be applied to the\nlast visible `ToolsPanelItem` within the `ToolsPanel`.",
						"name": "__experimentalLastVisibleItemClass",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/context/wordpress-component.ts",
							"name": "TypeLiteral"
						}],
						"description": "The HTML element to render the component as.",
						"name": "as",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "keyof IntrinsicElements",
							"value": [
								{ "value": "\"symbol\"" },
								{ "value": "\"object\"" },
								{ "value": "\"style\"" },
								{ "value": "\"span\"" },
								{ "value": "\"a\"" },
								{ "value": "\"abbr\"" },
								{ "value": "\"address\"" },
								{ "value": "\"area\"" },
								{ "value": "\"article\"" },
								{ "value": "\"aside\"" },
								{ "value": "\"audio\"" },
								{ "value": "\"b\"" },
								{ "value": "\"base\"" },
								{ "value": "\"bdi\"" },
								{ "value": "\"bdo\"" },
								{ "value": "\"big\"" },
								{ "value": "\"blockquote\"" },
								{ "value": "\"body\"" },
								{ "value": "\"br\"" },
								{ "value": "\"button\"" },
								{ "value": "\"canvas\"" },
								{ "value": "\"caption\"" },
								{ "value": "\"center\"" },
								{ "value": "\"cite\"" },
								{ "value": "\"code\"" },
								{ "value": "\"col\"" },
								{ "value": "\"colgroup\"" },
								{ "value": "\"data\"" },
								{ "value": "\"datalist\"" },
								{ "value": "\"dd\"" },
								{ "value": "\"del\"" },
								{ "value": "\"details\"" },
								{ "value": "\"dfn\"" },
								{ "value": "\"dialog\"" },
								{ "value": "\"div\"" },
								{ "value": "\"dl\"" },
								{ "value": "\"dt\"" },
								{ "value": "\"em\"" },
								{ "value": "\"embed\"" },
								{ "value": "\"fieldset\"" },
								{ "value": "\"figcaption\"" },
								{ "value": "\"figure\"" },
								{ "value": "\"footer\"" },
								{ "value": "\"form\"" },
								{ "value": "\"h1\"" },
								{ "value": "\"h2\"" },
								{ "value": "\"h3\"" },
								{ "value": "\"h4\"" },
								{ "value": "\"h5\"" },
								{ "value": "\"h6\"" },
								{ "value": "\"head\"" },
								{ "value": "\"header\"" },
								{ "value": "\"hgroup\"" },
								{ "value": "\"hr\"" },
								{ "value": "\"html\"" },
								{ "value": "\"i\"" },
								{ "value": "\"iframe\"" },
								{ "value": "\"img\"" },
								{ "value": "\"input\"" },
								{ "value": "\"ins\"" },
								{ "value": "\"kbd\"" },
								{ "value": "\"keygen\"" },
								{ "value": "\"label\"" },
								{ "value": "\"legend\"" },
								{ "value": "\"li\"" },
								{ "value": "\"link\"" },
								{ "value": "\"main\"" },
								{ "value": "\"map\"" },
								{ "value": "\"mark\"" },
								{ "value": "\"menu\"" },
								{ "value": "\"menuitem\"" },
								{ "value": "\"meta\"" },
								{ "value": "\"meter\"" },
								{ "value": "\"nav\"" },
								{ "value": "\"noindex\"" },
								{ "value": "\"noscript\"" },
								{ "value": "\"ol\"" },
								{ "value": "\"optgroup\"" },
								{ "value": "\"option\"" },
								{ "value": "\"output\"" },
								{ "value": "\"p\"" },
								{ "value": "\"param\"" },
								{ "value": "\"picture\"" },
								{ "value": "\"pre\"" },
								{ "value": "\"progress\"" },
								{ "value": "\"q\"" },
								{ "value": "\"rp\"" },
								{ "value": "\"rt\"" },
								{ "value": "\"ruby\"" },
								{ "value": "\"s\"" },
								{ "value": "\"samp\"" },
								{ "value": "\"search\"" },
								{ "value": "\"slot\"" },
								{ "value": "\"script\"" },
								{ "value": "\"section\"" },
								{ "value": "\"select\"" },
								{ "value": "\"small\"" },
								{ "value": "\"source\"" },
								{ "value": "\"strong\"" },
								{ "value": "\"sub\"" },
								{ "value": "\"summary\"" },
								{ "value": "\"sup\"" },
								{ "value": "\"table\"" },
								{ "value": "\"template\"" },
								{ "value": "\"tbody\"" },
								{ "value": "\"td\"" },
								{ "value": "\"textarea\"" },
								{ "value": "\"tfoot\"" },
								{ "value": "\"th\"" },
								{ "value": "\"thead\"" },
								{ "value": "\"time\"" },
								{ "value": "\"title\"" },
								{ "value": "\"tr\"" },
								{ "value": "\"track\"" },
								{ "value": "\"u\"" },
								{ "value": "\"ul\"" },
								{ "value": "\"var\"" },
								{ "value": "\"video\"" },
								{ "value": "\"wbr\"" },
								{ "value": "\"webview\"" },
								{ "value": "\"svg\"" },
								{ "value": "\"animate\"" },
								{ "value": "\"animateMotion\"" },
								{ "value": "\"animateTransform\"" },
								{ "value": "\"circle\"" },
								{ "value": "\"clipPath\"" },
								{ "value": "\"defs\"" },
								{ "value": "\"desc\"" },
								{ "value": "\"ellipse\"" },
								{ "value": "\"feBlend\"" },
								{ "value": "\"feColorMatrix\"" },
								{ "value": "\"feComponentTransfer\"" },
								{ "value": "\"feComposite\"" },
								{ "value": "\"feConvolveMatrix\"" },
								{ "value": "\"feDiffuseLighting\"" },
								{ "value": "\"feDisplacementMap\"" },
								{ "value": "\"feDistantLight\"" },
								{ "value": "\"feDropShadow\"" },
								{ "value": "\"feFlood\"" },
								{ "value": "\"feFuncA\"" },
								{ "value": "\"feFuncB\"" },
								{ "value": "\"feFuncG\"" },
								{ "value": "\"feFuncR\"" },
								{ "value": "\"feGaussianBlur\"" },
								{ "value": "\"feImage\"" },
								{ "value": "\"feMerge\"" },
								{ "value": "\"feMergeNode\"" },
								{ "value": "\"feMorphology\"" },
								{ "value": "\"feOffset\"" },
								{ "value": "\"fePointLight\"" },
								{ "value": "\"feSpecularLighting\"" },
								{ "value": "\"feSpotLight\"" },
								{ "value": "\"feTile\"" },
								{ "value": "\"feTurbulence\"" },
								{ "value": "\"filter\"" },
								{ "value": "\"foreignObject\"" },
								{ "value": "\"g\"" },
								{ "value": "\"image\"" },
								{ "value": "\"line\"" },
								{ "value": "\"linearGradient\"" },
								{ "value": "\"marker\"" },
								{ "value": "\"mask\"" },
								{ "value": "\"metadata\"" },
								{ "value": "\"mpath\"" },
								{ "value": "\"path\"" },
								{ "value": "\"pattern\"" },
								{ "value": "\"polygon\"" },
								{ "value": "\"polyline\"" },
								{ "value": "\"radialGradient\"" },
								{ "value": "\"rect\"" },
								{ "value": "\"set\"" },
								{ "value": "\"stop\"" },
								{ "value": "\"switch\"" },
								{ "value": "\"text\"" },
								{ "value": "\"textPath\"" },
								{ "value": "\"tspan\"" },
								{ "value": "\"use\"" },
								{ "value": "\"view\"" }
							]
						}
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/tools-panel/tools-panel-item/hook.ts
function useToolsPanelItem(props) {
	const { className, defaultShown, hasValue, isShownByDefault = false, label, panelId, resetAllFilter = noop, onDeselect, onSelect, onShownChange, ...otherProps } = useContextSystem(props, "ToolsPanelItem");
	const { panelId: currentPanelId, menuItems, registerPanelItem, deregisterPanelItem, flagItemCustomization, isResetting, shouldRenderPlaceholderItems: shouldRenderPlaceholder, firstDisplayedItem, lastDisplayedItem, __experimentalFirstVisibleItemClass, __experimentalLastVisibleItemClass } = useToolsPanelContext();
	const hasValueCallback = (0, import_react$1.useCallback)(hasValue, [panelId]);
	const resetAllFilterCallback = useEvent(resetAllFilter);
	const defaultShownRef = (0, import_react$1.useRef)(defaultShown);
	(0, import_react$1.useLayoutEffect)(() => {
		defaultShownRef.current = defaultShown;
	});
	const onShownChangeCallback = useEvent(onShownChange);
	const hasMatchingPanel = currentPanelId === panelId || currentPanelId === null;
	(0, import_react$1.useLayoutEffect)(() => {
		if (!hasMatchingPanel) return;
		const item = {
			defaultShown: defaultShownRef.current,
			hasValue: hasValueCallback,
			isShownByDefault,
			label,
			onShownChange: onShownChangeCallback,
			panelId,
			resetAllFilter: resetAllFilterCallback
		};
		registerPanelItem(item);
		return () => {
			deregisterPanelItem(label, item);
		};
	}, [
		deregisterPanelItem,
		hasMatchingPanel,
		hasValueCallback,
		isShownByDefault,
		label,
		onShownChangeCallback,
		panelId,
		registerPanelItem,
		resetAllFilterCallback
	]);
	const isMenuItemChecked = menuItems?.[isShownByDefault ? "default" : "optional"]?.[label];
	const isRegistered = isMenuItemChecked !== void 0;
	const wasMenuItemCheckedRef = (0, import_react$1.useRef)(void 0);
	const isValueSet = hasValue();
	(0, import_react$1.useLayoutEffect)(() => {
		if (!hasMatchingPanel || !isShownByDefault && !isValueSet) return;
		flagItemCustomization(isValueSet, label);
	}, [
		hasMatchingPanel,
		isValueSet,
		label,
		flagItemCustomization,
		isShownByDefault
	]);
	(0, import_react$1.useEffect)(() => {
		const wasMenuItemChecked = wasMenuItemCheckedRef.current;
		wasMenuItemCheckedRef.current = isMenuItemChecked;
		if (!isRegistered || !(wasMenuItemChecked !== void 0) || isResetting || !hasMatchingPanel) return;
		if (isMenuItemChecked && !isValueSet && !wasMenuItemChecked) onSelect?.();
		if (!isMenuItemChecked && isValueSet && wasMenuItemChecked) onDeselect?.();
	}, [
		hasMatchingPanel,
		isMenuItemChecked,
		isRegistered,
		isResetting,
		isValueSet,
		onSelect,
		onDeselect
	]);
	const isShown = isShownByDefault ? isRegistered : isMenuItemChecked;
	const shouldApplyPlaceholderStyles = shouldRenderPlaceholder && !isShown;
	const classes = clsx(style_module_default$1["tools-panel-item"], shouldApplyPlaceholderStyles && style_module_default$1["tools-panel-item-placeholder"], !shouldApplyPlaceholderStyles && className, firstDisplayedItem === label && __experimentalFirstVisibleItemClass, lastDisplayedItem === label && __experimentalLastVisibleItemClass);
	return {
		...otherProps,
		isShown,
		shouldRenderPlaceholder,
		className: classes
	};
}
var noop;
function init_hook$2() {
	return (init_hook$2 = __esmMin((() => {
		init_clsx();
		init_use_event();
		init_react();
		init_style_module();
		init_context();
		init_use_context_system();
		noop = () => {};
	})))();
}
//#endregion
//#region ../packages/components/src/tools-panel/tools-panel-item/component.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, UnconnectedToolsPanelItem, ToolsPanelItem;
function init_component$2() {
	return (init_component$2 = __esmMin((() => {
		init_hook$2();
		init_component$3();
		init_context_connect();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tools-panel/tools-panel-item/component.tsx";
		UnconnectedToolsPanelItem = (props, forwardedRef) => {
			const { children, isShown, shouldRenderPlaceholder, ...toolsPanelItemProps } = useToolsPanelItem(props);
			if (!isShown) return shouldRenderPlaceholder ? /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(View, {
				...toolsPanelItemProps,
				ref: forwardedRef
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 23,
				columnNumber: 4
			}, void 0) : null;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(View, {
				...toolsPanelItemProps,
				ref: forwardedRef,
				children
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 28,
				columnNumber: 3
			}, void 0);
		};
		ToolsPanelItem = contextConnect(UnconnectedToolsPanelItem, "ToolsPanelItem");
		try {
			ToolsPanelItem.__docgenInfo = {
				"description": "",
				"displayName": "ToolsPanelItem",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tools-panel/tools-panel-item/component.tsx",
				"methods": [],
				"props": {
					"defaultShown": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tools-panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "For optional items only, this determines whether the item is shown on\nfirst render even when `hasValue()` returns `false`.\n\nAn item is always shown while it has a value, so this only controls the\ninitial state of items without one.",
						"name": "defaultShown",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"hasValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tools-panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "This is called when building the `ToolsPanel` menu to determine the\nitem's initial checked state.",
						"name": "hasValue",
						"required": true,
						"tags": {},
						"type": { "name": "() => boolean" }
					},
					"isShownByDefault": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tools-panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "This prop identifies the current item as being displayed by default. This\nmeans it will show regardless of whether it has a value set or is toggled\non in the panel's menu.",
						"name": "isShownByDefault",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tools-panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The supplied label is dual purpose. It is used as:\n1. the human-readable label for the panel's dropdown menu\n2. a key to locate the corresponding item in the panel's menu context to\ndetermine if the panel item should be displayed.\nA panel item's `label` should be unique among all items within a single\npanel.",
						"name": "label",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"onShownChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tools-panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A callback executed when the user shows or hides the item via the\n`ToolsPanel` menu, passed `true` when it was shown and `false` when it\nwas hidden.\n\nUnlike `onDeselect`, this fires whether or not the item has a value, and\nonly in response to an explicit menu action. Visibility changes with\nanother cause do not trigger it, such as an item becoming visible\nbecause it received a value or because `defaultShown` was set, or\nhiding because `Reset all` ran.\n\nItems flagged with `isShownByDefault` are always visible and stay so when\ntoggled off, so this is never called for them.\n\nA single menu action may also call `onSelect` or `onDeselect`, which are\nunchanged. Showing an item without a value calls this with `true` and\n`onSelect`; hiding an item that has a value calls this with `false` and\n`onDeselect`. Use this callback to track visibility and `onDeselect` to\nreset a value, rather than treating them as interchangeable.",
						"name": "onShownChange",
						"required": false,
						"tags": {},
						"type": { "name": "((isShown: boolean) => void)" }
					},
					"panelId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tools-panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Panel items will ensure they are only registering with their intended panel\nby comparing the `panelId` props set on both the item and the panel itself,\nor if the `panelId` is explicitly `null`. This allows items to be injected\nfrom a shared source.",
						"name": "panelId",
						"required": false,
						"tags": {},
						"type": { "name": "string | null" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tools-panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The child elements.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"onDeselect": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tools-panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Called when this item is deselected in the `ToolsPanel` menu. This is\nnormally used to reset the panel item control's value.",
						"name": "onDeselect",
						"required": false,
						"tags": {},
						"type": { "name": "(() => void)" }
					},
					"onSelect": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tools-panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A callback to take action when this item is selected in the `ToolsPanel`\nmenu.",
						"name": "onSelect",
						"required": false,
						"tags": {},
						"type": { "name": "(() => void)" }
					},
					"resetAllFilter": {
						"defaultValue": { "value": "noop" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tools-panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A `ToolsPanel` will collect each item's `resetAllFilter` and pass an\narray of these functions through to the panel's `resetAll` callback. They\ncan then be iterated over to perform additional tasks.",
						"name": "resetAllFilter",
						"required": false,
						"tags": {},
						"type": { "name": "ResetAllFilter" }
					},
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/context/wordpress-component.ts",
							"name": "TypeLiteral"
						}],
						"description": "The HTML element to render the component as.",
						"name": "as",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "keyof IntrinsicElements",
							"value": [
								{ "value": "\"symbol\"" },
								{ "value": "\"object\"" },
								{ "value": "\"style\"" },
								{ "value": "\"span\"" },
								{ "value": "\"a\"" },
								{ "value": "\"abbr\"" },
								{ "value": "\"address\"" },
								{ "value": "\"area\"" },
								{ "value": "\"article\"" },
								{ "value": "\"aside\"" },
								{ "value": "\"audio\"" },
								{ "value": "\"b\"" },
								{ "value": "\"base\"" },
								{ "value": "\"bdi\"" },
								{ "value": "\"bdo\"" },
								{ "value": "\"big\"" },
								{ "value": "\"blockquote\"" },
								{ "value": "\"body\"" },
								{ "value": "\"br\"" },
								{ "value": "\"button\"" },
								{ "value": "\"canvas\"" },
								{ "value": "\"caption\"" },
								{ "value": "\"center\"" },
								{ "value": "\"cite\"" },
								{ "value": "\"code\"" },
								{ "value": "\"col\"" },
								{ "value": "\"colgroup\"" },
								{ "value": "\"data\"" },
								{ "value": "\"datalist\"" },
								{ "value": "\"dd\"" },
								{ "value": "\"del\"" },
								{ "value": "\"details\"" },
								{ "value": "\"dfn\"" },
								{ "value": "\"dialog\"" },
								{ "value": "\"div\"" },
								{ "value": "\"dl\"" },
								{ "value": "\"dt\"" },
								{ "value": "\"em\"" },
								{ "value": "\"embed\"" },
								{ "value": "\"fieldset\"" },
								{ "value": "\"figcaption\"" },
								{ "value": "\"figure\"" },
								{ "value": "\"footer\"" },
								{ "value": "\"form\"" },
								{ "value": "\"h1\"" },
								{ "value": "\"h2\"" },
								{ "value": "\"h3\"" },
								{ "value": "\"h4\"" },
								{ "value": "\"h5\"" },
								{ "value": "\"h6\"" },
								{ "value": "\"head\"" },
								{ "value": "\"header\"" },
								{ "value": "\"hgroup\"" },
								{ "value": "\"hr\"" },
								{ "value": "\"html\"" },
								{ "value": "\"i\"" },
								{ "value": "\"iframe\"" },
								{ "value": "\"img\"" },
								{ "value": "\"input\"" },
								{ "value": "\"ins\"" },
								{ "value": "\"kbd\"" },
								{ "value": "\"keygen\"" },
								{ "value": "\"label\"" },
								{ "value": "\"legend\"" },
								{ "value": "\"li\"" },
								{ "value": "\"link\"" },
								{ "value": "\"main\"" },
								{ "value": "\"map\"" },
								{ "value": "\"mark\"" },
								{ "value": "\"menu\"" },
								{ "value": "\"menuitem\"" },
								{ "value": "\"meta\"" },
								{ "value": "\"meter\"" },
								{ "value": "\"nav\"" },
								{ "value": "\"noindex\"" },
								{ "value": "\"noscript\"" },
								{ "value": "\"ol\"" },
								{ "value": "\"optgroup\"" },
								{ "value": "\"option\"" },
								{ "value": "\"output\"" },
								{ "value": "\"p\"" },
								{ "value": "\"param\"" },
								{ "value": "\"picture\"" },
								{ "value": "\"pre\"" },
								{ "value": "\"progress\"" },
								{ "value": "\"q\"" },
								{ "value": "\"rp\"" },
								{ "value": "\"rt\"" },
								{ "value": "\"ruby\"" },
								{ "value": "\"s\"" },
								{ "value": "\"samp\"" },
								{ "value": "\"search\"" },
								{ "value": "\"slot\"" },
								{ "value": "\"script\"" },
								{ "value": "\"section\"" },
								{ "value": "\"select\"" },
								{ "value": "\"small\"" },
								{ "value": "\"source\"" },
								{ "value": "\"strong\"" },
								{ "value": "\"sub\"" },
								{ "value": "\"summary\"" },
								{ "value": "\"sup\"" },
								{ "value": "\"table\"" },
								{ "value": "\"template\"" },
								{ "value": "\"tbody\"" },
								{ "value": "\"td\"" },
								{ "value": "\"textarea\"" },
								{ "value": "\"tfoot\"" },
								{ "value": "\"th\"" },
								{ "value": "\"thead\"" },
								{ "value": "\"time\"" },
								{ "value": "\"title\"" },
								{ "value": "\"tr\"" },
								{ "value": "\"track\"" },
								{ "value": "\"u\"" },
								{ "value": "\"ul\"" },
								{ "value": "\"var\"" },
								{ "value": "\"video\"" },
								{ "value": "\"wbr\"" },
								{ "value": "\"webview\"" },
								{ "value": "\"svg\"" },
								{ "value": "\"animate\"" },
								{ "value": "\"animateMotion\"" },
								{ "value": "\"animateTransform\"" },
								{ "value": "\"circle\"" },
								{ "value": "\"clipPath\"" },
								{ "value": "\"defs\"" },
								{ "value": "\"desc\"" },
								{ "value": "\"ellipse\"" },
								{ "value": "\"feBlend\"" },
								{ "value": "\"feColorMatrix\"" },
								{ "value": "\"feComponentTransfer\"" },
								{ "value": "\"feComposite\"" },
								{ "value": "\"feConvolveMatrix\"" },
								{ "value": "\"feDiffuseLighting\"" },
								{ "value": "\"feDisplacementMap\"" },
								{ "value": "\"feDistantLight\"" },
								{ "value": "\"feDropShadow\"" },
								{ "value": "\"feFlood\"" },
								{ "value": "\"feFuncA\"" },
								{ "value": "\"feFuncB\"" },
								{ "value": "\"feFuncG\"" },
								{ "value": "\"feFuncR\"" },
								{ "value": "\"feGaussianBlur\"" },
								{ "value": "\"feImage\"" },
								{ "value": "\"feMerge\"" },
								{ "value": "\"feMergeNode\"" },
								{ "value": "\"feMorphology\"" },
								{ "value": "\"feOffset\"" },
								{ "value": "\"fePointLight\"" },
								{ "value": "\"feSpecularLighting\"" },
								{ "value": "\"feSpotLight\"" },
								{ "value": "\"feTile\"" },
								{ "value": "\"feTurbulence\"" },
								{ "value": "\"filter\"" },
								{ "value": "\"foreignObject\"" },
								{ "value": "\"g\"" },
								{ "value": "\"image\"" },
								{ "value": "\"line\"" },
								{ "value": "\"linearGradient\"" },
								{ "value": "\"marker\"" },
								{ "value": "\"mask\"" },
								{ "value": "\"metadata\"" },
								{ "value": "\"mpath\"" },
								{ "value": "\"path\"" },
								{ "value": "\"pattern\"" },
								{ "value": "\"polygon\"" },
								{ "value": "\"polyline\"" },
								{ "value": "\"radialGradient\"" },
								{ "value": "\"rect\"" },
								{ "value": "\"set\"" },
								{ "value": "\"stop\"" },
								{ "value": "\"switch\"" },
								{ "value": "\"text\"" },
								{ "value": "\"textPath\"" },
								{ "value": "\"tspan\"" },
								{ "value": "\"use\"" },
								{ "value": "\"view\"" }
							]
						}
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/tools-panel/stories/style.module.scss
var style_module_default;
function init_style_module$1() {
	return (init_style_module$1 = __esmMin((() => {
		style_module_default = {
			"panel-wrapper": "_panel-wrapper_1bxeb_1",
			"single-column-item": "_single-column-item_1bxeb_8",
			"intro-text": "_intro-text_1bxeb_12"
		};
	})))();
}
//#endregion
//#region ../packages/components/src/tools-panel/stories/index.story.tsx
var import_jsx_dev_runtime, import_react, fn, _jsxFileName, meta, Default, WithNonToolsPanelItems, WithOptionalItemsPlusIcon, ToolsPanelItems, Slot, WithSlotFillItems, WithConditionalDefaultControl, WithConditionallyRenderedControl;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_component$5(), init_component$6();
		init_component$1(), init_component$2();
		init_panel();
		init_unit_control();
		init_slot_fill();
		init_style_module$1();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		import_react = require_react();
		({fn} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tools-panel/stories/index.story.tsx";
		meta = {
			id: "components-toolspanel",
			title: "Components/@wordpress-components/ToolsPanel",
			component: ToolsPanel,
			subcomponents: { ToolsPanelItem },
			argTypes: {
				as: { control: false },
				children: { control: false },
				panelId: { control: false },
				resetAll: { action: "resetAll" }
			},
			tags: ["status-experimental"],
			args: { resetAll: fn() },
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "editor"
				}
			}
		};
		Default = ({ resetAll: resetAllProp, ...props }) => {
			const [height, setHeight] = (0, import_react$1.useState)();
			const [minHeight, setMinHeight] = (0, import_react$1.useState)();
			const [width, setWidth] = (0, import_react$1.useState)();
			const [scale, setScale] = (0, import_react$1.useState)();
			const resetAll = (filters) => {
				setHeight(void 0);
				setWidth(void 0);
				setMinHeight(void 0);
				setScale(void 0);
				resetAllProp(filters);
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: style_module_default["panel-wrapper"],
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolsPanel, {
					...props,
					resetAll,
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolsPanelItem, {
							className: style_module_default["single-column-item"],
							hasValue: () => !!width,
							label: "Width",
							onDeselect: () => setWidth(void 0),
							isShownByDefault: true,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UnitControl, {
								label: "Width",
								value: width,
								onChange: (next) => setWidth(next)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 70,
								columnNumber: 7
							}, void 0)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 63,
							columnNumber: 6
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolsPanelItem, {
							className: style_module_default["single-column-item"],
							hasValue: () => !!height,
							label: "Height",
							onDeselect: () => setHeight(void 0),
							isShownByDefault: true,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UnitControl, {
								label: "Height",
								value: height,
								onChange: (next) => setHeight(next)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 83,
								columnNumber: 7
							}, void 0)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 76,
							columnNumber: 6
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolsPanelItem, {
							hasValue: () => !!minHeight,
							label: "Minimum height",
							onDeselect: () => setMinHeight(void 0),
							isShownByDefault: true,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UnitControl, {
								label: "Minimum height",
								value: minHeight,
								onChange: (next) => setMinHeight(next)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 95,
								columnNumber: 7
							}, void 0)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 89,
							columnNumber: 6
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolsPanelItem, {
							hasValue: () => !!scale,
							label: "Scale",
							onDeselect: () => setScale(void 0),
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleGroupControl, {
								label: "Scale",
								value: scale,
								onChange: (next) => setScale(next),
								isBlock: true,
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleGroupControlOption, {
										value: "cover",
										label: "Cover"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 112,
										columnNumber: 8
									}, void 0),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleGroupControlOption, {
										value: "contain",
										label: "Contain"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 116,
										columnNumber: 8
									}, void 0),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleGroupControlOption, {
										value: "fill",
										label: "Fill"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 120,
										columnNumber: 8
									}, void 0)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 106,
								columnNumber: 7
							}, void 0)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 101,
							columnNumber: 6
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 62,
					columnNumber: 5
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 61,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 60,
				columnNumber: 3
			}, void 0);
		};
		Default.args = { label: "Tools Panel (default example)" };
		WithNonToolsPanelItems = ({ resetAll: resetAllProp, ...props }) => {
			const [height, setHeight] = (0, import_react$1.useState)();
			const [width, setWidth] = (0, import_react$1.useState)();
			const resetAll = (filters) => {
				setHeight(void 0);
				setWidth(void 0);
				resetAllProp(filters);
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: style_module_default["panel-wrapper"],
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolsPanel, {
					...props,
					resetAll,
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: style_module_default["intro-text"],
							children: "This text illustrates not all items must be wrapped in a ToolsPanelItem and represented in the panel menu."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 152,
							columnNumber: 6
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolsPanelItem, {
							className: style_module_default["single-column-item"],
							hasValue: () => !!width,
							label: "Width",
							onDeselect: () => setWidth(void 0),
							isShownByDefault: true,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UnitControl, {
								label: "Width",
								value: width,
								onChange: (next) => setWidth(next)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 163,
								columnNumber: 7
							}, void 0)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 156,
							columnNumber: 6
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolsPanelItem, {
							className: style_module_default["single-column-item"],
							hasValue: () => !!height,
							label: "Height",
							onDeselect: () => setHeight(void 0),
							isShownByDefault: true,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UnitControl, {
								label: "Height",
								value: height,
								onChange: (next) => setHeight(next)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 176,
								columnNumber: 7
							}, void 0)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 169,
							columnNumber: 6
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 151,
					columnNumber: 5
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 150,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 149,
				columnNumber: 3
			}, void 0);
		};
		WithNonToolsPanelItems.args = {
			...Default.args,
			label: "ToolsPanel (with non-menu items)"
		};
		WithOptionalItemsPlusIcon = ({ resetAll: resetAllProp, ...props }) => {
			const [isFirstToolsPanelItemShownByDefault, setIsFirstToolsPanelItemShownByDefault] = (0, import_react$1.useState)(false);
			const [height, setHeight] = (0, import_react$1.useState)();
			const [width, setWidth] = (0, import_react$1.useState)();
			const [minWidth, setMinWidth] = (0, import_react$1.useState)();
			const resetAll = (filters) => {
				setHeight(void 0);
				setWidth(void 0);
				setMinWidth(void 0);
				resetAllProp(filters);
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: style_module_default["panel-wrapper"],
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, { children: /* @__PURE__ */ (0, import_react.createElement)(ToolsPanel, {
					...props,
					resetAll,
					key: isFirstToolsPanelItemShownByDefault ? "true" : "false",
					__self: void 0,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 215,
						columnNumber: 6
					}
				}, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolsPanelItem, {
					className: style_module_default["single-column-item"],
					hasValue: () => !!minWidth,
					label: "Minimum width",
					onDeselect: () => setMinWidth(void 0),
					isShownByDefault: isFirstToolsPanelItemShownByDefault,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UnitControl, {
						label: "Minimum width",
						value: minWidth,
						onChange: (next) => setMinWidth(next)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 235,
						columnNumber: 8
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 226,
					columnNumber: 7
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolsPanelItem, {
					className: style_module_default["single-column-item"],
					hasValue: () => !!width,
					label: "Width",
					onDeselect: () => setWidth(void 0),
					isShownByDefault: false,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UnitControl, {
						label: "Width",
						value: width,
						onChange: (next) => setWidth(next)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 248,
						columnNumber: 8
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 241,
					columnNumber: 7
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolsPanelItem, {
					className: style_module_default["single-column-item"],
					hasValue: () => !!height,
					label: "Height",
					onDeselect: () => setHeight(void 0),
					isShownByDefault: false,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UnitControl, {
						label: "Height",
						value: height,
						onChange: (next) => setHeight(next)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 261,
						columnNumber: 8
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 254,
					columnNumber: 7
				}, void 0)) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 214,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 213,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				onClick: () => setIsFirstToolsPanelItemShownByDefault(!isFirstToolsPanelItemShownByDefault),
				"aria-pressed": isFirstToolsPanelItemShownByDefault ? "true" : "false",
				style: { marginTop: "2rem" },
				children: isFirstToolsPanelItemShownByDefault ? "Make first PanelItem hidden by default" : "Make first PanelItem shown by default"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 271,
				columnNumber: 4
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 212,
				columnNumber: 3
			}, void 0);
		};
		WithOptionalItemsPlusIcon.args = {
			...Default.args,
			label: "Tools Panel (optional items only)"
		};
		({Fill: ToolsPanelItems, Slot} = createSlotFill("ToolsPanelSlot"));
		WithSlotFillItems = ({ resetAll: resetAllProp, panelId, ...props }) => {
			const [attributes, setAttributes] = (0, import_react$1.useState)({});
			const { width, height } = attributes;
			const resetAll = (resetFilters = []) => {
				let newAttributes = {};
				resetFilters.forEach((resetFilter) => {
					newAttributes = {
						...newAttributes,
						...resetFilter(newAttributes)
					};
				});
				setAttributes(newAttributes);
				resetAllProp(resetFilters);
			};
			const updateAttribute = (name, value) => {
				setAttributes({
					...attributes,
					[name]: value
				});
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Provider, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolsPanelItems, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolsPanelItem, {
					className: style_module_default["single-column-item"],
					hasValue: () => !!width,
					label: "Injected Width",
					onDeselect: () => updateAttribute("width", void 0),
					resetAllFilter: () => ({ width: void 0 }),
					panelId,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UnitControl, {
						label: "Injected Width",
						value: width,
						onChange: (next) => updateAttribute("width", next)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 342,
						columnNumber: 6
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 334,
					columnNumber: 5
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolsPanelItem, {
					className: style_module_default["single-column-item"],
					hasValue: () => !!height,
					label: "Injected Height",
					onDeselect: () => updateAttribute("height", void 0),
					resetAllFilter: () => ({ height: void 0 }),
					panelId,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UnitControl, {
						label: "Injected Height",
						value: height,
						onChange: (next) => updateAttribute("height", next)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 358,
						columnNumber: 6
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 350,
					columnNumber: 5
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolsPanelItem, {
					hasValue: () => true,
					label: "Item for alternate panel",
					onDeselect: () => void 0,
					resetAllFilter: () => void 0,
					panelId: "intended-for-another-panel-via-shared-slot",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "This panel item will not be displayed in the demo as its panelId does not match the panel being rendered." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 373,
						columnNumber: 6
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 366,
					columnNumber: 5
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 333,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: style_module_default["panel-wrapper"],
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolsPanel, {
					...props,
					resetAll,
					panelId,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 386,
						columnNumber: 7
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 381,
					columnNumber: 6
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 380,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 379,
				columnNumber: 4
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 332,
				columnNumber: 3
			}, void 0);
		};
		WithSlotFillItems.args = {
			...Default.args,
			label: "Tools Panel With SlotFill Items",
			panelId: "unique-tools-panel-id"
		};
		WithConditionalDefaultControl = ({ resetAll: resetAllProp, panelId, ...props }) => {
			const [attributes, setAttributes] = (0, import_react$1.useState)({});
			const { height, scale } = attributes;
			const resetAll = (resetFilters = []) => {
				let newAttributes = {};
				resetFilters.forEach((resetFilter) => {
					newAttributes = {
						...newAttributes,
						...resetFilter(newAttributes)
					};
				});
				setAttributes(newAttributes);
				resetAllProp(resetFilters);
			};
			const updateAttribute = (name, value) => {
				setAttributes({
					...attributes,
					[name]: value
				});
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Provider, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolsPanelItems, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolsPanelItem, {
				className: style_module_default["single-column-item"],
				hasValue: () => !!height,
				label: "Injected Height",
				onDeselect: () => updateAttribute("height", void 0),
				resetAllFilter: () => ({ height: void 0 }),
				panelId,
				isShownByDefault: true,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UnitControl, {
					label: "Injected Height",
					value: height,
					onChange: (next) => updateAttribute("height", next)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 444,
					columnNumber: 6
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 435,
				columnNumber: 5
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolsPanelItem, {
				hasValue: () => !!scale,
				label: "Scale",
				onDeselect: () => updateAttribute("scale", void 0),
				resetAllFilter: () => ({ scale: void 0 }),
				panelId,
				isShownByDefault: !!height,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleGroupControl, {
					label: "Scale",
					value: scale,
					onChange: (next) => updateAttribute("scale", next),
					isBlock: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleGroupControlOption, {
							value: "cover",
							label: "Cover"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 468,
							columnNumber: 7
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleGroupControlOption, {
							value: "contain",
							label: "Contain"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 469,
							columnNumber: 7
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleGroupControlOption, {
							value: "fill",
							label: "Fill"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 473,
							columnNumber: 7
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 460,
					columnNumber: 6
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 452,
				columnNumber: 5
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 434,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: style_module_default["panel-wrapper"],
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolsPanel, {
					...props,
					resetAll,
					panelId,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 484,
						columnNumber: 7
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 479,
					columnNumber: 6
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 478,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 477,
				columnNumber: 4
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 433,
				columnNumber: 3
			}, void 0);
		};
		WithConditionalDefaultControl.args = {
			...Default.args,
			label: "Tools Panel With Conditional Default via SlotFill",
			panelId: "unique-tools-panel-id"
		};
		WithConditionallyRenderedControl = ({ resetAll: resetAllProp, panelId, ...props }) => {
			const [attributes, setAttributes] = (0, import_react$1.useState)({});
			const { height, scale } = attributes;
			const resetAll = (resetFilters = []) => {
				let newAttributes = {};
				resetFilters.forEach((resetFilter) => {
					newAttributes = {
						...newAttributes,
						...resetFilter(newAttributes)
					};
				});
				setAttributes(newAttributes);
				resetAllProp(resetFilters);
			};
			const updateAttribute = (name, value) => {
				setAttributes({
					...attributes,
					[name]: value
				});
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Provider, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolsPanelItems, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolsPanelItem, {
				className: style_module_default["single-column-item"],
				hasValue: () => !!height,
				label: "Injected Height",
				onDeselect: () => {
					updateAttribute("scale", void 0);
					updateAttribute("height", void 0);
				},
				resetAllFilter: () => ({ height: void 0 }),
				panelId,
				isShownByDefault: true,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UnitControl, {
					label: "Injected Height",
					value: height,
					onChange: (next) => updateAttribute("height", next)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 543,
					columnNumber: 6
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 531,
				columnNumber: 5
			}, void 0), !!height && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolsPanelItem, {
				hasValue: () => !!scale,
				label: "Scale",
				onDeselect: () => updateAttribute("scale", void 0),
				resetAllFilter: () => ({ scale: void 0 }),
				panelId,
				isShownByDefault: true,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleGroupControl, {
					label: "Scale",
					value: scale,
					onChange: (next) => updateAttribute("scale", next),
					isBlock: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleGroupControlOption, {
							value: "cover",
							label: "Cover"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 570,
							columnNumber: 8
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleGroupControlOption, {
							value: "contain",
							label: "Contain"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 574,
							columnNumber: 8
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleGroupControlOption, {
							value: "fill",
							label: "Fill"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 578,
							columnNumber: 8
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 562,
					columnNumber: 7
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 552,
				columnNumber: 6
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 530,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: style_module_default["panel-wrapper"],
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolsPanel, {
					...props,
					resetAll,
					panelId,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 593,
						columnNumber: 7
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 588,
					columnNumber: 6
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 587,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 586,
				columnNumber: 4
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 529,
				columnNumber: 3
			}, void 0);
		};
		WithConditionallyRenderedControl.args = {
			...Default.args,
			label: "Tools Panel With Conditionally Rendered Item via SlotFill",
			panelId: "unique-tools-panel-id"
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "({\n  resetAll: resetAllProp,\n  ...props\n}) => {\n  const [height, setHeight] = useState<string | undefined>();\n  const [minHeight, setMinHeight] = useState<string | undefined>();\n  const [width, setWidth] = useState<string | undefined>();\n  const [scale, setScale] = useState<number | string | undefined>();\n  const resetAll: typeof resetAllProp = filters => {\n    setHeight(undefined);\n    setWidth(undefined);\n    setMinHeight(undefined);\n    setScale(undefined);\n    resetAllProp(filters);\n  };\n  return <div className={styles['panel-wrapper']}>\n            <Panel>\n                <ToolsPanel {...props} resetAll={resetAll}>\n                    <ToolsPanelItem className={styles['single-column-item']} hasValue={() => !!width} label=\"Width\" onDeselect={() => setWidth(undefined)} isShownByDefault>\n                        <UnitControl label=\"Width\" value={width} onChange={next => setWidth(next)} />\n                    </ToolsPanelItem>\n                    <ToolsPanelItem className={styles['single-column-item']} hasValue={() => !!height} label=\"Height\" onDeselect={() => setHeight(undefined)} isShownByDefault>\n                        <UnitControl label=\"Height\" value={height} onChange={next => setHeight(next)} />\n                    </ToolsPanelItem>\n                    <ToolsPanelItem hasValue={() => !!minHeight} label=\"Minimum height\" onDeselect={() => setMinHeight(undefined)} isShownByDefault>\n                        <UnitControl label=\"Minimum height\" value={minHeight} onChange={next => setMinHeight(next)} />\n                    </ToolsPanelItem>\n                    <ToolsPanelItem hasValue={() => !!scale} label=\"Scale\" onDeselect={() => setScale(undefined)}>\n                        <ToggleGroupControl label=\"Scale\" value={scale} onChange={next => setScale(next)} isBlock>\n                            <ToggleGroupControlOption value=\"cover\" label=\"Cover\" />\n                            <ToggleGroupControlOption value=\"contain\" label=\"Contain\" />\n                            <ToggleGroupControlOption value=\"fill\" label=\"Fill\" />\n                        </ToggleGroupControl>\n                    </ToolsPanelItem>\n                </ToolsPanel>\n            </Panel>\n        </div>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithNonToolsPanelItems.parameters = {
			...WithNonToolsPanelItems.parameters,
			docs: {
				...WithNonToolsPanelItems.parameters?.docs,
				source: {
					originalSource: "({\n  resetAll: resetAllProp,\n  ...props\n}) => {\n  const [height, setHeight] = useState<string | undefined>();\n  const [width, setWidth] = useState<string | undefined>();\n  const resetAll: typeof resetAllProp = filters => {\n    setHeight(undefined);\n    setWidth(undefined);\n    resetAllProp(filters);\n  };\n  return <div className={styles['panel-wrapper']}>\n            <Panel>\n                <ToolsPanel {...props} resetAll={resetAll}>\n                    <div className={styles['intro-text']}>\n                        This text illustrates not all items must be wrapped in a\n                        ToolsPanelItem and represented in the panel menu.\n                    </div>\n                    <ToolsPanelItem className={styles['single-column-item']} hasValue={() => !!width} label=\"Width\" onDeselect={() => setWidth(undefined)} isShownByDefault>\n                        <UnitControl label=\"Width\" value={width} onChange={next => setWidth(next)} />\n                    </ToolsPanelItem>\n                    <ToolsPanelItem className={styles['single-column-item']} hasValue={() => !!height} label=\"Height\" onDeselect={() => setHeight(undefined)} isShownByDefault>\n                        <UnitControl label=\"Height\" value={height} onChange={next => setHeight(next)} />\n                    </ToolsPanelItem>\n                </ToolsPanel>\n            </Panel>\n        </div>;\n}",
					...WithNonToolsPanelItems.parameters?.docs?.source
				}
			}
		};
		WithOptionalItemsPlusIcon.parameters = {
			...WithOptionalItemsPlusIcon.parameters,
			docs: {
				...WithOptionalItemsPlusIcon.parameters?.docs,
				source: {
					originalSource: "({\n  resetAll: resetAllProp,\n  ...props\n}) => {\n  const [isFirstToolsPanelItemShownByDefault, setIsFirstToolsPanelItemShownByDefault] = useState(false);\n  const [height, setHeight] = useState<string | undefined>();\n  const [width, setWidth] = useState<string | undefined>();\n  const [minWidth, setMinWidth] = useState<string | undefined>();\n  const resetAll: typeof resetAllProp = filters => {\n    setHeight(undefined);\n    setWidth(undefined);\n    setMinWidth(undefined);\n    resetAllProp(filters);\n  };\n  return <>\n            <div className={styles['panel-wrapper']}>\n                <Panel>\n                    <ToolsPanel {...props} resetAll={resetAll}\n        // `key` property here is used as a hack to force `ToolsPanel` to re-render\n        // See https://github.com/WordPress/gutenberg/pull/38262/files#r793422991\n        key={isFirstToolsPanelItemShownByDefault ? 'true' : 'false'}>\n                        <ToolsPanelItem className={styles['single-column-item']} hasValue={() => !!minWidth} label=\"Minimum width\" onDeselect={() => setMinWidth(undefined)} isShownByDefault={isFirstToolsPanelItemShownByDefault}>\n                            <UnitControl label=\"Minimum width\" value={minWidth} onChange={next => setMinWidth(next)} />\n                        </ToolsPanelItem>\n                        <ToolsPanelItem className={styles['single-column-item']} hasValue={() => !!width} label=\"Width\" onDeselect={() => setWidth(undefined)} isShownByDefault={false}>\n                            <UnitControl label=\"Width\" value={width} onChange={next => setWidth(next)} />\n                        </ToolsPanelItem>\n                        <ToolsPanelItem className={styles['single-column-item']} hasValue={() => !!height} label=\"Height\" onDeselect={() => setHeight(undefined)} isShownByDefault={false}>\n                            <UnitControl label=\"Height\" value={height} onChange={next => setHeight(next)} />\n                        </ToolsPanelItem>\n                    </ToolsPanel>\n                </Panel>\n            </div>\n\n            <button onClick={() => setIsFirstToolsPanelItemShownByDefault(!isFirstToolsPanelItemShownByDefault)} aria-pressed={isFirstToolsPanelItemShownByDefault ? 'true' : 'false'} style={{\n      marginTop: '2rem'\n    }}>\n                {isFirstToolsPanelItemShownByDefault ? 'Make first PanelItem hidden by default' : 'Make first PanelItem shown by default'}\n            </button>\n        </>;\n}",
					...WithOptionalItemsPlusIcon.parameters?.docs?.source
				}
			}
		};
		WithSlotFillItems.parameters = {
			...WithSlotFillItems.parameters,
			docs: {
				...WithSlotFillItems.parameters?.docs,
				source: {
					originalSource: "({\n  resetAll: resetAllProp,\n  panelId,\n  ...props\n}) => {\n  const [attributes, setAttributes] = useState<{\n    width?: string;\n    height?: string;\n  }>({});\n  const {\n    width,\n    height\n  } = attributes;\n  const resetAll: typeof resetAllProp = (resetFilters = []) => {\n    let newAttributes: typeof attributes = {};\n    resetFilters.forEach(resetFilter => {\n      newAttributes = {\n        ...newAttributes,\n        ...resetFilter(newAttributes)\n      };\n    });\n    setAttributes(newAttributes);\n    resetAllProp(resetFilters);\n  };\n  const updateAttribute = (name: string, value?: any) => {\n    setAttributes({\n      ...attributes,\n      [name]: value\n    });\n  };\n  return <SlotFillProvider>\n            <ToolsPanelItems>\n                <ToolsPanelItem className={styles['single-column-item']} hasValue={() => !!width} label=\"Injected Width\" onDeselect={() => updateAttribute('width', undefined)} resetAllFilter={() => ({\n        width: undefined\n      })} panelId={panelId}>\n                    <UnitControl label=\"Injected Width\" value={width} onChange={next => updateAttribute('width', next)} />\n                </ToolsPanelItem>\n                <ToolsPanelItem className={styles['single-column-item']} hasValue={() => !!height} label=\"Injected Height\" onDeselect={() => updateAttribute('height', undefined)} resetAllFilter={() => ({\n        height: undefined\n      })} panelId={panelId}>\n                    <UnitControl label=\"Injected Height\" value={height} onChange={next => updateAttribute('height', next)} />\n                </ToolsPanelItem>\n                <ToolsPanelItem hasValue={() => true} label=\"Item for alternate panel\" onDeselect={() => undefined} resetAllFilter={() => undefined} panelId=\"intended-for-another-panel-via-shared-slot\">\n                    <p>\n                        This panel item will not be displayed in the demo as its\n                        panelId does not match the panel being rendered.\n                    </p>\n                </ToolsPanelItem>\n            </ToolsPanelItems>\n            <div className={styles['panel-wrapper']}>\n                <Panel>\n                    <ToolsPanel {...props} resetAll={resetAll} panelId={panelId}>\n                        <Slot />\n                    </ToolsPanel>\n                </Panel>\n            </div>\n        </SlotFillProvider>;\n}",
					...WithSlotFillItems.parameters?.docs?.source
				}
			}
		};
		WithConditionalDefaultControl.parameters = {
			...WithConditionalDefaultControl.parameters,
			docs: {
				...WithConditionalDefaultControl.parameters?.docs,
				source: {
					originalSource: "({\n  resetAll: resetAllProp,\n  panelId,\n  ...props\n}) => {\n  const [attributes, setAttributes] = useState<{\n    height?: string;\n    scale?: number | string;\n  }>({});\n  const {\n    height,\n    scale\n  } = attributes;\n  const resetAll: typeof resetAllProp = (resetFilters = []) => {\n    let newAttributes: typeof attributes = {};\n    resetFilters.forEach(resetFilter => {\n      newAttributes = {\n        ...newAttributes,\n        ...resetFilter(newAttributes)\n      };\n    });\n    setAttributes(newAttributes);\n    resetAllProp(resetFilters);\n  };\n  const updateAttribute = (name: string, value?: any) => {\n    setAttributes({\n      ...attributes,\n      [name]: value\n    });\n  };\n  return <SlotFillProvider>\n            <ToolsPanelItems>\n                <ToolsPanelItem className={styles['single-column-item']} hasValue={() => !!height} label=\"Injected Height\" onDeselect={() => updateAttribute('height', undefined)} resetAllFilter={() => ({\n        height: undefined\n      })} panelId={panelId} isShownByDefault>\n                    <UnitControl label=\"Injected Height\" value={height} onChange={next => updateAttribute('height', next)} />\n                </ToolsPanelItem>\n                <ToolsPanelItem hasValue={() => !!scale} label=\"Scale\" onDeselect={() => updateAttribute('scale', undefined)} resetAllFilter={() => ({\n        scale: undefined\n      })} panelId={panelId} isShownByDefault={!!height}>\n                    <ToggleGroupControl label=\"Scale\" value={scale} onChange={next => updateAttribute('scale', next)} isBlock>\n                        <ToggleGroupControlOption value=\"cover\" label=\"Cover\" />\n                        <ToggleGroupControlOption value=\"contain\" label=\"Contain\" />\n                        <ToggleGroupControlOption value=\"fill\" label=\"Fill\" />\n                    </ToggleGroupControl>\n                </ToolsPanelItem>\n            </ToolsPanelItems>\n            <div className={styles['panel-wrapper']}>\n                <Panel>\n                    <ToolsPanel {...props} resetAll={resetAll} panelId={panelId}>\n                        <Slot />\n                    </ToolsPanel>\n                </Panel>\n            </div>\n        </SlotFillProvider>;\n}",
					...WithConditionalDefaultControl.parameters?.docs?.source
				}
			}
		};
		WithConditionallyRenderedControl.parameters = {
			...WithConditionallyRenderedControl.parameters,
			docs: {
				...WithConditionallyRenderedControl.parameters?.docs,
				source: {
					originalSource: "({\n  resetAll: resetAllProp,\n  panelId,\n  ...props\n}) => {\n  const [attributes, setAttributes] = useState<{\n    height?: string;\n    scale?: number | string;\n  }>({});\n  const {\n    height,\n    scale\n  } = attributes;\n  const resetAll: typeof resetAllProp = (resetFilters = []) => {\n    let newAttributes: typeof attributes = {};\n    resetFilters.forEach(resetFilter => {\n      newAttributes = {\n        ...newAttributes,\n        ...resetFilter(newAttributes)\n      };\n    });\n    setAttributes(newAttributes);\n    resetAllProp(resetFilters);\n  };\n  const updateAttribute = (name: string, value?: any) => {\n    setAttributes({\n      ...attributes,\n      [name]: value\n    });\n  };\n  return <SlotFillProvider>\n            <ToolsPanelItems>\n                <ToolsPanelItem className={styles['single-column-item']} hasValue={() => !!height} label=\"Injected Height\" onDeselect={() => {\n        updateAttribute('scale', undefined);\n        updateAttribute('height', undefined);\n      }} resetAllFilter={() => ({\n        height: undefined\n      })} panelId={panelId} isShownByDefault>\n                    <UnitControl label=\"Injected Height\" value={height} onChange={next => updateAttribute('height', next)} />\n                </ToolsPanelItem>\n                {!!height && <ToolsPanelItem hasValue={() => !!scale} label=\"Scale\" onDeselect={() => updateAttribute('scale', undefined)} resetAllFilter={() => ({\n        scale: undefined\n      })} panelId={panelId} isShownByDefault>\n                        <ToggleGroupControl label=\"Scale\" value={scale} onChange={next => updateAttribute('scale', next)} isBlock>\n                            <ToggleGroupControlOption value=\"cover\" label=\"Cover\" />\n                            <ToggleGroupControlOption value=\"contain\" label=\"Contain\" />\n                            <ToggleGroupControlOption value=\"fill\" label=\"Fill\" />\n                        </ToggleGroupControl>\n                    </ToolsPanelItem>}\n            </ToolsPanelItems>\n            <div className={styles['panel-wrapper']}>\n                <Panel>\n                    <ToolsPanel {...props} resetAll={resetAll} panelId={panelId}>\n                        <Slot />\n                    </ToolsPanel>\n                </Panel>\n            </div>\n        </SlotFillProvider>;\n}",
					...WithConditionallyRenderedControl.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, WithConditionalDefaultControl, WithConditionallyRenderedControl, WithNonToolsPanelItems, WithOptionalItemsPlusIcon, WithSlotFillItems, meta as default };
