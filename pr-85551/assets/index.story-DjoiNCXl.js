import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module } from "./build-module-B6BKc0uG.js";
import { t as getFilesFromDataTransfer } from "./data-transfer-BZIelrgl.js";
import { n as __, t as init_build_module$1 } from "./build-module-v04us4E2.js";
import { n as useDropZone, t as init_use_drop_zone } from "./use-drop-zone-Dd3sHEnY.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { t as icon_default } from "./icon-DEDMwo2v.js";
import { n as media_default } from "./media-BQpQopbA.js";
import { n as upload_default } from "./upload-DxdXyd-U.js";
import { r as init_build_module$2 } from "./library.story-CbQx3MQ6.js";
//#region ../packages/components/src/drop-zone/index.tsx
/**
* `DropZone` is a component creating a drop zone area taking the full size of its parent element. It supports dropping files, HTML content or any other HTML drop event.
*
* ```jsx
* import { DropZone } from '@wordpress/components';
* import { useState } from '@wordpress/element';
*
* const MyDropZone = () => {
*   const [ hasDropped, setHasDropped ] = useState( false );
*
*   return (
*     <div>
*       { hasDropped ? 'Dropped!' : 'Drop something here' }
*       <DropZone
*         onFilesDrop={ () => setHasDropped( true ) }
*         onHTMLDrop={ () => setHasDropped( true ) }
*         onDrop={ () => setHasDropped( true ) }
*       />
*     </div>
*   );
* }
* ```
*/
function DropZoneComponent({ className, icon = upload_default, label, onFilesDrop, onHTMLDrop, onDrop, isEligible = () => true, ...restProps }) {
	const [isDraggingOverDocument, setIsDraggingOverDocument] = (0, import_react.useState)();
	const [isDraggingOverElement, setIsDraggingOverElement] = (0, import_react.useState)();
	const [isActive, setIsActive] = (0, import_react.useState)();
	const ref = useDropZone({
		onDrop(event) {
			if (!event.dataTransfer) return;
			const files = getFilesFromDataTransfer(event.dataTransfer);
			const html = event.dataTransfer.getData("text/html");
			/**
			* From Windows Chrome 96, the `event.dataTransfer` returns both file object and HTML.
			* The order of the checks is important to recognize the HTML drop.
			*/
			if (html && onHTMLDrop) onHTMLDrop(html);
			else if (files.length && onFilesDrop) onFilesDrop(files);
			else if (onDrop) onDrop(event);
		},
		onDragStart(event) {
			setIsDraggingOverDocument(true);
			if (!event.dataTransfer) return;
			/**
			* From Windows Chrome 96, the `event.dataTransfer` returns both file object and HTML.
			* The order of the checks is important to recognize the HTML drop.
			*/
			if (event.dataTransfer.types.includes("text/html")) setIsActive(!!onHTMLDrop);
			else if (event.dataTransfer.types.includes("Files") || getFilesFromDataTransfer(event.dataTransfer).length > 0) setIsActive(!!onFilesDrop);
			else setIsActive(!!onDrop && isEligible(event.dataTransfer));
		},
		onDragEnd() {
			setIsDraggingOverElement(false);
			setIsDraggingOverDocument(false);
			setIsActive(void 0);
		},
		onDragEnter() {
			setIsDraggingOverElement(true);
		},
		onDragLeave() {
			setIsDraggingOverElement(false);
		}
	});
	const classes = clsx("components-drop-zone", className, {
		"is-active": isActive,
		"is-dragging-over-document": isDraggingOverDocument,
		"is-dragging-over-element": isDraggingOverElement
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
		...restProps,
		ref,
		className: classes,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
			className: "components-drop-zone__content",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
				className: "components-drop-zone__content-inner",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(icon_default, {
					icon,
					className: "components-drop-zone__content-icon"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 116,
					columnNumber: 6
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("span", {
					className: "components-drop-zone__content-text",
					children: label ? label : __("Drop files to upload")
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 120,
					columnNumber: 6
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 115,
				columnNumber: 5
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 114,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 113,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_drop_zone() {
	return (init_drop_zone = __esmMin((() => {
		init_clsx();
		init_build_module$1();
		init_react();
		init_build_module$2();
		init_build_module();
		init_use_drop_zone();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/drop-zone/index.tsx";
		try {
			DropZoneComponent.__docgenInfo = {
				"description": "`DropZone` is a component creating a drop zone area taking the full size of its parent element. It supports dropping files, HTML content or any other HTML drop event.\n\n```jsx\nimport { DropZone } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyDropZone = () => {\n  const [ hasDropped, setHasDropped ] = useState( false );\n\n  return (\n    <div>\n      { hasDropped ? 'Dropped!' : 'Drop something here' }\n      <DropZone\n        onFilesDrop={ () => setHasDropped( true ) }\n        onHTMLDrop={ () => setHasDropped( true ) }\n        onDrop={ () => setHasDropped( true ) }\n      />\n    </div>\n  );\n}\n```",
				"displayName": "DropZoneComponent",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/drop-zone/index.tsx",
				"methods": [],
				"props": {
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/drop-zone/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A CSS `class` to give to the wrapper element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"icon": {
						"defaultValue": { "value": "\"upload\"" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/drop-zone/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An icon to be shown within the drop zone area.",
						"name": "icon",
						"required": false,
						"tags": {},
						"type": { "name": "Element" }
					},
					"label": {
						"defaultValue": { "value": "`__( 'Drop files to upload' )`" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/drop-zone/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A string to be shown within the drop zone area.",
						"name": "label",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"onDrop": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/drop-zone/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The function is generic drop handler called if the `onFilesDrop` or `onHTMLDrop` are not called.\nIt receives the drop `event` object as an argument.",
						"name": "onDrop",
						"required": false,
						"tags": {},
						"type": { "name": "((event: DragEvent) => void)" }
					},
					"onFilesDrop": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/drop-zone/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The function is called when dropping a file into the `DropZone`.\nIt receives an array of dropped files as an argument.",
						"name": "onFilesDrop",
						"required": false,
						"tags": {},
						"type": { "name": "((files: File[]) => void)" }
					},
					"onHTMLDrop": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/drop-zone/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The function is called when dropping HTML into the `DropZone`.\nIt receives the HTML being dropped as an argument.",
						"name": "onHTMLDrop",
						"required": false,
						"tags": {},
						"type": { "name": "((html: string) => void)" }
					},
					"isEligible": {
						"defaultValue": { "value": "() => true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/drop-zone/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function to determine if the drop zone is eligible to handle the drop\ndata transfer items.",
						"name": "isEligible",
						"required": false,
						"tags": {},
						"type": { "name": "((dataTransfer: DataTransfer) => boolean)" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/drop-zone/stories/index.story.tsx
var import_jsx_dev_runtime, fn, _jsxFileName, ICONS, meta, Template, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_build_module$2();
		init_drop_zone();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({fn} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/drop-zone/stories/index.story.tsx";
		ICONS = {
			upload: upload_default,
			media: media_default
		};
		meta = {
			tags: ["manifest"],
			component: DropZoneComponent,
			id: "components-dropzone",
			title: "Components/@wordpress-components/Selection & Input/File Upload/DropZone",
			argTypes: { icon: {
				control: { type: "select" },
				options: Object.keys(ICONS),
				mapping: ICONS
			} },
			args: {
				onFilesDrop: fn(),
				onHTMLDrop: fn(),
				onDrop: fn()
			},
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "global"
				}
			}
		};
		Template = (props) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					background: "lightgray",
					padding: 32,
					position: "relative"
				},
				children: ["Drop something here", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropZoneComponent, { ...props }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 46,
					columnNumber: 4
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 38,
				columnNumber: 3
			}, void 0);
		};
		Default = Template.bind({});
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <div style={{\n    background: 'lightgray',\n    padding: 32,\n    position: 'relative'\n  }}>\n            Drop something here\n            <DropZone {...props} />\n        </div>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
