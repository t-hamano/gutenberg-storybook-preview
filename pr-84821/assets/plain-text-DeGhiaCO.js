import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react_dom } from "./react-dom-Cvcx0Gdb.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { $t as cloneBlock, Bn as remove, Hn as insert, Jn as getTextContent, Kn as create, Pt as children_default, Rn as init_build_module, Sn as getDefaultBlockName, St as init_build_module$1, Zn as toHTMLString, _n as getBlockBindingsSource, an as getBlockTransforms, d as orderBy, er as getActiveFormats, n as store, nn as createBlocksFromInnerBlocksTemplate, nr as createElement, o as init_selection, rn as findTransform, s as retrieveSelectedAttribute, t as init_store, tn as createBlock, u as init_sorting, un as store$1, vn as getBlockSupport } from "./store-BZXP8rvF.js";
import { n as serialize_default, t as init_serialize } from "./serialize-FHFXmm0_.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { o as hasFilter, r as applyFilters, s as init_build_module$2 } from "./build-module-CSjwTo7p.js";
import { n as init_build_module$3, t as deprecated } from "./build-module-BWCORUbm.js";
import { n as init_debounce, t as debounce } from "./debounce-ga5YZOAF.js";
import { A as searchBlockItems, D as init_use_block_types_state, E as orderInserterBlockItems, F as PrivateBlockContext, Ft as getRectangleFromRange, I as init_private_block_context, Lt as init_private_apis$1, O as useBlockTypesState, R as Context, Rt as privateApis$1, T as init_order_inserter_block_items, V as pasteHandler, _ as FormatEdit, a as isEmpty$1, b as getPasteEventData, bt as slice, c as init_format_toolbar_container, ft as privateApis, g as setFieldFormatSettings, h as init_field_format_settings, ht as ownsSelection$2, i as init_utils, k as init_search_items, n as getAllowedFormats, p as deleteFieldFormatSettings, r as getMultilineTag, s as FormatToolbarContainer, t as addActiveFormats, v as init_format_edit, vt as split, wt as isCollapsed, x as init_pasting, z as init_block_context } from "./utils-vihKJ7OY.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as init_build_module$4 } from "./build-module-Bh_sM-WV.js";
import { Nn as init_block_edit } from "./utils-B56l7vEX.js";
import { n as useRefEffect, t as init_use_ref_effect } from "./use-ref-effect-DguFui9C.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as useEvent, t as init_use_event } from "./use-event-BTRhHipl.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { n as __, r as _n, t as init_build_module$5 } from "./build-module-v04us4E2.js";
import { n as isAppleOS } from "./platform-BaBec-sY.js";
import { n as withIgnoreIMEEvents } from "./with-ignore-ime-events-BFiL1WqY.js";
import { i as isKeyboardEvent, r as init_build_module$6 } from "./build-module-LJKyBiy6.js";
import { n as usePrevious, t as init_use_previous } from "./use-previous-BYjjquxs.js";
import { i as useSelect } from "./dispatch-abVPMST3.js";
import { n as useDebounce, t as init_use_debounce } from "./use-debounce-D2hjAck8.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { m as init_toolbar_button } from "./build-module-CTfGx7iW.js";
import { r as speak, t as init_build_module$7 } from "./build-module-DsAeWnrG.js";
import { r as require_es6 } from "./emotion-css.development.esm-DHgdGHQy.js";
import { n as init_component, t as component_default } from "./component-6Aui1e4Q.js";
import { a as init_lock_unlock, o as unlock } from "./private-apis-C5gQmVAU.js";
import { n as button_default, r as init_button } from "./button-BxEkUQAF.js";
import { n as useRegistry } from "./use-registry-CfP_kF8b.js";
import { l as use_dispatch_default } from "./build-module-IVKpgS6J.js";
import { n as init_build_module$8 } from "./build-module-BFlpD7Tf.js";
import { t as require_remove_accents } from "./remove-accents-FMNXhR5L.js";
import { n as init_strings, t as escapeRegExp } from "./strings-ogU8BBr-.js";
import { n as popover_default, t as init_popover } from "./popover-CLzPeoL7.js";
import { n as init_block_icon, t as block_icon_default } from "./block-icon-CiZlYMky.js";
import { a as init_context, c as isPreviewModeKey, f as useBlockEditContext, i as blockEditingModeKey, r as blockBindingsKey, s as isMultiSelectedKey } from "./context-D9nyNqxi.js";
import { n as isURL } from "./is-url-proZSHkf.js";
import { r as unlock$1, t as init_lock_unlock$1 } from "./lock-unlock-DigY61P5.js";
import { n as init_content, r as valueToHTMLString, t as Content } from "./content-Cq1s0-aV.js";
//#region ../packages/rich-text/build-module/is-empty.mjs
function isEmpty({ text }) {
	return text.length === 0;
}
//#endregion
//#region ../packages/rich-text/build-module/hook/use-anchor.mjs
function getFormatElement(range, editableContentElement, tagName, className) {
	let element = range.startContainer;
	if (element.nodeType === element.TEXT_NODE && element instanceof window.Text && range.startOffset === element.length && element.nextSibling) {
		element = element.nextSibling;
		while (element.firstChild) element = element.firstChild;
	}
	if (element.nodeType !== element.ELEMENT_NODE) {
		if (!element.parentElement) return;
		element = element.parentElement;
	}
	if (element === editableContentElement) return;
	if (!editableContentElement.contains(element)) return;
	const selector = tagName + (className ? "." + className : "");
	if (!selector) return;
	if (!(element instanceof window.HTMLElement)) return;
	let closestElement = element;
	while (closestElement && closestElement !== editableContentElement) {
		if (closestElement.matches(selector)) return closestElement;
		closestElement = closestElement.parentElement;
	}
}
function createVirtualAnchorElement(range, editableContentElement) {
	return {
		contextElement: editableContentElement,
		getBoundingClientRect() {
			if (editableContentElement.contains(range.startContainer)) return getRectangleFromRange(range) ?? range.getBoundingClientRect();
			return editableContentElement.getBoundingClientRect();
		}
	};
}
function getAnchor(editableContentElement, tagName, className) {
	if (!editableContentElement) return;
	const { ownerDocument } = editableContentElement;
	const { defaultView } = ownerDocument;
	const selection = defaultView?.getSelection();
	if (!selection) return;
	if (!selection.rangeCount) return;
	const range = selection.getRangeAt(0);
	if (!range || !range.startContainer) return;
	if (!tagName && !className) return createVirtualAnchorElement(range, editableContentElement);
	return getFormatElement(range, editableContentElement, tagName, className) ?? createVirtualAnchorElement(range, editableContentElement);
}
function useAnchor({ editableContentElement, settings }) {
	const { tagName, className } = settings ?? DEFAULT_SETTINGS;
	const isActive = !!(settings && "isActive" in settings && settings.isActive);
	const [anchor, setAnchor] = (0, import_react.useState)(() => getAnchor(editableContentElement, tagName, className ?? ""));
	const wasActive = usePrevious(isActive);
	(0, import_react.useLayoutEffect)(() => {
		if (!editableContentElement) return;
		function callback() {
			setAnchor(getAnchor(editableContentElement, tagName, className ?? ""));
		}
		function attach() {
			ownerDocument.addEventListener("selectionchange", callback);
		}
		function detach() {
			ownerDocument.removeEventListener("selectionchange", callback);
		}
		const { ownerDocument } = editableContentElement;
		if (ownsSelection$2(editableContentElement) || !wasActive && isActive || wasActive && !isActive) {
			setAnchor(getAnchor(editableContentElement, tagName, className ?? ""));
			attach();
		}
		editableContentElement.addEventListener("focusin", attach);
		editableContentElement.addEventListener("focusout", detach);
		return () => {
			detach();
			editableContentElement.removeEventListener("focusin", attach);
			editableContentElement.removeEventListener("focusout", detach);
		};
	}, [
		editableContentElement,
		tagName,
		className,
		isActive,
		wasActive
	]);
	return anchor;
}
var DEFAULT_SETTINGS;
function init_use_anchor() {
	return (init_use_anchor = __esmMin((() => {
		init_use_previous();
		init_react();
		init_build_module$4();
		DEFAULT_SETTINGS = {
			tagName: "",
			className: ""
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/autocomplete/get-default-use-items.mjs
function filterOptions(search, options = [], maxResults = 10) {
	const filtered = [];
	for (let i = 0; i < options.length; i++) {
		const option = options[i];
		let { keywords = [] } = option;
		if ("string" === typeof option.label) keywords = [...keywords, option.label];
		if (!keywords.some((keyword) => search.test((0, import_remove_accents$1.default)(keyword)))) continue;
		filtered.push(option);
		if (filtered.length === maxResults) break;
	}
	return filtered;
}
function getDefaultUseItems(autocompleter) {
	return (filterValue) => {
		const [items, setItems] = (0, import_react.useState)([]);
		(0, import_react.useLayoutEffect)(() => {
			const { options, isDebounced } = autocompleter;
			const loadOptions = debounce(() => {
				const promise2 = Promise.resolve(typeof options === "function" ? options(filterValue) : options).then((optionsData) => {
					if (promise2.canceled) return;
					const keyedOptions = optionsData.map((optionData, optionIndex) => ({
						key: `${autocompleter.name}-${optionIndex}`,
						value: optionData,
						label: autocompleter.getOptionLabel(optionData),
						keywords: autocompleter.getOptionKeywords ? autocompleter.getOptionKeywords(optionData) : [],
						isDisabled: autocompleter.isOptionDisabled ? autocompleter.isOptionDisabled(optionData) : false
					}));
					const search = new RegExp("(?:\\b|\\s|^)" + escapeRegExp(filterValue), "i");
					setItems(filterOptions(search, keyedOptions));
				});
				return promise2;
			}, isDebounced ? 250 : 0);
			const promise = loadOptions();
			return () => {
				loadOptions.cancel();
				if (promise) promise.canceled = true;
			};
		}, [filterValue]);
		return [items];
	};
}
var import_remove_accents$1;
function init_get_default_use_items() {
	return (init_get_default_use_items = __esmMin((() => {
		import_remove_accents$1 = /* @__PURE__ */ __toESM(require_remove_accents(), 1);
		init_debounce();
		init_react();
		init_strings();
	})))();
}
//#endregion
//#region ../packages/components/build-module/autocomplete/autocompleter-ui.mjs
function ListBox({ items, onSelect, selectedIndex, instanceId, listBoxId, className, Component = "div" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Component, {
		id: listBoxId,
		role: "listbox",
		className: "components-autocomplete__results",
		children: items.map((option, index) => /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(button_default, {
			id: `components-autocomplete-item-${instanceId}-${option.key}`,
			role: "option",
			__next40pxDefaultSize: true,
			"aria-selected": index === selectedIndex,
			accessibleWhenDisabled: true,
			disabled: option.isDisabled,
			className: clsx("components-autocomplete__result", className, { "is-selected": index === selectedIndex }),
			variant: index === selectedIndex ? "primary" : void 0,
			onClick: () => onSelect(option),
			children: option.label
		}, option.key))
	});
}
function AutocompleterUI({ autocompleter, filterValue, instanceId, listBoxId, className, selectedIndex, onChangeOptions, onSelect, reset, contentRef }) {
	const [items] = (autocompleter.useItems ?? getDefaultUseItems(autocompleter))(filterValue);
	const popoverAnchor = useAnchor({ editableContentElement: contentRef.current });
	const [needsA11yCompat, setNeedsA11yCompat] = (0, import_react.useState)(false);
	const popoverRef = (0, import_react.useRef)(null);
	const popoverRefs = useMergeRefs([popoverRef, useRefEffect((node) => {
		if (!contentRef.current) return;
		setNeedsA11yCompat(node.ownerDocument !== contentRef.current.ownerDocument);
	}, [contentRef])]);
	useOnClickOutside(popoverRef, reset);
	const debouncedSpeak = useDebounce(speak, 500);
	function announce(options) {
		if (!debouncedSpeak) return;
		if (!!options.length) {
			if (filterValue) debouncedSpeak(sprintf(_n("%d result found, use up and down arrow keys to navigate.", "%d results found, use up and down arrow keys to navigate.", options.length), options.length), "assertive");
			else debouncedSpeak(sprintf(_n("Initial %d result loaded. Type to filter all available results. Use up and down arrow keys to navigate.", "Initial %d results loaded. Type to filter all available results. Use up and down arrow keys to navigate.", options.length), options.length), "assertive");
		} else debouncedSpeak(__("No results."), "assertive");
	}
	(0, import_react.useLayoutEffect)(() => {
		onChangeOptions(items);
		announce(items);
	}, [items]);
	if (items.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)(import_jsx_runtime$1.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(popover_default, {
		offset: 8,
		focusOnMount: false,
		placement: "top-start",
		className: "components-autocomplete__popover",
		anchor: popoverAnchor,
		ref: popoverRefs,
		children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(ListBox, {
			items,
			onSelect,
			selectedIndex,
			instanceId,
			listBoxId,
			className
		})
	}), contentRef.current && needsA11yCompat && (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(ListBox, {
		items,
		onSelect,
		selectedIndex,
		instanceId,
		listBoxId,
		className,
		Component: component_default
	}), contentRef.current.ownerDocument.body)] });
}
function useOnClickOutside(ref, handler) {
	(0, import_react.useEffect)(() => {
		const listener = (event) => {
			if (!ref.current || ref.current.contains(event.target)) return;
			handler(event);
		};
		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);
		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, [handler, ref]);
}
var import_react_dom, import_jsx_runtime$1;
function init_autocompleter_ui() {
	return (init_autocompleter_ui = __esmMin((() => {
		init_clsx();
		import_react_dom = require_react_dom();
		init_react();
		init_build_module();
		init_use_debounce(), init_use_merge_refs(), init_use_ref_effect();
		init_build_module$7();
		init_build_module$5();
		init_get_default_use_items();
		init_button();
		init_popover();
		init_component();
		import_jsx_runtime$1 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../packages/components/build-module/autocomplete/get-autocomplete-match.mjs
function getAutocompleteMatch(textContent, completers, options) {
	const { matchCount, isBackspacing, getTextAfterSelection, lastCompletion } = options;
	if (!textContent) return null;
	let completer = null;
	let triggerIndex = -1;
	let matchedEndIndex = -1;
	let matchedPrefixLength = 0;
	for (const currentCompleter of completers) {
		const currentIndex = textContent.lastIndexOf(currentCompleter.triggerPrefix);
		if (currentIndex < 0) continue;
		const currentEndIndex = currentIndex + currentCompleter.triggerPrefix.length;
		if (currentEndIndex > matchedEndIndex || currentEndIndex === matchedEndIndex && currentCompleter.triggerPrefix.length > matchedPrefixLength) {
			completer = currentCompleter;
			triggerIndex = currentIndex;
			matchedEndIndex = currentEndIndex;
			matchedPrefixLength = currentCompleter.triggerPrefix.length;
		}
	}
	if (!completer) return null;
	const { allowContext, triggerPrefix } = completer;
	const textWithoutTrigger = textContent.slice(triggerIndex + triggerPrefix.length);
	if (textWithoutTrigger.length > 50) return null;
	const mismatch = matchCount === 0;
	const wordsFromTrigger = textWithoutTrigger.split(/\s/);
	const hasOneTriggerWord = wordsFromTrigger.length === 1;
	const matchingWhileBackspacing = isBackspacing && wordsFromTrigger.length <= 3;
	if (mismatch && !(matchingWhileBackspacing || hasOneTriggerWord)) return null;
	if (allowContext && !allowContext(textContent.slice(0, triggerIndex), getTextAfterSelection())) return null;
	if (/^\s/.test(textWithoutTrigger) || /\s\s+$/.test(textWithoutTrigger)) return null;
	if (lastCompletion && lastCompletion.name === completer.name && textWithoutTrigger.trimEnd() === lastCompletion.value) return null;
	return {
		completer,
		filterValue: (0, import_remove_accents.default)(textWithoutTrigger)
	};
}
var import_remove_accents;
function init_get_autocomplete_match() {
	return (init_get_autocomplete_match = __esmMin((() => {
		import_remove_accents = /* @__PURE__ */ __toESM(require_remove_accents(), 1);
	})))();
}
//#endregion
//#region ../packages/components/build-module/utils/get-node-text.mjs
var getNodeText, get_node_text_default;
function init_get_node_text() {
	return (init_get_node_text = __esmMin((() => {
		getNodeText = (node) => {
			if (node === null) return "";
			switch (typeof node) {
				case "string":
				case "number": return node.toString();
				case "object":
					if (node instanceof Array) return node.map(getNodeText).join("");
					if ("props" in node) return getNodeText(node.props.children);
					return "";
				default: return "";
			}
		};
		get_node_text_default = getNodeText;
	})))();
}
//#endregion
//#region ../packages/components/build-module/autocomplete/index.mjs
function getCompletionObject(completion) {
	if (completion !== null && typeof completion === "object" && "action" in completion && completion.action !== void 0 && "value" in completion && completion.value !== void 0) return completion;
	return {
		action: "insert-at-caret",
		value: completion
	};
}
function autocompleteReducer(state, action) {
	switch (action.type) {
		case "RESET": return initialState;
		case "SELECT": return {
			...state,
			selectedIndex: action.index
		};
		case "OPTIONS": return {
			...state,
			filteredOptions: action.options,
			selectedIndex: action.options.length === state.filteredOptions.length ? state.selectedIndex : 0
		};
		case "MATCH": return {
			...state,
			autocompleter: action.completer,
			filterValue: action.query
		};
	}
}
function useAutocomplete({ record, onChange, onReplace, completers, contentRef }) {
	const instanceId = use_instance_id_default(AUTOCOMPLETE_HOOK_REFERENCE);
	const [state, dispatch] = (0, import_react.useReducer)(autocompleteReducer, initialState);
	const { selectedIndex, filteredOptions, filterValue, autocompleter } = state;
	const backspacingRef = (0, import_react.useRef)(false);
	const prevRecordTextRef = (0, import_react.useRef)("");
	const lastCompletionRef = (0, import_react.useRef)(null);
	function insertCompletion(replacement) {
		if (autocompleter === null) return "";
		const end = record.start;
		const start = end - autocompleter.triggerPrefix.length - filterValue.length;
		const toInsert = create({ html: serialize_default(replacement) });
		onChange(insert(record, toInsert, start, end));
		return getTextContent(toInsert);
	}
	function select(option) {
		if (option.isDisabled || !autocompleter) return;
		const { getOptionCompletion } = autocompleter;
		if (!getOptionCompletion) {
			dispatch({ type: "RESET" });
			contentRef.current?.focus();
			return;
		}
		const completionObject = getCompletionObject(getOptionCompletion(option.value, filterValue));
		if ("replace" === completionObject.action) {
			onReplace([completionObject.value]);
			return;
		}
		if ("insert-at-caret" === completionObject.action) {
			const completionText = insertCompletion(completionObject.value);
			if (completionText.startsWith(autocompleter.triggerPrefix)) {
				const afterPrefix = completionText.slice(autocompleter.triggerPrefix.length);
				if (afterPrefix) lastCompletionRef.current = {
					name: autocompleter.name,
					value: afterPrefix
				};
			}
		}
		dispatch({ type: "RESET" });
		contentRef.current?.focus();
	}
	function onChangeOptions(options) {
		dispatch({
			type: "OPTIONS",
			options
		});
	}
	function handleKeyDown(event) {
		backspacingRef.current = event.key === "Backspace";
		if (!autocompleter) return;
		if (filteredOptions.length === 0) return;
		if (event.defaultPrevented) return;
		switch (event.key) {
			case "ArrowUp":
			case "ArrowDown": {
				const offset = event.key === "ArrowUp" ? -1 : 1;
				const newIndex = (selectedIndex + offset + filteredOptions.length) % filteredOptions.length;
				dispatch({
					type: "SELECT",
					index: newIndex
				});
				if (isAppleOS()) speak(get_node_text_default(filteredOptions[newIndex].label), "assertive");
				break;
			}
			case "Escape":
				dispatch({ type: "RESET" });
				event.preventDefault();
				break;
			case "Enter":
				select(filteredOptions[selectedIndex]);
				break;
			case "ArrowLeft":
			case "ArrowRight":
				dispatch({ type: "RESET" });
				return;
			default: return;
		}
		event.preventDefault();
	}
	const textContent = (0, import_react.useMemo)(() => {
		if (isCollapsed(record)) return getTextContent(slice(record, 0));
		return "";
	}, [record]);
	(0, import_react.useEffect)(() => {
		const isTextChange = record.text !== prevRecordTextRef.current;
		prevRecordTextRef.current = record.text;
		function getTextAfterSelection() {
			return textContent ? getTextContent(slice(record, void 0, getTextContent(record).length)) : "";
		}
		const match = getAutocompleteMatch(textContent, completers, {
			matchCount: filteredOptions.length,
			isBackspacing: backspacingRef.current,
			getTextAfterSelection,
			lastCompletion: lastCompletionRef.current
		});
		if (!match) {
			if (autocompleter) dispatch({ type: "RESET" });
			return;
		}
		const { completer, filterValue: query } = match;
		if (!autocompleter && !isTextChange) return;
		if (lastCompletionRef.current && lastCompletionRef.current.name === completer.name) lastCompletionRef.current = null;
		dispatch({
			type: "MATCH",
			completer,
			query
		});
	}, [textContent]);
	const { key: selectedKey = "" } = filteredOptions[selectedIndex] || {};
	const { className } = autocompleter || {};
	const isExpanded = !!autocompleter && filteredOptions.length > 0;
	const listBoxId = isExpanded ? `components-autocomplete-listbox-${instanceId}` : void 0;
	const activeId = isExpanded ? `components-autocomplete-item-${instanceId}-${selectedKey}` : null;
	const hasSelection = record.start !== void 0;
	const showPopover = !!textContent && hasSelection && !!autocompleter;
	return {
		listBoxId,
		activeId,
		onKeyDown: withIgnoreIMEEvents(handleKeyDown),
		popover: showPopover && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutocompleterUI, {
			autocompleter,
			className,
			filterValue,
			instanceId,
			listBoxId,
			selectedIndex,
			onChangeOptions,
			onSelect: select,
			contentRef,
			reset: () => dispatch({ type: "RESET" })
		}, autocompleter.name + autocompleter.triggerPrefix)
	};
}
function recordValuesMatch(a, b) {
	return a.text === b.text && a.start === b.start && a.end === b.end;
}
function useLastDifferentValue(value) {
	const history = (0, import_react.useRef)([]);
	const lastEntry = history.current[history.current.length - 1];
	if (!lastEntry || !recordValuesMatch(value, lastEntry)) history.current.push(value);
	if (history.current.length > 2) history.current.shift();
	return history.current[0];
}
function useAutocompleteProps(options) {
	const ref = (0, import_react.useRef)(null);
	const onKeyDownRef = (0, import_react.useRef)(void 0);
	const { record } = options;
	const previousRecord = useLastDifferentValue(record);
	const { popover, listBoxId, activeId, onKeyDown } = useAutocomplete({
		...options,
		contentRef: ref
	});
	onKeyDownRef.current = onKeyDown;
	const mergedRefs = useMergeRefs([ref, useRefEffect((element) => {
		function _onKeyDown(event) {
			onKeyDownRef.current?.(event);
		}
		return subscribeOwnedListener$9(element, "keydown", _onKeyDown, true);
	}, [])]);
	if (!(record.text !== previousRecord?.text)) return { ref: mergedRefs };
	return {
		ref: mergedRefs,
		children: popover,
		"aria-autocomplete": listBoxId ? "list" : void 0,
		"aria-haspopup": listBoxId ? "listbox" : void 0,
		"aria-controls": listBoxId,
		"aria-owns": listBoxId,
		"aria-activedescendant": activeId ?? void 0
	};
}
function Autocomplete({ children, isSelected, ...options }) {
	const { popover, ...props } = useAutocomplete(options);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [children(props), isSelected && popover] });
}
var import_jsx_runtime, subscribeOwnedListener$9, EMPTY_FILTERED_OPTIONS, AUTOCOMPLETE_HOOK_REFERENCE, initialState;
function init_autocomplete() {
	return (init_autocomplete = __esmMin((() => {
		init_serialize(), init_react();
		init_use_instance_id(), init_use_merge_refs(), init_use_ref_effect();
		init_build_module();
		init_build_module$7();
		init_build_module$6();
		init_autocompleter_ui();
		init_get_autocomplete_match();
		init_get_node_text();
		init_lock_unlock();
		import_jsx_runtime = require_jsx_runtime();
		({subscribeOwnedListener: subscribeOwnedListener$9} = unlock(privateApis));
		EMPTY_FILTERED_OPTIONS = [];
		AUTOCOMPLETE_HOOK_REFERENCE = {};
		initialState = {
			selectedIndex: 0,
			filteredOptions: EMPTY_FILTERED_OPTIONS,
			filterValue: "",
			autocompleter: null
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/autocompleters/block.jsx
/**
* Creates a blocks repeater for replacing the current block with a selected block type.
*
* @return {Object} A blocks completer.
*/
function createBlockCompleter() {
	return {
		name: "blocks",
		className: "block-editor-autocompleters__block",
		triggerPrefix: "/",
		useItems(filterValue) {
			const { rootClientId, selectedBlockId, prioritizedBlocks } = useSelect((select) => {
				const { getSelectedBlockClientId, getBlock, getBlockListSettings, getBlockRootClientId } = select(store);
				const { getActiveBlockVariation } = select(store$1);
				const selectedBlockClientId = getSelectedBlockClientId();
				const { name: blockName, attributes } = getBlock(selectedBlockClientId);
				const activeBlockVariation = getActiveBlockVariation(blockName, attributes);
				const _rootClientId = getBlockRootClientId(selectedBlockClientId);
				return {
					selectedBlockId: activeBlockVariation ? `${blockName}/${activeBlockVariation.name}` : blockName,
					rootClientId: _rootClientId,
					prioritizedBlocks: getBlockListSettings(_rootClientId)?.prioritizedInserterBlocks
				};
			}, []);
			const [items, categories, collections] = useBlockTypesState(rootClientId, noop, true);
			const filteredItems = (0, import_react.useMemo)(() => {
				return (!!filterValue.trim() ? searchBlockItems(items, categories, collections, filterValue) : orderInserterBlockItems(orderBy(items, "frecency", "desc"), prioritizedBlocks)).filter((item) => item.id !== selectedBlockId).slice(0, SHOWN_BLOCK_TYPES);
			}, [
				filterValue,
				selectedBlockId,
				items,
				categories,
				collections,
				prioritizedBlocks
			]);
			return [(0, import_react.useMemo)(() => filteredItems.map((blockItem) => {
				const { title, icon, isDisabled } = blockItem;
				return {
					key: `block-${blockItem.id}`,
					value: blockItem,
					label: /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(import_jsx_dev_runtime$6.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(block_icon_default, {
						icon,
						showColors: true
					}, "icon", false, {
						fileName: _jsxFileName$6,
						lineNumber: 101,
						columnNumber: 10
					}, this), title] }, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 100,
						columnNumber: 9
					}, this),
					isDisabled
				};
			}), [filteredItems])];
		},
		allowContext(before, after) {
			return !(/\S/.test(before) || /\S/.test(after));
		},
		getOptionCompletion(inserterItem) {
			const { name, initialAttributes, innerBlocks, innerContent, syncStatus, blocks } = inserterItem;
			return {
				action: "replace",
				value: syncStatus === "unsynced" ? (blocks ?? []).map((block) => cloneBlock(block)) : createBlock(name, initialAttributes, createBlocksFromInnerBlocksTemplate(innerBlocks), innerContent)
			};
		}
	};
}
var import_jsx_dev_runtime$6, _jsxFileName$6, noop, SHOWN_BLOCK_TYPES, block_default;
function init_block() {
	return (init_block = __esmMin((() => {
		init_build_module$8();
		init_build_module$1();
		init_react();
		init_search_items();
		init_use_block_types_state();
		init_block_icon();
		init_store();
		init_sorting();
		init_order_inserter_block_items();
		import_jsx_dev_runtime$6 = require_jsx_dev_runtime();
		_jsxFileName$6 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/autocompleters/block.jsx";
		noop = () => {};
		SHOWN_BLOCK_TYPES = 9;
		block_default = createBlockCompleter();
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/autocomplete/index.jsx
function useCompleters({ completers = EMPTY_ARRAY }) {
	const { name } = useBlockEditContext();
	return (0, import_react.useMemo)(() => {
		let filteredCompleters = [...completers];
		if (name === getDefaultBlockName() || getBlockSupport(name, "__experimentalSlashInserter", false)) filteredCompleters = [...filteredCompleters, block_default];
		if (hasFilter("editor.Autocomplete.completers")) {
			if (filteredCompleters === completers) filteredCompleters = filteredCompleters.map((completer) => ({ ...completer }));
			filteredCompleters = applyFilters("editor.Autocomplete.completers", filteredCompleters, name);
		}
		return filteredCompleters;
	}, [completers, name]);
}
function useBlockEditorAutocompleteProps(props) {
	return useAutocompleteProps({
		...props,
		completers: useCompleters(props)
	});
}
/**
* Wrap the default Autocomplete component with one that supports a filter hook
* for customizing its list of autocompleters.
*
* @type {React.FC}
*/
function BlockEditorAutocomplete(props) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(Autocomplete, {
		...props,
		completers: useCompleters(props)
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 65,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$5, _jsxFileName$5, EMPTY_ARRAY;
function init_autocomplete$1() {
	return (init_autocomplete$1 = __esmMin((() => {
		init_build_module$2();
		init_autocomplete();
		init_react();
		init_build_module$1();
		init_context();
		init_block();
		import_jsx_dev_runtime$5 = require_jsx_dev_runtime();
		_jsxFileName$5 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/autocomplete/index.jsx";
		EMPTY_ARRAY = [];
		BlockEditorAutocomplete.__docgenInfo = {
			"description": "Wrap the default Autocomplete component with one that supports a filter hook\nfor customizing its list of autocompleters.\n\n@type {React.FC}",
			"methods": [],
			"displayName": "BlockEditorAutocomplete"
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/rich-text/use-mark-persistent.js
/**
* Classifies the change between two snapshots of the value.
*
* @param {Object} previous Previous snapshot.
* @param {Object} next     Next snapshot.
*
* @return {'none'|'typing'|'discrete'} The change type.
*/
function getChangeType(previous, next) {
	if (previous.html === next.html && previous.hasActiveFormats === next.hasActiveFormats) return "none";
	return previous.text === next.text ? "discrete" : "typing";
}
function useMarkPersistent({ html, value, onMarkPersistent }) {
	const { text } = value;
	const hasActiveFormats = !!value.activeFormats?.length;
	const previousRef = (0, import_react.useRef)();
	const markPersistent = useEvent(onMarkPersistent);
	const markPersistentDebounced = useDebounce(markPersistent, TYPING_TIMEOUT);
	(0, import_react.useLayoutEffect)(() => {
		const previous = previousRef.current;
		const next = {
			html,
			text,
			hasActiveFormats
		};
		if (!previous) {
			previousRef.current = next;
			return;
		}
		const changeType = getChangeType(previous, next);
		if (changeType === "none") return;
		previousRef.current = next;
		if (changeType === "typing") {
			markPersistentDebounced();
			return;
		}
		markPersistentDebounced.cancel();
		markPersistent();
	}, [
		html,
		text,
		hasActiveFormats,
		markPersistent,
		markPersistentDebounced
	]);
}
var TYPING_TIMEOUT;
function init_use_mark_persistent() {
	return (init_use_mark_persistent = __esmMin((() => {
		init_react();
		init_use_debounce(), init_use_event();
		TYPING_TIMEOUT = 1e3;
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/rich-text/event-listeners/before-input-rules.js
var subscribeOwnedListener$8, wrapSelectionSettings, before_input_rules_default;
function init_before_input_rules() {
	return (init_before_input_rules = __esmMin((() => {
		init_build_module();
		init_build_module$2();
		init_store();
		init_lock_unlock$1();
		({subscribeOwnedListener: subscribeOwnedListener$8} = unlock$1(privateApis));
		wrapSelectionSettings = [
			"`",
			"\"",
			"'",
			"“”",
			"‘’"
		];
		before_input_rules_default = (props) => (element) => {
			function onInput(event) {
				const { inputType, data } = event;
				const { value, onChange, registry } = props.current;
				if (inputType !== "insertText") return;
				if (isCollapsed(value)) return;
				const pair = applyFilters("blockEditor.wrapSelectionSettings", wrapSelectionSettings).find(([startChar, endChar]) => startChar === data || endChar === data);
				if (!pair) return;
				const [startChar, endChar = startChar] = pair;
				const start = value.start;
				const end = value.end + startChar.length;
				let newValue = insert(value, startChar, start, start);
				newValue = insert(newValue, endChar, end, end);
				const { __unstableMarkLastChangeAsPersistent, __unstableMarkAutomaticChange } = registry.dispatch(store);
				__unstableMarkLastChangeAsPersistent();
				onChange(newValue);
				__unstableMarkAutomaticChange();
				const init = {};
				for (const key in event) init[key] = event[key];
				init.data = endChar;
				const { ownerDocument } = element;
				const { defaultView } = ownerDocument;
				const newEvent = new defaultView.InputEvent("input", init);
				window.queueMicrotask(() => {
					element.dispatchEvent(newEvent);
				});
				event.preventDefault();
			}
			return subscribeOwnedListener$8(element, "beforeinput", onInput, true);
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/rich-text/prevent-event-discovery.js
function preventEventDiscovery(value) {
	const searchText = "tales of gutenberg";
	const addText = " 🐡🐢🦀🐤🦋🐘🐧🐹🦁🦄🦍🐼🐿🎃🐴🐝🐆🦕🦔🌱🍇π🍌🐉💧🥨🌌🍂🍠🥦🥚🥝🎟🥥🥒🛵🥖🍒🍯🎾🎲🐺🐚🐮⌛️";
	const { start, text } = value;
	if (start < 18) return value;
	if (text.slice(start - 18, start).toLowerCase() !== searchText) return value;
	return insert(value, addText);
}
function init_prevent_event_discovery() {
	return (init_prevent_event_discovery = __esmMin((() => {
		init_build_module();
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/rich-text/event-listeners/input-rules.js
function findSelection(blocks) {
	let i = blocks.length;
	while (i--) {
		const attributeKey = retrieveSelectedAttribute(blocks[i].attributes);
		if (attributeKey) {
			blocks[i].attributes[attributeKey] = blocks[i].attributes[attributeKey].toString().replace("", "");
			return [
				blocks[i].clientId,
				attributeKey,
				0,
				0
			];
		}
		const nestedSelection = findSelection(blocks[i].innerBlocks);
		if (nestedSelection) return nestedSelection;
	}
	return [];
}
var subscribeOwnedListener$7, input_rules_default;
function init_input_rules() {
	return (init_input_rules = __esmMin((() => {
		init_build_module();
		init_build_module$1();
		init_store();
		init_prevent_event_discovery();
		init_selection();
		init_lock_unlock$1();
		({subscribeOwnedListener: subscribeOwnedListener$7} = unlock$1(privateApis));
		input_rules_default = (props) => (element) => {
			function inputRule() {
				const { getValue, onReplace, selectionChange, registry } = props.current;
				if (!onReplace) return;
				const value = getValue();
				const { start, text } = value;
				if (text.slice(start - 1, start) !== " ") return;
				const trimmedTextBefore = text.slice(0, start).trim();
				const prefixTransforms = getBlockTransforms("from").filter(({ type }) => type === "prefix");
				const transformation = findTransform(prefixTransforms, ({ prefix }) => {
					return trimmedTextBefore === prefix;
				});
				if (!transformation) return;
				const content = toHTMLString({ value: insert(value, "", 0, start) });
				const block = transformation.transform(content);
				registry.batch(() => {
					selectionChange(...findSelection([block]));
					onReplace([block]);
				});
				registry.dispatch(store).__unstableMarkAutomaticChange();
				return true;
			}
			function onInput(event) {
				const { inputType, type } = event;
				const { getValue, onChange, __unstableAllowPrefixTransformations, formatTypes, registry, onReplace } = props.current;
				if (inputType !== "insertText" && type !== "compositionend") return;
				if (__unstableAllowPrefixTransformations && inputRule()) return;
				const value = getValue();
				if (onReplace) {
					const transforms = getBlockTransforms("from").filter((transform) => transform.type === "input");
					const transformation = findTransform(transforms, (item) => item.regExp.test(value.text));
					if (transformation) {
						onReplace(transformation.transform());
						registry.dispatch(store).__unstableMarkAutomaticChange();
						return;
					}
				}
				const transformed = formatTypes.reduce((accumulator, { __unstableInputRule }) => {
					if (__unstableInputRule) accumulator = __unstableInputRule(accumulator);
					return accumulator;
				}, preventEventDiscovery(value));
				const { __unstableMarkLastChangeAsPersistent, __unstableMarkAutomaticChange } = registry.dispatch(store);
				if (transformed !== value) {
					__unstableMarkLastChangeAsPersistent();
					onChange({
						...transformed,
						activeFormats: value.activeFormats
					});
					__unstableMarkAutomaticChange();
				}
			}
			const unsubscribeInput = subscribeOwnedListener$7(element, "input", onInput, true);
			const unsubscribeCompositionEnd = subscribeOwnedListener$7(element, "compositionend", onInput, true);
			return () => {
				unsubscribeInput();
				unsubscribeCompositionEnd();
			};
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/rich-text/event-listeners/insert-replacement-text.js
var subscribeOwnedListener$6, insert_replacement_text_default;
function init_insert_replacement_text() {
	return (init_insert_replacement_text = __esmMin((() => {
		init_build_module();
		init_store();
		init_lock_unlock$1();
		({subscribeOwnedListener: subscribeOwnedListener$6} = unlock$1(privateApis));
		insert_replacement_text_default = (props) => (element) => {
			function onInput(event) {
				if (event.inputType !== "insertReplacementText") return;
				const { registry } = props.current;
				registry.dispatch(store).__unstableMarkLastChangeAsPersistent();
			}
			return subscribeOwnedListener$6(element, "beforeinput", onInput);
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/rich-text/event-listeners/remove-browser-shortcuts.js
var subscribeOwnedListener$5, remove_browser_shortcuts_default;
function init_remove_browser_shortcuts() {
	return (init_remove_browser_shortcuts = __esmMin((() => {
		init_build_module$6();
		init_build_module();
		init_lock_unlock$1();
		({subscribeOwnedListener: subscribeOwnedListener$5} = unlock$1(privateApis));
		remove_browser_shortcuts_default = () => (node) => {
			function onKeydown(event) {
				if (isKeyboardEvent.primary(event, "z") || isKeyboardEvent.primary(event, "y") || isKeyboardEvent.primaryShift(event, "z")) event.preventDefault();
			}
			return subscribeOwnedListener$5(node, "keydown", onKeydown, true);
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/rich-text/event-listeners/shortcuts.js
var subscribeOwnedListener$4, shortcuts_default;
function init_shortcuts() {
	return (init_shortcuts = __esmMin((() => {
		init_build_module();
		init_lock_unlock$1();
		({subscribeOwnedListener: subscribeOwnedListener$4} = unlock$1(privateApis));
		shortcuts_default = (props) => (element) => {
			const { keyboardShortcuts } = props.current;
			function onKeyDown(event) {
				for (const keyboardShortcut of keyboardShortcuts) keyboardShortcut(event);
			}
			return subscribeOwnedListener$4(element, "keydown", onKeyDown, true);
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/rich-text/event-listeners/input-events.js
var subscribeOwnedListener$3, input_events_default;
function init_input_events() {
	return (init_input_events = __esmMin((() => {
		init_build_module();
		init_lock_unlock$1();
		({subscribeOwnedListener: subscribeOwnedListener$3} = unlock$1(privateApis));
		input_events_default = (props) => (element) => {
			const { inputEvents } = props.current;
			function onInput(event) {
				for (const keyboardShortcut of inputEvents) keyboardShortcut(event);
			}
			return subscribeOwnedListener$3(element, "input", onInput);
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/rich-text/event-listeners/paste-handler.js
var subscribeDelegatedListener$1, ownsSelection$1, paste_handler_default;
function init_paste_handler() {
	return (init_paste_handler = __esmMin((() => {
		init_build_module$1();
		init_build_module();
		init_private_apis$1();
		init_store();
		init_utils();
		init_pasting();
		init_lock_unlock$1();
		({subscribeDelegatedListener: subscribeDelegatedListener$1} = unlock$1(privateApis$1));
		({ownsSelection: ownsSelection$1} = unlock$1(privateApis));
		paste_handler_default = (props) => (element) => {
			function _onPaste(event) {
				const { disableFormats, onChange, value, formatTypes, tagName, onReplace, __unstableEmbedURLOnPaste, preserveWhiteSpace, pastePlainText, registry } = props.current;
				if (!element.contains(event.target) && !ownsSelection$1(element)) return;
				if (event.defaultPrevented) return;
				const pasteData = getPasteEventData(event);
				if (!pasteData) return;
				event.preventDefault();
				const { plainText, html, files } = pasteData;
				if (files.length) return;
				window.console.log("Received HTML (RichText):\n\n", html);
				window.console.log("Received plain text (RichText):\n\n", plainText);
				if (disableFormats) {
					onChange(insert(value, plainText));
					return;
				}
				const isInternal = event.clipboardData.getData("rich-text") === "true";
				function pasteInline(content) {
					const transformed = formatTypes.reduce((accumulator, { __unstablePasteRule }) => {
						if (__unstablePasteRule && accumulator === value) accumulator = __unstablePasteRule(value, {
							html,
							plainText
						});
						return accumulator;
					}, value);
					if (transformed !== value) onChange(transformed);
					else {
						const valueToInsert = create({ html: content });
						addActiveFormats(valueToInsert, getActiveFormats(value));
						onChange(insert(value, valueToInsert));
					}
				}
				if (isInternal) {
					pasteInline(html);
					return;
				}
				if (pastePlainText) {
					const valueToInsert = create({ text: plainText });
					addActiveFormats(valueToInsert, getActiveFormats(value));
					onChange(insert(value, valueToInsert));
					return;
				}
				let mode = "INLINE";
				const trimmedPlainText = plainText.trim();
				if (__unstableEmbedURLOnPaste && isEmpty(value) && isURL(trimmedPlainText) && /^https?:/.test(trimmedPlainText)) mode = "BLOCKS";
				const content = pasteHandler({
					HTML: html,
					plainText,
					mode,
					tagName,
					preserveWhiteSpace
				});
				if (typeof content === "string") {
					pasteInline(content);
					return;
				}
				if (!content.length || !onReplace || !isEmpty(value)) return;
				if (mode === "BLOCKS") {
					pasteInline(html);
					registry.dispatch(store).__unstableMarkLastChangeAsPersistent();
				}
				onReplace(content, content.length - 1, -1);
			}
			const { defaultView } = element.ownerDocument;
			return subscribeDelegatedListener$1(defaultView, "paste", _onPaste);
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/rich-text/event-listeners/delete.js
var subscribeOwnedListener$2, delete_default;
function init_delete() {
	return (init_delete = __esmMin((() => {
		init_build_module$6();
		init_build_module();
		init_lock_unlock$1();
		({subscribeOwnedListener: subscribeOwnedListener$2} = unlock$1(privateApis));
		delete_default = (props) => (element) => {
			function onKeyDown(event) {
				const { keyCode } = event;
				if (event.defaultPrevented) return;
				const { value, onMerge, onRemove } = props.current;
				if (keyCode === 46 || keyCode === 8) {
					const { start, end, text } = value;
					const isReverse = keyCode === 8;
					const hasActiveFormats = value.activeFormats && !!value.activeFormats.length;
					if (!isCollapsed(value) || hasActiveFormats || isReverse && start !== 0 || !isReverse && end !== text.length) return;
					if (onMerge) onMerge(!isReverse);
					else if (onRemove && isEmpty(value) && isReverse) onRemove(!isReverse);
					event.preventDefault();
				}
			}
			return subscribeOwnedListener$2(element, "keydown", onKeyDown);
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/rich-text/event-listeners/enter.js
var subscribeOwnedListener$1, ownsSelection, subscribeDelegatedListener, enter_default;
function init_enter() {
	return (init_enter = __esmMin((() => {
		init_build_module();
		init_private_apis$1();
		init_lock_unlock$1();
		({subscribeOwnedListener: subscribeOwnedListener$1, ownsSelection} = unlock$1(privateApis));
		({subscribeDelegatedListener} = unlock$1(privateApis$1));
		enter_default = (props) => (element) => {
			function onBeforeInput(event) {
				const { inputType } = event;
				if (inputType !== "insertParagraph" && inputType !== "insertLineBreak") return;
				const { onReplace, onSplit, supportsSplitting, disableLineBreaks, onChange, getValue, onSplitAtDoubleLineEnd, registry, onSplitAtEnd } = props.current;
				const value = getValue();
				const { text, start, end } = value;
				if (inputType === "insertParagraph" && onReplace && onSplit) event.__deprecatedOnSplit = true;
				if (inputType === "insertLineBreak") {
					if (!disableLineBreaks) {
						event.preventDefault();
						onChange(insert(value, "\n"));
					}
				} else if (onSplitAtEnd && start === end && end === text.length) {
					event.preventDefault();
					onSplitAtEnd();
				} else if (!supportsSplitting && !(onReplace && onSplit) && !disableLineBreaks && !event.defaultPrevented) {
					event.preventDefault();
					if (onSplitAtDoubleLineEnd && start === end && end === text.length && text.slice(-2) === "\n\n") registry.batch(() => {
						const _value = { ...value };
						_value.start = _value.end - 2;
						onChange(remove(_value));
						onSplitAtDoubleLineEnd();
					});
					else onChange(insert(value, "\n"));
				}
			}
			function onDefaultBeforeInput(event) {
				if (event.defaultPrevented || event.inputType !== "insertParagraph" && event.inputType !== "insertLineBreak") return;
				if (event.target !== element && !ownsSelection(element)) return;
				event.preventDefault();
			}
			const { defaultView } = element.ownerDocument;
			const unsubscribeDefaultBeforeInput = subscribeDelegatedListener(defaultView, "beforeinput", onDefaultBeforeInput);
			const unsubscribeBeforeInput = subscribeOwnedListener$1(element, "beforeinput", onBeforeInput, true);
			return () => {
				unsubscribeDefaultBeforeInput();
				unsubscribeBeforeInput();
			};
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/rich-text/event-listeners/firefox-compat.js
var firefox_compat_default;
function init_firefox_compat() {
	return (init_firefox_compat = __esmMin((() => {
		init_store();
		firefox_compat_default = (props) => (element) => {
			function onFocus() {
				const { registry } = props.current;
				if (!registry.select(store).isMultiSelecting()) return;
				const parentEditable = element.parentElement.closest("[contenteditable=\"true\"]");
				if (parentEditable) parentEditable.focus();
			}
			element.addEventListener("focus", onFocus);
			return () => {
				element.removeEventListener("focus", onFocus);
			};
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/rich-text/event-listeners/index.js
function useEventListeners(props) {
	const propsRef = (0, import_react.useRef)(props);
	(0, import_react.useInsertionEffect)(() => {
		propsRef.current = props;
	});
	const refEffects = (0, import_react.useMemo)(() => allEventListeners.map((refEffect) => refEffect(propsRef)), [propsRef]);
	return useRefEffect((element) => {
		if (!props.isSelected) return;
		const cleanups = refEffects.map((effect) => effect(element));
		return () => {
			cleanups.forEach((cleanup) => cleanup());
		};
	}, [refEffects, props.isSelected]);
}
var allEventListeners;
function init_event_listeners() {
	return (init_event_listeners = __esmMin((() => {
		init_react();
		init_use_ref_effect();
		init_before_input_rules();
		init_input_rules();
		init_insert_replacement_text();
		init_remove_browser_shortcuts();
		init_shortcuts();
		init_input_events();
		init_paste_handler();
		init_delete();
		init_enter();
		init_firefox_compat();
		allEventListeners = [
			before_input_rules_default,
			input_rules_default,
			insert_replacement_text_default,
			remove_browser_shortcuts_default,
			shortcuts_default,
			input_events_default,
			paste_handler_default,
			delete_default,
			enter_default,
			firefox_compat_default
		];
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/rich-text/multiline.jsx
function useEnterRef(props) {
	const registry = useRegistry();
	const { getSelectionStart, getSelectionEnd } = useSelect(store);
	const { selectionChange } = use_dispatch_default(store);
	return useRefEffect((element) => {
		function onKeyDown(event) {
			if (event.keyCode !== 13) return;
			event.preventDefault();
			const { value, values, onChange, index, identifier, clientId } = props.current;
			const { offset: start } = getSelectionStart();
			const { offset: end } = getSelectionEnd();
			if (typeof start !== "number" || typeof end !== "number") return;
			const richTextValue = create({ html: value });
			richTextValue.start = start;
			richTextValue.end = end;
			const array = split(richTextValue).map((v) => toHTMLString({ value: v }));
			const newValues = values.slice();
			newValues.splice(index, 1, ...array);
			registry.batch(() => {
				onChange(newValues);
				selectionChange(clientId, `${identifier}-${index + 1}`, 0, 0);
			});
		}
		return subscribeOwnedListener(element, "keydown", onKeyDown, true);
	}, []);
}
function Line(lineProps) {
	const { value, values, onChange, index, identifier, multilineTagName, ...props } = lineProps;
	const { clientId } = useBlockEditContext();
	const { selectionChange } = use_dispatch_default(store);
	const latestRef = (0, import_react.useRef)();
	(0, import_react.useInsertionEffect)(() => {
		latestRef.current = {
			...lineProps,
			clientId
		};
	});
	const ref = useEnterRef(latestRef);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(ForwardedRichTextWrapper, {
		identifier: `${identifier}-${index}`,
		tagName: multilineTagName,
		value,
		onChange: (newValue) => {
			const newValues = values.slice();
			newValues[index] = newValue;
			onChange(newValues);
		},
		isSelected: void 0,
		ref,
		onMerge: (forward) => {
			const newValues = values.slice();
			let offset = 0;
			if (forward) {
				if (!newValues[index + 1]) return;
				newValues.splice(index, 2, newValues[index] + newValues[index + 1]);
				offset = newValues[index].length - 1;
			} else {
				if (!newValues[index - 1]) return;
				newValues.splice(index - 1, 2, newValues[index - 1] + newValues[index]);
				offset = newValues[index - 1].length - 1;
			}
			onChange(newValues);
			selectionChange(clientId, `${identifier}-${index - (forward ? 0 : 1)}`, offset, offset);
		},
		...props
	}, index, false, {
		fileName: _jsxFileName$4,
		lineNumber: 88,
		columnNumber: 3
	}, this);
}
function RichTextMultiline({ children, identifier, tagName: TagName = "div", value = "", onChange, multiline, ...props }, forwardedRef) {
	deprecated("wp.blockEditor.RichText multiline prop", {
		since: "6.1",
		version: "6.3",
		alternative: "nested blocks (InnerBlocks)",
		link: "https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/nested-blocks-inner-blocks/"
	});
	const multilineTagName = getMultilineTag(multiline);
	value = value || `<${multilineTagName}></${multilineTagName}>`;
	const values = `</${multilineTagName}>${value}<${multilineTagName}>`.split(`</${multilineTagName}><${multilineTagName}>`);
	values.shift();
	values.pop();
	function _onChange(newValues) {
		onChange(`<${multilineTagName}>${newValues.join(`</${multilineTagName}><${multilineTagName}>`)}</${multilineTagName}>`);
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(TagName, {
		ref: forwardedRef,
		children: values.map((_value, index) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(Line, {
				values,
				value: _value,
				onChange: _onChange,
				index,
				identifier,
				multilineTagName,
				...props
			}, index, false, {
				fileName: _jsxFileName$4,
				lineNumber: 178,
				columnNumber: 6
			}, this);
		})
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 175,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$4, _jsxFileName$4, subscribeOwnedListener, multiline_default;
function init_multiline() {
	return (init_multiline = __esmMin((() => {
		init_react();
		init_build_module$3();
		init_build_module$8();
		init_build_module$6();
		init_build_module();
		init_use_ref_effect();
		init_rich_text();
		init_store();
		init_block_edit();
		init_utils();
		init_lock_unlock$1();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/rich-text/multiline.jsx";
		({subscribeOwnedListener} = unlock$1(privateApis));
		multiline_default = (0, import_react.forwardRef)(RichTextMultiline);
		RichTextMultiline.__docgenInfo = {
			"description": "",
			"methods": [],
			"displayName": "RichTextMultiline",
			"props": {
				"tagName": {
					"defaultValue": {
						"value": "'div'",
						"computed": false
					},
					"required": false
				},
				"value": {
					"defaultValue": {
						"value": "''",
						"computed": false
					},
					"required": false
				}
			}
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/rich-text/with-deprecations.jsx
function withDeprecations(Component) {
	return (0, import_react.forwardRef)((props, ref) => {
		let value = props.value;
		let onChange = props.onChange;
		if (Array.isArray(value)) {
			deprecated("wp.blockEditor.RichText value prop as children type", {
				since: "6.1",
				version: "6.3",
				alternative: "value prop as string",
				link: "https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/introducing-attributes-and-editable-fields/"
			});
			value = children_default.toHTML(props.value);
			onChange = (newValue) => props.onChange(children_default.fromDOM(createElement(document, newValue).childNodes));
		}
		if (props.onSplit) deprecated("wp.blockEditor.RichText onSplit prop", {
			since: "6.4",
			alternative: "block.json support key: \"splitting\""
		});
		const NewComponent = props.multiline ? multiline_default : Component;
		return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(NewComponent, {
			...props,
			value,
			onChange,
			ref
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 40,
			columnNumber: 4
		}, this);
	});
}
var import_jsx_dev_runtime$3, _jsxFileName$3;
function init_with_deprecations() {
	return (init_with_deprecations = __esmMin((() => {
		init_react();
		init_build_module$1();
		init_build_module();
		init_build_module$3();
		init_multiline();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/rich-text/with-deprecations.jsx";
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/rich-text/index.jsx
function RichTextWrapper({ children, tagName = "div", value: adjustedValue = "", onChange: adjustedOnChange, isSelected: originalIsSelected, multiline, inlineToolbar, wrapperClassName, autocompleters, onReplace, placeholder, allowedFormats, withoutInteractiveFormatting, onRemove, onMerge, onSplit, __unstableOnSplitAtEnd: onSplitAtEnd, __unstableOnSplitAtDoubleLineEnd: onSplitAtDoubleLineEnd, identifier, preserveWhiteSpace, __unstablePastePlainText: pastePlainText, __unstableEmbedURLOnPaste, __unstableDisableFormats: disableFormats, disableLineBreaks, __unstableAllowPrefixTransformations, readOnly, ...props }, forwardedRef) {
	const { supportsSplitting } = (0, import_react.useContext)(PrivateBlockContext);
	const instanceId = use_instance_id_default(RichTextWrapper);
	const anchorRef = (0, import_react.useRef)();
	const [anchorElement, setAnchorElement] = (0, import_react.useState)(null);
	const context = useBlockEditContext();
	const { clientId, isSelected: isBlockSelected, name: blockName } = context;
	const isBlockMultiSelected = context[isMultiSelectedKey];
	const blockBindings = context[blockBindingsKey];
	const hasDefaultEditingMode = context[blockEditingModeKey] === "default";
	const blockContext = (0, import_react.useContext)(Context);
	const registry = useRegistry();
	const selector = (select) => {
		if (!isBlockSelected && !isBlockMultiSelected) return { isSelected: false };
		const { getSelectionStart, getSelectionEnd } = select(store);
		const selectionStart = getSelectionStart();
		const selectionEnd = getSelectionEnd();
		const isInField = (end) => end.clientId === clientId && (identifier ? end.attributeKey === identifier : end[instanceIdKey] === instanceId);
		let isSelected;
		if (originalIsSelected === void 0) isSelected = isInField(selectionStart) && selectionEnd.clientId === clientId;
		else if (originalIsSelected) isSelected = selectionStart.clientId === clientId;
		const isCrossBlockEnd = !isSelected && selectionStart.clientId !== selectionEnd.clientId;
		return {
			selectionStart: isSelected ? selectionStart.offset : void 0,
			selectionEnd: isSelected ? selectionEnd.offset : void 0,
			isSelected,
			crossBlockStart: isCrossBlockEnd && isInField(selectionStart) ? selectionStart.offset : void 0,
			crossBlockEnd: isCrossBlockEnd && isInField(selectionEnd) ? selectionEnd.offset : void 0
		};
	};
	const { selectionStart, selectionEnd, isSelected, crossBlockStart, crossBlockEnd } = useSelect(selector, [
		clientId,
		identifier,
		instanceId,
		originalIsSelected,
		isBlockSelected,
		isBlockMultiSelected
	]);
	const { disableBoundBlock, bindingsPlaceholder, bindingsLabel } = useSelect((select) => {
		if (!blockBindings?.[identifier]) return {};
		const { __experimentalBlockBindingsSupportedAttributes } = select(store).getSettings();
		if (!__experimentalBlockBindingsSupportedAttributes?.[blockName]) return {};
		const relatedBinding = blockBindings[identifier];
		const blockBindingsSource = getBlockBindingsSource(relatedBinding.source);
		const blockBindingsContext = {};
		if (blockBindingsSource?.usesContext?.length) for (const key of blockBindingsSource.usesContext) blockBindingsContext[key] = blockContext[key];
		const _disableBoundBlock = !blockBindingsSource?.canUserEditValue?.({
			select,
			context: blockBindingsContext,
			args: relatedBinding.args
		});
		if (adjustedValue.length > 0) return {
			disableBoundBlock: _disableBoundBlock,
			bindingsPlaceholder: null,
			bindingsLabel: null
		};
		const { getBlockAttributes } = select(store);
		const blockAttributes = getBlockAttributes(clientId);
		let clientSideFieldLabel = null;
		if (blockBindingsSource?.getFieldsList) clientSideFieldLabel = blockBindingsSource.getFieldsList({
			select,
			context: blockBindingsContext
		})?.find((item) => (0, import_es6.default)(item.args, relatedBinding?.args))?.label;
		const bindingKey = clientSideFieldLabel ?? blockBindingsSource?.label;
		const _bindingsPlaceholder = _disableBoundBlock ? bindingKey : sprintf(__("Add %s"), bindingKey);
		const _bindingsLabel = _disableBoundBlock ? relatedBinding?.args?.key || blockBindingsSource?.label : sprintf(__("Empty %s; start writing to edit its value"), relatedBinding?.args?.key || blockBindingsSource?.label);
		return {
			disableBoundBlock: _disableBoundBlock,
			bindingsPlaceholder: blockAttributes?.placeholder || _bindingsPlaceholder,
			bindingsLabel: _bindingsLabel
		};
	}, [
		blockBindings,
		identifier,
		blockName,
		adjustedValue,
		clientId,
		blockContext
	]);
	const isInsidePatternOverrides = !!blockContext?.["pattern/overrides"];
	const hasOverrideEnabled = blockBindings?.__default?.source === "core/pattern-overrides";
	const shouldDisableEditing = readOnly || disableBoundBlock || isInsidePatternOverrides && !hasOverrideEnabled;
	const isEditingHost = useSelect((select) => {
		if (shouldDisableEditing || !hasDefaultEditingMode || !isBlockSelected) return false;
		const { getSelectedBlockClientId, canHostEditableRoot } = unlock$1(select(store));
		return canHostEditableRoot(getSelectedBlockClientId());
	}, [
		shouldDisableEditing,
		hasDefaultEditingMode,
		isBlockSelected
	]);
	const { getSelectionStart, getSelectionEnd, getBlockRootClientId } = useSelect(store);
	const { selectionChange, __unstableMarkLastChangeAsPersistent } = use_dispatch_default(store);
	const adjustedAllowedFormats = getAllowedFormats({
		allowedFormats,
		disableFormats
	});
	const hasFormats = !adjustedAllowedFormats || adjustedAllowedFormats.length > 0;
	(0, import_react.useEffect)(() => {
		if (!identifier) return;
		setFieldFormatSettings(clientId, identifier, {
			allowedFormats: adjustedAllowedFormats,
			withoutInteractiveFormatting,
			disabled: shouldDisableEditing
		});
		return () => {
			deleteFieldFormatSettings(clientId, identifier);
		};
	}, [
		clientId,
		identifier,
		adjustedAllowedFormats,
		withoutInteractiveFormatting,
		shouldDisableEditing
	]);
	const onSelectionChange = (0, import_react.useCallback)((start, end) => {
		const selection = {};
		const unset = start === void 0 && end === void 0;
		const baseSelection = {
			clientId,
			[identifier ? "attributeKey" : instanceIdKey]: identifier ? identifier : instanceId
		};
		if (typeof start === "number" || unset) {
			if (end === void 0 && getBlockRootClientId(clientId) !== getBlockRootClientId(getSelectionEnd().clientId)) return;
			selection.start = {
				...baseSelection,
				offset: start
			};
		}
		if (typeof end === "number" || unset) {
			if (start === void 0 && getBlockRootClientId(clientId) !== getBlockRootClientId(getSelectionStart().clientId)) return;
			selection.end = {
				...baseSelection,
				offset: end
			};
		}
		selectionChange(selection);
	}, [
		clientId,
		getBlockRootClientId,
		getSelectionEnd,
		getSelectionStart,
		identifier,
		instanceId,
		selectionChange
	]);
	const { value, getValue, onChange, ref: richTextRef, formatTypes, [getDomPositionKey]: getDomPosition } = useRichText({
		value: adjustedValue,
		onChange: adjustedOnChange,
		selectionStart,
		selectionEnd,
		onSelectionChange,
		placeholder: bindingsPlaceholder || placeholder,
		__unstableIsSelected: isSelected,
		__unstableDisableFormats: disableFormats,
		preserveWhiteSpace,
		__unstableDependencies: [tagName],
		allowedFormats: adjustedAllowedFormats,
		withoutInteractiveFormatting,
		__unstableFormatTypeHandlerContext: (0, import_react.useMemo)(() => ({
			richTextIdentifier: identifier,
			blockClientId: clientId
		}), [identifier, clientId])
	});
	(0, import_react.useLayoutEffect)(() => {
		const element = anchorRef.current;
		if (!isSelected || element?.contentEditable !== "true") return;
		const { ownerDocument } = element;
		const focusedDocument = [ownerDocument, ownerDocument.defaultView.frameElement?.ownerDocument].find((doc) => doc?.hasFocus());
		if (!focusedDocument) return;
		const { activeElement, body } = focusedDocument;
		const canvas = element.parentElement?.closest("[contenteditable]");
		const target = canvas?.isContentEditable ? canvas : element;
		if (activeElement === body || canvas?.contains(activeElement)) target.focus();
	}, [
		selectionStart,
		selectionEnd,
		isSelected
	]);
	(0, import_react.useLayoutEffect)(() => {
		if (crossBlockStart === void 0 && crossBlockEnd === void 0) return;
		const element = anchorRef.current;
		if (!element) return;
		const { ownerDocument } = element;
		if (ownerDocument.activeElement?.contentEditable !== "true") return;
		const selection = ownerDocument.defaultView.getSelection();
		if (!selection.rangeCount) return;
		if (crossBlockStart !== void 0) {
			const { node, offset } = getDomPosition(crossBlockStart);
			if (selection.anchorNode !== node || selection.anchorOffset !== offset) selection.setBaseAndExtent(node, offset, selection.focusNode, selection.focusOffset);
		} else {
			const { node, offset } = getDomPosition(crossBlockEnd);
			if (selection.focusNode !== node || selection.focusOffset !== offset) selection.extend(node, offset);
		}
	}, [
		crossBlockStart,
		crossBlockEnd,
		value,
		getDomPosition
	]);
	const autocompleteProps = useBlockEditorAutocompleteProps({
		onReplace,
		completers: autocompleters,
		record: value,
		onChange
	});
	const { "aria-autocomplete": ariaAutocomplete, "aria-haspopup": ariaHasPopup, "aria-controls": ariaControls, "aria-owns": ariaOwns, "aria-activedescendant": ariaActiveDescendant } = autocompleteProps;
	(0, import_react.useEffect)(() => {
		if (!isSelected) return;
		const host = anchorRef.current?.parentElement?.closest("[contenteditable=\"true\"]");
		if (!host) return;
		const attributes = {
			"aria-autocomplete": ariaAutocomplete,
			"aria-haspopup": ariaHasPopup,
			"aria-controls": ariaControls,
			"aria-owns": ariaOwns,
			"aria-activedescendant": ariaActiveDescendant
		};
		for (const [key, value_] of Object.entries(attributes)) if (value_ === void 0) host.removeAttribute(key);
		else host.setAttribute(key, value_);
		return () => {
			for (const key of Object.keys(attributes)) host.removeAttribute(key);
		};
	}, [
		isSelected,
		ariaAutocomplete,
		ariaHasPopup,
		ariaControls,
		ariaOwns,
		ariaActiveDescendant
	]);
	useMarkPersistent({
		html: adjustedValue,
		value,
		onMarkPersistent: __unstableMarkLastChangeAsPersistent
	});
	const [keyboardShortcuts] = (0, import_react.useState)(() => /* @__PURE__ */ new Set());
	const [inputEvents] = (0, import_react.useState)(() => /* @__PURE__ */ new Set());
	function onFocus() {
		anchorRef.current?.focus();
	}
	let tabIndex = props.tabIndex;
	if (isEditingHost) tabIndex = props.tabIndex ?? 0;
	else if (!shouldDisableEditing && props.tabIndex === 0) tabIndex = null;
	const TagName = tagName;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(import_jsx_dev_runtime$2.Fragment, { children: [
		isSelected && /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(KeyboardShortcutContext.Provider, {
			value: keyboardShortcuts,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(InputEventContext.Provider, {
				value: inputEvents,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(popover_default.__unstableSlotNameProvider, {
					value: "__unstable-block-tools-after",
					children: [children && children({
						value,
						onChange,
						onFocus
					}), /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(FormatEdit, {
						value,
						onChange,
						onFocus,
						formatTypes,
						forwardedRef: anchorRef
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 582,
						columnNumber: 8
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 578,
					columnNumber: 7
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 577,
				columnNumber: 6
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 576,
			columnNumber: 5
		}, this),
		isSelected && hasFormats && /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(FormatToolbarContainer, {
			inline: inlineToolbar,
			editableContentElement: anchorElement
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 594,
			columnNumber: 5
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(TagName, {
			role: "textbox",
			"aria-multiline": !disableLineBreaks,
			"aria-readonly": shouldDisableEditing,
			...props,
			draggable: void 0,
			"aria-label": bindingsLabel || props["aria-label"] || placeholder,
			...autocompleteProps,
			ref: useMergeRefs([
				richTextRef,
				forwardedRef,
				autocompleteProps.ref,
				props.ref,
				useEventListeners({
					registry,
					getValue,
					onChange,
					__unstableAllowPrefixTransformations,
					formatTypes,
					onReplace,
					selectionChange,
					isSelected,
					disableFormats,
					value,
					tagName,
					onSplit,
					__unstableEmbedURLOnPaste,
					pastePlainText,
					onMerge,
					onRemove,
					disableLineBreaks,
					onSplitAtEnd,
					onSplitAtDoubleLineEnd,
					keyboardShortcuts,
					inputEvents,
					supportsSplitting
				}),
				anchorRef,
				setAnchorElement
			]),
			contentEditable: !shouldDisableEditing,
			suppressContentEditableWarning: true,
			className: clsx("block-editor-rich-text__editable", props.className, "rich-text"),
			tabIndex,
			"data-wp-block-attribute-key": identifier
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 599,
			columnNumber: 4
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 574,
		columnNumber: 3
	}, this);
}
var import_es6, import_jsx_dev_runtime$2, _jsxFileName$2, useRichText, getDomPositionKey, KeyboardShortcutContext, InputEventContext, RichTextShortcut, RichTextInputEvent, instanceIdKey, ForwardedRichTextWrapper, RichTextWithDeprecations, PublicForwardedRichTextContainer;
function init_rich_text() {
	return (init_rich_text = __esmMin((() => {
		init_clsx();
		import_es6 = /* @__PURE__ */ __toESM(require_es6());
		init_react();
		init_build_module$8();
		init_use_merge_refs(), init_use_instance_id();
		init_build_module();
		init_popover();
		init_build_module$1();
		init_build_module$5();
		init_autocomplete$1();
		init_block_edit();
		init_context();
		init_format_toolbar_container();
		init_store();
		init_use_mark_persistent();
		init_event_listeners();
		init_format_edit();
		init_field_format_settings();
		init_utils();
		init_content();
		init_with_deprecations();
		init_block_context();
		init_lock_unlock$1();
		init_private_block_context();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		init_toolbar_button();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/rich-text/index.jsx";
		({useRichText, getDomPositionKey, KeyboardShortcutContext, InputEventContext, RichTextShortcut, RichTextInputEvent} = unlock$1(privateApis));
		instanceIdKey = Symbol("instanceId");
		ForwardedRichTextWrapper = (0, import_react.forwardRef)(RichTextWrapper);
		RichTextWithDeprecations = withDeprecations(ForwardedRichTextWrapper);
		PublicForwardedRichTextContainer = (0, import_react.forwardRef)((props, ref) => {
			if (useBlockEditContext()[isPreviewModeKey]) {
				const { children, tagName: Tag = "div", value, onChange, isSelected, multiline, inlineToolbar, wrapperClassName, autocompleters, onReplace, placeholder, allowedFormats, withoutInteractiveFormatting, onRemove, onMerge, onSplit, __unstableOnSplitAtEnd, __unstableOnSplitAtDoubleLineEnd, identifier, preserveWhiteSpace, __unstablePastePlainText, __unstableEmbedURLOnPaste, __unstableDisableFormats, disableLineBreaks, __unstableAllowPrefixTransformations, readOnly, ...contentProps } = props;
				return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Tag, {
					ref,
					...contentProps,
					dangerouslySetInnerHTML: { __html: valueToHTMLString(value, multiline) || "<br>" }
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 708,
					columnNumber: 4
				}, void 0);
			}
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(RichTextWithDeprecations, {
				ref,
				...props,
				readOnly: false
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 720,
				columnNumber: 3
			}, void 0);
		});
		PublicForwardedRichTextContainer.Content = Content;
		PublicForwardedRichTextContainer.isEmpty = isEmpty$1;
		RichTextWrapper.__docgenInfo = {
			"description": "",
			"methods": [],
			"displayName": "RichTextWrapper",
			"props": {
				"tagName": {
					"defaultValue": {
						"value": "'div'",
						"computed": false
					},
					"required": false
				},
				"value": {
					"defaultValue": {
						"value": "''",
						"computed": false
					},
					"required": false
				}
			}
		};
		PublicForwardedRichTextContainer.__docgenInfo = {
			"description": "@see https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/rich-text/README.md",
			"methods": [],
			"displayName": "PublicForwardedRichTextContainer"
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/editable-text/index.jsx
var import_jsx_dev_runtime$1, _jsxFileName$1, EditableText;
function init_editable_text() {
	return (init_editable_text = __esmMin((() => {
		init_react();
		init_rich_text();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/editable-text/index.jsx";
		EditableText = (0, import_react.forwardRef)((props, ref) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(PublicForwardedRichTextContainer, {
				ref,
				...props,
				__unstableDisableFormats: true
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 5,
				columnNumber: 9
			}, void 0);
		});
		EditableText.Content = function Content({ value = "", tagName: Tag = "div", ...props }) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Tag, {
				...props,
				children: value
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 13,
				columnNumber: 9
			}, this);
		};
		EditableText.__docgenInfo = {
			"description": "",
			"methods": [],
			"displayName": "EditableText"
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/plain-text/index.jsx
var import_jsx_dev_runtime, _jsxFileName, PlainText;
function init_plain_text() {
	return (init_plain_text = __esmMin((() => {
		init_clsx();
		init_react();
		init_editable_text();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/plain-text/index.jsx";
		PlainText = (0, import_react.forwardRef)(({ __experimentalVersion, ...props }, ref) => {
			if (__experimentalVersion === 2) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EditableText, {
				ref,
				...props
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 44,
				columnNumber: 10
			}, void 0);
			const { className, onChange, ...remainingProps } = props;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
				ref,
				className: clsx("block-editor-plain-text", className),
				onChange: (event) => onChange(event.target.value),
				...remainingProps
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 50,
				columnNumber: 3
			}, void 0);
		});
		PlainText.__docgenInfo = {
			"description": "Render an auto-growing textarea allow users to fill any textual content.\n\n@see https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/plain-text/README.md\n\n@example\n```jsx\nimport { registerBlockType } from '@wordpress/blocks';\nimport { PlainText } from '@wordpress/block-editor';\n\nregisterBlockType( 'my-plugin/example-block', {\n  // ...\n\n  attributes: {\n    content: {\n      type: 'string',\n    },\n  },\n\n  edit( { className, attributes, setAttributes } ) {\n    return (\n      <PlainText\n        className={ className }\n        value={ attributes.content }\n        onChange={ ( content ) => setAttributes( { content } ) }\n      />\n    );\n  },\n} );\n````\n\n@param {Object}   props          Component props.\n@param {string}   props.value    String value of the textarea.\n@param {Function} props.onChange Function called when the text value changes.\n@param {Object}   [props.ref]    The component forwards the `ref` property to the `textarea` element.\n@return {Element} Plain text component",
			"methods": [],
			"displayName": "PlainText"
		};
	})))();
}
//#endregion
export { RichTextShortcut as a, useAnchor as c, RichTextInputEvent as i, init_plain_text as n, init_rich_text as o, PublicForwardedRichTextContainer as r, init_use_anchor as s, PlainText as t };
