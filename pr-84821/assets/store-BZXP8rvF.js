import { n as __esmMin, o as __toESM, r as __exportAll, t as __commonJSMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { a as __assign, d as isPlainObject$1, l as init_tslib_es6, n as paramCase, t as init_dist_es2015$1 } from "./dist.es2015-BYklxwDS.js";
import { n as pascalCase, r as pascalCaseTransform, t as init_dist_es2015$2 } from "./dist.es2015-DLD9pCpN.js";
import { a as isValidAttributeName, i as init_build_module$4, n as escapeEditableHTML, t as escapeAttribute } from "./build-module-Ci82NGER.js";
import { i as init_raw_html, n as serialize_default, r as RawHTML, t as init_serialize } from "./serialize-FHFXmm0_.js";
import { o as hasFilter, r as applyFilters, s as init_build_module$5 } from "./build-module-CSjwTo7p.js";
import { n as init_build_module$6, t as deprecated } from "./build-module-BWCORUbm.js";
import { n as init_implementation, t as __dangerousOptInToUnstableAPIsOnlyForCoreModules } from "./implementation-Cv8RPUVn.js";
import { Dt as init_get_active_format, Tt as init_get_active_object, dt as init_private_apis$1, gt as init_to_dom, pt as init_hook, xt as init_remove_format } from "./utils-vihKJ7OY.js";
import { a as createReduxStore, b as pipe_default, f as createRegistrySelector, s as createSelector, u as keyedReducer, y as init_pipe } from "./default-registry-CuLW5PfA.js";
import { n as isShallowEqual, t as init_build_module$7 } from "./build-module-COHfMY9T.js";
import { n as init_build_module$8 } from "./build-module-Bh_sM-WV.js";
import { t as assertIsDefined } from "./assert-is-defined-_q5vXJ_h.js";
import { $n as init_raw_handling, In as init_build_module$9, dr as init_join } from "./utils-B56l7vEX.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { i as _x, n as __, r as _n, t as init_build_module$10 } from "./build-module-v04us4E2.js";
import { t as dispatch } from "./dispatch-abVPMST3.js";
import { n as memize } from "./dist-DL-769ey.js";
import { D as init_register_format_type, T as init_insert_object } from "./build-module-CTfGx7iW.js";
import { r as speak, t as init_build_module$11 } from "./build-module-DsAeWnrG.js";
import { a as desktop_default, i as symbol_default, n as tablet_default } from "./tablet-DHFe-mnN.js";
import { n as mobile_default } from "./mobile-BjKAag-R.js";
import { n as warning, t as init_build_module$12 } from "./build-module-B5spW8IS.js";
import { r as require_es6 } from "./emotion-css.development.esm-DHgdGHQy.js";
import { i as D, n as init_names, o as init_colord, r as A, t as e } from "./names-C15GzMmJ.js";
import { c as select, i as registerStore, n as init_build_module$13, r as register, t as combineReducers } from "./build-module-BFlpD7Tf.js";
import { s as init_use_anchor } from "./plain-text-DeGhiaCO.js";
import { t as require_remove_accents } from "./remove-accents-FMNXhR5L.js";
import { n as v4, t as init_v4 } from "./v4-DCjp-En7.js";
import { n as r, t as init_a11y } from "./a11y-YVbKxb3i.js";
import { n as init_build_module$14, t as decodeEntities } from "./build-module-CUTW1uKI.js";
import { r as unlock$2, t as init_lock_unlock$2 } from "./lock-unlock-DigY61P5.js";
import { r as init_build_module$15 } from "./library.story-CFsmdbdz.js";
import { a as init_replace, i as init_toggle_format, o as init_apply_format } from "./index.story-LMZw-3zT.js";
//#region ../node_modules/.store/camel-case@4.1.2-5Gz5buNb7xjdcDcS4uJ7xw/node_modules/camel-case/dist.es2015/index.js
function camelCaseTransform(input, index) {
	if (index === 0) return input.toLowerCase();
	return pascalCaseTransform(input, index);
}
function camelCase(input, options) {
	if (options === void 0) options = {};
	return pascalCase(input, __assign({ transform: camelCaseTransform }, options));
}
function init_dist_es2015() {
	return (init_dist_es2015 = __esmMin((() => {
		init_tslib_es6();
		init_dist_es2015$2();
	})))();
}
//#endregion
//#region ../packages/dom/build-module/dom/remove.mjs
function remove$2(node) {
	assertIsDefined(node.parentNode, "node.parentNode");
	node.parentNode.removeChild(node);
}
function init_remove() {
	return (init_remove = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/dom/build-module/dom/safe-html.mjs
function safeHTML(html) {
	const { body } = document.implementation.createHTMLDocument("");
	body.innerHTML = html;
	const elements = body.getElementsByTagName("*");
	let elementIndex = elements.length;
	while (elementIndex--) {
		const element = elements[elementIndex];
		if (element.tagName === "SCRIPT") remove$2(element);
		else {
			let attributeIndex = element.attributes.length;
			while (attributeIndex--) {
				const { name: key } = element.attributes[attributeIndex];
				if (key.startsWith("on")) element.removeAttribute(key);
			}
		}
	}
	return body.innerHTML;
}
function init_safe_html() {
	return (init_safe_html = __esmMin((() => {
		init_remove();
	})))();
}
//#endregion
//#region ../packages/dom/build-module/dom/strip-html.mjs
function stripHTML(html) {
	html = safeHTML(html);
	const doc = document.implementation.createHTMLDocument("");
	doc.body.innerHTML = html;
	return doc.body.textContent || "";
}
function init_strip_html() {
	return (init_strip_html = __esmMin((() => {
		init_safe_html();
	})))();
}
//#endregion
//#region ../packages/rich-text/build-module/store/reducer.mjs
function formatTypes(state = {}, action) {
	switch (action.type) {
		case "ADD_FORMAT_TYPES": return {
			...state,
			...action.formatTypes.reduce((newFormatTypes, type) => ({
				...newFormatTypes,
				[type.name]: type
			}), {})
		};
		case "REMOVE_FORMAT_TYPES": return Object.fromEntries(Object.entries(state).filter(([key]) => !action.names.includes(key)));
	}
	return state;
}
var reducer_default$3;
function init_reducer() {
	return (init_reducer = __esmMin((() => {
		init_build_module$13();
		reducer_default$3 = combineReducers({ formatTypes });
	})))();
}
//#endregion
//#region ../packages/rich-text/build-module/store/selectors.mjs
var selectors_exports$3 = /* @__PURE__ */ __exportAll({
	getFormatType: () => getFormatType$1,
	getFormatTypeForBareElement: () => getFormatTypeForBareElement,
	getFormatTypeForClassName: () => getFormatTypeForClassName,
	getFormatTypes: () => getFormatTypes
});
function getFormatType$1(state, name) {
	return state.formatTypes[name];
}
function getFormatTypeForBareElement(state, bareElementTagName) {
	const formatTypes = getFormatTypes(state);
	return formatTypes.find(({ className, tagName }) => {
		return className === null && bareElementTagName === tagName;
	}) || formatTypes.find(({ className, tagName }) => {
		return className === null && "*" === tagName;
	});
}
function getFormatTypeForClassName(state, elementClassName) {
	return getFormatTypes(state).find(({ className }) => {
		if (className === null) return false;
		return ` ${elementClassName} `.indexOf(` ${className} `) >= 0;
	});
}
var getFormatTypes;
function init_selectors() {
	return (init_selectors = __esmMin((() => {
		init_build_module$13();
		getFormatTypes = createSelector((state) => Object.values(state.formatTypes), (state) => [state.formatTypes]);
	})))();
}
//#endregion
//#region ../packages/rich-text/build-module/store/actions.mjs
var actions_exports$3 = /* @__PURE__ */ __exportAll({
	addFormatTypes: () => addFormatTypes,
	removeFormatTypes: () => removeFormatTypes
});
function addFormatTypes(formatTypes) {
	return {
		type: "ADD_FORMAT_TYPES",
		formatTypes: Array.isArray(formatTypes) ? formatTypes : [formatTypes]
	};
}
function removeFormatTypes(names) {
	return {
		type: "REMOVE_FORMAT_TYPES",
		names: Array.isArray(names) ? names : [names]
	};
}
//#endregion
//#region ../packages/rich-text/build-module/store/index.mjs
var store$3;
function init_store() {
	return (init_store = __esmMin((() => {
		init_build_module$13();
		init_reducer();
		init_selectors();
		store$3 = createReduxStore("core/rich-text", {
			reducer: reducer_default$3,
			selectors: selectors_exports$3,
			actions: actions_exports$3
		});
		register(store$3);
	})))();
}
//#endregion
//#region ../packages/rich-text/build-module/is-format-equal.mjs
function isFormatEqual(format1, format2) {
	if (format1 === format2) return true;
	if (!format1 || !format2) return false;
	if (format1.type !== format2.type) return false;
	let attributes1 = format1.attributes;
	let attributes2 = format2.attributes;
	if (format1.unregisteredAttributes || format2.unregisteredAttributes) {
		attributes1 = {
			...attributes1,
			...format1.unregisteredAttributes
		};
		attributes2 = {
			...attributes2,
			...format2.unregisteredAttributes
		};
	}
	if (attributes1 === attributes2) return true;
	if (!attributes1 || !attributes2) return false;
	const keys1 = Object.keys(attributes1);
	const keys2 = Object.keys(attributes2);
	if (keys1.length !== keys2.length) return false;
	const length = keys1.length;
	for (let i = 0; i < length; i++) {
		const name = keys1[i];
		if (attributes1[name] !== attributes2[name]) return false;
	}
	return true;
}
function init_is_format_equal() {
	return (init_is_format_equal = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/rich-text/build-module/normalise-formats.mjs
function normaliseFormats(value) {
	const newFormats = value.formats.slice();
	newFormats.forEach((formatsAtIndex, index) => {
		const formatsAtPreviousIndex = newFormats[index - 1];
		if (formatsAtPreviousIndex) {
			const newFormatsAtIndex = formatsAtIndex.slice();
			newFormatsAtIndex.forEach((format, formatIndex) => {
				const previousFormat = formatsAtPreviousIndex[formatIndex];
				if (isFormatEqual(format, previousFormat)) newFormatsAtIndex[formatIndex] = previousFormat;
			});
			newFormats[index] = newFormatsAtIndex;
		}
	});
	return {
		...value,
		formats: newFormats
	};
}
function init_normalise_formats() {
	return (init_normalise_formats = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/rich-text/build-module/create-element.mjs
function createElement({ implementation }, html) {
	if (!body) body = implementation.createHTMLDocument("").body;
	body.innerHTML = html;
	return body;
}
var body;
function init_create_element() {
	return (init_create_element = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/rich-text/build-module/get-active-formats.mjs
function getActiveFormats(value, EMPTY_ACTIVE_FORMATS = []) {
	const { formats, start, end, activeFormats } = value;
	if (start === void 0 || end === void 0) return EMPTY_ACTIVE_FORMATS;
	if (start === end) {
		if (activeFormats) return activeFormats;
		const formatsBefore = formats[start - 1] || EMPTY_ACTIVE_FORMATS;
		const formatsAfter = formats[start] || EMPTY_ACTIVE_FORMATS;
		if (formatsBefore.length < formatsAfter.length) return formatsBefore;
		return formatsAfter;
	}
	if (!formats[start]) return EMPTY_ACTIVE_FORMATS;
	const selectedFormats = formats.slice(start, end);
	const _activeFormats = [...selectedFormats[0]];
	let i = selectedFormats.length;
	while (i--) {
		const formatsAtIndex = selectedFormats[i];
		if (!formatsAtIndex) return EMPTY_ACTIVE_FORMATS;
		let ii = _activeFormats.length;
		while (ii--) {
			const format = _activeFormats[ii];
			if (!formatsAtIndex.find((_format) => isFormatEqual(format, _format))) _activeFormats.splice(ii, 1);
		}
		if (_activeFormats.length === 0) return EMPTY_ACTIVE_FORMATS;
	}
	return _activeFormats || EMPTY_ACTIVE_FORMATS;
}
function init_get_active_formats() {
	return (init_get_active_formats = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/rich-text/build-module/get-format-type.mjs
function getFormatType(name) {
	return select(store$3).getFormatType(name);
}
function init_get_format_type() {
	return (init_get_format_type = __esmMin((() => {
		init_build_module$13();
		init_store();
	})))();
}
//#endregion
//#region ../packages/rich-text/build-module/to-tree.mjs
function restoreOnAttributes(attributes, isEditableTree) {
	if (isEditableTree) return attributes;
	const newAttributes = {};
	for (const key in attributes) {
		let newKey = key;
		if (key.startsWith("data-disable-rich-text-")) newKey = key.slice(23);
		newAttributes[newKey] = attributes[key];
	}
	return newAttributes;
}
function fromFormat({ type, tagName, attributes, unregisteredAttributes, object, boundaryClass, isEditableTree }) {
	const formatType = getFormatType(type);
	let elementAttributes = {};
	if (boundaryClass && isEditableTree) elementAttributes["data-rich-text-format-boundary"] = "true";
	if (!formatType) {
		if (attributes) elementAttributes = {
			...attributes,
			...elementAttributes
		};
		return {
			type,
			attributes: restoreOnAttributes(elementAttributes, isEditableTree),
			object
		};
	}
	elementAttributes = {
		...unregisteredAttributes,
		...elementAttributes
	};
	for (const name in attributes) {
		const key = formatType.attributes ? formatType.attributes[name] : false;
		if (key) elementAttributes[key] = attributes[name];
		else elementAttributes[name] = attributes[name];
	}
	if (formatType.className) {
		if (elementAttributes.class) elementAttributes.class = `${formatType.className} ${elementAttributes.class}`;
		else elementAttributes.class = formatType.className;
	}
	return {
		type: tagName || formatType.tagName,
		object: formatType.object,
		attributes: restoreOnAttributes(elementAttributes, isEditableTree)
	};
}
function isEqualUntil(a, b, index) {
	do
		if (a[index] !== b[index]) return false;
	while (index--);
	return true;
}
function toTree({ value, preserveWhiteSpace, createEmpty, append, getLastChild, getParent, isText, getText, remove, appendText, onStartIndex, onEndIndex, isEditableTree, placeholder }) {
	const { formats, replacements, text, start, end } = value;
	const formatsLength = formats.length + 1;
	const tree = createEmpty();
	const activeFormats = getActiveFormats(value);
	const deepestActiveFormat = activeFormats[activeFormats.length - 1];
	let lastCharacterFormats;
	let lastCharacter;
	append(tree, "");
	for (let i = 0; i < formatsLength; i++) {
		const character = text.charAt(i);
		const shouldInsertPadding = isEditableTree && (!lastCharacter || lastCharacter === "\n");
		const characterFormats = formats[i];
		let pointer = getLastChild(tree);
		if (characterFormats) characterFormats.forEach((format, formatIndex) => {
			if (pointer && lastCharacterFormats && isEqualUntil(characterFormats, lastCharacterFormats, formatIndex)) {
				pointer = getLastChild(pointer);
				return;
			}
			const { type, tagName, attributes, unregisteredAttributes } = format;
			const boundaryClass = isEditableTree && format === deepestActiveFormat;
			const newNode = append(getParent(pointer), fromFormat({
				type,
				tagName,
				attributes,
				unregisteredAttributes,
				boundaryClass,
				isEditableTree
			}));
			if (isText(pointer) && getText(pointer).length === 0) remove(pointer);
			pointer = append(newNode, "");
		});
		if (i === 0) {
			if (onStartIndex && start === 0) onStartIndex(tree, pointer);
			if (onEndIndex && end === 0) onEndIndex(tree, pointer);
		}
		if (character === "￼") {
			const replacement = replacements[i];
			if (!replacement) continue;
			const { type, attributes, innerHTML } = replacement;
			const formatType = getFormatType(type);
			if (isEditableTree && type === "#comment") {
				pointer = append(getParent(pointer), {
					type: "span",
					attributes: {
						contenteditable: "false",
						"data-rich-text-comment": attributes["data-rich-text-comment"]
					}
				});
				append(append(pointer, { type: "span" }), attributes["data-rich-text-comment"].trim());
			} else if (!isEditableTree && type === "script") {
				pointer = append(getParent(pointer), fromFormat({
					type: "script",
					isEditableTree
				}));
				append(pointer, { html: decodeURIComponent(attributes["data-rich-text-script"]) });
			} else if (formatType?.contentEditable === false) {
				if (innerHTML || isEditableTree) {
					pointer = getParent(pointer);
					if (isEditableTree) {
						const attrs = {
							contenteditable: "false",
							"data-rich-text-bogus": true
						};
						if (start === i && end === i + 1) attrs["data-rich-text-format-boundary"] = true;
						pointer = append(pointer, {
							type: "span",
							attributes: attrs
						});
						if (isEditableTree && i + 1 === text.length) append(getParent(pointer), "﻿");
					}
					pointer = append(pointer, fromFormat({
						...replacement,
						isEditableTree
					}));
					if (innerHTML) append(pointer, { html: innerHTML });
				}
			} else pointer = append(getParent(pointer), fromFormat({
				...replacement,
				object: true,
				isEditableTree
			}));
			pointer = append(getParent(pointer), "");
		} else if (!preserveWhiteSpace && character === "\n") {
			pointer = append(getParent(pointer), {
				type: "br",
				attributes: isEditableTree ? { "data-rich-text-line-break": "true" } : void 0,
				object: true
			});
			pointer = append(getParent(pointer), "");
		} else if (!isText(pointer)) pointer = append(getParent(pointer), character);
		else appendText(pointer, character);
		if (onStartIndex && start === i + 1) onStartIndex(tree, pointer);
		if (onEndIndex && end === i + 1) onEndIndex(tree, pointer);
		if (shouldInsertPadding && i === text.length) {
			appendText(pointer, "﻿");
			if (placeholder && text.length === 0) append(getParent(pointer), {
				type: "span",
				attributes: {
					"data-rich-text-placeholder": placeholder,
					style: "pointer-events:none;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;"
				}
			});
		}
		lastCharacterFormats = characterFormats;
		lastCharacter = character;
	}
	return tree;
}
function init_to_tree() {
	return (init_to_tree = __esmMin((() => {
		init_get_active_formats();
		init_get_format_type();
	})))();
}
//#endregion
//#region ../packages/rich-text/build-module/to-html-string.mjs
function toHTMLString({ value, preserveWhiteSpace }) {
	return createChildrenHTML(toTree({
		value,
		preserveWhiteSpace,
		createEmpty,
		append,
		getLastChild,
		getParent,
		isText,
		getText,
		remove: remove$1,
		appendText
	}).children);
}
function createEmpty() {
	return {};
}
function getLastChild({ children }) {
	return children && children[children.length - 1];
}
function append(parent, object) {
	if (typeof object === "string") object = { text: object };
	object.parent = parent;
	parent.children = parent.children || [];
	parent.children.push(object);
	return object;
}
function appendText(object, text) {
	object.text += text;
}
function getParent({ parent }) {
	return parent;
}
function isText({ text }) {
	return typeof text === "string";
}
function getText({ text }) {
	return text;
}
function remove$1(object) {
	const index = object.parent.children.indexOf(object);
	if (index !== -1) object.parent.children.splice(index, 1);
	return object;
}
function createElementHTML({ type, attributes, object, children }) {
	if (type === "#comment") return `<!--${attributes["data-rich-text-comment"]}-->`;
	let attributeString = "";
	for (const key in attributes) {
		if (!isValidAttributeName(key)) continue;
		attributeString += ` ${key}="${escapeAttribute(attributes[key])}"`;
	}
	if (object) return `<${type}${attributeString}>`;
	return `<${type}${attributeString}>${createChildrenHTML(children)}</${type}>`;
}
function createChildrenHTML(children = []) {
	return children.map((child) => {
		if (child.html !== void 0) return child.html;
		return child.text === void 0 ? createElementHTML(child) : escapeEditableHTML(child.text);
	}).join("");
}
function init_to_html_string() {
	return (init_to_html_string = __esmMin((() => {
		init_build_module$4();
		init_to_tree();
	})))();
}
//#endregion
//#region ../packages/rich-text/build-module/get-text-content.mjs
function getTextContent({ text }) {
	return text.replaceAll("￼", "");
}
function init_get_text_content() {
	return (init_get_text_content = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/rich-text/build-module/create.mjs
function createEmptyValue() {
	return {
		formats: [],
		replacements: [],
		text: ""
	};
}
function toFormat({ tagName, attributes }) {
	let formatType;
	if (attributes && attributes.class) {
		formatType = select(store$3).getFormatTypeForClassName(attributes.class);
		if (formatType) {
			attributes.class = ` ${attributes.class} `.replace(` ${formatType.className} `, " ").trim();
			if (!attributes.class) delete attributes.class;
		}
	}
	if (!formatType) formatType = select(store$3).getFormatTypeForBareElement(tagName);
	if (!formatType) return attributes ? {
		type: tagName,
		attributes
	} : { type: tagName };
	if (formatType.__experimentalCreatePrepareEditableTree && !formatType.__experimentalCreateOnChangeEditableValue) return null;
	if (!attributes) return {
		formatType,
		type: formatType.name,
		tagName
	};
	const registeredAttributes = {};
	const unregisteredAttributes = {};
	const _attributes = { ...attributes };
	for (const key in formatType.attributes) {
		const name = formatType.attributes[key];
		registeredAttributes[key] = _attributes[name];
		delete _attributes[name];
		if (typeof registeredAttributes[key] === "undefined") delete registeredAttributes[key];
	}
	for (const name in _attributes) unregisteredAttributes[name] = attributes[name];
	if (formatType.contentEditable === false) delete unregisteredAttributes.contenteditable;
	const format = {
		formatType,
		type: formatType.name,
		tagName
	};
	if (Object.keys(registeredAttributes).length) format.attributes = registeredAttributes;
	if (Object.keys(unregisteredAttributes).length) format.unregisteredAttributes = unregisteredAttributes;
	return format;
}
function create({ element, text, html, range, __unstableIsEditableTree: isEditableTree } = {}) {
	if (html instanceof RichTextData) return {
		text: html.text,
		formats: html.formats,
		replacements: html.replacements
	};
	if (typeof text === "string" && text.length > 0) return {
		formats: Array(text.length),
		replacements: Array(text.length),
		text
	};
	if (typeof html === "string" && html.length > 0) element = createElement(document, html);
	if (typeof element !== "object") return createEmptyValue();
	return createFromElement({
		element,
		range,
		isEditableTree
	});
}
function accumulateSelection(accumulator, node, range, value) {
	if (!range) return;
	const { parentNode } = node;
	const { startContainer, startOffset, endContainer, endOffset } = range;
	const currentLength = accumulator.text.length;
	if (value.start !== void 0) accumulator.start = currentLength + value.start;
	else if (node === startContainer && node.nodeType === node.TEXT_NODE) accumulator.start = currentLength + startOffset;
	else if (parentNode === startContainer && node === startContainer.childNodes[startOffset]) accumulator.start = currentLength;
	else if (parentNode === startContainer && node === startContainer.childNodes[startOffset - 1]) accumulator.start = currentLength + value.text.length;
	else if (node === startContainer) accumulator.start = currentLength;
	if (value.end !== void 0) accumulator.end = currentLength + value.end;
	else if (node === endContainer && node.nodeType === node.TEXT_NODE) accumulator.end = currentLength + endOffset;
	else if (parentNode === endContainer && node === endContainer.childNodes[endOffset - 1]) accumulator.end = currentLength + value.text.length;
	else if (parentNode === endContainer && node === endContainer.childNodes[endOffset]) accumulator.end = currentLength;
	else if (node === endContainer) accumulator.end = currentLength + endOffset;
}
function filterRange(node, range, filter) {
	if (!range) return;
	const { startContainer, endContainer } = range;
	let { startOffset, endOffset } = range;
	if (node === startContainer) startOffset = filter(node.nodeValue.slice(0, startOffset)).length;
	if (node === endContainer) endOffset = filter(node.nodeValue.slice(0, endOffset)).length;
	return {
		startContainer,
		startOffset,
		endContainer,
		endOffset
	};
}
function collapseWhiteSpace(element, isRoot = true, hasPrecedingSpace = false, hasTrailingSpace = false) {
	const clone = element.cloneNode(true);
	clone.normalize();
	Array.from(clone.childNodes).forEach((node, i, nodes) => {
		if (node.nodeType === node.TEXT_NODE) {
			let newNodeValue = node.nodeValue;
			if (/[\n\t\r\f]/.test(newNodeValue)) newNodeValue = newNodeValue.replace(/[\n\t\r\f]+/g, " ");
			if (newNodeValue.indexOf("  ") !== -1) newNodeValue = newNodeValue.replace(/ {2,}/g, " ");
			if (i === 0 && newNodeValue.startsWith(" ") && (isRoot || hasPrecedingSpace)) newNodeValue = newNodeValue.slice(1);
			if (i === nodes.length - 1 && newNodeValue.endsWith(" ") && (isRoot || hasTrailingSpace)) newNodeValue = newNodeValue.slice(0, -1);
			node.nodeValue = newNodeValue;
		} else if (node.nodeType === node.ELEMENT_NODE) {
			const { previousSibling, nextSibling } = node;
			const prevHasSpace = previousSibling?.textContent.endsWith(" ");
			const nextHasSpace = nextSibling?.textContent.startsWith(" ");
			node.replaceWith(collapseWhiteSpace(node, false, previousSibling ? prevHasSpace : isRoot || hasPrecedingSpace, nextSibling ? nextHasSpace : isRoot || hasTrailingSpace));
		}
	});
	return clone;
}
function removeReservedCharacters(string) {
	return string.replace(new RegExp(`[﻿￼${CARRIAGE_RETURN}]`, "gu"), "");
}
function createFromElement({ element, range, isEditableTree }) {
	const accumulator = createEmptyValue();
	if (!element) return accumulator;
	if (!element.hasChildNodes()) {
		accumulateSelection(accumulator, element, range, createEmptyValue());
		return accumulator;
	}
	const length = element.childNodes.length;
	for (let index = 0; index < length; index++) {
		const node = element.childNodes[index];
		const tagName = node.nodeName.toLowerCase();
		if (node.nodeType === node.TEXT_NODE) {
			const text = removeReservedCharacters(node.nodeValue);
			range = filterRange(node, range, removeReservedCharacters);
			accumulateSelection(accumulator, node, range, { text });
			accumulator.formats.length += text.length;
			accumulator.replacements.length += text.length;
			accumulator.text += text;
			continue;
		}
		if (node.nodeType === node.COMMENT_NODE || node.nodeType === node.ELEMENT_NODE && node.tagName === "SPAN" && node.hasAttribute("data-rich-text-comment")) {
			const value2 = {
				formats: Array(1),
				replacements: [{
					type: "#comment",
					attributes: { "data-rich-text-comment": node.nodeType === node.COMMENT_NODE ? node.nodeValue : node.getAttribute("data-rich-text-comment") }
				}],
				text: "￼"
			};
			accumulateSelection(accumulator, node, range, value2);
			mergePair(accumulator, value2);
			continue;
		}
		if (node.nodeType !== node.ELEMENT_NODE) continue;
		if (isEditableTree && tagName === "br" && !node.getAttribute("data-rich-text-line-break")) {
			accumulateSelection(accumulator, node, range, createEmptyValue());
			continue;
		}
		if (tagName === "script") {
			const value2 = {
				formats: Array(1),
				replacements: [{
					type: tagName,
					attributes: { "data-rich-text-script": node.getAttribute("data-rich-text-script") || encodeURIComponent(node.innerHTML) }
				}],
				text: "￼"
			};
			accumulateSelection(accumulator, node, range, value2);
			mergePair(accumulator, value2);
			continue;
		}
		if (tagName === "br") {
			accumulateSelection(accumulator, node, range, createEmptyValue());
			mergePair(accumulator, create({ text: "\n" }));
			continue;
		}
		const format = toFormat({
			tagName,
			attributes: getAttributes({ element: node })
		});
		if (format?.formatType?.contentEditable === false) {
			delete format.formatType;
			accumulateSelection(accumulator, node, range, createEmptyValue());
			mergePair(accumulator, {
				formats: Array(1),
				replacements: [{
					...format,
					innerHTML: node.innerHTML
				}],
				text: "￼"
			});
			continue;
		}
		if (format) delete format.formatType;
		const value = createFromElement({
			element: node,
			range,
			isEditableTree
		});
		accumulateSelection(accumulator, node, range, value);
		if (!format || node.getAttribute("data-rich-text-placeholder") || node.getAttribute("data-rich-text-bogus")) mergePair(accumulator, value);
		else if (value.text.length === 0) {
			if (format.attributes) mergePair(accumulator, {
				formats: Array(1),
				replacements: [format],
				text: "￼"
			});
		} else {
			let mergeFormats2 = function(formats) {
				if (mergeFormats2.formats === formats) return mergeFormats2.newFormats;
				const newFormats = formats ? [format, ...formats] : [format];
				mergeFormats2.formats = formats;
				mergeFormats2.newFormats = newFormats;
				return newFormats;
			};
			mergeFormats2.newFormats = [format];
			mergePair(accumulator, {
				...value,
				formats: Array.from(value.formats, mergeFormats2)
			});
		}
	}
	return accumulator;
}
function getAttributes({ element }) {
	if (!element.hasAttributes()) return;
	const length = element.attributes.length;
	let accumulator;
	for (let i = 0; i < length; i++) {
		const { name, value } = element.attributes[i];
		if (name.indexOf("data-rich-text-") === 0) continue;
		const safeName = /^on/i.test(name) ? "data-disable-rich-text-" + name : name;
		accumulator = accumulator || {};
		accumulator[safeName] = value;
	}
	return accumulator;
}
var RichTextData, CARRIAGE_RETURN;
function init_create() {
	return (init_create = __esmMin((() => {
		init_build_module$13();
		init_store();
		init_create_element();
		init_concat();
		init_to_html_string();
		init_get_text_content();
		RichTextData = class _RichTextData {
			#value;
			static empty() {
				return new _RichTextData();
			}
			static fromPlainText(text) {
				return new _RichTextData(create({ text }));
			}
			static fromHTMLString(html) {
				return new _RichTextData(create({ html }));
			}
			/**
			* Create a RichTextData instance from an HTML element.
			*
			* @param htmlElement                The HTML element to create the instance from.
			* @param options                    Options.
			* @param options.preserveWhiteSpace Whether to preserve white space.
			* @return The RichTextData instance.
			*/
			static fromHTMLElement(htmlElement, options = {}) {
				const { preserveWhiteSpace = false } = options;
				const element = preserveWhiteSpace ? htmlElement : collapseWhiteSpace(htmlElement);
				const richTextData = new _RichTextData(create({ element }));
				Object.defineProperty(richTextData, "originalHTML", { value: htmlElement.innerHTML });
				return richTextData;
			}
			constructor(init = createEmptyValue()) {
				this.#value = init;
			}
			toPlainText() {
				return getTextContent(this.#value);
			}
			/**
			* Convert the rich text value to an HTML string.
			*
			* @param options                    Options.
			* @param options.preserveWhiteSpace Whether to preserve white space.
			* @return The HTML string.
			*/
			toHTMLString({ preserveWhiteSpace } = {}) {
				return this.originalHTML || toHTMLString({
					value: this.#value,
					preserveWhiteSpace
				});
			}
			valueOf() {
				return this.toHTMLString();
			}
			toString() {
				return this.toHTMLString();
			}
			toJSON() {
				return this.toHTMLString();
			}
			get length() {
				return this.text.length;
			}
			get formats() {
				return this.#value.formats;
			}
			get replacements() {
				return this.#value.replacements;
			}
			get text() {
				return this.#value.text;
			}
		};
		for (const name of Object.getOwnPropertyNames(String.prototype)) {
			if (RichTextData.prototype.hasOwnProperty(name)) continue;
			Object.defineProperty(RichTextData.prototype, name, { value(...args) {
				return this.toHTMLString()[name](...args);
			} });
		}
		CARRIAGE_RETURN = "\r";
	})))();
}
//#endregion
//#region ../packages/rich-text/build-module/concat.mjs
function mergePair(a, b) {
	a.formats = a.formats.concat(b.formats);
	a.replacements = a.replacements.concat(b.replacements);
	a.text += b.text;
	return a;
}
function concat$1(...values) {
	return normaliseFormats(values.reduce(mergePair, create()));
}
function init_concat() {
	return (init_concat = __esmMin((() => {
		init_normalise_formats();
		init_create();
	})))();
}
//#endregion
//#region ../packages/rich-text/build-module/insert.mjs
function insert(value, valueToInsert, startIndex = value.start ?? value.text.length, endIndex = value.end ?? startIndex) {
	const { formats, replacements, text } = value;
	if (typeof valueToInsert === "string") valueToInsert = create({ text: valueToInsert });
	const index = startIndex + valueToInsert.text.length;
	return normaliseFormats({
		formats: formats.slice(0, startIndex).concat(valueToInsert.formats, formats.slice(endIndex)),
		replacements: replacements.slice(0, startIndex).concat(valueToInsert.replacements, replacements.slice(endIndex)),
		text: text.slice(0, startIndex) + valueToInsert.text + text.slice(endIndex),
		start: index,
		end: index
	});
}
function init_insert() {
	return (init_insert = __esmMin((() => {
		init_create();
		init_normalise_formats();
	})))();
}
//#endregion
//#region ../packages/rich-text/build-module/remove.mjs
function remove(value, startIndex, endIndex) {
	return insert(value, create(), startIndex, endIndex);
}
function init_remove$1() {
	return (init_remove$1 = __esmMin((() => {
		init_insert();
		init_create();
	})))();
}
//#endregion
//#region ../packages/rich-text/build-module/index.mjs
function init_build_module() {
	return (init_build_module = __esmMin((() => {
		init_store();
		init_apply_format();
		init_concat();
		init_create();
		init_get_active_format();
		init_get_active_formats();
		init_get_active_object();
		init_get_text_content();
		init_join();
		init_register_format_type();
		init_remove_format();
		init_remove$1();
		init_replace();
		init_insert();
		init_insert_object();
		init_to_dom();
		init_to_html_string();
		init_toggle_format();
		init_create_element();
		init_private_apis$1();
		init_use_anchor();
		init_hook();
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/constants.mjs
var BLOCK_ICON_DEFAULT, DEPRECATED_ENTRY_KEYS, __EXPERIMENTAL_STYLE_PROPERTY, __EXPERIMENTAL_ELEMENTS, __EXPERIMENTAL_PATHS_WITH_OVERRIDE;
function init_constants() {
	return (init_constants = __esmMin((() => {
		BLOCK_ICON_DEFAULT = "block-default";
		DEPRECATED_ENTRY_KEYS = [
			"attributes",
			"supports",
			"save",
			"migrate",
			"isEligible",
			"apiVersion"
		];
		__EXPERIMENTAL_STYLE_PROPERTY = {
			"--wp--style--color--link": {
				value: ["color", "link"],
				support: ["color", "link"]
			},
			aspectRatio: {
				value: ["dimensions", "aspectRatio"],
				support: ["dimensions", "aspectRatio"],
				useEngine: true
			},
			background: {
				value: ["color", "gradient"],
				support: ["color", "gradients"],
				useEngine: true
			},
			backgroundColor: {
				value: ["color", "background"],
				support: ["color", "background"],
				requiresOptOut: true,
				useEngine: true
			},
			backgroundImage: {
				value: ["background", "backgroundImage"],
				support: ["background", "backgroundImage"],
				useEngine: true
			},
			backgroundRepeat: {
				value: ["background", "backgroundRepeat"],
				support: ["background", "backgroundRepeat"],
				useEngine: true
			},
			backgroundSize: {
				value: ["background", "backgroundSize"],
				support: ["background", "backgroundSize"],
				useEngine: true
			},
			backgroundPosition: {
				value: ["background", "backgroundPosition"],
				support: ["background", "backgroundPosition"],
				useEngine: true
			},
			backgroundGradient: {
				value: ["background", "gradient"],
				support: ["background", "gradient"],
				useEngine: true
			},
			backgroundClip: {
				value: ["background", "backgroundClip"],
				support: ["background", "backgroundClip"],
				useEngine: true
			},
			borderColor: {
				value: ["border", "color"],
				support: ["__experimentalBorder", "color"],
				useEngine: true
			},
			borderRadius: {
				value: ["border", "radius"],
				support: ["__experimentalBorder", "radius"],
				properties: {
					borderTopLeftRadius: "topLeft",
					borderTopRightRadius: "topRight",
					borderBottomLeftRadius: "bottomLeft",
					borderBottomRightRadius: "bottomRight"
				},
				useEngine: true
			},
			borderStyle: {
				value: ["border", "style"],
				support: ["__experimentalBorder", "style"],
				useEngine: true
			},
			borderWidth: {
				value: ["border", "width"],
				support: ["__experimentalBorder", "width"],
				useEngine: true
			},
			borderTopColor: {
				value: [
					"border",
					"top",
					"color"
				],
				support: ["__experimentalBorder", "color"],
				useEngine: true
			},
			borderTopStyle: {
				value: [
					"border",
					"top",
					"style"
				],
				support: ["__experimentalBorder", "style"],
				useEngine: true
			},
			borderTopWidth: {
				value: [
					"border",
					"top",
					"width"
				],
				support: ["__experimentalBorder", "width"],
				useEngine: true
			},
			borderRightColor: {
				value: [
					"border",
					"right",
					"color"
				],
				support: ["__experimentalBorder", "color"],
				useEngine: true
			},
			borderRightStyle: {
				value: [
					"border",
					"right",
					"style"
				],
				support: ["__experimentalBorder", "style"],
				useEngine: true
			},
			borderRightWidth: {
				value: [
					"border",
					"right",
					"width"
				],
				support: ["__experimentalBorder", "width"],
				useEngine: true
			},
			borderBottomColor: {
				value: [
					"border",
					"bottom",
					"color"
				],
				support: ["__experimentalBorder", "color"],
				useEngine: true
			},
			borderBottomStyle: {
				value: [
					"border",
					"bottom",
					"style"
				],
				support: ["__experimentalBorder", "style"],
				useEngine: true
			},
			borderBottomWidth: {
				value: [
					"border",
					"bottom",
					"width"
				],
				support: ["__experimentalBorder", "width"],
				useEngine: true
			},
			borderLeftColor: {
				value: [
					"border",
					"left",
					"color"
				],
				support: ["__experimentalBorder", "color"],
				useEngine: true
			},
			borderLeftStyle: {
				value: [
					"border",
					"left",
					"style"
				],
				support: ["__experimentalBorder", "style"],
				useEngine: true
			},
			borderLeftWidth: {
				value: [
					"border",
					"left",
					"width"
				],
				support: ["__experimentalBorder", "width"],
				useEngine: true
			},
			color: {
				value: ["color", "text"],
				support: ["color", "text"],
				requiresOptOut: true,
				useEngine: true
			},
			columnCount: {
				value: ["typography", "textColumns"],
				support: ["typography", "textColumns"],
				useEngine: true
			},
			filter: {
				value: ["filter", "duotone"],
				support: ["filter", "duotone"]
			},
			linkColor: {
				value: [
					"elements",
					"link",
					"color",
					"text"
				],
				support: ["color", "link"]
			},
			captionColor: {
				value: [
					"elements",
					"caption",
					"color",
					"text"
				],
				support: ["color", "caption"]
			},
			buttonColor: {
				value: [
					"elements",
					"button",
					"color",
					"text"
				],
				support: ["color", "button"]
			},
			buttonBackgroundColor: {
				value: [
					"elements",
					"button",
					"color",
					"background"
				],
				support: ["color", "button"]
			},
			headingColor: {
				value: [
					"elements",
					"heading",
					"color",
					"text"
				],
				support: ["color", "heading"]
			},
			headingBackgroundColor: {
				value: [
					"elements",
					"heading",
					"color",
					"background"
				],
				support: ["color", "heading"]
			},
			fontFamily: {
				value: ["typography", "fontFamily"],
				support: ["typography", "__experimentalFontFamily"],
				useEngine: true
			},
			fontSize: {
				value: ["typography", "fontSize"],
				support: ["typography", "fontSize"],
				useEngine: true
			},
			fontStyle: {
				value: ["typography", "fontStyle"],
				support: ["typography", "__experimentalFontStyle"],
				useEngine: true
			},
			fontWeight: {
				value: ["typography", "fontWeight"],
				support: ["typography", "__experimentalFontWeight"],
				useEngine: true
			},
			lineHeight: {
				value: ["typography", "lineHeight"],
				support: ["typography", "lineHeight"],
				useEngine: true
			},
			margin: {
				value: ["spacing", "margin"],
				support: ["spacing", "margin"],
				properties: {
					marginTop: "top",
					marginRight: "right",
					marginBottom: "bottom",
					marginLeft: "left"
				},
				useEngine: true
			},
			minHeight: {
				value: ["dimensions", "minHeight"],
				support: ["dimensions", "minHeight"],
				useEngine: true
			},
			minWidth: {
				value: ["dimensions", "minWidth"],
				support: ["dimensions", "minWidth"],
				useEngine: true
			},
			height: {
				value: ["dimensions", "height"],
				support: ["dimensions", "height"],
				useEngine: true
			},
			width: {
				value: ["dimensions", "width"],
				support: ["dimensions", "width"],
				useEngine: true
			},
			padding: {
				value: ["spacing", "padding"],
				support: ["spacing", "padding"],
				properties: {
					paddingTop: "top",
					paddingRight: "right",
					paddingBottom: "bottom",
					paddingLeft: "left"
				},
				useEngine: true
			},
			textAlign: {
				value: ["typography", "textAlign"],
				support: ["typography", "textAlign"],
				useEngine: false
			},
			textDecoration: {
				value: ["typography", "textDecoration"],
				support: ["typography", "__experimentalTextDecoration"],
				useEngine: true
			},
			textTransform: {
				value: ["typography", "textTransform"],
				support: ["typography", "__experimentalTextTransform"],
				useEngine: true
			},
			letterSpacing: {
				value: ["typography", "letterSpacing"],
				support: ["typography", "__experimentalLetterSpacing"],
				useEngine: true
			},
			textIndent: {
				value: ["typography", "textIndent"],
				support: ["typography", "textIndent"],
				useEngine: true
			},
			textShadow: {
				value: ["typography", "textShadow"],
				support: ["typography", "textShadow"],
				useEngine: true
			},
			writingMode: {
				value: ["typography", "writingMode"],
				support: ["typography", "__experimentalWritingMode"],
				useEngine: true
			},
			"--wp--style--root--padding": {
				value: ["spacing", "padding"],
				support: ["spacing", "padding"],
				properties: {
					"--wp--style--root--padding-top": "top",
					"--wp--style--root--padding-right": "right",
					"--wp--style--root--padding-bottom": "bottom",
					"--wp--style--root--padding-left": "left"
				},
				rootOnly: true
			}
		};
		__EXPERIMENTAL_ELEMENTS = {
			link: "a:where(:not(.wp-element-button))",
			heading: "h1, h2, h3, h4, h5, h6",
			h1: "h1",
			h2: "h2",
			h3: "h3",
			h4: "h4",
			h5: "h5",
			h6: "h6",
			button: ".wp-element-button, .wp-block-button__link",
			caption: ".wp-element-caption, .wp-block-audio figcaption, .wp-block-embed figcaption, .wp-block-gallery figcaption, .wp-block-image figcaption, .wp-block-table figcaption, .wp-block-video figcaption",
			cite: "cite",
			label: "label",
			select: "select",
			textInput: "textarea, input:where([type=email],[type=number],[type=password],[type=search],[type=tel],[type=text],[type=url])"
		};
		__EXPERIMENTAL_PATHS_WITH_OVERRIDE = {
			"color.duotone": true,
			"color.gradients": true,
			"color.palette": true,
			"dimensions.aspectRatios": true,
			"typography.fontSizes": true,
			"spacing.spacingSizes": true
		};
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/i18n-block.json
var title, description, keywords, styles, variations, i18n_block_default;
function init_i18n_block() {
	return (init_i18n_block = __esmMin((() => {
		title = "block title";
		description = "block description";
		keywords = ["block keyword"];
		styles = [{ "label": "block style label" }];
		variations = [{
			"title": "block variation title",
			"description": "block variation description",
			"keywords": ["block variation keyword"]
		}];
		i18n_block_default = {
			title,
			description,
			keywords,
			styles,
			variations
		};
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/lock-unlock.mjs
var lock$1, unlock$1;
function init_lock_unlock() {
	return (init_lock_unlock = __esmMin((() => {
		init_implementation();
		({lock: lock$1, unlock: unlock$1} = __dangerousOptInToUnstableAPIsOnlyForCoreModules("I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.", "@wordpress/blocks"));
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/registration.mjs
function isObject$1(object) {
	return object !== null && typeof object === "object";
}
function getBlockSettingsFromMetadata({ textdomain, ...metadata }) {
	const allowedFields = [
		"apiVersion",
		"title",
		"category",
		"parent",
		"ancestor",
		"icon",
		"description",
		"keywords",
		"attributes",
		"providesContext",
		"usesContext",
		"selectors",
		"supports",
		"styles",
		"example",
		"variations",
		"blockHooks",
		"allowedBlocks"
	];
	const settings = Object.fromEntries(Object.entries(metadata).filter(([key]) => allowedFields.includes(key)));
	if (textdomain) Object.keys(i18n_block_default).forEach((key) => {
		if (!settings[key]) return;
		settings[key] = translateBlockSettingUsingI18nSchema(i18n_block_default[key], settings[key], textdomain);
	});
	return settings;
}
function registerBlockType(blockNameOrMetadata, settings) {
	const name = isObject$1(blockNameOrMetadata) ? blockNameOrMetadata.name : blockNameOrMetadata;
	if (typeof name !== "string") {
		warning("Block names must be strings.");
		return;
	}
	if (!/^[a-z][a-z0-9-]*\/[a-z][a-z0-9-]*$/.test(name)) {
		warning("Block names must contain a namespace prefix, include only lowercase alphanumeric characters or dashes, and start with a letter. Example: my-plugin/my-custom-block");
		return;
	}
	if (select(store$2).getBlockType(name)) {
		warning("Block \"" + name + "\" is already registered.");
		return;
	}
	const { addBootstrappedBlockType, addUnprocessedBlockType } = unlock$1(dispatch(store$2));
	if (isObject$1(blockNameOrMetadata)) addBootstrappedBlockType(name, getBlockSettingsFromMetadata(blockNameOrMetadata));
	addUnprocessedBlockType(name, settings);
	return select(store$2).getBlockType(name);
}
function translateBlockSettingUsingI18nSchema(i18nSchema, settingValue, textdomain) {
	if (typeof i18nSchema === "string" && typeof settingValue === "string") return _x(settingValue, i18nSchema, textdomain);
	if (Array.isArray(i18nSchema) && i18nSchema.length && Array.isArray(settingValue)) return settingValue.map((value) => translateBlockSettingUsingI18nSchema(i18nSchema[0], value, textdomain));
	if (isObject$1(i18nSchema) && Object.entries(i18nSchema).length && isObject$1(settingValue)) return Object.keys(settingValue).reduce((accumulator, key) => {
		if (!i18nSchema[key]) {
			accumulator[key] = settingValue[key];
			return accumulator;
		}
		accumulator[key] = translateBlockSettingUsingI18nSchema(i18nSchema[key], settingValue[key], textdomain);
		return accumulator;
	}, {});
	return settingValue;
}
function setFreeformContentHandlerName(blockName) {
	dispatch(store$2).setFreeformFallbackBlockName(blockName);
}
function getFreeformContentHandlerName() {
	return select(store$2).getFreeformFallbackBlockName();
}
function getGroupingBlockName$1() {
	return select(store$2).getGroupingBlockName();
}
function setUnregisteredTypeHandlerName(blockName) {
	dispatch(store$2).setUnregisteredFallbackBlockName(blockName);
}
function getUnregisteredTypeHandlerName() {
	return select(store$2).getUnregisteredFallbackBlockName();
}
function setDefaultBlockName$1(name) {
	dispatch(store$2).setDefaultBlockName(name);
}
function setGroupingBlockName$1(name) {
	dispatch(store$2).setGroupingBlockName(name);
}
function getDefaultBlockName$1() {
	return select(store$2).getDefaultBlockName();
}
function getBlockType$1(name) {
	return select(store$2)?.getBlockType(name);
}
function getBlockTypes$1() {
	return select(store$2).getBlockTypes();
}
function getBlockSupport$1(nameOrType, feature, defaultSupports) {
	return select(store$2).getBlockSupport(nameOrType, feature, defaultSupports);
}
function hasBlockSupport$1(nameOrType, feature, defaultSupports) {
	return select(store$2).hasBlockSupport(nameOrType, feature, defaultSupports);
}
function isReusableBlock(blockOrType) {
	return blockOrType?.name === "core/block";
}
function isTemplatePart(blockOrType) {
	return blockOrType?.name === "core/template-part";
}
function getBlockBindingsSource$1(name) {
	return unlock$1(select(store$2)).getBlockBindingsSource(name);
}
var getBlockVariations$1, unregisterBlockVariation;
function init_registration() {
	return (init_registration = __esmMin((() => {
		init_build_module$13();
		init_build_module$10();
		init_build_module$12();
		init_i18n_block();
		init_store$1();
		init_lock_unlock();
		getBlockVariations$1 = (blockName, scope) => {
			return select(store$2).getBlockVariations(blockName, scope);
		};
		unregisterBlockVariation = (blockName, variationName) => {
			dispatch(store$2).removeBlockVariations(blockName, variationName);
		};
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/utils.mjs
function isUnmodifiedBlock(block, role) {
	const blockAttributes = getBlockType$1(block.name)?.attributes ?? {};
	const attributesByRole = role ? Object.entries(blockAttributes).filter(([key, definition]) => {
		if (role === "content" && key === "metadata") return Object.keys(block.attributes[key]?.bindings ?? {}).length > 0;
		return definition.role === role || definition.__experimentalRole === role;
	}) : [];
	return (!!attributesByRole.length ? attributesByRole : Object.entries(blockAttributes)).every(([key, definition]) => {
		const value = block.attributes[key];
		if (definition.hasOwnProperty("default")) return value === definition.default;
		if (definition.type === "rich-text") return !value?.length;
		return value === void 0;
	});
}
function isUnmodifiedDefaultBlock(block, role) {
	return block.name === getDefaultBlockName$1() && isUnmodifiedBlock(block, role);
}
function isValidIcon(icon) {
	return !!icon && (typeof icon === "string" || (0, import_react.isValidElement)(icon) || typeof icon === "function" || icon instanceof import_react.Component);
}
function normalizeIconObject(icon) {
	const resolvedIcon = icon || "block-default";
	if (isValidIcon(resolvedIcon)) return { src: resolvedIcon };
	const iconDescriptor = resolvedIcon;
	if ("background" in iconDescriptor) {
		const colordBgColor = A(iconDescriptor.background);
		const getColorContrast = (iconColor) => colordBgColor.contrast(iconColor);
		const maxContrast = Math.max(...ICON_COLORS.map(getColorContrast));
		return {
			...iconDescriptor,
			foreground: iconDescriptor.foreground ? iconDescriptor.foreground : ICON_COLORS.find((iconColor) => getColorContrast(iconColor) === maxContrast),
			shadowColor: colordBgColor.alpha(.3).toRgbString()
		};
	}
	return iconDescriptor;
}
function normalizeBlockType(blockTypeOrName) {
	if (typeof blockTypeOrName === "string") return getBlockType$1(blockTypeOrName);
	return blockTypeOrName;
}
function getBlockLabel(blockType, attributes, context = "visual") {
	const { __experimentalLabel: getLabel, title } = blockType;
	const label = getLabel && getLabel(attributes, { context });
	if (!label) return title;
	if (label.toPlainText) return label.toPlainText();
	return stripHTML(label);
}
function getDefault(attributeSchema) {
	if (attributeSchema.default !== void 0) return attributeSchema.default;
	if (attributeSchema.type === "rich-text") return new RichTextData();
}
function isBlockRegistered(name) {
	return getBlockType$1(name) !== void 0;
}
function sanitizeBlockAttributes(name, attributes) {
	const blockType = getBlockType$1(name);
	if (void 0 === blockType) throw new Error(`Block type '${name}' is not registered.`);
	return Object.entries(blockType.attributes).reduce((accumulator, [key, schema]) => {
		const value = attributes[key];
		if (void 0 !== value) {
			if (schema.type === "rich-text") {
				if (value instanceof RichTextData) accumulator[key] = value;
				else if (typeof value === "string") accumulator[key] = RichTextData.fromHTMLString(value);
			} else if (schema.type === "string" && value instanceof RichTextData) accumulator[key] = value.toHTMLString();
			else accumulator[key] = value;
		} else {
			const _default = getDefault(schema);
			if (void 0 !== _default) accumulator[key] = _default;
		}
		if (["node", "children"].indexOf(schema.source ?? "") !== -1) {
			if (typeof accumulator[key] === "string") accumulator[key] = [accumulator[key]];
			else if (!Array.isArray(accumulator[key])) accumulator[key] = [];
		}
		return accumulator;
	}, {});
}
function getBlockAttributesNamesByRole(name, role) {
	const attributes = getBlockType$1(name)?.attributes;
	if (!attributes) return [];
	const attributesNames = Object.keys(attributes);
	if (!role) return attributesNames;
	return attributesNames.filter((attributeName) => {
		const attribute = attributes[attributeName];
		if (attribute?.role === role) return true;
		if (attribute?.__experimentalRole === role) {
			deprecated("__experimentalRole attribute", {
				since: "6.7",
				version: "6.8",
				alternative: "role attribute",
				hint: `Check the block.json of the ${name} block.`
			});
			return true;
		}
		return false;
	});
}
function isContentBlock$3(name) {
	const blockType = getBlockType$1(name);
	const attributes = blockType?.attributes;
	if (blockType?.supports?.contentRole) return true;
	if (!attributes) return false;
	return !!Object.keys(attributes)?.some((attributeKey) => {
		const attribute = attributes[attributeKey];
		return attribute?.role === "content" || attribute?.__experimentalRole === "content";
	});
}
function omit(object, keys) {
	const keysArray = Array.isArray(keys) ? keys : [keys];
	return Object.fromEntries(Object.entries(object).filter(([key]) => !keysArray.includes(key)));
}
var ICON_COLORS;
function init_utils() {
	return (init_utils = __esmMin((() => {
		init_colord();
		init_names();
		init_a11y();
		init_react();
		init_build_module$10();
		init_build_module$8();
		init_build_module();
		init_build_module$6();
		init_constants();
		init_registration();
		D([e, r]);
		ICON_COLORS = ["#191e23", "#f8f9f9"];
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/store/reducer.mjs
function keyBlockTypesByName(types) {
	return types.reduce((newBlockTypes, block) => ({
		...newBlockTypes,
		[block.name]: block
	}), {});
}
function getUniqueItemsByName(items) {
	return items.reduce((acc, currentItem) => {
		if (!acc.some((item) => item.name === currentItem.name)) acc.push(currentItem);
		return acc;
	}, []);
}
function bootstrappedBlockTypes(state = {}, action) {
	switch (action.type) {
		case "ADD_BOOTSTRAPPED_BLOCK_TYPE":
			const { name, blockType } = action;
			if (state[name]) return state;
			const newDefinition = Object.fromEntries(Object.entries(blockType).filter(([, value]) => value !== null && value !== void 0).map(([key, value]) => [camelCase(key), value]));
			newDefinition.name = name;
			return {
				...state,
				[name]: newDefinition
			};
		case "REMOVE_BLOCK_TYPES": return omit(state, action.names);
	}
	return state;
}
function unprocessedBlockTypes(state = {}, action) {
	switch (action.type) {
		case "ADD_UNPROCESSED_BLOCK_TYPE": return {
			...state,
			[action.name]: action.blockType
		};
		case "REMOVE_BLOCK_TYPES": return omit(state, action.names);
	}
	return state;
}
function blockTypes(state = {}, action) {
	switch (action.type) {
		case "ADD_BLOCK_TYPES": return {
			...state,
			...keyBlockTypesByName(action.blockTypes)
		};
		case "REMOVE_BLOCK_TYPES": return omit(state, action.names);
	}
	return state;
}
function blockStyles(state = {}, action) {
	switch (action.type) {
		case "ADD_BLOCK_TYPES": return {
			...state,
			...Object.fromEntries(Object.entries(keyBlockTypesByName(action.blockTypes)).map(([name, blockType]) => [name, getUniqueItemsByName([...(blockType.styles ?? []).map((style) => ({
				...style,
				source: "block"
			})), ...(state[blockType.name] ?? []).filter(({ source }) => "block" !== source)])]))
		};
		case "ADD_BLOCK_STYLES":
			const updatedStyles = {};
			action.blockNames.forEach((blockName) => {
				updatedStyles[blockName] = getUniqueItemsByName([...state[blockName] ?? [], ...action.styles]);
			});
			return {
				...state,
				...updatedStyles
			};
		case "REMOVE_BLOCK_STYLES": return {
			...state,
			[action.blockName]: (state[action.blockName] ?? []).filter((style) => action.styleNames.indexOf(style.name) === -1)
		};
	}
	return state;
}
function blockVariations(state = {}, action) {
	switch (action.type) {
		case "ADD_BLOCK_TYPES": return {
			...state,
			...Object.fromEntries(Object.entries(keyBlockTypesByName(action.blockTypes)).map(([name, blockType]) => {
				return [name, getUniqueItemsByName([...(blockType.variations ?? []).map((variation) => ({
					...variation,
					source: "block"
				})), ...(state[blockType.name] ?? []).filter(({ source }) => "block" !== source)])];
			}))
		};
		case "ADD_BLOCK_VARIATIONS": return {
			...state,
			[action.blockName]: getUniqueItemsByName([...state[action.blockName] ?? [], ...action.variations])
		};
		case "REMOVE_BLOCK_VARIATIONS": return {
			...state,
			[action.blockName]: (state[action.blockName] ?? []).filter((variation) => action.variationNames.indexOf(variation.name) === -1)
		};
	}
	return state;
}
function createBlockNameSetterReducer(setActionType) {
	return (state = null, action) => {
		switch (action.type) {
			case "REMOVE_BLOCK_TYPES":
				if (action.names.indexOf(state) !== -1) return null;
				return state;
			case setActionType: return action.name || null;
		}
		return state;
	};
}
function categories(state = DEFAULT_CATEGORIES, action) {
	switch (action.type) {
		case "SET_CATEGORIES":
			const uniqueCategories = /* @__PURE__ */ new Map();
			(action.categories || []).forEach((category) => {
				uniqueCategories.set(category.slug, category);
			});
			return [...uniqueCategories.values()];
		case "UPDATE_CATEGORY":
			if (!action.category || !Object.keys(action.category).length) return state;
			if (state.find(({ slug }) => slug === action.slug)) return state.map((category) => {
				if (category.slug === action.slug) return {
					...category,
					...action.category
				};
				return category;
			});
	}
	return state;
}
function collections(state = {}, action) {
	switch (action.type) {
		case "ADD_BLOCK_COLLECTION": return {
			...state,
			[action.namespace]: {
				title: action.title,
				icon: action.icon
			}
		};
		case "REMOVE_BLOCK_COLLECTION": return omit(state, action.namespace);
	}
	return state;
}
function getMergedUsesContext(existingUsesContext = [], newUsesContext = []) {
	const mergedArrays = Array.from(new Set(existingUsesContext.concat(newUsesContext)));
	return mergedArrays.length > 0 ? mergedArrays : void 0;
}
function blockBindingsSources(state = {}, action) {
	switch (action.type) {
		case "ADD_BLOCK_BINDINGS_SOURCE": return {
			...state,
			[action.name]: {
				label: action.label || state[action.name]?.label,
				usesContext: getMergedUsesContext(state[action.name]?.usesContext, action.usesContext),
				getValues: action.getValues,
				setValues: action.setValues,
				canUserEditValue: action.setValues && action.canUserEditValue,
				getFieldsList: action.getFieldsList
			}
		};
		case "REMOVE_BLOCK_BINDINGS_SOURCE": return omit(state, action.name);
	}
	return state;
}
var DEFAULT_CATEGORIES, defaultBlockName, freeformFallbackBlockName, unregisteredFallbackBlockName, groupingBlockName, reducer_default$2;
function init_reducer$1() {
	return (init_reducer$1 = __esmMin((() => {
		init_dist_es2015();
		init_build_module$13();
		init_build_module$10();
		init_utils();
		DEFAULT_CATEGORIES = [
			{
				slug: "text",
				title: __("Text")
			},
			{
				slug: "media",
				title: __("Media")
			},
			{
				slug: "design",
				title: __("Design")
			},
			{
				slug: "widgets",
				title: __("Widgets")
			},
			{
				slug: "theme",
				title: __("Theme")
			},
			{
				slug: "embed",
				title: __("Embeds")
			},
			{
				slug: "reusable",
				title: __("Reusable blocks")
			}
		];
		defaultBlockName = createBlockNameSetterReducer("SET_DEFAULT_BLOCK_NAME");
		freeformFallbackBlockName = createBlockNameSetterReducer("SET_FREEFORM_FALLBACK_BLOCK_NAME");
		unregisteredFallbackBlockName = createBlockNameSetterReducer("SET_UNREGISTERED_FALLBACK_BLOCK_NAME");
		groupingBlockName = createBlockNameSetterReducer("SET_GROUPING_BLOCK_NAME");
		reducer_default$2 = combineReducers({
			bootstrappedBlockTypes,
			unprocessedBlockTypes,
			blockTypes,
			blockStyles,
			blockVariations,
			defaultBlockName,
			freeformFallbackBlockName,
			unregisteredFallbackBlockName,
			groupingBlockName,
			categories,
			collections,
			blockBindingsSources
		});
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/store/utils.mjs
function isObject(candidate) {
	return typeof candidate === "object" && candidate !== null && candidate.constructor === Object;
}
function matchesAttributes(blockAttributes, variationAttributes) {
	if (isObject(blockAttributes) && isObject(variationAttributes)) return Object.entries(variationAttributes).every(([key, value]) => matchesAttributes(blockAttributes?.[key], value));
	return blockAttributes === variationAttributes;
}
var getValueFromObjectPath$2;
function init_utils$1() {
	return (init_utils$1 = __esmMin((() => {
		getValueFromObjectPath$2 = (object, path, defaultValue) => {
			const normalizedPath = Array.isArray(path) ? path : path.split(".");
			let value = object;
			normalizedPath.forEach((fieldName) => {
				value = value?.[fieldName];
			});
			return value ?? defaultValue;
		};
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/store/private-selectors.mjs
var private_selectors_exports$1 = /* @__PURE__ */ __exportAll({
	getAllBlockBindingsSources: () => getAllBlockBindingsSources,
	getBlockBindingsSource: () => getBlockBindingsSource,
	getBlockBindingsSourceFieldsList: () => getBlockBindingsSourceFieldsList,
	getBlockKeyboardShortcuts: () => getBlockKeyboardShortcuts,
	getBlockVariationsRaw: () => getBlockVariationsRaw$1,
	getBootstrappedBlockType: () => getBootstrappedBlockType,
	getSupportedStyles: () => getSupportedStyles,
	getUnprocessedBlockTypes: () => getUnprocessedBlockTypes,
	hasContentRoleAttribute: () => hasContentRoleAttribute
});
function filterElementBlockSupports(blockSupports, name, element) {
	return blockSupports.filter((support) => {
		if (support === "fontSize" && element === "heading") return false;
		if (support === "textDecoration" && !name && element !== "link") return false;
		if (support === "textTransform" && !name && !([
			"heading",
			"h1",
			"h2",
			"h3",
			"h4",
			"h5",
			"h6"
		].includes(element) || element === "button" || element === "caption" || element === "text")) return false;
		if (support === "letterSpacing" && !name && !([
			"heading",
			"h1",
			"h2",
			"h3",
			"h4",
			"h5",
			"h6"
		].includes(element) || element === "button" || element === "caption" || element === "text")) return false;
		if (support === "textIndent" && !name) return false;
		if (support === "textColumns" && !name) return false;
		return true;
	});
}
function getBootstrappedBlockType(state, name) {
	return state.bootstrappedBlockTypes[name];
}
function getUnprocessedBlockTypes(state) {
	return state.unprocessedBlockTypes;
}
function getBlockVariationsRaw$1(state) {
	return state.blockVariations;
}
function getAllBlockBindingsSources(state) {
	return state.blockBindingsSources;
}
function getBlockBindingsSource(state, sourceName) {
	return state.blockBindingsSources[sourceName];
}
var ROOT_BLOCK_SUPPORTS, getSupportedStyles, getBlockBindingsSourceFieldsList, getBlockKeyboardShortcuts, hasContentRoleAttribute;
function init_private_selectors() {
	return (init_private_selectors = __esmMin((() => {
		init_build_module$13();
		init_build_module$6();
		init_selectors$1();
		init_utils$1();
		init_constants();
		ROOT_BLOCK_SUPPORTS = [
			"background",
			"backgroundColor",
			"color",
			"linkColor",
			"captionColor",
			"buttonColor",
			"headingColor",
			"fontFamily",
			"fontSize",
			"fontStyle",
			"fontWeight",
			"lineHeight",
			"padding",
			"contentSize",
			"wideSize",
			"blockGap",
			"textAlign",
			"textDecoration",
			"textIndent",
			"textTransform",
			"textShadow",
			"letterSpacing"
		];
		getSupportedStyles = createSelector((state, name, element) => {
			if (!name) return filterElementBlockSupports(ROOT_BLOCK_SUPPORTS, name, element);
			const blockType = getBlockType(state, name);
			if (!blockType) return [];
			const supportKeys = [];
			const supports = blockType?.supports;
			if (supports?.spacing?.blockGap) supportKeys.push("blockGap");
			if (supports?.shadow) supportKeys.push("shadow");
			const stylePropertyMap = __EXPERIMENTAL_STYLE_PROPERTY;
			Object.keys(stylePropertyMap).forEach((styleName) => {
				if (!stylePropertyMap[styleName].support) return;
				if (stylePropertyMap[styleName].requiresOptOut) {
					if (supports && stylePropertyMap[styleName].support[0] in supports && getValueFromObjectPath$2(supports, stylePropertyMap[styleName].support) !== false) {
						supportKeys.push(styleName);
						return;
					}
				}
				if (supports && getValueFromObjectPath$2(supports, stylePropertyMap[styleName].support, false)) supportKeys.push(styleName);
			});
			return filterElementBlockSupports(supportKeys, name, element);
		}, (state, name) => [state.blockTypes[name]]);
		getBlockBindingsSourceFieldsList = createRegistrySelector((select) => createSelector((state, source, blockContext) => {
			if (!source.getFieldsList) return [];
			const context = {};
			if (source?.usesContext?.length) for (const key of source.usesContext) context[key] = blockContext[key];
			return source.getFieldsList({
				select,
				context
			});
		}, (state, source, blockContext) => [
			source.getFieldsList,
			source.usesContext,
			blockContext
		]));
		getBlockKeyboardShortcuts = createSelector((state) => {
			const shortcuts = [];
			for (const blockName of Object.keys(state.blockTypes)) {
				for (const variation of state.blockVariations[blockName] ?? []) {
					if (!variation.shortcut) continue;
					shortcuts.push({
						...variation.shortcut,
						targetBlockName: blockName,
						blockNames: [blockName],
						variationName: variation.name
					});
				}
				const transforms = state.blockTypes[blockName]?.transforms;
				for (const transform of transforms?.to ?? []) {
					if (transform.type !== "block") continue;
					const targetBlockName = transform.blocks?.[0];
					if (!targetBlockName) continue;
					for (const shortcut of transform.shortcuts ?? []) shortcuts.push({
						...shortcut,
						targetBlockName,
						blockNames: [blockName],
						variationName: shortcut.variationName ?? transform.variationName
					});
				}
				for (const transform of transforms?.from ?? []) {
					if (transform.type !== "block" || !transform.blocks?.length) continue;
					for (const shortcut of transform.shortcuts ?? []) shortcuts.push({
						...shortcut,
						targetBlockName: blockName,
						blockNames: transform.blocks,
						variationName: shortcut.variationName ?? transform.variationName
					});
				}
			}
			return shortcuts;
		}, (state) => [state.blockTypes, state.blockVariations]);
		hasContentRoleAttribute = (state, blockTypeName) => {
			const blockType = getBlockType(state, blockTypeName);
			if (!blockType) return false;
			return Object.values(blockType.attributes).some(({ role, __experimentalRole }) => {
				if (role === "content") return true;
				if (__experimentalRole === "content") {
					deprecated("__experimentalRole attribute", {
						since: "6.7",
						version: "6.8",
						alternative: "role attribute",
						hint: `Check the block.json of the ${blockTypeName} block.`
					});
					return true;
				}
				return false;
			});
		};
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/store/selectors.mjs
var selectors_exports$2 = /* @__PURE__ */ __exportAll({
	__experimentalHasContentRoleAttribute: () => __experimentalHasContentRoleAttribute,
	getActiveBlockVariation: () => getActiveBlockVariation,
	getBlockStyles: () => getBlockStyles$1,
	getBlockSupport: () => getBlockSupport,
	getBlockType: () => getBlockType,
	getBlockTypes: () => getBlockTypes,
	getBlockVariations: () => getBlockVariations,
	getCategories: () => getCategories,
	getChildBlockNames: () => getChildBlockNames,
	getCollections: () => getCollections,
	getDefaultBlockName: () => getDefaultBlockName,
	getDefaultBlockVariation: () => getDefaultBlockVariation,
	getFreeformFallbackBlockName: () => getFreeformFallbackBlockName,
	getGroupingBlockName: () => getGroupingBlockName,
	getUnregisteredFallbackBlockName: () => getUnregisteredFallbackBlockName,
	hasBlockSupport: () => hasBlockSupport,
	hasChildBlocks: () => hasChildBlocks,
	hasChildBlocksWithInserterSupport: () => hasChildBlocksWithInserterSupport,
	isMatchingSearchTerm: () => isMatchingSearchTerm
});
function getBlockType(state, name) {
	return state.blockTypes[name];
}
function getBlockStyles$1(state, name) {
	return state.blockStyles[name];
}
function getActiveBlockVariation(state, blockName, attributes, scope, innerContent) {
	const variations = getBlockVariations(state, blockName, scope);
	if (!variations) return variations;
	if (innerContent) {
		const innerContentMatch = variations.find((variation) => variation.innerContent && (0, import_es6$2.default)(variation.innerContent, innerContent));
		if (innerContentMatch) return innerContentMatch;
	}
	const blockType = getBlockType(state, blockName);
	const attributeKeys = Object.keys(blockType?.attributes || {});
	let match;
	let maxMatchedAttributes = 0;
	for (const variation of variations) {
		if (variation.innerContent) continue;
		if (Array.isArray(variation.isActive)) {
			const definedAttributes = variation.isActive.filter((attribute) => {
				const topLevelAttribute = attribute.split(".")[0];
				return attributeKeys.includes(topLevelAttribute);
			});
			const definedAttributesLength = definedAttributes.length;
			if (definedAttributesLength === 0) continue;
			if (definedAttributes.every((attribute) => {
				const variationAttributeValue = getValueFromObjectPath$2(variation.attributes, attribute);
				if (variationAttributeValue === void 0) return false;
				let blockAttributeValue = getValueFromObjectPath$2(attributes, attribute);
				if (blockAttributeValue instanceof RichTextData) blockAttributeValue = blockAttributeValue.toHTMLString();
				return matchesAttributes(blockAttributeValue, variationAttributeValue);
			}) && definedAttributesLength > maxMatchedAttributes) {
				match = variation;
				maxMatchedAttributes = definedAttributesLength;
			}
		} else if (variation.isActive?.(attributes, variation.attributes)) return match || variation;
	}
	if (!match && ["block", "transform"].includes(scope)) match = variations.find((variation) => variation?.isDefault && !Object.hasOwn(variation, "isActive"));
	return match;
}
function getDefaultBlockVariation(state, blockName, scope) {
	const variations = getBlockVariations(state, blockName, scope);
	return [...variations || []].reverse().find(({ isDefault }) => !!isDefault) || variations?.[0];
}
function getCategories(state) {
	return state.categories;
}
function getCollections(state) {
	return state.collections;
}
function getDefaultBlockName(state) {
	return state.defaultBlockName;
}
function getFreeformFallbackBlockName(state) {
	return state.freeformFallbackBlockName;
}
function getUnregisteredFallbackBlockName(state) {
	return state.unregisteredFallbackBlockName;
}
function getGroupingBlockName(state) {
	return state.groupingBlockName;
}
function hasBlockSupport(state, nameOrType, feature, defaultSupports) {
	return !!getBlockSupport(state, nameOrType, feature, defaultSupports);
}
function getNormalizedSearchTerm(term) {
	return (0, import_remove_accents.default)(term ?? "").toLowerCase().trim();
}
function isMatchingSearchTerm(state, nameOrType, searchTerm = "") {
	const blockType = getNormalizedBlockType(state, nameOrType);
	const normalizedSearchTerm = getNormalizedSearchTerm(searchTerm);
	const isSearchMatch = (candidate) => getNormalizedSearchTerm(candidate).includes(normalizedSearchTerm);
	return isSearchMatch(blockType?.title) || blockType?.keywords?.some(isSearchMatch) || isSearchMatch(blockType?.category) || typeof blockType?.description === "string" && isSearchMatch(blockType.description);
}
var import_remove_accents, import_es6$2, getNormalizedBlockType, getBlockTypes, getBlockVariations, getChildBlockNames, getBlockSupport, hasChildBlocks, hasChildBlocksWithInserterSupport, __experimentalHasContentRoleAttribute;
function init_selectors$1() {
	return (init_selectors$1 = __esmMin((() => {
		import_remove_accents = /* @__PURE__ */ __toESM(require_remove_accents(), 1);
		import_es6$2 = /* @__PURE__ */ __toESM(require_es6(), 1);
		init_build_module$13();
		init_build_module();
		init_build_module$6();
		init_utils$1();
		init_private_selectors();
		getNormalizedBlockType = (state, nameOrType) => "string" === typeof nameOrType ? getBlockType(state, nameOrType) : nameOrType;
		getBlockTypes = createSelector((state) => Object.values(state.blockTypes), (state) => [state.blockTypes]);
		getBlockVariations = createSelector((state, blockName, scope) => {
			const variations = state.blockVariations[blockName];
			if (!variations || !scope) return variations;
			return variations.filter((variation) => {
				return (variation.scope || ["block", "inserter"]).includes(scope);
			});
		}, (state, blockName) => [state.blockVariations[blockName]]);
		getChildBlockNames = createSelector((state, blockName) => {
			return getBlockTypes(state).filter((blockType) => {
				return blockType.parent?.includes(blockName);
			}).map(({ name }) => name);
		}, (state) => [state.blockTypes]);
		getBlockSupport = (state, nameOrType, feature, defaultSupports) => {
			const blockType = getNormalizedBlockType(state, nameOrType);
			if (!blockType?.supports) return defaultSupports;
			return getValueFromObjectPath$2(blockType.supports, feature, defaultSupports);
		};
		hasChildBlocks = (state, blockName) => {
			return getChildBlockNames(state, blockName).length > 0;
		};
		hasChildBlocksWithInserterSupport = (state, blockName) => {
			return getChildBlockNames(state, blockName).some((childBlockName) => {
				return hasBlockSupport(state, childBlockName, "inserter", true);
			});
		};
		__experimentalHasContentRoleAttribute = (...args) => {
			deprecated("__experimentalHasContentRoleAttribute", {
				since: "6.7",
				version: "6.8",
				hint: "This is a private selector."
			});
			return hasContentRoleAttribute(...args);
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/react-is@19.3.0-h9DBeE4BCfrMSfxZZXEDFw/node_modules/react-is/cjs/react-is.development.js
/**
* @license React
* react-is.development.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_is_development = /* @__PURE__ */ __commonJSMin(((exports) => {
	(function() {
		function typeOf(object) {
			if ("object" === typeof object && null !== object) {
				var $$typeof = object.$$typeof;
				switch ($$typeof) {
					case REACT_ELEMENT_TYPE: switch (object = object.type, object) {
						case REACT_FRAGMENT_TYPE:
						case REACT_PROFILER_TYPE:
						case REACT_STRICT_MODE_TYPE:
						case REACT_SUSPENSE_TYPE:
						case REACT_SUSPENSE_LIST_TYPE:
						case REACT_VIEW_TRANSITION_TYPE: return object;
						default: switch (object = object && object.$$typeof, object) {
							case REACT_CONTEXT_TYPE:
							case REACT_FORWARD_REF_TYPE:
							case REACT_LAZY_TYPE:
							case REACT_MEMO_TYPE: return object;
							case REACT_CONSUMER_TYPE: return object;
							default: return $$typeof;
						}
					}
					case REACT_PORTAL_TYPE: return $$typeof;
				}
			}
		}
		var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
		exports.ContextConsumer = REACT_CONSUMER_TYPE;
		exports.ContextProvider = REACT_CONTEXT_TYPE;
		exports.Element = REACT_ELEMENT_TYPE;
		exports.ForwardRef = REACT_FORWARD_REF_TYPE;
		exports.Fragment = REACT_FRAGMENT_TYPE;
		exports.Lazy = REACT_LAZY_TYPE;
		exports.Memo = REACT_MEMO_TYPE;
		exports.Portal = REACT_PORTAL_TYPE;
		exports.Profiler = REACT_PROFILER_TYPE;
		exports.StrictMode = REACT_STRICT_MODE_TYPE;
		exports.Suspense = REACT_SUSPENSE_TYPE;
		exports.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
		exports.isContextConsumer = function(object) {
			return typeOf(object) === REACT_CONSUMER_TYPE;
		};
		exports.isContextProvider = function(object) {
			return typeOf(object) === REACT_CONTEXT_TYPE;
		};
		exports.isElement = function(object) {
			return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
		};
		exports.isForwardRef = function(object) {
			return typeOf(object) === REACT_FORWARD_REF_TYPE;
		};
		exports.isFragment = function(object) {
			return typeOf(object) === REACT_FRAGMENT_TYPE;
		};
		exports.isLazy = function(object) {
			return typeOf(object) === REACT_LAZY_TYPE;
		};
		exports.isMemo = function(object) {
			return typeOf(object) === REACT_MEMO_TYPE;
		};
		exports.isPortal = function(object) {
			return typeOf(object) === REACT_PORTAL_TYPE;
		};
		exports.isProfiler = function(object) {
			return typeOf(object) === REACT_PROFILER_TYPE;
		};
		exports.isStrictMode = function(object) {
			return typeOf(object) === REACT_STRICT_MODE_TYPE;
		};
		exports.isSuspense = function(object) {
			return typeOf(object) === REACT_SUSPENSE_TYPE;
		};
		exports.isSuspenseList = function(object) {
			return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
		};
		exports.isValidElementType = function(type) {
			return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_VIEW_TRANSITION_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || void 0 !== type.getModuleId) ? !0 : !1;
		};
		exports.typeOf = typeOf;
	})();
}));
//#endregion
//#region ../node_modules/.store/react-is@19.3.0-h9DBeE4BCfrMSfxZZXEDFw/node_modules/react-is/index.js
var require_react_is = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_is_development();
}));
//#endregion
//#region ../packages/blocks/build-module/store/process-block-type.mjs
function mergeBlockVariations(bootstrappedVariations = [], clientVariations = []) {
	const result = [...bootstrappedVariations];
	clientVariations.forEach((clientVariation) => {
		const index = result.findIndex((bootstrappedVariation) => bootstrappedVariation.name === clientVariation.name);
		if (index !== -1) result[index] = {
			...result[index],
			...clientVariation
		};
		else result.push(clientVariation);
	});
	return result;
}
var import_react_is, LEGACY_CATEGORY_MAPPING, processBlockType;
function init_process_block_type() {
	return (init_process_block_type = __esmMin((() => {
		import_react_is = require_react_is();
		init_build_module$6();
		init_build_module$5();
		init_build_module$12();
		init_utils();
		init_constants();
		LEGACY_CATEGORY_MAPPING = {
			common: "text",
			formatting: "text",
			layout: "design"
		};
		processBlockType = (name, blockSettings) => ({ select }) => {
			const bootstrappedBlockType = select.getBootstrappedBlockType(name);
			const blockType = {
				apiVersion: 1,
				name,
				icon: BLOCK_ICON_DEFAULT,
				keywords: [],
				attributes: {},
				providesContext: {},
				usesContext: [],
				selectors: {},
				supports: {},
				styles: [],
				blockHooks: {},
				save: () => null,
				...bootstrappedBlockType,
				...blockSettings,
				variations: mergeBlockVariations(Array.isArray(bootstrappedBlockType?.variations) ? bootstrappedBlockType.variations : [], Array.isArray(blockSettings?.variations) ? blockSettings.variations : [])
			};
			if (!blockType.attributes || typeof blockType.attributes !== "object") {
				warning("The block \"" + name + "\" is registering attributes as `null` or `undefined`. Use an empty object (`attributes: {}`) or exclude the `attributes` key.");
				blockType.attributes = {};
			}
			const settings = applyFilters("blocks.registerBlockType", blockType, name, null);
			if (settings.apiVersion <= 2) deprecated("Block with API version 2 or lower", {
				since: "6.9",
				hint: `The block "${name}" is registered with API version ${settings.apiVersion}. This means that the post editor may work as a non-iframe editor. Since all editors are planned to work as iframes in the future, set the \`apiVersion\` field to 3 and test the block inside the iframe editor.`,
				link: "https://developer.wordpress.org/block-editor/reference-guides/block-api/block-api-versions/block-migration-for-iframe-editor-compatibility/"
			});
			if (settings.description && typeof settings.description !== "string") deprecated("Declaring non-string block descriptions", { since: "6.2" });
			if (settings.deprecated) settings.deprecated = settings.deprecated.map((deprecation) => Object.fromEntries(Object.entries(applyFilters("blocks.registerBlockType", {
				...omit(blockType, DEPRECATED_ENTRY_KEYS),
				...deprecation
			}, blockType.name, deprecation)).filter(([key]) => DEPRECATED_ENTRY_KEYS.includes(key))));
			if (!isPlainObject$1(settings)) {
				warning("Block settings must be a valid object.");
				return;
			}
			if (typeof settings.save !== "function") {
				warning("The \"save\" property must be a valid function.");
				return;
			}
			if ("edit" in settings && !(0, import_react_is.isValidElementType)(settings.edit)) {
				warning("The \"edit\" property must be a valid component.");
				return;
			}
			if (typeof settings.category === "string" && LEGACY_CATEGORY_MAPPING.hasOwnProperty(settings.category)) settings.category = LEGACY_CATEGORY_MAPPING[settings.category];
			if ("category" in settings && !select.getCategories().some(({ slug }) => slug === settings.category)) {
				warning("The block \"" + name + "\" is registered with an invalid category \"" + settings.category + "\".");
				delete settings.category;
			}
			if (!("title" in settings) || settings.title === "") {
				warning("The block \"" + name + "\" must have a title.");
				return;
			}
			if (typeof settings.title !== "string") {
				warning("Block titles must be strings.");
				return;
			}
			const icon = normalizeIconObject(settings.icon);
			settings.icon = icon;
			if (!isValidIcon(icon.src)) {
				warning("The icon passed is invalid. The icon should be a string, an element, a function, or an object following the specifications documented in https://developer.wordpress.org/block-editor/developers/block-api/block-registration/#icon-optional");
				return;
			}
			if (typeof settings?.parent === "string" || settings?.parent instanceof String) {
				settings.parent = [settings.parent];
				warning("Parent must be undefined or an array of strings (block types), but it is a string.");
			}
			if (!Array.isArray(settings?.parent) && settings?.parent !== void 0) {
				warning("Parent must be undefined or an array of block types, but it is " + settings.parent);
				return;
			}
			if (1 === settings?.parent?.length && name === settings.parent[0]) {
				warning("Block \"" + name + "\" cannot be a parent of itself. Please remove the block name from the parent list.");
				return;
			}
			return settings;
		};
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/store/actions.mjs
var actions_exports$2 = /* @__PURE__ */ __exportAll({
	__experimentalReapplyBlockFilters: () => __experimentalReapplyBlockFilters,
	addBlockCollection: () => addBlockCollection,
	addBlockStyles: () => addBlockStyles,
	addBlockTypes: () => addBlockTypes,
	addBlockVariations: () => addBlockVariations,
	reapplyBlockTypeFilters: () => reapplyBlockTypeFilters,
	removeBlockCollection: () => removeBlockCollection,
	removeBlockStyles: () => removeBlockStyles,
	removeBlockTypes: () => removeBlockTypes,
	removeBlockVariations: () => removeBlockVariations,
	setCategories: () => setCategories,
	setDefaultBlockName: () => setDefaultBlockName,
	setFreeformFallbackBlockName: () => setFreeformFallbackBlockName,
	setGroupingBlockName: () => setGroupingBlockName,
	setUnregisteredFallbackBlockName: () => setUnregisteredFallbackBlockName,
	updateCategory: () => updateCategory
});
function addBlockTypes(blockTypes) {
	return {
		type: "ADD_BLOCK_TYPES",
		blockTypes: Array.isArray(blockTypes) ? blockTypes : [blockTypes]
	};
}
function reapplyBlockTypeFilters() {
	return ({ dispatch, select }) => {
		const processedBlockTypes = [];
		for (const [name, settings] of Object.entries(select.getUnprocessedBlockTypes())) {
			const result = dispatch(processBlockType(name, settings));
			if (result) processedBlockTypes.push(result);
		}
		if (!processedBlockTypes.length) return;
		dispatch.addBlockTypes(processedBlockTypes);
	};
}
function __experimentalReapplyBlockFilters() {
	deprecated("wp.data.dispatch( \"core/blocks\" ).__experimentalReapplyBlockFilters", {
		since: "6.4",
		alternative: "reapplyBlockFilters"
	});
	return reapplyBlockTypeFilters();
}
function removeBlockTypes(names) {
	return {
		type: "REMOVE_BLOCK_TYPES",
		names: Array.isArray(names) ? names : [names]
	};
}
function addBlockStyles(blockNames, styles) {
	return {
		type: "ADD_BLOCK_STYLES",
		styles: Array.isArray(styles) ? styles : [styles],
		blockNames: Array.isArray(blockNames) ? blockNames : [blockNames]
	};
}
function removeBlockStyles(blockName, styleNames) {
	return {
		type: "REMOVE_BLOCK_STYLES",
		styleNames: Array.isArray(styleNames) ? styleNames : [styleNames],
		blockName
	};
}
function addBlockVariations(blockName, variations) {
	return {
		type: "ADD_BLOCK_VARIATIONS",
		variations: Array.isArray(variations) ? variations : [variations],
		blockName
	};
}
function removeBlockVariations(blockName, variationNames) {
	return {
		type: "REMOVE_BLOCK_VARIATIONS",
		variationNames: Array.isArray(variationNames) ? variationNames : [variationNames],
		blockName
	};
}
function setDefaultBlockName(name) {
	return {
		type: "SET_DEFAULT_BLOCK_NAME",
		name
	};
}
function setFreeformFallbackBlockName(name) {
	return {
		type: "SET_FREEFORM_FALLBACK_BLOCK_NAME",
		name
	};
}
function setUnregisteredFallbackBlockName(name) {
	return {
		type: "SET_UNREGISTERED_FALLBACK_BLOCK_NAME",
		name
	};
}
function setGroupingBlockName(name) {
	return {
		type: "SET_GROUPING_BLOCK_NAME",
		name
	};
}
function setCategories(categories) {
	return {
		type: "SET_CATEGORIES",
		categories
	};
}
function updateCategory(slug, category) {
	return {
		type: "UPDATE_CATEGORY",
		slug,
		category
	};
}
function addBlockCollection(namespace, title, icon) {
	return {
		type: "ADD_BLOCK_COLLECTION",
		namespace,
		title,
		icon
	};
}
function removeBlockCollection(namespace) {
	return {
		type: "REMOVE_BLOCK_COLLECTION",
		namespace
	};
}
function init_actions$1() {
	return (init_actions$1 = __esmMin((() => {
		init_build_module$6();
		init_process_block_type();
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/store/private-actions.mjs
var private_actions_exports$1 = /* @__PURE__ */ __exportAll({
	addBlockBindingsSource: () => addBlockBindingsSource,
	addBootstrappedBlockType: () => addBootstrappedBlockType,
	addUnprocessedBlockType: () => addUnprocessedBlockType,
	removeBlockBindingsSource: () => removeBlockBindingsSource
});
function addBootstrappedBlockType(name, blockType) {
	return {
		type: "ADD_BOOTSTRAPPED_BLOCK_TYPE",
		name,
		blockType
	};
}
function addUnprocessedBlockType(name, blockType) {
	return ({ dispatch }) => {
		dispatch({
			type: "ADD_UNPROCESSED_BLOCK_TYPE",
			name,
			blockType
		});
		const processedBlockType = dispatch(processBlockType(name, blockType));
		if (!processedBlockType) return;
		dispatch.addBlockTypes(processedBlockType);
	};
}
function addBlockBindingsSource(source) {
	return {
		type: "ADD_BLOCK_BINDINGS_SOURCE",
		name: source.name,
		label: source.label,
		usesContext: source.usesContext,
		getValues: source.getValues,
		setValues: source.setValues,
		canUserEditValue: source.canUserEditValue,
		getFieldsList: source.getFieldsList
	};
}
function removeBlockBindingsSource(name) {
	return {
		type: "REMOVE_BLOCK_BINDINGS_SOURCE",
		name
	};
}
function init_private_actions() {
	return (init_private_actions = __esmMin((() => {
		init_process_block_type();
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/store/constants.mjs
var STORE_NAME$1;
function init_constants$1() {
	return (init_constants$1 = __esmMin((() => {
		STORE_NAME$1 = "core/blocks";
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/store/index.mjs
var store$2;
function init_store$1() {
	return (init_store$1 = __esmMin((() => {
		init_build_module$13();
		init_reducer$1();
		init_selectors$1();
		init_private_selectors();
		init_actions$1();
		init_private_actions();
		init_constants$1();
		init_lock_unlock();
		store$2 = createReduxStore(STORE_NAME$1, {
			reducer: reducer_default$2,
			selectors: selectors_exports$2,
			actions: actions_exports$2
		});
		register(store$2);
		unlock$1(store$2).registerPrivateSelectors(private_selectors_exports$1);
		unlock$1(store$2).registerPrivateActions(private_actions_exports$1);
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/factory.mjs
function createBlock(name, attributes = {}, innerBlocks = [], innerContent) {
	if (!isBlockRegistered(name)) return createBlock("core/missing", {
		originalName: name,
		originalContent: "",
		originalUndelimitedContent: ""
	});
	const sanitizedAttributes = sanitizeBlockAttributes(name, attributes);
	const block = {
		clientId: v4(),
		name,
		isValid: true,
		attributes: sanitizedAttributes,
		innerBlocks
	};
	if (innerContent) {
		if (name === "core/html") block.innerContent = innerContent;
		else warning(`The innerContent argument passed to createBlock for the "${name}" block was ignored. Only the Custom HTML block stores static inner content.`);
	}
	return block;
}
function createBlocksFromInnerBlocksTemplate(innerBlocksOrTemplate = []) {
	return innerBlocksOrTemplate.map((innerBlock) => {
		const [name, attributes, innerBlocks = [], innerContent] = Array.isArray(innerBlock) ? innerBlock : [
			innerBlock.name,
			innerBlock.attributes,
			innerBlock.innerBlocks,
			innerBlock.innerContent
		];
		return createBlock(name, attributes, createBlocksFromInnerBlocksTemplate(innerBlocks), innerContent);
	});
}
function cloneSanitizedBlock(block, mergeAttributes = {}, newInnerBlocks) {
	const { name } = block;
	if (!isBlockRegistered(name)) return createBlock("core/missing", {
		originalName: name,
		originalContent: "",
		originalUndelimitedContent: ""
	});
	const clientId = v4();
	const sanitizedAttributes = sanitizeBlockAttributes(name, {
		...block.attributes,
		...mergeAttributes
	});
	return {
		...block,
		clientId,
		attributes: sanitizedAttributes,
		innerBlocks: newInnerBlocks || block.innerBlocks.map((innerBlock) => cloneSanitizedBlock(innerBlock))
	};
}
function cloneBlock(block, mergeAttributes = {}, newInnerBlocks) {
	const clientId = v4();
	return {
		...block,
		clientId,
		attributes: {
			...block.attributes,
			...mergeAttributes
		},
		innerBlocks: newInnerBlocks || block.innerBlocks.map((innerBlock) => cloneBlock(innerBlock))
	};
}
function getPossibleBlockTransformations(blocks) {
	if (!blocks.length) return [];
	const blockTypesForFromTransforms = getBlockTypesForPossibleFromTransforms(blocks);
	const blockTypesForToTransforms = getBlockTypesForPossibleToTransforms(blocks);
	const blockTypesByNameAndVariation = /* @__PURE__ */ new Map();
	for (const blockType of [...blockTypesForFromTransforms, ...blockTypesForToTransforms]) {
		const key = blockType.variationName ? `${blockType.name}/${blockType.variationName}` : blockType.name;
		if (!blockTypesByNameAndVariation.has(key)) blockTypesByNameAndVariation.set(key, blockType);
	}
	return [...blockTypesByNameAndVariation.values()];
}
function findTransform(transforms, predicate) {
	const priority = (t) => t.priority ?? 10;
	const candidates = transforms.filter((t) => predicate(t)).toSorted((t1, t2) => priority(t1) - priority(t2));
	return candidates.length > 0 ? candidates[0] : null;
}
function getBlockTransforms(direction, blockTypeOrName) {
	if (blockTypeOrName === void 0) return getBlockTypes$1().map(({ name }) => getBlockTransforms(direction, name)).flat();
	const blockType = normalizeBlockType(blockTypeOrName);
	const directionTransforms = blockType?.transforms?.[direction];
	if (!blockType || !Array.isArray(directionTransforms)) return [];
	return directionTransforms.map((transform) => ({
		...transform,
		blockName: blockType.name
	}));
}
function maybeCheckTransformIsMatch(transform, blocks) {
	if (typeof transform.isMatch !== "function") return true;
	const sourceBlock = blocks[0];
	const attributes = transform.isMultiBlock ? blocks.map((block2) => block2.attributes) : sourceBlock.attributes;
	const block = transform.isMultiBlock ? blocks : sourceBlock;
	return transform.isMatch(attributes, block);
}
function switchToBlockType(blocks, name, variationName) {
	const blocksArray = Array.isArray(blocks) ? blocks : [blocks];
	const isMultiBlock = blocksArray.length > 1;
	const firstBlock = blocksArray[0];
	const sourceName = firstBlock.name;
	const transformationsFrom = getBlockTransforms("from", name).filter(isBlockTypeTransform);
	const transformationsTo = getBlockTransforms("to", sourceName).filter(isBlockTypeTransform);
	const isMatchingVariation = (t) => variationName ? t.variationName === variationName : !t.variationName;
	const transformation = findTransform(transformationsTo, (t) => isMatchingVariation(t) && (isWildcardBlockTransform(t) || t.blocks.indexOf(name) !== -1) && (!isMultiBlock || !!t.isMultiBlock) && maybeCheckTransformIsMatch(t, blocksArray)) || findTransform(transformationsFrom, (t) => isMatchingVariation(t) && (isWildcardBlockTransform(t) || t.blocks.indexOf(sourceName) !== -1) && (!isMultiBlock || !!t.isMultiBlock) && maybeCheckTransformIsMatch(t, blocksArray));
	if (!transformation) return null;
	let transformationResults;
	if (transformation.isMultiBlock) {
		if ("__experimentalConvert" in transformation) transformationResults = transformation.__experimentalConvert(blocksArray);
		else transformationResults = transformation.transform(blocksArray.map((currentBlock) => currentBlock.attributes), blocksArray.map((currentBlock) => currentBlock.innerBlocks));
	} else if ("__experimentalConvert" in transformation) transformationResults = transformation.__experimentalConvert(firstBlock);
	else transformationResults = transformation.transform(firstBlock.attributes, firstBlock.innerBlocks);
	if (transformationResults === null || typeof transformationResults !== "object") return null;
	transformationResults = Array.isArray(transformationResults) ? transformationResults : [transformationResults];
	if (transformationResults.some((result) => !getBlockType$1(result.name))) return null;
	if (!transformationResults.some((result) => result.name === name)) return null;
	return transformationResults.map((result, index, results) => {
		return applyFilters("blocks.switchToBlockType.transformedBlock", result, blocks, index, results);
	});
}
var isBlockTypeTransform, getBlockTypeWithTransformMetadata, isPossibleTransformForSource, getBlockTypesForPossibleFromTransforms, getBlockTypesForPossibleToTransforms, isWildcardBlockTransform, isContainerGroupBlock, getBlockFromExample;
function init_factory() {
	return (init_factory = __esmMin((() => {
		init_v4();
		init_build_module$5();
		init_build_module$12();
		init_registration();
		init_utils();
		isBlockTypeTransform = (transform) => transform?.type === "block";
		getBlockTypeWithTransformMetadata = (blockType, transform) => transform.variationName ? {
			...blockType,
			variationName: transform.variationName
		} : blockType;
		isPossibleTransformForSource = (transform, direction, blocks) => {
			if (!blocks.length) return false;
			const isMultiBlock = blocks.length > 1;
			const firstBlockName = blocks[0].name;
			if (!(isWildcardBlockTransform(transform) || !isMultiBlock || transform.isMultiBlock)) return false;
			if (!isWildcardBlockTransform(transform) && !blocks.every((block) => block.name === firstBlockName)) return false;
			const sourceBlock = blocks[0];
			if (!(direction !== "from" || transform.blocks.indexOf(sourceBlock.name) !== -1 || isWildcardBlockTransform(transform))) return false;
			if (!isMultiBlock && direction === "from" && isContainerGroupBlock(sourceBlock.name) && isContainerGroupBlock(transform.blockName)) return false;
			if (!maybeCheckTransformIsMatch(transform, blocks)) return false;
			return true;
		};
		getBlockTypesForPossibleFromTransforms = (blocks) => {
			if (!blocks.length) return [];
			return getBlockTypes$1().flatMap((blockType) => {
				return getBlockTransforms("from", blockType.name).filter(isBlockTypeTransform).filter((transform) => isPossibleTransformForSource(transform, "from", blocks)).map((transform) => getBlockTypeWithTransformMetadata(blockType, transform));
			});
		};
		getBlockTypesForPossibleToTransforms = (blocks) => {
			if (!blocks.length) return [];
			const sourceBlock = blocks[0];
			const blockType = getBlockType$1(sourceBlock.name);
			return (blockType ? getBlockTransforms("to", blockType.name) : []).filter(isBlockTypeTransform).filter((transform) => isPossibleTransformForSource(transform, "to", blocks)).flatMap((transformation) => {
				return (transformation.blocks ?? []).map((name) => {
					const transformedBlockType = getBlockType$1(name);
					return transformedBlockType ? getBlockTypeWithTransformMetadata(transformedBlockType, transformation) : void 0;
				});
			}).filter((bt) => !!bt);
		};
		isWildcardBlockTransform = (t) => isBlockTypeTransform(t) && Array.isArray(t.blocks) && t.blocks.includes("*");
		isContainerGroupBlock = (name) => name === getGroupingBlockName$1();
		getBlockFromExample = (name, example) => createBlock(name, example.attributes, (example.innerBlocks ?? []).map((innerBlock) => getBlockFromExample(innerBlock.name, innerBlock)), example.innerContent);
	})))();
}
//#endregion
//#region ../packages/block-serialization-default-parser/build-module/index.mjs
function Block(blockName, attrs, innerBlocks, innerHTML, innerContent) {
	return {
		blockName,
		attrs,
		innerBlocks,
		innerHTML,
		innerContent
	};
}
function Freeform(innerHTML) {
	return Block(null, {}, [], innerHTML, [innerHTML]);
}
function Frame(block, tokenStart, tokenLength, prevOffset, leadingHtmlStart) {
	return {
		block,
		tokenStart,
		tokenLength,
		prevOffset: prevOffset || tokenStart + tokenLength,
		leadingHtmlStart
	};
}
function proceed() {
	const stackDepth = stack.length;
	const [tokenType, blockName, attrs, startOffset, tokenLength] = nextToken();
	const leadingHtmlStart = startOffset > offset ? offset : null;
	switch (tokenType) {
		case "no-more-tokens":
			if (0 === stackDepth) {
				addFreeform();
				return false;
			}
			if (1 === stackDepth) {
				addBlockFromStack();
				return false;
			}
			while (0 < stack.length) addBlockFromStack();
			return false;
		case "void-block":
			if (0 === stackDepth) {
				if (null !== leadingHtmlStart) output.push(Freeform(document$1.substr(leadingHtmlStart, startOffset - leadingHtmlStart)));
				output.push(Block(blockName, attrs, [], "", []));
				offset = startOffset + tokenLength;
				return true;
			}
			addInnerBlock(Block(blockName, attrs, [], "", []), startOffset, tokenLength);
			offset = startOffset + tokenLength;
			return true;
		case "block-opener":
			stack.push(Frame(Block(blockName, attrs, [], "", []), startOffset, tokenLength, startOffset + tokenLength, leadingHtmlStart));
			offset = startOffset + tokenLength;
			return true;
		case "block-closer":
			if (0 === stackDepth) {
				addFreeform();
				return false;
			}
			if (1 === stackDepth) {
				addBlockFromStack(startOffset);
				offset = startOffset + tokenLength;
				return true;
			}
			const stackTop = stack.pop();
			const html = document$1.substr(stackTop.prevOffset, startOffset - stackTop.prevOffset);
			stackTop.block.innerHTML += html;
			stackTop.block.innerContent.push(html);
			stackTop.prevOffset = startOffset + tokenLength;
			addInnerBlock(stackTop.block, stackTop.tokenStart, stackTop.tokenLength, startOffset + tokenLength);
			offset = startOffset + tokenLength;
			return true;
		default:
			addFreeform();
			return false;
	}
}
function parseJSON(input) {
	try {
		return JSON.parse(input);
	} catch {
		return null;
	}
}
function nextToken() {
	const matches = tokenizer.exec(document$1);
	if (null === matches) return [
		"no-more-tokens",
		"",
		null,
		0,
		0
	];
	const startedAt = matches.index;
	const [match, closerMatch, namespaceMatch, nameMatch, attrsMatch, , voidMatch] = matches;
	const length = match.length;
	const isCloser = !!closerMatch;
	const isVoid = !!voidMatch;
	const name = (namespaceMatch || "core/") + nameMatch;
	const hasAttrs = !!attrsMatch;
	const attrs = hasAttrs ? parseJSON(attrsMatch) : {};
	if (isCloser && (isVoid || hasAttrs)) {}
	if (isVoid) return [
		"void-block",
		name,
		attrs,
		startedAt,
		length
	];
	if (isCloser) return [
		"block-closer",
		name,
		null,
		startedAt,
		length
	];
	return [
		"block-opener",
		name,
		attrs,
		startedAt,
		length
	];
}
function addFreeform(rawLength) {
	const length = rawLength ? rawLength : document$1.length - offset;
	if (0 === length) return;
	output.push(Freeform(document$1.substr(offset, length)));
}
function addInnerBlock(block, tokenStart, tokenLength, lastOffset) {
	const parent = stack[stack.length - 1];
	parent.block.innerBlocks.push(block);
	const html = document$1.substr(parent.prevOffset, tokenStart - parent.prevOffset);
	if (html) {
		parent.block.innerHTML += html;
		parent.block.innerContent.push(html);
	}
	parent.block.innerContent.push(null);
	parent.prevOffset = lastOffset ? lastOffset : tokenStart + tokenLength;
}
function addBlockFromStack(endOffset) {
	const { block, leadingHtmlStart, prevOffset, tokenStart } = stack.pop();
	const html = endOffset ? document$1.substr(prevOffset, endOffset - prevOffset) : document$1.substr(prevOffset);
	if (html) {
		block.innerHTML += html;
		block.innerContent.push(html);
	}
	if (null !== leadingHtmlStart) output.push(Freeform(document$1.substr(leadingHtmlStart, tokenStart - leadingHtmlStart)));
	output.push(block);
}
var document$1, offset, output, stack, tokenizer, parse$2;
function init_build_module$1() {
	return (init_build_module$1 = __esmMin((() => {
		tokenizer = /<!--\s+(\/)?wp:([a-z][a-z0-9_-]*\/)?([a-z][a-z0-9_-]*)\s+({(?:(?=([^}]+|}+(?=})|(?!}\s+\/?-->)[^])*)\5|[^]*?)}\s+)?(\/)?-->/g;
		parse$2 = (doc) => {
			document$1 = doc;
			offset = 0;
			output = [];
			stack = [];
			tokenizer.lastIndex = 0;
			do			;
while (proceed());
			return output;
		};
	})))();
}
//#endregion
//#region ../packages/autop/build-module/index.mjs
function htmlSplit(input) {
	const parts = [];
	let workingInput = input;
	let match;
	while (match = workingInput.match(htmlSplitRegex)) {
		const index = match.index;
		parts.push(workingInput.slice(0, index));
		parts.push(match[0]);
		workingInput = workingInput.slice(index + match[0].length);
	}
	if (workingInput.length) parts.push(workingInput);
	return parts;
}
function replaceInHtmlTags(haystack, replacePairs) {
	const textArr = htmlSplit(haystack);
	let changed = false;
	const needles = Object.keys(replacePairs);
	for (let i = 1; i < textArr.length; i += 2) for (let j = 0; j < needles.length; j++) {
		const needle = needles[j];
		if (-1 !== textArr[i].indexOf(needle)) {
			textArr[i] = textArr[i].replace(new RegExp(needle, "g"), replacePairs[needle]);
			changed = true;
			break;
		}
	}
	if (changed) haystack = textArr.join("");
	return haystack;
}
function autop(text, br = true) {
	const preTags = [];
	if (text.trim() === "") return "";
	text = text + "\n";
	if (text.indexOf("<pre") !== -1) {
		const textParts = text.split("</pre>");
		const lastText = textParts.pop();
		text = "";
		for (let i = 0; i < textParts.length; i++) {
			const textPart = textParts[i];
			const start = textPart.indexOf("<pre");
			if (start === -1) {
				text += textPart;
				continue;
			}
			const name = "<pre wp-pre-tag-" + i + "></pre>";
			preTags.push([name, textPart.substr(start) + "</pre>"]);
			text += textPart.substr(0, start) + name;
		}
		text += lastText;
	}
	text = text.replace(/<br\s*\/?>\s*<br\s*\/?>/g, "\n\n");
	const allBlocks = "(?:table|thead|tfoot|caption|col|colgroup|tbody|tr|td|th|div|dl|dd|dt|ul|ol|li|pre|form|map|area|blockquote|address|math|style|p|h[1-6]|hr|fieldset|legend|section|article|aside|hgroup|header|footer|nav|figure|figcaption|details|menu|summary)";
	text = text.replace(new RegExp("(<" + allBlocks + "[\\s/>])", "g"), "\n\n$1");
	text = text.replace(new RegExp("(</" + allBlocks + ">)", "g"), "$1\n\n");
	text = text.replace(/\r\n|\r/g, "\n");
	text = replaceInHtmlTags(text, { "\n": " <!-- wpnl --> " });
	if (text.indexOf("<option") !== -1) {
		text = text.replace(/\s*<option/g, "<option");
		text = text.replace(/<\/option>\s*/g, "</option>");
	}
	if (text.indexOf("</object>") !== -1) {
		text = text.replace(/(<object[^>]*>)\s*/g, "$1");
		text = text.replace(/\s*<\/object>/g, "</object>");
		text = text.replace(/\s*(<\/?(?:param|embed)[^>]*>)\s*/g, "$1");
	}
	if (text.indexOf("<source") !== -1 || text.indexOf("<track") !== -1) {
		text = text.replace(/([<\[](?:audio|video)[^>\]]*[>\]])\s*/g, "$1");
		text = text.replace(/\s*([<\[]\/(?:audio|video)[>\]])/g, "$1");
		text = text.replace(/\s*(<(?:source|track)[^>]*>)\s*/g, "$1");
	}
	if (text.indexOf("<figcaption") !== -1) {
		text = text.replace(/\s*(<figcaption[^>]*>)/, "$1");
		text = text.replace(/<\/figcaption>\s*/, "</figcaption>");
	}
	text = text.replace(/\n\n+/g, "\n\n");
	const texts = text.split(/\n\s*\n/).filter(Boolean);
	text = "";
	texts.forEach((textPiece) => {
		text += "<p>" + textPiece.replace(/^\n*|\n*$/g, "") + "</p>\n";
	});
	text = text.replace(/<p>\s*<\/p>/g, "");
	text = text.replace(/<p>([^<]+)<\/(div|address|form)>/g, "<p>$1</p></$2>");
	text = text.replace(new RegExp("<p>\\s*(</?" + allBlocks + "[^>]*>)\\s*</p>", "g"), "$1");
	text = text.replace(/<p>(<li.+?)<\/p>/g, "$1");
	text = text.replace(/<p><blockquote([^>]*)>/gi, "<blockquote$1><p>");
	text = text.replace(/<\/blockquote><\/p>/g, "</p></blockquote>");
	text = text.replace(new RegExp("<p>\\s*(</?" + allBlocks + "[^>]*>)", "g"), "$1");
	text = text.replace(new RegExp("(</?" + allBlocks + "[^>]*>)\\s*</p>", "g"), "$1");
	if (br) {
		text = text.replace(/<(script|style|svg|math)[\s\S]*?<\/\1>/g, (match) => match.replace(/\n/g, "<WPPreserveNewline />"));
		text = text.replace(/<br>|<br\/>/g, "<br />");
		text = text.replace(/(<br \/>)?\s*\n/g, (a, b) => b ? a : "<br />\n");
		text = text.replace(/<WPPreserveNewline \/>/g, "\n");
	}
	text = text.replace(new RegExp("(</?" + allBlocks + "[^>]*>)\\s*<br />", "g"), "$1");
	text = text.replace(/<br \/>(\s*<\/?(?:p|li|div|dl|dd|dt|th|pre|td|ul|ol)[^>]*>)/g, "$1");
	text = text.replace(/\n<\/p>$/g, "</p>");
	preTags.forEach((preTag) => {
		const [name, original] = preTag;
		text = text.replace(name, () => original);
	});
	if (-1 !== text.indexOf("<!-- wpnl -->")) text = text.replace(/\s?<!-- wpnl -->\s?/g, "\n");
	return text;
}
function removep(html) {
	const blocklist = "blockquote|ul|ol|li|dl|dt|dd|table|thead|tbody|tfoot|tr|th|td|h[1-6]|fieldset|figure";
	const blocklist1 = blocklist + "|div|p";
	const blocklist2 = blocklist + "|pre";
	const preserve = [];
	let preserveLinebreaks = false;
	let preserveBr = false;
	if (!html) return "";
	if (html.indexOf("<script") !== -1 || html.indexOf("<style") !== -1) html = html.replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/g, (match) => {
		preserve.push(match);
		return "<wp-preserve>";
	});
	if (html.indexOf("<pre") !== -1) {
		preserveLinebreaks = true;
		html = html.replace(/<pre[^>]*>[\s\S]+?<\/pre>/g, (a) => {
			a = a.replace(/<br ?\/?>(\r\n|\n)?/g, "<wp-line-break>");
			a = a.replace(/<\/?p( [^>]*)?>(\r\n|\n)?/g, "<wp-line-break>");
			return a.replace(/\r?\n/g, "<wp-line-break>");
		});
	}
	if (html.indexOf("[caption") !== -1) {
		preserveBr = true;
		html = html.replace(/\[caption[\s\S]+?\[\/caption\]/g, (a) => {
			return a.replace(/<br([^>]*)>/g, "<wp-temp-br$1>").replace(/[\r\n\t]+/, "");
		});
	}
	html = html.replace(new RegExp("\\s*</(" + blocklist1 + ")>\\s*", "g"), "</$1>\n");
	html = html.replace(new RegExp("\\s*<((?:" + blocklist1 + ")(?: [^>]*)?)>", "g"), "\n<$1>");
	html = html.replace(/(<p [^>]+>[\s\S]*?)<\/p>/g, "$1</p#>");
	html = html.replace(/<div( [^>]*)?>\s*<p>/gi, "<div$1>\n\n");
	html = html.replace(/\s*<p>/gi, "");
	html = html.replace(/\s*<\/p>\s*/gi, "\n\n");
	html = html.replace(/\n[\s\u00a0]+\n/g, "\n\n");
	html = html.replace(/(\s*)<br ?\/?>\s*/gi, (_, space) => {
		if (space && space.indexOf("\n") !== -1) return "\n\n";
		return "\n";
	});
	html = html.replace(/\s*<div/g, "\n<div");
	html = html.replace(/<\/div>\s*/g, "</div>\n");
	html = html.replace(/\s*\[caption([^\[]+)\[\/caption\]\s*/gi, "\n\n[caption$1[/caption]\n\n");
	html = html.replace(/caption\]\n\n+\[caption/g, "caption]\n\n[caption");
	html = html.replace(new RegExp("\\s*<((?:" + blocklist2 + ")(?: [^>]*)?)\\s*>", "g"), "\n<$1>");
	html = html.replace(new RegExp("\\s*</(" + blocklist2 + ")>\\s*", "g"), "</$1>\n");
	html = html.replace(/<((li|dt|dd)[^>]*)>/g, " 	<$1>");
	if (html.indexOf("<option") !== -1) {
		html = html.replace(/\s*<option/g, "\n<option");
		html = html.replace(/\s*<\/select>/g, "\n</select>");
	}
	if (html.indexOf("<hr") !== -1) html = html.replace(/\s*<hr( [^>]*)?>\s*/g, "\n\n<hr$1>\n\n");
	if (html.indexOf("<object") !== -1) html = html.replace(/<object[\s\S]+?<\/object>/g, (a) => {
		return a.replace(/[\r\n]+/g, "");
	});
	html = html.replace(/<\/p#>/g, "</p>\n");
	html = html.replace(/\s*(<p [^>]+>[\s\S]*?<\/p>)/g, "\n$1");
	html = html.replace(/^\s+/, "");
	html = html.replace(/[\s\u00a0]+$/, "");
	if (preserveLinebreaks) html = html.replace(/<wp-line-break>/g, "\n");
	if (preserveBr) html = html.replace(/<wp-temp-br([^>]*)>/g, "<br$1>");
	if (preserve.length) html = html.replace(/<wp-preserve>/g, () => {
		return preserve.shift();
	});
	return html;
}
var htmlSplitRegex;
function init_build_module$2() {
	return (init_build_module$2 = __esmMin((() => {
		htmlSplitRegex = (() => {
			return /* @__PURE__ */ new RegExp("(<((?=!--|!\\[CDATA\\[)((?=!-)!(?:-(?!->)[^\\-]*)*(?:-->)?|!\\[CDATA\\[[^\\]]*(?:](?!]>)[^\\]]*)*?(?:]]>)?)|[^>]*>?))");
		})();
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/parser/serialize-raw-block.mjs
function serializeRawBlock(rawBlock, options = {}) {
	const { isCommentDelimited = true } = options;
	const { blockName, attrs = {}, innerBlocks = [], innerContent = [] } = rawBlock;
	let childIndex = 0;
	const content = innerContent.map((item) => item !== null ? item : serializeRawBlock(innerBlocks[childIndex++], options)).join("\n").replace(/\n+/g, "\n").trim();
	return isCommentDelimited ? getCommentDelimitedContent(blockName ?? void 0, attrs, content) : content;
}
function init_serialize_raw_block() {
	return (init_serialize_raw_block = __esmMin((() => {
		init_serializer();
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/serializer.mjs
function getBlockDefaultClassName(blockName) {
	const className = "wp-block-" + blockName.replace(/\//, "-").replace(/^core-/, "");
	return applyFilters("blocks.getBlockDefaultClassName", className, blockName);
}
function getBlockMenuDefaultClassName(blockName) {
	const className = "editor-block-list-item-" + blockName.replace(/\//, "-").replace(/^core-/, "");
	return applyFilters("blocks.getBlockMenuDefaultClassName", className, blockName);
}
function getBlockProps(props = {}) {
	const { blockType, attributes } = blockPropsProvider;
	return getBlockProps.skipFilters ? props : applyFilters("blocks.getSaveContent.extraProps", { ...props }, blockType, attributes);
}
function getInnerBlocksProps(props = {}) {
	const { innerBlocks } = innerBlocksPropsProvider;
	if (!Array.isArray(innerBlocks)) return {
		...props,
		children: innerBlocks
	};
	const html = serialize(innerBlocks, { isInnerBlocks: true });
	const children = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RawHTML, { children: html });
	return {
		...props,
		children
	};
}
function getSaveElement(blockTypeOrName, attributes, innerBlocks = []) {
	const blockType = normalizeBlockType(blockTypeOrName);
	if (!blockType?.save) return null;
	let save = blockType.save;
	if (save.prototype instanceof import_react.Component) {
		const instance = new save({ attributes });
		save = instance.render.bind(instance);
	}
	blockPropsProvider.blockType = blockType;
	blockPropsProvider.attributes = attributes;
	innerBlocksPropsProvider.innerBlocks = innerBlocks;
	let element = save({
		attributes,
		innerBlocks
	});
	if (element !== null && typeof element === "object" && hasFilter("blocks.getSaveContent.extraProps") && !((blockType.apiVersion ?? 0) > 1)) {
		const props = applyFilters("blocks.getSaveContent.extraProps", { ...element.props }, blockType, attributes);
		if (!isShallowEqual(props, element.props)) element = (0, import_react.cloneElement)(element, props);
	}
	return applyFilters("blocks.getSaveElement", element, blockType, attributes);
}
function getSaveContent(blockTypeOrName, attributes, innerBlocks) {
	const blockType = normalizeBlockType(blockTypeOrName);
	if (!blockType) return "";
	return serialize_default(getSaveElement(blockType, attributes, innerBlocks));
}
function getCommentAttributes(blockType, attributes) {
	return Object.entries(blockType.attributes ?? {}).reduce((accumulator, [key, attributeSchema]) => {
		const value = attributes[key];
		if (void 0 === value) return accumulator;
		if (attributeSchema.source !== void 0) return accumulator;
		if (attributeSchema.role === "local") return accumulator;
		if (attributeSchema.__experimentalRole === "local") {
			deprecated("__experimentalRole attribute", {
				since: "6.7",
				version: "6.8",
				alternative: "role attribute",
				hint: `Check the block.json of the ${blockType?.name} block.`
			});
			return accumulator;
		}
		if ("default" in attributeSchema && JSON.stringify(attributeSchema.default) === JSON.stringify(value)) return accumulator;
		accumulator[key] = value;
		return accumulator;
	}, {});
}
function serializeAttributes(attributes) {
	return JSON.stringify(attributes).replaceAll("\\\\", "\\u005c").replaceAll("--", "\\u002d\\u002d").replaceAll("<", "\\u003c").replaceAll(">", "\\u003e").replaceAll("&", "\\u0026").replaceAll("\\\"", "\\u0022");
}
function serializeInnerContent(innerContent, innerBlocks) {
	let childIndex = 0;
	const parts = innerContent.map((item) => {
		if (item !== null) return item;
		const innerBlock = innerBlocks[childIndex++];
		return innerBlock ? serializeBlock(innerBlock, { isInnerBlocks: true }) : "";
	});
	for (; childIndex < innerBlocks.length; childIndex++) parts.push(serializeBlock(innerBlocks[childIndex], { isInnerBlocks: true }));
	return parts.join("").trim();
}
function getBlockInnerHTML(block) {
	if (block.innerContent && block.name === "core/html") return serializeInnerContent(block.innerContent, block.innerBlocks);
	let saveContent = block.originalContent ?? "";
	if (block.isValid || block.innerBlocks.length) try {
		saveContent = getSaveContent(block.name, block.attributes, block.innerBlocks);
	} catch {}
	return saveContent;
}
function getCommentDelimitedContent(rawBlockName, attributes, content) {
	const serializedAttributes = attributes && Object.entries(attributes).length ? serializeAttributes(attributes) + " " : "";
	const blockName = rawBlockName?.startsWith("core/") ? rawBlockName.slice(5) : rawBlockName;
	if (!content) return `<!-- wp:${blockName} ${serializedAttributes}/-->`;
	return `<!-- wp:${blockName} ${serializedAttributes}-->
` + content + `
<!-- /wp:${blockName} -->`;
}
function serializeBlock(block, { isInnerBlocks = false } = {}) {
	if (!block.isValid && block.__unstableBlockSource) return serializeRawBlock(block.__unstableBlockSource);
	const blockName = block.name;
	const saveContent = getBlockInnerHTML(block);
	if (blockName === getUnregisteredTypeHandlerName() || !isInnerBlocks && blockName === getFreeformContentHandlerName()) return saveContent;
	const blockType = getBlockType$1(blockName);
	if (!blockType) return saveContent;
	return getCommentDelimitedContent(blockName, getCommentAttributes(blockType, block.attributes), saveContent);
}
function serialize(blocks, options) {
	return (Array.isArray(blocks) ? blocks : [blocks]).map((block) => serializeBlock(block, options)).join("\n\n");
}
var import_jsx_runtime, blockPropsProvider, innerBlocksPropsProvider, __unstableSerializeAndClean;
function init_serializer() {
	return (init_serializer = __esmMin((() => {
		init_react(), init_serialize(), init_raw_html();
		init_build_module$5();
		init_build_module$7();
		init_build_module$2();
		init_build_module$6();
		init_registration();
		init_serialize_raw_block();
		init_utils();
		import_jsx_runtime = require_jsx_runtime();
		blockPropsProvider = {};
		innerBlocksPropsProvider = {};
		__unstableSerializeAndClean = /* @__PURE__ */ (() => {
			const cache = /* @__PURE__ */ new WeakMap();
			return (blocks) => {
				const cached = cache.get(blocks);
				if (cached !== void 0) return cached;
				let effectiveBlocks = blocks;
				if (effectiveBlocks.length === 1 && isUnmodifiedDefaultBlock(effectiveBlocks[0])) effectiveBlocks = [];
				let content = serialize(effectiveBlocks);
				if (effectiveBlocks.length === 1 && effectiveBlocks[0].name === getFreeformContentHandlerName() && effectiveBlocks[0].name === "core/freeform") content = removep(content);
				cache.set(blocks, content);
				return content;
			};
		})();
	})))();
}
//#endregion
//#region ../node_modules/.store/simple-html-tokenizer@0.5.7-XqyG3gha3SmBXttNwRHo8w/node_modules/simple-html-tokenizer/dist/es6/index.js
function isSpace(char) {
	return WSP.test(char);
}
function isAlpha(char) {
	return ALPHA.test(char);
}
function preprocessInput(input) {
	return input.replace(CRLF, "\n");
}
var HEXCHARCODE, CHARCODE, NAMED, WSP, ALPHA, CRLF, EventedTokenizer, Tokenizer;
function init_es6() {
	return (init_es6 = __esmMin((() => {
		HEXCHARCODE = /^#[xX]([A-Fa-f0-9]+)$/;
		CHARCODE = /^#([0-9]+)$/;
		NAMED = /^([A-Za-z0-9]+)$/;
		(function() {
			function EntityParser(named) {
				this.named = named;
			}
			EntityParser.prototype.parse = function(entity) {
				if (!entity) return;
				var matches = entity.match(HEXCHARCODE);
				if (matches) return String.fromCharCode(parseInt(matches[1], 16));
				matches = entity.match(CHARCODE);
				if (matches) return String.fromCharCode(parseInt(matches[1], 10));
				matches = entity.match(NAMED);
				if (matches) return this.named[matches[1]];
			};
			return EntityParser;
		})();
		WSP = /[\t\n\f ]/;
		ALPHA = /[A-Za-z]/;
		CRLF = /\r\n?/g;
		EventedTokenizer = function() {
			function EventedTokenizer(delegate, entityParser) {
				this.delegate = delegate;
				this.entityParser = entityParser;
				this.state = "beforeData";
				this.line = -1;
				this.column = -1;
				this.input = "";
				this.index = -1;
				this.tagNameBuffer = "";
				this.states = {
					beforeData: function() {
						var char = this.peek();
						if (char === "<") {
							this.transitionTo("tagOpen");
							this.markTagStart();
							this.consume();
						} else {
							if (char === "\n") {
								var tag = this.tagNameBuffer.toLowerCase();
								if (tag === "pre" || tag === "textarea") this.consume();
							}
							this.transitionTo("data");
							this.delegate.beginData();
						}
					},
					data: function() {
						var char = this.peek();
						if (char === "<") {
							this.delegate.finishData();
							this.transitionTo("tagOpen");
							this.markTagStart();
							this.consume();
						} else if (char === "&") {
							this.consume();
							this.delegate.appendToData(this.consumeCharRef() || "&");
						} else {
							this.consume();
							this.delegate.appendToData(char);
						}
					},
					tagOpen: function() {
						var char = this.consume();
						if (char === "!") this.transitionTo("markupDeclarationOpen");
						else if (char === "/") this.transitionTo("endTagOpen");
						else if (char === "@" || char === ":" || isAlpha(char)) {
							this.transitionTo("tagName");
							this.tagNameBuffer = "";
							this.delegate.beginStartTag();
							this.appendToTagName(char);
						}
					},
					markupDeclarationOpen: function() {
						if (this.consume() === "-" && this.input.charAt(this.index) === "-") {
							this.consume();
							this.transitionTo("commentStart");
							this.delegate.beginComment();
						}
					},
					commentStart: function() {
						var char = this.consume();
						if (char === "-") this.transitionTo("commentStartDash");
						else if (char === ">") {
							this.delegate.finishComment();
							this.transitionTo("beforeData");
						} else {
							this.delegate.appendToCommentData(char);
							this.transitionTo("comment");
						}
					},
					commentStartDash: function() {
						var char = this.consume();
						if (char === "-") this.transitionTo("commentEnd");
						else if (char === ">") {
							this.delegate.finishComment();
							this.transitionTo("beforeData");
						} else {
							this.delegate.appendToCommentData("-");
							this.transitionTo("comment");
						}
					},
					comment: function() {
						var char = this.consume();
						if (char === "-") this.transitionTo("commentEndDash");
						else this.delegate.appendToCommentData(char);
					},
					commentEndDash: function() {
						var char = this.consume();
						if (char === "-") this.transitionTo("commentEnd");
						else {
							this.delegate.appendToCommentData("-" + char);
							this.transitionTo("comment");
						}
					},
					commentEnd: function() {
						var char = this.consume();
						if (char === ">") {
							this.delegate.finishComment();
							this.transitionTo("beforeData");
						} else {
							this.delegate.appendToCommentData("--" + char);
							this.transitionTo("comment");
						}
					},
					tagName: function() {
						var char = this.consume();
						if (isSpace(char)) this.transitionTo("beforeAttributeName");
						else if (char === "/") this.transitionTo("selfClosingStartTag");
						else if (char === ">") {
							this.delegate.finishTag();
							this.transitionTo("beforeData");
						} else this.appendToTagName(char);
					},
					beforeAttributeName: function() {
						var char = this.peek();
						if (isSpace(char)) {
							this.consume();
							return;
						} else if (char === "/") {
							this.transitionTo("selfClosingStartTag");
							this.consume();
						} else if (char === ">") {
							this.consume();
							this.delegate.finishTag();
							this.transitionTo("beforeData");
						} else if (char === "=") {
							this.delegate.reportSyntaxError("attribute name cannot start with equals sign");
							this.transitionTo("attributeName");
							this.delegate.beginAttribute();
							this.consume();
							this.delegate.appendToAttributeName(char);
						} else {
							this.transitionTo("attributeName");
							this.delegate.beginAttribute();
						}
					},
					attributeName: function() {
						var char = this.peek();
						if (isSpace(char)) {
							this.transitionTo("afterAttributeName");
							this.consume();
						} else if (char === "/") {
							this.delegate.beginAttributeValue(false);
							this.delegate.finishAttributeValue();
							this.consume();
							this.transitionTo("selfClosingStartTag");
						} else if (char === "=") {
							this.transitionTo("beforeAttributeValue");
							this.consume();
						} else if (char === ">") {
							this.delegate.beginAttributeValue(false);
							this.delegate.finishAttributeValue();
							this.consume();
							this.delegate.finishTag();
							this.transitionTo("beforeData");
						} else if (char === "\"" || char === "'" || char === "<") {
							this.delegate.reportSyntaxError(char + " is not a valid character within attribute names");
							this.consume();
							this.delegate.appendToAttributeName(char);
						} else {
							this.consume();
							this.delegate.appendToAttributeName(char);
						}
					},
					afterAttributeName: function() {
						var char = this.peek();
						if (isSpace(char)) {
							this.consume();
							return;
						} else if (char === "/") {
							this.delegate.beginAttributeValue(false);
							this.delegate.finishAttributeValue();
							this.consume();
							this.transitionTo("selfClosingStartTag");
						} else if (char === "=") {
							this.consume();
							this.transitionTo("beforeAttributeValue");
						} else if (char === ">") {
							this.delegate.beginAttributeValue(false);
							this.delegate.finishAttributeValue();
							this.consume();
							this.delegate.finishTag();
							this.transitionTo("beforeData");
						} else {
							this.delegate.beginAttributeValue(false);
							this.delegate.finishAttributeValue();
							this.transitionTo("attributeName");
							this.delegate.beginAttribute();
							this.consume();
							this.delegate.appendToAttributeName(char);
						}
					},
					beforeAttributeValue: function() {
						var char = this.peek();
						if (isSpace(char)) this.consume();
						else if (char === "\"") {
							this.transitionTo("attributeValueDoubleQuoted");
							this.delegate.beginAttributeValue(true);
							this.consume();
						} else if (char === "'") {
							this.transitionTo("attributeValueSingleQuoted");
							this.delegate.beginAttributeValue(true);
							this.consume();
						} else if (char === ">") {
							this.delegate.beginAttributeValue(false);
							this.delegate.finishAttributeValue();
							this.consume();
							this.delegate.finishTag();
							this.transitionTo("beforeData");
						} else {
							this.transitionTo("attributeValueUnquoted");
							this.delegate.beginAttributeValue(false);
							this.consume();
							this.delegate.appendToAttributeValue(char);
						}
					},
					attributeValueDoubleQuoted: function() {
						var char = this.consume();
						if (char === "\"") {
							this.delegate.finishAttributeValue();
							this.transitionTo("afterAttributeValueQuoted");
						} else if (char === "&") this.delegate.appendToAttributeValue(this.consumeCharRef() || "&");
						else this.delegate.appendToAttributeValue(char);
					},
					attributeValueSingleQuoted: function() {
						var char = this.consume();
						if (char === "'") {
							this.delegate.finishAttributeValue();
							this.transitionTo("afterAttributeValueQuoted");
						} else if (char === "&") this.delegate.appendToAttributeValue(this.consumeCharRef() || "&");
						else this.delegate.appendToAttributeValue(char);
					},
					attributeValueUnquoted: function() {
						var char = this.peek();
						if (isSpace(char)) {
							this.delegate.finishAttributeValue();
							this.consume();
							this.transitionTo("beforeAttributeName");
						} else if (char === "/") {
							this.delegate.finishAttributeValue();
							this.consume();
							this.transitionTo("selfClosingStartTag");
						} else if (char === "&") {
							this.consume();
							this.delegate.appendToAttributeValue(this.consumeCharRef() || "&");
						} else if (char === ">") {
							this.delegate.finishAttributeValue();
							this.consume();
							this.delegate.finishTag();
							this.transitionTo("beforeData");
						} else {
							this.consume();
							this.delegate.appendToAttributeValue(char);
						}
					},
					afterAttributeValueQuoted: function() {
						var char = this.peek();
						if (isSpace(char)) {
							this.consume();
							this.transitionTo("beforeAttributeName");
						} else if (char === "/") {
							this.consume();
							this.transitionTo("selfClosingStartTag");
						} else if (char === ">") {
							this.consume();
							this.delegate.finishTag();
							this.transitionTo("beforeData");
						} else this.transitionTo("beforeAttributeName");
					},
					selfClosingStartTag: function() {
						if (this.peek() === ">") {
							this.consume();
							this.delegate.markTagAsSelfClosing();
							this.delegate.finishTag();
							this.transitionTo("beforeData");
						} else this.transitionTo("beforeAttributeName");
					},
					endTagOpen: function() {
						var char = this.consume();
						if (char === "@" || char === ":" || isAlpha(char)) {
							this.transitionTo("tagName");
							this.tagNameBuffer = "";
							this.delegate.beginEndTag();
							this.appendToTagName(char);
						}
					}
				};
				this.reset();
			}
			EventedTokenizer.prototype.reset = function() {
				this.transitionTo("beforeData");
				this.input = "";
				this.index = 0;
				this.line = 1;
				this.column = 0;
				this.delegate.reset();
			};
			EventedTokenizer.prototype.transitionTo = function(state) {
				this.state = state;
			};
			EventedTokenizer.prototype.tokenize = function(input) {
				this.reset();
				this.tokenizePart(input);
				this.tokenizeEOF();
			};
			EventedTokenizer.prototype.tokenizePart = function(input) {
				this.input += preprocessInput(input);
				while (this.index < this.input.length) {
					var handler = this.states[this.state];
					if (handler !== void 0) handler.call(this);
					else throw new Error("unhandled state " + this.state);
				}
			};
			EventedTokenizer.prototype.tokenizeEOF = function() {
				this.flushData();
			};
			EventedTokenizer.prototype.flushData = function() {
				if (this.state === "data") {
					this.delegate.finishData();
					this.transitionTo("beforeData");
				}
			};
			EventedTokenizer.prototype.peek = function() {
				return this.input.charAt(this.index);
			};
			EventedTokenizer.prototype.consume = function() {
				var char = this.peek();
				this.index++;
				if (char === "\n") {
					this.line++;
					this.column = 0;
				} else this.column++;
				return char;
			};
			EventedTokenizer.prototype.consumeCharRef = function() {
				var endIndex = this.input.indexOf(";", this.index);
				if (endIndex === -1) return;
				var entity = this.input.slice(this.index, endIndex);
				var chars = this.entityParser.parse(entity);
				if (chars) {
					var count = entity.length;
					while (count) {
						this.consume();
						count--;
					}
					this.consume();
					return chars;
				}
			};
			EventedTokenizer.prototype.markTagStart = function() {
				this.delegate.tagOpen();
			};
			EventedTokenizer.prototype.appendToTagName = function(char) {
				this.tagNameBuffer += char;
				this.delegate.appendToTagName(char);
			};
			return EventedTokenizer;
		}();
		Tokenizer = function() {
			function Tokenizer(entityParser, options) {
				if (options === void 0) options = {};
				this.options = options;
				this.token = null;
				this.startLine = 1;
				this.startColumn = 0;
				this.tokens = [];
				this.tokenizer = new EventedTokenizer(this, entityParser);
				this._currentAttribute = void 0;
			}
			Tokenizer.prototype.tokenize = function(input) {
				this.tokens = [];
				this.tokenizer.tokenize(input);
				return this.tokens;
			};
			Tokenizer.prototype.tokenizePart = function(input) {
				this.tokens = [];
				this.tokenizer.tokenizePart(input);
				return this.tokens;
			};
			Tokenizer.prototype.tokenizeEOF = function() {
				this.tokens = [];
				this.tokenizer.tokenizeEOF();
				return this.tokens[0];
			};
			Tokenizer.prototype.reset = function() {
				this.token = null;
				this.startLine = 1;
				this.startColumn = 0;
			};
			Tokenizer.prototype.current = function() {
				var token = this.token;
				if (token === null) throw new Error("token was unexpectedly null");
				if (arguments.length === 0) return token;
				for (var i = 0; i < arguments.length; i++) if (token.type === arguments[i]) return token;
				throw new Error("token type was unexpectedly " + token.type);
			};
			Tokenizer.prototype.push = function(token) {
				this.token = token;
				this.tokens.push(token);
			};
			Tokenizer.prototype.currentAttribute = function() {
				return this._currentAttribute;
			};
			Tokenizer.prototype.addLocInfo = function() {
				if (this.options.loc) this.current().loc = {
					start: {
						line: this.startLine,
						column: this.startColumn
					},
					end: {
						line: this.tokenizer.line,
						column: this.tokenizer.column
					}
				};
				this.startLine = this.tokenizer.line;
				this.startColumn = this.tokenizer.column;
			};
			Tokenizer.prototype.beginData = function() {
				this.push({
					type: "Chars",
					chars: ""
				});
			};
			Tokenizer.prototype.appendToData = function(char) {
				this.current("Chars").chars += char;
			};
			Tokenizer.prototype.finishData = function() {
				this.addLocInfo();
			};
			Tokenizer.prototype.beginComment = function() {
				this.push({
					type: "Comment",
					chars: ""
				});
			};
			Tokenizer.prototype.appendToCommentData = function(char) {
				this.current("Comment").chars += char;
			};
			Tokenizer.prototype.finishComment = function() {
				this.addLocInfo();
			};
			Tokenizer.prototype.tagOpen = function() {};
			Tokenizer.prototype.beginStartTag = function() {
				this.push({
					type: "StartTag",
					tagName: "",
					attributes: [],
					selfClosing: false
				});
			};
			Tokenizer.prototype.beginEndTag = function() {
				this.push({
					type: "EndTag",
					tagName: ""
				});
			};
			Tokenizer.prototype.finishTag = function() {
				this.addLocInfo();
			};
			Tokenizer.prototype.markTagAsSelfClosing = function() {
				this.current("StartTag").selfClosing = true;
			};
			Tokenizer.prototype.appendToTagName = function(char) {
				this.current("StartTag", "EndTag").tagName += char;
			};
			Tokenizer.prototype.beginAttribute = function() {
				this._currentAttribute = [
					"",
					"",
					false
				];
			};
			Tokenizer.prototype.appendToAttributeName = function(char) {
				this.currentAttribute()[0] += char;
			};
			Tokenizer.prototype.beginAttributeValue = function(isQuoted) {
				this.currentAttribute()[2] = isQuoted;
			};
			Tokenizer.prototype.appendToAttributeValue = function(char) {
				this.currentAttribute()[1] += char;
			};
			Tokenizer.prototype.finishAttributeValue = function() {
				this.current("StartTag").attributes.push(this._currentAttribute);
			};
			Tokenizer.prototype.reportSyntaxError = function(message) {
				this.current().syntaxError = message;
			};
			return Tokenizer;
		}();
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/validation/logger.mjs
function createLogger() {
	function createLogHandler(logger) {
		return (message, ...args) => logger("Block validation: " + message, ...args);
	}
	return {
		error: createLogHandler(console.error),
		warning: createLogHandler(console.warn),
		getItems() {
			return [];
		}
	};
}
function createQueuedLogger() {
	const queue = [];
	const logger = createLogger();
	return {
		error(...args) {
			queue.push({
				log: logger.error,
				args
			});
		},
		warning(...args) {
			queue.push({
				log: logger.warning,
				args
			});
		},
		getItems() {
			return queue;
		}
	};
}
//#endregion
//#region ../packages/blocks/build-module/api/validation/index.mjs
function isValidCharacterReference(text) {
	return REGEXP_NAMED_CHARACTER_REFERENCE.test(text) || REGEXP_DECIMAL_CHARACTER_REFERENCE.test(text) || REGEXP_HEXADECIMAL_CHARACTER_REFERENCE.test(text);
}
function getTextPiecesSplitOnWhitespace(text) {
	return text.trim().split(REGEXP_WHITESPACE);
}
function getTextWithCollapsedWhitespace(text) {
	return getTextPiecesSplitOnWhitespace(text).join(" ");
}
function getMeaningfulAttributePairs(token) {
	return (token.attributes ?? []).filter((pair) => {
		const [key, value] = pair;
		return value || key.indexOf("data-") === 0 || MEANINGFUL_ATTRIBUTES.includes(key);
	});
}
function isEquivalentTextTokens(actual, expected, logger = createLogger()) {
	let actualChars = actual.chars;
	let expectedChars = expected.chars;
	for (let i = 0; i < TEXT_NORMALIZATIONS.length; i++) {
		const normalize = TEXT_NORMALIZATIONS[i];
		actualChars = normalize(actualChars);
		expectedChars = normalize(expectedChars);
		if (actualChars === expectedChars) return true;
	}
	logger.warning("Expected text `%s`, saw `%s`.", expected.chars, actual.chars);
	return false;
}
function getNormalizedLength(value) {
	if (0 === parseFloat(value)) return "0";
	if (value.indexOf(".") === 0) return "0" + value;
	return value;
}
function getNormalizedStyleValue(value) {
	return getTextPiecesSplitOnWhitespace(value).map(getNormalizedLength).join(" ").replace(REGEXP_STYLE_URL_TYPE, "url($1)");
}
function getStyleProperties(text) {
	const pairs = text.replace(/;?\s*$/, "").split(";").map((style) => {
		const [key, ...valueParts] = style.split(":");
		const value = valueParts.join(":");
		return [key.trim(), getNormalizedStyleValue(value.trim())];
	});
	return Object.fromEntries(pairs);
}
function isEqualTagAttributePairs(actual, expected, logger = createLogger()) {
	if (actual.length !== expected.length) {
		logger.warning("Expected attributes %o, instead saw %o.", expected, actual);
		return false;
	}
	const expectedAttributes = {};
	for (let i = 0; i < expected.length; i++) expectedAttributes[expected[i][0].toLowerCase()] = expected[i][1];
	for (let i = 0; i < actual.length; i++) {
		const [name, actualValue] = actual[i];
		const nameLower = name.toLowerCase();
		if (!expectedAttributes.hasOwnProperty(nameLower)) {
			logger.warning("Encountered unexpected attribute `%s`.", name);
			return false;
		}
		const expectedValue = expectedAttributes[nameLower];
		const isEqualAttributes = isEqualAttributesOfName[nameLower];
		if (isEqualAttributes) {
			if (!isEqualAttributes(actualValue, expectedValue)) {
				logger.warning("Expected attribute `%s` of value `%s`, saw `%s`.", name, expectedValue, actualValue);
				return false;
			}
		} else if (actualValue !== expectedValue) {
			logger.warning("Expected attribute `%s` of value `%s`, saw `%s`.", name, expectedValue, actualValue);
			return false;
		}
	}
	return true;
}
function getNextNonWhitespaceToken(tokens) {
	let token;
	while (token = tokens.shift()) {
		if (token.type !== "Chars") return token;
		if (!REGEXP_ONLY_WHITESPACE.test(token.chars)) return token;
	}
}
function getHTMLTokens(html, logger = createLogger()) {
	try {
		return new Tokenizer(new DecodeEntityParser()).tokenize(html);
	} catch {
		logger.warning("Malformed HTML detected: %s", html);
	}
	return null;
}
function isClosedByToken(currentToken, nextToken) {
	if (!currentToken.selfClosing) return false;
	if (nextToken && nextToken.tagName === currentToken.tagName && nextToken.type === "EndTag") return true;
	return false;
}
function isEquivalentHTML(actual, expected, logger = createLogger()) {
	if (actual === expected) return true;
	const [actualTokens, expectedTokens] = [actual, expected].map((html) => getHTMLTokens(html, logger));
	if (!actualTokens || !expectedTokens) return false;
	let actualToken, expectedToken;
	while (actualToken = getNextNonWhitespaceToken(actualTokens)) {
		expectedToken = getNextNonWhitespaceToken(expectedTokens);
		if (!expectedToken) {
			logger.warning("Expected end of content, instead saw %o.", actualToken);
			return false;
		}
		if (actualToken.type !== expectedToken.type) {
			logger.warning("Expected token of type `%s` (%o), instead saw `%s` (%o).", expectedToken.type, expectedToken, actualToken.type, actualToken);
			return false;
		}
		const isEqualTokens = isEqualTokensOfType[actualToken.type];
		if (isEqualTokens && !isEqualTokens(actualToken, expectedToken, logger)) return false;
		if (isClosedByToken(actualToken, expectedTokens[0])) getNextNonWhitespaceToken(expectedTokens);
		else if (isClosedByToken(expectedToken, actualTokens[0])) getNextNonWhitespaceToken(actualTokens);
	}
	if (expectedToken = getNextNonWhitespaceToken(expectedTokens)) {
		logger.warning("Expected %o, instead saw end of content.", expectedToken);
		return false;
	}
	return true;
}
function validateBlock(block, blockTypeOrName = block.name) {
	if (block.name === getFreeformContentHandlerName() || block.name === getUnregisteredTypeHandlerName()) return [true, []];
	const logger = createQueuedLogger();
	const blockType = normalizeBlockType(blockTypeOrName);
	let generatedBlockContent;
	try {
		generatedBlockContent = getSaveContent(blockType, block.attributes);
	} catch (error) {
		logger.error("Block validation failed because an error occurred while generating block content:\n\n%s", error.toString());
		return [false, logger.getItems()];
	}
	const isValid = isEquivalentHTML(block.originalContent, generatedBlockContent, logger);
	if (!isValid) logger.error("Block validation failed for `%s` (%o).\n\nContent generated by `save` function:\n\n%s\n\nContent retrieved from post body:\n\n%s", blockType.name, blockType, generatedBlockContent, block.originalContent);
	return [isValid, logger.getItems()];
}
var import_es6$1, identity$1, REGEXP_WHITESPACE, REGEXP_ONLY_WHITESPACE, REGEXP_STYLE_URL_TYPE, BOOLEAN_ATTRIBUTES, ENUMERATED_ATTRIBUTES, MEANINGFUL_ATTRIBUTES, TEXT_NORMALIZATIONS, REGEXP_NAMED_CHARACTER_REFERENCE, REGEXP_DECIMAL_CHARACTER_REFERENCE, REGEXP_HEXADECIMAL_CHARACTER_REFERENCE, DecodeEntityParser, isEqualAttributesOfName, isEqualTokensOfType;
function init_validation() {
	return (init_validation = __esmMin((() => {
		init_es6();
		import_es6$1 = /* @__PURE__ */ __toESM(require_es6(), 1);
		init_build_module$14();
		init_serializer();
		init_registration();
		init_utils();
		identity$1 = (x) => x;
		REGEXP_WHITESPACE = /[\t\n\r\v\f ]+/g;
		REGEXP_ONLY_WHITESPACE = /^[\t\n\r\v\f ]*$/;
		REGEXP_STYLE_URL_TYPE = /^url\s*\(['"\s]*(.*?)['"\s]*\)$/;
		BOOLEAN_ATTRIBUTES = [
			"allowfullscreen",
			"allowpaymentrequest",
			"allowusermedia",
			"async",
			"autofocus",
			"autoplay",
			"checked",
			"controls",
			"default",
			"defer",
			"disabled",
			"download",
			"formnovalidate",
			"hidden",
			"ismap",
			"itemscope",
			"loop",
			"multiple",
			"muted",
			"nomodule",
			"novalidate",
			"open",
			"playsinline",
			"readonly",
			"required",
			"reversed",
			"selected",
			"typemustmatch"
		];
		ENUMERATED_ATTRIBUTES = [
			"autocapitalize",
			"autocomplete",
			"charset",
			"contenteditable",
			"crossorigin",
			"decoding",
			"dir",
			"draggable",
			"enctype",
			"formenctype",
			"formmethod",
			"http-equiv",
			"inputmode",
			"kind",
			"method",
			"preload",
			"scope",
			"shape",
			"spellcheck",
			"translate",
			"type",
			"wrap"
		];
		MEANINGFUL_ATTRIBUTES = [...BOOLEAN_ATTRIBUTES, ...ENUMERATED_ATTRIBUTES];
		TEXT_NORMALIZATIONS = [identity$1, getTextWithCollapsedWhitespace];
		REGEXP_NAMED_CHARACTER_REFERENCE = /^[\da-z]+$/i;
		REGEXP_DECIMAL_CHARACTER_REFERENCE = /^#\d+$/;
		REGEXP_HEXADECIMAL_CHARACTER_REFERENCE = /^#x[\da-f]+$/i;
		DecodeEntityParser = class {
			/**
			* Returns a substitute string for an entity string sequence between `&`
			* and `;`, or undefined if no substitution should occur.
			*
			* @param entity Entity fragment discovered in HTML.
			*
			* @return Entity substitute value.
			*/
			parse(entity) {
				if (isValidCharacterReference(entity)) return decodeEntities("&" + entity + ";");
			}
		};
		isEqualAttributesOfName = {
			class: (actual, expected) => {
				const [actualPieces, expectedPieces] = [actual, expected].map(getTextPiecesSplitOnWhitespace);
				const actualDiff = actualPieces.filter((c) => !expectedPieces.includes(c));
				const expectedDiff = expectedPieces.filter((c) => !actualPieces.includes(c));
				return actualDiff.length === 0 && expectedDiff.length === 0;
			},
			style: (actual, expected) => {
				return (0, import_es6$1.default)(...[actual, expected].map(getStyleProperties));
			},
			...Object.fromEntries(BOOLEAN_ATTRIBUTES.map((attribute) => [attribute, () => true]))
		};
		isEqualTokensOfType = {
			StartTag: (actual, expected, logger = createLogger()) => {
				if (actual.tagName !== expected.tagName && actual.tagName.toLowerCase() !== expected.tagName.toLowerCase()) {
					logger.warning("Expected tag name `%s`, instead saw `%s`.", expected.tagName, actual.tagName);
					return false;
				}
				return isEqualTagAttributePairs(...[actual, expected].map(getMeaningfulAttributePairs), logger);
			},
			Chars: isEquivalentTextTokens,
			Comment: isEquivalentTextTokens
		};
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/parser/convert-legacy-block.mjs
function convertLegacyBlockNameAndAttributes(name, attributes) {
	const newAttributes = { ...attributes };
	if ("core/cover-image" === name) name = "core/cover";
	if ("core/text" === name || "core/cover-text" === name) name = "core/paragraph";
	if (name && name.indexOf("core/social-link-") === 0) {
		newAttributes.service = name.substring(17);
		name = "core/social-link";
	}
	if (name && name.indexOf("core-embed/") === 0) {
		const providerSlug = name.substring(11);
		const deprecated = {
			speaker: "speaker-deck",
			polldaddy: "crowdsignal"
		};
		newAttributes.providerNameSlug = providerSlug in deprecated ? deprecated[providerSlug] : providerSlug;
		if (!["amazon-kindle", "wordpress"].includes(providerSlug)) newAttributes.responsive = true;
		name = "core/embed";
	}
	if (name === "core/post-comment-author") name = "core/comment-author-name";
	if (name === "core/post-comment-content") name = "core/comment-content";
	if (name === "core/post-comment-date") name = "core/comment-date";
	if (name === "core/comments-query-loop") {
		name = "core/comments";
		const className = newAttributes.className ?? "";
		if (!className.includes("wp-block-comments-query-loop")) newAttributes.className = ["wp-block-comments-query-loop", className].join(" ");
	}
	if (name === "core/post-comments") {
		name = "core/comments";
		newAttributes.legacy = true;
	}
	const layout = attributes.layout;
	if (layout?.type === "grid" && typeof layout?.columnCount === "string") newAttributes.layout = {
		...newAttributes.layout,
		columnCount: parseInt(layout.columnCount, 10)
	};
	const styleLayout = attributes.style?.layout;
	if (typeof styleLayout?.columnSpan === "string") {
		const columnSpanNumber = parseInt(styleLayout.columnSpan, 10);
		newAttributes.style = {
			...newAttributes.style,
			layout: {
				...newAttributes.style?.layout,
				columnSpan: isNaN(columnSpanNumber) ? void 0 : columnSpanNumber
			}
		};
	}
	if (typeof styleLayout?.rowSpan === "string") {
		const rowSpanNumber = parseInt(styleLayout.rowSpan, 10);
		newAttributes.style = {
			...newAttributes.style,
			layout: {
				...newAttributes.style?.layout,
				rowSpan: isNaN(rowSpanNumber) ? void 0 : rowSpanNumber
			}
		};
	}
	return [name, newAttributes];
}
//#endregion
//#region ../node_modules/.store/hpq@1.4.0-W9NdSIZtdLeCHL5yGEJLvQ/node_modules/hpq/es/get-path.js
/**
* Given object and string of dot-delimited path segments, returns value at
* path or undefined if path cannot be resolved.
*
* @param object Lookup object
* @param path   Path to resolve
* @return       Resolved value
*/
function getPath(object, path) {
	var segments = path.split(".");
	var segment;
	while (segment = segments.shift()) {
		if (!(segment in object)) return;
		object = object[segment];
	}
	return object;
}
//#endregion
//#region ../node_modules/.store/hpq@1.4.0-W9NdSIZtdLeCHL5yGEJLvQ/node_modules/hpq/es/index.js
/**
* Internal dependencies
*/
/**
* Given a markup string or DOM element, creates an object aligning with the
* shape of the matchers object, or the value returned by the matcher.
*
* @param source Source content
* @param matchers Matcher function or object of matchers
*/
/**
* Given a markup string or DOM element, creates an object aligning with the
* shape of the matchers object, or the value returned by the matcher.
*
* @param source Source content
* @param matchers Matcher function or object of matchers
*/
function parse$1(source, matchers) {
	if (!matchers) return;
	if ("string" === typeof source) {
		var doc = getDocument();
		doc.body.innerHTML = source;
		source = doc.body;
	}
	if (typeof matchers === "function") return matchers(source);
	if (Object !== matchers.constructor) return;
	return Object.keys(matchers).reduce(function(memo, key) {
		var inner = matchers[key];
		memo[key] = parse$1(source, inner);
		return memo;
	}, {});
}
/**
* Generates a function which matches node of type selector, returning an
* attribute by property if the attribute exists. If no selector is passed,
* returns property of the query element.
*
* @param name Property name
* @return Property value
*/
/**
* Generates a function which matches node of type selector, returning an
* attribute by property if the attribute exists. If no selector is passed,
* returns property of the query element.
*
* @param selector Optional selector
* @param name Property name
* @return Property value
*/
function prop(arg1, arg2) {
	var name;
	var selector;
	if (1 === arguments.length) {
		name = arg1;
		selector = void 0;
	} else {
		name = arg2;
		selector = arg1;
	}
	return function(node) {
		var match = node;
		if (selector) match = node.querySelector(selector);
		if (match) return getPath(match, name);
	};
}
/**
* Generates a function which matches node of type selector, returning an
* attribute by name if the attribute exists. If no selector is passed,
* returns attribute of the query element.
*
* @param name Attribute name
* @return Attribute value
*/
/**
* Generates a function which matches node of type selector, returning an
* attribute by name if the attribute exists. If no selector is passed,
* returns attribute of the query element.
*
* @param selector Optional selector
* @param name Attribute name
* @return Attribute value
*/
function attr(arg1, arg2) {
	var name;
	var selector;
	if (1 === arguments.length) {
		name = arg1;
		selector = void 0;
	} else {
		name = arg2;
		selector = arg1;
	}
	return function(node) {
		var attributes = prop(selector, "attributes")(node);
		if (attributes && Object.prototype.hasOwnProperty.call(attributes, name)) return attributes[name].value;
	};
}
/**
* Convenience for `prop( selector, 'textContent' )`.
*
* @see prop()
*
* @param selector Optional selector
* @return Text content
*/
function text(selector) {
	return prop(selector, "textContent");
}
/**
* Creates a new matching context by first finding elements matching selector
* using querySelectorAll before then running another `parse` on `matchers`
* scoped to the matched elements.
*
* @see parse()
*
* @param selector Selector to match
* @param matchers Matcher function or object of matchers
* @return Matcher function which returns an array of matched value(s)
*/
function query(selector, matchers) {
	return function(node) {
		var matches = node.querySelectorAll(selector);
		return [].map.call(matches, function(match) {
			return parse$1(match, matchers);
		});
	};
}
var getDocument;
function init_es() {
	return (init_es = __esmMin((() => {
		getDocument = function() {
			var doc;
			return function() {
				if (!doc) doc = document.implementation.createHTMLDocument("");
				return doc;
			};
		}();
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/children.mjs
function getSerializeCapableElement(children) {
	return children;
}
function getChildrenArray(children) {
	deprecated("wp.blocks.children.getChildrenArray", {
		since: "6.1",
		version: "6.3",
		link: "https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/introducing-attributes-and-editable-fields/"
	});
	return children;
}
function concat(...blockNodes) {
	deprecated("wp.blocks.children.concat", {
		since: "6.1",
		version: "6.3",
		alternative: "wp.richText.concat",
		link: "https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/introducing-attributes-and-editable-fields/"
	});
	const result = [];
	for (let i = 0; i < blockNodes.length; i++) {
		const blockNode = Array.isArray(blockNodes[i]) ? blockNodes[i] : [blockNodes[i]];
		for (let j = 0; j < blockNode.length; j++) {
			const child = blockNode[j];
			if (typeof child === "string" && typeof result[result.length - 1] === "string") result[result.length - 1] += child;
			else result.push(child);
		}
	}
	return result;
}
function fromDOM2$1(domNodes) {
	deprecated("wp.blocks.children.fromDOM", {
		since: "6.1",
		version: "6.3",
		alternative: "wp.richText.create",
		link: "https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/introducing-attributes-and-editable-fields/"
	});
	const result = [];
	for (let i = 0; i < domNodes.length; i++) try {
		result.push(fromDOM2(domNodes[i]));
	} catch {}
	return result;
}
function toHTML(children) {
	deprecated("wp.blocks.children.toHTML", {
		since: "6.1",
		version: "6.3",
		alternative: "wp.richText.toHTMLString",
		link: "https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/introducing-attributes-and-editable-fields/"
	});
	const element = getSerializeCapableElement(children);
	return serialize_default(element);
}
function matcher$1(selector) {
	deprecated("wp.blocks.children.matcher", {
		since: "6.1",
		version: "6.3",
		alternative: "html source",
		link: "https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/introducing-attributes-and-editable-fields/"
	});
	return (domNode) => {
		let match = domNode;
		if (selector) match = domNode.querySelector(selector);
		if (match) return fromDOM2$1(match.childNodes);
		return [];
	};
}
var children_default;
function init_children() {
	return (init_children = __esmMin((() => {
		init_serialize();
		init_build_module$6();
		init_node();
		children_default = {
			concat,
			getChildrenArray,
			fromDOM: fromDOM2$1,
			toHTML,
			matcher: matcher$1
		};
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/node.mjs
function getNamedNodeMapAsObject(nodeMap) {
	const result = {};
	for (let i = 0; i < nodeMap.length; i++) {
		const { name, value } = nodeMap[i];
		result[name] = value;
	}
	return result;
}
function fromDOM2(domNode) {
	deprecated("wp.blocks.node.fromDOM", {
		since: "6.1",
		version: "6.3",
		alternative: "wp.richText.create",
		link: "https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/introducing-attributes-and-editable-fields/"
	});
	if (domNode.nodeType === domNode.TEXT_NODE) return domNode.nodeValue;
	if (domNode.nodeType !== domNode.ELEMENT_NODE) throw new TypeError("A block node can only be created from a node of type text or element.");
	return {
		type: domNode.nodeName.toLowerCase(),
		props: {
			...getNamedNodeMapAsObject(domNode.attributes),
			children: fromDOM2$1(domNode.childNodes)
		}
	};
}
function matcher(selector) {
	deprecated("wp.blocks.node.matcher", {
		since: "6.1",
		version: "6.3",
		alternative: "html source",
		link: "https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/introducing-attributes-and-editable-fields/"
	});
	return (domNode) => {
		let match = domNode;
		if (selector) match = domNode.querySelector(selector);
		try {
			return fromDOM2(match);
		} catch {
			return null;
		}
	};
}
function init_node() {
	return (init_node = __esmMin((() => {
		init_build_module$6();
		init_children();
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/matchers.mjs
function html(selector, multilineTag) {
	return (domNode) => {
		let match = domNode;
		if (selector) match = domNode.querySelector(selector);
		if (!match) return "";
		if (multilineTag) {
			let value = "";
			const length = match.children.length;
			for (let index = 0; index < length; index++) {
				const child = match.children[index];
				if (child.nodeName.toLowerCase() !== multilineTag) continue;
				value += child.outerHTML;
			}
			return value;
		}
		return match.innerHTML;
	};
}
var richText;
function init_matchers() {
	return (init_matchers = __esmMin((() => {
		init_es();
		init_build_module();
		init_node();
		init_children();
		richText = (selector, preserveWhiteSpace) => (el) => {
			const target = selector ? el.querySelector(selector) : el;
			return target ? RichTextData.fromHTMLElement(target, { preserveWhiteSpace }) : RichTextData.empty();
		};
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/parser/get-block-attributes.mjs
function isOfType(value, type) {
	switch (type) {
		case "rich-text": return value instanceof RichTextData;
		case "string": return typeof value === "string";
		case "boolean": return typeof value === "boolean";
		case "object": return !!value && value.constructor === Object;
		case "null": return value === null;
		case "array": return Array.isArray(value);
		case "integer":
		case "number": return typeof value === "number";
	}
	return true;
}
function isOfTypes(value, types) {
	return types.some((type) => isOfType(value, type));
}
function getBlockAttribute(attributeKey, attributeSchema, innerDOM, commentAttributes, innerHTML) {
	let value;
	switch (attributeSchema.source) {
		case void 0:
			value = commentAttributes ? commentAttributes[attributeKey] : void 0;
			break;
		case "raw":
			value = innerHTML;
			break;
		case "attribute":
		case "property":
		case "html":
		case "text":
		case "rich-text":
		case "children":
		case "node":
		case "query":
		case "tag": value = parseWithAttributeSchema(innerDOM, attributeSchema);
	}
	if (!isValidByType(value, attributeSchema.type) || !isValidByEnum(value, attributeSchema.enum)) value = void 0;
	if (value === void 0) value = getDefault(attributeSchema);
	return value;
}
function isValidByType(value, type) {
	return type === void 0 || isOfTypes(value, Array.isArray(type) ? type : [type]);
}
function isValidByEnum(value, enumSet) {
	return !Array.isArray(enumSet) || enumSet.includes(value);
}
function parseHtml(innerHTML) {
	return parse$1(innerHTML ?? "", (h) => h);
}
function parseWithAttributeSchema(innerHTML, attributeSchema) {
	return matcherFromSource(attributeSchema)(parseHtml(innerHTML));
}
function getBlockAttributes$1(blockTypeOrName, innerHTML, attributes = {}) {
	const doc = parseHtml(innerHTML);
	const blockType = normalizeBlockType(blockTypeOrName);
	const blockAttributes = Object.fromEntries(Object.entries(blockType?.attributes ?? {}).map(([key, schema]) => [key, getBlockAttribute(key, schema, doc, attributes, innerHTML)]));
	return applyFilters("blocks.getBlockAttributes", blockAttributes, blockType, innerHTML, attributes);
}
var toBooleanAttributeMatcher, matcherFromSource;
function init_get_block_attributes() {
	return (init_get_block_attributes = __esmMin((() => {
		init_es();
		init_build_module$5();
		init_build_module();
		init_matchers();
		init_utils();
		toBooleanAttributeMatcher = (matcher) => (domNode) => matcher(domNode) !== void 0;
		matcherFromSource = memize((sourceConfig) => {
			switch (sourceConfig.source) {
				case "attribute": {
					const matcher = attr(sourceConfig.selector, sourceConfig.attribute);
					if (sourceConfig.type === "boolean") return toBooleanAttributeMatcher(matcher);
					return matcher;
				}
				case "html": return html(sourceConfig.selector, sourceConfig.multiline);
				case "text": return text(sourceConfig.selector);
				case "rich-text": return richText(sourceConfig.selector, sourceConfig.__unstablePreserveWhiteSpace);
				case "children": return matcher$1(sourceConfig.selector);
				case "node": return matcher(sourceConfig.selector);
				case "query":
					const subMatchers = Object.fromEntries(Object.entries(sourceConfig.query).map(([key, subSourceConfig]) => [key, matcherFromSource(subSourceConfig)]));
					return query(sourceConfig.selector, subMatchers);
				case "tag": {
					const matcher = prop(sourceConfig.selector, "nodeName");
					return (domNode) => matcher(domNode)?.toLowerCase();
				}
				default:
					console.error(`Unknown source type "${sourceConfig.source}"`);
					return;
			}
		});
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/parser/fix-custom-classname.mjs
function getHTMLRootElementClasses(innerHTML) {
	const parsed = parseWithAttributeSchema(`<div data-custom-class-name>${innerHTML}</div>`, CLASS_ATTR_SCHEMA);
	return parsed ? parsed.trim().split(/\s+/) : [];
}
function fixCustomClassname(blockAttributes, blockType, innerHTML) {
	if (!hasBlockSupport$1(blockType, "customClassName", true)) return blockAttributes;
	const modifiedBlockAttributes = { ...blockAttributes };
	const { className: omittedClassName, ...attributesSansClassName } = modifiedBlockAttributes;
	const serialized = getSaveContent(blockType, attributesSansClassName);
	const defaultClasses = getHTMLRootElementClasses(serialized);
	const customClasses = getHTMLRootElementClasses(innerHTML).filter((className) => !defaultClasses.includes(className));
	if (customClasses.length) modifiedBlockAttributes.className = customClasses.join(" ");
	else if (serialized) delete modifiedBlockAttributes.className;
	return modifiedBlockAttributes;
}
var CLASS_ATTR_SCHEMA;
function init_fix_custom_classname() {
	return (init_fix_custom_classname = __esmMin((() => {
		init_registration();
		init_serializer();
		init_get_block_attributes();
		CLASS_ATTR_SCHEMA = {
			type: "string",
			source: "attribute",
			selector: "[data-custom-class-name] > *",
			attribute: "class"
		};
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/parser/fix-global-attribute.mjs
function getHTMLRootElement(innerHTML, dataAttribute, attributeSchema) {
	return parseWithAttributeSchema(`<div ${dataAttribute}>${innerHTML}</div>`, attributeSchema);
}
function fixGlobalAttribute(blockAttributes, blockType, innerHTML, supportKey, dataAttribute, attributeSchema) {
	if (!hasBlockSupport$1(blockType, supportKey, false)) return blockAttributes;
	const modifiedBlockAttributes = { ...blockAttributes };
	const attributeValue = getHTMLRootElement(innerHTML, dataAttribute, attributeSchema);
	if (attributeValue) modifiedBlockAttributes[supportKey] = attributeValue;
	return modifiedBlockAttributes;
}
function init_fix_global_attribute() {
	return (init_fix_global_attribute = __esmMin((() => {
		init_registration();
		init_get_block_attributes();
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/parser/apply-built-in-validation-fixes.mjs
function applyBuiltInValidationFixes(block, blockType) {
	const { attributes, originalContent } = block;
	let updatedBlockAttributes = attributes;
	updatedBlockAttributes = fixCustomClassname(attributes, blockType, originalContent ?? "");
	updatedBlockAttributes = fixGlobalAttribute(updatedBlockAttributes, blockType, originalContent ?? "", "ariaLabel", "data-aria-label", ARIA_LABEL_ATTR_SCHEMA);
	updatedBlockAttributes = fixGlobalAttribute(updatedBlockAttributes, blockType, originalContent ?? "", "anchor", "data-anchor", ANCHOR_ATTR_SCHEMA);
	return {
		...block,
		attributes: updatedBlockAttributes
	};
}
var ARIA_LABEL_ATTR_SCHEMA, ANCHOR_ATTR_SCHEMA;
function init_apply_built_in_validation_fixes() {
	return (init_apply_built_in_validation_fixes = __esmMin((() => {
		init_fix_custom_classname();
		init_fix_global_attribute();
		ARIA_LABEL_ATTR_SCHEMA = {
			type: "string",
			source: "attribute",
			selector: "[data-aria-label] > *",
			attribute: "aria-label"
		};
		ANCHOR_ATTR_SCHEMA = {
			type: "string",
			source: "attribute",
			selector: "[data-anchor] > *",
			attribute: "id"
		};
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/parser/apply-block-deprecated-versions.mjs
function stubFalse() {
	return false;
}
function applyBlockDeprecatedVersions(block, rawBlock, blockType) {
	const parsedAttributes = rawBlock.attrs ?? {};
	const { deprecated: deprecatedDefinitions } = blockType;
	if (!deprecatedDefinitions || !deprecatedDefinitions.length) return block;
	for (let i = 0; i < deprecatedDefinitions.length; i++) {
		const { isEligible = stubFalse } = deprecatedDefinitions[i];
		if (block.isValid && !isEligible(parsedAttributes, block.innerBlocks, {
			blockNode: rawBlock,
			block
		})) continue;
		const deprecatedBlockType = Object.assign(omit(blockType, DEPRECATED_ENTRY_KEYS), deprecatedDefinitions[i]);
		let migratedBlock = {
			...block,
			attributes: getBlockAttributes$1(deprecatedBlockType, block.originalContent ?? "", parsedAttributes)
		};
		let [isValid] = validateBlock(migratedBlock, deprecatedBlockType);
		if (!isValid) {
			migratedBlock = applyBuiltInValidationFixes(migratedBlock, deprecatedBlockType);
			[isValid] = validateBlock(migratedBlock, deprecatedBlockType);
		}
		if (!isValid) continue;
		let migratedInnerBlocks = migratedBlock.innerBlocks;
		let migratedAttributes = migratedBlock.attributes;
		const { migrate } = deprecatedBlockType;
		if (migrate) {
			let migrated = migrate(migratedAttributes, block.innerBlocks);
			if (!Array.isArray(migrated)) migrated = [migrated];
			[migratedAttributes = parsedAttributes, migratedInnerBlocks = block.innerBlocks] = migrated;
		}
		block = {
			...block,
			attributes: migratedAttributes,
			innerBlocks: migratedInnerBlocks,
			isValid: true,
			validationIssues: []
		};
	}
	return block;
}
function init_apply_block_deprecated_versions() {
	return (init_apply_block_deprecated_versions = __esmMin((() => {
		init_constants();
		init_validation();
		init_get_block_attributes();
		init_apply_built_in_validation_fixes();
		init_utils();
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/parser/index.mjs
function convertLegacyBlocks(rawBlock) {
	const [correctName, correctedAttributes] = convertLegacyBlockNameAndAttributes(rawBlock.blockName, rawBlock.attrs ?? {});
	return {
		...rawBlock,
		blockName: correctName,
		attrs: correctedAttributes
	};
}
function normalizeRawBlock(rawBlock, options) {
	const fallbackBlockName = getFreeformContentHandlerName();
	const rawBlockName = rawBlock.blockName || getFreeformContentHandlerName();
	const rawAttributes = rawBlock.attrs || {};
	const rawInnerBlocks = rawBlock.innerBlocks || [];
	let rawInnerHTML = rawBlock.innerHTML.trim();
	if (rawBlockName === fallbackBlockName && rawBlockName === "core/freeform" && !options?.__unstableSkipAutop) rawInnerHTML = autop(rawInnerHTML).trim();
	return {
		...rawBlock,
		blockName: rawBlockName,
		attrs: rawAttributes,
		innerHTML: rawInnerHTML,
		innerBlocks: rawInnerBlocks
	};
}
function createMissingBlockType(rawBlock) {
	const unregisteredFallbackBlock = getUnregisteredTypeHandlerName() || getFreeformContentHandlerName();
	const originalUndelimitedContent = serializeRawBlock(rawBlock, { isCommentDelimited: false });
	const originalContent = serializeRawBlock(rawBlock, { isCommentDelimited: true });
	return {
		blockName: unregisteredFallbackBlock,
		attrs: {
			originalName: rawBlock.blockName,
			originalContent,
			originalUndelimitedContent
		},
		innerHTML: rawBlock.blockName ? originalContent : rawBlock.innerHTML,
		innerBlocks: rawBlock.innerBlocks,
		innerContent: rawBlock.innerContent
	};
}
function applyBlockValidation(unvalidatedBlock, blockType) {
	const [isValid] = validateBlock(unvalidatedBlock, blockType);
	if (isValid) return {
		...unvalidatedBlock,
		isValid,
		validationIssues: []
	};
	const fixedBlock = applyBuiltInValidationFixes(unvalidatedBlock, blockType);
	const [isFixedValid, validationIssues] = validateBlock(fixedBlock, blockType);
	return {
		...fixedBlock,
		isValid: isFixedValid,
		validationIssues
	};
}
function parseRawBlock(rawBlock, options) {
	let normalizedBlock = normalizeRawBlock(rawBlock, options);
	normalizedBlock = convertLegacyBlocks(normalizedBlock);
	let blockType = getBlockType$1(normalizedBlock.blockName);
	if (!blockType) {
		normalizedBlock = createMissingBlockType(normalizedBlock);
		blockType = getBlockType$1(normalizedBlock.blockName);
	}
	const isFallbackBlock = normalizedBlock.blockName === getFreeformContentHandlerName() || normalizedBlock.blockName === getUnregisteredTypeHandlerName();
	if (!blockType || !normalizedBlock.innerHTML && isFallbackBlock) return;
	const parsedInnerBlocks = normalizedBlock.innerBlocks.map((innerBlock) => parseRawBlock(innerBlock, options)).filter((innerBlock) => !!innerBlock);
	const parsedBlock = createBlock(normalizedBlock.blockName, getBlockAttributes$1(blockType, normalizedBlock.innerHTML, normalizedBlock.attrs), parsedInnerBlocks);
	parsedBlock.originalContent = normalizedBlock.innerHTML;
	if (blockType.name === "core/html") {
		parsedBlock.innerContent = normalizedBlock.innerContent ?? [normalizedBlock.innerHTML];
		parsedBlock.isValid = true;
		parsedBlock.validationIssues = [];
		return parsedBlock;
	}
	const validatedBlock = applyBlockValidation(parsedBlock, blockType);
	const { validationIssues } = validatedBlock;
	const updatedBlock = applyBlockDeprecatedVersions(validatedBlock, normalizedBlock, blockType);
	if (!updatedBlock.isValid) updatedBlock.__unstableBlockSource = rawBlock;
	if (!validatedBlock.isValid && updatedBlock.isValid && !options?.__unstableSkipMigrationLogs) {
		console.groupCollapsed("Updated Block: %s", blockType.name);
		console.info("Block successfully updated for `%s` (%o).\n\nNew content generated by `save` function:\n\n%s\n\nContent retrieved from post body:\n\n%s", blockType.name, blockType, getSaveContent(blockType, updatedBlock.attributes), updatedBlock.originalContent);
		console.groupEnd();
	} else if (!validatedBlock.isValid && !updatedBlock.isValid) validationIssues.forEach(({ log, args }) => log(...args));
	return updatedBlock;
}
function parse(content, options) {
	return parse$2(content).reduce((accumulator, rawBlock) => {
		const block = parseRawBlock(rawBlock, options);
		if (block) accumulator.push(block);
		return accumulator;
	}, []);
}
function init_parser() {
	return (init_parser = __esmMin((() => {
		init_build_module$1();
		init_build_module$2();
		init_registration();
		init_serializer();
		init_validation();
		init_factory();
		init_serialize_raw_block();
		init_get_block_attributes();
		init_apply_block_deprecated_versions();
		init_apply_built_in_validation_fixes();
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/templates.mjs
function doBlocksMatchTemplate(blocks = [], template = []) {
	return blocks.length === template.length && template.every(([name, , innerBlocksTemplate], index) => {
		const block = blocks[index];
		return name === block.name && doBlocksMatchTemplate(block.innerBlocks, innerBlocksTemplate);
	});
}
function normalizeAttributes(schema, values) {
	if (!values) return {};
	return Object.fromEntries(Object.entries(values).map(([key, value]) => [key, normalizeAttribute(schema[key], value)]));
}
function normalizeAttribute(definition, value) {
	if (isHTMLAttribute(definition) && Array.isArray(value)) return serialize_default(value);
	if (isQueryAttribute(definition) && value) return value.map((subValues) => {
		return normalizeAttributes(definition.query, subValues);
	});
	return value;
}
function synchronizeBlocksWithTemplate(blocks = [], template) {
	if (!template) return blocks;
	return template.map(([name, attributes, innerBlocksTemplate], index) => {
		const block = blocks[index];
		if (block && block.name === name) {
			const innerBlocks = synchronizeBlocksWithTemplate(block.innerBlocks, innerBlocksTemplate);
			return {
				...block,
				innerBlocks
			};
		}
		const [blockName, blockAttributes] = convertLegacyBlockNameAndAttributes(name, normalizeAttributes(getBlockType$1(name)?.attributes ?? {}, attributes));
		return createBlock(blockName, blockAttributes, synchronizeBlocksWithTemplate([], innerBlocksTemplate));
	});
}
var isHTMLAttribute, isQueryAttribute;
function init_templates() {
	return (init_templates = __esmMin((() => {
		init_serialize();
		init_factory();
		init_registration();
		isHTMLAttribute = (attributeDefinition) => attributeDefinition?.source === "html";
		isQueryAttribute = (attributeDefinition) => attributeDefinition?.source === "query";
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/api/index.mjs
var editableRootKey$2, privateApis$1;
function init_api() {
	return (init_api = __esmMin((() => {
		init_lock_unlock();
		init_utils();
		init_factory();
		init_parser();
		init_serialize_raw_block();
		init_get_block_attributes();
		init_raw_handling();
		init_serializer();
		init_validation();
		init_registration();
		init_templates();
		init_children();
		init_node();
		init_constants();
		editableRootKey$2 = /* @__PURE__ */ Symbol("editableRoot");
		privateApis$1 = {};
		lock$1(privateApis$1, {
			isContentBlock: isContentBlock$3,
			editableRootKey: editableRootKey$2,
			parseRawBlock
		});
	})))();
}
//#endregion
//#region ../packages/blocks/build-module/index.mjs
function init_build_module$3() {
	return (init_build_module$3 = __esmMin((() => {
		init_store$1();
		init_api();
	})))();
}
//#endregion
//#region ../packages/block-editor/src/store/defaults.ts
var PREFERENCES_DEFAULTS, SETTINGS_DEFAULTS;
function init_defaults() {
	return (init_defaults = __esmMin((() => {
		init_build_module$10();
		PREFERENCES_DEFAULTS = { insertUsage: {} };
		SETTINGS_DEFAULTS = {
			alignWide: false,
			supportsLayout: true,
			colors: [
				{
					name: __("Black"),
					slug: "black",
					color: "#000000"
				},
				{
					name: __("Cyan bluish gray"),
					slug: "cyan-bluish-gray",
					color: "#abb8c3"
				},
				{
					name: __("White"),
					slug: "white",
					color: "#ffffff"
				},
				{
					name: __("Pale pink"),
					slug: "pale-pink",
					color: "#f78da7"
				},
				{
					name: __("Vivid red"),
					slug: "vivid-red",
					color: "#cf2e2e"
				},
				{
					name: __("Luminous vivid orange"),
					slug: "luminous-vivid-orange",
					color: "#ff6900"
				},
				{
					name: __("Luminous vivid amber"),
					slug: "luminous-vivid-amber",
					color: "#fcb900"
				},
				{
					name: __("Light green cyan"),
					slug: "light-green-cyan",
					color: "#7bdcb5"
				},
				{
					name: __("Vivid green cyan"),
					slug: "vivid-green-cyan",
					color: "#00d084"
				},
				{
					name: __("Pale cyan blue"),
					slug: "pale-cyan-blue",
					color: "#8ed1fc"
				},
				{
					name: __("Vivid cyan blue"),
					slug: "vivid-cyan-blue",
					color: "#0693e3"
				},
				{
					name: __("Vivid purple"),
					slug: "vivid-purple",
					color: "#9b51e0"
				}
			],
			fontSizes: [
				{
					name: _x("Small", "font size name"),
					size: 13,
					slug: "small"
				},
				{
					name: _x("Normal", "font size name"),
					size: 16,
					slug: "normal"
				},
				{
					name: _x("Medium", "font size name"),
					size: 20,
					slug: "medium"
				},
				{
					name: _x("Large", "font size name"),
					size: 36,
					slug: "large"
				},
				{
					name: _x("Huge", "font size name"),
					size: 42,
					slug: "huge"
				}
			],
			imageDefaultSize: "large",
			imageSizes: [
				{
					slug: "thumbnail",
					name: __("Thumbnail")
				},
				{
					slug: "medium",
					name: __("Medium")
				},
				{
					slug: "large",
					name: __("Large")
				},
				{
					slug: "full",
					name: __("Full Size")
				}
			],
			imageEditing: true,
			maxWidth: 580,
			allowedBlockTypes: true,
			maxUploadFileSize: 0,
			allowedMimeTypes: null,
			canLockBlocks: true,
			blockStatesEditingEnabled: true,
			canEditCSS: false,
			enableOpenverseMediaCategory: true,
			clearBlockSelection: true,
			__experimentalCanUserUseUnfilteredHTML: false,
			__experimentalBlockDirectory: false,
			__mobileEnablePageTemplates: false,
			__experimentalBlockPatterns: [],
			__experimentalBlockPatternCategories: [],
			isPreviewMode: false,
			blockInspectorAnimation: {
				animationParent: "core/navigation",
				"core/navigation": { enterDirection: "leftToRight" },
				"core/navigation-submenu": { enterDirection: "rightToLeft" },
				"core/navigation-link": { enterDirection: "rightToLeft" },
				"core/search": { enterDirection: "rightToLeft" },
				"core/social-links": { enterDirection: "rightToLeft" },
				"core/page-list": { enterDirection: "rightToLeft" },
				"core/spacer": { enterDirection: "rightToLeft" },
				"core/home-link": { enterDirection: "rightToLeft" },
				"core/site-title": { enterDirection: "rightToLeft" },
				"core/site-logo": { enterDirection: "rightToLeft" }
			},
			generateAnchors: false,
			gradients: [
				{
					name: __("Vivid cyan blue to vivid purple"),
					gradient: "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)",
					slug: "vivid-cyan-blue-to-vivid-purple"
				},
				{
					name: __("Light green cyan to vivid green cyan"),
					gradient: "linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)",
					slug: "light-green-cyan-to-vivid-green-cyan"
				},
				{
					name: __("Luminous vivid amber to luminous vivid orange"),
					gradient: "linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)",
					slug: "luminous-vivid-amber-to-luminous-vivid-orange"
				},
				{
					name: __("Luminous vivid orange to vivid red"),
					gradient: "linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)",
					slug: "luminous-vivid-orange-to-vivid-red"
				},
				{
					name: __("Very light gray to cyan bluish gray"),
					gradient: "linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%)",
					slug: "very-light-gray-to-cyan-bluish-gray"
				},
				{
					name: __("Cool to warm spectrum"),
					gradient: "linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)",
					slug: "cool-to-warm-spectrum"
				},
				{
					name: __("Blush light purple"),
					gradient: "linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%)",
					slug: "blush-light-purple"
				},
				{
					name: __("Blush bordeaux"),
					gradient: "linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%)",
					slug: "blush-bordeaux"
				},
				{
					name: __("Luminous dusk"),
					gradient: "linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%)",
					slug: "luminous-dusk"
				},
				{
					name: __("Pale ocean"),
					gradient: "linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%)",
					slug: "pale-ocean"
				},
				{
					name: __("Electric grass"),
					gradient: "linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%)",
					slug: "electric-grass"
				},
				{
					name: __("Midnight"),
					gradient: "linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%)",
					slug: "midnight"
				}
			],
			__unstableResolvedAssets: {
				styles: [],
				scripts: []
			}
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/store/array.ts
/**
* Insert one or multiple elements into a given position of an array.
*
* @param {Array}  array    Source array.
* @param {*}      elements Elements to insert.
* @param {number} index    Insert Position.
*
* @return {Array} Result.
*/
function insertAt(array, elements, index) {
	return [
		...array.slice(0, index),
		...Array.isArray(elements) ? elements : [elements],
		...array.slice(index)
	];
}
/**
* Moves an element in an array.
*
* @param {Array}  array Source array.
* @param {number} from  Source index.
* @param {number} to    Destination index.
* @param {number} count Number of elements to move.
*
* @return {Array} Result.
*/
function moveTo(array, from, to, count = 1) {
	const withoutMovedElements = [...array];
	withoutMovedElements.splice(from, count);
	return insertAt(withoutMovedElements, array.slice(from, from + count), to);
}
//#endregion
//#region ../packages/block-editor/src/store/private-keys.ts
var globalStylesDataKey, globalStylesLinksDataKey, selectBlockPatternsKey, reusableBlocksSelectKey, userPatternCategoriesSelectKey, sectionRootClientIdKey, mediaEditKey, getMediaSelectKey, isIsolatedEditorKey, deviceTypeKey, isNavigationOverlayContextKey, isNavigationPostEditorKey, mediaUploadOnSuccessKey, mediaSideloadFromUrlKey, openMediaEditorModalKey;
function init_private_keys() {
	return (init_private_keys = __esmMin((() => {
		globalStylesDataKey = Symbol("globalStylesDataKey");
		globalStylesLinksDataKey = Symbol("globalStylesLinks");
		selectBlockPatternsKey = Symbol("selectBlockPatternsKey");
		reusableBlocksSelectKey = Symbol("reusableBlocksSelect");
		userPatternCategoriesSelectKey = Symbol("userPatternCategoriesSelect");
		sectionRootClientIdKey = Symbol("sectionRootClientIdKey");
		mediaEditKey = Symbol("mediaEditKey");
		getMediaSelectKey = Symbol("getMediaSelect");
		isIsolatedEditorKey = Symbol("isIsolatedEditor");
		deviceTypeKey = Symbol("deviceTypeKey");
		isNavigationOverlayContextKey = Symbol("isNavigationOverlayContext");
		isNavigationPostEditorKey = Symbol("isNavigationPostEditor");
		mediaUploadOnSuccessKey = Symbol("mediaUploadOnSuccess");
		mediaSideloadFromUrlKey = Symbol("mediaSideloadFromUrl");
		openMediaEditorModalKey = Symbol("openMediaEditorModal");
	})))();
}
//#endregion
//#region ../packages/block-editor/src/store/reducer.ts
/**
* Given an array of blocks, returns an object where each key is a nesting
* context, the value of which is an array of block client IDs existing within
* that nesting context.
*
* @param blocks       Blocks to map.
* @param rootClientId Assumed root client ID.
*
* @return Block order map object.
*/
function mapBlockOrder(blocks, rootClientId = "") {
	const result = /* @__PURE__ */ new Map();
	const current = [];
	result.set(rootClientId, current);
	blocks.forEach((block) => {
		const { clientId, innerBlocks } = block;
		current.push(clientId);
		mapBlockOrder(innerBlocks, clientId).forEach((order, subClientId) => {
			result.set(subClientId, order);
		});
	});
	return result;
}
/**
* Given an array of blocks, returns an object where each key contains
* the clientId of the block and the value is the parent of the block.
*
* @param blocks       Blocks to map.
* @param rootClientId Assumed root client ID.
*
* @return Block order map object.
*/
function mapBlockParents(blocks, rootClientId = "") {
	const result = [];
	const stack = [[rootClientId, blocks]];
	while (stack.length) {
		const [parent, currentBlocks] = stack.shift();
		currentBlocks.forEach(({ innerBlocks, ...block }) => {
			result.push([block.clientId, parent]);
			if (innerBlocks?.length) stack.push([block.clientId, innerBlocks]);
		});
	}
	return result;
}
/**
* Helper method to iterate through all blocks, recursing into inner blocks,
* applying a transformation function to each one.
* Returns a flattened object with the transformed blocks.
*
* @param blocks    Blocks to flatten.
* @param transform Transforming function to be applied to each block.
*
* @return Flattened object.
*/
function flattenBlocks(blocks, transform = identity) {
	const result = [];
	const stack = [...blocks];
	while (stack.length) {
		const { innerBlocks, ...block } = stack.shift();
		stack.push(...innerBlocks);
		result.push([block.clientId, transform(block)]);
	}
	return result;
}
function getFlattenedClientIds(blocks) {
	const result = {};
	const stack = [...blocks];
	while (stack.length) {
		const { innerBlocks, ...block } = stack.shift();
		stack.push(...innerBlocks);
		result[block.clientId] = true;
	}
	return result;
}
/**
* Given an array of blocks, returns an object containing all blocks, without
* attributes, recursing into inner blocks. Keys correspond to the block client
* ID, the value of which is the attributes object.
*
* @param blocks Blocks to flatten.
*
* @return Flattened block attributes object.
*/
function getFlattenedBlocksWithoutAttributes(blocks) {
	return flattenBlocks(blocks, (block) => {
		const { attributes, ...restBlock } = block;
		return restBlock;
	});
}
/**
* Given an array of blocks, returns an object containing all block attributes,
* recursing into inner blocks. Keys correspond to the block client ID, the
* value of which is the attributes object.
*
* @param blocks Blocks to flatten.
*
* @return Flattened block attributes object.
*/
function getFlattenedBlockAttributes(blocks) {
	return flattenBlocks(blocks, (block) => block.attributes);
}
/**
* Returns true if the two object arguments have the same keys, or false
* otherwise.
*
* @param a First object.
* @param b Second object.
*
* @return Whether the two objects have the same keys.
*/
function hasSameKeys(a, b) {
	return (0, import_es6.default)(Object.keys(a), Object.keys(b));
}
/**
* Returns true if, given the currently dispatching action and the previously
* dispatched action, the two actions are updating the same block attribute, or
* false otherwise.
*
* @param action     Currently dispatching action.
* @param lastAction Previously dispatched action.
*
* @return Whether actions are updating the same block attribute.
*/
function isUpdatingSameBlockAttribute(action, lastAction) {
	return action.type === "UPDATE_BLOCK_ATTRIBUTES" && lastAction !== void 0 && lastAction.type === "UPDATE_BLOCK_ATTRIBUTES" && (0, import_es6.default)(action.clientIds, lastAction.clientIds) && hasSameKeys(action.attributes, lastAction.attributes);
}
function updateBlockTreeForBlocks(state, blocks) {
	const treeToUpdate = state.tree;
	const stack = [...blocks];
	const flattenedBlocks = [...blocks];
	while (stack.length) {
		const block = stack.shift();
		stack.push(...block.innerBlocks);
		flattenedBlocks.push(...block.innerBlocks);
	}
	for (const block of flattenedBlocks) treeToUpdate.set(block.clientId, {});
	for (const block of flattenedBlocks) treeToUpdate.set(block.clientId, Object.assign(treeToUpdate.get(block.clientId), {
		...state.byClientId.get(block.clientId),
		attributes: state.attributes.get(block.clientId),
		innerBlocks: block.innerBlocks.map((subBlock) => treeToUpdate.get(subBlock.clientId))
	}));
}
function updateParentInnerBlocksInTree(state, updatedClientIds, updateChildrenOfUpdatedClientIds = false) {
	const treeToUpdate = state.tree;
	const uncontrolledParents = /* @__PURE__ */ new Set([]);
	const controlledParents = /* @__PURE__ */ new Set();
	for (const clientId of updatedClientIds) {
		let current = updateChildrenOfUpdatedClientIds ? clientId : state.parents.get(clientId);
		do
			if (state.controlledInnerBlocks.has(current)) {
				controlledParents.add(current);
				break;
			} else {
				uncontrolledParents.add(current);
				current = state.parents.get(current);
			}
		while (current !== void 0);
	}
	for (const clientId of uncontrolledParents) treeToUpdate.set(clientId, { ...treeToUpdate.get(clientId) });
	for (const clientId of uncontrolledParents) treeToUpdate.get(clientId).innerBlocks = (state.order.get(clientId) || []).map((subClientId) => treeToUpdate.get(subClientId));
	for (const clientId of controlledParents) treeToUpdate.set("controlled||" + clientId, { innerBlocks: (state.order.get(clientId) || []).map((subClientId) => treeToUpdate.get(subClientId)) });
}
/**
* Higher-order reducer intended to augment the blocks reducer, assigning an
* `isPersistentChange` property value corresponding to whether a change in
* state can be considered as persistent. All changes are considered persistent
* except when updating the same block attribute as in the previous action.
*
* @param reducer Original reducer function.
*
* @return Enhanced reducer function.
*/
function withPersistentBlockChange(reducer) {
	let lastAction;
	let nextHistoryMode;
	return (state, action) => {
		const nextState = reducer(state, action);
		const pendingHistoryMode = nextHistoryMode;
		nextHistoryMode = action.type === "MARK_NEXT_CHANGE_AS_NOT_PERSISTENT" ? action.history ?? "merge" : void 0;
		const isExplicitPersistentChange = action.type === "MARK_LAST_CHANGE_AS_PERSISTENT" || pendingHistoryMode;
		if (state === nextState && !isExplicitPersistentChange) {
			if (state.isPersistentChange !== void 0) return state;
			return {
				...nextState,
				isPersistentChange: true
			};
		}
		const isPersistentChange = isExplicitPersistentChange ? !pendingHistoryMode : !isUpdatingSameBlockAttribute(action, lastAction);
		lastAction = action;
		if (pendingHistoryMode === "ignore") return {
			...nextState,
			isPersistentChange,
			lastBlockChangeHistoryMode: "ignore"
		};
		const { lastBlockChangeHistoryMode, ...blockChange } = nextState;
		return {
			...blockChange,
			isPersistentChange
		};
	};
}
/**
* Higher-order reducer intended to augment the blocks reducer, assigning an
* `isIgnoredChange` property value corresponding to whether a change in state
* can be considered as ignored. A change is considered ignored when the result
* of an action not incurred by direct user interaction.
*
* @param reducer Original reducer function.
*
* @return Enhanced reducer function.
*/
function withIgnoredBlockChange(reducer) {
	/**
	* Set of action types for which a blocks state change should be ignored.
	*/
	const IGNORED_ACTION_TYPES = /* @__PURE__ */ new Set(["RECEIVE_BLOCKS"]);
	return (state, action) => {
		const nextState = reducer(state, action);
		if (nextState !== state) nextState.isIgnoredChange = IGNORED_ACTION_TYPES.has(action.type);
		return nextState;
	};
}
/**
* Reducer returning visibility status of block interface.
*
* @param state  Current state.
* @param action Dispatched action.
*
* @return Updated state.
*/
function isBlockInterfaceHidden$1(state = false, action) {
	switch (action.type) {
		case "HIDE_BLOCK_INTERFACE": return true;
		case "SHOW_BLOCK_INTERFACE": return false;
	}
	return state;
}
/**
* Reducer returning typing state.
*
* @param state  Current state.
* @param action Dispatched action.
*
* @return Updated state.
*/
function isTyping$1(state = false, action) {
	switch (action.type) {
		case "START_TYPING": return true;
		case "STOP_TYPING": return false;
	}
	return state;
}
/**
* Reducer returning dragging state. It is possible for a user to be dragging
* data from outside of the editor, so this state is separate from `draggedBlocks`.
*
* @param state  Current state.
* @param action Dispatched action.
*
* @return Updated state.
*/
function isDragging$1(state = false, action) {
	switch (action.type) {
		case "START_DRAGGING": return true;
		case "STOP_DRAGGING": return false;
	}
	return state;
}
/**
* Reducer returning dragged block client id.
*
* @param state  Current state.
* @param action Dispatched action.
*
* @return Updated state.
*/
function draggedBlocks(state = [], action) {
	switch (action.type) {
		case "START_DRAGGING_BLOCKS": return action.clientIds;
		case "STOP_DRAGGING_BLOCKS": return [];
	}
	return state;
}
/**
* Reducer tracking the visible blocks.
*
* @param state  Current state.
* @param action Dispatched action.
*
* @return Block visibility.
*/
function blockVisibility(state = {}, action) {
	if (action.type === "SET_BLOCK_VISIBILITY") return {
		...state,
		...action.updates
	};
	return state;
}
/**
* Internal helper reducer for selectionStart and selectionEnd. Can hold a block
* selection, represented by an object with property clientId.
*
* @param state  Current state.
* @param action Dispatched action.
*
* @return Updated state.
*/
function selectionHelper(state = {}, action) {
	switch (action.type) {
		case "CLEAR_SELECTED_BLOCK":
			if (state.clientId) return {};
			return state;
		case "SELECT_BLOCK":
			if (action.clientId === state.clientId) return state;
			return { clientId: action.clientId };
		case "REPLACE_INNER_BLOCKS":
		case "INSERT_BLOCKS":
			if (!action.updateSelection || !action.blocks.length) return state;
			return { clientId: action.blocks[0].clientId };
		case "REMOVE_BLOCKS":
			if (!action.clientIds || !action.clientIds.length || action.clientIds.indexOf(state.clientId) === -1) return state;
			return {};
		case "REPLACE_BLOCKS": {
			if (action.clientIds.indexOf(state.clientId) === -1) return state;
			const blockToSelect = action.blocks[action.indexToSelect] || action.blocks[action.blocks.length - 1];
			if (!blockToSelect) return {};
			if (blockToSelect.clientId === state.clientId) return state;
			return { clientId: blockToSelect.clientId };
		}
	}
	return state;
}
/**
* Reducer returning the selection state.
*
* @param state  Current state.
* @param action Dispatched action.
*
* @return Updated state.
*/
function selection(state = {}, action) {
	switch (action.type) {
		case "SELECTION_CHANGE":
			if (action.clientId) return {
				selectionStart: {
					clientId: action.clientId,
					attributeKey: action.attributeKey,
					offset: action.startOffset
				},
				selectionEnd: {
					clientId: action.clientId,
					attributeKey: action.attributeKey,
					offset: action.endOffset
				}
			};
			return {
				selectionStart: action.start || state.selectionStart,
				selectionEnd: action.end || state.selectionEnd
			};
		case "RESET_SELECTION":
			const { selectionStart, selectionEnd } = action;
			return {
				selectionStart,
				selectionEnd
			};
		case "MULTI_SELECT":
			const nextSelection = {
				selectionStart: { clientId: action.start },
				selectionEnd: { clientId: action.end }
			};
			if ((0, import_es6.default)(state, nextSelection)) return state;
			return nextSelection;
		case "RESET_BLOCKS":
			const startClientId = state?.selectionStart?.clientId;
			const endClientId = state?.selectionEnd?.clientId;
			if (!startClientId && !endClientId) return state;
			if (!action.blocks.some((block) => block.clientId === startClientId)) return {
				selectionStart: {},
				selectionEnd: {}
			};
			if (!action.blocks.some((block) => block.clientId === endClientId)) return {
				...state,
				selectionEnd: state.selectionStart
			};
	}
	const selectionStart = selectionHelper(state.selectionStart, action);
	const selectionEnd = selectionHelper(state.selectionEnd, action);
	if (selectionStart === state.selectionStart && selectionEnd === state.selectionEnd) return state;
	return {
		selectionStart,
		selectionEnd
	};
}
/**
* Reducer returning whether the user is multi-selecting.
*
* @param state  Current state.
* @param action Dispatched action.
*
* @return Updated state.
*/
function isMultiSelecting$1(state = false, action) {
	switch (action.type) {
		case "START_MULTI_SELECT": return true;
		case "STOP_MULTI_SELECT": return false;
	}
	return state;
}
/**
* Reducer returning whether selection is enabled.
*
* @param state  Current state.
* @param action Dispatched action.
*
* @return Updated state.
*/
function isSelectionEnabled$1(state = true, action) {
	switch (action.type) {
		case "TOGGLE_SELECTION": return action.isSelectionEnabled;
	}
	return state;
}
/**
* Reducer returning the client IDs for the viewport modal,
* or null if the modal is not open.
*
* @param state  Current state.
* @param action Dispatched action.
*
* @return Client IDs for the viewport modal.
*/
function viewportModalClientIds(state = null, action) {
	switch (action.type) {
		case "SHOW_VIEWPORT_MODAL": return action.clientIds;
		case "HIDE_VIEWPORT_MODAL": return null;
	}
	return state;
}
/**
* Reducer returning the data needed to display a prompt when certain blocks
* are removed, or `false` if no such prompt is requested.
*
* @param state  Current state.
* @param action Dispatched action.
*
* @return Data for removal prompt display, if any.
*/
function removalPromptData(state = false, action) {
	switch (action.type) {
		case "DISPLAY_BLOCK_REMOVAL_PROMPT":
			const { clientIds, selectPrevious, message } = action;
			return {
				clientIds,
				selectPrevious,
				message
			};
		case "CLEAR_BLOCK_REMOVAL_PROMPT": return false;
	}
	return state;
}
/**
* Reducer returning any rules that a block editor may provide in order to
* prevent a user from accidentally removing certain blocks. These rules are
* then used to display a confirmation prompt to the user. For instance, in the
* Site Editor, the Query Loop block is important enough to warrant such
* confirmation.
*
* The data is a record whose keys are block types (e.g. 'core/query') and
* whose values are the explanation to be shown to users (e.g. 'Query Loop
* displays a list of posts or pages.').
*
* @param state  Current state.
* @param action Dispatched action.
*
* @return Updated state.
*/
function blockRemovalRules(state = false, action) {
	switch (action.type) {
		case "SET_BLOCK_REMOVAL_RULES": return action.rules;
	}
	return state;
}
/**
* Reducer returning the initial block selection.
*
* Currently this in only used to restore the selection after block deletion and
* pasting new content.This reducer should eventually be removed in favour of setting
* selection directly.
*
* @param state  Current state.
* @param action Dispatched action.
*
* @return Initial position: 0, -1 or null.
*/
function initialPosition(state = null, action) {
	if (action.type === "REPLACE_BLOCKS" && action.initialPosition !== void 0) return action.initialPosition;
	else if ([
		"MULTI_SELECT",
		"SELECT_BLOCK",
		"RESET_SELECTION",
		"INSERT_BLOCKS",
		"REPLACE_INNER_BLOCKS"
	].includes(action.type)) return action.initialPosition;
	return state;
}
function blocksMode(state = {}, action) {
	if (action.type === "TOGGLE_BLOCK_MODE") {
		const { clientId } = action;
		return {
			...state,
			[clientId]: state[clientId] && state[clientId] === "html" ? "visual" : "html"
		};
	}
	return state;
}
/**
* Reducer returning the block insertion point visibility, either null if there
* is not an explicit insertion point assigned, or an object of its `index` and
* `rootClientId`.
*
* @param state  Current state.
* @param action Dispatched action.
*
* @return Updated state.
*/
function insertionCue(state = null, action) {
	switch (action.type) {
		case "SHOW_INSERTION_POINT": {
			const { rootClientId, index, __unstableWithInserter, operation, nearestSide } = action;
			const nextState = {
				rootClientId,
				index,
				__unstableWithInserter,
				operation,
				nearestSide
			};
			return (0, import_es6.default)(state, nextState) ? state : nextState;
		}
		case "HIDE_INSERTION_POINT": return null;
	}
	return state;
}
/**
* Reducer returning whether the post blocks match the defined template or not.
*
* @param state  Current state.
* @param action Dispatched action.
*
* @return Updated state.
*/
function template(state = { isValid: true }, action) {
	switch (action.type) {
		case "SET_TEMPLATE_VALIDITY": return {
			...state,
			isValid: action.isValid
		};
	}
	return state;
}
/**
* Reducer returning the editor setting.
*
* @param state  Current state.
* @param action Dispatched action.
*
* @return Updated state.
*/
function settings(state = SETTINGS_DEFAULTS, action) {
	switch (action.type) {
		case "UPDATE_SETTINGS": {
			const updatedSettings = action.reset ? {
				...SETTINGS_DEFAULTS,
				...action.settings
			} : {
				...state,
				...action.settings
			};
			Object.defineProperty(updatedSettings, "__unstableIsPreviewMode", { get() {
				deprecated("__unstableIsPreviewMode", {
					since: "6.8",
					alternative: "isPreviewMode"
				});
				return this.isPreviewMode;
			} });
			return updatedSettings;
		}
	}
	return state;
}
/**
* Reducer returning the user preferences.
*
* @param state  Current state.
* @param action Dispatched action.
*
* @return Updated state.
*/
function preferences(state = PREFERENCES_DEFAULTS, action) {
	switch (action.type) {
		case "INSERT_BLOCKS":
		case "REPLACE_BLOCKS": {
			const nextInsertUsage = action.blocks.reduce((prevUsage, block) => {
				const { attributes, name: blockName } = block;
				let id = blockName;
				const match = select(store$2).getActiveBlockVariation(blockName, attributes);
				if (match?.name) id += "/" + match.name;
				if (blockName === "core/block") id += "/" + attributes.ref;
				return {
					...prevUsage,
					[id]: {
						time: action.time,
						count: prevUsage[id] ? prevUsage[id].count + 1 : 1
					}
				};
			}, state.insertUsage);
			return {
				...state,
				insertUsage: nextInsertUsage
			};
		}
	}
	return state;
}
/**
* Reducer return an updated state representing the most recent block attribute
* update. The state is structured as an object where the keys represent the
* client IDs of blocks, the values a subset of attributes from the most recent
* block update. The state is always reset to null if the last action is
* anything other than an attributes update.
*
* @param state  Current state.
* @param action Action object.
*
* @return Updated state.
*/
function lastBlockAttributesChange(state = null, action) {
	switch (action.type) {
		case "UPDATE_BLOCK":
			if (!action.updates.attributes) break;
			return { [action.clientId]: action.updates.attributes };
		case "UPDATE_BLOCK_ATTRIBUTES": return action.clientIds.reduce((accumulator, id) => ({
			...accumulator,
			[id]: !!action.options?.uniqueByBlock ? action.attributes[id] : action.attributes
		}), {});
	}
	return state;
}
/**
* Reducer returning current highlighted block.
*
* @param state  Current highlighted block.
* @param action Dispatched action.
*
* @return Updated state.
*/
function highlightedBlock(state, action) {
	switch (action.type) {
		case "TOGGLE_BLOCK_HIGHLIGHT":
			const { clientId, isHighlighted } = action;
			if (isHighlighted) return clientId;
			else if (state === clientId) return null;
			return state;
		case "SELECT_BLOCK": if (action.clientId !== state) return null;
	}
	return state;
}
/**
* Reducer returning current spotlighted block.
*
* @param state  Current clientId or null.
* @param action Dispatched action.
*
* @return Updated state.
*/
function hasBlockSpotlight$1(state, action) {
	switch (action.type) {
		case "TOGGLE_BLOCK_SPOTLIGHT":
			const { clientId, hasBlockSpotlight: _hasBlockSpotlight } = action;
			if (_hasBlockSpotlight) return clientId;
			else if (state === clientId) return null;
			return state;
		case "SELECT_BLOCK":
			if (action.clientId !== state) return null;
			return state;
		case "SELECTION_CHANGE":
			if (action.start?.clientId !== state || action.end?.clientId !== state) return null;
			return state;
		case "CLEAR_SELECTED_BLOCK": return null;
	}
	return state;
}
/**
* Reducer returning current expanded block in the list view.
*
* @param state  Current expanded block.
* @param action Dispatched action.
*
* @return Updated state.
*/
function expandedBlock(state = null, action) {
	switch (action.type) {
		case "SET_BLOCK_EXPANDED_IN_LIST_VIEW": return action.clientId;
		case "SELECT_BLOCK": if (action.clientId !== state) return null;
	}
	return state;
}
/**
* Reducer returning the block insertion event list state.
*
* @param state  Current state.
* @param action Dispatched action.
*
* @return Updated state.
*/
function lastBlockInserted(state = {}, action) {
	switch (action.type) {
		case "INSERT_BLOCKS":
		case "REPLACE_BLOCKS":
			if (!action.blocks.length) return state;
			return {
				clientIds: action.blocks.map((block) => {
					return block.clientId;
				}),
				source: action.meta?.source
			};
		case "RESET_BLOCKS": return {};
	}
	return state;
}
/**
* Reducer returning the contentOnly block that is being edited.
*
* @param state  Current state.
* @param action Dispatched action.
*
* @return Updated state.
*/
function editedContentOnlySection(state, action) {
	if (action.type === "EDIT_CONTENT_ONLY_SECTION") return action.clientId;
	if (!state) return state;
	switch (action.type) {
		case "REMOVE_BLOCKS":
		case "REPLACE_BLOCKS":
			if (action.clientIds.includes(state)) return;
			break;
		case "RESET_BLOCKS": if (!getFlattenedClientIds(action.blocks)[state]) return;
	}
	return state;
}
/**
* Reducer returning a map of style IDs to style overrides.
*
* @param state  Current state.
* @param action Dispatched action.
*
* @return Updated state.
*/
function styleOverrides(state = /* @__PURE__ */ new Map(), action) {
	switch (action.type) {
		case "SET_STYLE_OVERRIDE": return new Map(state).set(action.id, action.style);
		case "DELETE_STYLE_OVERRIDE": {
			const newState = new Map(state);
			newState.delete(action.id);
			return newState;
		}
	}
	return state;
}
/**
* Reducer returning a map of the registered inserter media categories.
*
* @param state  Current state.
* @param action Dispatched action.
*
* @return Updated state.
*/
function registeredInserterMediaCategories(state = [], action) {
	switch (action.type) {
		case "REGISTER_INSERTER_MEDIA_CATEGORY": return [...state, action.category];
	}
	return state;
}
/**
* Reducer setting last focused element
*
* @param state  Current state.
* @param action Dispatched action.
*
* @return Updated state.
*/
function lastFocus(state = false, action) {
	switch (action.type) {
		case "LAST_FOCUS": return action.lastFocus;
	}
	return state;
}
/**
* Reducer setting zoom out state.
*
* @param state  Current state.
* @param action Dispatched action.
*
* @return Updated state.
*/
function zoomLevel(state = 100, action) {
	switch (action.type) {
		case "SET_ZOOM_LEVEL": return action.zoom;
		case "RESET_ZOOM_LEVEL": return 100;
	}
	return state;
}
/**
* Reducer setting the insertion point
*
* @param state  Current state.
* @param action Dispatched action.
*
* @return Updated state.
*/
function insertionPoint(state = null, action) {
	switch (action.type) {
		case "SET_INSERTION_POINT": return action.value;
		case "SELECT_BLOCK": return null;
	}
	return state;
}
/**
* Reducer returning the opened List View panels state.
*
* @param state  Current state.
* @param action Dispatched action.
*
* @return Updated state.
*/
function openedListViewPanels(state = {
	allOpen: false,
	panels: {}
}, action) {
	switch (action.type) {
		case "SET_OPEN_LIST_VIEW_PANEL": return {
			allOpen: false,
			panels: action.clientId ? { [action.clientId]: true } : {}
		};
		case "SET_ALL_LIST_VIEW_PANELS_OPEN": return {
			allOpen: true,
			panels: {}
		};
		case "TOGGLE_LIST_VIEW_PANEL": return {
			allOpen: false,
			panels: {
				...state.panels,
				[action.clientId]: action.isOpen
			}
		};
		case "REPLACE_BLOCKS":
		case "REMOVE_BLOCKS": {
			if (!action.clientIds || action.clientIds.length === 0) return state;
			const newPanels = { ...state.panels };
			let hasChanges = false;
			action.clientIds.forEach((clientId) => {
				if (clientId in newPanels) {
					delete newPanels[clientId];
					hasChanges = true;
				}
			});
			return hasChanges ? {
				...state,
				panels: newPanels
			} : state;
		}
	}
	return state;
}
/**
* Reducer returning the List View expand revision.
*
* This is a counter used to force ListView components to remount. When incremented,
* the ListView key changes, causing the component to remount with a fresh
* isExpanded=true state.
*
* @param state  Current state.
* @param action Dispatched action.
*
* @return Updated state.
*/
function listViewExpandRevision(state = 0, action) {
	switch (action.type) {
		case "INCREMENT_LIST_VIEW_EXPAND_REVISION": return state + 1;
	}
	return state;
}
/**
* Reducer tracking whether the list view content panel popover is open.
*
* @param state  Current state.
* @param action Dispatched action.
*
* @return Updated state.
*/
function listViewContentPanelOpen(state = false, action) {
	switch (action.type) {
		case "OPEN_LIST_VIEW_CONTENT_PANEL": return true;
		case "CLOSE_LIST_VIEW_CONTENT_PANEL": return false;
		case "CLEAR_SELECTED_BLOCK": return false;
	}
	return state;
}
/**
* Reducer tracking the requested inspector tab state.
* Stores a request to open a specific inspector tab with optional configuration.
*
* @param state  Current state.
* @param action Dispatched action.
*
* @return Updated state.
*/
function requestedInspectorTab(state = null, action) {
	switch (action.type) {
		case "REQUEST_INSPECTOR_TAB": return {
			tabName: action.tabName,
			options: action.options
		};
		case "CLEAR_REQUESTED_INSPECTOR_TAB": return null;
	}
	return state;
}
/**
* Reducer tracking the selected style state for block style controls.
*
* @param state  Current state.
* @param action Dispatched action.
*
* @return Updated state.
*/
function selectedBlockStyleState(state = void 0, action) {
	switch (action.type) {
		case "SET_SELECTED_BLOCK_STYLE_STATE": {
			if (!action.clientId || !action.value) return;
			const showStateOnCanvas = state?.clientId === action.clientId ? state.showStateOnCanvas ?? true : true;
			const previousValue = state?.clientId === action.clientId ? state.value : {};
			return {
				clientId: action.clientId,
				showStateOnCanvas,
				value: {
					pseudo: "default",
					...previousValue,
					...action.value
				}
			};
		}
		case "SET_SELECTED_BLOCK_STYLE_STATE_CANVAS_PREVIEW": {
			if (!action.clientId || typeof action.value !== "boolean") return state;
			const previousValue = state?.clientId === action.clientId ? state.value : {};
			return {
				clientId: action.clientId,
				showStateOnCanvas: action.value,
				value: {
					pseudo: "default",
					...previousValue
				}
			};
		}
		case "SELECT_BLOCK":
		case "SELECTION_CHANGE": {
			const startClientId = action.clientId ?? action.start?.clientId;
			const endClientId = action.clientId ?? action.end?.clientId;
			if (state?.clientId && (startClientId !== endClientId || state.clientId !== startClientId)) return;
			break;
		}
		case "RESET_SELECTION":
			if (state?.clientId && state.clientId !== action.selectionStart?.clientId) return;
			break;
		case "CLEAR_SELECTED_BLOCK":
		case "MULTI_SELECT": return;
		case "REMOVE_BLOCKS":
		case "REPLACE_BLOCKS":
			if (state?.clientId && action.clientIds?.includes(state.clientId)) return;
			break;
		case "RESET_BLOCKS": if (state?.clientId && !getFlattenedClientIds(action.blocks)[state.clientId]) return;
	}
	return state;
}
/**
* Reducer holding the globally selected viewport style state. When set to a
* value other than 'default', block style edits in the inspector are applied to
* that viewport. Driven by the editor's device preview (Responsive editing).
*
* @param state  Current state.
* @param action Dispatched action.
*
* @return Updated state.
*/
function styleStateViewport(state = "default", action) {
	if (action.type === "SET_STYLE_STATE_VIEWPORT") return action.viewport ?? "default";
	return state;
}
/**
* Reducer for whether Responsive editing is enabled. When enabled, the device
* preview also drives which viewport block style edits are applied to.
*
* @param state  Current state.
* @param action Dispatched action.
*
* @return Updated state.
*/
function isResponsiveEditing$1(state = false, action) {
	if (action.type === "SET_RESPONSIVE_EDITING") return action.enabled;
	return state;
}
/**
* Retrieves a block's tree structure, handling both controlled and uncontrolled inner blocks.
*
* @param state    The current state object.
* @param clientId The client ID of the block to retrieve.
*
* @return The block tree object, or undefined if not found. For controlled blocks,
*                           returns a merged tree with controlled inner blocks.
*/
function getBlockTreeBlock(state, clientId) {
	if (clientId === "") {
		const rootBlock = state.blocks.tree.get(clientId);
		if (!rootBlock) return;
		return {
			clientId: "",
			...rootBlock
		};
	}
	if (!state.blocks.controlledInnerBlocks.has(clientId)) return state.blocks.tree.get(clientId);
	const controlledTree = state.blocks.tree.get(`controlled||${clientId}`);
	return {
		...state.blocks.tree.get(clientId),
		innerBlocks: controlledTree?.innerBlocks
	};
}
/**
* Recursively traverses through a block tree of a given block and executes a callback for each block.
*
* @param state    The store state.
* @param clientId The clientId of the block to start traversing from.
* @param callback Function to execute for each block encountered during traversal.
*                 The callback receives the current block as its argument.
*/
function traverseBlockTree(state, clientId, callback) {
	const tree = getBlockTreeBlock(state, clientId);
	if (!tree) return;
	callback(tree);
	if (!tree?.innerBlocks?.length) return;
	for (const innerBlock of tree?.innerBlocks) traverseBlockTree(state, innerBlock.clientId, callback);
}
/**
* Checks if a block has a parent in a list of client IDs, and if so returns the client ID of the parent.
*
* @param state     The current state object.
* @param clientId  The client ID of the block to search the parents of.
* @param clientIds The client IDs of the blocks to check.
*
* @return The client ID of the parent block if found, undefined otherwise.
*/
function findParentInClientIdsList(state, clientId, clientIds) {
	if (!clientIds.length) return;
	let parent = state.blocks.parents.get(clientId);
	while (parent !== void 0) {
		if (clientIds.includes(parent)) return parent;
		parent = state.blocks.parents.get(parent);
	}
}
/**
* Checks if a block has any bindings in its metadata attributes.
*
* @param block The block object to check for bindings.
* @return    True if the block has bindings, false otherwise.
*/
function hasBindings(block) {
	return block?.attributes?.metadata?.bindings && Object.keys(block?.attributes?.metadata?.bindings).length;
}
/**
* Computes and returns derived block editing modes for a given block tree.
*
* This function calculates the editing modes for each block in the tree, taking into account
* various factors such as zoom level, sections, and synced patterns.
*
* @param state        The current state object.
* @param treeClientId The client ID of the root block for the tree. Defaults to an empty string.
* @return A Map containing the derived block editing modes, keyed by block client ID.
*/
function getDerivedBlockEditingModesForTree(state, treeClientId = "") {
	const isZoomedOut = state?.zoomLevel < 100 || state?.zoomLevel === "auto-scaled";
	const derivedBlockEditingModes = /* @__PURE__ */ new Map();
	const sectionRootClientId = state.settings?.[sectionRootClientIdKey];
	const sectionClientIds = state.blocks.order.get(sectionRootClientId);
	const hasDisabledBlocks = Array.from(state.blocks.blockEditingModes).some(([, mode]) => mode === "disabled");
	const templatePartClientIds = [];
	const syncedPatternClientIds = [];
	state.blocks.controlledInnerBlocks.forEach((clientId) => {
		const block = state.blocks.byClientId?.get(clientId);
		if (block?.name === "core/template-part") templatePartClientIds.push(clientId);
		if (block?.name === "core/block") syncedPatternClientIds.push(clientId);
	});
	const contentOnlyTemplateLockedClientIds = Array.from(state.blockListSettings).flatMap(([clientId, listSettings]) => listSettings?.templateLock === "contentOnly" ? [clientId] : []);
	const isIsolatedEditor = state.settings?.[isIsolatedEditorKey];
	const disableContentOnlyForUnsyncedPatterns = state.settings?.disableContentOnlyForUnsyncedPatterns;
	const unsyncedPatternClientIds = isIsolatedEditor || disableContentOnlyForUnsyncedPatterns ? [] : Array.from(state.blocks.attributes.keys()).filter((clientId) => state.blocks.attributes.get(clientId)?.metadata?.patternName);
	const disableContentOnlyForTemplateParts = state.settings?.disableContentOnlyForTemplateParts;
	const contentOnlyParents = [
		...contentOnlyTemplateLockedClientIds,
		...unsyncedPatternClientIds,
		...isIsolatedEditor || disableContentOnlyForTemplateParts ? [] : templatePartClientIds
	];
	traverseBlockTree(state, treeClientId, (block) => {
		const { clientId, name: blockName } = block;
		const hasEditedContentOnlySection = !!state.editedContentOnlySection;
		let isWithinEditedContentOnlySection = false;
		if (hasEditedContentOnlySection) {
			isWithinEditedContentOnlySection = clientId === state.editedContentOnlySection || !!findParentInClientIdsList(state, clientId, [state.editedContentOnlySection]);
			if (!isWithinEditedContentOnlySection) {
				derivedBlockEditingModes.set(clientId, "disabled");
				return;
			}
		}
		if (state.blocks.blockEditingModes.has(clientId)) return;
		if (hasDisabledBlocks) {
			let ancestorBlockEditingMode;
			let parent = state.blocks.parents.get(clientId);
			while (parent !== void 0) {
				if (state.blocks.blockEditingModes.has(parent)) ancestorBlockEditingMode = state.blocks.blockEditingModes.get(parent);
				if (ancestorBlockEditingMode) break;
				parent = state.blocks.parents.get(parent);
			}
			if (ancestorBlockEditingMode === "disabled") {
				derivedBlockEditingModes.set(clientId, "disabled");
				return;
			}
		}
		if (isZoomedOut) {
			if (clientId === sectionRootClientId) {
				derivedBlockEditingModes.set(clientId, "contentOnly");
				return;
			}
			if (!sectionClientIds?.length) {
				derivedBlockEditingModes.set(clientId, "disabled");
				return;
			}
			if (sectionClientIds.includes(clientId)) {
				derivedBlockEditingModes.set(clientId, "contentOnly");
				return;
			}
			derivedBlockEditingModes.set(clientId, "disabled");
			return;
		}
		if (syncedPatternClientIds.length) {
			if (syncedPatternClientIds.includes(clientId)) {
				if (findParentInClientIdsList(state, clientId, syncedPatternClientIds)) {
					derivedBlockEditingModes.set(clientId, "disabled");
					return;
				}
				return;
			}
			const parentSyncedPatternClientId = findParentInClientIdsList(state, clientId, syncedPatternClientIds);
			if (parentSyncedPatternClientId) {
				if (findParentInClientIdsList(state, parentSyncedPatternClientId, syncedPatternClientIds)) {
					derivedBlockEditingModes.set(clientId, "disabled");
					return;
				}
				if (hasBindings(block)) {
					derivedBlockEditingModes.set(clientId, "contentOnly");
					return;
				}
				derivedBlockEditingModes.set(clientId, "disabled");
				return;
			}
		}
		if (hasEditedContentOnlySection && isWithinEditedContentOnlySection) {
			derivedBlockEditingModes.set(clientId, "default");
			return;
		}
		if (contentOnlyParents.length) {
			if (!!findParentInClientIdsList(state, clientId, contentOnlyParents)) {
				if (isContentBlock$2(blockName)) derivedBlockEditingModes.set(clientId, "contentOnly");
				else derivedBlockEditingModes.set(clientId, "disabled");
			}
		}
	});
	return derivedBlockEditingModes;
}
/**
* Updates the derived block editing modes based on added and removed blocks.
*
* This function handles the updating of block editing modes when blocks are added,
* removed, or moved within the editor.
*
* It only returns a value when modifications are made to the block editing modes.
*
* @param options                    The options for updating derived block editing modes.
* @param options.prevState          The previous state object.
* @param options.nextState          The next state object.
* @param [options.addedBlocks]      An array of blocks that were added.
* @param [options.removedClientIds] An array of client IDs of blocks that were removed.
* @return The updated derived block editing modes, or undefined if no changes were made.
*/
function getDerivedBlockEditingModesUpdates({ prevState, nextState, addedBlocks, removedClientIds }) {
	const prevDerivedBlockEditingModes = prevState.derivedBlockEditingModes;
	let nextDerivedBlockEditingModes;
	removedClientIds?.forEach((clientId) => {
		traverseBlockTree(prevState, clientId, (block) => {
			if (prevDerivedBlockEditingModes.has(block.clientId)) {
				if (!nextDerivedBlockEditingModes) nextDerivedBlockEditingModes = new Map(prevDerivedBlockEditingModes);
				nextDerivedBlockEditingModes.delete(block.clientId);
			}
		});
	});
	addedBlocks?.forEach((addedBlock) => {
		const updates = getDerivedBlockEditingModesForTree(nextState, addedBlock.clientId);
		if (updates.size) {
			if (!nextDerivedBlockEditingModes) nextDerivedBlockEditingModes = new Map([...prevDerivedBlockEditingModes?.size ? prevDerivedBlockEditingModes : [], ...updates]);
			else nextDerivedBlockEditingModes = new Map([...nextDerivedBlockEditingModes?.size ? nextDerivedBlockEditingModes : [], ...updates]);
		}
	});
	return nextDerivedBlockEditingModes;
}
/**
* Higher-order reducer that adds derived block editing modes to the state.
*
* This function wraps a reducer and enhances it to handle actions that affect
* block editing modes. It updates the derivedBlockEditingModes in the state
* based on various actions such as adding, removing, or moving blocks, or changing
* the editor mode.
*
* @param reducer The original reducer function to be wrapped.
* @return A new reducer function that includes derived block editing modes handling.
*/
function withDerivedBlockEditingModes(reducer) {
	return (state, action) => {
		const nextState = reducer(state, action);
		if (action.type !== "SET_EDITOR_MODE" && nextState === state) return state;
		switch (action.type) {
			case "REMOVE_BLOCKS": {
				const nextDerivedBlockEditingModes = getDerivedBlockEditingModesUpdates({
					prevState: state,
					nextState,
					removedClientIds: action.clientIds
				});
				if (nextDerivedBlockEditingModes) return {
					...nextState,
					derivedBlockEditingModes: nextDerivedBlockEditingModes ?? state.derivedBlockEditingModes
				};
				break;
			}
			case "RECEIVE_BLOCKS":
			case "INSERT_BLOCKS": {
				const nextDerivedBlockEditingModes = getDerivedBlockEditingModesUpdates({
					prevState: state,
					nextState,
					addedBlocks: action.blocks
				});
				if (nextDerivedBlockEditingModes) return {
					...nextState,
					derivedBlockEditingModes: nextDerivedBlockEditingModes ?? state.derivedBlockEditingModes
				};
				break;
			}
			case "UPDATE_BLOCK_ATTRIBUTES": {
				if (nextState.settings?.disableContentOnlyForUnsyncedPatterns) break;
				const addedBlocks = [];
				const removedClientIds = [];
				for (const clientId of action?.clientIds) {
					const attributes = action.options?.uniqueByBlock ? action.attributes[clientId] : action.attributes;
					if (!attributes) break;
					if (attributes.metadata?.patternName && !state.blocks.attributes.get(clientId)?.metadata?.patternName) addedBlocks.push(nextState.blocks.tree.get(clientId));
					else if (attributes.metadata && !attributes.metadata?.patternName && state.blocks.attributes.get(clientId)?.metadata?.patternName) removedClientIds.push(clientId);
				}
				if (!addedBlocks?.length && !removedClientIds?.length) break;
				const nextDerivedBlockEditingModes = getDerivedBlockEditingModesUpdates({
					prevState: state,
					nextState,
					addedBlocks,
					removedClientIds
				});
				if (nextDerivedBlockEditingModes) return {
					...nextState,
					derivedBlockEditingModes: nextDerivedBlockEditingModes ?? state.derivedBlockEditingModes
				};
				break;
			}
			case "UPDATE_BLOCK_LIST_SETTINGS": {
				const addedBlocks = [];
				const removedClientIds = [];
				const updates = typeof action.clientId === "string" ? { [action.clientId]: action.settings } : action.clientId;
				for (const clientId in updates) {
					const isNewContentOnlyBlock = state.blockListSettings.get(clientId)?.templateLock !== "contentOnly" && nextState.blockListSettings.get(clientId)?.templateLock === "contentOnly";
					const wasContentOnlyBlock = state.blockListSettings.get(clientId)?.templateLock === "contentOnly" && nextState.blockListSettings.get(clientId)?.templateLock !== "contentOnly";
					if (isNewContentOnlyBlock) addedBlocks.push(nextState.blocks.tree.get(clientId));
					else if (wasContentOnlyBlock) removedClientIds.push(clientId);
				}
				if (!addedBlocks.length && !removedClientIds.length) break;
				const nextDerivedBlockEditingModes = getDerivedBlockEditingModesUpdates({
					prevState: state,
					nextState,
					addedBlocks,
					removedClientIds
				});
				if (nextDerivedBlockEditingModes) return {
					...nextState,
					derivedBlockEditingModes: nextDerivedBlockEditingModes ?? state.derivedBlockEditingModes
				};
				break;
			}
			case "SET_BLOCK_EDITING_MODE":
			case "UNSET_BLOCK_EDITING_MODE":
			case "SET_HAS_CONTROLLED_INNER_BLOCKS": {
				const updatedBlock = getBlockTreeBlock(nextState, action.clientId);
				if (!updatedBlock) break;
				const nextDerivedBlockEditingModes = getDerivedBlockEditingModesUpdates({
					prevState: state,
					nextState,
					removedClientIds: [action.clientId],
					addedBlocks: [updatedBlock]
				});
				if (nextDerivedBlockEditingModes) return {
					...nextState,
					derivedBlockEditingModes: nextDerivedBlockEditingModes ?? state.derivedBlockEditingModes
				};
				break;
			}
			case "REPLACE_BLOCKS": {
				const nextDerivedBlockEditingModes = getDerivedBlockEditingModesUpdates({
					prevState: state,
					nextState,
					addedBlocks: action.blocks,
					removedClientIds: action.clientIds
				});
				if (nextDerivedBlockEditingModes) return {
					...nextState,
					derivedBlockEditingModes: nextDerivedBlockEditingModes ?? state.derivedBlockEditingModes
				};
				break;
			}
			case "REPLACE_INNER_BLOCKS": {
				const removedClientIds = state.blocks.order.get(action.rootClientId);
				const nextDerivedBlockEditingModes = getDerivedBlockEditingModesUpdates({
					prevState: state,
					nextState,
					addedBlocks: action.blocks,
					removedClientIds
				});
				if (nextDerivedBlockEditingModes) return {
					...nextState,
					derivedBlockEditingModes: nextDerivedBlockEditingModes ?? state.derivedBlockEditingModes
				};
				break;
			}
			case "MOVE_BLOCKS_TO_POSITION": {
				const nextDerivedBlockEditingModes = getDerivedBlockEditingModesUpdates({
					prevState: state,
					nextState,
					addedBlocks: action.clientIds.map((clientId) => {
						return nextState.blocks.byClientId.get(clientId);
					}),
					removedClientIds: action.clientIds
				});
				if (nextDerivedBlockEditingModes) return {
					...nextState,
					derivedBlockEditingModes: nextDerivedBlockEditingModes ?? state.derivedBlockEditingModes
				};
				break;
			}
			case "UPDATE_SETTINGS":
				if (state?.settings?.[sectionRootClientIdKey] !== nextState?.settings?.[sectionRootClientIdKey] || !!state?.settings?.disableContentOnlyForUnsyncedPatterns !== !!nextState?.settings?.disableContentOnlyForUnsyncedPatterns || !!state?.settings?.[isIsolatedEditorKey] !== !!nextState?.settings?.[isIsolatedEditorKey] || !!state?.settings?.disableContentOnlyForTemplateParts !== !!nextState?.settings?.disableContentOnlyForTemplateParts) return {
					...nextState,
					derivedBlockEditingModes: getDerivedBlockEditingModesForTree(nextState)
				};
				break;
			case "RESET_BLOCKS":
			case "EDIT_CONTENT_ONLY_SECTION":
			case "SET_EDITOR_MODE":
			case "RESET_ZOOM_LEVEL":
			case "SET_ZOOM_LEVEL": return {
				...nextState,
				derivedBlockEditingModes: getDerivedBlockEditingModesForTree(nextState)
			};
		}
		nextState.derivedBlockEditingModes = state?.derivedBlockEditingModes ?? /* @__PURE__ */ new Map();
		return nextState;
	};
}
function withAutomaticChangeReset(reducer) {
	return (state, action) => {
		const nextState = reducer(state, action);
		if (!state) return nextState;
		nextState.automaticChangeStatus = state.automaticChangeStatus;
		if (action.type === "MARK_AUTOMATIC_CHANGE") return {
			...nextState,
			automaticChangeStatus: "pending"
		};
		if (action.type === "MARK_AUTOMATIC_CHANGE_FINAL" && state.automaticChangeStatus === "pending") return {
			...nextState,
			automaticChangeStatus: "final"
		};
		if (nextState.blocks === state.blocks && nextState.selection === state.selection) return nextState;
		if (nextState.automaticChangeStatus !== "final" && nextState.selection !== state.selection) return nextState;
		return {
			...nextState,
			automaticChangeStatus: void 0
		};
	};
}
var import_es6, isContentBlock$2, identity, withBlockTree, withInnerBlocksRemoveCascade, withBlockReset, withReplaceInnerBlocks, withResetControlledBlocks, blocks, blockListSettings, combinedReducers, reducer_default$1;
function init_reducer$2() {
	return (init_reducer$2 = __esmMin((() => {
		import_es6 = /* @__PURE__ */ __toESM(require_es6());
		init_pipe();
		init_build_module$13();
		init_build_module$6();
		init_build_module$3();
		init_defaults();
		init_private_keys();
		init_lock_unlock$2();
		({isContentBlock: isContentBlock$2} = unlock$2(privateApis$1));
		identity = (x) => x;
		withBlockTree = (reducer) => (state = {}, action) => {
			const newState = reducer(state, action);
			if (newState === state) return state;
			newState.tree = state.tree ? state.tree : /* @__PURE__ */ new Map();
			switch (action.type) {
				case "RECEIVE_BLOCKS":
				case "INSERT_BLOCKS":
					newState.tree = new Map(newState.tree);
					updateBlockTreeForBlocks(newState, action.blocks);
					updateParentInnerBlocksInTree(newState, action.rootClientId ? [action.rootClientId] : [""], true);
					break;
				case "UPDATE_BLOCK":
					newState.tree = new Map(newState.tree);
					newState.tree.set(action.clientId, {
						...newState.tree.get(action.clientId),
						...newState.byClientId.get(action.clientId),
						attributes: newState.attributes.get(action.clientId)
					});
					updateParentInnerBlocksInTree(newState, [action.clientId], false);
					break;
				case "UPDATE_BLOCK_ATTRIBUTES":
					newState.tree = new Map(newState.tree);
					action.clientIds.forEach((clientId) => {
						newState.tree.set(clientId, {
							...newState.tree.get(clientId),
							attributes: newState.attributes.get(clientId)
						});
					});
					updateParentInnerBlocksInTree(newState, action.clientIds, false);
					break;
				case "REPLACE_BLOCKS_AUGMENTED_WITH_CHILDREN": {
					const inserterClientIds = getFlattenedClientIds(action.blocks);
					newState.tree = new Map(newState.tree);
					action.replacedClientIds.forEach((clientId) => {
						newState.tree.delete(clientId);
						if (!inserterClientIds[clientId]) newState.tree.delete("controlled||" + clientId);
					});
					updateBlockTreeForBlocks(newState, action.blocks);
					updateParentInnerBlocksInTree(newState, action.blocks.map((b) => b.clientId), false);
					const parentsOfRemovedBlocks = [];
					for (const clientId of action.clientIds) {
						const parentId = state.parents.get(clientId);
						if (parentId !== void 0 && (parentId === "" || newState.byClientId.get(parentId))) parentsOfRemovedBlocks.push(parentId);
					}
					updateParentInnerBlocksInTree(newState, parentsOfRemovedBlocks, true);
					break;
				}
				case "REMOVE_BLOCKS_AUGMENTED_WITH_CHILDREN":
					const parentsOfRemovedBlocks = [];
					for (const clientId of action.clientIds) {
						const parentId = state.parents.get(clientId);
						if (parentId !== void 0 && (parentId === "" || newState.byClientId.get(parentId))) parentsOfRemovedBlocks.push(parentId);
					}
					newState.tree = new Map(newState.tree);
					action.removedClientIds.forEach((clientId) => {
						newState.tree.delete(clientId);
						newState.tree.delete("controlled||" + clientId);
					});
					updateParentInnerBlocksInTree(newState, parentsOfRemovedBlocks, true);
					break;
				case "MOVE_BLOCKS_TO_POSITION": {
					const updatedBlockUids = [];
					if (action.fromRootClientId) updatedBlockUids.push(action.fromRootClientId);
					else updatedBlockUids.push("");
					if (action.toRootClientId) updatedBlockUids.push(action.toRootClientId);
					newState.tree = new Map(newState.tree);
					updateParentInnerBlocksInTree(newState, updatedBlockUids, true);
					break;
				}
				case "MOVE_BLOCKS_UP":
				case "MOVE_BLOCKS_DOWN": {
					const updatedBlockUids = [action.rootClientId ? action.rootClientId : ""];
					newState.tree = new Map(newState.tree);
					updateParentInnerBlocksInTree(newState, updatedBlockUids, true);
					break;
				}
			}
			return newState;
		};
		withInnerBlocksRemoveCascade = (reducer) => (state, action) => {
			const getAllChildren = (clientIds) => {
				let result = clientIds;
				for (let i = 0; i < result.length; i++) {
					if (!state.order.get(result[i]) || action.keepControlledInnerBlocks && action.keepControlledInnerBlocks[result[i]]) continue;
					if (result === clientIds) result = [...result];
					result.push(...state.order.get(result[i]));
				}
				return result;
			};
			if (state) switch (action.type) {
				case "REMOVE_BLOCKS":
					action = {
						...action,
						type: "REMOVE_BLOCKS_AUGMENTED_WITH_CHILDREN",
						removedClientIds: getAllChildren(action.clientIds)
					};
					break;
				case "REPLACE_BLOCKS": action = {
					...action,
					type: "REPLACE_BLOCKS_AUGMENTED_WITH_CHILDREN",
					replacedClientIds: getAllChildren(action.clientIds)
				};
			}
			return reducer(state, action);
		};
		withBlockReset = (reducer) => (state, action) => {
			if (action.type === "RESET_BLOCKS") {
				/**
				* Preserve controlled inner block flags across RESET_BLOCKS.
				* If there are old and new blocks that:
				* - have the same `clientId`
				* - have the `controlledInnerBlocks` flag
				* - don't have any own, uncontrolled children
				* then we preserve the `controlledInnerBlocks` flag and the controlled sub-trees.
				* Nested controllers (e.g., `post-content`, patterns) don't lose their
				* controlled status and don't unnecessarily re-clone blocks.
				*/
				const newState = reducer(void 0, {
					type: "INSERT_BLOCKS",
					rootClientId: "",
					blocks: action.blocks
				});
				const preservedControlledInnerBlocks = state?.controlledInnerBlocks ?? /* @__PURE__ */ new Set();
				if (state?.order) for (const clientId of preservedControlledInnerBlocks) {
					if (!newState.byClientId.has(clientId)) continue;
					newState.controlledInnerBlocks.add(clientId);
					const oldOrder = state.order.get(clientId);
					if (!oldOrder?.length) continue;
					newState.order.set(clientId, oldOrder);
					const preserveBlock = (blockId, parentId) => {
						const blockData = state.byClientId.get(blockId);
						if (!blockData) return;
						newState.byClientId.set(blockId, blockData);
						newState.attributes.set(blockId, state.attributes.get(blockId));
						newState.parents.set(blockId, parentId);
						const childOrder = state.order.get(blockId) || [];
						newState.order.set(blockId, childOrder);
						childOrder.forEach((childId) => preserveBlock(childId, blockId));
					};
					oldOrder.forEach((id) => preserveBlock(id, clientId));
				}
				for (const clientId of newState.controlledInnerBlocks) {
					const controlledOrder = newState.order.get(clientId);
					if (!controlledOrder?.length) continue;
					const innerBlocks = controlledOrder.map((id) => state.tree.get(id));
					const existingEntry = newState.tree.get(clientId);
					if (existingEntry) existingEntry.innerBlocks = innerBlocks;
					newState.tree.set("controlled||" + clientId, { innerBlocks });
					const preserveTreeEntry = (blockId) => {
						const treeEntry = state.tree.get(blockId);
						if (!treeEntry) return;
						newState.tree.set(blockId, treeEntry);
						(newState.order.get(blockId) || []).forEach(preserveTreeEntry);
					};
					controlledOrder.forEach(preserveTreeEntry);
				}
				const preservedBlockEditingModes = state?.blockEditingModes ?? /* @__PURE__ */ new Map();
				for (const [clientId, mode] of preservedBlockEditingModes) {
					if (!newState.tree.has(clientId)) continue;
					newState.blockEditingModes.set(clientId, mode);
				}
				return newState;
			}
			return reducer(state, action);
		};
		withReplaceInnerBlocks = (reducer) => (state, action) => {
			if (action.type !== "REPLACE_INNER_BLOCKS") return reducer(state, action);
			const nestedControllers = {};
			if (state.controlledInnerBlocks.size) {
				const stack = [...action.blocks];
				while (stack.length) {
					const { innerBlocks, ...block } = stack.shift();
					stack.push(...innerBlocks);
					if (state.controlledInnerBlocks.has(block.clientId)) nestedControllers[block.clientId] = true;
				}
			}
			let stateAfterBlocksRemoval = state;
			if (state.order.get(action.rootClientId)) stateAfterBlocksRemoval = reducer(stateAfterBlocksRemoval, {
				type: "REMOVE_BLOCKS",
				keepControlledInnerBlocks: nestedControllers,
				clientIds: state.order.get(action.rootClientId)
			});
			let stateAfterInsert = stateAfterBlocksRemoval;
			if (action.blocks.length) {
				stateAfterInsert = reducer(stateAfterInsert, {
					...action,
					type: "INSERT_BLOCKS",
					index: 0
				});
				const stateAfterInsertOrder = new Map(stateAfterInsert.order);
				Object.keys(nestedControllers).forEach((key) => {
					if (state.order.get(key)) stateAfterInsertOrder.set(key, state.order.get(key));
				});
				stateAfterInsert.order = stateAfterInsertOrder;
				stateAfterInsert.tree = new Map(stateAfterInsert.tree);
				Object.keys(nestedControllers).forEach((_key) => {
					const key = `controlled||${_key}`;
					if (state.tree.has(key)) stateAfterInsert.tree.set(key, state.tree.get(key));
				});
			}
			return stateAfterInsert;
		};
		withResetControlledBlocks = (reducer) => (state, action) => {
			if (action.type === "SET_HAS_CONTROLLED_INNER_BLOCKS") {
				if (state.order.get(action.clientId)?.length) return reducer(reducer(state, {
					type: "REPLACE_INNER_BLOCKS",
					rootClientId: action.clientId,
					blocks: []
				}), action);
				return reducer(state, action);
			}
			return reducer(state, action);
		};
		blocks = pipe_default(combineReducers, withBlockTree, withInnerBlocksRemoveCascade, withReplaceInnerBlocks, withBlockReset, withPersistentBlockChange, withIgnoredBlockChange, withResetControlledBlocks)({
			byClientId(state = /* @__PURE__ */ new Map(), action) {
				switch (action.type) {
					case "RECEIVE_BLOCKS":
					case "INSERT_BLOCKS": {
						const newState = new Map(state);
						getFlattenedBlocksWithoutAttributes(action.blocks).forEach(([key, value]) => {
							newState.set(key, value);
						});
						return newState;
					}
					case "UPDATE_BLOCK": {
						if (!state.has(action.clientId)) return state;
						const { attributes, ...changes } = action.updates;
						if (Object.values(changes).length === 0) return state;
						const newState = new Map(state);
						newState.set(action.clientId, {
							...state.get(action.clientId),
							...changes
						});
						return newState;
					}
					case "REPLACE_BLOCKS_AUGMENTED_WITH_CHILDREN": {
						if (!action.blocks) return state;
						const newState = new Map(state);
						action.replacedClientIds.forEach((clientId) => {
							newState.delete(clientId);
						});
						getFlattenedBlocksWithoutAttributes(action.blocks).forEach(([key, value]) => {
							newState.set(key, value);
						});
						return newState;
					}
					case "REMOVE_BLOCKS_AUGMENTED_WITH_CHILDREN": {
						const newState = new Map(state);
						action.removedClientIds.forEach((clientId) => {
							newState.delete(clientId);
						});
						return newState;
					}
				}
				return state;
			},
			attributes(state = /* @__PURE__ */ new Map(), action) {
				switch (action.type) {
					case "RECEIVE_BLOCKS":
					case "INSERT_BLOCKS": {
						const newState = new Map(state);
						getFlattenedBlockAttributes(action.blocks).forEach(([key, value]) => {
							newState.set(key, value);
						});
						return newState;
					}
					case "UPDATE_BLOCK": {
						if (!state.get(action.clientId) || !action.updates.attributes) return state;
						const newState = new Map(state);
						newState.set(action.clientId, {
							...state.get(action.clientId),
							...action.updates.attributes
						});
						return newState;
					}
					case "UPDATE_BLOCK_ATTRIBUTES": {
						if (action.clientIds.every((id) => !state.get(id))) return state;
						let hasChange = false;
						const newState = new Map(state);
						for (const clientId of action.clientIds) {
							const updatedAttributeEntries = Object.entries(!!action.options?.uniqueByBlock ? action.attributes[clientId] : action.attributes ?? {});
							if (updatedAttributeEntries.length === 0) continue;
							let hasUpdatedAttributes = false;
							const existingAttributes = state.get(clientId);
							const newAttributes = {};
							updatedAttributeEntries.forEach(([key, value]) => {
								if (existingAttributes[key] !== value) {
									hasUpdatedAttributes = true;
									newAttributes[key] = value;
								}
							});
							hasChange = hasChange || hasUpdatedAttributes;
							if (hasUpdatedAttributes) newState.set(clientId, {
								...existingAttributes,
								...newAttributes
							});
						}
						return hasChange ? newState : state;
					}
					case "REPLACE_BLOCKS_AUGMENTED_WITH_CHILDREN": {
						if (!action.blocks) return state;
						const newState = new Map(state);
						action.replacedClientIds.forEach((clientId) => {
							newState.delete(clientId);
						});
						getFlattenedBlockAttributes(action.blocks).forEach(([key, value]) => {
							newState.set(key, value);
						});
						return newState;
					}
					case "REMOVE_BLOCKS_AUGMENTED_WITH_CHILDREN": {
						const newState = new Map(state);
						action.removedClientIds.forEach((clientId) => {
							newState.delete(clientId);
						});
						return newState;
					}
				}
				return state;
			},
			order(state = /* @__PURE__ */ new Map(), action) {
				switch (action.type) {
					case "RECEIVE_BLOCKS": {
						const blockOrder = mapBlockOrder(action.blocks);
						const newState = new Map(state);
						blockOrder.forEach((order, clientId) => {
							if (clientId !== "") newState.set(clientId, order);
						});
						newState.set("", (state.get("") ?? []).concat(blockOrder[""]));
						return newState;
					}
					case "INSERT_BLOCKS": {
						const { rootClientId = "" } = action;
						const subState = state.get(rootClientId) || [];
						const mappedBlocks = mapBlockOrder(action.blocks, rootClientId);
						const { index = subState.length } = action;
						const newState = new Map(state);
						mappedBlocks.forEach((order, clientId) => {
							newState.set(clientId, order);
						});
						newState.set(rootClientId, insertAt(subState, mappedBlocks.get(rootClientId), index));
						return newState;
					}
					case "MOVE_BLOCKS_TO_POSITION": {
						const { fromRootClientId = "", toRootClientId = "", clientIds } = action;
						const { index = state.get(toRootClientId).length } = action;
						if (fromRootClientId === toRootClientId) {
							const fromIndex = state.get(toRootClientId).indexOf(clientIds[0]);
							if (fromIndex === -1) return state;
							const newState = new Map(state);
							newState.set(toRootClientId, moveTo(state.get(toRootClientId), fromIndex, index, clientIds.length));
							return newState;
						}
						const newState = new Map(state);
						newState.set(fromRootClientId, state.get(fromRootClientId)?.filter((id) => !clientIds.includes(id)) ?? []);
						newState.set(toRootClientId, insertAt(state.get(toRootClientId), clientIds, index));
						return newState;
					}
					case "MOVE_BLOCKS_UP": {
						const { clientIds, rootClientId = "" } = action;
						const firstClientId = clientIds[0];
						const subState = state.get(rootClientId);
						if (!subState.length || firstClientId === subState[0]) return state;
						const firstIndex = subState.indexOf(firstClientId);
						const newState = new Map(state);
						newState.set(rootClientId, moveTo(subState, firstIndex, firstIndex - 1, clientIds.length));
						return newState;
					}
					case "MOVE_BLOCKS_DOWN": {
						const { clientIds, rootClientId = "" } = action;
						const firstClientId = clientIds[0];
						const lastClientId = clientIds[clientIds.length - 1];
						const subState = state.get(rootClientId);
						if (!subState.length || lastClientId === subState[subState.length - 1]) return state;
						const firstIndex = subState.indexOf(firstClientId);
						const newState = new Map(state);
						newState.set(rootClientId, moveTo(subState, firstIndex, firstIndex + 1, clientIds.length));
						return newState;
					}
					case "REPLACE_BLOCKS_AUGMENTED_WITH_CHILDREN": {
						const { clientIds } = action;
						if (!action.blocks) return state;
						const mappedBlocks = mapBlockOrder(action.blocks);
						const newState = new Map(state);
						action.replacedClientIds.forEach((clientId) => {
							newState.delete(clientId);
						});
						mappedBlocks.forEach((order, clientId) => {
							if (clientId !== "") newState.set(clientId, order);
						});
						newState.forEach((order, clientId) => {
							const newSubOrder = Object.values(order).reduce((result, subClientId) => {
								if (subClientId === clientIds[0]) return [...result, ...mappedBlocks.get("")];
								if (clientIds.indexOf(subClientId) === -1) result.push(subClientId);
								return result;
							}, []);
							newState.set(clientId, newSubOrder);
						});
						return newState;
					}
					case "REMOVE_BLOCKS_AUGMENTED_WITH_CHILDREN": {
						const newState = new Map(state);
						action.removedClientIds.forEach((clientId) => {
							newState.delete(clientId);
						});
						newState.forEach((order, clientId) => {
							const newSubOrder = order?.filter((id) => !action.removedClientIds.includes(id)) ?? [];
							if (newSubOrder.length !== order.length) newState.set(clientId, newSubOrder);
						});
						return newState;
					}
				}
				return state;
			},
			parents(state = /* @__PURE__ */ new Map(), action) {
				switch (action.type) {
					case "RECEIVE_BLOCKS": {
						const newState = new Map(state);
						mapBlockParents(action.blocks).forEach(([key, value]) => {
							newState.set(key, value);
						});
						return newState;
					}
					case "INSERT_BLOCKS": {
						const newState = new Map(state);
						mapBlockParents(action.blocks, action.rootClientId || "").forEach(([key, value]) => {
							newState.set(key, value);
						});
						return newState;
					}
					case "MOVE_BLOCKS_TO_POSITION": {
						const newState = new Map(state);
						action.clientIds.forEach((id) => {
							newState.set(id, action.toRootClientId || "");
						});
						return newState;
					}
					case "REPLACE_BLOCKS_AUGMENTED_WITH_CHILDREN": {
						const newState = new Map(state);
						action.replacedClientIds.forEach((clientId) => {
							newState.delete(clientId);
						});
						mapBlockParents(action.blocks, state.get(action.clientIds[0])).forEach(([key, value]) => {
							newState.set(key, value);
						});
						return newState;
					}
					case "REMOVE_BLOCKS_AUGMENTED_WITH_CHILDREN": {
						const newState = new Map(state);
						action.removedClientIds.forEach((clientId) => {
							newState.delete(clientId);
						});
						return newState;
					}
				}
				return state;
			},
			controlledInnerBlocks(state = /* @__PURE__ */ new Set(), { type, clientId, hasControlledInnerBlocks }) {
				if (type === "SET_HAS_CONTROLLED_INNER_BLOCKS") {
					if (hasControlledInnerBlocks) {
						if (state.has(clientId)) return state;
						return new Set(state).add(clientId);
					}
					if (!state.has(clientId)) return state;
					const newState = new Set(state);
					newState.delete(clientId);
					return newState;
				}
				return state;
			},
			blockEditingModes(state = /* @__PURE__ */ new Map(), action) {
				switch (action.type) {
					case "SET_BLOCK_EDITING_MODE":
						if (state.get(action.clientId) === action.mode) return state;
						return new Map(state).set(action.clientId, action.mode);
					case "UNSET_BLOCK_EDITING_MODE": {
						if (!state.has(action.clientId)) return state;
						const newState = new Map(state);
						newState.delete(action.clientId);
						return newState;
					}
				}
				return state;
			}
		});
		blockListSettings = (state = /* @__PURE__ */ new Map(), action) => {
			switch (action.type) {
				case "REPLACE_BLOCKS": {
					const replacementIds = /* @__PURE__ */ new Set();
					const stack = [...action.blocks];
					while (stack.length) {
						const block = stack.shift();
						replacementIds.add(block.clientId);
						stack.push(...block.innerBlocks);
					}
					const newState = new Map(state);
					for (const clientId of action.clientIds) if (!replacementIds.has(clientId)) newState.delete(clientId);
					return newState;
				}
				case "REMOVE_BLOCKS": {
					const newState = new Map(state);
					for (const clientId of action.clientIds) newState.delete(clientId);
					return newState;
				}
				case "UPDATE_BLOCK_LIST_SETTINGS": {
					const relevantUpdates = (typeof action.clientId === "string" ? [[action.clientId, action.settings]] : Object.entries(action.clientId)).filter(([clientId, nextSettings]) => !nextSettings ? state.has(clientId) : !(0, import_es6.default)(state.get(clientId), nextSettings));
					if (!relevantUpdates.length) return state;
					const newState = new Map(state);
					for (const [clientId, nextSettings] of relevantUpdates) if (!nextSettings) newState.delete(clientId);
					else newState.set(clientId, nextSettings);
					return newState;
				}
			}
			return state;
		};
		combinedReducers = combineReducers({
			blocks,
			isDragging: isDragging$1,
			isTyping: isTyping$1,
			isBlockInterfaceHidden: isBlockInterfaceHidden$1,
			draggedBlocks,
			selection,
			isMultiSelecting: isMultiSelecting$1,
			isSelectionEnabled: isSelectionEnabled$1,
			initialPosition,
			blocksMode,
			blockListSettings,
			insertionPoint,
			insertionCue,
			template,
			settings,
			preferences,
			lastBlockAttributesChange,
			lastFocus,
			expandedBlock,
			highlightedBlock,
			lastBlockInserted,
			editedContentOnlySection,
			blockVisibility,
			viewportModalClientIds,
			styleOverrides,
			removalPromptData,
			blockRemovalRules,
			registeredInserterMediaCategories,
			zoomLevel,
			hasBlockSpotlight: hasBlockSpotlight$1,
			openedListViewPanels,
			listViewExpandRevision,
			listViewContentPanelOpen,
			requestedInspectorTab,
			selectedBlockStyleState,
			styleStateViewport,
			isResponsiveEditing: isResponsiveEditing$1
		});
		reducer_default$1 = pipe_default(withDerivedBlockEditingModes, withAutomaticChangeReset)(combinedReducers);
	})))();
}
//#endregion
//#region ../packages/block-editor/src/store/constants.ts
var STORE_NAME;
function init_constants$2() {
	return (init_constants$2 = __esmMin((() => {
		STORE_NAME = "core/block-editor";
	})))();
}
//#endregion
//#region ../packages/global-styles-engine/build-module/utils/object.mjs
function setImmutably$1(object, path, value) {
	path = Array.isArray(path) ? [...path] : [path];
	object = Array.isArray(object) ? [...object] : { ...object };
	const leaf = path.pop();
	let prev = object;
	for (const key of path) {
		const lvl = prev[key];
		prev = prev[key] = Array.isArray(lvl) ? [...lvl] : { ...lvl };
	}
	prev[leaf] = value;
	return object;
}
var getValueFromObjectPath$1;
function init_object() {
	return (init_object = __esmMin((() => {
		getValueFromObjectPath$1 = (object, path, defaultValue) => {
			const arrayPath = Array.isArray(path) ? path : path.split(".");
			let value = object;
			arrayPath.forEach((fieldName) => {
				value = value?.[fieldName];
			});
			return value ?? defaultValue;
		};
	})))();
}
//#endregion
//#region ../packages/style-engine/build-module/styles/constants.mjs
var VARIABLE_REFERENCE_PREFIX;
function init_constants$3() {
	return (init_constants$3 = __esmMin((() => {
		VARIABLE_REFERENCE_PREFIX = "var:";
	})))();
}
//#endregion
//#region ../packages/style-engine/build-module/styles/utils.mjs
function generateRule(style, options, path, ruleKey) {
	const styleValue = getStyleValueByPath(style, path);
	return styleValue ? [{
		selector: options?.selector,
		key: ruleKey,
		value: getCSSValueFromRawStyle(styleValue)
	}] : [];
}
function generateBoxRules(style, options, path, ruleKeys, individualProperties = [
	"top",
	"right",
	"bottom",
	"left"
]) {
	const boxStyle = getStyleValueByPath(style, path);
	if (!boxStyle) return [];
	const rules = [];
	if (typeof boxStyle === "string") rules.push({
		selector: options?.selector,
		key: ruleKeys.default,
		value: getCSSValueFromRawStyle(boxStyle)
	});
	else {
		const sideRules = individualProperties.reduce((acc, side) => {
			const value = getCSSValueFromRawStyle(getStyleValueByPath(boxStyle, [side]));
			if (value) acc.push({
				selector: options?.selector,
				key: ruleKeys?.individual.replace("%s", upperFirst(side)),
				value
			});
			return acc;
		}, []);
		rules.push(...sideRules);
	}
	return rules;
}
function getCSSValueFromRawStyle(styleValue) {
	if (typeof styleValue === "string" && styleValue.startsWith("var:")) return `var(--wp--${styleValue.slice(VARIABLE_REFERENCE_PREFIX.length).split("|").map((presetVariable) => paramCase(presetVariable, { splitRegexp: [
		/([a-z0-9])([A-Z])/g,
		/([0-9])([a-z])/g,
		/([A-Za-z])([0-9])/g,
		/([A-Z])([A-Z][a-z])/g
	] })).join("--")})`;
	return styleValue;
}
function upperFirst(string) {
	const [firstLetter, ...rest] = string;
	return firstLetter.toUpperCase() + rest.join("");
}
function camelCaseJoin(strings) {
	const [firstItem, ...rest] = strings;
	return firstItem.toLowerCase() + rest.map(upperFirst).join("");
}
function safeDecodeURI(uri) {
	try {
		return decodeURI(uri);
	} catch {
		return uri;
	}
}
var getStyleValueByPath;
function init_utils$2() {
	return (init_utils$2 = __esmMin((() => {
		init_dist_es2015$1();
		init_constants$3();
		getStyleValueByPath = (object, path) => {
			let value = object;
			path.forEach((fieldName) => {
				value = value?.[fieldName];
			});
			return value;
		};
	})))();
}
//#endregion
//#region ../packages/global-styles-engine/build-module/utils/fluid.mjs
function getComputedFluidTypographyValue({ minimumFontSize, maximumFontSize, fontSize, minimumViewportWidth = DEFAULT_MINIMUM_VIEWPORT_WIDTH, maximumViewportWidth = DEFAULT_MAXIMUM_VIEWPORT_WIDTH, scaleFactor = DEFAULT_SCALE_FACTOR, minimumFontSizeLimit }) {
	minimumFontSizeLimit = !!getTypographyValueAndUnit(minimumFontSizeLimit) ? minimumFontSizeLimit : DEFAULT_MINIMUM_FONT_SIZE_LIMIT;
	if (fontSize) {
		const fontSizeParsed = getTypographyValueAndUnit(fontSize);
		if (!fontSizeParsed?.unit || !fontSizeParsed?.value) return null;
		const minimumFontSizeLimitParsed = getTypographyValueAndUnit(minimumFontSizeLimit, { coerceTo: fontSizeParsed.unit });
		if (!!minimumFontSizeLimitParsed?.value && !minimumFontSize && !maximumFontSize) {
			if (fontSizeParsed?.value <= minimumFontSizeLimitParsed?.value) return null;
		}
		if (!maximumFontSize) maximumFontSize = `${fontSizeParsed.value}${fontSizeParsed.unit}`;
		if (!minimumFontSize) {
			const fontSizeValueInPx = fontSizeParsed.unit === "px" ? fontSizeParsed.value : fontSizeParsed.value * 16;
			const minimumFontSizeFactor = Math.min(Math.max(1 - .075 * Math.log2(fontSizeValueInPx), DEFAULT_MINIMUM_FONT_SIZE_FACTOR_MIN), DEFAULT_MINIMUM_FONT_SIZE_FACTOR_MAX);
			const calculatedMinimumFontSize = roundToPrecision(fontSizeParsed.value * minimumFontSizeFactor, 3);
			if (!!minimumFontSizeLimitParsed?.value && calculatedMinimumFontSize < minimumFontSizeLimitParsed?.value) minimumFontSize = `${minimumFontSizeLimitParsed.value}${minimumFontSizeLimitParsed.unit}`;
			else minimumFontSize = `${calculatedMinimumFontSize}${fontSizeParsed.unit}`;
		}
	}
	const minimumFontSizeParsed = getTypographyValueAndUnit(minimumFontSize);
	const fontSizeUnit = minimumFontSizeParsed?.unit || "rem";
	const maximumFontSizeParsed = getTypographyValueAndUnit(maximumFontSize, { coerceTo: fontSizeUnit });
	if (!minimumFontSizeParsed || !maximumFontSizeParsed) return null;
	const minimumFontSizeRem = getTypographyValueAndUnit(minimumFontSize, { coerceTo: "rem" });
	const maximumViewportWidthParsed = getTypographyValueAndUnit(maximumViewportWidth, { coerceTo: fontSizeUnit });
	const minimumViewportWidthParsed = getTypographyValueAndUnit(minimumViewportWidth, { coerceTo: fontSizeUnit });
	if (!maximumViewportWidthParsed || !minimumViewportWidthParsed || !minimumFontSizeRem) return null;
	const linearDenominator = maximumViewportWidthParsed.value - minimumViewportWidthParsed.value;
	if (!linearDenominator) return null;
	const viewportWidthOffset = roundToPrecision(roundToPrecision(minimumViewportWidthParsed.value / 100, 3), 3) + fontSizeUnit;
	const linearFactorScaled = roundToPrecision((100 * ((maximumFontSizeParsed.value - minimumFontSizeParsed.value) / linearDenominator) || 1) * scaleFactor, 3);
	const fluidTargetFontSize = `${minimumFontSizeRem.value}${minimumFontSizeRem.unit} + ((1vw - ${viewportWidthOffset}) * ${linearFactorScaled})`;
	return `clamp(${minimumFontSize}, ${fluidTargetFontSize}, ${maximumFontSize})`;
}
function getTypographyValueAndUnit(rawValue, options = {}) {
	if (typeof rawValue !== "string" && typeof rawValue !== "number") return null;
	if (isFinite(rawValue)) rawValue = `${rawValue}px`;
	const { coerceTo, rootSizeValue, acceptableUnits } = {
		coerceTo: "",
		rootSizeValue: 16,
		acceptableUnits: [
			"rem",
			"px",
			"em"
		],
		...options
	};
	const acceptableUnitsGroup = acceptableUnits?.join("|");
	const regexUnits = new RegExp(`^(\\d*\\.?\\d+)(${acceptableUnitsGroup}){1,1}$`);
	const matches = rawValue.toString().match(regexUnits);
	if (!matches || matches.length < 3) return null;
	let [, value, unit] = matches;
	let returnValue = parseFloat(value);
	if ("px" === coerceTo && ("em" === unit || "rem" === unit)) {
		returnValue = returnValue * rootSizeValue;
		unit = coerceTo;
	}
	if ("px" === unit && ("em" === coerceTo || "rem" === coerceTo)) {
		returnValue = returnValue / rootSizeValue;
		unit = coerceTo;
	}
	if (("em" === coerceTo || "rem" === coerceTo) && ("em" === unit || "rem" === unit)) unit = coerceTo;
	if (!unit) return null;
	return {
		value: roundToPrecision(returnValue, 3),
		unit
	};
}
function roundToPrecision(value, digits = 3) {
	const base = Math.pow(10, digits);
	return Math.round(value * base) / base;
}
var DEFAULT_MAXIMUM_VIEWPORT_WIDTH, DEFAULT_MINIMUM_VIEWPORT_WIDTH, DEFAULT_SCALE_FACTOR, DEFAULT_MINIMUM_FONT_SIZE_FACTOR_MIN, DEFAULT_MINIMUM_FONT_SIZE_FACTOR_MAX, DEFAULT_MINIMUM_FONT_SIZE_LIMIT;
function init_fluid() {
	return (init_fluid = __esmMin((() => {
		DEFAULT_MAXIMUM_VIEWPORT_WIDTH = "1600px";
		DEFAULT_MINIMUM_VIEWPORT_WIDTH = "320px";
		DEFAULT_SCALE_FACTOR = 1;
		DEFAULT_MINIMUM_FONT_SIZE_FACTOR_MIN = .25;
		DEFAULT_MINIMUM_FONT_SIZE_FACTOR_MAX = .75;
		DEFAULT_MINIMUM_FONT_SIZE_LIMIT = "14px";
	})))();
}
//#endregion
//#region ../packages/global-styles-engine/build-module/utils/typography.mjs
function isFluidTypographyEnabled(typographySettings) {
	const fluidSettings = typographySettings?.fluid;
	return true === fluidSettings || fluidSettings && typeof fluidSettings === "object" && Object.keys(fluidSettings).length > 0;
}
function getFluidTypographyOptionsFromSettings(settings) {
	const typographySettings = settings?.typography ?? {};
	const layoutSettings = settings?.layout;
	const defaultMaxViewportWidth = getTypographyValueAndUnit(layoutSettings?.wideSize) ? layoutSettings?.wideSize : null;
	return isFluidTypographyEnabled(typographySettings) && defaultMaxViewportWidth ? { fluid: {
		maxViewportWidth: defaultMaxViewportWidth,
		...typeof typographySettings.fluid === "object" ? typographySettings.fluid : {}
	} } : { fluid: typographySettings?.fluid };
}
function getTypographyFontSizeValue(preset, settings) {
	const { size: defaultSize } = preset;
	if (!defaultSize || "0" === defaultSize || false === preset?.fluid) return defaultSize;
	if (!isFluidTypographyEnabled(settings?.typography) && !isFluidTypographyEnabled(preset)) return defaultSize;
	const fluidTypographySettings = getFluidTypographyOptionsFromSettings(settings)?.fluid ?? {};
	const fluidFontSizeValue = getComputedFluidTypographyValue({
		minimumFontSize: typeof preset?.fluid === "boolean" ? void 0 : preset?.fluid?.min,
		maximumFontSize: typeof preset?.fluid === "boolean" ? void 0 : preset?.fluid?.max,
		fontSize: defaultSize,
		minimumFontSizeLimit: typeof fluidTypographySettings === "object" ? fluidTypographySettings?.minFontSize : void 0,
		maximumViewportWidth: typeof fluidTypographySettings === "object" ? fluidTypographySettings?.maxViewportWidth : void 0,
		minimumViewportWidth: typeof fluidTypographySettings === "object" ? fluidTypographySettings?.minViewportWidth : void 0
	});
	if (!!fluidFontSizeValue) return fluidFontSizeValue;
	return defaultSize;
}
function init_typography() {
	return (init_typography = __esmMin((() => {
		init_fluid();
	})))();
}
//#endregion
//#region ../packages/global-styles-engine/build-module/utils/common.mjs
function splitSelectorList(selector) {
	if (!selector.includes(",")) return [selector];
	const selectors = [];
	let currentSelector = "";
	let parenthesesDepth = 0;
	for (const char of selector) {
		if (char === "(") parenthesesDepth++;
		else if (char === ")" && parenthesesDepth > 0) parenthesesDepth--;
		else if (char === "," && parenthesesDepth === 0) {
			selectors.push(currentSelector);
			currentSelector = "";
			continue;
		}
		currentSelector += char;
	}
	selectors.push(currentSelector);
	return selectors;
}
function scopeSelector(scope, selector) {
	if (!scope || !selector) return selector;
	const scopes = splitSelectorList(scope);
	const selectors = splitSelectorList(selector);
	const selectorsScoped = [];
	scopes.forEach((outer) => {
		selectors.forEach((inner) => {
			selectorsScoped.push(`${outer.trim()} ${inner.trim()}`);
		});
	});
	return selectorsScoped.join(", ");
}
function scopeFeatureSelectors(scope, selectors) {
	if (!scope || !selectors) return;
	const featureSelectors = {};
	Object.entries(selectors).forEach(([feature, selector]) => {
		if (typeof selector === "string") featureSelectors[feature] = scopeSelector(scope, selector);
		if (typeof selector === "object") {
			featureSelectors[feature] = {};
			Object.entries(selector).forEach(([subfeature, subfeatureSelector]) => {
				featureSelectors[feature][subfeature] = scopeSelector(scope, subfeatureSelector);
			});
		}
	});
	return featureSelectors;
}
function appendToSelector(selector, toAppend) {
	if (!selector.includes(",")) return selector + toAppend;
	return splitSelectorList(selector).map((sel) => sel + toAppend).join(",");
}
function getBlockStyleVariationSelector(variation, blockSelector) {
	const variationClass = `.is-style-${variation}`;
	if (!blockSelector) return variationClass;
	const ancestorRegex = /[^\s:]+/;
	const addVariationClass = (match) => match + variationClass;
	return splitSelectorList(blockSelector).map((part) => part.replace(ancestorRegex, addVariationClass)).join(",");
}
function getBlockStyleVariationFeatureSelector(variation, featureSelector) {
	const variationClass = `.is-style-${variation}`;
	return getBlockStyleVariationSelector(variation, splitSelectorList(featureSelector).map((selector) => {
		const trimmedSelector = selector.trim();
		const prefix = `${variationClass} `;
		if (trimmedSelector.startsWith(prefix)) return trimmedSelector.slice(prefix.length);
		return trimmedSelector;
	}).join(","));
}
function getResolvedRefValue(ruleValue, tree) {
	if (!ruleValue || !tree) return ruleValue;
	if (typeof ruleValue === "object" && "ref" in ruleValue && ruleValue?.ref) {
		const resolvedRuleValue = getCSSValueFromRawStyle(getValueFromObjectPath$1(tree, ruleValue.ref));
		if (typeof resolvedRuleValue === "object" && resolvedRuleValue !== null && "ref" in resolvedRuleValue && resolvedRuleValue?.ref) return;
		if (resolvedRuleValue === void 0) return ruleValue;
		return resolvedRuleValue;
	}
	return ruleValue;
}
function getResolvedThemeFilePath(file, themeFileURIs) {
	if (!file || !themeFileURIs || !Array.isArray(themeFileURIs)) return file;
	const uri = themeFileURIs.find((themeFileUri) => themeFileUri?.name === file);
	if (!uri?.href) return file;
	return uri?.href;
}
function getResolvedValue(ruleValue, tree) {
	if (!ruleValue || !tree) return ruleValue;
	const resolvedValue = getResolvedRefValue(ruleValue, tree);
	if (typeof resolvedValue === "object" && resolvedValue !== null && "url" in resolvedValue && resolvedValue?.url) return {
		...resolvedValue,
		url: getResolvedThemeFilePath(resolvedValue.url, tree?._links?.["wp:theme-file"])
	};
	return resolvedValue;
}
function findInPresetsBy(settings, blockName, presetPath = [], presetProperty = "slug", presetValueValue) {
	const orderedPresetsByOrigin = [blockName ? getValueFromObjectPath$1(settings, [
		"blocks",
		blockName,
		...presetPath
	]) : void 0, getValueFromObjectPath$1(settings, presetPath)].filter(Boolean);
	for (const presetByOrigin of orderedPresetsByOrigin) if (presetByOrigin) for (const origin of [
		"custom",
		"theme",
		"default"
	]) {
		const presets = presetByOrigin[origin];
		if (presets) {
			const presetObject = presets.find((preset) => preset[presetProperty] === presetValueValue);
			if (presetObject) {
				if (presetProperty === "slug") return presetObject;
				if (findInPresetsBy(settings, blockName, presetPath, "slug", presetObject.slug)[presetProperty] === presetObject[presetProperty]) return presetObject;
				return;
			}
		}
	}
}
function getValueFromPresetVariable(features, blockName, variable, [presetType, slug] = []) {
	const metadata = PRESET_METADATA.find((data) => data.cssVarInfix === presetType);
	if (!metadata || !features.settings) return variable;
	const presetObject = findInPresetsBy(features.settings, blockName, metadata.path, "slug", slug);
	if (presetObject) {
		const { valueKey } = metadata;
		const result = presetObject[valueKey];
		return getValueFromVariable(features, blockName, result);
	}
	return variable;
}
function getValueFromCustomVariable(features, blockName, variable, path = []) {
	const result = (blockName ? getValueFromObjectPath$1(features?.settings ?? {}, [
		"blocks",
		blockName,
		"custom",
		...path
	]) : void 0) ?? getValueFromObjectPath$1(features?.settings ?? {}, ["custom", ...path]);
	if (!result) return variable;
	return getValueFromVariable(features, blockName, result);
}
function getValueFromVariable(features, blockName, variable) {
	if (!variable || typeof variable !== "string") {
		if (typeof variable === "object" && variable !== null && "ref" in variable && typeof variable.ref === "string") {
			const resolvedVariable = getValueFromObjectPath$1(features, variable.ref);
			if (!resolvedVariable || typeof resolvedVariable === "object" && "ref" in resolvedVariable) return resolvedVariable;
			variable = resolvedVariable;
		} else return variable;
	}
	const USER_VALUE_PREFIX = "var:";
	const THEME_VALUE_PREFIX = "var(--wp--";
	const THEME_VALUE_SUFFIX = ")";
	let parsedVar;
	if (variable.startsWith(USER_VALUE_PREFIX)) parsedVar = variable.slice(4).split("|");
	else if (variable.startsWith(THEME_VALUE_PREFIX) && variable.endsWith(THEME_VALUE_SUFFIX)) parsedVar = variable.slice(10, -1).split("--");
	else return variable;
	const [type, ...path] = parsedVar;
	if (type === "preset") return getValueFromPresetVariable(features, blockName, variable, path);
	if (type === "custom") return getValueFromCustomVariable(features, blockName, variable, path);
	return variable;
}
var ROOT_BLOCK_SELECTOR, ROOT_CSS_PROPERTIES_SELECTOR, PRESET_METADATA;
function init_common() {
	return (init_common = __esmMin((() => {
		init_build_module$9();
		init_typography();
		init_object();
		ROOT_BLOCK_SELECTOR = "body";
		ROOT_CSS_PROPERTIES_SELECTOR = ":root";
		PRESET_METADATA = [
			{
				path: ["color", "palette"],
				valueKey: "color",
				cssVarInfix: "color",
				classes: [
					{
						classSuffix: "color",
						propertyName: "color"
					},
					{
						classSuffix: "background-color",
						propertyName: "background-color"
					},
					{
						classSuffix: "border-color",
						propertyName: "border-color"
					}
				]
			},
			{
				path: ["color", "gradients"],
				valueKey: "gradient",
				cssVarInfix: "gradient",
				classes: [{
					classSuffix: "gradient-background",
					propertyName: "background"
				}]
			},
			{
				path: ["color", "duotone"],
				valueKey: "colors",
				cssVarInfix: "duotone",
				valueFunc: ({ slug }) => `url( '#wp-duotone-${slug}' )`,
				classes: []
			},
			{
				path: ["shadow", "presets"],
				valueKey: "shadow",
				cssVarInfix: "shadow",
				classes: []
			},
			{
				path: ["typography", "fontSizes"],
				valueFunc: (preset, settings) => getTypographyFontSizeValue(preset, settings),
				valueKey: "size",
				cssVarInfix: "font-size",
				classes: [{
					classSuffix: "font-size",
					propertyName: "font-size"
				}]
			},
			{
				path: ["typography", "fontFamilies"],
				valueKey: "fontFamily",
				cssVarInfix: "font-family",
				classes: [{
					classSuffix: "font-family",
					propertyName: "font-family"
				}]
			},
			{
				path: ["typography", "textShadowPresets"],
				valueKey: "textShadow",
				cssVarInfix: "text-shadow",
				classes: [{
					classSuffix: "text-shadow",
					propertyName: "text-shadow"
				}]
			},
			{
				path: ["spacing", "spacingSizes"],
				valueKey: "size",
				cssVarInfix: "spacing",
				valueFunc: ({ size }) => size,
				classes: []
			},
			{
				path: ["border", "radiusSizes"],
				valueKey: "size",
				cssVarInfix: "border-radius",
				classes: []
			},
			{
				path: ["dimensions", "dimensionSizes"],
				valueKey: "size",
				cssVarInfix: "dimension",
				classes: []
			}
		];
	})))();
}
//#endregion
//#region ../packages/global-styles-engine/build-module/utils/duotone.mjs
function getValuesFromColors(colors = []) {
	const values = {
		r: [],
		g: [],
		b: [],
		a: []
	};
	colors.forEach((color) => {
		const rgbColor = A(color).toRgb();
		values.r.push(rgbColor.r / 255);
		values.g.push(rgbColor.g / 255);
		values.b.push(rgbColor.b / 255);
		values.a.push(rgbColor.a);
	});
	return values;
}
function getDuotoneUnsetStylesheet(selector) {
	return `${selector}{filter:none}`;
}
function getDuotoneStylesheet(selector, id) {
	return `${selector}{filter:url(#${id})}`;
}
function getDuotoneFilter(id, colors) {
	const values = getValuesFromColors(colors);
	return `
<svg
	xmlns:xlink="http://www.w3.org/1999/xlink"
	viewBox="0 0 0 0"
	width="0"
	height="0"
	focusable="false"
	role="none"
	aria-hidden="true"
	style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"
>
	<defs>
		<filter id="${id}">
			<!--
				Use sRGB instead of linearRGB so transparency looks correct.
				Use perceptual brightness to convert to grayscale.
			-->
			<feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "></feColorMatrix>
			<!-- Use sRGB instead of linearRGB to be consistent with how CSS gradients work. -->
			<feComponentTransfer color-interpolation-filters="sRGB">
				<feFuncR type="table" tableValues="${values.r.join(" ")}"></feFuncR>
				<feFuncG type="table" tableValues="${values.g.join(" ")}"></feFuncG>
				<feFuncB type="table" tableValues="${values.b.join(" ")}"></feFuncB>
				<feFuncA type="table" tableValues="${values.a.join(" ")}"></feFuncA>
			</feComponentTransfer>
			<!-- Re-mask the image with the original transparency since the feColorMatrix above loses that information. -->
			<feComposite in2="SourceGraphic" operator="in"></feComposite>
		</filter>
	</defs>
</svg>`;
}
function init_duotone() {
	return (init_duotone = __esmMin((() => {
		init_colord();
	})))();
}
//#endregion
//#region ../packages/global-styles-engine/build-module/utils/viewport.mjs
function isViewportSettings(configOrSettings) {
	return "mobile" in configOrSettings || "tablet" in configOrSettings;
}
function getViewportSettings(configOrSettings) {
	if (!configOrSettings || typeof configOrSettings !== "object") return {};
	if (isViewportSettings(configOrSettings)) return configOrSettings;
	return configOrSettings.settings?.viewport ?? {};
}
function isValidViewportSize(value) {
	return typeof value === "string" && VIEWPORT_SIZE_REGEXP.test(value.trim());
}
function getViewportBreakpointValueInPixels(value) {
	if (typeof value === "number") return value;
	if (typeof value !== "string") return;
	const match = value.trim().match(VIEWPORT_SIZE_REGEXP);
	if (!match) return;
	const numericValue = Number.parseFloat(match[1]);
	return match[2] === "px" ? numericValue : numericValue * DEFAULT_FONT_SIZE;
}
function getViewportBreakpoints$1(configOrSettings) {
	const viewportSettings = getViewportSettings(configOrSettings);
	const breakpoints = {};
	const breakpointValuesInPixels = {};
	Object.keys(DEFAULT_VIEWPORT_BREAKPOINTS).forEach((breakpoint) => {
		const key = breakpoint;
		const value = viewportSettings[key];
		const px = getViewportBreakpointValueInPixels(value);
		if (px !== void 0 && isValidViewportSize(value)) {
			breakpoints[key] = value.trim();
			breakpointValuesInPixels[key] = px;
		}
	});
	const breakpointNames = Object.keys(breakpoints);
	if (!breakpointNames.length) return { ...DEFAULT_VIEWPORT_BREAKPOINTS };
	if (1 === breakpointNames.length) return breakpoints;
	const mobile = breakpoints.mobile;
	const tablet = breakpoints.tablet;
	if (breakpointValuesInPixels.mobile >= breakpointValuesInPixels.tablet) return { mobile };
	return {
		mobile,
		tablet
	};
}
function getResponsiveMediaQueries(configOrSettings) {
	const breakpoints = getViewportBreakpoints$1(configOrSettings);
	const mediaQueries = {};
	if (breakpoints.mobile) mediaQueries["@mobile"] = `@media (width <= ${breakpoints.mobile})`;
	if (breakpoints.tablet) mediaQueries["@tablet"] = breakpoints.mobile ? `@media (${breakpoints.mobile} < width <= ${breakpoints.tablet})` : `@media (width <= ${breakpoints.tablet})`;
	return mediaQueries;
}
var DEFAULT_VIEWPORT_BREAKPOINTS, VIEWPORT_SIZE_REGEXP, DEFAULT_FONT_SIZE;
function init_viewport() {
	return (init_viewport = __esmMin((() => {
		DEFAULT_VIEWPORT_BREAKPOINTS = {
			mobile: "480px",
			tablet: "782px"
		};
		VIEWPORT_SIZE_REGEXP = /^(\d+|\d*\.\d+)(px|em|rem)$/;
		DEFAULT_FONT_SIZE = 16;
	})))();
}
//#endregion
//#region ../packages/global-styles-engine/build-module/variation.mjs
function getVariationStyle(globalStyles, name, variation, { resolveRefs = true } = {}) {
	if (!globalStyles?.styles?.blocks?.[name]?.variations?.[variation]) return;
	const replaceRefs = (variationStyles) => {
		Object.keys(variationStyles).forEach((key) => {
			const value = variationStyles[key];
			if (typeof value === "object" && value !== null) {
				if (value.ref !== void 0) {
					if (typeof value.ref !== "string" || value.ref.trim() === "") delete variationStyles[key];
					else {
						const refValue = getValueFromObjectPath$1(globalStyles, value.ref);
						if (refValue !== void 0 && refValue !== null) variationStyles[key] = refValue;
						else delete variationStyles[key];
					}
				} else {
					replaceRefs(value);
					if (Object.keys(value).length === 0) delete variationStyles[key];
				}
			}
		});
	};
	const styles = JSON.parse(JSON.stringify(globalStyles.styles.blocks[name].variations[variation]));
	if (resolveRefs) replaceRefs(styles);
	return styles;
}
function init_variation() {
	return (init_variation = __esmMin((() => {
		init_object();
	})))();
}
//#endregion
//#region ../packages/global-styles-engine/build-module/resolve-style.mjs
function isDefaultBlockStyleState(selectedState) {
	const viewport = selectedState?.viewport;
	const pseudoState = selectedState?.pseudoState;
	return (!viewport || viewport === DEFAULT_STATE_VALUE) && (!pseudoState || pseudoState === DEFAULT_STATE_VALUE);
}
function getStyleStatePath(selectedState) {
	if (isDefaultBlockStyleState(selectedState)) return [];
	return [selectedState.viewport, selectedState.pseudoState].filter((state) => !!state && state !== DEFAULT_STATE_VALUE);
}
function getStyleForState(style, selectedState) {
	const path = getStyleStatePath(selectedState);
	if (!path.length) return style;
	return getValueFromObjectPath$1(style, path);
}
function createSourceDescriptor(type) {
	const descriptor = SOURCE_DESCRIPTORS[type];
	if (!descriptor) return null;
	return { ...descriptor };
}
function createContribution(styles, source) {
	if (!styles || !source) return null;
	return {
		styles,
		source
	};
}
function getPathKey(path) {
	return path.join(".");
}
function getSourceForPath(source) {
	return { ...source };
}
function isExplicitEmpty(value) {
	if (value === "" || value === null) return true;
	if (typeof value === "object" && !Array.isArray(value) && Object.keys(value).length === 0) return true;
	return false;
}
function isRefObject(value) {
	return value !== null && typeof value === "object" && !Array.isArray(value) && typeof value.ref === "string";
}
function pickLayerRootContribution(layer) {
	if (!layer || typeof layer !== "object" || Array.isArray(layer)) return null;
	const contribution = {};
	for (const key of Object.keys(layer)) {
		if (TREE_STRUCTURAL_KEYS.has(key)) continue;
		if (key === "elements") {
			if (layer.elements && typeof layer.elements === "object") contribution.elements = layer.elements;
			continue;
		}
		if (isExplicitEmpty(layer[key])) continue;
		contribution[key] = layer[key];
	}
	return Object.keys(contribution).length === 0 ? null : contribution;
}
function deepMergeDroppingEmpties(target, source, globalStyles, sourceMetadata, sources, path = []) {
	if (!source || typeof source !== "object" || Array.isArray(source)) return target;
	for (const key of Object.keys(source)) {
		let sourceValue = source[key];
		if (isExplicitEmpty(sourceValue)) continue;
		if (isRefObject(sourceValue)) {
			if (sourceValue.ref.trim() === "") continue;
			const resolved = getValueFromObjectPath$1(globalStyles, sourceValue.ref);
			if (resolved === void 0 || resolved === null || isRefObject(resolved)) continue;
			sourceValue = resolved;
		}
		const nextPath = [...path, key];
		if (!ATOMIC_OBJECT_KEYS.has(key) && sourceValue !== null && typeof sourceValue === "object" && !Array.isArray(sourceValue) && !isRefObject(sourceValue)) target[key] = deepMergeDroppingEmpties({ ...target[key] && typeof target[key] === "object" && !Array.isArray(target[key]) ? target[key] : {} }, sourceValue, globalStyles, sourceMetadata, sources, nextPath);
		else {
			target[key] = ATOMIC_OBJECT_KEYS.has(key) && sourceValue !== null && typeof sourceValue === "object" && !Array.isArray(sourceValue) ? { ...sourceValue } : sourceValue;
			if (sourceMetadata && sources) sources[getPathKey(nextPath)] = getSourceForPath(sourceMetadata);
		}
	}
	return target;
}
function getStateSlice(layerObject, selectedState) {
	if (!layerObject) return null;
	const slice = getStyleForState(layerObject, selectedState);
	return slice && typeof slice === "object" && !Array.isArray(slice) ? slice : null;
}
function isNonCascadingRootPath(pathKey) {
	if (pathKey.startsWith("elements.")) return false;
	return NON_CASCADING_ROOT_PREFIXES.some((prefix) => pathKey === prefix || pathKey.startsWith(`${prefix}.`));
}
function deleteAtPath(target, pathSegments) {
	if (!target || typeof target !== "object") return;
	const [head, ...rest] = pathSegments;
	if (rest.length === 0) {
		delete target[head];
		return;
	}
	const child = target[head];
	if (child && typeof child === "object") {
		deleteAtPath(child, rest);
		if (Object.keys(child).length === 0) delete target[head];
	}
}
function dropNonCascadingRootLeaves(value, sources) {
	for (const pathKey of Object.keys(sources)) if (sources[pathKey].layer === "root" && isNonCascadingRootPath(pathKey)) {
		deleteAtPath(value, pathKey.split("."));
		delete sources[pathKey];
	}
}
function resolveThemeFileBackgroundImage(value, globalStyles, links) {
	const image = value?.background?.backgroundImage;
	if (!image) return;
	const resolved = getResolvedValue(image, {
		...globalStyles,
		_links: links ?? void 0
	});
	if (resolved !== void 0) value.background.backgroundImage = resolved;
}
function computeResolvedStyle(globalStyles, { blockName, variationName = null, elements = null, viewport = null, pseudoState = null } = {}) {
	if (!globalStyles || !globalStyles.styles) return EMPTY_INHERITANCE;
	if (!blockName) return EMPTY_INHERITANCE;
	const styles = globalStyles.styles;
	const selectedState = {
		viewport,
		pseudoState
	};
	const root = styles;
	const block = styles.blocks?.[blockName] ?? null;
	const elementLayers = (elements ?? []).map((elementName) => styles.elements?.[elementName] ?? null).filter((layer) => !!layer);
	const variation = variationName ? getVariationStyle(globalStyles, blockName, variationName) ?? null : null;
	const contributions = [
		createContribution(pickLayerRootContribution(root), createSourceDescriptor("root")),
		...elementLayers.map((layer) => createContribution(pickLayerRootContribution(layer), createSourceDescriptor("element"))),
		block ? createContribution(pickLayerRootContribution(block), createSourceDescriptor("block")) : null,
		variation ? createContribution(pickLayerRootContribution(variation), createSourceDescriptor("blockVariation")) : null
	];
	if (!isDefaultBlockStyleState(selectedState)) contributions.push(createContribution(pickLayerRootContribution(getStateSlice(root, selectedState)), createSourceDescriptor("root")), ...elementLayers.map((layer) => createContribution(pickLayerRootContribution(getStateSlice(layer, selectedState)), createSourceDescriptor("element"))), block ? createContribution(pickLayerRootContribution(getStateSlice(block, selectedState)), createSourceDescriptor("block")) : null, variation ? createContribution(pickLayerRootContribution(getStateSlice(variation, selectedState)), createSourceDescriptor("blockVariation")) : null);
	const filteredContributions = contributions.filter(Boolean);
	if (filteredContributions.length === 0) return EMPTY_INHERITANCE;
	const sources = {};
	const value = filteredContributions.reduce((mergedValue, contribution) => deepMergeDroppingEmpties(mergedValue, contribution.styles, globalStyles, contribution.source, sources), {});
	dropNonCascadingRootLeaves(value, sources);
	resolveThemeFileBackgroundImage(value, globalStyles, globalStyles._links ?? null);
	return {
		value,
		sources
	};
}
function resolveStyle(globalStyles, context = {}) {
	const styleData = globalStyles?.styles;
	if (!styleData || typeof styleData !== "object") return computeResolvedStyle(globalStyles, context);
	let byLinks = memo.get(styleData);
	if (!byLinks) {
		byLinks = /* @__PURE__ */ new WeakMap();
		memo.set(styleData, byLinks);
	}
	const linksKey = globalStyles?._links ?? NO_LINKS;
	let inner = byLinks.get(linksKey);
	if (!inner) {
		inner = /* @__PURE__ */ new Map();
		byLinks.set(linksKey, inner);
	}
	const sliceKey = `${context.elements?.join(",") ?? ""}:${context.viewport ?? ""}:${context.pseudoState ?? ""}`;
	const key = (context.blockName || "") + "" + (context.variationName || "") + "" + sliceKey;
	if (inner.has(key)) return inner.get(key);
	const result = computeResolvedStyle(globalStyles, context);
	inner.set(key, result);
	return result;
}
var DEFAULT_STATE_VALUE, TREE_STRUCTURAL_KEYS, EMPTY_INHERITANCE, SOURCE_DESCRIPTORS, ATOMIC_OBJECT_KEYS, NON_CASCADING_ROOT_PREFIXES, NO_LINKS, memo;
function init_resolve_style() {
	return (init_resolve_style = __esmMin((() => {
		init_common();
		init_object();
		init_variation();
		DEFAULT_STATE_VALUE = "default";
		TREE_STRUCTURAL_KEYS = /* @__PURE__ */ new Set([
			"blocks",
			"variations",
			"css"
		]);
		EMPTY_INHERITANCE = Object.freeze({
			value: {},
			sources: {}
		});
		SOURCE_DESCRIPTORS = {
			root: { layer: "root" },
			element: { layer: "element" },
			block: { layer: "block" },
			blockVariation: { layer: "blockVariation" }
		};
		ATOMIC_OBJECT_KEYS = /* @__PURE__ */ new Set(["backgroundImage"]);
		NON_CASCADING_ROOT_PREFIXES = [
			"color.background",
			"color.gradient",
			"background",
			"spacing",
			"dimensions",
			"border",
			"shadow",
			"filter"
		];
		NO_LINKS = {};
		memo = /* @__PURE__ */ new WeakMap();
	})))();
}
//#endregion
//#region ../packages/global-styles-engine/build-module/lock-unlock.mjs
var lock, unlock;
function init_lock_unlock$1() {
	return (init_lock_unlock$1 = __esmMin((() => {
		init_implementation();
		({lock, unlock} = __dangerousOptInToUnstableAPIsOnlyForCoreModules("I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.", "@wordpress/global-styles-engine"));
	})))();
}
//#endregion
//#region ../packages/global-styles-engine/build-module/private-apis.mjs
var privateApis;
function init_private_apis() {
	return (init_private_apis = __esmMin((() => {
		init_viewport();
		init_duotone();
		init_resolve_style();
		init_variation();
		init_lock_unlock$1();
		privateApis = {};
		lock(privateApis, {
			getResponsiveMediaQueries,
			getViewportBreakpoints: getViewportBreakpoints$1,
			getViewportBreakpointValueInPixels,
			getDuotoneFilter,
			getDuotoneStylesheet,
			getDuotoneUnsetStylesheet,
			resolveStyle,
			getVariationStyle
		});
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/block-visibility/constants.ts
var BLOCK_VISIBILITY_VIEWPORTS, BLOCK_VISIBILITY_VIEWPORT_ENTRIES;
function init_constants$4() {
	return (init_constants$4 = __esmMin((() => {
		init_build_module$10();
		init_build_module$15();
		BLOCK_VISIBILITY_VIEWPORTS = {
			desktop: {
				label: __("Desktop"),
				icon: desktop_default,
				key: "desktop"
			},
			tablet: {
				label: __("Tablet"),
				icon: tablet_default,
				key: "tablet"
			},
			mobile: {
				label: __("Mobile"),
				icon: mobile_default,
				key: "mobile"
			}
		};
		BLOCK_VISIBILITY_VIEWPORT_ENTRIES = Object.entries(BLOCK_VISIBILITY_VIEWPORTS);
	})))();
}
//#endregion
//#region ../packages/block-editor/src/utils/object.ts
/**
* Immutably sets a value inside an object. Like `lodash#set`, but returning a
* new object. Treats nullish initial values as empty objects. Clones any
* nested objects. Supports arrays, too.
*
* @param object Object to set a value in.
* @param path   Path in the object to modify.
* @param value  New value to set.
* @return Cloned object with the new value set.
*/
function setImmutably(object, path, value) {
	const pathArray = Array.isArray(path) ? [...path] : [path];
	const result = Array.isArray(object) ? [...object] : { ...object };
	const leaf = pathArray.pop();
	let prev = result;
	for (const key of pathArray) {
		const lvl = prev[key];
		prev[key] = prev = Array.isArray(lvl) ? [...lvl] : { ...lvl };
	}
	prev[leaf] = value;
	return result;
}
/**
* Whether a value is a plain object, meaning a non-null object that is not an
* array.
*
* @param value Value to test.
*
* @return Whether the value is a plain object.
*/
function isPlainObject(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
var getValueFromObjectPath;
function init_object$1() {
	return (init_object$1 = __esmMin((() => {
		getValueFromObjectPath = (object, path, defaultValue) => {
			const arrayPath = Array.isArray(path) ? path : path.split(".");
			let value = object;
			arrayPath.forEach((fieldName) => {
				value = value?.[fieldName];
			});
			return value ?? defaultValue;
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/store/get-block-settings.ts
function getBlockSettings(state, clientId, ...paths) {
	const blockName = getBlockName(state, clientId);
	const candidates = [];
	if (clientId) {
		let id = clientId;
		do
			if (hasBlockSupport$1(getBlockName(state, id), "__experimentalSettings", false)) candidates.push(id);
		while (id = state.blocks.parents.get(id));
	}
	return paths.map((path) => {
		if (blockedPaths.includes(path)) {
			console.warn("Top level useSetting paths are disabled. Please use a subpath to query the information needed.");
			return;
		}
		let result = applyFilters("blockEditor.useSetting.before", void 0, path, clientId, blockName);
		if (void 0 !== result) return result;
		const normalizedPath = removeCustomPrefixes(path);
		for (const candidateClientId of candidates) {
			const candidateAtts = getBlockAttributes(state, candidateClientId);
			result = getValueFromObjectPath(candidateAtts.settings?.blocks?.[blockName], normalizedPath) ?? getValueFromObjectPath(candidateAtts.settings, normalizedPath);
			if (result !== void 0) break;
		}
		const settings = getSettings(state);
		if (result === void 0 && blockName) result = getValueFromObjectPath(settings.__experimentalFeatures?.blocks?.[blockName], normalizedPath);
		if (result === void 0) result = getValueFromObjectPath(settings.__experimentalFeatures, normalizedPath);
		if (result !== void 0) {
			if (__EXPERIMENTAL_PATHS_WITH_OVERRIDE[normalizedPath]) {
				const presets = result;
				return presets.custom ?? presets.theme ?? presets.default;
			}
			return result;
		}
		const deprecatedSettingsValue = deprecatedFlags[normalizedPath]?.(settings);
		if (deprecatedSettingsValue !== void 0) return deprecatedSettingsValue;
		return normalizedPath === "typography.dropCap" ? true : void 0;
	});
}
var blockedPaths, deprecatedFlags, prefixedFlags, removeCustomPrefixes;
function init_get_block_settings() {
	return (init_get_block_settings = __esmMin((() => {
		init_build_module$3();
		init_build_module$5();
		init_object$1();
		init_selectors$2();
		blockedPaths = [
			"color",
			"border",
			"dimensions",
			"typography",
			"spacing"
		];
		deprecatedFlags = {
			"color.palette": (settings) => settings.colors,
			"color.gradients": (settings) => settings.gradients,
			"color.custom": (settings) => settings.disableCustomColors === void 0 ? void 0 : !settings.disableCustomColors,
			"color.customGradient": (settings) => settings.disableCustomGradients === void 0 ? void 0 : !settings.disableCustomGradients,
			"typography.fontSizes": (settings) => settings.fontSizes,
			"typography.customFontSize": (settings) => settings.disableCustomFontSizes === void 0 ? void 0 : !settings.disableCustomFontSizes,
			"typography.lineHeight": (settings) => settings.enableCustomLineHeight,
			"spacing.units": (settings) => {
				if (settings.enableCustomUnits === void 0) return;
				if (settings.enableCustomUnits === true) return [
					"px",
					"em",
					"rem",
					"vh",
					"vw",
					"%"
				];
				return settings.enableCustomUnits;
			},
			"spacing.padding": (settings) => settings.enableCustomSpacing
		};
		prefixedFlags = {
			"border.customColor": "border.color",
			"border.customStyle": "border.style",
			"border.customWidth": "border.width",
			"typography.customFontStyle": "typography.fontStyle",
			"typography.customFontWeight": "typography.fontWeight",
			"typography.customLetterSpacing": "typography.letterSpacing",
			"typography.customTextDecorations": "typography.textDecoration",
			"typography.customTextTransforms": "typography.textTransform",
			"border.customRadius": "border.radius",
			"spacing.customMargin": "spacing.margin",
			"spacing.customPadding": "spacing.padding",
			"typography.customLineHeight": "typography.lineHeight"
		};
		removeCustomPrefixes = (path) => {
			return prefixedFlags[path] || path;
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/store/private-selectors.ts
var private_selectors_exports = /* @__PURE__ */ __exportAll({
	DEFAULT_BLOCK_STYLE_STATE: () => DEFAULT_BLOCK_STYLE_STATE,
	canHostEditableRoot: () => canHostEditableRoot,
	getAllPatterns: () => getAllPatterns,
	getBlockRemovalRules: () => getBlockRemovalRules,
	getBlockSettings: () => getBlockSettings,
	getBlockStyles: () => getBlockStyles,
	getBlockWithoutAttributes: () => getBlockWithoutAttributes,
	getClientIdWithClientIdsTree: () => getClientIdWithClientIdsTree,
	getClientIdsTree: () => getClientIdsTree,
	getClosestAllowedInsertionPoint: () => getClosestAllowedInsertionPoint,
	getClosestAllowedInsertionPointForPattern: () => getClosestAllowedInsertionPointForPattern,
	getContentLockingParent: () => getContentLockingParent,
	getEditedContentOnlySection: () => getEditedContentOnlySection,
	getEnabledBlockParents: () => getEnabledBlockParents,
	getEnabledClientIdsTree: () => getEnabledClientIdsTree,
	getExpandedBlock: () => getExpandedBlock,
	getInserterMediaCategories: () => getInserterMediaCategories,
	getInsertionPoint: () => getInsertionPoint,
	getLastFocus: () => getLastFocus,
	getLastInsertedBlocksClientIds: () => getLastInsertedBlocksClientIds,
	getListViewClientIdsTree: () => getListViewClientIdsTree,
	getListViewExpandRevision: () => getListViewExpandRevision,
	getParentSectionBlock: () => getParentSectionBlock,
	getPatternBySlug: () => getPatternBySlug,
	getRegisteredInserterMediaCategories: () => getRegisteredInserterMediaCategories,
	getRemovalPromptData: () => getRemovalPromptData,
	getRequestedInspectorTab: () => getRequestedInspectorTab,
	getReusableBlocks: () => getReusableBlocks,
	getSectionRootClientId: () => getSectionRootClientId,
	getStyleOverrides: () => getStyleOverrides,
	getStyleStateViewport: () => getStyleStateViewport,
	getViewportModalClientIds: () => getViewportModalClientIds,
	getZoomLevel: () => getZoomLevel,
	hasAllowedPatterns: () => hasAllowedPatterns,
	hasBlockSpotlight: () => hasBlockSpotlight,
	isBlockHiddenAnywhere: () => isBlockHiddenAnywhere,
	isBlockHiddenAtViewport: () => isBlockHiddenAtViewport,
	isBlockHiddenEverywhere: () => isBlockHiddenEverywhere,
	isBlockInterfaceHidden: () => isBlockInterfaceHidden,
	isBlockParentHiddenAtViewport: () => isBlockParentHiddenAtViewport,
	isBlockParentHiddenEverywhere: () => isBlockParentHiddenEverywhere,
	isBlockSubtreeDisabled: () => isBlockSubtreeDisabled,
	isContainerInsertableToInContentOnlyMode: () => isContainerInsertableToInContentOnlyMode,
	isDragging: () => isDragging,
	isEditLockedBlock: () => isEditLockedBlock,
	isListViewContentPanelOpen: () => isListViewContentPanelOpen,
	isListViewPanelOpened: () => isListViewPanelOpened,
	isLockedBlock: () => isLockedBlock,
	isMoveLockedBlock: () => isMoveLockedBlock,
	isRemoveLockedBlock: () => isRemoveLockedBlock,
	isResponsiveEditing: () => isResponsiveEditing,
	isSectionBlock: () => isSectionBlock,
	isSelectedBlockStyleStateShownOnCanvas: () => isSelectedBlockStyleStateShownOnCanvas,
	isSyncedBlock: () => isSyncedBlock,
	isWithinEditedContentOnlySection: () => isWithinEditedContentOnlySection,
	isZoomOut: () => isZoomOut,
	shouldRenderBlockListView: () => shouldRenderBlockListView
});
function isViewportAvailable(state, viewport) {
	if (viewport === BLOCK_VISIBILITY_VIEWPORTS.desktop.key) return true;
	return getViewportBreakpoints(getSettings(state)?.__experimentalFeatures?.viewport)[viewport] !== void 0;
}
/**
* Returns true if the block interface is hidden, or false otherwise.
*
* @param state Global application state.
*
* @return Whether the block toolbar is hidden.
*/
function isBlockInterfaceHidden(state) {
	return state.isBlockInterfaceHidden;
}
/**
* Gets the client ids of the last inserted blocks.
*
* @param state Global application state.
* @return Client Ids of the last inserted block(s).
*/
function getLastInsertedBlocksClientIds(state) {
	return state?.lastBlockInserted?.clientIds;
}
function getBlockWithoutAttributes(state, clientId) {
	return state.blocks.byClientId.get(clientId);
}
/**
* Determines if a container (clientId) allows insertion of blocks, considering contentOnly mode restrictions.
*
* @param state        Editor state.
* @param blockName    The block name to insert.
* @param rootClientId The client ID of the root container block.
* @return Whether the container allows insertion.
*/
function isContainerInsertableToInContentOnlyMode(state, blockName, rootClientId) {
	const isBlockContentBlock = isContentBlock$1(blockName);
	const rootBlockName = getBlockName(state, rootClientId);
	const isContainerContentBlock = isContentBlock$1(rootBlockName);
	return getSectionRootClientId(state) === rootClientId || isContainerContentBlock && isBlockContentBlock;
}
function getClientIdWithClientIdsTreeUnmemoized(state, clientId) {
	return {
		clientId,
		innerBlocks: getClientIdsTreeUnmemoized(state, clientId)
	};
}
function getClientIdsTreeUnmemoized(state, rootClientId = "") {
	return getBlockOrder(state, rootClientId).map((clientId) => getClientIdWithClientIdsTreeUnmemoized(state, clientId));
}
/**
* Returns a tree of block objects filtered by a block inclusion callback.
* Excluded blocks are replaced by any included descendants.
*
* @param state         Global application state.
* @param rootClientId  Optional root client ID of block list.
* @param includesBlock Callback that returns whether to include a block.
*
* @return Tree of block objects with only clientID and innerBlocks set.
*/
function getFilteredClientIdsTreeUnmemoized(state, rootClientId, includesBlock) {
	const blockOrder = getBlockOrder(state, rootClientId);
	const result = [];
	for (const clientId of blockOrder) {
		const innerBlocks = getFilteredClientIdsTreeUnmemoized(state, clientId, includesBlock);
		if (includesBlock(state, clientId)) result.push({
			clientId,
			innerBlocks
		});
		else result.push(...innerBlocks);
	}
	return result;
}
function getEnabledClientIdsTreeUnmemoized(state, rootClientId) {
	return getFilteredClientIdsTreeUnmemoized(state, rootClientId, (_state, clientId) => getBlockEditingMode(_state, clientId) !== "disabled");
}
/**
* Returns whether the nearest explicit block editing mode in the block's
* ancestry is disabled.
*
* @param state    Global application state.
* @param clientId The block client ID.
*
* @return Whether an explicit parent block editing mode disables this
*                   block.
*/
function hasExplicitDisabledParent(state, clientId) {
	let parent = state.blocks.parents.get(clientId);
	while (parent !== void 0) {
		const parentBlockEditingMode = state.blocks.blockEditingModes.get(parent);
		if (parentBlockEditingMode) return parentBlockEditingMode === "disabled";
		parent = state.blocks.parents.get(parent);
	}
	return false;
}
/**
* Returns the block tree displayed by List View.
*
* @param state        Global application state.
* @param rootClientId Optional root client ID of block list.
*
* @return Tree of block objects with only clientID and innerBlocks set.
*/
function getListViewClientIdsTreeUnmemoized(state, rootClientId) {
	return getFilteredClientIdsTreeUnmemoized(state, rootClientId, (_state, clientId) => {
		if (getBlockEditingMode(_state, clientId) !== "disabled") return true;
		const explicitBlockEditingMode = _state.blocks.blockEditingModes.get(clientId);
		if (explicitBlockEditingMode) return explicitBlockEditingMode !== "disabled";
		if (hasExplicitDisabledParent(_state, clientId)) return false;
		if (_state.editedContentOnlySection) {
			if (isWithinEditedContentOnlySection(_state, clientId)) return false;
			if (!getParentSectionBlock(_state, clientId)) return true;
			if (isContentBlock$1(getBlockName(_state, clientId))) return true;
		}
		return false;
	});
}
/**
* Selector that returns the data needed to display a prompt when certain
* blocks are removed, or `false` if no such prompt is requested.
*
* @param state Global application state.
*
* @return Data for removal prompt display, if any.
*/
function getRemovalPromptData(state) {
	return state.removalPromptData;
}
/**
* Returns true if removal prompt exists, or false otherwise.
*
* @param state Global application state.
*
* @return Whether removal prompt exists.
*/
function getBlockRemovalRules(state) {
	return state.blockRemovalRules;
}
/**
* Returns the registered inserter media categories through the public API.
*
* @param state Editor state.
*
* @return Inserter media categories.
*/
function getRegisteredInserterMediaCategories(state) {
	return state.registeredInserterMediaCategories;
}
/**
* Returns the element of the last element that had focus when focus left the editor canvas.
*
* @param state Block editor state.
*
* @return Element.
*/
function getLastFocus(state) {
	return state.lastFocus;
}
/**
* Returns true if the user is dragging anything, or false otherwise. It is possible for a
* user to be dragging data from outside of the editor, so this selector is separate from
* the `isDraggingBlocks` selector which only returns true if the user is dragging blocks.
*
* @param state Global application state.
*
* @return Whether user is dragging.
*/
function isDragging(state) {
	return state.isDragging;
}
/**
* Retrieves the expanded block from the state.
*
* @param state Block editor state.
*
* @return The client ID of the expanded block, if set.
*/
function getExpandedBlock(state) {
	return state.expandedBlock;
}
/**
* Checks whether a block meets the raw criteria to be a section block,
* without considering contextual factors like nesting or the edited
* content-only section. Used internally by `isSectionBlock` and
* `getParentSectionBlock` to avoid circular calls between them.
*
* @param state    Global application state.
* @param clientId Client Id of the block.
*
* @return Whether the block is a candidate section block.
*/
function isSectionBlockCandidate(state, clientId) {
	const blockName = getBlockName(state, clientId);
	if (blockName === "core/block") return true;
	const attributes = getBlockAttributes(state, clientId);
	const isTemplatePart = blockName === "core/template-part";
	const isIsolatedEditor = state.settings?.[isIsolatedEditorKey];
	const disableContentOnlyForUnsyncedPatterns = state.settings?.disableContentOnlyForUnsyncedPatterns;
	const disableContentOnlyForTemplateParts = state.settings?.disableContentOnlyForTemplateParts;
	if ((!disableContentOnlyForUnsyncedPatterns && attributes?.metadata?.patternName || isTemplatePart && !disableContentOnlyForTemplateParts) && !isIsolatedEditor) return true;
	const hasContentOnlyTemplateLock = getTemplateLock(state, clientId) === "contentOnly";
	const hasRootContentOnlyTemplateLock = getTemplateLock(state, getBlockRootClientId(state, clientId)) === "contentOnly";
	if (hasContentOnlyTemplateLock && !hasRootContentOnlyTemplateLock) return true;
	return false;
}
/**
* Returns whether the block is a contentOnly section.
*
* @param state    Global application state.
* @param clientId Client Id of the block.
*
* @return Whether the block is a contentOnly section.
*/
function isSectionBlock(state, clientId) {
	if (isWithinEditedContentOnlySection(state, clientId) || getParentSectionBlock(state, clientId)) return false;
	return isSectionBlockCandidate(state, clientId);
}
/**
* Returns whether the block is displayed as a synced block, meaning a synced
* pattern or a template part. A block that carries pattern metadata is
* displayed as a pattern instead, so it is not considered synced.
*
* @param state    Global application state.
* @param clientId Client Id of the block.
*
* @return Whether the block is displayed as a synced block.
*/
function isSyncedBlock(state, clientId) {
	const blockName = getBlockName(state, clientId);
	if (blockName !== "core/block" && blockName !== "core/template-part") return false;
	return !(getBlockAttributes(state, clientId)?.metadata?.patternName && isSectionBlock(state, clientId));
}
/**
* Retrieves the client ID of the block that is a contentOnly section but is
* currently being temporarily edited (contentOnly is deactivated).
*
* @param state Global application state.
*
* @return The client ID of the block being temporarily edited.
*/
function getEditedContentOnlySection(state) {
	return state.editedContentOnlySection;
}
function isWithinEditedContentOnlySection(state, clientId) {
	if (!state.editedContentOnlySection) return false;
	if (state.editedContentOnlySection === clientId) return true;
	let current = clientId;
	while (current = state.blocks.parents.get(current)) if (state.editedContentOnlySection === current) return true;
	return false;
}
/**
* Retrieves the client ID of the block which contains the blocks
* acting as "sections" in the editor. This is typically the "main content"
* of the template/post.
*
* @param state Editor state.
*
* @return The section root client ID or undefined if not set.
*/
function getSectionRootClientId(state) {
	return state.settings?.[sectionRootClientIdKey];
}
/**
* Returns whether the editor is considered zoomed out.
*
* @param state Global application state.
* @return Whether the editor is zoomed.
*/
function isZoomOut(state) {
	return state.zoomLevel === "auto-scaled" || state.zoomLevel < 100;
}
/**
* Returns whether the zoom level.
*
* @param state Global application state.
* @return Zoom level.
*/
function getZoomLevel(state) {
	return state.zoomLevel;
}
/**
* Finds the closest block where the block is allowed to be inserted.
*
* @param state    Editor state.
* @param name     Block name or names.
* @param clientId Default insertion point.
*
* @return clientID of the closest container when the block name can be inserted.
*/
function getClosestAllowedInsertionPoint(state, name, clientId = "") {
	const blockNames = Array.isArray(name) ? name : [name];
	const areBlockNamesAllowedInClientId = (id) => blockNames.every((currentName) => canInsertBlockType(state, currentName, id));
	if (areBlockNamesAllowedInClientId(clientId)) return clientId;
	return getFallbackInsertionRoots(state, clientId).find(areBlockNamesAllowedInClientId) ?? null;
}
function getClosestAllowedInsertionPointForPattern(state, pattern, clientId) {
	const { allowedBlockTypes } = getSettings(state);
	if (!checkAllowListRecursive(getGrammar(pattern), allowedBlockTypes)) return null;
	return getClosestAllowedInsertionPoint(state, getGrammar(pattern).map(({ blockName: name }) => name), clientId);
}
/**
* Where the point where the next block will be inserted into.
*
* @param state
* @return where the insertion point in the block editor is or null if none is set.
*/
function getInsertionPoint(state) {
	return state.insertionPoint;
}
/**
* Returns true if there is a spotlighted block.
*
* The spotlight is also active when a contentOnly section is being edited, the selector
* also returns true if this is the case.
*
* @param state Global application state.
*
* @return Whether the block is currently spotlighted.
*/
function hasBlockSpotlight(state) {
	return !!state.hasBlockSpotlight || !!state.editedContentOnlySection;
}
/**
* Returns whether a block is locked to prevent editing.
*
* This selector only reasons about block lock, not associated features
* like `blockEditingMode` that might prevent user modifications to a block.
* Currently there's also no way to prevent editing via `templateLock`.
*
* This distinction is important as this selector specifically drives the block lock UI
* that a user interacts with. `blockEditingModes` aren't included as a user can't change
* them.
*
* @param state    Global application state.
* @param clientId ClientId of the block.
*
* @return Whether the block is currently locked.
*/
function isEditLockedBlock(state, clientId) {
	return !!getBlockAttributes(state, clientId)?.lock?.edit;
}
/**
* Returns whether a block is locked to prevent moving.
*
* This selector only reasons about templateLock and block lock, not associated features
* like `blockEditingMode` that might prevent user modifications to a block.
*
* This distinction is important as this selector specifically drives the block lock UI
* that a user interacts with. `blockEditingModes` are excluded as a user can't change
* them.
*
* @param state    Global application state.
* @param clientId ClientId of the block.
*
* @return Whether the block is currently locked.
*/
function isMoveLockedBlock(state, clientId) {
	const attributes = getBlockAttributes(state, clientId);
	if (attributes?.lock?.move !== void 0) return !!attributes?.lock?.move;
	return getTemplateLock(state, getBlockRootClientId(state, clientId)) === "all";
}
/**
* Returns whether a block is locked to prevent removal.
*
* This selector only reasons about templateLock and block lock, not associated features
* like `blockEditingMode` that might prevent user modifications to a block.
*
* This distinction is important as this selector specifically drives the block lock UI
* that a user interacts with. `blockEditingModes` are excluded as a user can't change
* them.
*
* @param state    Global application state.
* @param clientId ClientId of the block.
*
* @return Whether the block is currently locked.
*/
function isRemoveLockedBlock(state, clientId) {
	const attributes = getBlockAttributes(state, clientId);
	if (attributes?.lock?.remove !== void 0) return !!attributes?.lock?.remove;
	const templateLock = getTemplateLock(state, getBlockRootClientId(state, clientId));
	return templateLock === "all" || templateLock === "insert";
}
/**
* Returns whether a block is locked.
*
* This selector only reasons about templateLock and block lock, not associated features
* like `blockEditingMode` that might prevent user modifications to a block.
*
* This distinction is important as this selector specifically drives the block lock UI
* that a user interacts with. `blockEditingModes` are excluded as a user can't change
* them.
*
* @param state    Global application state.
* @param clientId ClientId of the block.
*
* @return Whether the block is currently locked.
*/
function isLockedBlock(state, clientId) {
	return isEditLockedBlock(state, clientId) || isMoveLockedBlock(state, clientId) || isRemoveLockedBlock(state, clientId);
}
/**
* Returns whether the list view content panel popover is open.
*
* @param state Global application state.
*
* @return Whether the popover is open.
*/
function isListViewContentPanelOpen(state) {
	return state.listViewContentPanelOpen;
}
/**
* Returns whether a List View panel is opened.
*
* @param state    Global application state.
* @param clientId Client ID of the block.
*
* @return Whether the panel is opened.
*/
function isListViewPanelOpened(state, clientId) {
	if (state.openedListViewPanels?.allOpen) return true;
	return state.openedListViewPanels?.panels?.[clientId] === true;
}
/**
* Returns the List View expand revision number.
*
* This counter is used in the ListView component's key prop to force remounting.
*
* @param state Global application state.
*
* @return The expand revision number.
*/
function getListViewExpandRevision(state) {
	return state.listViewExpandRevision || 0;
}
/**
* Returns whether a block instance participates in List View-specific UI for
* its inner blocks.
*
* Intentionally private: this is the derived participation logic (block type
* `listView` support and the `core/navigation` special case) shared by the List
* View consumers. A `listView`-supporting block drops out when it has no inner
* blocks and its `allowedBlocks` (`[]` or `false`) permits no block: the nested
* List View panel would render no rows and no appender, so it is hidden rather
* than shown empty. This is a signal, not a guarantee — a child naming this
* block as its `parent` stays insertable regardless (see `canInsertBlockType`);
* that edge case is accepted to keep the check cheap. Keeping the read internal
* lets this computation evolve without a back-compat commitment.
*
* @param state    Global application state.
* @param clientId Client ID of the block.
*
* @return Whether the block participates in List View-specific UI.
*/
function shouldRenderBlockListView(state, clientId) {
	const blockName = getBlockName(state, clientId);
	if (blockName === "core/navigation") return true;
	if (!hasBlockSupport$1(blockName, "listView")) return false;
	const allowedBlocks = getBlockListSettings(state, clientId)?.allowedBlocks;
	return !(getBlockOrder(state, clientId).length === 0 && (allowedBlocks === false || Array.isArray(allowedBlocks) && allowedBlocks.length === 0));
}
/**
* Returns the client IDs for the viewport modal, or null if
* the modal is not open.
*
* @param state Global application state.
*
* @return Client IDs for the visibility modal, or null.
*/
function getViewportModalClientIds(state) {
	return state.viewportModalClientIds;
}
/**
* Returns the requested inspector tab state, if any.
*
* @param state Global application state.
*
* @return The requested tab state with tabName and options, or null if no request is pending.
*/
function getRequestedInspectorTab(state) {
	return state.requestedInspectorTab;
}
/**
* Returns the globally selected viewport style state. When set to a value other
* than 'default', block style edits in the inspector apply to that viewport.
*
* @param state Global application state.
*
* @return The selected viewport style state.
*/
function getStyleStateViewport(state) {
	return state.styleStateViewport ?? DEFAULT_BLOCK_STYLE_STATE.viewport;
}
/**
* Returns whether Responsive editing is enabled. When enabled, the device
* preview also drives which viewport block style edits are applied to.
*
* @param state Global application state.
*
* @return Whether Responsive editing is enabled.
*/
function isResponsiveEditing(state) {
	return state.isResponsiveEditing;
}
/**
* Returns whether the selected style state is shown on the canvas.
*
* @param state    Global application state.
* @param clientId The block client ID.
*
* @return Whether the selected style state is shown on the canvas.
*/
function isSelectedBlockStyleStateShownOnCanvas(state, clientId) {
	if (state.selectedBlockStyleState?.clientId !== clientId) return true;
	return state.selectedBlockStyleState.showStateOnCanvas ?? true;
}
var isContentBlock$1, editableRootKey$1, getViewportBreakpoints, isBlockSubtreeDisabled, getClientIdWithClientIdsTree, getClientIdsTree, canHostEditableRoot, getEnabledClientIdsTree, getListViewClientIdsTree, getEnabledBlockParents, getStyleOverrides, getInserterMediaCategories, hasAllowedPatterns, getPatternBySlug, getAllPatterns, EMPTY_ARRAY$1, getReusableBlocks, getContentLockingParent, getParentSectionBlock, getBlockStyles, isBlockHiddenAnywhere, isBlockHiddenEverywhere, isBlockParentHiddenEverywhere, isBlockHiddenAtViewport, isBlockParentHiddenAtViewport, DEFAULT_BLOCK_STYLE_STATE;
function init_private_selectors$1() {
	return (init_private_selectors$1 = __esmMin((() => {
		init_build_module$13();
		init_build_module$3();
		init_private_apis();
		init_selectors$2();
		init_utils$4();
		init_constants$2();
		init_lock_unlock$2();
		init_private_keys();
		init_constants$4();
		init_get_block_settings();
		({isContentBlock: isContentBlock$1, editableRootKey: editableRootKey$1} = unlock$2(privateApis$1));
		({getViewportBreakpoints} = unlock$2(privateApis));
		isBlockSubtreeDisabled = (state, clientId) => {
			const isChildSubtreeDisabled = (childClientId) => {
				return getBlockEditingMode(state, childClientId) === "disabled" && getBlockOrder(state, childClientId).every(isChildSubtreeDisabled);
			};
			return getBlockOrder(state, clientId).every(isChildSubtreeDisabled);
		};
		getClientIdWithClientIdsTree = createSelector(getClientIdWithClientIdsTreeUnmemoized, (state) => [state.blocks.order]);
		getClientIdsTree = createSelector(getClientIdsTreeUnmemoized, (state) => [state.blocks.order]);
		canHostEditableRoot = createSelector((state, clientId) => {
			if (!clientId || getBlockEditingMode(state, clientId) !== "default" || getBlockMode(state, clientId) !== "visual" || !getBlockType$1(getBlockName(state, clientId))?.[editableRootKey$1]) return false;
			const siblings = getBlockOrder(state, getBlockRootClientId(state, clientId));
			return siblings.length > 1 && siblings.every((siblingClientId) => getBlockEditingMode(state, siblingClientId) === "default");
		}, (state) => [
			state.blocks.order,
			state.blocks.parents,
			state.blocks.byClientId,
			state.blocks.blockEditingModes,
			state.derivedBlockEditingModes,
			state.blocksMode
		]);
		getEnabledClientIdsTree = createSelector(getEnabledClientIdsTreeUnmemoized, (state) => [
			state.blocks.order,
			state.derivedBlockEditingModes,
			state.blocks.blockEditingModes
		]);
		getListViewClientIdsTree = createSelector(getListViewClientIdsTreeUnmemoized, (state) => [
			state.blocks.order,
			state.derivedBlockEditingModes,
			state.blocks.blockEditingModes,
			state.blocks.parents,
			state.editedContentOnlySection,
			...state.editedContentOnlySection ? [
				state.blocks.byClientId,
				state.blocks.attributes,
				state.blockListSettings,
				state.settings
			] : []
		]);
		getEnabledBlockParents = createSelector((state, clientId, ascending = false) => {
			return getBlockParents(state, clientId, ascending).filter((parent) => getBlockEditingMode(state, parent) !== "disabled");
		}, (state) => [
			state.blocks.parents,
			state.blocks.blockEditingModes,
			state.settings.templateLock,
			state.blockListSettings
		]);
		getStyleOverrides = createSelector((state) => {
			const clientIdMap = getClientIdsWithDescendants(state).reduce((acc, clientId, index) => {
				acc[clientId] = index;
				return acc;
			}, {});
			return [...state.styleOverrides].sort((overrideA, overrideB) => {
				const [, { clientId: clientIdA }] = overrideA;
				const [, { clientId: clientIdB }] = overrideB;
				return (clientIdMap[clientIdA] ?? -1) - (clientIdMap[clientIdB] ?? -1);
			});
		}, (state) => [state.blocks.order, state.styleOverrides]);
		getInserterMediaCategories = createSelector((state) => {
			const { settings: { inserterMediaCategories, allowedMimeTypes, enableOpenverseMediaCategory }, registeredInserterMediaCategories } = state;
			if (!inserterMediaCategories && !registeredInserterMediaCategories.length || !allowedMimeTypes) return;
			const coreInserterMediaCategoriesNames = inserterMediaCategories?.map(({ name }) => name) || [];
			return [...inserterMediaCategories || [], ...(registeredInserterMediaCategories || []).filter(({ name }) => !coreInserterMediaCategoriesNames.includes(name))].filter((category) => {
				if (!enableOpenverseMediaCategory && category.name === "openverse") return false;
				return Object.values(allowedMimeTypes).some((mimeType) => mimeType.startsWith(`${category.mediaType}/`));
			});
		}, (state) => [
			state.settings.inserterMediaCategories,
			state.settings.allowedMimeTypes,
			state.settings.enableOpenverseMediaCategory,
			state.registeredInserterMediaCategories
		]);
		hasAllowedPatterns = createRegistrySelector((select) => createSelector((state, rootClientId = null) => {
			const { getAllPatterns } = unlock$2(select(STORE_NAME));
			const patterns = getAllPatterns();
			const { allowedBlockTypes } = getSettings(state);
			return patterns.some((pattern) => {
				const { inserter = true } = pattern;
				if (!inserter) return false;
				const grammar = getGrammar(pattern);
				return checkAllowListRecursive(grammar, allowedBlockTypes) && grammar.every(({ name: blockName }) => canInsertBlockType(state, blockName, rootClientId));
			});
		}, (state, rootClientId) => [...getAllPatternsDependants(select)(state), ...getInsertBlockTypeDependants(select)(state, rootClientId)]));
		getPatternBySlug = createRegistrySelector((select) => createSelector((state, patternName) => {
			if (patternName?.startsWith("core/block/")) {
				const _id = parseInt(patternName.slice(11), 10);
				const block = unlock$2(select(STORE_NAME)).getReusableBlocks().find(({ id }) => id === _id);
				if (!block) return null;
				return mapUserPattern(block, state.settings[userPatternCategoriesSelectKey]?.(select) ?? state.settings.__experimentalUserPatternCategories);
			}
			return [...state.settings.__experimentalBlockPatterns ?? [], ...state.settings[selectBlockPatternsKey]?.(select) ?? []].find(({ name }) => name === patternName);
		}, (state, patternName) => patternName?.startsWith("core/block/") ? [unlock$2(select(STORE_NAME)).getReusableBlocks(), state.settings.__experimentalReusableBlocks] : [state.settings.__experimentalBlockPatterns, state.settings[selectBlockPatternsKey]?.(select)]));
		getAllPatterns = createRegistrySelector((select) => createSelector((state) => {
			return [
				...unlock$2(select(STORE_NAME)).getReusableBlocks().map((userPattern) => mapUserPattern(userPattern, state.settings[userPatternCategoriesSelectKey]?.(select) ?? state.settings.__experimentalUserPatternCategories)),
				...state.settings.__experimentalBlockPatterns ?? [],
				...state.settings[selectBlockPatternsKey]?.(select) ?? []
			].filter((x, index, arr) => index === arr.findIndex((y) => x.name === y.name));
		}, getAllPatternsDependants(select)));
		EMPTY_ARRAY$1 = [];
		getReusableBlocks = createRegistrySelector((select) => (state) => {
			const reusableBlocksSelect = state.settings[reusableBlocksSelectKey];
			return (reusableBlocksSelect ? reusableBlocksSelect(select) : state.settings.__experimentalReusableBlocks) ?? EMPTY_ARRAY$1;
		});
		getContentLockingParent = (state, clientId) => {
			let current = clientId;
			let result;
			while (!result && (current = state.blocks.parents.get(current))) if (getTemplateLock(state, current) === "contentOnly") result = current;
			return result;
		};
		getParentSectionBlock = (state, clientId) => {
			if (isWithinEditedContentOnlySection(state, clientId)) return;
			let current = clientId;
			let result;
			while (current = state.blocks.parents.get(current)) if (isSectionBlockCandidate(state, current)) result = current;
			return result;
		};
		getBlockStyles = createSelector((state, clientIds) => clientIds.reduce((styles, clientId) => {
			styles[clientId] = state.blocks.attributes.get(clientId)?.style;
			return styles;
		}, {}), (state, clientIds) => [...clientIds.map((clientId) => state.blocks.attributes.get(clientId)?.style)]);
		isBlockHiddenAnywhere = (state, clientId) => {
			if (!hasBlockSupport$1(getBlockName(state, clientId), "visibility", true)) return false;
			const blockVisibility = state.blocks.attributes.get(clientId)?.metadata?.blockVisibility;
			if (blockVisibility === false) return true;
			if (typeof blockVisibility?.viewport === "object" && blockVisibility?.viewport !== null) return Object.values(BLOCK_VISIBILITY_VIEWPORTS).some((viewport) => isViewportAvailable(state, viewport.key) && blockVisibility?.viewport?.[viewport.key] === false);
			return false;
		};
		isBlockHiddenEverywhere = (state, clientId) => {
			if (!hasBlockSupport$1(getBlockName(state, clientId), "visibility", true)) return false;
			if (state.blocks.attributes.get(clientId)?.metadata?.blockVisibility === false) return true;
			return false;
		};
		isBlockParentHiddenEverywhere = (state, clientId) => {
			return getBlockParents(state, clientId).some((parentId) => isBlockHiddenEverywhere(state, parentId));
		};
		isBlockHiddenAtViewport = (state, clientId, viewport) => {
			if (isBlockHiddenEverywhere(state, clientId)) return true;
			const blockVisibilityViewport = (state.blocks.attributes.get(clientId)?.metadata?.blockVisibility)?.viewport;
			if (typeof blockVisibilityViewport === "object" && blockVisibilityViewport !== null && typeof viewport === "string") {
				const viewportKey = viewport.toLowerCase();
				return isViewportAvailable(state, viewportKey) && blockVisibilityViewport?.[viewportKey] === false;
			}
			return false;
		};
		isBlockParentHiddenAtViewport = (state, clientId, viewport) => {
			return getBlockParents(state, clientId).some((parentId) => isBlockHiddenAtViewport(state, parentId, viewport));
		};
		DEFAULT_BLOCK_STYLE_STATE = {
			viewport: "default",
			pseudo: "default"
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/inserter/block-patterns-tab/utils.js
function hasRegisteredCategory(pattern, allCategories) {
	if (!pattern.categories || !pattern.categories.length) return false;
	return pattern.categories.some((cat) => allCategories.some((category) => category.name === cat));
}
/**
* Returns the categories that contain at least one of the given patterns,
* sorted by label. An "Uncategorized" category is appended when some pattern
* belongs to no registered category.
*
* @param {Array} patterns      The patterns to derive the categories from.
* @param {Array} allCategories The registered pattern categories.
*
* @return {Array} The populated categories.
*/
function getPopulatedCategories(patterns, allCategories) {
	const categories = allCategories.filter((category) => patterns.some((pattern) => pattern.categories?.includes(category.name))).sort((a, b) => a.label.localeCompare(b.label));
	if (patterns.some((pattern) => !hasRegisteredCategory(pattern, allCategories)) && !categories.find((category) => category.name === "uncategorized")) categories.push({
		name: "uncategorized",
		label: __("Uncategorized")
	});
	return categories;
}
function isPatternFiltered(pattern, sourceFilter, syncFilter) {
	const isUserPattern = pattern.name.startsWith("core/block");
	const isDirectoryPattern = pattern.source === "core" || pattern.source?.startsWith("pattern-directory");
	if (sourceFilter === INSERTER_PATTERN_TYPES.theme && (isUserPattern || isDirectoryPattern)) return true;
	if (sourceFilter === INSERTER_PATTERN_TYPES.directory && (isUserPattern || !isDirectoryPattern)) return true;
	if (sourceFilter === INSERTER_PATTERN_TYPES.user && pattern.type !== INSERTER_PATTERN_TYPES.user) return true;
	if (syncFilter === INSERTER_SYNC_TYPES.full && pattern.syncStatus !== "") return true;
	if (syncFilter === INSERTER_SYNC_TYPES.unsynced && pattern.syncStatus !== "unsynced" && isUserPattern) return true;
	return false;
}
var INSERTER_PATTERN_TYPES, INSERTER_SYNC_TYPES, allPatternsCategory, myPatternsCategory, starterPatternsCategory;
function init_utils$3() {
	return (init_utils$3 = __esmMin((() => {
		init_build_module$10();
		INSERTER_PATTERN_TYPES = {
			user: "user",
			theme: "theme",
			directory: "directory"
		};
		INSERTER_SYNC_TYPES = {
			full: "fully",
			unsynced: "unsynced"
		};
		allPatternsCategory = {
			name: "allPatterns",
			label: _x("All", "patterns")
		};
		myPatternsCategory = {
			name: "myPatterns",
			label: __("My patterns")
		};
		starterPatternsCategory = {
			name: "core/starter-content",
			label: __("Starter content")
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/store/utils.ts
function mapUserPattern(userPattern, __experimentalUserPatternCategories = []) {
	return {
		name: `core/block/${userPattern.id}`,
		id: userPattern.id,
		type: INSERTER_PATTERN_TYPES.user,
		title: userPattern.title?.raw,
		categories: userPattern.wp_pattern_category?.map((catId) => {
			const category = __experimentalUserPatternCategories.find(({ id }) => id === catId);
			return category ? category.slug : catId;
		}),
		content: userPattern.content?.raw,
		syncStatus: userPattern.wp_pattern_sync_status
	};
}
function parsePattern(pattern) {
	const blocks = parse(pattern.content, { __unstableSkipMigrationLogs: true });
	if (blocks.length === 1) blocks[0].attributes = {
		...blocks[0].attributes,
		metadata: {
			...blocks[0].attributes.metadata || {},
			categories: pattern.categories,
			patternName: pattern.name,
			name: blocks[0].attributes.metadata?.name || pattern.title
		}
	};
	return {
		...pattern,
		blocks
	};
}
function getParsedPattern(pattern) {
	let parsedPattern = parsedPatternCache.get(pattern);
	if (!parsedPattern) {
		parsedPattern = parsePattern(pattern);
		parsedPatternCache.set(pattern, parsedPattern);
	}
	return parsedPattern;
}
function getGrammar(pattern) {
	let grammarMap = grammarMapCache.get(pattern);
	if (!grammarMap) {
		grammarMap = parse$2(pattern.content);
		grammarMap = grammarMap.filter((block) => block.blockName !== null);
		grammarMapCache.set(pattern, grammarMap);
	}
	return grammarMap;
}
/**
* Returns the containers above the root that a block can be inserted into
* instead, closest first: the section root for the top level, otherwise the
* ancestors.
*
* @param state        Editor state.
* @param rootClientId Root client ID.
*
* @return Client IDs of the fallback containers.
*/
function getFallbackInsertionRoots(state, rootClientId) {
	if (!rootClientId) {
		const sectionRootClientId = getSectionRootClientId(state);
		return sectionRootClientId ? [sectionRootClientId] : [];
	}
	const roots = [];
	let current = getBlockRootClientId(state, rootClientId);
	while (current !== null) {
		roots.push(current);
		current = getBlockRootClientId(state, current);
	}
	return roots;
}
var isFiltered, parsedPatternCache, grammarMapCache, checkAllowList, checkAllowListRecursive, getAllPatternsDependants, getInsertBlockTypeDependants;
function init_utils$4() {
	return (init_utils$4 = __esmMin((() => {
		init_build_module$3();
		init_build_module$1();
		init_private_keys();
		init_lock_unlock$2();
		init_constants$2();
		init_private_selectors$1();
		init_selectors$2();
		init_utils$3();
		isFiltered = Symbol("isFiltered");
		parsedPatternCache = /* @__PURE__ */ new WeakMap();
		grammarMapCache = /* @__PURE__ */ new WeakMap();
		checkAllowList = (list, item, defaultResult = null) => {
			if (typeof list === "boolean") return list;
			if (Array.isArray(list)) {
				if (list.includes("core/post-content") && item === null) return true;
				return list.includes(item);
			}
			return defaultResult;
		};
		checkAllowListRecursive = (blocks, allowedBlockTypes) => {
			if (typeof allowedBlockTypes === "boolean") return allowedBlockTypes;
			const blocksQueue = [...blocks];
			while (blocksQueue.length > 0) {
				const block = blocksQueue.shift();
				if (!checkAllowList(allowedBlockTypes, block.name || block.blockName, true)) return false;
				block.innerBlocks?.forEach((innerBlock) => {
					blocksQueue.push(innerBlock);
				});
			}
			return true;
		};
		getAllPatternsDependants = (select) => (state) => {
			return [
				state.settings.__experimentalBlockPatterns,
				state.settings[userPatternCategoriesSelectKey]?.(select) ?? state.settings.__experimentalUserPatternCategories,
				state.settings.__experimentalReusableBlocks,
				state.settings[selectBlockPatternsKey]?.(select),
				state.blockPatterns,
				unlock$2(select(STORE_NAME)).getReusableBlocks()
			];
		};
		getInsertBlockTypeDependants = () => (state, rootClientId) => {
			return [
				state.blockListSettings.get(rootClientId),
				state.blocks.byClientId.get(rootClientId),
				state.blocks.order.get(rootClientId || ""),
				state.settings.allowedBlockTypes,
				state.settings.templateLock,
				getBlockEditingMode(state, rootClientId),
				getSectionRootClientId(state),
				isSectionBlock(state, rootClientId),
				getParentSectionBlock(state, rootClientId)
			];
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/utils/sorting.ts
/**
* Mirrors the `>` operator for `Comparable` values: lexicographic when both
* are strings, numeric otherwise (an `undefined` operand is never greater).
*
* @param a Left-hand value.
* @param b Right-hand value.
* @return Whether `a` is greater than `b`.
*/
function isGreater(a, b) {
	if (typeof a === "string" && typeof b === "string") return a > b;
	return Number(a) > Number(b);
}
/**
* Order items by a certain key.
* Supports decorator functions that allow complex picking of a comparison field.
* Sorts in ascending order by default, but supports descending as well.
* Stable sort - maintains original order of equal items.
*
* @param items Items to order.
* @param field Field to order by.
* @param order Sorting order, `asc` or `desc`.
* @return Sorted items.
*/
function orderBy(items, field, order = "asc") {
	return items.toSorted(comparator(field, order));
}
var comparator;
function init_sorting() {
	return (init_sorting = __esmMin((() => {
		comparator = (field, order) => {
			return (a, b) => {
				let cmpA, cmpB;
				if (typeof field === "function") {
					cmpA = field(a);
					cmpB = field(b);
				} else {
					cmpA = a[field];
					cmpB = b[field];
				}
				if (isGreater(cmpA, cmpB)) return order === "asc" ? 1 : -1;
				else if (isGreater(cmpB, cmpA)) return order === "asc" ? -1 : 1;
				return 0;
			};
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/store/selectors.ts
var selectors_exports$1 = /* @__PURE__ */ __exportAll({
	__experimentalGetActiveBlockIdByBlockNames: () => __experimentalGetActiveBlockIdByBlockNames,
	__experimentalGetAllowedBlocks: () => __experimentalGetAllowedBlocks,
	__experimentalGetAllowedPatterns: () => __experimentalGetAllowedPatterns,
	__experimentalGetBlockListSettingsForBlocks: () => __experimentalGetBlockListSettingsForBlocks,
	__experimentalGetDirectInsertBlock: () => __experimentalGetDirectInsertBlock,
	__experimentalGetGlobalBlocksByName: () => __experimentalGetGlobalBlocksByName,
	__experimentalGetLastBlockAttributeChanges: () => __experimentalGetLastBlockAttributeChanges,
	__experimentalGetParsedPattern: () => __experimentalGetParsedPattern,
	__experimentalGetPatternTransformItems: () => __experimentalGetPatternTransformItems,
	__experimentalGetPatternsByBlockTypes: () => __experimentalGetPatternsByBlockTypes,
	__experimentalGetReusableBlockTitle: () => __experimentalGetReusableBlockTitle,
	__unstableGetBlockWithoutInnerBlocks: () => __unstableGetBlockWithoutInnerBlocks,
	__unstableGetClientIdWithClientIdsTree: () => __unstableGetClientIdWithClientIdsTree,
	__unstableGetClientIdsTree: () => __unstableGetClientIdsTree,
	__unstableGetContentLockingParent: () => __unstableGetContentLockingParent,
	__unstableGetLastBlockChangeHistoryMode: () => __unstableGetLastBlockChangeHistoryMode,
	__unstableGetSelectedBlocksWithPartialSelection: () => __unstableGetSelectedBlocksWithPartialSelection,
	__unstableGetTemporarilyEditingAsBlocks: () => __unstableGetTemporarilyEditingAsBlocks,
	__unstableGetVisibleBlocks: () => __unstableGetVisibleBlocks,
	__unstableHasActiveBlockOverlayActive: () => __unstableHasActiveBlockOverlayActive,
	__unstableIsFullySelected: () => __unstableIsFullySelected,
	__unstableIsLastBlockChangeIgnored: () => __unstableIsLastBlockChangeIgnored,
	__unstableIsSelectionCollapsed: () => __unstableIsSelectionCollapsed,
	__unstableIsSelectionMergeable: () => __unstableIsSelectionMergeable,
	__unstableIsWithinBlockOverlay: () => __unstableIsWithinBlockOverlay,
	__unstableSelectionHasUnmergeableBlock: () => __unstableSelectionHasUnmergeableBlock,
	areInnerBlocksControlled: () => areInnerBlocksControlled,
	canEditBlock: () => canEditBlock,
	canInsertBlockType: () => canInsertBlockType,
	canInsertBlocks: () => canInsertBlocks,
	canLockBlockType: () => canLockBlockType,
	canMoveBlock: () => canMoveBlock,
	canMoveBlocks: () => canMoveBlocks,
	canRemoveBlock: () => canRemoveBlock,
	canRemoveBlocks: () => canRemoveBlocks,
	didAutomaticChange: () => didAutomaticChange,
	getAdjacentBlockClientId: () => getAdjacentBlockClientId,
	getAllowedBlocks: () => getAllowedBlocks,
	getBlock: () => getBlock,
	getBlockAttributes: () => getBlockAttributes,
	getBlockCount: () => getBlockCount,
	getBlockEditingMode: () => getBlockEditingMode,
	getBlockHierarchyRootClientId: () => getBlockHierarchyRootClientId,
	getBlockIndex: () => getBlockIndex,
	getBlockInsertionPoint: () => getBlockInsertionPoint,
	getBlockListSettings: () => getBlockListSettings,
	getBlockMode: () => getBlockMode,
	getBlockName: () => getBlockName,
	getBlockNamesByClientId: () => getBlockNamesByClientId,
	getBlockOrder: () => getBlockOrder,
	getBlockParents: () => getBlockParents,
	getBlockParentsByBlockName: () => getBlockParentsByBlockName,
	getBlockRootClientId: () => getBlockRootClientId,
	getBlockSelectionEnd: () => getBlockSelectionEnd,
	getBlockSelectionStart: () => getBlockSelectionStart,
	getBlockTransformItems: () => getBlockTransformItems,
	getBlocks: () => getBlocks,
	getBlocksByClientId: () => getBlocksByClientId,
	getBlocksByName: () => getBlocksByName,
	getClientIdsOfDescendants: () => getClientIdsOfDescendants,
	getClientIdsWithDescendants: () => getClientIdsWithDescendants,
	getDirectInsertBlock: () => getDirectInsertBlock,
	getDraggedBlockClientIds: () => getDraggedBlockClientIds,
	getFirstMultiSelectedBlockClientId: () => getFirstMultiSelectedBlockClientId,
	getGlobalBlockCount: () => getGlobalBlockCount,
	getHoveredBlockClientId: () => getHoveredBlockClientId,
	getInserterItems: () => getInserterItems,
	getLastMultiSelectedBlockClientId: () => getLastMultiSelectedBlockClientId,
	getLowestCommonAncestorWithSelectedBlock: () => getLowestCommonAncestorWithSelectedBlock,
	getMultiSelectedBlockClientIds: () => getMultiSelectedBlockClientIds,
	getMultiSelectedBlocks: () => getMultiSelectedBlocks,
	getMultiSelectedBlocksEndClientId: () => getMultiSelectedBlocksEndClientId,
	getMultiSelectedBlocksStartClientId: () => getMultiSelectedBlocksStartClientId,
	getNextBlockClientId: () => getNextBlockClientId,
	getPatternsByBlockTypes: () => getPatternsByBlockTypes,
	getPreviousBlockClientId: () => getPreviousBlockClientId,
	getSelectedBlock: () => getSelectedBlock,
	getSelectedBlockClientId: () => getSelectedBlockClientId,
	getSelectedBlockClientIds: () => getSelectedBlockClientIds,
	getSelectedBlockCount: () => getSelectedBlockCount,
	getSelectedBlockStyleState: () => getSelectedBlockStyleState,
	getSelectedBlocksInitialCaretPosition: () => getSelectedBlocksInitialCaretPosition,
	getSelectionEnd: () => getSelectionEnd,
	getSelectionStart: () => getSelectionStart,
	getSettings: () => getSettings,
	getTemplate: () => getTemplate,
	getTemplateLock: () => getTemplateLock,
	hasBlockMovingClientId: () => hasBlockMovingClientId,
	hasDraggedInnerBlock: () => hasDraggedInnerBlock,
	hasInserterItems: () => hasInserterItems,
	hasMultiSelection: () => hasMultiSelection,
	hasSelectedBlock: () => hasSelectedBlock,
	hasSelectedBlockStyleState: () => hasSelectedBlockStyleState,
	hasSelectedInnerBlock: () => hasSelectedInnerBlock,
	isAncestorBeingDragged: () => isAncestorBeingDragged,
	isAncestorMultiSelected: () => isAncestorMultiSelected,
	isBlockBeingDragged: () => isBlockBeingDragged,
	isBlockHighlighted: () => isBlockHighlighted,
	isBlockInsertionPointVisible: () => isBlockInsertionPointVisible,
	isBlockMultiSelected: () => isBlockMultiSelected,
	isBlockSelected: () => isBlockSelected,
	isBlockValid: () => isBlockValid,
	isBlockVisible: () => isBlockVisible,
	isBlockWithinSelection: () => isBlockWithinSelection,
	isCaretWithinFormattedText: () => isCaretWithinFormattedText,
	isDraggingBlocks: () => isDraggingBlocks,
	isFirstMultiSelectedBlock: () => isFirstMultiSelectedBlock,
	isGroupable: () => isGroupable,
	isLastBlockChangePersistent: () => isLastBlockChangePersistent,
	isMultiSelecting: () => isMultiSelecting,
	isSelectionEnabled: () => isSelectionEnabled,
	isTyping: () => isTyping,
	isUngroupable: () => isUngroupable,
	isValidTemplate: () => isValidTemplate,
	wasBlockJustInserted: () => wasBlockJustInserted
});
/**
* Returns a block's name given its client ID, or null if no block exists with
* the client ID.
*
* @param {Object} state    Editor state.
* @param {string} clientId Block client ID.
*
* @return {string} Block name.
*/
function getBlockName(state, clientId) {
	const block = state.blocks.byClientId.get(clientId);
	return block ? block.name : null;
}
/**
* Returns whether a block is valid or not.
*
* @param {Object} state    Editor state.
* @param {string} clientId Block client ID.
*
* @return {boolean} Is Valid.
*/
function isBlockValid(state, clientId) {
	const block = state.blocks.byClientId.get(clientId);
	return !!block && block.isValid;
}
/**
* Returns a block's attributes given its client ID, or null if no block exists with
* the client ID.
*
* @param {Object} state    Editor state.
* @param {string} clientId Block client ID.
*
* @return {?Object} Block attributes.
*/
function getBlockAttributes(state, clientId) {
	if (!state.blocks.byClientId.get(clientId)) return null;
	return state.blocks.attributes.get(clientId);
}
/**
* Returns a block given its client ID. This is a parsed copy of the block,
* containing its `blockName`, `clientId`, and current `attributes` state. This
* is not the block's registration settings, which must be retrieved from the
* blocks module registration store.
*
* getBlock recurses through its inner blocks until all its children blocks have
* been retrieved, with one exception: the children of an "inner block
* controller" are not part of its tree, so `innerBlocks` usually comes back
* empty even though the block clearly has children in the editor. Never rely on
* a controller's `innerBlocks`; ask for its children directly:
*
* ```js
* getBlock( syncedPatternClientId ).innerBlocks; // Usually [].
* getBlocks( syncedPatternClientId ); // The pattern's blocks.
* ```
*
* A block is an inner block controller when its children belong to, and are
* synced with, an entity other than the one being edited. Synced patterns
* (`core/block`) and template parts (`core/template-part`) are the usual
* examples: each owns its own blocks, and editing them saves to that pattern or
* template part, not to the post or template it sits in. Leaving their children
* out of the tree is what keeps the two entities separate, so walking a
* template's blocks stops at a template part placed inside it.
*
* `areInnerBlocksControlled( clientId )` tells whether a block is such a
* controller.
*
* @param {Object} state    Editor state.
* @param {string} clientId Block client ID.
*
* @return {Object} Parsed block object.
*/
function getBlock(state, clientId) {
	if (!state.blocks.byClientId.has(clientId)) return null;
	return state.blocks.tree.get(clientId);
}
/**
* Returns all block objects for the current post being edited as an array in
* the order they appear in the post. Note that this will exclude child blocks
* of nested inner block controllers.
*
* @param {Object}  state        Editor state.
* @param {?string} rootClientId Optional root client ID of block list.
*
* @return {Object[]} Post blocks.
*/
function getBlocks(state, rootClientId) {
	const treeKey = !rootClientId || !areInnerBlocksControlled(state, rootClientId) ? rootClientId || "" : "controlled||" + rootClientId;
	return state.blocks.tree.get(treeKey)?.innerBlocks || EMPTY_ARRAY;
}
/**
* Returns a stripped down block object containing only its client ID,
* and its inner blocks' client IDs.
*
* @deprecated
*
* @param {Object} state    Editor state.
* @param {string} clientId Client ID of the block to get.
*
* @return {Object} Client IDs of the post blocks.
*/
function __unstableGetClientIdWithClientIdsTree(state, clientId) {
	deprecated("wp.data.select( 'core/block-editor' ).__unstableGetClientIdWithClientIdsTree", {
		since: "6.3",
		version: "6.5"
	});
	return getClientIdWithClientIdsTree(state, clientId);
}
/**
* Returns the block tree represented in the block-editor store from the
* given root, consisting of stripped down block objects containing only
* their client IDs, and their inner blocks' client IDs.
*
* @deprecated
*
* @param {Object}  state        Editor state.
* @param {?string} rootClientId Optional root client ID of block list.
*
* @return {Object[]} Client IDs of the post blocks.
*/
function __unstableGetClientIdsTree(state, rootClientId) {
	deprecated("wp.data.select( 'core/block-editor' ).__unstableGetClientIdsTree", {
		since: "6.3",
		version: "6.5"
	});
	return getClientIdsTree(state, rootClientId);
}
/**
* Returns all global blocks that match a blockName. Results include nested blocks.
*
* @deprecated
*
* @param {Object}   state     Global application state.
* @param {string[]} blockName Block name(s) for which clientIds are to be returned.
*
* @return {Array} Array of clientIds of blocks with name equal to blockName.
*/
function __experimentalGetGlobalBlocksByName(state, blockName) {
	deprecated("wp.data.select( 'core/block-editor' ).__experimentalGetGlobalBlocksByName", {
		since: "6.5",
		alternative: `wp.data.select( 'core/block-editor' ).getBlocksByName`
	});
	return getBlocksByName(state, blockName);
}
/**
* Returns the number of blocks currently present in the post.
*
* @param {Object}  state        Editor state.
* @param {?string} rootClientId Optional root client ID of block list.
*
* @return {number} Number of blocks in the post.
*/
function getBlockCount(state, rootClientId) {
	return getBlockOrder(state, rootClientId).length;
}
/**
* Returns the current selection start block client ID, attribute key and text
* offset.
*
* @param {Object} state Block editor state.
*
* @return {WPBlockSelection} Selection start information.
*/
function getSelectionStart(state) {
	return state.selection.selectionStart;
}
/**
* Returns the current selection end block client ID, attribute key and text
* offset.
*
* @param {Object} state Block editor state.
*
* @return {WPBlockSelection} Selection end information.
*/
function getSelectionEnd(state) {
	return state.selection.selectionEnd;
}
/**
* Returns the current block selection start. This value may be null, and it
* may represent either a singular block selection or multi-selection start.
* A selection is singular if its start and end match.
*
* @param {Object} state Global application state.
*
* @return {?string} Client ID of block selection start.
*/
function getBlockSelectionStart(state) {
	return state.selection.selectionStart.clientId;
}
/**
* Returns the current block selection end. This value may be null, and it
* may represent either a singular block selection or multi-selection end.
* A selection is singular if its start and end match.
*
* @param {Object} state Global application state.
*
* @return {?string} Client ID of block selection end.
*/
function getBlockSelectionEnd(state) {
	return state.selection.selectionEnd.clientId;
}
/**
* Returns the number of blocks currently selected in the post.
*
* @param {Object} state Global application state.
*
* @return {number} Number of blocks selected in the post.
*/
function getSelectedBlockCount(state) {
	const multiSelectedBlockCount = getMultiSelectedBlockClientIds(state).length;
	if (multiSelectedBlockCount) return multiSelectedBlockCount;
	return state.selection.selectionStart.clientId ? 1 : 0;
}
/**
* Returns true if there is a single selected block, or false otherwise.
*
* @param {Object} state Editor state.
*
* @return {boolean} Whether a single block is selected.
*/
function hasSelectedBlock(state) {
	const { selectionStart, selectionEnd } = state.selection;
	return !!selectionStart.clientId && selectionStart.clientId === selectionEnd.clientId;
}
/**
* Returns the currently selected block client ID, or null if there is no
* selected block.
*
* @param {Object} state Editor state.
*
* @return {?string} Selected block client ID.
*/
function getSelectedBlockClientId(state) {
	const { selectionStart, selectionEnd } = state.selection;
	const { clientId } = selectionStart;
	if (!clientId || clientId !== selectionEnd.clientId) return null;
	return clientId;
}
/**
* Returns the currently selected block, or null if there is no selected block.
*
* @param {Object} state Global application state.
*
* @example
*
*```js
* import { select } from '@wordpress/data'
* import { store as blockEditorStore } from '@wordpress/block-editor'
*
* // Set initial active block client ID
* let activeBlockClientId = null
*
* const getActiveBlockData = () => {
* 	const activeBlock = select(blockEditorStore).getSelectedBlock()
*
* 	if (activeBlock && activeBlock.clientId !== activeBlockClientId) {
* 		activeBlockClientId = activeBlock.clientId
*
* 		// Get active block name and attributes
* 		const activeBlockName = activeBlock.name
* 		const activeBlockAttributes = activeBlock.attributes
*
* 		// Log active block name and attributes
* 		console.log(activeBlockName, activeBlockAttributes)
* 		}
* 	}
*
* 	// Subscribe to changes in the editor
* 	// wp.data.subscribe(() => {
* 		// getActiveBlockData()
* 	// })
*
* 	// Update active block data on click
* 	// onclick="getActiveBlockData()"
*```
*
* @return {?Object} Selected block.
*/
function getSelectedBlock(state) {
	const clientId = getSelectedBlockClientId(state);
	return clientId ? getBlock(state, clientId) : null;
}
/**
* Given a block client ID, returns the root block from which the block is
* nested, an empty string for top-level blocks, or null if the block does not
* exist.
*
* @param {Object} state    Editor state.
* @param {string} clientId Block from which to find root client ID.
*
* @return {?string} Root client ID, if exists
*/
function getBlockRootClientId(state, clientId) {
	return state.blocks.parents.get(clientId) ?? null;
}
/**
* Given a block client ID, returns the root of the hierarchy from which the block is nested, return the block itself for root level blocks.
*
* @param {Object} state    Editor state.
* @param {string} clientId Block from which to find root client ID.
*
* @return {string} Root client ID
*/
function getBlockHierarchyRootClientId(state, clientId) {
	let current = clientId;
	let parent;
	do {
		parent = current;
		current = state.blocks.parents.get(current);
	} while (current);
	return parent;
}
/**
* Given a block client ID, returns the lowest common ancestor with selected client ID.
*
* @param {Object} state    Editor state.
* @param {string} clientId Block from which to find common ancestor client ID.
*
* @return {string} Common ancestor client ID or undefined
*/
function getLowestCommonAncestorWithSelectedBlock(state, clientId) {
	const selectedId = getSelectedBlockClientId(state);
	const clientParents = [...getBlockParents(state, clientId), clientId];
	const selectedParents = [...getBlockParents(state, selectedId), selectedId];
	let lowestCommonAncestor;
	const maxDepth = Math.min(clientParents.length, selectedParents.length);
	for (let index = 0; index < maxDepth; index++) if (clientParents[index] === selectedParents[index]) lowestCommonAncestor = clientParents[index];
	else break;
	return lowestCommonAncestor;
}
/**
* Returns the client ID of the block adjacent one at the given reference
* startClientId and modifier directionality. Defaults start startClientId to
* the selected block, and direction as next block. Returns null if there is no
* adjacent block.
*
* @param {Object}  state         Editor state.
* @param {?string} startClientId Optional client ID of block from which to
*                                search.
* @param {?number} modifier      Directionality multiplier (1 next, -1
*                                previous).
*
* @return {?string} Return the client ID of the block, or null if none exists.
*/
function getAdjacentBlockClientId(state, startClientId, modifier = 1) {
	if (startClientId === void 0) startClientId = getSelectedBlockClientId(state);
	if (startClientId === void 0) {
		if (modifier < 0) startClientId = getFirstMultiSelectedBlockClientId(state);
		else startClientId = getLastMultiSelectedBlockClientId(state);
	}
	if (!startClientId) return null;
	const rootClientId = getBlockRootClientId(state, startClientId);
	if (rootClientId === null) return null;
	const { order } = state.blocks;
	const orderSet = order.get(rootClientId);
	const nextIndex = orderSet.indexOf(startClientId) + 1 * modifier;
	if (nextIndex < 0) return null;
	if (nextIndex === orderSet.length) return null;
	return orderSet[nextIndex];
}
/**
* Returns the previous block's client ID from the given reference start ID.
* Defaults start to the selected block. Returns null if there is no previous
* block.
*
* @param {Object}  state         Editor state.
* @param {?string} startClientId Optional client ID of block from which to
*                                search.
*
* @return {?string} Adjacent block's client ID, or null if none exists.
*/
function getPreviousBlockClientId(state, startClientId) {
	return getAdjacentBlockClientId(state, startClientId, -1);
}
/**
* Returns the next block's client ID from the given reference start ID.
* Defaults start to the selected block. Returns null if there is no next
* block.
*
* @param {Object}  state         Editor state.
* @param {?string} startClientId Optional client ID of block from which to
*                                search.
*
* @return {?string} Adjacent block's client ID, or null if none exists.
*/
function getNextBlockClientId(state, startClientId) {
	return getAdjacentBlockClientId(state, startClientId, 1);
}
/**
* Returns the initial caret position for the selected block.
* This position is to used to position the caret properly when the selected block changes.
* If the current block is not a RichText, having initial position set to 0 means "focus block"
*
* @param {Object} state Global application state.
*
* @return {0|-1|null} Initial position.
*/
function getSelectedBlocksInitialCaretPosition(state) {
	return state.initialPosition;
}
/**
* Returns the ancestor client ID when one selection endpoint is nested
* inside the other, or undefined for any other selection shape. Such a
* selection has no sibling range; the ancestor contains all of it.
*
* @param state Editor state.
* @return The ancestor client ID, if any.
*/
function getSelectionNestingAncestor(state) {
	const { selectionStart, selectionEnd } = state.selection;
	const startClientId = selectionStart.clientId;
	const endClientId = selectionEnd.clientId;
	if (!startClientId || !endClientId || startClientId === endClientId) return;
	if (getBlockParents(state, endClientId).includes(startClientId)) return startClientId;
	if (getBlockParents(state, startClientId).includes(endClientId)) return endClientId;
}
/**
* Returns the current multi-selection set of block client IDs, or an empty
* array if there is no multi-selection.
*
* @param {Object} state Editor state.
*
* @return {Array} Multi-selected block client IDs.
*/
function getMultiSelectedBlockClientIds(state) {
	const { selectionStart, selectionEnd } = state.selection;
	if (selectionStart.clientId === selectionEnd.clientId) return EMPTY_ARRAY;
	return getSelectedBlockClientIds(state);
}
/**
* Returns the client ID of the first block in the multi-selection set, or null
* if there is no multi-selection.
*
* @param {Object} state Editor state.
*
* @return {?string} First block client ID in the multi-selection set.
*/
function getFirstMultiSelectedBlockClientId(state) {
	return getMultiSelectedBlockClientIds(state)[0] || null;
}
/**
* Returns the client ID of the last block in the multi-selection set, or null
* if there is no multi-selection.
*
* @param {Object} state Editor state.
*
* @return {?string} Last block client ID in the multi-selection set.
*/
function getLastMultiSelectedBlockClientId(state) {
	const selectedClientIds = getMultiSelectedBlockClientIds(state);
	return selectedClientIds[selectedClientIds.length - 1] || null;
}
/**
* Returns true if a multi-selection exists, and the block corresponding to the
* specified client ID is the first block of the multi-selection set, or false
* otherwise.
*
* @param {Object} state    Editor state.
* @param {string} clientId Block client ID.
*
* @return {boolean} Whether block is first in multi-selection.
*/
function isFirstMultiSelectedBlock(state, clientId) {
	return getFirstMultiSelectedBlockClientId(state) === clientId;
}
/**
* Returns true if the client ID occurs within the block multi-selection, or
* false otherwise.
*
* @param {Object} state    Editor state.
* @param {string} clientId Block client ID.
*
* @return {boolean} Whether block is in multi-selection set.
*/
function isBlockMultiSelected(state, clientId) {
	return getMultiSelectedBlockClientIds(state).indexOf(clientId) !== -1;
}
/**
* Returns the client ID of the block which begins the multi-selection set, or
* null if there is no multi-selection.
*
* This is not necessarily the first client ID in the selection.
*
* @see getFirstMultiSelectedBlockClientId
*
* @param {Object} state Editor state.
*
* @return {?string} Client ID of block beginning multi-selection.
*/
function getMultiSelectedBlocksStartClientId(state) {
	const { selectionStart, selectionEnd } = state.selection;
	if (selectionStart.clientId === selectionEnd.clientId) return null;
	return selectionStart.clientId || null;
}
/**
* Returns the client ID of the block which ends the multi-selection set, or
* null if there is no multi-selection.
*
* This is not necessarily the last client ID in the selection.
*
* @see getLastMultiSelectedBlockClientId
*
* @param {Object} state Editor state.
*
* @return {?string} Client ID of block ending multi-selection.
*/
function getMultiSelectedBlocksEndClientId(state) {
	const { selectionStart, selectionEnd } = state.selection;
	if (selectionStart.clientId === selectionEnd.clientId) return null;
	return selectionEnd.clientId || null;
}
/**
* Returns true if the selection is not partial.
*
* @param {Object} state Editor state.
*
* @return {boolean} Whether the selection is mergeable.
*/
function __unstableIsFullySelected(state) {
	if (getSelectionNestingAncestor(state)) return true;
	const selectionAnchor = getSelectionStart(state);
	const selectionFocus = getSelectionEnd(state);
	return !selectionAnchor.attributeKey && !selectionFocus.attributeKey && typeof selectionAnchor.offset === "undefined" && typeof selectionFocus.offset === "undefined";
}
/**
* Returns true if the selection is collapsed.
*
* @param {Object} state Editor state.
*
* @return {boolean} Whether the selection is collapsed.
*/
function __unstableIsSelectionCollapsed(state) {
	const selectionAnchor = getSelectionStart(state);
	const selectionFocus = getSelectionEnd(state);
	return !!selectionAnchor && !!selectionFocus && selectionAnchor.clientId === selectionFocus.clientId && selectionAnchor.attributeKey === selectionFocus.attributeKey && selectionAnchor.offset === selectionFocus.offset;
}
function __unstableSelectionHasUnmergeableBlock(state) {
	return getSelectedBlockClientIds(state).some((clientId) => {
		return !getBlockType$1(getBlockName(state, clientId)).merge;
	});
}
/**
* Check whether the selection is mergeable.
*
* @param {Object}  state     Editor state.
* @param {boolean} isForward Whether to merge forwards.
*
* @return {boolean} Whether the selection is mergeable.
*/
function __unstableIsSelectionMergeable(state, isForward) {
	const selectionAnchor = getSelectionStart(state);
	const selectionFocus = getSelectionEnd(state);
	if (selectionAnchor.clientId === selectionFocus.clientId) return false;
	if (!selectionAnchor.attributeKey || !selectionFocus.attributeKey || typeof selectionAnchor.offset === "undefined" || typeof selectionFocus.offset === "undefined") return false;
	const anchorRootClientId = getBlockRootClientId(state, selectionAnchor.clientId);
	if (anchorRootClientId !== getBlockRootClientId(state, selectionFocus.clientId)) return false;
	const blockOrder = getBlockOrder(state, anchorRootClientId);
	const anchorIndex = blockOrder.indexOf(selectionAnchor.clientId);
	const focusIndex = blockOrder.indexOf(selectionFocus.clientId);
	let selectionStart, selectionEnd;
	if (anchorIndex > focusIndex) {
		selectionStart = selectionFocus;
		selectionEnd = selectionAnchor;
	} else {
		selectionStart = selectionAnchor;
		selectionEnd = selectionFocus;
	}
	const targetBlockClientId = isForward ? selectionEnd.clientId : selectionStart.clientId;
	const blockToMergeClientId = isForward ? selectionStart.clientId : selectionEnd.clientId;
	const targetBlockName = getBlockName(state, targetBlockClientId);
	if (!getBlockType$1(targetBlockName).merge) return false;
	const blockToMerge = getBlock(state, blockToMergeClientId);
	if (blockToMerge.name === targetBlockName) return true;
	const blocksToMerge = switchToBlockType(blockToMerge, targetBlockName);
	return blocksToMerge && blocksToMerge.length;
}
/**
* Returns an array containing all block client IDs in the editor in the order
* they appear. Optionally accepts a root client ID of the block list for which
* the order should be returned, defaulting to the top-level block order.
*
* @param {Object}  state        Editor state.
* @param {?string} rootClientId Optional root client ID of block list.
*
* @return {Array} Ordered client IDs of editor blocks.
*/
function getBlockOrder(state, rootClientId) {
	return state.blocks.order.get(rootClientId || "") || EMPTY_ARRAY;
}
/**
* Returns the index at which the block corresponding to the specified client
* ID occurs within the block order, or `-1` if the block does not exist.
*
* @param {Object} state    Editor state.
* @param {string} clientId Block client ID.
*
* @return {number} Index at which block exists in order.
*/
function getBlockIndex(state, clientId) {
	return getBlockOrder(state, getBlockRootClientId(state, clientId)).indexOf(clientId);
}
/**
* Returns true if the block corresponding to the specified client ID is
* currently selected and no multi-selection exists, or false otherwise.
*
* @param {Object} state    Editor state.
* @param {string} clientId Block client ID.
*
* @return {boolean} Whether block is selected and multi-selection exists.
*/
function isBlockSelected(state, clientId) {
	const { selectionStart, selectionEnd } = state.selection;
	if (selectionStart.clientId !== selectionEnd.clientId) return false;
	return !!clientId && selectionStart.clientId === clientId;
}
/**
* Returns true if one of the block's inner blocks is selected.
*
* @param {Object}  state    Editor state.
* @param {string}  clientId Block client ID.
* @param {boolean} deep     Perform a deep check.
*
* @return {boolean} Whether the block has an inner block selected
*/
function hasSelectedInnerBlock(state, clientId, deep = false) {
	if (!clientId) return false;
	const selectedBlockClientIds = getSelectedBlockClientIds(state);
	if (!selectedBlockClientIds.length) return false;
	if (deep) return getSelectedBlockAncestors(state).has(clientId);
	return selectedBlockClientIds.some((id) => getBlockRootClientId(state, id) === clientId);
}
/**
* Returns true if one of the block's inner blocks is dragged.
*
* @param {Object}  state    Editor state.
* @param {string}  clientId Block client ID.
* @param {boolean} deep     Perform a deep check.
*
* @return {boolean} Whether the block has an inner block dragged
*/
function hasDraggedInnerBlock(state, clientId, deep = false) {
	return getBlockOrder(state, clientId).some((innerClientId) => isBlockBeingDragged(state, innerClientId) || deep && hasDraggedInnerBlock(state, innerClientId, deep));
}
/**
* Returns true if the block corresponding to the specified client ID is
* currently selected but isn't the last of the selected blocks. Here "last"
* refers to the block sequence in the document, _not_ the sequence of
* multi-selection, which is why `state.selectionEnd` isn't used.
*
* @param {Object} state    Editor state.
* @param {string} clientId Block client ID.
*
* @return {boolean} Whether block is selected and not the last in the
*                   selection.
*/
function isBlockWithinSelection(state, clientId) {
	if (!clientId) return false;
	const clientIds = getMultiSelectedBlockClientIds(state);
	const index = clientIds.indexOf(clientId);
	return index > -1 && index < clientIds.length - 1;
}
/**
* Returns true if a multi-selection has been made, or false otherwise.
*
* @param {Object} state Editor state.
*
* @return {boolean} Whether multi-selection has been made.
*/
function hasMultiSelection(state) {
	const { selectionStart, selectionEnd } = state.selection;
	return selectionStart.clientId !== selectionEnd.clientId;
}
/**
* Whether in the process of multi-selecting or not. This flag is only true
* while the multi-selection is being selected (by mouse move), and is false
* once the multi-selection has been settled.
*
* @see hasMultiSelection
*
* @param {Object} state Global application state.
*
* @return {boolean} True if multi-selecting, false if not.
*/
function isMultiSelecting(state) {
	return state.isMultiSelecting;
}
/**
* Selector that returns if multi-selection is enabled or not.
*
* @param {Object} state Global application state.
*
* @return {boolean} True if it should be possible to multi-select blocks, false if multi-selection is disabled.
*/
function isSelectionEnabled(state) {
	return state.isSelectionEnabled;
}
/**
* Returns the block's editing mode, defaulting to "visual" if not explicitly
* assigned.
*
* @param {Object} state    Editor state.
* @param {string} clientId Block client ID.
*
* @return {Object} Block editing mode.
*/
function getBlockMode(state, clientId) {
	return state.blocksMode[clientId] || "visual";
}
/**
* Returns true if the user is typing, or false otherwise.
*
* @param {Object} state Global application state.
*
* @return {boolean} Whether user is typing.
*/
function isTyping(state) {
	return state.isTyping;
}
/**
* Returns true if the user is dragging blocks, or false otherwise.
*
* @param {Object} state Global application state.
*
* @return {boolean} Whether user is dragging blocks.
*/
function isDraggingBlocks(state) {
	return !!state.draggedBlocks.length;
}
/**
* Returns the client ids of any blocks being directly dragged.
*
* This does not include children of a parent being dragged.
*
* @param {Object} state Global application state.
*
* @return {string[]} Array of dragged block client ids.
*/
function getDraggedBlockClientIds(state) {
	return state.draggedBlocks;
}
/**
* Returns whether the block is being dragged.
*
* Only returns true if the block is being directly dragged,
* not if the block is a child of a parent being dragged.
* See `isAncestorBeingDragged` for child blocks.
*
* @param {Object} state    Global application state.
* @param {string} clientId Client id for block to check.
*
* @return {boolean} Whether the block is being dragged.
*/
function isBlockBeingDragged(state, clientId) {
	return state.draggedBlocks.includes(clientId);
}
/**
* Returns whether a parent/ancestor of the block is being dragged.
*
* @param {Object} state    Global application state.
* @param {string} clientId Client id for block to check.
*
* @return {boolean} Whether the block's ancestor is being dragged.
*/
function isAncestorBeingDragged(state, clientId) {
	if (!isDraggingBlocks(state)) return false;
	return getBlockParents(state, clientId).some((parentClientId) => isBlockBeingDragged(state, parentClientId));
}
/**
* Returns true if the caret is within formatted text, or false otherwise.
*
* @deprecated
*
* @return {boolean} Whether the caret is within formatted text.
*/
function isCaretWithinFormattedText() {
	deprecated("wp.data.select( \"core/block-editor\" ).isCaretWithinFormattedText", {
		since: "6.1",
		version: "6.3"
	});
	return false;
}
/**
* Returns true if the block insertion point is visible.
*
* @param {Object} state Global application state.
*
* @return {?boolean} Whether the insertion point is visible or not.
*/
function isBlockInsertionPointVisible(state) {
	return state.insertionCue !== null;
}
/**
* Returns whether the blocks matches the template or not.
*
* @param {boolean} state
* @return {?boolean} Whether the template is valid or not.
*/
function isValidTemplate(state) {
	return state.template.isValid;
}
/**
* Returns the defined block template
*
* @param {boolean} state
*
* @return {?Array} Block Template.
*/
function getTemplate(state) {
	return state.settings.template;
}
/**
* Returns the defined block template lock. Optionally accepts a root block
* client ID as context, otherwise defaulting to the global context.
*
* @param {Object}  state        Editor state.
* @param {?string} rootClientId Optional block root client ID.
*
* @return {string|false} Block Template Lock
*/
function getTemplateLock(state, rootClientId) {
	if (!rootClientId) return state.settings.templateLock ?? false;
	const blockListTemplateLock = getBlockListSettings(state, rootClientId)?.templateLock;
	if (blockListTemplateLock === "contentOnly" && state.editedContentOnlySection === rootClientId) return false;
	return blockListTemplateLock ?? false;
}
/**
* Determines if the given blocks are allowed to be inserted into the block
* list.
*
* @param {Object}   state        Editor state.
* @param {string[]} clientIds    The block client IDs to be inserted.
* @param {?string}  rootClientId Optional root client ID of block list.
*
* @return {boolean} Whether the given blocks are allowed to be inserted.
*/
function canInsertBlocks(state, clientIds, rootClientId = null) {
	return clientIds.every((id) => canInsertBlockType(state, getBlockName(state, id), rootClientId));
}
/**
* Returns whether the given root block keeps its markup as static inner
* content (the Custom HTML block). Its inner blocks are fixed at their
* positions within the static markup: they can be edited in place, but not
* moved or removed, and no blocks can be inserted alongside them. This only
* applies to the direct children; deeper descendants are unaffected.
*
* @param state        Editor state.
* @param rootClientId Root block client ID.
*
* @return Whether the root block uses static inner content.
*/
function isInnerContentRoot(state, rootClientId) {
	return !!rootClientId && getBlockName(state, rootClientId) === "core/html";
}
/**
* Determines if the given block is allowed to be deleted.
*
* @param {Object} state    Editor state.
* @param {string} clientId The block client Id.
*
* @return {boolean} Whether the given block is allowed to be removed.
*/
function canRemoveBlock(state, clientId) {
	if (state.settings.isPreviewMode) return false;
	if (isInnerContentRoot(state, getBlockRootClientId(state, clientId))) return false;
	const attributes = getBlockAttributes(state, clientId);
	if (attributes === null) return true;
	if (attributes.lock?.remove !== void 0) return !attributes.lock.remove;
	const rootClientId = getBlockRootClientId(state, clientId);
	const rootTemplateLock = getTemplateLock(state, rootClientId);
	if (rootTemplateLock && rootTemplateLock !== "contentOnly") return false;
	const isParentSectionBlock = !!isSectionBlock(state, rootClientId);
	const sectionClientId = isParentSectionBlock ? rootClientId : getParentSectionBlock(state, rootClientId);
	const isWithinSection = !!sectionClientId;
	const isContentRoleBlock = isContentBlock(getBlockName(state, clientId));
	if (isWithinSection && !isContentRoleBlock) return false;
	if (isWithinSection && getBlockName(state, sectionClientId) === "core/block") return false;
	const rootBlockEditingMode = getBlockEditingMode(state, rootClientId);
	const blockName = getBlockName(state, clientId);
	const defaultBlockName = getDefaultBlockName$1();
	if (isWithinSection && (isParentSectionBlock || blockName === defaultBlockName || rootBlockEditingMode === "contentOnly") && !isContainerInsertableToInContentOnlyMode(state, getBlockName(state, clientId), rootClientId)) {
		if (blockName === defaultBlockName) {
			if (getBlockOrder(state, rootClientId).filter((id) => getBlockName(state, id) === defaultBlockName).length > 1) return true;
			return false;
		}
		return false;
	}
	return rootBlockEditingMode !== "disabled";
}
/**
* Determines if the given blocks are allowed to be removed.
*
* @param {Object}   state     Editor state.
* @param {string[]} clientIds The block client IDs to be removed.
*
* @return {boolean} Whether the given blocks are allowed to be removed.
*/
function canRemoveBlocks(state, clientIds) {
	return clientIds.every((clientId) => canRemoveBlock(state, clientId));
}
/**
* Determines if the given block is allowed to be moved.
*
* @param {Object} state    Editor state.
* @param {string} clientId The block client Id.
*
* @return {boolean} Whether the given block is allowed to be moved.
*/
function canMoveBlock(state, clientId) {
	if (state.settings.isPreviewMode) return false;
	if (isInnerContentRoot(state, getBlockRootClientId(state, clientId))) return false;
	const attributes = getBlockAttributes(state, clientId);
	if (attributes === null) return true;
	if (attributes.lock?.move !== void 0) return !attributes.lock.move;
	const rootClientId = getBlockRootClientId(state, clientId);
	if (getTemplateLock(state, rootClientId) === "all") return false;
	const isBlockWithinSection = !!getParentSectionBlock(state, clientId);
	const isContentRoleBlock = isContentBlock(getBlockName(state, clientId));
	if (isBlockWithinSection && !isContentRoleBlock) return false;
	const isParentSectionBlock = !!isSectionBlock(state, rootClientId);
	const rootBlockEditingMode = getBlockEditingMode(state, rootClientId);
	if (isBlockWithinSection && (isParentSectionBlock || rootBlockEditingMode === "contentOnly") && !isContainerInsertableToInContentOnlyMode(state, getBlockName(state, clientId), rootClientId)) return false;
	return getBlockEditingMode(state, rootClientId) !== "disabled";
}
/**
* Determines if the given blocks are allowed to be moved.
*
* @param {Object} state     Editor state.
* @param {string} clientIds The block client IDs to be moved.
*
* @return {boolean} Whether the given blocks are allowed to be moved.
*/
function canMoveBlocks(state, clientIds) {
	return clientIds.every((clientId) => canMoveBlock(state, clientId));
}
/**
* Determines if the given block is allowed to be edited.
*
* @param {Object} state    Editor state.
* @param {string} clientId The block client Id.
*
* @return {boolean} Whether the given block is allowed to be edited.
*/
function canEditBlock(state, clientId) {
	if (state.settings.isPreviewMode) return false;
	const attributes = getBlockAttributes(state, clientId);
	if (attributes === null) return true;
	const { lock } = attributes;
	return !lock?.edit;
}
/**
* Determines if the given block type can be locked/unlocked by a user.
*
* @param {Object}          state      Editor state.
* @param {(string|Object)} nameOrType Block name or type object.
*
* @return {boolean} Whether a given block type can be locked/unlocked.
*/
function canLockBlockType(state, nameOrType) {
	if (state.settings.isPreviewMode) return false;
	if (!hasBlockSupport$1(nameOrType, "lock", true)) return false;
	return !!state.settings?.canLockBlocks;
}
/**
* Returns information about how recently and frequently a block has been inserted.
*
* @param state Global application state.
* @param id    A string which identifies the insert, e.g. 'core/block/12'
*
* @return An object containing `time` which is when the last
*         insert occurred as a UNIX epoch, and `count` which is
*         the number of inserts that have occurred.
*/
function getInsertUsage(state, id) {
	return state.preferences.insertUsage?.[id] ?? null;
}
/**
* Returns a copy of the item carrying `isAllowedInCurrentRoot`, cached per
* item and flag so it is the same object for every root.
*
* @param item                   Inserter item.
* @param isAllowedInCurrentRoot Whether the item can be inserted in the root.
*
* @return The flagged item.
*/
function withIsAllowedInCurrentRoot(item, isAllowedInCurrentRoot) {
	let variants = itemsWithRootFlag.get(item);
	if (!variants) {
		variants = /* @__PURE__ */ new Map();
		itemsWithRootFlag.set(item, variants);
	}
	if (!variants.has(isAllowedInCurrentRoot)) variants.set(isAllowedInCurrentRoot, {
		...item,
		isAllowedInCurrentRoot
	});
	return variants.get(isAllowedInCurrentRoot);
}
/**
* Returns the block to be directly inserted by the block appender.
*
* @param    {Object}  state        Editor state.
* @param    {?string} rootClientId Optional root client ID of block list.
*
* @return {WPDirectInsertBlock|undefined} The block type to be directly inserted.
*
* @typedef {Object} WPDirectInsertBlock
* @property {string}  name         The type of block.
* @property {?Object} attributes   Attributes to pass to the newly created block.
*/
function getDirectInsertBlock(state, rootClientId = null) {
	if (!rootClientId) return;
	const { defaultBlock, directInsert } = state.blockListSettings.get(rootClientId) ?? {};
	if (!defaultBlock || !directInsert) return;
	return defaultBlock;
}
function __experimentalGetDirectInsertBlock(state, rootClientId = null) {
	deprecated("wp.data.select( \"core/block-editor\" ).__experimentalGetDirectInsertBlock", {
		alternative: "wp.data.select( \"core/block-editor\" ).getDirectInsertBlock",
		since: "6.3",
		version: "6.4"
	});
	return getDirectInsertBlock(state, rootClientId);
}
function enhancePatternWithParsedBlocks(pattern) {
	let enhancedPattern = patternsWithParsedBlocks.get(pattern);
	if (!enhancedPattern) {
		enhancedPattern = {
			...pattern,
			get blocks() {
				return getParsedPattern(pattern).blocks;
			}
		};
		patternsWithParsedBlocks.set(pattern, enhancedPattern);
	}
	return enhancedPattern;
}
/**
* Returns the Block List settings of a block, if any exist.
*
* @param {Object}  state    Editor state.
* @param {?string} clientId Block client ID.
*
* @return {?Object} Block settings of the block if set.
*/
function getBlockListSettings(state, clientId) {
	return state.blockListSettings.get(clientId);
}
/**
* Returns the editor settings.
*
* @param {Object} state Editor state.
*
* @return {Object} The editor settings object.
*/
function getSettings(state) {
	return state.settings;
}
/**
* Returns true if the most recent block change is be considered persistent, or
* false otherwise. A persistent change is one committed by BlockEditorProvider
* via its `onChange` callback, in addition to `onInput`.
*
* @param {Object} state Block editor state.
*
* @return {boolean} Whether the most recent block change was persistent.
*/
function isLastBlockChangePersistent(state) {
	return state.blocks.isPersistentChange;
}
/**
* Returns how the most recent block change interacts with undo history.
*
* - `persistent` changes create a new undo level.
* - `merge` changes do not create a new undo level, but may merge into the
*    prior stack item history.
* - `ignore` changes should never be captured by undo history.
*
* @param {Object} state Block editor state.
*
* @return {'persistent'|'merge'|'ignore'} Block change history behavior.
*/
function __unstableGetLastBlockChangeHistoryMode(state) {
	if (state.blocks.lastBlockChangeHistoryMode) return state.blocks.lastBlockChangeHistoryMode;
	return state.blocks.isPersistentChange === false ? "merge" : "persistent";
}
/**
* Returns true if the most recent block change is be considered ignored, or
* false otherwise. An ignored change is one not to be committed by
* BlockEditorProvider, neither via `onChange` nor `onInput`.
*
* @param {Object} state Block editor state.
*
* @return {boolean} Whether the most recent block change was ignored.
*/
function __unstableIsLastBlockChangeIgnored(state) {
	return state.blocks.isIgnoredChange;
}
/**
* Returns the block attributes changed as a result of the last dispatched
* action.
*
* @param {Object} state Block editor state.
*
* @return {Object<string,Object>} Subsets of block attributes changed, keyed
*                                 by block client ID.
*/
function __experimentalGetLastBlockAttributeChanges(state) {
	return state.lastBlockAttributesChange;
}
/**
* Returns whether block moving mode is enabled.
*
* @deprecated
*/
function hasBlockMovingClientId() {
	deprecated("wp.data.select( \"core/block-editor\" ).hasBlockMovingClientId", {
		since: "6.7",
		hint: "Block moving mode feature has been removed"
	});
	return false;
}
/**
* Returns true if the last change was an automatic change, false otherwise.
*
* @param {Object} state Global application state.
*
* @return {boolean} Whether the last change was automatic.
*/
function didAutomaticChange(state) {
	return !!state.automaticChangeStatus;
}
/**
* Returns true if the current highlighted block matches the block clientId.
*
* @param {Object} state    Global application state.
* @param {string} clientId The block to check.
*
* @return {boolean} Whether the block is currently highlighted.
*/
function isBlockHighlighted(state, clientId) {
	return state.highlightedBlock === clientId;
}
/**
* Checks if a given block has controlled inner blocks.
*
* @param {Object} state    Global application state.
* @param {string} clientId The block to check.
*
* @return {boolean} True if the block has controlled inner blocks.
*/
function areInnerBlocksControlled(state, clientId) {
	return state.blocks.controlledInnerBlocks.has(clientId);
}
/**
* Tells if the block with the passed clientId was just inserted.
*
* @param {Object}  state    Global application state.
* @param {Object}  clientId Client Id of the block.
* @param {?string} source   Optional insertion source of the block.
* @return {boolean} True if the block matches the last block inserted from the specified source.
*/
function wasBlockJustInserted(state, clientId, source) {
	const { lastBlockInserted } = state;
	return lastBlockInserted.clientIds?.includes(clientId) && lastBlockInserted.source === source;
}
/**
* Tells if the block is visible on the canvas or not.
*
* @param {Object} state    Global application state.
* @param {Object} clientId Client Id of the block.
* @return {boolean} True if the block is visible.
*/
function isBlockVisible(state, clientId) {
	return state.blockVisibility?.[clientId] ?? true;
}
/**
* Returns the currently hovered block.
*
* @deprecated
*/
function getHoveredBlockClientId() {
	deprecated("wp.data.select( 'core/block-editor' ).getHoveredBlockClientId", {
		since: "6.9",
		version: "7.1"
	});
}
function __unstableHasActiveBlockOverlayActive(state, clientId) {
	if (getBlockEditingMode(state, clientId) !== "default") return false;
	if (!canEditBlock(state, clientId)) return true;
	if (isZoomOut(state)) {
		const sectionRootClientId = getSectionRootClientId(state);
		if (sectionRootClientId) {
			if (getBlockOrder(state, sectionRootClientId)?.includes(clientId)) return true;
		} else if (clientId && !getBlockRootClientId(state, clientId)) return true;
	}
	return (hasBlockSupport$1(getBlockName(state, clientId), "__experimentalDisableBlockOverlay", false) ? false : areInnerBlocksControlled(state, clientId)) && !isBlockSelected(state, clientId) && !hasSelectedInnerBlock(state, clientId, true);
}
function __unstableIsWithinBlockOverlay(state, clientId) {
	let parent = state.blocks.parents.get(clientId);
	while (!!parent) {
		if (__unstableHasActiveBlockOverlayActive(state, parent)) return true;
		parent = state.blocks.parents.get(parent);
	}
	return false;
}
/**
* @typedef {import('../components/block-editing-mode').BlockEditingMode} BlockEditingMode
*/
/**
* Returns the block editing mode for a given block.
*
* The mode can be one of three options:
*
* - `'disabled'`: Prevents editing the block entirely, i.e. it cannot be
*   selected.
* - `'contentOnly'`: Hides all non-content UI, e.g. auxiliary controls in the
*   toolbar, the block movers, block settings.
* - `'default'`: Allows editing the block as normal.
*
* Blocks can set a mode using the `useBlockEditingMode` hook.
*
* The mode is inherited by all of the block's inner blocks, unless they have
* their own mode.
*
* A template lock can also set a mode. If the template lock is `'contentOnly'`,
* the block's mode is overridden to `'contentOnly'` if the block has a content
* role attribute, or `'disabled'` otherwise.
*
* @see useBlockEditingMode
*
* @param {Object} state    Global application state.
* @param {string} clientId The block client ID, or `''` for the root container.
*
* @return {BlockEditingMode} The block editing mode. One of `'disabled'`,
*                            `'contentOnly'`, or `'default'`.
*/
function getBlockEditingMode(state, clientId = "") {
	if (clientId === null) clientId = "";
	if (state.derivedBlockEditingModes?.has(clientId)) return state.derivedBlockEditingModes.get(clientId);
	if (state.blocks.blockEditingModes.has(clientId)) return state.blocks.blockEditingModes.get(clientId);
	return "default";
}
/**
* DO-NOT-USE in production.
* This selector is created for internal/experimental only usage and may be
* removed anytime without any warning, causing breakage on any plugin or theme invoking it.
*
* @deprecated
*
* @param {Object} state Global application state.
*/
function __unstableGetTemporarilyEditingAsBlocks(state) {
	deprecated("wp.data.select( 'core/block-editor' ).__unstableGetTemporarilyEditingAsBlocks", {
		since: "6.1",
		version: "6.7"
	});
	return getEditedContentOnlySection(state);
}
/**
* Returns whether a non-default style state is selected for a block.
*
* @param {Object} state    Global application state.
* @param {string} clientId The block client ID.
*
* @return {boolean} Whether a non-default block style state is selected.
*/
function hasSelectedBlockStyleState(state, clientId) {
	const selectedState = getSelectedBlockStyleState(state, clientId);
	return selectedState.viewport !== DEFAULT_BLOCK_STYLE_STATE.viewport || selectedState.pseudo !== DEFAULT_BLOCK_STYLE_STATE.pseudo;
}
var isContentBlock, MILLISECONDS_PER_HOUR, MILLISECONDS_PER_DAY, MILLISECONDS_PER_WEEK, EMPTY_ARRAY, EMPTY_SET, DEFAULT_INSERTER_OPTIONS, __unstableGetBlockWithoutInnerBlocks, getClientIdsOfDescendants, getClientIdsWithDescendants, getGlobalBlockCount, getBlocksByName, getBlocksByClientId, getBlockNamesByClientId, getBlockParents, getBlockParentsByBlockName, getSelectedBlockClientIds, getMultiSelectedBlocks, isAncestorMultiSelected, __unstableGetSelectedBlocksWithPartialSelection, getSelectedBlockAncestors, getBlockInsertionPoint, isBlockVisibleInTheInserter, canInsertBlockTypeUnmemoized, canInsertBlockType, canIncludeBlockTypeInInserter, getItemFromVariation, calculateFrecency, buildBlockTypeItem, buildBlockVariationItem, buildReusableBlockInserterItem, getBlockVariationsRaw, getBlockTypeInserterItems, getReusableBlockInserterItems, itemsWithRootFlag, getInserterItems, getBlockTransformItems, hasInserterItems, getAllowedBlocks, __experimentalGetAllowedBlocks, __experimentalGetParsedPattern, getAllowedPatternsDependants, patternsWithParsedBlocks, __experimentalGetAllowedPatterns, getPatternsByBlockTypes, __experimentalGetPatternsByBlockTypes, __experimentalGetPatternTransformItems, __experimentalGetBlockListSettingsForBlocks, __experimentalGetReusableBlockTitle, __experimentalGetActiveBlockIdByBlockNames, __unstableGetVisibleBlocks, isUngroupable, isGroupable, __unstableGetContentLockingParent, getSelectedBlockStyleState;
function init_selectors$2() {
	return (init_selectors$2 = __esmMin((() => {
		init_build_module$3();
		init_build_module$5();
		init_build_module$15();
		init_build_module();
		init_build_module$6();
		init_build_module$13();
		init_utils$4();
		init_sorting();
		init_constants$2();
		init_lock_unlock$2();
		init_private_selectors$1();
		({isContentBlock} = unlock$2(privateApis$1));
		MILLISECONDS_PER_HOUR = 36e5;
		MILLISECONDS_PER_DAY = 864e5;
		MILLISECONDS_PER_WEEK = 6048e5;
		EMPTY_ARRAY = [];
		EMPTY_SET = /* @__PURE__ */ new Set();
		DEFAULT_INSERTER_OPTIONS = { [isFiltered]: true };
		__unstableGetBlockWithoutInnerBlocks = createSelector((state, clientId) => {
			const block = state.blocks.byClientId.get(clientId);
			if (!block) return null;
			return {
				...block,
				attributes: getBlockAttributes(state, clientId)
			};
		}, (state, clientId) => [state.blocks.byClientId.get(clientId), state.blocks.attributes.get(clientId)]);
		getClientIdsOfDescendants = createSelector((state, rootIds) => {
			rootIds = Array.isArray(rootIds) ? [...rootIds] : [rootIds];
			const ids = [];
			for (const rootId of rootIds) {
				const order = state.blocks.order.get(rootId);
				if (order) ids.push(...order);
			}
			let index = 0;
			while (index < ids.length) {
				const id = ids[index];
				const order = state.blocks.order.get(id);
				if (order) ids.splice(index + 1, 0, ...order);
				index++;
			}
			return ids;
		}, (state) => [state.blocks.order]);
		getClientIdsWithDescendants = (state) => getClientIdsOfDescendants(state, "");
		getGlobalBlockCount = createSelector((state, blockName) => {
			const clientIds = getClientIdsWithDescendants(state);
			if (!blockName) return clientIds.length;
			let count = 0;
			for (const clientId of clientIds) if (state.blocks.byClientId.get(clientId).name === blockName) count++;
			return count;
		}, (state) => [state.blocks.order, state.blocks.byClientId]);
		getBlocksByName = createSelector((state, blockName) => {
			if (!blockName) return EMPTY_ARRAY;
			const blockNames = Array.isArray(blockName) ? blockName : [blockName];
			const foundBlocks = getClientIdsWithDescendants(state).filter((clientId) => {
				const block = state.blocks.byClientId.get(clientId);
				return blockNames.includes(block.name);
			});
			return foundBlocks.length > 0 ? foundBlocks : EMPTY_ARRAY;
		}, (state) => [state.blocks.order, state.blocks.byClientId]);
		getBlocksByClientId = createSelector((state, clientIds) => (Array.isArray(clientIds) ? clientIds : [clientIds]).map((clientId) => getBlock(state, clientId)), (state, clientIds) => (Array.isArray(clientIds) ? clientIds : [clientIds]).map((clientId) => state.blocks.tree.get(clientId)));
		getBlockNamesByClientId = createSelector((state, clientIds) => getBlocksByClientId(state, clientIds).filter(Boolean).map((block) => block.name), (state, clientIds) => getBlocksByClientId(state, clientIds));
		getBlockParents = createSelector((state, clientId, ascending = false) => {
			const parents = [];
			let current = clientId;
			while (current = state.blocks.parents.get(current)) parents.push(current);
			if (!parents.length) return EMPTY_ARRAY;
			return ascending ? parents : parents.reverse();
		}, (state) => [state.blocks.parents]);
		getBlockParentsByBlockName = createSelector((state, clientId, blockName, ascending = false) => {
			const parents = getBlockParents(state, clientId, ascending);
			const hasName = Array.isArray(blockName) ? (name) => blockName.includes(name) : (name) => blockName === name;
			return parents.filter((id) => hasName(getBlockName(state, id)));
		}, (state) => [state.blocks.parents]);
		getSelectedBlockClientIds = createSelector((state) => {
			const { selectionStart, selectionEnd } = state.selection;
			if (!selectionStart.clientId || !selectionEnd.clientId) return EMPTY_ARRAY;
			if (selectionStart.clientId === selectionEnd.clientId) return [selectionStart.clientId];
			const nestingAncestorClientId = getSelectionNestingAncestor(state);
			if (nestingAncestorClientId) return [nestingAncestorClientId];
			const rootClientId = getBlockRootClientId(state, selectionStart.clientId);
			if (rootClientId === null) return EMPTY_ARRAY;
			const blockOrder = getBlockOrder(state, rootClientId);
			const startIndex = blockOrder.indexOf(selectionStart.clientId);
			const endIndex = blockOrder.indexOf(selectionEnd.clientId);
			if (startIndex > endIndex) return blockOrder.slice(endIndex, startIndex + 1);
			return blockOrder.slice(startIndex, endIndex + 1);
		}, (state) => [
			state.blocks.order,
			state.blocks.parents,
			state.selection.selectionStart.clientId,
			state.selection.selectionEnd.clientId
		]);
		getMultiSelectedBlocks = createSelector((state) => {
			const multiSelectedBlockClientIds = getMultiSelectedBlockClientIds(state);
			if (!multiSelectedBlockClientIds.length) return EMPTY_ARRAY;
			return multiSelectedBlockClientIds.map((clientId) => getBlock(state, clientId));
		}, (state) => [
			...getSelectedBlockClientIds.getDependants(state),
			state.blocks.byClientId,
			state.blocks.order,
			state.blocks.attributes
		]);
		isAncestorMultiSelected = createSelector((state, clientId) => {
			let ancestorClientId = clientId;
			let isMultiSelected = false;
			while (ancestorClientId && !isMultiSelected) {
				ancestorClientId = getBlockRootClientId(state, ancestorClientId);
				isMultiSelected = isBlockMultiSelected(state, ancestorClientId);
			}
			return isMultiSelected;
		}, (state) => [
			state.blocks.order,
			state.selection.selectionStart.clientId,
			state.selection.selectionEnd.clientId
		]);
		__unstableGetSelectedBlocksWithPartialSelection = (state) => {
			const selectionAnchor = getSelectionStart(state);
			const selectionFocus = getSelectionEnd(state);
			if (selectionAnchor.clientId === selectionFocus.clientId) return EMPTY_ARRAY;
			if (!selectionAnchor.attributeKey || !selectionFocus.attributeKey || typeof selectionAnchor.offset === "undefined" || typeof selectionFocus.offset === "undefined") return EMPTY_ARRAY;
			const anchorRootClientId = getBlockRootClientId(state, selectionAnchor.clientId);
			if (anchorRootClientId !== getBlockRootClientId(state, selectionFocus.clientId)) return EMPTY_ARRAY;
			const blockOrder = getBlockOrder(state, anchorRootClientId);
			const [selectionStart, selectionEnd] = blockOrder.indexOf(selectionAnchor.clientId) > blockOrder.indexOf(selectionFocus.clientId) ? [selectionFocus, selectionAnchor] : [selectionAnchor, selectionFocus];
			const blockA = getBlock(state, selectionStart.clientId);
			const blockB = getBlock(state, selectionEnd.clientId);
			const htmlA = blockA.attributes[selectionStart.attributeKey];
			const htmlB = blockB.attributes[selectionEnd.attributeKey];
			let valueA = create({ html: htmlA });
			let valueB = create({ html: htmlB });
			valueA = remove(valueA, 0, selectionStart.offset);
			valueB = remove(valueB, selectionEnd.offset, valueB.text.length);
			return [{
				...blockA,
				attributes: {
					...blockA.attributes,
					[selectionStart.attributeKey]: toHTMLString({ value: valueA })
				}
			}, {
				...blockB,
				attributes: {
					...blockB.attributes,
					[selectionEnd.attributeKey]: toHTMLString({ value: valueB })
				}
			}];
		};
		getSelectedBlockAncestors = createSelector((state) => {
			const ancestors = /* @__PURE__ */ new Set();
			for (const clientId of getSelectedBlockClientIds(state)) {
				let current = clientId;
				while (current = state.blocks.parents.get(current)) {
					if (ancestors.has(current)) break;
					ancestors.add(current);
				}
			}
			return ancestors;
		}, (state) => getSelectedBlockClientIds.getDependants(state));
		getBlockInsertionPoint = createSelector((state) => {
			let rootClientId, index;
			const { insertionCue, selection: { selectionEnd } } = state;
			if (insertionCue !== null) return insertionCue;
			const { clientId } = selectionEnd;
			if (clientId) {
				rootClientId = getBlockRootClientId(state, clientId) || void 0;
				index = getBlockIndex(state, selectionEnd.clientId) + 1;
			} else index = getBlockOrder(state).length;
			return {
				rootClientId,
				index
			};
		}, (state) => [
			state.insertionCue,
			state.selection.selectionEnd.clientId,
			state.blocks.parents,
			state.blocks.order
		]);
		isBlockVisibleInTheInserter = (state, blockNameOrType, rootClientId = null) => {
			let blockType;
			let blockName;
			if (blockNameOrType && "object" === typeof blockNameOrType) {
				blockType = blockNameOrType;
				blockName = blockNameOrType.name;
			} else {
				blockType = getBlockType$1(blockNameOrType);
				blockName = blockNameOrType;
			}
			if (!blockType) return false;
			const { allowedBlockTypes } = getSettings(state);
			if (!checkAllowList(allowedBlockTypes, blockName, true)) return false;
			const parents = (Array.isArray(blockType.parent) ? blockType.parent : []).concat(Array.isArray(blockType.ancestor) ? blockType.ancestor : []);
			if (parents.length > 0) {
				if (parents.includes("core/post-content")) return true;
				let current = rootClientId;
				let hasParent = false;
				do {
					if (parents.includes(getBlockName(state, current))) {
						hasParent = true;
						break;
					}
					current = state.blocks.parents.get(current);
				} while (current);
				return hasParent;
			}
			return true;
		};
		canInsertBlockTypeUnmemoized = (state, blockName, rootClientId = null) => {
			if (state.settings.isPreviewMode) return false;
			if (!isBlockVisibleInTheInserter(state, blockName, rootClientId)) return false;
			let blockType;
			if (blockName && "object" === typeof blockName) {
				blockType = blockName;
				blockName = blockType.name;
			} else blockType = getBlockType$1(blockName);
			const rootTemplateLock = getTemplateLock(state, rootClientId);
			if (rootTemplateLock && rootTemplateLock !== "contentOnly") return false;
			if (isInnerContentRoot(state, rootClientId)) return false;
			const blockEditingMode = getBlockEditingMode(state, rootClientId ?? "");
			const isParentSectionBlock = !!isSectionBlock(state, rootClientId);
			const sectionClientId = isParentSectionBlock ? rootClientId : getParentSectionBlock(state, rootClientId);
			const isWithinSection = !!sectionClientId;
			if (blockEditingMode === "disabled" && (!isWithinSection || blockName !== getDefaultBlockName$1())) return false;
			const parentBlockListSettings = getBlockListSettings(state, rootClientId);
			if (rootClientId && parentBlockListSettings === void 0) return false;
			const isContentRoleBlock = isContentBlock(blockName);
			if (isWithinSection && !isContentRoleBlock) return false;
			if (isWithinSection && getBlockName(state, sectionClientId) === "core/block") return false;
			if (isWithinSection && (isParentSectionBlock || blockEditingMode === "contentOnly" || blockEditingMode === "disabled") && !isContainerInsertableToInContentOnlyMode(state, blockName, rootClientId)) {
				const defaultBlockName = getDefaultBlockName$1();
				if (blockName === defaultBlockName) {
					if (!getBlockOrder(state, rootClientId).some((clientId) => getBlockName(state, clientId) === defaultBlockName)) return false;
				} else return false;
			}
			const parentName = getBlockName(state, rootClientId);
			const parentAllowedChildBlocks = getBlockType$1(parentName)?.allowedBlocks;
			let hasParentAllowedBlock = checkAllowList(parentAllowedChildBlocks, blockName);
			if (hasParentAllowedBlock !== false) {
				const parentAllowedBlocks = parentBlockListSettings?.allowedBlocks;
				const hasParentListAllowedBlock = checkAllowList(parentAllowedBlocks, blockName);
				if (hasParentListAllowedBlock !== null) hasParentAllowedBlock = hasParentListAllowedBlock;
			}
			const blockAllowedParentBlocks = blockType.parent;
			const hasBlockAllowedParent = checkAllowList(blockAllowedParentBlocks, parentName);
			let hasBlockAllowedAncestor = true;
			const blockAllowedAncestorBlocks = blockType.ancestor;
			if (blockAllowedAncestorBlocks) hasBlockAllowedAncestor = [rootClientId, ...getBlockParents(state, rootClientId)].some((ancestorClientId) => checkAllowList(blockAllowedAncestorBlocks, getBlockName(state, ancestorClientId)));
			const canInsert = hasBlockAllowedAncestor && (hasParentAllowedBlock === null && hasBlockAllowedParent === null || hasParentAllowedBlock === true || hasBlockAllowedParent === true);
			if (!canInsert) return canInsert;
			/**
			* This filter is an ad-hoc solution to prevent adding template parts inside post content.
			* Conceptually, having a filter inside a selector is bad pattern so this code will be
			* replaced by a declarative API that doesn't the following drawbacks:
			*
			* Filters are not reactive: Upon switching between "template mode" and non "template mode",
			* the filter and selector won't necessarily be executed again. For now, it doesn't matter much
			* because you can't switch between the two modes while the inserter stays open.
			*
			* Filters are global: Once they're defined, they will affect all editor instances and all registries.
			* An ideal API would only affect specific editor instances.
			*/
			return applyFilters("blockEditor.__unstableCanInsertBlockType", canInsert, blockType, rootClientId, {
				getBlock: getBlock.bind(null, state),
				getBlockParentsByBlockName: getBlockParentsByBlockName.bind(null, state)
			});
		};
		canInsertBlockType = createRegistrySelector((select) => createSelector(canInsertBlockTypeUnmemoized, (state, blockName, rootClientId) => getInsertBlockTypeDependants(select)(state, rootClientId)));
		canIncludeBlockTypeInInserter = (state, blockType, rootClientId) => {
			if (!hasBlockSupport$1(blockType, "inserter", true)) return false;
			return canInsertBlockTypeUnmemoized(state, blockType.name, rootClientId);
		};
		getItemFromVariation = (state, item) => (variation) => {
			const variationId = `${item.id}/${variation.name}`;
			const { time, count = 0 } = getInsertUsage(state, variationId) || {};
			return {
				...item,
				id: variationId,
				icon: variation.icon || item.icon,
				title: variation.title || item.title,
				description: variation.description || item.description,
				category: variation.category || item.category,
				example: variation.hasOwnProperty("example") ? variation.example : item.example,
				initialAttributes: {
					...item.initialAttributes,
					...variation.attributes
				},
				innerBlocks: variation.innerBlocks,
				innerContent: variation.innerContent,
				keywords: variation.keywords || item.keywords,
				frecency: calculateFrecency(time, count),
				isSearchOnly: variation.isSearchOnly
			};
		};
		calculateFrecency = (time, count) => {
			if (!time) return count;
			const duration = Date.now() - time;
			switch (true) {
				case duration < MILLISECONDS_PER_HOUR: return count * 4;
				case duration < MILLISECONDS_PER_DAY: return count * 2;
				case duration < MILLISECONDS_PER_WEEK: return count / 2;
				default: return count / 4;
			}
		};
		buildBlockTypeItem = (state, { buildScope = "inserter" }) => (blockType) => {
			const id = blockType.name;
			let isDisabled = false;
			if (!hasBlockSupport$1(blockType.name, "multiple", true)) isDisabled = getBlocksByClientId(state, getClientIdsWithDescendants(state)).some((block) => block.name === blockType.name);
			const { time, count = 0 } = getInsertUsage(state, id) || {};
			const blockItemBase = {
				id,
				name: blockType.name,
				title: blockType.title,
				icon: blockType.icon,
				isDisabled,
				frecency: calculateFrecency(time, count)
			};
			if (buildScope === "transform") return blockItemBase;
			const inserterVariations = getBlockVariations$1(blockType.name, "inserter");
			const blockVariations = getBlockVariations$1(blockType.name, "block");
			const allVariations = [...inserterVariations, ...blockVariations.filter((variation) => blockType.name === "core/heading" && [
				"h1",
				"h2",
				"h3",
				"h4",
				"h5",
				"h6"
			].includes(variation.name)).map((variation) => ({
				...variation,
				isSearchOnly: true
			}))];
			return {
				...blockItemBase,
				initialAttributes: {},
				description: blockType.description,
				category: blockType.category,
				keywords: blockType.keywords,
				parent: blockType.parent,
				ancestor: blockType.ancestor,
				variations: allVariations,
				example: blockType.example,
				utility: 1
			};
		};
		buildBlockVariationItem = (state, item) => (variation) => {
			const variationId = `${item.id}/${variation.name}`;
			const { time, count = 0 } = getInsertUsage(state, variationId) || {};
			return {
				...item,
				id: variationId,
				icon: variation.icon || item.icon,
				title: variation.title || item.title,
				frecency: calculateFrecency(time, count),
				variationName: variation.name
			};
		};
		buildReusableBlockInserterItem = (state) => (reusableBlock) => {
			const icon = !reusableBlock.wp_pattern_sync_status ? {
				src: symbol_default,
				foreground: "var(--wp-block-synced-color)"
			} : symbol_default;
			const userPattern = mapUserPattern(reusableBlock);
			const { time, count = 0 } = getInsertUsage(state, userPattern.name) || {};
			const frecency = calculateFrecency(time, count);
			return {
				id: userPattern.name,
				name: "core/block",
				initialAttributes: { ref: reusableBlock.id },
				title: userPattern.title,
				icon,
				category: "reusable",
				keywords: ["reusable"],
				isDisabled: false,
				utility: 1,
				frecency,
				content: userPattern.content,
				get blocks() {
					return getParsedPattern(userPattern).blocks;
				},
				syncStatus: userPattern.syncStatus
			};
		};
		getBlockVariationsRaw = () => unlock$2(select(store$2)).getBlockVariationsRaw();
		getBlockTypeInserterItems = createSelector((state) => {
			const buildBlockTypeInserterItem = buildBlockTypeItem(state, { buildScope: "inserter" });
			const items = getBlockTypes$1().filter((blockType) => hasBlockSupport$1(blockType, "inserter", true)).map(buildBlockTypeInserterItem).reduce((accumulator, item) => {
				const { variations = [] } = item;
				if (!variations.some(({ isDefault }) => isDefault)) accumulator.push(item);
				if (variations.length) {
					const variationMapper = getItemFromVariation(state, item);
					accumulator.push(...variations.map(variationMapper));
				}
				return accumulator;
			}, []);
			const groupByType = (blocks, block) => {
				const { core, noncore } = blocks;
				(block.name.startsWith("core/") ? core : noncore).push(block);
				return blocks;
			};
			const { core: coreItems, noncore: nonCoreItems } = items.reduce(groupByType, {
				core: [],
				noncore: []
			});
			return [...coreItems, ...nonCoreItems];
		}, (state) => [
			getBlockTypes$1(),
			getBlockVariationsRaw(),
			state.blocks.order,
			state.preferences.insertUsage
		]);
		getReusableBlockInserterItems = createSelector((state, reusableBlocks) => reusableBlocks.map(buildReusableBlockInserterItem(state)), (state, reusableBlocks) => [reusableBlocks, state.preferences.insertUsage]);
		itemsWithRootFlag = /* @__PURE__ */ new WeakMap();
		getInserterItems = createRegistrySelector((select) => createSelector((state, rootClientId = null, options = DEFAULT_INSERTER_OPTIONS) => {
			const patternInserterItems = canInsertBlockTypeUnmemoized(state, "core/block", rootClientId) ? getReusableBlockInserterItems(state, unlock$2(select(STORE_NAME)).getReusableBlocks()) : [];
			let blockTypeInserterItems = getBlockTypeInserterItems(state);
			if (options[isFiltered] !== false) blockTypeInserterItems = blockTypeInserterItems.filter((item) => canIncludeBlockTypeInInserter(state, item, rootClientId));
			else {
				const fallbackRoots = getFallbackInsertionRoots(state, rootClientId);
				const allowedItems = [];
				for (const blockType of blockTypeInserterItems) {
					if (!isBlockVisibleInTheInserter(state, blockType, rootClientId)) continue;
					const isAllowedInCurrentRoot = canIncludeBlockTypeInInserter(state, blockType, rootClientId);
					if (!isAllowedInCurrentRoot && !fallbackRoots.some((id) => canInsertBlockTypeUnmemoized(state, blockType.name, id))) continue;
					allowedItems.push(withIsAllowedInCurrentRoot(blockType, isAllowedInCurrentRoot));
				}
				blockTypeInserterItems = allowedItems;
			}
			return [...blockTypeInserterItems, ...patternInserterItems];
		}, (state, rootClientId) => [
			getBlockTypeInserterItems(state),
			unlock$2(select(STORE_NAME)).getReusableBlocks(),
			state.blocks.order,
			state.preferences.insertUsage,
			...getInsertBlockTypeDependants(select)(state, rootClientId)
		]));
		getBlockTransformItems = createRegistrySelector((select) => createSelector((state, blocks, rootClientId = null) => {
			const normalizedBlocks = Array.isArray(blocks) ? blocks : [blocks];
			const buildBlockTypeTransformItem = buildBlockTypeItem(state, { buildScope: "transform" });
			const blockTypeTransformItems = getBlockTypes$1().filter((blockType) => canIncludeBlockTypeInInserter(state, blockType, rootClientId)).map(buildBlockTypeTransformItem);
			const itemsByName = Object.fromEntries(Object.entries(blockTypeTransformItems).map(([, value]) => [value.name, value]));
			return orderBy(getPossibleBlockTransformations(normalizedBlocks).reduce((accumulator, block) => {
				const item = itemsByName[block?.name];
				if (!item) return accumulator;
				const { variationName } = block;
				if (!variationName) {
					accumulator.push(item);
					return accumulator;
				}
				const variation = getBlockVariations$1(item.name, "transform")?.find(({ name }) => name === variationName);
				if (!variation) {
					accumulator.push(item);
					return accumulator;
				}
				accumulator.push(buildBlockVariationItem(state, item)(variation));
				return accumulator;
			}, []), (block) => block.frecency, "desc");
		}, (state, blocks, rootClientId) => [
			getBlockTypes$1(),
			state.preferences.insertUsage,
			...getInsertBlockTypeDependants(select)(state, rootClientId)
		]));
		hasInserterItems = (state, rootClientId = null) => {
			if (getBlockTypes$1().some((blockType) => canIncludeBlockTypeInInserter(state, blockType, rootClientId))) return true;
			return canInsertBlockTypeUnmemoized(state, "core/block", rootClientId);
		};
		getAllowedBlocks = createRegistrySelector((select) => createSelector((state, rootClientId = null) => {
			if (!rootClientId) return;
			const blockTypes = getBlockTypes$1().filter((blockType) => canIncludeBlockTypeInInserter(state, blockType, rootClientId));
			if (canInsertBlockTypeUnmemoized(state, "core/block", rootClientId)) blockTypes.push("core/block");
			return blockTypes;
		}, (state, rootClientId) => [getBlockTypes$1(), ...getInsertBlockTypeDependants(select)(state, rootClientId)]));
		__experimentalGetAllowedBlocks = createSelector((state, rootClientId = null) => {
			deprecated("wp.data.select( \"core/block-editor\" ).__experimentalGetAllowedBlocks", {
				alternative: "wp.data.select( \"core/block-editor\" ).getAllowedBlocks",
				since: "6.2",
				version: "6.4"
			});
			return getAllowedBlocks(state, rootClientId);
		}, (state, rootClientId) => getAllowedBlocks.getDependants(state, rootClientId));
		__experimentalGetParsedPattern = createRegistrySelector((select) => (state, patternName) => {
			const pattern = unlock$2(select(STORE_NAME)).getPatternBySlug(patternName);
			return pattern ? getParsedPattern(pattern) : null;
		});
		getAllowedPatternsDependants = (select) => (state, rootClientId) => [...getAllPatternsDependants(select)(state), ...getInsertBlockTypeDependants(select)(state, rootClientId)];
		patternsWithParsedBlocks = /* @__PURE__ */ new WeakMap();
		__experimentalGetAllowedPatterns = createRegistrySelector((select) => {
			return createSelector((state, rootClientId = null, options = DEFAULT_INSERTER_OPTIONS) => {
				const { getAllPatterns } = unlock$2(select(STORE_NAME));
				const patterns = getAllPatterns();
				const { allowedBlockTypes } = getSettings(state);
				return patterns.filter(({ inserter = true }) => !!inserter).map(enhancePatternWithParsedBlocks).filter((pattern) => checkAllowListRecursive(getGrammar(pattern), allowedBlockTypes)).filter((pattern) => getGrammar(pattern).every(({ blockName: name }) => options[isFiltered] !== false ? canInsertBlockType(state, name, rootClientId) : isBlockVisibleInTheInserter(state, name, rootClientId)));
			}, getAllowedPatternsDependants(select));
		});
		getPatternsByBlockTypes = createRegistrySelector((select) => createSelector((state, blockNames, rootClientId = null) => {
			if (!blockNames) return EMPTY_ARRAY;
			const patterns = select(STORE_NAME).__experimentalGetAllowedPatterns(rootClientId);
			const normalizedBlockNames = Array.isArray(blockNames) ? blockNames : [blockNames];
			const filteredPatterns = patterns.filter((pattern) => pattern?.blockTypes?.some?.((blockName) => normalizedBlockNames.includes(blockName)));
			if (filteredPatterns.length === 0) return EMPTY_ARRAY;
			return filteredPatterns;
		}, (state, blockNames, rootClientId) => getAllowedPatternsDependants(select)(state, rootClientId)));
		__experimentalGetPatternsByBlockTypes = createRegistrySelector((select) => {
			deprecated("wp.data.select( \"core/block-editor\" ).__experimentalGetPatternsByBlockTypes", {
				alternative: "wp.data.select( \"core/block-editor\" ).getPatternsByBlockTypes",
				since: "6.2",
				version: "6.4"
			});
			return select(STORE_NAME).getPatternsByBlockTypes;
		});
		__experimentalGetPatternTransformItems = createRegistrySelector((select) => createSelector((state, blocks, rootClientId = null) => {
			if (!blocks) return EMPTY_ARRAY;
			/**
			* For now we only handle blocks without InnerBlocks and take into account
			* the `role` property of blocks' attributes for the transformation.
			* Note that the blocks have been retrieved through `getBlock`, which doesn't
			* return the inner blocks of an inner block controller, so we still need
			* to check for this case too.
			*/
			if (blocks.some(({ clientId, innerBlocks }) => innerBlocks.length || areInnerBlocksControlled(state, clientId))) return EMPTY_ARRAY;
			const selectedBlockNames = Array.from(new Set(blocks.map(({ name }) => name)));
			/**
			* Here we will return first set of possible eligible block patterns,
			* by checking the `blockTypes` property. We still have to recurse through
			* block pattern's blocks and try to find matches from the selected blocks.
			* Now this happens in the consumer to avoid heavy operations in the selector.
			*/
			return select(STORE_NAME).getPatternsByBlockTypes(selectedBlockNames, rootClientId);
		}, (state, blocks, rootClientId) => getAllowedPatternsDependants(select)(state, rootClientId)));
		__experimentalGetBlockListSettingsForBlocks = createSelector((state, clientIds = []) => {
			const blockListSettingsForBlocks = {};
			for (const clientId of clientIds) {
				const settings = getBlockListSettings(state, clientId);
				if (settings) blockListSettingsForBlocks[clientId] = settings;
			}
			return blockListSettingsForBlocks;
		}, (state) => [state.blockListSettings]);
		__experimentalGetReusableBlockTitle = createRegistrySelector((select) => createSelector((state, ref) => {
			deprecated("wp.data.select( 'core/block-editor' ).__experimentalGetReusableBlockTitle", {
				since: "6.6",
				version: "6.8"
			});
			const reusableBlock = unlock$2(select(STORE_NAME)).getReusableBlocks().find((block) => block.id === ref);
			if (!reusableBlock) return null;
			return reusableBlock.title?.raw;
		}, () => [unlock$2(select(STORE_NAME)).getReusableBlocks()]));
		__experimentalGetActiveBlockIdByBlockNames = createSelector((state, validBlockNames) => {
			if (!validBlockNames.length) return null;
			const selectedBlockClientId = getSelectedBlockClientId(state);
			if (validBlockNames.includes(getBlockName(state, selectedBlockClientId))) return selectedBlockClientId;
			const multiSelectedBlockClientIds = getMultiSelectedBlockClientIds(state);
			const entityAreaParents = getBlockParentsByBlockName(state, selectedBlockClientId || multiSelectedBlockClientIds[0], validBlockNames);
			if (entityAreaParents) return entityAreaParents[entityAreaParents.length - 1];
			return null;
		}, (state, validBlockNames) => [
			state.selection.selectionStart.clientId,
			state.selection.selectionEnd.clientId,
			validBlockNames
		]);
		__unstableGetVisibleBlocks = createSelector((state) => {
			const visibleBlocks = new Set(Object.keys(state.blockVisibility).filter((key) => state.blockVisibility[key]));
			if (visibleBlocks.size === 0) return EMPTY_SET;
			return visibleBlocks;
		}, (state) => [state.blockVisibility]);
		isUngroupable = createRegistrySelector((select) => (state, clientId = "") => {
			const _clientId = clientId || getSelectedBlockClientId(state);
			if (!_clientId) return false;
			if (isSectionBlock(state, _clientId)) return false;
			const { getGroupingBlockName } = select(store$2);
			const block = getBlock(state, _clientId);
			const groupingBlockName = getGroupingBlockName();
			return block && (block.name === groupingBlockName || (getBlockType$1(block.name)?.transforms)?.ungroup) && !!block.innerBlocks.length && canRemoveBlock(state, _clientId);
		});
		isGroupable = createRegistrySelector((select) => (state, clientIds = EMPTY_ARRAY) => {
			const { getGroupingBlockName } = select(store$2);
			const groupingBlockName = getGroupingBlockName();
			const _clientIds = clientIds?.length ? clientIds : getSelectedBlockClientIds(state);
			const rootClientId = _clientIds?.length ? getBlockRootClientId(state, _clientIds[0]) : void 0;
			return canInsertBlockType(state, groupingBlockName, rootClientId) && _clientIds.length && canRemoveBlocks(state, _clientIds);
		});
		__unstableGetContentLockingParent = (state, clientId) => {
			deprecated("wp.data.select( 'core/block-editor' ).__unstableGetContentLockingParent", {
				since: "6.1",
				version: "6.7"
			});
			return getContentLockingParent(state, clientId);
		};
		getSelectedBlockStyleState = createSelector((state, clientId) => {
			return {
				...clientId && state.selectedBlockStyleState?.clientId === clientId ? state.selectedBlockStyleState?.value ?? DEFAULT_BLOCK_STYLE_STATE : DEFAULT_BLOCK_STYLE_STATE,
				viewport: getStyleStateViewport(state)
			};
		}, (state) => [state.styleStateViewport, state.selectedBlockStyleState]);
	})))();
}
//#endregion
//#region ../packages/block-editor/src/store/private-actions.ts
var private_actions_exports = /* @__PURE__ */ __exportAll({
	__experimentalUpdateSettings: () => __experimentalUpdateSettings,
	clearBlockRemovalPrompt: () => clearBlockRemovalPrompt,
	clearRequestedInspectorTab: () => clearRequestedInspectorTab,
	closeListViewContentPanel: () => closeListViewContentPanel,
	deleteStyleOverride: () => deleteStyleOverride,
	editContentOnlySection: () => editContentOnlySection,
	ensureDefaultBlock: () => ensureDefaultBlock,
	expandBlock: () => expandBlock,
	hideBlockInterface: () => hideBlockInterface,
	hideViewportModal: () => hideViewportModal,
	openListViewContentPanel: () => openListViewContentPanel,
	privateRemoveBlocks: () => privateRemoveBlocks,
	requestInspectorTab: () => requestInspectorTab,
	resetZoomLevel: () => resetZoomLevel,
	setBlockRemovalRules: () => setBlockRemovalRules,
	setInsertionPoint: () => setInsertionPoint,
	setLastFocus: () => setLastFocus,
	setResponsiveEditing: () => setResponsiveEditing,
	setSelectedBlockStyleState: () => setSelectedBlockStyleState,
	setSelectedBlockStyleStateCanvasPreview: () => setSelectedBlockStyleStateCanvasPreview,
	setStyleOverride: () => setStyleOverride,
	setStyleStateViewport: () => setStyleStateViewport,
	setZoomLevel: () => setZoomLevel,
	showBlockInterface: () => showBlockInterface,
	showViewportModal: () => showViewportModal,
	startDragging: () => startDragging,
	stopDragging: () => stopDragging,
	stopEditingContentOnlySection: () => stopEditingContentOnlySection,
	toggleBlockSpotlight: () => toggleBlockSpotlight
});
/**
* Action that updates the block editor settings and
* conditionally preserves the experimental ones.
*
* @param settings                          Updated settings
* @param options                           Options object.
* @param options.stripExperimentalSettings Whether to strip experimental settings.
* @param options.reset                     Whether to reset the settings.
* @return Action object
*/
function __experimentalUpdateSettings(settings, { stripExperimentalSettings = false, reset = false } = {}) {
	let incomingSettings = settings;
	if (Object.hasOwn(incomingSettings, "__unstableIsPreviewMode")) {
		deprecated("__unstableIsPreviewMode argument in wp.data.dispatch('core/block-editor').updateSettings", {
			since: "6.8",
			alternative: "isPreviewMode"
		});
		incomingSettings = { ...incomingSettings };
		incomingSettings.isPreviewMode = incomingSettings.__unstableIsPreviewMode;
		delete incomingSettings.__unstableIsPreviewMode;
	}
	let cleanSettings = incomingSettings;
	if (stripExperimentalSettings) {
		cleanSettings = {};
		for (const key in incomingSettings) if (!privateSettings.includes(key)) cleanSettings[key] = incomingSettings[key];
	}
	return {
		type: "UPDATE_SETTINGS",
		settings: cleanSettings,
		reset
	};
}
/**
* Hides the block interface (eg. toolbar, outline, etc.)
*
* @return Action object.
*/
function hideBlockInterface() {
	return { type: "HIDE_BLOCK_INTERFACE" };
}
/**
* Shows the block interface (eg. toolbar, outline, etc.)
*
* @return Action object.
*/
function showBlockInterface() {
	return { type: "SHOW_BLOCK_INTERFACE" };
}
/**
* Returns an action object used in signalling that a block removal prompt must
* be displayed.
*
* Contrast with `setBlockRemovalRules`.
*
* @param clientIds      Client IDs of blocks to remove.
* @param selectPrevious True if the previous block or the
*                       immediate parent (if no previous
*                       block exists) should be selected
*                       when a block is removed.
* @param message        Message to display in the prompt.
*
* @return Action object.
*/
function displayBlockRemovalPrompt(clientIds, selectPrevious, message) {
	return {
		type: "DISPLAY_BLOCK_REMOVAL_PROMPT",
		clientIds,
		selectPrevious,
		message
	};
}
/**
* Returns an action object used in signalling that a block removal prompt must
* be cleared, either be cause the user has confirmed or canceled the request
* for removal.
*
* @return Action object.
*/
function clearBlockRemovalPrompt() {
	return { type: "CLEAR_BLOCK_REMOVAL_PROMPT" };
}
/**
* Returns an action object used to set up any rules that a block editor may
* provide in order to prevent a user from accidentally removing certain
* blocks. These rules are then used to display a confirmation prompt to the
* user. For instance, in the Site Editor, the Query Loop block is important
* enough to warrant such confirmation.
*
* IMPORTANT: Registering rules implicitly signals to the `privateRemoveBlocks`
* action that the editor will be responsible for displaying block removal
* prompts and confirming deletions. This action is meant to be used by
* component `BlockRemovalWarningModal` only.
*
* The data is a record whose keys are block types (e.g. 'core/query') and
* whose values are the explanation to be shown to users (e.g. 'Query Loop
* displays a list of posts or pages.').
*
* Contrast with `displayBlockRemovalPrompt`.
*
* @param rules Block removal rules.
* @return Action object.
*/
function setBlockRemovalRules(rules = false) {
	return {
		type: "SET_BLOCK_REMOVAL_RULES",
		rules
	};
}
function setStyleOverride(id, style) {
	return {
		type: "SET_STYLE_OVERRIDE",
		id,
		style
	};
}
function deleteStyleOverride(id) {
	return {
		type: "DELETE_STYLE_OVERRIDE",
		id
	};
}
/**
* Action that sets the element that had focus when focus leaves the editor canvas.
*
* @param lastFocus The last focused element.
*
*
* @return Action object.
*/
function setLastFocus(lastFocus = null) {
	return {
		type: "LAST_FOCUS",
		lastFocus
	};
}
/**
* Returns an action object used in signalling that the user has begun to drag.
*
* @return Action object.
*/
function startDragging() {
	return { type: "START_DRAGGING" };
}
/**
* Returns an action object used in signalling that the user has stopped dragging.
*
* @return Action object.
*/
function stopDragging() {
	return { type: "STOP_DRAGGING" };
}
/**
* @param clientId The block's clientId, or `null` to clear.
*
* @return  Action object.
*/
function expandBlock(clientId) {
	return {
		type: "SET_BLOCK_EXPANDED_IN_LIST_VIEW",
		clientId
	};
}
/**
* @param value
* @param value.rootClientId The root client ID to insert at.
* @param value.index        The index to insert at.
*
* @return Action object.
*/
function setInsertionPoint(value) {
	return {
		type: "SET_INSERTION_POINT",
		value
	};
}
/**
* Mark a contentOnly section as being edited.
*
* @param clientId The client id of the block.
*/
function editContentOnlySection(clientId) {
	return {
		type: "EDIT_CONTENT_ONLY_SECTION",
		clientId
	};
}
/**
* Action that stops editing a contentOnly section.
*/
function stopEditingContentOnlySection() {
	return { type: "EDIT_CONTENT_ONLY_SECTION" };
}
/**
* Resets the Zoom state.
* @return Action object.
*/
function resetZoomLevel() {
	return { type: "RESET_ZOOM_LEVEL" };
}
/**
* Action that toggles the spotlighted block state.
*
* @param clientId          The block's clientId.
* @param hasBlockSpotlight The spotlight state.
* @return Action object.
*/
function toggleBlockSpotlight(clientId, hasBlockSpotlight) {
	return {
		type: "TOGGLE_BLOCK_SPOTLIGHT",
		clientId,
		hasBlockSpotlight
	};
}
/**
* Opens the list view content panel popover.
*
* @return Action object.
*/
function openListViewContentPanel() {
	return { type: "OPEN_LIST_VIEW_CONTENT_PANEL" };
}
/**
* Closes the list view content panel popover.
*
* @return Action object.
*/
function closeListViewContentPanel() {
	return { type: "CLOSE_LIST_VIEW_CONTENT_PANEL" };
}
/**
* Returns an action object used to open the viewport modal
* for the given client IDs.
*
* @param clientIds Client IDs of blocks to configure viewport settings for.
* @return Action object.
*/
function showViewportModal(clientIds) {
	return {
		type: "SHOW_VIEWPORT_MODAL",
		clientIds
	};
}
/**
* Returns an action object used to close the viewport modal.
*
* @return Action object.
*/
function hideViewportModal() {
	return { type: "HIDE_VIEWPORT_MODAL" };
}
/**
* Requests to open a specific inspector tab, optionally with additional options.
* This action signals intent to switch to a particular tab in the block inspector.
*
* @param tabName             The name of the tab to open (e.g., 'list-view', 'settings', 'styles').
* @param [options]           Optional configuration.
* @param [options.openPanel] Client ID of a specific panel to open (for tabs that support panels).
*
* @return Action object.
*/
function requestInspectorTab(tabName, options = {}) {
	return {
		type: "REQUEST_INSPECTOR_TAB",
		tabName,
		options
	};
}
/**
* Clears the requested inspector tab state after it has been handled.
*
* @return Action object.
*/
function clearRequestedInspectorTab() {
	return { type: "CLEAR_REQUESTED_INSPECTOR_TAB" };
}
/**
* Sets the selected style state for a block's style controls.
*
* @param clientId The block client ID.
* @param value    The selected state value.
*
* @return Action object.
*/
function setSelectedBlockStyleState(clientId, value) {
	return {
		type: "SET_SELECTED_BLOCK_STYLE_STATE",
		clientId,
		value
	};
}
/**
* Sets whether the selected style state is shown on the canvas.
*
* @param clientId The block client ID.
* @param value    Whether to show the selected state on the canvas.
*
* @return Action object.
*/
function setSelectedBlockStyleStateCanvasPreview(clientId, value) {
	return {
		type: "SET_SELECTED_BLOCK_STYLE_STATE_CANVAS_PREVIEW",
		clientId,
		value
	};
}
/**
* Sets the globally selected viewport style state. When set to a value other
* than 'default', block style edits in the inspector apply to that viewport.
* Driven by the editor's device preview while Responsive editing is enabled.
*
* @param viewport The selected viewport state (e.g. 'default', 'tablet', 'mobile').
*
* @return Action object.
*/
function setStyleStateViewport(viewport) {
	return {
		type: "SET_STYLE_STATE_VIEWPORT",
		viewport
	};
}
/**
* Sets whether Responsive editing is enabled. When enabled, the device preview
* also drives which viewport block style edits are applied to. Session-only.
*
* @param enabled Whether Responsive editing is enabled.
*
* @return Action object.
*/
function setResponsiveEditing(enabled) {
	return {
		type: "SET_RESPONSIVE_EDITING",
		enabled
	};
}
var castArray$1, privateSettings, privateRemoveBlocks, ensureDefaultBlock, setZoomLevel;
function init_private_actions$1() {
	return (init_private_actions$1 = __esmMin((() => {
		init_build_module$6();
		init_build_module$11();
		init_build_module$10();
		init_build_module$3();
		castArray$1 = (maybeArray) => Array.isArray(maybeArray) ? maybeArray : [maybeArray];
		privateSettings = [
			"inserterMediaCategories",
			"blockInspectorAnimation",
			"mediaSideload"
		];
		privateRemoveBlocks = (clientIds, selectPrevious = true, forceRemove = false) => ({ select, dispatch, registry }) => {
			if (!clientIds || !clientIds.length) return;
			clientIds = castArray$1(clientIds);
			if (!select.canRemoveBlocks(clientIds)) return;
			const rules = !forceRemove && select.getBlockRemovalRules();
			if (rules) {
				function flattenBlocks(blocks) {
					const result = [];
					const stack = [...blocks];
					while (stack.length) {
						const { innerBlocks, ...block } = stack.shift();
						stack.push(...innerBlocks);
						result.push(block);
					}
					return result;
				}
				const flattenedBlocks = flattenBlocks(clientIds.map(select.getBlock));
				let message;
				for (const rule of rules) {
					message = rule.callback(flattenedBlocks);
					if (message) {
						dispatch(displayBlockRemovalPrompt(clientIds, selectPrevious, message));
						return;
					}
				}
			}
			let removeRoot = false;
			const rootClientId = select.getBlockRootClientId(clientIds[0]);
			if (rootClientId && !getBlockType$1(select.getBlockName(rootClientId))?.parent?.length) {
				const blockOrder = select.getBlockOrder(rootClientId);
				removeRoot = blockOrder.length === clientIds.length && blockOrder.every((clientId) => clientIds.includes(clientId)) && isUnmodifiedBlock(select.__unstableGetBlockWithoutInnerBlocks(rootClientId));
			}
			if (selectPrevious) dispatch.selectPreviousBlock(removeRoot ? rootClientId : clientIds[0], selectPrevious);
			registry.batch(() => {
				dispatch({
					type: "REMOVE_BLOCKS",
					clientIds: removeRoot ? [rootClientId] : clientIds
				});
				dispatch(ensureDefaultBlock());
			});
		};
		ensureDefaultBlock = () => ({ select, dispatch }) => {
			if (select.getBlockCount() > 0) return;
			const { __unstableHasCustomAppender } = select.getSettings();
			if (__unstableHasCustomAppender) return;
			dispatch.insertDefaultBlock();
		};
		setZoomLevel = (zoom = 100) => ({ select, dispatch }) => {
			if (zoom !== 100) {
				const firstSelectedClientId = select.getBlockSelectionStart();
				const sectionRootClientId = select.getSectionRootClientId();
				if (firstSelectedClientId) {
					let sectionClientId;
					if (sectionRootClientId) {
						const sectionClientIds = select.getBlockOrder(sectionRootClientId);
						if (sectionClientIds?.includes(firstSelectedClientId)) sectionClientId = firstSelectedClientId;
						else sectionClientId = select.getBlockParents(firstSelectedClientId).find((parent) => sectionClientIds.includes(parent));
					} else sectionClientId = select.getBlockHierarchyRootClientId(firstSelectedClientId);
					if (sectionClientId) dispatch.selectBlock(sectionClientId);
					else dispatch.clearSelectedBlock();
					speak(__("You are currently in zoom-out mode."));
				}
			}
			dispatch({
				type: "SET_ZOOM_LEVEL",
				zoom
			});
		};
	})))();
}
//#endregion
//#region ../packages/notices/build-module/store/reducer.mjs
var reducer_default;
function init_reducer$3() {
	return (init_reducer$3 = __esmMin((() => {
		init_build_module$13();
		reducer_default = keyedReducer("context")((state = [], action) => {
			switch (action.type) {
				case "CREATE_NOTICE": return [...state.filter(({ id }) => id !== action.notice.id), action.notice];
				case "REMOVE_NOTICE": return state.filter(({ id }) => id !== action.id);
				case "REMOVE_NOTICES": return state.filter(({ id }) => !action.ids.includes(id));
				case "REMOVE_ALL_NOTICES": return state.filter(({ type }) => type !== action.noticeType);
				default: return state;
			}
		});
	})))();
}
//#endregion
//#region ../packages/notices/build-module/store/constants.mjs
var DEFAULT_CONTEXT, DEFAULT_STATUS;
function init_constants$5() {
	return (init_constants$5 = __esmMin((() => {
		DEFAULT_CONTEXT = "global";
		DEFAULT_STATUS = "info";
	})))();
}
//#endregion
//#region ../packages/notices/build-module/store/actions.mjs
var actions_exports$1 = /* @__PURE__ */ __exportAll({
	createErrorNotice: () => createErrorNotice,
	createInfoNotice: () => createInfoNotice,
	createNotice: () => createNotice,
	createSuccessNotice: () => createSuccessNotice,
	createWarningNotice: () => createWarningNotice,
	removeAllNotices: () => removeAllNotices,
	removeNotice: () => removeNotice,
	removeNotices: () => removeNotices
});
function createNotice(status = DEFAULT_STATUS, content, options = {}) {
	const { speak = true, isDismissible = true, context = DEFAULT_CONTEXT, id = `${context}${++uniqueId}`, actions = [], type = "default", __unstableHTML, icon = null, explicitDismiss = false, onDismiss } = options;
	content = String(content);
	return {
		type: "CREATE_NOTICE",
		context,
		notice: {
			id,
			status,
			content,
			spokenMessage: speak ? content : null,
			__unstableHTML,
			isDismissible,
			actions,
			type,
			icon,
			explicitDismiss,
			onDismiss
		}
	};
}
function createSuccessNotice(content, options) {
	return createNotice("success", content, options);
}
function createInfoNotice(content, options) {
	return createNotice("info", content, options);
}
function createErrorNotice(content, options) {
	return createNotice("error", content, options);
}
function createWarningNotice(content, options) {
	return createNotice("warning", content, options);
}
function removeNotice(id, context = DEFAULT_CONTEXT) {
	return {
		type: "REMOVE_NOTICE",
		id,
		context
	};
}
function removeAllNotices(noticeType = "default", context = DEFAULT_CONTEXT) {
	return {
		type: "REMOVE_ALL_NOTICES",
		noticeType,
		context
	};
}
function removeNotices(ids, context = DEFAULT_CONTEXT) {
	return {
		type: "REMOVE_NOTICES",
		ids,
		context
	};
}
var uniqueId;
function init_actions$2() {
	return (init_actions$2 = __esmMin((() => {
		init_constants$5();
		uniqueId = 0;
	})))();
}
//#endregion
//#region ../packages/notices/build-module/store/selectors.mjs
var selectors_exports = /* @__PURE__ */ __exportAll({ getNotices: () => getNotices });
function getNotices(state, context = DEFAULT_CONTEXT) {
	return state[context] || DEFAULT_NOTICES;
}
var DEFAULT_NOTICES;
function init_selectors$3() {
	return (init_selectors$3 = __esmMin((() => {
		init_constants$5();
		DEFAULT_NOTICES = [];
	})))();
}
//#endregion
//#region ../packages/notices/build-module/store/index.mjs
var store$1;
function init_store$2() {
	return (init_store$2 = __esmMin((() => {
		init_build_module$13();
		init_reducer$3();
		init_actions$2();
		init_selectors$3();
		store$1 = createReduxStore("core/notices", {
			reducer: reducer_default,
			actions: actions_exports$1,
			selectors: selectors_exports
		});
		register(store$1);
	})))();
}
//#endregion
//#region ../packages/block-editor/src/utils/selection.ts
/**
* Retrieve the block attribute that contains the selection position.
*
* @param blockAttributes Block attributes.
* @return The name of the block attribute that was previously selected.
*/
function retrieveSelectedAttribute(blockAttributes) {
	if (!blockAttributes) return;
	return Object.keys(blockAttributes).find((name) => {
		const value = blockAttributes[name];
		return (typeof value === "string" || value instanceof RichTextData) && value.toString().indexOf("") !== -1;
	});
}
function findRichTextAttributeKey(blockType) {
	for (const [key, value] of Object.entries(blockType.attributes)) if (value.source === "rich-text" || value.source === "html") return key;
}
function init_selection() {
	return (init_selection = __esmMin((() => {
		init_build_module();
	})))();
}
//#endregion
//#region ../packages/block-editor/src/utils/sibling-block-attributes.ts
/**
* Returns the attributes a newly created block inherits from an adjacent
* block of the same type: everything except the adjacent block's content
* (attributes with the `content` role) and its metadata.
* A styled sibling thus yields an equally styled, empty new block.
*
* @param blockName  The block name.
* @param attributes The adjacent block's attributes.
*
* @return The attributes for the new block.
*/
function getSiblingBlockAttributes(blockName, attributes) {
	if (!attributes) return {};
	const excluded = new Set(getBlockAttributesNamesByRole(blockName, "content"));
	excluded.add("metadata");
	return Object.fromEntries(Object.entries(attributes).filter(([key]) => !excluded.has(key)));
}
function init_sibling_block_attributes() {
	return (init_sibling_block_attributes = __esmMin((() => {
		init_build_module$3();
	})))();
}
//#endregion
//#region ../packages/block-editor/src/store/actions.ts
var actions_exports = /* @__PURE__ */ __exportAll({
	__unstableDeleteSelection: () => __unstableDeleteSelection,
	__unstableExpandSelection: () => __unstableExpandSelection,
	__unstableIncrementListViewExpandRevision: () => __unstableIncrementListViewExpandRevision,
	__unstableMarkAutomaticChange: () => __unstableMarkAutomaticChange,
	__unstableMarkLastChangeAsPersistent: () => __unstableMarkLastChangeAsPersistent,
	__unstableMarkNextChangeAsNotPersistent: () => __unstableMarkNextChangeAsNotPersistent,
	__unstableSaveReusableBlock: () => __unstableSaveReusableBlock,
	__unstableSetAllListViewPanelsOpen: () => __unstableSetAllListViewPanelsOpen,
	__unstableSetEditorMode: () => __unstableSetEditorMode,
	__unstableSetOpenListViewPanel: () => __unstableSetOpenListViewPanel,
	__unstableSetTemporarilyEditingAsBlocks: () => __unstableSetTemporarilyEditingAsBlocks,
	__unstableSplitSelection: () => __unstableSplitSelection,
	__unstableToggleListViewPanel: () => __unstableToggleListViewPanel,
	clearSelectedBlock: () => clearSelectedBlock,
	duplicateBlocks: () => duplicateBlocks,
	enterFormattedText: () => enterFormattedText,
	exitFormattedText: () => exitFormattedText,
	flashBlock: () => flashBlock,
	hideInsertionPoint: () => hideInsertionPoint,
	hoverBlock: () => hoverBlock,
	insertAfterBlock: () => insertAfterBlock,
	insertBeforeBlock: () => insertBeforeBlock,
	insertBlock: () => insertBlock,
	insertBlocks: () => insertBlocks,
	insertDefaultBlock: () => insertDefaultBlock,
	mergeBlocks: () => mergeBlocks,
	moveBlockToPosition: () => moveBlockToPosition,
	moveBlocksDown: () => moveBlocksDown,
	moveBlocksToPosition: () => moveBlocksToPosition,
	moveBlocksUp: () => moveBlocksUp,
	multiSelect: () => multiSelect,
	receiveBlocks: () => receiveBlocks,
	registerInserterMediaCategory: () => registerInserterMediaCategory,
	removeBlock: () => removeBlock,
	removeBlocks: () => removeBlocks,
	replaceBlock: () => replaceBlock,
	replaceBlocks: () => replaceBlocks,
	replaceInnerBlocks: () => replaceInnerBlocks,
	resetBlocks: () => resetBlocks,
	resetSelection: () => resetSelection,
	selectBlock: () => selectBlock,
	selectNextBlock: () => selectNextBlock,
	selectPreviousBlock: () => selectPreviousBlock,
	selectionChange: () => selectionChange,
	setBlockEditingMode: () => setBlockEditingMode,
	setBlockMovingClientId: () => setBlockMovingClientId,
	setBlockVisibility: () => setBlockVisibility,
	setHasControlledInnerBlocks: () => setHasControlledInnerBlocks,
	setTemplateValidity: () => setTemplateValidity,
	showInsertionPoint: () => showInsertionPoint,
	startDraggingBlocks: () => startDraggingBlocks,
	startMultiSelect: () => startMultiSelect,
	startTyping: () => startTyping,
	stopDraggingBlocks: () => stopDraggingBlocks,
	stopMultiSelect: () => stopMultiSelect,
	stopTyping: () => stopTyping,
	synchronizeTemplate: () => synchronizeTemplate,
	toggleBlockHighlight: () => toggleBlockHighlight,
	toggleBlockMode: () => toggleBlockMode,
	toggleSelection: () => toggleSelection,
	unsetBlockEditingMode: () => unsetBlockEditingMode,
	updateBlock: () => updateBlock,
	updateBlockAttributes: () => updateBlockAttributes,
	updateBlockListSettings: () => updateBlockListSettings,
	updateSettings: () => updateSettings,
	validateBlocksToTemplate: () => validateBlocksToTemplate
});
/**
* Returns an action object used in signalling that selection state should be
* reset to the specified selection.
*
* @param {WPBlockSelection} selectionStart  The selection start.
* @param {WPBlockSelection} selectionEnd    The selection end.
* @param {0|-1|null}        initialPosition Initial block position.
*
* @return {Object} Action object.
*/
function resetSelection(selectionStart, selectionEnd, initialPosition) {
	return {
		type: "RESET_SELECTION",
		selectionStart,
		selectionEnd,
		initialPosition
	};
}
/**
* Returns an action object used in signalling that blocks have been received.
* Unlike resetBlocks, these should be appended to the existing known set, not
* replacing.
*
* @deprecated
*
* @param {Object[]} blocks Array of block objects.
*
* @return {Object} Action object.
*/
function receiveBlocks(blocks) {
	deprecated("wp.data.dispatch( \"core/block-editor\" ).receiveBlocks", {
		since: "5.9",
		alternative: "resetBlocks or insertBlocks"
	});
	return {
		type: "RECEIVE_BLOCKS",
		blocks
	};
}
/**
* Action that updates attributes of multiple blocks with the specified client IDs.
*
* @param {string|string[]} clientIds                     Block client IDs.
* @param {Object}          attributes                    Block attributes to be merged. Should be keyed by clientIds if `options.uniqueByBlock` is true.
* @param {Object}          options                       Updating options.
* @param {boolean}         [options.uniqueByBlock=false] Whether each block in clientIds array has a unique set of attributes.
* @return {Object} Action object.
*/
function updateBlockAttributes(clientIds, attributes, options = { uniqueByBlock: false }) {
	if (typeof options === "boolean") options = { uniqueByBlock: options };
	return {
		type: "UPDATE_BLOCK_ATTRIBUTES",
		clientIds: castArray(clientIds),
		attributes,
		options
	};
}
/**
* Action that updates the block with the specified client ID.
*
* @param {string} clientId Block client ID.
* @param {Object} updates  Block attributes to be merged.
*
* @return {Object} Action object.
*/
function updateBlock(clientId, updates) {
	return {
		type: "UPDATE_BLOCK",
		clientId,
		updates
	};
}
/**
* Returns an action object used in signalling that the block with the
* specified client ID has been selected, optionally accepting a position
* value reflecting its selection directionality. An initialPosition of -1
* reflects a reverse selection.
*
* @param {string}    clientId        Block client ID.
* @param {0|-1|null} initialPosition Optional initial position. Pass -1 to reflect reverse selection
*                                    or `null` to prevent focusing the block.
*
* @return {Object} Action object.
*/
function selectBlock(clientId, initialPosition = 0) {
	return {
		type: "SELECT_BLOCK",
		initialPosition,
		clientId
	};
}
/**
* Returns an action object used in signalling that the block with the
* specified client ID has been hovered.
*
* @deprecated
*/
function hoverBlock() {
	deprecated("wp.data.dispatch( \"core/block-editor\" ).hoverBlock", {
		since: "6.9",
		version: "7.1"
	});
	return { type: "DO_NOTHING" };
}
/**
* Action that starts block multi-selection.
*
* @return {Object} Action object.
*/
function startMultiSelect() {
	return { type: "START_MULTI_SELECT" };
}
/**
* Action that stops block multi-selection.
*
* @return {Object} Action object.
*/
function stopMultiSelect() {
	return { type: "STOP_MULTI_SELECT" };
}
/**
* Action that clears the block selection.
*
* @return {Object} Action object.
*/
function clearSelectedBlock() {
	return { type: "CLEAR_SELECTED_BLOCK" };
}
/**
* Action that enables or disables block selection.
*
* @param {boolean} [isSelectionEnabled=true] Whether block selection should
*                                            be enabled.
*
* @return {Object} Action object.
*/
function toggleSelection(isSelectionEnabled = true) {
	return {
		type: "TOGGLE_SELECTION",
		isSelectionEnabled
	};
}
/**
* Action that replaces a single block with one or more replacement blocks.
*
* @param {(string|string[])} clientId Block client ID to replace.
* @param {(Object|Object[])} block    Replacement block(s).
*
* @return {Object} Action object.
*/
function replaceBlock(clientId, block) {
	return replaceBlocks(clientId, block);
}
/**
* Action that moves given block to a new position.
*
* @param {?string} clientId         The client ID of the block.
* @param {?string} fromRootClientId Root client ID source.
* @param {?string} toRootClientId   Root client ID destination.
* @param {number}  index            The index to move the block to.
*/
function moveBlockToPosition(clientId, fromRootClientId = "", toRootClientId = "", index) {
	return moveBlocksToPosition([clientId], fromRootClientId, toRootClientId, index);
}
/**
* Action that inserts a single block, optionally at a specific index respective a root block list.
*
* Only allowed blocks are inserted. The action may fail silently for blocks that are not allowed or if
* a templateLock is active on the block list.
*
* @param {Object}    block           Block object to insert.
* @param {?number}   index           Index at which block should be inserted.
* @param {?string}   rootClientId    Optional root client ID of block list on which to insert.
* @param {?boolean}  updateSelection If true block selection will be updated. If false, block selection will not change. Defaults to true.
* @param {0|-1|null} initialPosition Initial focus position. Setting it to null prevent focusing the inserted block.
* @param {?Object}   meta            Optional Meta values to be passed to the action object.
*
* @return {Object} Action object.
*/
function insertBlock(block, index, rootClientId, updateSelection, initialPosition, meta) {
	return insertBlocks([block], index, rootClientId, updateSelection, initialPosition, meta);
}
/**
* Applies block type templates to empty blocks. When a block type declares a
* `template` in its settings, an empty block of that type receives the
* template's child blocks at creation, so insertion needs no follow-up
* template synchronization.
*
* @param blocks        Block objects.
* @param expandedTypes Block names whose templates are already
*                      being expanded higher up the tree. A
*                      template that transitively contains its
*                      own block type would otherwise expand
*                      forever; the nested occurrence stays
*                      empty instead.
*
* @return Block objects with templates applied.
*/
function applyBlockTypeTemplates(blocks, expandedTypes = /* @__PURE__ */ new Set()) {
	let hasChanges = false;
	const result = blocks.map((block) => {
		let { innerBlocks } = block;
		if (innerBlocks?.length) innerBlocks = applyBlockTypeTemplates(innerBlocks, expandedTypes);
		else if (!expandedTypes.has(block.name)) {
			const { template } = getBlockType$1(block.name) ?? {};
			if (template?.length) innerBlocks = applyBlockTypeTemplates(synchronizeBlocksWithTemplate([], template), new Set(expandedTypes).add(block.name));
		}
		if (innerBlocks === block.innerBlocks) return block;
		hasChanges = true;
		return {
			...block,
			innerBlocks
		};
	});
	return hasChanges ? result : blocks;
}
/**
* Moves the selection into the first inner leaf block of a freshly
* scaffolded block, when the block ended up selected and its block type
* opts in with `templateInsertUpdatesSelection`. Expects the state to
* reflect the insertion, and applies the same selection a template
* insertion updates the selection to.
*
* @param select              Store select function.
* @param dispatch            Store dispatch function.
* @param originalBlocks      Block objects before templates were applied.
* @param blocksWithTemplates Block objects after templates were applied.
* @param initialPosition     Initial focus position.
*/
function selectBlockTypeTemplate(select, dispatch, originalBlocks, blocksWithTemplates, initialPosition) {
	const selectedClientId = select.getSelectedBlockClientId();
	if (!selectedClientId) return;
	const index = blocksWithTemplates.findIndex((block) => block.clientId === selectedClientId);
	if (index === -1 || blocksWithTemplates[index] === originalBlocks[index] || !blocksWithTemplates[index].innerBlocks.length || !getBlockType$1(blocksWithTemplates[index].name)?.templateInsertUpdatesSelection) return;
	let block = blocksWithTemplates[index];
	while (block.innerBlocks[0]) block = block.innerBlocks[0];
	dispatch.selectBlock(block.clientId, initialPosition);
}
/**
* Action that shows the insertion point.
*
* @param    {?string}            rootClientId           Optional root client ID of block list on
*                                                       which to insert.
* @param    {?number}            index                  Index at which block should be inserted.
* @param    {?Object}            __unstableOptions      Additional options.
* @property {boolean}            __unstableWithInserter Whether or not to show an inserter button.
* @property {'insert'|'replace'} operation              The operation to perform when applied,
*                                                       either 'insert' or 'replace' for now.
*
* @return {Object} Action object.
*/
function showInsertionPoint(rootClientId, index, __unstableOptions = {}) {
	const { __unstableWithInserter, operation, nearestSide } = __unstableOptions;
	return {
		type: "SHOW_INSERTION_POINT",
		rootClientId,
		index,
		__unstableWithInserter,
		operation,
		nearestSide
	};
}
/**
* Action that resets the template validity.
*
* @param {boolean} isValid template validity flag.
*
* @return {Object} Action object.
*/
function setTemplateValidity(isValid) {
	return {
		type: "SET_TEMPLATE_VALIDITY",
		isValid
	};
}
/**
* Returns an action object used in signalling that the block with the
* specified client ID is to be removed.
*
* @param {string}  clientId       Client ID of block to remove.
* @param {boolean} selectPrevious True if the previous block should be
*                                 selected when a block is removed.
*
* @return {Object} Action object.
*/
function removeBlock(clientId, selectPrevious) {
	return removeBlocks([clientId], selectPrevious);
}
/**
* Returns an action object used in signalling that the inner blocks with the
* specified client ID should be replaced.
*
* @param {string}    rootClientId    Client ID of the block whose InnerBlocks will re replaced.
* @param {Object[]}  blocks          Block objects to insert as new InnerBlocks
* @param {?boolean}  updateSelection If true block selection will be updated. If false, block selection will not change. Defaults to false.
* @param {0|-1|null} initialPosition Initial block position.
* @return {Object} Action object.
*/
function replaceInnerBlocks(rootClientId, blocks, updateSelection = false, initialPosition = 0) {
	return {
		type: "REPLACE_INNER_BLOCKS",
		rootClientId,
		blocks,
		updateSelection,
		initialPosition: updateSelection ? initialPosition : null,
		time: Date.now()
	};
}
/**
* Returns an action object used to toggle the block editing mode between
* visual and HTML modes.
*
* @param {string} clientId Block client ID.
*
* @return {Object} Action object.
*/
function toggleBlockMode(clientId) {
	return {
		type: "TOGGLE_BLOCK_MODE",
		clientId
	};
}
/**
* Returns an action object used in signalling that the user has begun to type.
*
* @return {Object} Action object.
*/
function startTyping() {
	return { type: "START_TYPING" };
}
/**
* Returns an action object used in signalling that the user has stopped typing.
*
* @return {Object} Action object.
*/
function stopTyping() {
	return { type: "STOP_TYPING" };
}
/**
* Returns an action object used in signalling that the user has begun to drag blocks.
*
* @param {string[]} clientIds An array of client ids being dragged
*
* @return {Object} Action object.
*/
function startDraggingBlocks(clientIds = []) {
	return {
		type: "START_DRAGGING_BLOCKS",
		clientIds
	};
}
/**
* Returns an action object used in signalling that the user has stopped dragging blocks.
*
* @return {Object} Action object.
*/
function stopDraggingBlocks() {
	return { type: "STOP_DRAGGING_BLOCKS" };
}
/**
* Returns an action object used in signalling that the caret has entered formatted text.
*
* @deprecated
*
* @return {Object} Action object.
*/
function enterFormattedText() {
	deprecated("wp.data.dispatch( \"core/block-editor\" ).enterFormattedText", {
		since: "6.1",
		version: "6.3"
	});
	return { type: "DO_NOTHING" };
}
/**
* Returns an action object used in signalling that the user caret has exited formatted text.
*
* @deprecated
*
* @return {Object} Action object.
*/
function exitFormattedText() {
	deprecated("wp.data.dispatch( \"core/block-editor\" ).exitFormattedText", {
		since: "6.1",
		version: "6.3"
	});
	return { type: "DO_NOTHING" };
}
/**
* Action that changes the position of the user caret.
*
* @param {string|Selection} clientId     The selected block client ID.
* @param {string}           attributeKey The selected block attribute key.
* @param {number}           startOffset  The start offset.
* @param {number}           endOffset    The end offset.
*
* @return {Object} Action object.
*/
function selectionChange(clientId, attributeKey, startOffset, endOffset) {
	if (typeof clientId === "string") return {
		type: "SELECTION_CHANGE",
		clientId,
		attributeKey,
		startOffset,
		endOffset
	};
	return {
		type: "SELECTION_CHANGE",
		...clientId
	};
}
/**
* Action that changes the nested settings of the given block(s).
*
* @param {string | SettingsByClientId} clientId Client ID of the block whose
*                                               nested setting are being
*                                               received, or object of settings
*                                               by client ID.
* @param {Object}                      settings Object with the new settings
*                                               for the nested block.
*
* @return {Object} Action object
*/
function updateBlockListSettings(clientId, settings) {
	return {
		type: "UPDATE_BLOCK_LIST_SETTINGS",
		clientId,
		settings
	};
}
/**
* Action that updates the block editor settings.
*
* @param {Object} settings Updated settings
*
* @return {Object} Action object
*/
function updateSettings(settings) {
	return __experimentalUpdateSettings(settings, { stripExperimentalSettings: true });
}
/**
* Action that signals that a temporary reusable block has been saved
* in order to switch its temporary id with the real id.
*
* @deprecated
*/
function __unstableSaveReusableBlock() {
	deprecated("wp.data.dispatch( \"core/block-editor\" ).__unstableSaveReusableBlock", { since: "7.1" });
	return { type: "DO_NOTHING" };
}
/**
* Action that marks the last block change explicitly as persistent.
*
* @return {Object} Action object.
*/
function __unstableMarkLastChangeAsPersistent() {
	return { type: "MARK_LAST_CHANGE_AS_PERSISTENT" };
}
/**
* Action that signals that the next block change should be marked explicitly
* as not persistent.
*
* By default, non-persistent changes may still merge into undo history. Use
* `history: 'ignore'` for derived changes that should never be captured by undo.
*
* @param {Object} options         Options object.
* @param {string} options.history How the change should interact with history.
* @return {Object} Action object.
*/
function __unstableMarkNextChangeAsNotPersistent({ history = "merge" } = {}) {
	return {
		type: "MARK_NEXT_CHANGE_AS_NOT_PERSISTENT",
		history
	};
}
/**
* Action that used to set the editor mode (Write/Design tool).
*
* @deprecated
*
* @return {Object} Action object.
*/
function __unstableSetEditorMode() {
	deprecated("wp.data.dispatch( \"core/block-editor\" ).__unstableSetEditorMode", {
		since: "7.2",
		hint: "The Write/Design editor tool has been removed."
	});
	return { type: "DO_NOTHING" };
}
/**
* Set the block moving client ID.
*
* @deprecated
*
* @return {Object} Action object.
*/
function setBlockMovingClientId() {
	deprecated("wp.data.dispatch( \"core/block-editor\" ).setBlockMovingClientId", {
		since: "6.7",
		hint: "Block moving mode feature has been removed"
	});
	return { type: "DO_NOTHING" };
}
/**
* Action that toggles the highlighted block state.
*
* @param {string}  clientId      The block's clientId.
* @param {boolean} isHighlighted The highlight state.
*/
function toggleBlockHighlight(clientId, isHighlighted) {
	return {
		type: "TOGGLE_BLOCK_HIGHLIGHT",
		clientId,
		isHighlighted
	};
}
/**
* Action that sets whether a block has controlled inner blocks.
*
* @param {string}  clientId                 The block's clientId.
* @param {boolean} hasControlledInnerBlocks True if the block's inner blocks are controlled.
*/
function setHasControlledInnerBlocks(clientId, hasControlledInnerBlocks) {
	return {
		type: "SET_HAS_CONTROLLED_INNER_BLOCKS",
		hasControlledInnerBlocks,
		clientId
	};
}
/**
* Action that sets whether given blocks are visible on the canvas.
*
* @param {Record<string,boolean>} updates For each block's clientId, its new visibility setting.
*/
function setBlockVisibility(updates) {
	return {
		type: "SET_BLOCK_VISIBILITY",
		updates
	};
}
/**
* Action that sets whether a block is being temporarily edited as blocks.
*
* DO-NOT-USE in production.
* This action is created for internal/experimental only usage and may be
* removed anytime without any warning, causing breakage on any plugin or theme invoking it.
*
* @param {?string} clientId The clientId of the block being temporarily edited.
*/
function __unstableSetTemporarilyEditingAsBlocks(clientId) {
	deprecated("wp.data.dispatch( 'core/block-editor' ).__unstableSetTemporarilyEditingAsBlocks", { since: "7.0" });
	return editContentOnlySection(clientId);
}
/**
* Sets the block editing mode for a given block.
*
* @see useBlockEditingMode
*
* @param {string}           clientId The block client ID, or `''` for the root container.
* @param {BlockEditingMode} mode     The block editing mode. One of `'disabled'`,
*                                    `'contentOnly'`, or `'default'`.
*
* @return {Object} Action object.
*/
function setBlockEditingMode(clientId = "", mode) {
	return {
		type: "SET_BLOCK_EDITING_MODE",
		clientId,
		mode
	};
}
/**
* Clears the block editing mode for a given block.
*
* @see useBlockEditingMode
*
* @param {string} clientId The block client ID, or `''` for the root container.
*
* @return {Object} Action object.
*/
function unsetBlockEditingMode(clientId = "") {
	return {
		type: "UNSET_BLOCK_EDITING_MODE",
		clientId
	};
}
/**
* Sets which List View panel should be opened.
*
* @param {string|null} clientId The client ID of the panel to open, or null to close all.
* @return {Object} Action object.
*/
function __unstableSetOpenListViewPanel(clientId) {
	return {
		type: "SET_OPEN_LIST_VIEW_PANEL",
		clientId
	};
}
/**
* Sets all List View panels to be opened.
*
* @return {Object} Action object.
*/
function __unstableSetAllListViewPanelsOpen() {
	return { type: "SET_ALL_LIST_VIEW_PANELS_OPEN" };
}
/**
* Toggles a List View panel open/closed state.
*
* @param {string}  clientId The client ID of the panel to toggle.
* @param {boolean} isOpen   Whether the panel should be open.
* @return {Object} Action object.
*/
function __unstableToggleListViewPanel(clientId, isOpen) {
	return {
		type: "TOGGLE_LIST_VIEW_PANEL",
		clientId,
		isOpen
	};
}
/**
* Increments the List View expand revision to force re-render.
*
* This action increments a counter that is used in the ListView component's key prop.
* When the key changes, the component will remount with a fresh expanded state,
* ensuring parent blocks show their children. For example, after click-through
* navigation.
*
* @return {Object} Action object.
*/
function __unstableIncrementListViewExpandRevision() {
	return { type: "INCREMENT_LIST_VIEW_EXPAND_REVISION" };
}
var editableRootKey, castArray, resetBlocks, validateBlocksToTemplate, selectPreviousBlock, selectNextBlock, multiSelect, replaceBlocks, createOnMove, moveBlocksDown, moveBlocksUp, moveBlocksToPosition, insertBlocks, hideInsertionPoint, synchronizeTemplate, __unstableDeleteSelection, __unstableSplitSelection, __unstableExpandSelection, mergeBlocks, removeBlocks, insertDefaultBlock, __unstableMarkAutomaticChange, duplicateBlocks, insertBeforeBlock, insertAfterBlock, flashBlock, registerInserterMediaCategory;
function init_actions$3() {
	return (init_actions$3 = __esmMin((() => {
		init_build_module$3();
		init_build_module$11();
		init_build_module$10();
		init_store$2();
		init_build_module();
		init_build_module$6();
		init_selection();
		init_private_actions$1();
		init_sibling_block_attributes();
		init_lock_unlock$2();
		({editableRootKey} = unlock$2(privateApis$1));
		castArray = (maybeArray) => Array.isArray(maybeArray) ? maybeArray : [maybeArray];
		resetBlocks = (blocks) => ({ dispatch }) => {
			dispatch({
				type: "RESET_BLOCKS",
				blocks
			});
			dispatch(validateBlocksToTemplate(blocks));
		};
		validateBlocksToTemplate = (blocks) => ({ select, dispatch }) => {
			const template = select.getTemplate();
			const templateLock = select.getTemplateLock();
			const isBlocksValidToTemplate = !template || templateLock !== "all" || doBlocksMatchTemplate(blocks, template);
			if (isBlocksValidToTemplate !== select.isValidTemplate()) {
				dispatch.setTemplateValidity(isBlocksValidToTemplate);
				return isBlocksValidToTemplate;
			}
		};
		selectPreviousBlock = (clientId, fallbackToParent = false) => ({ select, dispatch }) => {
			const previousBlockClientId = select.getPreviousBlockClientId(clientId);
			if (previousBlockClientId) dispatch.selectBlock(previousBlockClientId, -1);
			else if (fallbackToParent) {
				const firstParentClientId = select.getBlockRootClientId(clientId);
				if (firstParentClientId) dispatch.selectBlock(firstParentClientId, -1);
				else {
					const nextBlockClientId = select.getNextBlockClientId(clientId);
					if (nextBlockClientId) dispatch.selectBlock(nextBlockClientId, 0);
				}
			}
		};
		selectNextBlock = (clientId) => ({ select, dispatch }) => {
			const nextBlockClientId = select.getNextBlockClientId(clientId);
			if (nextBlockClientId) dispatch.selectBlock(nextBlockClientId);
		};
		multiSelect = (start, end, __experimentalInitialPosition = 0) => ({ select, dispatch }) => {
			if (select.getBlockRootClientId(start) !== select.getBlockRootClientId(end)) return;
			dispatch({
				type: "MULTI_SELECT",
				start,
				end,
				initialPosition: __experimentalInitialPosition
			});
			const blockCount = select.getSelectedBlockCount();
			const nestedBlockCount = select.getClientIdsOfDescendants(select.getMultiSelectedBlockClientIds()).length;
			speak(nestedBlockCount ? sprintf(_n("%1$s block selected, %2$s including nested blocks.", "%1$s blocks selected, %2$s including nested blocks.", blockCount), blockCount, blockCount + nestedBlockCount) : sprintf(_n("%s block selected.", "%s blocks selected.", blockCount), blockCount), "assertive");
		};
		replaceBlocks = (clientIds, blocks, indexToSelect, initialPosition = 0, meta) => ({ select, dispatch, registry }) => {
			clientIds = castArray(clientIds);
			blocks = castArray(blocks);
			const rootClientId = select.getBlockRootClientId(clientIds[0]);
			for (let index = 0; index < blocks.length; index++) {
				const block = blocks[index];
				if (!select.canInsertBlockType(block.name, rootClientId)) return;
			}
			const blocksWithTemplates = applyBlockTypeTemplates(blocks);
			registry.batch(() => {
				dispatch({
					type: "REPLACE_BLOCKS",
					clientIds,
					blocks: blocksWithTemplates,
					time: Date.now(),
					indexToSelect,
					initialPosition,
					meta
				});
				selectBlockTypeTemplate(select, dispatch, blocks, blocksWithTemplates, initialPosition);
				dispatch.ensureDefaultBlock();
			});
		};
		createOnMove = (type) => (clientIds, rootClientId) => ({ select, dispatch }) => {
			if (!select.canMoveBlocks(clientIds)) return;
			dispatch({
				type,
				clientIds: castArray(clientIds),
				rootClientId
			});
		};
		moveBlocksDown = createOnMove("MOVE_BLOCKS_DOWN");
		moveBlocksUp = createOnMove("MOVE_BLOCKS_UP");
		moveBlocksToPosition = (clientIds, fromRootClientId = "", toRootClientId = "", index) => ({ select, dispatch }) => {
			if (!select.canMoveBlocks(clientIds)) return;
			if (fromRootClientId !== toRootClientId) {
				if (!select.canRemoveBlocks(clientIds)) return;
				if (!select.canInsertBlocks(clientIds, toRootClientId)) return;
			}
			dispatch({
				type: "MOVE_BLOCKS_TO_POSITION",
				fromRootClientId,
				toRootClientId,
				clientIds,
				index
			});
		};
		insertBlocks = (blocks, index, rootClientId, updateSelection = true, initialPosition = 0, meta) => ({ select, dispatch, registry }) => {
			if (initialPosition !== null && typeof initialPosition === "object") {
				meta = initialPosition;
				initialPosition = 0;
				deprecated("meta argument in wp.data.dispatch('core/block-editor')", {
					since: "5.8",
					hint: "The meta argument is now the 6th argument of the function"
				});
			}
			blocks = castArray(blocks);
			const allowedBlocks = [];
			for (const block of blocks) if (select.canInsertBlockType(block.name, rootClientId)) allowedBlocks.push(block);
			if (allowedBlocks.length) {
				const blocksWithTemplates = applyBlockTypeTemplates(allowedBlocks);
				registry.batch(() => {
					dispatch({
						type: "INSERT_BLOCKS",
						blocks: blocksWithTemplates,
						index,
						rootClientId,
						time: Date.now(),
						updateSelection,
						initialPosition: updateSelection ? initialPosition : null,
						meta
					});
					selectBlockTypeTemplate(select, dispatch, allowedBlocks, blocksWithTemplates, initialPosition);
					if (updateSelection && initialPosition === 0) {
						const clientId = select.getSelectedBlockClientId();
						const blockType = clientId && getBlockType$1(select.getBlockName(clientId));
						const attributeKey = blockType?.[editableRootKey] && findRichTextAttributeKey(blockType);
						if (attributeKey) dispatch.selectionChange(clientId, attributeKey, 0, 0);
					}
				});
			}
		};
		hideInsertionPoint = () => ({ select, dispatch }) => {
			if (!select.isBlockInsertionPointVisible()) return;
			dispatch({ type: "HIDE_INSERTION_POINT" });
		};
		synchronizeTemplate = () => ({ select, dispatch }) => {
			dispatch({ type: "SYNCHRONIZE_TEMPLATE" });
			const updatedBlockList = synchronizeBlocksWithTemplate(select.getBlocks(), select.getTemplate());
			dispatch.resetBlocks(updatedBlockList);
		};
		__unstableDeleteSelection = (isForward) => ({ registry, select, dispatch }) => {
			const selectionAnchor = select.getSelectionStart();
			const selectionFocus = select.getSelectionEnd();
			if (selectionAnchor.clientId === selectionFocus.clientId) return;
			if (!selectionAnchor.attributeKey || !selectionFocus.attributeKey || typeof selectionAnchor.offset === "undefined" || typeof selectionFocus.offset === "undefined") return false;
			const anchorRootClientId = select.getBlockRootClientId(selectionAnchor.clientId);
			if (anchorRootClientId !== select.getBlockRootClientId(selectionFocus.clientId)) return;
			const blockOrder = select.getBlockOrder(anchorRootClientId);
			const anchorIndex = blockOrder.indexOf(selectionAnchor.clientId);
			const focusIndex = blockOrder.indexOf(selectionFocus.clientId);
			let selectionStart, selectionEnd;
			if (anchorIndex > focusIndex) {
				selectionStart = selectionFocus;
				selectionEnd = selectionAnchor;
			} else {
				selectionStart = selectionAnchor;
				selectionEnd = selectionFocus;
			}
			const targetSelection = isForward ? selectionEnd : selectionStart;
			const targetBlock = select.getBlock(targetSelection.clientId);
			const targetBlockType = getBlockType$1(targetBlock.name);
			if (!targetBlockType.merge) return;
			const selectionA = selectionStart;
			const selectionB = selectionEnd;
			const blockA = select.getBlock(selectionA.clientId);
			const blockB = select.getBlock(selectionB.clientId);
			const htmlA = blockA.attributes[selectionA.attributeKey];
			const htmlB = blockB.attributes[selectionB.attributeKey];
			let valueA = create({ html: htmlA });
			let valueB = create({ html: htmlB });
			valueA = remove(valueA, selectionA.offset, valueA.text.length);
			valueB = insert(valueB, "", 0, selectionB.offset);
			const cloneA = cloneBlock(blockA, { [selectionA.attributeKey]: toHTMLString({ value: valueA }) });
			const cloneB = cloneBlock(blockB, { [selectionB.attributeKey]: toHTMLString({ value: valueB }) });
			const followingBlock = isForward ? cloneA : cloneB;
			const blocksWithTheSameType = blockA.name === blockB.name ? [followingBlock] : switchToBlockType(followingBlock, targetBlockType.name);
			if (!blocksWithTheSameType || !blocksWithTheSameType.length) return;
			let updatedAttributes;
			if (isForward) {
				const blockToMerge = blocksWithTheSameType.pop();
				updatedAttributes = targetBlockType.merge(blockToMerge.attributes, cloneB.attributes);
			} else {
				const blockToMerge = blocksWithTheSameType.shift();
				updatedAttributes = targetBlockType.merge(cloneA.attributes, blockToMerge.attributes);
			}
			const newAttributeKey = retrieveSelectedAttribute(updatedAttributes);
			const convertedHtml = updatedAttributes[newAttributeKey];
			const convertedValue = create({ html: convertedHtml });
			const newOffset = convertedValue.text.indexOf("");
			const newHtml = toHTMLString({ value: remove(convertedValue, newOffset, newOffset + 1) });
			updatedAttributes[newAttributeKey] = newHtml;
			const selectedBlockClientIds = select.getSelectedBlockClientIds();
			const replacement = [
				...isForward ? blocksWithTheSameType : [],
				{
					...targetBlock,
					attributes: {
						...targetBlock.attributes,
						...updatedAttributes
					},
					innerBlocks: blockB.innerBlocks
				},
				...isForward ? [] : blocksWithTheSameType
			];
			registry.batch(() => {
				dispatch.selectionChange(targetBlock.clientId, newAttributeKey, newOffset, newOffset);
				dispatch.replaceBlocks(selectedBlockClientIds, replacement, 0, select.getSelectedBlocksInitialCaretPosition());
			});
		};
		__unstableSplitSelection = (blocks = []) => ({ registry, select, dispatch }) => {
			const selectionAnchor = select.getSelectionStart();
			const selectionFocus = select.getSelectionEnd();
			const anchorRootClientId = select.getBlockRootClientId(selectionAnchor.clientId);
			if (anchorRootClientId !== select.getBlockRootClientId(selectionFocus.clientId)) return;
			const blockOrder = select.getBlockOrder(anchorRootClientId);
			const anchorIndex = blockOrder.indexOf(selectionAnchor.clientId);
			const focusIndex = blockOrder.indexOf(selectionFocus.clientId);
			let selectionStart, selectionEnd;
			if (anchorIndex > focusIndex) {
				selectionStart = selectionFocus;
				selectionEnd = selectionAnchor;
			} else {
				selectionStart = selectionAnchor;
				selectionEnd = selectionFocus;
			}
			const selectionA = selectionStart;
			const selectionB = selectionEnd;
			const blockA = select.getBlock(selectionA.clientId);
			const blockB = select.getBlock(selectionB.clientId);
			const blockAType = getBlockType$1(blockA.name);
			const blockBType = getBlockType$1(blockB.name);
			const attributeKeyA = typeof selectionA.attributeKey === "string" ? selectionA.attributeKey : findRichTextAttributeKey(blockAType);
			const attributeKeyB = typeof selectionB.attributeKey === "string" ? selectionB.attributeKey : findRichTextAttributeKey(blockBType);
			const blockAttributes = select.getBlockAttributes(selectionA.clientId);
			if ((blockAttributes?.metadata?.bindings)?.[attributeKeyA]) {
				if (blocks.length) {
					const { createWarningNotice } = registry.dispatch(store$1);
					createWarningNotice(__("Blocks can't be inserted into other blocks with bindings"), { type: "snackbar" });
					return;
				}
				dispatch.insertAfterBlock(selectionA.clientId);
				return;
			}
			if (!attributeKeyA || !attributeKeyB || typeof selectionAnchor.offset === "undefined" || typeof selectionFocus.offset === "undefined") return;
			if (selectionA.clientId === selectionB.clientId && attributeKeyA === attributeKeyB && selectionA.offset === selectionB.offset) {
				if (blocks.length) {
					if (isUnmodifiedDefaultBlock(blockA, "content")) {
						dispatch.replaceBlocks([selectionA.clientId], blocks, blocks.length - 1, -1);
						return;
					}
				} else if (!select.getBlockOrder(selectionA.clientId).length) {
					function createEmpty() {
						const defaultBlockName = getDefaultBlockName$1();
						if (select.canInsertBlockType(defaultBlockName, anchorRootClientId)) return createBlock(defaultBlockName);
						const name = select.getBlockName(selectionA.clientId);
						return createBlock(name, getSiblingBlockAttributes(name, blockAttributes));
					}
					const length = blockAttributes[attributeKeyA].length;
					if (selectionA.offset === 0 && length) {
						dispatch.insertBlocks([createEmpty()], select.getBlockIndex(selectionA.clientId), anchorRootClientId, false);
						return;
					}
					if (selectionA.offset === length) {
						dispatch.insertBlocks([createEmpty()], select.getBlockIndex(selectionA.clientId) + 1, anchorRootClientId);
						return;
					}
				}
			}
			const htmlA = blockA.attributes[attributeKeyA];
			const htmlB = blockB.attributes[attributeKeyB];
			let valueA = create({ html: htmlA });
			let valueB = create({ html: htmlB });
			valueA = remove(valueA, selectionA.offset, valueA.text.length);
			valueB = remove(valueB, 0, selectionB.offset);
			let head = {
				...blockA,
				innerBlocks: blockA.clientId === blockB.clientId ? [] : blockA.innerBlocks,
				attributes: {
					...blockA.attributes,
					[attributeKeyA]: toHTMLString({ value: valueA })
				}
			};
			let tail = {
				...blockB,
				clientId: blockA.clientId === blockB.clientId ? createBlock(blockB.name).clientId : blockB.clientId,
				attributes: {
					...blockB.attributes,
					[attributeKeyB]: toHTMLString({ value: valueB })
				}
			};
			const defaultBlockName = getDefaultBlockName$1();
			if (blockA.clientId === blockB.clientId && defaultBlockName && tail.name !== defaultBlockName && select.canInsertBlockType(defaultBlockName, anchorRootClientId)) {
				const switched = switchToBlockType(tail, defaultBlockName);
				if (switched?.length === 1) tail = switched[0];
			}
			if (!blocks.length) {
				registry.batch(() => {
					dispatch.replaceBlocks(select.getSelectedBlockClientIds(), [head, tail]);
					const tailType = getBlockType$1(tail.name);
					const tailKey = tailType?.[editableRootKey] && findRichTextAttributeKey(tailType);
					if (tailKey) dispatch.selectionChange(tail.clientId, tailKey, 0, 0);
				});
				return;
			}
			let selection;
			const output = [];
			const clonedBlocks = [...blocks];
			const firstBlock = clonedBlocks.shift();
			const headType = getBlockType$1(head.name);
			const firstBlocks = headType.merge && firstBlock.name === headType.name ? [firstBlock] : switchToBlockType(firstBlock, headType.name);
			if (firstBlocks?.length) {
				const first = firstBlocks.shift();
				head = {
					...head,
					attributes: {
						...head.attributes,
						...headType.merge(head.attributes, first.attributes)
					}
				};
				output.push(head);
				selection = {
					clientId: head.clientId,
					attributeKey: attributeKeyA,
					offset: create({ html: head.attributes[attributeKeyA] }).text.length
				};
				clonedBlocks.unshift(...firstBlocks);
			} else {
				if (!isUnmodifiedBlock(head)) output.push(head);
				output.push(firstBlock);
			}
			const lastBlock = clonedBlocks.pop();
			const tailType = getBlockType$1(tail.name);
			if (clonedBlocks.length) output.push(...clonedBlocks);
			if (lastBlock) {
				const lastBlocks = tailType.merge && tailType.name === lastBlock.name ? [lastBlock] : switchToBlockType(lastBlock, tailType.name);
				if (lastBlocks?.length) {
					const last = lastBlocks.pop();
					output.push({
						...tail,
						attributes: {
							...tail.attributes,
							...tailType.merge(last.attributes, tail.attributes)
						}
					});
					output.push(...lastBlocks);
					selection = {
						clientId: tail.clientId,
						attributeKey: attributeKeyB,
						offset: create({ html: last.attributes[attributeKeyB] }).text.length
					};
				} else {
					output.push(lastBlock);
					if (!isUnmodifiedBlock(tail)) output.push(tail);
				}
			} else if (!isUnmodifiedBlock(tail)) output.push(tail);
			registry.batch(() => {
				dispatch.replaceBlocks(select.getSelectedBlockClientIds(), output, output.length - 1, 0);
				if (selection) dispatch.selectionChange(selection.clientId, selection.attributeKey, selection.offset, selection.offset);
			});
		};
		__unstableExpandSelection = () => ({ select, dispatch }) => {
			const selectionAnchor = select.getSelectionStart();
			const selectionFocus = select.getSelectionEnd();
			dispatch.selectionChange({
				start: { clientId: selectionAnchor.clientId },
				end: { clientId: selectionFocus.clientId }
			});
		};
		mergeBlocks = (firstBlockClientId, secondBlockClientId) => ({ registry, select, dispatch }) => {
			const clientIdA = firstBlockClientId;
			const clientIdB = secondBlockClientId;
			const blockA = select.getBlock(clientIdA);
			const blockAType = getBlockType$1(blockA.name);
			if (!blockAType || select.getBlockEditingMode(clientIdA) === "disabled" || select.getBlockEditingMode(clientIdB) === "disabled") return;
			const blockB = select.getBlock(clientIdB);
			if (!blockAType.merge && getBlockSupport$1(blockA.name, "__experimentalOnMerge")) {
				const blocksWithTheSameType = switchToBlockType(blockB, blockAType.name);
				if (blocksWithTheSameType?.length !== 1) {
					dispatch.selectBlock(blockA.clientId);
					return;
				}
				const [blockWithSameType] = blocksWithTheSameType;
				if (blockWithSameType.innerBlocks.length < 1) {
					dispatch.selectBlock(blockA.clientId);
					return;
				}
				registry.batch(() => {
					dispatch.insertBlocks(blockWithSameType.innerBlocks, void 0, clientIdA);
					dispatch.removeBlock(clientIdB);
					dispatch.selectBlock(blockWithSameType.innerBlocks[0].clientId);
					const nextBlockClientId = select.getNextBlockClientId(clientIdA);
					if (nextBlockClientId && select.getBlockName(clientIdA) === select.getBlockName(nextBlockClientId)) {
						const rootAttributes = select.getBlockAttributes(clientIdA);
						const previousRootAttributes = select.getBlockAttributes(nextBlockClientId);
						if (Object.keys(rootAttributes).every((key) => rootAttributes[key] === previousRootAttributes[key])) {
							dispatch.moveBlocksToPosition(select.getBlockOrder(nextBlockClientId), nextBlockClientId, clientIdA);
							dispatch.removeBlock(nextBlockClientId, false);
						}
					}
				});
				return;
			}
			if (isUnmodifiedDefaultBlock(blockA) || !!blockAType.merge && blockA.name !== blockB.name && isUnmodifiedBlock(blockA, "content")) {
				if (select.isBlockSelected(clientIdA)) registry.batch(() => {
					dispatch.removeBlock(clientIdA, false);
					dispatch.selectBlock(clientIdB, 0);
				});
				else dispatch.removeBlock(clientIdA, false);
				return;
			}
			if (isUnmodifiedDefaultBlock(blockB)) {
				dispatch.removeBlock(clientIdB, select.isBlockSelected(clientIdB));
				return;
			}
			if (!blockAType.merge) {
				if (isUnmodifiedBlock(blockB, "content")) dispatch.removeBlock(clientIdB, select.isBlockSelected(clientIdB));
				else dispatch.selectBlock(blockA.clientId);
				return;
			}
			const blockBType = getBlockType$1(blockB.name);
			const { clientId, attributeKey, offset } = select.getSelectionStart();
			const attributeDefinition = (clientId === clientIdA ? blockAType : blockBType).attributes[attributeKey];
			const canRestoreTextSelection = (clientId === clientIdA || clientId === clientIdB) && attributeKey !== void 0 && offset !== void 0 && !!attributeDefinition;
			if (!attributeDefinition) {
				if (typeof attributeKey === "number") window.console.error(`RichText needs an identifier prop that is the block attribute key of the attribute it controls. Its type is expected to be a string, but was ${typeof attributeKey}`);
				else window.console.error("The RichText identifier prop does not match any attributes defined by the block.");
			}
			const cloneA = cloneBlock(blockA);
			const cloneB = cloneBlock(blockB);
			if (canRestoreTextSelection) {
				const selectedBlock = clientId === clientIdA ? cloneA : cloneB;
				const html = selectedBlock.attributes[attributeKey];
				const value = insert(create({ html }), "", offset, offset);
				selectedBlock.attributes[attributeKey] = toHTMLString({ value });
			}
			const blocksWithTheSameType = blockA.name === blockB.name ? [cloneB] : switchToBlockType(cloneB, blockA.name);
			if (!blocksWithTheSameType || !blocksWithTheSameType.length) return;
			const updatedAttributes = blockAType.merge(cloneA.attributes, blocksWithTheSameType[0].attributes);
			if (canRestoreTextSelection) {
				const newAttributeKey = retrieveSelectedAttribute(updatedAttributes);
				const convertedHtml = updatedAttributes[newAttributeKey];
				const convertedValue = create({ html: convertedHtml });
				const newOffset = convertedValue.text.indexOf("");
				updatedAttributes[newAttributeKey] = toHTMLString({ value: remove(convertedValue, newOffset, newOffset + 1) });
				dispatch.selectionChange(blockA.clientId, newAttributeKey, newOffset, newOffset);
			}
			dispatch.replaceBlocks([blockA.clientId, blockB.clientId], [{
				...blockA,
				attributes: {
					...blockA.attributes,
					...updatedAttributes
				}
			}, ...blocksWithTheSameType.slice(1)], 0);
		};
		removeBlocks = (clientIds, selectPrevious = true) => privateRemoveBlocks(clientIds, selectPrevious);
		insertDefaultBlock = (attributes, rootClientId, index) => ({ dispatch }) => {
			const defaultBlockName = getDefaultBlockName$1();
			if (!defaultBlockName) return;
			const block = createBlock(defaultBlockName, attributes);
			return dispatch.insertBlock(block, index, rootClientId);
		};
		__unstableMarkAutomaticChange = () => ({ dispatch }) => {
			dispatch({ type: "MARK_AUTOMATIC_CHANGE" });
			const { requestIdleCallback = (cb) => setTimeout(cb, 100) } = window;
			requestIdleCallback(() => {
				dispatch({ type: "MARK_AUTOMATIC_CHANGE_FINAL" });
			});
		};
		duplicateBlocks = (clientIds, updateSelection = true) => ({ select, dispatch }) => {
			if (!clientIds || !clientIds.length) return;
			const blocks = select.getBlocksByClientId(clientIds);
			if (blocks.some((block) => !block)) return;
			if (blocks.map((block) => block.name).some((blockName) => !hasBlockSupport$1(blockName, "multiple", true))) return;
			const rootClientId = select.getBlockRootClientId(clientIds[0]);
			const clientIdsArray = castArray(clientIds);
			const lastSelectedIndex = select.getBlockIndex(clientIdsArray[clientIdsArray.length - 1]);
			const clonedBlocks = blocks.map((block) => cloneSanitizedBlock(block));
			dispatch.insertBlocks(clonedBlocks, lastSelectedIndex + 1, rootClientId, updateSelection);
			if (clonedBlocks.length > 1 && updateSelection) dispatch.multiSelect(clonedBlocks[0].clientId, clonedBlocks[clonedBlocks.length - 1].clientId);
			return clonedBlocks.map((block) => block.clientId);
		};
		insertBeforeBlock = (clientId) => ({ select, dispatch }) => {
			if (!clientId) return;
			const rootClientId = select.getBlockRootClientId(clientId);
			const blockIndex = select.getBlockIndex(clientId);
			const { defaultBlock: directInsertBlock } = rootClientId ? select.getBlockListSettings(rootClientId) ?? {} : {};
			if (!directInsertBlock) return dispatch.insertDefaultBlock({}, rootClientId, blockIndex);
			const block = createBlock(directInsertBlock.name, {
				...directInsertBlock.attributes,
				...select.getBlockName(clientId) === directInsertBlock.name ? getSiblingBlockAttributes(directInsertBlock.name, select.getBlockAttributes(clientId)) : {}
			});
			return dispatch.insertBlock(block, blockIndex, rootClientId);
		};
		insertAfterBlock = (clientId) => ({ select, dispatch }) => {
			if (!clientId) return;
			const rootClientId = select.getBlockRootClientId(clientId);
			const blockIndex = select.getBlockIndex(clientId);
			const { defaultBlock: directInsertBlock } = rootClientId ? select.getBlockListSettings(rootClientId) ?? {} : {};
			if (!directInsertBlock) return dispatch.insertDefaultBlock({}, rootClientId, blockIndex + 1);
			const block = createBlock(directInsertBlock.name, {
				...directInsertBlock.attributes,
				...select.getBlockName(clientId) === directInsertBlock.name ? getSiblingBlockAttributes(directInsertBlock.name, select.getBlockAttributes(clientId)) : {}
			});
			return dispatch.insertBlock(block, blockIndex + 1, rootClientId);
		};
		flashBlock = (clientId, timeout = 150) => async ({ dispatch }) => {
			dispatch(toggleBlockHighlight(clientId, true));
			await new Promise((resolve) => setTimeout(resolve, timeout));
			dispatch(toggleBlockHighlight(clientId, false));
		};
		registerInserterMediaCategory = (category) => ({ select, dispatch }) => {
			if (!category || typeof category !== "object") {
				console.error("Category should be an `InserterMediaCategory` object.");
				return;
			}
			if (!category.name) {
				console.error("Category should have a `name` that should be unique among all media categories.");
				return;
			}
			if (!category.labels?.name) {
				console.error("Category should have a `labels.name`.");
				return;
			}
			if (![
				"image",
				"audio",
				"video"
			].includes(category.mediaType)) {
				console.error("Category should have `mediaType` property that is one of `image|audio|video`.");
				return;
			}
			if (!category.fetch || typeof category.fetch !== "function") {
				console.error("Category should have a `fetch` function defined with the following signature `(InserterMediaRequest) => Promise<InserterMediaItem[]|InserterMediaResponse>`.");
				return;
			}
			const registeredInserterMediaCategories = select.getRegisteredInserterMediaCategories();
			if (registeredInserterMediaCategories.some(({ name }) => name === category.name)) {
				console.error(`A category is already registered with the same name: "${category.name}".`);
				return;
			}
			if (registeredInserterMediaCategories.some(({ labels: { name } = {} }) => name === category.labels?.name)) {
				console.error(`A category is already registered with the same labels.name: "${category.labels.name}".`);
				return;
			}
			dispatch({
				type: "REGISTER_INSERTER_MEDIA_CATEGORY",
				category: {
					...category,
					isExternalResource: true
				}
			});
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/store/index.ts
var storeConfig, store, registeredStore;
function init_store$3() {
	return (init_store$3 = __esmMin((() => {
		init_build_module$13();
		init_reducer$2();
		init_selectors$2();
		init_private_actions$1();
		init_private_selectors$1();
		init_actions$3();
		init_constants$2();
		init_lock_unlock$2();
		storeConfig = {
			reducer: reducer_default$1,
			selectors: selectors_exports$1,
			actions: actions_exports
		};
		store = createReduxStore(STORE_NAME, {
			...storeConfig,
			persist: ["preferences"]
		});
		registeredStore = registerStore(STORE_NAME, {
			...storeConfig,
			persist: ["preferences"]
		});
		unlock$2(registeredStore).registerPrivateActions(private_actions_exports);
		unlock$2(registeredStore).registerPrivateSelectors(private_selectors_exports);
		unlock$2(store).registerPrivateActions(private_actions_exports);
		unlock$2(store).registerPrivateSelectors(private_selectors_exports);
	})))();
}
//#endregion
export { init_utils$2 as $, toTree as $n, cloneBlock as $t, privateApis as A, setDefaultBlockName$1 as An, init_apply_built_in_validation_fixes as At, getBlockStyleVariationSelector as B, remove as Bn, getBlockInnerHTML as Bt, init_object$1 as C, getGroupingBlockName$1 as Cn, init_api as Ct, BLOCK_VISIBILITY_VIEWPORT_ENTRIES as D, isReusableBlock as Dn, init_parser as Dt, BLOCK_VISIBILITY_VIEWPORTS as E, init_registration as En, synchronizeBlocksWithTemplate as Et, PRESET_METADATA as F, __EXPERIMENTAL_ELEMENTS as Fn, init_children as Ft, scopeSelector as G, RichTextData as Gn, getSaveElement as Gt, getValueFromVariable as H, insert as Hn, getBlockProps as Ht, ROOT_BLOCK_SELECTOR as I, __EXPERIMENTAL_STYLE_PROPERTY as In, init_validation as It, init_typography as J, getTextContent as Jn, init_serialize_raw_block as Jt, splitSelectorList as K, create as Kn, init_serializer as Kt, ROOT_CSS_PROPERTIES_SELECTOR as L, init_constants as Ln, validateBlock as Lt, init_viewport as M, setGroupingBlockName$1 as Mn, init_get_block_attributes as Mt, getDuotoneFilter as N, setUnregisteredTypeHandlerName as Nn, parseWithAttributeSchema as Nt, init_constants$4 as O, isTemplatePart as On, parse as Ot, init_duotone as P, unregisterBlockVariation as Pn, children_default as Pt, getCSSValueFromRawStyle as Q, init_to_tree as Qn, removep as Qt, appendToSelector as R, init_build_module as Rn, __unstableSerializeAndClean as Rt, getValueFromObjectPath as S, getDefaultBlockName$1 as Sn, init_build_module$3 as St, setImmutably as T, hasBlockSupport$1 as Tn, init_templates as Tt, init_common as U, concat$1 as Un, getInnerBlocksProps as Ut, getResolvedValue as V, init_insert as Vn, getBlockMenuDefaultClassName as Vt, scopeFeatureSelectors as W, init_concat as Wn, getSaveContent as Wt, generateBoxRules as X, init_to_html_string as Xn, autop as Xt, camelCaseJoin as Y, init_get_text_content as Yn, serializeRawBlock as Yt, generateRule as Z, toHTMLString as Zn, init_build_module$2 as Zt, getPopulatedCategories as _, getBlockBindingsSource$1 as _n, init_dist_es2015 as _r, openMediaEditorModalKey as _t, init_sibling_block_attributes as a, getBlockTransforms as an, normaliseFormats as ar, init_constants$2 as at, myPatternsCategory as b, getBlockTypes$1 as bn, selectBlockPatternsKey as bt, init_store$2 as c, switchToBlockType as cn, init_store as cr, globalStylesDataKey as ct, orderBy as d, getBlockAttributesNamesByRole as dn, stripHTML as dr, isIsolatedEditorKey as dt, cloneSanitizedBlock as en, getActiveFormats as er, safeDecodeURI as et, init_utils$4 as f, getBlockLabel as fn, init_safe_html as fr, isNavigationOverlayContextKey as ft, allPatternsCategory as g, sanitizeBlockAttributes as gn, camelCase as gr, mediaUploadOnSuccessKey as gt, INSERTER_SYNC_TYPES as h, isUnmodifiedDefaultBlock as hn, remove$2 as hr, mediaSideloadFromUrlKey as ht, getSiblingBlockAttributes as i, getBlockFromExample as in, init_normalise_formats as ir, STORE_NAME as it, getResponsiveMediaQueries as j, setFreeformContentHandlerName as jn, getBlockAttributes$1 as jt, init_private_apis as k, registerBlockType as kn, applyBuiltInValidationFixes as kt, store$1 as l, init_store$1 as ln, store$3 as lr, globalStylesLinksDataKey as lt, INSERTER_PATTERN_TYPES as m, isUnmodifiedBlock as mn, init_remove as mr, mediaEditKey as mt, store as n, createBlocksFromInnerBlocksTemplate as nn, createElement as nr, init_object as nt, init_selection as o, getPossibleBlockTransformations as on, init_is_format_equal as or, deviceTypeKey as ot, isFiltered as p, init_utils as pn, safeHTML as pr, isNavigationPostEditorKey as pt, getTypographyFontSizeValue as q, init_create as qn, serialize as qt, storeConfig as r, findTransform as rn, init_create_element as rr, setImmutably$1 as rt, retrieveSelectedAttribute as s, init_factory as sn, isFormatEqual as sr, getMediaSelectKey as st, init_store$3 as t, createBlock as tn, init_get_active_formats as tr, getValueFromObjectPath$1 as tt, init_sorting as u, store$2 as un, init_strip_html as ur, init_private_keys as ut, init_utils$3 as v, getBlockSupport$1 as vn, reusableBlocksSelectKey as vt, isPlainObject as w, getUnregisteredTypeHandlerName as wn, privateApis$1 as wt, starterPatternsCategory as x, getBlockVariations$1 as xn, userPatternCategoriesSelectKey as xt, isPatternFiltered as y, getBlockType$1 as yn, sectionRootClientIdKey as yt, getBlockStyleVariationFeatureSelector as z, init_remove$1 as zn, getBlockDefaultClassName as zt };
