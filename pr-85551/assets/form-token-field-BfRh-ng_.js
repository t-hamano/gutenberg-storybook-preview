import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { n as isShallowEqual, t as init_build_module$1 } from "./build-module-COHfMY9T.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { n as __, r as _n, t as init_build_module$2 } from "./build-module-v04us4E2.js";
import { n as withIgnoreIMEEvents } from "./with-ignore-ime-events-BFiL1WqY.js";
import { r as init_build_module$3 } from "./build-module-LJKyBiy6.js";
import { n as usePrevious, t as init_use_previous } from "./use-previous-BYjjquxs.js";
import { n as useDebounce, t as init_use_debounce } from "./use-debounce-D2hjAck8.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { r as speak, t as init_build_module$4 } from "./build-module-DsAeWnrG.js";
import { t as close_small_default } from "./close-small-BRQ3N94m.js";
import { n as init_component, t as VisuallyHidden } from "./component-DWfXyJHZ.js";
import { n as init_component$1, t as Flex } from "./component-DsRVYDtI.js";
import { n as init_component$2, t as FlexItem } from "./component-za0yHv6F.js";
import { n as StyledHelp, o as init_base_control_styles, r as StyledLabel } from "./base-control-styles-D9esgRa7.js";
import { n as init_button, t as Button } from "./button-BO8bp-IJ.js";
import { i as init_token_input, n as init_suggestions_list, r as TokenInput, t as SuggestionsList } from "./suggestions-list-DBMZ0BM3.js";
import { r as init_build_module$5 } from "./library.story-CbQx3MQ6.js";
//#region ../packages/components/src/form-token-field/token.tsx
function Token({ value, status, title, displayTransform, isBorderless = false, disabled = false, onClickRemove = noop, onMouseEnter, onMouseLeave, messages, termPosition, termsCount }) {
	const instanceId = use_instance_id_default(Token);
	const tokenClasses = clsx("components-form-token-field__token", {
		"is-error": "error" === status,
		"is-success": "success" === status,
		"is-validating": "validating" === status,
		"is-borderless": isBorderless,
		"is-disabled": disabled
	});
	const onClick = () => onClickRemove({ value });
	const transformedValue = displayTransform(value);
	const termPositionAndCount = sprintf(__("%1$s (%2$d of %3$d)"), transformedValue, termPosition, termsCount);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("span", {
		className: tokenClasses,
		onMouseEnter,
		onMouseLeave,
		title,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("span", {
			className: "components-form-token-field__token-text",
			id: `components-form-token-field__token-text-${instanceId}`,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(VisuallyHidden, {
				as: "span",
				children: termPositionAndCount
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 56,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("span", {
				"aria-hidden": "true",
				children: transformedValue
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 59,
				columnNumber: 5
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 52,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Button, {
			className: "components-form-token-field__remove-token",
			size: "small",
			icon: close_small_default,
			onClick: !disabled ? onClick : void 0,
			disabled,
			label: messages.remove,
			"aria-describedby": `components-form-token-field__token-text-${instanceId}`
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 64,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 46,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, noop;
function init_token() {
	return (init_token = __esmMin((() => {
		init_clsx();
		init_use_instance_id();
		init_build_module$2();
		init_build_module$5();
		init_button();
		init_component();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/form-token-field/token.tsx";
		noop = () => {};
		try {
			Token.__docgenInfo = {
				"description": "",
				"displayName": "token",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/form-token-field/token.tsx",
				"methods": [],
				"props": {
					"displayTransform": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenProps"
						}],
						"description": "",
						"name": "displayTransform",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(value: string) => string" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenProps"
						}],
						"description": "",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onClickRemove": {
						"defaultValue": { "value": "() => {}" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenProps"
						}],
						"description": "",
						"name": "onClickRemove",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "({ value }: { value: string; }) => void" }
					},
					"messages": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenProps"
						}],
						"description": "",
						"name": "messages",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "Messages" }
					},
					"termPosition": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenProps"
						}],
						"description": "",
						"name": "termPosition",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "number" }
					},
					"termsCount": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenProps"
						}],
						"description": "",
						"name": "termsCount",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "number" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenItem"
						}],
						"description": "The value of the token.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenItem"
						},
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"status": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenItem"
						}],
						"description": "One of 'error', 'validating', or 'success'. Applies styles to token.",
						"name": "status",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenItem"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"success\" | \"error\" | \"validating\"",
							"value": [
								{ "value": "\"success\"" },
								{ "value": "\"error\"" },
								{ "value": "\"validating\"" }
							]
						}
					},
					"title": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenItem"
						}],
						"description": "If not falsey, will add a title to the token.",
						"name": "title",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenItem"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"isBorderless": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenItem"
						}],
						"description": "When true, renders tokens as without a background.",
						"name": "isBorderless",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenItem"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onMouseEnter": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenItem"
						}],
						"description": "Function to call when onMouseEnter event triggered on token.",
						"name": "onMouseEnter",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenItem"
						},
						"required": false,
						"tags": {},
						"type": { "name": "MouseEventHandler<HTMLSpanElement>" }
					},
					"onMouseLeave": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenItem"
						}],
						"description": "Function to call when onMouseLeave is triggered on token.",
						"name": "onMouseLeave",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenItem"
						},
						"required": false,
						"tags": {},
						"type": { "name": "MouseEventHandler<HTMLSpanElement>" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/form-token-field/style.module.scss
var style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		style_module_default = { "tokens-and-input": "_tokens-and-input_1956m_96" };
	})))();
}
//#endregion
//#region ../packages/components/src/form-token-field/index.tsx
/**
* A `FormTokenField` is a field similar to the tags and categories fields in the interim editor chrome,
* or the "to" field in Mail on OS X. Tokens can be entered by typing them or selecting them from a list of suggested tokens.
*
* Up to one hundred suggestions that match what the user has typed so far will be shown from which the user can pick from (auto-complete).
* Tokens are separated by the "," character. Suggestions can be selected with the up or down arrows and added with the tab or enter key.
*
* The `value` property is handled in a manner similar to controlled form components.
* See [Forms](https://react.dev/reference/react-dom/components#form-components) in the React Documentation for more information.
*/
function FormTokenField(props) {
	const { autoCapitalize, autoComplete, maxLength, placeholder, label = __("Add item"), className, suggestions = [], maxSuggestions = 100, value = [], displayTransform = identity, saveTransform = (token) => token.trim(), onChange = () => {}, onInputChange = () => {}, onFocus = void 0, isBorderless = false, disabled = false, tokenizeOnSpace = false, messages = {
		added: __("Item added."),
		removed: __("Item removed."),
		remove: __("Remove item"),
		__experimentalInvalid: __("Invalid item")
	}, __experimentalRenderItem, __experimentalExpandOnFocus = false, __experimentalValidateInput = () => true, __experimentalShowHowTo, __experimentalAutoSelectFirstMatch = false, tokenizeOnBlur = false, help } = props;
	const defaultHelp = tokenizeOnSpace ? __("Separate with commas, spaces, or the Enter key.") : __("Separate with commas or the Enter key.");
	let computedHelp = help !== void 0 ? help : defaultHelp;
	if (typeof __experimentalShowHowTo === "boolean") {
		deprecated("`__experimentalShowHowTo` prop in wp.components.FormTokenField", {
			since: "7.1",
			alternative: "`help` prop",
			hint: "The `help` prop now defaults to the previous how-to text. Pass an empty string to hide it."
		});
		if (__experimentalShowHowTo === false && help === void 0) computedHelp = "";
	}
	const instanceId = use_instance_id_default(FormTokenField);
	const [incompleteTokenValue, setIncompleteTokenValue] = (0, import_react.useState)("");
	const [inputOffsetFromEnd, setInputOffsetFromEnd] = (0, import_react.useState)(0);
	const [isActive, setIsActive] = (0, import_react.useState)(false);
	const [isExpanded, setIsExpanded] = (0, import_react.useState)(false);
	const [selectedSuggestionIndex, setSelectedSuggestionIndex] = (0, import_react.useState)(-1);
	const [selectedSuggestionScroll, setSelectedSuggestionScroll] = (0, import_react.useState)(false);
	const prevSuggestions = usePrevious(suggestions);
	const prevValue = usePrevious(value);
	const input = (0, import_react.useRef)(null);
	const tokensAndInput = (0, import_react.useRef)(null);
	const debouncedSpeak = useDebounce(speak, 500);
	(0, import_react.useEffect)(() => {
		if (isActive && !hasFocus()) focus();
	}, [isActive]);
	(0, import_react.useEffect)(() => {
		const suggestionsDidUpdate = !isShallowEqual(suggestions, prevSuggestions || []);
		if (suggestionsDidUpdate || value !== prevValue) updateSuggestions(suggestionsDidUpdate);
	}, [
		suggestions,
		prevSuggestions,
		value,
		prevValue
	]);
	(0, import_react.useEffect)(() => {
		updateSuggestions();
	}, [incompleteTokenValue]);
	(0, import_react.useEffect)(() => {
		updateSuggestions();
	}, [__experimentalAutoSelectFirstMatch]);
	if (disabled && isActive) {
		setIsActive(false);
		setIncompleteTokenValue("");
	}
	function focus() {
		input.current?.focus();
	}
	function hasFocus() {
		return input.current === input.current?.ownerDocument.activeElement;
	}
	function onFocusHandler(event) {
		if (hasFocus() || event.target === tokensAndInput.current) {
			setIsActive(true);
			setIsExpanded(__experimentalExpandOnFocus || isExpanded);
		} else setIsActive(false);
		if ("function" === typeof onFocus) onFocus(event);
	}
	function onBlur(event) {
		if (inputHasValidValue() && __experimentalValidateInput(incompleteTokenValue)) {
			setIsActive(false);
			if (tokenizeOnBlur && inputHasValidValue()) addNewToken(incompleteTokenValue);
		} else {
			setIncompleteTokenValue("");
			setInputOffsetFromEnd(0);
			setIsActive(false);
			if (__experimentalExpandOnFocus) {
				const hasFocusWithin = event.relatedTarget === tokensAndInput.current;
				setIsExpanded(hasFocusWithin);
			} else setIsExpanded(false);
			setSelectedSuggestionIndex(-1);
			setSelectedSuggestionScroll(false);
		}
	}
	function onKeyDown(event) {
		let preventDefault = false;
		if (event.defaultPrevented) return;
		switch (event.key) {
			case "Backspace":
				preventDefault = handleDeleteKey(deleteTokenBeforeInput);
				break;
			case "Enter":
				preventDefault = addCurrentToken();
				break;
			case "ArrowLeft":
				preventDefault = handleLeftArrowKey();
				break;
			case "ArrowUp":
				preventDefault = handleUpArrowKey();
				break;
			case "ArrowRight":
				preventDefault = handleRightArrowKey();
				break;
			case "ArrowDown":
				preventDefault = handleDownArrowKey();
				break;
			case "Delete":
				preventDefault = handleDeleteKey(deleteTokenAfterInput);
				break;
			case "Space":
				if (tokenizeOnSpace) preventDefault = addCurrentToken({ preventDefaultOnFailedValidation: false });
				break;
			case "Escape":
				preventDefault = handleEscapeKey(event);
				break;
			case "Tab": preventDefault = handleTabKey(event);
		}
		if (preventDefault) event.preventDefault();
	}
	function onKeyPress(event) {
		let preventDefault = false;
		switch (event.key) {
			case ",": preventDefault = handleCommaKey();
		}
		if (preventDefault) event.preventDefault();
	}
	function onContainerTouched(event) {
		if (event.target === tokensAndInput.current && isActive) event.preventDefault();
	}
	function onTokenClickRemove(event) {
		deleteToken(event.value);
		focus();
	}
	function onSuggestionHovered(suggestion) {
		const index = getMatchingSuggestions().indexOf(suggestion);
		if (index >= 0) {
			setSelectedSuggestionIndex(index);
			setSelectedSuggestionScroll(false);
		}
	}
	function onSuggestionSelected(suggestion) {
		addNewToken(suggestion);
	}
	function onInputChangeHandler(event) {
		const text = event.value;
		const separator = tokenizeOnSpace ? /[ ,\t]+/ : /[,\t]+/;
		const items = text.split(separator);
		const tokenValue = items[items.length - 1] || "";
		if (items.length > 1) {
			const tokensToProcess = items.slice(0, -1);
			const willFailValidation = (segment) => {
				const transformed = saveTransform(segment);
				return !!transformed && !valueContainsToken(transformed) && !__experimentalValidateInput(transformed);
			};
			const hasFailures = tokensToProcess.some(willFailValidation);
			const addedTokens = addNewTokens(hasFailures ? items : tokensToProcess);
			if (hasFailures) {
				const rejected = items.filter((token) => {
					const transformed = saveTransform(token);
					if (!transformed) return false;
					if (addedTokens.has(transformed)) return false;
					if (valueContainsToken(transformed)) return false;
					return !__experimentalValidateInput(transformed);
				});
				const usedSeparators = text.match(/[ ,\t]/g);
				const separatorChar = usedSeparators?.[usedSeparators.length - 1] ?? (tokenizeOnSpace ? " " : ",");
				const trailing = tokenValue === "" ? separatorChar : "";
				const remaining = rejected.join(separatorChar) + trailing;
				setIncompleteTokenValue(remaining);
				onInputChange(remaining);
				return;
			}
		}
		setIncompleteTokenValue(tokenValue);
		onInputChange(tokenValue);
	}
	function handleDeleteKey(_deleteToken) {
		let preventDefault = false;
		if (hasFocus() && isInputEmpty()) {
			_deleteToken();
			preventDefault = true;
		}
		return preventDefault;
	}
	function handleLeftArrowKey() {
		let preventDefault = false;
		if (isInputEmpty()) {
			moveInputBeforePreviousToken();
			preventDefault = true;
		}
		return preventDefault;
	}
	function handleRightArrowKey() {
		let preventDefault = false;
		if (isInputEmpty()) {
			moveInputAfterNextToken();
			preventDefault = true;
		}
		return preventDefault;
	}
	function handleUpArrowKey() {
		setSelectedSuggestionIndex((index) => {
			return (index <= 0 ? getMatchingSuggestions(incompleteTokenValue, suggestions, value, maxSuggestions, saveTransform).length : index) - 1;
		});
		setSelectedSuggestionScroll(true);
		return true;
	}
	function handleDownArrowKey() {
		setSelectedSuggestionIndex((index) => {
			return (index + 1) % getMatchingSuggestions(incompleteTokenValue, suggestions, value, maxSuggestions, saveTransform).length;
		});
		setSelectedSuggestionScroll(true);
		return true;
	}
	function collapseSuggestionsList(event) {
		if (event.target instanceof HTMLInputElement) {
			setIncompleteTokenValue(event.target.value);
			setIsExpanded(false);
			setSelectedSuggestionIndex(-1);
			setSelectedSuggestionScroll(false);
		}
	}
	function handleEscapeKey(event) {
		collapseSuggestionsList(event);
		return true;
	}
	function handleTabKey(event) {
		collapseSuggestionsList(event);
		return false;
	}
	function handleCommaKey() {
		if (inputHasValidValue()) addNewToken(incompleteTokenValue);
		return true;
	}
	function moveInputToIndex(index) {
		setInputOffsetFromEnd(value.length - Math.max(index, -1) - 1);
	}
	function moveInputBeforePreviousToken() {
		setInputOffsetFromEnd((prevInputOffsetFromEnd) => {
			return Math.min(prevInputOffsetFromEnd + 1, value.length);
		});
	}
	function moveInputAfterNextToken() {
		setInputOffsetFromEnd((prevInputOffsetFromEnd) => {
			return Math.max(prevInputOffsetFromEnd - 1, 0);
		});
	}
	function deleteTokenBeforeInput() {
		const index = getIndexOfInput() - 1;
		if (index > -1) deleteToken(value[index]);
	}
	function deleteTokenAfterInput() {
		const index = getIndexOfInput();
		if (index < value.length) {
			deleteToken(value[index]);
			moveInputToIndex(index);
		}
	}
	function addCurrentToken({ preventDefaultOnFailedValidation = true } = {}) {
		let preventDefault = false;
		const selectedSuggestion = getSelectedSuggestion();
		if (selectedSuggestion) {
			addNewToken(selectedSuggestion);
			preventDefault = true;
		} else if (inputHasValidValue()) preventDefault = addNewToken(incompleteTokenValue) || preventDefaultOnFailedValidation;
		return preventDefault;
	}
	function addNewTokens(tokens) {
		const tokensToAdd = [...new Set(tokens.map(saveTransform).filter(Boolean).filter((token) => !valueContainsToken(token)).filter((token) => __experimentalValidateInput(token)))];
		if (tokensToAdd.length > 0) {
			const newValue = [...value];
			newValue.splice(getIndexOfInput(), 0, ...tokensToAdd);
			onChange(newValue);
		}
		return new Set(tokensToAdd);
	}
	/**
	* Validates and adds `token`. Returns `true` if validation passed,
	* `false` if it was rejected by `__experimentalValidateInput`. A `true`
	* return does not guarantee the token was added: `addNewTokens` may
	* still drop it as a duplicate or after `saveTransform` returns empty.
	*/
	function addNewToken(token) {
		if (!__experimentalValidateInput(token)) {
			speak(messages.__experimentalInvalid, "assertive");
			return false;
		}
		addNewTokens([token]);
		speak(messages.added, "assertive");
		setIncompleteTokenValue("");
		setSelectedSuggestionIndex(-1);
		setSelectedSuggestionScroll(false);
		setIsExpanded(!__experimentalExpandOnFocus);
		if (isActive && !tokenizeOnBlur) focus();
		return true;
	}
	function deleteToken(token) {
		const newTokens = value.filter((item) => {
			return getTokenValue(item) !== getTokenValue(token);
		});
		onChange(newTokens);
		speak(messages.removed, "assertive");
	}
	function getTokenValue(token) {
		if ("object" === typeof token) return token.value;
		return token;
	}
	function getMatchingSuggestions(searchValue = incompleteTokenValue, _suggestions = suggestions, _value = value, _maxSuggestions = maxSuggestions, _saveTransform = saveTransform) {
		let match = _saveTransform(searchValue);
		const startsWithMatch = [];
		const containsMatch = [];
		const normalizedValue = _value.map((item) => {
			if (typeof item === "string") return item;
			return item.value;
		});
		if (match.length === 0) _suggestions = _suggestions.filter((suggestion) => !normalizedValue.includes(suggestion));
		else {
			match = match.normalize("NFKC").toLocaleLowerCase();
			_suggestions.forEach((suggestion) => {
				const index = suggestion.normalize("NFKC").toLocaleLowerCase().indexOf(match);
				if (normalizedValue.indexOf(suggestion) === -1) {
					if (index === 0) startsWithMatch.push(suggestion);
					else if (index > 0) containsMatch.push(suggestion);
				}
			});
			_suggestions = startsWithMatch.concat(containsMatch);
		}
		return _suggestions.slice(0, _maxSuggestions);
	}
	function getSelectedSuggestion() {
		if (selectedSuggestionIndex !== -1) return getMatchingSuggestions()[selectedSuggestionIndex];
	}
	function valueContainsToken(token) {
		return value.some((item) => {
			return getTokenValue(token) === getTokenValue(item);
		});
	}
	function getIndexOfInput() {
		return value.length - inputOffsetFromEnd;
	}
	function isInputEmpty() {
		return incompleteTokenValue.length === 0;
	}
	function inputHasValidValue() {
		return saveTransform(incompleteTokenValue).length > 0;
	}
	function updateSuggestions(resetSelectedSuggestion = true) {
		const inputHasMinimumChars = incompleteTokenValue.trim().length > 1;
		const matchingSuggestions = getMatchingSuggestions(incompleteTokenValue);
		const hasMatchingSuggestions = matchingSuggestions.length > 0;
		const shouldExpandIfFocuses = hasFocus() && __experimentalExpandOnFocus;
		setIsExpanded(shouldExpandIfFocuses || inputHasMinimumChars && hasMatchingSuggestions);
		if (resetSelectedSuggestion) {
			if (__experimentalAutoSelectFirstMatch && inputHasMinimumChars && hasMatchingSuggestions) {
				setSelectedSuggestionIndex(0);
				setSelectedSuggestionScroll(true);
			} else {
				setSelectedSuggestionIndex(-1);
				setSelectedSuggestionScroll(false);
			}
		}
		if (inputHasMinimumChars) {
			const message = hasMatchingSuggestions ? sprintf(_n("%d result found, use up and down arrow keys to navigate.", "%d results found, use up and down arrow keys to navigate.", matchingSuggestions.length), matchingSuggestions.length) : __("No results.");
			debouncedSpeak(message, "assertive");
		}
	}
	function renderTokensAndInput() {
		const components = value.map(renderToken);
		components.splice(getIndexOfInput(), 0, renderInput());
		return components;
	}
	function renderToken(token, index, tokens) {
		const _value = getTokenValue(token);
		const status = typeof token !== "string" ? token.status : void 0;
		const termPosition = index + 1;
		const termsCount = tokens.length;
		return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FlexItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Token, {
			value: _value,
			status,
			title: typeof token !== "string" ? token.title : void 0,
			displayTransform,
			onClickRemove: onTokenClickRemove,
			isBorderless: typeof token !== "string" && token.isBorderless || isBorderless,
			onMouseEnter: typeof token !== "string" ? token.onMouseEnter : void 0,
			onMouseLeave: typeof token !== "string" ? token.onMouseLeave : void 0,
			disabled: "error" !== status && disabled,
			messages,
			termsCount,
			termPosition
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 711,
			columnNumber: 5
		}, this) }, "token-" + _value, false, {
			fileName: _jsxFileName,
			lineNumber: 710,
			columnNumber: 4
		}, this);
	}
	function renderInput() {
		const describedById = computedHelp ? `components-form-token-input-${instanceId}__help` : void 0;
		const inputProps = {
			instanceId,
			autoCapitalize,
			autoComplete,
			placeholder: value.length === 0 ? placeholder : "",
			disabled,
			value: incompleteTokenValue,
			onBlur,
			isExpanded,
			selectedSuggestionIndex,
			"aria-describedby": describedById
		};
		return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TokenInput, {
			...inputProps,
			onChange: !(maxLength && value.length >= maxLength) ? onInputChangeHandler : void 0,
			ref: input
		}, "input", false, {
			fileName: _jsxFileName,
			lineNumber: 761,
			columnNumber: 4
		}, this);
	}
	const classes = clsx(className, "components-form-token-field__input-container", {
		"is-active": isActive,
		"is-disabled": disabled
	});
	let tokenFieldProps = {
		className: "components-form-token-field",
		tabIndex: -1
	};
	const matchingSuggestions = getMatchingSuggestions();
	if (!disabled) tokenFieldProps = Object.assign({}, tokenFieldProps, {
		onKeyDown: withIgnoreIMEEvents(onKeyDown),
		onKeyPress,
		onFocus: onFocusHandler
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		...tokenFieldProps,
		children: [
			label && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledLabel, {
				htmlFor: `components-form-token-input-${instanceId}`,
				className: "components-form-token-field__label",
				children: label
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 804,
				columnNumber: 5
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				ref: tokensAndInput,
				className: classes,
				tabIndex: -1,
				onMouseDown: onContainerTouched,
				onTouchStart: onContainerTouched,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, {
					className: style_module_default["tokens-and-input"],
					justify: "flex-start",
					align: "center",
					gap: 1,
					wrap: true,
					children: renderTokensAndInput()
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 818,
					columnNumber: 5
				}, this), isExpanded && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SuggestionsList, {
					instanceId,
					match: saveTransform(incompleteTokenValue),
					displayTransform,
					suggestions: matchingSuggestions,
					selectedIndex: selectedSuggestionIndex,
					scrollIntoView: selectedSuggestionScroll,
					onHover: onSuggestionHovered,
					onSelect: onSuggestionSelected,
					__experimentalRenderItem
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 828,
					columnNumber: 6
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 811,
				columnNumber: 4
			}, this),
			computedHelp && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledHelp, {
				id: `components-form-token-input-${instanceId}__help`,
				className: "components-form-token-field__help",
				children: computedHelp
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 842,
				columnNumber: 5
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 802,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, identity;
function init_form_token_field() {
	return (init_form_token_field = __esmMin((() => {
		init_clsx();
		init_react();
		init_build_module$2();
		init_use_debounce(), init_use_instance_id(), init_use_previous();
		init_build_module$4();
		init_build_module$1();
		init_build_module();
		init_build_module$3();
		init_token();
		init_token_input();
		init_suggestions_list();
		init_component$1(), init_component$2();
		init_style_module();
		init_base_control_styles();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/form-token-field/index.tsx";
		identity = (value) => value;
		try {
			FormTokenField.__docgenInfo = {
				"description": "A `FormTokenField` is a field similar to the tags and categories fields in the interim editor chrome,\nor the \"to\" field in Mail on OS X. Tokens can be entered by typing them or selecting them from a list of suggested tokens.\n\nUp to one hundred suggestions that match what the user has typed so far will be shown from which the user can pick from (auto-complete).\nTokens are separated by the \",\" character. Suggestions can be selected with the up or down arrows and added with the tab or enter key.\n\nThe `value` property is handled in a manner similar to controlled form components.\nSee [Forms](https://react.dev/reference/react-dom/components#form-components) in the React Documentation for more information.",
				"displayName": "FormTokenField",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/form-token-field/index.tsx",
				"methods": [],
				"props": {
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "",
						"name": "label",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"suggestions": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "An array of strings to present to the user as suggested tokens.",
						"name": "suggestions",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string[]" }
					},
					"maxSuggestions": {
						"defaultValue": { "value": "100" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "The maximum number of suggestions to display at a time.",
						"name": "maxSuggestions",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "An array of strings or objects to display as tokens in the field.\nIf objects are present in the array, they **must** have a property of `value`.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "(string | TokenItem)[]" }
					},
					"displayTransform": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "Function to call to transform tokens for display.\n(In the editor, this is needed to decode HTML entities embedded in tags\n- otherwise entities like `&` in tag names are double-encoded like `&amp;`,\nonce by the REST API and once by React).",
						"name": "displayTransform",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((token: string) => string)" }
					},
					"saveTransform": {
						"defaultValue": { "value": "( token: string ) => token.trim()" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "Function to call to transform tokens for saving. The default is to trim the token value.\nThis function is also applied when matching suggestions against the current value\nso that matching works correctly with leading or trailing spaces. (In the editor,\nthis is needed to remove leading and trailing spaces from tag names, like wp-admin does.\nOtherwise the REST API won't save them.)",
						"name": "saveTransform",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((token: string) => string)" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "Function to call when the tokens have changed. An array of new tokens is passed to the callback.",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((tokens: (string | TokenItem)[]) => void)" }
					},
					"onInputChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "Function to call when the users types in the input field. It can be used to trigger autocomplete requests.",
						"name": "onInputChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((input: string) => void)" }
					},
					"onFocus": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "Function to call when the TokenField has been focused on. The event is passed to the callback. Useful for analytics.",
						"name": "onFocus",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((event: FocusEvent<Element, Element>) => void)" }
					},
					"isBorderless": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "When true, renders tokens as without a background.",
						"name": "isBorderless",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"maxLength": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "If passed, `TokenField` will disable ability to add new tokens once number of tokens is greater than or equal to `maxLength`.",
						"name": "maxLength",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "When true, tokens are not able to be added or removed.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"placeholder": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "If passed, the `TokenField` input will show a placeholder string if no value tokens are present.",
						"name": "placeholder",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"tokenizeOnSpace": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "If true, will add a token when `TokenField` is focused and `space` is pressed.",
						"name": "tokenizeOnSpace",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"messages": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "Allows customizing the messages presented by screen readers in different occasions:\n\n-   `added`: The user added a new token.\n-   `removed`: The user removed an existing token.\n-   `remove` : The user focused the button to remove the token.\n-   `__experimentalInvalid`: The user tried to add a token that didn't pass the validation.",
						"name": "messages",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Messages" }
					},
					"__experimentalExpandOnFocus": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "If true, the suggestions list will be always expanded when the input field has the focus.",
						"name": "__experimentalExpandOnFocus",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__experimentalValidateInput": {
						"defaultValue": { "value": "() => true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "If passed, all introduced values will be validated before being added as tokens.",
						"name": "__experimentalValidateInput",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((token: string) => boolean)" }
					},
					"__experimentalShowHowTo": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "Use the `help` prop instead. The `help` prop now defaults to the previous\nhow-to text; if you were passing `__experimentalShowHowTo={ false }` to\nhide it, pass an empty string to `help` instead.\n@deprecated Use the `help` prop instead.\n@ignore",
						"name": "__experimentalShowHowTo",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__next36pxDefaultSize": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "Deprecated. Use `__next40pxDefaultSize` instead.\n@deprecated\n@ignore",
						"name": "__next36pxDefaultSize",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__next40pxDefaultSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "Start opting into the larger default height that will become the\ndefault size in a future version.\n@deprecated Default behavior since WordPress 7.1. Prop can be safely removed.\n@ignore",
						"name": "__next40pxDefaultSize",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__experimentalAutoSelectFirstMatch": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "If true, the select the first matching suggestion when the user presses\nthe Enter key (or space when tokenizeOnSpace is true).",
						"name": "__experimentalAutoSelectFirstMatch",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__experimentalRenderItem": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "Custom renderer for suggestions.",
						"name": "__experimentalRenderItem",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((args: { item: string; }) => ReactNode)" }
					},
					"__nextHasNoMarginBottom": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "Start opting into the new margin-free styles that will become the default in a future version.\n@deprecated Default behavior since WP 7.0. Prop can be safely removed.\n@ignore",
						"name": "__nextHasNoMarginBottom",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"tokenizeOnBlur": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "If true, add any incompleteTokenValue as a new token when the field loses focus.",
						"name": "tokenizeOnBlur",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"help": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "Additional description for the control.\n\nOnly use for meaningful description or instructions for the control. An\nelement containing the description will be programmatically associated to\nthe `FormTokenField` via `aria-describedby`.\n\nDefaults to a how-to message (e.g. _Separate with commas or the Enter key._);\npass an empty string to hide it.",
						"name": "help",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_form_token_field as n, FormTokenField as t };
