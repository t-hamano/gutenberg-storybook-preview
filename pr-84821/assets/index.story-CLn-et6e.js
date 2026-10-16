import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as upload_default } from "./upload-C8T9oGCk.js";
import { n as init_button, t as Button } from "./button-BqvmAVeL.js";
import { r as init_build_module } from "./library.story-CFsmdbdz.js";
//#region ../packages/components/src/form-file-upload/index.tsx
/**
* FormFileUpload allows users to select files from their local device.
*
* ```jsx
* import { FormFileUpload } from '@wordpress/components';
*
* const MyFormFileUpload = () => (
*   <FormFileUpload
*     accept="image/*"
*     onChange={ ( event ) => console.log( event.currentTarget.files ) }
*   >
*     Upload
*   </FormFileUpload>
* );
* ```
*/
function FormFileUpload({ accept, children, multiple = false, onChange, onClick, render, __next40pxDefaultSize: _next40pxDefaultSize, ...props }) {
	const ref = (0, import_react.useRef)(null);
	const openFileDialog = () => {
		ref.current?.click();
	};
	const ui = render ? render({ openFileDialog }) : /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Button, {
		onClick: openFileDialog,
		__next40pxDefaultSize: true,
		...props,
		children
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 40,
		columnNumber: 3
	}, this);
	const compatAccept = accept?.includes("audio/*") ? `${accept}, audio/mp3, audio/x-m4a, audio/x-m4b, audio/x-m4p, audio/x-wav, audio/webm` : accept;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
		className: "components-form-file-upload",
		children: [ui, /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("input", {
			type: "file",
			ref,
			multiple,
			style: { display: "none" },
			accept: compatAccept,
			onChange,
			onClick,
			"data-testid": "form-file-upload-input"
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 54,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 52,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_form_file_upload() {
	return (init_form_file_upload = __esmMin((() => {
		init_react();
		init_button();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/form-file-upload/index.tsx";
		try {
			FormFileUpload.__docgenInfo = {
				"description": "FormFileUpload allows users to select files from their local device.\n\n```jsx\nimport { FormFileUpload } from '@wordpress/components';\n\nconst MyFormFileUpload = () => (\n  <FormFileUpload\n    accept=\"image/*\"\n    onChange={ ( event ) => console.log( event.currentTarget.files ) }\n  >\n    Upload\n  </FormFileUpload>\n);\n```",
				"displayName": "FormFileUpload",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/form-file-upload/index.tsx",
				"methods": [],
				"props": {
					"__next40pxDefaultSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-file-upload/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting into the larger default height that will become the default size in a future version.\n@deprecated Default behavior since WordPress 7.1. Prop can be safely removed.\n@ignore",
						"name": "__next40pxDefaultSize",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"accept": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-file-upload/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A string passed to the `input` element that tells the browser which\n[file types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers)\ncan be uploaded by the user. e.g: `image/*,video/*`.",
						"name": "accept",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-file-upload/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Children are passed as children of `Button`.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"icon": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-file-upload/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The icon to render in the default button.\n\nSee the `Icon` component docs for more information.",
						"name": "icon",
						"required": false,
						"tags": {},
						"type": { "name": "IconType | null" }
					},
					"multiple": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-file-upload/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to allow multiple selection of files or not.",
						"name": "multiple",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-file-upload/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback function passed directly to the `input` file element.\n\nSelect files will be available in `event.currentTarget.files`.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "ChangeEventHandler<HTMLInputElement, HTMLInputElement> | undefined" }
					},
					"onClick": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-file-upload/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback function passed directly to the `input` file element.\n\nThis can be useful when you want to force a `change` event to fire when\nthe user chooses the same file again. To do this, set the target value to\nan empty string in the `onClick` function.\n\n```jsx\n<FormFileUpload\n  onClick={ ( event ) => ( event.target.value = '' ) }\n  onChange={ onChange }\n>\n  Upload\n</FormFileUpload>\n```",
						"name": "onClick",
						"required": false,
						"tags": {},
						"type": { "name": "MouseEventHandler<HTMLInputElement>" }
					},
					"render": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-file-upload/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Optional callback function used to render the UI.\n\nIf passed, the component does not render the default UI (a button) and\ncalls this function to render it. The function receives an object with\nproperty `openFileDialog`, a function that, when called, opens the browser\nnative file upload modal window.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "((arg: { openFileDialog: () => void; }) => ReactNode)" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/form-file-upload/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default, RestrictFileTypes, AllowMultipleFiles, WithIcon, WithCustomRender;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_build_module();
		init_form_file_upload();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/form-file-upload/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-components/Selection & Input/File Upload/FormFileUpload",
			id: "components-formfileupload",
			component: FormFileUpload,
			argTypes: {
				icon: { control: false },
				onChange: {
					action: "onChange",
					control: false
				},
				onClick: { control: false }
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
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormFileUpload, { ...props }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 27,
				columnNumber: 9
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = { children: "Select file" };
		RestrictFileTypes = Template.bind({});
		RestrictFileTypes.args = {
			...Default.args,
			accept: "image/*",
			children: "Select image"
		};
		AllowMultipleFiles = Template.bind({});
		AllowMultipleFiles.args = {
			...Default.args,
			children: "Select files",
			multiple: true
		};
		WithIcon = Template.bind({});
		WithIcon.args = {
			...Default.args,
			children: "Upload",
			icon: upload_default
		};
		WithCustomRender = Template.bind({});
		WithCustomRender.args = {
			...Default.args,
			render: ({ openFileDialog }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				onClick: openFileDialog,
				children: "Custom Upload Button"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 67,
				columnNumber: 3
			}, void 0)
		};
		try {
			WithCustomRender.__docgenInfo = {
				"description": "Render a custom trigger button by passing a render function to the `render` prop.\n\n```jsx\n( { openFileDialog } ) => <button onClick={ openFileDialog }>Custom Upload Button</button>\n```",
				"displayName": "WithCustomRender",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/form-file-upload/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <FormFileUpload {...props} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		RestrictFileTypes.parameters = {
			...RestrictFileTypes.parameters,
			docs: {
				...RestrictFileTypes.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <FormFileUpload {...props} />;\n}",
					...RestrictFileTypes.parameters?.docs?.source
				}
			}
		};
		AllowMultipleFiles.parameters = {
			...AllowMultipleFiles.parameters,
			docs: {
				...AllowMultipleFiles.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <FormFileUpload {...props} />;\n}",
					...AllowMultipleFiles.parameters?.docs?.source
				}
			}
		};
		WithIcon.parameters = {
			...WithIcon.parameters,
			docs: {
				...WithIcon.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <FormFileUpload {...props} />;\n}",
					...WithIcon.parameters?.docs?.source
				}
			}
		};
		WithCustomRender.parameters = {
			...WithCustomRender.parameters,
			docs: {
				...WithCustomRender.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <FormFileUpload {...props} />;\n}",
					...WithCustomRender.parameters?.docs?.source
				},
				description: {
					story: "Render a custom trigger button by passing a render function to the `render` prop.\n\n```jsx\n( { openFileDialog } ) => <button onClick={ openFileDialog }>Custom Upload Button</button>\n```",
					...WithCustomRender.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { AllowMultipleFiles, Default, RestrictFileTypes, WithCustomRender, WithIcon, meta as default };
