import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
//#region ../packages/ui/build-module/utils/use-enable-wp-compat-overlay-slot.mjs
function useEnableWpCompatOverlaySlot() {
	if (typeof window === "undefined") return;
	const internalWindow = window;
	if (internalWindow.__wpUiCompatOverlaySlotEnabled !== true) internalWindow.__wpUiCompatOverlaySlotEnabled = true;
}
function init_use_enable_wp_compat_overlay_slot() {
	return (init_use_enable_wp_compat_overlay_slot = __esmMin((() => {})))();
}
//#endregion
export { useEnableWpCompatOverlaySlot as n, init_use_enable_wp_compat_overlay_slot as t };
