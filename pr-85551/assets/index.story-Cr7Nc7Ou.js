import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { n as __, t as init_build_module$1 } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { a as SVG, o as init_svg, t as Circle } from "./svg-BLFZKYXr.js";
import { n as init_button, t as Button } from "./button-BO8bp-IJ.js";
import { n as init_modal, t as Modal } from "./modal-DIHHkKkQ.js";
//#region ../packages/components/src/guide/icons.tsx
var import_jsx_dev_runtime$3, _jsxFileName$3, PageControlIcon;
function init_icons() {
	return (init_icons = __esmMin((() => {
		init_svg();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/guide/icons.tsx";
		PageControlIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(SVG, {
			width: "8",
			height: "8",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Circle, {
				cx: "4",
				cy: "4",
				r: "4"
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 5,
				columnNumber: 3
			}, void 0)
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 4,
			columnNumber: 2
		}, void 0);
	})))();
}
//#endregion
//#region ../packages/components/src/guide/page-control.tsx
function PageControl({ currentPage, numberOfPages, setCurrentPage }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("ul", {
		className: "components-guide__page-control",
		"aria-label": __("Guide controls"),
		children: Array.from({ length: numberOfPages }).map((_, page) => /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("li", {
			"aria-current": page === currentPage ? "step" : void 0,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Button, {
				size: "small",
				icon: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(PageControlIcon, {}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 25,
					columnNumber: 14
				}, this),
				"aria-label": sprintf(__("Page %1$d of %2$d"), page + 1, numberOfPages),
				onClick: () => setCurrentPage(page)
			}, page, false, {
				fileName: _jsxFileName$2,
				lineNumber: 22,
				columnNumber: 6
			}, this)
		}, page, false, {
			fileName: _jsxFileName$2,
			lineNumber: 17,
			columnNumber: 5
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 12,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$2, _jsxFileName$2;
function init_page_control() {
	return (init_page_control = __esmMin((() => {
		init_build_module$1();
		init_button();
		init_icons();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/guide/page-control.tsx";
		try {
			PageControl.__docgenInfo = {
				"description": "",
				"displayName": "pagecontrol",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/guide/page-control.tsx",
				"methods": [],
				"props": {
					"currentPage": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/guide/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Current page index.",
						"name": "currentPage",
						"required": true,
						"tags": {},
						"type": { "name": "number" }
					},
					"numberOfPages": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/guide/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Total number of pages.",
						"name": "numberOfPages",
						"required": true,
						"tags": {},
						"type": { "name": "number" }
					},
					"setCurrentPage": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/guide/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Called when user clicks on a `PageControlIcon` button.",
						"name": "setCurrentPage",
						"required": true,
						"tags": {},
						"type": { "name": "(page: number) => void" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/guide/index.tsx
/**
* `Guide` is a React component that renders a _user guide_ in a modal. The guide consists of several pages which the user can step through one by one. The guide is finished when the modal is closed or when the user clicks _Finish_ on the last page of the guide.
*
* ```jsx
* function MyTutorial() {
* 	const [ isOpen, setIsOpen ] = useState( true );
*
* 	if ( ! isOpen ) {
* 		return null;
* 	}
*
* 	return (
* 		<Guide
* 			onFinish={ () => setIsOpen( false ) }
* 			pages={ [
* 				{
* 					content: <p>Welcome to the ACME Store!</p>,
* 				},
* 				{
* 					image: <img src="https://acmestore.com/add-to-cart.png" />,
* 					content: (
* 						<p>
* 							Click <i>Add to Cart</i> to buy a product.
* 						</p>
* 					),
* 				},
* 			] }
* 		/>
* 	);
* }
* ```
*/
function Guide({ children, className, contentLabel, finishButtonText = __("Finish"), nextButtonText = __("Next"), previousButtonText = __("Previous"), onFinish, pages = [] }) {
	const ref = (0, import_react.useRef)(null);
	const [currentPage, setCurrentPage] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const frame = ref.current?.querySelector(".components-guide");
		if (frame instanceof HTMLElement) frame.focus();
	}, [currentPage]);
	(0, import_react.useEffect)(() => {
		if (import_react.Children.count(children)) deprecated("Passing children to <Guide>", {
			since: "5.5",
			alternative: "the `pages` prop"
		});
	}, [children]);
	if (import_react.Children.count(children)) pages = import_react.Children.map(children, (child) => ({ content: child })) ?? [];
	const canGoBack = currentPage > 0;
	const canGoForward = currentPage < pages.length - 1;
	const goBack = () => {
		if (canGoBack) setCurrentPage(currentPage - 1);
	};
	const goForward = () => {
		if (canGoForward) setCurrentPage(currentPage + 1);
	};
	if (pages.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Modal, {
		className: clsx("components-guide", className),
		contentLabel,
		isDismissible: pages.length > 1,
		onRequestClose: onFinish,
		onKeyDown: (event) => {
			if (event.code === "ArrowLeft") {
				goBack();
				event.preventDefault();
			} else if (event.code === "ArrowRight") {
				goForward();
				event.preventDefault();
			}
		},
		ref,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
			className: "components-guide__container",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
				className: "components-guide__page",
				children: [
					pages[currentPage].image,
					pages.length > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(PageControl, {
						currentPage,
						numberOfPages: pages.length,
						setCurrentPage
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 122,
						columnNumber: 7
					}, this),
					pages[currentPage].content
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 118,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
				className: "components-guide__footer",
				children: [
					canGoBack && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Button, {
						className: "components-guide__back-button",
						variant: "tertiary",
						onClick: goBack,
						__next40pxDefaultSize: true,
						children: previousButtonText
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 134,
						columnNumber: 7
					}, this),
					canGoForward && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Button, {
						className: "components-guide__forward-button",
						variant: "primary",
						onClick: goForward,
						__next40pxDefaultSize: true,
						children: nextButtonText
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 144,
						columnNumber: 7
					}, this),
					!canGoForward && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Button, {
						className: "components-guide__finish-button",
						variant: "primary",
						onClick: onFinish,
						__next40pxDefaultSize: true,
						children: finishButtonText
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 154,
						columnNumber: 7
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 132,
				columnNumber: 5
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 117,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 99,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_guide() {
	return (init_guide = __esmMin((() => {
		init_clsx();
		init_react();
		init_build_module();
		init_build_module$1();
		init_modal();
		init_button();
		init_page_control();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/guide/index.tsx";
		try {
			Guide.__docgenInfo = {
				"description": "`Guide` is a React component that renders a _user guide_ in a modal. The guide consists of several pages which the user can step through one by one. The guide is finished when the modal is closed or when the user clicks _Finish_ on the last page of the guide.\n\n```jsx\nfunction MyTutorial() {\n	const [ isOpen, setIsOpen ] = useState( true );\n\n	if ( ! isOpen ) {\n		return null;\n	}\n\n	return (\n		<Guide\n			onFinish={ () => setIsOpen( false ) }\n			pages={ [\n				{\n					content: <p>Welcome to the ACME Store!</p>,\n				},\n				{\n					image: <img src=\"https://acmestore.com/add-to-cart.png\" />,\n					content: (\n						<p>\n							Click <i>Add to Cart</i> to buy a product.\n						</p>\n					),\n				},\n			] }\n		/>\n	);\n}\n```",
				"displayName": "Guide",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/guide/index.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/guide/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Deprecated. Use `pages` prop instead.\n@deprecated since 5.5",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/guide/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A custom class to add to the modal.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"contentLabel": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/guide/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Used as the modal's accessibility label.",
						"name": "contentLabel",
						"required": true,
						"tags": {},
						"type": { "name": "string | undefined" }
					},
					"finishButtonText": {
						"defaultValue": { "value": "__( 'Finish' )" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/guide/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Use this to customize the label of the _Finish_ button shown at the end of the guide.",
						"name": "finishButtonText",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"nextButtonText": {
						"defaultValue": { "value": "__( 'Next' )" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/guide/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Use this to customize the label of the _Next_ button shown on each page of the guide.",
						"name": "nextButtonText",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"previousButtonText": {
						"defaultValue": { "value": "__( 'Previous' )" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/guide/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Use this to customize the label of the _Previous_ button shown on each page of the guide except the first.",
						"name": "previousButtonText",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"onFinish": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/guide/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function which is called when the guide is finished.",
						"name": "onFinish",
						"required": true,
						"tags": {},
						"type": { "name": "(event?: SyntheticEvent<Element, Event> | KeyboardEvent<HTMLDivElement> | undefined) => void" }
					},
					"pages": {
						"defaultValue": { "value": "[]" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/guide/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A list of objects describing each page in the guide. Each object **must** contain a `'content'` property and may optionally contain a `'image'` property.",
						"name": "pages",
						"required": false,
						"tags": {},
						"type": { "name": "Page[]" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/guide/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_button();
		init_guide();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/guide/stories/index.story.tsx";
		meta = {
			id: "components-guide",
			title: "Components/@wordpress-components/Guide",
			component: Guide,
			argTypes: {
				contentLabel: { control: "text" },
				finishButtonText: { control: "text" },
				nextButtonText: { control: "text" },
				previousButtonText: { control: "text" },
				onFinish: { action: "onFinish" }
			},
			parameters: { componentStatus: {
				status: "recommended",
				whereUsed: "editor"
			} }
		};
		Template = ({ onFinish, ...props }) => {
			const [isOpen, setOpen] = (0, import_react.useState)(false);
			const openGuide = () => setOpen(true);
			const closeGuide = () => setOpen(false);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				__next40pxDefaultSize: true,
				variant: "secondary",
				onClick: openGuide,
				children: "Open Guide"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 34,
				columnNumber: 4
			}, void 0), isOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Guide, {
				...props,
				onFinish: (...finishArgs) => {
					closeGuide();
					onFinish?.(...finishArgs);
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 42,
				columnNumber: 5
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 33,
				columnNumber: 3
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = { pages: Array.from({ length: 3 }).map((_, page) => ({ content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: `Page ${page + 1}` }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 57,
			columnNumber: 12
		}, void 0) })) };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "({\n  onFinish,\n  ...props\n}) => {\n  const [isOpen, setOpen] = useState(false);\n  const openGuide = () => setOpen(true);\n  const closeGuide = () => setOpen(false);\n  return <>\n            <Button __next40pxDefaultSize variant=\"secondary\" onClick={openGuide}>\n                Open Guide\n            </Button>\n            {isOpen && <Guide {...props} onFinish={(...finishArgs) => {\n      closeGuide();\n      onFinish?.(...finishArgs);\n    }} />}\n        </>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
