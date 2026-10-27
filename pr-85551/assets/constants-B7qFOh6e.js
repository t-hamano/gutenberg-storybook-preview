import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
//#region ../packages/ui/src/utils/css/item-popup.module.css
var popup, list, group, separator, item, status, empty, item_popup_module_default;
function init_item_popup_module() {
	return (init_item_popup_module = __esmMin((() => {
		popup = "_popup_1si25_5 _dropdown-motion_1u8vo_11";
		list = "_list_1si25_72 _list-chrome_1si25_75";
		group = "_group_1si25_121";
		separator = "_separator_1si25_134";
		item = "_item_1si25_84";
		status = "_status_1si25_253";
		empty = "_empty_1si25_259";
		item_popup_module_default = {
			popup,
			"is-width-anchor": "_is-width-anchor_1si25_27",
			"is-width-content": "_is-width-content_1si25_32",
			"is-width-available": "_is-width-available_1si25_33",
			"is-width-sm": "_is-width-sm_1si25_41",
			"is-width-md": "_is-width-md_1si25_45",
			"is-width-lg": "_is-width-lg_1si25_49",
			"fixed-width-presets": "_fixed-width-presets_1si25_54",
			"is-align-item-with-trigger": "_is-align-item-with-trigger_1si25_66",
			"list-chrome": "_list-chrome_1si25_75",
			"item-icon": "_item-icon_1si25_84",
			list,
			"list-scrollable-container": "_list-scrollable-container_1si25_101",
			"list-footer": "_list-footer_1si25_112",
			group,
			"group-label": "_group-label_1si25_125",
			separator,
			item,
			"is-size-small": "_is-size-small_1si25_178",
			"item-indicator-icon": "_item-indicator-icon_1si25_185",
			"item-content": "_item-content_1si25_223",
			"item-text": "_item-text_1si25_230",
			"item-label": "_item-label_1si25_236",
			"item-description": "_item-description_1si25_242",
			status,
			empty
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/utils/item-popup/item-content.ts
function parseItemContent(children, { Label, Description, validationMessage }) {
	const [label, ...descriptions] = import_react.Children.toArray(children);
	const hasLabel = (0, import_react.isValidElement)(label) && label.type === Label;
	const descriptionElements = descriptions.filter((description) => (0, import_react.isValidElement)(description) && description.type === Description);
	if (!hasLabel || descriptionElements.length !== descriptions.length) throw new Error(validationMessage);
	return {
		descriptionIds: descriptionElements.map((description) => description.props.id),
		hasLabel,
		labelId: hasLabel ? label.props.id : void 0
	};
}
function useItemContent(children, components, { "aria-describedby": ariaDescribedBy, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy } = {}) {
	const generatedLabelId = (0, import_react.useId)();
	const generatedDescriptionId = (0, import_react.useId)();
	const { descriptionIds, hasLabel, labelId } = parseItemContent(children, components);
	const resolvedLabelId = hasLabel ? labelId ?? generatedLabelId : void 0;
	const resolvedDescriptionIds = descriptionIds.map((descriptionId, index) => descriptionId ?? `${generatedDescriptionId}-${index}`);
	const itemDescribedBy = Array.from(/* @__PURE__ */ new Set([...ariaDescribedBy?.split(/\s+/).filter(Boolean) ?? [], ...resolvedDescriptionIds])).join(" ");
	let descriptionIndex = 0;
	const { Label, Description, descriptionValidationToken } = components;
	return {
		contentChildren: import_react.Children.map(children, (child) => {
			if (!(0, import_react.isValidElement)(child)) return child;
			if (child.type === Label) return child.props.id === resolvedLabelId ? child : (0, import_react.cloneElement)(child, { id: resolvedLabelId });
			if (child.type !== Description) return child;
			const descriptionId = resolvedDescriptionIds[descriptionIndex++];
			if (!descriptionValidationToken && child.props.id === descriptionId) return child;
			return (0, import_react.cloneElement)(child, {
				id: descriptionId,
				...descriptionValidationToken && { validationToken: descriptionValidationToken }
			});
		}),
		resolvedLabelId,
		itemAriaProps: {
			"aria-describedby": itemDescribedBy || void 0,
			"aria-label": ariaLabel,
			"aria-labelledby": ariaLabelledBy ?? (ariaLabel ? void 0 : resolvedLabelId)
		}
	};
}
function init_item_content() {
	return (init_item_content = __esmMin((() => {
		init_react();
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
//#region ../packages/ui/src/form/primitives/constants.ts
var ITEM_POPUP_POSITIONER_PROPS;
function init_constants() {
	return (init_constants = __esmMin((() => {
		ITEM_POPUP_POSITIONER_PROPS = {
			align: "start",
			sideOffset: 8,
			collisionPadding: 12
		};
	})))();
}
//#endregion
export { init_item_content as a, item_popup_module_default as c, init_item_popup as i, init_constants as n, useItemContent as o, getItemPopupWidthClassName as r, init_item_popup_module as s, ITEM_POPUP_POSITIONER_PROPS as t };
