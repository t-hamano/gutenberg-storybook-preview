import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_font_family, t as FontFamilyControl } from "./font-family-CKv2Vw5t.js";
//#region ../packages/block-editor/src/components/font-family/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, index_story_default, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_font_family();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/font-family/stories/index.story.tsx";
		index_story_default = {
			component: FontFamilyControl,
			id: "blockeditor-fontfamilycontrol",
			title: "Editor/Block Editor/FontFamilyControl"
		};
		Default = {
			render: function Template(props) {
				const [value, setValue] = (0, import_react.useState)();
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontFamilyControl, {
					onChange: setValue,
					value,
					...props
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 18,
					columnNumber: 4
				}, this);
			},
			args: { fontFamilies: [{
				fontFace: [{
					fontFamily: "Inter",
					fontStretch: "normal",
					fontStyle: "normal",
					fontWeight: "200 900",
					src: ["file:./assets/fonts/inter/Inter-VariableFont_slnt,wght.ttf"]
				}],
				fontFamily: "\"Inter\", sans-serif",
				name: "Inter",
				slug: "inter"
			}, {
				fontFamily: "-apple-system,system-ui,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif",
				name: "System Font",
				slug: "system-font"
			}] }
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Template(props: Partial<FontFamilyControlProps>) {\n    const [value, setValue] = useState<string>();\n    return <FontFamilyControl onChange={setValue} value={value} {...props} />;\n  },\n  args: {\n    fontFamilies: [{\n      fontFace: [{\n        fontFamily: 'Inter',\n        fontStretch: 'normal',\n        fontStyle: 'normal',\n        fontWeight: '200 900',\n        src: ['file:./assets/fonts/inter/Inter-VariableFont_slnt,wght.ttf']\n      }],\n      fontFamily: '\"Inter\", sans-serif',\n      name: 'Inter',\n      slug: 'inter'\n    }, {\n      fontFamily: '-apple-system,system-ui,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif',\n      name: 'System Font',\n      slug: 'system-font'\n    }]\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, index_story_default as default };
