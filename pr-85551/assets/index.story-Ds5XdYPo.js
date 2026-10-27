import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { i as init_component, n as init_component$1, r as ItemGroup, t as Item } from "./component-DI4_mnYI.js";
//#region ../packages/components/src/item-group/stories/index.story.tsx
var import_react, import_jsx_dev_runtime, _jsxFileName, meta, mapPropsToItem, Template, Default, NonClickableItems, CustomItemSize, WithoutBorder;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_component();
		init_component$1();
		import_react = require_react();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/item-group/stories/index.story.tsx";
		meta = {
			component: ItemGroup,
			subcomponents: { Item },
			id: "components-itemgroup",
			title: "Components/@wordpress-components/ItemGroup",
			argTypes: {
				as: { control: false },
				children: { control: false }
			},
			tags: ["status-experimental", "manifest"],
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "global"
				}
			}
		};
		mapPropsToItem = (props, index) => /* @__PURE__ */ (0, import_react.createElement)(Item, {
			...props,
			key: index,
			__self: void 0,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 29,
				columnNumber: 2
			}
		});
		Template = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemGroup, { ...props }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 33,
			columnNumber: 2
		}, void 0);
		Default = Template.bind({});
		Default.args = {
			isBordered: true,
			isSeparated: true,
			children: [
				{
					children: "First button item",
					onClick: () => alert("First item clicked")
				},
				{
					children: "Second button item",
					onClick: () => alert("Second item clicked")
				},
				{
					children: "Third button item",
					onClick: () => alert("Third item clicked")
				},
				{
					children: "Anchor item",
					as: "a",
					href: "https://wordpress.org"
				}
			].map(mapPropsToItem)
		};
		NonClickableItems = Template.bind({});
		NonClickableItems.args = {
			...Default.args,
			children: [{ children: "This <Item /> is not click-able because it doesn't have an `onClick` prop" }, { children: "This <Item /> is also not click-able because it doesn't have an `onClick` prop" }].map(mapPropsToItem)
		};
		CustomItemSize = Template.bind({});
		CustomItemSize.args = {
			...Default.args,
			children: [{ children: "This <Item /> will inherit the size from <ItemGroup /> (try changing the size prop)" }, {
				children: "This <Item /> has a hardcoded size=\"large\", regardless of <ItemGroup />'s size",
				size: "large"
			}].map(mapPropsToItem)
		};
		WithoutBorder = Template.bind({});
		WithoutBorder.args = {
			...Default.args,
			isBordered: false,
			isSeparated: false
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "props => <ItemGroup {...props} />",
					...Default.parameters?.docs?.source
				}
			}
		};
		NonClickableItems.parameters = {
			...NonClickableItems.parameters,
			docs: {
				...NonClickableItems.parameters?.docs,
				source: {
					originalSource: "props => <ItemGroup {...props} />",
					...NonClickableItems.parameters?.docs?.source
				}
			}
		};
		CustomItemSize.parameters = {
			...CustomItemSize.parameters,
			docs: {
				...CustomItemSize.parameters?.docs,
				source: {
					originalSource: "props => <ItemGroup {...props} />",
					...CustomItemSize.parameters?.docs?.source
				}
			}
		};
		WithoutBorder.parameters = {
			...WithoutBorder.parameters,
			docs: {
				...WithoutBorder.parameters?.docs,
				source: {
					originalSource: "props => <ItemGroup {...props} />",
					...WithoutBorder.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { CustomItemSize, Default, NonClickableItems, WithoutBorder, meta as default };
