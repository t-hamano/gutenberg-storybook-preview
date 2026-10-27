import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as SVG, o as init_svg } from "./svg-BLFZKYXr.js";
//#region ../packages/components/src/dashicon/index.tsx
function Dashicon({ icon, className, size = 20, style = {}, ...extraProps }) {
	const iconClass = [
		"dashicon",
		"dashicons",
		"dashicons-" + icon,
		className
	].filter(Boolean).join(" ");
	const styles = {
		...20 != size ? {
			fontSize: `${size}px`,
			width: `${size}px`,
			height: `${size}px`
		} : {},
		...style
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("span", {
		className: iconClass,
		style: styles,
		...extraProps
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 44,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_dashicon() {
	return (init_dashicon = __esmMin((() => {
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/dashicon/index.tsx";
		try {
			Dashicon.__docgenInfo = {
				"description": "",
				"displayName": "Dashicon",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/dashicon/index.tsx",
				"methods": [],
				"props": {
					"icon": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dashicon/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The icon name",
						"name": "icon",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "IconKey",
							"value": [
								{ "value": "\"button\"" },
								{ "value": "\"html\"" },
								{ "value": "\"menu\"" },
								{ "value": "\"search\"" },
								{ "value": "\"filter\"" },
								{ "value": "\"marker\"" },
								{ "value": "\"text\"" },
								{ "value": "\"hidden\"" },
								{ "value": "\"id\"" },
								{ "value": "\"sort\"" },
								{ "value": "\"heading\"" },
								{ "value": "\"download\"" },
								{ "value": "\"location\"" },
								{ "value": "\"yes\"" },
								{ "value": "\"no\"" },
								{ "value": "\"email\"" },
								{ "value": "\"move\"" },
								{ "value": "\"layout\"" },
								{ "value": "\"upload\"" },
								{ "value": "\"visibility\"" },
								{ "value": "\"warning\"" },
								{ "value": "\"info\"" },
								{ "value": "\"insert\"" },
								{ "value": "\"exit\"" },
								{ "value": "\"store\"" },
								{ "value": "\"admin-appearance\"" },
								{ "value": "\"admin-collapse\"" },
								{ "value": "\"admin-comments\"" },
								{ "value": "\"admin-customizer\"" },
								{ "value": "\"admin-generic\"" },
								{ "value": "\"admin-home\"" },
								{ "value": "\"admin-links\"" },
								{ "value": "\"admin-media\"" },
								{ "value": "\"admin-multisite\"" },
								{ "value": "\"admin-network\"" },
								{ "value": "\"admin-page\"" },
								{ "value": "\"admin-plugins\"" },
								{ "value": "\"admin-post\"" },
								{ "value": "\"admin-settings\"" },
								{ "value": "\"admin-site-alt\"" },
								{ "value": "\"admin-site-alt2\"" },
								{ "value": "\"admin-site-alt3\"" },
								{ "value": "\"admin-site\"" },
								{ "value": "\"admin-tools\"" },
								{ "value": "\"admin-users\"" },
								{ "value": "\"airplane\"" },
								{ "value": "\"album\"" },
								{ "value": "\"align-center\"" },
								{ "value": "\"align-full-width\"" },
								{ "value": "\"align-left\"" },
								{ "value": "\"align-none\"" },
								{ "value": "\"align-pull-left\"" },
								{ "value": "\"align-pull-right\"" },
								{ "value": "\"align-right\"" },
								{ "value": "\"align-wide\"" },
								{ "value": "\"amazon\"" },
								{ "value": "\"analytics\"" },
								{ "value": "\"archive\"" },
								{ "value": "\"arrow-down-alt\"" },
								{ "value": "\"arrow-down-alt2\"" },
								{ "value": "\"arrow-down\"" },
								{ "value": "\"arrow-left-alt\"" },
								{ "value": "\"arrow-left-alt2\"" },
								{ "value": "\"arrow-left\"" },
								{ "value": "\"arrow-right-alt\"" },
								{ "value": "\"arrow-right-alt2\"" },
								{ "value": "\"arrow-right\"" },
								{ "value": "\"arrow-up-alt\"" },
								{ "value": "\"arrow-up-alt2\"" },
								{ "value": "\"arrow-up\"" },
								{ "value": "\"arrow-up-duplicate\"" },
								{ "value": "\"art\"" },
								{ "value": "\"awards\"" },
								{ "value": "\"backup\"" },
								{ "value": "\"bank\"" },
								{ "value": "\"beer\"" },
								{ "value": "\"bell\"" },
								{ "value": "\"block-default\"" },
								{ "value": "\"book-alt\"" },
								{ "value": "\"book\"" },
								{ "value": "\"buddicons-activity\"" },
								{ "value": "\"buddicons-bbpress-logo\"" },
								{ "value": "\"buddicons-buddypress-logo\"" },
								{ "value": "\"buddicons-community\"" },
								{ "value": "\"buddicons-forums\"" },
								{ "value": "\"buddicons-friends\"" },
								{ "value": "\"buddicons-groups\"" },
								{ "value": "\"buddicons-pm\"" },
								{ "value": "\"buddicons-replies\"" },
								{ "value": "\"buddicons-topics\"" },
								{ "value": "\"buddicons-tracking\"" },
								{ "value": "\"building\"" },
								{ "value": "\"businessman\"" },
								{ "value": "\"businessperson\"" },
								{ "value": "\"businesswoman\"" },
								{ "value": "\"calculator\"" },
								{ "value": "\"camera-alt\"" },
								{ "value": "\"car\"" },
								{ "value": "\"calendar-alt\"" },
								{ "value": "\"calendar\"" },
								{ "value": "\"camera\"" },
								{ "value": "\"carrot\"" },
								{ "value": "\"cart\"" },
								{ "value": "\"category\"" },
								{ "value": "\"chart-area\"" },
								{ "value": "\"chart-bar\"" },
								{ "value": "\"chart-line\"" },
								{ "value": "\"chart-pie\"" },
								{ "value": "\"clipboard\"" },
								{ "value": "\"clock\"" },
								{ "value": "\"cloud-saved\"" },
								{ "value": "\"cloud-upload\"" },
								{ "value": "\"cloud\"" },
								{ "value": "\"columns\"" },
								{ "value": "\"code-standards\"" },
								{ "value": "\"coffee\"" },
								{ "value": "\"color-picker\"" },
								{ "value": "\"controls-back\"" },
								{ "value": "\"controls-forward\"" },
								{ "value": "\"controls-pause\"" },
								{ "value": "\"controls-play\"" },
								{ "value": "\"controls-repeat\"" },
								{ "value": "\"controls-skipback\"" },
								{ "value": "\"controls-skipforward\"" },
								{ "value": "\"controls-volumeoff\"" },
								{ "value": "\"controls-volumeon\"" },
								{ "value": "\"cover-image\"" },
								{ "value": "\"dashboard\"" },
								{ "value": "\"database\"" },
								{ "value": "\"database-add\"" },
								{ "value": "\"database-export\"" },
								{ "value": "\"database-import\"" },
								{ "value": "\"database-remove\"" },
								{ "value": "\"database-view\"" },
								{ "value": "\"desktop\"" },
								{ "value": "\"dismiss\"" },
								{ "value": "\"drumstick\"" },
								{ "value": "\"edit\"" },
								{ "value": "\"edit-large\"" },
								{ "value": "\"edit-page\"" },
								{ "value": "\"editor-aligncenter\"" },
								{ "value": "\"editor-alignleft\"" },
								{ "value": "\"editor-alignright\"" },
								{ "value": "\"editor-bold\"" },
								{ "value": "\"editor-break\"" },
								{ "value": "\"editor-code\"" },
								{ "value": "\"editor-code-duplicate\"" },
								{ "value": "\"editor-contract\"" },
								{ "value": "\"editor-customchar\"" },
								{ "value": "\"editor-expand\"" },
								{ "value": "\"editor-help\"" },
								{ "value": "\"editor-indent\"" },
								{ "value": "\"editor-insertmore\"" },
								{ "value": "\"editor-italic\"" },
								{ "value": "\"editor-justify\"" },
								{ "value": "\"editor-kitchensink\"" },
								{ "value": "\"editor-ltr\"" },
								{ "value": "\"editor-ol-rtl\"" },
								{ "value": "\"editor-ol\"" },
								{ "value": "\"editor-outdent\"" },
								{ "value": "\"editor-paragraph\"" },
								{ "value": "\"editor-paste-text\"" },
								{ "value": "\"editor-paste-word\"" },
								{ "value": "\"editor-quote\"" },
								{ "value": "\"editor-removeformatting\"" },
								{ "value": "\"editor-rtl\"" },
								{ "value": "\"editor-spellcheck\"" },
								{ "value": "\"editor-strikethrough\"" },
								{ "value": "\"editor-table\"" },
								{ "value": "\"editor-textcolor\"" },
								{ "value": "\"editor-ul\"" },
								{ "value": "\"editor-underline\"" },
								{ "value": "\"editor-unlink\"" },
								{ "value": "\"editor-video\"" },
								{ "value": "\"ellipsis\"" },
								{ "value": "\"email-alt\"" },
								{ "value": "\"email-alt2\"" },
								{ "value": "\"embed-audio\"" },
								{ "value": "\"embed-generic\"" },
								{ "value": "\"embed-photo\"" },
								{ "value": "\"embed-post\"" },
								{ "value": "\"embed-video\"" },
								{ "value": "\"excerpt-view\"" },
								{ "value": "\"external\"" },
								{ "value": "\"facebook-alt\"" },
								{ "value": "\"facebook\"" },
								{ "value": "\"feedback\"" },
								{ "value": "\"flag\"" },
								{ "value": "\"food\"" },
								{ "value": "\"format-aside\"" },
								{ "value": "\"format-audio\"" },
								{ "value": "\"format-chat\"" },
								{ "value": "\"format-gallery\"" },
								{ "value": "\"format-image\"" },
								{ "value": "\"format-quote\"" },
								{ "value": "\"format-status\"" },
								{ "value": "\"format-video\"" },
								{ "value": "\"forms\"" },
								{ "value": "\"fullscreen-alt\"" },
								{ "value": "\"fullscreen-exit-alt\"" },
								{ "value": "\"games\"" },
								{ "value": "\"google\"" },
								{ "value": "\"googleplus\"" },
								{ "value": "\"grid-view\"" },
								{ "value": "\"groups\"" },
								{ "value": "\"hammer\"" },
								{ "value": "\"heart\"" },
								{ "value": "\"hourglass\"" },
								{ "value": "\"id-alt\"" },
								{ "value": "\"image-crop\"" },
								{ "value": "\"image-filter\"" },
								{ "value": "\"image-flip-horizontal\"" },
								{ "value": "\"image-flip-vertical\"" },
								{ "value": "\"image-rotate-left\"" },
								{ "value": "\"image-rotate-right\"" },
								{ "value": "\"image-rotate\"" },
								{ "value": "\"images-alt\"" },
								{ "value": "\"images-alt2\"" },
								{ "value": "\"index-card\"" },
								{ "value": "\"info-outline\"" },
								{ "value": "\"insert-after\"" },
								{ "value": "\"insert-before\"" },
								{ "value": "\"instagram\"" },
								{ "value": "\"laptop\"" },
								{ "value": "\"leftright\"" },
								{ "value": "\"lightbulb\"" },
								{ "value": "\"list-view\"" },
								{ "value": "\"linkedin\"" },
								{ "value": "\"location-alt\"" },
								{ "value": "\"lock-duplicate\"" },
								{ "value": "\"lock\"" },
								{ "value": "\"media-archive\"" },
								{ "value": "\"media-audio\"" },
								{ "value": "\"media-code\"" },
								{ "value": "\"media-default\"" },
								{ "value": "\"media-document\"" },
								{ "value": "\"media-interactive\"" },
								{ "value": "\"media-spreadsheet\"" },
								{ "value": "\"media-text\"" },
								{ "value": "\"media-video\"" },
								{ "value": "\"megaphone\"" },
								{ "value": "\"menu-alt\"" },
								{ "value": "\"menu-alt2\"" },
								{ "value": "\"menu-alt3\"" },
								{ "value": "\"money-alt\"" },
								{ "value": "\"microphone\"" },
								{ "value": "\"migrate\"" },
								{ "value": "\"minus\"" },
								{ "value": "\"money\"" },
								{ "value": "\"nametag\"" },
								{ "value": "\"networking\"" },
								{ "value": "\"no-alt\"" },
								{ "value": "\"open-folder\"" },
								{ "value": "\"palmtree\"" },
								{ "value": "\"paperclip\"" },
								{ "value": "\"performance\"" },
								{ "value": "\"pets\"" },
								{ "value": "\"pdf\"" },
								{ "value": "\"phone\"" },
								{ "value": "\"pinterest\"" },
								{ "value": "\"playlist-audio\"" },
								{ "value": "\"playlist-video\"" },
								{ "value": "\"plus-alt\"" },
								{ "value": "\"plus\"" },
								{ "value": "\"portfolio\"" },
								{ "value": "\"post-status\"" },
								{ "value": "\"pressthis\"" },
								{ "value": "\"products\"" },
								{ "value": "\"plugins-checked\"" },
								{ "value": "\"plus-alt2\"" },
								{ "value": "\"podio\"" },
								{ "value": "\"printer\"" },
								{ "value": "\"privacy\"" },
								{ "value": "\"randomize\"" },
								{ "value": "\"reddit\"" },
								{ "value": "\"redo\"" },
								{ "value": "\"remove\"" },
								{ "value": "\"rest-api\"" },
								{ "value": "\"rss\"" },
								{ "value": "\"saved\"" },
								{ "value": "\"schedule\"" },
								{ "value": "\"screenoptions\"" },
								{ "value": "\"share-alt\"" },
								{ "value": "\"share-alt2\"" },
								{ "value": "\"share\"" },
								{ "value": "\"shield-alt\"" },
								{ "value": "\"shield\"" },
								{ "value": "\"shortcode\"" },
								{ "value": "\"slides\"" },
								{ "value": "\"smartphone\"" },
								{ "value": "\"smiley\"" },
								{ "value": "\"sos\"" },
								{ "value": "\"star-empty\"" },
								{ "value": "\"star-filled\"" },
								{ "value": "\"star-half\"" },
								{ "value": "\"sticky\"" },
								{ "value": "\"spotify\"" },
								{ "value": "\"superhero\"" },
								{ "value": "\"superhero-alt\"" },
								{ "value": "\"table-col-after\"" },
								{ "value": "\"table-col-before\"" },
								{ "value": "\"table-col-delete\"" },
								{ "value": "\"table-row-after\"" },
								{ "value": "\"table-row-before\"" },
								{ "value": "\"table-row-delete\"" },
								{ "value": "\"tablet\"" },
								{ "value": "\"tag\"" },
								{ "value": "\"tagcloud\"" },
								{ "value": "\"testimonial\"" },
								{ "value": "\"text-page\"" },
								{ "value": "\"thumbs-down\"" },
								{ "value": "\"thumbs-up\"" },
								{ "value": "\"tickets-alt\"" },
								{ "value": "\"tickets\"" },
								{ "value": "\"tide\"" },
								{ "value": "\"translation\"" },
								{ "value": "\"trash\"" },
								{ "value": "\"twitch\"" },
								{ "value": "\"twitter\"" },
								{ "value": "\"twitter-alt\"" },
								{ "value": "\"undo\"" },
								{ "value": "\"universal-access-alt\"" },
								{ "value": "\"universal-access\"" },
								{ "value": "\"unlock\"" },
								{ "value": "\"update-alt\"" },
								{ "value": "\"update\"" },
								{ "value": "\"vault\"" },
								{ "value": "\"video-alt\"" },
								{ "value": "\"video-alt2\"" },
								{ "value": "\"video-alt3\"" },
								{ "value": "\"welcome-add-page\"" },
								{ "value": "\"welcome-comments\"" },
								{ "value": "\"welcome-learn-more\"" },
								{ "value": "\"welcome-view-site\"" },
								{ "value": "\"welcome-widgets-menus\"" },
								{ "value": "\"welcome-write-blog\"" },
								{ "value": "\"whatsapp\"" },
								{ "value": "\"wordpress-alt\"" },
								{ "value": "\"wordpress\"" },
								{ "value": "\"xing\"" },
								{ "value": "\"yes-alt\"" },
								{ "value": "\"youtube\"" }
							]
						}
					},
					"size": {
						"defaultValue": { "value": "20" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dashicon/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Size of the icon",
						"name": "size",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/icon/index.tsx
/**
* Renders a raw icon without any initial styling or wrappers.
*
* ```jsx
* import { wordpress } from '@wordpress/icons';
*
* <Icon icon={ wordpress } />
* ```
*/
function Icon({ icon = null, size = "string" === typeof icon ? 20 : 24, ...additionalProps }) {
	if ("string" === typeof icon) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dashicon, {
		icon,
		size,
		...additionalProps
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 72,
		columnNumber: 4
	}, this);
	if ((0, import_react.isValidElement)(icon) && Dashicon === icon.type) return (0, import_react.cloneElement)(icon, { ...additionalProps });
	if ("function" === typeof icon) return (0, import_react.createElement)(icon, {
		size,
		...additionalProps
	});
	if ((0, import_react.isValidElement)(icon)) {
		const { style: consumerStyle, ...restProps } = additionalProps;
		const mergedStyle = icon.props.style || consumerStyle ? {
			...icon.props.style,
			...consumerStyle
		} : void 0;
		const styleProps = mergedStyle ? { style: mergedStyle } : {};
		if (icon.type === "svg" || icon.type === SVG) {
			const appliedProps = {
				...icon.props,
				width: size,
				height: size,
				...restProps,
				...styleProps
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SVG, { ...appliedProps }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 114,
				columnNumber: 11
			}, this);
		}
		return (0, import_react.cloneElement)(icon, {
			size,
			width: size,
			height: size,
			...restProps,
			...styleProps
		});
	}
	return icon;
}
var import_jsx_dev_runtime, _jsxFileName;
function init_icon() {
	return (init_icon = __esmMin((() => {
		init_react();
		init_svg();
		init_dashicon();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/icon/index.tsx";
		try {
			Icon.__docgenInfo = {
				"description": "Renders a raw icon without any initial styling or wrappers.\n\n```jsx\nimport { wordpress } from '@wordpress/icons';\n\n<Icon icon={ wordpress } />\n```",
				"displayName": "Icon",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/icon/index.tsx",
				"methods": [],
				"props": {
					"icon": {
						"defaultValue": { "value": "null" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/icon/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "The icon to render. In most cases, you should use an icon from\n[the `@wordpress/icons` package](https://wordpress.github.io/gutenberg/?path=/story/icons-icon--library).\n\nOther supported values are: component instances, functions,\n[Dashicons](https://developer.wordpress.org/resource/dashicons/)\n(specified as strings), and `null`.\n\nThe `size` value, as well as any other additional props, will be passed through.",
						"name": "icon",
						"required": false,
						"tags": {},
						"type": { "name": "IconType | null" }
					},
					"size": {
						"defaultValue": { "value": "'string' === typeof icon ? 20 : 24" },
						"declarations": [
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/icon/index.tsx",
								"name": "TypeLiteral"
							},
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/icon/index.tsx",
								"name": "TypeLiteral"
							},
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/icon/index.tsx",
								"name": "TypeLiteral"
							},
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/icon/index.tsx",
								"name": "TypeLiteral"
							},
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/icon/index.tsx",
								"name": "TypeLiteral"
							}
						],
						"description": "The size (width and height) of the icon.\n\nDefaults to `20` when `icon` is a string (i.e. a Dashicon id), otherwise `24`.",
						"name": "size",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_icon as n, Icon as t };
