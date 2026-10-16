import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { n as init_react, t as import_react$1 } from "./react-DVttqL3M.js";
import { n as store, t as init_store } from "./store-BZXP8rvF.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as useEvent, t as init_use_event } from "./use-event-BTRhHipl.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { n as __, r as _n, t as init_build_module } from "./build-module-v04us4E2.js";
import { r as init_build_module$1 } from "./build-module-LJKyBiy6.js";
import { i as useSelect } from "./dispatch-abVPMST3.js";
import { n as useDebounce, t as init_use_debounce } from "./use-debounce-D2hjAck8.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { r as speak, t as init_build_module$2 } from "./build-module-DsAeWnrG.js";
import { n as privateApis, t as init_private_apis } from "./private-apis-C5gQmVAU.js";
import { n as init_input_control, r as input_control_default } from "./input-control-BabNp7Sg.js";
import { n as base_control_default, r as init_base_control } from "./base-control-4RJ3L0hf.js";
import { n as button_default, r as init_button } from "./button-BxEkUQAF.js";
import { n as init_build_module$3 } from "./build-module-BFlpD7Tf.js";
import { n as popover_default, t as init_popover } from "./popover-CLzPeoL7.js";
import { n as spinner_default, t as init_spinner } from "./spinner-DHB8cpoh.js";
import { n as isURL } from "./is-url-proZSHkf.js";
import { r as unlock, t as init_lock_unlock } from "./lock-unlock-DigY61P5.js";
//#region ../packages/url/build-module/safe-decode-uri.mjs
function safeDecodeURI(uri) {
	try {
		return decodeURI(uri);
	} catch {
		return uri;
	}
}
function init_safe_decode_uri() {
	return (init_safe_decode_uri = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/url/build-module/filter-url-for-display.mjs
function filterURLForDisplay(url, maxLength = null) {
	if (!url) return "";
	let filteredURL = url.replace(/^[a-z\-.\+]+[0-9]*:(\/\/)?/i, "").replace(/^www\./i, "");
	if (filteredURL.match(/^[^\/]+\/$/)) filteredURL = filteredURL.replace("/", "");
	if (!maxLength || filteredURL.length <= maxLength || !filteredURL.match(/\/([^\/?]+)\.(?:[\w]+)(?=\?|$)/)) return filteredURL;
	filteredURL = filteredURL.split("?")[0];
	const urlPieces = filteredURL.split("/");
	const file = urlPieces[urlPieces.length - 1];
	if (file.length <= maxLength) return "…" + filteredURL.slice(-maxLength);
	const index = file.lastIndexOf(".");
	const [fileName, extension] = [file.slice(0, index), file.slice(index + 1)];
	const truncatedFile = fileName.slice(-3) + "." + extension;
	return file.slice(0, Math.max(0, maxLength - truncatedFile.length - 1)) + "…" + truncatedFile;
}
function init_filter_url_for_display() {
	return (init_filter_url_for_display = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/block-editor/src/components/url-input/index.jsx
/**
* Whether the argument is a function.
*
* @param {*} maybeFunc The argument to check.
* @return {boolean} True if the argument is a function, false otherwise.
*/
function isFunction(maybeFunc) {
	return typeof maybeFunc === "function";
}
/**
* Text field for entering a URL, with an autocomplete list of matching posts,
* pages and other link suggestions.
*
* @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/url-input/README.md
*
* @param {Object} props Component props.
*/
function URLInput(props) {
	const { __experimentalFetchLinkSuggestions: fetchLinkSuggestionsProp, __experimentalHandleURLSuggestions: handleURLSuggestions, __experimentalRenderControl: renderControl, __experimentalRenderSuggestions: renderSuggestions, __experimentalShowInitialSuggestions: showInitialSuggestions = false, autocompleteRef, className, customValidity, disableSuggestions, disabled = false, help = null, hideLabelFromVision = false, inputRef, isFullWidth, label = null, markWhenOptional, onChange, onKeyDown, onSubmit, placeholder = __("Paste URL or type to search"), required = true, suffix, value = "" } = props;
	const instanceId = use_instance_id_default(URLInput);
	const { getSettings } = useSelect(store);
	const debouncedSpeak = useDebounce(speak, 500);
	const [suggestions, setSuggestions] = (0, import_react$1.useState)([]);
	const [suggestionsValue, setSuggestionsValue] = (0, import_react$1.useState)(null);
	const [selectedSuggestion, setSelectedSuggestion] = (0, import_react$1.useState)(null);
	const [isSuggestionsListOpen, setIsSuggestionsListOpen] = (0, import_react$1.useState)(false);
	const [isLoading, setIsLoading] = (0, import_react$1.useState)(false);
	const [isComposing, setIsComposing] = (0, import_react$1.useState)(false);
	const fallbackInputRef = (0, import_react$1.useRef)();
	const suggestionNodesRef = (0, import_react$1.useRef)([]);
	const suggestionsRequestRef = (0, import_react$1.useRef)(null);
	const controlInputRef = inputRef ?? fallbackInputRef;
	const inputId = `url-input-control-${instanceId}`;
	const suggestionsListboxId = `block-editor-url-input-suggestions-${instanceId}`;
	const suggestionOptionIdPrefix = `block-editor-url-input-suggestion-${instanceId}`;
	const showSuggestions = isSuggestionsListOpen && disableSuggestions !== true && (showInitialSuggestions || !!value.length);
	const updateSuggestions = useEvent((searchValue = "") => {
		const fetchLinkSuggestions = isFunction(fetchLinkSuggestionsProp) ? fetchLinkSuggestionsProp : getSettings().__experimentalFetchLinkSuggestions;
		if (!fetchLinkSuggestions) return;
		const isInitialSuggestions = !searchValue?.length;
		const search = searchValue.trim();
		if (!isInitialSuggestions && (search.length < 2 || !handleURLSuggestions && isURL(search))) {
			suggestionsRequestRef.current?.cancel?.();
			suggestionsRequestRef.current = null;
			setSuggestions([]);
			setIsSuggestionsListOpen(false);
			setSuggestionsValue(search);
			setSelectedSuggestion(null);
			setIsLoading(false);
			return;
		}
		setSelectedSuggestion(null);
		setIsLoading(true);
		const request = fetchLinkSuggestions(search, { isInitialSuggestions });
		suggestionsRequestRef.current = request;
		request.then((nextSuggestions) => {
			if (suggestionsRequestRef.current !== request) return;
			setSuggestions(nextSuggestions);
			setSuggestionsValue(search);
			setIsLoading(false);
			setIsSuggestionsListOpen(!!nextSuggestions.length);
			if (nextSuggestions.length) debouncedSpeak(sprintf(_n("%d result found, use up and down arrow keys to navigate.", "%d results found, use up and down arrow keys to navigate.", nextSuggestions.length), nextSuggestions.length), "assertive");
			else debouncedSpeak(__("No results."), "assertive");
		}).catch(() => {
			if (suggestionsRequestRef.current !== request) return;
			setIsLoading(false);
		}).finally(() => {
			if (suggestionsRequestRef.current === request) suggestionsRequestRef.current = null;
		});
	});
	const debouncedUpdateSuggestions = useDebounce(updateSuggestions, 200);
	(0, import_react$1.useEffect)(() => {
		if (!disableSuggestions && !isComposing && (value.length || showInitialSuggestions)) debouncedUpdateSuggestions(value);
	}, [
		value,
		isComposing,
		disableSuggestions,
		showInitialSuggestions,
		debouncedUpdateSuggestions
	]);
	(0, import_react$1.useEffect)(() => {
		if (!showSuggestions) setIsSuggestionsListOpen(false);
	}, [showSuggestions]);
	(0, import_react$1.useEffect)(() => {
		if (showSuggestions && selectedSuggestion !== null) suggestionNodesRef.current[selectedSuggestion]?.scrollIntoView({
			behavior: "instant",
			block: "nearest",
			inline: "nearest"
		});
	}, [showSuggestions, selectedSuggestion]);
	(0, import_react$1.useEffect)(() => {
		return () => {
			suggestionsRequestRef.current?.cancel?.();
			suggestionsRequestRef.current = null;
		};
	}, []);
	function selectLink(suggestion) {
		onChange(suggestion.url, suggestion);
		setSelectedSuggestion(null);
		setIsSuggestionsListOpen(false);
	}
	function handleSuggestionClick(suggestion) {
		selectLink(suggestion);
		controlInputRef.current.focus();
	}
	function handleChange(newValue) {
		onChange(newValue);
	}
	function handleCompositionStart() {
		setIsComposing(true);
		debouncedUpdateSuggestions.cancel();
	}
	function handleCompositionEnd() {
		setIsComposing(false);
	}
	function handleFocus() {
		if (value && !disableSuggestions && !suggestions.length && suggestionsRequestRef.current === null) debouncedUpdateSuggestions(value);
	}
	function handleKeyDown(event) {
		onKeyDown?.(event);
		if (!showSuggestions || !suggestions.length || isLoading) {
			if (!event.shiftKey && (event.keyCode === 38 || event.keyCode === 40)) {
				const caret = event.keyCode === 38 ? 0 : event.target.value.length;
				if (event.target.selectionStart !== caret || event.target.selectionEnd !== caret) {
					event.preventDefault();
					event.target.setSelectionRange(caret, caret);
				}
			} else if (event.keyCode === 13 && onSubmit) {
				event.preventDefault();
				onSubmit(null, event);
			}
			return;
		}
		const suggestion = suggestions[selectedSuggestion] ?? null;
		switch (event.keyCode) {
			case 38:
			case 40: {
				event.preventDefault();
				const offset = event.keyCode === 38 ? -1 : 1;
				setSelectedSuggestion(((selectedSuggestion ?? (offset === -1 ? 0 : -1)) + offset + suggestions.length) % suggestions.length);
				break;
			}
			case 9:
				if (suggestion) {
					selectLink(suggestion);
					speak(__("Link selected."));
				}
				break;
			case 13:
				event.preventDefault();
				if (suggestion) selectLink(suggestion);
				onSubmit?.(suggestion, event);
		}
	}
	const controlProps = {
		id: inputId,
		label,
		className: clsx("block-editor-url-input", className, { "is-full-width": isFullWidth }),
		hideLabelFromVision
	};
	const inputProps = {
		id: inputId,
		value,
		required,
		type: "text",
		name: inputId,
		autoComplete: "off",
		onChange: disabled ? noop : handleChange,
		onCompositionStart: disabled ? noop : handleCompositionStart,
		onCompositionEnd: disabled ? noop : handleCompositionEnd,
		onFocus: disabled ? noop : handleFocus,
		onKeyDown: disabled ? noop : handleKeyDown,
		placeholder,
		role: "combobox",
		"aria-label": label ? void 0 : __("URL"),
		"aria-expanded": showSuggestions,
		"aria-autocomplete": "list",
		"aria-owns": suggestionsListboxId,
		"aria-activedescendant": selectedSuggestion !== null ? `${suggestionOptionIdPrefix}-${selectedSuggestion}` : void 0,
		ref: controlInputRef,
		disabled,
		suffix,
		help
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Control, {
		controlProps,
		inputProps,
		isLoading,
		customValidity,
		markWhenOptional,
		renderControl
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 388,
		columnNumber: 4
	}, this), showSuggestions && suggestions.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Suggestions, {
		autocompleteRef,
		className,
		handleSuggestionClick,
		isLoading,
		renderSuggestions,
		selectedSuggestion,
		suggestionNodesRef,
		suggestionOptionIdPrefix,
		suggestions,
		suggestionsListboxId,
		suggestionsValue
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 397,
		columnNumber: 5
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 387,
		columnNumber: 3
	}, this);
}
function Control({ controlProps, inputProps, isLoading, customValidity, markWhenOptional, renderControl }) {
	const [isValidated, setIsValidated] = (0, import_react$1.useState)(customValidity !== void 0);
	if (customValidity !== void 0 && !isValidated) setIsValidated(true);
	if (renderControl) return renderControl(controlProps, inputProps, isLoading);
	const MaybeValidatedInputControl = isValidated ? ValidatedInputControl : input_control_default;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(base_control_default, {
		...controlProps,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MaybeValidatedInputControl, {
			...inputProps,
			...isValidated && {
				customValidity,
				...markWhenOptional !== void 0 && { markWhenOptional }
			}
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 443,
			columnNumber: 4
		}, this), isLoading && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(spinner_default, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 455,
			columnNumber: 19
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 442,
		columnNumber: 3
	}, this);
}
function Suggestions({ autocompleteRef, className, handleSuggestionClick, isLoading, renderSuggestions, selectedSuggestion, suggestionNodesRef, suggestionOptionIdPrefix, suggestions, suggestionsListboxId, suggestionsValue }) {
	const suggestionsListProps = {
		id: suggestionsListboxId,
		ref: autocompleteRef,
		role: "listbox"
	};
	const buildSuggestionItemProps = (suggestion, index) => {
		return {
			role: "option",
			tabIndex: "-1",
			id: `${suggestionOptionIdPrefix}-${index}`,
			ref: (node) => {
				suggestionNodesRef.current[index] = node;
			},
			"aria-selected": index === selectedSuggestion ? true : void 0
		};
	};
	if (isFunction(renderSuggestions)) return renderSuggestions({
		suggestions,
		selectedSuggestion,
		suggestionsListProps,
		buildSuggestionItemProps,
		isLoading,
		handleSuggestionClick,
		isInitialSuggestions: !suggestionsValue?.length,
		currentInputValue: suggestionsValue
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(popover_default, {
		placement: "bottom",
		focusOnMount: false,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			...suggestionsListProps,
			className: clsx("block-editor-url-input__suggestions", { [`${className}__suggestions`]: className }),
			children: suggestions.map((suggestion, index) => /* @__PURE__ */ (0, import_react.createElement)(button_default, {
				__next40pxDefaultSize: true,
				...buildSuggestionItemProps(suggestion, index),
				key: suggestion.id,
				className: clsx("block-editor-url-input__suggestion", { "is-selected": index === selectedSuggestion }),
				onClick: () => handleSuggestionClick(suggestion),
				__self: this,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 513,
					columnNumber: 6
				}
			}, suggestion.title))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 506,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 505,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, import_react, _jsxFileName, ValidatedInputControl, noop;
function init_url_input() {
	return (init_url_input = __esmMin((() => {
		init_clsx();
		init_build_module$2();
		init_build_module();
		init_react();
		init_build_module$1();
		init_base_control(), init_button(), init_input_control(), init_spinner(), init_popover(), init_private_apis();
		init_use_debounce(), init_use_event(), init_use_instance_id();
		init_build_module$3();
		init_store();
		init_lock_unlock();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		import_react = require_react();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/url-input/index.jsx";
		({ValidatedInputControl} = unlock(privateApis));
		noop = () => {};
		URLInput.__docgenInfo = {
			"description": "Text field for entering a URL, with an autocomplete list of matching posts,\npages and other link suggestions.\n\n@see https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/url-input/README.md\n\n@param {Object} props Component props.",
			"methods": [],
			"displayName": "URLInput"
		};
	})))();
}
//#endregion
export { init_safe_decode_uri as a, init_filter_url_for_display as i, init_url_input as n, safeDecodeURI as o, filterURLForDisplay as r, URLInput as t };
