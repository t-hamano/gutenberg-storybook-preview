import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_menu, t as NavigableMenu } from "./menu-DympXu0Z.js";
import { n as init_menu_group, t as MenuGroup } from "./menu-group-Dt-jzg_l.js";
import { n as init_menu_items_choice, t as MenuItemsChoice } from "./menu-items-choice-EMLfag2U.js";
//#region ../packages/components/src/menu-items-choice/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_menu_items_choice();
		init_menu_group();
		init_menu();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/menu-items-choice/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			component: MenuItemsChoice,
			title: "Components/@wordpress-components/Actions/MenuItemsChoice",
			id: "components-menuitemschoice",
			argTypes: {
				onHover: { action: "onHover" },
				onSelect: { action: "onSelect" },
				value: { control: false }
			},
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "global",
					notes: "Subcomponent of `DropdownMenu`."
				}
			}
		};
		Template = ({ onHover, onSelect, choices }) => {
			const [choice, setChoice] = (0, import_react.useState)(choices[0]?.value ?? "");
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigableMenu, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuGroup, {
				label: "Editor",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItemsChoice, {
					choices,
					value: choice,
					onSelect: (...selectArgs) => {
						onSelect(...selectArgs);
						setChoice(...selectArgs);
					},
					onHover
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 41,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 40,
				columnNumber: 4
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 39,
				columnNumber: 3
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = {
			choices: [
				{
					value: "arbitrary-choice-1",
					label: "Arbitrary Label #1",
					info: "Arbitrary Explanatory 1"
				},
				{
					value: "arbitrary-choice-2",
					label: "Arbitrary Label #2",
					info: "Arbitrary Explanatory 2"
				},
				{
					value: "arbitrary-choice-3",
					label: "Arbitrary Label #3",
					info: "Arbitrary Explanatory 3"
				}
			],
			value: "arbitrary-choice-1"
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "({\n  onHover,\n  onSelect,\n  choices\n}) => {\n  const [choice, setChoice] = useState(choices[0]?.value ?? '');\n  return <NavigableMenu>\n            <MenuGroup label=\"Editor\">\n                <MenuItemsChoice choices={choices} value={choice} onSelect={(...selectArgs) => {\n        onSelect(...selectArgs);\n        setChoice(...selectArgs);\n      }} onHover={onHover} />\n            </MenuGroup>\n        </NavigableMenu>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
