import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
//#region ../packages/ui/build-module/utils/use-iframe-dismissal-bridge.mjs
function getIframeDocument(iframe) {
	try {
		return iframe.contentDocument;
	} catch {
		return null;
	}
}
function forEachIframe(node, callback) {
	if (node.nodeType !== Node.ELEMENT_NODE) return;
	const element = node;
	if (element.tagName === "IFRAME") callback(element);
	element.querySelectorAll("iframe").forEach(callback);
}
function getNodeDocument(node) {
	return node?.nodeType === Node.DOCUMENT_NODE ? node : node?.ownerDocument ?? null;
}
function isInsideCurrentPopup(event, trigger) {
	const popupId = trigger.getAttribute("aria-controls");
	if (!popupId) return false;
	let target = event.target;
	while (target) {
		const targetDocument = getNodeDocument(target);
		const targetElement = target.nodeType === Node.ELEMENT_NODE ? target : target.parentElement;
		const popup = targetDocument?.getElementById(popupId);
		if (popup && targetElement) {
			const rootOwnerId = popup.getAttribute("data-rootownerid");
			if (!rootOwnerId) return popup.contains(targetElement);
			return targetElement.closest("[data-rootownerid]")?.getAttribute("data-rootownerid") === rootOwnerId;
		}
		if (targetDocument === trigger.ownerDocument) break;
		target = targetDocument?.defaultView?.frameElement ?? null;
	}
	return false;
}
function useCloseOnIframePointerDown({ enabled, onPointerDown, ownerDocument }) {
	(0, import_react.useEffect)(() => {
		if (!enabled || !ownerDocument) return;
		const observeDocument = (document, listenForPointerDown) => {
			if (listenForPointerDown) document.addEventListener("pointerdown", onPointerDown, true);
			const iframeCleanups = /* @__PURE__ */ new Map();
			const addIframe = (iframe) => {
				if (iframeCleanups.has(iframe)) return;
				let iframeDocument = null;
				let iframeDocumentCleanup;
				const updateIframeDocument = () => {
					const nextIframeDocument = getIframeDocument(iframe);
					if (nextIframeDocument === iframeDocument) return;
					iframeDocumentCleanup?.();
					iframeDocument = nextIframeDocument;
					iframeDocumentCleanup = iframeDocument ? observeDocument(iframeDocument, true) : void 0;
				};
				iframe.addEventListener("load", updateIframeDocument);
				updateIframeDocument();
				iframeCleanups.set(iframe, () => {
					iframe.removeEventListener("load", updateIframeDocument);
					iframeDocumentCleanup?.();
				});
			};
			const removeIframe = (iframe) => {
				iframeCleanups.get(iframe)?.();
				iframeCleanups.delete(iframe);
			};
			document.querySelectorAll("iframe").forEach(addIframe);
			const MutationObserverConstructor = document.defaultView?.MutationObserver;
			const observer = MutationObserverConstructor ? new MutationObserverConstructor((records) => {
				records.forEach((record) => {
					record.removedNodes.forEach((node) => forEachIframe(node, removeIframe));
					record.addedNodes.forEach((node) => forEachIframe(node, addIframe));
				});
			}) : null;
			observer?.observe(document.documentElement, {
				childList: true,
				subtree: true
			});
			return () => {
				observer?.disconnect();
				iframeCleanups.forEach((cleanup) => cleanup());
				if (listenForPointerDown) document.removeEventListener("pointerdown", onPointerDown, true);
			};
		};
		return observeDocument(ownerDocument, false);
	}, [
		enabled,
		onPointerDown,
		ownerDocument
	]);
}
function useIframeDismissalBridge({ actionsRef, defaultOpen, disabled, modal, onOpenChange, open: openProp }) {
	const fallbackActionsRef = (0, import_react.useRef)(null);
	const resolvedActionsRef = actionsRef ?? fallbackActionsRef;
	const [uncontrolledOpen, setUncontrolledOpen] = (0, import_react.useState)(defaultOpen ?? false);
	const [trigger, setTrigger] = (0, import_react.useState)(null);
	const open = openProp ?? uncontrolledOpen;
	const handleIframePointerDown = (0, import_react.useCallback)((event) => {
		if (trigger && !isInsideCurrentPopup(event, trigger)) resolvedActionsRef.current?.close();
	}, [resolvedActionsRef, trigger]);
	useCloseOnIframePointerDown({
		enabled: open && modal === false && !disabled && trigger !== null,
		onPointerDown: handleIframePointerDown,
		ownerDocument: trigger?.ownerDocument ?? null
	});
	const handleOpenChange = (nextOpen, eventDetails) => {
		onOpenChange(nextOpen, eventDetails);
		if (eventDetails.isCanceled) return;
		setUncontrolledOpen(nextOpen);
		setTrigger(nextOpen ? eventDetails.trigger ?? null : null);
	};
	return {
		actionsRef: resolvedActionsRef,
		onOpenChange: handleOpenChange
	};
}
function init_use_iframe_dismissal_bridge() {
	return (init_use_iframe_dismissal_bridge = __esmMin((() => {
		init_react();
	})))();
}
//#endregion
export { useIframeDismissalBridge as n, init_use_iframe_dismissal_bridge as t };
