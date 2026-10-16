import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
//#region ../packages/components/src/utils/polymorphic-element.tsx
function isValidIntrinsicElementProp(prop, element) {
	if (customAttributeRegExp.test(prop) || eventHandlerRegExp.test(prop)) return true;
	if (baseElementProps.has(prop) || compatElementProps.has(prop)) return true;
	return svgElementNames.has(element) && svgElementProps.has(prop);
}
function filterIntrinsicElementProps(props, element) {
	return Object.fromEntries(Object.entries(props).filter(([prop]) => isValidIntrinsicElementProp(prop, element)));
}
function UnforwardedPolymorphicElement({ as, ...props }, ref) {
	const Element = as || "div";
	const forwardedProps = typeof Element === "string" ? filterIntrinsicElementProps(props, Element) : props;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Element, {
		ref,
		...forwardedProps
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 132,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, customAttributeRegExp, eventHandlerRegExp, svgElementNames, baseElementProps, svgElementProps, compatElementProps, PolymorphicElement;
function init_polymorphic_element() {
	return (init_polymorphic_element = __esmMin((() => {
		init_react();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/utils/polymorphic-element.tsx";
		customAttributeRegExp = /^(data|aria|x)-/i;
		eventHandlerRegExp = /^on[A-Z]/;
		svgElementNames = new Set(`animate animateMotion animateTransform circle clipPath defs desc ellipse
	feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix
	feDiffuseLighting feDisplacementMap feDistantLight feDropShadow feFlood
	feFuncA feFuncB feFuncG feFuncR feGaussianBlur feImage feMerge feMergeNode
	feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile
	feTurbulence filter foreignObject g image line linearGradient marker mask
	metadata mpath path pattern polygon polyline radialGradient rect set stop svg
	switch symbol text textPath tspan use view`.split(/\s+/));
		baseElementProps = new Set(`children dangerouslySetInnerHTML key autoFocus defaultValue defaultChecked
	innerHTML suppressContentEditableWarning suppressHydrationWarning valueLink
	abbr accept acceptCharset accessKey action allow allowUserMedia
	allowPaymentRequest allowFullScreen allowTransparency alt async autoComplete
	autoPlay capture cellPadding cellSpacing challenge charSet checked cite classID
	className cols colSpan content contentEditable contextMenu controls controlsList
	coords crossOrigin data dateTime decoding default defer dir disabled
	disablePictureInPicture disableRemotePlayback download draggable encType
	enterKeyHint fetchpriority fetchPriority form formAction formEncType formMethod
	formNoValidate formTarget frameBorder headers height hidden high href hrefLang
	htmlFor httpEquiv id inputMode integrity is keyParams keyType kind label lang
	list loading loop low marginHeight marginWidth max maxLength media mediaGroup
	method min minLength multiple muted name nonce noValidate open optimum pattern
	placeholder playsInline popover popoverTarget popoverTargetAction poster
	preload profile radioGroup readOnly referrerPolicy rel required reversed role
	rows rowSpan sandbox scope scoped scrolling seamless selected shape size sizes
	slot span spellCheck src srcDoc srcLang srcSet start step style summary
	tabIndex target title translate type useMap value width wmode wrap about
	datatype inlist prefix property resource typeof vocab autoCapitalize
	autoCorrect autoSave color incremental fallback inert itemProp itemScope
	itemType itemID itemRef on option results security unselectable`.split(/\s+/));
		svgElementProps = new Set(`accentHeight accumulate additive alignmentBaseline allowReorder alphabetic
	amplitude arabicForm ascent attributeName attributeType autoReverse azimuth
	baseFrequency baselineShift baseProfile bbox begin bias by calcMode capHeight
	clip clipPathUnits clipPath clipRule colorInterpolation
	colorInterpolationFilters colorProfile colorRendering contentScriptType
	contentStyleType cursor cx cy d decelerate descent diffuseConstant direction
	display divisor dominantBaseline dur dx dy edgeMode elevation enableBackground
	end exponent externalResourcesRequired fill fillOpacity fillRule filter
	filterRes filterUnits floodColor floodOpacity focusable fontFamily fontSize
	fontSizeAdjust fontStretch fontStyle fontVariant fontWeight format from fr fx
	fy g1 g2 glyphName glyphOrientationHorizontal glyphOrientationVertical
	glyphRef gradientTransform gradientUnits hanging horizAdvX horizOriginX
	ideographic imageRendering in in2 intercept k k1 k2 k3 k4 kernelMatrix
	kernelUnitLength kerning keyPoints keySplines keyTimes lengthAdjust
	letterSpacing lightingColor limitingConeAngle local markerEnd markerMid
	markerStart markerHeight markerUnits markerWidth mask maskContentUnits
	maskUnits mathematical mode numOctaves offset opacity operator order orient
	orientation origin overflow overlinePosition overlineThickness panose1
	paintOrder pathLength patternContentUnits patternTransform patternUnits
	pointerEvents points pointsAtX pointsAtY pointsAtZ preserveAlpha
	preserveAspectRatio primitiveUnits r radius refX refY renderingIntent
	repeatCount repeatDur requiredExtensions requiredFeatures restart result rotate
	rx ry scale seed shapeRendering slope spacing specularConstant
	specularExponent speed spreadMethod startOffset stdDeviation stemh stemv
	stitchTiles stopColor stopOpacity strikethroughPosition strikethroughThickness
	string stroke strokeDasharray strokeDashoffset strokeLinecap strokeLinejoin
	strokeMiterlimit strokeOpacity strokeWidth surfaceScale systemLanguage
	tableValues targetX targetY textAnchor textDecoration textRendering textLength
	to transform u1 u2 underlinePosition underlineThickness unicode unicodeBidi
	unicodeRange unitsPerEm vAlphabetic vHanging vIdeographic vMathematical values
	vectorEffect version vertAdvY vertOriginX vertOriginY viewBox viewTarget
	visibility widths wordSpacing writingMode x xHeight x1 x2 xChannelSelector
	xlinkActuate xlinkArcrole xlinkHref xlinkRole xlinkShow xlinkTitle xlinkType
	xmlBase xmlns xmlnsXlink xmlLang xmlSpace y y1 y2 yChannelSelector z
	zoomAndPan`.split(/\s+/));
		compatElementProps = /* @__PURE__ */ new Set([
			"autofocus",
			"class",
			"for"
		]);
		PolymorphicElement = (0, import_react.forwardRef)(UnforwardedPolymorphicElement);
		try {
			PolymorphicElement.__docgenInfo = {
				"description": "Internal utility for components that need Emotion-compatible `as` behavior\nwhile rendering with plain React elements.",
				"displayName": "PolymorphicElement",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/utils/polymorphic-element.tsx",
				"methods": [],
				"props": {
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/utils/polymorphic-element.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "as",
						"required": false,
						"tags": {},
						"type": { "name": "ElementType<any, keyof IntrinsicElements>" }
					},
					"ref": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/utils/polymorphic-element.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "ref",
						"required": false,
						"tags": {},
						"type": { "name": "any" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/view/component.tsx
function UnforwardedView({ css, ...restProps }, ref) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PolymorphicElement, {
		ref,
		...restProps
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 24,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, View;
function init_component() {
	return (init_component = __esmMin((() => {
		init_react();
		init_polymorphic_element();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/view/component.tsx";
		View = Object.assign((0, import_react.forwardRef)(UnforwardedView), { selector: ".components-view" });
		try {
			View.__docgenInfo = {
				"description": "`View` is a core component that renders everything in the library.\nIt is the principle component in the entire library.\n\n```jsx\nimport { View } from `@wordpress/components`;\n\nfunction Example() {\n	return (\n		<View>\n			 Code is Poetry\n		</View>\n	);\n}\n```",
				"displayName": "View",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/view/component.tsx",
				"methods": [],
				"props": {
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/context/wordpress-component.ts",
							"name": "TypeLiteral"
						}],
						"description": "The HTML element or React component to render the component as.",
						"name": "as",
						"required": false,
						"tags": {},
						"type": { "name": "any" }
					},
					"css": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/view/component.tsx",
							"name": "TypeLiteral"
						}],
						"description": "Legacy Emotion prop accepted as a no-op by `View` so it does not leak to\nthe rendered element.\n@deprecated This prop no longer has any effect.\n@ignore",
						"name": "css",
						"required": false,
						"tags": {},
						"type": { "name": "any" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			View.__docgenInfo = {
				"description": "`View` is a core component that renders everything in the library.\nIt is the principle component in the entire library.\n\n```jsx\nimport { View } from `@wordpress/components`;\n\nfunction Example() {\n	return (\n		<View>\n			 Code is Poetry\n		</View>\n	);\n}\n```",
				"displayName": "component",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/view/component.tsx",
				"methods": [],
				"props": {
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/context/wordpress-component.ts",
							"name": "TypeLiteral"
						}],
						"description": "The HTML element or React component to render the component as.",
						"name": "as",
						"required": false,
						"tags": {},
						"type": { "name": "any" }
					},
					"css": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/view/component.tsx",
							"name": "TypeLiteral"
						}],
						"description": "Legacy Emotion prop accepted as a no-op by `View` so it does not leak to\nthe rendered element.\n@deprecated This prop no longer has any effect.\n@ignore",
						"name": "css",
						"required": false,
						"tags": {},
						"type": { "name": "any" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_polymorphic_element as i, init_component as n, PolymorphicElement as r, View as t };
