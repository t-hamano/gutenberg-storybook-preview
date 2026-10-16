import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { r as useRenderElement, t as init_useRenderElement } from "./useRenderElement-Dkv6YH0v.js";
import { n as useBaseUiId, t as init_useBaseUiId } from "./useBaseUiId-CESTxyJs.js";
import { n as useButton, t as init_useButton } from "./useButton-jJ_7clep.js";
import { A as useTriggerDataForwarding, Mt as triggerOpenStateMapping, Ot as init_popupStateMapping, Q as CLICK_TRIGGER_IDENTIFIER, h as init_fastHooks, m as fastComponentRef, tt as init_constants, w as init_popupStoreUtils } from "./DirectionProvider-ijBUoTP5.js";
import { o as init_useClick, r as useOpenMethodTriggerProps, s as useClick, t as init_useOpenInteractionType } from "./useOpenInteractionType-BJdBBuIW.js";
import { l as init_usePopupHandleStore, u as usePopupHandleStore } from "./safePolygon-vycgRCWQ.js";
import { d as init_DialogRootContext, f as useDialogRootContext } from "./DialogTitle-DG_nbyNT.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/dialog/trigger/DialogTrigger.mjs
var import_react, DialogTrigger;
function init_DialogTrigger() {
	return (init_DialogTrigger = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_fastHooks();
		init_DialogRootContext();
		init_useButton();
		init_useRenderElement();
		init_popupStateMapping();
		init_constants();
		init_usePopupHandleStore(), init_popupStoreUtils();
		init_useBaseUiId();
		init_useClick();
		init_useOpenInteractionType();
		DialogTrigger = fastComponentRef(function DialogTrigger(componentProps, forwardedRef) {
			const { render, className, style, disabled = false, nativeButton = true, id: idProp, payload, handle, ...elementProps } = componentProps;
			const dialogRootStore = useDialogRootContext(true);
			const store = usePopupHandleStore(handle) ?? dialogRootStore;
			if (!store) throw new Error("Base UI: <Dialog.Trigger> must be used within <Dialog.Root> or provided with a handle.");
			const thisTriggerId = useBaseUiId(idProp);
			const floatingContext = store.useState("floatingRootContext");
			const isOpenedByThisTrigger = store.useState("isOpenedByTrigger", thisTriggerId);
			const popupId = store.useState("triggerPopupId", thisTriggerId);
			const triggerElementRef = import_react.useRef(null);
			const { registerTrigger, isMountedByThisTrigger } = useTriggerDataForwarding(thisTriggerId, triggerElementRef, store, { payload });
			const { getButtonProps, buttonRef } = useButton({
				disabled,
				native: nativeButton
			});
			const click = useClick(floatingContext);
			const interactionTypeProps = useOpenMethodTriggerProps(() => store.select("open"), (interactionType) => {
				store.set("openMethod", interactionType);
			});
			const state = {
				disabled,
				open: isOpenedByThisTrigger
			};
			const rootTriggerProps = store.useState("triggerProps", isMountedByThisTrigger);
			return useRenderElement("button", componentProps, {
				state,
				ref: [
					buttonRef,
					forwardedRef,
					registerTrigger,
					triggerElementRef
				],
				props: [
					click.reference,
					rootTriggerProps,
					interactionTypeProps,
					{
						[CLICK_TRIGGER_IDENTIFIER]: "",
						id: thisTriggerId,
						"aria-haspopup": "dialog",
						"aria-expanded": isOpenedByThisTrigger,
						"aria-controls": popupId
					},
					elementProps,
					getButtonProps
				],
				stateAttributesMapping: triggerOpenStateMapping
			});
		});
		DialogTrigger.displayName = "DialogTrigger";
	})))();
}
//#endregion
export { init_DialogTrigger as n, DialogTrigger as t };
