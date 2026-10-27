import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_text, t as Text } from "./text-wjaOyqYP.js";
import { n as init_stack, t as Stack } from "./stack-B_tyTWv7.js";
import { n as init_select_control, t as SelectControl } from "./select-control-9hU6ulQY.js";
import { a as longLabelPopupItems, i as init_shared, n as WITH_DETAILS_DESCRIPTION, o as narrowContainerDecorator, t as DETAILS_EXAMPLE } from "./shared-BRqYhAs4.js";
//#region ../packages/ui/src/form/select-control/stories/index.story.tsx
var index_story_exports = /* @__PURE__ */ __exportAll({
	Default: () => Default,
	Grouped: () => Grouped,
	PopupWidth: () => PopupWidth,
	VisuallyHiddenLabel: () => VisuallyHiddenLabel,
	WithCustomItems: () => WithCustomItems,
	WithCustomPlaceholder: () => WithCustomPlaceholder,
	WithCustomTrigger: () => WithCustomTrigger,
	WithDetails: () => WithDetails,
	WithDisabledOption: () => WithDisabledOption,
	WithEmptyStringValue: () => WithEmptyStringValue,
	WithItemDescription: () => WithItemDescription,
	WithItemsArrayAndPartialCustomization: () => WithItemsArrayAndPartialCustomization,
	WithNullValueOption: () => WithNullValueOption,
	WithSeparator: () => WithSeparator,
	default: () => meta
});
var import_jsx_dev_runtime, action, _jsxFileName, meta, defaultItems, Default, separatorItems, WithCustomPlaceholder, WithEmptyStringValue, userOptions, User, WithCustomTrigger, nullValueOptionItems, WithNullValueOption, VisuallyHiddenLabel, WithDetails, disabledOptionItems, WithDisabledOption, groupedItems, Grouped, WithSeparator, WithCustomItems, WithItemsArrayAndPartialCustomization, WithItemDescription, PopupWidth;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_select_control();
		init_stack();
		init_text();
		init_shared();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({action} = __STORYBOOK_MODULE_ACTIONS__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/select-control/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-ui/Form/SelectControl",
			id: "design-system-components-form-selectcontrol",
			component: SelectControl,
			subcomponents: {
				"SelectControl.Trigger": SelectControl.Trigger,
				"SelectControl.Group": SelectControl.Group,
				"SelectControl.GroupLabel": SelectControl.GroupLabel,
				"SelectControl.Item": SelectControl.Item,
				"SelectControl.ItemLabel": SelectControl.ItemLabel,
				"SelectControl.ItemDescription": SelectControl.ItemDescription,
				"SelectControl.Separator": SelectControl.Separator
			},
			argTypes: { onValueChange: { action: "onValueChange" } },
			parameters: { componentStatus: {
				status: "recommended",
				whereUsed: "global"
			} }
		};
		defaultItems = [{
			value: "1",
			label: "Item 1"
		}, {
			value: "2",
			label: "Item 2"
		}];
		Default = { args: {
			items: defaultItems,
			label: "Label",
			description: "This is the description."
		} };
		separatorItems = [
			{
				value: "apple",
				label: "Apple"
			},
			{
				value: "banana",
				label: "Banana"
			},
			{
				value: "other",
				label: "Other"
			}
		];
		WithCustomPlaceholder = { args: {
			...Default.args,
			placeholder: "Choose an item"
		} };
		WithEmptyStringValue = {
			args: {
				label: "Position",
				items: [{
					value: "",
					label: "Default"
				}, {
					value: "sticky",
					label: "Sticky"
				}],
				itemToStringValue: (item) => item.value === null ? "" : `option:${item.value}`
			},
			argTypes: {
				value: { control: false },
				defaultValue: { control: false }
			},
			render: function Template(args) {
				const [position, setPosition] = (0, import_react.useState)("");
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
					direction: "column",
					gap: "sm",
					align: "start",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl, {
						...args,
						value: args.items?.find((item) => item.value === position) ?? null,
						onValueChange: (item, eventDetails) => {
							if (item && item.value !== null) setPosition(item.value);
							args.onValueChange?.(item, eventDetails);
						}
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 105,
						columnNumber: 5
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: ["Stored value: ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: JSON.stringify(position) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 120,
						columnNumber: 20
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 119,
						columnNumber: 5
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 104,
					columnNumber: 4
				}, this);
			}
		};
		userOptions = [
			{
				value: "1",
				label: "User 1 (Admin)"
			},
			{
				value: "2",
				label: "User 2 (Editor)"
			},
			{
				value: "3",
				label: "User 3 (Author)"
			}
		];
		User = ({ user }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			style: {
				display: "flex",
				alignItems: "center",
				gap: 8
			},
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
				src: `https://gravatar.com/avatar/?d=initials&name=${user.value ?? "null"}`,
				alt: "",
				width: "20",
				style: { borderRadius: "50%" }
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 150,
				columnNumber: 3
			}, void 0), user.label]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 143,
			columnNumber: 2
		}, void 0);
		WithCustomTrigger = { args: {
			...Default.args,
			items: userOptions,
			defaultValue: userOptions[0],
			trigger: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl.Trigger, {
				onFocus: action("onFocus"),
				onBlur: action("onBlur"),
				children: (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(User, { user: item }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 181,
					columnNumber: 19
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 177,
				columnNumber: 4
			}, void 0)
		} };
		nullValueOptionItems = [
			{
				value: null,
				label: "Select theme"
			},
			{
				value: "system",
				label: "System default"
			},
			{
				value: "light",
				label: "Light"
			},
			{
				value: "dark",
				label: "Dark"
			}
		];
		WithNullValueOption = { args: {
			items: nullValueOptionItems,
			label: "Theme",
			description: "Choose a theme preference.",
			defaultValue: nullValueOptionItems[0]
		} };
		VisuallyHiddenLabel = { args: {
			...Default.args,
			hideLabelFromVision: true
		} };
		WithDetails = {
			parameters: { docs: { description: { story: WITH_DETAILS_DESCRIPTION } } },
			args: {
				...Default.args,
				description: void 0,
				details: DETAILS_EXAMPLE
			}
		};
		disabledOptionItems = [{
			value: "1",
			label: "Item 1"
		}, {
			value: "2",
			label: "Item 2",
			disabled: true
		}];
		WithDisabledOption = { args: {
			items: disabledOptionItems,
			label: "Label",
			description: "This is the description.",
			defaultValue: disabledOptionItems[0]
		} };
		groupedItems = [
			{
				label: "Common",
				items: [
					{
						value: "apple",
						label: "Apple"
					},
					{
						value: "banana",
						label: "Banana"
					},
					{
						value: "orange",
						label: "Orange"
					}
				]
			},
			{
				label: "Berries",
				items: [
					{
						value: "strawberry",
						label: "Strawberry"
					},
					{
						value: "blueberry",
						label: "Blueberry"
					},
					{
						value: "raspberry",
						label: "Raspberry"
					}
				]
			},
			{
				label: "Tropical",
				items: [
					{
						value: "mango",
						label: "Mango"
					},
					{
						value: "pineapple",
						label: "Pineapple"
					},
					{
						value: "papaya",
						label: "Papaya"
					}
				]
			}
		];
		Grouped = { args: {
			label: "Fruit",
			description: "Choose a fruit.",
			items: groupedItems.flatMap((group) => group.items),
			children: [groupedItems.map((group) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl.Group, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl.GroupLabel, { children: group.label }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 298,
				columnNumber: 6
			}, void 0), group.items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl.Item, {
				value: item,
				label: item.label,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl.ItemLabel, { children: item.label }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 307,
					columnNumber: 8
				}, void 0)
			}, item.value, false, {
				fileName: _jsxFileName,
				lineNumber: 302,
				columnNumber: 7
			}, void 0))] }, group.label, true, {
				fileName: _jsxFileName,
				lineNumber: 297,
				columnNumber: 5
			}, void 0))]
		} };
		WithSeparator = { args: {
			label: "Fruit",
			items: separatorItems,
			children: [
				...separatorItems.slice(0, 2).map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl.Item, {
					value: item,
					label: item.label,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl.ItemLabel, { children: item.label }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 332,
						columnNumber: 6
					}, void 0)
				}, item.value, false, {
					fileName: _jsxFileName,
					lineNumber: 327,
					columnNumber: 5
				}, void 0)),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl.Separator, {}, "separator", false, {
					fileName: _jsxFileName,
					lineNumber: 337,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl.Item, {
					value: separatorItems[2],
					label: "Other",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl.ItemLabel, { children: "Other" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 343,
						columnNumber: 5
					}, void 0)
				}, "other", false, {
					fileName: _jsxFileName,
					lineNumber: 338,
					columnNumber: 4
				}, void 0)
			]
		} };
		WithCustomItems = { args: {
			items: userOptions,
			label: "Label",
			description: "This is the description.",
			children: [userOptions.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl.Item, {
				value: item,
				label: item.label,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl.ItemLabel, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(User, { user: item }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 368,
					columnNumber: 7
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 367,
					columnNumber: 6
				}, void 0)
			}, item.value, false, {
				fileName: _jsxFileName,
				lineNumber: 362,
				columnNumber: 5
			}, void 0))],
			defaultValue: userOptions[0]
		} };
		WithItemsArrayAndPartialCustomization = { args: {
			...Default.args,
			children: [Default.args?.items?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl.Item, {
				value: item,
				label: item.label,
				disabled: item.disabled,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl.ItemLabel, { children: ["✨ ", item.label] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 396,
					columnNumber: 6
				}, void 0)
			}, item.value ?? "null", false, {
				fileName: _jsxFileName,
				lineNumber: 390,
				columnNumber: 5
			}, void 0))]
		} };
		WithItemDescription = { args: {
			label: "Fruit",
			items: [{
				value: "apple",
				label: "Apple",
				description: "99 in stock. Ships in two to three business days."
			}, {
				value: "banana",
				label: "Banana",
				description: "12 in stock. Restock expected next week."
			}]
		} };
		PopupWidth = {
			decorators: [narrowContainerDecorator],
			args: {
				label: "Label",
				items: longLabelPopupItems,
				popupWidth: "content"
			}
		};
		try {
			WithCustomPlaceholder.__docgenInfo = {
				"description": "When no value is selected, the trigger shows the default placeholder text.\n\nUse the `placeholder` prop to customize text shown.\nPrefer a concise label without a trailing ellipsis.",
				"displayName": "WithCustomPlaceholder",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/select-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithEmptyStringValue.__docgenInfo = {
				"description": "Preserve an empty string in application state by giving each choice a unique,\nnon-empty serialization. The callback still receives the original item.\nThis `itemToStringValue` serializer also changes the value submitted with a form.",
				"displayName": "WithEmptyStringValue",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/select-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithCustomTrigger.__docgenInfo = {
				"description": "Pass a `SelectControl.Trigger` element to `trigger` to customize the button's\nprops, including focus and blur handlers. Trigger props override the control's\n`size` and `placeholder`. Children can be a render function receiving the\nselected item. The popup keeps the standard item rendering.",
				"displayName": "WithCustomTrigger",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/select-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithNullValueOption.__docgenInfo = {
				"description": "Use a `null` item value when users should be able to clear the selected value\nfrom the popup.",
				"displayName": "WithNullValueOption",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/select-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Grouped.__docgenInfo = {
				"description": "Options can be organized into labeled groups with `SelectControl.Group`\nand `SelectControl.GroupLabel`. Pass a flat `items` array for trigger label\nresolution, and use `children` to render the grouped popup content.",
				"displayName": "Grouped",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/select-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithSeparator.__docgenInfo = {
				"description": "Use `SelectControl.Separator` to set choices apart from each other.",
				"displayName": "WithSeparator",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/select-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithCustomItems.__docgenInfo = {
				"description": "Customize the item list by passing an array of\n`SelectControl.Item` as children. Note that the `label` prop of a `SelectControl.Item`\nis used as the string to match against in the typeahead functionality, while the\nitem content is determined by `children`.",
				"displayName": "WithCustomItems",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/select-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithItemsArrayAndPartialCustomization.__docgenInfo = {
				"description": "By default, the `items` array is used to render both the Trigger\nand the Item list. Passing a custom `trigger` or `children` in addition\nto `items` will override that particular aspect of the behavior.\nIn other words, if you pass both an `items` array and a custom `trigger`,\nthe Item list in the popover will still be rendered based on the `items` array.",
				"displayName": "WithItemsArrayAndPartialCustomization",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/select-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithItemDescription.__docgenInfo = {
				"description": "Pass `description` on an `items` entry for supplementary text.\nIt is announced as a description rather than part of the item name.\nCompose `SelectControl.Item` children when you need multiple\ndescriptions or custom markup.",
				"displayName": "WithItemDescription",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/select-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			PopupWidth.__docgenInfo = {
				"description": "Use `popupWidth` to control how the popup width is constrained relative to\nits anchor. Defaults to `content` so static option lists can grow with their\nlabels.",
				"displayName": "PopupWidth",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/select-control/stories/index.story.tsx",
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
					originalSource: "{\n  args: {\n    items: defaultItems,\n    label: 'Label',\n    description: 'This is the description.'\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithCustomPlaceholder.parameters = {
			...WithCustomPlaceholder.parameters,
			docs: {
				...WithCustomPlaceholder.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    placeholder: 'Choose an item'\n  }\n}",
					...WithCustomPlaceholder.parameters?.docs?.source
				},
				description: {
					story: "When no value is selected, the trigger shows the default placeholder text.\n\nUse the `placeholder` prop to customize text shown.\nPrefer a concise label without a trailing ellipsis.",
					...WithCustomPlaceholder.parameters?.docs?.description
				}
			}
		};
		WithEmptyStringValue.parameters = {
			...WithEmptyStringValue.parameters,
			docs: {
				...WithEmptyStringValue.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    label: 'Position',\n    items: [{\n      value: '',\n      label: 'Default'\n    }, {\n      value: 'sticky',\n      label: 'Sticky'\n    }],\n    itemToStringValue: item => item.value === null ? '' : `option:${item.value}`\n  },\n  argTypes: {\n    value: {\n      control: false\n    },\n    defaultValue: {\n      control: false\n    }\n  },\n  render: function Template(args) {\n    const [position, setPosition] = useState('');\n    return <Stack direction=\"column\" gap=\"sm\" align=\"start\">\n                <SelectControl {...args} value={args.items?.find(item => item.value === position) ?? null} onValueChange={(item, eventDetails) => {\n        if (item && item.value !== null) {\n          setPosition(item.value);\n        }\n        args.onValueChange?.(item, eventDetails);\n      }} />\n                <Text>\n                    Stored value: <code>{JSON.stringify(position)}</code>\n                </Text>\n            </Stack>;\n  }\n}",
					...WithEmptyStringValue.parameters?.docs?.source
				},
				description: {
					story: "Preserve an empty string in application state by giving each choice a unique,\nnon-empty serialization. The callback still receives the original item.\nThis `itemToStringValue` serializer also changes the value submitted with a form.",
					...WithEmptyStringValue.parameters?.docs?.description
				}
			}
		};
		WithCustomTrigger.parameters = {
			...WithCustomTrigger.parameters,
			docs: {
				...WithCustomTrigger.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    items: userOptions,\n    defaultValue: userOptions[0],\n    trigger: <SelectControl.Trigger onFocus={action('onFocus')} onBlur={action('onBlur')}>\n                {item => <User user={item} />}\n            </SelectControl.Trigger>\n  }\n}",
					...WithCustomTrigger.parameters?.docs?.source
				},
				description: {
					story: "Pass a `SelectControl.Trigger` element to `trigger` to customize the button's\nprops, including focus and blur handlers. Trigger props override the control's\n`size` and `placeholder`. Children can be a render function receiving the\nselected item. The popup keeps the standard item rendering.",
					...WithCustomTrigger.parameters?.docs?.description
				}
			}
		};
		WithNullValueOption.parameters = {
			...WithNullValueOption.parameters,
			docs: {
				...WithNullValueOption.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    items: nullValueOptionItems,\n    label: 'Theme',\n    description: 'Choose a theme preference.',\n    defaultValue: nullValueOptionItems[0]\n  }\n}",
					...WithNullValueOption.parameters?.docs?.source
				},
				description: {
					story: "Use a `null` item value when users should be able to clear the selected value\nfrom the popup.",
					...WithNullValueOption.parameters?.docs?.description
				}
			}
		};
		VisuallyHiddenLabel.parameters = {
			...VisuallyHiddenLabel.parameters,
			docs: {
				...VisuallyHiddenLabel.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    hideLabelFromVision: true\n  }\n}",
					...VisuallyHiddenLabel.parameters?.docs?.source
				}
			}
		};
		WithDetails.parameters = {
			...WithDetails.parameters,
			docs: {
				...WithDetails.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    docs: {\n      description: {\n        story: WITH_DETAILS_DESCRIPTION\n      }\n    }\n  },\n  args: {\n    ...Default.args,\n    description: undefined,\n    details: DETAILS_EXAMPLE\n  }\n}",
					...WithDetails.parameters?.docs?.source
				}
			}
		};
		WithDisabledOption.parameters = {
			...WithDisabledOption.parameters,
			docs: {
				...WithDisabledOption.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    items: disabledOptionItems,\n    label: 'Label',\n    description: 'This is the description.',\n    defaultValue: disabledOptionItems[0]\n  }\n}",
					...WithDisabledOption.parameters?.docs?.source
				}
			}
		};
		Grouped.parameters = {
			...Grouped.parameters,
			docs: {
				...Grouped.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    label: 'Fruit',\n    description: 'Choose a fruit.',\n    items: groupedItems.flatMap(group => group.items),\n    children: [groupedItems.map(group => <SelectControl.Group key={group.label}>\n                    <SelectControl.GroupLabel>\n                        {group.label}\n                    </SelectControl.GroupLabel>\n                    {group.items.map(item => <SelectControl.Item key={item.value} value={item} label={item.label}>\n                            <SelectControl.ItemLabel>\n                                {item.label}\n                            </SelectControl.ItemLabel>\n                        </SelectControl.Item>)}\n                </SelectControl.Group>)]\n  }\n}",
					...Grouped.parameters?.docs?.source
				},
				description: {
					story: "Options can be organized into labeled groups with `SelectControl.Group`\nand `SelectControl.GroupLabel`. Pass a flat `items` array for trigger label\nresolution, and use `children` to render the grouped popup content.",
					...Grouped.parameters?.docs?.description
				}
			}
		};
		WithSeparator.parameters = {
			...WithSeparator.parameters,
			docs: {
				...WithSeparator.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    label: 'Fruit',\n    items: separatorItems,\n    children: [...separatorItems.slice(0, 2).map(item => <SelectControl.Item key={item.value} value={item} label={item.label}>\n                    <SelectControl.ItemLabel>\n                        {item.label}\n                    </SelectControl.ItemLabel>\n                </SelectControl.Item>), <SelectControl.Separator key=\"separator\" />, <SelectControl.Item key=\"other\" value={separatorItems[2]} label=\"Other\">\n                <SelectControl.ItemLabel>Other</SelectControl.ItemLabel>\n            </SelectControl.Item>]\n  }\n}",
					...WithSeparator.parameters?.docs?.source
				},
				description: {
					story: "Use `SelectControl.Separator` to set choices apart from each other.",
					...WithSeparator.parameters?.docs?.description
				}
			}
		};
		WithCustomItems.parameters = {
			...WithCustomItems.parameters,
			docs: {
				...WithCustomItems.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    items: userOptions,\n    label: 'Label',\n    description: 'This is the description.',\n    children: [userOptions.map(item => <SelectControl.Item key={item.value} value={item} label={item.label}>\n                    <SelectControl.ItemLabel>\n                        <User user={item} />\n                    </SelectControl.ItemLabel>\n                </SelectControl.Item>)],\n    defaultValue: userOptions[0]\n  }\n}",
					...WithCustomItems.parameters?.docs?.source
				},
				description: {
					story: "Customize the item list by passing an array of\n`SelectControl.Item` as children. Note that the `label` prop of a `SelectControl.Item`\nis used as the string to match against in the typeahead functionality, while the\nitem content is determined by `children`.",
					...WithCustomItems.parameters?.docs?.description
				}
			}
		};
		WithItemsArrayAndPartialCustomization.parameters = {
			...WithItemsArrayAndPartialCustomization.parameters,
			docs: {
				...WithItemsArrayAndPartialCustomization.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    children: [Default.args?.items?.map(item => <SelectControl.Item key={item.value ?? 'null'} value={item} label={item.label} disabled={item.disabled}>\n                    <SelectControl.ItemLabel>\n                        ✨ {item.label}\n                    </SelectControl.ItemLabel>\n                </SelectControl.Item>)]\n  }\n}",
					...WithItemsArrayAndPartialCustomization.parameters?.docs?.source
				},
				description: {
					story: "By default, the `items` array is used to render both the Trigger\nand the Item list. Passing a custom `trigger` or `children` in addition\nto `items` will override that particular aspect of the behavior.\nIn other words, if you pass both an `items` array and a custom `trigger`,\nthe Item list in the popover will still be rendered based on the `items` array.",
					...WithItemsArrayAndPartialCustomization.parameters?.docs?.description
				}
			}
		};
		WithItemDescription.parameters = {
			...WithItemDescription.parameters,
			docs: {
				...WithItemDescription.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    label: 'Fruit',\n    items: [{\n      value: 'apple',\n      label: 'Apple',\n      description: '99 in stock. Ships in two to three business days.'\n    }, {\n      value: 'banana',\n      label: 'Banana',\n      description: '12 in stock. Restock expected next week.'\n    }]\n  }\n}",
					...WithItemDescription.parameters?.docs?.source
				},
				description: {
					story: "Pass `description` on an `items` entry for supplementary text.\nIt is announced as a description rather than part of the item name.\nCompose `SelectControl.Item` children when you need multiple\ndescriptions or custom markup.",
					...WithItemDescription.parameters?.docs?.description
				}
			}
		};
		PopupWidth.parameters = {
			...PopupWidth.parameters,
			docs: {
				...PopupWidth.parameters?.docs,
				source: {
					originalSource: "{\n  decorators: [narrowContainerDecorator],\n  args: {\n    label: 'Label',\n    items: longLabelPopupItems,\n    popupWidth: 'content'\n  }\n}",
					...PopupWidth.parameters?.docs?.source
				},
				description: {
					story: "Use `popupWidth` to control how the popup width is constrained relative to\nits anchor. Defaults to `content` so static option lists can grow with their\nlabels.",
					...PopupWidth.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
export { init_index_story as a, index_story_exports as i, WithEmptyStringValue as n, WithNullValueOption as r, WithCustomPlaceholder as t };
