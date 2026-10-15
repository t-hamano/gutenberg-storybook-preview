import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as init_create_interpolate_element, t as create_interpolate_element_default } from "./create-interpolate-element-CUfbmqGd.js";
import { c as init_store, l as store } from "./store-CSWvid7H.js";
import { Cr as safeDecodeURIComponent, n as store$1, t as init_build_module } from "./build-module-DnDwhkiu.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { a as useCopyToClipboard, i as init_use_copy_to_clipboard } from "./dist-KzAeaPz4.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { n as __, t as init_build_module$1 } from "./build-module-v04us4E2.js";
import { i as useSelect } from "./dispatch-abVPMST3.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { k as copy_small_default } from "./verse-DH2nco10.js";
import { t as comment_author_avatar_default } from "./comment-author-avatar-BV_eEFs-.js";
import { a as drafts_default, i as not_allowed_default, n as pending_default } from "./pending-DXJjGuml.js";
import { n as published_default } from "./published-BuOJO-QD.js";
import { n as scheduled_default } from "./scheduled-BxE8wb60.js";
import { n as trash_default } from "./trash-BjNv-Mps.js";
import { c as init_checkbox_control, s as checkbox_control_default } from "./radio-control-CzM8R9J_.js";
import { n as init_input_control, r as input_control_default } from "./input-control-hg4QQcQC.js";
import { n as init_icon, t as icon_default } from "./icon-oSwa7eHF.js";
import { n as button_default, r as init_button } from "./button-Bj8SgySP.js";
import { n as init_component, t as component_default } from "./component-C-u1iSHf.js";
import { n as init_input_prefix_wrapper, r as input_prefix_wrapper_default } from "./input-prefix-wrapper-BtBYerqA.js";
import { n as init_input_suffix_wrapper, r as input_suffix_wrapper_default } from "./input-suffix-wrapper-vM1JQdLJ.js";
import { l as use_dispatch_default } from "./build-module-C8SQ3xnO.js";
import { a as resolveSelect, n as init_build_module$2 } from "./build-module-DkpHnLlB.js";
import { t as require_remove_accents } from "./remove-accents-FMNXhR5L.js";
import { n as init_component$1, t as component_default$1 } from "./component-C_SA79G6.js";
import { a as getSettings, i as getDate, n as dateI18n, s as init_build_module$3 } from "./build-module-DFGiXAdt.js";
import { n as init_external_link, t as external_link_default } from "./external-link-u93s4qVG.js";
import { n as init_build_module$4, t as decodeEntities } from "./build-module-CUTW1uKI.js";
import { n as text_control_default, t as init_text_control } from "./text-control-BnD1Lg9D.js";
import { n as init_dataform, t as DataForm } from "./dataform-BZ-EGs0W.js";
import { n as init_dataviews, t as dataviews_default } from "./dataviews-iV2Rb-nQ.js";
import { r as init_build_module$5 } from "./library.story-DawnfKTW.js";
//#region ../packages/url/build-module/clean-for-slug.mjs
function cleanForSlug(string) {
	if (!string) return "";
	return (0, import_remove_accents.default)(string).replace(/(&nbsp;|&ndash;|&mdash;)/g, "-").replace(/[\s\./]+/g, "-").replace(/&\S+?;/g, "").replace(/[^\p{L}\p{N}_-]+/gu, "").toLowerCase().replace(/-+/g, "-").replace(/(^-+)|(-+$)/g, "");
}
var import_remove_accents;
function init_clean_for_slug() {
	return (init_clean_for_slug = __esmMin((() => {
		import_remove_accents = /* @__PURE__ */ __toESM(require_remove_accents(), 1);
	})))();
}
//#endregion
//#region ../packages/fields/src/fields/utils.ts
/**
* Whether the post's `_links` include the given `wp:action-*` relation.
*
* A record without `_links` (a bulk edit form has no record) is treated as
* allowed, so only an explicit absence of the action hides a control.
*
* @param item   The post.
* @param action The link relation, e.g. `wp:action-publish`.
* @return Whether the action link is present.
*/
function hasActionLink(item, action) {
	if (!item._links) return true;
	return !!item._links[action];
}
//#endregion
//#region ../packages/fields/src/actions/utils.ts
function getItemTitle(item, fallback = __("(no title)")) {
	let title = "";
	if (typeof item.title === "string") title = decodeEntities(item.title);
	else if (item.title && "rendered" in item.title) title = decodeEntities(item.title.rendered);
	else if (item.title && "raw" in item.title) title = decodeEntities(item.title.raw);
	return title || fallback;
}
function init_utils$1() {
	return (init_utils$1 = __esmMin((() => {
		init_build_module$4();
		init_build_module$1();
	})))();
}
//#endregion
//#region ../packages/fields/src/fields/slug/utils.ts
var getSlug;
function init_utils$2() {
	return (init_utils$2 = __esmMin((() => {
		init_clean_for_slug();
		init_utils$1();
		getSlug = (item) => {
			if (typeof item !== "object") return "";
			return item.slug || item.generated_slug || cleanForSlug(getItemTitle(item)) || item.id.toString();
		};
	})))();
}
//#endregion
//#region ../packages/fields/src/fields/slug/slug-edit.tsx
var import_jsx_dev_runtime$6, _jsxFileName$6, SlugEdit;
function init_slug_edit() {
	return (init_slug_edit = __esmMin((() => {
		init_button(), init_external_link(), init_input_control(), init_input_prefix_wrapper(), init_input_suffix_wrapper(), init_component$1();
		init_build_module$5();
		init_use_copy_to_clipboard(), init_use_instance_id();
		init_build_module$2();
		init_react();
		init_store();
		init_build_module$1();
		init_utils$2();
		import_jsx_dev_runtime$6 = require_jsx_dev_runtime();
		_jsxFileName$6 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/fields/src/fields/slug/slug-edit.tsx";
		SlugEdit = ({ field, onChange, data }) => {
			const { id } = field;
			const slug = field.getValue({ item: data }) || getSlug(data);
			const permalinkTemplate = data.permalink_template || "";
			const PERMALINK_POSTNAME_REGEX = /%(?:postname|pagename)%/;
			const [prefix, suffix] = permalinkTemplate.split(PERMALINK_POSTNAME_REGEX);
			const permalinkPrefix = prefix;
			const permalinkSuffix = suffix;
			const isEditable = PERMALINK_POSTNAME_REGEX.test(permalinkTemplate) && hasActionLink(data, "wp:action-publish");
			const originalSlugRef = (0, import_react.useRef)(slug);
			const slugToDisplay = slug || originalSlugRef.current;
			const permalink = isEditable ? `${permalinkPrefix}${slugToDisplay}${permalinkSuffix}` : safeDecodeURIComponent(data.link || "");
			(0, import_react.useEffect)(() => {
				if (slug && originalSlugRef.current === void 0) originalSlugRef.current = slug;
			}, [slug]);
			const onChangeControl = (0, import_react.useCallback)((newValue) => onChange({ [id]: newValue }), [id, onChange]);
			const { createNotice } = use_dispatch_default(store);
			const copyButtonRef = useCopyToClipboard(permalink, () => {
				createNotice("info", __("Copied Permalink to clipboard."), {
					isDismissible: true,
					type: "snackbar"
				});
			});
			const postUrlSlugDescriptionId = "editor-post-url__slug-description-" + use_instance_id_default(SlugEdit);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)("fieldset", {
				className: "fields-controls__slug",
				children: [isEditable && /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(component_default$1, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(component_default$1, {
						spacing: "0px",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)("span", { children: __("Customize the last part of the Permalink.") }, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 77,
							columnNumber: 7
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(external_link_default, {
							href: "https://wordpress.org/documentation/article/page-post-settings-sidebar/#permalink",
							children: __("Learn more")
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 82,
							columnNumber: 7
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 76,
						columnNumber: 6
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(input_control_default, {
						prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(input_prefix_wrapper_default, { children: "/" }, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 88,
							columnNumber: 8
						}, void 0),
						suffix: /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(input_suffix_wrapper_default, {
							variant: "control",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(button_default, {
								size: "small",
								icon: copy_small_default,
								ref: copyButtonRef,
								label: __("Copy")
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 94,
								columnNumber: 9
							}, void 0)
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 93,
							columnNumber: 8
						}, void 0),
						label: __("Link"),
						hideLabelFromVision: true,
						value: slug,
						autoComplete: "off",
						spellCheck: "false",
						type: "text",
						className: "fields-controls__slug-input",
						onChange: (newValue) => {
							onChangeControl(newValue);
						},
						onBlur: () => {
							if (slug === "") onChangeControl(originalSlugRef.current);
						},
						"aria-describedby": postUrlSlugDescriptionId
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 86,
						columnNumber: 6
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)("div", {
						className: "fields-controls__slug-help",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)("span", {
							className: "fields-controls__slug-help-visual-label",
							children: __("Permalink:")
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 120,
							columnNumber: 7
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(external_link_default, {
							className: "fields-controls__slug-help-link",
							href: permalink,
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)("span", {
									className: "fields-controls__slug-help-prefix",
									children: permalinkPrefix
								}, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 127,
									columnNumber: 8
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)("span", {
									className: "fields-controls__slug-help-slug",
									children: slugToDisplay
								}, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 130,
									columnNumber: 8
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)("span", {
									className: "fields-controls__slug-help-suffix",
									children: permalinkSuffix
								}, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 133,
									columnNumber: 8
								}, void 0)
							]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 123,
							columnNumber: 7
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 119,
						columnNumber: 6
					}, void 0)
				] }, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 75,
					columnNumber: 5
				}, void 0), !isEditable && /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(external_link_default, {
					className: "fields-controls__slug-help-link",
					href: permalink,
					children: permalink
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 141,
					columnNumber: 5
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 73,
				columnNumber: 3
			}, void 0);
		};
		try {
			SlugEdit.__docgenInfo = {
				"description": "",
				"displayName": "slugedit",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/fields/src/fields/slug/slug-edit.tsx",
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
						"type": { "name": "BasePost" }
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
						"type": { "name": "NormalizedField<BasePost>" }
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
						"type": { "name": "(value: DeepPartial<BasePost>) => void" }
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
//#region ../packages/fields/src/fields/slug/slug-view.tsx
var SlugView;
function init_slug_view() {
	return (init_slug_view = __esmMin((() => {
		init_react();
		init_utils$2();
		SlugView = ({ item }) => {
			const slug = getSlug(item);
			const originalSlugRef = (0, import_react.useRef)(slug);
			(0, import_react.useEffect)(() => {
				if (slug && originalSlugRef.current === void 0) originalSlugRef.current = slug;
			}, [slug]);
			return `${slug || originalSlugRef.current}`;
		};
		try {
			SlugView.__docgenInfo = {
				"description": "",
				"displayName": "slugview",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/fields/src/fields/slug/slug-view.tsx",
				"methods": [],
				"props": { "item": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "gutenberg-storybook-preview/packages/fields/src/fields/slug/slug-view.tsx",
						"name": "TypeLiteral"
					}],
					"description": "",
					"name": "item",
					"required": true,
					"tags": {},
					"type": { "name": "BasePost" }
				} },
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/fields/src/fields/slug/index.ts
var slugField;
function init_slug() {
	return (init_slug = __esmMin((() => {
		init_build_module$1();
		init_slug_edit();
		init_slug_view();
		slugField = {
			id: "slug",
			type: "text",
			label: __("Slug"),
			Edit: SlugEdit,
			render: SlugView,
			filterBy: false,
			isVisible: (item) => !!item.link && !!item.permalink_template
		};
	})))();
}
//#endregion
//#region ../packages/fields/src/fields/title/view.tsx
function BaseTitleView({ item, className, children }) {
	const renderedTitle = getItemTitle(item);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(component_default, {
		className: clsx("fields-field__title", className),
		alignment: "center",
		justify: "flex-start",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)("span", { children: renderedTitle || __("(no title)") }, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 24,
			columnNumber: 4
		}, this), children]
	}, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 19,
		columnNumber: 3
	}, this);
}
function TitleView({ item }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(BaseTitleView, { item }, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 31,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime$5, _jsxFileName$5;
function init_view() {
	return (init_view = __esmMin((() => {
		init_clsx();
		init_component();
		init_build_module$1();
		init_utils$1();
		import_jsx_dev_runtime$5 = require_jsx_dev_runtime();
		_jsxFileName$5 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/fields/src/fields/title/view.tsx";
		try {
			BaseTitleView.__docgenInfo = {
				"description": "",
				"displayName": "BaseTitleView",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/fields/src/fields/title/view.tsx",
				"methods": [],
				"props": {
					"item": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/fields/src/fields/title/view.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "item",
						"required": true,
						"tags": {},
						"type": { "name": "CommonPost" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/fields/src/fields/title/view.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			TitleView.__docgenInfo = {
				"description": "",
				"displayName": "view",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/fields/src/fields/title/view.tsx",
				"methods": [],
				"props": { "item": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "gutenberg-storybook-preview/packages/fields/src/fields/title/view.tsx",
						"name": "TypeLiteral"
					}],
					"description": "",
					"name": "item",
					"required": true,
					"tags": {},
					"type": { "name": "CommonPost" }
				} },
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/fields/src/fields/title/index.ts
var titleField;
function init_title() {
	return (init_title = __esmMin((() => {
		init_build_module$1();
		init_utils$1();
		init_view();
		titleField = {
			type: "text",
			id: "title",
			label: __("Title"),
			placeholder: __("No title"),
			getValue: ({ item }) => getItemTitle(item),
			render: TitleView,
			enableHiding: true,
			enableGlobalSearch: true,
			filterBy: false
		};
	})))();
}
//#endregion
//#region ../packages/fields/src/fields/order/index.ts
var orderField;
function init_order() {
	return (init_order = __esmMin((() => {
		init_build_module$1();
		orderField = {
			id: "menu_order",
			type: "integer",
			label: __("Order"),
			description: __("Determines the order of pages."),
			filterBy: false,
			isValid: { required: true }
		};
	})))();
}
//#endregion
//#region ../packages/fields/src/fields/password/edit.tsx
function PasswordEdit({ data, onChange, field }) {
	const [showPassword, setShowPassword] = (0, import_react.useState)(!!field.getValue({ item: data }));
	const handleTogglePassword = (value) => {
		setShowPassword(value);
		if (!value) onChange({ password: "" });
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(component_default$1, {
		as: "fieldset",
		spacing: 4,
		className: "fields-controls__password",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(checkbox_control_default, {
			label: __("Password protected"),
			help: __("Only visible to those who know the password"),
			checked: showPassword,
			onChange: handleTogglePassword
		}, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 33,
			columnNumber: 4
		}, this), showPassword && /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)("div", {
			className: "fields-controls__password-input",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(text_control_default, {
				label: __("Password"),
				onChange: (value) => onChange({ password: value }),
				value: field.getValue({ item: data }) || "",
				placeholder: __("Use a secure password"),
				type: "text",
				maxLength: 255
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 41,
				columnNumber: 6
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 40,
			columnNumber: 5
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$4,
		lineNumber: 28,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$4, _jsxFileName$4;
function init_edit() {
	return (init_edit = __esmMin((() => {
		init_checkbox_control(), init_component$1(), init_text_control();
		init_react();
		init_build_module$1();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/fields/src/fields/password/edit.tsx";
		try {
			PasswordEdit.__docgenInfo = {
				"description": "",
				"displayName": "PasswordEdit",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/fields/src/fields/password/edit.tsx",
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
						"type": { "name": "BasePost" }
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
						"type": { "name": "NormalizedField<BasePost>" }
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
						"type": { "name": "(value: DeepPartial<BasePost>) => void" }
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
//#region ../packages/fields/src/fields/password/index.tsx
var passwordField;
function init_password() {
	return (init_password = __esmMin((() => {
		init_build_module$1();
		init_edit();
		passwordField = {
			id: "password",
			type: "text",
			label: __("Password"),
			Edit: PasswordEdit,
			enableSorting: false,
			enableHiding: false,
			isVisible: (item) => item.status !== "private" && hasActionLink(item, "wp:action-publish"),
			filterBy: false
		};
	})))();
}
//#endregion
//#region ../packages/fields/src/fields/status/status-elements.tsx
var STATUSES;
function init_status_elements() {
	return (init_status_elements = __esmMin((() => {
		init_build_module$5();
		init_build_module$1();
		STATUSES = [
			{
				value: "draft",
				label: __("Draft"),
				icon: drafts_default,
				description: __("Not ready to publish.")
			},
			{
				value: "future",
				label: __("Scheduled"),
				icon: scheduled_default,
				description: __("Publish automatically on a chosen date.")
			},
			{
				value: "pending",
				label: __("Pending Review"),
				icon: pending_default,
				description: __("Waiting for review before publishing.")
			},
			{
				value: "private",
				label: __("Private"),
				icon: not_allowed_default,
				description: __("Only visible to site admins and editors.")
			},
			{
				value: "publish",
				label: __("Published"),
				icon: published_default,
				description: __("Visible to everyone.")
			},
			{
				value: "trash",
				label: __("Trash"),
				icon: trash_default
			}
		];
	})))();
}
//#endregion
//#region ../packages/fields/src/fields/status/status-view.tsx
function StatusView({ item, field }) {
	const currentStatus = field.getValue({ item });
	const status = STATUSES.find(({ value }) => value === currentStatus);
	const label = status?.label || currentStatus;
	const icon = status?.icon;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(component_default, {
		alignment: "left",
		spacing: 0,
		children: [icon && /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("div", {
			className: "fields-controls__status-icon",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(icon_default, { icon }, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 18,
				columnNumber: 6
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 17,
			columnNumber: 5
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("span", { children: label }, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 21,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 15,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$3, _jsxFileName$3;
function init_status_view() {
	return (init_status_view = __esmMin((() => {
		init_component(), init_icon();
		init_status_elements();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/fields/src/fields/status/status-view.tsx";
		try {
			StatusView.__docgenInfo = {
				"description": "",
				"displayName": "StatusView",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/fields/src/fields/status/status-view.tsx",
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
						"type": { "name": "BasePost" }
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
						"type": { "name": "NormalizedField<BasePost>" }
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
//#region ../packages/fields/src/fields/status/index.tsx
var statusField;
function init_status() {
	return (init_status = __esmMin((() => {
		init_build_module$1();
		init_status_view();
		init_status_elements();
		statusField = {
			label: __("Status"),
			id: "status",
			type: "text",
			elements: STATUSES,
			getValue: ({ item }) => item.status === "auto-draft" ? "draft" : item.status,
			render: StatusView,
			Edit: "radio",
			isDisabled: ({ item }) => !hasActionLink(item, "wp:action-publish"),
			enableSorting: false,
			filterBy: { operators: ["isAny"] }
		};
	})))();
}
//#endregion
//#region ../packages/fields/src/fields/comment-status/index.tsx
var commentStatusField;
function init_comment_status() {
	return (init_comment_status = __esmMin((() => {
		init_build_module$1();
		commentStatusField = {
			id: "comment_status",
			label: __("Comments"),
			type: "text",
			Edit: "radio",
			enableSorting: false,
			enableHiding: false,
			filterBy: false,
			elements: [{
				value: "open",
				label: __("Open"),
				description: __("Visitors can add new comments and replies.")
			}, {
				value: "closed",
				label: __("Closed"),
				description: __("Visitors cannot add new comments or replies. Existing comments remain visible.")
			}]
		};
	})))();
}
//#endregion
//#region ../packages/fields/src/fields/date/date-view.tsx
var import_jsx_dev_runtime$2, _jsxFileName$2, getFormattedDate, DateView;
function init_date_view() {
	return (init_date_view = __esmMin((() => {
		init_build_module$1();
		init_create_interpolate_element();
		init_build_module$3();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/fields/src/fields/date/date-view.tsx";
		getFormattedDate = (dateToDisplay) => dateI18n(getSettings().formats.datetimeAbbreviated, getDate(dateToDisplay));
		DateView = ({ item }) => {
			if (["draft", "private"].includes(item.status ?? "")) return create_interpolate_element_default(sprintf(__("<span>Modified: <time>%s</time></span>"), getFormattedDate(item.date ?? null)), {
				span: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("span", {}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 24,
					columnNumber: 11
				}, void 0),
				time: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("time", {}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 25,
					columnNumber: 11
				}, void 0)
			});
			if (item.status === "future") return create_interpolate_element_default(sprintf(__("<span>Scheduled: <time>%s</time></span>"), getFormattedDate(item.date ?? null)), {
				span: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("span", {}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 39,
					columnNumber: 11
				}, void 0),
				time: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("time", {}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 40,
					columnNumber: 11
				}, void 0)
			});
			if (item.status === "publish") return create_interpolate_element_default(sprintf(__("<span>Published: <time>%s</time></span>"), getFormattedDate(item.date ?? null)), {
				span: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("span", {}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 54,
					columnNumber: 11
				}, void 0),
				time: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("time", {}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 55,
					columnNumber: 11
				}, void 0)
			});
			const dateToDisplay = getDate(item.modified ?? null) > getDate(item.date ?? null) ? item.modified : item.date;
			if (item.status === "pending") return create_interpolate_element_default(sprintf(__("<span>Modified: <time>%s</time></span>"), getFormattedDate(dateToDisplay ?? null)), {
				span: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("span", {}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 75,
					columnNumber: 11
				}, void 0),
				time: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("time", {}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 76,
					columnNumber: 11
				}, void 0)
			});
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("time", { children: getFormattedDate(item.date ?? null) }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 82,
				columnNumber: 9
			}, void 0);
		};
		try {
			DateView.__docgenInfo = {
				"description": "",
				"displayName": "dateview",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/fields/src/fields/date/date-view.tsx",
				"methods": [],
				"props": { "item": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "gutenberg-storybook-preview/packages/fields/src/fields/date/date-view.tsx",
						"name": "TypeLiteral"
					}],
					"description": "",
					"name": "item",
					"required": true,
					"tags": {},
					"type": { "name": "BasePost" }
				} },
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/fields/src/fields/date/index.tsx
var dateField;
function init_date() {
	return (init_date = __esmMin((() => {
		init_build_module$1();
		init_date_view();
		dateField = {
			id: "date",
			type: "datetime",
			label: __("Date"),
			render: DateView,
			isVisible: (item) => hasActionLink(item, "wp:action-publish"),
			filterBy: { operators: ["before", "after"] }
		};
	})))();
}
//#endregion
//#region ../packages/fields/src/fields/author/author-view.tsx
function AuthorView({ item }) {
	const authorId = item?.author;
	const embeddedAuthorId = item?._embedded?.author?.[0]?.id;
	const shouldFetch = Boolean(authorId && (!embeddedAuthorId || authorId !== embeddedAuthorId));
	const author = useSelect((select) => {
		if (!shouldFetch) return null;
		const { getEntityRecords } = select(store$1);
		return getEntityRecords("root", "user", {
			include: [authorId],
			who: "authors",
			context: "view"
		})?.[0] ?? null;
	}, [authorId, shouldFetch]);
	const text = author?.name || item?._embedded?.author?.[0]?.name;
	const imageUrl = author?.avatar_urls?.[48] || item?._embedded?.author?.[0]?.avatar_urls?.[48];
	const [isImageLoaded, setIsImageLoaded] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(component_default, {
		alignment: "left",
		spacing: 0,
		children: [
			!!imageUrl && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
				className: clsx("fields-controls__author-avatar", { "is-loaded": isImageLoaded }),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("img", {
					onLoad: () => setIsImageLoaded(true),
					alt: __("Author avatar"),
					src: imageUrl
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 57,
					columnNumber: 6
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 52,
				columnNumber: 5
			}, this),
			!imageUrl && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
				className: "fields-controls__author-icon",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(icon_default, { icon: comment_author_avatar_default }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 66,
					columnNumber: 6
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 65,
				columnNumber: 5
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("span", {
				className: "fields-controls__author-name",
				children: text
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 69,
				columnNumber: 4
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 50,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_author_view() {
	return (init_author_view = __esmMin((() => {
		init_clsx();
		init_build_module$1();
		init_react();
		init_build_module$5();
		init_component(), init_icon();
		init_build_module$2();
		init_build_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/fields/src/fields/author/author-view.tsx";
		try {
			AuthorView.__docgenInfo = {
				"description": "",
				"displayName": "AuthorView",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/fields/src/fields/author/author-view.tsx",
				"methods": [],
				"props": { "item": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "gutenberg-storybook-preview/packages/fields/src/fields/author/author-view.tsx",
						"name": "TypeLiteral"
					}],
					"description": "",
					"name": "item",
					"required": true,
					"tags": {},
					"type": { "name": "BasePostWithEmbeddedAuthor" }
				} },
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/fields/src/fields/author/index.tsx
var authorField;
function init_author() {
	return (init_author = __esmMin((() => {
		init_build_module$1();
		init_build_module$2();
		init_build_module();
		init_author_view();
		authorField = {
			label: __("Author"),
			id: "author",
			type: "integer",
			getElements: async () => {
				return (await resolveSelect(store$1).getEntityRecords("root", "user", {
					per_page: -1,
					who: "authors",
					_fields: "id,name",
					context: "view"
				}) ?? []).map(({ id, name }) => ({
					value: id,
					label: name
				}));
			},
			setValue: ({ value }) => ({ author: Number(value) }),
			render: AuthorView,
			isVisible: (item) => hasActionLink(item, "wp:action-assign-author"),
			filterBy: { operators: ["isAny", "isNone"] }
		};
	})))();
}
//#endregion
//#region ../packages/fields/src/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, mockUsers, authorFieldForStory, index_story_default, samplePostWithAuthor, showcaseFields, DataFormsComponent, DataFormsPreview, DataViewsPreview;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_dataform(), init_dataviews();
		init_author(), init_comment_status(), init_date(), init_order(), init_password(), init_slug(), init_status(), init_title();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/fields/src/stories/index.story.tsx";
		mockUsers = [{
			id: 1,
			name: "John Doe",
			avatar_urls: {
				"24": "https://gravatar.com/avatar?d=retro&s=24",
				"48": "https://gravatar.com/avatar?d=retro&s=48",
				"96": "https://gravatar.com/avatar?d=retro&s=96"
			}
		}, {
			id: 2,
			name: "Jane Smith",
			avatar_urls: {
				"24": "https://gravatar.com/avatar/2?d=retro&s=24",
				"48": "https://gravatar.com/avatar/2?d=retro&s=48",
				"96": "https://gravatar.com/avatar/2?d=retro&s=96"
			}
		}];
		authorFieldForStory = {
			...authorField,
			getElements: async () => mockUsers.map(({ id, name }) => ({
				value: id,
				label: name
			}))
		};
		index_story_default = {
			id: "fields-base-fields",
			title: "Design System/DataViews/Fields/Base Fields",
			component: DataForm
		};
		samplePostWithAuthor = {
			id: 1,
			title: {
				rendered: "Sample Post Title",
				raw: "Sample Post Title"
			},
			content: {
				rendered: "<p>This is sample content.</p>",
				raw: "This is sample content."
			},
			type: "post",
			slug: "sample-post-title",
			permalink_template: "http://localhost:8888/%postname%/",
			date: "2024-01-15T10:30:00",
			modified: "2024-01-20T14:45:00",
			status: "publish",
			comment_status: "open",
			password: "",
			parent: 0,
			menu_order: 0,
			author: 1,
			featured_media: 123,
			template: "single",
			_embedded: { author: [{ ...mockUsers[0] }] }
		};
		showcaseFields = [
			titleField,
			slugField,
			statusField,
			dateField,
			authorFieldForStory,
			commentStatusField,
			passwordField,
			orderField
		];
		DataFormsComponent = ({ type }) => {
			const [data, setData] = (0, import_react.useState)(samplePostWithAuthor);
			const handleChange = (updates) => {
				setData((prev) => ({
					...prev,
					...updates
				}));
			};
			const showcaseForm = {
				layout: { type },
				fields: [
					"title",
					"slug",
					"status",
					"date",
					"author",
					"comment_status",
					"password",
					"menu_order"
				]
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: { padding: "20px" },
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Base Fields" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 132,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "This story demonstrates all the base fields from the @wordpress/fields package within a DataForm." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 133,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataForm, {
						data,
						fields: showcaseFields,
						form: showcaseForm,
						onChange: handleChange
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 138,
						columnNumber: 4
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 131,
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
				fields: showcaseFields.map((f) => f.id),
				titleField: "title",
				descriptionField: void 0,
				mediaField: void 0
			});
			const [data] = (0, import_react.useState)([samplePostWithAuthor]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: { padding: "20px" },
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Fields Package DataViews Preview" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 179,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "This story demonstrates all the base fields from the @wordpress/fields package, rendered in a DataViews component, allowing preview of view state and layout switching." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 180,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(dataviews_default, {
						data,
						fields: showcaseFields,
						view,
						onChangeView: (nextView) => setView(nextView),
						paginationInfo: {
							totalItems: 1,
							totalPages: 1
						}
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 185,
						columnNumber: 4
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 178,
				columnNumber: 3
			}, void 0);
		};
		try {
			DataFormsComponent.__docgenInfo = {
				"description": "",
				"displayName": "DataFormsComponent",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/fields/src/stories/index.story.tsx",
				"methods": [],
				"props": { "type": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "gutenberg-storybook-preview/packages/fields/src/stories/index.story.tsx",
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
					originalSource: "() => {\n  const [view, setView] = useState<View>({\n    type: 'table',\n    fields: showcaseFields.map(f => f.id),\n    titleField: 'title',\n    descriptionField: undefined,\n    mediaField: undefined\n  });\n  const [data] = useState([samplePostWithAuthor]);\n  const paginationInfo = {\n    totalItems: 1,\n    totalPages: 1\n  };\n  return <div style={{\n    padding: '20px'\n  }}>\n            <h2>Fields Package DataViews Preview</h2>\n            <p>\n                This story demonstrates all the base fields from the\n                @wordpress/fields package, rendered in a DataViews component,\n                allowing preview of view state and layout switching.\n            </p>\n            <DataViews data={data} fields={showcaseFields} view={view} onChangeView={(nextView: View) => setView(nextView)} paginationInfo={paginationInfo} />\n        </div>;\n}",
					...DataViewsPreview.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { DataFormsPreview, DataViewsPreview, index_story_default as default };
