import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { d as isPlainObject, n as paramCase, t as init_dist_es2015 } from "./dist.es2015-BYklxwDS.js";
import { a as isValidAttributeName, i as init_build_module, r as escapeHTML, t as escapeAttribute } from "./build-module-Ci82NGER.js";
//#region ../packages/element/build-module/raw-html.mjs
function RawHTML({ children, ...props }) {
	let rawHtml = "";
	import_react.Children.toArray(children).forEach((child) => {
		if (typeof child === "string" && child.trim() !== "") rawHtml += child;
	});
	return (0, import_react.createElement)("div", {
		dangerouslySetInnerHTML: { __html: rawHtml },
		...props
	});
}
function init_raw_html() {
	return (init_raw_html = __esmMin((() => {
		init_react();
		RawHTML.__docgenInfo = {
			"description": "",
			"methods": [],
			"displayName": "RawHTML"
		};
	})))();
}
//#endregion
//#region ../packages/element/build-module/serialize.mjs
function hasPrefix(string, prefixes) {
	return prefixes.some((prefix) => string.indexOf(prefix) === 0);
}
function isInternalAttribute(attribute) {
	return "key" === attribute || "children" === attribute;
}
function getNormalAttributeValue(attribute, value) {
	switch (attribute) {
		case "style": return renderStyle(value);
	}
	return value;
}
function getNormalAttributeName(attribute) {
	switch (attribute) {
		case "htmlFor": return "for";
		case "className": return "class";
	}
	const attributeLowerCase = attribute.toLowerCase();
	if (CASE_SENSITIVE_SVG_ATTRIBUTES[attributeLowerCase]) return CASE_SENSITIVE_SVG_ATTRIBUTES[attributeLowerCase];
	else if (SVG_ATTRIBUTE_WITH_DASHES_LIST[attributeLowerCase]) return paramCase(SVG_ATTRIBUTE_WITH_DASHES_LIST[attributeLowerCase]);
	else if (SVG_ATTRIBUTES_WITH_COLONS[attributeLowerCase]) return SVG_ATTRIBUTES_WITH_COLONS[attributeLowerCase];
	return attributeLowerCase;
}
function getNormalStylePropertyName(property) {
	if (property.startsWith("--")) return property;
	if (hasPrefix(property, [
		"ms",
		"O",
		"Moz",
		"Webkit"
	])) return "-" + paramCase(property);
	return paramCase(property);
}
function getNormalStylePropertyValue(property, value) {
	if (typeof value === "number" && 0 !== value && !hasPrefix(property, ["--"]) && !CSS_PROPERTIES_SUPPORTS_UNITLESS.has(property)) return value + "px";
	return value;
}
function renderElement(element, context, legacyContext = {}) {
	if (null === element || void 0 === element || false === element) return "";
	if (Array.isArray(element)) return renderChildren(element, context, legacyContext);
	switch (typeof element) {
		case "string": return escapeHTML(element);
		case "number": return element.toString();
	}
	const { type, props } = element;
	switch (type) {
		case import_react.StrictMode:
		case import_react.Fragment: return renderChildren(props.children, context, legacyContext);
		case RawHTML:
			const { children, ...wrapperProps } = props;
			return renderNativeComponent(!Object.keys(wrapperProps).length ? null : "div", {
				...wrapperProps,
				dangerouslySetInnerHTML: { __html: children }
			}, context, legacyContext);
	}
	switch (typeof type) {
		case "string": return renderNativeComponent(type, props, context, legacyContext);
		case "function":
			if (type.prototype && typeof type.prototype.render === "function") return renderComponent(type, props, context, legacyContext);
			return renderElement(type(props, legacyContext), context, legacyContext);
	}
	switch (type && type.$$typeof) {
		case Provider.$$typeof: return renderChildren(props.children, props.value, legacyContext);
		case Consumer.$$typeof:
			const contextValue = context !== void 0 ? context : (type._context || type)._currentValue;
			return renderElement(props.children(contextValue), context, legacyContext);
		case ForwardRef.$$typeof: return renderElement(type.render(props), context, legacyContext);
		case Memo.$$typeof: return renderElement((0, import_react.createElement)(type.type, props), context, legacyContext);
	}
	return "";
}
function renderNativeComponent(type, props, context, legacyContext = {}) {
	let content = "";
	if (type === "textarea" && props.hasOwnProperty("value")) {
		content = renderChildren(props.value, context, legacyContext);
		const { value, ...restProps } = props;
		props = restProps;
	} else if (props.dangerouslySetInnerHTML && typeof props.dangerouslySetInnerHTML.__html === "string") content = props.dangerouslySetInnerHTML.__html;
	else if (typeof props.children !== "undefined") content = renderChildren(props.children, context, legacyContext);
	if (!type) return content;
	const attributes = renderAttributes(props);
	if (SELF_CLOSING_TAGS.has(type)) return "<" + type + attributes + "/>";
	return "<" + type + attributes + ">" + content + "</" + type + ">";
}
function renderComponent(Component, props, context, legacyContext = {}) {
	const instance = new Component(props, legacyContext);
	if (typeof instance.getChildContext === "function") Object.assign(legacyContext, instance.getChildContext());
	return renderElement(instance.render(), context, legacyContext);
}
function renderChildren(children, context, legacyContext = {}) {
	let result = "";
	const childrenArray = Array.isArray(children) ? children : [children];
	for (let i = 0; i < childrenArray.length; i++) {
		const child = childrenArray[i];
		result += renderElement(child, context, legacyContext);
	}
	return result;
}
function renderAttributes(props) {
	let result = "";
	for (const key in props) {
		const attribute = getNormalAttributeName(key);
		if (!isValidAttributeName(attribute)) continue;
		let value = getNormalAttributeValue(key, props[key]);
		if (!ATTRIBUTES_TYPES.has(typeof value)) continue;
		if (isInternalAttribute(key)) continue;
		const isBooleanAttribute = BOOLEAN_ATTRIBUTES.has(attribute);
		if (isBooleanAttribute && value === false) continue;
		const isMeaningfulAttribute = isBooleanAttribute || hasPrefix(key, ["data-", "aria-"]) || ENUMERATED_ATTRIBUTES.has(attribute);
		if (typeof value === "boolean" && !isMeaningfulAttribute) continue;
		result += " " + attribute;
		if (isBooleanAttribute) continue;
		if (typeof value === "string") value = escapeAttribute(value);
		result += "=\"" + value + "\"";
	}
	return result;
}
function renderStyle(style) {
	if (!isPlainObject(style)) return style;
	let result;
	const styleObj = style;
	for (const property in styleObj) {
		const value = styleObj[property];
		if (null === value || void 0 === value) continue;
		if (result) result += ";";
		else result = "";
		const normalName = getNormalStylePropertyName(property);
		const normalValue = getNormalStylePropertyValue(property, value);
		result += normalName + ":" + normalValue;
	}
	return result;
}
var Context, Provider, Consumer, ForwardRef, Memo, ATTRIBUTES_TYPES, SELF_CLOSING_TAGS, BOOLEAN_ATTRIBUTES, ENUMERATED_ATTRIBUTES, CSS_PROPERTIES_SUPPORTS_UNITLESS, SVG_ATTRIBUTE_WITH_DASHES_LIST, CASE_SENSITIVE_SVG_ATTRIBUTES, SVG_ATTRIBUTES_WITH_COLONS, serialize_default;
function init_serialize() {
	return (init_serialize = __esmMin((() => {
		init_dist_es2015();
		init_build_module();
		init_react();
		init_raw_html();
		Context = (0, import_react.createContext)(void 0);
		Context.displayName = "ElementContext";
		({Provider, Consumer} = Context);
		ForwardRef = (0, import_react.forwardRef)(() => {
			return null;
		});
		Memo = (0, import_react.memo)(() => {
			return null;
		});
		ATTRIBUTES_TYPES = /* @__PURE__ */ new Set([
			"string",
			"boolean",
			"number"
		]);
		SELF_CLOSING_TAGS = /* @__PURE__ */ new Set([
			"area",
			"base",
			"br",
			"col",
			"command",
			"embed",
			"hr",
			"img",
			"input",
			"keygen",
			"link",
			"meta",
			"param",
			"source",
			"track",
			"wbr"
		]);
		BOOLEAN_ATTRIBUTES = /* @__PURE__ */ new Set([
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
		]);
		ENUMERATED_ATTRIBUTES = /* @__PURE__ */ new Set([
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
		]);
		CSS_PROPERTIES_SUPPORTS_UNITLESS = /* @__PURE__ */ new Set([
			"animation",
			"animationIterationCount",
			"baselineShift",
			"borderImageOutset",
			"borderImageSlice",
			"borderImageWidth",
			"columnCount",
			"cx",
			"cy",
			"fillOpacity",
			"flexGrow",
			"flexShrink",
			"floodOpacity",
			"fontWeight",
			"gridColumnEnd",
			"gridColumnStart",
			"gridRowEnd",
			"gridRowStart",
			"lineHeight",
			"opacity",
			"order",
			"orphans",
			"r",
			"rx",
			"ry",
			"shapeImageThreshold",
			"stopOpacity",
			"strokeDasharray",
			"strokeDashoffset",
			"strokeMiterlimit",
			"strokeOpacity",
			"strokeWidth",
			"tabSize",
			"widows",
			"x",
			"y",
			"zIndex",
			"zoom"
		]);
		SVG_ATTRIBUTE_WITH_DASHES_LIST = [
			"accentHeight",
			"alignmentBaseline",
			"arabicForm",
			"baselineShift",
			"capHeight",
			"clipPath",
			"clipRule",
			"colorInterpolation",
			"colorInterpolationFilters",
			"colorProfile",
			"colorRendering",
			"dominantBaseline",
			"enableBackground",
			"fillOpacity",
			"fillRule",
			"floodColor",
			"floodOpacity",
			"fontFamily",
			"fontSize",
			"fontSizeAdjust",
			"fontStretch",
			"fontStyle",
			"fontVariant",
			"fontWeight",
			"glyphName",
			"glyphOrientationHorizontal",
			"glyphOrientationVertical",
			"horizAdvX",
			"horizOriginX",
			"imageRendering",
			"letterSpacing",
			"lightingColor",
			"markerEnd",
			"markerMid",
			"markerStart",
			"overlinePosition",
			"overlineThickness",
			"paintOrder",
			"panose1",
			"pointerEvents",
			"renderingIntent",
			"shapeRendering",
			"stopColor",
			"stopOpacity",
			"strikethroughPosition",
			"strikethroughThickness",
			"strokeDasharray",
			"strokeDashoffset",
			"strokeLinecap",
			"strokeLinejoin",
			"strokeMiterlimit",
			"strokeOpacity",
			"strokeWidth",
			"textAnchor",
			"textDecoration",
			"textRendering",
			"underlinePosition",
			"underlineThickness",
			"unicodeBidi",
			"unicodeRange",
			"unitsPerEm",
			"vAlphabetic",
			"vHanging",
			"vIdeographic",
			"vMathematical",
			"vectorEffect",
			"vertAdvY",
			"vertOriginX",
			"vertOriginY",
			"wordSpacing",
			"writingMode",
			"xmlnsXlink",
			"xHeight"
		].reduce((map, attribute) => {
			map[attribute.toLowerCase()] = attribute;
			return map;
		}, {});
		CASE_SENSITIVE_SVG_ATTRIBUTES = [
			"allowReorder",
			"attributeName",
			"attributeType",
			"autoReverse",
			"baseFrequency",
			"baseProfile",
			"calcMode",
			"clipPathUnits",
			"contentScriptType",
			"contentStyleType",
			"diffuseConstant",
			"edgeMode",
			"externalResourcesRequired",
			"filterRes",
			"filterUnits",
			"glyphRef",
			"gradientTransform",
			"gradientUnits",
			"kernelMatrix",
			"kernelUnitLength",
			"keyPoints",
			"keySplines",
			"keyTimes",
			"lengthAdjust",
			"limitingConeAngle",
			"markerHeight",
			"markerUnits",
			"markerWidth",
			"maskContentUnits",
			"maskUnits",
			"numOctaves",
			"pathLength",
			"patternContentUnits",
			"patternTransform",
			"patternUnits",
			"pointsAtX",
			"pointsAtY",
			"pointsAtZ",
			"preserveAlpha",
			"preserveAspectRatio",
			"primitiveUnits",
			"refX",
			"refY",
			"repeatCount",
			"repeatDur",
			"requiredExtensions",
			"requiredFeatures",
			"specularConstant",
			"specularExponent",
			"spreadMethod",
			"startOffset",
			"stdDeviation",
			"stitchTiles",
			"suppressContentEditableWarning",
			"suppressHydrationWarning",
			"surfaceScale",
			"systemLanguage",
			"tableValues",
			"targetX",
			"targetY",
			"textLength",
			"viewBox",
			"viewTarget",
			"xChannelSelector",
			"yChannelSelector"
		].reduce((map, attribute) => {
			map[attribute.toLowerCase()] = attribute;
			return map;
		}, {});
		SVG_ATTRIBUTES_WITH_COLONS = [
			"xlink:actuate",
			"xlink:arcrole",
			"xlink:href",
			"xlink:role",
			"xlink:show",
			"xlink:title",
			"xlink:type",
			"xml:base",
			"xml:lang",
			"xml:space",
			"xmlns:xlink"
		].reduce((map, attribute) => {
			map[attribute.replace(":", "").toLowerCase()] = attribute;
			return map;
		}, {});
		serialize_default = renderElement;
	})))();
}
//#endregion
export { init_raw_html as i, serialize_default as n, RawHTML as r, init_serialize as t };
