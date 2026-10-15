import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { br as addQueryArgs, d as init_build_module, n as store, t as init_build_module$1, u as index_default, xr as init_add_query_args } from "./build-module-DnDwhkiu.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { Un as getFilename } from "./utils-DWipWnH0.js";
import { n as useEvent, t as init_use_event } from "./use-event-BTRhHipl.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { i as _x, n as __, t as init_build_module$2 } from "./build-module-v04us4E2.js";
import { i as useSelect } from "./dispatch-abVPMST3.js";
import { n as useDebounce, t as init_use_debounce } from "./use-debounce-D2hjAck8.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as video_default, r as audio_default } from "./video-MtpYECDY.js";
import { D as file_default } from "./verse-DH2nco10.js";
import { t as comment_author_avatar_default } from "./comment-author-avatar-BV_eEFs-.js";
import { t as image_default } from "./image-abFwUJJA.js";
import { a as Popup, i as init_trigger, n as init_root, o as init_popup, r as Trigger, t as Root } from "./root-eBr7kd_E.js";
import { n as init_link, t as Link } from "./link-DMYAq1wz.js";
import { a as combobox_control_default, o as init_combobox_control } from "./radio-control-CzM8R9J_.js";
import { c as init_component, s as component_default } from "./private-apis-DYvlicGd.js";
import { n as init_icon, t as icon_default } from "./icon-oSwa7eHF.js";
import { n as init_component$1, t as component_default$1 } from "./component-C-u1iSHf.js";
import { a as resolveSelect, n as init_build_module$3 } from "./build-module-DkpHnLlB.js";
import { n as init_component$2, t as component_default$2 } from "./component-C_SA79G6.js";
import { n as init_build_module$4, t as decodeEntities } from "./build-module-CUTW1uKI.js";
import { n as init_dataform, t as DataForm } from "./dataform-BZ-EGs0W.js";
import { n as init_dataviews, t as dataviews_default } from "./dataviews-iV2Rb-nQ.js";
import { r as init_build_module$5 } from "./library.story-DawnfKTW.js";
//#region ../packages/core-data/build-module/fetch/__experimental-fetch-link-suggestions.mjs
async function fetchLinkSuggestions(search, searchOptions = {}, editorSettings = {}) {
	const { type, subtype, preferTypes, page, perPage = searchOptions.isInitialSuggestions ? 3 : 20 } = searchOptions.isInitialSuggestions && searchOptions.initialSuggestionsSearchOptions ? {
		...searchOptions,
		...searchOptions.initialSuggestionsSearchOptions
	} : searchOptions;
	const { disablePostFormats = false } = editorSettings;
	const queries = [];
	if (!type || type === "post") queries.push(index_default({ path: addQueryArgs("/wp/v2/search", {
		search,
		page,
		per_page: perPage,
		type: "post",
		subtype
	}) }).then((results2) => {
		return results2.map((result) => {
			return {
				id: result.id,
				url: result.url,
				title: decodeEntities(result.title || "") || __("(no title)"),
				type: result.subtype || result.type,
				kind: "post-type"
			};
		});
	}).catch(() => []));
	if (!type || type === "term") queries.push(index_default({ path: addQueryArgs("/wp/v2/search", {
		search,
		page,
		per_page: perPage,
		type: "term",
		subtype
	}) }).then((results2) => {
		return results2.map((result) => {
			return {
				id: result.id,
				url: result.url,
				title: decodeEntities(result.title || "") || __("(no title)"),
				type: result.subtype || result.type,
				kind: "taxonomy"
			};
		});
	}).catch(() => []));
	if (!disablePostFormats && (!type || type === "post-format")) queries.push(index_default({ path: addQueryArgs("/wp/v2/search", {
		search,
		page,
		per_page: perPage,
		type: "post-format",
		subtype
	}) }).then((results2) => {
		return results2.map((result) => {
			return {
				id: result.id,
				url: result.url,
				title: decodeEntities(result.title || "") || __("(no title)"),
				type: result.subtype || result.type,
				kind: "taxonomy"
			};
		});
	}).catch(() => []));
	if (!type || type === "attachment") queries.push(index_default({ path: addQueryArgs("/wp/v2/media", {
		search,
		page,
		per_page: perPage
	}) }).then((results2) => {
		return results2.map((result) => {
			return {
				id: result.id,
				url: result.source_url,
				title: decodeEntities(result.title.rendered || "") || __("(no title)"),
				type: result.type,
				kind: "media"
			};
		});
	}).catch(() => []));
	let results = (await Promise.all(queries)).flat();
	results = results.filter((result) => !!result.id);
	return sortResults({
		results,
		search,
		preferTypes
	});
}
function getTitleMatch(title, search) {
	const plain = (text) => (text ?? "").toLowerCase().trim().replace(/[\u2018\u2019]/g, "'").replace(/[\u201c\u201d]/g, "\"");
	const haystack = plain(title);
	const needle = plain(search);
	if (!haystack || !needle) return {
		contains: false,
		begins: false
	};
	return {
		contains: haystack.includes(needle),
		begins: haystack.startsWith(needle)
	};
}
function getSearchType(result) {
	if (result.kind === "media") return "attachment";
	if (result.type === "post-format") return "post-format";
	return result.kind === "taxonomy" ? "term" : "post";
}
function getTypeRank(result, preferTypes = []) {
	const searchType = getSearchType(result);
	const preferred = preferTypes.findIndex((entry) => typeof entry === "string" ? entry === searchType : entry.type === searchType && entry.subtype === result.type);
	if (preferred !== -1) return TYPE_ORDER.length + (preferTypes.length - preferred);
	return TYPE_ORDER.length - TYPE_ORDER.indexOf(searchType);
}
function countWordsFound(title, searchTokens) {
	const titleTokens = tokenize(title || "");
	return searchTokens.filter((searchToken) => titleTokens.some((titleToken) => titleToken.includes(searchToken))).length;
}
function getCoverage(title, searchTokens) {
	if (!title || !searchTokens.length) return 0;
	const titleTokens = tokenize(title);
	return searchTokens.reduce((total, searchToken) => {
		return total + titleTokens.reduce((most, titleToken) => titleToken.includes(searchToken) ? Math.max(most, searchToken.length / titleToken.length) : most, 0);
	}, 0) / searchTokens.length * 10;
}
function sortResults({ results, search, preferTypes }) {
	const searchTokens = tokenize(search);
	const scored = results.map((result) => ({
		result,
		found: countWordsFound(result.title, searchTokens),
		...getTitleMatch(result.title, search),
		type: getTypeRank(result, preferTypes),
		score: getCoverage(result.title, searchTokens)
	}));
	scored.sort((a, b) => b.found - a.found || Number(b.contains) - Number(a.contains) || b.type - a.type || Number(b.begins) - Number(a.begins) || b.score - a.score);
	return scored.map(({ result }) => result);
}
function tokenize(text) {
	return text.toLowerCase().match(/[\p{L}\p{N}]+/gu) || [];
}
var TYPE_ORDER;
function init___experimental_fetch_link_suggestions() {
	return (init___experimental_fetch_link_suggestions = __esmMin((() => {
		init_build_module();
		init_add_query_args();
		init_build_module$4();
		init_build_module$2();
		TYPE_ORDER = [
			"post",
			"term",
			"post-format",
			"attachment"
		];
	})))();
}
//#endregion
//#region ../packages/media-fields/src/alt_text/index.tsx
var import_jsx_dev_runtime$7, _jsxFileName$7, altTextField;
function init_alt_text() {
	return (init_alt_text = __esmMin((() => {
		init_build_module$2();
		init_link();
		import_jsx_dev_runtime$7 = require_jsx_dev_runtime();
		_jsxFileName$7 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/media-fields/src/alt_text/index.tsx";
		altTextField = {
			id: "alt_text",
			type: "text",
			label: __("Alt text"),
			description: /* @__PURE__ */ (0, import_jsx_dev_runtime$7.jsxDEV)(import_jsx_dev_runtime$7.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime$7.jsxDEV)(Link, {
					href: __("https://www.w3.org/WAI/tutorials/images/decision-tree/"),
					openInNewTab: true,
					children: __("Describe the purpose of the image.")
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 12,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime$7.jsxDEV)("br", {}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 23,
					columnNumber: 4
				}, void 0),
				__("Leave empty if decorative.")
			] }, void 0, true, {
				fileName: _jsxFileName$7,
				lineNumber: 11,
				columnNumber: 3
			}, void 0),
			isVisible: (item) => item?.media_type === "image",
			render: ({ item }) => item?.alt_text || "-",
			Edit: {
				control: "textarea",
				rows: 2
			},
			enableSorting: false,
			filterBy: false
		};
	})))();
}
//#endregion
//#region ../packages/media-fields/src/utils/get-rendered-content.ts
/**
* Utility function to extract rendered content from either a string or an object
* containing raw and rendered properties.
*
* This handles the inconsistency in WordPress REST API responses where
* some fields like caption and description can be either:
* - A simple string
* - An object with { raw: string, rendered: string }
*
* @param content - The content to extract raw value from
* @return The rendered content string, falling back to raw or empty string if content is falsy
*/
function getRenderedContent(content) {
	if (!content) return "";
	if (typeof content === "string") return content;
	if (typeof content === "object") return content.rendered || content.raw || "";
	return "";
}
//#endregion
//#region ../packages/media-fields/src/attached_to/view.tsx
function MediaAttachedToView({ item }) {
	const [attachedPostTitle, setAttachedPostTitle] = (0, import_react.useState)(null);
	const parentId = item.post;
	const embeddedPostId = item._embedded?.["wp:attached-to"]?.[0]?.id;
	const embeddedPostTitle = item._embedded?.["wp:attached-to"]?.[0]?.title;
	(0, import_react.useEffect)(() => {
		if (!!parentId && parentId === embeddedPostId) setAttachedPostTitle(getRenderedContent(embeddedPostTitle) || __("(no title)"));
		if (!parentId) setAttachedPostTitle(__("(Unattached)"));
	}, [
		parentId,
		embeddedPostId,
		embeddedPostTitle
	]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(import_jsx_dev_runtime$6.Fragment, { children: attachedPostTitle }, void 0, false, {
		fileName: _jsxFileName$6,
		lineNumber: 34,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime$6, _jsxFileName$6;
function init_view() {
	return (init_view = __esmMin((() => {
		init_react();
		init_build_module$2();
		import_jsx_dev_runtime$6 = require_jsx_dev_runtime();
		_jsxFileName$6 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/media-fields/src/attached_to/view.tsx";
		try {
			MediaAttachedToView.__docgenInfo = {
				"description": "",
				"displayName": "view",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/media-fields/src/attached_to/view.tsx",
				"methods": [],
				"props": {
					"item": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/build-types/types/field-api.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "The item being rendered.",
						"name": "item",
						"required": true,
						"tags": {},
						"type": { "name": "MediaItem" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/build-types/types/field-api.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "The normalized field being rendered.",
						"name": "field",
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedField<MediaItem>" }
					},
					"config": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/build-types/types/field-api.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Layout-specific configuration for the renderer.",
						"name": "config",
						"required": false,
						"tags": {},
						"type": { "name": "{ sizes: string; }" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/media-fields/src/attached_to/edit.tsx
function MediaAttachedToEdit({ data, onChange }) {
	const defaultPost = !!data.post && !!data?._embedded?.["wp:attached-to"]?.[0] ? [{
		label: getRenderedContent(data._embedded?.["wp:attached-to"]?.[0]?.title),
		value: data.post.toString()
	}] : [];
	const [options, setOptions] = (0, import_react.useState)(defaultPost);
	const [searchResults, setSearchResults] = (0, import_react.useState)([]);
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const [value, setValue] = (0, import_react.useState)(data?.post?.toString() ?? null);
	const postTypes = useSelect((select) => select(store).getPostTypes(), []);
	const handleDetach = () => {
		onChange({
			post: 0,
			_embedded: {
				...data?._embedded,
				"wp:attached-to": void 0
			}
		});
		setValue(null);
	};
	const onValueChange = async (filterValue) => {
		setIsLoading(true);
		const results = await fetchLinkSuggestions(filterValue, {
			type: "post",
			isInitialSuggestions: true
		}, {});
		setSearchResults(results);
		const suggestions = results.map((result) => {
			return {
				label: result.title,
				value: result.id.toString()
			};
		});
		const includeCurrent = !filterValue && suggestions.findIndex((s) => s.value === value) === -1;
		setOptions(suggestions.concat(includeCurrent ? defaultPost : []));
		setIsLoading(false);
	};
	const debouncedValueChange = useDebounce(useEvent(onValueChange), 300);
	/**
	* Handle selection.
	*
	* @param {Object} selectedPostId The selected post id.
	*/
	const handleSelectOption = (selectedPostId) => {
		if (!selectedPostId) {
			handleDetach();
			return;
		}
		setValue(selectedPostId);
		if (selectedPostId) {
			const selectedPost = searchResults.find((result) => result.id === Number(selectedPostId));
			if (selectedPost && postTypes) {
				const postType = postTypes.find((_postType) => _postType.slug === selectedPost?.type);
				const attachedTo = {
					...postType && { type: postType.slug },
					id: Number(selectedPostId),
					title: {
						raw: selectedPost.title,
						rendered: selectedPost.title
					}
				};
				onChange({
					post: Number(selectedPostId),
					_embedded: {
						...data?._embedded,
						"wp:attached-to": [attachedTo]
					}
				});
			}
		}
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(combobox_control_default, {
		className: "dataviews-media-field__attached-to",
		isLoading,
		label: __("Attached to"),
		help: __("Attach this file to a single post or page."),
		value,
		options,
		onFilterValueChange: (filterValue) => debouncedValueChange(filterValue),
		onChange: handleSelectOption,
		hideLabelFromVision: true,
		expandOnFocus: false
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 150,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$5, _jsxFileName$5;
function init_edit() {
	return (init_edit = __esmMin((() => {
		init_build_module$1();
		init_combobox_control();
		init_build_module$2();
		init_react();
		init_use_debounce(), init_use_event();
		init_build_module$3();
		import_jsx_dev_runtime$5 = require_jsx_dev_runtime();
		_jsxFileName$5 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/media-fields/src/attached_to/edit.tsx";
		try {
			MediaAttachedToEdit.__docgenInfo = {
				"description": "",
				"displayName": "edit",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/media-fields/src/attached_to/edit.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/build-types/types/field-api.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "The item being edited.",
						"name": "data",
						"required": true,
						"tags": {},
						"type": { "name": "MediaItem" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/build-types/types/field-api.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "The normalized field the control edits.",
						"name": "field",
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedField<MediaItem>" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/build-types/types/field-api.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback the control invokes with the updated (partial) item\nwhen the value changes.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: DeepPartial<MediaItem>) => void" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/build-types/types/field-api.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to hide the control's label visually\nwhile keeping it available to assistive technology.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/build-types/types/field-api.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label the control as \"optional\" when _not_ required, instead of showing \"required\".",
						"name": "markWhenOptional",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"operator": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/build-types/types/field-api.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "The currently selected filter operator for this field.\n\nUsed by DataViews filters to determine which control to render based on the operator type.",
						"name": "operator",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Operator",
							"value": [
								{ "value": "\"is\"" },
								{ "value": "\"on\"" },
								{ "value": "\"startsWith\"" },
								{ "value": "\"over\"" },
								{ "value": "\"after\"" },
								{ "value": "\"isNot\"" },
								{ "value": "\"isAny\"" },
								{ "value": "\"isNone\"" },
								{ "value": "\"isAll\"" },
								{ "value": "\"isNotAll\"" },
								{ "value": "\"lessThan\"" },
								{ "value": "\"greaterThan\"" },
								{ "value": "\"lessThanOrEqual\"" },
								{ "value": "\"greaterThanOrEqual\"" },
								{ "value": "\"before\"" },
								{ "value": "\"beforeInc\"" },
								{ "value": "\"afterInc\"" },
								{ "value": "\"contains\"" },
								{ "value": "\"notContains\"" },
								{ "value": "\"between\"" },
								{ "value": "\"notOn\"" },
								{ "value": "\"inThePast\"" }
							]
						}
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/build-types/types/field-api.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Validity information for the field, if any.",
						"name": "validity",
						"required": false,
						"tags": {},
						"type": { "name": "FieldValidity" }
					},
					"config": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/build-types/types/field-api.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Configuration object for the control.",
						"name": "config",
						"required": false,
						"tags": {},
						"type": { "name": "{ prefix?: string | ComponentType<{}>; prefixPadding?: \"default\" | \"minimal\"; suffix?: string | ComponentType<{}> | undefined; suffixPadding?: \"default\" | ... 1 more ... | undefined; rows?: number | undefined; compact?: boolean | undefined; } | undefined" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/media-fields/src/attached_to/index.tsx
var attachedToField;
function init_attached_to() {
	return (init_attached_to = __esmMin((() => {
		init_build_module$2();
		init_view();
		init_edit();
		attachedToField = {
			id: "attached_to",
			type: "text",
			label: __("Attached to"),
			Edit: MediaAttachedToEdit,
			render: MediaAttachedToView,
			enableSorting: false,
			filterBy: false
		};
	})))();
}
//#endregion
//#region ../packages/media-fields/src/author/view.tsx
function AuthorView({ item }) {
	const author = item?._embedded?.author?.[0];
	const text = author?.name;
	const imageUrl = author?.avatar_urls?.[48];
	const [loadingState, setLoadingState] = (0, import_react.useState)("loading");
	(0, import_react.useEffect)(() => {
		setLoadingState("loading");
	}, [imageUrl]);
	const imgRef = (0, import_react.useCallback)((img) => {
		if (img?.complete) setLoadingState("instant");
	}, []);
	const handleLoad = () => {
		if (loadingState === "loading") setLoadingState("loaded");
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(component_default$1, {
		alignment: "left",
		spacing: 0,
		children: [
			!!imageUrl && /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)("div", {
				className: clsx("media-author-field__avatar", {
					"is-loading": loadingState === "loading",
					"is-loaded": loadingState === "loaded"
				}),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)("img", {
					ref: imgRef,
					onLoad: handleLoad,
					alt: __("Author avatar"),
					src: imageUrl
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 52,
					columnNumber: 6
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 46,
				columnNumber: 5
			}, this),
			!imageUrl && /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)("div", {
				className: "media-author-field__icon",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(icon_default, { icon: comment_author_avatar_default }, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 62,
					columnNumber: 6
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 61,
				columnNumber: 5
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)("span", {
				className: "media-author-field__name",
				children: text
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 65,
				columnNumber: 4
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$4,
		lineNumber: 44,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$4, _jsxFileName$4;
function init_view$1() {
	return (init_view$1 = __esmMin((() => {
		init_clsx();
		init_build_module$2();
		init_react();
		init_build_module$5();
		init_component$1(), init_icon();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/media-fields/src/author/view.tsx";
		try {
			AuthorView.__docgenInfo = {
				"description": "",
				"displayName": "view",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/media-fields/src/author/view.tsx",
				"methods": [],
				"props": {
					"item": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/build-types/types/field-api.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "The item being rendered.",
						"name": "item",
						"required": true,
						"tags": {},
						"type": { "name": "MediaItem" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/build-types/types/field-api.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "The normalized field being rendered.",
						"name": "field",
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedField<MediaItem>" }
					},
					"config": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/build-types/types/field-api.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Layout-specific configuration for the renderer.",
						"name": "config",
						"required": false,
						"tags": {},
						"type": { "name": "{ sizes: string; }" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/media-fields/src/author/index.tsx
var authorField;
function init_author() {
	return (init_author = __esmMin((() => {
		init_build_module$2();
		init_build_module$3();
		init_build_module$1();
		init_view$1();
		authorField = {
			label: __("Author"),
			id: "author",
			type: "integer",
			getElements: async () => {
				return (await resolveSelect(store).getEntityRecords("root", "user", {
					per_page: -1,
					who: "authors",
					_fields: "id,name",
					context: "view"
				}) ?? []).map(({ id, name }) => ({
					value: id,
					label: name
				}));
			},
			render: AuthorView,
			filterBy: { operators: ["isAny", "isNone"] },
			readOnly: true
		};
	})))();
}
//#endregion
//#region ../packages/media-fields/src/utils/get-raw-content.ts
/**
* Utility function to extract raw content from either a string or an object
* containing raw and rendered properties.
*
* This handles the inconsistency in WordPress REST API responses where
* some fields like caption and description can be either:
* - A simple string
* - An object with { raw: string, rendered: string }
*
* @param content - The content to extract raw value from
* @return The raw content string, or empty string if content is falsy
*/
function getRawContent(content) {
	if (!content) return "";
	if (typeof content === "string") return content;
	if (typeof content === "object" && "raw" in content) return content.raw || "";
	return "";
}
//#endregion
//#region ../packages/media-fields/src/caption/index.tsx
var captionField;
function init_caption() {
	return (init_caption = __esmMin((() => {
		init_build_module$2();
		captionField = {
			id: "caption",
			type: "text",
			label: __("Caption"),
			getValue: ({ item }) => getRawContent(item?.caption),
			render: ({ item }) => getRawContent(item?.caption) || "-",
			Edit: {
				control: "textarea",
				rows: 2
			},
			enableSorting: false,
			filterBy: false
		};
	})))();
}
//#endregion
//#region ../packages/media-fields/src/date_added/index.tsx
var dateAddedField;
function init_date_added() {
	return (init_date_added = __esmMin((() => {
		init_build_module$2();
		dateAddedField = {
			id: "date",
			type: "datetime",
			label: __("Date added"),
			filterBy: { operators: ["before", "after"] },
			readOnly: true
		};
	})))();
}
//#endregion
//#region ../packages/media-fields/src/date_modified/index.tsx
var dateModifiedField;
function init_date_modified() {
	return (init_date_modified = __esmMin((() => {
		init_build_module$2();
		dateModifiedField = {
			id: "modified",
			type: "datetime",
			label: __("Date modified"),
			filterBy: { operators: ["before", "after"] },
			readOnly: true
		};
	})))();
}
//#endregion
//#region ../packages/media-fields/src/description/index.tsx
var import_jsx_dev_runtime$3, _jsxFileName$3, descriptionField;
function init_description() {
	return (init_description = __esmMin((() => {
		init_build_module$2();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/media-fields/src/description/index.tsx";
		descriptionField = {
			id: "description",
			type: "text",
			label: __("Description"),
			getValue: ({ item }) => getRawContent(item?.description),
			render: ({ item }) => /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("div", { children: getRawContent(item?.description) || "-" }, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 12,
				columnNumber: 3
			}, void 0),
			Edit: {
				control: "textarea",
				rows: 5
			},
			enableSorting: false,
			filterBy: false
		};
	})))();
}
//#endregion
//#region ../packages/media-fields/src/filename/view.tsx
function FileNameView({ item }) {
	const fileName = (0, import_react.useMemo)(() => item?.source_url ? getFilename(item.source_url) : null, [item?.source_url]);
	if (!fileName) return "";
	if (fileName.length <= TRUNCATE_LENGTH) return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("span", {
		className: "dataviews-media-field__filename",
		children: fileName
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 26,
		columnNumber: 4
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Root, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Trigger, { render: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("span", {
		className: "dataviews-media-field__filename",
		children: fileName
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 40,
		columnNumber: 6
	}, this) }, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 38,
		columnNumber: 4
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Popup, { children: fileName }, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 45,
		columnNumber: 4
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 37,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$2, _jsxFileName$2, TRUNCATE_LENGTH;
function init_view$2() {
	return (init_view$2 = __esmMin((() => {
		init_react();
		init_root(), init_trigger(), init_popup();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/media-fields/src/filename/view.tsx";
		TRUNCATE_LENGTH = 15;
		try {
			FileNameView.__docgenInfo = {
				"description": "",
				"displayName": "view",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/media-fields/src/filename/view.tsx",
				"methods": [],
				"props": {
					"item": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/build-types/types/field-api.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "The item being rendered.",
						"name": "item",
						"required": true,
						"tags": {},
						"type": { "name": "MediaItem" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/build-types/types/field-api.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "The normalized field being rendered.",
						"name": "field",
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedField<MediaItem>" }
					},
					"config": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/build-types/types/field-api.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Layout-specific configuration for the renderer.",
						"name": "config",
						"required": false,
						"tags": {},
						"type": { "name": "{ sizes: string; }" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/media-fields/src/filename/index.ts
var filenameField;
function init_filename() {
	return (init_filename = __esmMin((() => {
		init_build_module$2();
		init_view$2();
		filenameField = {
			id: "filename",
			type: "text",
			label: __("File name"),
			getValue: ({ item }) => getFilename(item?.source_url || ""),
			render: FileNameView,
			enableSorting: false,
			filterBy: false,
			readOnly: true
		};
	})))();
}
//#endregion
//#region ../packages/media-fields/src/filesize/index.tsx
function getBytesString(bytes, unitSymbol, decimals = 2) {
	return sprintf(_x("%1$s %2$s", "file size"), bytes.toLocaleString(void 0, {
		minimumFractionDigits: 0,
		maximumFractionDigits: decimals
	}), unitSymbol);
}
/**
* Converts bytes to a human-readable file size string with a specified number of decimal places.
*
* This logic is comparable to core's `size_format()` function.
*
* @param bytes    The size in bytes.
* @param decimals The number of decimal places to include in the result.
* @return         The human-readable file size string.
*/
function formatFileSize(bytes, decimals = 2) {
	if (bytes === 0) return getBytesString(0, _x("B", "unit symbol"), decimals);
	const quant = {
		[_x("YB", "unit symbol")]: YB_IN_BYTES,
		[_x("ZB", "unit symbol")]: ZB_IN_BYTES,
		[_x("EB", "unit symbol")]: EB_IN_BYTES,
		[_x("PB", "unit symbol")]: PB_IN_BYTES,
		[_x("TB", "unit symbol")]: TB_IN_BYTES,
		[_x("GB", "unit symbol")]: GB_IN_BYTES,
		[_x("MB", "unit symbol")]: MB_IN_BYTES,
		[_x("KB", "unit symbol")]: KB_IN_BYTES,
		[_x("B", "unit symbol")]: 1
	};
	for (const [unit, mag] of Object.entries(quant)) if (bytes >= mag) return getBytesString(bytes / mag, unit, decimals);
	return "";
}
var KB_IN_BYTES, MB_IN_BYTES, GB_IN_BYTES, TB_IN_BYTES, PB_IN_BYTES, EB_IN_BYTES, ZB_IN_BYTES, YB_IN_BYTES, filesizeField;
function init_filesize() {
	return (init_filesize = __esmMin((() => {
		init_build_module$2();
		KB_IN_BYTES = 1024;
		MB_IN_BYTES = 1024 * KB_IN_BYTES;
		GB_IN_BYTES = 1024 * MB_IN_BYTES;
		TB_IN_BYTES = 1024 * GB_IN_BYTES;
		PB_IN_BYTES = 1024 * TB_IN_BYTES;
		EB_IN_BYTES = 1024 * PB_IN_BYTES;
		ZB_IN_BYTES = 1024 * EB_IN_BYTES;
		YB_IN_BYTES = 1024 * ZB_IN_BYTES;
		filesizeField = {
			id: "filesize",
			type: "text",
			label: __("File size"),
			getValue: ({ item }) => item?.media_details?.filesize ? formatFileSize(item?.media_details?.filesize) : "",
			isVisible: (item) => {
				return !!item?.media_details?.filesize;
			},
			enableSorting: false,
			filterBy: false,
			readOnly: true
		};
	})))();
}
//#endregion
//#region ../packages/media-fields/src/media_dimensions/index.ts
var mediaDimensionsField;
function init_media_dimensions() {
	return (init_media_dimensions = __esmMin((() => {
		init_build_module$2();
		mediaDimensionsField = {
			id: "media_dimensions",
			type: "text",
			label: __("Dimensions"),
			getValue: ({ item }) => item?.media_details?.width && item?.media_details?.height ? sprintf(_x("%1$s × %2$s", "image dimensions"), item?.media_details?.width?.toString(), item?.media_details?.height?.toString()) : "",
			isVisible: (item) => {
				return !!(item?.media_details?.width && item?.media_details?.height);
			},
			enableSorting: false,
			filterBy: false,
			readOnly: true
		};
	})))();
}
//#endregion
//#region ../packages/media-fields/src/utils/get-media-type-from-mime-type.ts
/**
* Get the media type from a mime type, including an icon.
* TODO - media types should be formalized somewhere.
*
* References:
* https://developer.wordpress.org/reference/functions/wp_mime_type_icon/
* https://developer.wordpress.org/reference/hooks/mime_types/
* https://developer.wordpress.org/reference/functions/wp_get_mime_types/
*
* @param mimeType - The mime type to get the media type from.
* @return The media type.
*/
function getMediaTypeFromMimeType(mimeType) {
	if (mimeType.startsWith("image/")) return {
		type: "image",
		label: __("Image"),
		icon: image_default
	};
	if (mimeType.startsWith("video/")) return {
		type: "video",
		label: __("Video"),
		icon: video_default
	};
	if (mimeType.startsWith("audio/")) return {
		type: "audio",
		label: __("Audio"),
		icon: audio_default
	};
	return {
		type: "application",
		label: __("Application"),
		icon: file_default
	};
}
function init_get_media_type_from_mime_type() {
	return (init_get_media_type_from_mime_type = __esmMin((() => {
		init_build_module$2();
		init_build_module$5();
	})))();
}
//#endregion
//#region ../packages/media-fields/src/media_thumbnail/view.tsx
/**
* Given the available image sizes and a target display width, returns the URL
* of the smallest size whose width is >= the target. Falls back to the largest
* available size, or the original source_url.
*
* @param featuredMedia The media item with size details.
* @param configSizes   The target display size string (e.g. '900px').
*/
function getBestImageUrl(featuredMedia, configSizes) {
	const sizes = featuredMedia?.media_details?.sizes;
	if (!sizes) return featuredMedia.source_url;
	const sizeEntries = Object.values(sizes);
	if (!sizeEntries.length) return featuredMedia.source_url;
	const targetWidth = configSizes ? parseInt(configSizes, 10) : NaN;
	if (!Number.isNaN(targetWidth)) {
		const validEntries = sizeEntries.filter((s) => typeof s.width === "number" && !Number.isNaN(s.width));
		if (!validEntries.length) return featuredMedia.source_url;
		const sorted = validEntries.toSorted((a, b) => a.width - b.width);
		const match = sorted.find((s) => s.width >= targetWidth);
		if (match) return match.source_url;
		return sorted[sorted.length - 1].source_url;
	}
	return featuredMedia.source_url;
}
function FallbackView({ item, filename }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
		className: "dataviews-media-field__media-thumbnail",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(component_default$2, {
			justify: "center",
			alignment: "center",
			className: "dataviews-media-field__media-thumbnail__stack",
			spacing: 0,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(icon_default, {
				className: "dataviews-media-field__media-thumbnail--icon",
				icon: getMediaTypeFromMimeType(item.mime_type).icon,
				size: 24
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 82,
				columnNumber: 5
			}, this), !!filename && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
				className: "dataviews-media-field__media-thumbnail__filename",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(component_default, {
					className: "dataviews-media-field__media-thumbnail__filename__truncate",
					children: filename
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 89,
					columnNumber: 7
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 88,
				columnNumber: 6
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 76,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 75,
		columnNumber: 3
	}, this);
}
function ImageView({ item, configSizes, onError }) {
	const imageUrl = getBestImageUrl(item, configSizes);
	const imgRef = (0, import_react.useRef)(null);
	const [loadingState, setLoadingState] = (0, import_react.useState)("loading");
	(0, import_react.useLayoutEffect)(() => {
		if (imgRef.current?.complete) setLoadingState("instant");
		else setLoadingState("loading");
	}, [imageUrl]);
	const handleLoad = () => {
		if (loadingState === "loading") setLoadingState("loaded");
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
		className: clsx("dataviews-media-field__media-thumbnail", {
			"is-loading": loadingState === "loading",
			"is-loaded": loadingState === "loaded"
		}),
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("img", {
			ref: imgRef,
			className: "dataviews-media-field__media-thumbnail--image",
			src: imageUrl,
			alt: item.alt_text || item.title.raw,
			onLoad: handleLoad,
			onError,
			loading: "lazy"
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 144,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 138,
		columnNumber: 3
	}, this);
}
function MediaThumbnailView({ item, config }) {
	const [imageError, setImageError] = (0, import_react.useState)(false);
	const _featuredMedia = useSelect((select) => {
		if (!item.featured_media) return;
		return select(store).getEntityRecord("postType", "attachment", item.featured_media);
	}, [item.featured_media]);
	const featuredMedia = item.featured_media ? _featuredMedia : item;
	if (!featuredMedia) return null;
	const filename = getFilename(featuredMedia.source_url || "");
	if (imageError || getMediaTypeFromMimeType(featuredMedia.mime_type).type !== "image") return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(FallbackView, {
		item: featuredMedia,
		filename: filename || ""
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 193,
		columnNumber: 4
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ImageView, {
		item: featuredMedia,
		configSizes: config?.sizes,
		onError: () => setImageError(true)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 198,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_view$3() {
	return (init_view$3 = __esmMin((() => {
		init_clsx();
		init_build_module$3();
		init_build_module$1();
		init_component(), init_component$2(), init_icon();
		init_react();
		init_get_media_type_from_mime_type();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/media-fields/src/media_thumbnail/view.tsx";
		try {
			getBestImageUrl.__docgenInfo = {
				"description": "Given the available image sizes and a target display width, returns the URL\nof the smallest size whose width is >= the target. Falls back to the largest\navailable size, or the original source_url.",
				"displayName": "getBestImageUrl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/media-fields/src/media_thumbnail/view.tsx",
				"methods": [],
				"props": {},
				"tags": { "param": "featuredMedia The media item with size details.\nconfigSizes The target display size string (e.g. '900px')." }
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			MediaThumbnailView.__docgenInfo = {
				"description": "",
				"displayName": "view",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/media-fields/src/media_thumbnail/view.tsx",
				"methods": [],
				"props": {
					"item": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/build-types/types/field-api.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "The item being rendered.",
						"name": "item",
						"required": true,
						"tags": {},
						"type": { "name": "MediaItem" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/build-types/types/field-api.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "The normalized field being rendered.",
						"name": "field",
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedField<MediaItem>" }
					},
					"config": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/build-types/types/field-api.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Layout-specific configuration for the renderer.",
						"name": "config",
						"required": false,
						"tags": {},
						"type": { "name": "{ sizes: string; }" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/media-fields/src/media_thumbnail/index.tsx
var mediaThumbnailField;
function init_media_thumbnail() {
	return (init_media_thumbnail = __esmMin((() => {
		init_build_module$2();
		init_view$3();
		mediaThumbnailField = {
			id: "media_thumbnail",
			type: "media",
			label: __("Thumbnail"),
			render: MediaThumbnailView,
			enableSorting: false,
			filterBy: false
		};
	})))();
}
//#endregion
//#region ../packages/media-fields/src/mime_type/index.ts
var mimeTypeField;
function init_mime_type() {
	return (init_mime_type = __esmMin((() => {
		init_build_module$2();
		mimeTypeField = {
			id: "mime_type",
			type: "text",
			label: __("File type"),
			getValue: ({ item }) => item?.mime_type || "",
			render: ({ item }) => item?.mime_type || "-",
			enableSorting: false,
			filterBy: false,
			readOnly: true
		};
	})))();
}
//#endregion
//#region ../packages/media-fields/src/stories/index.story.tsx
var index_story_exports = /* @__PURE__ */ __exportAll({
	DataFormsPreview: () => DataFormsPreview,
	DataViewsPreview: () => DataViewsPreview,
	default: () => index_story_default
});
var import_jsx_dev_runtime, _jsxFileName, index_story_default, sampleMediaItem, sampleMediaItemZip, sampleMediaItemBrokenImage, showcaseFields, DataFormsComponent, DataFormsPreview, DataViewsPreview;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_dataform(), init_dataviews();
		init_alt_text(), init_attached_to(), init_author(), init_caption(), init_date_added(), init_date_modified(), init_description(), init_filename(), init_filesize(), init_media_dimensions(), init_media_thumbnail(), init_mime_type();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/media-fields/src/stories/index.story.tsx";
		index_story_default = {
			id: "fields-media-fields",
			title: "Design System/DataViews/Fields/Media Fields",
			component: DataForm
		};
		sampleMediaItem = {
			id: 123,
			date: "2024-01-15T10:30:00",
			date_gmt: "2024-01-15T10:30:00",
			guid: {
				raw: "https://cldup.com/cXyG__fTLN.jpg",
				rendered: "https://cldup.com/cXyG__fTLN.jpg"
			},
			modified: "2024-01-15T10:30:00",
			modified_gmt: "2024-01-15T10:30:00",
			slug: "sample-image",
			status: "publish",
			type: "attachment",
			link: "https://example.com/sample-image/",
			title: {
				raw: "Sample Image",
				rendered: "Sample Image"
			},
			author: 1,
			featured_media: 0,
			edit_root: 0,
			comment_status: "open",
			ping_status: "closed",
			template: "",
			meta: {},
			permalink_template: "https://example.com/?attachment_id=123",
			generated_slug: "sample-image",
			class_list: ["post-123", "attachment"],
			alt_text: "A beautiful sample image",
			caption: {
				raw: "A caption for the image",
				rendered: "<p>A caption for the image</p>\n"
			},
			description: {
				raw: "This is a detailed description of the sample image. It contains useful information about what the image depicts and its context.",
				rendered: "<p>This is a detailed description of the sample image. It contains useful information about what the image depicts and its context.</p>"
			},
			mime_type: "image/jpeg",
			media_type: "image",
			post: null,
			source_url: "https://cldup.com/cXyG__fTLN.jpg",
			media_details: {
				file: "sample-image.jpg",
				width: 1920,
				height: 1080,
				filesize: 524288,
				image_meta: {
					aperture: "2.8",
					credit: "",
					camera: "Sample Camera",
					caption: "",
					created_timestamp: "1705315800",
					copyright: "",
					focal_length: "50",
					iso: "100",
					shutter_speed: "0.004",
					title: "",
					orientation: "1",
					keywords: []
				},
				sizes: {
					thumbnail: {
						file: "sample-image-150x150.jpg",
						width: 150,
						height: 150,
						filesize: 8192,
						mime_type: "image/jpeg",
						source_url: "https://cldup.com/cXyG__fTLN.jpg"
					},
					medium: {
						file: "sample-image-300x169.jpg",
						width: 300,
						height: 169,
						filesize: 24576,
						mime_type: "image/jpeg",
						source_url: "https://cldup.com/cXyG__fTLN.jpg"
					}
				}
			},
			missing_image_sizes: [],
			_embedded: { author: [{
				id: 1,
				name: "John Doe",
				avatar_urls: {
					"24": "https://gravatar.com/avatar/?s=24&d=mm&r=g",
					"48": "https://gravatar.com/avatar/?s=48&d=mm&r=g",
					"96": "https://gravatar.com/avatar/?s=96&d=mm&r=g"
				}
			}] }
		};
		sampleMediaItemZip = {
			id: 101,
			date: "2025-11-07T00:28:54",
			date_gmt: "2025-11-07T00:28:54",
			guid: {
				raw: "http://localhost:8888/wp-content/uploads/2025/11/gutenberg-v22-0-0.zip",
				rendered: "http://localhost:8888/wp-content/uploads/2025/11/gutenberg-v22-0-0.zip"
			},
			modified: "2025-11-07T00:28:54",
			modified_gmt: "2025-11-07T00:28:54",
			slug: "gutenberg-v22-0-0",
			status: "publish",
			type: "attachment",
			link: "http://localhost:8888/gutenberg-v22-0-0/",
			title: {
				raw: "gutenberg-v22-0-0",
				rendered: "gutenberg-v22-0-0"
			},
			author: 1,
			featured_media: 0,
			edit_root: 0,
			comment_status: "open",
			ping_status: "closed",
			template: "",
			meta: {},
			permalink_template: "http://localhost:8888/?attachment_id=101",
			generated_slug: "gutenberg-v22-0-0",
			class_list: ["post-101", "attachment"],
			alt_text: "",
			caption: {
				raw: "",
				rendered: "<p>gutenberg-v22-0-0</p>\n"
			},
			description: {
				raw: "",
				rendered: ""
			},
			mime_type: "application/zip",
			media_type: "file",
			post: 123,
			source_url: "http://localhost:8888/wp-content/uploads/2025/11/gutenberg-v22-0-0.zip",
			media_details: {
				file: "gutenberg-v22-0-0.zip",
				filesize: 19988723,
				width: 0,
				height: 0,
				image_meta: {
					aperture: "",
					credit: "",
					camera: "",
					caption: "",
					created_timestamp: "",
					copyright: "",
					focal_length: "",
					iso: "",
					shutter_speed: "",
					title: "",
					orientation: "",
					keywords: []
				},
				sizes: {}
			},
			missing_image_sizes: [],
			_embedded: {
				"wp:attached-to": [{
					id: 123,
					date: "2025-12-19T00:21:52",
					slug: "",
					type: "post",
					link: "http://localhost:8888/?p=123",
					title: {
						raw: "A post title",
						rendered: "A post title"
					},
					excerpt: {
						raw: "",
						rendered: "",
						protected: false
					},
					author: 1,
					featured_media: 0
				}],
				author: [{
					id: 1,
					name: "Jane Smith",
					avatar_urls: {
						"24": "https://gravatar.com/avatar/?s=24&d=mm&r=g",
						"48": "https://gravatar.com/avatar/?s=48&d=mm&r=g",
						"96": "https://gravatar.com/avatar/?s=96&d=mm&r=g"
					}
				}]
			}
		};
		sampleMediaItemBrokenImage = {
			id: 124,
			date: "2024-01-16T10:30:00",
			date_gmt: "2024-01-16T10:30:00",
			guid: {
				raw: "https://example.com/broken-image.jpg",
				rendered: "https://example.com/broken-image.jpg"
			},
			modified: "2024-01-16T10:30:00",
			modified_gmt: "2024-01-16T10:30:00",
			slug: "broken-image",
			status: "publish",
			type: "attachment",
			link: "https://example.com/broken-image/",
			title: {
				raw: "Broken Image",
				rendered: "Broken Image"
			},
			author: 1,
			featured_media: 0,
			edit_root: 0,
			comment_status: "open",
			ping_status: "closed",
			template: "",
			meta: {},
			permalink_template: "https://example.com/?attachment_id=124",
			generated_slug: "broken-image",
			class_list: ["post-124", "attachment"],
			alt_text: "This image will fail to load",
			caption: {
				raw: "Image that demonstrates error handling",
				rendered: "<p>Image that demonstrates error handling</p>\n"
			},
			description: {
				raw: "",
				rendered: ""
			},
			mime_type: "image/jpeg",
			media_type: "image",
			post: null,
			source_url: "https://example.com/this-image-does-not-exist.jpg",
			media_details: {
				file: "broken-image.jpg",
				width: 1920,
				height: 1080,
				filesize: 0,
				sizes: {}
			},
			missing_image_sizes: [],
			_embedded: { author: [{
				id: 1,
				name: "Admin User",
				avatar_urls: {
					"24": "https://gravatar.com/avatar/?s=24&d=mm&r=g",
					"48": "https://gravatar.com/avatar/?s=48&d=mm&r=g",
					"96": "https://gravatar.com/avatar/?s=96&d=mm&r=g"
				}
			}] }
		};
		showcaseFields = [
			mediaThumbnailField,
			filenameField,
			altTextField,
			attachedToField,
			authorField,
			captionField,
			dateAddedField,
			dateModifiedField,
			descriptionField,
			mimeTypeField,
			mediaDimensionsField,
			filesizeField
		];
		DataFormsComponent = ({ type }) => {
			const [data, setData] = (0, import_react.useState)(sampleMediaItem);
			const handleChange = (updates) => {
				setData((prev) => ({
					...prev,
					...updates
				}));
			};
			const showcaseForm = {
				layout: { type },
				fields: [
					"media_thumbnail",
					"alt_text",
					"caption",
					"description",
					"filename",
					"mime_type",
					"media_dimensions",
					"filesize",
					"author",
					"date",
					"modified",
					"attached_to"
				]
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: { padding: "20px" },
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Media Fields" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 335,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "This story demonstrates all the media fields from the @wordpress/media-fields package within a DataForm." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 336,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataForm, {
						data,
						fields: showcaseFields,
						form: showcaseForm,
						onChange: handleChange
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 341,
						columnNumber: 4
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 334,
				columnNumber: 3
			}, void 0);
		};
		DataFormsPreview = {
			render: DataFormsComponent,
			argTypes: { type: {
				control: { type: "select" },
				description: "Choose the layout type.",
				options: ["regular", "panel"]
			} },
			args: { type: "regular" }
		};
		DataViewsPreview = () => {
			const [view, setView] = (0, import_react.useState)({
				type: "table",
				fields: showcaseFields.map((f) => f.id).filter((id) => id !== "media_thumbnail"),
				descriptionField: void 0,
				mediaField: "media_thumbnail",
				showTitle: false
			});
			const [data] = (0, import_react.useState)([
				sampleMediaItem,
				sampleMediaItemZip,
				sampleMediaItemBrokenImage
			]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: { padding: "20px" },
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Media Fields DataViews Preview" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 388,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "This story demonstrates all the media fields from the @wordpress/media-fields package, rendered in a DataViews component, allowing preview of view state and layout switching." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 389,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(dataviews_default, {
						data,
						fields: showcaseFields,
						view,
						onChangeView: (nextView) => setView(nextView),
						paginationInfo: {
							totalItems: 3,
							totalPages: 1
						}
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 394,
						columnNumber: 4
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 387,
				columnNumber: 3
			}, void 0);
		};
		DataViewsPreview.parameters = { a11y: { test: "todo" } };
		try {
			DataFormsComponent.__docgenInfo = {
				"description": "",
				"displayName": "DataFormsComponent",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/media-fields/src/stories/index.story.tsx",
				"methods": [],
				"props": { "type": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "gutenberg-storybook-preview/packages/media-fields/src/stories/index.story.tsx",
						"name": "TypeLiteral"
					}],
					"description": "",
					"name": "type",
					"required": true,
					"tags": {},
					"type": {
						"name": "enum",
						"raw": "\"regular\" | \"panel\"",
						"value": [{ "value": "\"regular\"" }, { "value": "\"panel\"" }]
					}
				} },
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		DataFormsPreview.parameters = {
			...DataFormsPreview.parameters,
			docs: {
				...DataFormsPreview.parameters?.docs,
				source: {
					originalSource: "{\n  render: DataFormsComponent,\n  argTypes: {\n    type: {\n      control: {\n        type: 'select'\n      },\n      description: 'Choose the layout type.',\n      options: ['regular', 'panel']\n    }\n  },\n  args: {\n    type: 'regular'\n  }\n}",
					...DataFormsPreview.parameters?.docs?.source
				}
			}
		};
		DataViewsPreview.parameters = {
			...DataViewsPreview.parameters,
			docs: {
				...DataViewsPreview.parameters?.docs,
				source: {
					originalSource: "() => {\n  const [view, setView] = useState<View>({\n    type: 'table',\n    fields: showcaseFields.map(f => f.id).filter(id => id !== 'media_thumbnail'),\n    descriptionField: undefined,\n    mediaField: 'media_thumbnail',\n    showTitle: false\n  });\n  const [data] = useState<MediaItem[]>([sampleMediaItem, sampleMediaItemZip, sampleMediaItemBrokenImage]);\n  const paginationInfo = {\n    totalItems: 3,\n    totalPages: 1\n  };\n  return <div style={{\n    padding: '20px'\n  }}>\n            <h2>Media Fields DataViews Preview</h2>\n            <p>\n                This story demonstrates all the media fields from the\n                @wordpress/media-fields package, rendered in a DataViews\n                component, allowing preview of view state and layout switching.\n            </p>\n            <DataViews data={data} fields={showcaseFields} view={view} onChangeView={(nextView: View) => setView(nextView)} paginationInfo={paginationInfo} />\n        </div>;\n}",
					...DataViewsPreview.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
export { init_index_story as n, init___experimental_fetch_link_suggestions as r, index_story_exports as t };
