import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_badge, t as Badge } from "./badge-BD5td2Rp.js";
import { m as init_validated_input_control, p as ValidatedInputControl } from "./radio-control-CdZja_ND.js";
import { n as init_stack, t as Stack } from "./stack-BHmRFw1F.js";
import { i as require_cjs } from "./emotion-css.development.esm-DHgdGHQy.js";
import { n as button_default, r as init_button } from "./button-BxEkUQAF.js";
import { c as init_date, s as DateControl } from "./field-types-CdyPkyVt.js";
import { i as useFormValidity, n as init_dataform, r as init_use_form_validity, t as DataForm } from "./dataform-ChyK0-Nj.js";
//#region ../packages/dataviews/src/dataform/stories/layout-card.tsx
var import_jsx_dev_runtime$9, _jsxFileName$9, LayoutCardComponent;
function init_layout_card() {
	return (init_layout_card = __esmMin((() => {
		init_react();
		init_badge();
		init_dataform();
		import_jsx_dev_runtime$9 = require_jsx_dev_runtime();
		_jsxFileName$9 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/layout-card.tsx";
		LayoutCardComponent = ({ withHeader, withSummary, isCollapsible, isOpened }) => {
			const customerFields = [
				{
					id: "name",
					label: "Customer name",
					type: "text"
				},
				{
					id: "phone",
					label: "Phone",
					type: "text"
				},
				{
					id: "email",
					label: "Email",
					type: "email"
				},
				{
					id: "plan",
					label: "Plan",
					type: "text",
					Edit: "toggleGroup",
					elements: [
						{
							value: "basic",
							label: "Basic"
						},
						{
							value: "business",
							label: "Business"
						},
						{
							value: "vip",
							label: "VIP"
						}
					]
				},
				{
					id: "shippingAddress",
					label: "Shipping address",
					type: "text"
				},
				{
					id: "billingAddress",
					label: "Billing address",
					type: "text"
				},
				{
					id: "displayPayments",
					label: "Display payments?",
					type: "boolean"
				},
				{
					id: "fileSize",
					label: "File size",
					type: "integer",
					readOnly: true
				},
				{
					id: "dimensions",
					label: "Dimensions",
					type: "text",
					readOnly: true
				},
				{
					id: "fileType",
					label: "File type",
					readOnly: true
				},
				{
					id: "payments",
					label: "Payments",
					readOnly: true,
					isVisible: (item) => item.displayPayments,
					render: ({ item }) => {
						return /* @__PURE__ */ (0, import_jsx_dev_runtime$9.jsxDEV)("p", {
							style: { margin: 0 },
							children: [
								"The customer has made a total of ",
								item.totalOrders,
								" ",
								"orders, amounting to ",
								item.totalRevenue,
								" dollars. The average order value is ",
								item.averageOrderValue,
								" ",
								"dollars."
							]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 105,
							columnNumber: 6
						}, void 0);
					}
				},
				{
					id: "vat",
					label: "VAT",
					type: "integer"
				},
				{
					id: "commission",
					label: "Commission",
					type: "integer"
				},
				{
					id: "dueDate",
					label: "Due date",
					type: "text",
					render: ({ item }) => {
						return /* @__PURE__ */ (0, import_jsx_dev_runtime$9.jsxDEV)(Badge, { children: `Due on: ${item.dueDate}` }, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 129,
							columnNumber: 12
						}, void 0);
					}
				},
				{
					id: "plan-summary",
					type: "text",
					readOnly: true,
					render: ({ item }) => {
						return /* @__PURE__ */ (0, import_jsx_dev_runtime$9.jsxDEV)(Badge, { children: item.plan }, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 137,
							columnNumber: 12
						}, void 0);
					}
				}
			];
			const [customer, setCustomer] = (0, import_react.useState)({
				name: "Danyka Romaguera",
				email: "aromaguera@example.org",
				phone: "1-828-352-1250",
				plan: "Business",
				shippingAddress: "N/A",
				billingAddress: "Danyka Romaguera, West Myrtiehaven, 80240-4282, BI",
				displayPayments: true,
				totalOrders: 2,
				totalRevenue: 1430,
				fileSize: 1024,
				dimensions: "1920x1080",
				fileType: "JPEG",
				averageOrderValue: 715,
				hasVat: true,
				vat: 10,
				commission: 5,
				dueDate: "March 1st, 2028"
			});
			const getCardLayoutFromStoryArgs = ({ summary, withSummary: displaySummary, withHeader: header, isCollapsible: collapsible, isOpened: opened }) => {
				return {
					type: "card",
					summary: displaySummary ? summary : void 0,
					...header === false ? { withHeader: false } : {
						withHeader: true,
						isCollapsible: collapsible,
						isOpened: opened
					}
				};
			};
			const form = (0, import_react.useMemo)(() => ({
				layout: { type: "card" },
				fields: [
					{
						id: "customerCard",
						layout: getCardLayoutFromStoryArgs({
							summary: ["name", "plan-summary"],
							withHeader: withHeader ?? true,
							withSummary,
							isCollapsible,
							isOpened
						}),
						label: "Customer",
						description: "Enter your contact details, plan type, and addresses to complete your customer information.",
						children: [
							{
								id: "customerContact",
								label: "Contact",
								layout: {
									type: "panel",
									labelPosition: "top"
								},
								children: [
									{
										id: "name",
										layout: {
											type: "regular",
											labelPosition: "top"
										}
									},
									{
										id: "phone",
										layout: {
											type: "regular",
											labelPosition: "top"
										}
									},
									{
										id: "email",
										layout: {
											type: "regular",
											labelPosition: "top"
										}
									}
								]
							},
							{
								id: "plan",
								layout: {
									type: "panel",
									labelPosition: "top"
								}
							},
							{
								id: "shippingAddress",
								layout: {
									type: "panel",
									labelPosition: "top"
								}
							},
							{
								id: "billingAddress",
								layout: {
									type: "panel",
									labelPosition: "top"
								}
							},
							"displayPayments"
						]
					},
					{
						id: "payments",
						layout: getCardLayoutFromStoryArgs({ withHeader: false })
					},
					{
						id: "fileDetails",
						label: "File details",
						layout: getCardLayoutFromStoryArgs({
							withHeader,
							withSummary,
							isCollapsible,
							isOpened
						}),
						children: [
							"fileSize",
							"dimensions",
							"fileType"
						]
					},
					{
						id: "taxConfiguration",
						label: "Taxes",
						layout: getCardLayoutFromStoryArgs({
							summary: [{
								id: "dueDate",
								visibility: "always"
							}],
							withHeader,
							withSummary,
							isCollapsible,
							isOpened: isOpened ?? false
						}),
						children: ["vat", "commission"]
					}
				]
			}), [
				withHeader,
				withSummary,
				isCollapsible,
				isOpened
			]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$9.jsxDEV)(DataForm, {
				data: customer,
				fields: customerFields,
				form,
				onChange: (edits) => setCustomer((prev) => ({
					...prev,
					...edits
				}))
			}, void 0, false, {
				fileName: _jsxFileName$9,
				lineNumber: 286,
				columnNumber: 3
			}, void 0);
		};
		try {
			LayoutCardComponent.__docgenInfo = {
				"description": "",
				"displayName": "layoutcard",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/layout-card.tsx",
				"methods": [],
				"props": {
					"withHeader": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/layout-card.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "withHeader",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"withSummary": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/layout-card.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "withSummary",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isCollapsible": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/layout-card.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "isCollapsible",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isOpened": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/layout-card.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "isOpened",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/dataform/stories/layout-details.tsx
var import_jsx_dev_runtime$8, _jsxFileName$8, fields$4, LayoutDetailsComponent;
function init_layout_details() {
	return (init_layout_details = __esmMin((() => {
		init_react();
		init_dataform();
		import_jsx_dev_runtime$8 = require_jsx_dev_runtime();
		_jsxFileName$8 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/layout-details.tsx";
		fields$4 = [
			{
				id: "title",
				label: "Title",
				type: "text"
			},
			{
				id: "order",
				label: "Order",
				type: "integer"
			},
			{
				id: "date",
				label: "Date",
				type: "datetime"
			},
			{
				id: "birthdate",
				label: "Date as options",
				type: "datetime",
				elements: [
					{
						value: "",
						label: "Select a date"
					},
					{
						value: "1970-02-23T12:00:00",
						label: "Jane's birth date"
					},
					{
						value: "1950-02-23T12:00:00",
						label: "John's birth date"
					}
				]
			},
			{
				id: "author",
				label: "Author",
				type: "integer",
				elements: [
					{
						value: 1,
						label: "Jane"
					},
					{
						value: 2,
						label: "John"
					},
					{
						value: 3,
						label: "Alice"
					},
					{
						value: 4,
						label: "Bob"
					}
				],
				setValue: ({ value }) => ({ author: Number(value) })
			},
			{
				id: "reviewer",
				label: "Reviewer",
				type: "text",
				Edit: "radio",
				elements: [
					{
						value: "jane",
						label: "Jane"
					},
					{
						value: "john",
						label: "John"
					},
					{
						value: "alice",
						label: "Alice"
					},
					{
						value: "bob",
						label: "Bob"
					}
				]
			},
			{
				id: "status",
				label: "Status",
				type: "text",
				Edit: "toggleGroup",
				elements: [
					{
						value: "draft",
						label: "Draft"
					},
					{
						value: "published",
						label: "Published"
					},
					{
						value: "private",
						label: "Private"
					}
				]
			},
			{
				id: "email",
				label: "Email",
				type: "email"
			},
			{
				id: "password",
				label: "Password",
				type: "text",
				isVisible: (item) => {
					return item.status !== "private";
				}
			},
			{
				id: "sticky",
				label: "Sticky",
				type: "boolean"
			},
			{
				id: "can_comment",
				label: "Allow people to leave a comment",
				type: "boolean",
				Edit: "checkbox"
			},
			{
				id: "filesize",
				label: "File size",
				type: "integer",
				readOnly: true
			},
			{
				id: "dimensions",
				label: "Dimensions",
				type: "text",
				readOnly: true
			},
			{
				id: "file_type",
				label: "File type",
				readOnly: true
			},
			{
				id: "tags",
				label: "Tags",
				type: "array",
				placeholder: "Enter comma-separated tags",
				description: "Add tags separated by commas (e.g., \"tag1, tag2, tag3\")",
				elements: [
					{
						value: "astronomy",
						label: "Astronomy"
					},
					{
						value: "book-review",
						label: "Book review"
					},
					{
						value: "event",
						label: "Event"
					},
					{
						value: "photography",
						label: "Photography"
					},
					{
						value: "travel",
						label: "Travel"
					}
				]
			},
			{
				id: "address1",
				label: "Address 1",
				type: "text"
			},
			{
				id: "address2",
				label: "Address 2",
				type: "text"
			},
			{
				id: "city",
				label: "City",
				type: "text"
			},
			{
				id: "description",
				label: "Description",
				type: "text",
				Edit: "textarea"
			},
			{
				id: "longDescription",
				label: "Long description",
				type: "text",
				Edit: {
					control: "textarea",
					rows: 5
				}
			},
			{
				id: "comment_status",
				label: "Comment status",
				type: "text",
				Edit: "radio",
				elements: [{
					value: "open",
					label: "Allow comments"
				}, {
					value: "closed",
					label: "Comments closed"
				}]
			},
			{
				id: "ping_status",
				label: "Allow pings/trackbacks",
				type: "boolean"
			},
			{
				id: "discussion",
				label: "Discussion",
				type: "text",
				render: ({ item }) => {
					const commentLabel = item.comment_status === "open" ? "Allow comments" : "Comments closed";
					const pingLabel = item.ping_status ? "Pings enabled" : "Pings disabled";
					return /* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)("span", { children: [
						commentLabel,
						", ",
						pingLabel
					] }, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 208,
						columnNumber: 5
					}, void 0);
				}
			},
			{
				id: "origin",
				label: "Origin",
				type: "text"
			},
			{
				id: "destination",
				label: "Destination",
				type: "text"
			},
			{
				id: "flight_status",
				label: "Flight status",
				type: "text",
				Edit: "radio",
				elements: [
					{
						value: "on-time",
						label: "On Time"
					},
					{
						value: "delayed",
						label: "Delayed"
					},
					{
						value: "cancelled",
						label: "Cancelled"
					}
				]
			},
			{
				id: "gate",
				label: "Gate",
				type: "text"
			},
			{
				id: "seat",
				label: "Seat",
				type: "text"
			},
			{
				id: "metadata_summary",
				label: "Metadata",
				type: "text",
				render: ({ item }) => {
					return /* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)("span", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)(import_jsx_dev_runtime$8.Fragment, { children: "Metadata" }, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 252,
						columnNumber: 6
					}, void 0), item.filesize ? `, ${item.filesize} KB` : ""] }, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 251,
						columnNumber: 5
					}, void 0);
				}
			}
		];
		LayoutDetailsComponent = () => {
			const [post, setPost] = (0, import_react.useState)({
				title: "Hello, World!",
				order: 2,
				author: 1,
				status: "draft",
				reviewer: "fulano",
				date: "2021-01-01T12:00:00",
				birthdate: "1950-02-23T12:00:00",
				filesize: 1024,
				dimensions: "1920x1080",
				file_type: "JPEG",
				comment_status: "open",
				ping_status: true,
				tags: ["photography"]
			});
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)(DataForm, {
				data: post,
				fields: fields$4,
				form: { fields: [
					{
						id: "discussion",
						label: "Discussion",
						children: ["comment_status", "ping_status"],
						layout: {
							type: "details",
							summary: "discussion"
						}
					},
					{
						id: "metadata",
						label: "Metadata",
						children: [
							"filesize",
							"dimensions",
							"file_type"
						],
						layout: {
							type: "details",
							summary: "metadata_summary"
						}
					},
					{
						id: "categorization",
						label: "Categorization",
						children: ["tags", "description"],
						layout: { type: "details" }
					},
					{
						id: "scheduling",
						children: ["date", "birthdate"],
						layout: { type: "details" }
					}
				] },
				onChange: (edits) => setPost((prev) => ({
					...prev,
					...edits
				}))
			}, void 0, false, {
				fileName: _jsxFileName$8,
				lineNumber: 314,
				columnNumber: 3
			}, void 0);
		};
	})))();
}
//#endregion
//#region ../packages/dataviews/src/dataform/stories/layout-mixed.tsx
var import_jsx_dev_runtime$7, _jsxFileName$7, fields$3, LayoutMixedComponent;
function init_layout_mixed() {
	return (init_layout_mixed = __esmMin((() => {
		init_react();
		init_dataform();
		import_jsx_dev_runtime$7 = require_jsx_dev_runtime();
		_jsxFileName$7 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/layout-mixed.tsx";
		fields$3 = [
			{
				id: "author",
				label: "Author",
				type: "integer",
				elements: [
					{
						value: 1,
						label: "Jane"
					},
					{
						value: 2,
						label: "John"
					},
					{
						value: 3,
						label: "Alice"
					},
					{
						value: 4,
						label: "Bob"
					}
				],
				setValue: ({ value }) => ({ author: Number(value) })
			},
			{
				id: "title",
				label: "Title",
				type: "text"
			},
			{
				id: "status",
				label: "Status",
				type: "text",
				Edit: "toggleGroup",
				elements: [
					{
						value: "draft",
						label: "Draft"
					},
					{
						value: "published",
						label: "Published"
					},
					{
						value: "private",
						label: "Private"
					}
				]
			},
			{
				id: "origin",
				label: "Origin",
				type: "text"
			},
			{
				id: "destination",
				label: "Destination",
				type: "text"
			}
		];
		LayoutMixedComponent = () => {
			const [post, setPost] = (0, import_react.useState)({
				author: 1,
				title: "Hello, World!",
				status: "draft",
				origin: "New York (JFK)",
				destination: "Los Angeles (LAX)"
			});
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$7.jsxDEV)(DataForm, {
				data: post,
				fields: fields$3,
				form: { fields: [{
					id: "card",
					layout: { type: "card" },
					children: [
						{
							id: "author",
							layout: {
								type: "regular",
								labelPosition: "none"
							}
						},
						{
							id: "title",
							layout: { type: "panel" }
						},
						{
							id: "status",
							layout: { type: "panel" }
						}
					]
				}, {
					id: "card-with-row",
					layout: { type: "card" },
					children: [{
						id: "row-within-card",
						layout: { type: "row" },
						children: ["origin", "destination"]
					}]
				}] },
				onChange: (edits) => setPost((prev) => ({
					...prev,
					...edits
				}))
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 104,
				columnNumber: 3
			}, void 0);
		};
	})))();
}
//#endregion
//#region ../packages/dataviews/src/dataform/stories/layout-regular.tsx
var import_jsx_dev_runtime$6, _jsxFileName$6, fields$2, getLayoutFromStoryArgs, LayoutRegularComponent;
function init_layout_regular() {
	return (init_layout_regular = __esmMin((() => {
		init_react();
		init_dataform();
		import_jsx_dev_runtime$6 = require_jsx_dev_runtime();
		_jsxFileName$6 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/layout-regular.tsx";
		fields$2 = [
			{
				id: "title",
				label: "Title",
				type: "text"
			},
			{
				id: "order",
				label: "Order",
				type: "integer"
			},
			{
				id: "date",
				label: "Date",
				type: "date"
			},
			{
				id: "datetime",
				label: "DateTime",
				type: "datetime"
			},
			{
				id: "birthdate",
				label: "DateTime as options",
				type: "datetime",
				elements: [
					{
						value: "",
						label: "Select a date"
					},
					{
						value: "1970-02-23T12:00:00",
						label: "Jane's birth date"
					},
					{
						value: "1950-02-23T12:00:00",
						label: "John's birth date"
					}
				]
			},
			{
				id: "author",
				label: "Author",
				type: "integer",
				elements: [
					{
						value: 1,
						label: "Jane"
					},
					{
						value: 2,
						label: "John"
					},
					{
						value: 3,
						label: "Alice"
					},
					{
						value: 4,
						label: "Bob"
					}
				],
				setValue: ({ value }) => ({ author: Number(value) })
			},
			{
				id: "reviewer",
				label: "Reviewer",
				type: "text",
				Edit: "radio",
				elements: [
					{
						value: "jane",
						label: "Jane"
					},
					{
						value: "john",
						label: "John"
					},
					{
						value: "alice",
						label: "Alice"
					},
					{
						value: "bob",
						label: "Bob"
					}
				]
			},
			{
				id: "status",
				label: "Status",
				type: "text",
				Edit: "toggleGroup",
				elements: [
					{
						value: "draft",
						label: "Draft"
					},
					{
						value: "published",
						label: "Published"
					},
					{
						value: "private",
						label: "Private"
					}
				]
			},
			{
				id: "email",
				label: "Email",
				type: "email"
			},
			{
				id: "password",
				label: "Password",
				type: "text",
				isVisible: (item) => {
					return item.status !== "private";
				}
			},
			{
				id: "sticky",
				label: "Sticky",
				type: "boolean"
			},
			{
				id: "can_comment",
				label: "Allow people to leave a comment",
				type: "boolean",
				Edit: "toggle"
			},
			{
				id: "filesize",
				label: "File size",
				type: "integer",
				readOnly: true
			},
			{
				id: "dimensions",
				label: "Dimensions",
				type: "text",
				readOnly: true
			},
			{
				id: "file_type",
				label: "File type",
				readOnly: true
			},
			{
				id: "tags",
				label: "Tags",
				type: "array",
				placeholder: "Enter comma-separated tags",
				description: "Add tags separated by commas (e.g., \"tag1, tag2, tag3\")",
				elements: [
					{
						value: "astronomy",
						label: "Astronomy"
					},
					{
						value: "book-review",
						label: "Book review"
					},
					{
						value: "event",
						label: "Event"
					},
					{
						value: "photography",
						label: "Photography"
					},
					{
						value: "travel",
						label: "Travel"
					}
				]
			},
			{
				id: "address1",
				label: "Address 1",
				type: "text"
			},
			{
				id: "address2",
				label: "Address 2",
				type: "text"
			},
			{
				id: "city",
				label: "City",
				type: "text"
			},
			{
				id: "description",
				label: "Description",
				type: "text",
				Edit: "textarea"
			},
			{
				id: "longDescription",
				label: "Long description",
				type: "text",
				Edit: {
					control: "textarea",
					rows: 5
				}
			},
			{
				id: "comment_status",
				label: "Comment status",
				type: "text",
				Edit: "radio",
				elements: [{
					value: "open",
					label: "Allow comments"
				}, {
					value: "closed",
					label: "Comments closed"
				}]
			},
			{
				id: "ping_status",
				label: "Allow pings/trackbacks",
				type: "boolean"
			},
			{
				id: "discussion",
				label: "Discussion",
				type: "text",
				render: ({ item }) => {
					const commentLabel = item.comment_status === "open" ? "Allow comments" : "Comments closed";
					const pingLabel = item.ping_status ? "Pings enabled" : "Pings disabled";
					return /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)("span", { children: [
						commentLabel,
						", ",
						pingLabel
					] }, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 220,
						columnNumber: 5
					}, void 0);
				}
			},
			{
				id: "origin",
				label: "Origin",
				type: "text"
			},
			{
				id: "destination",
				label: "Destination",
				type: "text"
			},
			{
				id: "flight_status",
				label: "Flight status",
				type: "text",
				Edit: "radio",
				elements: [
					{
						value: "on-time",
						label: "On Time"
					},
					{
						value: "delayed",
						label: "Delayed"
					},
					{
						value: "cancelled",
						label: "Cancelled"
					}
				]
			},
			{
				id: "gate",
				label: "Gate",
				type: "text"
			},
			{
				id: "seat",
				label: "Seat",
				type: "text"
			},
			{
				id: "metadata_summary",
				label: "Metadata",
				type: "text",
				render: ({ item }) => {
					return /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)("span", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(import_jsx_dev_runtime$6.Fragment, { children: "Metadata" }, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 264,
						columnNumber: 6
					}, void 0), item.filesize ? `, ${item.filesize} KB` : ""] }, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 263,
						columnNumber: 5
					}, void 0);
				}
			}
		];
		getLayoutFromStoryArgs = ({ type, labelPosition, openAs, withHeader }) => {
			let layout;
			if (type === "default" || type === "regular") {
				const regularLayout = { type: "regular" };
				if (labelPosition !== "default") regularLayout.labelPosition = labelPosition;
				layout = regularLayout;
			} else if (type === "panel") {
				const panelLayout = { type: "panel" };
				if (labelPosition !== "default") panelLayout.labelPosition = labelPosition;
				if (openAs !== "default") panelLayout.openAs = openAs;
				layout = panelLayout;
			} else if (type === "card") {
				const cardLayout = { type: "card" };
				if (withHeader !== void 0) cardLayout.withHeader = withHeader;
				layout = cardLayout;
			}
			return layout;
		};
		LayoutRegularComponent = ({ labelPosition, disabled = false }) => {
			const [post, setPost] = (0, import_react.useState)({
				title: "Hello, World!",
				order: 2,
				author: 1,
				status: "draft",
				reviewer: "fulano",
				email: "hello@wordpress.org",
				date: "2021-01-01",
				datetime: "2021-01-01T12:00:00",
				birthdate: "1950-02-23T12:00:00",
				sticky: false,
				can_comment: false,
				filesize: 1024,
				dimensions: "1920x1080",
				file_type: "JPEG",
				tags: ["photography"],
				description: "This is a sample description."
			});
			const _fields = (0, import_react.useMemo)(() => {
				if (!disabled) return fields$2;
				return fields$2.map((field) => ({
					...field,
					isDisabled: true
				}));
			}, [disabled]);
			const form = (0, import_react.useMemo)(() => ({
				layout: getLayoutFromStoryArgs({
					type: "regular",
					labelPosition
				}),
				fields: [
					"title",
					"order",
					"sticky",
					"can_comment",
					"author",
					"status",
					"reviewer",
					"email",
					"password",
					"date",
					"datetime",
					"birthdate",
					"filesize",
					"dimensions",
					"file_type",
					"tags",
					"description",
					"longDescription"
				]
			}), [labelPosition]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(DataForm, {
				data: post,
				fields: _fields,
				form,
				onChange: (edits) => setPost((prev) => ({
					...prev,
					...edits
				}))
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 387,
				columnNumber: 3
			}, void 0);
		};
		try {
			LayoutRegularComponent.__docgenInfo = {
				"description": "",
				"displayName": "layoutregular",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/layout-regular.tsx",
				"methods": [],
				"props": {
					"labelPosition": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/layout-regular.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "labelPosition",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"none\" | \"top\" | \"default\" | \"side\"",
							"value": [
								{ "value": "\"none\"" },
								{ "value": "\"top\"" },
								{ "value": "\"default\"" },
								{ "value": "\"side\"" }
							]
						}
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/layout-regular.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/dataform/stories/layout-row.tsx
var import_jsx_dev_runtime$5, _jsxFileName$5, LayoutRowComponent;
function init_layout_row() {
	return (init_layout_row = __esmMin((() => {
		init_react();
		init_dataform();
		import_jsx_dev_runtime$5 = require_jsx_dev_runtime();
		_jsxFileName$5 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/layout-row.tsx";
		LayoutRowComponent = ({ alignment }) => {
			const customerFields = [
				{
					id: "name",
					label: "Customer name",
					type: "text"
				},
				{
					id: "phone",
					label: "Phone",
					type: "text"
				},
				{
					id: "email",
					label: "Email",
					type: "email"
				},
				{
					id: "shippingAddress",
					label: "Shipping address",
					type: "text"
				},
				{
					id: "shippingCity",
					label: "Shipping city",
					type: "text"
				},
				{
					id: "shippingPostalCode",
					label: "Shipping postal code",
					type: "text"
				},
				{
					id: "shippingCountry",
					label: "Shipping country",
					type: "text"
				},
				{
					id: "billingAddress",
					label: "Billing address",
					type: "text"
				},
				{
					id: "billingCity",
					label: "Billing city",
					type: "text"
				},
				{
					id: "billingPostalCode",
					label: "Billing postal code",
					type: "text"
				},
				{
					id: "vat",
					label: "VAT",
					type: "integer"
				},
				{
					id: "commission",
					label: "Commission",
					type: "integer"
				},
				{
					id: "hasDiscount",
					label: "Has discount?",
					type: "boolean"
				},
				{
					id: "plan",
					label: "Plan",
					type: "text",
					Edit: "toggleGroup",
					elements: [
						{
							value: "basic",
							label: "Basic"
						},
						{
							value: "business",
							label: "Business"
						},
						{
							value: "vip",
							label: "VIP"
						}
					]
				},
				{
					id: "renewal",
					label: "Renewal",
					type: "text",
					Edit: "radio",
					elements: [
						{
							value: "weekly",
							label: "Weekly"
						},
						{
							value: "monthly",
							label: "Monthly"
						},
						{
							value: "yearly",
							label: "Yearly"
						}
					]
				},
				{
					id: "cost",
					label: "Cost",
					type: "integer",
					setValue: ({ item, value }) => ({
						cost: value,
						total: Number(value) * item.quantity
					})
				},
				{
					id: "quantity",
					label: "Quantity",
					type: "integer",
					elements: [
						{
							value: 1,
							label: "1"
						},
						{
							value: 2,
							label: "2"
						},
						{
							value: 3,
							label: "3"
						},
						{
							value: 4,
							label: "4"
						},
						{
							value: 5,
							label: "5"
						},
						{
							value: 6,
							label: "6"
						},
						{
							value: 7,
							label: "7"
						},
						{
							value: 8,
							label: "8"
						},
						{
							value: 9,
							label: "9"
						},
						{
							value: 10,
							label: "10"
						}
					],
					setValue: ({ item, value }) => ({
						quantity: Number(value),
						total: Number(value) * item.cost
					})
				},
				{
					id: "total",
					label: "Total",
					type: "integer",
					readOnly: true
				},
				{
					id: "fileSize",
					label: "File size",
					type: "integer",
					readOnly: true
				},
				{
					id: "dimensions",
					label: "Dimensions",
					type: "text",
					readOnly: true
				},
				{
					id: "fileType",
					label: "File type",
					readOnly: true
				}
			];
			const [customer, setCustomer] = (0, import_react.useState)({
				name: "Danyka Romaguera",
				email: "aromaguera@example.org",
				phone: "1-828-352-1250",
				plan: "Business",
				shippingAddress: "N/A",
				shippingCity: "N/A",
				shippingPostalCode: "N/A",
				shippingCountry: "N/A",
				billingAddress: "Danyka Romaguera, West Myrtiehaven, 80240-4282, BI",
				billingCity: "City",
				billingPostalCode: "PC",
				totalOrders: 2,
				totalRevenue: 1430,
				averageOrderValue: 715,
				hasVat: true,
				vat: 10,
				commission: 5,
				hasDiscount: true,
				cost: 100,
				tax: 20,
				quantity: 5,
				total: 600,
				fileSize: 1024,
				dimensions: "1920x1080",
				fileType: "JPEG"
			});
			const getRowLayoutFromStoryArgs = ({ alignment: align = "default", styles }) => {
				return {
					type: "row",
					alignment: align !== "default" ? align : void 0,
					styles
				};
			};
			const form = (0, import_react.useMemo)(() => ({ fields: [
				{
					id: "customer",
					label: "Customer",
					layout: getRowLayoutFromStoryArgs({ alignment }),
					children: [
						"name",
						"phone",
						"email"
					]
				},
				{
					id: "payments-and-tax",
					label: "Payments & Taxes",
					layout: getRowLayoutFromStoryArgs({ alignment: alignment === "default" ? "end" : alignment }),
					children: [
						"vat",
						"commission",
						"hasDiscount"
					]
				},
				{
					id: "addressRow",
					label: "Billing & Shipping Addresses",
					layout: getRowLayoutFromStoryArgs({ alignment: alignment === "default" ? "start" : alignment }),
					children: [{
						id: "billingAddress",
						children: [
							"billingAddress",
							"billingCity",
							"billingPostalCode"
						]
					}, {
						id: "shippingAddress",
						children: [
							"shippingAddress",
							"shippingCity",
							"shippingPostalCode",
							"shippingCountry"
						]
					}]
				},
				{
					id: "fileDetails",
					label: "File details",
					layout: getRowLayoutFromStoryArgs({ alignment: alignment === "default" ? "start" : alignment }),
					children: [
						"fileSize",
						"dimensions",
						"fileType"
					]
				},
				{
					id: "planRow",
					label: "Subscription",
					layout: getRowLayoutFromStoryArgs({ alignment: alignment === "default" ? "start" : alignment }),
					children: ["plan", "renewal"]
				}
			] }), [alignment]);
			const topLevelLayout = (0, import_react.useMemo)(() => ({
				layout: getRowLayoutFromStoryArgs({ alignment }),
				fields: [
					"name",
					"phone",
					"email"
				]
			}), [alignment]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(import_jsx_dev_runtime$5.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)("h1", { children: "Row Layout" }, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 302,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)("h2", { children: "As top-level layout" }, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 303,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(DataForm, {
					data: customer,
					fields: customerFields,
					form: topLevelLayout,
					onChange: (edits) => setCustomer((prev) => ({
						...prev,
						...edits
					}))
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 304,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)("h2", { children: "Per field layout" }, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 315,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(DataForm, {
					data: customer,
					fields: customerFields,
					form,
					onChange: (edits) => setCustomer((prev) => ({
						...prev,
						...edits
					}))
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 316,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)("h2", { children: "Field widths" }, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 327,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)("p", { children: "The space given for each field is calculated automatically, but the layout row can also set specific widths for each field." }, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 328,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(DataForm, {
					data: customer,
					fields: customerFields,
					form: { fields: [{
						id: "product",
						label: "Product",
						layout: getRowLayoutFromStoryArgs({
							alignment: alignment === "default" ? "end" : alignment,
							styles: {
								total: { flex: 1 },
								cost: { flex: 3 },
								quantity: { flex: 3 }
							}
						}),
						children: [
							"total",
							"cost",
							"quantity"
						]
					}] },
					onChange: (edits) => setCustomer((prev) => ({
						...prev,
						...edits
					}))
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 332,
					columnNumber: 4
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 301,
				columnNumber: 3
			}, void 0);
		};
		try {
			LayoutRowComponent.__docgenInfo = {
				"description": "",
				"displayName": "layoutrow",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/layout-row.tsx",
				"methods": [],
				"props": { "alignment": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/layout-row.tsx",
						"name": "TypeLiteral"
					}],
					"description": "",
					"name": "alignment",
					"required": true,
					"tags": {},
					"type": {
						"name": "enum",
						"raw": "\"center\" | \"end\" | \"start\" | \"default\"",
						"value": [
							{ "value": "\"center\"" },
							{ "value": "\"end\"" },
							{ "value": "\"start\"" },
							{ "value": "\"default\"" }
						]
					}
				} },
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/dataform/stories/layout-panel.tsx
var import_jsx_dev_runtime$4, _jsxFileName$4, fields$1, getPanelLayoutFromStoryArgs, LayoutPanelComponent;
function init_layout_panel() {
	return (init_layout_panel = __esmMin((() => {
		init_react();
		init_dataform();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/layout-panel.tsx";
		fields$1 = [
			{
				id: "title",
				label: "Title",
				type: "text",
				placeholder: "Add a title"
			},
			{
				id: "order",
				label: "Order",
				type: "integer"
			},
			{
				id: "date",
				label: "Date",
				type: "datetime"
			},
			{
				id: "birthdate",
				label: "Date as options",
				type: "datetime",
				elements: [
					{
						value: "",
						label: "Select a date"
					},
					{
						value: "1970-02-23T12:00:00",
						label: "Jane's birth date"
					},
					{
						value: "1950-02-23T12:00:00",
						label: "John's birth date"
					}
				]
			},
			{
				id: "author",
				label: "Author",
				type: "integer",
				elements: [
					{
						value: 1,
						label: "Jane"
					},
					{
						value: 2,
						label: "John"
					},
					{
						value: 3,
						label: "Alice"
					},
					{
						value: 4,
						label: "Bob"
					},
					{
						value: 5,
						label: "Superadministratoraccountwithalongunhyphenatedusername"
					}
				],
				setValue: ({ value }) => ({ author: Number(value) })
			},
			{
				id: "reviewer",
				label: "Reviewer",
				type: "text",
				Edit: "radio",
				elements: [
					{
						value: "jane",
						label: "Jane"
					},
					{
						value: "john",
						label: "John"
					},
					{
						value: "alice",
						label: "Alice"
					},
					{
						value: "bob",
						label: "Bob"
					}
				]
			},
			{
				id: "status",
				label: "Status",
				type: "text",
				Edit: "toggleGroup",
				elements: [
					{
						value: "draft",
						label: "Draft"
					},
					{
						value: "published",
						label: "Published"
					},
					{
						value: "private",
						label: "Private"
					}
				]
			},
			{
				id: "email",
				label: "Email",
				type: "email"
			},
			{
				id: "password",
				label: "Password",
				type: "text",
				isVisible: (item) => {
					return item.status !== "private";
				}
			},
			{
				id: "sticky",
				label: "Sticky",
				type: "boolean"
			},
			{
				id: "can_comment",
				label: "Allow people to leave a comment",
				type: "boolean",
				Edit: "checkbox"
			},
			{
				id: "filesize",
				label: "File size",
				type: "integer",
				readOnly: true
			},
			{
				id: "dimensions",
				label: "Dimensions",
				type: "text",
				readOnly: true
			},
			{
				id: "file_type",
				label: "File type",
				readOnly: true
			},
			{
				id: "tags",
				label: "Tags",
				type: "array",
				placeholder: "Enter comma-separated tags",
				description: "Add tags separated by commas (e.g., \"tag1, tag2, tag3\")",
				elements: [
					{
						value: "astronomy",
						label: "Astronomy"
					},
					{
						value: "book-review",
						label: "Book review"
					},
					{
						value: "event",
						label: "Event"
					},
					{
						value: "photography",
						label: "Photography"
					},
					{
						value: "travel",
						label: "Travel"
					}
				]
			},
			{
				id: "address1",
				label: "Address 1",
				type: "text"
			},
			{
				id: "address2",
				label: "Address 2",
				type: "text"
			},
			{
				id: "city",
				label: "City",
				type: "text"
			},
			{
				id: "description",
				label: "Description",
				type: "text",
				Edit: "textarea"
			},
			{
				id: "longDescription",
				label: "Long description",
				type: "text",
				Edit: {
					control: "textarea",
					rows: 5
				}
			},
			{
				id: "comment_status",
				label: "Comment status",
				type: "text",
				Edit: "radio",
				elements: [{
					value: "open",
					label: "Allow comments"
				}, {
					value: "closed",
					label: "Comments closed"
				}]
			},
			{
				id: "ping_status",
				label: "Allow pings/trackbacks",
				type: "boolean"
			},
			{
				id: "discussion",
				label: "Discussion",
				type: "text",
				render: ({ item }) => {
					const commentLabel = item.comment_status === "open" ? "Allow comments" : "Comments closed";
					const pingLabel = item.ping_status ? "Pings enabled" : "Pings disabled";
					return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)("span", { children: [
						commentLabel,
						", ",
						pingLabel
					] }, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 219,
						columnNumber: 5
					}, void 0);
				}
			},
			{
				id: "origin",
				label: "Origin",
				type: "text"
			},
			{
				id: "destination",
				label: "Destination",
				type: "text"
			},
			{
				id: "flight_status",
				label: "Flight status",
				type: "text",
				Edit: "radio",
				elements: [
					{
						value: "on-time",
						label: "On Time"
					},
					{
						value: "delayed",
						label: "Delayed"
					},
					{
						value: "cancelled",
						label: "Cancelled"
					}
				]
			},
			{
				id: "gate",
				label: "Gate",
				type: "text"
			},
			{
				id: "seat",
				label: "Seat",
				type: "text"
			},
			{
				id: "metadata_summary",
				label: "Metadata",
				type: "text",
				render: ({ item }) => {
					return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)("span", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(import_jsx_dev_runtime$4.Fragment, { children: "Metadata" }, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 263,
						columnNumber: 6
					}, void 0), item.filesize ? `, ${item.filesize} KB` : ""] }, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 262,
						columnNumber: 5
					}, void 0);
				}
			}
		];
		getPanelLayoutFromStoryArgs = ({ summary, labelPosition, openAs, editVisibility, showPlaceholderIfEmpty }) => {
			const panelLayout = { type: "panel" };
			if (labelPosition !== "default") panelLayout.labelPosition = labelPosition;
			if (openAs) panelLayout.openAs = openAs;
			if (summary !== void 0) panelLayout.summary = summary;
			if (editVisibility !== "default") panelLayout.editVisibility = editVisibility;
			if (showPlaceholderIfEmpty) panelLayout.showPlaceholderIfEmpty = true;
			return panelLayout;
		};
		LayoutPanelComponent = ({ labelPosition, openAs: openAsArg, editVisibility, showPlaceholderIfEmpty, applyLabel, cancelLabel, disabled = false }) => {
			const [post, setPost] = (0, import_react.useState)({
				title: "Hello, World!",
				order: 2,
				author: 5,
				status: "draft",
				reviewer: "fulano",
				date: "2021-01-01T12:00:00",
				birthdate: "1950-02-23T12:00:00",
				filesize: 1024,
				dimensions: "1920x1080",
				file_type: "JPEG",
				tags: ["photography"],
				address1: "123 Main St",
				address2: "Apt 4B",
				city: "New York",
				comment_status: "open",
				ping_status: true,
				origin: "New York (JFK)",
				destination: "Los Angeles (LAX)",
				flight_status: "on-time",
				gate: "A12",
				seat: "14F"
			});
			const _fields = (0, import_react.useMemo)(() => {
				if (!disabled) return fields$1;
				return fields$1.map((field) => ({
					...field,
					isDisabled: true
				}));
			}, [disabled]);
			const form = (0, import_react.useMemo)(() => {
				let openAs;
				if (openAsArg === "modal" && (applyLabel || cancelLabel)) openAs = {
					type: "modal",
					applyLabel: applyLabel || void 0,
					cancelLabel: cancelLabel || void 0
				};
				else if (openAsArg !== "default") openAs = openAsArg;
				return {
					layout: getPanelLayoutFromStoryArgs({
						labelPosition,
						openAs,
						editVisibility,
						showPlaceholderIfEmpty
					}),
					fields: [
						"title",
						{
							id: "status",
							label: "Status & visibility",
							children: ["status", "password"],
							layout: getPanelLayoutFromStoryArgs({
								summary: ["status"],
								labelPosition,
								openAs,
								editVisibility,
								showPlaceholderIfEmpty
							})
						},
						"order",
						"author",
						"filesize",
						"dimensions",
						"file_type",
						"tags",
						{
							id: "discussion",
							label: "Discussion",
							children: ["comment_status", "ping_status"],
							layout: getPanelLayoutFromStoryArgs({
								summary: ["discussion"],
								labelPosition,
								openAs,
								editVisibility,
								showPlaceholderIfEmpty
							})
						},
						{
							id: "address1",
							label: "Combined address",
							children: [
								"address1",
								"address2",
								"city"
							],
							layout: getPanelLayoutFromStoryArgs({
								summary: ["address1"],
								labelPosition,
								openAs,
								editVisibility,
								showPlaceholderIfEmpty
							})
						},
						{
							id: "flight_info",
							label: "Flight information",
							children: [
								"origin",
								"destination",
								"flight_status",
								"gate"
							],
							layout: getPanelLayoutFromStoryArgs({
								summary: [
									"origin",
									"destination",
									"flight_status"
								],
								labelPosition,
								openAs,
								editVisibility,
								showPlaceholderIfEmpty
							})
						},
						{
							id: "passenger_details",
							label: "Passenger details",
							children: ["author", "seat"],
							layout: getPanelLayoutFromStoryArgs({
								summary: ["author", "seat"],
								labelPosition,
								openAs,
								editVisibility,
								showPlaceholderIfEmpty
							})
						}
					]
				};
			}, [
				labelPosition,
				openAsArg,
				applyLabel,
				cancelLabel,
				editVisibility,
				showPlaceholderIfEmpty
			]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(DataForm, {
				data: post,
				fields: _fields,
				form,
				onChange: (edits) => setPost((prev) => ({
					...prev,
					...edits
				}))
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 468,
				columnNumber: 3
			}, void 0);
		};
		try {
			LayoutPanelComponent.__docgenInfo = {
				"description": "",
				"displayName": "layoutpanel",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/layout-panel.tsx",
				"methods": [],
				"props": {
					"type": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/layout-panel.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "type",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"default\" | \"regular\" | \"panel\" | \"card\"",
							"value": [
								{ "value": "\"default\"" },
								{ "value": "\"regular\"" },
								{ "value": "\"panel\"" },
								{ "value": "\"card\"" }
							]
						}
					},
					"labelPosition": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/layout-panel.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "labelPosition",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"none\" | \"top\" | \"default\" | \"side\"",
							"value": [
								{ "value": "\"none\"" },
								{ "value": "\"top\"" },
								{ "value": "\"default\"" },
								{ "value": "\"side\"" }
							]
						}
					},
					"openAs": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/layout-panel.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "openAs",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"default\" | \"modal\" | \"dropdown\"",
							"value": [
								{ "value": "\"default\"" },
								{ "value": "\"modal\"" },
								{ "value": "\"dropdown\"" }
							]
						}
					},
					"editVisibility": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/layout-panel.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "editVisibility",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"default\" | EditVisibility",
							"value": [
								{ "value": "\"always\"" },
								{ "value": "\"default\"" },
								{ "value": "\"on-hover\"" }
							]
						}
					},
					"showPlaceholderIfEmpty": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/layout-panel.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "showPlaceholderIfEmpty",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"applyLabel": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/layout-panel.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "applyLabel",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"cancelLabel": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/layout-panel.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "cancelLabel",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/layout-panel.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/dataform/stories/data-adapter.tsx
var import_cjs, import_jsx_dev_runtime$3, _jsxFileName$3, DataAdapterComponent;
function init_data_adapter() {
	return (init_data_adapter = __esmMin((() => {
		import_cjs = /* @__PURE__ */ __toESM(require_cjs());
		init_react();
		init_dataform();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/data-adapter.tsx";
		DataAdapterComponent = () => {
			const [data, setData] = (0, import_react.useState)({
				user: {
					profile: {
						name: "John Doe",
						email: "john@example.com"
					},
					preferences: { notifications: true }
				},
				revenue: {
					total: 30,
					units: 10,
					pricePerUnit: 3
				}
			});
			const nestedFields = [
				{
					id: "user.profile.name",
					label: "User name",
					type: "text"
				},
				{
					id: "user.profile.email",
					label: "User email",
					type: "email"
				},
				{
					id: "user.profile.tags",
					label: "User tags",
					type: "array",
					placeholder: "Enter comma-separated tags",
					description: "Add tags separated by commas (e.g., \"tag1, tag2, tag3\")",
					elements: [
						{
							value: "astronomy",
							label: "Astronomy"
						},
						{
							value: "book-review",
							label: "Book review"
						},
						{
							value: "event",
							label: "Event"
						},
						{
							value: "photography",
							label: "Photography"
						},
						{
							value: "travel",
							label: "Travel"
						}
					]
				},
				{
					id: "user.preferences.notifications",
					label: "Notifications",
					type: "boolean",
					Edit: "radio",
					elements: [{
						label: "Enabled",
						value: "enabled"
					}, {
						label: "Disabled",
						value: "disabled"
					}],
					getValue: ({ item }) => item.user.preferences.notifications === true ? "enabled" : "disabled",
					setValue: ({ value }) => ({ user: { preferences: { notifications: value === "enabled" } } })
				},
				{
					id: "revenue.total",
					label: "Total revenue",
					type: "integer",
					readOnly: true
				},
				{
					id: "revenue.pricePerUnit",
					label: "Price per unit",
					type: "integer",
					setValue: ({ item, value }) => ({ revenue: {
						total: value * item.revenue.units,
						pricePerUnit: value
					} })
				},
				{
					id: "revenue.units",
					label: "Units",
					type: "integer",
					setValue: ({ item, value }) => ({ revenue: {
						total: item.revenue.pricePerUnit * value,
						units: value
					} })
				}
			];
			const handleChange = (0, import_react.useCallback)((edits) => {
				setData((prev) => (0, import_cjs.default)(prev, edits, { arrayMerge: (target, source) => source }));
			}, []);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(import_jsx_dev_runtime$3.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("h1", { children: "Data adapter" }, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 134,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("p", { children: "This story is best looked at with the code on the side. It aims to highlight how DataForm can wrangle data in scenarios such as nested data, bridge data to/from UI controls, and derived data." }, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 135,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("b", { children: "Current data snapshot:" }, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 141,
					columnNumber: 5
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 140,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("pre", { children: JSON.stringify(data, null, 2) }, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 143,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("h2", { children: "Nested data" }, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 144,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("p", { children: [
					"The first example demonstrates how to signal nested data via",
					" ",
					/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("code", { children: "field.id" }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 147,
						columnNumber: 5
					}, void 0),
					"."
				] }, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 145,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("p", { children: [
					"By using ",
					/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("code", { children: `{ id: 'user.profile.name' }` }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 150,
						columnNumber: 14
					}, void 0),
					" as field id, when users edit the name, the edits will come in this shape:",
					/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("code", { children: `{ user: { profile: { name: 'John Doe' } } }` }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 152,
						columnNumber: 5
					}, void 0)
				] }, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 149,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(DataForm, {
					data,
					fields: nestedFields,
					form: {
						layout: {
							type: "panel",
							labelPosition: "top",
							openAs: "modal"
						},
						fields: [{
							id: "userProfile",
							label: "User profile",
							children: [
								"user.profile.name",
								"user.profile.email",
								"user.profile.tags"
							]
						}]
					},
					onChange: handleChange
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 154,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("h2", { children: "Adapt data and UI control" }, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 177,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("p", { children: "Sometimes, we need to adapt the data type to and from the UI control response. This example demonstrates how to adapt a boolean to a text string (Enabled/Disabled)." }, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 178,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(DataForm, {
					data,
					fields: nestedFields,
					form: {
						layout: {
							type: "panel",
							labelPosition: "top",
							openAs: "modal"
						},
						fields: ["user.preferences.notifications"]
					},
					onChange: handleChange
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 183,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("h2", { children: "Derived data" }, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 196,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("p", { children: "Last, but not least, this example showcases how to work with derived data by providing a custom setValue function. Note how, changing UNITS or PRICE PER UNIT, updates the TOTAL value as well." }, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 197,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(DataForm, {
					data,
					fields: nestedFields,
					form: {
						layout: {
							type: "panel",
							labelPosition: "top",
							openAs: "modal"
						},
						fields: [{
							id: "revenue",
							label: "Revenue",
							children: [
								"revenue.pricePerUnit",
								"revenue.units",
								"revenue.total"
							]
						}]
					},
					onChange: handleChange
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 203,
					columnNumber: 4
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 133,
				columnNumber: 3
			}, void 0);
		};
	})))();
}
//#endregion
//#region ../packages/dataviews/src/dataform/stories/validation.tsx
function getCustomValidity(isValid, validity) {
	let customValidity;
	if (isValid?.required && validity?.required) customValidity = validity.required.message ? {
		type: validity.required.type,
		message: validity.required.message
	} : void 0;
	else if (isValid?.elements && validity?.elements) customValidity = validity.elements;
	else if (validity?.custom) customValidity = validity.custom;
	return customValidity;
}
function CustomEditControl({ data, field, onChange, hideLabelFromVision, validity }) {
	const { label, placeholder, description, getValue, setValue, isValid } = field;
	const value = getValue({ item: data });
	const onChangeControl = (0, import_react.useCallback)((newValue) => onChange(setValue({
		item: data,
		value: newValue
	})), [
		data,
		onChange,
		setValue
	]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(ValidatedInputControl, {
		required: !!isValid?.required,
		customValidity: getCustomValidity(isValid, validity),
		label,
		placeholder,
		value: value ?? "",
		description: typeof description === "string" ? description : void 0,
		details: typeof description === "string" ? void 0 : description,
		onValueChange: onChangeControl,
		hideLabelFromVision
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 59,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$2, _jsxFileName$2, ValidationComponent;
function init_validation() {
	return (init_validation = __esmMin((() => {
		init_react();
		init_button();
		init_stack(), init_validated_input_control();
		init_dataform();
		init_use_form_validity();
		init_date();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/validation.tsx";
		ValidationComponent = ({ required, elements, custom, pattern, minMax, layout }) => {
			const [post, setPost] = (0, import_react.useState)({
				text: "Can have letters and spaces",
				select: void 0,
				textWithRadio: void 0,
				textarea: "Can have letters and spaces",
				email: "hi@example.com",
				telephone: "+306978241796",
				url: "https://example.com",
				color: "#ff6600",
				integer: 2,
				number: 3.14,
				boolean: true,
				categories: ["astronomy"],
				countries: ["us"],
				customEdit: "custom control",
				password: "secretpassword123",
				toggle: void 0,
				toggleGroup: void 0,
				combobox: void 0,
				date: void 0,
				dateRange: void 0,
				datetime: void 0,
				time: void 0,
				showConditionalText: void 0,
				conditionalText: void 0
			});
			const getElements = (0, import_react.useMemo)(() => {
				const promiseCache = {};
				return (fieldId) => {
					return () => {
						if (fieldId in promiseCache) return promiseCache[fieldId];
						switch (fieldId) {
							case "select":
								promiseCache[fieldId] = new Promise((resolve) => setTimeout(() => resolve([{
									value: "option1",
									label: "Option 1"
								}, {
									value: "option2",
									label: "Option 2"
								}]), 3500));
								break;
							case "textWithRadio":
								promiseCache[fieldId] = new Promise((resolve) => setTimeout(() => resolve([{
									value: "item1",
									label: "Item 1"
								}, {
									value: "item2",
									label: "Item 2"
								}]), 3500));
								break;
							case "countries":
								promiseCache[fieldId] = new Promise((resolve) => setTimeout(() => resolve([
									{
										value: "us",
										label: "United States"
									},
									{
										value: "ca",
										label: "Canada"
									},
									{
										value: "uk",
										label: "United Kingdom"
									},
									{
										value: "fr",
										label: "France"
									},
									{
										value: "de",
										label: "Germany"
									},
									{
										value: "jp",
										label: "Japan"
									},
									{
										value: "au",
										label: "Australia"
									}
								]), 3500));
								break;
							case "toggleGroup":
								promiseCache[fieldId] = new Promise((resolve) => setTimeout(() => resolve([
									{
										value: "option1",
										label: "Option 1"
									},
									{
										value: "option2",
										label: "Option 2"
									},
									{
										value: "option3",
										label: "Option 3"
									}
								]), 3500));
								break;
							case "combobox":
								promiseCache[fieldId] = new Promise((resolve) => setTimeout(() => resolve([
									{
										value: "apple",
										label: "Apple"
									},
									{
										value: "banana",
										label: "Banana"
									},
									{
										value: "cherry",
										label: "Cherry"
									},
									{
										value: "date",
										label: "Date"
									},
									{
										value: "elderberry",
										label: "Elderberry"
									}
								]), 3500));
								break;
							default: throw new Error(`Unknown field ID: ${fieldId}`);
						}
						return promiseCache[fieldId];
					};
				};
			}, []);
			const _fields = (0, import_react.useMemo)(() => {
				const DateRangeEdit = (props) => {
					return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(DateControl, {
						...props,
						operator: "between"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 292,
						columnNumber: 11
					}, void 0);
				};
				const makeAsync = (rule) => {
					return async (value) => {
						return await new Promise((resolve) => {
							setTimeout(() => {
								resolve(rule(value));
							}, 2e3);
						});
					};
				};
				const customTextRule = (value) => {
					if (!/^[a-zA-Z ]+$/.test(value.text)) return "Value must only contain letters and spaces.";
					return null;
				};
				const customSelectRule = (value) => {
					if (value.select !== "option1") return "Value must be Option 1.";
					return null;
				};
				const customTextRadioRule = (value) => {
					if (value.textWithRadio !== "item1") return "Value must be Item 1.";
					return null;
				};
				const customTextareaRule = (value) => {
					if (!/^[a-zA-Z ]+$/.test(value.textarea)) return "Value must only contain letters and spaces.";
					return null;
				};
				const customEmailRule = (value) => {
					if (!/^[a-zA-Z0-9._%+-]+@example\.com$/.test(value.email)) return "Email address must be from @example.com domain.";
					return null;
				};
				const customTelephoneRule = (value) => {
					if (!/^\+30\d{10}$/.test(value.telephone)) return "Telephone number must start with +30 and have 10 digits after.";
					return null;
				};
				const customUrlRule = (value) => {
					if (!/^https:\/\/example\.com$/.test(value.url)) return "URL must be from https://example.com domain.";
					return null;
				};
				const customColorRule = (value) => {
					if (!/^#[0-9A-Fa-f]{6}$/.test(value.color)) return "Color must be a valid hex format (e.g., #ff6600).";
					return null;
				};
				const customIntegerRule = (value) => {
					if (value.integer % 2 !== 0) return "Integer must be an even number.";
					return null;
				};
				const customNumberRule = (value) => {
					if (!/^\d+\.\d{2}$/.test(value?.number?.toString())) return "Number must have exactly two decimal places.";
					return null;
				};
				const customBooleanRule = (value) => {
					if (value.boolean !== true) return "Boolean must be active.";
					return null;
				};
				const customToggleRule = (value) => {
					if (value.toggle !== true) return "Toggle must be checked.";
					return null;
				};
				const customToggleGroupRule = (value) => {
					if (value.toggleGroup !== "option1") return "Value must be Option 1.";
					return null;
				};
				const customComboboxRule = (value) => {
					if (value.combobox !== "apple") return "Value must be Apple.";
					return null;
				};
				const customPasswordRule = (value) => {
					if (value.password.length < 8) return "Password must be at least 8 characters long.";
					if (!/[A-Z]/.test(value.password)) return "Password must contain at least one uppercase letter.";
					if (!/[0-9]/.test(value.password)) return "Password must contain at least one number.";
					return null;
				};
				const customDateRule = (value) => {
					if (!value.date) return null;
					const selectedDate = new Date(value.date);
					const today = /* @__PURE__ */ new Date();
					today.setHours(0, 0, 0, 0);
					if (selectedDate < today) return "Date must not be in the past.";
					return null;
				};
				const customDateTimeRule = (value) => {
					if (!value.datetime) return null;
					if (new Date(value.datetime) < /* @__PURE__ */ new Date()) return "Date and time must not be in the past.";
					return null;
				};
				const customTimeRule = (value) => {
					if (!value.time) return null;
					if (value.time >= "13:00" && value.time < "14:00") return "Time must not be between 13:00 and 14:00 (lunch break).";
					return null;
				};
				const customDateRangeRule = (value) => {
					if (!value.dateRange) return null;
					const [fromDate, toDate] = value.dateRange;
					if (!fromDate || !toDate) return null;
					const from = new Date(fromDate);
					const to = new Date(toDate);
					if (Math.ceil((to.getTime() - from.getTime()) / 864e5) > 30) return "Date range must not exceed 30 days.";
					return null;
				};
				const maybeCustomRule = (rule) => {
					if (custom === "sync") return rule;
					if (custom === "async") return makeAsync(rule);
				};
				const getValidationPlaceholder = (basePattern, baseMinMax, bothPattern) => {
					if (pattern && minMax) return bothPattern;
					if (pattern) return basePattern;
					if (minMax) return baseMinMax;
				};
				const getValidationDescription = (patternDesc, minMaxDesc, bothDesc) => {
					if (pattern && minMax) return bothDesc;
					if (pattern) return patternDesc;
					if (minMax) return minMaxDesc;
				};
				return [
					{
						id: "text",
						type: "text",
						label: "Text",
						placeholder: getValidationPlaceholder("user_name (alphanumeric+underscore)", "Min 5, max 20 characters", "user_name (5-20 chars, alphanumeric+underscore)"),
						description: getValidationDescription("Must contain only letters, numbers, and underscores", "Must be between 5 and 20 characters", "Letters, numbers, underscores only AND 5-20 characters"),
						isValid: {
							required,
							elements: elements !== "none" ? true : false,
							custom: maybeCustomRule(customTextRule),
							pattern: pattern ? "^[a-zA-Z0-9_]+$" : void 0,
							minLength: minMax ? 5 : void 0,
							maxLength: minMax ? 20 : void 0
						}
					},
					{
						id: "select",
						type: "text",
						label: "Select",
						elements: elements === "async" ? void 0 : [{
							value: "option1",
							label: "Option 1"
						}, {
							value: "option2",
							label: "Option 2"
						}],
						getElements: elements === "async" ? getElements("select") : void 0,
						isValid: {
							required,
							elements: elements !== "none" ? true : false,
							custom: maybeCustomRule(customSelectRule)
						}
					},
					{
						id: "textWithRadio",
						type: "text",
						Edit: "radio",
						label: "Text with radio",
						elements: elements === "async" ? void 0 : [{
							value: "item1",
							label: "Item 1"
						}, {
							value: "item2",
							label: "Item 2"
						}],
						getElements: elements === "async" ? getElements("textWithRadio") : void 0,
						isValid: {
							required,
							elements: elements !== "none" ? true : false,
							custom: maybeCustomRule(customTextRadioRule)
						}
					},
					{
						id: "textarea",
						type: "text",
						Edit: "textarea",
						label: "Textarea",
						placeholder: minMax ? "Min 10, max 200 characters" : void 0,
						description: minMax ? "Must be between 10 and 200 characters" : void 0,
						isValid: {
							required,
							elements: elements !== "none" ? true : false,
							custom: maybeCustomRule(customTextareaRule),
							minLength: minMax ? 10 : void 0,
							maxLength: minMax ? 200 : void 0
						}
					},
					{
						id: "email",
						type: "email",
						label: "e-mail",
						placeholder: getValidationPlaceholder("user@company.com", "Min 15, max 100 characters", "user@company.com (15-100 chars)"),
						description: getValidationDescription("Email must be from @company.com domain", "Must be between 15 and 100 characters", "Must be @company.com domain AND 15-100 characters"),
						isValid: {
							required,
							elements: elements !== "none" ? true : false,
							custom: maybeCustomRule(customEmailRule),
							pattern: pattern ? "^[a-zA-Z0-9._%+-]+@company\\.com$" : void 0,
							minLength: minMax ? 15 : void 0,
							maxLength: minMax ? 100 : void 0
						}
					},
					{
						id: "telephone",
						type: "telephone",
						label: "telephone",
						placeholder: getValidationPlaceholder("+1-555-123-4567", "Min 10, max 20 characters", "+1-555-123-4567 (10-20 chars)"),
						description: getValidationDescription("US phone format with country code", "Must be between 10 and 20 characters", "US format +1-XXX... AND 10-20 characters"),
						isValid: {
							required,
							elements: elements !== "none" ? true : false,
							custom: maybeCustomRule(customTelephoneRule),
							pattern: pattern ? "^\\+1-\\d{3}-[0-9-]*$" : void 0,
							minLength: minMax ? 10 : void 0,
							maxLength: minMax ? 20 : void 0
						}
					},
					{
						id: "url",
						type: "url",
						label: "URL",
						placeholder: getValidationPlaceholder("https://github.com/user/repo", "Min 25, max 255 characters", "https://github.com/user/repo (10-255 chars)"),
						description: getValidationDescription("Must be a GitHub repository URL", "Must be between 25 and 255 characters", "GitHub repository URL AND 25-255 characters"),
						isValid: {
							required,
							elements: elements !== "none" ? true : false,
							custom: maybeCustomRule(customUrlRule),
							pattern: pattern ? "^https:\\/\\/github\\.com\\/.+$" : void 0,
							minLength: minMax ? 25 : void 0,
							maxLength: minMax ? 255 : void 0
						}
					},
					{
						id: "color",
						type: "color",
						label: "Color",
						isValid: {
							required,
							elements: elements !== "none" ? true : false,
							custom: maybeCustomRule(customColorRule)
						}
					},
					{
						id: "integer",
						type: "integer",
						label: "Integer",
						placeholder: minMax ? "Min 10, max 100" : void 0,
						description: minMax ? "Must be between 10 and 100" : void 0,
						isValid: {
							required,
							elements: elements !== "none" ? true : false,
							custom: maybeCustomRule(customIntegerRule),
							min: minMax ? 10 : void 0,
							max: minMax ? 100 : void 0
						}
					},
					{
						id: "number",
						type: "number",
						label: "Number",
						placeholder: minMax ? "Min 10, max 100" : void 0,
						description: minMax ? "Must be between 0 and 100" : void 0,
						isValid: {
							required,
							elements: elements !== "none" ? true : false,
							custom: maybeCustomRule(customNumberRule),
							min: minMax ? 10 : void 0,
							max: minMax ? 100 : void 0
						}
					},
					{
						id: "boolean",
						type: "boolean",
						label: "Boolean",
						isValid: {
							required,
							elements: elements !== "none" ? true : false,
							custom: maybeCustomRule(customBooleanRule)
						}
					},
					{
						id: "array",
						label: "Array",
						type: "array",
						placeholder: "Select countries",
						description: "Countries you have visited",
						isValid: {
							required,
							elements: elements !== "none" ? true : false
						},
						elements: elements === "async" ? void 0 : [
							{
								value: "us",
								label: "United States"
							},
							{
								value: "ca",
								label: "Canada"
							},
							{
								value: "uk",
								label: "United Kingdom"
							},
							{
								value: "fr",
								label: "France"
							},
							{
								value: "de",
								label: "Germany"
							},
							{
								value: "jp",
								label: "Japan"
							},
							{
								value: "au",
								label: "Australia"
							}
						],
						getElements: elements === "async" ? getElements("countries") : void 0
					},
					{
						id: "customEdit",
						label: "Custom control",
						Edit: CustomEditControl,
						isValid: {
							required,
							elements: elements !== "none" ? true : false
						}
					},
					{
						id: "password",
						type: "password",
						label: "Password",
						placeholder: getValidationPlaceholder("Must be 8+ alphanumeric", "Min 10, max 20 characters", "abc12345 (10-20 chars alphanumeric)"),
						description: getValidationDescription("Must contain only letters and numbers (8+ chars)", "Must be between 10 and 20 characters", "alphanumeric chars AND 10-20 characters"),
						isValid: {
							required,
							elements: elements !== "none" ? true : false,
							custom: maybeCustomRule(customPasswordRule),
							pattern: pattern ? "^[a-zA-Z0-9]{8,}$" : void 0,
							minLength: minMax ? 10 : void 0,
							maxLength: minMax ? 20 : void 0
						}
					},
					{
						id: "toggle",
						type: "boolean",
						label: "Toggle",
						Edit: "toggle",
						isValid: {
							required,
							elements: elements !== "none" ? true : false,
							custom: maybeCustomRule(customToggleRule)
						}
					},
					{
						id: "toggleGroup",
						type: "text",
						label: "Toggle group",
						Edit: "toggleGroup",
						elements: elements === "async" ? void 0 : [
							{
								value: "option1",
								label: "Option 1"
							},
							{
								value: "option2",
								label: "Option 2"
							},
							{
								value: "option3",
								label: "Option 3"
							}
						],
						getElements: elements === "async" ? getElements("toggleGroup") : void 0,
						isValid: {
							required,
							elements: elements !== "none" ? true : false,
							custom: maybeCustomRule(customToggleGroupRule)
						}
					},
					{
						id: "combobox",
						type: "text",
						Edit: "combobox",
						label: "Combobox",
						placeholder: "Search and select a fruit",
						elements: elements === "async" ? void 0 : [
							{
								value: "apple",
								label: "Apple"
							},
							{
								value: "banana",
								label: "Banana"
							},
							{
								value: "blueberry",
								label: "Blueberry"
							},
							{
								value: "cherry",
								label: "Cherry"
							},
							{
								value: "date",
								label: "Date"
							},
							{
								value: "elderberry",
								label: "Elderberry"
							},
							{
								value: "fig",
								label: "Fig"
							},
							{
								value: "grape",
								label: "Grape"
							},
							{
								value: "honeydew",
								label: "Honeydew"
							},
							{
								value: "kiwi",
								label: "Kiwi"
							},
							{
								value: "lemon",
								label: "Lemon"
							},
							{
								value: "mango",
								label: "Mango"
							},
							{
								value: "nectarine",
								label: "Nectarine"
							},
							{
								value: "orange",
								label: "Orange"
							},
							{
								value: "papaya",
								label: "Papaya"
							},
							{
								value: "pear",
								label: "Pear"
							},
							{
								value: "quince",
								label: "Quince"
							},
							{
								value: "raspberry",
								label: "Raspberry"
							},
							{
								value: "strawberry",
								label: "Strawberry"
							},
							{
								value: "tangerine",
								label: "Tangerine"
							},
							{
								value: "watermelon",
								label: "Watermelon"
							}
						],
						getElements: elements === "async" ? getElements("combobox") : void 0,
						isValid: {
							required,
							elements: elements !== "none" ? true : false,
							custom: maybeCustomRule(customComboboxRule)
						}
					},
					{
						id: "date",
						type: "date",
						label: "Date",
						description: minMax ? "Must be between Apr 1 and Apr 20, 2026" : void 0,
						isValid: {
							required,
							elements: elements !== "none" ? true : false,
							custom: maybeCustomRule(customDateRule),
							min: minMax ? "2026-04-01" : void 0,
							max: minMax ? "2026-04-20" : void 0
						}
					},
					{
						id: "dateRange",
						type: "date",
						label: "Date range",
						Edit: DateRangeEdit,
						description: minMax ? "Must be between Apr 1 and Apr 20, 2026" : void 0,
						isValid: {
							required,
							elements: elements !== "none" ? true : false,
							custom: maybeCustomRule(customDateRangeRule),
							min: minMax ? "2026-04-01" : void 0,
							max: minMax ? "2026-04-20" : void 0
						}
					},
					{
						id: "datetime",
						type: "datetime",
						label: "Date time",
						description: minMax ? "Must be between Apr 1 and Apr 20, 2026" : void 0,
						isValid: {
							required,
							elements: elements !== "none" ? true : false,
							custom: maybeCustomRule(customDateTimeRule),
							min: minMax ? "2026-04-01T00:00:00.000Z" : void 0,
							max: minMax ? "2026-04-20T23:59:59.000Z" : void 0
						}
					},
					{
						id: "time",
						type: "time",
						label: "Time",
						description: minMax ? "Must be between 09:00 and 17:00" : void 0,
						isValid: {
							required,
							elements: elements !== "none" ? true : false,
							custom: maybeCustomRule(customTimeRule),
							min: minMax ? "09:00" : void 0,
							max: minMax ? "17:00" : void 0
						}
					},
					{
						id: "showConditionalText",
						type: "boolean",
						label: "Show conditional text"
					},
					{
						id: "conditionalText",
						type: "text",
						label: "Conditional text",
						description: "Always required, but only validated while visible.",
						isVisible: (item) => item.showConditionalText === true,
						isValid: { required: true }
					}
				];
			}, [
				elements,
				custom,
				pattern,
				minMax,
				getElements,
				required
			]);
			const form = (0, import_react.useMemo)(() => {
				if (layout === "regular") return { fields: [
					"text",
					{ id: "customEdit" },
					{
						id: "level1Integer",
						children: ["integer"]
					},
					{
						id: "level1Number",
						children: [{
							id: "level2Number",
							children: ["number"]
						}]
					},
					{
						id: "level1Email",
						children: [{
							id: "level2Email",
							children: [{
								id: "level3Email",
								children: ["email"]
							}]
						}]
					},
					{
						id: "level1Telephone",
						children: [{
							id: "level2Telephone",
							children: [{
								id: "level3Telephone",
								children: [{
									id: "level4Telephone",
									children: ["telephone"]
								}]
							}]
						}]
					},
					"url",
					"color",
					"password",
					"textarea",
					"select",
					"combobox",
					"textWithRadio",
					"boolean",
					"toggle",
					"toggleGroup",
					"array",
					"date",
					"dateRange",
					"datetime",
					"time",
					"showConditionalText",
					"conditionalText"
				] };
				const groupedFields = [
					{
						id: "textFields",
						label: "Text fields",
						children: [
							"text",
							"textarea",
							"password",
							"customEdit"
						]
					},
					{
						id: "numberFields",
						label: "Number fields",
						children: ["integer", "number"]
					},
					{
						id: "contactFields",
						label: "Contact fields",
						children: [
							"email",
							"telephone",
							"url"
						]
					},
					{
						id: "selectFields",
						label: "Selection fields",
						children: [
							"select",
							"combobox",
							"textWithRadio"
						]
					},
					{
						id: "booleanFields",
						label: "Boolean fields",
						children: [
							"boolean",
							"toggle",
							"toggleGroup"
						]
					},
					{ id: "color" },
					{ id: "array" },
					{
						id: "dateFields",
						label: "Date fields",
						children: [
							"date",
							"dateRange",
							"datetime",
							"time"
						]
					},
					{
						id: "conditionalFields",
						label: "Conditionally visible fields",
						children: ["showConditionalText", "conditionalText"]
					}
				];
				if (layout === "panel-dropdown") return {
					layout: {
						type: "panel",
						openAs: "dropdown"
					},
					fields: groupedFields
				};
				if (layout === "panel-modal") return {
					layout: {
						type: "panel",
						openAs: "modal"
					},
					fields: groupedFields
				};
				if (layout === "details") return {
					layout: { type: "details" },
					fields: groupedFields
				};
				if (layout === "card-collapsible") return {
					layout: { type: "card" },
					fields: groupedFields
				};
				return {
					layout: {
						type: "card",
						isCollapsible: false
					},
					fields: groupedFields
				};
			}, [layout]);
			const { validity, isValid } = useFormValidity(post, _fields, form);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("form", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Stack, {
				direction: "column",
				align: "start",
				gap: "3xl",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(DataForm, {
					data: post,
					fields: _fields,
					form,
					validity,
					onChange: (edits) => setPost((prev) => ({
						...prev,
						...edits
					}))
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 1094,
					columnNumber: 5
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(button_default, {
					__next40pxDefaultSize: true,
					accessibleWhenDisabled: true,
					disabled: !isValid,
					variant: "primary",
					children: "Submit"
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 1106,
					columnNumber: 5
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 1093,
				columnNumber: 4
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 1092,
				columnNumber: 3
			}, void 0);
		};
		try {
			ValidationComponent.__docgenInfo = {
				"description": "",
				"displayName": "validation",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/validation.tsx",
				"methods": [],
				"props": {
					"required": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/validation.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "required",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"elements": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/validation.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "elements",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"none\" | \"async\" | \"sync\"",
							"value": [
								{ "value": "\"none\"" },
								{ "value": "\"async\"" },
								{ "value": "\"sync\"" }
							]
						}
					},
					"custom": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/validation.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "custom",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"none\" | \"async\" | \"sync\"",
							"value": [
								{ "value": "\"none\"" },
								{ "value": "\"async\"" },
								{ "value": "\"sync\"" }
							]
						}
					},
					"pattern": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/validation.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "pattern",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"minMax": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/validation.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "minMax",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"layout": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/validation.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "layout",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"details\" | \"regular\" | \"panel-dropdown\" | \"panel-modal\" | \"card-collapsible\" | \"card-not-collapsible\"",
							"value": [
								{ "value": "\"details\"" },
								{ "value": "\"regular\"" },
								{ "value": "\"panel-dropdown\"" },
								{ "value": "\"panel-modal\"" },
								{ "value": "\"card-collapsible\"" },
								{ "value": "\"card-not-collapsible\"" }
							]
						}
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/dataform/stories/validation-panel.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, fields, form, ValidationPanelComponent;
function init_validation_panel() {
	return (init_validation_panel = __esmMin((() => {
		init_react();
		init_dataform();
		init_use_form_validity();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/validation-panel.tsx";
		fields = [{
			id: "title",
			type: "text",
			label: "Title",
			isValid: { required: true }
		}];
		form = {
			layout: {
				type: "panel",
				openAs: "dropdown"
			},
			fields: ["title"]
		};
		ValidationPanelComponent = () => {
			const [item, setItem] = (0, import_react.useState)({ title: "Hello world" });
			const { validity } = useFormValidity(item, fields, form);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DataForm, {
				data: item,
				fields,
				form,
				validity,
				onChange: (edits) => setItem((prev) => ({
					...prev,
					...edits
				}))
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 33,
				columnNumber: 3
			}, void 0);
		};
	})))();
}
//#endregion
//#region ../packages/dataviews/src/dataform/stories/visibility.tsx
var import_jsx_dev_runtime, _jsxFileName, VisibilityComponent;
function init_visibility() {
	return (init_visibility = __esmMin((() => {
		init_react();
		init_dataform();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/visibility.tsx";
		VisibilityComponent = () => {
			const [data, setData] = (0, import_react.useState)({
				name: "",
				email: "",
				isActive: true,
				homepageDisplay: "latest",
				staticHomepage: ""
			});
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataForm, {
				data,
				fields: [
					{
						id: "isActive",
						label: "Is module active?",
						type: "boolean"
					},
					{
						id: "name",
						label: "Name",
						type: "text",
						isVisible: (post) => post.isActive === true
					},
					{
						id: "email",
						label: "Email",
						type: "email",
						isVisible: (post) => post.isActive === true
					},
					{
						id: "homepageDisplay",
						label: "Homepage display",
						elements: [{
							value: "latest",
							label: "Latest post"
						}, {
							value: "static",
							label: "Static page"
						}]
					},
					{
						id: "staticHomepage",
						label: "Static homepage",
						elements: [{
							value: "welcome",
							label: "Welcome to my website"
						}, {
							value: "about",
							label: "About"
						}],
						isVisible: (post) => post.homepageDisplay === "static"
					}
				],
				form: {
					layout: { type: "card" },
					fields: [{
						id: "booleanExample",
						children: [
							"isActive",
							"name",
							"email"
						]
					}, {
						id: "selectExample",
						children: ["homepageDisplay", "staticHomepage"]
					}]
				},
				onChange: (edits) => setData((prev) => ({
					...prev,
					...edits
				}))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 67,
				columnNumber: 3
			}, void 0);
		};
	})))();
}
//#endregion
//#region ../packages/dataviews/src/dataform/stories/index.story.tsx
var meta, LayoutCard, LayoutDetails, LayoutPanel, LayoutRegular, LayoutRow, LayoutMixed, Validation, ValidationPanelErrorIndicator, Visibility, DataAdapter;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_dataform();
		init_layout_card();
		init_layout_details();
		init_layout_mixed();
		init_layout_regular();
		init_layout_row();
		init_layout_panel();
		init_data_adapter();
		init_validation();
		init_validation_panel();
		init_visibility();
		meta = {
			tags: ["manifest"],
			id: "dataviews-dataform",
			title: "Design System/DataViews/DataForm",
			component: DataForm
		};
		LayoutCard = {
			render: LayoutCardComponent,
			argTypes: {
				withHeader: {
					control: { type: "boolean" },
					description: "Whether the card has a header."
				},
				isCollapsible: {
					control: { type: "boolean" },
					description: "Whether the card can be collapsed/expanded."
				},
				isOpened: {
					control: { type: "boolean" },
					description: "Whether the card loads opened."
				},
				withSummary: {
					control: { type: "boolean" },
					description: "Whether the card has a summary."
				}
			},
			args: {
				withHeader: true,
				withSummary: true,
				isCollapsible: true
			}
		};
		LayoutDetails = { render: LayoutDetailsComponent };
		LayoutPanel = {
			render: LayoutPanelComponent,
			argTypes: {
				labelPosition: {
					control: { type: "select" },
					description: "Chooses the label position.",
					options: [
						"default",
						"top",
						"side",
						"none"
					]
				},
				openAs: {
					control: { type: "select" },
					description: "Chooses how to open the panel.",
					options: [
						"default",
						"dropdown",
						"modal"
					]
				},
				editVisibility: {
					control: { type: "select" },
					description: "Chooses when the edit icon is visible.",
					options: [
						"default",
						"always",
						"on-hover"
					]
				},
				showPlaceholderIfEmpty: {
					control: { type: "boolean" },
					description: "Whether the summary shows the field placeholder when the value is empty."
				},
				applyLabel: {
					control: { type: "text" },
					description: "Custom text for the modal apply button. Defaults to \"Apply\".",
					if: {
						arg: "openAs",
						eq: "modal"
					}
				},
				cancelLabel: {
					control: { type: "text" },
					description: "Custom text for the modal cancel button. Defaults to \"Cancel\".",
					if: {
						arg: "openAs",
						eq: "modal"
					}
				},
				disabled: {
					control: { type: "boolean" },
					description: "Disable all fields in the form."
				}
			},
			args: {
				openAs: "default",
				showPlaceholderIfEmpty: false,
				disabled: false
			}
		};
		LayoutRegular = {
			parameters: { a11y: { test: "todo" } },
			render: LayoutRegularComponent,
			argTypes: {
				labelPosition: {
					control: { type: "select" },
					description: "Chooses the label position.",
					options: [
						"default",
						"top",
						"side",
						"none"
					]
				},
				disabled: {
					control: { type: "boolean" },
					description: "Disable all fields in the form."
				}
			},
			args: { disabled: false }
		};
		LayoutRow = {
			parameters: { a11y: { test: "todo" } },
			render: LayoutRowComponent,
			argTypes: { alignment: {
				control: { type: "select" },
				description: "The alignment of the fields.",
				options: [
					"default",
					"start",
					"center",
					"end"
				]
			} },
			args: { alignment: "default" }
		};
		LayoutMixed = { render: LayoutMixedComponent };
		Validation = {
			parameters: { a11y: { test: "todo" } },
			render: ValidationComponent,
			argTypes: {
				layout: {
					control: { type: "select" },
					description: "Choose the form layout type.",
					options: [
						"regular",
						"panel-dropdown",
						"panel-modal",
						"card-collapsible",
						"card-not-collapsible",
						"details"
					]
				},
				required: {
					control: { type: "boolean" },
					description: "Whether or not the required validation rule is active (only applies when fieldDistribution is allSame)."
				},
				elements: {
					control: { type: "select" },
					description: "Whether or not the elements validation rule is active.",
					options: [
						"sync",
						"async",
						"none"
					]
				},
				custom: {
					control: { type: "select" },
					description: "Whether or not the custom validation rule is active.",
					options: [
						"sync",
						"async",
						"none"
					]
				},
				pattern: {
					control: { type: "boolean" },
					description: "Whether or not the pattern validation rule is active."
				},
				minMax: {
					control: { type: "boolean" },
					description: "Whether or not the min/max validation rule is active."
				}
			},
			args: {
				layout: "regular",
				required: true,
				elements: "sync",
				custom: "sync",
				pattern: false,
				minMax: false
			}
		};
		ValidationPanelErrorIndicator = { render: ValidationPanelComponent };
		Visibility = { render: VisibilityComponent };
		DataAdapter = { render: DataAdapterComponent };
		LayoutCard.parameters = {
			...LayoutCard.parameters,
			docs: {
				...LayoutCard.parameters?.docs,
				source: {
					originalSource: "{\n  render: LayoutCardComponent,\n  argTypes: {\n    withHeader: {\n      control: {\n        type: 'boolean'\n      },\n      description: 'Whether the card has a header.'\n    },\n    isCollapsible: {\n      control: {\n        type: 'boolean'\n      },\n      description: 'Whether the card can be collapsed/expanded.'\n    },\n    isOpened: {\n      control: {\n        type: 'boolean'\n      },\n      description: 'Whether the card loads opened.'\n    },\n    withSummary: {\n      control: {\n        type: 'boolean'\n      },\n      description: 'Whether the card has a summary.'\n    }\n  },\n  args: {\n    withHeader: true,\n    withSummary: true,\n    isCollapsible: true\n  }\n}",
					...LayoutCard.parameters?.docs?.source
				}
			}
		};
		LayoutDetails.parameters = {
			...LayoutDetails.parameters,
			docs: {
				...LayoutDetails.parameters?.docs,
				source: {
					originalSource: "{\n  render: LayoutDetailsComponent\n}",
					...LayoutDetails.parameters?.docs?.source
				}
			}
		};
		LayoutPanel.parameters = {
			...LayoutPanel.parameters,
			docs: {
				...LayoutPanel.parameters?.docs,
				source: {
					originalSource: "{\n  render: LayoutPanelComponent,\n  argTypes: {\n    labelPosition: {\n      control: {\n        type: 'select'\n      },\n      description: 'Chooses the label position.',\n      options: ['default', 'top', 'side', 'none']\n    },\n    openAs: {\n      control: {\n        type: 'select'\n      },\n      description: 'Chooses how to open the panel.',\n      options: ['default', 'dropdown', 'modal']\n    },\n    editVisibility: {\n      control: {\n        type: 'select'\n      },\n      description: 'Chooses when the edit icon is visible.',\n      options: ['default', 'always', 'on-hover']\n    },\n    showPlaceholderIfEmpty: {\n      control: {\n        type: 'boolean'\n      },\n      description: 'Whether the summary shows the field placeholder when the value is empty.'\n    },\n    applyLabel: {\n      control: {\n        type: 'text'\n      },\n      description: 'Custom text for the modal apply button. Defaults to \"Apply\".',\n      if: {\n        arg: 'openAs',\n        eq: 'modal'\n      }\n    },\n    cancelLabel: {\n      control: {\n        type: 'text'\n      },\n      description: 'Custom text for the modal cancel button. Defaults to \"Cancel\".',\n      if: {\n        arg: 'openAs',\n        eq: 'modal'\n      }\n    },\n    disabled: {\n      control: {\n        type: 'boolean'\n      },\n      description: 'Disable all fields in the form.'\n    }\n  },\n  args: {\n    openAs: 'default',\n    showPlaceholderIfEmpty: false,\n    disabled: false\n  }\n}",
					...LayoutPanel.parameters?.docs?.source
				}
			}
		};
		LayoutRegular.parameters = {
			...LayoutRegular.parameters,
			docs: {
				...LayoutRegular.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    // FIXME: Story renders unlabeled form controls (label).\n    // See: https://github.com/WordPress/gutenberg/issues/81596\n    a11y: {\n      test: 'todo'\n    }\n  },\n  render: LayoutRegularComponent,\n  argTypes: {\n    labelPosition: {\n      control: {\n        type: 'select'\n      },\n      description: 'Chooses the label position.',\n      options: ['default', 'top', 'side', 'none']\n    },\n    disabled: {\n      control: {\n        type: 'boolean'\n      },\n      description: 'Disable all fields in the form.'\n    }\n  },\n  args: {\n    disabled: false\n  }\n}",
					...LayoutRegular.parameters?.docs?.source
				}
			}
		};
		LayoutRow.parameters = {
			...LayoutRow.parameters,
			docs: {
				...LayoutRow.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    // FIXME: Story renders unlabeled form controls (label).\n    // See: https://github.com/WordPress/gutenberg/issues/81596\n    a11y: {\n      test: 'todo'\n    }\n  },\n  render: LayoutRowComponent,\n  argTypes: {\n    alignment: {\n      control: {\n        type: 'select'\n      },\n      description: 'The alignment of the fields.',\n      options: ['default', 'start', 'center', 'end']\n    }\n  },\n  args: {\n    alignment: 'default'\n  }\n}",
					...LayoutRow.parameters?.docs?.source
				}
			}
		};
		LayoutMixed.parameters = {
			...LayoutMixed.parameters,
			docs: {
				...LayoutMixed.parameters?.docs,
				source: {
					originalSource: "{\n  render: LayoutMixedComponent\n}",
					...LayoutMixed.parameters?.docs?.source
				}
			}
		};
		Validation.parameters = {
			...Validation.parameters,
			docs: {
				...Validation.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    // FIXME: Error-delegate inputs are unlabeled (label).\n    // See: https://github.com/WordPress/gutenberg/issues/81596\n    a11y: {\n      test: 'todo'\n    }\n  },\n  render: ValidationComponent,\n  argTypes: {\n    layout: {\n      control: {\n        type: 'select'\n      },\n      description: 'Choose the form layout type.',\n      options: ['regular', 'panel-dropdown', 'panel-modal', 'card-collapsible', 'card-not-collapsible', 'details']\n    },\n    required: {\n      control: {\n        type: 'boolean'\n      },\n      description: 'Whether or not the required validation rule is active (only applies when fieldDistribution is allSame).'\n    },\n    elements: {\n      control: {\n        type: 'select'\n      },\n      description: 'Whether or not the elements validation rule is active.',\n      options: ['sync', 'async', 'none']\n    },\n    custom: {\n      control: {\n        type: 'select'\n      },\n      description: 'Whether or not the custom validation rule is active.',\n      options: ['sync', 'async', 'none']\n    },\n    pattern: {\n      control: {\n        type: 'boolean'\n      },\n      description: 'Whether or not the pattern validation rule is active.'\n    },\n    minMax: {\n      control: {\n        type: 'boolean'\n      },\n      description: 'Whether or not the min/max validation rule is active.'\n    }\n  },\n  args: {\n    layout: 'regular',\n    required: true,\n    elements: 'sync',\n    custom: 'sync',\n    pattern: false,\n    minMax: false\n  }\n}",
					...Validation.parameters?.docs?.source
				}
			}
		};
		ValidationPanelErrorIndicator.parameters = {
			...ValidationPanelErrorIndicator.parameters,
			docs: {
				...ValidationPanelErrorIndicator.parameters?.docs,
				source: {
					originalSource: "{\n  render: ValidationPanelComponent\n}",
					...ValidationPanelErrorIndicator.parameters?.docs?.source
				}
			}
		};
		Visibility.parameters = {
			...Visibility.parameters,
			docs: {
				...Visibility.parameters?.docs,
				source: {
					originalSource: "{\n  render: VisibilityComponent\n}",
					...Visibility.parameters?.docs?.source
				}
			}
		};
		DataAdapter.parameters = {
			...DataAdapter.parameters,
			docs: {
				...DataAdapter.parameters?.docs,
				source: {
					originalSource: "{\n  render: DataAdapterComponent\n}",
					...DataAdapter.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { DataAdapter, LayoutCard, LayoutDetails, LayoutMixed, LayoutPanel, LayoutRegular, LayoutRow, Validation, ValidationPanelErrorIndicator, Visibility, meta as default };
