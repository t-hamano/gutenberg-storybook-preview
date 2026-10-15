import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react$1 } from "./react-DVttqL3M.js";
import { i as observableMap } from "./use-observable-value-HJZ_Kgzf.js";
import { i as noCase, r as init_dist_es2015 } from "./dist.es2015-BYklxwDS.js";
import { $n as toTree, At as init_apply_built_in_validation_fixes, Bn as remove$2, Bt as getBlockInnerHTML, Ct as init_api, Dt as init_parser, En as init_registration, Gn as RichTextData, Jn as getTextContent, Kn as create, Kt as init_serializer, Mt as init_get_block_attributes, Ot as parse, Qn as init_to_tree, Rn as init_build_module$2, St as init_build_module$1, Tn as hasBlockSupport, Xn as init_to_html_string, Yn as init_get_text_content, Zn as toHTMLString, an as getBlockTransforms, ar as normaliseFormats, cr as init_store, d as orderBy, er as getActiveFormats, f as init_utils$2, hr as remove$1, ir as init_normalise_formats, jt as getBlockAttributes, kt as applyBuiltInValidationFixes, lr as store, mr as init_remove, n as store$1, nn as createBlocksFromInnerBlocksTemplate, nr as createElement, p as isFiltered, qn as init_create, rn as findTransform, rr as init_create_element, sn as init_factory, sr as isFormatEqual, t as init_store$1, tn as createBlock$1, tr as init_get_active_formats, u as init_sorting, un as store$2, yn as getBlockType, zn as init_remove$1 } from "./store-CSWvid7H.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module$3, t as deprecated } from "./build-module-BWCORUbm.js";
import { n as init_implementation, t as __dangerousOptInToUnstableAPIsOnlyForCoreModules } from "./implementation-Cv8RPUVn.js";
import { n as init_build_module$4, t as focus } from "./build-module-6mzmomGZ.js";
import { t as assertIsDefined } from "./assert-is-defined-_q5vXJ_h.js";
import { t as getFilesFromDataTransfer } from "./data-transfer-BZIelrgl.js";
import { n as useRefEffect, t as init_use_ref_effect } from "./use-ref-effect-DguFui9C.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as useEvent, t as init_use_event } from "./use-event-BTRhHipl.js";
import { n as __, o as isRTL, t as init_build_module$5 } from "./build-module-v04us4E2.js";
import { i as isKeyboardEvent, r as init_build_module$6 } from "./build-module-LJKyBiy6.js";
import { i as useSelect } from "./dispatch-abVPMST3.js";
import { n as memize } from "./dist-DL-769ey.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { t as chevron_down_default } from "./chevron-down-BHqt2Nym.js";
import { n as warning, t as init_build_module$7 } from "./build-module-B5spW8IS.js";
import { i as useToolbarStore, n as init_toolbar$1, r as init_toolbar_store, t as Toolbar$1 } from "./toolbar-B7tjha2y.js";
import { c as ContextSystemProvider, l as init_context_system_provider } from "./use-context-system-BrNgZl6E.js";
import { o as init_colord, r as A$1 } from "./names-C15GzMmJ.js";
import { n as privateApis$2, t as init_private_apis$2 } from "./private-apis-DYvlicGd.js";
import { n as useRegistry } from "./use-registry-CfP_kF8b.js";
import { l as use_dispatch_default, r as useShortcut, t as init_build_module$8 } from "./build-module-C8SQ3xnO.js";
import { n as init_build_module$9 } from "./build-module-DkpHnLlB.js";
import { t as require_remove_accents } from "./remove-accents-FMNXhR5L.js";
import { n as popover_default, t as init_popover } from "./popover-U8QQZ1i9.js";
import { c as init_context, i as init_slot_fill, n as Slot, r as createSlotFill, s as context_default } from "./slot-fill-DMMdJmZM.js";
import { n as v4, t as init_v4 } from "./v4-DCjp-En7.js";
import { n as init_style_provider, r as style_provider_default } from "./style-provider-BlGZcMa2.js";
import { i as menu_default, n as init_dropdown_menu, r as init_menu, t as dropdown_menu_default } from "./dropdown-menu-C4z0vD1V.js";
import { i as toolbar_context_default, n as toolbar_item_default, r as init_toolbar_context, t as init_toolbar_item } from "./toolbar-item-DLdKqvzK.js";
import { n as toolbar_group_default, t as init_toolbar_group } from "./toolbar-group-GmLAgHfL.js";
import { i as init_build_module$10, t as createBlobURL } from "./build-module-B4aG43Qg.js";
import { a as init_context$1, f as useBlockEditContext, l as mayDisplayControlsKey, u as mayDisplayParentControlsKey } from "./context-Dw7c8Gei.js";
import { r as unlock$2, t as init_lock_unlock$2 } from "./lock-unlock-DigY61P5.js";
import { r as init_build_module$11 } from "./library.story-DawnfKTW.js";
//#region ../packages/compose/build-module/lock-unlock.mjs
var lock$1, unlock$1;
function init_lock_unlock() {
	return (init_lock_unlock = __esmMin((() => {
		init_implementation();
		({lock: lock$1, unlock: unlock$1} = __dangerousOptInToUnstableAPIsOnlyForCoreModules("I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.", "@wordpress/compose"));
	})))();
}
//#endregion
//#region ../packages/compose/build-module/utils/subscribe-delegated-listener/index.mjs
function subscribeDelegatedListener$6(target, eventType, callback, capture = false) {
	const ownerDoc = target.ownerDocument;
	const root = ownerDoc ?? target;
	const isWindow = ownerDoc === void 0;
	let perRoot = registries$1.get(root);
	if (!perRoot) {
		perRoot = /* @__PURE__ */ new Map();
		registries$1.set(root, perRoot);
	}
	const key = capture ? `${eventType}:capture` : eventType;
	let perEvent = perRoot.get(key);
	if (!perEvent) {
		perEvent = /* @__PURE__ */ new WeakMap();
		perRoot.set(key, perEvent);
		const subscribers = perEvent;
		root.addEventListener(eventType, (event) => {
			if (isWindow) {
				const set2 = subscribers.get(root);
				if (set2) for (const cb of set2) cb(event);
				return;
			}
			if (capture) {
				const path = [];
				let current = event.target;
				while (current) {
					path.push(current);
					if (current === root) break;
					current = current.parentNode;
				}
				for (let i = path.length - 1; i >= 0; i--) {
					const set2 = subscribers.get(path[i]);
					if (set2) for (const cb of set2) cb(event);
				}
			} else {
				let current = event.target;
				while (current) {
					const set2 = subscribers.get(current);
					if (set2) for (const cb of set2) cb(event);
					if (current === root) break;
					current = current.parentNode;
				}
			}
		}, capture);
	}
	let set = perEvent.get(target);
	if (!set) {
		set = /* @__PURE__ */ new Set();
		perEvent.set(target, set);
	}
	set.add(callback);
	return () => {
		set.delete(callback);
	};
}
var registries$1;
function init_subscribe_delegated_listener() {
	return (init_subscribe_delegated_listener = __esmMin((() => {
		registries$1 = /* @__PURE__ */ new WeakMap();
	})))();
}
//#endregion
//#region ../packages/compose/build-module/private-apis.mjs
var privateApis$1;
function init_private_apis() {
	return (init_private_apis = __esmMin((() => {
		init_lock_unlock();
		init_subscribe_delegated_listener();
		privateApis$1 = {};
		lock$1(privateApis$1, { subscribeDelegatedListener: subscribeDelegatedListener$6 });
	})))();
}
//#endregion
//#region ../packages/dom/build-module/dom/get-rectangle-from-range.mjs
function getRectangleFromRange(range) {
	if (!range.collapsed) {
		const rects2 = Array.from(range.getClientRects());
		if (rects2.length === 1) return rects2[0];
		const filteredRects = rects2.filter(({ width }) => width > 1);
		if (filteredRects.length === 0) return range.getBoundingClientRect();
		if (filteredRects.length === 1) return filteredRects[0];
		let { top: furthestTop, bottom: furthestBottom, left: furthestLeft, right: furthestRight } = filteredRects[0];
		for (const { top, bottom, left, right } of filteredRects) {
			if (top < furthestTop) furthestTop = top;
			if (bottom > furthestBottom) furthestBottom = bottom;
			if (left < furthestLeft) furthestLeft = left;
			if (right > furthestRight) furthestRight = right;
		}
		return new window.DOMRect(furthestLeft, furthestTop, furthestRight - furthestLeft, furthestBottom - furthestTop);
	}
	const { startContainer, startOffset } = range;
	const { ownerDocument } = startContainer;
	assertIsDefined(ownerDocument, "ownerDocument");
	if (startContainer.nodeType !== startContainer.TEXT_NODE && !startContainer.childNodes.length && startContainer.parentNode) {
		range = ownerDocument.createRange();
		range.setStartBefore(startContainer);
		range.collapse(true);
		return getRectangleFromRange(range);
	}
	if (startContainer.nodeType !== startContainer.TEXT_NODE) {
		let before = startContainer.childNodes[startOffset - 1];
		while (before?.lastChild) before = before.lastChild;
		let after = startContainer.childNodes[startOffset];
		while (after?.firstChild) after = after.firstChild;
		let beforeRange;
		if (before && before.nodeType === before.TEXT_NODE) {
			beforeRange = ownerDocument.createRange();
			beforeRange.setStart(before, before.length);
			beforeRange.collapse(true);
		}
		let afterRange;
		if (after && after.nodeType === after.TEXT_NODE) {
			afterRange = ownerDocument.createRange();
			afterRange.setStart(after, 0);
			afterRange.collapse(true);
		}
		if (beforeRange && afterRange) {
			const beforeRect = beforeRange.getClientRects()[0];
			const afterRect = afterRange.getClientRects()[0];
			if (beforeRect && afterRect && beforeRect.bottom <= afterRect.top) return null;
		}
		if (afterRange) range = afterRange;
		else if (beforeRange) range = beforeRange;
		else return null;
	}
	const rects = range.getClientRects();
	if (rects.length > 1) return null;
	if (rects.length === 1 && startContainer.nodeType === startContainer.TEXT_NODE && range.startOffset > 0 && range.startOffset < startContainer.length) {
		assertIsDefined(ownerDocument, "ownerDocument");
		const measure = (start, end) => {
			const charRange = ownerDocument.createRange();
			charRange.setStart(startContainer, start);
			charRange.setEnd(startContainer, end);
			return charRange.getBoundingClientRect();
		};
		const before = measure(range.startOffset - 1, range.startOffset);
		const after = measure(range.startOffset, range.startOffset + 1);
		if (before.bottom <= after.top) return null;
	}
	return rects[0] ?? null;
}
function init_get_rectangle_from_range() {
	return (init_get_rectangle_from_range = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/dom/build-module/dom/is-element.mjs
function isElement(node) {
	return !!node && node.nodeType === node.ELEMENT_NODE;
}
//#endregion
//#region ../packages/dom/build-module/dom/insert-after.mjs
function insertAfter(newNode, referenceNode) {
	assertIsDefined(referenceNode.parentNode, "referenceNode.parentNode");
	referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
function init_insert_after() {
	return (init_insert_after = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/dom/build-module/dom/replace.mjs
function replace$1(processedNode, newNode) {
	assertIsDefined(processedNode.parentNode, "processedNode.parentNode");
	insertAfter(newNode, processedNode.parentNode);
	remove$1(processedNode);
}
function init_replace() {
	return (init_replace = __esmMin((() => {
		init_insert_after();
		init_remove();
	})))();
}
//#endregion
//#region ../packages/dom/build-module/dom/unwrap.mjs
function unwrap(node) {
	const parent = node.parentNode;
	assertIsDefined(parent, "node.parentNode");
	while (node.firstChild) parent.insertBefore(node.firstChild, node);
	parent.removeChild(node);
}
function init_unwrap() {
	return (init_unwrap = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/dom/build-module/dom/replace-tag.mjs
function replaceTag(node, tagName) {
	const newNode = node.ownerDocument.createElement(tagName);
	while (node.firstChild) newNode.appendChild(node.firstChild);
	assertIsDefined(node.parentNode, "node.parentNode");
	node.parentNode.replaceChild(newNode, node);
	return newNode;
}
function init_replace_tag() {
	return (init_replace_tag = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/dom/build-module/dom/wrap.mjs
function wrap(newNode, referenceNode) {
	assertIsDefined(referenceNode.parentNode, "referenceNode.parentNode");
	referenceNode.parentNode.insertBefore(newNode, referenceNode);
	newNode.appendChild(referenceNode);
}
function init_wrap() {
	return (init_wrap = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/dom/build-module/dom/is-empty.mjs
function isEmpty$1(element) {
	switch (element.nodeType) {
		case element.TEXT_NODE: return /^[ \f\n\r\t\v\u00a0]*$/.test(element.nodeValue || "");
		case element.ELEMENT_NODE:
			if (element.hasAttributes()) return false;
			else if (!element.hasChildNodes()) return true;
			return Array.from(element.childNodes).every(isEmpty$1);
		default: return true;
	}
}
function init_is_empty() {
	return (init_is_empty = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/dom/build-module/phrasing-content.mjs
function getPhrasingContentSchema(context) {
	if (context !== "paste") return phrasingContentSchema;
	const { u, abbr, data, time, wbr, bdi, bdo, ...remainingContentSchema } = {
		...phrasingContentSchema,
		ins: { children: phrasingContentSchema.ins.children },
		del: { children: phrasingContentSchema.del.children }
	};
	return remainingContentSchema;
}
function isPhrasingContent(node) {
	const tag = node.nodeName.toLowerCase();
	return getPhrasingContentSchema().hasOwnProperty(tag) || tag === "span";
}
function isTextContent(node) {
	const tag = node.nodeName.toLowerCase();
	return textContentSchema.hasOwnProperty(tag) || tag === "span";
}
var textContentSchema, embeddedContentSchema, excludedElements, phrasingContentSchema;
function init_phrasing_content() {
	return (init_phrasing_content = __esmMin((() => {
		textContentSchema = {
			strong: {},
			em: {},
			s: {},
			del: {},
			ins: {},
			a: { attributes: [
				"href",
				"target",
				"rel",
				"id"
			] },
			code: {},
			abbr: { attributes: ["title"] },
			sub: {},
			sup: {},
			br: {},
			small: {},
			q: { attributes: ["cite"] },
			dfn: { attributes: ["title"] },
			data: { attributes: ["value"] },
			time: { attributes: ["datetime"] },
			var: {},
			samp: {},
			kbd: {},
			i: {},
			b: {},
			u: {},
			mark: {},
			ruby: {},
			rt: {},
			rp: {},
			bdi: { attributes: ["dir"] },
			bdo: { attributes: ["dir"] },
			wbr: {},
			"#text": {}
		};
		embeddedContentSchema = {
			audio: { attributes: [
				"src",
				"preload",
				"autoplay",
				"mediagroup",
				"loop",
				"muted"
			] },
			canvas: { attributes: ["width", "height"] },
			embed: { attributes: [
				"src",
				"type",
				"width",
				"height"
			] },
			img: { attributes: [
				"alt",
				"src",
				"srcset",
				"usemap",
				"ismap",
				"width",
				"height"
			] },
			object: { attributes: [
				"data",
				"type",
				"name",
				"usemap",
				"form",
				"width",
				"height"
			] },
			video: { attributes: [
				"src",
				"poster",
				"preload",
				"playsinline",
				"autoplay",
				"mediagroup",
				"loop",
				"muted",
				"controls",
				"width",
				"height"
			] },
			math: {
				attributes: ["display", "xmlns"],
				children: "*"
			}
		};
		excludedElements = [
			"#text",
			"br",
			"wbr"
		];
		Object.keys(textContentSchema).filter((element) => !excludedElements.includes(element)).forEach((tag) => {
			const { [tag]: removedTag, ...restSchema } = textContentSchema;
			textContentSchema[tag].children = {
				...restSchema,
				img: embeddedContentSchema.img
			};
		});
		phrasingContentSchema = {
			...textContentSchema,
			...embeddedContentSchema
		};
	})))();
}
//#endregion
//#region ../packages/dom/build-module/dom/clean-node-list.mjs
function cleanNodeList(nodeList, doc, schema, inline) {
	Array.from(nodeList).forEach((node) => {
		const tag = node.nodeName.toLowerCase();
		if (schema.hasOwnProperty(tag) && (!schema[tag].isMatch || schema[tag].isMatch?.(node))) {
			if (isElement(node)) {
				const { attributes = [], classes = [], children, require: require2 = [], allowEmpty } = schema[tag];
				if (children && !allowEmpty && isEmpty$1(node)) {
					if (isPhrasingContent(node) && node.hasChildNodes()) unwrap(node);
					else remove$1(node);
					return;
				}
				if (node.hasAttributes()) {
					Array.from(node.attributes).forEach(({ name }) => {
						if (name !== "class" && !attributes.includes(name)) node.removeAttribute(name);
					});
					if (node.classList && node.classList.length) {
						const mattchers = classes.map((item) => {
							if (item === "*") return () => true;
							else if (typeof item === "string") return (className) => className === item;
							else if (item instanceof RegExp) return (className) => item.test(className);
							return noop;
						});
						Array.from(node.classList).forEach((name) => {
							if (!mattchers.some((isMatch) => isMatch(name))) node.classList.remove(name);
						});
						if (!node.classList.length) node.removeAttribute("class");
					}
				}
				if (node.hasChildNodes()) {
					if (children === "*") return;
					if (children) {
						if (require2.length && !node.querySelector(require2.join(","))) {
							cleanNodeList(node.childNodes, doc, schema, inline);
							unwrap(node);
						} else if (node.parentNode && node.parentNode.nodeName === "BODY" && isPhrasingContent(node)) {
							cleanNodeList(node.childNodes, doc, schema, inline);
							if (Array.from(node.childNodes).some((child) => !isPhrasingContent(child))) unwrap(node);
						} else cleanNodeList(node.childNodes, doc, children, inline);
					} else while (node.firstChild) remove$1(node.firstChild);
				}
			}
		} else {
			cleanNodeList(node.childNodes, doc, schema, inline);
			if (inline && !isPhrasingContent(node) && node.nextElementSibling) insertAfter(doc.createElement("br"), node);
			unwrap(node);
		}
	});
}
var noop;
function init_clean_node_list() {
	return (init_clean_node_list = __esmMin((() => {
		init_remove();
		init_unwrap();
		init_phrasing_content();
		init_insert_after();
		noop = () => {};
	})))();
}
//#endregion
//#region ../packages/dom/build-module/dom/remove-invalid-html.mjs
function removeInvalidHTML(HTML, schema, inline) {
	const doc = document.implementation.createHTMLDocument("");
	doc.body.innerHTML = HTML;
	cleanNodeList(doc.body.childNodes, doc, schema, inline);
	return doc.body.innerHTML;
}
function init_remove_invalid_html() {
	return (init_remove_invalid_html = __esmMin((() => {
		init_clean_node_list();
	})))();
}
//#endregion
//#region ../packages/rich-text/build-module/get-active-format.mjs
function getActiveFormat(value, formatType) {
	return getActiveFormats(value).find(({ type }) => type === formatType);
}
function init_get_active_format() {
	return (init_get_active_format = __esmMin((() => {
		init_get_active_formats();
	})))();
}
//#endregion
//#region ../packages/rich-text/build-module/get-active-object.mjs
function getActiveObject({ start, end, replacements, text }) {
	if (start === void 0 || start + 1 !== end || text[start] !== "￼") return;
	return replacements[start];
}
function init_get_active_object() {
	return (init_get_active_object = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/rich-text/build-module/is-collapsed.mjs
function isCollapsed({ start, end }) {
	if (start === void 0 || end === void 0) return;
	return start === end;
}
function init_is_collapsed() {
	return (init_is_collapsed = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/rich-text/build-module/remove-format.mjs
function removeFormat(value, formatType, startIndex = value.start, endIndex = value.end) {
	const { formats, activeFormats } = value;
	const newFormats = formats.slice();
	const newActiveFormats = activeFormats?.filter(({ type }) => type !== formatType) || [];
	if (startIndex === void 0 || endIndex === void 0) return normaliseFormats({
		...value,
		formats: newFormats,
		activeFormats: newActiveFormats
	});
	if (startIndex === endIndex) {
		const format = newFormats[startIndex]?.find(({ type }) => type === formatType);
		if (format) {
			while (newFormats[startIndex]?.find((newFormat) => newFormat === format)) {
				filterFormats(newFormats, startIndex, formatType);
				startIndex--;
			}
			endIndex++;
			while (newFormats[endIndex]?.find((newFormat) => newFormat === format)) {
				filterFormats(newFormats, endIndex, formatType);
				endIndex++;
			}
		}
	} else for (let i = startIndex; i < endIndex; i++) if (newFormats[i]) filterFormats(newFormats, i, formatType);
	return normaliseFormats({
		...value,
		formats: newFormats,
		activeFormats: newActiveFormats
	});
}
function filterFormats(formats, index, formatType) {
	const newFormats = formats[index].filter(({ type }) => type !== formatType);
	if (newFormats.length) formats[index] = newFormats;
	else delete formats[index];
}
function init_remove_format() {
	return (init_remove_format = __esmMin((() => {
		init_normalise_formats();
	})))();
}
//#endregion
//#region ../packages/rich-text/build-module/slice.mjs
function slice(value, startIndex = value.start, endIndex = value.end) {
	const { formats, replacements, text } = value;
	if (startIndex === void 0 || endIndex === void 0) return { ...value };
	return {
		formats: formats.slice(startIndex, endIndex),
		replacements: replacements.slice(startIndex, endIndex),
		text: text.slice(startIndex, endIndex)
	};
}
function init_slice() {
	return (init_slice = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/rich-text/build-module/split.mjs
function split(richTextValue, string, endIndex) {
	if (typeof string !== "string") return splitAtSelection(richTextValue, string, endIndex);
	const { formats, replacements, text, start, end } = richTextValue;
	let nextStart = 0;
	return text.split(string).map((substring) => {
		const startIndex = nextStart;
		const value = {
			formats: formats.slice(startIndex, startIndex + substring.length),
			replacements: replacements.slice(startIndex, startIndex + substring.length),
			text: substring
		};
		nextStart += string.length + substring.length;
		if (start !== void 0 && end !== void 0) {
			if (start >= startIndex && start < nextStart) value.start = start - startIndex;
			else if (start < startIndex && end > startIndex) value.start = 0;
			if (end >= startIndex && end < nextStart) value.end = end - startIndex;
			else if (start < nextStart && end > nextStart) value.end = substring.length;
		}
		return value;
	});
}
function splitAtSelection({ formats, replacements, text, start, end }, startIndex = start, endIndex = end) {
	if (startIndex === void 0 || endIndex === void 0) return;
	return [{
		formats: formats.slice(0, startIndex),
		replacements: replacements.slice(0, startIndex),
		text: text.slice(0, startIndex)
	}, {
		formats: formats.slice(endIndex),
		replacements: replacements.slice(endIndex),
		text: text.slice(endIndex),
		start: 0,
		end: 0
	}];
}
function init_split() {
	return (init_split = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/rich-text/build-module/is-range-equal.mjs
function isRangeEqual(a, b) {
	return a === b || a && b && a.startContainer === b.startContainer && a.startOffset === b.startOffset && a.endContainer === b.endContainer && a.endOffset === b.endOffset;
}
//#endregion
//#region ../packages/rich-text/build-module/to-dom.mjs
function createPathToNode(node, rootNode, path) {
	const parentNode = node.parentNode;
	let i = 0;
	while (node = node.previousSibling) i++;
	path = [i, ...path];
	if (parentNode !== rootNode) path = createPathToNode(parentNode, rootNode, path);
	return path;
}
function getNodeByPath(node, path) {
	path = [...path];
	while (node && path.length > 1) node = node.childNodes[path.shift()];
	return {
		node,
		offset: path[0]
	};
}
function append(element, child) {
	if (child.html !== void 0) return element.innerHTML += child.html;
	if (typeof child === "string") child = element.ownerDocument.createTextNode(child);
	const { type, attributes } = child;
	if (type) {
		if (type === "#comment") child = element.ownerDocument.createComment(attributes["data-rich-text-comment"]);
		else {
			const parentNamespace = element.namespaceURI;
			if (type === "math") child = element.ownerDocument.createElementNS(MATHML_NAMESPACE, type);
			else if (parentNamespace === MATHML_NAMESPACE) {
				if (element.tagName === "MTEXT") child = element.ownerDocument.createElement(type);
				else child = element.ownerDocument.createElementNS(MATHML_NAMESPACE, type);
			} else child = element.ownerDocument.createElement(type);
			for (const key in attributes) child.setAttribute(key, attributes[key]);
		}
	}
	return element.appendChild(child);
}
function appendText(node, text) {
	node.appendData(text);
}
function getLastChild({ lastChild }) {
	return lastChild;
}
function getParent({ parentNode }) {
	return parentNode;
}
function isText(node) {
	return node.nodeType === node.TEXT_NODE;
}
function getText({ nodeValue }) {
	return nodeValue;
}
function remove(node) {
	return node.parentNode.removeChild(node);
}
function toDom({ value, prepareEditableTree, isEditableTree = true, placeholder, doc = document }) {
	let startPath = [];
	let endPath = [];
	if (prepareEditableTree) value = {
		...value,
		formats: prepareEditableTree(value)
	};
	const createEmpty = () => createElement(doc, "");
	return {
		body: toTree({
			value,
			createEmpty,
			append,
			getLastChild,
			getParent,
			isText,
			getText,
			remove,
			appendText,
			onStartIndex(body, pointer) {
				startPath = createPathToNode(pointer, body, [pointer.nodeValue.length]);
			},
			onEndIndex(body, pointer) {
				endPath = createPathToNode(pointer, body, [pointer.nodeValue.length]);
			},
			isEditableTree,
			placeholder
		}),
		selection: {
			startPath,
			endPath
		}
	};
}
function getDomPosition({ value, offset, element, prepareEditableTree, placeholder }) {
	const { selection } = toDom({
		value: {
			...value,
			start: offset,
			end: offset
		},
		prepareEditableTree,
		placeholder,
		doc: element.ownerDocument
	});
	return getNodeByPath(element, selection.startPath);
}
function apply({ value, current, prepareEditableTree, __unstableDomOnly, placeholder }) {
	const { body, selection } = toDom({
		value,
		prepareEditableTree,
		placeholder,
		doc: current.ownerDocument
	});
	applyValue(body, current);
	if (value.start !== void 0 && !__unstableDomOnly) applySelection(selection, current);
}
function applyValue(future, current) {
	let i = 0;
	let futureChild;
	while (futureChild = future.firstChild) {
		const currentChild = current.childNodes[i];
		if (!currentChild) current.appendChild(futureChild);
		else if (!currentChild.isEqualNode(futureChild)) {
			if (currentChild.nodeName !== futureChild.nodeName || currentChild.nodeType === currentChild.TEXT_NODE && currentChild.data !== futureChild.data) current.replaceChild(futureChild, currentChild);
			else {
				const currentAttributes = currentChild.attributes;
				const futureAttributes = futureChild.attributes;
				if (currentAttributes) {
					let ii = currentAttributes.length;
					while (ii--) {
						const { name } = currentAttributes[ii];
						if (!futureChild.getAttribute(name)) currentChild.removeAttribute(name);
					}
				}
				if (futureAttributes) for (let ii = 0; ii < futureAttributes.length; ii++) {
					const { name, value } = futureAttributes[ii];
					if (currentChild.getAttribute(name) !== value) currentChild.setAttribute(name, value);
				}
				applyValue(futureChild, currentChild);
				future.removeChild(futureChild);
			}
		} else future.removeChild(futureChild);
		i++;
	}
	while (current.childNodes[i]) current.removeChild(current.childNodes[i]);
}
function applySelection({ startPath, endPath }, current) {
	const { node: startContainer, offset: startOffset } = getNodeByPath(current, startPath);
	const { node: endContainer, offset: endOffset } = getNodeByPath(current, endPath);
	const { ownerDocument } = current;
	const { defaultView } = ownerDocument;
	const selection = defaultView.getSelection();
	const range = ownerDocument.createRange();
	range.setStart(startContainer, startOffset);
	range.setEnd(endContainer, endOffset);
	const { activeElement } = ownerDocument;
	if (selection.rangeCount > 0) {
		if (isRangeEqual(range, selection.getRangeAt(0))) return;
		selection.removeAllRanges();
	}
	selection.addRange(range);
	if (activeElement !== ownerDocument.activeElement) {
		if (activeElement instanceof defaultView.HTMLElement) activeElement.focus();
	}
}
var MATHML_NAMESPACE;
function init_to_dom() {
	return (init_to_dom = __esmMin((() => {
		init_to_tree();
		init_create_element();
		MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
	})))();
}
//#endregion
//#region ../packages/rich-text/build-module/lock-unlock.mjs
var lock, unlock;
function init_lock_unlock$1() {
	return (init_lock_unlock$1 = __esmMin((() => {
		init_implementation();
		({lock, unlock} = __dangerousOptInToUnstableAPIsOnlyForCoreModules("I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.", "@wordpress/rich-text"));
	})))();
}
//#endregion
//#region ../packages/rich-text/build-module/hook/use-default-style.mjs
function useDefaultStyle() {
	return (0, import_react$1.useCallback)((element) => {
		if (!element) return;
		element.style.whiteSpace = element.style.whiteSpace || whiteSpace;
	}, []);
}
var whiteSpace;
function init_use_default_style() {
	return (init_use_default_style = __esmMin((() => {
		init_react();
		whiteSpace = "pre-wrap";
	})))();
}
//#endregion
//#region ../packages/rich-text/build-module/hook/use-boundary-style.mjs
function useBoundaryStyle({ record }) {
	const ref = (0, import_react$1.useRef)(void 0);
	const { activeFormats = [], replacements, start } = record.current;
	const activeReplacement = start === void 0 ? void 0 : replacements[start];
	(0, import_react$1.useEffect)(() => {
		if ((!activeFormats || !activeFormats.length) && !activeReplacement) return;
		const boundarySelector = "*[data-rich-text-format-boundary]";
		const element = ref.current.querySelector(boundarySelector);
		if (!element) return;
		const { ownerDocument } = element;
		const { defaultView } = ownerDocument;
		const computedStyle = defaultView.getComputedStyle(element);
		const newColor = A$1(computedStyle.color).alpha(.2).toRgbString();
		const style = `${`[contenteditable="true"]:focus ${boundarySelector}`} {${`background-color: ${newColor}`}}`;
		const globalStyleId = "rich-text-boundary-style";
		let globalStyle = ownerDocument.getElementById(globalStyleId);
		if (!globalStyle) {
			globalStyle = ownerDocument.createElement("style");
			globalStyle.id = globalStyleId;
			ownerDocument.head.appendChild(globalStyle);
		}
		if (globalStyle.innerHTML !== style) globalStyle.innerHTML = style;
	}, [activeFormats, activeReplacement]);
	return ref;
}
function init_use_boundary_style() {
	return (init_use_boundary_style = __esmMin((() => {
		init_colord();
		init_react();
	})))();
}
//#endregion
//#region ../packages/rich-text/build-module/owns-selection.mjs
function ownsSelection(element) {
	const { ownerDocument } = element;
	const { activeElement } = ownerDocument;
	if (activeElement === element) return true;
	if (!activeElement || activeElement.contentEditable !== "true" || element.contentEditable !== "true" || !activeElement.contains(element)) return false;
	const selection = ownerDocument.defaultView?.getSelection();
	if (!selection) return false;
	const { anchorNode, focusNode } = selection;
	return !!anchorNode && !!focusNode && element.contains(anchorNode) && element.contains(focusNode);
}
function init_owns_selection() {
	return (init_owns_selection = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/rich-text/build-module/hook/event-listeners/copy-handler.mjs
var subscribeDelegatedListener$5, copyHandler, copy_handler_default;
function init_copy_handler() {
	return (init_copy_handler = __esmMin((() => {
		init_private_apis();
		init_to_html_string();
		init_remove$1();
		init_get_text_content();
		init_lock_unlock$1();
		({subscribeDelegatedListener: subscribeDelegatedListener$5} = unlock(privateApis$1));
		copyHandler = (props) => (element) => {
			function onCopy(event) {
				const { record, handleChange } = props.current;
				const { ownerDocument } = element;
				if (event.defaultPrevented || isCollapsed(record.current) || !element.contains(ownerDocument.activeElement) && !ownsSelection(element)) return;
				const selectedRecord = slice(record.current);
				const plainText = getTextContent(selectedRecord);
				const html = toHTMLString({ value: selectedRecord });
				event.clipboardData.setData("text/plain", plainText);
				event.clipboardData.setData("text/html", html);
				event.clipboardData.setData("rich-text", "true");
				event.preventDefault();
				if (event.type === "cut") handleChange(remove$2(record.current));
			}
			const { defaultView } = element.ownerDocument;
			const unsubscribeCopy = subscribeDelegatedListener$5(defaultView, "copy", onCopy);
			const unsubscribeCut = subscribeDelegatedListener$5(defaultView, "cut", onCopy);
			return () => {
				unsubscribeCopy();
				unsubscribeCut();
			};
		};
		copy_handler_default = copyHandler;
	})))();
}
//#endregion
//#region ../packages/rich-text/build-module/hook/event-listeners/select-object.mjs
var subscribeDelegatedListener$4, selectObject, select_object_default;
function init_select_object() {
	return (init_select_object = __esmMin((() => {
		init_private_apis();
		init_lock_unlock$1();
		({subscribeDelegatedListener: subscribeDelegatedListener$4} = unlock(privateApis$1));
		selectObject = () => (element) => {
			function onClick(event) {
				const target = event.target;
				if (target === element || target.textContent && target.isContentEditable) return;
				const { ownerDocument } = target;
				const { defaultView } = ownerDocument;
				const selection = defaultView.getSelection();
				if (selection.containsNode(target)) return;
				const range = ownerDocument.createRange();
				const nodeToSelect = target.isContentEditable ? target : target.closest("[contenteditable]");
				range.selectNode(nodeToSelect);
				selection.removeAllRanges();
				selection.addRange(range);
				event.preventDefault();
			}
			function onFocusIn(event) {
				if (event.relatedTarget && !element.contains(event.relatedTarget)) onClick(event);
			}
			const unsubscribeClick = subscribeDelegatedListener$4(element, "click", onClick);
			const unsubscribeFocusIn = subscribeDelegatedListener$4(element, "focusin", onFocusIn);
			return () => {
				unsubscribeClick();
				unsubscribeFocusIn();
			};
		};
		select_object_default = selectObject;
	})))();
}
//#endregion
//#region ../packages/rich-text/build-module/subscribe-owned-listener.mjs
function subscribeOwnedListener(element, eventType, callback, capture = false) {
	const { ownerDocument } = element;
	let byEvent = registries.get(ownerDocument);
	if (!byEvent) {
		byEvent = /* @__PURE__ */ new Map();
		registries.set(ownerDocument, byEvent);
	}
	const key = capture ? `${eventType}:capture` : eventType;
	const elements = byEvent.get(key) ?? /* @__PURE__ */ new WeakMap();
	if (!byEvent.has(key)) {
		byEvent.set(key, elements);
		subscribeDelegatedListener$3(ownerDocument, eventType, (event) => {
			const { defaultView, activeElement } = ownerDocument;
			const anchorNode = defaultView?.getSelection()?.anchorNode;
			for (let node = anchorNode ?? activeElement; node; node = node.parentNode) {
				const callbacks = elements.get(node);
				if (callbacks && ownsSelection(node)) for (const cb of callbacks) cb(event);
			}
		}, capture);
	}
	let set = elements.get(element);
	if (!set) {
		set = /* @__PURE__ */ new Set();
		elements.set(element, set);
	}
	set.add(callback);
	return () => {
		set.delete(callback);
	};
}
var subscribeDelegatedListener$3, registries;
function init_subscribe_owned_listener() {
	return (init_subscribe_owned_listener = __esmMin((() => {
		init_private_apis();
		init_lock_unlock$1();
		({subscribeDelegatedListener: subscribeDelegatedListener$3} = unlock(privateApis$1));
		registries = /* @__PURE__ */ new WeakMap();
	})))();
}
//#endregion
//#region ../packages/rich-text/build-module/hook/event-listeners/format-boundaries.mjs
var EMPTY_ACTIVE_FORMATS$1, formatBoundaries, format_boundaries_default;
function init_format_boundaries() {
	return (init_format_boundaries = __esmMin((() => {
		init_build_module$6();
		init_subscribe_owned_listener();
		EMPTY_ACTIVE_FORMATS$1 = [];
		formatBoundaries = (props) => (element) => {
			function onKeyDown(event) {
				const { keyCode, shiftKey, altKey, metaKey, ctrlKey } = event;
				if (shiftKey || altKey || metaKey || ctrlKey || keyCode !== 37 && keyCode !== 39) return;
				const { record, applyRecord, forceRender } = props.current;
				const { text, formats, start, end, activeFormats: currentActiveFormats = [] } = record.current;
				const collapsed = isCollapsed(record.current);
				const { defaultView } = element.ownerDocument;
				const { direction } = defaultView.getComputedStyle(element);
				const reverseKey = direction === "rtl" ? 39 : 37;
				const isReverse = event.keyCode === reverseKey;
				if (collapsed && currentActiveFormats.length === 0) {
					if (start === 0 && isReverse) return;
					if (end === text.length && !isReverse) return;
				}
				if (!collapsed || start === void 0) return;
				const formatsBefore = formats[start - 1] || EMPTY_ACTIVE_FORMATS$1;
				const formatsAfter = formats[start] || EMPTY_ACTIVE_FORMATS$1;
				const destination = isReverse ? formatsBefore : formatsAfter;
				const isIncreasing = currentActiveFormats.every((format, index) => format === destination[index]);
				let newActiveFormatsLength = currentActiveFormats.length;
				if (!isIncreasing) newActiveFormatsLength--;
				else if (newActiveFormatsLength < destination.length) newActiveFormatsLength++;
				if (newActiveFormatsLength === currentActiveFormats.length) {
					record.current._newActiveFormats = destination;
					return;
				}
				event.preventDefault();
				const newActiveFormats = (isIncreasing ? destination : isReverse ? formatsAfter : formatsBefore).slice(0, newActiveFormatsLength);
				const newValue = {
					...record.current,
					activeFormats: newActiveFormats
				};
				record.current = newValue;
				applyRecord(newValue);
				forceRender();
			}
			return subscribeOwnedListener(element, "keydown", onKeyDown, true);
		};
		format_boundaries_default = formatBoundaries;
	})))();
}
//#endregion
//#region ../packages/rich-text/build-module/hook/event-listeners/delete.mjs
var deleteHandler, delete_default;
function init_delete() {
	return (init_delete = __esmMin((() => {
		init_build_module$6();
		init_remove$1();
		init_subscribe_owned_listener();
		deleteHandler = (props) => (element) => {
			function onKeyDown(event) {
				const { keyCode } = event;
				if (event.defaultPrevented) return;
				if (keyCode !== 46 && keyCode !== 8) return;
				const { createRecord, handleChange } = props.current;
				const currentValue = createRecord();
				const { start, end, text } = currentValue;
				if (start === 0 && end !== 0 && end === text.length) {
					handleChange(remove$2(currentValue));
					event.preventDefault();
				}
			}
			return subscribeOwnedListener(element, "keydown", onKeyDown);
		};
		delete_default = deleteHandler;
	})))();
}
//#endregion
//#region ../packages/rich-text/build-module/update-formats.mjs
function updateFormats({ value, start, end, formats }) {
	const min = Math.min(start, end);
	const max = Math.max(start, end);
	const formatsBefore = value.formats[min - 1] || [];
	const formatsAfter = value.formats[max] || [];
	value.activeFormats = formats.map((format, index) => {
		if (formatsBefore[index]) {
			if (isFormatEqual(format, formatsBefore[index])) return formatsBefore[index];
		} else if (formatsAfter[index]) {
			if (isFormatEqual(format, formatsAfter[index])) return formatsAfter[index];
		}
		return format;
	});
	while (--end >= start) if (value.activeFormats.length > 0) value.formats[end] = value.activeFormats;
	else delete value.formats[end];
	return value;
}
function init_update_formats() {
	return (init_update_formats = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/rich-text/build-module/hook/event-listeners/input-and-selection.mjs
var subscribeDelegatedListener$2, INSERTION_INPUT_TYPES_TO_IGNORE, EMPTY_ACTIVE_FORMATS, PLACEHOLDER_ATTR_NAME, inputAndSelection, input_and_selection_default;
function init_input_and_selection() {
	return (init_input_and_selection = __esmMin((() => {
		init_private_apis();
		init_get_active_formats();
		init_update_formats();
		init_subscribe_owned_listener();
		init_lock_unlock$1();
		({subscribeDelegatedListener: subscribeDelegatedListener$2} = unlock(privateApis$1));
		INSERTION_INPUT_TYPES_TO_IGNORE = /* @__PURE__ */ new Set([
			"insertParagraph",
			"insertOrderedList",
			"insertUnorderedList",
			"insertHorizontalRule",
			"insertLink"
		]);
		EMPTY_ACTIVE_FORMATS = [];
		PLACEHOLDER_ATTR_NAME = "data-rich-text-placeholder";
		inputAndSelection = (props) => (element) => {
			const { ownerDocument } = element;
			const { defaultView } = ownerDocument;
			let isComposing = false;
			let isPointerDown = false;
			function onPointerDown() {
				isPointerDown = true;
			}
			function onPointerUp() {
				isPointerDown = false;
			}
			function onInput(event) {
				if (isComposing) return;
				let inputType;
				if (event && "inputType" in event) inputType = event.inputType;
				const { record, applyRecord, createRecord, handleChange } = props.current;
				if (inputType && (inputType.indexOf("format") === 0 || INSERTION_INPUT_TYPES_TO_IGNORE.has(inputType))) {
					applyRecord(record.current);
					return;
				}
				const currentValue = createRecord();
				const { start, activeFormats: oldActiveFormats = [] } = record.current;
				if (start === void 0 || currentValue.start === void 0) {
					handleChange(currentValue);
					return;
				}
				const clearFormats = !isCollapsed(record.current) && currentValue.start <= start;
				handleChange(updateFormats({
					value: currentValue,
					start,
					end: currentValue.start,
					formats: clearFormats ? [] : oldActiveFormats
				}));
			}
			let selectionSnapshot;
			function handleSelectionChange() {
				const { record, applyRecord, createRecord, onSelectionChange } = props.current;
				if (element.contentEditable !== "true") return;
				if (ownerDocument.activeElement !== element && !ownsSelection(element)) return;
				if (isComposing) return;
				const selection = defaultView.getSelection();
				if (selectionSnapshot && selectionSnapshot.anchorNode === selection.anchorNode && selectionSnapshot.anchorOffset === selection.anchorOffset && selectionSnapshot.focusNode === selection.focusNode && selectionSnapshot.focusOffset === selection.focusOffset && selectionSnapshot.processedStart === record.current.start && selectionSnapshot.processedEnd === record.current.end) return;
				const { start, end, text } = createRecord();
				const oldRecord = record.current;
				if (text.length === 0) applyRecord({
					...oldRecord,
					start,
					end
				});
				selectionSnapshot = {
					anchorNode: selection.anchorNode,
					anchorOffset: selection.anchorOffset,
					focusNode: selection.focusNode,
					focusOffset: selection.focusOffset,
					processedStart: start,
					processedEnd: end
				};
				if (text !== oldRecord.text) {
					onInput();
					return;
				}
				if (start === oldRecord.start && end === oldRecord.end) return;
				const newValue = {
					...oldRecord,
					start,
					end,
					activeFormats: oldRecord._newActiveFormats,
					_newActiveFormats: void 0
				};
				newValue.activeFormats = getActiveFormats(newValue, EMPTY_ACTIVE_FORMATS);
				record.current = newValue;
				applyRecord(newValue, { domOnly: true });
				onSelectionChange(start, end);
			}
			function onCompositionStart() {
				isComposing = true;
				element.querySelector(`[${PLACEHOLDER_ATTR_NAME}]`)?.remove();
			}
			function onCompositionEnd() {
				isComposing = false;
				onInput({ inputType: "insertText" });
			}
			function onFocus(event) {
				if (event.target !== element) return;
				if (element.contentEditable !== "true") return;
				const { record, isSelected, onSelectionChange, applyRecord } = props.current;
				if (element.parentElement.closest("[contenteditable=\"true\"]")) {
					const selection = defaultView.getSelection();
					if (!selection.anchorNode || !element.contains(selection.anchorNode)) {
						if (isSelected && record.current.start !== void 0) applyRecord(record.current);
						else selection.collapse(element, 0);
					}
					return;
				}
				if (!isSelected) {
					const index = void 0;
					record.current = {
						...record.current,
						start: index,
						end: index,
						activeFormats: EMPTY_ACTIVE_FORMATS
					};
					selectionSnapshot = void 0;
				} else if (!isPointerDown) applyRecord(record.current);
				onSelectionChange(record.current.start, record.current.end);
				window.queueMicrotask(handleSelectionChange);
			}
			const unsubscribeInput = subscribeOwnedListener(element, "input", onInput, true);
			const unsubscribeCompositionStart = subscribeOwnedListener(element, "compositionstart", onCompositionStart);
			const unsubscribeCompositionEnd = subscribeOwnedListener(element, "compositionend", onCompositionEnd, true);
			const unsubscribeFocus = subscribeDelegatedListener$2(element, "focusin", onFocus);
			const unsubscribePointerDown = subscribeDelegatedListener$2(element, "pointerdown", onPointerDown);
			const unsubscribePointerUp = subscribeDelegatedListener$2(defaultView, "pointerup", onPointerUp);
			const unsubscribePointerCancel = subscribeDelegatedListener$2(defaultView, "pointercancel", onPointerUp);
			const unsubscribeSelectionChange = subscribeOwnedListener(element, "selectionchange", handleSelectionChange);
			const unsubscribeEnsureSelectionSync = [
				"keydown",
				"beforeinput",
				"copy",
				"cut",
				"paste"
			].map((eventType) => subscribeOwnedListener(element, eventType, handleSelectionChange, true));
			return () => {
				unsubscribeInput();
				unsubscribeCompositionStart();
				unsubscribeCompositionEnd();
				unsubscribeFocus();
				unsubscribePointerDown();
				unsubscribePointerUp();
				unsubscribePointerCancel();
				unsubscribeSelectionChange();
				unsubscribeEnsureSelectionSync.forEach((unsubscribe) => unsubscribe());
			};
		};
		input_and_selection_default = inputAndSelection;
	})))();
}
//#endregion
//#region ../packages/rich-text/build-module/hook/event-listeners/selection-change-compat.mjs
var subscribeDelegatedListener$1, selectionChangeCompat, selection_change_compat_default;
function init_selection_change_compat() {
	return (init_selection_change_compat = __esmMin((() => {
		init_private_apis();
		init_lock_unlock$1();
		({subscribeDelegatedListener: subscribeDelegatedListener$1} = unlock(privateApis$1));
		selectionChangeCompat = () => (element) => {
			const { ownerDocument } = element;
			const { defaultView } = ownerDocument;
			const selection = defaultView?.getSelection();
			let range;
			function getRange() {
				return selection.rangeCount ? selection.getRangeAt(0) : null;
			}
			function onDown(event) {
				const type = event.type === "keydown" ? "keyup" : "pointerup";
				function onCancel() {
					ownerDocument.removeEventListener(type, onUp);
					ownerDocument.removeEventListener("selectionchange", onCancel);
					ownerDocument.removeEventListener("input", onCancel);
				}
				function onUp() {
					onCancel();
					if (isRangeEqual(range, getRange())) return;
					ownerDocument.dispatchEvent(new Event("selectionchange"));
				}
				ownerDocument.addEventListener(type, onUp);
				ownerDocument.addEventListener("selectionchange", onCancel);
				ownerDocument.addEventListener("input", onCancel);
				range = getRange();
			}
			const unsubscribePointerDown = subscribeDelegatedListener$1(element, "pointerdown", onDown);
			const unsubscribeKeyDown = subscribeDelegatedListener$1(element, "keydown", onDown);
			return () => {
				unsubscribePointerDown();
				unsubscribeKeyDown();
			};
		};
		selection_change_compat_default = selectionChangeCompat;
	})))();
}
//#endregion
//#region ../packages/rich-text/build-module/hook/event-listeners/prevent-focus-capture.mjs
function preventFocusCapture() {
	return (element) => {
		const { ownerDocument } = element;
		const { defaultView } = ownerDocument;
		let value = null;
		function onPointerDown(event) {
			const target = event.target;
			if (event.defaultPrevented) return;
			if (target === element) return;
			if (!target.contains(element)) return;
			if (!target.closest("[data-block]")) return;
			value = element.getAttribute("contenteditable");
			defaultView.getSelection().removeAllRanges();
			element.setAttribute("contenteditable", "false");
		}
		function onPointerUp() {
			if (value !== null) {
				element.setAttribute("contenteditable", value);
				value = null;
				const selection = defaultView.getSelection();
				if (selection.isCollapsed && element.contains(selection.anchorNode)) selection.removeAllRanges();
			}
		}
		const unsubscribePointerDown = subscribeDelegatedListener(defaultView, "pointerdown", onPointerDown);
		const unsubscribePointerUp = subscribeDelegatedListener(defaultView, "pointerup", onPointerUp);
		const unsubscribePointerCancel = subscribeDelegatedListener(defaultView, "pointercancel", onPointerUp);
		return () => {
			unsubscribePointerDown();
			unsubscribePointerUp();
			unsubscribePointerCancel();
		};
	};
}
var subscribeDelegatedListener;
function init_prevent_focus_capture() {
	return (init_prevent_focus_capture = __esmMin((() => {
		init_private_apis();
		init_lock_unlock$1();
		({subscribeDelegatedListener} = unlock(privateApis$1));
	})))();
}
//#endregion
//#region ../packages/rich-text/build-module/hook/event-listeners/index.mjs
function useEventListeners(props) {
	const propsRef = (0, import_react$1.useRef)(props);
	(0, import_react$1.useInsertionEffect)(() => {
		propsRef.current = props;
	});
	const refEffects = (0, import_react$1.useMemo)(() => allEventListeners.map((refEffect) => refEffect(propsRef)), [propsRef]);
	return useRefEffect((element) => {
		const cleanups = refEffects.map((effect) => effect(element));
		return () => {
			cleanups.forEach((cleanup) => cleanup());
		};
	}, [refEffects]);
}
var allEventListeners;
function init_event_listeners() {
	return (init_event_listeners = __esmMin((() => {
		init_react();
		init_use_ref_effect();
		init_copy_handler();
		init_select_object();
		init_format_boundaries();
		init_delete();
		init_input_and_selection();
		init_selection_change_compat();
		init_prevent_focus_capture();
		allEventListeners = [
			input_and_selection_default,
			copy_handler_default,
			select_object_default,
			format_boundaries_default,
			delete_default,
			selection_change_compat_default,
			preventFocusCapture
		];
	})))();
}
//#endregion
//#region ../packages/rich-text/build-module/hook/use-format-types.mjs
function formatTypesSelector(select) {
	return select(store).getFormatTypes();
}
function prefixSelectKeys(selected, prefix) {
	if (typeof selected !== "object" || selected === null) return { [prefix]: selected };
	return Object.fromEntries(Object.entries(selected).map(([key, value]) => [`${prefix}.${key}`, value]));
}
function getPrefixedSelectKeys(selected, prefix) {
	if (selected[prefix]) return selected[prefix];
	return Object.keys(selected).filter((key) => key.startsWith(prefix + ".")).reduce((accumulator, key) => {
		accumulator[key.slice(prefix.length + 1)] = selected[key];
		return accumulator;
	}, {});
}
function useFormatTypes({ allowedFormats, withoutInteractiveFormatting, __unstableFormatTypeHandlerContext }) {
	const allFormatTypes = useSelect(formatTypesSelector, []);
	const formatTypes = (0, import_react$1.useMemo)(() => {
		return allFormatTypes.filter(({ name, interactive, tagName }) => {
			if (allowedFormats && !allowedFormats.includes(name)) return false;
			if (withoutInteractiveFormatting && (interactive || interactiveContentTags.has(tagName))) return false;
			return true;
		});
	}, [
		allFormatTypes,
		allowedFormats,
		withoutInteractiveFormatting
	]);
	const keyedSelected = useSelect((select) => formatTypes.reduce((accumulator, type) => {
		if (!type.__experimentalGetPropsForEditableTreePreparation || !__unstableFormatTypeHandlerContext) return accumulator;
		return {
			...accumulator,
			...prefixSelectKeys(type.__experimentalGetPropsForEditableTreePreparation(select, __unstableFormatTypeHandlerContext), type.name)
		};
	}, {}), [formatTypes, __unstableFormatTypeHandlerContext]);
	const dispatch = use_dispatch_default();
	const prepareHandlers = [];
	const valueHandlers = [];
	const changeHandlers = [];
	const dependencies = [];
	for (const key in keyedSelected) dependencies.push(keyedSelected[key]);
	formatTypes.forEach((type) => {
		if (type.__experimentalCreatePrepareEditableTree && __unstableFormatTypeHandlerContext) {
			const handler = type.__experimentalCreatePrepareEditableTree(getPrefixedSelectKeys(keyedSelected, type.name), __unstableFormatTypeHandlerContext);
			if (type.__experimentalCreateOnChangeEditableValue) valueHandlers.push(handler);
			else prepareHandlers.push(handler);
		}
		if (type.__experimentalCreateOnChangeEditableValue && __unstableFormatTypeHandlerContext) {
			let dispatchers = {};
			if (type.__experimentalGetPropsForEditableTreeChangeHandler) dispatchers = type.__experimentalGetPropsForEditableTreeChangeHandler(dispatch, __unstableFormatTypeHandlerContext);
			const selected = getPrefixedSelectKeys(keyedSelected, type.name);
			changeHandlers.push(type.__experimentalCreateOnChangeEditableValue({
				...typeof selected === "object" ? selected : {},
				...dispatchers
			}, __unstableFormatTypeHandlerContext));
		}
	});
	return {
		formatTypes,
		prepareHandlers,
		valueHandlers,
		changeHandlers,
		dependencies
	};
}
var interactiveContentTags;
function init_use_format_types() {
	return (init_use_format_types = __esmMin((() => {
		init_react();
		init_build_module$9();
		init_store();
		interactiveContentTags = /* @__PURE__ */ new Set([
			"a",
			"audio",
			"button",
			"details",
			"embed",
			"iframe",
			"input",
			"label",
			"select",
			"textarea",
			"video"
		]);
	})))();
}
//#endregion
//#region ../packages/rich-text/build-module/hook/index.mjs
function hasFocus(element) {
	const { activeElement } = element.ownerDocument;
	return activeElement === element || activeElement?.contentEditable === "true" && activeElement.contains(element);
}
function useRichTextBase({ value = "", selectionStart, selectionEnd, placeholder, onSelectionChange, preserveWhiteSpace, onChange, __unstableDisableFormats: disableFormats, __unstableIsSelected: isSelected, __unstableDependencies = [], __unstableAfterParse, __unstableBeforeSerialize, __unstableAddInvisibleFormats }) {
	const registry = useRegistry();
	const [, forceRender] = (0, import_react$1.useReducer)(() => ({}), void 0);
	const ref = (0, import_react$1.useRef)(void 0);
	function createRecord() {
		const { ownerDocument: { defaultView } } = ref.current;
		const selection = defaultView.getSelection();
		const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
		return create({
			element: ref.current,
			range,
			__unstableIsEditableTree: true
		});
	}
	function applyRecord(newRecord, { domOnly } = {}) {
		apply({
			value: newRecord,
			current: ref.current,
			prepareEditableTree: __unstableAddInvisibleFormats,
			__unstableDomOnly: domOnly,
			placeholder
		});
	}
	const _valueRef = (0, import_react$1.useRef)(value);
	const recordRef = (0, import_react$1.useRef)(void 0);
	function setRecordFromProps() {
		const activeFormats = recordRef.current?.activeFormats;
		_valueRef.current = value;
		let parsed = value;
		if (!(parsed instanceof RichTextData)) parsed = parsed ? RichTextData.fromHTMLString(parsed) : RichTextData.empty();
		recordRef.current = {
			text: parsed.text,
			formats: parsed.formats,
			replacements: parsed.replacements,
			activeFormats
		};
		if (disableFormats) {
			recordRef.current.formats = Array(value.length);
			recordRef.current.replacements = Array(value.length);
		}
		if (__unstableAfterParse) recordRef.current.formats = __unstableAfterParse(recordRef.current);
		recordRef.current.start = selectionStart;
		recordRef.current.end = selectionEnd;
	}
	if (!recordRef.current) setRecordFromProps();
	else if (selectionStart !== recordRef.current.start || selectionEnd !== recordRef.current.end) recordRef.current = {
		...recordRef.current,
		start: selectionStart,
		end: selectionEnd,
		activeFormats: void 0
	};
	const sentSelectionRef = (0, import_react$1.useRef)([]);
	function sendSelection(start, end) {
		sentSelectionRef.current = [start, end];
		onSelectionChange(start, end);
	}
	function handleChange(newRecord) {
		recordRef.current = newRecord;
		applyRecord(newRecord);
		if (disableFormats) _valueRef.current = newRecord.text;
		else {
			const newFormats = __unstableBeforeSerialize ? __unstableBeforeSerialize(newRecord) : newRecord.formats;
			newRecord = {
				...newRecord,
				formats: newFormats
			};
			if (typeof value === "string") _valueRef.current = toHTMLString({
				value: newRecord,
				preserveWhiteSpace
			});
			else _valueRef.current = new RichTextData(newRecord);
		}
		const { start, end, formats, text } = recordRef.current;
		registry.batch(() => {
			sendSelection(start, end);
			onChange(_valueRef.current, {
				__unstableFormats: formats,
				__unstableText: text
			});
		});
		forceRender();
	}
	(0, import_react$1.useLayoutEffect)(() => {
		if (value === _valueRef.current) return;
		setRecordFromProps();
		applyRecord(recordRef.current, { domOnly: !hasFocus(ref.current) });
		forceRender();
	}, [value]);
	(0, import_react$1.useLayoutEffect)(() => {
		const [sentStart, sentEnd] = sentSelectionRef.current;
		sentSelectionRef.current = [];
		if (isSelected && (selectionStart !== sentStart || selectionEnd !== sentEnd) && hasFocus(ref.current)) applyRecord(recordRef.current);
	}, [
		selectionStart,
		selectionEnd,
		isSelected
	]);
	const mergedRefs = useMergeRefs([
		ref,
		useDefaultStyle(),
		useBoundaryStyle({ record: recordRef }),
		useEventListeners({
			record: recordRef,
			handleChange,
			applyRecord,
			createRecord,
			isSelected,
			onSelectionChange: sendSelection,
			forceRender
		}),
		useRefEffect((element) => {
			setRecordFromProps();
			applyRecord(recordRef.current, { domOnly: !hasFocus(element) });
		}, [placeholder, ...__unstableDependencies])
	]);
	return {
		value: recordRef.current,
		getValue: () => recordRef.current,
		onChange: handleChange,
		ref: mergedRefs,
		[getDomPositionKey]: (0, import_react$1.useCallback)((offset) => getDomPosition({
			value: recordRef.current,
			offset: Math.min(offset, recordRef.current.text.length),
			element: ref.current,
			prepareEditableTree: __unstableAddInvisibleFormats,
			placeholder
		}), [__unstableAddInvisibleFormats, placeholder])
	};
}
function useRichText({ allowedFormats, withoutInteractiveFormatting, onChange, __unstableDependencies = [], __unstableFormatTypeHandlerContext, ...props }) {
	const { formatTypes, prepareHandlers, valueHandlers, changeHandlers, dependencies } = useFormatTypes({
		allowedFormats,
		withoutInteractiveFormatting,
		__unstableFormatTypeHandlerContext
	});
	function addEditorOnlyFormats(record) {
		return valueHandlers.reduce((accumulator, fn) => fn(accumulator, record.text), record.formats);
	}
	function removeEditorOnlyFormats(record) {
		formatTypes.forEach((formatType) => {
			if (formatType.__experimentalCreatePrepareEditableTree) record = removeFormat(record, formatType.name, 0, record.text.length);
		});
		return record.formats;
	}
	function addInvisibleFormats(record) {
		return prepareHandlers.reduce((accumulator, fn) => fn(accumulator, record.text), record.formats);
	}
	return {
		...useRichTextBase({
			...props,
			onChange(value, { __unstableFormats, __unstableText }) {
				onChange(value, {
					__unstableFormats,
					__unstableText
				});
				Object.values(changeHandlers).forEach((changeHandler) => {
					changeHandler(__unstableFormats, __unstableText);
				});
			},
			__unstableDependencies: [...dependencies, ...__unstableDependencies],
			__unstableAfterParse: addEditorOnlyFormats,
			__unstableBeforeSerialize: removeEditorOnlyFormats,
			__unstableAddInvisibleFormats: addInvisibleFormats
		}),
		formatTypes
	};
}
var getDomPositionKey;
function init_hook() {
	return (init_hook = __esmMin((() => {
		init_react();
		init_use_merge_refs(), init_use_ref_effect();
		init_build_module$9();
		init_create();
		init_to_dom();
		init_to_html_string();
		init_remove_format();
		init_use_default_style();
		init_use_boundary_style();
		init_event_listeners();
		init_use_format_types();
		getDomPositionKey = /* @__PURE__ */ Symbol("getDomPosition");
	})))();
}
//#endregion
//#region ../packages/rich-text/build-module/contexts.mjs
var KeyboardShortcutContext, InputEventContext;
function init_contexts() {
	return (init_contexts = __esmMin((() => {
		init_react();
		KeyboardShortcutContext = (0, import_react$1.createContext)(/* @__PURE__ */ new Set());
		KeyboardShortcutContext.displayName = "KeyboardShortcutContext";
		InputEventContext = (0, import_react$1.createContext)(/* @__PURE__ */ new Set());
		InputEventContext.displayName = "InputEventContext";
	})))();
}
//#endregion
//#region ../packages/rich-text/build-module/keyboard-shortcut.mjs
function RichTextShortcut({ character, type, onUse }) {
	const keyboardShortcuts = (0, import_react$1.useContext)(KeyboardShortcutContext);
	const stableOnUse = useEvent(onUse);
	(0, import_react$1.useEffect)(() => {
		function callback(event) {
			if (isKeyboardEvent[type](event, character)) {
				stableOnUse();
				event.preventDefault();
			}
		}
		keyboardShortcuts.add(callback);
		return () => {
			keyboardShortcuts.delete(callback);
		};
	}, [
		character,
		type,
		keyboardShortcuts,
		stableOnUse
	]);
	return null;
}
function init_keyboard_shortcut() {
	return (init_keyboard_shortcut = __esmMin((() => {
		init_build_module$6();
		init_react();
		init_use_event();
		init_contexts();
	})))();
}
//#endregion
//#region ../packages/rich-text/build-module/input-event.mjs
function RichTextInputEvent({ inputType, onInput }) {
	const callbacks = (0, import_react$1.useContext)(InputEventContext);
	const stableOnInput = useEvent(onInput);
	(0, import_react$1.useEffect)(() => {
		function callback(event) {
			if (event.inputType === inputType) {
				stableOnInput();
				event.preventDefault();
			}
		}
		callbacks.add(callback);
		return () => {
			callbacks.delete(callback);
		};
	}, [
		inputType,
		callbacks,
		stableOnInput
	]);
	return null;
}
function init_input_event() {
	return (init_input_event = __esmMin((() => {
		init_react();
		init_use_event();
		init_contexts();
	})))();
}
//#endregion
//#region ../packages/rich-text/build-module/event-listeners.mjs
var shortcutsListener, inputEventsListener;
function init_event_listeners$1() {
	return (init_event_listeners$1 = __esmMin((() => {
		shortcutsListener = (keyboardShortcuts) => (element) => {
			function onKeyDown(event) {
				for (const keyboardShortcut of keyboardShortcuts) keyboardShortcut(event);
			}
			element.addEventListener("keydown", onKeyDown);
			return () => {
				element.removeEventListener("keydown", onKeyDown);
			};
		};
		inputEventsListener = (inputEvents) => (element) => {
			function onInput(event) {
				for (const inputEventHandler of inputEvents) inputEventHandler(event);
			}
			element.addEventListener("input", onInput);
			return () => {
				element.removeEventListener("input", onInput);
			};
		};
	})))();
}
//#endregion
//#region ../packages/rich-text/build-module/private-apis.mjs
var privateApis;
function init_private_apis$1() {
	return (init_private_apis$1 = __esmMin((() => {
		init_lock_unlock$1();
		init_hook();
		init_use_format_types();
		init_contexts();
		init_keyboard_shortcut();
		init_input_event();
		init_event_listeners$1();
		init_subscribe_owned_listener();
		privateApis = {};
		lock(privateApis, {
			useRichText,
			getDomPositionKey,
			useFormatTypes,
			KeyboardShortcutContext,
			InputEventContext,
			RichTextShortcut,
			RichTextInputEvent,
			shortcutsListener,
			inputEventsListener,
			ownsSelection,
			subscribeOwnedListener
		});
	})))();
}
//#endregion
//#region ../packages/components/build-module/slot-fill/bubbles-virtually/use-slot-fills.mjs
function useObservableValueWithSelector(map, name, selector) {
	const subscribe = (0, import_react$1.useMemo)(() => (listener) => map.subscribe(name, listener), [map, name]);
	const getValue = () => selector(map.get(name));
	return (0, import_react$1.useSyncExternalStore)(subscribe, getValue, getValue);
}
function getLength(array) {
	return array?.length;
}
function useSlotFills(name) {
	const length = useObservableValueWithSelector((0, import_react$1.useContext)(context_default).fills, name, getLength);
	return (0, import_react$1.useMemo)(() => {
		return length !== void 0 ? Array.from({ length }) : void 0;
	}, [length]);
}
function init_use_slot_fills() {
	return (init_use_slot_fills = __esmMin((() => {
		init_react();
		init_context();
	})))();
}
//#endregion
//#region ../packages/components/build-module/toolbar/toolbar/toolbar-container.mjs
function UnforwardedToolbarContainer({ label, ...props }, ref) {
	const toolbarStore = useToolbarStore({
		focusLoop: true,
		rtl: isRTL()
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(toolbar_context_default.Provider, {
		value: toolbarStore,
		children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Toolbar$1, {
			ref,
			"aria-label": label,
			store: toolbarStore,
			...props
		})
	});
}
var import_jsx_runtime$1, ToolbarContainer, toolbar_container_default;
function init_toolbar_container() {
	return (init_toolbar_container = __esmMin((() => {
		init_toolbar_store(), init_toolbar$1();
		init_react();
		init_build_module$5();
		init_toolbar_context();
		import_jsx_runtime$1 = require_jsx_runtime();
		ToolbarContainer = (0, import_react$1.forwardRef)(UnforwardedToolbarContainer);
		ToolbarContainer.displayName = "ToolbarContainer";
		toolbar_container_default = ToolbarContainer;
	})))();
}
//#endregion
//#region ../packages/components/build-module/toolbar/toolbar/index.mjs
function UnforwardedToolbar({ className, label, variant, ...props }, ref) {
	const isVariantDefined = variant !== void 0;
	const contextSystemValue = (0, import_react$1.useMemo)(() => {
		if (isVariantDefined) return {};
		return {
			DropdownMenu: { variant: "toolbar" },
			Dropdown: { variant: "toolbar" },
			Menu: { variant: "toolbar" }
		};
	}, [isVariantDefined]);
	if (!label) {
		deprecated("Using Toolbar without label prop", {
			since: "5.6",
			alternative: "ToolbarGroup component",
			link: "https://developer.wordpress.org/block-editor/components/toolbar/"
		});
		const { title: _title, ...restProps } = props;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(toolbar_group_default, {
			isCollapsed: false,
			...restProps,
			className
		});
	}
	const finalClassName = clsx("components-accessible-toolbar", className, variant && `is-${variant}`);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContextSystemProvider, {
		value: contextSystemValue,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(toolbar_container_default, {
			className: finalClassName,
			label,
			ref,
			...props
		})
	});
}
var import_jsx_runtime, Toolbar, toolbar_default;
function init_toolbar() {
	return (init_toolbar = __esmMin((() => {
		init_clsx();
		init_react();
		init_build_module$3();
		init_toolbar_group();
		init_toolbar_container();
		init_context_system_provider();
		import_jsx_runtime = require_jsx_runtime();
		Toolbar = (0, import_react$1.forwardRef)(UnforwardedToolbar);
		Toolbar.displayName = "Toolbar";
		toolbar_default = Toolbar;
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/raw-handling/get-raw-transforms.mjs
function getRawTransforms() {
	return getBlockTransforms("from").filter((transform) => transform.type === "raw").map((transform) => ({
		...transform,
		isMatch: transform.isMatch ?? ((node) => !!transform.selector && node.matches(transform.selector))
	}));
}
function init_get_raw_transforms() {
	return (init_get_raw_transforms = __esmMin((() => {
		init_factory();
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/raw-handling/html-to-blocks.mjs
function htmlToBlocks(html, handler) {
	const doc = document.implementation.createHTMLDocument("");
	doc.body.innerHTML = html;
	return Array.from(doc.body.children).flatMap((node) => {
		const transforms = getRawTransforms();
		const rawTransform = findTransform(transforms, (transform2) => transform2.isMatch(node));
		if (!rawTransform) return createBlock$1("core/html", {}, [], [node.outerHTML]);
		const { transform, blockName } = rawTransform;
		if (transform) {
			const block = transform(node, handler);
			if (node.hasAttribute("class")) block.attributes.className = node.getAttribute("class");
			return block;
		}
		return createBlock$1(blockName, getBlockAttributes(blockName, node.outerHTML));
	});
}
function init_html_to_blocks() {
	return (init_html_to_blocks = __esmMin((() => {
		init_factory();
		init_get_block_attributes();
		init_get_raw_transforms();
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/raw-handling/normalise-blocks.mjs
function normaliseBlocks(HTML, options = {}) {
	const decuDoc = document.implementation.createHTMLDocument("");
	const accuDoc = document.implementation.createHTMLDocument("");
	const decu = decuDoc.body;
	const accu = accuDoc.body;
	decu.innerHTML = HTML;
	while (decu.firstChild) {
		const node = decu.firstChild;
		if (node.nodeType === node.TEXT_NODE) {
			if (isEmpty$1(node)) decu.removeChild(node);
			else {
				if (!accu.lastChild || accu.lastChild.nodeName !== "P") accu.appendChild(accuDoc.createElement("P"));
				accu.lastChild.appendChild(node);
			}
		} else if (node.nodeType === node.ELEMENT_NODE) {
			if (node.nodeName === "BR") {
				if (node.nextSibling && node.nextSibling.nodeName === "BR") {
					accu.appendChild(accuDoc.createElement("P"));
					decu.removeChild(node.nextSibling);
				}
				if (accu.lastChild && accu.lastChild.nodeName === "P" && accu.lastChild.hasChildNodes()) accu.lastChild.appendChild(node);
				else decu.removeChild(node);
			} else if (node.nodeName === "P") {
				if (isEmpty$1(node) && !options.raw) decu.removeChild(node);
				else accu.appendChild(node);
			} else if (isPhrasingContent(node)) {
				if (!accu.lastChild || accu.lastChild.nodeName !== "P") accu.appendChild(accuDoc.createElement("P"));
				accu.lastChild.appendChild(node);
			} else accu.appendChild(node);
		} else decu.removeChild(node);
	}
	return accu.innerHTML;
}
function init_normalise_blocks() {
	return (init_normalise_blocks = __esmMin((() => {
		init_build_module$4();
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/raw-handling/special-comment-converter.mjs
function specialCommentConverter(node, doc) {
	if (node.nodeType !== node.COMMENT_NODE) return;
	if (node.nodeValue !== "nextpage" && node.nodeValue.indexOf("more") !== 0) return;
	const block = createBlock(node, doc);
	if (!node.parentNode || node.parentNode.nodeName !== "P") replace$1(node, block);
	else {
		const childNodes = Array.from(node.parentNode.childNodes);
		const nodeIndex = childNodes.indexOf(node);
		const wrapperNode = node.parentNode.parentNode || doc.body;
		const paragraphBuilder = (acc, child) => {
			if (!acc) acc = doc.createElement("p");
			acc.appendChild(child);
			return acc;
		};
		[
			childNodes.slice(0, nodeIndex).reduce(paragraphBuilder, null),
			block,
			childNodes.slice(nodeIndex + 1).reduce(paragraphBuilder, null)
		].forEach((element) => element && wrapperNode.insertBefore(element, node.parentNode));
		remove$1(node.parentNode);
	}
}
function createBlock(commentNode, doc) {
	if (commentNode.nodeValue === "nextpage") return createNextpage(doc);
	const customText = commentNode.nodeValue.slice(4).trim();
	let sibling = commentNode;
	let noTeaser = false;
	while (sibling = sibling.nextSibling) if (sibling.nodeType === sibling.COMMENT_NODE && sibling.nodeValue === "noteaser") {
		noTeaser = true;
		remove$1(sibling);
		break;
	}
	return createMore(customText, noTeaser, doc);
}
function createMore(customText, noTeaser, doc) {
	const node = doc.createElement("wp-block");
	node.dataset.block = "core/more";
	if (customText) node.dataset.customText = customText;
	if (noTeaser) node.dataset.noTeaser = "";
	return node;
}
function createNextpage(doc) {
	const node = doc.createElement("wp-block");
	node.dataset.block = "core/nextpage";
	return node;
}
function init_special_comment_converter() {
	return (init_special_comment_converter = __esmMin((() => {
		init_build_module$4();
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/raw-handling/list-reducer.mjs
function isList$1(node) {
	return node.nodeName === "OL" || node.nodeName === "UL";
}
function shallowTextContent(element) {
	return Array.from(element.childNodes).map(({ nodeValue = "" }) => nodeValue).join("");
}
function listReducer(node) {
	if (!isList$1(node)) return;
	const list = node;
	const prevElement = list.previousElementSibling;
	if (prevElement && prevElement.nodeName === node.nodeName && list.children.length === 1) {
		while (list.firstChild) prevElement.appendChild(list.firstChild);
		list.parentNode.removeChild(list);
	}
	const parentElement = node.parentNode;
	if (parentElement && parentElement.nodeName === "LI" && parentElement.children.length === 1 && !/\S/.test(shallowTextContent(parentElement))) {
		const parentListItem = parentElement;
		const prevListItem = parentListItem.previousElementSibling;
		const parentList = parentListItem.parentNode;
		if (prevListItem) {
			prevListItem.appendChild(list);
			parentList.removeChild(parentListItem);
		}
	}
	if (parentElement && isList$1(parentElement)) {
		const prevListItem = list.previousElementSibling;
		if (prevListItem) prevListItem.appendChild(node);
		else unwrap(node);
	}
}
function init_list_reducer() {
	return (init_list_reducer = __esmMin((() => {
		init_build_module$4();
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/raw-handling/blockquote-normaliser.mjs
function blockquoteNormaliser(options = {}) {
	return (bq) => {
		if (bq.nodeName !== "BLOCKQUOTE") return;
		const node = bq;
		node.innerHTML = normaliseBlocks(node.innerHTML, options);
	};
}
function init_blockquote_normaliser() {
	return (init_blockquote_normaliser = __esmMin((() => {
		init_normalise_blocks();
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/raw-handling/figure-content-reducer.mjs
function isFigureContent(node, schema) {
	const tag = node.nodeName.toLowerCase();
	if (tag === "figcaption" || isTextContent(node)) return false;
	return tag in (schema?.figure?.children ?? {});
}
function canHaveAnchor(node, schema) {
	return node.nodeName.toLowerCase() in (schema?.figure?.children?.a?.children ?? {});
}
function wrapFigureContent(element, beforeElement = element) {
	const figure = element.ownerDocument.createElement("figure");
	beforeElement.parentNode.insertBefore(figure, beforeElement);
	figure.appendChild(element);
}
function figureContentReducer(node, doc, schema) {
	if (!schema || !isFigureContent(node, schema)) return;
	let nodeToInsert = node;
	const parentNode = node.parentNode;
	if (canHaveAnchor(node, schema) && parentNode.nodeName === "A" && parentNode.childNodes.length === 1) nodeToInsert = node.parentNode;
	const wrapper = nodeToInsert.closest("p,div");
	if (wrapper) {
		const element = node;
		if (!element.classList) wrapFigureContent(nodeToInsert, wrapper);
		else if (element.classList.contains("alignright") || element.classList.contains("alignleft") || element.classList.contains("aligncenter") || !wrapper.textContent.trim()) wrapFigureContent(nodeToInsert, wrapper);
	} else wrapFigureContent(nodeToInsert);
}
function init_figure_content_reducer() {
	return (init_figure_content_reducer = __esmMin((() => {
		init_build_module$4();
	})))();
}
//#endregion
//#region ../packages/shortcode/build-module/index.mjs
function next(tag, text, index = 0) {
	const re = regexp(tag);
	re.lastIndex = index;
	const match = re.exec(text);
	if (!match) return;
	if ("[" === match[1] && "]" === match[7]) return next(tag, text, re.lastIndex);
	const result = {
		index: match.index,
		content: match[0],
		shortcode: fromMatch(match)
	};
	if (match[1]) {
		result.content = result.content.slice(1);
		result.index++;
	}
	if (match[7]) result.content = result.content.slice(0, -1);
	return result;
}
function replace(tag, text, callback) {
	return text.replace(regexp(tag), (...args) => {
		const match = args[0];
		const left = args[1];
		const right = args[7];
		if (left === "[" && right === "]") return match;
		const result = callback(fromMatch(args));
		return result || result === "" ? left + result + right : match;
	});
}
function string(options) {
	return new Shortcode(options).string();
}
function regexp(tag) {
	return new RegExp("\\[(\\[?)(" + tag + ")(?![\\w-])([^\\]\\/]*(?:\\/(?!\\])[^\\]\\/]*)*?)(?:(\\/)\\]|\\](?:([^\\[]*(?:\\[(?!\\/\\2\\])[^\\[]*)*)(\\[\\/\\2\\]))?)(\\]?)", "g");
}
function fromMatch(match) {
	let type;
	if (match[4]) type = "self-closing";
	else if (match[6]) type = "closed";
	else type = "single";
	return new Shortcode({
		tag: match[2],
		attrs: match[3],
		type,
		content: match[5]
	});
}
var attrs, Shortcode;
function init_build_module() {
	return (init_build_module = __esmMin((() => {
		attrs = memize((text) => {
			const named = {};
			const numeric = [];
			const pattern = /([\w-]+)\s*=\s*"([^"]*)"(?:\s|$)|([\w-]+)\s*=\s*'([^']*)'(?:\s|$)|([\w-]+)\s*=\s*([^\s'"]+)(?:\s|$)|"([^"]*)"(?:\s|$)|'([^']*)'(?:\s|$)|(\S+)(?:\s|$)/g;
			text = text.replace(/[\u00a0\u200b]/g, " ");
			let match;
			while (match = pattern.exec(text)) if (match[1]) named[match[1].toLowerCase()] = match[2];
			else if (match[3]) named[match[3].toLowerCase()] = match[4];
			else if (match[5]) named[match[5].toLowerCase()] = match[6];
			else if (match[7]) numeric.push(match[7]);
			else if (match[8]) numeric.push(match[8]);
			else if (match[9]) numeric.push(match[9]);
			return {
				named,
				numeric
			};
		});
		Shortcode = class {
			tag;
			type;
			content;
			attrs;
			static next = next;
			static replace = replace;
			static string = string;
			static regexp = regexp;
			static attrs = attrs;
			static fromMatch = fromMatch;
			constructor(options) {
				const { tag, attrs: attributes, type, content } = options;
				this.tag = tag;
				this.type = type;
				this.content = content;
				this.attrs = {
					named: {},
					numeric: []
				};
				if (!attributes) return;
				if (typeof attributes === "string") this.attrs = attrs(attributes);
				else if ("named" in attributes && "numeric" in attributes && attributes.named !== void 0 && attributes.numeric !== void 0) this.attrs = attributes;
				else Object.entries(attributes).forEach(([key, value]) => {
					if (value !== void 0) this.set(key, String(value));
				});
			}
			/**
			* Get a shortcode attribute.
			*
			* Automatically detects whether `attr` is named or numeric and routes it
			* accordingly.
			*
			* @param attr Attribute key.
			*
			* @return Attribute value.
			*/
			get(attr) {
				if (typeof attr === "number") return this.attrs.numeric[attr];
				return this.attrs.named[attr];
			}
			/**
			* Set a shortcode attribute.
			*
			* Automatically detects whether `attr` is named or numeric and routes it
			* accordingly.
			*
			* @param attr  Attribute key.
			* @param value Attribute value.
			*
			* @return Shortcode instance.
			*/
			set(attr, value) {
				if (typeof attr === "number") this.attrs.numeric[attr] = value;
				else this.attrs.named[attr] = value;
				return this;
			}
			/**
			* Transform the shortcode into a string.
			*
			* @return String representation of the shortcode.
			*/
			string() {
				let text = "[" + this.tag;
				this.attrs.numeric.forEach((value) => {
					if (/\s/.test(value)) text += " \"" + value + "\"";
					else text += " " + value;
				});
				Object.entries(this.attrs.named).forEach(([name, value]) => {
					text += " " + name + "=\"" + value + "\"";
				});
				if ("single" === this.type) return text + "]";
				else if ("self-closing" === this.type) return text + " /]";
				text += "]";
				if (this.content) text += this.content;
				return text + "[/" + this.tag + "]";
			}
		};
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/raw-handling/shortcode-converter.mjs
function segmentHTMLToShortcodeBlock(HTML, lastIndex = 0, excludedBlockNames = []) {
	const transformsFrom = getBlockTransforms("from").filter((transform) => transform.type === "shortcode");
	const transformation = findTransform(transformsFrom, (transform) => excludedBlockNames.indexOf(transform.blockName) === -1 && castArray(transform.tag).some((tag) => regexp(tag).test(HTML)));
	if (!transformation) return [HTML];
	const transformTag = castArray(transformation.tag).find((tag) => regexp(tag).test(HTML));
	const previousIndex = lastIndex;
	const match = next(transformTag, HTML, lastIndex);
	if (!match) return [HTML];
	lastIndex = match.index + match.content.length;
	const beforeHTML = HTML.substr(0, match.index);
	const afterHTML = HTML.substr(lastIndex);
	if (!match.shortcode.content?.includes("<") && !(beforeLineRegexp.test(beforeHTML) && afterLineRegexp.test(afterHTML))) return segmentHTMLToShortcodeBlock(HTML, lastIndex);
	if (transformation.isMatch && !transformation.isMatch(match.shortcode.attrs)) return segmentHTMLToShortcodeBlock(HTML, previousIndex, [...excludedBlockNames, transformation.blockName]);
	let blocks = [];
	if (typeof transformation.transform === "function") {
		blocks = [].concat(transformation.transform(match.shortcode.attrs, match));
		blocks = blocks.map((block) => {
			block.originalContent = match.shortcode.content;
			return applyBuiltInValidationFixes(block, getBlockType(block.name));
		});
	} else {
		const blockType = getBlockType(transformation.blockName);
		if (!blockType) return [HTML];
		const transformAttributes = transformation.attributes ?? blockType.attributes;
		const attributes = Object.fromEntries(Object.entries(transformAttributes).filter(([, schema]) => schema.shortcode).map(([key, schema]) => [key, schema.shortcode(match.shortcode.attrs, match)]));
		const transformationBlockType = {
			...blockType,
			attributes: transformAttributes
		};
		let block = createBlock$1(transformation.blockName, getBlockAttributes(transformationBlockType, match.shortcode.content, attributes));
		block.originalContent = match.shortcode.content;
		block = applyBuiltInValidationFixes(block, transformationBlockType);
		blocks = [block];
	}
	return [
		...segmentHTMLToShortcodeBlock(beforeHTML.replace(beforeLineRegexp, "")),
		...blocks,
		...segmentHTMLToShortcodeBlock(afterHTML.replace(afterLineRegexp, ""))
	];
}
var castArray, beforeLineRegexp, afterLineRegexp, shortcode_converter_default;
function init_shortcode_converter() {
	return (init_shortcode_converter = __esmMin((() => {
		init_build_module();
		init_factory();
		init_registration();
		init_get_block_attributes();
		init_apply_built_in_validation_fixes();
		castArray = (maybeArray) => Array.isArray(maybeArray) ? maybeArray : [maybeArray];
		beforeLineRegexp = /(\n|<p>|<br\s*\/?>)\s*$/;
		afterLineRegexp = /^\s*(\n|<\/p>|<br\s*\/?>)/;
		shortcode_converter_default = segmentHTMLToShortcodeBlock;
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/raw-handling/utils.mjs
function getBlockContentSchemaFromTransforms(transforms, context) {
	const schemaArgs = {
		phrasingContentSchema: getPhrasingContentSchema(context),
		isPaste: context === "paste"
	};
	const schemas = transforms.map(({ isMatch, blockName, schema }) => {
		const hasAnchorSupport = hasBlockSupport(blockName, "anchor");
		schema = typeof schema === "function" ? schema(schemaArgs) : schema;
		if (!hasAnchorSupport && !isMatch) return schema;
		if (!schema) return {};
		return Object.fromEntries(Object.entries(schema).map(([key, value]) => {
			let attributes = value.attributes || [];
			if (hasAnchorSupport) attributes = [...attributes, "id"];
			return [key, {
				...value,
				attributes,
				isMatch: isMatch ? isMatch : void 0
			}];
		}));
	});
	function mergeTagNameSchemaProperties(objValue, srcValue, key) {
		switch (key) {
			case "children":
				if (objValue === "*" || srcValue === "*") return "*";
				return mergeSchemas({ ...objValue || {} }, srcValue || {});
			case "attributes":
			case "require": return Array.from(/* @__PURE__ */ new Set([...objValue || [], ...srcValue || []]));
			case "isMatch":
				if (!objValue || !srcValue) return;
				return (...args) => {
					return objValue(...args) || srcValue(...args);
				};
			case "classes":
				if ((objValue || []).includes("*") || (srcValue || []).includes("*")) return ["*"];
				return [...objValue || [], ...srcValue || []];
		}
	}
	function mergeTagNameSchemas(a, b) {
		if (a === b) return a;
		for (const key in b) if (a[key]) a[key] = mergeTagNameSchemaProperties(a[key], b[key], key);
		else if (Array.isArray(b[key])) a[key] = b[key].slice();
		else a[key] = { ...b[key] };
		return a;
	}
	function mergeSchemas(a, b) {
		if (a === b) return a;
		for (const key in b) if (a[key]) a[key] = mergeTagNameSchemas(a[key], b[key]);
		else if (Array.isArray(b[key])) a[key] = b[key].slice();
		else a[key] = { ...b[key] };
		return a;
	}
	return schemas.reduce(mergeSchemas, {});
}
function getBlockContentSchema(context) {
	return getBlockContentSchemaFromTransforms(getRawTransforms(), context);
}
function isPlain(HTML) {
	if (!/<(?!br[ />])/i.test(HTML)) return true;
	const doc = document.implementation.createHTMLDocument("");
	doc.body.innerHTML = HTML;
	if (doc.body.children.length !== 1) return false;
	const wrapper = doc.body.children.item(0);
	const descendants = wrapper.getElementsByTagName("*");
	for (let i = 0; i < descendants.length; i++) if (descendants.item(i).tagName !== "BR") return false;
	if (wrapper.tagName !== "SPAN") return false;
	return true;
}
function deepFilterNodeList(nodeList, filters, doc, schema) {
	Array.from(nodeList).forEach((node) => {
		deepFilterNodeList(node.childNodes, filters, doc, schema);
		filters.forEach((item) => {
			if (!doc.contains(node)) return;
			item(node, doc, schema);
		});
	});
}
function deepFilterHTML(HTML, filters = [], schema) {
	const doc = document.implementation.createHTMLDocument("");
	doc.body.innerHTML = HTML;
	deepFilterNodeList(doc.body.childNodes, filters, doc, schema);
	return doc.body.innerHTML;
}
function getSibling(node, which) {
	const sibling = node[`${which}Sibling`];
	if (sibling && isPhrasingContent(sibling)) return sibling;
	const { parentNode } = node;
	if (!parentNode || !isPhrasingContent(parentNode)) return;
	return getSibling(parentNode, which);
}
function init_utils() {
	return (init_utils = __esmMin((() => {
		init_build_module$4();
		init_api();
		init_get_raw_transforms();
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/raw-handling/comment-remover.mjs
function commentRemover(node) {
	if (node.nodeType === node.COMMENT_NODE) remove$1(node);
}
function init_comment_remover() {
	return (init_comment_remover = __esmMin((() => {
		init_build_module$4();
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/raw-handling/is-inline-content.mjs
function isInline(node, contextTag) {
	if (isTextContent(node)) return true;
	if (!contextTag) return false;
	const tag = node.nodeName.toLowerCase();
	return [[
		"ul",
		"li",
		"ol"
	], [
		"h1",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6"
	]].some((tagGroup) => [tag, contextTag].filter((t) => !tagGroup.includes(t)).length === 0);
}
function deepCheck(nodes, contextTag) {
	return nodes.every((node) => isInline(node, contextTag) && deepCheck(Array.from(node.children), contextTag));
}
function isDoubleBR(node) {
	return node.nodeName === "BR" && !!node.previousSibling && node.previousSibling.nodeName === "BR";
}
function isInlineContent(HTML, contextTag) {
	const doc = document.implementation.createHTMLDocument("");
	doc.body.innerHTML = HTML;
	const nodes = Array.from(doc.body.children);
	return !nodes.some(isDoubleBR) && deepCheck(nodes, contextTag);
}
function init_is_inline_content() {
	return (init_is_inline_content = __esmMin((() => {
		init_build_module$4();
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/raw-handling/phrasing-content-reducer.mjs
function phrasingContentReducer(node, doc) {
	if (node.nodeName === "SPAN" && node.style) {
		const { fontWeight, fontStyle, textDecorationLine, textDecoration, verticalAlign } = node.style;
		const element = node;
		if (fontWeight === "bold" || fontWeight === "700") wrap(doc.createElement("strong"), element);
		if (fontStyle === "italic") wrap(doc.createElement("em"), element);
		if (textDecorationLine === "line-through" || textDecoration.includes("line-through")) wrap(doc.createElement("s"), element);
		if (verticalAlign === "super") wrap(doc.createElement("sup"), element);
		else if (verticalAlign === "sub") wrap(doc.createElement("sub"), element);
	} else if (node.nodeName === "B") replaceTag(node, "strong");
	else if (node.nodeName === "I") replaceTag(node, "em");
	else if (node.nodeName === "A") {
		const anchor = node;
		if (anchor.target && anchor.target.toLowerCase() === "_blank") anchor.rel = "noopener";
		else {
			anchor.removeAttribute("target");
			anchor.removeAttribute("rel");
		}
		if (anchor.name && !anchor.id) anchor.id = anchor.name;
		if (anchor.id && !anchor.ownerDocument.querySelector(`[href="#${anchor.id}"]`)) anchor.removeAttribute("id");
	}
}
function init_phrasing_content_reducer() {
	return (init_phrasing_content_reducer = __esmMin((() => {
		init_build_module$4();
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/raw-handling/head-remover.mjs
function headRemover(node) {
	if (node.nodeName !== "SCRIPT" && node.nodeName !== "NOSCRIPT" && node.nodeName !== "TEMPLATE" && node.nodeName !== "STYLE") return;
	node.parentNode.removeChild(node);
}
//#endregion
//#region ../packages/blocks/build-module/api/raw-handling/ms-list-ignore.mjs
function msListIgnore(node) {
	if (node.nodeType !== node.ELEMENT_NODE) return;
	const el = node;
	const style = el.getAttribute("style");
	if (!style || !style.includes("mso-list")) return;
	if (style.split(";").reduce((acc, rule) => {
		const [key, value] = rule.split(":");
		if (key && value) acc[key.trim().toLowerCase()] = value.trim().toLowerCase();
		return acc;
	}, {})["mso-list"] === "ignore") el.remove();
}
//#endregion
//#region ../packages/blocks/build-module/api/raw-handling/ms-list-converter.mjs
function isList(node) {
	return node.nodeName === "OL" || node.nodeName === "UL";
}
function msListConverter(node, doc) {
	if (node.nodeName !== "P") return;
	const element = node;
	const style = element.getAttribute("style");
	if (!style || !style.includes("mso-list")) return;
	const prevNode = element.previousElementSibling;
	if (!prevNode || !isList(prevNode)) {
		const type = element.textContent.trim().slice(0, 1);
		const isNumeric = /[1iIaA]/.test(type);
		const newListNode = doc.createElement(isNumeric ? "ol" : "ul");
		if (isNumeric) newListNode.setAttribute("type", type);
		element.parentNode.insertBefore(newListNode, element);
	}
	const listNode = element.previousElementSibling;
	const listType = listNode.nodeName;
	const listItem = doc.createElement("li");
	let receivingNode = listNode;
	listItem.innerHTML = deepFilterHTML(element.innerHTML, [msListIgnore]);
	const matches = /mso-list\s*:[^;]+level([0-9]+)/i.exec(style);
	let level = matches ? parseInt(matches[1], 10) - 1 || 0 : 0;
	while (level--) {
		receivingNode = receivingNode.lastChild || receivingNode;
		if (isList(receivingNode)) receivingNode = receivingNode.lastChild || receivingNode;
	}
	if (!isList(receivingNode)) receivingNode = receivingNode.appendChild(doc.createElement(listType));
	receivingNode.appendChild(listItem);
	element.parentNode.removeChild(element);
}
function init_ms_list_converter() {
	return (init_ms_list_converter = __esmMin((() => {
		init_utils();
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/raw-handling/image-corrector.mjs
function imageCorrector(img) {
	if (img.nodeName !== "IMG") return;
	const node = img;
	if (node.src.indexOf("file:") === 0) node.src = "";
	if (node.src.indexOf("data:") === 0) {
		const [properties, data] = node.src.split(",");
		const [type] = properties.slice(5).split(";");
		if (!data || !type) {
			node.src = "";
			return;
		}
		let decoded;
		try {
			decoded = atob(data);
		} catch {
			node.src = "";
			return;
		}
		const uint8Array = new Uint8Array(decoded.length);
		for (let i = 0; i < uint8Array.length; i++) uint8Array[i] = decoded.charCodeAt(i);
		const subtype = type.slice(type.indexOf("/") + 1);
		const name = `image-${v4().slice(0, 8)}.${subtype}`;
		const file = new window.File([uint8Array], name, { type });
		node.src = createBlobURL(file);
	}
	if (node.height === 1 || node.width === 1) node.parentNode.removeChild(node);
}
function init_image_corrector() {
	return (init_image_corrector = __esmMin((() => {
		init_v4();
		init_build_module$10();
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/raw-handling/div-normaliser.mjs
function divNormaliser(div) {
	if (div.nodeName !== "DIV") return;
	const node = div;
	node.innerHTML = normaliseBlocks(node.innerHTML);
}
function init_div_normaliser() {
	return (init_div_normaliser = __esmMin((() => {
		init_normalise_blocks();
	})))();
}
//#endregion
//#region ../node_modules/.store/marked@18.0.13-B-tDZfJAz9zUYDQYWjYtzA/node_modules/marked/lib/marked.esm.js
/**
* marked v18.0.13 - a markdown parser
* Copyright (c) 2018-2026, MarkedJS. (MIT License)
* Copyright (c) 2011-2018, Christopher Jeffrey. (MIT License)
* https://github.com/markedjs/marked
*/
/**
* DO NOT EDIT THIS FILE
* The code in this file is generated from files in ./src/
*/
function A() {
	return {
		async: !1,
		breaks: !1,
		extensions: null,
		gfm: !0,
		hooks: null,
		pedantic: !1,
		renderer: null,
		silent: !1,
		tokenizer: null,
		walkTokens: null
	};
}
function U(l) {
	T = l;
}
function I(l) {
	let e = [];
	return (t) => {
		let n = Math.max(0, Math.min(3, t - 1)), i = e[n];
		return i || (i = l(n), e[n] = i), i;
	};
}
function d(l, e = "") {
	let t = typeof l == "string" ? l : l.source, n = {
		replace: (i, r) => {
			let o = typeof r == "string" ? r : r.source;
			return o = o.replace(m.caret, "$1"), t = t.replace(i, o), n;
		},
		getRegex: () => new RegExp(t, e)
	};
	return n;
}
function R(l, e) {
	if (e) {
		if (m.escapeTest.test(l)) return l.replace(m.escapeReplace, fe);
	} else if (m.escapeTestNoEncode.test(l)) return l.replace(m.escapeReplaceNoEncode, fe);
	return l;
}
function ee(l) {
	try {
		l = encodeURI(l).replace(m.percentDecode, "%");
	} catch {
		return null;
	}
	return l;
}
function te(l, e) {
	let n = l.replace(m.findPipe, (r, o, s) => {
		let u = !1, a = o;
		for (; --a >= 0 && s[a] === "\\";) u = !u;
		return u ? "|" : " |";
	}).split(m.splitPipe), i = 0;
	if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), e) if (n.length > e) n.splice(e);
	else for (; n.length < e;) n.push("");
	for (; i < n.length; i++) n[i] = n[i].trim().replace(m.slashPipe, "|");
	return n;
}
function $(l, e, t) {
	let n = l.length;
	if (n === 0) return "";
	let i = 0;
	for (; i < n;) {
		let r = l.charAt(n - i - 1);
		if (r === e && !t) i++;
		else if (r !== e && t) i++;
		else break;
	}
	return l.slice(0, n - i);
}
function ne(l) {
	let e = l.split(`
`), t = e.length - 1;
	for (; t >= 0 && m.blankLine.test(e[t]);) t--;
	return e.length - t <= 2 ? l : e.slice(0, t + 1).join(`
`);
}
function D(l) {
	return l.toLowerCase().toUpperCase().toLowerCase();
}
function me(l, e) {
	if (l.indexOf(e[1]) === -1) return -1;
	let t = 0;
	for (let n = 0; n < l.length; n++) if (l[n] === "\\") n++;
	else if (l[n] === e[0]) t++;
	else if (l[n] === e[1] && (t--, t < 0)) return n;
	return t > 0 ? -2 : -1;
}
function xe(l, e = 0) {
	let t = e, n = "";
	for (let i of l) if (i === "	") {
		let r = 4 - t % 4;
		n += " ".repeat(r), t += r;
	} else n += i, t++;
	return n;
}
function be(l, e, t, n, i) {
	let r = e.href, o = e.title || null, s = l[1].replace(i.other.outputLinkReplace, "$1"), u = l[0].charAt(0) === "!";
	n.state.inLink = !0;
	let a = n.state.linkEmitted, p = n.state.inRawBlock;
	n.state.linkEmitted = !1;
	let c = n.inlineTokens(s), h = n.state.linkEmitted;
	if (n.state.linkEmitted = a, n.state.inLink = !1, !u) {
		if (h) {
			n.state.inRawBlock = p;
			return;
		}
		n.state.linkEmitted = !0;
	}
	return {
		type: u ? "image" : "link",
		raw: t,
		href: r,
		title: o,
		text: s,
		tokens: c
	};
}
function xt(l, e, t) {
	let n = l.match(t.other.indentCodeCompensation);
	if (n === null) return e;
	let i = n[1];
	return e.split(`
`).map((r) => {
		let o = r.match(t.other.beginningSpace);
		if (o === null) return r;
		let [s] = o;
		return r.slice(Math.min(s.length, i.length));
	}).join(`
`);
}
function Re(l, e, t, n) {
	if (!e.includes("<")) return !1;
	for (let i = 0; i < e.length; i++) {
		if (e[i] === "\\") {
			i++;
			continue;
		}
		if (e[i] === "`") {
			let s = n.inline.code.exec(e.slice(i));
			if (s) {
				i += s[0].length - 1;
				continue;
			}
		}
		if (e[i] !== "<") continue;
		let r = l.slice(t + i), o = n.inline.tag.exec(r) || n.inline.autolink.exec(r);
		if (o) {
			if (o[0].length > e.length - i) return !0;
			i += o[0].length - 1;
		}
	}
	return !1;
}
function f(l, e) {
	return M.parse(l, e);
}
function bt(...l) {
	return M.use(...l), f.defaults = M.defaults, U(f.defaults), f;
}
var T, E, we, m, ye, Pe, Se, v, _e, K, le, ue, $e, W, Le, X, ze, Ee, H, J, Me, pe, Ae, Ie, V, ie, Be, De, qe, ve, ce, He, _, C, Z, Ze, Ge, he, Qe, Ne, je, de, Ue, Fe, We, ke, Xe, Je, Ye, et, nt, rt, it, ot, at, lt, ut, ge, N, pt, ct, ht, oe, dt, kt, ae, Y, gt, F, ft, G, B, mt, fe, y, x, P, L, b, S, Q, M;
function init_marked_esm() {
	return (init_marked_esm = __esmMin((() => {
		T = A();
		E = { exec: () => null };
		we = ((l = "") => {
			try {
				return !!new RegExp("(?<=1)(?<!1)" + l);
			} catch {
				return !1;
			}
		})();
		m = {
			codeRemoveIndent: /^(?: {0,3}\t| {1,4})/gm,
			outputLinkReplace: /\\([\[\]])/g,
			indentCodeCompensation: /^(\s+)(?:```)/,
			beginningSpace: /^\s+/,
			endingHash: /#$/,
			startingSpaceChar: /^ /,
			endingSpaceChar: / $/,
			endingSpaceTabChar: /[ \t]$/,
			nonSpaceChar: /[^ ]/,
			newLineCharGlobal: /\n/g,
			tabCharGlobal: /\t/g,
			multipleSpaceGlobal: /\s+/g,
			blankLine: /^[ \t]*$/,
			doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
			blockquoteStart: /^ {0,3}>/,
			blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
			blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
			listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
			listIsTask: /^\[[ xX]\] +\S/,
			listReplaceTask: /^\[[ xX]\] +/,
			listTaskCheckbox: /\[[ xX]\]/,
			anyLine: /\n.*\n/,
			hrefBrackets: /^<(.*)>$/,
			tableDelimiter: /[:|]/,
			tableAlignChars: /^\||\| *$/g,
			tableRowBlankLine: /\n[ \t]*$/,
			tableAlignRight: /^ *-+: *$/,
			tableAlignCenter: /^ *:-+: *$/,
			tableAlignLeft: /^ *:-+ *$/,
			startATag: /^<a /i,
			endATag: /^<\/a>/i,
			startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
			endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
			startAngleBracket: /^</,
			endAngleBracket: />$/,
			pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
			unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
			escapeTest: /[&<>"']/,
			escapeReplace: /[&<>"']/g,
			escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
			escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
			caret: /(^|[^\[])\^/g,
			percentDecode: /%25/g,
			findPipe: /\|/g,
			splitPipe: / \|/,
			slashPipe: /\\\|/g,
			carriageReturn: /\r\n|\r/g,
			spaceLine: /^ +$/gm,
			notSpaceStart: /^\S*/,
			endingNewline: /\n$/,
			listItemRegex: (l) => new RegExp(`^( {0,3}${l})((?:[	 ][^\\n]*)?(?:\\n|$))`),
			nextBulletRegex: I((l) => new RegExp(`^ {0,${l}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),
			hrRegex: I((l) => new RegExp(`^ {0,${l}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),
			fencesBeginRegex: I((l) => new RegExp(`^ {0,${l}}(?:\`\`\`|~~~)`)),
			headingBeginRegex: I((l) => new RegExp(`^ {0,${l}}#`)),
			htmlBeginRegex: I((l) => new RegExp(`^ {0,${l}}(?:</?(?:${H})(?: +|$|/?>)|<(?:script|pre|style|textarea|!--))`, "i")),
			blockquoteBeginRegex: I((l) => new RegExp(`^ {0,${l}}>`))
		};
		ye = /^(?:[ \t]*(?:\n|$))+/;
		Pe = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
		Se = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
		v = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
		_e = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
		K = / {0,3}(?:[*+-]|\d{1,9}[.)])/;
		le = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;
		ue = d(le).replace(/bull/g, K).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex();
		$e = d(le).replace(/bull/g, K).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();
		W = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/;
		Le = /^[^\n]+/;
		X = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/;
		ze = d(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", X).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
		Ee = d(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g, K).getRegex();
		H = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
		J = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
		Me = d("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", J).replace("tag", H).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
		pe = (l) => d(W).replace("hr", v).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", l).replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", H).getRegex();
		Ae = pe(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/);
		Ie = pe(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/);
		V = {
			blockquote: d(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Ie).getRegex(),
			code: Pe,
			def: ze,
			fences: Se,
			heading: _e,
			hr: v,
			html: Me,
			lheading: ue,
			list: Ee,
			newline: ye,
			paragraph: Ae,
			table: E,
			text: Le
		};
		ie = d("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", v).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", H).getRegex();
		Be = {
			...V,
			lheading: $e,
			table: ie,
			paragraph: d(W).replace("hr", v).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ie).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", H).getRegex()
		};
		De = {
			...V,
			html: d(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", J).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
			def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
			heading: /^(#{1,6})(.*)(?:\n+|$)/,
			fences: E,
			lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
			paragraph: d(W).replace("hr", v).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", ue).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
		};
		qe = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
		ve = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
		ce = /^( {2,}|\\)\n(?!\s*$)[ \t]*/;
		He = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
		_ = /[\p{P}\p{S}]/u;
		C = /[\s\p{P}\p{S}]/u;
		Z = /[^\s\p{P}\p{S}]/u;
		Ze = d(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, C).getRegex();
		Ge = /[\p{Pi}\p{Ps}"']/u;
		he = /(?!~)[\p{P}\p{S}]/u;
		Qe = /(?!~)[\s\p{P}\p{S}]/u;
		Ne = /(?:[^\s\p{P}\p{S}]|~)/u;
		je = d(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", we ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex();
		de = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/;
		Ue = d(de, "u").replace(/punct/g, _).getRegex();
		Fe = d(de, "u").replace(/punct/g, he).getRegex();
		We = d(/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/, "u").replace(/openQuote/g, Ge).replace(/punct/g, _).getRegex();
		ke = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
		Xe = d(ke, "gu").replace(/notPunctSpace/g, Z).replace(/punctSpace/g, C).replace(/punct/g, _).getRegex();
		Je = d(ke, "gu").replace(/notPunctSpace/g, Ne).replace(/punctSpace/g, Qe).replace(/punct/g, he).getRegex();
		Ye = d("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)", "gu").replace(/notPunctSpace/g, Z).replace(/punctSpace/g, C).replace(/punct/g, _).getRegex();
		et = d("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Z).replace(/punctSpace/g, C).replace(/punct/g, _).getRegex();
		nt = d("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)", "gu").replace(/notPunctSpace/g, Z).replace(/punctSpace/g, C).replace(/punct/g, _).getRegex();
		rt = d(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, _).getRegex();
		it = d("^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)", "gu").replace(/notPunctSpace/g, Z).replace(/punctSpace/g, C).replace(/punct/g, _).getRegex();
		ot = d(/\\(punct)/, "gu").replace(/punct/g, _).getRegex();
		at = d(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
		lt = d(J).replace("(?:-->|$)", "-->").getRegex();
		ut = d("^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", lt).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
		ge = /\[(?:\\[\s\S]|[^\[\]\\])*\]/;
		N = d(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace("brackets", ge).getRegex();
		pt = d(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label", N).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
		ct = d(/^!?\[(label)\]\[(ref)\]/).replace("label", N).replace("ref", X).getRegex();
		ht = d(/^!?\[(ref)\](?:\[\])?/).replace("ref", X).getRegex();
		oe = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/;
		dt = d(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace("brackets", ge).getRegex();
		kt = d("reflink|nolink(?!\\()", "g").replace("reflink", d(/^!?\[(label)\]\[(ref)\]/).replace("label", dt).replace("ref", oe).getRegex()).replace("nolink", d(/^!?\[(ref)\](?:\[\])?/).replace("ref", oe).getRegex()).getRegex();
		ae = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/;
		Y = {
			_backpedal: E,
			anyPunctuation: ot,
			autolink: at,
			blockSkip: je,
			br: ce,
			code: ve,
			del: E,
			delLDelim: E,
			delRDelim: E,
			emStrongLDelim: Ue,
			emStrongRDelimAst: Xe,
			emStrongRDelimUnd: et,
			escape: qe,
			link: pt,
			nolink: ht,
			punctuation: Ze,
			reflink: ct,
			reflinkSearch: kt,
			tag: ut,
			text: He,
			url: E
		};
		gt = {
			...Y,
			emStrongLDelim: We,
			emStrongRDelimAst: Ye,
			emStrongRDelimUnd: nt,
			link: d(/^!?\[(label)\]\((.*?)\)/).replace("label", N).getRegex(),
			reflink: d(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", N).getRegex()
		};
		F = {
			...Y,
			emStrongRDelimAst: Je,
			emStrongLDelim: Fe,
			delLDelim: rt,
			delRDelim: it,
			url: d(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", ae).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),
			_backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
			del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
			text: d(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", ae).getRegex()
		};
		ft = {
			...F,
			br: d(ce).replace("{2,}", "*").getRegex(),
			text: d(F.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
		};
		G = {
			normal: V,
			gfm: Be,
			pedantic: De
		};
		B = {
			normal: Y,
			gfm: F,
			breaks: ft,
			pedantic: gt
		};
		mt = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			"\"": "&quot;",
			"'": "&#39;"
		};
		fe = (l) => mt[l];
		y = class {
			options;
			rules;
			lexer;
			constructor(e) {
				this.options = e || T;
			}
			space(e) {
				let t = this.rules.block.newline.exec(e);
				if (t && t[0].length > 0) return {
					type: "space",
					raw: t[0]
				};
			}
			code(e) {
				let t = this.rules.block.code.exec(e);
				if (t) {
					let n = this.options.pedantic ? t[0] : ne(t[0]);
					return {
						type: "code",
						raw: n,
						codeBlockStyle: "indented",
						text: n.replace(this.rules.other.codeRemoveIndent, "")
					};
				}
			}
			fences(e) {
				let t = this.rules.block.fences.exec(e);
				if (t) {
					let n = t[0], i = xt(n, t[3] || "", this.rules);
					return {
						type: "code",
						raw: n,
						lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
						text: i
					};
				}
			}
			heading(e) {
				let t = this.rules.block.heading.exec(e);
				if (t) {
					let n = t[2].trim();
					if (this.rules.other.endingHash.test(n)) {
						let i = $(n, "#");
						(this.options.pedantic || !i || this.rules.other.endingSpaceTabChar.test(i)) && (n = i.trim());
					}
					return {
						type: "heading",
						raw: $(t[0], `
`),
						depth: t[1].length,
						text: n,
						tokens: this.lexer.inline(n)
					};
				}
			}
			hr(e) {
				let t = this.rules.block.hr.exec(e);
				if (t) return {
					type: "hr",
					raw: $(t[0], `
`)
				};
			}
			blockquote(e) {
				let t = this.rules.block.blockquote.exec(e);
				if (t) {
					let n = $(t[0], `
`).split(`
`), i = "", r = "", o = [];
					for (; n.length > 0;) {
						let s = !1, u = [], a = 0;
						for (; a < n.length; a++) if (this.rules.other.blockquoteStart.test(n[a])) u.push(n[a]), s = !0;
						else if (!s) u.push(n[a]);
						else break;
						n = n.slice(a);
						let p = u.join(`
`), c = p.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
						i = i ? `${i}
${p}` : p, r = r ? `${r}
${c}` : c;
						let h = this.lexer.state.top;
						if (this.lexer.state.top = !0, this.lexer.blockTokens(c, o, !0), this.lexer.state.top = h, n.length === 0) break;
						let k = o.at(-1);
						if (k?.type === "code") break;
						if (k?.type === "blockquote") {
							let O = k, g = n.join(`
`), w = O.raw + `
` + g.replace(this.rules.other.blockquoteSetextReplace2, ""), z = this.blockquote(w);
							o[o.length - 1] = z, i = `${i}
${g}`, r = r.substring(0, r.length - O.text.length) + z.text;
							break;
						} else if (k?.type === "list") {
							let O = k, g = O.raw + `
` + n.join(`
`), w = this.list(g);
							o[o.length - 1] = w, i = i.substring(0, i.length - k.raw.length) + w.raw, r = r.substring(0, r.length - O.raw.length) + w.raw, n = g.substring(o.at(-1).raw.length).split(`
`);
							continue;
						}
					}
					return {
						type: "blockquote",
						raw: i,
						tokens: o,
						text: r
					};
				}
			}
			list(e) {
				let t = this.rules.block.list.exec(e);
				if (t) {
					let n = t[1].trim(), i = n.length > 1, r = {
						type: "list",
						raw: "",
						ordered: i,
						start: i ? +n.slice(0, -1) : "",
						loose: !1,
						items: []
					};
					n = i ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = i ? n : "[*+-]");
					let o = this.rules.other.listItemRegex(n), s = !1;
					for (; e;) {
						let a = !1, p = "", c = "";
						if (!(t = o.exec(e)) || this.rules.block.hr.test(e)) break;
						p = t[0], e = e.substring(p.length);
						let h = xe(t[2].split(`
`, 1)[0], t[1].length), k = e.split(`
`, 1)[0], O = !h.trim(), g = 0;
						if (this.options.pedantic ? (g = 2, c = h.trimStart()) : O ? g = t[1].length + 1 : (g = h.search(this.rules.other.nonSpaceChar), g = g > 4 ? 1 : g, c = h.slice(g), g += t[1].length), O && this.rules.other.blankLine.test(k) && (p += k + `
`, e = e.substring(k.length + 1), a = !0), !a) {
							let w = this.rules.other.nextBulletRegex(g), z = this.rules.other.hrRegex(g), re = this.rules.other.fencesBeginRegex(g), se = this.rules.other.headingBeginRegex(g), Te = this.rules.other.htmlBeginRegex(g), Oe = this.rules.other.blockquoteBeginRegex(g);
							for (; e;) {
								let j = e.split(`
`, 1)[0], q;
								if (k = j, this.options.pedantic ? (k = k.replace(this.rules.other.listReplaceNesting, "  "), q = k) : q = k.replace(this.rules.other.tabCharGlobal, "    "), re.test(k) || se.test(k) || Te.test(k) || Oe.test(k) || w.test(k) || z.test(k)) break;
								if (q.search(this.rules.other.nonSpaceChar) >= g || !k.trim()) c += `
` + q.slice(g);
								else {
									if (O || h.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || re.test(h) || se.test(h) || z.test(h)) break;
									c += `
` + k;
								}
								O = !k.trim(), p += j + `
`, e = e.substring(j.length + 1), h = q.slice(g);
							}
						}
						r.loose || (s ? r.loose = !0 : this.rules.other.doubleBlankLine.test(p) && (s = !0)), r.items.push({
							type: "list_item",
							raw: p,
							task: !!this.options.gfm && this.rules.other.listIsTask.test(c),
							loose: !1,
							text: c,
							tokens: []
						}), r.raw += p;
					}
					let u = r.items.at(-1);
					if (u) u.raw = u.raw.trimEnd(), u.text = u.text.trimEnd();
					else return;
					r.raw = r.raw.trimEnd();
					for (let a of r.items) if (this.lexer.state.top = !1, a.tokens = this.lexer.blockTokens(a.text, []), !r.loose) {
						let p = a.tokens.filter((h) => h.type === "space");
						r.loose = p.length > 0 && p.some((h) => this.rules.other.anyLine.test(h.raw));
					}
					for (let a of r.items) {
						let p = a.tokens[0];
						if (a.task && (p?.type === "text" || p?.type === "paragraph")) {
							a.text = a.text.replace(this.rules.other.listReplaceTask, ""), p.raw = p.raw.replace(this.rules.other.listReplaceTask, ""), p.text = p.text.replace(this.rules.other.listReplaceTask, "");
							for (let h = this.lexer.inlineQueue.length - 1; h >= 0; h--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[h].src)) {
								this.lexer.inlineQueue[h].src = this.lexer.inlineQueue[h].src.replace(this.rules.other.listReplaceTask, "");
								break;
							}
							let c = this.rules.other.listTaskCheckbox.exec(a.raw);
							if (c) {
								let h = {
									type: "checkbox",
									raw: c[0] + " ",
									checked: c[0] !== "[ ]"
								};
								a.checked = h.checked, r.loose ? a.tokens[0] && ["paragraph", "text"].includes(a.tokens[0].type) && "tokens" in a.tokens[0] && a.tokens[0].tokens ? (a.tokens[0].raw = h.raw + a.tokens[0].raw, a.tokens[0].text = h.raw + a.tokens[0].text, a.tokens[0].tokens.unshift(h)) : a.tokens.unshift({
									type: "paragraph",
									raw: h.raw,
									text: h.raw,
									tokens: [h]
								}) : a.tokens.unshift(h);
							}
						} else a.task && (a.task = !1);
					}
					if (r.loose) for (let a of r.items) {
						a.loose = !0;
						for (let p of a.tokens) p.type === "text" && (p.type = "paragraph");
					}
					return r;
				}
			}
			html(e) {
				let t = this.rules.block.html.exec(e);
				if (t) {
					let n = ne(t[0]);
					return {
						type: "html",
						block: !0,
						raw: n,
						pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
						text: n
					};
				}
			}
			def(e) {
				let t = this.rules.block.def.exec(e);
				if (t) {
					let n = D(t[1]).replace(this.rules.other.multipleSpaceGlobal, " "), i = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
					return {
						type: "def",
						tag: n,
						raw: $(t[0], `
`),
						href: i,
						title: r
					};
				}
			}
			table(e) {
				let t = this.rules.block.table.exec(e);
				if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
				let n = te(t[1]), i = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), r = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], o = {
					type: "table",
					raw: $(t[0], `
`),
					header: [],
					align: [],
					rows: []
				};
				if (n.length === i.length) {
					for (let s of i) this.rules.other.tableAlignRight.test(s) ? o.align.push("right") : this.rules.other.tableAlignCenter.test(s) ? o.align.push("center") : this.rules.other.tableAlignLeft.test(s) ? o.align.push("left") : o.align.push(null);
					for (let s = 0; s < n.length; s++) o.header.push({
						text: n[s],
						tokens: this.lexer.inline(n[s]),
						header: !0,
						align: o.align[s]
					});
					for (let s of r) o.rows.push(te(s, o.header.length).map((u, a) => ({
						text: u,
						tokens: this.lexer.inline(u),
						header: !1,
						align: o.align[a]
					})));
					return o;
				}
			}
			lheading(e) {
				let t = this.rules.block.lheading.exec(e);
				if (t) {
					let n = t[1].trim();
					return {
						type: "heading",
						raw: $(t[0], `
`),
						depth: t[2].charAt(0) === "=" ? 1 : 2,
						text: n,
						tokens: this.lexer.inline(n)
					};
				}
			}
			paragraph(e) {
				let t = this.rules.block.paragraph.exec(e);
				if (t) {
					let n = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
					return {
						type: "paragraph",
						raw: t[0],
						text: n,
						tokens: this.lexer.inline(n)
					};
				}
			}
			text(e) {
				let t = this.rules.block.text.exec(e);
				if (t) return {
					type: "text",
					raw: t[0],
					text: t[0],
					tokens: this.lexer.inline(t[0])
				};
			}
			escape(e) {
				let t = this.rules.inline.escape.exec(e);
				if (t) return {
					type: "escape",
					raw: t[0],
					text: t[1]
				};
			}
			tag(e) {
				let t = this.rules.inline.tag.exec(e);
				if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
					type: "html",
					raw: t[0],
					inLink: this.lexer.state.inLink,
					inRawBlock: this.lexer.state.inRawBlock,
					block: !1,
					text: t[0]
				};
			}
			link(e) {
				let t = this.rules.inline.link.exec(e);
				if (t) {
					let n = t[0].charAt(0) === "!" ? 2 : 1;
					if (!this.options.pedantic && Re(e, t[1], n, this.rules)) return;
					let i = t[2].trim();
					if (!this.options.pedantic && this.rules.other.startAngleBracket.test(i)) {
						if (!this.rules.other.endAngleBracket.test(i)) return;
						let s = $(i.slice(0, -1), "\\");
						if ((i.length - s.length) % 2 === 0) return;
					} else {
						let s = me(t[2], "()");
						if (s === -2) return;
						if (s > -1) {
							let a = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + s;
							t[2] = t[2].substring(0, s), t[0] = t[0].substring(0, a).trim(), t[3] = "";
						}
					}
					let r = t[2], o = "";
					if (this.options.pedantic) {
						let s = this.rules.other.pedanticHrefTitle.exec(r);
						s && (r = s[1], o = s[3]);
					} else o = t[3] ? t[3].slice(1, -1) : "";
					return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(i) ? r = r.slice(1) : r = r.slice(1, -1)), be(t, {
						href: r && r.replace(this.rules.inline.anyPunctuation, "$1"),
						title: o && o.replace(this.rules.inline.anyPunctuation, "$1")
					}, t[0], this.lexer, this.rules);
				}
			}
			reflink(e, t) {
				let n;
				if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
					let i = n[0].charAt(0) === "!" ? 2 : 1;
					if (!this.options.pedantic && Re(e, n[1], i, this.rules)) return;
					let o = t[D((n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "))];
					if (!o) {
						let s = n[0].charAt(0);
						return {
							type: "text",
							raw: s,
							text: s
						};
					}
					return be(n, o, n[0], this.lexer, this.rules);
				}
			}
			emStrong(e, t, n = "") {
				let i = this.rules.inline.emStrongLDelim.exec(e);
				if (!i || !i[1] && !i[2] && !i[3] && !i[4] || i[4] && n.match(this.rules.other.unicodeAlphaNumeric)) return;
				if (!(i[1] || i[3] || "") || !n || this.rules.inline.punctuation.exec(n)) {
					let o = [...i[0]].length - 1, s, u, a = o, p = 0, c = i[0][0], h = n === c, k = c === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
					for (k.lastIndex = 0, t = t.slice(-1 * e.length + o); (i = k.exec(t)) !== null;) {
						if (s = i[1] || i[2] || i[3] || i[4] || i[5] || i[6], !s) continue;
						if (u = [...s].length, i[3] || i[4]) {
							a += u;
							continue;
						} else if (i[5] || i[6]) {
							if (o % 3 && !((o + u) % 3)) {
								p += u;
								continue;
							}
							if (h) break;
						}
						if (a -= u, a > 0) continue;
						u = Math.min(u, u + a + p);
						let O = [...i[0]][0].length, g = e.slice(0, o + i.index + O + u);
						if (Math.min(o, u) % 2) {
							let z = g.slice(1, -1);
							return {
								type: "em",
								raw: g,
								text: z,
								tokens: this.lexer.inlineTokens(z)
							};
						}
						let w = g.slice(2, -2);
						return {
							type: "strong",
							raw: g,
							text: w,
							tokens: this.lexer.inlineTokens(w)
						};
					}
				}
			}
			codespan(e) {
				let t = this.rules.inline.code.exec(e);
				if (t) {
					let n = t[2].replace(this.rules.other.newLineCharGlobal, " "), i = this.rules.other.nonSpaceChar.test(n), r = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
					return i && r && (n = n.substring(1, n.length - 1)), {
						type: "codespan",
						raw: t[0],
						text: n
					};
				}
			}
			br(e) {
				let t = this.rules.inline.br.exec(e);
				if (t) return {
					type: "br",
					raw: t[0]
				};
			}
			del(e, t, n = "") {
				let i = this.rules.inline.delLDelim.exec(e);
				if (!i) return;
				if (!(i[1] || "") || !n || this.rules.inline.punctuation.exec(n)) {
					let o = [...i[0]].length - 1, s, u, a = o, p = this.rules.inline.delRDelim;
					for (p.lastIndex = 0, t = t.slice(-1 * e.length + o); (i = p.exec(t)) !== null;) {
						if (s = i[1] || i[2] || i[3] || i[4] || i[5] || i[6], !s || (u = [...s].length, u !== o)) continue;
						if (i[3] || i[4]) {
							a += u;
							continue;
						}
						if (a -= u, a > 0) continue;
						u = Math.min(u, u + a);
						let c = [...i[0]][0].length, h = e.slice(0, o + i.index + c + u), k = h.slice(o, -o);
						return {
							type: "del",
							raw: h,
							text: k,
							tokens: this.lexer.inlineTokens(k)
						};
					}
				}
			}
			autolink(e) {
				let t = this.rules.inline.autolink.exec(e);
				if (t) {
					let n, i;
					return t[2] === "@" ? (n = t[1], i = "mailto:" + n) : (n = t[1], i = n), {
						type: "link",
						raw: t[0],
						text: n,
						href: i,
						autolink: !0,
						tokens: [{
							type: "text",
							raw: n,
							text: n
						}]
					};
				}
			}
			url(e) {
				let t;
				if (t = this.rules.inline.url.exec(e)) {
					let n, i;
					if (t[2] === "@") n = t[0], i = "mailto:" + n;
					else {
						let r;
						do
							r = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
						while (r !== t[0]);
						n = t[0], t[1] === "www." ? i = "http://" + t[0] : i = t[0];
					}
					return {
						type: "link",
						raw: t[0],
						text: n,
						href: i,
						autolink: !0,
						tokens: [{
							type: "text",
							raw: n,
							text: n
						}]
					};
				}
			}
			inlineText(e) {
				let t = this.rules.inline.text.exec(e);
				if (t) {
					let n = this.lexer.state.inRawBlock;
					return {
						type: "text",
						raw: t[0],
						text: t[0],
						escaped: n
					};
				}
			}
		};
		x = class l {
			tokens;
			options;
			state;
			inlineQueue;
			tokenizer;
			constructor(e) {
				this.tokens = [], this.tokens.links = Object.create(null), this.options = e || T, this.options.tokenizer = this.options.tokenizer || new y(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
					inLink: !1,
					inRawBlock: !1,
					linkEmitted: !1,
					top: !0
				};
				let t = {
					other: m,
					block: G.normal,
					inline: B.normal
				};
				this.options.pedantic ? (t.block = G.pedantic, t.inline = B.pedantic) : this.options.gfm && (t.block = G.gfm, this.options.breaks ? t.inline = B.breaks : t.inline = B.gfm), this.tokenizer.rules = t;
			}
			static get rules() {
				return {
					block: G,
					inline: B
				};
			}
			static lex(e, t) {
				return new l(t).lex(e);
			}
			static lexInline(e, t) {
				return new l(t).inlineTokens(e);
			}
			lex(e) {
				e = e.replace(m.carriageReturn, `
`), this.blockTokens(e, this.tokens);
				for (let t = 0; t < this.inlineQueue.length; t++) {
					let n = this.inlineQueue[t];
					this.inlineTokens(n.src, n.tokens);
				}
				return this.inlineQueue = [], this.tokens;
			}
			blockTokens(e, t = [], n = !1) {
				this.tokenizer.lexer = this, this.options.pedantic && (e = e.replace(m.tabCharGlobal, "    ").replace(m.spaceLine, ""));
				let i = 1 / 0;
				for (; e;) {
					if (e.length < i) i = e.length;
					else {
						this.infiniteLoopError(e.charCodeAt(0));
						break;
					}
					let r;
					if (this.options.extensions?.block?.some((s) => (r = s.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), !0) : !1)) continue;
					if (r = this.tokenizer.space(e)) {
						e = e.substring(r.raw.length);
						let s = t.at(-1);
						r.raw.length === 1 && s !== void 0 ? s.raw += `
` : t.push(r);
						continue;
					}
					if (r = this.tokenizer.code(e)) {
						e = e.substring(r.raw.length);
						let s = t.at(-1);
						s?.type === "paragraph" || s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.text, this.inlineQueue.at(-1).src = s.text) : t.push(r);
						continue;
					}
					if (r = this.tokenizer.fences(e)) {
						e = e.substring(r.raw.length), t.push(r);
						continue;
					}
					if (r = this.tokenizer.heading(e)) {
						e = e.substring(r.raw.length), t.push(r);
						continue;
					}
					if (r = this.tokenizer.hr(e)) {
						e = e.substring(r.raw.length), t.push(r);
						continue;
					}
					if (r = this.tokenizer.blockquote(e)) {
						e = e.substring(r.raw.length), t.push(r);
						continue;
					}
					if (r = this.tokenizer.list(e)) {
						e = e.substring(r.raw.length), t.push(r);
						continue;
					}
					if (r = this.tokenizer.html(e)) {
						e = e.substring(r.raw.length), t.push(r);
						continue;
					}
					if (r = this.tokenizer.def(e)) {
						e = e.substring(r.raw.length);
						let s = t.at(-1);
						s?.type === "paragraph" || s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.raw, this.inlineQueue.at(-1).src = s.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
							href: r.href,
							title: r.title
						}, t.push(r));
						continue;
					}
					if (r = this.tokenizer.table(e)) {
						e = e.substring(r.raw.length), t.push(r);
						continue;
					}
					if (r = this.tokenizer.lheading(e)) {
						e = e.substring(r.raw.length), t.push(r);
						continue;
					}
					let o = e;
					if (this.options.extensions?.startBlock) {
						let s = 1 / 0, u = e.slice(1), a;
						this.options.extensions.startBlock.forEach((p) => {
							a = p.call({ lexer: this }, u), typeof a == "number" && a >= 0 && (s = Math.min(s, a));
						}), s < 1 / 0 && s >= 0 && (o = e.substring(0, s + 1));
					}
					if (this.state.top && (r = this.tokenizer.paragraph(o))) {
						let s = t.at(-1);
						n && s?.type === "paragraph" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : t.push(r), n = o.length !== e.length, e = e.substring(r.raw.length);
						continue;
					}
					if (r = this.tokenizer.text(e)) {
						e = e.substring(r.raw.length);
						let s = t.at(-1);
						s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : t.push(r);
						continue;
					}
					if (e) {
						this.infiniteLoopError(e.charCodeAt(0));
						break;
					}
				}
				return this.state.top = !0, t;
			}
			inline(e, t = []) {
				return this.inlineQueue.push({
					src: e,
					tokens: t
				}), t;
			}
			linkInText(e) {
				if (!e.includes("[")) return !1;
				let t = this.tokenizer.rules.inline.link;
				for (let n of e.matchAll(this.tokenizer.rules.inline.blockSkip)) if (t.test(n[0]) && e.charAt(n.index - 1) !== "!") return !0;
				for (let n of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)) {
					let i = n[0], r = i.lastIndexOf("[");
					if (!(i.charAt(0) === "!" || !Object.hasOwn(this.tokens.links, D(i.slice(r + 1, -1)))) && !(r > 1 && this.linkInText(i.slice(1, r - 1)))) return !0;
				}
				return !1;
			}
			inlineTokens(e, t = []) {
				this.tokenizer.lexer = this;
				let n = e;
				if (this.tokens.links && e.includes("[")) {
					let s = this.tokenizer.rules.inline.reflinkSearch, u = (a) => {
						let p = a.lastIndexOf("[");
						if (!Object.hasOwn(this.tokens.links, D(a.slice(p + 1, -1)))) return a;
						if (p > 1 && a.charAt(0) !== "!") {
							let c = a.slice(1, p - 1);
							if (this.linkInText(c)) return "[" + c.replace(s, u) + "][" + "a".repeat(a.length - p - 2) + "]";
						}
						return "[" + "a".repeat(a.length - 2) + "]";
					};
					n = n.replace(s, u);
				}
				n = n.replace(this.tokenizer.rules.inline.anyPunctuation, (s) => "+".repeat(s.length)), n = n.replace(this.tokenizer.rules.inline.blockSkip, (s, u, a) => {
					let p = a ? a.length : 0;
					return s.slice(0, p) + "[" + "a".repeat(s.length - p - 2) + "]";
				}), n = this.options.hooks?.emStrongMask?.call({ lexer: this }, n) ?? n;
				let i = !1, r = "", o = 1 / 0;
				for (; e;) {
					if (e.length < o) o = e.length;
					else {
						this.infiniteLoopError(e.charCodeAt(0));
						break;
					}
					i || (r = ""), i = !1;
					let s;
					if (this.options.extensions?.inline?.some((a) => (s = a.call({ lexer: this }, e, t)) ? (e = e.substring(s.raw.length), t.push(s), !0) : !1)) continue;
					if (s = this.tokenizer.escape(e)) {
						e = e.substring(s.raw.length), t.push(s);
						continue;
					}
					if (s = this.tokenizer.tag(e)) {
						e = e.substring(s.raw.length), t.push(s);
						continue;
					}
					if (s = this.tokenizer.link(e)) {
						e = e.substring(s.raw.length), t.push(s);
						continue;
					}
					if (s = this.tokenizer.reflink(e, this.tokens.links)) {
						e = e.substring(s.raw.length);
						let a = t.at(-1);
						s.type === "text" && a?.type === "text" ? (a.raw += s.raw, a.text += s.text) : t.push(s);
						continue;
					}
					if (s = this.tokenizer.emStrong(e, n, r)) {
						e = e.substring(s.raw.length), t.push(s);
						continue;
					}
					if (s = this.tokenizer.codespan(e)) {
						e = e.substring(s.raw.length), t.push(s);
						continue;
					}
					if (s = this.tokenizer.br(e)) {
						e = e.substring(s.raw.length), t.push(s);
						continue;
					}
					if (s = this.tokenizer.del(e, n, r)) {
						e = e.substring(s.raw.length), t.push(s);
						continue;
					}
					if (s = this.tokenizer.autolink(e)) {
						e = e.substring(s.raw.length), t.push(s);
						continue;
					}
					if (!this.state.inLink && (s = this.tokenizer.url(e))) {
						e = e.substring(s.raw.length), t.push(s);
						continue;
					}
					let u = e;
					if (this.options.extensions?.startInline) {
						let a = 1 / 0, p = e.slice(1), c;
						this.options.extensions.startInline.forEach((h) => {
							c = h.call({ lexer: this }, p), typeof c == "number" && c >= 0 && (a = Math.min(a, c));
						}), a < 1 / 0 && a >= 0 && (u = e.substring(0, a + 1));
					}
					if (s = this.tokenizer.inlineText(u)) {
						e = e.substring(s.raw.length), s.raw.slice(-1) !== "_" && (r = s.raw.slice(-1)), i = !0;
						let a = t.at(-1);
						a?.type === "text" ? (a.raw += s.raw, a.text += s.text) : t.push(s);
						continue;
					}
					if (e) {
						this.infiniteLoopError(e.charCodeAt(0));
						break;
					}
				}
				return t;
			}
			infiniteLoopError(e) {
				let t = "Infinite loop on byte: " + e;
				if (this.options.silent) console.error(t);
				else throw new Error(t);
			}
		};
		P = class {
			options;
			parser;
			constructor(e) {
				this.options = e || T;
			}
			space(e) {
				return "";
			}
			code({ text: e, lang: t, escaped: n }) {
				let i = (t || "").match(m.notSpaceStart)?.[0], r = e ? e.replace(m.endingNewline, "") + `
` : "";
				return i ? "<pre><code class=\"language-" + R(i) + "\">" + (n ? r : R(r, !0)) + `</code></pre>
` : "<pre><code>" + (n ? r : R(r, !0)) + `</code></pre>
`;
			}
			blockquote({ tokens: e }) {
				return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
			}
			html({ text: e }) {
				return e;
			}
			def(e) {
				return "";
			}
			heading({ tokens: e, depth: t }) {
				return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
			}
			hr(e) {
				return `<hr>
`;
			}
			list(e) {
				let t = e.ordered, n = e.start, i = "";
				for (let s = 0; s < e.items.length; s++) {
					let u = e.items[s];
					i += this.listitem(u);
				}
				let r = t ? "ol" : "ul", o = t && n !== 1 ? " start=\"" + n + "\"" : "";
				return "<" + r + o + `>
` + i + "</" + r + `>
`;
			}
			listitem(e) {
				return `<li>${this.parser.parse(e.tokens)}</li>
`;
			}
			checkbox({ checked: e }) {
				return "<input " + (e ? "checked=\"\" " : "") + "disabled=\"\" type=\"checkbox\"> ";
			}
			paragraph({ tokens: e }) {
				return `<p>${this.parser.parseInline(e)}</p>
`;
			}
			table(e) {
				let t = "", n = "";
				for (let r = 0; r < e.header.length; r++) n += this.tablecell(e.header[r]);
				t += this.tablerow({ text: n });
				let i = "";
				for (let r = 0; r < e.rows.length; r++) {
					let o = e.rows[r];
					n = "";
					for (let s = 0; s < o.length; s++) n += this.tablecell(o[s]);
					i += this.tablerow({ text: n });
				}
				return i && (i = `<tbody>${i}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + i + `</table>
`;
			}
			tablerow({ text: e }) {
				return `<tr>
${e}</tr>
`;
			}
			tablecell(e) {
				let t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
				return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
			}
			strong({ tokens: e }) {
				return `<strong>${this.parser.parseInline(e)}</strong>`;
			}
			em({ tokens: e }) {
				return `<em>${this.parser.parseInline(e)}</em>`;
			}
			codespan({ text: e }) {
				return `<code>${R(e, !0)}</code>`;
			}
			br(e) {
				return "<br>";
			}
			del({ tokens: e }) {
				return `<del>${this.parser.parseInline(e)}</del>`;
			}
			link({ href: e, title: t, text: n, tokens: i, autolink: r }) {
				let o = r ? R(n, !0) : this.parser.parseInline(i), s = ee(e);
				if (s === null) return o;
				e = R(s, r);
				let u = "<a href=\"" + e + "\"";
				return t && (u += " title=\"" + R(t) + "\""), u += ">" + o + "</a>", u;
			}
			image({ href: e, title: t, text: n, tokens: i }) {
				i && (n = this.parser.parseInline(i, this.parser.textRenderer));
				let r = ee(e);
				if (r === null) return R(n);
				e = r;
				let o = `<img src="${R(e)}" alt="${R(n)}"`;
				return t && (o += ` title="${R(t)}"`), o += ">", o;
			}
			text(e) {
				return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : R(e.text);
			}
		};
		L = class {
			strong({ text: e }) {
				return e;
			}
			em({ text: e }) {
				return e;
			}
			codespan({ text: e }) {
				return e;
			}
			del({ text: e }) {
				return e;
			}
			html({ text: e }) {
				return e;
			}
			text({ text: e }) {
				return e;
			}
			link({ text: e }) {
				return "" + e;
			}
			image({ text: e }) {
				return "" + e;
			}
			br() {
				return "";
			}
			checkbox({ raw: e }) {
				return e;
			}
		};
		b = class l {
			options;
			renderer;
			textRenderer;
			constructor(e) {
				this.options = e || T, this.options.renderer = this.options.renderer || new P(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new L();
			}
			static parse(e, t) {
				return new l(t).parse(e);
			}
			static parseInline(e, t) {
				return new l(t).parseInline(e);
			}
			parse(e) {
				this.renderer.parser = this;
				let t = "";
				for (let n = 0; n < e.length; n++) {
					let i = e[n];
					if (this.options.extensions?.renderers?.[i.type]) {
						let o = i, s = this.options.extensions.renderers[o.type].call({ parser: this }, o);
						if (s !== !1 || ![
							"space",
							"hr",
							"heading",
							"code",
							"table",
							"blockquote",
							"list",
							"checkbox",
							"html",
							"def",
							"paragraph",
							"text"
						].includes(o.type)) {
							t += s || "";
							continue;
						}
					}
					let r = i;
					switch (r.type) {
						case "space":
							t += this.renderer.space(r);
							break;
						case "hr":
							t += this.renderer.hr(r);
							break;
						case "heading":
							t += this.renderer.heading(r);
							break;
						case "code":
							t += this.renderer.code(r);
							break;
						case "table":
							t += this.renderer.table(r);
							break;
						case "blockquote":
							t += this.renderer.blockquote(r);
							break;
						case "list":
							t += this.renderer.list(r);
							break;
						case "checkbox":
							t += this.renderer.checkbox(r);
							break;
						case "html":
							t += this.renderer.html(r);
							break;
						case "def":
							t += this.renderer.def(r);
							break;
						case "paragraph":
							t += this.renderer.paragraph(r);
							break;
						case "text":
							t += this.renderer.text(r);
							break;
						default: {
							let o = "Token with \"" + r.type + "\" type was not found.";
							if (this.options.silent) return console.error(o), "";
							throw new Error(o);
						}
					}
				}
				return t;
			}
			parseInline(e, t = this.renderer) {
				this.renderer.parser = this;
				let n = "";
				for (let i = 0; i < e.length; i++) {
					let r = e[i];
					if (this.options.extensions?.renderers?.[r.type]) {
						let s = this.options.extensions.renderers[r.type].call({ parser: this }, r);
						if (s !== !1 || ![
							"escape",
							"html",
							"link",
							"image",
							"checkbox",
							"strong",
							"em",
							"codespan",
							"br",
							"del",
							"text"
						].includes(r.type)) {
							n += s || "";
							continue;
						}
					}
					let o = r;
					switch (o.type) {
						case "escape":
							n += t.text(o);
							break;
						case "html":
							n += t.html(o);
							break;
						case "link":
							n += t.link(o);
							break;
						case "image":
							n += t.image(o);
							break;
						case "checkbox":
							n += t.checkbox(o);
							break;
						case "strong":
							n += t.strong(o);
							break;
						case "em":
							n += t.em(o);
							break;
						case "codespan":
							n += t.codespan(o);
							break;
						case "br":
							n += t.br(o);
							break;
						case "del":
							n += t.del(o);
							break;
						case "text":
							n += t.text(o);
							break;
						default: {
							let s = "Token with \"" + o.type + "\" type was not found.";
							if (this.options.silent) return console.error(s), "";
							throw new Error(s);
						}
					}
				}
				return n;
			}
		};
		S = class {
			options;
			block;
			constructor(e) {
				this.options = e || T;
			}
			static passThroughHooks = /* @__PURE__ */ new Set([
				"preprocess",
				"postprocess",
				"processAllTokens",
				"emStrongMask"
			]);
			static passThroughHooksRespectAsync = /* @__PURE__ */ new Set([
				"preprocess",
				"postprocess",
				"processAllTokens"
			]);
			preprocess(e) {
				return e;
			}
			postprocess(e) {
				return e;
			}
			processAllTokens(e) {
				return e;
			}
			emStrongMask(e) {
				return e;
			}
			provideLexer(e = this.block) {
				return e ? x.lex : x.lexInline;
			}
			provideParser(e = this.block) {
				return e ? b.parse : b.parseInline;
			}
		};
		Q = class {
			defaults = A();
			options = this.setOptions;
			parse = this.parseMarkdown(!0);
			parseInline = this.parseMarkdown(!1);
			Parser = b;
			Renderer = P;
			TextRenderer = L;
			Lexer = x;
			Tokenizer = y;
			Hooks = S;
			constructor(...e) {
				this.use(...e);
			}
			walkTokens(e, t) {
				let n = [];
				for (let i of e) switch (n = n.concat(t.call(this, i)), i.type) {
					case "table": {
						let r = i;
						for (let o of r.header) n = n.concat(this.walkTokens(o.tokens, t));
						for (let o of r.rows) for (let s of o) n = n.concat(this.walkTokens(s.tokens, t));
						break;
					}
					case "list": {
						let r = i;
						n = n.concat(this.walkTokens(r.items, t));
						break;
					}
					default: {
						let r = i;
						this.defaults.extensions?.childTokens?.[r.type] ? this.defaults.extensions.childTokens[r.type].forEach((o) => {
							let s = r[o].flat(1 / 0);
							n = n.concat(this.walkTokens(s, t));
						}) : r.tokens && (n = n.concat(this.walkTokens(r.tokens, t)));
					}
				}
				return n;
			}
			use(...e) {
				let t = this.defaults.extensions || {
					renderers: {},
					childTokens: {}
				};
				return e.forEach((n) => {
					let i = { ...n };
					if (i.async = this.defaults.async || i.async || !1, n.extensions && (n.extensions.forEach((r) => {
						if (!r.name) throw new Error("extension name required");
						if ("renderer" in r) {
							let o = t.renderers[r.name];
							o ? t.renderers[r.name] = function(...s) {
								let u = r.renderer.apply(this, s);
								return u === !1 && (u = o.apply(this, s)), u;
							} : t.renderers[r.name] = r.renderer;
						}
						if ("tokenizer" in r) {
							if (!r.level || r.level !== "block" && r.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
							let o = t[r.level];
							o ? o.unshift(r.tokenizer) : t[r.level] = [r.tokenizer], r.start && (r.level === "block" ? t.startBlock ? t.startBlock.push(r.start) : t.startBlock = [r.start] : r.level === "inline" && (t.startInline ? t.startInline.push(r.start) : t.startInline = [r.start]));
						}
						"childTokens" in r && r.childTokens && (t.childTokens[r.name] = r.childTokens);
					}), i.extensions = t), n.renderer) {
						let r = this.defaults.renderer || new P(this.defaults);
						for (let o in n.renderer) {
							if (!(o in r)) throw new Error(`renderer '${o}' does not exist`);
							if (["options", "parser"].includes(o)) continue;
							let s = o, u = n.renderer[s], a = r[s];
							r[s] = (...p) => {
								let c = u.apply(r, p);
								return c === !1 && (c = a.apply(r, p)), c || "";
							};
						}
						i.renderer = r;
					}
					if (n.tokenizer) {
						let r = this.defaults.tokenizer || new y(this.defaults);
						for (let o in n.tokenizer) {
							if (!(o in r)) throw new Error(`tokenizer '${o}' does not exist`);
							if ([
								"options",
								"rules",
								"lexer"
							].includes(o)) continue;
							let s = o, u = n.tokenizer[s], a = r[s];
							r[s] = (...p) => {
								let c = u.apply(r, p);
								return c === !1 && (c = a.apply(r, p)), c;
							};
						}
						i.tokenizer = r;
					}
					if (n.hooks) {
						let r = this.defaults.hooks || new S();
						for (let o in n.hooks) {
							if (!(o in r)) throw new Error(`hook '${o}' does not exist`);
							if (["options", "block"].includes(o)) continue;
							let s = o, u = n.hooks[s], a = r[s];
							S.passThroughHooks.has(o) ? r[s] = (p) => {
								if (this.defaults.async && S.passThroughHooksRespectAsync.has(o)) return (async () => {
									let h = await u.call(r, p);
									return a.call(r, h);
								})();
								let c = u.call(r, p);
								return a.call(r, c);
							} : r[s] = (...p) => {
								if (this.defaults.async) return (async () => {
									let h = await u.apply(r, p);
									return h === !1 && (h = await a.apply(r, p)), h;
								})();
								let c = u.apply(r, p);
								return c === !1 && (c = a.apply(r, p)), c;
							};
						}
						i.hooks = r;
					}
					if (n.walkTokens) {
						let r = this.defaults.walkTokens, o = n.walkTokens;
						i.walkTokens = function(s) {
							let u = [];
							return u.push(o.call(this, s)), r && (u = u.concat(r.call(this, s))), u;
						};
					}
					this.defaults = {
						...this.defaults,
						...i
					};
				}), this;
			}
			setOptions(e) {
				return this.defaults = {
					...this.defaults,
					...e
				}, this;
			}
			lexer(e, t) {
				return x.lex(e, t ?? this.defaults);
			}
			parser(e, t) {
				return b.parse(e, t ?? this.defaults);
			}
			parseMarkdown(e) {
				return (n, i) => {
					let r = { ...i }, o = {
						...this.defaults,
						...r
					}, s = this.onError(!!o.silent, !!o.async);
					if (this.defaults.async === !0 && r.async === !1) return s(/* @__PURE__ */ new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
					if (typeof n > "u" || n === null) return s(/* @__PURE__ */ new Error("marked(): input parameter is undefined or null"));
					if (typeof n != "string") return s(/* @__PURE__ */ new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
					if (o.hooks && (o.hooks.options = o, o.hooks.block = e), o.async) return (async () => {
						let u = o.hooks ? await o.hooks.preprocess(n) : n, p = await (o.hooks ? await o.hooks.provideLexer(e) : e ? x.lex : x.lexInline)(u, o), c = o.hooks ? await o.hooks.processAllTokens(p) : p;
						o.walkTokens && await Promise.all(this.walkTokens(c, o.walkTokens));
						let k = await (o.hooks ? await o.hooks.provideParser(e) : e ? b.parse : b.parseInline)(c, o);
						return o.hooks ? await o.hooks.postprocess(k) : k;
					})().catch(s);
					try {
						o.hooks && (n = o.hooks.preprocess(n));
						let a = (o.hooks ? o.hooks.provideLexer(e) : e ? x.lex : x.lexInline)(n, o);
						o.hooks && (a = o.hooks.processAllTokens(a)), o.walkTokens && this.walkTokens(a, o.walkTokens);
						let c = (o.hooks ? o.hooks.provideParser(e) : e ? b.parse : b.parseInline)(a, o);
						return o.hooks && (c = o.hooks.postprocess(c)), c;
					} catch (u) {
						return s(u);
					}
				};
			}
			onError(e, t) {
				return (n) => {
					if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
						let i = "<p>An error occurred:</p><pre>" + R(n.message + "", !0) + "</pre>";
						return t ? Promise.resolve(i) : i;
					}
					if (t) return Promise.reject(n);
					throw n;
				};
			}
		};
		M = new Q();
		f.options = f.setOptions = function(l) {
			return M.setOptions(l), f.defaults = M.defaults, U(f.defaults), f;
		};
		f.getDefaults = A;
		f.defaults = T;
		f.use = bt;
		f.walkTokens = function(l, e) {
			return M.walkTokens(l, e);
		};
		f.parseInline = M.parseInline;
		f.Parser = b;
		f.parser = b.parse;
		f.Renderer = P;
		f.TextRenderer = L;
		f.Lexer = x;
		f.lexer = x.lex;
		f.Tokenizer = y;
		f.Hooks = S;
		f.parse = f;
		f.options;
		f.setOptions;
		f.walkTokens;
		f.parseInline;
		b.parse;
		x.lex;
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/raw-handling/markdown-converter.mjs
function escapeBodyText(value) {
	return value.replace(/&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function slackMarkdownVariantCorrector(text) {
	return text.replace(/((?:^|\n)```)([^\n`]+)(```(?:$|\n))/, (match, p1, p2, p3) => `${p1}
${p2}
${p3}`);
}
function bulletsToAsterisks(text) {
	return text.replace(/(^|\n)•( +)/g, "$1*$2");
}
function escapeSingleLineOrderedListMarker(text) {
	if (text.includes("\n")) return text;
	return text.replace(/^(\d+)\.(\s)/, "$1\\.$2");
}
function markdownConverter(text) {
	return converter.parse(correctors.reduce((current, corrector) => corrector(current), text), { async: false });
}
var converter, correctors;
function init_markdown_converter() {
	return (init_markdown_converter = __esmMin((() => {
		init_marked_esm();
		converter = new Q({
			gfm: true,
			breaks: true,
			renderer: {
				code({ text, lang }) {
					const language = (lang || "").match(/^\S*/)?.[0];
					return `<pre><code${language ? ` class="${language} language-${language}"` : ""}>${escapeBodyText(text)}</code></pre>`;
				},
				text(token) {
					if ("tokens" in token && token.tokens || "escaped" in token && token.escaped) return false;
					return escapeBodyText(token.text);
				}
			}
		});
		correctors = [
			escapeSingleLineOrderedListMarker,
			bulletsToAsterisks,
			slackMarkdownVariantCorrector
		];
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/raw-handling/iframe-remover.mjs
function iframeRemover(iframe) {
	if (iframe.nodeName === "IFRAME") {
		const node = iframe;
		const text = node.ownerDocument.createTextNode(node.src);
		node.parentNode.replaceChild(text, node);
	}
}
//#endregion
//#region ../packages/blocks/build-module/api/raw-handling/google-docs-uid-remover.mjs
function googleDocsUIdRemover(node) {
	const el = node;
	if (!el.id || el.id.indexOf("docs-internal-guid-") !== 0) return;
	if (el.tagName === "B") unwrap(node);
	else el.removeAttribute("id");
}
function init_google_docs_uid_remover() {
	return (init_google_docs_uid_remover = __esmMin((() => {
		init_build_module$4();
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/raw-handling/non-breaking-space-corrector.mjs
function nonBreakingSpaceCorrector(node) {
	if (node.nodeType !== node.TEXT_NODE) return;
	if (node.parentElement?.closest("pre")) return;
	const text = node;
	if (/^\u00a0+$/.test(text.data) && !getSibling(node, "previous") && !getSibling(node, "next")) return;
	text.data = text.data.replace(/^\u00a0+|\u00a0+$/g, " ");
}
function init_non_breaking_space_corrector() {
	return (init_non_breaking_space_corrector = __esmMin((() => {
		init_utils();
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/raw-handling/html-formatting-remover.mjs
function isFormattingSpace(character) {
	return character === " " || character === "\r" || character === "\n" || character === "	";
}
function htmlFormattingRemover(node) {
	if (node.nodeType !== node.TEXT_NODE) return;
	let parent = node;
	while (parent = parent.parentNode) if (parent.nodeType === parent.ELEMENT_NODE && parent.nodeName === "PRE") return;
	const textNode = node;
	let newData = textNode.data.replace(/[ \r\n\t]+/g, " ");
	if (newData[0] === " ") {
		const previousSibling = getSibling(node, "previous");
		if (!previousSibling || previousSibling.nodeName === "BR" || previousSibling.textContent.slice(-1) === " ") newData = newData.slice(1);
	}
	if (newData[newData.length - 1] === " ") {
		const nextSibling = getSibling(node, "next");
		if (!nextSibling || nextSibling.nodeName === "BR" || nextSibling.nodeType === nextSibling.TEXT_NODE && isFormattingSpace(nextSibling.textContent[0])) newData = newData.slice(0, -1);
	}
	if (!newData) node.parentNode.removeChild(node);
	else textNode.data = newData;
}
function init_html_formatting_remover() {
	return (init_html_formatting_remover = __esmMin((() => {
		init_utils();
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/raw-handling/format-space-corrector.mjs
function moveEdgeSpace(node, doc, isLeading) {
	const child = isLeading ? node.firstChild : node.lastChild;
	if (!child || child.nodeType !== node.TEXT_NODE) return;
	const text = child;
	const edgeIndex = isLeading ? 0 : text.data.length - 1;
	if (text.data[edgeIndex] !== " ") return;
	text.data = isLeading ? text.data.slice(1) : text.data.slice(0, -1);
	if (!text.data) node.removeChild(text);
	node.parentNode.insertBefore(doc.createTextNode(" "), isLeading ? node : node.nextSibling);
}
function formatSpaceCorrector(node, doc) {
	if (node.nodeType !== node.ELEMENT_NODE || !isPhrasingContent(node)) return;
	moveEdgeSpace(node, doc, true);
	moveEdgeSpace(node, doc, false);
}
function init_format_space_corrector() {
	return (init_format_space_corrector = __esmMin((() => {
		init_build_module$4();
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/raw-handling/br-remover.mjs
function brRemover(node) {
	if (node.nodeName !== "BR") return;
	if (getSibling(node, "next")) return;
	node.parentNode.removeChild(node);
}
function init_br_remover() {
	return (init_br_remover = __esmMin((() => {
		init_utils();
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/raw-handling/empty-paragraph-remover.mjs
function emptyParagraphRemover(node) {
	if (node.nodeName !== "P") return;
	if (node.hasChildNodes()) return;
	node.parentNode.removeChild(node);
}
//#endregion
//#region ../packages/blocks/build-module/api/raw-handling/slack-paragraph-corrector.mjs
function slackParagraphCorrector(node) {
	if (node.nodeName !== "SPAN") return;
	if (node.getAttribute("data-stringify-type") !== "paragraph-break") return;
	const parentNode = node.parentNode;
	parentNode.insertBefore(node.ownerDocument.createElement("br"), node);
	parentNode.insertBefore(node.ownerDocument.createElement("br"), node);
	parentNode.removeChild(node);
}
//#endregion
//#region ../packages/blocks/build-module/api/raw-handling/latex-to-math.mjs
function isLatexMathMode(text) {
	const lettersRegex = /[\p{L}\s]+/gu;
	let match;
	while (match = lettersRegex.exec(text)) {
		if (text[match.index - 1] === "{") continue;
		let sequence = match[0];
		if (text[match.index - 1] === "\\") sequence = sequence.replace(/^[a-zA-Z]+/, "");
		if (sequence.length < 6) continue;
		return false;
	}
	if (/\\[a-zA-Z]+\s*\{/g.test(text)) return true;
	if ([
		(t) => t.includes("^") && !t.startsWith("^"),
		(t) => [
			"=",
			"+",
			"-",
			"/",
			"*"
		].some((operator) => t.includes(operator)),
		(t) => /\\[a-zA-Z]+/g.test(t)
	].filter((clue) => clue(text)).length >= 2) return true;
	return false;
}
//#endregion
//#region ../packages/blocks/build-module/api/raw-handling/heading-transformer.mjs
function headingTransformer(node) {
	if (node.nodeType !== node.ELEMENT_NODE) return;
	const element = node;
	if (element.tagName === "P" && element.getAttribute("role") === "heading" && element.hasAttribute("aria-level")) {
		const level = parseInt(element.getAttribute("aria-level"), 10);
		if (level >= 1 && level <= 6) {
			const headingTag = `H${level}`;
			const newHeading = element.ownerDocument.createElement(headingTag);
			Array.from(element.attributes).forEach((attr) => {
				if (attr.name !== "role" && attr.name !== "aria-level") newHeading.setAttribute(attr.name, attr.value);
			});
			while (element.firstChild) newHeading.appendChild(element.firstChild);
			element.parentNode.replaceChild(newHeading, element);
		}
	}
}
//#endregion
//#region ../packages/blocks/build-module/api/raw-handling/paste-handler.mjs
function filterInlineHTML(HTML) {
	HTML = deepFilterHTML(HTML, [
		headRemover,
		googleDocsUIdRemover,
		msListIgnore,
		phrasingContentReducer,
		commentRemover
	]);
	HTML = removeInvalidHTML(HTML, getPhrasingContentSchema("paste"), true);
	HTML = deepFilterHTML(HTML, [
		nonBreakingSpaceCorrector,
		htmlFormattingRemover,
		formatSpaceCorrector,
		brRemover
	]);
	log("Processed inline HTML:\n\n", HTML);
	return HTML;
}
function pasteHandler({ HTML = "", plainText = "", mode = "AUTO", tagName }) {
	log("Received HTML (pasteHandler):\n\n", HTML);
	log("Received plain text (pasteHandler):\n\n", plainText);
	HTML = HTML.replace(/<meta[^>]+>/g, "");
	HTML = HTML.replace(/^\s*<html[^>]*>\s*<body[^>]*>(?:\s*<!--\s*StartFragment\s*-->)?/i, "");
	HTML = HTML.replace(/(?:<!--\s*EndFragment\s*-->\s*)?<\/body>\s*<\/html>\s*$/i, "");
	if (mode !== "INLINE") {
		const content = HTML ? HTML : plainText;
		if (content.indexOf("<!-- wp:") !== -1) {
			const parseResult = parse(content);
			if (!(parseResult.length === 1 && parseResult[0].name === "core/freeform")) return parseResult;
		}
	}
	HTML = HTML.normalize();
	HTML = deepFilterHTML(HTML, [slackParagraphCorrector]);
	const isPlainText = plainText && (!HTML || isPlain(HTML));
	if (isPlainText && isLatexMathMode(plainText)) return [createBlock$1("core/math", { latex: plainText })];
	if (isPlainText) {
		HTML = plainText;
		if (!/^\s+$/.test(plainText)) HTML = markdownConverter(HTML);
	}
	const pieces = shortcode_converter_default(HTML);
	const hasShortcodes = pieces.length > 1;
	if (isPlainText && !hasShortcodes) {
		if (mode === "AUTO" && plainText.indexOf("\n") === -1 && plainText.indexOf("<p>") !== 0 && HTML.indexOf("<p>") === 0) mode = "INLINE";
	}
	if (mode === "INLINE") return filterInlineHTML(HTML);
	if (mode === "AUTO" && !hasShortcodes && isInlineContent(HTML, tagName)) return filterInlineHTML(HTML);
	const phrasingContentSchema = getPhrasingContentSchema("paste");
	const blockContentSchema = getBlockContentSchema("paste");
	const blocks = pieces.map((piece) => {
		if (typeof piece !== "string") return piece;
		const filters = [
			googleDocsUIdRemover,
			msListConverter,
			headRemover,
			listReducer,
			imageCorrector,
			phrasingContentReducer,
			specialCommentConverter,
			commentRemover,
			iframeRemover,
			figureContentReducer,
			blockquoteNormaliser(),
			divNormaliser,
			headingTransformer
		];
		const schema = {
			...blockContentSchema,
			...phrasingContentSchema
		};
		piece = deepFilterHTML(piece, filters, blockContentSchema);
		piece = removeInvalidHTML(piece, schema, false);
		piece = normaliseBlocks(piece);
		piece = deepFilterHTML(piece, [
			nonBreakingSpaceCorrector,
			htmlFormattingRemover,
			formatSpaceCorrector,
			brRemover,
			emptyParagraphRemover
		], blockContentSchema);
		log("Processed HTML piece:\n\n", piece);
		return htmlToBlocks(piece, pasteHandler);
	}).flat().filter(Boolean);
	if (mode === "AUTO" && blocks.length === 1 && hasBlockSupport(blocks[0].name, "__unstablePasteTextInline", false)) {
		const trimRegex = /^[\n]+|[\n]+$/g;
		const trimmedPlainText = plainText.replace(trimRegex, "");
		if (trimmedPlainText !== "" && trimmedPlainText.indexOf("\n") === -1) return removeInvalidHTML(getBlockInnerHTML(blocks[0]), phrasingContentSchema, false).replace(trimRegex, "");
	}
	return blocks;
}
var log;
function init_paste_handler() {
	return (init_paste_handler = __esmMin((() => {
		init_build_module$4();
		init_html_to_blocks();
		init_registration();
		init_serializer();
		init_parser();
		init_normalise_blocks();
		init_special_comment_converter();
		init_comment_remover();
		init_is_inline_content();
		init_phrasing_content_reducer();
		init_ms_list_converter();
		init_list_reducer();
		init_image_corrector();
		init_blockquote_normaliser();
		init_div_normaliser();
		init_figure_content_reducer();
		init_shortcode_converter();
		init_markdown_converter();
		init_google_docs_uid_remover();
		init_non_breaking_space_corrector();
		init_html_formatting_remover();
		init_format_space_corrector();
		init_br_remover();
		init_utils();
		init_factory();
		log = (...args) => window?.console?.log?.(...args);
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/block-context/index.jsx
/**
* Component which merges passed value with current consumed block context.
*
* @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/block-context/README.md
*
* @param {BlockContextProviderProps} props
*/
function BlockContextProvider({ value, children }) {
	const context = (0, import_react$1.useContext)(Context);
	const nextValue = (0, import_react$1.useMemo)(() => ({
		...context,
		...value
	}), [context, value]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)(Context.Provider, {
		value: nextValue,
		children
	}, void 0, false, {
		fileName: _jsxFileName$8,
		lineNumber: 31,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime$8, _jsxFileName$8, Context;
function init_block_context() {
	return (init_block_context = __esmMin((() => {
		init_react();
		import_jsx_dev_runtime$8 = require_jsx_dev_runtime();
		_jsxFileName$8 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/block-context/index.jsx";
		Context = (0, import_react$1.createContext)({});
		Context.displayName = "BlockContext";
		BlockContextProvider.__docgenInfo = {
			"description": "Component which merges passed value with current consumed block context.\n\n@see https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/block-context/README.md\n\n@param {BlockContextProviderProps} props",
			"methods": [],
			"displayName": "BlockContextProvider"
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/block-list/private-block-context.js
var PrivateBlockContext;
function init_private_block_context() {
	return (init_private_block_context = __esmMin((() => {
		init_react();
		PrivateBlockContext = (0, import_react$1.createContext)({});
		PrivateBlockContext.displayName = "PrivateBlockContext";
	})))();
}
//#endregion
//#region ../packages/block-editor/src/utils/search-ranking.ts
/**
* Sanitizes the search input string.
*
* @param input The search input to normalize.
*
* @return The normalized search input.
*/
function normalizeString(input = "") {
	return (0, import_remove_accents.default)(input).replace(/^\//, "").toLowerCase();
}
/**
* Extracts words from an already normalized string.
*
* @param input The normalized string.
*
* @return Words, extracted from the input string.
*/
function extractWords(input) {
	return noCase(input, {
		splitRegexp,
		stripRegexp
	}).split(" ").filter(Boolean);
}
/**
* Converts the search term into a list of normalized terms.
*
* @param input The search term to normalize.
*
* @return The normalized list of search terms.
*/
function getNormalizedSearchTerms(input = "") {
	return extractWords(normalizeString(input));
}
/**
* Derives everything the ranking needs from a search input, once per search
* rather than once per item.
*
* @param searchInput The search input.
*
* @return The query, or null when the input holds no search terms.
*/
function parseQuery(searchInput) {
	const terms = getNormalizedSearchTerms(searchInput);
	return terms.length > 0 ? {
		terms,
		phrase: normalizeString(searchInput).trim()
	} : null;
}
/**
* Orders matches that landed in the same tier: the earlier the match, the
* higher the score. Always within `(0, 0.5]`, so it can never promote a match
* into the tier above.
*
* Match length is deliberately not a factor. Normalizing a score by the length
* of the value penalizes long titles, which ranks "Our Coffee" above "Coffee
* Roasting Guide" for the query "coffee".
*
* @param index Position of the match within the value.
*
* @return Score between 0 and 0.5.
*/
function getCloseness(index) {
	return 1 / (2 + index);
}
function toValues(value) {
	if (Array.isArray(value)) return value;
	return value === void 0 || value === null ? [] : [value];
}
/**
* Returns a field's values, normalized and tokenized.
*
* @param item  The item to read.
* @param field The field descriptor.
*
* @return The derived values.
*/
function getFieldValues(item, field) {
	let cache = fieldValueCache.get(item);
	if (!cache) {
		cache = /* @__PURE__ */ new Map();
		fieldValueCache.set(item, cache);
	}
	const derived = [];
	for (const value of toValues(field.get(item))) {
		let entry = cache.get(value);
		if (!entry) {
			const normalized = normalizeString(String(value));
			entry = {
				normalized,
				words: extractWords(normalized)
			};
			cache.set(value, entry);
		}
		if (entry.normalized) derived.push(entry);
	}
	return derived;
}
/**
* Ranks a single field value against the search phrase.
*
* @param value            The derived value.
* @param value.normalized The normalized value.
* @param value.words      The value's words.
* @param phrase           The normalized search phrase.
*
* @return The match, or null.
*/
function getValueMatch({ normalized, words }, phrase) {
	if (normalized === phrase) return {
		rank: SEARCH_RANK.EQUAL,
		closeness: getCloseness(0)
	};
	if (normalized.startsWith(phrase)) return {
		rank: SEARCH_RANK.STARTS_WITH,
		closeness: getCloseness(0)
	};
	const wordIndex = words.findIndex((word) => word.startsWith(phrase));
	if (wordIndex !== -1) return {
		rank: SEARCH_RANK.WORD_STARTS_WITH,
		closeness: getCloseness(wordIndex)
	};
	const index = normalized.indexOf(phrase);
	if (index !== -1) return {
		rank: SEARCH_RANK.CONTAINS,
		closeness: getCloseness(index)
	};
	return null;
}
/**
* Ranks one field of an item, capped at the field's `maxRank`.
*
* @param field  The field descriptor.
* @param values The field's derived values.
* @param phrase The normalized search phrase.
*
* @return The best match, or null.
*/
function getFieldMatch(field, values, phrase) {
	let best = null;
	for (const value of values) {
		const match = getValueMatch(value, phrase);
		if (match && (!best || match.rank > best.rank || match.rank === best.rank && match.closeness > best.closeness)) best = match;
	}
	if (!best) return null;
	const maxRank = field.maxRank ?? SEARCH_RANK.EQUAL;
	return best.rank > maxRank ? {
		...best,
		rank: maxRank
	} : best;
}
/**
* Checks whether every search term appears somewhere across the item's fields.
* This is what lets a multi-word query match words spread over the title,
* keywords and description.
*
* @param valuesByField The derived values of each field.
* @param terms         The normalized search terms.
*
* @return Whether every term matched.
*/
function hasEveryTerm(valuesByField, terms) {
	return terms.every((term) => valuesByField.some((values) => values.some((value) => value.words.some((word) => word.includes(term)))));
}
/**
* Ranks an item against an already parsed query.
*
* Each field is ranked on its own and the best one wins, rather than ranking
* one string built by concatenating every field. Concatenating makes a
* description hit indistinguishable from a title hit.
*
* @param item         The item to rank.
* @param query        The parsed query.
* @param query.terms  The normalized search terms.
* @param query.phrase The normalized search phrase.
* @param fields       The field descriptors, in priority order.
*
* @return The match, or null.
*/
function matchItem(item, { terms, phrase }, fields) {
	let best = null;
	const valuesByField = [];
	for (let fieldIndex = 0; fieldIndex < fields.length; fieldIndex++) {
		const field = fields[fieldIndex];
		const values = getFieldValues(item, field);
		valuesByField.push(values);
		const match = getFieldMatch(field, values, phrase);
		if (match && (!best || match.rank > best.rank)) best = {
			...match,
			fieldIndex
		};
	}
	if (best) return best;
	if (hasEveryTerm(valuesByField, terms)) return {
		rank: SEARCH_RANK.MATCHES,
		closeness: 0,
		fieldIndex: fields.length
	};
	return null;
}
/**
* Filters and ranks an item list against a search input.
*
* @param items            Item list.
* @param searchInput      Search input.
* @param options          Search options.
* @param options.fields   Field descriptors, in priority order. Each is
*                         `{ get, maxRank }`, where `get` returns a string or
*                         an array of strings.
* @param options.filter   Predicate applied before ranking.
* @param options.tiebreak Comparator applied last, when rank, field priority
*                         and closeness all tie.
*
* @return Filtered and ranked item list.
*/
function searchItems(items = [], searchInput = "", { fields = DEFAULT_FIELDS, filter, tiebreak } = {}) {
	const candidates = filter ? items.filter(filter) : items;
	const query = parseQuery(searchInput);
	if (!query) return candidates;
	const matches = [];
	for (const item of candidates) {
		const match = matchItem(item, query, fields);
		if (match) matches.push({
			item,
			...match
		});
	}
	matches.sort((a, b) => b.rank - a.rank || a.fieldIndex - b.fieldIndex || b.closeness - a.closeness || (tiebreak ? tiebreak(a.item, b.item) : 0));
	return matches.map(({ item }) => item);
}
var import_remove_accents, splitRegexp, stripRegexp, SEARCH_RANK, readDefaultField, DEFAULT_FIELDS, fieldValueCache;
function init_search_ranking() {
	return (init_search_ranking = __esmMin((() => {
		import_remove_accents = /* @__PURE__ */ __toESM(require_remove_accents());
		init_dist_es2015();
		splitRegexp = [/([\p{Ll}\p{Lo}\p{N}])([\p{Lu}\p{Lt}])/gu, /([\p{Lu}\p{Lt}])([\p{Lu}\p{Lt}][\p{Ll}\p{Lo}])/gu];
		stripRegexp = /(\p{C}|\p{P}|\p{S})+/giu;
		SEARCH_RANK = {
			NO_MATCH: 0,
			/** Every search term appears somewhere across the item's fields. */
			MATCHES: 1,
			/** The value contains the search phrase. */
			CONTAINS: 2,
			/** A word inside the value starts with the search phrase. */
			WORD_STARTS_WITH: 3,
			/** The value starts with the search phrase. */
			STARTS_WITH: 4,
			/** The value is the search phrase. */
			EQUAL: 5
		};
		readDefaultField = (key) => (item) => item[key];
		DEFAULT_FIELDS = [
			{ get: readDefaultField("title") },
			{
				get: readDefaultField("name"),
				maxRank: SEARCH_RANK.WORD_STARTS_WITH
			},
			{
				get: readDefaultField("keywords"),
				maxRank: SEARCH_RANK.WORD_STARTS_WITH
			},
			{
				get: readDefaultField("category"),
				maxRank: SEARCH_RANK.CONTAINS
			},
			{
				get: readDefaultField("description"),
				maxRank: SEARCH_RANK.CONTAINS
			}
		];
		fieldValueCache = /* @__PURE__ */ new WeakMap();
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/inserter/search-items.js
/**
* Core blocks are ranked above third-party ones, and a core block is ranked
* above its own variations. This only breaks ties between matches that are
* otherwise equally good, so it can never pull a weak match to the top.
*
* @param {Object} item Inserter item.
*
* @return {number} Priority, higher wins.
*/
function getCorePriority(item) {
	const name = item.name || "";
	if (!name.startsWith("core/")) return 0;
	return name === item.id ? 2 : 1;
}
var searchBlockItems;
function init_search_items() {
	return (init_search_items = __esmMin((() => {
		init_search_ranking();
		searchBlockItems = (items, categories, collections, searchInput) => {
			return searchItems(items, searchInput, {
				fields: [
					{ get: (item) => item.title },
					{
						get: (item) => item.name,
						maxRank: SEARCH_RANK.WORD_STARTS_WITH
					},
					{
						get: (item) => item.keywords,
						maxRank: SEARCH_RANK.WORD_STARTS_WITH
					},
					{
						get: (item) => categories.find(({ slug }) => slug === item.category)?.title,
						maxRank: SEARCH_RANK.CONTAINS
					},
					{
						get: (item) => collections[(item.name || "").split("/")[0]]?.title,
						maxRank: SEARCH_RANK.CONTAINS
					},
					{
						get: (item) => item.description,
						maxRank: SEARCH_RANK.CONTAINS
					}
				],
				tiebreak: (a, b) => getCorePriority(b) - getCorePriority(a)
			});
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/inserter/hooks/use-block-types-state.js
var FILTERED_OPTIONS, UNFILTERED_OPTIONS, useBlockTypesState;
function init_use_block_types_state() {
	return (init_use_block_types_state = __esmMin((() => {
		init_build_module$1();
		init_build_module$9();
		init_react();
		init_store$1();
		init_utils$2();
		FILTERED_OPTIONS = { [isFiltered]: true };
		UNFILTERED_OPTIONS = { [isFiltered]: false };
		useBlockTypesState = (rootClientId, onInsert, isQuick) => {
			const options = isQuick ? FILTERED_OPTIONS : UNFILTERED_OPTIONS;
			const items = useSelect((select) => select(store$1).getInserterItems(rootClientId, options), [rootClientId, options]);
			const [categories, collections] = useSelect((select) => {
				const { getCategories, getCollections } = select(store$2);
				return [getCategories(), getCollections()];
			}, []);
			return [
				items,
				categories,
				collections,
				(0, import_react$1.useCallback)(({ name, initialAttributes, innerBlocks, innerContent, syncStatus, content }, shouldFocusBlock) => {
					onInsert(syncStatus === "unsynced" ? parse(content, { __unstableSkipMigrationLogs: true }) : createBlock$1(name, initialAttributes, createBlocksFromInnerBlocksTemplate(innerBlocks), innerContent), void 0, shouldFocusBlock);
				}, [onInsert])
			];
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/utils/order-inserter-block-items.ts
var orderInserterBlockItems;
function init_order_inserter_block_items() {
	return (init_order_inserter_block_items = __esmMin((() => {
		orderInserterBlockItems = (items, priority) => {
			if (!priority) return items;
			items.sort(({ id: aName }, { id: bName }) => {
				let aIndex = priority.indexOf(aName);
				let bIndex = priority.indexOf(bName);
				if (aIndex < 0) aIndex = priority.length;
				if (bIndex < 0) bIndex = priority.length;
				return aIndex - bIndex;
			});
			return items;
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/provider/block-refs-provider.jsx
function BlockRefsProvider({ children }) {
	const value = (0, import_react$1.useMemo)(() => ({
		refsMap: observableMap(),
		eventHandlers: /* @__PURE__ */ new Map()
	}), []);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$7.jsxDEV)(BlockRefs.Provider, {
		value,
		children
	}, void 0, false, {
		fileName: _jsxFileName$7,
		lineNumber: 20,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$7, _jsxFileName$7, BlockRefs;
function init_block_refs_provider() {
	return (init_block_refs_provider = __esmMin((() => {
		init_react();
		import_jsx_dev_runtime$7 = require_jsx_dev_runtime();
		_jsxFileName$7 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/provider/block-refs-provider.jsx";
		BlockRefs = (0, import_react$1.createContext)({
			refsMap: observableMap(),
			eventHandlers: /* @__PURE__ */ new Map()
		});
		BlockRefs.displayName = "BlockRefsContext";
		BlockRefsProvider.__docgenInfo = {
			"description": "",
			"methods": [],
			"displayName": "BlockRefsProvider"
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/utils/pasting.ts
/**
* Normalizes a given string of HTML to remove the Windows-specific "Fragment"
* comments and any preceding and trailing content.
*
* @param html the html to be normalized
* @return the normalized html
*/
function removeWindowsFragments(html) {
	const startIdx = html.indexOf("<!--StartFragment-->");
	if (startIdx > -1) html = html.substring(startIdx + 20);
	else return html;
	const endIdx = html.indexOf("<!--EndFragment-->");
	if (endIdx > -1) html = html.substring(0, endIdx);
	return html;
}
/**
* Removes the charset meta tag inserted by Chromium.
* See:
* - https://github.com/WordPress/gutenberg/issues/33585
* - https://bugs.chromium.org/p/chromium/issues/detail?id=1264616#c4
*
* @param html the html to be stripped of the meta tag.
* @return the cleaned html
*/
function removeCharsetMetaTag(html) {
	const metaTag = `<meta charset='utf-8'>`;
	if (html.startsWith(metaTag)) return html.slice(metaTag.length);
	return html;
}
function getPasteEventData({ clipboardData }) {
	let plainText = "";
	let html = "";
	try {
		plainText = clipboardData.getData("text/plain");
		html = clipboardData.getData("text/html");
	} catch {
		return;
	}
	html = removeWindowsFragments(html);
	html = removeCharsetMetaTag(html);
	const files = getFilesFromDataTransfer(clipboardData);
	if (files.length && !shouldDismissPastedFiles(files, html)) return { files };
	return {
		html,
		plainText,
		files: []
	};
}
/**
* Given a collection of DataTransfer files and HTML and plain text strings,
* determine whether the files are to be dismissed in favor of the HTML.
*
* Certain office-type programs, like Microsoft Word or Apple Numbers,
* will, upon copy, generate a screenshot of the content being copied and
* attach it to the clipboard alongside the actual rich text that the user
* sought to copy. In those cases, we should let Gutenberg handle the rich text
* content and not the screenshot, since this allows Gutenberg to insert
* meaningful blocks, like paragraphs, lists or even tables.
*
* @param files File objects obtained from a paste event
* @param html  HTML content obtained from a paste event
* @return      True if the files should be dismissed
*/
function shouldDismissPastedFiles(files, html) {
	if (html && files?.length === 1 && files[0].type.indexOf("image/") === 0) {
		if (html.match(/<\s*img\b/gi)?.length !== 1) return true;
		if (html.match(/<\s*img\b[^>]*\bsrc="file:\/\//i)) return true;
	}
	return false;
}
function init_pasting() {
	return (init_pasting = __esmMin((() => {
		init_build_module$4();
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/rich-text/format-edit.jsx
function Edit({ onChange, onFocus, value, forwardedRef, settings, isVisible }) {
	const { name, edit: EditFunction, [usesContextKey]: usesContext } = settings;
	const blockContext = (0, import_react$1.useContext)(Context);
	const context = (0, import_react$1.useMemo)(() => {
		return usesContext ? Object.fromEntries(Object.entries(blockContext).filter(([key]) => usesContext.includes(key))) : DEFAULT_BLOCK_CONTEXT;
	}, [usesContext, blockContext]);
	if (!EditFunction) return null;
	const activeFormat = getActiveFormat(value, name);
	const isActive = activeFormat !== void 0;
	const activeObject = getActiveObject(value);
	const isObjectActive = activeObject !== void 0 && activeObject.type === name;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(EditFunction, {
		isActive,
		isVisible,
		activeAttributes: isActive ? activeFormat.attributes || {} : {},
		isObjectActive,
		activeObjectAttributes: isObjectActive ? activeObject.attributes || {} : {},
		value,
		onChange,
		onFocus,
		contentRef: forwardedRef,
		context
	}, isObjectActive ? `${name}-${value.start}` : name, false, {
		fileName: _jsxFileName$6,
		lineNumber: 47,
		columnNumber: 3
	}, this);
}
function FormatEdit({ formatTypes, ...props }) {
	return formatTypes.map((settings) => /* @__PURE__ */ (0, import_react.createElement)(Edit, {
		settings,
		...props,
		key: settings.name,
		__self: this,
		__source: {
			fileName: _jsxFileName$6,
			lineNumber: 70,
			columnNumber: 3
		}
	}));
}
var import_jsx_dev_runtime$6, import_react, _jsxFileName$6, DEFAULT_BLOCK_CONTEXT, usesContextKey;
function init_format_edit() {
	return (init_format_edit = __esmMin((() => {
		init_build_module$2();
		init_react();
		init_block_context();
		import_jsx_dev_runtime$6 = require_jsx_dev_runtime();
		import_react = require_react();
		_jsxFileName$6 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/rich-text/format-edit.jsx";
		DEFAULT_BLOCK_CONTEXT = {};
		usesContextKey = Symbol("usesContext");
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/rich-text/field-format-settings.js
function setFieldFormatSettings(clientId, attributeKey, value) {
	if (!settings.has(clientId)) settings.set(clientId, /* @__PURE__ */ new Map());
	settings.get(clientId).set(attributeKey, value);
}
function deleteFieldFormatSettings(clientId, attributeKey) {
	const fields = settings.get(clientId);
	fields?.delete(attributeKey);
	if (fields?.size === 0) settings.delete(clientId);
}
function getFieldFormatSettings(clientId, attributeKey) {
	return settings.get(clientId)?.get(attributeKey);
}
var settings;
function init_field_format_settings() {
	return (init_field_format_settings = __esmMin((() => {
		settings = /* @__PURE__ */ new Map();
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/block-controls/groups.js
var groups;
function init_groups() {
	return (init_groups = __esmMin((() => {
		init_slot_fill();
		groups = {
			default: createSlotFill("BlockControls"),
			block: createSlotFill("BlockControlsBlock"),
			inline: createSlotFill("BlockFormatControls"),
			other: createSlotFill("BlockControlsOther"),
			parent: createSlotFill("BlockControlsParent"),
			"style-state": createSlotFill("BlockControlsStyleState")
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/block-controls/hook.js
function useBlockControlsFill(group, shareWithChildBlocks) {
	const context = useBlockEditContext();
	if (context[mayDisplayControlsKey]) return groups[group]?.Fill;
	if (context[mayDisplayParentControlsKey] && shareWithChildBlocks) return groups.parent.Fill;
	return null;
}
function init_hook$1() {
	return (init_hook$1 = __esmMin((() => {
		init_groups();
		init_context$1();
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/block-controls/fill.jsx
function BlockControlsFill({ group = "default", controls, children, __experimentalShareWithChildBlocks = false }) {
	const Fill = useBlockControlsFill(group, __experimentalShareWithChildBlocks);
	if (!Fill) return null;
	const innerMarkup = /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(import_jsx_dev_runtime$5.Fragment, { children: [group === "default" && /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(toolbar_group_default, { controls }, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 23,
		columnNumber: 29
	}, this), children] }, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 22,
		columnNumber: 3
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(style_provider_default, {
		document,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(Fill, { children: (fillProps) => {
			const { forwardedContext = [] } = fillProps;
			return forwardedContext.reduce((inner, [Provider, props]) => /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(Provider, {
				...props,
				children: inner
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 38,
				columnNumber: 8
			}, this), innerMarkup);
		} }, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 31,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 29,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$5, _jsxFileName$5;
function init_fill() {
	return (init_fill = __esmMin((() => {
		init_style_provider(), init_toolbar_group();
		init_hook$1();
		import_jsx_dev_runtime$5 = require_jsx_dev_runtime();
		_jsxFileName$5 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/block-controls/fill.jsx";
		BlockControlsFill.__docgenInfo = {
			"description": "",
			"methods": [],
			"displayName": "BlockControlsFill",
			"props": {
				"group": {
					"defaultValue": {
						"value": "'default'",
						"computed": false
					},
					"required": false
				},
				"__experimentalShareWithChildBlocks": {
					"defaultValue": {
						"value": "false",
						"computed": false
					},
					"required": false
				}
			}
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/block-controls/slot.jsx
function BlockControlsSlot({ group = "default", ...props }) {
	const toolbarState = (0, import_react$1.useContext)(toolbar_context_default);
	const contextState = (0, import_react$1.useContext)(ComponentsContext);
	const fillProps = (0, import_react$1.useMemo)(() => ({ forwardedContext: [[toolbar_context_default.Provider, { value: toolbarState }], [ComponentsContext.Provider, { value: contextState }]] }), [toolbarState, contextState]);
	const slotFill = groups[group];
	const fills = useSlotFills(slotFill.name);
	if (!slotFill) {
		warning(`Unknown BlockControls group "${group}" provided.`);
		return null;
	}
	if (!fills?.length) return null;
	const { Slot } = slotFill;
	const slot = /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(Slot, {
		...props,
		bubblesVirtually: true,
		fillProps
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 40,
		columnNumber: 15
	}, this);
	if (group === "default") return slot;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(toolbar_group_default, { children: slot }, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 46,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime$4, _jsxFileName$4, ComponentsContext;
function init_slot() {
	return (init_slot = __esmMin((() => {
		init_react();
		init_private_apis$2(), init_toolbar_context(), init_toolbar_group(), init_use_slot_fills();
		init_build_module$7();
		init_groups();
		init_lock_unlock$2();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/block-controls/slot.jsx";
		({ComponentsContext} = unlock$2(privateApis$2));
		BlockControlsSlot.__docgenInfo = {
			"description": "",
			"methods": [],
			"displayName": "BlockControlsSlot",
			"props": { "group": {
				"defaultValue": {
					"value": "'default'",
					"computed": false
				},
				"required": false
			} }
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/block-controls/index.jsx
var import_jsx_dev_runtime$3, _jsxFileName$3, BlockControls, BlockFormatControls;
function init_block_controls() {
	return (init_block_controls = __esmMin((() => {
		init_fill();
		init_slot();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/block-controls/index.jsx";
		BlockControls = BlockControlsFill;
		BlockControls.Slot = BlockControlsSlot;
		BlockFormatControls = (props) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(BlockControlsFill, {
				group: "inline",
				...props
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 10,
				columnNumber: 9
			}, void 0);
		};
		BlockFormatControls.Slot = function Slot(props) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(BlockControlsSlot, {
				group: "inline",
				...props
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 13,
				columnNumber: 9
			}, this);
		};
		BlockFormatControls.__docgenInfo = {
			"description": "",
			"methods": [{
				"name": "Slot",
				"docblock": null,
				"modifiers": ["static"],
				"params": [{
					"name": "props",
					"optional": false,
					"type": null
				}],
				"returns": null
			}],
			"displayName": "BlockFormatControls"
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/rich-text/format-toolbar/index.jsx
var import_jsx_dev_runtime$2, _jsxFileName$2, POPOVER_PROPS, FormatToolbar;
function init_format_toolbar() {
	return (init_format_toolbar = __esmMin((() => {
		init_clsx();
		init_build_module$5();
		init_toolbar_item(), init_dropdown_menu(), init_slot_fill();
		init_build_module$11();
		init_sorting();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/rich-text/format-toolbar/index.jsx";
		POPOVER_PROPS = { placement: "bottom-start" };
		FormatToolbar = () => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(import_jsx_dev_runtime$2.Fragment, { children: [[
				"bold",
				"italic",
				"link",
				"unknown"
			].map((format) => /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Slot, { name: `RichText.ToolbarControls.${format}` }, format, false, {
				fileName: _jsxFileName$2,
				lineNumber: 15,
				columnNumber: 5
			}, void 0)), /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Slot, {
				name: "RichText.ToolbarControls",
				children: (fills) => {
					if (!fills.length) return null;
					const hasActive = fills.map(([{ props }]) => props).some(({ isActive }) => isActive);
					return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(toolbar_item_default, { children: (toggleProps) => /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(dropdown_menu_default, {
						icon: chevron_down_default,
						label: __("More"),
						toggleProps: {
							...toggleProps,
							className: clsx(toggleProps.className, { "is-pressed": hasActive }),
							description: __("Displays more block tools")
						},
						controls: orderBy(fills.map(([{ props }]) => props), "title"),
						popoverProps: POPOVER_PROPS
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 34,
						columnNumber: 9
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 32,
						columnNumber: 7
					}, void 0);
				}
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 20,
				columnNumber: 4
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 13,
				columnNumber: 3
			}, void 0);
		};
		FormatToolbar.__docgenInfo = {
			"description": "",
			"methods": [],
			"displayName": "FormatToolbar"
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/navigable-toolbar/index.jsx
function hasOnlyToolbarItem(elements) {
	const dataProp = "toolbarItem";
	return !elements.some((element) => !(dataProp in element.dataset));
}
function getAllFocusableToolbarItemsIn(container) {
	return Array.from(container.querySelectorAll("[data-toolbar-item]:not([disabled])"));
}
function hasFocusWithin(container) {
	return container.contains(container.ownerDocument.activeElement);
}
function focusFirstTabbableIn(container) {
	const [firstTabbable] = focus.tabbable.find(container);
	if (firstTabbable) firstTabbable.focus({ preventScroll: true });
}
function useIsAccessibleToolbar(toolbarRef) {
	const [isAccessibleToolbar, setIsAccessibleToolbar] = (0, import_react$1.useState)(true);
	const determineIsAccessibleToolbar = (0, import_react$1.useCallback)(() => {
		const tabbables = focus.tabbable.find(toolbarRef.current).filter((element) => !element.hasAttribute("data-base-ui-focus-guard"));
		if (tabbables.length === 0) return;
		const onlyToolbarItem = hasOnlyToolbarItem(tabbables);
		if (!onlyToolbarItem) deprecated("Using custom components as toolbar controls", {
			since: "5.6",
			alternative: "ToolbarItem, ToolbarButton or ToolbarDropdownMenu components",
			link: "https://developer.wordpress.org/block-editor/components/toolbar-button/#inside-blockcontrols"
		});
		setIsAccessibleToolbar(onlyToolbarItem);
	}, [toolbarRef]);
	(0, import_react$1.useLayoutEffect)(() => {
		const observer = new window.MutationObserver(determineIsAccessibleToolbar);
		observer.observe(toolbarRef.current, {
			childList: true,
			subtree: true
		});
		return () => observer.disconnect();
	}, [
		determineIsAccessibleToolbar,
		isAccessibleToolbar,
		toolbarRef
	]);
	return isAccessibleToolbar;
}
function useToolbarFocus({ toolbarRef, focusOnMount, isAccessibleToolbar, defaultIndex, onIndexChange, shouldUseKeyboardFocusShortcut, focusEditorOnEscape }) {
	const [initialFocusOnMount] = (0, import_react$1.useState)(focusOnMount);
	const [initialIndex] = (0, import_react$1.useState)(defaultIndex);
	const { getLastFocus, getSelectedBlockClientId } = unlock$2(useSelect(store$1));
	const { refsMap } = (0, import_react$1.useContext)(BlockRefs);
	const focusToolbar = (0, import_react$1.useCallback)(() => {
		focusFirstTabbableIn(toolbarRef.current);
	}, [toolbarRef]);
	const focusToolbarViaShortcut = () => {
		if (shouldUseKeyboardFocusShortcut) focusToolbar();
	};
	useShortcut("core/block-editor/focus-toolbar", focusToolbarViaShortcut);
	(0, import_react$1.useEffect)(() => {
		if (initialFocusOnMount) focusToolbar();
	}, [
		isAccessibleToolbar,
		initialFocusOnMount,
		focusToolbar
	]);
	(0, import_react$1.useEffect)(() => {
		const navigableToolbarRef = toolbarRef.current;
		let raf = 0;
		if (!initialFocusOnMount && !hasFocusWithin(navigableToolbarRef)) raf = window.requestAnimationFrame(() => {
			const items = getAllFocusableToolbarItemsIn(navigableToolbarRef);
			const index = initialIndex || 0;
			if (items[index] && hasFocusWithin(navigableToolbarRef)) items[index].focus({ preventScroll: true });
		});
		return () => {
			window.cancelAnimationFrame(raf);
			if (!onIndexChange || !navigableToolbarRef) return;
			onIndexChange(getAllFocusableToolbarItemsIn(navigableToolbarRef).findIndex((item) => item.tabIndex === 0));
		};
	}, [
		initialIndex,
		initialFocusOnMount,
		onIndexChange,
		toolbarRef
	]);
	/**
	* Handles returning focus to the block editor canvas when pressing escape.
	*/
	(0, import_react$1.useEffect)(() => {
		if (!focusEditorOnEscape) return;
		const navigableToolbar = toolbarRef.current;
		const handleKeyDown = (event) => {
			if (event.keyCode !== 27) return;
			const target = getLastFocus()?.current ?? refsMap.get(getSelectedBlockClientId());
			if (target) {
				event.preventDefault();
				target.focus();
			}
		};
		navigableToolbar.addEventListener("keydown", handleKeyDown);
		return () => {
			navigableToolbar.removeEventListener("keydown", handleKeyDown);
		};
	}, [
		focusEditorOnEscape,
		getLastFocus,
		getSelectedBlockClientId,
		refsMap,
		toolbarRef
	]);
}
function NavigableToolbar({ children, focusOnMount, focusEditorOnEscape = false, shouldUseKeyboardFocusShortcut = true, __experimentalInitialIndex: initialIndex, __experimentalOnIndexChange: onIndexChange, orientation = "horizontal", ...props }) {
	const toolbarRef = (0, import_react$1.useRef)();
	const isAccessibleToolbar = useIsAccessibleToolbar(toolbarRef);
	useToolbarFocus({
		toolbarRef,
		focusOnMount,
		defaultIndex: initialIndex,
		onIndexChange,
		isAccessibleToolbar,
		shouldUseKeyboardFocusShortcut,
		focusEditorOnEscape
	});
	if (isAccessibleToolbar) return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(toolbar_default, {
		label: props["aria-label"],
		ref: toolbarRef,
		orientation,
		...props,
		children
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 252,
		columnNumber: 4
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(menu_default, {
		orientation,
		role: "toolbar",
		ref: toolbarRef,
		...props,
		children
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 264,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_navigable_toolbar() {
	return (init_navigable_toolbar = __esmMin((() => {
		init_menu(), init_toolbar();
		init_react();
		init_build_module$9();
		init_build_module$3();
		init_build_module$4();
		init_build_module$8();
		init_build_module$6();
		init_store$1();
		init_block_refs_provider();
		init_lock_unlock$2();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/navigable-toolbar/index.jsx";
		NavigableToolbar.__docgenInfo = {
			"description": "",
			"methods": [],
			"displayName": "NavigableToolbar",
			"props": {
				"focusEditorOnEscape": {
					"defaultValue": {
						"value": "false",
						"computed": false
					},
					"required": false
				},
				"shouldUseKeyboardFocusShortcut": {
					"defaultValue": {
						"value": "true",
						"computed": false
					},
					"required": false
				},
				"orientation": {
					"defaultValue": {
						"value": "'horizontal'",
						"computed": false
					},
					"required": false
				}
			}
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/rich-text/format-toolbar-container.jsx
function InlineToolbar({ popoverAnchor }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(popover_default, {
		placement: "top",
		focusOnMount: false,
		anchor: popoverAnchor,
		className: "block-editor-rich-text__inline-format-toolbar",
		__unstableSlotName: "block-toolbar",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigableToolbar, {
			className: "block-editor-rich-text__inline-format-toolbar-group",
			"aria-label": __("Format tools"),
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(toolbar_group_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormatToolbar, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 22,
				columnNumber: 6
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 21,
				columnNumber: 5
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 16,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 9,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, FormatToolbarContainer;
function init_format_toolbar_container() {
	return (init_format_toolbar_container = __esmMin((() => {
		init_build_module$5();
		init_popover(), init_toolbar_group();
		init_block_controls();
		init_format_toolbar();
		init_navigable_toolbar();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/rich-text/format-toolbar-container.jsx";
		FormatToolbarContainer = ({ inline, editableContentElement }) => {
			if (inline) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineToolbar, { popoverAnchor: editableContentElement }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 31,
				columnNumber: 10
			}, void 0);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockControls, {
				group: "inline",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormatToolbar, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 37,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 36,
				columnNumber: 3
			}, void 0);
		};
		FormatToolbarContainer.__docgenInfo = {
			"description": "",
			"methods": [],
			"displayName": "FormatToolbarContainer"
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/rich-text/utils.js
function addActiveFormats(value, activeFormats) {
	if (activeFormats?.length) {
		let index = value.formats.length;
		while (index--) value.formats[index] = [...activeFormats, ...value.formats[index] || []];
	}
}
/**
* Get the multiline tag based on the multiline prop.
*
* @param {?(string|boolean)} multiline The multiline prop.
*
* @return {string | undefined} The multiline tag.
*/
function getMultilineTag(multiline) {
	if (multiline !== true && multiline !== "p" && multiline !== "li") return;
	return multiline === true ? "p" : multiline;
}
function isEmpty(value) {
	return !value || value.length === 0;
}
function getAllowedFormats({ allowedFormats, disableFormats }) {
	if (disableFormats) return getAllowedFormats.EMPTY_ARRAY;
	return allowedFormats;
}
/**
* The formats, replacements and text of a rich text attribute value, which is
* rich text data or an HTML string. Spreading rich text data would lose them:
* they are getters.
*
* @param {unknown} value Attribute value.
*
* @return {import('@wordpress/rich-text').RichTextValue} Rich text value
*                                                       without a selection.
*/
function toRecord(value) {
	if (value instanceof RichTextData) {
		const { formats, replacements, text } = value;
		return {
			formats,
			replacements,
			text
		};
	}
	return create({ html: value ? String(value) : "" });
}
function init_utils$1() {
	return (init_utils$1 = __esmMin((() => {
		init_build_module$2();
		getAllowedFormats.EMPTY_ARRAY = [];
	})))();
}
//#endregion
export { init_list_reducer as $, searchBlockItems as A, init_is_empty as At, init_paste_handler as B, BlockRefsProvider as C, init_is_collapsed as Ct, init_use_block_types_state as D, init_get_active_format as Dt, orderInserterBlockItems as E, getActiveFormat as Et, PrivateBlockContext as F, getRectangleFromRange as Ft, init_shortcode_converter as G, deepFilterHTML as H, init_private_block_context as I, init_get_rectangle_from_range as It, next as J, shortcode_converter_default as K, BlockContextProvider as L, init_private_apis as Lt, init_search_ranking as M, init_replace_tag as Mt, normalizeString as N, init_unwrap as Nt, useBlockTypesState as O, init_remove_invalid_html as Ot, searchItems as P, init_replace as Pt, init_blockquote_normaliser as Q, Context as R, privateApis$1 as Rt, BlockRefs as S, removeFormat as St, init_order_inserter_block_items as T, init_get_active_object as Tt, getBlockContentSchema as U, pasteHandler as V, init_utils as W, init_figure_content_reducer as X, figureContentReducer as Y, blockquoteNormaliser as Z, FormatEdit as _, init_split as _t, isEmpty as a, htmlToBlocks as at, getPasteEventData as b, slice as bt, init_format_toolbar_container as c, toolbar_default as ct, BlockControls as d, init_private_apis$1 as dt, listReducer as et, init_block_controls as f, privateApis as ft, setFieldFormatSettings as g, init_to_dom as gt, init_field_format_settings as h, ownsSelection as ht, init_utils$1 as i, normaliseBlocks as it, SEARCH_RANK as j, init_wrap as jt, init_search_items as k, init_phrasing_content as kt, NavigableToolbar as l, init_use_slot_fills as lt, getFieldFormatSettings as m, init_owns_selection as mt, getAllowedFormats as n, specialCommentConverter as nt, toRecord as o, init_html_to_blocks as ot, deleteFieldFormatSettings as p, init_hook as pt, init_build_module as q, getMultilineTag as r, init_normalise_blocks as rt, FormatToolbarContainer as s, init_toolbar as st, addActiveFormats as t, init_special_comment_converter as tt, init_navigable_toolbar as u, useSlotFills as ut, init_format_edit as v, split as vt, init_block_refs_provider as w, isCollapsed as wt, init_pasting as x, init_remove_format as xt, usesContextKey as y, init_slice as yt, init_block_context as z };
