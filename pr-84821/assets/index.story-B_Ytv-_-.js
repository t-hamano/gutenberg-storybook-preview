import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_icon, t as Icon } from "./icon-5WS0jz-X.js";
import { n as star_filled_default } from "./star-filled-Bd1msqc5.js";
import { n as init_stack, t as Stack } from "./stack-BHmRFw1F.js";
import { n as init_dataform, t as DataForm } from "./dataform-ChyK0-Nj.js";
import { n as init_filter_sort_and_paginate, t as filterSortAndPaginate } from "./filter-sort-and-paginate-CSr4Wfgc.js";
import { n as init_dataviews, t as DataViewsSubComponents } from "./dataviews-DkkdmdNi.js";
import { r as init_build_module } from "./library.story-CFsmdbdz.js";
//#region ../packages/dataviews/src/field-types/stories/index.story.tsx
function generateAdditionalElements(count, prefix) {
	const additional = [];
	for (let i = 1; i <= count; i++) additional.push({
		value: `${prefix}${i + 3}`,
		label: `${prefix.charAt(0).toUpperCase() + prefix.slice(1)} ${i + 3}`
	});
	return additional;
}
var import_jsx_dev_runtime, _jsxFileName, meta, StarIconPrefix, data, fields, FieldTypeStory, AllComponent, TextComponent, IntegerComponent, NumberComponent, BooleanComponent, DateTimeComponent, DateComponent, TimeComponent, EmailComponent, TelephoneComponent, UrlComponent, ColorComponent, MediaComponent, ArrayComponent, PasswordComponent, NoTypeComponent;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_icon(), init_stack();
		init_build_module();
		init_dataviews();
		init_dataform();
		init_filter_sort_and_paginate();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx";
		meta = {
			parameters: { a11y: { test: "todo" } },
			id: "dataviews-fieldtypes",
			title: "Design System/DataViews/FieldTypes",
			component: DataForm,
			argTypes: {
				type: {
					control: { type: "select" },
					description: "Chooses the default layout of each field. \"regular\" is the default layout.",
					options: ["regular", "panel"]
				},
				Edit: {
					control: { type: "select" },
					description: "Chooses the Edit function for the field. \"Default\" means use the default Edit function for the field type.",
					options: [
						"default",
						"adaptiveSelect",
						"array",
						"checkbox",
						"color",
						"combobox",
						"date",
						"datetime",
						"email",
						"integer",
						"number",
						"password",
						"radio",
						"select",
						"telephone",
						"url",
						"text",
						"time",
						"toggle",
						"toggleGroup"
					]
				},
				asyncElements: {
					control: { type: "boolean" },
					description: "Whether the filter should fetch elements asynchronously.",
					options: [true, false]
				},
				manyElements: {
					control: { type: "boolean" },
					description: "Add 10 more elements to push over the threshold and trigger Combobox rendering",
					if: {
						arg: "Edit",
						eq: "adaptiveSelect"
					}
				},
				disabled: {
					control: { type: "boolean" },
					description: "Whether the field controls are disabled."
				}
			},
			args: {
				type: "regular",
				Edit: "default",
				asyncElements: false,
				manyElements: false,
				disabled: false
			}
		};
		StarIconPrefix = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: star_filled_default }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 80,
			columnNumber: 30
		}, void 0);
		data = [{
			id: 1,
			text: "Text",
			textWithElements: "item1",
			textWithRadio: "item2",
			textWithTextarea: "Textarea",
			integer: 1,
			integerWithElements: 1,
			number: 10.25,
			numberWithElements: 2,
			boolean: true,
			booleanWithToggle: true,
			booleanWithElements: true,
			datetime: "2021-01-01T14:30:00Z",
			datetimeCompact: "2021-01-01T14:30:00Z",
			datetimeWithElements: "1982-05-10T20:30:00Z",
			date: "2021-01-01",
			dateWithElements: "2021-01-01",
			time: "14:30",
			timeWithSeconds: "14:30:45",
			timeWithElements: "13:00",
			email: "hi@example.com",
			emailWithElements: "bob@example.com",
			telephone: "+1-555-123-4567",
			telephoneWithElements: "+1-555-123-4567",
			color: "#ff6600",
			colorWithElements: "rgba(255, 165, 0, 0.8)",
			url: "https://example.com",
			urlWithElements: "https://example.com",
			password: "secretpassword123",
			passwordWithElements: "secretpassword123",
			media: "https://live.staticflickr.com/7398/9458193857_e1256123e3_z.jpg",
			mediaWithElements: "https://live.staticflickr.com/7398/9458193857_e1256123e3_z.jpg",
			array: [
				"item1",
				"item2",
				"item3"
			],
			arrayWithElements: [
				"item1",
				"item2",
				"item3"
			],
			notype: "No type",
			notypeWithElements: "No type",
			priceWithPrefix: "25.99",
			ratingWithIcon: "4.5",
			percentageWithSuffix: "85",
			priceWithBoth: "199.99"
		}];
		fields = [
			{
				id: "text",
				type: "text",
				label: "Text",
				description: "Help for text."
			},
			{
				id: "textWithElements",
				type: "text",
				label: "Text (with elements)",
				description: "Help for text with elements.",
				elements: [
					{
						value: "item1",
						label: "Item 1"
					},
					{
						value: "item2",
						label: "Item 2"
					},
					{
						value: "item3",
						label: "Item 3"
					}
				]
			},
			{
				id: "textWithRadio",
				type: "text",
				label: "Text (with radio)",
				description: "Help for text with radio.",
				Edit: "radio",
				elements: [
					{
						value: "item1",
						label: "Item 1"
					},
					{
						value: "item2",
						label: "Item 2"
					},
					{
						value: "item3",
						label: "Item 3"
					}
				]
			},
			{
				id: "textWithTextarea",
				type: "text",
				label: "Textarea",
				description: "Help for textarea.",
				Edit: "textarea"
			},
			{
				id: "integer",
				type: "integer",
				label: "Integer",
				description: "Help for integer."
			},
			{
				id: "integerWithElements",
				type: "integer",
				label: "Integer (with elements)",
				description: "Help for integer with elements.",
				elements: [
					{
						value: 1,
						label: "One"
					},
					{
						value: 2,
						label: "Two"
					},
					{
						value: 3,
						label: "Three"
					}
				],
				setValue: ({ value }) => ({ integerWithElements: parseInt(value, 10) })
			},
			{
				id: "number",
				type: "number",
				label: "Number",
				description: "Number field increments by 0.01."
			},
			{
				id: "numberWithElements",
				type: "number",
				label: "Number (with elements)",
				description: "Number field with elements.",
				elements: [
					{
						value: 1,
						label: "One"
					},
					{
						value: 2,
						label: "Two"
					},
					{
						value: 3,
						label: "Three"
					}
				],
				setValue: ({ value }) => ({ numberWithElements: Number(value) })
			},
			{
				id: "boolean",
				type: "boolean",
				label: "Boolean",
				description: "Help for boolean."
			},
			{
				id: "booleanWithToggle",
				type: "boolean",
				label: "Boolean (with toggle)",
				description: "Help for boolean with toggle control.",
				Edit: "toggle"
			},
			{
				id: "booleanWithElements",
				type: "boolean",
				label: "Boolean (with elements)",
				description: "Help for boolean with elements.",
				elements: [{
					value: true,
					label: "It is true"
				}, {
					value: false,
					label: "It is false"
				}],
				setValue: ({ value }) => ({ booleanWithElements: value === "true" ? true : false })
			},
			{
				id: "datetime",
				type: "datetime",
				label: "Datetime",
				description: "Help for datetime."
			},
			{
				id: "datetimeCompact",
				type: "datetime",
				label: "Datetime (compact)",
				description: "Datetime field without the calendar widget.",
				Edit: {
					control: "datetime",
					compact: true
				}
			},
			{
				id: "datetimeWithElements",
				type: "datetime",
				label: "Datetime (with elements)",
				description: "Help for datetime with elements.",
				elements: [
					{
						value: "1973-02-01T14:30:00Z",
						label: "February 1st, 1973. 14:30UTC"
					},
					{
						value: "1982-05-10T20:30:00Z",
						label: "May 10th, 1982. 20:30UTC"
					},
					{
						value: "1994-03-01T14:30:00Z",
						label: "March 1st, 1994. 14:30UTC"
					}
				]
			},
			{
				id: "date",
				type: "date",
				label: "Date",
				description: "Help for date."
			},
			{
				id: "dateWithElements",
				type: "date",
				label: "Date (with elements)",
				description: "Help for date with elements.",
				elements: [
					{
						value: "2021-01-01",
						label: "January 1st, 2021"
					},
					{
						value: "2021-02-01",
						label: "February 1st, 2021"
					},
					{
						value: "2021-03-01",
						label: "March 1st, 2021"
					}
				]
			},
			{
				id: "time",
				type: "time",
				label: "Time",
				description: "Help for time."
			},
			{
				id: "timeWithSeconds",
				type: "time",
				label: "Time (with seconds)",
				description: "A format that renders seconds also gives the control a seconds field.",
				format: { time: "H:i:s" }
			},
			{
				id: "timeWithElements",
				type: "time",
				label: "Time (with elements)",
				description: "Help for time with elements.",
				elements: [
					{
						value: "09:00",
						label: "Morning"
					},
					{
						value: "13:00",
						label: "Afternoon"
					},
					{
						value: "19:00",
						label: "Evening"
					}
				]
			},
			{
				id: "email",
				type: "email",
				label: "Email",
				description: "Help for email."
			},
			{
				id: "emailWithElements",
				type: "email",
				label: "Email (with elements)",
				description: "Help for email with elements.",
				elements: [
					{
						value: "john@example.com",
						label: "John Doe"
					},
					{
						value: "jane@example.com",
						label: "Jane Doe"
					},
					{
						value: "bob@example.com",
						label: "Bob Smith"
					}
				],
				setValue: ({ value }) => ({ emailWithElements: value })
			},
			{
				id: "telephone",
				type: "telephone",
				label: "Telephone",
				description: "Help for telephone."
			},
			{
				id: "telephoneWithElements",
				type: "telephone",
				label: "Telephone (with elements)",
				description: "Help for telephone with elements.",
				elements: [
					{
						value: "+1-555-123-4567",
						label: "+1-555-123-4567"
					},
					{
						value: "+44-20-7946-0958",
						label: "+44-20-7946-0958"
					},
					{
						value: "+81-3-1234-5678",
						label: "+81-3-1234-5678"
					}
				]
			},
			{
				id: "url",
				type: "url",
				label: "URL",
				description: "Help for URL."
			},
			{
				id: "urlWithElements",
				type: "url",
				label: "URL (with elements)",
				description: "Help for URL with elements.",
				elements: [
					{
						value: "https://example.com",
						label: "https://example.com"
					},
					{
						value: "https://wordpress.org",
						label: "https://wordpress.org"
					},
					{
						value: "https://github.com",
						label: "https://github.com"
					}
				]
			},
			{
				id: "color",
				type: "color",
				label: "Color",
				description: "Help for color. Supports hex, rgb, hsl formats with alpha channel."
			},
			{
				id: "colorWithElements",
				type: "color",
				label: "Color (with elements)",
				description: "Help for color with predefined color options.",
				elements: [
					{
						value: "#ff0000",
						label: "Red"
					},
					{
						value: "#00ff00",
						label: "Green"
					},
					{
						value: "#0000ff",
						label: "Blue"
					},
					{
						value: "rgba(255, 165, 0, 0.8)",
						label: "Orange (80% opacity)"
					},
					{
						value: "hsl(300, 100%, 50%)",
						label: "Magenta"
					},
					{
						value: "hsla(120, 100%, 25%, 0.6)",
						label: "Dark Green (60% opacity)"
					}
				]
			},
			{
				id: "password",
				type: "password",
				label: "Password",
				description: "Help for password."
			},
			{
				id: "passwordWithElements",
				type: "password",
				label: "Password (with elements)",
				description: "Help for password with elements.",
				elements: [
					{
						value: "secretpassword123",
						label: "Secret Password"
					},
					{
						value: "adminpass456",
						label: "Admin Password"
					},
					{
						value: "userpass789",
						label: "User Password"
					}
				]
			},
			{
				id: "media",
				type: "media",
				label: "Media",
				description: "Help for media.",
				render: ({ item }) => {
					return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						src: item.media,
						alt: "",
						style: { width: "100%" }
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 470,
						columnNumber: 5
					}, void 0);
				}
			},
			{
				id: "mediaWithElements",
				type: "media",
				label: "Media (with elements)",
				description: "Help for media with elements.",
				elements: [
					{
						value: "https://live.staticflickr.com/7398/9458193857_e1256123e3_z.jpg",
						label: "Moon"
					},
					{
						value: "https://live.staticflickr.com/8151/7651156426_e047f4d219_z.jpg",
						label: "Mars"
					},
					{
						value: "https://live.staticflickr.com/3762/9460163562_964fe6af07_z.jpg",
						label: "Earth"
					}
				],
				render: ({ item }) => {
					return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						src: item.mediaWithElements,
						alt: "",
						style: { width: "100%" }
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 495,
						columnNumber: 5
					}, void 0);
				}
			},
			{
				id: "array",
				type: "array",
				label: "Array",
				description: "Help for array."
			},
			{
				id: "arrayWithElements",
				type: "array",
				label: "Array (with elements)",
				description: "Help for array with elements.",
				elements: [
					{
						value: "item1",
						label: "Item 1"
					},
					{
						value: "item2",
						label: "Item 2"
					},
					{
						value: "item3",
						label: "Item 3"
					}
				]
			},
			{
				id: "notype",
				label: "No type",
				description: "Help for notype."
			},
			{
				id: "notypeWithElements",
				label: "No type (with elements)",
				description: "Help for notype with elements.",
				elements: [
					{
						value: "item1",
						label: "Item 1"
					},
					{
						value: "item2",
						label: "Item 2"
					},
					{
						value: "item3",
						label: "Item 3"
					}
				]
			},
			{
				id: "priceWithPrefix",
				label: "Text with Prefix",
				type: "text",
				description: "Text field with dollar sign prefix.",
				Edit: {
					control: "text",
					prefix: "$"
				}
			},
			{
				id: "ratingWithIcon",
				label: "Text with Icon Prefix",
				type: "text",
				description: "Text field with star icon prefix.",
				Edit: {
					control: "text",
					prefix: StarIconPrefix,
					prefixPadding: "minimal"
				}
			},
			{
				id: "percentageWithSuffix",
				label: "Text with Suffix",
				type: "text",
				description: "Text field with percent sign suffix.",
				Edit: {
					control: "text",
					suffix: "%"
				}
			},
			{
				id: "priceWithBoth",
				label: "Text with Prefix and Suffix",
				type: "text",
				description: "Text field with both dollar prefix and USD suffix.",
				Edit: {
					control: "text",
					prefix: "$",
					suffix: "USD"
				}
			}
		];
		FieldTypeStory = ({ fields: _fields, type, Edit, asyncElements, manyElements, disabled }) => {
			const storyFields = (0, import_react.useMemo)(() => {
				let fieldsToProcess = _fields;
				if (disabled) fieldsToProcess = fieldsToProcess.map((field) => ({
					...field,
					isDisabled: true
				}));
				if (Edit !== "default") fieldsToProcess = fieldsToProcess.map((field) => ({
					...field,
					Edit
				}));
				if (Edit === "adaptiveSelect" && manyElements) fieldsToProcess = fieldsToProcess.map((field) => {
					if (field.elements && Array.isArray(field.elements)) {
						const additionalElements = generateAdditionalElements(10, field.id.replace("WithElements", ""));
						return {
							...field,
							elements: [...field.elements, ...additionalElements]
						};
					}
					return field;
				});
				if (asyncElements) fieldsToProcess = fieldsToProcess.map((field) => {
					if (field.elements) {
						const elements = field.elements;
						return {
							...field,
							elements: void 0,
							getElements: () => new Promise((resolve) => setTimeout(() => resolve(elements), 500))
						};
					}
					return field;
				});
				return fieldsToProcess;
			}, [
				_fields,
				Edit,
				asyncElements,
				manyElements,
				disabled
			]);
			const form = (0, import_react.useMemo)(() => ({
				layout: { type },
				fields: storyFields.map((field) => field.id)
			}), [type, storyFields]);
			const [view, setView] = (0, import_react.useState)({
				type: "table",
				search: "",
				page: 1,
				perPage: 10,
				layout: {},
				filters: [],
				fields: storyFields.map((field) => field.id)
			});
			const [selectedIds, setSelectedIds] = (0, import_react.useState)([]);
			const [modifiedData, setModifiedData] = (0, import_react.useState)(data);
			const { data: shownData, paginationInfo } = (0, import_react.useMemo)(() => {
				return filterSortAndPaginate(modifiedData, view, storyFields);
			}, [
				modifiedData,
				view,
				storyFields
			]);
			const selectedItem = selectedIds.length === 1 && shownData.find((item) => item.id === selectedIds[0]) || null;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
				direction: "row",
				gap: "sm",
				align: "stretch",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: { flex: 2 },
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataViewsSubComponents, {
						getItemId: (item) => item.id.toString(),
						data: shownData,
						paginationInfo,
						view,
						fields: storyFields,
						onChangeView: setView,
						actions: [{
							id: "edit",
							label: "Edit",
							callback: () => {},
							disabled: true,
							supportsBulk: true
						}],
						defaultLayouts: { table: true },
						selection: selectedIds.map((id) => id.toString()),
						onChangeSelection: (newSelection) => setSelectedIds(newSelection.map((id) => parseInt(id, 10)))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 711,
						columnNumber: 5
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 710,
					columnNumber: 4
				}, void 0), selectedItem ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
					direction: "column",
					gap: "sm",
					align: "top",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataForm, {
						data: selectedItem,
						form,
						fields: storyFields,
						onChange: (updatedValues) => {
							const updatedItem = {
								...selectedItem,
								...updatedValues
							};
							setModifiedData(modifiedData.map((item) => item.id === selectedItem.id ? updatedItem : item));
						}
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 740,
						columnNumber: 6
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 739,
					columnNumber: 5
				}, void 0) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
					direction: "column",
					gap: "sm",
					align: "center",
					justify: "center",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						style: { color: "#888" },
						children: "Please, select a single item."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 767,
						columnNumber: 6
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 761,
					columnNumber: 5
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 709,
				columnNumber: 3
			}, void 0);
		};
		AllComponent = ({ type, Edit, asyncElements, manyElements, disabled }) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldTypeStory, {
				fields,
				type,
				Edit,
				asyncElements,
				manyElements,
				disabled
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 794,
				columnNumber: 3
			}, void 0);
		};
		AllComponent.storyName = "All types";
		TextComponent = ({ type, Edit, asyncElements, manyElements, disabled }) => {
			const textFields = (0, import_react.useMemo)(() => fields.filter((field) => field.type === "text"), []);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldTypeStory, {
				fields: textFields,
				type,
				Edit,
				asyncElements,
				manyElements,
				disabled
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 825,
				columnNumber: 3
			}, void 0);
		};
		TextComponent.storyName = "text";
		IntegerComponent = ({ type, Edit, asyncElements, manyElements, formatSeparatorThousand, disabled }) => {
			const integerFields = (0, import_react.useMemo)(() => fields.filter((field) => field.type === "integer").map((field) => {
				if (formatSeparatorThousand !== void 0) return {
					...field,
					format: { separatorThousand: formatSeparatorThousand }
				};
				return field;
			}), [formatSeparatorThousand]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldTypeStory, {
				fields: integerFields,
				type,
				Edit,
				asyncElements,
				manyElements,
				disabled
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 871,
				columnNumber: 3
			}, void 0);
		};
		IntegerComponent.storyName = "integer";
		IntegerComponent.args = { formatSeparatorThousand: "," };
		IntegerComponent.argTypes = { formatSeparatorThousand: {
			control: "text",
			description: "Character used as thousand separator (e.g., \",\" for \"1,234\"). Default is \",\"."
		} };
		NumberComponent = ({ type, Edit, asyncElements, manyElements, formatSeparatorThousand, formatSeparatorDecimal, formatDecimals, disabled }) => {
			const numberFields = (0, import_react.useMemo)(() => fields.filter((field) => field.type === "number").map((field) => {
				if (formatSeparatorThousand !== void 0 || formatSeparatorDecimal !== void 0 || formatDecimals !== void 0) {
					const format = {};
					if (formatSeparatorThousand !== void 0) format.separatorThousand = formatSeparatorThousand;
					if (formatSeparatorDecimal !== void 0) format.separatorDecimal = formatSeparatorDecimal;
					if (formatDecimals !== void 0) format.decimals = formatDecimals;
					return {
						...field,
						format
					};
				}
				return field;
			}), [
				formatSeparatorThousand,
				formatSeparatorDecimal,
				formatDecimals
			]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldTypeStory, {
				fields: numberFields,
				type,
				Edit,
				asyncElements,
				manyElements,
				disabled
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 947,
				columnNumber: 3
			}, void 0);
		};
		NumberComponent.storyName = "number";
		NumberComponent.args = {
			formatSeparatorThousand: ",",
			formatSeparatorDecimal: ".",
			formatDecimals: 2
		};
		NumberComponent.argTypes = {
			formatSeparatorThousand: {
				control: "text",
				description: "Character used as thousand separator (e.g., \",\" for \"1,234\"). Default is \",\"."
			},
			formatSeparatorDecimal: {
				control: "text",
				description: "Character used as decimal separator (e.g., \".\" for \"1.23\"). Default is \".\"."
			},
			formatDecimals: {
				control: {
					type: "number",
					min: 0,
					max: 100,
					step: 1
				},
				description: "Number of decimal places to display (0-100). Default is 2."
			}
		};
		BooleanComponent = ({ type, Edit, asyncElements, manyElements, disabled }) => {
			const booleanFields = (0, import_react.useMemo)(() => fields.filter((field) => field.type === "boolean"), []);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldTypeStory, {
				fields: booleanFields,
				type,
				Edit,
				asyncElements,
				manyElements,
				disabled
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 1e3,
				columnNumber: 3
			}, void 0);
		};
		BooleanComponent.storyName = "boolean";
		DateTimeComponent = ({ type, Edit, asyncElements, manyElements, formatDatetime, formatWeekStartsOn, disabled }) => {
			const datetimeFields = (0, import_react.useMemo)(() => fields.filter((field) => field.id.startsWith("datetime")).map((field) => {
				if (formatDatetime || formatWeekStartsOn !== void 0) {
					const format = {};
					if (formatDatetime) format.datetime = formatDatetime;
					if (formatWeekStartsOn !== void 0) format.weekStartsOn = formatWeekStartsOn;
					return {
						...field,
						format
					};
				}
				return field;
			}), [formatDatetime, formatWeekStartsOn]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldTypeStory, {
				fields: datetimeFields,
				type,
				Edit,
				asyncElements,
				manyElements,
				disabled
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 1056,
				columnNumber: 3
			}, void 0);
		};
		DateTimeComponent.storyName = "datetime";
		DateTimeComponent.args = {
			formatDatetime: "",
			formatWeekStartsOn: void 0
		};
		DateTimeComponent.argTypes = {
			formatDatetime: {
				control: "text",
				description: "Custom PHP date format string (e.g., \"M j, Y g:i a\" for \"Jan 1, 2021 2:30 pm\"). Leave empty to use WordPress default."
			},
			formatWeekStartsOn: {
				control: "select",
				options: {
					Default: void 0,
					Sunday: 0,
					Monday: 1,
					Tuesday: 2,
					Wednesday: 3,
					Thursday: 4,
					Friday: 5,
					Saturday: 6
				},
				description: "Day that the week starts on. Leave as Default to use WordPress default."
			}
		};
		DateComponent = ({ type, Edit, asyncElements, manyElements, formatDate, formatWeekStartsOn, disabled }) => {
			const dateFields = (0, import_react.useMemo)(() => fields.filter((field) => field.type === "date").map((field) => {
				if (formatDate || formatWeekStartsOn !== void 0) {
					const format = {};
					if (formatDate) format.date = formatDate;
					if (formatWeekStartsOn !== void 0) format.weekStartsOn = formatWeekStartsOn;
					return {
						...field,
						format
					};
				}
				return field;
			}), [formatDate, formatWeekStartsOn]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldTypeStory, {
				fields: dateFields,
				type,
				Edit,
				asyncElements,
				manyElements,
				disabled
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 1138,
				columnNumber: 3
			}, void 0);
		};
		DateComponent.storyName = "date";
		DateComponent.args = {
			formatDate: "",
			formatWeekStartsOn: void 0
		};
		DateComponent.argTypes = {
			formatDate: {
				control: "text",
				description: "Custom PHP date format string (e.g., \"F j, Y\" for \"November 6, 2010\"). Leave empty to use WordPress default."
			},
			formatWeekStartsOn: {
				control: "select",
				options: {
					Default: void 0,
					Sunday: 0,
					Monday: 1,
					Tuesday: 2,
					Wednesday: 3,
					Thursday: 4,
					Friday: 5,
					Saturday: 6
				},
				description: "Day that the week starts on. Leave as Default to use WordPress default."
			}
		};
		TimeComponent = ({ type, Edit, asyncElements, manyElements, formatTime, disabled }) => {
			const timeFields = (0, import_react.useMemo)(() => fields.filter((field) => field.type === "time").map((field) => formatTime ? {
				...field,
				format: { time: formatTime }
			} : field), [formatTime]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldTypeStory, {
				fields: timeFields,
				type,
				Edit,
				asyncElements,
				manyElements,
				disabled
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 1204,
				columnNumber: 3
			}, void 0);
		};
		TimeComponent.storyName = "time";
		TimeComponent.args = { formatTime: "" };
		TimeComponent.argTypes = { formatTime: {
			control: "text",
			description: "Custom PHP time format string (e.g., \"g:i a\" for \"2:30 pm\"). Leave empty to use the format each field declares."
		} };
		EmailComponent = ({ type, Edit, asyncElements, manyElements, disabled }) => {
			const emailFields = (0, import_react.useMemo)(() => fields.filter((field) => field.type === "email"), []);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldTypeStory, {
				fields: emailFields,
				type,
				Edit,
				asyncElements,
				manyElements,
				disabled
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 1245,
				columnNumber: 3
			}, void 0);
		};
		EmailComponent.storyName = "email";
		TelephoneComponent = ({ type, Edit, asyncElements, manyElements, disabled }) => {
			const telephoneFields = fields.filter((field) => field.id.startsWith("telephone"));
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldTypeStory, {
				fields: telephoneFields,
				type,
				Edit,
				asyncElements,
				manyElements,
				disabled
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 1275,
				columnNumber: 3
			}, void 0);
		};
		TelephoneComponent.storyName = "telephone";
		UrlComponent = ({ type, Edit, asyncElements, manyElements, disabled }) => {
			const urlFields = (0, import_react.useMemo)(() => fields.filter((field) => field.type === "url"), []);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldTypeStory, {
				fields: urlFields,
				type,
				Edit,
				asyncElements,
				manyElements,
				disabled
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 1306,
				columnNumber: 3
			}, void 0);
		};
		UrlComponent.storyName = "url";
		ColorComponent = ({ type, Edit, asyncElements, manyElements, disabled }) => {
			const colorFields = (0, import_react.useMemo)(() => fields.filter((field) => field.type === "color"), []);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldTypeStory, {
				fields: colorFields,
				type,
				Edit,
				asyncElements,
				manyElements,
				disabled
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 1337,
				columnNumber: 3
			}, void 0);
		};
		ColorComponent.storyName = "color";
		MediaComponent = ({ type, Edit, asyncElements, manyElements, disabled }) => {
			const mediaFields = (0, import_react.useMemo)(() => fields.filter((field) => field.type === "media"), []);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldTypeStory, {
				fields: mediaFields,
				type,
				Edit,
				asyncElements,
				manyElements,
				disabled
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 1368,
				columnNumber: 3
			}, void 0);
		};
		MediaComponent.storyName = "media";
		ArrayComponent = ({ type, Edit, asyncElements, manyElements, disabled }) => {
			const arrayTextFields = (0, import_react.useMemo)(() => fields.filter((field) => field.type === "array"), []);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldTypeStory, {
				fields: arrayTextFields,
				type,
				Edit,
				asyncElements,
				manyElements,
				disabled
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 1399,
				columnNumber: 3
			}, void 0);
		};
		ArrayComponent.storyName = "array";
		PasswordComponent = ({ type, Edit, asyncElements, manyElements, disabled }) => {
			const passwordFields = fields.filter((field) => field.id.startsWith("password"));
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldTypeStory, {
				fields: passwordFields,
				type,
				Edit,
				asyncElements,
				manyElements,
				disabled
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 1429,
				columnNumber: 3
			}, void 0);
		};
		PasswordComponent.storyName = "password";
		NoTypeComponent = ({ type, Edit, asyncElements, manyElements, disabled }) => {
			const noTypeFields = (0, import_react.useMemo)(() => fields.filter((field) => field.type === void 0), []);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldTypeStory, {
				fields: noTypeFields,
				type,
				Edit,
				asyncElements,
				manyElements,
				disabled
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 1460,
				columnNumber: 3
			}, void 0);
		};
		NoTypeComponent.storyName = "No type";
		try {
			meta.__docgenInfo = {
				"description": "`DataForm` renders an auto-generated form for viewing and editing the fields\nof a data item, driven by a fields and form layout configuration. Use it to\nedit items of a dataset, often alongside `DataViews`.",
				"displayName": "stories",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "DataFormProps"
						}],
						"description": "The item being edited.",
						"name": "data",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "DataFormProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"fields": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "DataFormProps"
						}],
						"description": "The field definitions for the item.",
						"name": "fields",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "DataFormProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "Field<Item>[]" }
					},
					"form": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "DataFormProps"
						}],
						"description": "The form configuration: which fields to render and with which layout.",
						"name": "form",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "DataFormProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "Form" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "DataFormProps"
						}],
						"description": "Callback invoked when the user edits a field, receiving the partial\nitem returned by the field's `setValue`. By default that is an object\nkeyed by field id, nested for dotted ids (e.g. `{ a: { b: value } }`\nfor the field `a.b`); a custom `setValue` may return any other partial\nshape of the item.",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "DataFormProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(value: Record<string, any>) => void" }
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "DataFormProps"
						}],
						"description": "The validity state of the form's fields, keyed by field id.",
						"name": "validity",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "DataFormProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "FormValidity" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			AllComponent.__docgenInfo = {
				"description": "",
				"displayName": "AllComponent",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
				"methods": [],
				"props": {
					"type": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "type",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "PanelTypes",
							"value": [{ "value": "\"regular\"" }, { "value": "\"panel\"" }]
						}
					},
					"Edit": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "Edit",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "ControlTypes",
							"value": [
								{ "value": "\"number\"" },
								{ "value": "\"email\"" },
								{ "value": "\"text\"" },
								{ "value": "\"select\"" },
								{ "value": "\"time\"" },
								{ "value": "\"color\"" },
								{ "value": "\"checkbox\"" },
								{ "value": "\"combobox\"" },
								{ "value": "\"radio\"" },
								{ "value": "\"date\"" },
								{ "value": "\"default\"" },
								{ "value": "\"password\"" },
								{ "value": "\"url\"" },
								{ "value": "\"toggle\"" },
								{ "value": "\"adaptiveSelect\"" },
								{ "value": "\"array\"" },
								{ "value": "\"datetime\"" },
								{ "value": "\"integer\"" },
								{ "value": "\"telephone\"" },
								{ "value": "\"toggleGroup\"" }
							]
						}
					},
					"asyncElements": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "asyncElements",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"manyElements": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "manyElements",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "disabled",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			TextComponent.__docgenInfo = {
				"description": "",
				"displayName": "TextComponent",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
				"methods": [],
				"props": {
					"type": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "type",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "PanelTypes",
							"value": [{ "value": "\"regular\"" }, { "value": "\"panel\"" }]
						}
					},
					"Edit": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "Edit",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "ControlTypes",
							"value": [
								{ "value": "\"number\"" },
								{ "value": "\"email\"" },
								{ "value": "\"text\"" },
								{ "value": "\"select\"" },
								{ "value": "\"time\"" },
								{ "value": "\"color\"" },
								{ "value": "\"checkbox\"" },
								{ "value": "\"combobox\"" },
								{ "value": "\"radio\"" },
								{ "value": "\"date\"" },
								{ "value": "\"default\"" },
								{ "value": "\"password\"" },
								{ "value": "\"url\"" },
								{ "value": "\"toggle\"" },
								{ "value": "\"adaptiveSelect\"" },
								{ "value": "\"array\"" },
								{ "value": "\"datetime\"" },
								{ "value": "\"integer\"" },
								{ "value": "\"telephone\"" },
								{ "value": "\"toggleGroup\"" }
							]
						}
					},
					"asyncElements": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "asyncElements",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"manyElements": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "manyElements",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "disabled",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			IntegerComponent.__docgenInfo = {
				"description": "",
				"displayName": "IntegerComponent",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
				"methods": [],
				"props": {
					"type": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "type",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "PanelTypes",
							"value": [{ "value": "\"regular\"" }, { "value": "\"panel\"" }]
						}
					},
					"Edit": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "Edit",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "ControlTypes",
							"value": [
								{ "value": "\"number\"" },
								{ "value": "\"email\"" },
								{ "value": "\"text\"" },
								{ "value": "\"select\"" },
								{ "value": "\"time\"" },
								{ "value": "\"color\"" },
								{ "value": "\"checkbox\"" },
								{ "value": "\"combobox\"" },
								{ "value": "\"radio\"" },
								{ "value": "\"date\"" },
								{ "value": "\"default\"" },
								{ "value": "\"password\"" },
								{ "value": "\"url\"" },
								{ "value": "\"toggle\"" },
								{ "value": "\"adaptiveSelect\"" },
								{ "value": "\"array\"" },
								{ "value": "\"datetime\"" },
								{ "value": "\"integer\"" },
								{ "value": "\"telephone\"" },
								{ "value": "\"toggleGroup\"" }
							]
						}
					},
					"asyncElements": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "asyncElements",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"manyElements": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "manyElements",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"formatSeparatorThousand": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "formatSeparatorThousand",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "disabled",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			NumberComponent.__docgenInfo = {
				"description": "",
				"displayName": "NumberComponent",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
				"methods": [],
				"props": {
					"type": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "type",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "PanelTypes",
							"value": [{ "value": "\"regular\"" }, { "value": "\"panel\"" }]
						}
					},
					"Edit": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "Edit",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "ControlTypes",
							"value": [
								{ "value": "\"number\"" },
								{ "value": "\"email\"" },
								{ "value": "\"text\"" },
								{ "value": "\"select\"" },
								{ "value": "\"time\"" },
								{ "value": "\"color\"" },
								{ "value": "\"checkbox\"" },
								{ "value": "\"combobox\"" },
								{ "value": "\"radio\"" },
								{ "value": "\"date\"" },
								{ "value": "\"default\"" },
								{ "value": "\"password\"" },
								{ "value": "\"url\"" },
								{ "value": "\"toggle\"" },
								{ "value": "\"adaptiveSelect\"" },
								{ "value": "\"array\"" },
								{ "value": "\"datetime\"" },
								{ "value": "\"integer\"" },
								{ "value": "\"telephone\"" },
								{ "value": "\"toggleGroup\"" }
							]
						}
					},
					"asyncElements": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "asyncElements",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"manyElements": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "manyElements",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"formatSeparatorThousand": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "formatSeparatorThousand",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"formatSeparatorDecimal": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "formatSeparatorDecimal",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"formatDecimals": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "formatDecimals",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "disabled",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			BooleanComponent.__docgenInfo = {
				"description": "",
				"displayName": "BooleanComponent",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
				"methods": [],
				"props": {
					"type": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "type",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "PanelTypes",
							"value": [{ "value": "\"regular\"" }, { "value": "\"panel\"" }]
						}
					},
					"Edit": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "Edit",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "ControlTypes",
							"value": [
								{ "value": "\"number\"" },
								{ "value": "\"email\"" },
								{ "value": "\"text\"" },
								{ "value": "\"select\"" },
								{ "value": "\"time\"" },
								{ "value": "\"color\"" },
								{ "value": "\"checkbox\"" },
								{ "value": "\"combobox\"" },
								{ "value": "\"radio\"" },
								{ "value": "\"date\"" },
								{ "value": "\"default\"" },
								{ "value": "\"password\"" },
								{ "value": "\"url\"" },
								{ "value": "\"toggle\"" },
								{ "value": "\"adaptiveSelect\"" },
								{ "value": "\"array\"" },
								{ "value": "\"datetime\"" },
								{ "value": "\"integer\"" },
								{ "value": "\"telephone\"" },
								{ "value": "\"toggleGroup\"" }
							]
						}
					},
					"asyncElements": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "asyncElements",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"manyElements": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "manyElements",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "disabled",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			DateTimeComponent.__docgenInfo = {
				"description": "",
				"displayName": "DateTimeComponent",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
				"methods": [],
				"props": {
					"type": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "type",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "PanelTypes",
							"value": [{ "value": "\"regular\"" }, { "value": "\"panel\"" }]
						}
					},
					"Edit": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "Edit",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "ControlTypes",
							"value": [
								{ "value": "\"number\"" },
								{ "value": "\"email\"" },
								{ "value": "\"text\"" },
								{ "value": "\"select\"" },
								{ "value": "\"time\"" },
								{ "value": "\"color\"" },
								{ "value": "\"checkbox\"" },
								{ "value": "\"combobox\"" },
								{ "value": "\"radio\"" },
								{ "value": "\"date\"" },
								{ "value": "\"default\"" },
								{ "value": "\"password\"" },
								{ "value": "\"url\"" },
								{ "value": "\"toggle\"" },
								{ "value": "\"adaptiveSelect\"" },
								{ "value": "\"array\"" },
								{ "value": "\"datetime\"" },
								{ "value": "\"integer\"" },
								{ "value": "\"telephone\"" },
								{ "value": "\"toggleGroup\"" }
							]
						}
					},
					"asyncElements": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "asyncElements",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"manyElements": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "manyElements",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"formatDatetime": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "formatDatetime",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"formatWeekStartsOn": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "formatWeekStartsOn",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "0 | 1 | 2 | 3 | 4 | 5 | 6",
							"value": [
								{ "value": "0" },
								{ "value": "1" },
								{ "value": "2" },
								{ "value": "3" },
								{ "value": "4" },
								{ "value": "5" },
								{ "value": "6" }
							]
						}
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "disabled",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			DateComponent.__docgenInfo = {
				"description": "",
				"displayName": "DateComponent",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
				"methods": [],
				"props": {
					"type": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "type",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "PanelTypes",
							"value": [{ "value": "\"regular\"" }, { "value": "\"panel\"" }]
						}
					},
					"Edit": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "Edit",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "ControlTypes",
							"value": [
								{ "value": "\"number\"" },
								{ "value": "\"email\"" },
								{ "value": "\"text\"" },
								{ "value": "\"select\"" },
								{ "value": "\"time\"" },
								{ "value": "\"color\"" },
								{ "value": "\"checkbox\"" },
								{ "value": "\"combobox\"" },
								{ "value": "\"radio\"" },
								{ "value": "\"date\"" },
								{ "value": "\"default\"" },
								{ "value": "\"password\"" },
								{ "value": "\"url\"" },
								{ "value": "\"toggle\"" },
								{ "value": "\"adaptiveSelect\"" },
								{ "value": "\"array\"" },
								{ "value": "\"datetime\"" },
								{ "value": "\"integer\"" },
								{ "value": "\"telephone\"" },
								{ "value": "\"toggleGroup\"" }
							]
						}
					},
					"asyncElements": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "asyncElements",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"manyElements": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "manyElements",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"formatDate": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "formatDate",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"formatWeekStartsOn": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "formatWeekStartsOn",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "0 | 1 | 2 | 3 | 4 | 5 | 6",
							"value": [
								{ "value": "0" },
								{ "value": "1" },
								{ "value": "2" },
								{ "value": "3" },
								{ "value": "4" },
								{ "value": "5" },
								{ "value": "6" }
							]
						}
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "disabled",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			TimeComponent.__docgenInfo = {
				"description": "",
				"displayName": "TimeComponent",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
				"methods": [],
				"props": {
					"type": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "type",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "PanelTypes",
							"value": [{ "value": "\"regular\"" }, { "value": "\"panel\"" }]
						}
					},
					"Edit": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "Edit",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "ControlTypes",
							"value": [
								{ "value": "\"number\"" },
								{ "value": "\"email\"" },
								{ "value": "\"text\"" },
								{ "value": "\"select\"" },
								{ "value": "\"time\"" },
								{ "value": "\"color\"" },
								{ "value": "\"checkbox\"" },
								{ "value": "\"combobox\"" },
								{ "value": "\"radio\"" },
								{ "value": "\"date\"" },
								{ "value": "\"default\"" },
								{ "value": "\"password\"" },
								{ "value": "\"url\"" },
								{ "value": "\"toggle\"" },
								{ "value": "\"adaptiveSelect\"" },
								{ "value": "\"array\"" },
								{ "value": "\"datetime\"" },
								{ "value": "\"integer\"" },
								{ "value": "\"telephone\"" },
								{ "value": "\"toggleGroup\"" }
							]
						}
					},
					"asyncElements": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "asyncElements",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"manyElements": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "manyElements",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"formatTime": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "formatTime",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "disabled",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			EmailComponent.__docgenInfo = {
				"description": "",
				"displayName": "EmailComponent",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
				"methods": [],
				"props": {
					"type": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "type",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "PanelTypes",
							"value": [{ "value": "\"regular\"" }, { "value": "\"panel\"" }]
						}
					},
					"Edit": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "Edit",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "ControlTypes",
							"value": [
								{ "value": "\"number\"" },
								{ "value": "\"email\"" },
								{ "value": "\"text\"" },
								{ "value": "\"select\"" },
								{ "value": "\"time\"" },
								{ "value": "\"color\"" },
								{ "value": "\"checkbox\"" },
								{ "value": "\"combobox\"" },
								{ "value": "\"radio\"" },
								{ "value": "\"date\"" },
								{ "value": "\"default\"" },
								{ "value": "\"password\"" },
								{ "value": "\"url\"" },
								{ "value": "\"toggle\"" },
								{ "value": "\"adaptiveSelect\"" },
								{ "value": "\"array\"" },
								{ "value": "\"datetime\"" },
								{ "value": "\"integer\"" },
								{ "value": "\"telephone\"" },
								{ "value": "\"toggleGroup\"" }
							]
						}
					},
					"asyncElements": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "asyncElements",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"manyElements": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "manyElements",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "disabled",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			TelephoneComponent.__docgenInfo = {
				"description": "",
				"displayName": "TelephoneComponent",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
				"methods": [],
				"props": {
					"type": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "type",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "PanelTypes",
							"value": [{ "value": "\"regular\"" }, { "value": "\"panel\"" }]
						}
					},
					"Edit": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "Edit",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "ControlTypes",
							"value": [
								{ "value": "\"number\"" },
								{ "value": "\"email\"" },
								{ "value": "\"text\"" },
								{ "value": "\"select\"" },
								{ "value": "\"time\"" },
								{ "value": "\"color\"" },
								{ "value": "\"checkbox\"" },
								{ "value": "\"combobox\"" },
								{ "value": "\"radio\"" },
								{ "value": "\"date\"" },
								{ "value": "\"default\"" },
								{ "value": "\"password\"" },
								{ "value": "\"url\"" },
								{ "value": "\"toggle\"" },
								{ "value": "\"adaptiveSelect\"" },
								{ "value": "\"array\"" },
								{ "value": "\"datetime\"" },
								{ "value": "\"integer\"" },
								{ "value": "\"telephone\"" },
								{ "value": "\"toggleGroup\"" }
							]
						}
					},
					"asyncElements": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "asyncElements",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"manyElements": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "manyElements",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "disabled",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			UrlComponent.__docgenInfo = {
				"description": "",
				"displayName": "UrlComponent",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
				"methods": [],
				"props": {
					"type": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "type",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "PanelTypes",
							"value": [{ "value": "\"regular\"" }, { "value": "\"panel\"" }]
						}
					},
					"Edit": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "Edit",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "ControlTypes",
							"value": [
								{ "value": "\"number\"" },
								{ "value": "\"email\"" },
								{ "value": "\"text\"" },
								{ "value": "\"select\"" },
								{ "value": "\"time\"" },
								{ "value": "\"color\"" },
								{ "value": "\"checkbox\"" },
								{ "value": "\"combobox\"" },
								{ "value": "\"radio\"" },
								{ "value": "\"date\"" },
								{ "value": "\"default\"" },
								{ "value": "\"password\"" },
								{ "value": "\"url\"" },
								{ "value": "\"toggle\"" },
								{ "value": "\"adaptiveSelect\"" },
								{ "value": "\"array\"" },
								{ "value": "\"datetime\"" },
								{ "value": "\"integer\"" },
								{ "value": "\"telephone\"" },
								{ "value": "\"toggleGroup\"" }
							]
						}
					},
					"asyncElements": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "asyncElements",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"manyElements": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "manyElements",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "disabled",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			ColorComponent.__docgenInfo = {
				"description": "",
				"displayName": "ColorComponent",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
				"methods": [],
				"props": {
					"type": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "type",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "PanelTypes",
							"value": [{ "value": "\"regular\"" }, { "value": "\"panel\"" }]
						}
					},
					"Edit": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "Edit",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "ControlTypes",
							"value": [
								{ "value": "\"number\"" },
								{ "value": "\"email\"" },
								{ "value": "\"text\"" },
								{ "value": "\"select\"" },
								{ "value": "\"time\"" },
								{ "value": "\"color\"" },
								{ "value": "\"checkbox\"" },
								{ "value": "\"combobox\"" },
								{ "value": "\"radio\"" },
								{ "value": "\"date\"" },
								{ "value": "\"default\"" },
								{ "value": "\"password\"" },
								{ "value": "\"url\"" },
								{ "value": "\"toggle\"" },
								{ "value": "\"adaptiveSelect\"" },
								{ "value": "\"array\"" },
								{ "value": "\"datetime\"" },
								{ "value": "\"integer\"" },
								{ "value": "\"telephone\"" },
								{ "value": "\"toggleGroup\"" }
							]
						}
					},
					"asyncElements": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "asyncElements",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"manyElements": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "manyElements",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "disabled",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			MediaComponent.__docgenInfo = {
				"description": "",
				"displayName": "MediaComponent",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
				"methods": [],
				"props": {
					"type": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "type",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "PanelTypes",
							"value": [{ "value": "\"regular\"" }, { "value": "\"panel\"" }]
						}
					},
					"Edit": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "Edit",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "ControlTypes",
							"value": [
								{ "value": "\"number\"" },
								{ "value": "\"email\"" },
								{ "value": "\"text\"" },
								{ "value": "\"select\"" },
								{ "value": "\"time\"" },
								{ "value": "\"color\"" },
								{ "value": "\"checkbox\"" },
								{ "value": "\"combobox\"" },
								{ "value": "\"radio\"" },
								{ "value": "\"date\"" },
								{ "value": "\"default\"" },
								{ "value": "\"password\"" },
								{ "value": "\"url\"" },
								{ "value": "\"toggle\"" },
								{ "value": "\"adaptiveSelect\"" },
								{ "value": "\"array\"" },
								{ "value": "\"datetime\"" },
								{ "value": "\"integer\"" },
								{ "value": "\"telephone\"" },
								{ "value": "\"toggleGroup\"" }
							]
						}
					},
					"asyncElements": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "asyncElements",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"manyElements": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "manyElements",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "disabled",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			ArrayComponent.__docgenInfo = {
				"description": "",
				"displayName": "ArrayComponent",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
				"methods": [],
				"props": {
					"type": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "type",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "PanelTypes",
							"value": [{ "value": "\"regular\"" }, { "value": "\"panel\"" }]
						}
					},
					"Edit": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "Edit",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "ControlTypes",
							"value": [
								{ "value": "\"number\"" },
								{ "value": "\"email\"" },
								{ "value": "\"text\"" },
								{ "value": "\"select\"" },
								{ "value": "\"time\"" },
								{ "value": "\"color\"" },
								{ "value": "\"checkbox\"" },
								{ "value": "\"combobox\"" },
								{ "value": "\"radio\"" },
								{ "value": "\"date\"" },
								{ "value": "\"default\"" },
								{ "value": "\"password\"" },
								{ "value": "\"url\"" },
								{ "value": "\"toggle\"" },
								{ "value": "\"adaptiveSelect\"" },
								{ "value": "\"array\"" },
								{ "value": "\"datetime\"" },
								{ "value": "\"integer\"" },
								{ "value": "\"telephone\"" },
								{ "value": "\"toggleGroup\"" }
							]
						}
					},
					"asyncElements": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "asyncElements",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"manyElements": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "manyElements",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "disabled",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			PasswordComponent.__docgenInfo = {
				"description": "",
				"displayName": "PasswordComponent",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
				"methods": [],
				"props": {
					"type": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "type",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "PanelTypes",
							"value": [{ "value": "\"regular\"" }, { "value": "\"panel\"" }]
						}
					},
					"Edit": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "Edit",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "ControlTypes",
							"value": [
								{ "value": "\"number\"" },
								{ "value": "\"email\"" },
								{ "value": "\"text\"" },
								{ "value": "\"select\"" },
								{ "value": "\"time\"" },
								{ "value": "\"color\"" },
								{ "value": "\"checkbox\"" },
								{ "value": "\"combobox\"" },
								{ "value": "\"radio\"" },
								{ "value": "\"date\"" },
								{ "value": "\"default\"" },
								{ "value": "\"password\"" },
								{ "value": "\"url\"" },
								{ "value": "\"toggle\"" },
								{ "value": "\"adaptiveSelect\"" },
								{ "value": "\"array\"" },
								{ "value": "\"datetime\"" },
								{ "value": "\"integer\"" },
								{ "value": "\"telephone\"" },
								{ "value": "\"toggleGroup\"" }
							]
						}
					},
					"asyncElements": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "asyncElements",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"manyElements": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "manyElements",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "disabled",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			NoTypeComponent.__docgenInfo = {
				"description": "",
				"displayName": "NoTypeComponent",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
				"methods": [],
				"props": {
					"type": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "type",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "PanelTypes",
							"value": [{ "value": "\"regular\"" }, { "value": "\"panel\"" }]
						}
					},
					"Edit": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "Edit",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "ControlTypes",
							"value": [
								{ "value": "\"number\"" },
								{ "value": "\"email\"" },
								{ "value": "\"text\"" },
								{ "value": "\"select\"" },
								{ "value": "\"time\"" },
								{ "value": "\"color\"" },
								{ "value": "\"checkbox\"" },
								{ "value": "\"combobox\"" },
								{ "value": "\"radio\"" },
								{ "value": "\"date\"" },
								{ "value": "\"default\"" },
								{ "value": "\"password\"" },
								{ "value": "\"url\"" },
								{ "value": "\"toggle\"" },
								{ "value": "\"adaptiveSelect\"" },
								{ "value": "\"array\"" },
								{ "value": "\"datetime\"" },
								{ "value": "\"integer\"" },
								{ "value": "\"telephone\"" },
								{ "value": "\"toggleGroup\"" }
							]
						}
					},
					"asyncElements": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "asyncElements",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"manyElements": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "manyElements",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/field-types/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "disabled",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		AllComponent.parameters = {
			...AllComponent.parameters,
			docs: {
				...AllComponent.parameters?.docs,
				source: {
					originalSource: "({\n  type,\n  Edit,\n  asyncElements,\n  manyElements,\n  disabled\n}: {\n  type: PanelTypes;\n  Edit: ControlTypes;\n  asyncElements: boolean;\n  manyElements: boolean;\n  disabled: boolean;\n}) => {\n  return <FieldTypeStory fields={fields} type={type} Edit={Edit} asyncElements={asyncElements} manyElements={manyElements} disabled={disabled} />;\n}",
					...AllComponent.parameters?.docs?.source
				}
			}
		};
		TextComponent.parameters = {
			...TextComponent.parameters,
			docs: {
				...TextComponent.parameters?.docs,
				source: {
					originalSource: "({\n  type,\n  Edit,\n  asyncElements,\n  manyElements,\n  disabled\n}: {\n  type: PanelTypes;\n  Edit: ControlTypes;\n  asyncElements: boolean;\n  manyElements: boolean;\n  disabled: boolean;\n}) => {\n  const textFields = useMemo(() => fields.filter(field => field.type === 'text'), []);\n  return <FieldTypeStory fields={textFields} type={type} Edit={Edit} asyncElements={asyncElements} manyElements={manyElements} disabled={disabled} />;\n}",
					...TextComponent.parameters?.docs?.source
				}
			}
		};
		IntegerComponent.parameters = {
			...IntegerComponent.parameters,
			docs: {
				...IntegerComponent.parameters?.docs,
				source: {
					originalSource: "({\n  type,\n  Edit,\n  asyncElements,\n  manyElements,\n  formatSeparatorThousand,\n  disabled\n}: {\n  type: PanelTypes;\n  Edit: ControlTypes;\n  asyncElements: boolean;\n  manyElements: boolean;\n  formatSeparatorThousand?: string;\n  disabled: boolean;\n}) => {\n  const integerFields = useMemo(() => fields.filter(field => field.type === 'integer').map(field => {\n    if (formatSeparatorThousand !== undefined) {\n      return {\n        ...field,\n        format: {\n          separatorThousand: formatSeparatorThousand\n        }\n      };\n    }\n    return field;\n  }), [formatSeparatorThousand]);\n  return <FieldTypeStory fields={integerFields} type={type} Edit={Edit} asyncElements={asyncElements} manyElements={manyElements} disabled={disabled} />;\n}",
					...IntegerComponent.parameters?.docs?.source
				}
			}
		};
		NumberComponent.parameters = {
			...NumberComponent.parameters,
			docs: {
				...NumberComponent.parameters?.docs,
				source: {
					originalSource: "({\n  type,\n  Edit,\n  asyncElements,\n  manyElements,\n  formatSeparatorThousand,\n  formatSeparatorDecimal,\n  formatDecimals,\n  disabled\n}: {\n  type: PanelTypes;\n  Edit: ControlTypes;\n  asyncElements: boolean;\n  manyElements: boolean;\n  formatSeparatorThousand?: string;\n  formatSeparatorDecimal?: string;\n  formatDecimals?: number;\n  disabled: boolean;\n}) => {\n  const numberFields = useMemo(() => fields.filter(field => field.type === 'number').map(field => {\n    if (formatSeparatorThousand !== undefined || formatSeparatorDecimal !== undefined || formatDecimals !== undefined) {\n      const format: {\n        separatorThousand?: string;\n        separatorDecimal?: string;\n        decimals?: number;\n      } = {};\n      if (formatSeparatorThousand !== undefined) {\n        format.separatorThousand = formatSeparatorThousand;\n      }\n      if (formatSeparatorDecimal !== undefined) {\n        format.separatorDecimal = formatSeparatorDecimal;\n      }\n      if (formatDecimals !== undefined) {\n        format.decimals = formatDecimals;\n      }\n      return {\n        ...field,\n        format\n      };\n    }\n    return field;\n  }), [formatSeparatorThousand, formatSeparatorDecimal, formatDecimals]);\n  return <FieldTypeStory fields={numberFields} type={type} Edit={Edit} asyncElements={asyncElements} manyElements={manyElements} disabled={disabled} />;\n}",
					...NumberComponent.parameters?.docs?.source
				}
			}
		};
		BooleanComponent.parameters = {
			...BooleanComponent.parameters,
			docs: {
				...BooleanComponent.parameters?.docs,
				source: {
					originalSource: "({\n  type,\n  Edit,\n  asyncElements,\n  manyElements,\n  disabled\n}: {\n  type: PanelTypes;\n  Edit: ControlTypes;\n  asyncElements: boolean;\n  manyElements: boolean;\n  disabled: boolean;\n}) => {\n  const booleanFields = useMemo(() => fields.filter(field => field.type === 'boolean'), []);\n  return <FieldTypeStory fields={booleanFields} type={type} Edit={Edit} asyncElements={asyncElements} manyElements={manyElements} disabled={disabled} />;\n}",
					...BooleanComponent.parameters?.docs?.source
				}
			}
		};
		DateTimeComponent.parameters = {
			...DateTimeComponent.parameters,
			docs: {
				...DateTimeComponent.parameters?.docs,
				source: {
					originalSource: "({\n  type,\n  Edit,\n  asyncElements,\n  manyElements,\n  formatDatetime,\n  formatWeekStartsOn,\n  disabled\n}: {\n  type: PanelTypes;\n  Edit: ControlTypes;\n  asyncElements: boolean;\n  manyElements: boolean;\n  formatDatetime?: string;\n  formatWeekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;\n  disabled: boolean;\n}) => {\n  const datetimeFields = useMemo(() => fields.filter(field => field.id.startsWith('datetime')).map(field => {\n    if (formatDatetime || formatWeekStartsOn !== undefined) {\n      const format: {\n        datetime?: string;\n        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;\n      } = {};\n      if (formatDatetime) {\n        format.datetime = formatDatetime;\n      }\n      if (formatWeekStartsOn !== undefined) {\n        format.weekStartsOn = formatWeekStartsOn;\n      }\n      return {\n        ...field,\n        format\n      };\n    }\n    return field;\n  }), [formatDatetime, formatWeekStartsOn]);\n  return <FieldTypeStory fields={datetimeFields} type={type} Edit={Edit} asyncElements={asyncElements} manyElements={manyElements} disabled={disabled} />;\n}",
					...DateTimeComponent.parameters?.docs?.source
				}
			}
		};
		DateComponent.parameters = {
			...DateComponent.parameters,
			docs: {
				...DateComponent.parameters?.docs,
				source: {
					originalSource: "({\n  type,\n  Edit,\n  asyncElements,\n  manyElements,\n  formatDate,\n  formatWeekStartsOn,\n  disabled\n}: {\n  type: PanelTypes;\n  Edit: ControlTypes;\n  asyncElements: boolean;\n  manyElements: boolean;\n  formatDate?: string;\n  formatWeekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;\n  disabled: boolean;\n}) => {\n  const dateFields = useMemo(() => fields.filter(field => field.type === 'date').map(field => {\n    if (formatDate || formatWeekStartsOn !== undefined) {\n      const format: {\n        date?: string;\n        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;\n      } = {};\n      if (formatDate) {\n        format.date = formatDate;\n      }\n      if (formatWeekStartsOn !== undefined) {\n        format.weekStartsOn = formatWeekStartsOn;\n      }\n      return {\n        ...field,\n        format\n      };\n    }\n    return field;\n  }), [formatDate, formatWeekStartsOn]);\n  return <FieldTypeStory fields={dateFields} type={type} Edit={Edit} asyncElements={asyncElements} manyElements={manyElements} disabled={disabled} />;\n}",
					...DateComponent.parameters?.docs?.source
				}
			}
		};
		TimeComponent.parameters = {
			...TimeComponent.parameters,
			docs: {
				...TimeComponent.parameters?.docs,
				source: {
					originalSource: "({\n  type,\n  Edit,\n  asyncElements,\n  manyElements,\n  formatTime,\n  disabled\n}: {\n  type: PanelTypes;\n  Edit: ControlTypes;\n  asyncElements: boolean;\n  manyElements: boolean;\n  formatTime?: string;\n  disabled: boolean;\n}) => {\n  const timeFields = useMemo(() => fields.filter(field => field.type === 'time').map(field => formatTime ? {\n    ...field,\n    format: {\n      time: formatTime\n    }\n  } : field), [formatTime]);\n  return <FieldTypeStory fields={timeFields} type={type} Edit={Edit} asyncElements={asyncElements} manyElements={manyElements} disabled={disabled} />;\n}",
					...TimeComponent.parameters?.docs?.source
				}
			}
		};
		EmailComponent.parameters = {
			...EmailComponent.parameters,
			docs: {
				...EmailComponent.parameters?.docs,
				source: {
					originalSource: "({\n  type,\n  Edit,\n  asyncElements,\n  manyElements,\n  disabled\n}: {\n  type: PanelTypes;\n  Edit: ControlTypes;\n  asyncElements: boolean;\n  manyElements: boolean;\n  disabled: boolean;\n}) => {\n  const emailFields = useMemo(() => fields.filter(field => field.type === 'email'), []);\n  return <FieldTypeStory fields={emailFields} type={type} Edit={Edit} asyncElements={asyncElements} manyElements={manyElements} disabled={disabled} />;\n}",
					...EmailComponent.parameters?.docs?.source
				}
			}
		};
		TelephoneComponent.parameters = {
			...TelephoneComponent.parameters,
			docs: {
				...TelephoneComponent.parameters?.docs,
				source: {
					originalSource: "({\n  type,\n  Edit,\n  asyncElements,\n  manyElements,\n  disabled\n}: {\n  type: PanelTypes;\n  Edit: ControlTypes;\n  asyncElements: boolean;\n  manyElements: boolean;\n  disabled: boolean;\n}) => {\n  const telephoneFields = fields.filter(field => field.id.startsWith('telephone'));\n  return <FieldTypeStory fields={telephoneFields} type={type} Edit={Edit} asyncElements={asyncElements} manyElements={manyElements} disabled={disabled} />;\n}",
					...TelephoneComponent.parameters?.docs?.source
				}
			}
		};
		UrlComponent.parameters = {
			...UrlComponent.parameters,
			docs: {
				...UrlComponent.parameters?.docs,
				source: {
					originalSource: "({\n  type,\n  Edit,\n  asyncElements,\n  manyElements,\n  disabled\n}: {\n  type: PanelTypes;\n  Edit: ControlTypes;\n  asyncElements: boolean;\n  manyElements: boolean;\n  disabled: boolean;\n}) => {\n  const urlFields = useMemo(() => fields.filter(field => field.type === 'url'), []);\n  return <FieldTypeStory fields={urlFields} type={type} Edit={Edit} asyncElements={asyncElements} manyElements={manyElements} disabled={disabled} />;\n}",
					...UrlComponent.parameters?.docs?.source
				}
			}
		};
		ColorComponent.parameters = {
			...ColorComponent.parameters,
			docs: {
				...ColorComponent.parameters?.docs,
				source: {
					originalSource: "({\n  type,\n  Edit,\n  asyncElements,\n  manyElements,\n  disabled\n}: {\n  type: PanelTypes;\n  Edit: ControlTypes;\n  asyncElements: boolean;\n  manyElements: boolean;\n  disabled: boolean;\n}) => {\n  const colorFields = useMemo(() => fields.filter(field => field.type === 'color'), []);\n  return <FieldTypeStory fields={colorFields} type={type} Edit={Edit} asyncElements={asyncElements} manyElements={manyElements} disabled={disabled} />;\n}",
					...ColorComponent.parameters?.docs?.source
				}
			}
		};
		MediaComponent.parameters = {
			...MediaComponent.parameters,
			docs: {
				...MediaComponent.parameters?.docs,
				source: {
					originalSource: "({\n  type,\n  Edit,\n  asyncElements,\n  manyElements,\n  disabled\n}: {\n  type: PanelTypes;\n  Edit: ControlTypes;\n  asyncElements: boolean;\n  manyElements: boolean;\n  disabled: boolean;\n}) => {\n  const mediaFields = useMemo(() => fields.filter(field => field.type === 'media'), []);\n  return <FieldTypeStory fields={mediaFields} type={type} Edit={Edit} asyncElements={asyncElements} manyElements={manyElements} disabled={disabled} />;\n}",
					...MediaComponent.parameters?.docs?.source
				}
			}
		};
		ArrayComponent.parameters = {
			...ArrayComponent.parameters,
			docs: {
				...ArrayComponent.parameters?.docs,
				source: {
					originalSource: "({\n  type,\n  Edit,\n  asyncElements,\n  manyElements,\n  disabled\n}: {\n  type: PanelTypes;\n  Edit: ControlTypes;\n  asyncElements: boolean;\n  manyElements: boolean;\n  disabled: boolean;\n}) => {\n  const arrayTextFields = useMemo(() => fields.filter(field => field.type === 'array'), []);\n  return <FieldTypeStory fields={arrayTextFields} type={type} Edit={Edit} asyncElements={asyncElements} manyElements={manyElements} disabled={disabled} />;\n}",
					...ArrayComponent.parameters?.docs?.source
				}
			}
		};
		PasswordComponent.parameters = {
			...PasswordComponent.parameters,
			docs: {
				...PasswordComponent.parameters?.docs,
				source: {
					originalSource: "({\n  type,\n  Edit,\n  asyncElements,\n  manyElements,\n  disabled\n}: {\n  type: PanelTypes;\n  Edit: ControlTypes;\n  asyncElements: boolean;\n  manyElements: boolean;\n  disabled: boolean;\n}) => {\n  const passwordFields = fields.filter(field => field.id.startsWith('password'));\n  return <FieldTypeStory fields={passwordFields} type={type} Edit={Edit} asyncElements={asyncElements} manyElements={manyElements} disabled={disabled} />;\n}",
					...PasswordComponent.parameters?.docs?.source
				}
			}
		};
		NoTypeComponent.parameters = {
			...NoTypeComponent.parameters,
			docs: {
				...NoTypeComponent.parameters?.docs,
				source: {
					originalSource: "({\n  type,\n  Edit,\n  asyncElements,\n  manyElements,\n  disabled\n}: {\n  type: PanelTypes;\n  Edit: ControlTypes;\n  asyncElements: boolean;\n  manyElements: boolean;\n  disabled: boolean;\n}) => {\n  const noTypeFields = useMemo(() => fields.filter(field => field.type === undefined), []);\n  return <FieldTypeStory fields={noTypeFields} type={type} Edit={Edit} asyncElements={asyncElements} manyElements={manyElements} disabled={disabled} />;\n}",
					...NoTypeComponent.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { AllComponent, ArrayComponent, BooleanComponent, ColorComponent, DateComponent, DateTimeComponent, EmailComponent, IntegerComponent, MediaComponent, NoTypeComponent, NumberComponent, PasswordComponent, TelephoneComponent, TextComponent, TimeComponent, UrlComponent, meta as default };
