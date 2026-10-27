import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as useRefEffect, t as init_use_ref_effect } from "./use-ref-effect-DguFui9C.js";
//#region ../packages/compose/build-module/hooks/use-copy-to-clipboard/index.mjs
async function copyToClipboard(text, trigger) {
	if (!trigger) return false;
	const { ownerDocument } = trigger;
	if (!ownerDocument) return false;
	const { defaultView } = ownerDocument;
	try {
		if (defaultView?.navigator?.clipboard?.writeText) {
			await defaultView.navigator.clipboard.writeText(text);
			return true;
		}
		const textarea = ownerDocument.createElement("textarea");
		textarea.value = text;
		textarea.setAttribute("readonly", "");
		textarea.style.position = "fixed";
		textarea.style.left = "-9999px";
		textarea.style.top = "-9999px";
		ownerDocument.body.appendChild(textarea);
		textarea.select();
		const success = ownerDocument.execCommand("copy");
		textarea.remove();
		return success;
	} catch {
		return false;
	}
}
function restoreFocus(trigger) {
	if ("focus" in trigger && typeof trigger.focus === "function") trigger.focus();
}
function useUpdatedRef(value) {
	const ref = (0, import_react.useRef)(value);
	(0, import_react.useLayoutEffect)(() => {
		ref.current = value;
	}, [value]);
	return ref;
}
function useCopyToClipboard(text, onSuccess) {
	const textRef = useUpdatedRef(text);
	const onSuccessRef = useUpdatedRef(onSuccess);
	return useRefEffect((node) => {
		let isActive = true;
		const handleClick = async () => {
			if (await copyToClipboard(typeof textRef.current === "function" ? textRef.current() : textRef.current || "", node)) {
				if (isActive) restoreFocus(node);
				if (onSuccessRef.current) onSuccessRef.current();
			}
		};
		node.addEventListener("click", handleClick);
		return () => {
			isActive = false;
			node.removeEventListener("click", handleClick);
		};
	}, []);
}
function init_use_copy_to_clipboard() {
	return (init_use_copy_to_clipboard = __esmMin((() => {
		init_react();
		init_use_ref_effect();
	})))();
}
//#endregion
export { useCopyToClipboard as n, init_use_copy_to_clipboard as t };
