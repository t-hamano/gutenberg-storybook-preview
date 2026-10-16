import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
//#region ../packages/ui/src/utils/css/item-popup.module.css
var popup, list, group, separator, item, status, empty, item_popup_module_default;
function init_item_popup_module() {
	return (init_item_popup_module = __esmMin((() => {
		popup = "_popup_119xo_5 _dropdown-motion_1u8vo_11";
		list = "_list_119xo_57 _list-chrome_119xo_60";
		group = "_group_119xo_106";
		separator = "_separator_119xo_119";
		item = "_item_119xo_69";
		status = "_status_119xo_240";
		empty = "_empty_119xo_246";
		item_popup_module_default = {
			popup,
			"is-width-anchor": "_is-width-anchor_119xo_26",
			"is-width-content": "_is-width-content_119xo_30",
			"is-width-sm": "_is-width-sm_119xo_34",
			"is-width-md": "_is-width-md_119xo_38",
			"is-width-lg": "_is-width-lg_119xo_42",
			"is-width-available": "_is-width-available_119xo_46",
			"is-align-item-with-trigger": "_is-align-item-with-trigger_119xo_51",
			"list-chrome": "_list-chrome_119xo_60",
			"item-icon": "_item-icon_119xo_69",
			list,
			"list-scrollable-container": "_list-scrollable-container_119xo_86",
			"list-footer": "_list-footer_119xo_97",
			group,
			"group-label": "_group-label_119xo_110",
			separator,
			item,
			"is-size-small": "_is-size-small_119xo_163",
			"item-indicator-icon": "_item-indicator-icon_119xo_170",
			"item-content": "_item-content_119xo_214",
			"item-text": "_item-text_119xo_221",
			"item-label": "_item-label_119xo_227",
			"item-description": "_item-description_119xo_231",
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
