import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
//#region ../packages/ui/src/utils/css/item-popup.module.css
var popup, list, group, separator, item, status, empty, item_popup_module_default;
function init_item_popup_module() {
	return (init_item_popup_module = __esmMin((() => {
		popup = "_popup_1e9l1_5 _dropdown-motion_1vmvb_10";
		list = "_list_1e9l1_57 _list-chrome_1e9l1_60";
		group = "_group_1e9l1_106";
		separator = "_separator_1e9l1_119";
		item = "_item_1e9l1_69";
		status = "_status_1e9l1_251";
		empty = "_empty_1e9l1_257";
		item_popup_module_default = {
			popup,
			"is-width-anchor": "_is-width-anchor_1e9l1_26",
			"is-width-content": "_is-width-content_1e9l1_30",
			"is-width-sm": "_is-width-sm_1e9l1_34",
			"is-width-md": "_is-width-md_1e9l1_38",
			"is-width-lg": "_is-width-lg_1e9l1_42",
			"is-width-available": "_is-width-available_1e9l1_46",
			"is-align-item-with-trigger": "_is-align-item-with-trigger_1e9l1_51",
			"list-chrome": "_list-chrome_1e9l1_60",
			"item-icon": "_item-icon_1e9l1_69",
			list,
			"list-scrollable-container": "_list-scrollable-container_1e9l1_86",
			"list-footer": "_list-footer_1e9l1_97",
			group,
			"group-label": "_group-label_1e9l1_110",
			separator,
			item,
			"is-size-small": "_is-size-small_1e9l1_163",
			"item-indicator-icon": "_item-indicator-icon_1e9l1_170",
			"item-content": "_item-content_1e9l1_223",
			"item-text": "_item-text_1e9l1_230",
			"item-label": "_item-label_1e9l1_236",
			"item-description": "_item-description_1e9l1_240",
			status,
			empty
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/utils/css/item-popup.ts
function getItemPopupWidthClassName(width = "anchor") {
	switch (width) {
		case "available": return item_popup_module_default["is-width-available"];
		case "content": return item_popup_module_default["is-width-content"];
		case "lg": return item_popup_module_default["is-width-lg"];
		case "md": return item_popup_module_default["is-width-md"];
		case "sm": return item_popup_module_default["is-width-sm"];
		case "anchor": return item_popup_module_default["is-width-anchor"];
		default: return false;
	}
}
function init_item_popup() {
	return (init_item_popup = __esmMin((() => {
		init_item_popup_module();
	})))();
}
//#endregion
export { item_popup_module_default as i, init_item_popup as n, init_item_popup_module as r, getItemPopupWidthClassName as t };
