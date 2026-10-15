import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { n as init_react, t as import_react$1 } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useEvent, t as init_use_event } from "./use-event-BTRhHipl.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { i as _x, n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as styled, i as init_emotion_styled_browser_development_esm, o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { r as speak, t as init_build_module$1 } from "./build-module-DsAeWnrG.js";
import { t as check_default } from "./check-BrSqqlF_.js";
import { n as more_vertical_default } from "./more-vertical-Ceny7Ndv.js";
import { n as plus_default } from "./plus-9ndJHGzu.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-D7pcITcN.js";
import { n as init_component$3, t as View } from "./component-CkY7eURU.js";
import { n as space, t as init_space } from "./space-BUoQC8K7.js";
import { n as init_component$4, t as HStack } from "./component-D91dSxn4.js";
import { i as init_component$5, r as ToggleGroupControl } from "./component-C1xJY-Hs.js";
import { n as init_component$6, t as ToggleGroupControlOption } from "./component-CIgSfYyI.js";
import { i as init_slot_fill, r as createSlotFill, t as Provider } from "./slot-fill-CKXX0yAb.js";
import { n as init_component$7, t as Heading } from "./component-P5W9vQnZ.js";
import { n as init_unit_control, t as UnitControl } from "./unit-control-C3htNBgF.js";
import { n as init_component$8, t as Grid } from "./component-D2XepuBL.js";
import { n as init_dropdown_menu, t as DropdownMenu } from "./dropdown-menu-DSYKzjsW.js";
import { i as init_menu_item, n as init_menu_group, r as MenuItem, t as MenuGroup } from "./menu-group-Bxb7wOId.js";
import { n as init_panel, t as Panel } from "./panel-DbxtDhOV.js";
import { r as init_build_module$2 } from "./library.story-DawnfKTW.js";
//#region ../packages/components/src/tools-panel/style.module.scss
var style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		style_module_default = {
			"tools-panel": "_tools-panel_1kki4_46",
			"tools-panel-with-inner-wrapper": "_tools-panel-with-inner-wrapper_1kki4_52",
			"tools-panel-hidden-inner-wrapper": "_tools-panel-hidden-inner-wrapper_1kki4_60",
			"tools-panel-header": "_tools-panel-header_1kki4_64",
			"tools-panel-heading": "_tools-panel-heading_1kki4_78",
			"tools-panel-item": "_tools-panel-item_1kki4_84",
			"tools-panel-item-placeholder": "_tools-panel-item-placeholder_1kki4_104",
			"dropdown-menu": "_dropdown-menu_1kki4_108",
			"reset-label": "_reset-label_1kki4_112",
			"default-controls-item": "_default-controls-item_1kki4_121"
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
		defaultControlsItemClassName: style_module_default["default-controls-item"],
		dropdownMenuClassName: style_module_default["dropdown-menu"],
		hasMenuItems,
		headingClassName: style_module_default["tools-panel-heading"],
		headingLevel,
		menuItems,
		className: clsx(style_module_default["tools-panel-header"], className)
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
				className: style_module_default["reset-label"],
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
	const classes = clsx(style_module_default["tools-panel"], hasInnerWrapper && style_module_default["tools-panel-with-inner-wrapper"], areAllOptionalControlsHidden && style_module_default["tools-panel-hidden-inner-wrapper"], className);
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
var import_jsx_dev_runtime$2, _jsxFileName$2, TOOLS_PANEL_GAP, UnconnectedToolsPanel, ToolsPanel;
function init_component$1() {
	return (init_component$1 = __esmMin((() => {
		init_component();
		init_context();
		init_hook$1();
		init_component$8();
		init_context_connect();
		init_space();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tools-panel/tools-panel/component.tsx";
		TOOLS_PANEL_GAP = space(4);
		UnconnectedToolsPanel = (props, forwardedRef) => {
			const { children, label, panelContext, resetAllItems, toggleItem, headingLevel, dropdownMenuProps, ...toolsPanelProps } = useToolsPanel(props);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Grid, {
				...toolsPanelProps,
				columns: 2,
				gap: 4,
				columnGap: TOOLS_PANEL_GAP,
				rowGap: TOOLS_PANEL_GAP,
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
						lineNumber: 39,
						columnNumber: 5
					}, void 0), children]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 38,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 29,
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
								{ "value": "2" },
								{ "value": "\"1\"" },
								{ "value": "\"2\"" },
								{ "value": "\"3\"" },
								{ "value": "3" },
								{ "value": "4" },
								{ "value": "5" },
								{ "value": "6" },
								{ "value": "\"4\"" },
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
								{ "value": "\"div\"" },
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
								{ "value": "\"span\"" },
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
	const classes = clsx(style_module_default["tools-panel-item"], shouldApplyPlaceholderStyles && style_module_default["tools-panel-item-placeholder"], !shouldApplyPlaceholderStyles && className, firstDisplayedItem === label && __experimentalFirstVisibleItemClass, lastDisplayedItem === label && __experimentalLastVisibleItemClass);
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
								{ "value": "\"div\"" },
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
								{ "value": "\"span\"" },
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
//#region ../packages/components/src/tools-panel/stories/index.story.tsx
var import_jsx_dev_runtime, import_react, fn, _jsxFileName, meta, Default, WithNonToolsPanelItems, WithOptionalItemsPlusIcon, ToolsPanelItems, Slot, WithSlotFillItems, WithConditionalDefaultControl, WithConditionallyRenderedControl, PanelWrapperView, SingleColumnItem, IntroText;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_emotion_styled_browser_development_esm();
		init_react();
		init_component$5(), init_component$6();
		init_component$1(), init_component$2();
		init_panel();
		init_unit_control();
		init_slot_fill();
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
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PanelWrapperView, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolsPanel, {
				...props,
				resetAll,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SingleColumnItem, {
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
							lineNumber: 69,
							columnNumber: 7
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 63,
						columnNumber: 6
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SingleColumnItem, {
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
							lineNumber: 81,
							columnNumber: 7
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 75,
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
							lineNumber: 93,
							columnNumber: 7
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 87,
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
									lineNumber: 110,
									columnNumber: 8
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleGroupControlOption, {
									value: "contain",
									label: "Contain"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 114,
									columnNumber: 8
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleGroupControlOption, {
									value: "fill",
									label: "Fill"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 118,
									columnNumber: 8
								}, void 0)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 104,
							columnNumber: 7
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 99,
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
			}, void 0) }, void 0, false, {
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
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PanelWrapperView, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolsPanel, {
				...props,
				resetAll,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IntroText, { children: "This text illustrates not all items must be wrapped in a ToolsPanelItem and represented in the panel menu." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 150,
						columnNumber: 6
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SingleColumnItem, {
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
							lineNumber: 160,
							columnNumber: 7
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 154,
						columnNumber: 6
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SingleColumnItem, {
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
							lineNumber: 172,
							columnNumber: 7
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 166,
						columnNumber: 6
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 149,
				columnNumber: 5
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 148,
				columnNumber: 4
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 147,
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
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PanelWrapperView, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, { children: /* @__PURE__ */ (0, import_react.createElement)(ToolsPanel, {
				...props,
				resetAll,
				key: isFirstToolsPanelItemShownByDefault ? "true" : "false",
				__self: void 0,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 211,
					columnNumber: 6
				}
			}, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SingleColumnItem, {
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
					lineNumber: 230,
					columnNumber: 8
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 222,
				columnNumber: 7
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SingleColumnItem, {
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
					lineNumber: 242,
					columnNumber: 8
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 236,
				columnNumber: 7
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SingleColumnItem, {
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
					lineNumber: 254,
					columnNumber: 8
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 248,
				columnNumber: 7
			}, void 0)) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 210,
				columnNumber: 5
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 209,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				onClick: () => setIsFirstToolsPanelItemShownByDefault(!isFirstToolsPanelItemShownByDefault),
				"aria-pressed": isFirstToolsPanelItemShownByDefault ? "true" : "false",
				style: { marginTop: "2rem" },
				children: isFirstToolsPanelItemShownByDefault ? "Make first PanelItem hidden by default" : "Make first PanelItem shown by default"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 264,
				columnNumber: 4
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 208,
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
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SingleColumnItem, {
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
						lineNumber: 334,
						columnNumber: 6
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 327,
					columnNumber: 5
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SingleColumnItem, {
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
						lineNumber: 349,
						columnNumber: 6
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 342,
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
						lineNumber: 364,
						columnNumber: 6
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 357,
					columnNumber: 5
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 326,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PanelWrapperView, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolsPanel, {
				...props,
				resetAll,
				panelId,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 377,
					columnNumber: 7
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 372,
				columnNumber: 6
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 371,
				columnNumber: 5
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 370,
				columnNumber: 4
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 325,
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
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Provider, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolsPanelItems, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SingleColumnItem, {
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
					lineNumber: 434,
					columnNumber: 6
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 426,
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
							lineNumber: 458,
							columnNumber: 7
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleGroupControlOption, {
							value: "contain",
							label: "Contain"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 459,
							columnNumber: 7
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleGroupControlOption, {
							value: "fill",
							label: "Fill"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 463,
							columnNumber: 7
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 450,
					columnNumber: 6
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 442,
				columnNumber: 5
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 425,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PanelWrapperView, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolsPanel, {
				...props,
				resetAll,
				panelId,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 474,
					columnNumber: 7
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 469,
				columnNumber: 6
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 468,
				columnNumber: 5
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 467,
				columnNumber: 4
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 424,
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
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Provider, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolsPanelItems, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SingleColumnItem, {
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
					lineNumber: 532,
					columnNumber: 6
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 521,
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
							lineNumber: 559,
							columnNumber: 8
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleGroupControlOption, {
							value: "contain",
							label: "Contain"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 563,
							columnNumber: 8
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleGroupControlOption, {
							value: "fill",
							label: "Fill"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 567,
							columnNumber: 8
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 551,
					columnNumber: 7
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 541,
				columnNumber: 6
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 520,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PanelWrapperView, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToolsPanel, {
				...props,
				resetAll,
				panelId,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 582,
					columnNumber: 7
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 577,
				columnNumber: 6
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 576,
				columnNumber: 5
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 575,
				columnNumber: 4
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 519,
				columnNumber: 3
			}, void 0);
		};
		WithConditionallyRenderedControl.args = {
			...Default.args,
			label: "Tools Panel With Conditionally Rendered Item via SlotFill",
			panelId: "unique-tools-panel-id"
		};
		PanelWrapperView = /* @__PURE__ */ styled("div", {
			target: "eyb8yij0",
			label: "PanelWrapperView"
		})("font-size:13px;.components-dropdown-menu__menu{max-width:220px;}", "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmsvZ3V0ZW5iZXJnLXN0b3J5Ym9vay1wcmV2aWV3L2d1dGVuYmVyZy1zdG9yeWJvb2stcHJldmlldy9wYWNrYWdlcy9jb21wb25lbnRzL3NyYy90b29scy1wYW5lbC9zdG9yaWVzL2luZGV4LnN0b3J5LnRzeCIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9ydW5uZXIvd29yay9ndXRlbmJlcmctc3Rvcnlib29rLXByZXZpZXcvZ3V0ZW5iZXJnLXN0b3J5Ym9vay1wcmV2aWV3L3BhY2thZ2VzL2NvbXBvbmVudHMvc3JjL3Rvb2xzLXBhbmVsL3N0b3JpZXMvaW5kZXguc3RvcnkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTWV0YSwgU3RvcnlGbiB9IGZyb20gJ0BzdG9yeWJvb2svcmVhY3Qtdml0ZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBmbiB9IGZyb20gJ3N0b3J5Ym9vay90ZXN0JztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB7XG5cdFRvZ2dsZUdyb3VwQ29udHJvbCxcblx0VG9nZ2xlR3JvdXBDb250cm9sT3B0aW9uLFxufSBmcm9tICcuLi8uLi90b2dnbGUtZ3JvdXAtY29udHJvbCc7XG5pbXBvcnQgeyBUb29sc1BhbmVsLCBUb29sc1BhbmVsSXRlbSB9IGZyb20gJy4uJztcbmltcG9ydCBQYW5lbCBmcm9tICcuLi8uLi9wYW5lbCc7XG5pbXBvcnQgVW5pdENvbnRyb2wgZnJvbSAnLi4vLi4vdW5pdC1jb250cm9sJztcbmltcG9ydCB7IGNyZWF0ZVNsb3RGaWxsLCBQcm92aWRlciBhcyBTbG90RmlsbFByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vc2xvdC1maWxsJztcblxuY29uc3QgbWV0YTogTWV0YTwgdHlwZW9mIFRvb2xzUGFuZWwgPiA9IHtcblx0aWQ6ICdjb21wb25lbnRzLXRvb2xzcGFuZWwnLFxuXHR0aXRsZTogJ0NvbXBvbmVudHMvQHdvcmRwcmVzcy1jb21wb25lbnRzL1Rvb2xzUGFuZWwnLFxuXHRjb21wb25lbnQ6IFRvb2xzUGFuZWwsXG5cdHN1YmNvbXBvbmVudHM6IHsgVG9vbHNQYW5lbEl0ZW0gfSxcblx0YXJnVHlwZXM6IHtcblx0XHRhczogeyBjb250cm9sOiBmYWxzZSB9LFxuXHRcdGNoaWxkcmVuOiB7IGNvbnRyb2w6IGZhbHNlIH0sXG5cdFx0cGFuZWxJZDogeyBjb250cm9sOiBmYWxzZSB9LFxuXHRcdHJlc2V0QWxsOiB7IGFjdGlvbjogJ3Jlc2V0QWxsJyB9LFxuXHR9LFxuXHR0YWdzOiBbICdzdGF0dXMtZXhwZXJpbWVudGFsJyBdLFxuXHRhcmdzOiB7XG5cdFx0cmVzZXRBbGw6IGZuKCksXG5cdH0sXG5cdHBhcmFtZXRlcnM6IHtcblx0XHRjb250cm9sczoge1xuXHRcdFx0ZXhwYW5kZWQ6IHRydWUsXG5cdFx0fSxcblx0XHRkb2NzOiB7IGNhbnZhczogeyBzb3VyY2VTdGF0ZTogJ3Nob3duJyB9IH0sXG5cdFx0Y29tcG9uZW50U3RhdHVzOiB7XG5cdFx0XHRzdGF0dXM6ICdyZWNvbW1lbmRlZCcsXG5cdFx0XHR3aGVyZVVzZWQ6ICdlZGl0b3InLFxuXHRcdH0sXG5cdH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgbWV0YTtcblxuZXhwb3J0IGNvbnN0IERlZmF1bHQ6IFN0b3J5Rm48IHR5cGVvZiBUb29sc1BhbmVsID4gPSAoIHtcblx0cmVzZXRBbGw6IHJlc2V0QWxsUHJvcCxcblx0Li4ucHJvcHNcbn0gKSA9PiB7XG5cdGNvbnN0IFsgaGVpZ2h0LCBzZXRIZWlnaHQgXSA9IHVzZVN0YXRlPCBzdHJpbmcgfCB1bmRlZmluZWQgPigpO1xuXHRjb25zdCBbIG1pbkhlaWdodCwgc2V0TWluSGVpZ2h0IF0gPSB1c2VTdGF0ZTwgc3RyaW5nIHwgdW5kZWZpbmVkID4oKTtcblx0Y29uc3QgWyB3aWR0aCwgc2V0V2lkdGggXSA9IHVzZVN0YXRlPCBzdHJpbmcgfCB1bmRlZmluZWQgPigpO1xuXHRjb25zdCBbIHNjYWxlLCBzZXRTY2FsZSBdID0gdXNlU3RhdGU8IG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZCA+KCk7XG5cblx0Y29uc3QgcmVzZXRBbGw6IHR5cGVvZiByZXNldEFsbFByb3AgPSAoIGZpbHRlcnMgKSA9PiB7XG5cdFx0c2V0SGVpZ2h0KCB1bmRlZmluZWQgKTtcblx0XHRzZXRXaWR0aCggdW5kZWZpbmVkICk7XG5cdFx0c2V0TWluSGVpZ2h0KCB1bmRlZmluZWQgKTtcblx0XHRzZXRTY2FsZSggdW5kZWZpbmVkICk7XG5cdFx0cmVzZXRBbGxQcm9wKCBmaWx0ZXJzICk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8UGFuZWxXcmFwcGVyVmlldz5cblx0XHRcdDxQYW5lbD5cblx0XHRcdFx0PFRvb2xzUGFuZWwgeyAuLi5wcm9wcyB9IHJlc2V0QWxsPXsgcmVzZXRBbGwgfT5cblx0XHRcdFx0XHQ8U2luZ2xlQ29sdW1uSXRlbVxuXHRcdFx0XHRcdFx0aGFzVmFsdWU9eyAoKSA9PiAhISB3aWR0aCB9XG5cdFx0XHRcdFx0XHRsYWJlbD1cIldpZHRoXCJcblx0XHRcdFx0XHRcdG9uRGVzZWxlY3Q9eyAoKSA9PiBzZXRXaWR0aCggdW5kZWZpbmVkICkgfVxuXHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdFxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxVbml0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIldpZHRoXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyB3aWR0aCB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXh0ICkgPT4gc2V0V2lkdGgoIG5leHQgKSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvU2luZ2xlQ29sdW1uSXRlbT5cblx0XHRcdFx0XHQ8U2luZ2xlQ29sdW1uSXRlbVxuXHRcdFx0XHRcdFx0aGFzVmFsdWU9eyAoKSA9PiAhISBoZWlnaHQgfVxuXHRcdFx0XHRcdFx0bGFiZWw9XCJIZWlnaHRcIlxuXHRcdFx0XHRcdFx0b25EZXNlbGVjdD17ICgpID0+IHNldEhlaWdodCggdW5kZWZpbmVkICkgfVxuXHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdFxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxVbml0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIkhlaWdodFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgaGVpZ2h0IH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PiBzZXRIZWlnaHQoIG5leHQgKSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvU2luZ2xlQ29sdW1uSXRlbT5cblx0XHRcdFx0XHQ8VG9vbHNQYW5lbEl0ZW1cblx0XHRcdFx0XHRcdGhhc1ZhbHVlPXsgKCkgPT4gISEgbWluSGVpZ2h0IH1cblx0XHRcdFx0XHRcdGxhYmVsPVwiTWluaW11bSBoZWlnaHRcIlxuXHRcdFx0XHRcdFx0b25EZXNlbGVjdD17ICgpID0+IHNldE1pbkhlaWdodCggdW5kZWZpbmVkICkgfVxuXHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdFxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxVbml0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIk1pbmltdW0gaGVpZ2h0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBtaW5IZWlnaHQgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV4dCApID0+IHNldE1pbkhlaWdodCggbmV4dCApIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Ub29sc1BhbmVsSXRlbT5cblx0XHRcdFx0XHQ8VG9vbHNQYW5lbEl0ZW1cblx0XHRcdFx0XHRcdGhhc1ZhbHVlPXsgKCkgPT4gISEgc2NhbGUgfVxuXHRcdFx0XHRcdFx0bGFiZWw9XCJTY2FsZVwiXG5cdFx0XHRcdFx0XHRvbkRlc2VsZWN0PXsgKCkgPT4gc2V0U2NhbGUoIHVuZGVmaW5lZCApIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlR3JvdXBDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwiU2NhbGVcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IHNjYWxlIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PiBzZXRTY2FsZSggbmV4dCApIH1cblx0XHRcdFx0XHRcdFx0aXNCbG9ja1xuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlR3JvdXBDb250cm9sT3B0aW9uXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9XCJjb3ZlclwiXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJDb3ZlclwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVHcm91cENvbnRyb2xPcHRpb25cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT1cImNvbnRhaW5cIlxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiQ29udGFpblwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVHcm91cENvbnRyb2xPcHRpb25cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT1cImZpbGxcIlxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiRmlsbFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1RvZ2dsZUdyb3VwQ29udHJvbD5cblx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWxJdGVtPlxuXHRcdFx0XHQ8L1Rvb2xzUGFuZWw+XG5cdFx0XHQ8L1BhbmVsPlxuXHRcdDwvUGFuZWxXcmFwcGVyVmlldz5cblx0KTtcbn07XG5EZWZhdWx0LmFyZ3MgPSB7XG5cdGxhYmVsOiAnVG9vbHMgUGFuZWwgKGRlZmF1bHQgZXhhbXBsZSknLFxufTtcblxuZXhwb3J0IGNvbnN0IFdpdGhOb25Ub29sc1BhbmVsSXRlbXM6IFN0b3J5Rm48IHR5cGVvZiBUb29sc1BhbmVsID4gPSAoIHtcblx0cmVzZXRBbGw6IHJlc2V0QWxsUHJvcCxcblx0Li4ucHJvcHNcbn0gKSA9PiB7XG5cdGNvbnN0IFsgaGVpZ2h0LCBzZXRIZWlnaHQgXSA9IHVzZVN0YXRlPCBzdHJpbmcgfCB1bmRlZmluZWQgPigpO1xuXHRjb25zdCBbIHdpZHRoLCBzZXRXaWR0aCBdID0gdXNlU3RhdGU8IHN0cmluZyB8IHVuZGVmaW5lZCA+KCk7XG5cblx0Y29uc3QgcmVzZXRBbGw6IHR5cGVvZiByZXNldEFsbFByb3AgPSAoIGZpbHRlcnMgKSA9PiB7XG5cdFx0c2V0SGVpZ2h0KCB1bmRlZmluZWQgKTtcblx0XHRzZXRXaWR0aCggdW5kZWZpbmVkICk7XG5cdFx0cmVzZXRBbGxQcm9wKCBmaWx0ZXJzICk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8UGFuZWxXcmFwcGVyVmlldz5cblx0XHRcdDxQYW5lbD5cblx0XHRcdFx0PFRvb2xzUGFuZWwgeyAuLi5wcm9wcyB9IHJlc2V0QWxsPXsgcmVzZXRBbGwgfT5cblx0XHRcdFx0XHQ8SW50cm9UZXh0PlxuXHRcdFx0XHRcdFx0VGhpcyB0ZXh0IGlsbHVzdHJhdGVzIG5vdCBhbGwgaXRlbXMgbXVzdCBiZSB3cmFwcGVkIGluIGFcblx0XHRcdFx0XHRcdFRvb2xzUGFuZWxJdGVtIGFuZCByZXByZXNlbnRlZCBpbiB0aGUgcGFuZWwgbWVudS5cblx0XHRcdFx0XHQ8L0ludHJvVGV4dD5cblx0XHRcdFx0XHQ8U2luZ2xlQ29sdW1uSXRlbVxuXHRcdFx0XHRcdFx0aGFzVmFsdWU9eyAoKSA9PiAhISB3aWR0aCB9XG5cdFx0XHRcdFx0XHRsYWJlbD1cIldpZHRoXCJcblx0XHRcdFx0XHRcdG9uRGVzZWxlY3Q9eyAoKSA9PiBzZXRXaWR0aCggdW5kZWZpbmVkICkgfVxuXHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdFxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxVbml0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIldpZHRoXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyB3aWR0aCB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXh0ICkgPT4gc2V0V2lkdGgoIG5leHQgKSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvU2luZ2xlQ29sdW1uSXRlbT5cblx0XHRcdFx0XHQ8U2luZ2xlQ29sdW1uSXRlbVxuXHRcdFx0XHRcdFx0aGFzVmFsdWU9eyAoKSA9PiAhISBoZWlnaHQgfVxuXHRcdFx0XHRcdFx0bGFiZWw9XCJIZWlnaHRcIlxuXHRcdFx0XHRcdFx0b25EZXNlbGVjdD17ICgpID0+IHNldEhlaWdodCggdW5kZWZpbmVkICkgfVxuXHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdFxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxVbml0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIkhlaWdodFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgaGVpZ2h0IH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PiBzZXRIZWlnaHQoIG5leHQgKSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvU2luZ2xlQ29sdW1uSXRlbT5cblx0XHRcdFx0PC9Ub29sc1BhbmVsPlxuXHRcdFx0PC9QYW5lbD5cblx0XHQ8L1BhbmVsV3JhcHBlclZpZXc+XG5cdCk7XG59O1xuV2l0aE5vblRvb2xzUGFuZWxJdGVtcy5hcmdzID0ge1xuXHQuLi5EZWZhdWx0LmFyZ3MsXG5cdGxhYmVsOiAnVG9vbHNQYW5lbCAod2l0aCBub24tbWVudSBpdGVtcyknLFxufTtcblxuZXhwb3J0IGNvbnN0IFdpdGhPcHRpb25hbEl0ZW1zUGx1c0ljb246IFN0b3J5Rm48IHR5cGVvZiBUb29sc1BhbmVsID4gPSAoIHtcblx0cmVzZXRBbGw6IHJlc2V0QWxsUHJvcCxcblx0Li4ucHJvcHNcbn0gKSA9PiB7XG5cdGNvbnN0IFtcblx0XHRpc0ZpcnN0VG9vbHNQYW5lbEl0ZW1TaG93bkJ5RGVmYXVsdCxcblx0XHRzZXRJc0ZpcnN0VG9vbHNQYW5lbEl0ZW1TaG93bkJ5RGVmYXVsdCxcblx0XSA9IHVzZVN0YXRlKCBmYWxzZSApO1xuXHRjb25zdCBbIGhlaWdodCwgc2V0SGVpZ2h0IF0gPSB1c2VTdGF0ZTwgc3RyaW5nIHwgdW5kZWZpbmVkID4oKTtcblx0Y29uc3QgWyB3aWR0aCwgc2V0V2lkdGggXSA9IHVzZVN0YXRlPCBzdHJpbmcgfCB1bmRlZmluZWQgPigpO1xuXHRjb25zdCBbIG1pbldpZHRoLCBzZXRNaW5XaWR0aCBdID0gdXNlU3RhdGU8IHN0cmluZyB8IHVuZGVmaW5lZCA+KCk7XG5cblx0Y29uc3QgcmVzZXRBbGw6IHR5cGVvZiByZXNldEFsbFByb3AgPSAoIGZpbHRlcnMgKSA9PiB7XG5cdFx0c2V0SGVpZ2h0KCB1bmRlZmluZWQgKTtcblx0XHRzZXRXaWR0aCggdW5kZWZpbmVkICk7XG5cdFx0c2V0TWluV2lkdGgoIHVuZGVmaW5lZCApO1xuXHRcdHJlc2V0QWxsUHJvcCggZmlsdGVycyApO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxQYW5lbFdyYXBwZXJWaWV3PlxuXHRcdFx0XHQ8UGFuZWw+XG5cdFx0XHRcdFx0PFRvb2xzUGFuZWxcblx0XHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0XHRcdFx0cmVzZXRBbGw9eyByZXNldEFsbCB9XG5cdFx0XHRcdFx0XHQvLyBga2V5YCBwcm9wZXJ0eSBoZXJlIGlzIHVzZWQgYXMgYSBoYWNrIHRvIGZvcmNlIGBUb29sc1BhbmVsYCB0byByZS1yZW5kZXJcblx0XHRcdFx0XHRcdC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vV29yZFByZXNzL2d1dGVuYmVyZy9wdWxsLzM4MjYyL2ZpbGVzI3I3OTM0MjI5OTFcblx0XHRcdFx0XHRcdGtleT17XG5cdFx0XHRcdFx0XHRcdGlzRmlyc3RUb29sc1BhbmVsSXRlbVNob3duQnlEZWZhdWx0XG5cdFx0XHRcdFx0XHRcdFx0PyAndHJ1ZSdcblx0XHRcdFx0XHRcdFx0XHQ6ICdmYWxzZSdcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8U2luZ2xlQ29sdW1uSXRlbVxuXHRcdFx0XHRcdFx0XHRoYXNWYWx1ZT17ICgpID0+ICEhIG1pbldpZHRoIH1cblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJNaW5pbXVtIHdpZHRoXCJcblx0XHRcdFx0XHRcdFx0b25EZXNlbGVjdD17ICgpID0+IHNldE1pbldpZHRoKCB1bmRlZmluZWQgKSB9XG5cdFx0XHRcdFx0XHRcdGlzU2hvd25CeURlZmF1bHQ9e1xuXHRcdFx0XHRcdFx0XHRcdGlzRmlyc3RUb29sc1BhbmVsSXRlbVNob3duQnlEZWZhdWx0XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PFVuaXRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJNaW5pbXVtIHdpZHRoXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IG1pbldpZHRoIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV4dCApID0+IHNldE1pbldpZHRoKCBuZXh0ICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9TaW5nbGVDb2x1bW5JdGVtPlxuXHRcdFx0XHRcdFx0PFNpbmdsZUNvbHVtbkl0ZW1cblx0XHRcdFx0XHRcdFx0aGFzVmFsdWU9eyAoKSA9PiAhISB3aWR0aCB9XG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwiV2lkdGhcIlxuXHRcdFx0XHRcdFx0XHRvbkRlc2VsZWN0PXsgKCkgPT4gc2V0V2lkdGgoIHVuZGVmaW5lZCApIH1cblx0XHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdD17IGZhbHNlIH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PFVuaXRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJXaWR0aFwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyB3aWR0aCB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PiBzZXRXaWR0aCggbmV4dCApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvU2luZ2xlQ29sdW1uSXRlbT5cblx0XHRcdFx0XHRcdDxTaW5nbGVDb2x1bW5JdGVtXG5cdFx0XHRcdFx0XHRcdGhhc1ZhbHVlPXsgKCkgPT4gISEgaGVpZ2h0IH1cblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJIZWlnaHRcIlxuXHRcdFx0XHRcdFx0XHRvbkRlc2VsZWN0PXsgKCkgPT4gc2V0SGVpZ2h0KCB1bmRlZmluZWQgKSB9XG5cdFx0XHRcdFx0XHRcdGlzU2hvd25CeURlZmF1bHQ9eyBmYWxzZSB9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxVbml0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiSGVpZ2h0XCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGhlaWdodCB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PiBzZXRIZWlnaHQoIG5leHQgKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1NpbmdsZUNvbHVtbkl0ZW0+XG5cdFx0XHRcdFx0PC9Ub29sc1BhbmVsPlxuXHRcdFx0XHQ8L1BhbmVsPlxuXHRcdFx0PC9QYW5lbFdyYXBwZXJWaWV3PlxuXG5cdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PlxuXHRcdFx0XHRcdHNldElzRmlyc3RUb29sc1BhbmVsSXRlbVNob3duQnlEZWZhdWx0KFxuXHRcdFx0XHRcdFx0ISBpc0ZpcnN0VG9vbHNQYW5lbEl0ZW1TaG93bkJ5RGVmYXVsdFxuXHRcdFx0XHRcdClcblx0XHRcdFx0fVxuXHRcdFx0XHRhcmlhLXByZXNzZWQ9e1xuXHRcdFx0XHRcdGlzRmlyc3RUb29sc1BhbmVsSXRlbVNob3duQnlEZWZhdWx0ID8gJ3RydWUnIDogJ2ZhbHNlJ1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN0eWxlPXsge1xuXHRcdFx0XHRcdG1hcmdpblRvcDogJzJyZW0nLFxuXHRcdFx0XHR9IH1cblx0XHRcdD5cblx0XHRcdFx0eyBpc0ZpcnN0VG9vbHNQYW5lbEl0ZW1TaG93bkJ5RGVmYXVsdFxuXHRcdFx0XHRcdD8gJ01ha2UgZmlyc3QgUGFuZWxJdGVtIGhpZGRlbiBieSBkZWZhdWx0J1xuXHRcdFx0XHRcdDogJ01ha2UgZmlyc3QgUGFuZWxJdGVtIHNob3duIGJ5IGRlZmF1bHQnIH1cblx0XHRcdDwvYnV0dG9uPlxuXHRcdDwvPlxuXHQpO1xufTtcblxuV2l0aE9wdGlvbmFsSXRlbXNQbHVzSWNvbi5hcmdzID0ge1xuXHQuLi5EZWZhdWx0LmFyZ3MsXG5cdGxhYmVsOiAnVG9vbHMgUGFuZWwgKG9wdGlvbmFsIGl0ZW1zIG9ubHkpJyxcbn07XG5cbmNvbnN0IHsgRmlsbDogVG9vbHNQYW5lbEl0ZW1zLCBTbG90IH0gPSBjcmVhdGVTbG90RmlsbCggJ1Rvb2xzUGFuZWxTbG90JyApO1xuXG5leHBvcnQgY29uc3QgV2l0aFNsb3RGaWxsSXRlbXM6IFN0b3J5Rm48IHR5cGVvZiBUb29sc1BhbmVsID4gPSAoIHtcblx0cmVzZXRBbGw6IHJlc2V0QWxsUHJvcCxcblx0cGFuZWxJZCxcblx0Li4ucHJvcHNcbn0gKSA9PiB7XG5cdGNvbnN0IFsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyBdID0gdXNlU3RhdGU8IHtcblx0XHR3aWR0aD86IHN0cmluZztcblx0XHRoZWlnaHQ/OiBzdHJpbmc7XG5cdH0gPigge30gKTtcblx0Y29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBhdHRyaWJ1dGVzO1xuXG5cdGNvbnN0IHJlc2V0QWxsOiB0eXBlb2YgcmVzZXRBbGxQcm9wID0gKCByZXNldEZpbHRlcnMgPSBbXSApID0+IHtcblx0XHRsZXQgbmV3QXR0cmlidXRlczogdHlwZW9mIGF0dHJpYnV0ZXMgPSB7fTtcblxuXHRcdHJlc2V0RmlsdGVycy5mb3JFYWNoKCAoIHJlc2V0RmlsdGVyICkgPT4ge1xuXHRcdFx0bmV3QXR0cmlidXRlcyA9IHtcblx0XHRcdFx0Li4ubmV3QXR0cmlidXRlcyxcblx0XHRcdFx0Li4ucmVzZXRGaWx0ZXIoIG5ld0F0dHJpYnV0ZXMgKSxcblx0XHRcdH07XG5cdFx0fSApO1xuXG5cdFx0c2V0QXR0cmlidXRlcyggbmV3QXR0cmlidXRlcyApO1xuXHRcdHJlc2V0QWxsUHJvcCggcmVzZXRGaWx0ZXJzICk7XG5cdH07XG5cblx0Y29uc3QgdXBkYXRlQXR0cmlidXRlID0gKCBuYW1lOiBzdHJpbmcsIHZhbHVlPzogYW55ICkgPT4ge1xuXHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdC4uLmF0dHJpYnV0ZXMsXG5cdFx0XHRbIG5hbWUgXTogdmFsdWUsXG5cdFx0fSApO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PFNsb3RGaWxsUHJvdmlkZXI+XG5cdFx0XHQ8VG9vbHNQYW5lbEl0ZW1zPlxuXHRcdFx0XHQ8U2luZ2xlQ29sdW1uSXRlbVxuXHRcdFx0XHRcdGhhc1ZhbHVlPXsgKCkgPT4gISEgd2lkdGggfVxuXHRcdFx0XHRcdGxhYmVsPVwiSW5qZWN0ZWQgV2lkdGhcIlxuXHRcdFx0XHRcdG9uRGVzZWxlY3Q9eyAoKSA9PiB1cGRhdGVBdHRyaWJ1dGUoICd3aWR0aCcsIHVuZGVmaW5lZCApIH1cblx0XHRcdFx0XHRyZXNldEFsbEZpbHRlcj17ICgpID0+ICggeyB3aWR0aDogdW5kZWZpbmVkIH0gKSB9XG5cdFx0XHRcdFx0cGFuZWxJZD17IHBhbmVsSWQgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFVuaXRDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD1cIkluamVjdGVkIFdpZHRoXCJcblx0XHRcdFx0XHRcdHZhbHVlPXsgd2lkdGggfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PlxuXHRcdFx0XHRcdFx0XHR1cGRhdGVBdHRyaWJ1dGUoICd3aWR0aCcsIG5leHQgKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvU2luZ2xlQ29sdW1uSXRlbT5cblx0XHRcdFx0PFNpbmdsZUNvbHVtbkl0ZW1cblx0XHRcdFx0XHRoYXNWYWx1ZT17ICgpID0+ICEhIGhlaWdodCB9XG5cdFx0XHRcdFx0bGFiZWw9XCJJbmplY3RlZCBIZWlnaHRcIlxuXHRcdFx0XHRcdG9uRGVzZWxlY3Q9eyAoKSA9PiB1cGRhdGVBdHRyaWJ1dGUoICdoZWlnaHQnLCB1bmRlZmluZWQgKSB9XG5cdFx0XHRcdFx0cmVzZXRBbGxGaWx0ZXI9eyAoKSA9PiAoIHsgaGVpZ2h0OiB1bmRlZmluZWQgfSApIH1cblx0XHRcdFx0XHRwYW5lbElkPXsgcGFuZWxJZCB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8VW5pdENvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPVwiSW5qZWN0ZWQgSGVpZ2h0XCJcblx0XHRcdFx0XHRcdHZhbHVlPXsgaGVpZ2h0IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXh0ICkgPT5cblx0XHRcdFx0XHRcdFx0dXBkYXRlQXR0cmlidXRlKCAnaGVpZ2h0JywgbmV4dCApXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9TaW5nbGVDb2x1bW5JdGVtPlxuXHRcdFx0XHQ8VG9vbHNQYW5lbEl0ZW1cblx0XHRcdFx0XHRoYXNWYWx1ZT17ICgpID0+IHRydWUgfVxuXHRcdFx0XHRcdGxhYmVsPVwiSXRlbSBmb3IgYWx0ZXJuYXRlIHBhbmVsXCJcblx0XHRcdFx0XHRvbkRlc2VsZWN0PXsgKCkgPT4gdW5kZWZpbmVkIH1cblx0XHRcdFx0XHRyZXNldEFsbEZpbHRlcj17ICgpID0+IHVuZGVmaW5lZCB9XG5cdFx0XHRcdFx0cGFuZWxJZD1cImludGVuZGVkLWZvci1hbm90aGVyLXBhbmVsLXZpYS1zaGFyZWQtc2xvdFwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFRoaXMgcGFuZWwgaXRlbSB3aWxsIG5vdCBiZSBkaXNwbGF5ZWQgaW4gdGhlIGRlbW8gYXMgaXRzXG5cdFx0XHRcdFx0XHRwYW5lbElkIGRvZXMgbm90IG1hdGNoIHRoZSBwYW5lbCBiZWluZyByZW5kZXJlZC5cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDwvVG9vbHNQYW5lbEl0ZW0+XG5cdFx0XHQ8L1Rvb2xzUGFuZWxJdGVtcz5cblx0XHRcdDxQYW5lbFdyYXBwZXJWaWV3PlxuXHRcdFx0XHQ8UGFuZWw+XG5cdFx0XHRcdFx0PFRvb2xzUGFuZWxcblx0XHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0XHRcdFx0cmVzZXRBbGw9eyByZXNldEFsbCB9XG5cdFx0XHRcdFx0XHRwYW5lbElkPXsgcGFuZWxJZCB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PFNsb3QgLz5cblx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWw+XG5cdFx0XHRcdDwvUGFuZWw+XG5cdFx0XHQ8L1BhbmVsV3JhcHBlclZpZXc+XG5cdFx0PC9TbG90RmlsbFByb3ZpZGVyPlxuXHQpO1xufTtcbldpdGhTbG90RmlsbEl0ZW1zLmFyZ3MgPSB7XG5cdC4uLkRlZmF1bHQuYXJncyxcblx0bGFiZWw6ICdUb29scyBQYW5lbCBXaXRoIFNsb3RGaWxsIEl0ZW1zJyxcblx0cGFuZWxJZDogJ3VuaXF1ZS10b29scy1wYW5lbC1pZCcsXG59O1xuXG5leHBvcnQgY29uc3QgV2l0aENvbmRpdGlvbmFsRGVmYXVsdENvbnRyb2w6IFN0b3J5Rm48IHR5cGVvZiBUb29sc1BhbmVsID4gPSAoIHtcblx0cmVzZXRBbGw6IHJlc2V0QWxsUHJvcCxcblx0cGFuZWxJZCxcblx0Li4ucHJvcHNcbn0gKSA9PiB7XG5cdGNvbnN0IFsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyBdID0gdXNlU3RhdGU8IHtcblx0XHRoZWlnaHQ/OiBzdHJpbmc7XG5cdFx0c2NhbGU/OiBudW1iZXIgfCBzdHJpbmc7XG5cdH0gPigge30gKTtcblx0Y29uc3QgeyBoZWlnaHQsIHNjYWxlIH0gPSBhdHRyaWJ1dGVzO1xuXG5cdGNvbnN0IHJlc2V0QWxsOiB0eXBlb2YgcmVzZXRBbGxQcm9wID0gKCByZXNldEZpbHRlcnMgPSBbXSApID0+IHtcblx0XHRsZXQgbmV3QXR0cmlidXRlczogdHlwZW9mIGF0dHJpYnV0ZXMgPSB7fTtcblxuXHRcdHJlc2V0RmlsdGVycy5mb3JFYWNoKCAoIHJlc2V0RmlsdGVyICkgPT4ge1xuXHRcdFx0bmV3QXR0cmlidXRlcyA9IHtcblx0XHRcdFx0Li4ubmV3QXR0cmlidXRlcyxcblx0XHRcdFx0Li4ucmVzZXRGaWx0ZXIoIG5ld0F0dHJpYnV0ZXMgKSxcblx0XHRcdH07XG5cdFx0fSApO1xuXG5cdFx0c2V0QXR0cmlidXRlcyggbmV3QXR0cmlidXRlcyApO1xuXG5cdFx0cmVzZXRBbGxQcm9wKCByZXNldEZpbHRlcnMgKTtcblx0fTtcblxuXHRjb25zdCB1cGRhdGVBdHRyaWJ1dGUgPSAoIG5hbWU6IHN0cmluZywgdmFsdWU/OiBhbnkgKSA9PiB7XG5cdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0Li4uYXR0cmlidXRlcyxcblx0XHRcdFsgbmFtZSBdOiB2YWx1ZSxcblx0XHR9ICk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8U2xvdEZpbGxQcm92aWRlcj5cblx0XHRcdDxUb29sc1BhbmVsSXRlbXM+XG5cdFx0XHRcdDxTaW5nbGVDb2x1bW5JdGVtXG5cdFx0XHRcdFx0aGFzVmFsdWU9eyAoKSA9PiAhISBoZWlnaHQgfVxuXHRcdFx0XHRcdGxhYmVsPVwiSW5qZWN0ZWQgSGVpZ2h0XCJcblx0XHRcdFx0XHRvbkRlc2VsZWN0PXsgKCkgPT4gdXBkYXRlQXR0cmlidXRlKCAnaGVpZ2h0JywgdW5kZWZpbmVkICkgfVxuXHRcdFx0XHRcdHJlc2V0QWxsRmlsdGVyPXsgKCkgPT4gKCB7IGhlaWdodDogdW5kZWZpbmVkIH0gKSB9XG5cdFx0XHRcdFx0cGFuZWxJZD17IHBhbmVsSWQgfVxuXHRcdFx0XHRcdGlzU2hvd25CeURlZmF1bHRcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxVbml0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9XCJJbmplY3RlZCBIZWlnaHRcIlxuXHRcdFx0XHRcdFx0dmFsdWU9eyBoZWlnaHQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PlxuXHRcdFx0XHRcdFx0XHR1cGRhdGVBdHRyaWJ1dGUoICdoZWlnaHQnLCBuZXh0IClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1NpbmdsZUNvbHVtbkl0ZW0+XG5cdFx0XHRcdDxUb29sc1BhbmVsSXRlbVxuXHRcdFx0XHRcdGhhc1ZhbHVlPXsgKCkgPT4gISEgc2NhbGUgfVxuXHRcdFx0XHRcdGxhYmVsPVwiU2NhbGVcIlxuXHRcdFx0XHRcdG9uRGVzZWxlY3Q9eyAoKSA9PiB1cGRhdGVBdHRyaWJ1dGUoICdzY2FsZScsIHVuZGVmaW5lZCApIH1cblx0XHRcdFx0XHRyZXNldEFsbEZpbHRlcj17ICgpID0+ICggeyBzY2FsZTogdW5kZWZpbmVkIH0gKSB9XG5cdFx0XHRcdFx0cGFuZWxJZD17IHBhbmVsSWQgfVxuXHRcdFx0XHRcdGlzU2hvd25CeURlZmF1bHQ9eyAhISBoZWlnaHQgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFRvZ2dsZUdyb3VwQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9XCJTY2FsZVwiXG5cdFx0XHRcdFx0XHR2YWx1ZT17IHNjYWxlIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXh0ICkgPT5cblx0XHRcdFx0XHRcdFx0dXBkYXRlQXR0cmlidXRlKCAnc2NhbGUnLCBuZXh0IClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlzQmxvY2tcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlR3JvdXBDb250cm9sT3B0aW9uIHZhbHVlPVwiY292ZXJcIiBsYWJlbD1cIkNvdmVyXCIgLz5cblx0XHRcdFx0XHRcdDxUb2dnbGVHcm91cENvbnRyb2xPcHRpb25cblx0XHRcdFx0XHRcdFx0dmFsdWU9XCJjb250YWluXCJcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJDb250YWluXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlR3JvdXBDb250cm9sT3B0aW9uIHZhbHVlPVwiZmlsbFwiIGxhYmVsPVwiRmlsbFwiIC8+XG5cdFx0XHRcdFx0PC9Ub2dnbGVHcm91cENvbnRyb2w+XG5cdFx0XHRcdDwvVG9vbHNQYW5lbEl0ZW0+XG5cdFx0XHQ8L1Rvb2xzUGFuZWxJdGVtcz5cblx0XHRcdDxQYW5lbFdyYXBwZXJWaWV3PlxuXHRcdFx0XHQ8UGFuZWw+XG5cdFx0XHRcdFx0PFRvb2xzUGFuZWxcblx0XHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0XHRcdFx0cmVzZXRBbGw9eyByZXNldEFsbCB9XG5cdFx0XHRcdFx0XHRwYW5lbElkPXsgcGFuZWxJZCB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PFNsb3QgLz5cblx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWw+XG5cdFx0XHRcdDwvUGFuZWw+XG5cdFx0XHQ8L1BhbmVsV3JhcHBlclZpZXc+XG5cdFx0PC9TbG90RmlsbFByb3ZpZGVyPlxuXHQpO1xufTtcbldpdGhDb25kaXRpb25hbERlZmF1bHRDb250cm9sLmFyZ3MgPSB7XG5cdC4uLkRlZmF1bHQuYXJncyxcblx0bGFiZWw6ICdUb29scyBQYW5lbCBXaXRoIENvbmRpdGlvbmFsIERlZmF1bHQgdmlhIFNsb3RGaWxsJyxcblx0cGFuZWxJZDogJ3VuaXF1ZS10b29scy1wYW5lbC1pZCcsXG59O1xuXG5leHBvcnQgY29uc3QgV2l0aENvbmRpdGlvbmFsbHlSZW5kZXJlZENvbnRyb2w6IFN0b3J5Rm48XG5cdHR5cGVvZiBUb29sc1BhbmVsXG4+ID0gKCB7IHJlc2V0QWxsOiByZXNldEFsbFByb3AsIHBhbmVsSWQsIC4uLnByb3BzIH0gKSA9PiB7XG5cdGNvbnN0IFsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyBdID0gdXNlU3RhdGU8IHtcblx0XHRoZWlnaHQ/OiBzdHJpbmc7XG5cdFx0c2NhbGU/OiBudW1iZXIgfCBzdHJpbmc7XG5cdH0gPigge30gKTtcblx0Y29uc3QgeyBoZWlnaHQsIHNjYWxlIH0gPSBhdHRyaWJ1dGVzO1xuXG5cdGNvbnN0IHJlc2V0QWxsOiB0eXBlb2YgcmVzZXRBbGxQcm9wID0gKCByZXNldEZpbHRlcnMgPSBbXSApID0+IHtcblx0XHRsZXQgbmV3QXR0cmlidXRlczogdHlwZW9mIGF0dHJpYnV0ZXMgPSB7fTtcblxuXHRcdHJlc2V0RmlsdGVycy5mb3JFYWNoKCAoIHJlc2V0RmlsdGVyICkgPT4ge1xuXHRcdFx0bmV3QXR0cmlidXRlcyA9IHtcblx0XHRcdFx0Li4ubmV3QXR0cmlidXRlcyxcblx0XHRcdFx0Li4ucmVzZXRGaWx0ZXIoIG5ld0F0dHJpYnV0ZXMgKSxcblx0XHRcdH07XG5cdFx0fSApO1xuXG5cdFx0c2V0QXR0cmlidXRlcyggbmV3QXR0cmlidXRlcyApO1xuXG5cdFx0cmVzZXRBbGxQcm9wKCByZXNldEZpbHRlcnMgKTtcblx0fTtcblxuXHRjb25zdCB1cGRhdGVBdHRyaWJ1dGUgPSAoIG5hbWU6IHN0cmluZywgdmFsdWU/OiBhbnkgKSA9PiB7XG5cdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0Li4uYXR0cmlidXRlcyxcblx0XHRcdFsgbmFtZSBdOiB2YWx1ZSxcblx0XHR9ICk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8U2xvdEZpbGxQcm92aWRlcj5cblx0XHRcdDxUb29sc1BhbmVsSXRlbXM+XG5cdFx0XHRcdDxTaW5nbGVDb2x1bW5JdGVtXG5cdFx0XHRcdFx0aGFzVmFsdWU9eyAoKSA9PiAhISBoZWlnaHQgfVxuXHRcdFx0XHRcdGxhYmVsPVwiSW5qZWN0ZWQgSGVpZ2h0XCJcblx0XHRcdFx0XHRvbkRlc2VsZWN0PXsgKCkgPT4ge1xuXHRcdFx0XHRcdFx0dXBkYXRlQXR0cmlidXRlKCAnc2NhbGUnLCB1bmRlZmluZWQgKTtcblx0XHRcdFx0XHRcdHVwZGF0ZUF0dHJpYnV0ZSggJ2hlaWdodCcsIHVuZGVmaW5lZCApO1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdHJlc2V0QWxsRmlsdGVyPXsgKCkgPT4gKCB7IGhlaWdodDogdW5kZWZpbmVkIH0gKSB9XG5cdFx0XHRcdFx0cGFuZWxJZD17IHBhbmVsSWQgfVxuXHRcdFx0XHRcdGlzU2hvd25CeURlZmF1bHRcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxVbml0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9XCJJbmplY3RlZCBIZWlnaHRcIlxuXHRcdFx0XHRcdFx0dmFsdWU9eyBoZWlnaHQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PlxuXHRcdFx0XHRcdFx0XHR1cGRhdGVBdHRyaWJ1dGUoICdoZWlnaHQnLCBuZXh0IClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1NpbmdsZUNvbHVtbkl0ZW0+XG5cdFx0XHRcdHsgISEgaGVpZ2h0ICYmIChcblx0XHRcdFx0XHQ8VG9vbHNQYW5lbEl0ZW1cblx0XHRcdFx0XHRcdGhhc1ZhbHVlPXsgKCkgPT4gISEgc2NhbGUgfVxuXHRcdFx0XHRcdFx0bGFiZWw9XCJTY2FsZVwiXG5cdFx0XHRcdFx0XHRvbkRlc2VsZWN0PXsgKCkgPT5cblx0XHRcdFx0XHRcdFx0dXBkYXRlQXR0cmlidXRlKCAnc2NhbGUnLCB1bmRlZmluZWQgKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmVzZXRBbGxGaWx0ZXI9eyAoKSA9PiAoIHsgc2NhbGU6IHVuZGVmaW5lZCB9ICkgfVxuXHRcdFx0XHRcdFx0cGFuZWxJZD17IHBhbmVsSWQgfVxuXHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdFxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxUb2dnbGVHcm91cENvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJTY2FsZVwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgc2NhbGUgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV4dCApID0+XG5cdFx0XHRcdFx0XHRcdFx0dXBkYXRlQXR0cmlidXRlKCAnc2NhbGUnLCBuZXh0IClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpc0Jsb2NrXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVHcm91cENvbnRyb2xPcHRpb25cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT1cImNvdmVyXCJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkNvdmVyXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUdyb3VwQ29udHJvbE9wdGlvblxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPVwiY29udGFpblwiXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJDb250YWluXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUdyb3VwQ29udHJvbE9wdGlvblxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPVwiZmlsbFwiXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJGaWxsXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvVG9nZ2xlR3JvdXBDb250cm9sPlxuXHRcdFx0XHRcdDwvVG9vbHNQYW5lbEl0ZW0+XG5cdFx0XHRcdCkgfVxuXHRcdFx0PC9Ub29sc1BhbmVsSXRlbXM+XG5cdFx0XHQ8UGFuZWxXcmFwcGVyVmlldz5cblx0XHRcdFx0PFBhbmVsPlxuXHRcdFx0XHRcdDxUb29sc1BhbmVsXG5cdFx0XHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdFx0XHRcdHJlc2V0QWxsPXsgcmVzZXRBbGwgfVxuXHRcdFx0XHRcdFx0cGFuZWxJZD17IHBhbmVsSWQgfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxTbG90IC8+XG5cdFx0XHRcdFx0PC9Ub29sc1BhbmVsPlxuXHRcdFx0XHQ8L1BhbmVsPlxuXHRcdFx0PC9QYW5lbFdyYXBwZXJWaWV3PlxuXHRcdDwvU2xvdEZpbGxQcm92aWRlcj5cblx0KTtcbn07XG5XaXRoQ29uZGl0aW9uYWxseVJlbmRlcmVkQ29udHJvbC5hcmdzID0ge1xuXHQuLi5EZWZhdWx0LmFyZ3MsXG5cdGxhYmVsOiAnVG9vbHMgUGFuZWwgV2l0aCBDb25kaXRpb25hbGx5IFJlbmRlcmVkIEl0ZW0gdmlhIFNsb3RGaWxsJyxcblx0cGFuZWxJZDogJ3VuaXF1ZS10b29scy1wYW5lbC1pZCcsXG59O1xuXG5jb25zdCBQYW5lbFdyYXBwZXJWaWV3ID0gc3R5bGVkLmRpdmBcblx0Zm9udC1zaXplOiAxM3B4O1xuXG5cdC5jb21wb25lbnRzLWRyb3Bkb3duLW1lbnVfX21lbnUge1xuXHRcdG1heC13aWR0aDogMjIwcHg7XG5cdH1cbmA7XG5cbmNvbnN0IFNpbmdsZUNvbHVtbkl0ZW0gPSBzdHlsZWQoIFRvb2xzUGFuZWxJdGVtIClgXG5cdGdyaWQtY29sdW1uOiBzcGFuIDE7XG5gO1xuXG5jb25zdCBJbnRyb1RleHQgPSBzdHlsZWQuZGl2YFxuXHRncmlkLWNvbHVtbjogc3BhbiAyO1xuYDtcbiJdLCJtYXBwaW5ncyI6IkFBa2xCeUIiLCJpZ25vcmVMaXN0IjpbXX0= */");
		SingleColumnItem = /* @__PURE__ */ styled(ToolsPanelItem, {
			target: "eyb8yij1",
			label: "SingleColumnItem"
		})("grid-column:span 1;", "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmsvZ3V0ZW5iZXJnLXN0b3J5Ym9vay1wcmV2aWV3L2d1dGVuYmVyZy1zdG9yeWJvb2stcHJldmlldy9wYWNrYWdlcy9jb21wb25lbnRzL3NyYy90b29scy1wYW5lbC9zdG9yaWVzL2luZGV4LnN0b3J5LnRzeCIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9ydW5uZXIvd29yay9ndXRlbmJlcmctc3Rvcnlib29rLXByZXZpZXcvZ3V0ZW5iZXJnLXN0b3J5Ym9vay1wcmV2aWV3L3BhY2thZ2VzL2NvbXBvbmVudHMvc3JjL3Rvb2xzLXBhbmVsL3N0b3JpZXMvaW5kZXguc3RvcnkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTWV0YSwgU3RvcnlGbiB9IGZyb20gJ0BzdG9yeWJvb2svcmVhY3Qtdml0ZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBmbiB9IGZyb20gJ3N0b3J5Ym9vay90ZXN0JztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB7XG5cdFRvZ2dsZUdyb3VwQ29udHJvbCxcblx0VG9nZ2xlR3JvdXBDb250cm9sT3B0aW9uLFxufSBmcm9tICcuLi8uLi90b2dnbGUtZ3JvdXAtY29udHJvbCc7XG5pbXBvcnQgeyBUb29sc1BhbmVsLCBUb29sc1BhbmVsSXRlbSB9IGZyb20gJy4uJztcbmltcG9ydCBQYW5lbCBmcm9tICcuLi8uLi9wYW5lbCc7XG5pbXBvcnQgVW5pdENvbnRyb2wgZnJvbSAnLi4vLi4vdW5pdC1jb250cm9sJztcbmltcG9ydCB7IGNyZWF0ZVNsb3RGaWxsLCBQcm92aWRlciBhcyBTbG90RmlsbFByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vc2xvdC1maWxsJztcblxuY29uc3QgbWV0YTogTWV0YTwgdHlwZW9mIFRvb2xzUGFuZWwgPiA9IHtcblx0aWQ6ICdjb21wb25lbnRzLXRvb2xzcGFuZWwnLFxuXHR0aXRsZTogJ0NvbXBvbmVudHMvQHdvcmRwcmVzcy1jb21wb25lbnRzL1Rvb2xzUGFuZWwnLFxuXHRjb21wb25lbnQ6IFRvb2xzUGFuZWwsXG5cdHN1YmNvbXBvbmVudHM6IHsgVG9vbHNQYW5lbEl0ZW0gfSxcblx0YXJnVHlwZXM6IHtcblx0XHRhczogeyBjb250cm9sOiBmYWxzZSB9LFxuXHRcdGNoaWxkcmVuOiB7IGNvbnRyb2w6IGZhbHNlIH0sXG5cdFx0cGFuZWxJZDogeyBjb250cm9sOiBmYWxzZSB9LFxuXHRcdHJlc2V0QWxsOiB7IGFjdGlvbjogJ3Jlc2V0QWxsJyB9LFxuXHR9LFxuXHR0YWdzOiBbICdzdGF0dXMtZXhwZXJpbWVudGFsJyBdLFxuXHRhcmdzOiB7XG5cdFx0cmVzZXRBbGw6IGZuKCksXG5cdH0sXG5cdHBhcmFtZXRlcnM6IHtcblx0XHRjb250cm9sczoge1xuXHRcdFx0ZXhwYW5kZWQ6IHRydWUsXG5cdFx0fSxcblx0XHRkb2NzOiB7IGNhbnZhczogeyBzb3VyY2VTdGF0ZTogJ3Nob3duJyB9IH0sXG5cdFx0Y29tcG9uZW50U3RhdHVzOiB7XG5cdFx0XHRzdGF0dXM6ICdyZWNvbW1lbmRlZCcsXG5cdFx0XHR3aGVyZVVzZWQ6ICdlZGl0b3InLFxuXHRcdH0sXG5cdH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgbWV0YTtcblxuZXhwb3J0IGNvbnN0IERlZmF1bHQ6IFN0b3J5Rm48IHR5cGVvZiBUb29sc1BhbmVsID4gPSAoIHtcblx0cmVzZXRBbGw6IHJlc2V0QWxsUHJvcCxcblx0Li4ucHJvcHNcbn0gKSA9PiB7XG5cdGNvbnN0IFsgaGVpZ2h0LCBzZXRIZWlnaHQgXSA9IHVzZVN0YXRlPCBzdHJpbmcgfCB1bmRlZmluZWQgPigpO1xuXHRjb25zdCBbIG1pbkhlaWdodCwgc2V0TWluSGVpZ2h0IF0gPSB1c2VTdGF0ZTwgc3RyaW5nIHwgdW5kZWZpbmVkID4oKTtcblx0Y29uc3QgWyB3aWR0aCwgc2V0V2lkdGggXSA9IHVzZVN0YXRlPCBzdHJpbmcgfCB1bmRlZmluZWQgPigpO1xuXHRjb25zdCBbIHNjYWxlLCBzZXRTY2FsZSBdID0gdXNlU3RhdGU8IG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZCA+KCk7XG5cblx0Y29uc3QgcmVzZXRBbGw6IHR5cGVvZiByZXNldEFsbFByb3AgPSAoIGZpbHRlcnMgKSA9PiB7XG5cdFx0c2V0SGVpZ2h0KCB1bmRlZmluZWQgKTtcblx0XHRzZXRXaWR0aCggdW5kZWZpbmVkICk7XG5cdFx0c2V0TWluSGVpZ2h0KCB1bmRlZmluZWQgKTtcblx0XHRzZXRTY2FsZSggdW5kZWZpbmVkICk7XG5cdFx0cmVzZXRBbGxQcm9wKCBmaWx0ZXJzICk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8UGFuZWxXcmFwcGVyVmlldz5cblx0XHRcdDxQYW5lbD5cblx0XHRcdFx0PFRvb2xzUGFuZWwgeyAuLi5wcm9wcyB9IHJlc2V0QWxsPXsgcmVzZXRBbGwgfT5cblx0XHRcdFx0XHQ8U2luZ2xlQ29sdW1uSXRlbVxuXHRcdFx0XHRcdFx0aGFzVmFsdWU9eyAoKSA9PiAhISB3aWR0aCB9XG5cdFx0XHRcdFx0XHRsYWJlbD1cIldpZHRoXCJcblx0XHRcdFx0XHRcdG9uRGVzZWxlY3Q9eyAoKSA9PiBzZXRXaWR0aCggdW5kZWZpbmVkICkgfVxuXHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdFxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxVbml0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIldpZHRoXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyB3aWR0aCB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXh0ICkgPT4gc2V0V2lkdGgoIG5leHQgKSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvU2luZ2xlQ29sdW1uSXRlbT5cblx0XHRcdFx0XHQ8U2luZ2xlQ29sdW1uSXRlbVxuXHRcdFx0XHRcdFx0aGFzVmFsdWU9eyAoKSA9PiAhISBoZWlnaHQgfVxuXHRcdFx0XHRcdFx0bGFiZWw9XCJIZWlnaHRcIlxuXHRcdFx0XHRcdFx0b25EZXNlbGVjdD17ICgpID0+IHNldEhlaWdodCggdW5kZWZpbmVkICkgfVxuXHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdFxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxVbml0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIkhlaWdodFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgaGVpZ2h0IH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PiBzZXRIZWlnaHQoIG5leHQgKSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvU2luZ2xlQ29sdW1uSXRlbT5cblx0XHRcdFx0XHQ8VG9vbHNQYW5lbEl0ZW1cblx0XHRcdFx0XHRcdGhhc1ZhbHVlPXsgKCkgPT4gISEgbWluSGVpZ2h0IH1cblx0XHRcdFx0XHRcdGxhYmVsPVwiTWluaW11bSBoZWlnaHRcIlxuXHRcdFx0XHRcdFx0b25EZXNlbGVjdD17ICgpID0+IHNldE1pbkhlaWdodCggdW5kZWZpbmVkICkgfVxuXHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdFxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxVbml0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIk1pbmltdW0gaGVpZ2h0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBtaW5IZWlnaHQgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV4dCApID0+IHNldE1pbkhlaWdodCggbmV4dCApIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Ub29sc1BhbmVsSXRlbT5cblx0XHRcdFx0XHQ8VG9vbHNQYW5lbEl0ZW1cblx0XHRcdFx0XHRcdGhhc1ZhbHVlPXsgKCkgPT4gISEgc2NhbGUgfVxuXHRcdFx0XHRcdFx0bGFiZWw9XCJTY2FsZVwiXG5cdFx0XHRcdFx0XHRvbkRlc2VsZWN0PXsgKCkgPT4gc2V0U2NhbGUoIHVuZGVmaW5lZCApIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlR3JvdXBDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwiU2NhbGVcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IHNjYWxlIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PiBzZXRTY2FsZSggbmV4dCApIH1cblx0XHRcdFx0XHRcdFx0aXNCbG9ja1xuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlR3JvdXBDb250cm9sT3B0aW9uXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9XCJjb3ZlclwiXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJDb3ZlclwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVHcm91cENvbnRyb2xPcHRpb25cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT1cImNvbnRhaW5cIlxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiQ29udGFpblwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVHcm91cENvbnRyb2xPcHRpb25cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT1cImZpbGxcIlxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiRmlsbFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1RvZ2dsZUdyb3VwQ29udHJvbD5cblx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWxJdGVtPlxuXHRcdFx0XHQ8L1Rvb2xzUGFuZWw+XG5cdFx0XHQ8L1BhbmVsPlxuXHRcdDwvUGFuZWxXcmFwcGVyVmlldz5cblx0KTtcbn07XG5EZWZhdWx0LmFyZ3MgPSB7XG5cdGxhYmVsOiAnVG9vbHMgUGFuZWwgKGRlZmF1bHQgZXhhbXBsZSknLFxufTtcblxuZXhwb3J0IGNvbnN0IFdpdGhOb25Ub29sc1BhbmVsSXRlbXM6IFN0b3J5Rm48IHR5cGVvZiBUb29sc1BhbmVsID4gPSAoIHtcblx0cmVzZXRBbGw6IHJlc2V0QWxsUHJvcCxcblx0Li4ucHJvcHNcbn0gKSA9PiB7XG5cdGNvbnN0IFsgaGVpZ2h0LCBzZXRIZWlnaHQgXSA9IHVzZVN0YXRlPCBzdHJpbmcgfCB1bmRlZmluZWQgPigpO1xuXHRjb25zdCBbIHdpZHRoLCBzZXRXaWR0aCBdID0gdXNlU3RhdGU8IHN0cmluZyB8IHVuZGVmaW5lZCA+KCk7XG5cblx0Y29uc3QgcmVzZXRBbGw6IHR5cGVvZiByZXNldEFsbFByb3AgPSAoIGZpbHRlcnMgKSA9PiB7XG5cdFx0c2V0SGVpZ2h0KCB1bmRlZmluZWQgKTtcblx0XHRzZXRXaWR0aCggdW5kZWZpbmVkICk7XG5cdFx0cmVzZXRBbGxQcm9wKCBmaWx0ZXJzICk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8UGFuZWxXcmFwcGVyVmlldz5cblx0XHRcdDxQYW5lbD5cblx0XHRcdFx0PFRvb2xzUGFuZWwgeyAuLi5wcm9wcyB9IHJlc2V0QWxsPXsgcmVzZXRBbGwgfT5cblx0XHRcdFx0XHQ8SW50cm9UZXh0PlxuXHRcdFx0XHRcdFx0VGhpcyB0ZXh0IGlsbHVzdHJhdGVzIG5vdCBhbGwgaXRlbXMgbXVzdCBiZSB3cmFwcGVkIGluIGFcblx0XHRcdFx0XHRcdFRvb2xzUGFuZWxJdGVtIGFuZCByZXByZXNlbnRlZCBpbiB0aGUgcGFuZWwgbWVudS5cblx0XHRcdFx0XHQ8L0ludHJvVGV4dD5cblx0XHRcdFx0XHQ8U2luZ2xlQ29sdW1uSXRlbVxuXHRcdFx0XHRcdFx0aGFzVmFsdWU9eyAoKSA9PiAhISB3aWR0aCB9XG5cdFx0XHRcdFx0XHRsYWJlbD1cIldpZHRoXCJcblx0XHRcdFx0XHRcdG9uRGVzZWxlY3Q9eyAoKSA9PiBzZXRXaWR0aCggdW5kZWZpbmVkICkgfVxuXHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdFxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxVbml0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIldpZHRoXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyB3aWR0aCB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXh0ICkgPT4gc2V0V2lkdGgoIG5leHQgKSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvU2luZ2xlQ29sdW1uSXRlbT5cblx0XHRcdFx0XHQ8U2luZ2xlQ29sdW1uSXRlbVxuXHRcdFx0XHRcdFx0aGFzVmFsdWU9eyAoKSA9PiAhISBoZWlnaHQgfVxuXHRcdFx0XHRcdFx0bGFiZWw9XCJIZWlnaHRcIlxuXHRcdFx0XHRcdFx0b25EZXNlbGVjdD17ICgpID0+IHNldEhlaWdodCggdW5kZWZpbmVkICkgfVxuXHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdFxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxVbml0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIkhlaWdodFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgaGVpZ2h0IH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PiBzZXRIZWlnaHQoIG5leHQgKSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvU2luZ2xlQ29sdW1uSXRlbT5cblx0XHRcdFx0PC9Ub29sc1BhbmVsPlxuXHRcdFx0PC9QYW5lbD5cblx0XHQ8L1BhbmVsV3JhcHBlclZpZXc+XG5cdCk7XG59O1xuV2l0aE5vblRvb2xzUGFuZWxJdGVtcy5hcmdzID0ge1xuXHQuLi5EZWZhdWx0LmFyZ3MsXG5cdGxhYmVsOiAnVG9vbHNQYW5lbCAod2l0aCBub24tbWVudSBpdGVtcyknLFxufTtcblxuZXhwb3J0IGNvbnN0IFdpdGhPcHRpb25hbEl0ZW1zUGx1c0ljb246IFN0b3J5Rm48IHR5cGVvZiBUb29sc1BhbmVsID4gPSAoIHtcblx0cmVzZXRBbGw6IHJlc2V0QWxsUHJvcCxcblx0Li4ucHJvcHNcbn0gKSA9PiB7XG5cdGNvbnN0IFtcblx0XHRpc0ZpcnN0VG9vbHNQYW5lbEl0ZW1TaG93bkJ5RGVmYXVsdCxcblx0XHRzZXRJc0ZpcnN0VG9vbHNQYW5lbEl0ZW1TaG93bkJ5RGVmYXVsdCxcblx0XSA9IHVzZVN0YXRlKCBmYWxzZSApO1xuXHRjb25zdCBbIGhlaWdodCwgc2V0SGVpZ2h0IF0gPSB1c2VTdGF0ZTwgc3RyaW5nIHwgdW5kZWZpbmVkID4oKTtcblx0Y29uc3QgWyB3aWR0aCwgc2V0V2lkdGggXSA9IHVzZVN0YXRlPCBzdHJpbmcgfCB1bmRlZmluZWQgPigpO1xuXHRjb25zdCBbIG1pbldpZHRoLCBzZXRNaW5XaWR0aCBdID0gdXNlU3RhdGU8IHN0cmluZyB8IHVuZGVmaW5lZCA+KCk7XG5cblx0Y29uc3QgcmVzZXRBbGw6IHR5cGVvZiByZXNldEFsbFByb3AgPSAoIGZpbHRlcnMgKSA9PiB7XG5cdFx0c2V0SGVpZ2h0KCB1bmRlZmluZWQgKTtcblx0XHRzZXRXaWR0aCggdW5kZWZpbmVkICk7XG5cdFx0c2V0TWluV2lkdGgoIHVuZGVmaW5lZCApO1xuXHRcdHJlc2V0QWxsUHJvcCggZmlsdGVycyApO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxQYW5lbFdyYXBwZXJWaWV3PlxuXHRcdFx0XHQ8UGFuZWw+XG5cdFx0XHRcdFx0PFRvb2xzUGFuZWxcblx0XHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0XHRcdFx0cmVzZXRBbGw9eyByZXNldEFsbCB9XG5cdFx0XHRcdFx0XHQvLyBga2V5YCBwcm9wZXJ0eSBoZXJlIGlzIHVzZWQgYXMgYSBoYWNrIHRvIGZvcmNlIGBUb29sc1BhbmVsYCB0byByZS1yZW5kZXJcblx0XHRcdFx0XHRcdC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vV29yZFByZXNzL2d1dGVuYmVyZy9wdWxsLzM4MjYyL2ZpbGVzI3I3OTM0MjI5OTFcblx0XHRcdFx0XHRcdGtleT17XG5cdFx0XHRcdFx0XHRcdGlzRmlyc3RUb29sc1BhbmVsSXRlbVNob3duQnlEZWZhdWx0XG5cdFx0XHRcdFx0XHRcdFx0PyAndHJ1ZSdcblx0XHRcdFx0XHRcdFx0XHQ6ICdmYWxzZSdcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8U2luZ2xlQ29sdW1uSXRlbVxuXHRcdFx0XHRcdFx0XHRoYXNWYWx1ZT17ICgpID0+ICEhIG1pbldpZHRoIH1cblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJNaW5pbXVtIHdpZHRoXCJcblx0XHRcdFx0XHRcdFx0b25EZXNlbGVjdD17ICgpID0+IHNldE1pbldpZHRoKCB1bmRlZmluZWQgKSB9XG5cdFx0XHRcdFx0XHRcdGlzU2hvd25CeURlZmF1bHQ9e1xuXHRcdFx0XHRcdFx0XHRcdGlzRmlyc3RUb29sc1BhbmVsSXRlbVNob3duQnlEZWZhdWx0XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PFVuaXRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJNaW5pbXVtIHdpZHRoXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IG1pbldpZHRoIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV4dCApID0+IHNldE1pbldpZHRoKCBuZXh0ICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9TaW5nbGVDb2x1bW5JdGVtPlxuXHRcdFx0XHRcdFx0PFNpbmdsZUNvbHVtbkl0ZW1cblx0XHRcdFx0XHRcdFx0aGFzVmFsdWU9eyAoKSA9PiAhISB3aWR0aCB9XG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwiV2lkdGhcIlxuXHRcdFx0XHRcdFx0XHRvbkRlc2VsZWN0PXsgKCkgPT4gc2V0V2lkdGgoIHVuZGVmaW5lZCApIH1cblx0XHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdD17IGZhbHNlIH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PFVuaXRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJXaWR0aFwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyB3aWR0aCB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PiBzZXRXaWR0aCggbmV4dCApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvU2luZ2xlQ29sdW1uSXRlbT5cblx0XHRcdFx0XHRcdDxTaW5nbGVDb2x1bW5JdGVtXG5cdFx0XHRcdFx0XHRcdGhhc1ZhbHVlPXsgKCkgPT4gISEgaGVpZ2h0IH1cblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJIZWlnaHRcIlxuXHRcdFx0XHRcdFx0XHRvbkRlc2VsZWN0PXsgKCkgPT4gc2V0SGVpZ2h0KCB1bmRlZmluZWQgKSB9XG5cdFx0XHRcdFx0XHRcdGlzU2hvd25CeURlZmF1bHQ9eyBmYWxzZSB9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxVbml0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiSGVpZ2h0XCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGhlaWdodCB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PiBzZXRIZWlnaHQoIG5leHQgKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1NpbmdsZUNvbHVtbkl0ZW0+XG5cdFx0XHRcdFx0PC9Ub29sc1BhbmVsPlxuXHRcdFx0XHQ8L1BhbmVsPlxuXHRcdFx0PC9QYW5lbFdyYXBwZXJWaWV3PlxuXG5cdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PlxuXHRcdFx0XHRcdHNldElzRmlyc3RUb29sc1BhbmVsSXRlbVNob3duQnlEZWZhdWx0KFxuXHRcdFx0XHRcdFx0ISBpc0ZpcnN0VG9vbHNQYW5lbEl0ZW1TaG93bkJ5RGVmYXVsdFxuXHRcdFx0XHRcdClcblx0XHRcdFx0fVxuXHRcdFx0XHRhcmlhLXByZXNzZWQ9e1xuXHRcdFx0XHRcdGlzRmlyc3RUb29sc1BhbmVsSXRlbVNob3duQnlEZWZhdWx0ID8gJ3RydWUnIDogJ2ZhbHNlJ1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN0eWxlPXsge1xuXHRcdFx0XHRcdG1hcmdpblRvcDogJzJyZW0nLFxuXHRcdFx0XHR9IH1cblx0XHRcdD5cblx0XHRcdFx0eyBpc0ZpcnN0VG9vbHNQYW5lbEl0ZW1TaG93bkJ5RGVmYXVsdFxuXHRcdFx0XHRcdD8gJ01ha2UgZmlyc3QgUGFuZWxJdGVtIGhpZGRlbiBieSBkZWZhdWx0J1xuXHRcdFx0XHRcdDogJ01ha2UgZmlyc3QgUGFuZWxJdGVtIHNob3duIGJ5IGRlZmF1bHQnIH1cblx0XHRcdDwvYnV0dG9uPlxuXHRcdDwvPlxuXHQpO1xufTtcblxuV2l0aE9wdGlvbmFsSXRlbXNQbHVzSWNvbi5hcmdzID0ge1xuXHQuLi5EZWZhdWx0LmFyZ3MsXG5cdGxhYmVsOiAnVG9vbHMgUGFuZWwgKG9wdGlvbmFsIGl0ZW1zIG9ubHkpJyxcbn07XG5cbmNvbnN0IHsgRmlsbDogVG9vbHNQYW5lbEl0ZW1zLCBTbG90IH0gPSBjcmVhdGVTbG90RmlsbCggJ1Rvb2xzUGFuZWxTbG90JyApO1xuXG5leHBvcnQgY29uc3QgV2l0aFNsb3RGaWxsSXRlbXM6IFN0b3J5Rm48IHR5cGVvZiBUb29sc1BhbmVsID4gPSAoIHtcblx0cmVzZXRBbGw6IHJlc2V0QWxsUHJvcCxcblx0cGFuZWxJZCxcblx0Li4ucHJvcHNcbn0gKSA9PiB7XG5cdGNvbnN0IFsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyBdID0gdXNlU3RhdGU8IHtcblx0XHR3aWR0aD86IHN0cmluZztcblx0XHRoZWlnaHQ/OiBzdHJpbmc7XG5cdH0gPigge30gKTtcblx0Y29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBhdHRyaWJ1dGVzO1xuXG5cdGNvbnN0IHJlc2V0QWxsOiB0eXBlb2YgcmVzZXRBbGxQcm9wID0gKCByZXNldEZpbHRlcnMgPSBbXSApID0+IHtcblx0XHRsZXQgbmV3QXR0cmlidXRlczogdHlwZW9mIGF0dHJpYnV0ZXMgPSB7fTtcblxuXHRcdHJlc2V0RmlsdGVycy5mb3JFYWNoKCAoIHJlc2V0RmlsdGVyICkgPT4ge1xuXHRcdFx0bmV3QXR0cmlidXRlcyA9IHtcblx0XHRcdFx0Li4ubmV3QXR0cmlidXRlcyxcblx0XHRcdFx0Li4ucmVzZXRGaWx0ZXIoIG5ld0F0dHJpYnV0ZXMgKSxcblx0XHRcdH07XG5cdFx0fSApO1xuXG5cdFx0c2V0QXR0cmlidXRlcyggbmV3QXR0cmlidXRlcyApO1xuXHRcdHJlc2V0QWxsUHJvcCggcmVzZXRGaWx0ZXJzICk7XG5cdH07XG5cblx0Y29uc3QgdXBkYXRlQXR0cmlidXRlID0gKCBuYW1lOiBzdHJpbmcsIHZhbHVlPzogYW55ICkgPT4ge1xuXHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdC4uLmF0dHJpYnV0ZXMsXG5cdFx0XHRbIG5hbWUgXTogdmFsdWUsXG5cdFx0fSApO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PFNsb3RGaWxsUHJvdmlkZXI+XG5cdFx0XHQ8VG9vbHNQYW5lbEl0ZW1zPlxuXHRcdFx0XHQ8U2luZ2xlQ29sdW1uSXRlbVxuXHRcdFx0XHRcdGhhc1ZhbHVlPXsgKCkgPT4gISEgd2lkdGggfVxuXHRcdFx0XHRcdGxhYmVsPVwiSW5qZWN0ZWQgV2lkdGhcIlxuXHRcdFx0XHRcdG9uRGVzZWxlY3Q9eyAoKSA9PiB1cGRhdGVBdHRyaWJ1dGUoICd3aWR0aCcsIHVuZGVmaW5lZCApIH1cblx0XHRcdFx0XHRyZXNldEFsbEZpbHRlcj17ICgpID0+ICggeyB3aWR0aDogdW5kZWZpbmVkIH0gKSB9XG5cdFx0XHRcdFx0cGFuZWxJZD17IHBhbmVsSWQgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFVuaXRDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD1cIkluamVjdGVkIFdpZHRoXCJcblx0XHRcdFx0XHRcdHZhbHVlPXsgd2lkdGggfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PlxuXHRcdFx0XHRcdFx0XHR1cGRhdGVBdHRyaWJ1dGUoICd3aWR0aCcsIG5leHQgKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvU2luZ2xlQ29sdW1uSXRlbT5cblx0XHRcdFx0PFNpbmdsZUNvbHVtbkl0ZW1cblx0XHRcdFx0XHRoYXNWYWx1ZT17ICgpID0+ICEhIGhlaWdodCB9XG5cdFx0XHRcdFx0bGFiZWw9XCJJbmplY3RlZCBIZWlnaHRcIlxuXHRcdFx0XHRcdG9uRGVzZWxlY3Q9eyAoKSA9PiB1cGRhdGVBdHRyaWJ1dGUoICdoZWlnaHQnLCB1bmRlZmluZWQgKSB9XG5cdFx0XHRcdFx0cmVzZXRBbGxGaWx0ZXI9eyAoKSA9PiAoIHsgaGVpZ2h0OiB1bmRlZmluZWQgfSApIH1cblx0XHRcdFx0XHRwYW5lbElkPXsgcGFuZWxJZCB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8VW5pdENvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPVwiSW5qZWN0ZWQgSGVpZ2h0XCJcblx0XHRcdFx0XHRcdHZhbHVlPXsgaGVpZ2h0IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXh0ICkgPT5cblx0XHRcdFx0XHRcdFx0dXBkYXRlQXR0cmlidXRlKCAnaGVpZ2h0JywgbmV4dCApXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9TaW5nbGVDb2x1bW5JdGVtPlxuXHRcdFx0XHQ8VG9vbHNQYW5lbEl0ZW1cblx0XHRcdFx0XHRoYXNWYWx1ZT17ICgpID0+IHRydWUgfVxuXHRcdFx0XHRcdGxhYmVsPVwiSXRlbSBmb3IgYWx0ZXJuYXRlIHBhbmVsXCJcblx0XHRcdFx0XHRvbkRlc2VsZWN0PXsgKCkgPT4gdW5kZWZpbmVkIH1cblx0XHRcdFx0XHRyZXNldEFsbEZpbHRlcj17ICgpID0+IHVuZGVmaW5lZCB9XG5cdFx0XHRcdFx0cGFuZWxJZD1cImludGVuZGVkLWZvci1hbm90aGVyLXBhbmVsLXZpYS1zaGFyZWQtc2xvdFwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFRoaXMgcGFuZWwgaXRlbSB3aWxsIG5vdCBiZSBkaXNwbGF5ZWQgaW4gdGhlIGRlbW8gYXMgaXRzXG5cdFx0XHRcdFx0XHRwYW5lbElkIGRvZXMgbm90IG1hdGNoIHRoZSBwYW5lbCBiZWluZyByZW5kZXJlZC5cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDwvVG9vbHNQYW5lbEl0ZW0+XG5cdFx0XHQ8L1Rvb2xzUGFuZWxJdGVtcz5cblx0XHRcdDxQYW5lbFdyYXBwZXJWaWV3PlxuXHRcdFx0XHQ8UGFuZWw+XG5cdFx0XHRcdFx0PFRvb2xzUGFuZWxcblx0XHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0XHRcdFx0cmVzZXRBbGw9eyByZXNldEFsbCB9XG5cdFx0XHRcdFx0XHRwYW5lbElkPXsgcGFuZWxJZCB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PFNsb3QgLz5cblx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWw+XG5cdFx0XHRcdDwvUGFuZWw+XG5cdFx0XHQ8L1BhbmVsV3JhcHBlclZpZXc+XG5cdFx0PC9TbG90RmlsbFByb3ZpZGVyPlxuXHQpO1xufTtcbldpdGhTbG90RmlsbEl0ZW1zLmFyZ3MgPSB7XG5cdC4uLkRlZmF1bHQuYXJncyxcblx0bGFiZWw6ICdUb29scyBQYW5lbCBXaXRoIFNsb3RGaWxsIEl0ZW1zJyxcblx0cGFuZWxJZDogJ3VuaXF1ZS10b29scy1wYW5lbC1pZCcsXG59O1xuXG5leHBvcnQgY29uc3QgV2l0aENvbmRpdGlvbmFsRGVmYXVsdENvbnRyb2w6IFN0b3J5Rm48IHR5cGVvZiBUb29sc1BhbmVsID4gPSAoIHtcblx0cmVzZXRBbGw6IHJlc2V0QWxsUHJvcCxcblx0cGFuZWxJZCxcblx0Li4ucHJvcHNcbn0gKSA9PiB7XG5cdGNvbnN0IFsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyBdID0gdXNlU3RhdGU8IHtcblx0XHRoZWlnaHQ/OiBzdHJpbmc7XG5cdFx0c2NhbGU/OiBudW1iZXIgfCBzdHJpbmc7XG5cdH0gPigge30gKTtcblx0Y29uc3QgeyBoZWlnaHQsIHNjYWxlIH0gPSBhdHRyaWJ1dGVzO1xuXG5cdGNvbnN0IHJlc2V0QWxsOiB0eXBlb2YgcmVzZXRBbGxQcm9wID0gKCByZXNldEZpbHRlcnMgPSBbXSApID0+IHtcblx0XHRsZXQgbmV3QXR0cmlidXRlczogdHlwZW9mIGF0dHJpYnV0ZXMgPSB7fTtcblxuXHRcdHJlc2V0RmlsdGVycy5mb3JFYWNoKCAoIHJlc2V0RmlsdGVyICkgPT4ge1xuXHRcdFx0bmV3QXR0cmlidXRlcyA9IHtcblx0XHRcdFx0Li4ubmV3QXR0cmlidXRlcyxcblx0XHRcdFx0Li4ucmVzZXRGaWx0ZXIoIG5ld0F0dHJpYnV0ZXMgKSxcblx0XHRcdH07XG5cdFx0fSApO1xuXG5cdFx0c2V0QXR0cmlidXRlcyggbmV3QXR0cmlidXRlcyApO1xuXG5cdFx0cmVzZXRBbGxQcm9wKCByZXNldEZpbHRlcnMgKTtcblx0fTtcblxuXHRjb25zdCB1cGRhdGVBdHRyaWJ1dGUgPSAoIG5hbWU6IHN0cmluZywgdmFsdWU/OiBhbnkgKSA9PiB7XG5cdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0Li4uYXR0cmlidXRlcyxcblx0XHRcdFsgbmFtZSBdOiB2YWx1ZSxcblx0XHR9ICk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8U2xvdEZpbGxQcm92aWRlcj5cblx0XHRcdDxUb29sc1BhbmVsSXRlbXM+XG5cdFx0XHRcdDxTaW5nbGVDb2x1bW5JdGVtXG5cdFx0XHRcdFx0aGFzVmFsdWU9eyAoKSA9PiAhISBoZWlnaHQgfVxuXHRcdFx0XHRcdGxhYmVsPVwiSW5qZWN0ZWQgSGVpZ2h0XCJcblx0XHRcdFx0XHRvbkRlc2VsZWN0PXsgKCkgPT4gdXBkYXRlQXR0cmlidXRlKCAnaGVpZ2h0JywgdW5kZWZpbmVkICkgfVxuXHRcdFx0XHRcdHJlc2V0QWxsRmlsdGVyPXsgKCkgPT4gKCB7IGhlaWdodDogdW5kZWZpbmVkIH0gKSB9XG5cdFx0XHRcdFx0cGFuZWxJZD17IHBhbmVsSWQgfVxuXHRcdFx0XHRcdGlzU2hvd25CeURlZmF1bHRcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxVbml0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9XCJJbmplY3RlZCBIZWlnaHRcIlxuXHRcdFx0XHRcdFx0dmFsdWU9eyBoZWlnaHQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PlxuXHRcdFx0XHRcdFx0XHR1cGRhdGVBdHRyaWJ1dGUoICdoZWlnaHQnLCBuZXh0IClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1NpbmdsZUNvbHVtbkl0ZW0+XG5cdFx0XHRcdDxUb29sc1BhbmVsSXRlbVxuXHRcdFx0XHRcdGhhc1ZhbHVlPXsgKCkgPT4gISEgc2NhbGUgfVxuXHRcdFx0XHRcdGxhYmVsPVwiU2NhbGVcIlxuXHRcdFx0XHRcdG9uRGVzZWxlY3Q9eyAoKSA9PiB1cGRhdGVBdHRyaWJ1dGUoICdzY2FsZScsIHVuZGVmaW5lZCApIH1cblx0XHRcdFx0XHRyZXNldEFsbEZpbHRlcj17ICgpID0+ICggeyBzY2FsZTogdW5kZWZpbmVkIH0gKSB9XG5cdFx0XHRcdFx0cGFuZWxJZD17IHBhbmVsSWQgfVxuXHRcdFx0XHRcdGlzU2hvd25CeURlZmF1bHQ9eyAhISBoZWlnaHQgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFRvZ2dsZUdyb3VwQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9XCJTY2FsZVwiXG5cdFx0XHRcdFx0XHR2YWx1ZT17IHNjYWxlIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXh0ICkgPT5cblx0XHRcdFx0XHRcdFx0dXBkYXRlQXR0cmlidXRlKCAnc2NhbGUnLCBuZXh0IClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlzQmxvY2tcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlR3JvdXBDb250cm9sT3B0aW9uIHZhbHVlPVwiY292ZXJcIiBsYWJlbD1cIkNvdmVyXCIgLz5cblx0XHRcdFx0XHRcdDxUb2dnbGVHcm91cENvbnRyb2xPcHRpb25cblx0XHRcdFx0XHRcdFx0dmFsdWU9XCJjb250YWluXCJcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJDb250YWluXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlR3JvdXBDb250cm9sT3B0aW9uIHZhbHVlPVwiZmlsbFwiIGxhYmVsPVwiRmlsbFwiIC8+XG5cdFx0XHRcdFx0PC9Ub2dnbGVHcm91cENvbnRyb2w+XG5cdFx0XHRcdDwvVG9vbHNQYW5lbEl0ZW0+XG5cdFx0XHQ8L1Rvb2xzUGFuZWxJdGVtcz5cblx0XHRcdDxQYW5lbFdyYXBwZXJWaWV3PlxuXHRcdFx0XHQ8UGFuZWw+XG5cdFx0XHRcdFx0PFRvb2xzUGFuZWxcblx0XHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0XHRcdFx0cmVzZXRBbGw9eyByZXNldEFsbCB9XG5cdFx0XHRcdFx0XHRwYW5lbElkPXsgcGFuZWxJZCB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PFNsb3QgLz5cblx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWw+XG5cdFx0XHRcdDwvUGFuZWw+XG5cdFx0XHQ8L1BhbmVsV3JhcHBlclZpZXc+XG5cdFx0PC9TbG90RmlsbFByb3ZpZGVyPlxuXHQpO1xufTtcbldpdGhDb25kaXRpb25hbERlZmF1bHRDb250cm9sLmFyZ3MgPSB7XG5cdC4uLkRlZmF1bHQuYXJncyxcblx0bGFiZWw6ICdUb29scyBQYW5lbCBXaXRoIENvbmRpdGlvbmFsIERlZmF1bHQgdmlhIFNsb3RGaWxsJyxcblx0cGFuZWxJZDogJ3VuaXF1ZS10b29scy1wYW5lbC1pZCcsXG59O1xuXG5leHBvcnQgY29uc3QgV2l0aENvbmRpdGlvbmFsbHlSZW5kZXJlZENvbnRyb2w6IFN0b3J5Rm48XG5cdHR5cGVvZiBUb29sc1BhbmVsXG4+ID0gKCB7IHJlc2V0QWxsOiByZXNldEFsbFByb3AsIHBhbmVsSWQsIC4uLnByb3BzIH0gKSA9PiB7XG5cdGNvbnN0IFsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyBdID0gdXNlU3RhdGU8IHtcblx0XHRoZWlnaHQ/OiBzdHJpbmc7XG5cdFx0c2NhbGU/OiBudW1iZXIgfCBzdHJpbmc7XG5cdH0gPigge30gKTtcblx0Y29uc3QgeyBoZWlnaHQsIHNjYWxlIH0gPSBhdHRyaWJ1dGVzO1xuXG5cdGNvbnN0IHJlc2V0QWxsOiB0eXBlb2YgcmVzZXRBbGxQcm9wID0gKCByZXNldEZpbHRlcnMgPSBbXSApID0+IHtcblx0XHRsZXQgbmV3QXR0cmlidXRlczogdHlwZW9mIGF0dHJpYnV0ZXMgPSB7fTtcblxuXHRcdHJlc2V0RmlsdGVycy5mb3JFYWNoKCAoIHJlc2V0RmlsdGVyICkgPT4ge1xuXHRcdFx0bmV3QXR0cmlidXRlcyA9IHtcblx0XHRcdFx0Li4ubmV3QXR0cmlidXRlcyxcblx0XHRcdFx0Li4ucmVzZXRGaWx0ZXIoIG5ld0F0dHJpYnV0ZXMgKSxcblx0XHRcdH07XG5cdFx0fSApO1xuXG5cdFx0c2V0QXR0cmlidXRlcyggbmV3QXR0cmlidXRlcyApO1xuXG5cdFx0cmVzZXRBbGxQcm9wKCByZXNldEZpbHRlcnMgKTtcblx0fTtcblxuXHRjb25zdCB1cGRhdGVBdHRyaWJ1dGUgPSAoIG5hbWU6IHN0cmluZywgdmFsdWU/OiBhbnkgKSA9PiB7XG5cdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0Li4uYXR0cmlidXRlcyxcblx0XHRcdFsgbmFtZSBdOiB2YWx1ZSxcblx0XHR9ICk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8U2xvdEZpbGxQcm92aWRlcj5cblx0XHRcdDxUb29sc1BhbmVsSXRlbXM+XG5cdFx0XHRcdDxTaW5nbGVDb2x1bW5JdGVtXG5cdFx0XHRcdFx0aGFzVmFsdWU9eyAoKSA9PiAhISBoZWlnaHQgfVxuXHRcdFx0XHRcdGxhYmVsPVwiSW5qZWN0ZWQgSGVpZ2h0XCJcblx0XHRcdFx0XHRvbkRlc2VsZWN0PXsgKCkgPT4ge1xuXHRcdFx0XHRcdFx0dXBkYXRlQXR0cmlidXRlKCAnc2NhbGUnLCB1bmRlZmluZWQgKTtcblx0XHRcdFx0XHRcdHVwZGF0ZUF0dHJpYnV0ZSggJ2hlaWdodCcsIHVuZGVmaW5lZCApO1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdHJlc2V0QWxsRmlsdGVyPXsgKCkgPT4gKCB7IGhlaWdodDogdW5kZWZpbmVkIH0gKSB9XG5cdFx0XHRcdFx0cGFuZWxJZD17IHBhbmVsSWQgfVxuXHRcdFx0XHRcdGlzU2hvd25CeURlZmF1bHRcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxVbml0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9XCJJbmplY3RlZCBIZWlnaHRcIlxuXHRcdFx0XHRcdFx0dmFsdWU9eyBoZWlnaHQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PlxuXHRcdFx0XHRcdFx0XHR1cGRhdGVBdHRyaWJ1dGUoICdoZWlnaHQnLCBuZXh0IClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1NpbmdsZUNvbHVtbkl0ZW0+XG5cdFx0XHRcdHsgISEgaGVpZ2h0ICYmIChcblx0XHRcdFx0XHQ8VG9vbHNQYW5lbEl0ZW1cblx0XHRcdFx0XHRcdGhhc1ZhbHVlPXsgKCkgPT4gISEgc2NhbGUgfVxuXHRcdFx0XHRcdFx0bGFiZWw9XCJTY2FsZVwiXG5cdFx0XHRcdFx0XHRvbkRlc2VsZWN0PXsgKCkgPT5cblx0XHRcdFx0XHRcdFx0dXBkYXRlQXR0cmlidXRlKCAnc2NhbGUnLCB1bmRlZmluZWQgKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmVzZXRBbGxGaWx0ZXI9eyAoKSA9PiAoIHsgc2NhbGU6IHVuZGVmaW5lZCB9ICkgfVxuXHRcdFx0XHRcdFx0cGFuZWxJZD17IHBhbmVsSWQgfVxuXHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdFxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxUb2dnbGVHcm91cENvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJTY2FsZVwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgc2NhbGUgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV4dCApID0+XG5cdFx0XHRcdFx0XHRcdFx0dXBkYXRlQXR0cmlidXRlKCAnc2NhbGUnLCBuZXh0IClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpc0Jsb2NrXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVHcm91cENvbnRyb2xPcHRpb25cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT1cImNvdmVyXCJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkNvdmVyXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUdyb3VwQ29udHJvbE9wdGlvblxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPVwiY29udGFpblwiXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJDb250YWluXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUdyb3VwQ29udHJvbE9wdGlvblxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPVwiZmlsbFwiXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJGaWxsXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvVG9nZ2xlR3JvdXBDb250cm9sPlxuXHRcdFx0XHRcdDwvVG9vbHNQYW5lbEl0ZW0+XG5cdFx0XHRcdCkgfVxuXHRcdFx0PC9Ub29sc1BhbmVsSXRlbXM+XG5cdFx0XHQ8UGFuZWxXcmFwcGVyVmlldz5cblx0XHRcdFx0PFBhbmVsPlxuXHRcdFx0XHRcdDxUb29sc1BhbmVsXG5cdFx0XHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdFx0XHRcdHJlc2V0QWxsPXsgcmVzZXRBbGwgfVxuXHRcdFx0XHRcdFx0cGFuZWxJZD17IHBhbmVsSWQgfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxTbG90IC8+XG5cdFx0XHRcdFx0PC9Ub29sc1BhbmVsPlxuXHRcdFx0XHQ8L1BhbmVsPlxuXHRcdFx0PC9QYW5lbFdyYXBwZXJWaWV3PlxuXHRcdDwvU2xvdEZpbGxQcm92aWRlcj5cblx0KTtcbn07XG5XaXRoQ29uZGl0aW9uYWxseVJlbmRlcmVkQ29udHJvbC5hcmdzID0ge1xuXHQuLi5EZWZhdWx0LmFyZ3MsXG5cdGxhYmVsOiAnVG9vbHMgUGFuZWwgV2l0aCBDb25kaXRpb25hbGx5IFJlbmRlcmVkIEl0ZW0gdmlhIFNsb3RGaWxsJyxcblx0cGFuZWxJZDogJ3VuaXF1ZS10b29scy1wYW5lbC1pZCcsXG59O1xuXG5jb25zdCBQYW5lbFdyYXBwZXJWaWV3ID0gc3R5bGVkLmRpdmBcblx0Zm9udC1zaXplOiAxM3B4O1xuXG5cdC5jb21wb25lbnRzLWRyb3Bkb3duLW1lbnVfX21lbnUge1xuXHRcdG1heC13aWR0aDogMjIwcHg7XG5cdH1cbmA7XG5cbmNvbnN0IFNpbmdsZUNvbHVtbkl0ZW0gPSBzdHlsZWQoIFRvb2xzUGFuZWxJdGVtIClgXG5cdGdyaWQtY29sdW1uOiBzcGFuIDE7XG5gO1xuXG5jb25zdCBJbnRyb1RleHQgPSBzdHlsZWQuZGl2YFxuXHRncmlkLWNvbHVtbjogc3BhbiAyO1xuYDtcbiJdLCJtYXBwaW5ncyI6IkFBMGxCeUIiLCJpZ25vcmVMaXN0IjpbXX0= */");
		IntroText = /* @__PURE__ */ styled("div", {
			target: "eyb8yij2",
			label: "IntroText"
		})("grid-column:span 2;", "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmsvZ3V0ZW5iZXJnLXN0b3J5Ym9vay1wcmV2aWV3L2d1dGVuYmVyZy1zdG9yeWJvb2stcHJldmlldy9wYWNrYWdlcy9jb21wb25lbnRzL3NyYy90b29scy1wYW5lbC9zdG9yaWVzL2luZGV4LnN0b3J5LnRzeCIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9ydW5uZXIvd29yay9ndXRlbmJlcmctc3Rvcnlib29rLXByZXZpZXcvZ3V0ZW5iZXJnLXN0b3J5Ym9vay1wcmV2aWV3L3BhY2thZ2VzL2NvbXBvbmVudHMvc3JjL3Rvb2xzLXBhbmVsL3N0b3JpZXMvaW5kZXguc3RvcnkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTWV0YSwgU3RvcnlGbiB9IGZyb20gJ0BzdG9yeWJvb2svcmVhY3Qtdml0ZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBmbiB9IGZyb20gJ3N0b3J5Ym9vay90ZXN0JztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB7XG5cdFRvZ2dsZUdyb3VwQ29udHJvbCxcblx0VG9nZ2xlR3JvdXBDb250cm9sT3B0aW9uLFxufSBmcm9tICcuLi8uLi90b2dnbGUtZ3JvdXAtY29udHJvbCc7XG5pbXBvcnQgeyBUb29sc1BhbmVsLCBUb29sc1BhbmVsSXRlbSB9IGZyb20gJy4uJztcbmltcG9ydCBQYW5lbCBmcm9tICcuLi8uLi9wYW5lbCc7XG5pbXBvcnQgVW5pdENvbnRyb2wgZnJvbSAnLi4vLi4vdW5pdC1jb250cm9sJztcbmltcG9ydCB7IGNyZWF0ZVNsb3RGaWxsLCBQcm92aWRlciBhcyBTbG90RmlsbFByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vc2xvdC1maWxsJztcblxuY29uc3QgbWV0YTogTWV0YTwgdHlwZW9mIFRvb2xzUGFuZWwgPiA9IHtcblx0aWQ6ICdjb21wb25lbnRzLXRvb2xzcGFuZWwnLFxuXHR0aXRsZTogJ0NvbXBvbmVudHMvQHdvcmRwcmVzcy1jb21wb25lbnRzL1Rvb2xzUGFuZWwnLFxuXHRjb21wb25lbnQ6IFRvb2xzUGFuZWwsXG5cdHN1YmNvbXBvbmVudHM6IHsgVG9vbHNQYW5lbEl0ZW0gfSxcblx0YXJnVHlwZXM6IHtcblx0XHRhczogeyBjb250cm9sOiBmYWxzZSB9LFxuXHRcdGNoaWxkcmVuOiB7IGNvbnRyb2w6IGZhbHNlIH0sXG5cdFx0cGFuZWxJZDogeyBjb250cm9sOiBmYWxzZSB9LFxuXHRcdHJlc2V0QWxsOiB7IGFjdGlvbjogJ3Jlc2V0QWxsJyB9LFxuXHR9LFxuXHR0YWdzOiBbICdzdGF0dXMtZXhwZXJpbWVudGFsJyBdLFxuXHRhcmdzOiB7XG5cdFx0cmVzZXRBbGw6IGZuKCksXG5cdH0sXG5cdHBhcmFtZXRlcnM6IHtcblx0XHRjb250cm9sczoge1xuXHRcdFx0ZXhwYW5kZWQ6IHRydWUsXG5cdFx0fSxcblx0XHRkb2NzOiB7IGNhbnZhczogeyBzb3VyY2VTdGF0ZTogJ3Nob3duJyB9IH0sXG5cdFx0Y29tcG9uZW50U3RhdHVzOiB7XG5cdFx0XHRzdGF0dXM6ICdyZWNvbW1lbmRlZCcsXG5cdFx0XHR3aGVyZVVzZWQ6ICdlZGl0b3InLFxuXHRcdH0sXG5cdH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgbWV0YTtcblxuZXhwb3J0IGNvbnN0IERlZmF1bHQ6IFN0b3J5Rm48IHR5cGVvZiBUb29sc1BhbmVsID4gPSAoIHtcblx0cmVzZXRBbGw6IHJlc2V0QWxsUHJvcCxcblx0Li4ucHJvcHNcbn0gKSA9PiB7XG5cdGNvbnN0IFsgaGVpZ2h0LCBzZXRIZWlnaHQgXSA9IHVzZVN0YXRlPCBzdHJpbmcgfCB1bmRlZmluZWQgPigpO1xuXHRjb25zdCBbIG1pbkhlaWdodCwgc2V0TWluSGVpZ2h0IF0gPSB1c2VTdGF0ZTwgc3RyaW5nIHwgdW5kZWZpbmVkID4oKTtcblx0Y29uc3QgWyB3aWR0aCwgc2V0V2lkdGggXSA9IHVzZVN0YXRlPCBzdHJpbmcgfCB1bmRlZmluZWQgPigpO1xuXHRjb25zdCBbIHNjYWxlLCBzZXRTY2FsZSBdID0gdXNlU3RhdGU8IG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZCA+KCk7XG5cblx0Y29uc3QgcmVzZXRBbGw6IHR5cGVvZiByZXNldEFsbFByb3AgPSAoIGZpbHRlcnMgKSA9PiB7XG5cdFx0c2V0SGVpZ2h0KCB1bmRlZmluZWQgKTtcblx0XHRzZXRXaWR0aCggdW5kZWZpbmVkICk7XG5cdFx0c2V0TWluSGVpZ2h0KCB1bmRlZmluZWQgKTtcblx0XHRzZXRTY2FsZSggdW5kZWZpbmVkICk7XG5cdFx0cmVzZXRBbGxQcm9wKCBmaWx0ZXJzICk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8UGFuZWxXcmFwcGVyVmlldz5cblx0XHRcdDxQYW5lbD5cblx0XHRcdFx0PFRvb2xzUGFuZWwgeyAuLi5wcm9wcyB9IHJlc2V0QWxsPXsgcmVzZXRBbGwgfT5cblx0XHRcdFx0XHQ8U2luZ2xlQ29sdW1uSXRlbVxuXHRcdFx0XHRcdFx0aGFzVmFsdWU9eyAoKSA9PiAhISB3aWR0aCB9XG5cdFx0XHRcdFx0XHRsYWJlbD1cIldpZHRoXCJcblx0XHRcdFx0XHRcdG9uRGVzZWxlY3Q9eyAoKSA9PiBzZXRXaWR0aCggdW5kZWZpbmVkICkgfVxuXHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdFxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxVbml0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIldpZHRoXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyB3aWR0aCB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXh0ICkgPT4gc2V0V2lkdGgoIG5leHQgKSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvU2luZ2xlQ29sdW1uSXRlbT5cblx0XHRcdFx0XHQ8U2luZ2xlQ29sdW1uSXRlbVxuXHRcdFx0XHRcdFx0aGFzVmFsdWU9eyAoKSA9PiAhISBoZWlnaHQgfVxuXHRcdFx0XHRcdFx0bGFiZWw9XCJIZWlnaHRcIlxuXHRcdFx0XHRcdFx0b25EZXNlbGVjdD17ICgpID0+IHNldEhlaWdodCggdW5kZWZpbmVkICkgfVxuXHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdFxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxVbml0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIkhlaWdodFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgaGVpZ2h0IH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PiBzZXRIZWlnaHQoIG5leHQgKSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvU2luZ2xlQ29sdW1uSXRlbT5cblx0XHRcdFx0XHQ8VG9vbHNQYW5lbEl0ZW1cblx0XHRcdFx0XHRcdGhhc1ZhbHVlPXsgKCkgPT4gISEgbWluSGVpZ2h0IH1cblx0XHRcdFx0XHRcdGxhYmVsPVwiTWluaW11bSBoZWlnaHRcIlxuXHRcdFx0XHRcdFx0b25EZXNlbGVjdD17ICgpID0+IHNldE1pbkhlaWdodCggdW5kZWZpbmVkICkgfVxuXHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdFxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxVbml0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIk1pbmltdW0gaGVpZ2h0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBtaW5IZWlnaHQgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV4dCApID0+IHNldE1pbkhlaWdodCggbmV4dCApIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Ub29sc1BhbmVsSXRlbT5cblx0XHRcdFx0XHQ8VG9vbHNQYW5lbEl0ZW1cblx0XHRcdFx0XHRcdGhhc1ZhbHVlPXsgKCkgPT4gISEgc2NhbGUgfVxuXHRcdFx0XHRcdFx0bGFiZWw9XCJTY2FsZVwiXG5cdFx0XHRcdFx0XHRvbkRlc2VsZWN0PXsgKCkgPT4gc2V0U2NhbGUoIHVuZGVmaW5lZCApIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlR3JvdXBDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwiU2NhbGVcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IHNjYWxlIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PiBzZXRTY2FsZSggbmV4dCApIH1cblx0XHRcdFx0XHRcdFx0aXNCbG9ja1xuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlR3JvdXBDb250cm9sT3B0aW9uXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9XCJjb3ZlclwiXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJDb3ZlclwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVHcm91cENvbnRyb2xPcHRpb25cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT1cImNvbnRhaW5cIlxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiQ29udGFpblwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVHcm91cENvbnRyb2xPcHRpb25cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT1cImZpbGxcIlxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiRmlsbFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1RvZ2dsZUdyb3VwQ29udHJvbD5cblx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWxJdGVtPlxuXHRcdFx0XHQ8L1Rvb2xzUGFuZWw+XG5cdFx0XHQ8L1BhbmVsPlxuXHRcdDwvUGFuZWxXcmFwcGVyVmlldz5cblx0KTtcbn07XG5EZWZhdWx0LmFyZ3MgPSB7XG5cdGxhYmVsOiAnVG9vbHMgUGFuZWwgKGRlZmF1bHQgZXhhbXBsZSknLFxufTtcblxuZXhwb3J0IGNvbnN0IFdpdGhOb25Ub29sc1BhbmVsSXRlbXM6IFN0b3J5Rm48IHR5cGVvZiBUb29sc1BhbmVsID4gPSAoIHtcblx0cmVzZXRBbGw6IHJlc2V0QWxsUHJvcCxcblx0Li4ucHJvcHNcbn0gKSA9PiB7XG5cdGNvbnN0IFsgaGVpZ2h0LCBzZXRIZWlnaHQgXSA9IHVzZVN0YXRlPCBzdHJpbmcgfCB1bmRlZmluZWQgPigpO1xuXHRjb25zdCBbIHdpZHRoLCBzZXRXaWR0aCBdID0gdXNlU3RhdGU8IHN0cmluZyB8IHVuZGVmaW5lZCA+KCk7XG5cblx0Y29uc3QgcmVzZXRBbGw6IHR5cGVvZiByZXNldEFsbFByb3AgPSAoIGZpbHRlcnMgKSA9PiB7XG5cdFx0c2V0SGVpZ2h0KCB1bmRlZmluZWQgKTtcblx0XHRzZXRXaWR0aCggdW5kZWZpbmVkICk7XG5cdFx0cmVzZXRBbGxQcm9wKCBmaWx0ZXJzICk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8UGFuZWxXcmFwcGVyVmlldz5cblx0XHRcdDxQYW5lbD5cblx0XHRcdFx0PFRvb2xzUGFuZWwgeyAuLi5wcm9wcyB9IHJlc2V0QWxsPXsgcmVzZXRBbGwgfT5cblx0XHRcdFx0XHQ8SW50cm9UZXh0PlxuXHRcdFx0XHRcdFx0VGhpcyB0ZXh0IGlsbHVzdHJhdGVzIG5vdCBhbGwgaXRlbXMgbXVzdCBiZSB3cmFwcGVkIGluIGFcblx0XHRcdFx0XHRcdFRvb2xzUGFuZWxJdGVtIGFuZCByZXByZXNlbnRlZCBpbiB0aGUgcGFuZWwgbWVudS5cblx0XHRcdFx0XHQ8L0ludHJvVGV4dD5cblx0XHRcdFx0XHQ8U2luZ2xlQ29sdW1uSXRlbVxuXHRcdFx0XHRcdFx0aGFzVmFsdWU9eyAoKSA9PiAhISB3aWR0aCB9XG5cdFx0XHRcdFx0XHRsYWJlbD1cIldpZHRoXCJcblx0XHRcdFx0XHRcdG9uRGVzZWxlY3Q9eyAoKSA9PiBzZXRXaWR0aCggdW5kZWZpbmVkICkgfVxuXHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdFxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxVbml0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIldpZHRoXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyB3aWR0aCB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXh0ICkgPT4gc2V0V2lkdGgoIG5leHQgKSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvU2luZ2xlQ29sdW1uSXRlbT5cblx0XHRcdFx0XHQ8U2luZ2xlQ29sdW1uSXRlbVxuXHRcdFx0XHRcdFx0aGFzVmFsdWU9eyAoKSA9PiAhISBoZWlnaHQgfVxuXHRcdFx0XHRcdFx0bGFiZWw9XCJIZWlnaHRcIlxuXHRcdFx0XHRcdFx0b25EZXNlbGVjdD17ICgpID0+IHNldEhlaWdodCggdW5kZWZpbmVkICkgfVxuXHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdFxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxVbml0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIkhlaWdodFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgaGVpZ2h0IH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PiBzZXRIZWlnaHQoIG5leHQgKSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvU2luZ2xlQ29sdW1uSXRlbT5cblx0XHRcdFx0PC9Ub29sc1BhbmVsPlxuXHRcdFx0PC9QYW5lbD5cblx0XHQ8L1BhbmVsV3JhcHBlclZpZXc+XG5cdCk7XG59O1xuV2l0aE5vblRvb2xzUGFuZWxJdGVtcy5hcmdzID0ge1xuXHQuLi5EZWZhdWx0LmFyZ3MsXG5cdGxhYmVsOiAnVG9vbHNQYW5lbCAod2l0aCBub24tbWVudSBpdGVtcyknLFxufTtcblxuZXhwb3J0IGNvbnN0IFdpdGhPcHRpb25hbEl0ZW1zUGx1c0ljb246IFN0b3J5Rm48IHR5cGVvZiBUb29sc1BhbmVsID4gPSAoIHtcblx0cmVzZXRBbGw6IHJlc2V0QWxsUHJvcCxcblx0Li4ucHJvcHNcbn0gKSA9PiB7XG5cdGNvbnN0IFtcblx0XHRpc0ZpcnN0VG9vbHNQYW5lbEl0ZW1TaG93bkJ5RGVmYXVsdCxcblx0XHRzZXRJc0ZpcnN0VG9vbHNQYW5lbEl0ZW1TaG93bkJ5RGVmYXVsdCxcblx0XSA9IHVzZVN0YXRlKCBmYWxzZSApO1xuXHRjb25zdCBbIGhlaWdodCwgc2V0SGVpZ2h0IF0gPSB1c2VTdGF0ZTwgc3RyaW5nIHwgdW5kZWZpbmVkID4oKTtcblx0Y29uc3QgWyB3aWR0aCwgc2V0V2lkdGggXSA9IHVzZVN0YXRlPCBzdHJpbmcgfCB1bmRlZmluZWQgPigpO1xuXHRjb25zdCBbIG1pbldpZHRoLCBzZXRNaW5XaWR0aCBdID0gdXNlU3RhdGU8IHN0cmluZyB8IHVuZGVmaW5lZCA+KCk7XG5cblx0Y29uc3QgcmVzZXRBbGw6IHR5cGVvZiByZXNldEFsbFByb3AgPSAoIGZpbHRlcnMgKSA9PiB7XG5cdFx0c2V0SGVpZ2h0KCB1bmRlZmluZWQgKTtcblx0XHRzZXRXaWR0aCggdW5kZWZpbmVkICk7XG5cdFx0c2V0TWluV2lkdGgoIHVuZGVmaW5lZCApO1xuXHRcdHJlc2V0QWxsUHJvcCggZmlsdGVycyApO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxQYW5lbFdyYXBwZXJWaWV3PlxuXHRcdFx0XHQ8UGFuZWw+XG5cdFx0XHRcdFx0PFRvb2xzUGFuZWxcblx0XHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0XHRcdFx0cmVzZXRBbGw9eyByZXNldEFsbCB9XG5cdFx0XHRcdFx0XHQvLyBga2V5YCBwcm9wZXJ0eSBoZXJlIGlzIHVzZWQgYXMgYSBoYWNrIHRvIGZvcmNlIGBUb29sc1BhbmVsYCB0byByZS1yZW5kZXJcblx0XHRcdFx0XHRcdC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vV29yZFByZXNzL2d1dGVuYmVyZy9wdWxsLzM4MjYyL2ZpbGVzI3I3OTM0MjI5OTFcblx0XHRcdFx0XHRcdGtleT17XG5cdFx0XHRcdFx0XHRcdGlzRmlyc3RUb29sc1BhbmVsSXRlbVNob3duQnlEZWZhdWx0XG5cdFx0XHRcdFx0XHRcdFx0PyAndHJ1ZSdcblx0XHRcdFx0XHRcdFx0XHQ6ICdmYWxzZSdcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8U2luZ2xlQ29sdW1uSXRlbVxuXHRcdFx0XHRcdFx0XHRoYXNWYWx1ZT17ICgpID0+ICEhIG1pbldpZHRoIH1cblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJNaW5pbXVtIHdpZHRoXCJcblx0XHRcdFx0XHRcdFx0b25EZXNlbGVjdD17ICgpID0+IHNldE1pbldpZHRoKCB1bmRlZmluZWQgKSB9XG5cdFx0XHRcdFx0XHRcdGlzU2hvd25CeURlZmF1bHQ9e1xuXHRcdFx0XHRcdFx0XHRcdGlzRmlyc3RUb29sc1BhbmVsSXRlbVNob3duQnlEZWZhdWx0XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PFVuaXRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJNaW5pbXVtIHdpZHRoXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IG1pbldpZHRoIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV4dCApID0+IHNldE1pbldpZHRoKCBuZXh0ICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9TaW5nbGVDb2x1bW5JdGVtPlxuXHRcdFx0XHRcdFx0PFNpbmdsZUNvbHVtbkl0ZW1cblx0XHRcdFx0XHRcdFx0aGFzVmFsdWU9eyAoKSA9PiAhISB3aWR0aCB9XG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwiV2lkdGhcIlxuXHRcdFx0XHRcdFx0XHRvbkRlc2VsZWN0PXsgKCkgPT4gc2V0V2lkdGgoIHVuZGVmaW5lZCApIH1cblx0XHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdD17IGZhbHNlIH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PFVuaXRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJXaWR0aFwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyB3aWR0aCB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PiBzZXRXaWR0aCggbmV4dCApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvU2luZ2xlQ29sdW1uSXRlbT5cblx0XHRcdFx0XHRcdDxTaW5nbGVDb2x1bW5JdGVtXG5cdFx0XHRcdFx0XHRcdGhhc1ZhbHVlPXsgKCkgPT4gISEgaGVpZ2h0IH1cblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJIZWlnaHRcIlxuXHRcdFx0XHRcdFx0XHRvbkRlc2VsZWN0PXsgKCkgPT4gc2V0SGVpZ2h0KCB1bmRlZmluZWQgKSB9XG5cdFx0XHRcdFx0XHRcdGlzU2hvd25CeURlZmF1bHQ9eyBmYWxzZSB9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxVbml0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiSGVpZ2h0XCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGhlaWdodCB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PiBzZXRIZWlnaHQoIG5leHQgKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1NpbmdsZUNvbHVtbkl0ZW0+XG5cdFx0XHRcdFx0PC9Ub29sc1BhbmVsPlxuXHRcdFx0XHQ8L1BhbmVsPlxuXHRcdFx0PC9QYW5lbFdyYXBwZXJWaWV3PlxuXG5cdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PlxuXHRcdFx0XHRcdHNldElzRmlyc3RUb29sc1BhbmVsSXRlbVNob3duQnlEZWZhdWx0KFxuXHRcdFx0XHRcdFx0ISBpc0ZpcnN0VG9vbHNQYW5lbEl0ZW1TaG93bkJ5RGVmYXVsdFxuXHRcdFx0XHRcdClcblx0XHRcdFx0fVxuXHRcdFx0XHRhcmlhLXByZXNzZWQ9e1xuXHRcdFx0XHRcdGlzRmlyc3RUb29sc1BhbmVsSXRlbVNob3duQnlEZWZhdWx0ID8gJ3RydWUnIDogJ2ZhbHNlJ1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN0eWxlPXsge1xuXHRcdFx0XHRcdG1hcmdpblRvcDogJzJyZW0nLFxuXHRcdFx0XHR9IH1cblx0XHRcdD5cblx0XHRcdFx0eyBpc0ZpcnN0VG9vbHNQYW5lbEl0ZW1TaG93bkJ5RGVmYXVsdFxuXHRcdFx0XHRcdD8gJ01ha2UgZmlyc3QgUGFuZWxJdGVtIGhpZGRlbiBieSBkZWZhdWx0J1xuXHRcdFx0XHRcdDogJ01ha2UgZmlyc3QgUGFuZWxJdGVtIHNob3duIGJ5IGRlZmF1bHQnIH1cblx0XHRcdDwvYnV0dG9uPlxuXHRcdDwvPlxuXHQpO1xufTtcblxuV2l0aE9wdGlvbmFsSXRlbXNQbHVzSWNvbi5hcmdzID0ge1xuXHQuLi5EZWZhdWx0LmFyZ3MsXG5cdGxhYmVsOiAnVG9vbHMgUGFuZWwgKG9wdGlvbmFsIGl0ZW1zIG9ubHkpJyxcbn07XG5cbmNvbnN0IHsgRmlsbDogVG9vbHNQYW5lbEl0ZW1zLCBTbG90IH0gPSBjcmVhdGVTbG90RmlsbCggJ1Rvb2xzUGFuZWxTbG90JyApO1xuXG5leHBvcnQgY29uc3QgV2l0aFNsb3RGaWxsSXRlbXM6IFN0b3J5Rm48IHR5cGVvZiBUb29sc1BhbmVsID4gPSAoIHtcblx0cmVzZXRBbGw6IHJlc2V0QWxsUHJvcCxcblx0cGFuZWxJZCxcblx0Li4ucHJvcHNcbn0gKSA9PiB7XG5cdGNvbnN0IFsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyBdID0gdXNlU3RhdGU8IHtcblx0XHR3aWR0aD86IHN0cmluZztcblx0XHRoZWlnaHQ/OiBzdHJpbmc7XG5cdH0gPigge30gKTtcblx0Y29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBhdHRyaWJ1dGVzO1xuXG5cdGNvbnN0IHJlc2V0QWxsOiB0eXBlb2YgcmVzZXRBbGxQcm9wID0gKCByZXNldEZpbHRlcnMgPSBbXSApID0+IHtcblx0XHRsZXQgbmV3QXR0cmlidXRlczogdHlwZW9mIGF0dHJpYnV0ZXMgPSB7fTtcblxuXHRcdHJlc2V0RmlsdGVycy5mb3JFYWNoKCAoIHJlc2V0RmlsdGVyICkgPT4ge1xuXHRcdFx0bmV3QXR0cmlidXRlcyA9IHtcblx0XHRcdFx0Li4ubmV3QXR0cmlidXRlcyxcblx0XHRcdFx0Li4ucmVzZXRGaWx0ZXIoIG5ld0F0dHJpYnV0ZXMgKSxcblx0XHRcdH07XG5cdFx0fSApO1xuXG5cdFx0c2V0QXR0cmlidXRlcyggbmV3QXR0cmlidXRlcyApO1xuXHRcdHJlc2V0QWxsUHJvcCggcmVzZXRGaWx0ZXJzICk7XG5cdH07XG5cblx0Y29uc3QgdXBkYXRlQXR0cmlidXRlID0gKCBuYW1lOiBzdHJpbmcsIHZhbHVlPzogYW55ICkgPT4ge1xuXHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdC4uLmF0dHJpYnV0ZXMsXG5cdFx0XHRbIG5hbWUgXTogdmFsdWUsXG5cdFx0fSApO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PFNsb3RGaWxsUHJvdmlkZXI+XG5cdFx0XHQ8VG9vbHNQYW5lbEl0ZW1zPlxuXHRcdFx0XHQ8U2luZ2xlQ29sdW1uSXRlbVxuXHRcdFx0XHRcdGhhc1ZhbHVlPXsgKCkgPT4gISEgd2lkdGggfVxuXHRcdFx0XHRcdGxhYmVsPVwiSW5qZWN0ZWQgV2lkdGhcIlxuXHRcdFx0XHRcdG9uRGVzZWxlY3Q9eyAoKSA9PiB1cGRhdGVBdHRyaWJ1dGUoICd3aWR0aCcsIHVuZGVmaW5lZCApIH1cblx0XHRcdFx0XHRyZXNldEFsbEZpbHRlcj17ICgpID0+ICggeyB3aWR0aDogdW5kZWZpbmVkIH0gKSB9XG5cdFx0XHRcdFx0cGFuZWxJZD17IHBhbmVsSWQgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFVuaXRDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD1cIkluamVjdGVkIFdpZHRoXCJcblx0XHRcdFx0XHRcdHZhbHVlPXsgd2lkdGggfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PlxuXHRcdFx0XHRcdFx0XHR1cGRhdGVBdHRyaWJ1dGUoICd3aWR0aCcsIG5leHQgKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvU2luZ2xlQ29sdW1uSXRlbT5cblx0XHRcdFx0PFNpbmdsZUNvbHVtbkl0ZW1cblx0XHRcdFx0XHRoYXNWYWx1ZT17ICgpID0+ICEhIGhlaWdodCB9XG5cdFx0XHRcdFx0bGFiZWw9XCJJbmplY3RlZCBIZWlnaHRcIlxuXHRcdFx0XHRcdG9uRGVzZWxlY3Q9eyAoKSA9PiB1cGRhdGVBdHRyaWJ1dGUoICdoZWlnaHQnLCB1bmRlZmluZWQgKSB9XG5cdFx0XHRcdFx0cmVzZXRBbGxGaWx0ZXI9eyAoKSA9PiAoIHsgaGVpZ2h0OiB1bmRlZmluZWQgfSApIH1cblx0XHRcdFx0XHRwYW5lbElkPXsgcGFuZWxJZCB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8VW5pdENvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPVwiSW5qZWN0ZWQgSGVpZ2h0XCJcblx0XHRcdFx0XHRcdHZhbHVlPXsgaGVpZ2h0IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXh0ICkgPT5cblx0XHRcdFx0XHRcdFx0dXBkYXRlQXR0cmlidXRlKCAnaGVpZ2h0JywgbmV4dCApXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9TaW5nbGVDb2x1bW5JdGVtPlxuXHRcdFx0XHQ8VG9vbHNQYW5lbEl0ZW1cblx0XHRcdFx0XHRoYXNWYWx1ZT17ICgpID0+IHRydWUgfVxuXHRcdFx0XHRcdGxhYmVsPVwiSXRlbSBmb3IgYWx0ZXJuYXRlIHBhbmVsXCJcblx0XHRcdFx0XHRvbkRlc2VsZWN0PXsgKCkgPT4gdW5kZWZpbmVkIH1cblx0XHRcdFx0XHRyZXNldEFsbEZpbHRlcj17ICgpID0+IHVuZGVmaW5lZCB9XG5cdFx0XHRcdFx0cGFuZWxJZD1cImludGVuZGVkLWZvci1hbm90aGVyLXBhbmVsLXZpYS1zaGFyZWQtc2xvdFwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFRoaXMgcGFuZWwgaXRlbSB3aWxsIG5vdCBiZSBkaXNwbGF5ZWQgaW4gdGhlIGRlbW8gYXMgaXRzXG5cdFx0XHRcdFx0XHRwYW5lbElkIGRvZXMgbm90IG1hdGNoIHRoZSBwYW5lbCBiZWluZyByZW5kZXJlZC5cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDwvVG9vbHNQYW5lbEl0ZW0+XG5cdFx0XHQ8L1Rvb2xzUGFuZWxJdGVtcz5cblx0XHRcdDxQYW5lbFdyYXBwZXJWaWV3PlxuXHRcdFx0XHQ8UGFuZWw+XG5cdFx0XHRcdFx0PFRvb2xzUGFuZWxcblx0XHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0XHRcdFx0cmVzZXRBbGw9eyByZXNldEFsbCB9XG5cdFx0XHRcdFx0XHRwYW5lbElkPXsgcGFuZWxJZCB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PFNsb3QgLz5cblx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWw+XG5cdFx0XHRcdDwvUGFuZWw+XG5cdFx0XHQ8L1BhbmVsV3JhcHBlclZpZXc+XG5cdFx0PC9TbG90RmlsbFByb3ZpZGVyPlxuXHQpO1xufTtcbldpdGhTbG90RmlsbEl0ZW1zLmFyZ3MgPSB7XG5cdC4uLkRlZmF1bHQuYXJncyxcblx0bGFiZWw6ICdUb29scyBQYW5lbCBXaXRoIFNsb3RGaWxsIEl0ZW1zJyxcblx0cGFuZWxJZDogJ3VuaXF1ZS10b29scy1wYW5lbC1pZCcsXG59O1xuXG5leHBvcnQgY29uc3QgV2l0aENvbmRpdGlvbmFsRGVmYXVsdENvbnRyb2w6IFN0b3J5Rm48IHR5cGVvZiBUb29sc1BhbmVsID4gPSAoIHtcblx0cmVzZXRBbGw6IHJlc2V0QWxsUHJvcCxcblx0cGFuZWxJZCxcblx0Li4ucHJvcHNcbn0gKSA9PiB7XG5cdGNvbnN0IFsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyBdID0gdXNlU3RhdGU8IHtcblx0XHRoZWlnaHQ/OiBzdHJpbmc7XG5cdFx0c2NhbGU/OiBudW1iZXIgfCBzdHJpbmc7XG5cdH0gPigge30gKTtcblx0Y29uc3QgeyBoZWlnaHQsIHNjYWxlIH0gPSBhdHRyaWJ1dGVzO1xuXG5cdGNvbnN0IHJlc2V0QWxsOiB0eXBlb2YgcmVzZXRBbGxQcm9wID0gKCByZXNldEZpbHRlcnMgPSBbXSApID0+IHtcblx0XHRsZXQgbmV3QXR0cmlidXRlczogdHlwZW9mIGF0dHJpYnV0ZXMgPSB7fTtcblxuXHRcdHJlc2V0RmlsdGVycy5mb3JFYWNoKCAoIHJlc2V0RmlsdGVyICkgPT4ge1xuXHRcdFx0bmV3QXR0cmlidXRlcyA9IHtcblx0XHRcdFx0Li4ubmV3QXR0cmlidXRlcyxcblx0XHRcdFx0Li4ucmVzZXRGaWx0ZXIoIG5ld0F0dHJpYnV0ZXMgKSxcblx0XHRcdH07XG5cdFx0fSApO1xuXG5cdFx0c2V0QXR0cmlidXRlcyggbmV3QXR0cmlidXRlcyApO1xuXG5cdFx0cmVzZXRBbGxQcm9wKCByZXNldEZpbHRlcnMgKTtcblx0fTtcblxuXHRjb25zdCB1cGRhdGVBdHRyaWJ1dGUgPSAoIG5hbWU6IHN0cmluZywgdmFsdWU/OiBhbnkgKSA9PiB7XG5cdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0Li4uYXR0cmlidXRlcyxcblx0XHRcdFsgbmFtZSBdOiB2YWx1ZSxcblx0XHR9ICk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8U2xvdEZpbGxQcm92aWRlcj5cblx0XHRcdDxUb29sc1BhbmVsSXRlbXM+XG5cdFx0XHRcdDxTaW5nbGVDb2x1bW5JdGVtXG5cdFx0XHRcdFx0aGFzVmFsdWU9eyAoKSA9PiAhISBoZWlnaHQgfVxuXHRcdFx0XHRcdGxhYmVsPVwiSW5qZWN0ZWQgSGVpZ2h0XCJcblx0XHRcdFx0XHRvbkRlc2VsZWN0PXsgKCkgPT4gdXBkYXRlQXR0cmlidXRlKCAnaGVpZ2h0JywgdW5kZWZpbmVkICkgfVxuXHRcdFx0XHRcdHJlc2V0QWxsRmlsdGVyPXsgKCkgPT4gKCB7IGhlaWdodDogdW5kZWZpbmVkIH0gKSB9XG5cdFx0XHRcdFx0cGFuZWxJZD17IHBhbmVsSWQgfVxuXHRcdFx0XHRcdGlzU2hvd25CeURlZmF1bHRcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxVbml0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9XCJJbmplY3RlZCBIZWlnaHRcIlxuXHRcdFx0XHRcdFx0dmFsdWU9eyBoZWlnaHQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PlxuXHRcdFx0XHRcdFx0XHR1cGRhdGVBdHRyaWJ1dGUoICdoZWlnaHQnLCBuZXh0IClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1NpbmdsZUNvbHVtbkl0ZW0+XG5cdFx0XHRcdDxUb29sc1BhbmVsSXRlbVxuXHRcdFx0XHRcdGhhc1ZhbHVlPXsgKCkgPT4gISEgc2NhbGUgfVxuXHRcdFx0XHRcdGxhYmVsPVwiU2NhbGVcIlxuXHRcdFx0XHRcdG9uRGVzZWxlY3Q9eyAoKSA9PiB1cGRhdGVBdHRyaWJ1dGUoICdzY2FsZScsIHVuZGVmaW5lZCApIH1cblx0XHRcdFx0XHRyZXNldEFsbEZpbHRlcj17ICgpID0+ICggeyBzY2FsZTogdW5kZWZpbmVkIH0gKSB9XG5cdFx0XHRcdFx0cGFuZWxJZD17IHBhbmVsSWQgfVxuXHRcdFx0XHRcdGlzU2hvd25CeURlZmF1bHQ9eyAhISBoZWlnaHQgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFRvZ2dsZUdyb3VwQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9XCJTY2FsZVwiXG5cdFx0XHRcdFx0XHR2YWx1ZT17IHNjYWxlIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXh0ICkgPT5cblx0XHRcdFx0XHRcdFx0dXBkYXRlQXR0cmlidXRlKCAnc2NhbGUnLCBuZXh0IClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlzQmxvY2tcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlR3JvdXBDb250cm9sT3B0aW9uIHZhbHVlPVwiY292ZXJcIiBsYWJlbD1cIkNvdmVyXCIgLz5cblx0XHRcdFx0XHRcdDxUb2dnbGVHcm91cENvbnRyb2xPcHRpb25cblx0XHRcdFx0XHRcdFx0dmFsdWU9XCJjb250YWluXCJcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJDb250YWluXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlR3JvdXBDb250cm9sT3B0aW9uIHZhbHVlPVwiZmlsbFwiIGxhYmVsPVwiRmlsbFwiIC8+XG5cdFx0XHRcdFx0PC9Ub2dnbGVHcm91cENvbnRyb2w+XG5cdFx0XHRcdDwvVG9vbHNQYW5lbEl0ZW0+XG5cdFx0XHQ8L1Rvb2xzUGFuZWxJdGVtcz5cblx0XHRcdDxQYW5lbFdyYXBwZXJWaWV3PlxuXHRcdFx0XHQ8UGFuZWw+XG5cdFx0XHRcdFx0PFRvb2xzUGFuZWxcblx0XHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0XHRcdFx0cmVzZXRBbGw9eyByZXNldEFsbCB9XG5cdFx0XHRcdFx0XHRwYW5lbElkPXsgcGFuZWxJZCB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PFNsb3QgLz5cblx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWw+XG5cdFx0XHRcdDwvUGFuZWw+XG5cdFx0XHQ8L1BhbmVsV3JhcHBlclZpZXc+XG5cdFx0PC9TbG90RmlsbFByb3ZpZGVyPlxuXHQpO1xufTtcbldpdGhDb25kaXRpb25hbERlZmF1bHRDb250cm9sLmFyZ3MgPSB7XG5cdC4uLkRlZmF1bHQuYXJncyxcblx0bGFiZWw6ICdUb29scyBQYW5lbCBXaXRoIENvbmRpdGlvbmFsIERlZmF1bHQgdmlhIFNsb3RGaWxsJyxcblx0cGFuZWxJZDogJ3VuaXF1ZS10b29scy1wYW5lbC1pZCcsXG59O1xuXG5leHBvcnQgY29uc3QgV2l0aENvbmRpdGlvbmFsbHlSZW5kZXJlZENvbnRyb2w6IFN0b3J5Rm48XG5cdHR5cGVvZiBUb29sc1BhbmVsXG4+ID0gKCB7IHJlc2V0QWxsOiByZXNldEFsbFByb3AsIHBhbmVsSWQsIC4uLnByb3BzIH0gKSA9PiB7XG5cdGNvbnN0IFsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyBdID0gdXNlU3RhdGU8IHtcblx0XHRoZWlnaHQ/OiBzdHJpbmc7XG5cdFx0c2NhbGU/OiBudW1iZXIgfCBzdHJpbmc7XG5cdH0gPigge30gKTtcblx0Y29uc3QgeyBoZWlnaHQsIHNjYWxlIH0gPSBhdHRyaWJ1dGVzO1xuXG5cdGNvbnN0IHJlc2V0QWxsOiB0eXBlb2YgcmVzZXRBbGxQcm9wID0gKCByZXNldEZpbHRlcnMgPSBbXSApID0+IHtcblx0XHRsZXQgbmV3QXR0cmlidXRlczogdHlwZW9mIGF0dHJpYnV0ZXMgPSB7fTtcblxuXHRcdHJlc2V0RmlsdGVycy5mb3JFYWNoKCAoIHJlc2V0RmlsdGVyICkgPT4ge1xuXHRcdFx0bmV3QXR0cmlidXRlcyA9IHtcblx0XHRcdFx0Li4ubmV3QXR0cmlidXRlcyxcblx0XHRcdFx0Li4ucmVzZXRGaWx0ZXIoIG5ld0F0dHJpYnV0ZXMgKSxcblx0XHRcdH07XG5cdFx0fSApO1xuXG5cdFx0c2V0QXR0cmlidXRlcyggbmV3QXR0cmlidXRlcyApO1xuXG5cdFx0cmVzZXRBbGxQcm9wKCByZXNldEZpbHRlcnMgKTtcblx0fTtcblxuXHRjb25zdCB1cGRhdGVBdHRyaWJ1dGUgPSAoIG5hbWU6IHN0cmluZywgdmFsdWU/OiBhbnkgKSA9PiB7XG5cdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0Li4uYXR0cmlidXRlcyxcblx0XHRcdFsgbmFtZSBdOiB2YWx1ZSxcblx0XHR9ICk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8U2xvdEZpbGxQcm92aWRlcj5cblx0XHRcdDxUb29sc1BhbmVsSXRlbXM+XG5cdFx0XHRcdDxTaW5nbGVDb2x1bW5JdGVtXG5cdFx0XHRcdFx0aGFzVmFsdWU9eyAoKSA9PiAhISBoZWlnaHQgfVxuXHRcdFx0XHRcdGxhYmVsPVwiSW5qZWN0ZWQgSGVpZ2h0XCJcblx0XHRcdFx0XHRvbkRlc2VsZWN0PXsgKCkgPT4ge1xuXHRcdFx0XHRcdFx0dXBkYXRlQXR0cmlidXRlKCAnc2NhbGUnLCB1bmRlZmluZWQgKTtcblx0XHRcdFx0XHRcdHVwZGF0ZUF0dHJpYnV0ZSggJ2hlaWdodCcsIHVuZGVmaW5lZCApO1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdHJlc2V0QWxsRmlsdGVyPXsgKCkgPT4gKCB7IGhlaWdodDogdW5kZWZpbmVkIH0gKSB9XG5cdFx0XHRcdFx0cGFuZWxJZD17IHBhbmVsSWQgfVxuXHRcdFx0XHRcdGlzU2hvd25CeURlZmF1bHRcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxVbml0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9XCJJbmplY3RlZCBIZWlnaHRcIlxuXHRcdFx0XHRcdFx0dmFsdWU9eyBoZWlnaHQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PlxuXHRcdFx0XHRcdFx0XHR1cGRhdGVBdHRyaWJ1dGUoICdoZWlnaHQnLCBuZXh0IClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1NpbmdsZUNvbHVtbkl0ZW0+XG5cdFx0XHRcdHsgISEgaGVpZ2h0ICYmIChcblx0XHRcdFx0XHQ8VG9vbHNQYW5lbEl0ZW1cblx0XHRcdFx0XHRcdGhhc1ZhbHVlPXsgKCkgPT4gISEgc2NhbGUgfVxuXHRcdFx0XHRcdFx0bGFiZWw9XCJTY2FsZVwiXG5cdFx0XHRcdFx0XHRvbkRlc2VsZWN0PXsgKCkgPT5cblx0XHRcdFx0XHRcdFx0dXBkYXRlQXR0cmlidXRlKCAnc2NhbGUnLCB1bmRlZmluZWQgKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmVzZXRBbGxGaWx0ZXI9eyAoKSA9PiAoIHsgc2NhbGU6IHVuZGVmaW5lZCB9ICkgfVxuXHRcdFx0XHRcdFx0cGFuZWxJZD17IHBhbmVsSWQgfVxuXHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdFxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxUb2dnbGVHcm91cENvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJTY2FsZVwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgc2NhbGUgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV4dCApID0+XG5cdFx0XHRcdFx0XHRcdFx0dXBkYXRlQXR0cmlidXRlKCAnc2NhbGUnLCBuZXh0IClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpc0Jsb2NrXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVHcm91cENvbnRyb2xPcHRpb25cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT1cImNvdmVyXCJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkNvdmVyXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUdyb3VwQ29udHJvbE9wdGlvblxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPVwiY29udGFpblwiXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJDb250YWluXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUdyb3VwQ29udHJvbE9wdGlvblxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPVwiZmlsbFwiXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJGaWxsXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvVG9nZ2xlR3JvdXBDb250cm9sPlxuXHRcdFx0XHRcdDwvVG9vbHNQYW5lbEl0ZW0+XG5cdFx0XHRcdCkgfVxuXHRcdFx0PC9Ub29sc1BhbmVsSXRlbXM+XG5cdFx0XHQ8UGFuZWxXcmFwcGVyVmlldz5cblx0XHRcdFx0PFBhbmVsPlxuXHRcdFx0XHRcdDxUb29sc1BhbmVsXG5cdFx0XHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdFx0XHRcdHJlc2V0QWxsPXsgcmVzZXRBbGwgfVxuXHRcdFx0XHRcdFx0cGFuZWxJZD17IHBhbmVsSWQgfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxTbG90IC8+XG5cdFx0XHRcdFx0PC9Ub29sc1BhbmVsPlxuXHRcdFx0XHQ8L1BhbmVsPlxuXHRcdFx0PC9QYW5lbFdyYXBwZXJWaWV3PlxuXHRcdDwvU2xvdEZpbGxQcm92aWRlcj5cblx0KTtcbn07XG5XaXRoQ29uZGl0aW9uYWxseVJlbmRlcmVkQ29udHJvbC5hcmdzID0ge1xuXHQuLi5EZWZhdWx0LmFyZ3MsXG5cdGxhYmVsOiAnVG9vbHMgUGFuZWwgV2l0aCBDb25kaXRpb25hbGx5IFJlbmRlcmVkIEl0ZW0gdmlhIFNsb3RGaWxsJyxcblx0cGFuZWxJZDogJ3VuaXF1ZS10b29scy1wYW5lbC1pZCcsXG59O1xuXG5jb25zdCBQYW5lbFdyYXBwZXJWaWV3ID0gc3R5bGVkLmRpdmBcblx0Zm9udC1zaXplOiAxM3B4O1xuXG5cdC5jb21wb25lbnRzLWRyb3Bkb3duLW1lbnVfX21lbnUge1xuXHRcdG1heC13aWR0aDogMjIwcHg7XG5cdH1cbmA7XG5cbmNvbnN0IFNpbmdsZUNvbHVtbkl0ZW0gPSBzdHlsZWQoIFRvb2xzUGFuZWxJdGVtIClgXG5cdGdyaWQtY29sdW1uOiBzcGFuIDE7XG5gO1xuXG5jb25zdCBJbnRyb1RleHQgPSBzdHlsZWQuZGl2YFxuXHRncmlkLWNvbHVtbjogc3BhbiAyO1xuYDtcbiJdLCJtYXBwaW5ncyI6IkFBOGxCa0IiLCJpZ25vcmVMaXN0IjpbXX0= */");
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "({\n  resetAll: resetAllProp,\n  ...props\n}) => {\n  const [height, setHeight] = useState<string | undefined>();\n  const [minHeight, setMinHeight] = useState<string | undefined>();\n  const [width, setWidth] = useState<string | undefined>();\n  const [scale, setScale] = useState<number | string | undefined>();\n  const resetAll: typeof resetAllProp = filters => {\n    setHeight(undefined);\n    setWidth(undefined);\n    setMinHeight(undefined);\n    setScale(undefined);\n    resetAllProp(filters);\n  };\n  return <PanelWrapperView>\n            <Panel>\n                <ToolsPanel {...props} resetAll={resetAll}>\n                    <SingleColumnItem hasValue={() => !!width} label=\"Width\" onDeselect={() => setWidth(undefined)} isShownByDefault>\n                        <UnitControl label=\"Width\" value={width} onChange={next => setWidth(next)} />\n                    </SingleColumnItem>\n                    <SingleColumnItem hasValue={() => !!height} label=\"Height\" onDeselect={() => setHeight(undefined)} isShownByDefault>\n                        <UnitControl label=\"Height\" value={height} onChange={next => setHeight(next)} />\n                    </SingleColumnItem>\n                    <ToolsPanelItem hasValue={() => !!minHeight} label=\"Minimum height\" onDeselect={() => setMinHeight(undefined)} isShownByDefault>\n                        <UnitControl label=\"Minimum height\" value={minHeight} onChange={next => setMinHeight(next)} />\n                    </ToolsPanelItem>\n                    <ToolsPanelItem hasValue={() => !!scale} label=\"Scale\" onDeselect={() => setScale(undefined)}>\n                        <ToggleGroupControl label=\"Scale\" value={scale} onChange={next => setScale(next)} isBlock>\n                            <ToggleGroupControlOption value=\"cover\" label=\"Cover\" />\n                            <ToggleGroupControlOption value=\"contain\" label=\"Contain\" />\n                            <ToggleGroupControlOption value=\"fill\" label=\"Fill\" />\n                        </ToggleGroupControl>\n                    </ToolsPanelItem>\n                </ToolsPanel>\n            </Panel>\n        </PanelWrapperView>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithNonToolsPanelItems.parameters = {
			...WithNonToolsPanelItems.parameters,
			docs: {
				...WithNonToolsPanelItems.parameters?.docs,
				source: {
					originalSource: "({\n  resetAll: resetAllProp,\n  ...props\n}) => {\n  const [height, setHeight] = useState<string | undefined>();\n  const [width, setWidth] = useState<string | undefined>();\n  const resetAll: typeof resetAllProp = filters => {\n    setHeight(undefined);\n    setWidth(undefined);\n    resetAllProp(filters);\n  };\n  return <PanelWrapperView>\n            <Panel>\n                <ToolsPanel {...props} resetAll={resetAll}>\n                    <IntroText>\n                        This text illustrates not all items must be wrapped in a\n                        ToolsPanelItem and represented in the panel menu.\n                    </IntroText>\n                    <SingleColumnItem hasValue={() => !!width} label=\"Width\" onDeselect={() => setWidth(undefined)} isShownByDefault>\n                        <UnitControl label=\"Width\" value={width} onChange={next => setWidth(next)} />\n                    </SingleColumnItem>\n                    <SingleColumnItem hasValue={() => !!height} label=\"Height\" onDeselect={() => setHeight(undefined)} isShownByDefault>\n                        <UnitControl label=\"Height\" value={height} onChange={next => setHeight(next)} />\n                    </SingleColumnItem>\n                </ToolsPanel>\n            </Panel>\n        </PanelWrapperView>;\n}",
					...WithNonToolsPanelItems.parameters?.docs?.source
				}
			}
		};
		WithOptionalItemsPlusIcon.parameters = {
			...WithOptionalItemsPlusIcon.parameters,
			docs: {
				...WithOptionalItemsPlusIcon.parameters?.docs,
				source: {
					originalSource: "({\n  resetAll: resetAllProp,\n  ...props\n}) => {\n  const [isFirstToolsPanelItemShownByDefault, setIsFirstToolsPanelItemShownByDefault] = useState(false);\n  const [height, setHeight] = useState<string | undefined>();\n  const [width, setWidth] = useState<string | undefined>();\n  const [minWidth, setMinWidth] = useState<string | undefined>();\n  const resetAll: typeof resetAllProp = filters => {\n    setHeight(undefined);\n    setWidth(undefined);\n    setMinWidth(undefined);\n    resetAllProp(filters);\n  };\n  return <>\n            <PanelWrapperView>\n                <Panel>\n                    <ToolsPanel {...props} resetAll={resetAll}\n        // `key` property here is used as a hack to force `ToolsPanel` to re-render\n        // See https://github.com/WordPress/gutenberg/pull/38262/files#r793422991\n        key={isFirstToolsPanelItemShownByDefault ? 'true' : 'false'}>\n                        <SingleColumnItem hasValue={() => !!minWidth} label=\"Minimum width\" onDeselect={() => setMinWidth(undefined)} isShownByDefault={isFirstToolsPanelItemShownByDefault}>\n                            <UnitControl label=\"Minimum width\" value={minWidth} onChange={next => setMinWidth(next)} />\n                        </SingleColumnItem>\n                        <SingleColumnItem hasValue={() => !!width} label=\"Width\" onDeselect={() => setWidth(undefined)} isShownByDefault={false}>\n                            <UnitControl label=\"Width\" value={width} onChange={next => setWidth(next)} />\n                        </SingleColumnItem>\n                        <SingleColumnItem hasValue={() => !!height} label=\"Height\" onDeselect={() => setHeight(undefined)} isShownByDefault={false}>\n                            <UnitControl label=\"Height\" value={height} onChange={next => setHeight(next)} />\n                        </SingleColumnItem>\n                    </ToolsPanel>\n                </Panel>\n            </PanelWrapperView>\n\n            <button onClick={() => setIsFirstToolsPanelItemShownByDefault(!isFirstToolsPanelItemShownByDefault)} aria-pressed={isFirstToolsPanelItemShownByDefault ? 'true' : 'false'} style={{\n      marginTop: '2rem'\n    }}>\n                {isFirstToolsPanelItemShownByDefault ? 'Make first PanelItem hidden by default' : 'Make first PanelItem shown by default'}\n            </button>\n        </>;\n}",
					...WithOptionalItemsPlusIcon.parameters?.docs?.source
				}
			}
		};
		WithSlotFillItems.parameters = {
			...WithSlotFillItems.parameters,
			docs: {
				...WithSlotFillItems.parameters?.docs,
				source: {
					originalSource: "({\n  resetAll: resetAllProp,\n  panelId,\n  ...props\n}) => {\n  const [attributes, setAttributes] = useState<{\n    width?: string;\n    height?: string;\n  }>({});\n  const {\n    width,\n    height\n  } = attributes;\n  const resetAll: typeof resetAllProp = (resetFilters = []) => {\n    let newAttributes: typeof attributes = {};\n    resetFilters.forEach(resetFilter => {\n      newAttributes = {\n        ...newAttributes,\n        ...resetFilter(newAttributes)\n      };\n    });\n    setAttributes(newAttributes);\n    resetAllProp(resetFilters);\n  };\n  const updateAttribute = (name: string, value?: any) => {\n    setAttributes({\n      ...attributes,\n      [name]: value\n    });\n  };\n  return <SlotFillProvider>\n            <ToolsPanelItems>\n                <SingleColumnItem hasValue={() => !!width} label=\"Injected Width\" onDeselect={() => updateAttribute('width', undefined)} resetAllFilter={() => ({\n        width: undefined\n      })} panelId={panelId}>\n                    <UnitControl label=\"Injected Width\" value={width} onChange={next => updateAttribute('width', next)} />\n                </SingleColumnItem>\n                <SingleColumnItem hasValue={() => !!height} label=\"Injected Height\" onDeselect={() => updateAttribute('height', undefined)} resetAllFilter={() => ({\n        height: undefined\n      })} panelId={panelId}>\n                    <UnitControl label=\"Injected Height\" value={height} onChange={next => updateAttribute('height', next)} />\n                </SingleColumnItem>\n                <ToolsPanelItem hasValue={() => true} label=\"Item for alternate panel\" onDeselect={() => undefined} resetAllFilter={() => undefined} panelId=\"intended-for-another-panel-via-shared-slot\">\n                    <p>\n                        This panel item will not be displayed in the demo as its\n                        panelId does not match the panel being rendered.\n                    </p>\n                </ToolsPanelItem>\n            </ToolsPanelItems>\n            <PanelWrapperView>\n                <Panel>\n                    <ToolsPanel {...props} resetAll={resetAll} panelId={panelId}>\n                        <Slot />\n                    </ToolsPanel>\n                </Panel>\n            </PanelWrapperView>\n        </SlotFillProvider>;\n}",
					...WithSlotFillItems.parameters?.docs?.source
				}
			}
		};
		WithConditionalDefaultControl.parameters = {
			...WithConditionalDefaultControl.parameters,
			docs: {
				...WithConditionalDefaultControl.parameters?.docs,
				source: {
					originalSource: "({\n  resetAll: resetAllProp,\n  panelId,\n  ...props\n}) => {\n  const [attributes, setAttributes] = useState<{\n    height?: string;\n    scale?: number | string;\n  }>({});\n  const {\n    height,\n    scale\n  } = attributes;\n  const resetAll: typeof resetAllProp = (resetFilters = []) => {\n    let newAttributes: typeof attributes = {};\n    resetFilters.forEach(resetFilter => {\n      newAttributes = {\n        ...newAttributes,\n        ...resetFilter(newAttributes)\n      };\n    });\n    setAttributes(newAttributes);\n    resetAllProp(resetFilters);\n  };\n  const updateAttribute = (name: string, value?: any) => {\n    setAttributes({\n      ...attributes,\n      [name]: value\n    });\n  };\n  return <SlotFillProvider>\n            <ToolsPanelItems>\n                <SingleColumnItem hasValue={() => !!height} label=\"Injected Height\" onDeselect={() => updateAttribute('height', undefined)} resetAllFilter={() => ({\n        height: undefined\n      })} panelId={panelId} isShownByDefault>\n                    <UnitControl label=\"Injected Height\" value={height} onChange={next => updateAttribute('height', next)} />\n                </SingleColumnItem>\n                <ToolsPanelItem hasValue={() => !!scale} label=\"Scale\" onDeselect={() => updateAttribute('scale', undefined)} resetAllFilter={() => ({\n        scale: undefined\n      })} panelId={panelId} isShownByDefault={!!height}>\n                    <ToggleGroupControl label=\"Scale\" value={scale} onChange={next => updateAttribute('scale', next)} isBlock>\n                        <ToggleGroupControlOption value=\"cover\" label=\"Cover\" />\n                        <ToggleGroupControlOption value=\"contain\" label=\"Contain\" />\n                        <ToggleGroupControlOption value=\"fill\" label=\"Fill\" />\n                    </ToggleGroupControl>\n                </ToolsPanelItem>\n            </ToolsPanelItems>\n            <PanelWrapperView>\n                <Panel>\n                    <ToolsPanel {...props} resetAll={resetAll} panelId={panelId}>\n                        <Slot />\n                    </ToolsPanel>\n                </Panel>\n            </PanelWrapperView>\n        </SlotFillProvider>;\n}",
					...WithConditionalDefaultControl.parameters?.docs?.source
				}
			}
		};
		WithConditionallyRenderedControl.parameters = {
			...WithConditionallyRenderedControl.parameters,
			docs: {
				...WithConditionallyRenderedControl.parameters?.docs,
				source: {
					originalSource: "({\n  resetAll: resetAllProp,\n  panelId,\n  ...props\n}) => {\n  const [attributes, setAttributes] = useState<{\n    height?: string;\n    scale?: number | string;\n  }>({});\n  const {\n    height,\n    scale\n  } = attributes;\n  const resetAll: typeof resetAllProp = (resetFilters = []) => {\n    let newAttributes: typeof attributes = {};\n    resetFilters.forEach(resetFilter => {\n      newAttributes = {\n        ...newAttributes,\n        ...resetFilter(newAttributes)\n      };\n    });\n    setAttributes(newAttributes);\n    resetAllProp(resetFilters);\n  };\n  const updateAttribute = (name: string, value?: any) => {\n    setAttributes({\n      ...attributes,\n      [name]: value\n    });\n  };\n  return <SlotFillProvider>\n            <ToolsPanelItems>\n                <SingleColumnItem hasValue={() => !!height} label=\"Injected Height\" onDeselect={() => {\n        updateAttribute('scale', undefined);\n        updateAttribute('height', undefined);\n      }} resetAllFilter={() => ({\n        height: undefined\n      })} panelId={panelId} isShownByDefault>\n                    <UnitControl label=\"Injected Height\" value={height} onChange={next => updateAttribute('height', next)} />\n                </SingleColumnItem>\n                {!!height && <ToolsPanelItem hasValue={() => !!scale} label=\"Scale\" onDeselect={() => updateAttribute('scale', undefined)} resetAllFilter={() => ({\n        scale: undefined\n      })} panelId={panelId} isShownByDefault>\n                        <ToggleGroupControl label=\"Scale\" value={scale} onChange={next => updateAttribute('scale', next)} isBlock>\n                            <ToggleGroupControlOption value=\"cover\" label=\"Cover\" />\n                            <ToggleGroupControlOption value=\"contain\" label=\"Contain\" />\n                            <ToggleGroupControlOption value=\"fill\" label=\"Fill\" />\n                        </ToggleGroupControl>\n                    </ToolsPanelItem>}\n            </ToolsPanelItems>\n            <PanelWrapperView>\n                <Panel>\n                    <ToolsPanel {...props} resetAll={resetAll} panelId={panelId}>\n                        <Slot />\n                    </ToolsPanel>\n                </Panel>\n            </PanelWrapperView>\n        </SlotFillProvider>;\n}",
					...WithConditionallyRenderedControl.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, WithConditionalDefaultControl, WithConditionallyRenderedControl, WithNonToolsPanelItems, WithOptionalItemsPlusIcon, WithSlotFillItems, meta as default };
