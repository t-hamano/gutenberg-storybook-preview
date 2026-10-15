import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { n as useRenderElement, t as init_useRenderElement } from "./useRenderElement-QwAlaybP.js";
import { n as useBaseUiId, t as init_useBaseUiId } from "./useBaseUiId-DDVp3i2t.js";
import { n as useButton, t as init_useButton } from "./useButton-C38YKBDn.js";
import { At as triggerOpenStateMapping, C as useTriggerDataForwarding, Et as init_popupStateMapping, M as fastComponentRef, N as init_fastHooks, Q as init_constants, Y as CLICK_TRIGGER_IDENTIFIER, _ as init_popupStoreUtils } from "./DirectionProvider-CsD6Wmlj.js";
import { o as init_useClick, r as useOpenMethodTriggerProps, s as useClick, t as init_useOpenInteractionType } from "./useOpenInteractionType-KvNpLDr_.js";
import { l as init_usePopupHandleStore, u as usePopupHandleStore } from "./safePolygon-CaWQyfTS.js";
import { d as init_DialogRootContext, f as useDialogRootContext } from "./DialogTitle-CQ1UWgyx.js";
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/dialog/trigger/DialogTrigger.mjs
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
