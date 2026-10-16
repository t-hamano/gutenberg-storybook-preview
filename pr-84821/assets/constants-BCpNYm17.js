import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
//#region ../packages/ui/build-module/utils/item-popup/item-content.mjs
function parseItemContent(children, { Label, Description, validationMessage }) {
	const [label, ...descriptions] = import_react.Children.toArray(children);
	const hasLabel = (0, import_react.isValidElement)(label) && label.type === Label;
	const descriptionElements = descriptions.filter((description) => (0, import_react.isValidElement)(description) && description.type === Description);
	if (VALIDATION_ENABLED && (!hasLabel || descriptionElements.length !== descriptions.length)) throw new Error(validationMessage);
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
var VALIDATION_ENABLED;
function init_item_content() {
	return (init_item_content = __esmMin((() => {
		init_react();
		VALIDATION_ENABLED = true;
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/primitives/constants.mjs
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
export { useItemContent as i, init_constants as n, init_item_content as r, ITEM_POPUP_POSITIONER_PROPS as t };
