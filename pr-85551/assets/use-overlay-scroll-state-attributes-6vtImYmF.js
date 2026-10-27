import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as use_isomorphic_layout_effect_default, t as init_use_isomorphic_layout_effect } from "./use-isomorphic-layout-effect-XEh9CxbX.js";
//#region ../packages/ui/src/utils/use-overlay-scroll-state-attributes.ts
/**
* Detect consumer takeover of a previously hook-managed `tabindex` after the
* hook had already installed its own: if the flag is set but the current
* `tabindex` is no longer `"0"`, the consumer has overridden our value. Drop
* the flag so subsequent ticks treat the `tabindex` as consumer-owned and
* never touch it again.
*
* Limitation: the heuristic compares the DOM attribute, so a consumer who
* passes `tabIndex={ 0 }` explicitly is indistinguishable from our own
* managed `"0"` and would still be cleaned up on the next non-overflow
* tick. See the contract paragraph on `useOverlayScrollStateAttributes`.
*
* @param el The scroll container.
*/
function reconcileTabbableFlag(el) {
	if (el.hasAttribute(SCROLL_TABBABLE_FLAG_ATTR) && el.getAttribute("tabindex") !== "0") el.removeAttribute(SCROLL_TABBABLE_FLAG_ATTR);
}
function updateScrollAttributes(el) {
	const { scrollTop, clientHeight, scrollHeight } = el;
	const overflows = scrollHeight - clientHeight > SCROLL_END_EPSILON;
	el.toggleAttribute(SCROLLED_FROM_TOP_ATTR, scrollTop > 0);
	el.toggleAttribute(SCROLLED_FROM_BOTTOM_ATTR, scrollTop + clientHeight < scrollHeight - SCROLL_END_EPSILON);
	reconcileTabbableFlag(el);
	if (overflows) {
		if (!el.hasAttribute(SCROLL_TABBABLE_FLAG_ATTR) && el.getAttribute("tabindex") === null) {
			el.setAttribute("tabindex", "0");
			el.setAttribute(SCROLL_TABBABLE_FLAG_ATTR, "");
		}
	} else if (el.hasAttribute(SCROLL_TABBABLE_FLAG_ATTR)) {
		el.removeAttribute("tabindex");
		el.removeAttribute(SCROLL_TABBABLE_FLAG_ATTR);
	}
}
function cleanupScrollAttributes(el) {
	for (const attr of HOOK_OWNED_ATTRS) el.removeAttribute(attr);
	reconcileTabbableFlag(el);
	if (el.hasAttribute(SCROLL_TABBABLE_FLAG_ATTR)) {
		el.removeAttribute("tabindex");
		el.removeAttribute(SCROLL_TABBABLE_FLAG_ATTR);
	}
}
/**
* Keeps `data-wp-ui-overlay-scrolled-from-top` and
* `data-wp-ui-overlay-scrolled-from-bottom` attributes in sync with a
* scrollable overlay element's scroll position, and marks the element with
* `data-wp-ui-overlay-scroll-container` so shared CSS (see
* `overlay-chrome.module.css`) can target it without coupling to a specific
* class name. Descendant selectors (e.g. sticky header/footer chrome) read
* these attributes to toggle their separator border without forcing a React
* re-render on every scroll frame.
*
* When the element overflows, a `tabindex="0"` is also installed so keyboard
* users can focus the region and arrow-scroll it (WCAG 2.1.1). The tabindex
* is removed again as soon as the element no longer overflows — a stray tab
* stop on a non-scrolling region is an anti-pattern. An internal flag
* attribute (`data-wp-ui-overlay-scroll-tabbable`) marks tabindex values
* the hook installed, so a consumer-supplied `tabindex` is never
* overwritten.
*
* Tabindex contract:
* - **Pre-install opt-out**: a `tabindex` set on the element before the
*   first overflow is detected is left alone forever. The flag is never
*   installed, so the hook never owns the attribute. (This means
*   `tabIndex={ -1 }` on `Dialog.Content` / `Drawer.Content` reliably
*   suppresses the auto tab stop.)
* - **Takeover after install**: if the consumer overrides the hook's
*   `"0"` with a *different* value after the fact, the flag is dropped
*   on the next tick (`reconcileTabbableFlag`) and the consumer's value
*   is preserved through subsequent overflow / non-overflow transitions
*   and through cleanup.
* - **Indistinguishable case**: a consumer who passes `tabIndex={ 0 }`
*   explicitly while the hook also has `"0"` installed cannot be
*   detected — the DOM attribute is identical to the hook-managed
*   value, so the hook will still strip it on the next non-overflow
*   tick. This is rarely intentional (the consumer's `0` matches the
*   hook's behavior anyway), but consumers needing a guaranteed
*   sticky `0` should avoid relying on it across overflow flips.
*
* Overflow detection is block-axis-only. Overlay popups are expected to
* constrain content width (`overlay-chrome.module.css` clips `.content`
* with `overflow-inline: hidden`); horizontal scrolling is intentionally
* not supported, so this hook doesn't toggle tabindex on inline-axis
* overflow and the scroll-state attributes don't track it.
*
* Returns a callback `ref` that the caller must attach to the scroll
* container, and an `onScroll` handler to wire up to the same element. A
* callback ref (not a `RefObject`) is used because overlay libraries like
* Base UI mount the popup DOM lazily when the overlay opens, so the
* attributes must be initialized the moment the node is attached, not when
* the host component first renders. `useState` also absorbs repeated
* attachments of the same node (Strict Mode remount, stable refs) without
* re-running the effect.
*
* Change detection combines a `ResizeObserver` scoped to the container
* and its direct children (to catch flex-layout growth) with a
* `MutationObserver` on direct-child additions/removals only (to keep
* the resize-observer set in sync as direct children come and go).
*
* Deeper subtree mutations are intentionally not observed: in practice,
* any descendant whose growth changes the scroll size also propagates a
* resize up the layout tree, so the existing `ResizeObserver` on direct
* children catches it. Watching the full subtree would fan out the
* mutation callback over every text-node insertion in content-heavy
* overlays (rich-text editors, virtualized lists), which isn't worth
* the cost of the rare deep-mutation-without-resize case. Revisit
* (and consider rAF-coalescing the callback) if a real consumer hits
* an attribute-staleness regression.
*
* Once CSS scroll-state container queries are supported across target
* browsers, both the data attributes and this hook can be replaced with
* `@container scroll-state(scrollable: top)` / `(scrollable: bottom)`.
* See: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries
*
* @param onScroll Optional `onScroll` from the parent; invoked after the
*                 overlay scroll-state attributes are updated, so by the
*                 time this handler runs, `data-wp-ui-overlay-scrolled-*`
*                 on `event.currentTarget` already reflect the post-scroll
*                 state.
*/
function useOverlayScrollStateAttributes(onScroll) {
	const [node, setNode] = (0, import_react.useState)(null);
	const ref = (0, import_react.useCallback)((el) => {
		setNode(el);
	}, []);
	use_isomorphic_layout_effect_default(() => {
		if (!node) return;
		node.setAttribute(SCROLL_CONTAINER_ATTR, "");
		updateScrollAttributes(node);
		if (typeof ResizeObserver === "undefined") return () => {
			cleanupScrollAttributes(node);
		};
		const resizeObserver = new ResizeObserver(() => {
			updateScrollAttributes(node);
		});
		resizeObserver.observe(node);
		for (const child of Array.from(node.children)) resizeObserver.observe(child);
		let mutationObserver;
		if (typeof MutationObserver !== "undefined") {
			mutationObserver = new MutationObserver((records) => {
				for (const record of records) if (record.target === node) {
					for (const added of Array.from(record.addedNodes)) if (added instanceof Element) resizeObserver.observe(added);
					for (const removed of Array.from(record.removedNodes)) if (removed instanceof Element) resizeObserver.unobserve(removed);
				}
				updateScrollAttributes(node);
			});
			mutationObserver.observe(node, { childList: true });
		}
		return () => {
			resizeObserver.disconnect();
			mutationObserver?.disconnect();
			cleanupScrollAttributes(node);
		};
	}, [node]);
	return {
		ref,
		onScroll: (0, import_react.useCallback)((event) => {
			updateScrollAttributes(event.currentTarget);
			onScroll?.(event);
		}, [onScroll])
	};
}
var SCROLL_CONTAINER_ATTR, SCROLLED_FROM_TOP_ATTR, SCROLLED_FROM_BOTTOM_ATTR, SCROLL_TABBABLE_FLAG_ATTR, SCROLL_END_EPSILON, HOOK_OWNED_ATTRS;
function init_use_overlay_scroll_state_attributes() {
	return (init_use_overlay_scroll_state_attributes = __esmMin((() => {
		init_use_isomorphic_layout_effect();
		init_react();
		SCROLL_CONTAINER_ATTR = "data-wp-ui-overlay-scroll-container";
		SCROLLED_FROM_TOP_ATTR = "data-wp-ui-overlay-scrolled-from-top";
		SCROLLED_FROM_BOTTOM_ATTR = "data-wp-ui-overlay-scrolled-from-bottom";
		SCROLL_TABBABLE_FLAG_ATTR = "data-wp-ui-overlay-scroll-tabbable";
		SCROLL_END_EPSILON = 1;
		HOOK_OWNED_ATTRS = [
			SCROLL_CONTAINER_ATTR,
			SCROLLED_FROM_TOP_ATTR,
			SCROLLED_FROM_BOTTOM_ATTR
		];
	})))();
}
//#endregion
export { init_use_overlay_scroll_state_attributes as n, useOverlayScrollStateAttributes as r, SCROLL_CONTAINER_ATTR as t };
