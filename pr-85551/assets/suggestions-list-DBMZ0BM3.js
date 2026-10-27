import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useRefEffect, t as init_use_ref_effect } from "./use-ref-effect-DguFui9C.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
//#region ../packages/components/src/form-token-field/token-input.tsx
function UnForwardedTokenInput(props, ref) {
	const { value, isExpanded, instanceId, selectedSuggestionIndex, className, onChange, onFocus, onBlur, "aria-describedby": ariaDescribedBy, ...restProps } = props;
	const [hasFocus, setHasFocus] = (0, import_react.useState)(false);
	const size = value ? value.length + 1 : 0;
	const onChangeHandler = (event) => {
		if (onChange) onChange({ value: event.target.value });
	};
	const onFocusHandler = (e) => {
		setHasFocus(true);
		onFocus?.(e);
	};
	const onBlurHandler = (e) => {
		setHasFocus(false);
		onBlur?.(e);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("input", {
		ref,
		id: `components-form-token-input-${instanceId}`,
		type: "text",
		...restProps,
		value: value || "",
		onChange: onChangeHandler,
		onFocus: onFocusHandler,
		onBlur: onBlurHandler,
		size,
		className: clsx(className, "components-form-token-field__input"),
		autoComplete: "off",
		role: "combobox",
		"aria-expanded": isExpanded,
		"aria-autocomplete": "list",
		"aria-owns": isExpanded ? `components-form-token-suggestions-${instanceId}` : void 0,
		"aria-activedescendant": hasFocus && selectedSuggestionIndex !== -1 && isExpanded ? `components-form-token-suggestions-${instanceId}-${selectedSuggestionIndex}` : void 0,
		"aria-describedby": ariaDescribedBy
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 47,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, TokenInput;
function init_token_input() {
	return (init_token_input = __esmMin((() => {
		init_clsx();
		init_react();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/form-token-field/token-input.tsx";
		TokenInput = (0, import_react.forwardRef)(UnForwardedTokenInput);
		TokenInput.displayName = "TokenInput";
		try {
			UnForwardedTokenInput.__docgenInfo = {
				"description": "",
				"displayName": "UnForwardedTokenInput",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/form-token-field/token-input.tsx",
				"methods": [],
				"props": {
					"isExpanded": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenInputProps"
						}],
						"description": "",
						"name": "isExpanded",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenInputProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"instanceId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenInputProps"
						}],
						"description": "",
						"name": "instanceId",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenInputProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "string | number" }
					},
					"selectedSuggestionIndex": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenInputProps"
						}],
						"description": "",
						"name": "selectedSuggestionIndex",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenInputProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "number" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenInputProps"
						}],
						"description": "",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenInputProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "(({ value }: { value: string; }) => void)" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenInputProps"
						}],
						"description": "",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenInputProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			TokenInput.__docgenInfo = {
				"description": "",
				"displayName": "TokenInput",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/form-token-field/token-input.tsx",
				"methods": [],
				"props": {
					"isExpanded": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenInputProps"
						}],
						"description": "",
						"name": "isExpanded",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenInputProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"instanceId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenInputProps"
						}],
						"description": "",
						"name": "instanceId",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenInputProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "string | number" }
					},
					"selectedSuggestionIndex": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenInputProps"
						}],
						"description": "",
						"name": "selectedSuggestionIndex",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenInputProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "number" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenInputProps"
						}],
						"description": "",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenInputProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "(({ value }: { value: string; }) => void)" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenInputProps"
						}],
						"description": "",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "TokenInputProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/form-token-field/suggestions-list.tsx
function SuggestionsList({ selectedIndex, scrollIntoView, match, onHover, onSelect, suggestions = [], displayTransform, instanceId, __experimentalRenderItem }) {
	const listRef = useRefEffect((listNode) => {
		if (selectedIndex > -1 && scrollIntoView && listNode.children[selectedIndex]) listNode.children[selectedIndex].scrollIntoView({
			behavior: "instant",
			block: "nearest",
			inline: "nearest"
		});
	}, [selectedIndex, scrollIntoView]);
	const handleHover = (suggestion) => {
		return () => {
			onHover?.(suggestion);
		};
	};
	const handleClick = (suggestion) => {
		return () => {
			onSelect?.(suggestion);
		};
	};
	const computeSuggestionMatch = (suggestion) => {
		const matchText = displayTransform(match).normalize("NFKC").toLocaleLowerCase();
		if (matchText.length === 0) return null;
		const transformedSuggestion = displayTransform(suggestion);
		const indexOfMatch = transformedSuggestion.normalize("NFKC").toLocaleLowerCase().indexOf(matchText);
		return {
			suggestionBeforeMatch: transformedSuggestion.substring(0, indexOfMatch),
			suggestionMatch: transformedSuggestion.substring(indexOfMatch, indexOfMatch + matchText.length),
			suggestionAfterMatch: transformedSuggestion.substring(indexOfMatch + matchText.length)
		};
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
		ref: listRef,
		className: "components-form-token-field__suggestions-list",
		id: `components-form-token-suggestions-${instanceId}`,
		role: "listbox",
		children: [suggestions.map((suggestion, index) => {
			const matchText = computeSuggestionMatch(suggestion);
			const isSelected = index === selectedIndex;
			const isDisabled = typeof suggestion === "object" && suggestion?.disabled;
			const key = typeof suggestion === "object" && "value" in suggestion ? suggestion?.value : displayTransform(suggestion);
			const className = clsx("components-form-token-field__suggestion", { "is-selected": isSelected });
			let output;
			if (typeof __experimentalRenderItem === "function") output = __experimentalRenderItem({ item: suggestion });
			else if (matchText) output = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				"aria-label": displayTransform(suggestion),
				children: [
					matchText.suggestionBeforeMatch,
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
						className: "components-form-token-field__suggestion-match",
						children: matchText.suggestionMatch
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 117,
						columnNumber: 8
					}, this),
					matchText.suggestionAfterMatch
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 115,
				columnNumber: 7
			}, this);
			else output = displayTransform(suggestion);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
				id: `components-form-token-suggestions-${instanceId}-${index}`,
				role: "option",
				className,
				onMouseDown: handleMouseDown,
				onClick: handleClick(suggestion),
				onMouseEnter: handleHover(suggestion),
				"aria-selected": index === selectedIndex,
				"aria-disabled": isDisabled,
				children: output
			}, key, false, {
				fileName: _jsxFileName,
				lineNumber: 129,
				columnNumber: 6
			}, this);
		}), suggestions.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
			className: "components-form-token-field__suggestion is-empty",
			children: __("No items found")
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 146,
			columnNumber: 5
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 86,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, handleMouseDown;
function init_suggestions_list() {
	return (init_suggestions_list = __esmMin((() => {
		init_clsx();
		init_use_ref_effect();
		init_build_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/form-token-field/suggestions-list.tsx";
		handleMouseDown = (e) => {
			e.preventDefault();
		};
		try {
			SuggestionsList.__docgenInfo = {
				"description": "",
				"displayName": "SuggestionsList",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/form-token-field/suggestions-list.tsx",
				"methods": [],
				"props": {
					"selectedIndex": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "SuggestionsListProps"
						}],
						"description": "",
						"name": "selectedIndex",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "SuggestionsListProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "number" }
					},
					"scrollIntoView": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "SuggestionsListProps"
						}],
						"description": "",
						"name": "scrollIntoView",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "SuggestionsListProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"match": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "SuggestionsListProps"
						}],
						"description": "",
						"name": "match",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "SuggestionsListProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "string | { value: string; disabled?: boolean | undefined; }" }
					},
					"onHover": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "SuggestionsListProps"
						}],
						"description": "",
						"name": "onHover",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "SuggestionsListProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(suggestion: T) => void" }
					},
					"onSelect": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "SuggestionsListProps"
						}],
						"description": "",
						"name": "onSelect",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "SuggestionsListProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(suggestion: T) => void" }
					},
					"suggestions": {
						"defaultValue": { "value": "[]" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "SuggestionsListProps"
						}],
						"description": "",
						"name": "suggestions",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "SuggestionsListProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "T[]" }
					},
					"displayTransform": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "SuggestionsListProps"
						}],
						"description": "",
						"name": "displayTransform",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "SuggestionsListProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(value: T) => string" }
					},
					"instanceId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "SuggestionsListProps"
						}],
						"description": "",
						"name": "instanceId",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "SuggestionsListProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "string | number" }
					},
					"__experimentalRenderItem": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "SuggestionsListProps"
						}],
						"description": "",
						"name": "__experimentalRenderItem",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-token-field/types.ts",
							"name": "SuggestionsListProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((args: { item: T; }) => ReactNode)" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_token_input as i, init_suggestions_list as n, TokenInput as r, SuggestionsList as t };
