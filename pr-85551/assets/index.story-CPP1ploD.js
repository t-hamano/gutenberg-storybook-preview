import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as init_create_interpolate_element, t as create_interpolate_element_default } from "./create-interpolate-element-CUfbmqGd.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, r as _n, t as init_build_module } from "./build-module-v04us4E2.js";
import { i as init_mergeProps, o as mergeProps } from "./useRenderElement-Dkv6YH0v.js";
import { n as useRender, t as init_useRender } from "./useRender-JXgJ-9ZS.js";
import { t as icon_default } from "./icon-DEDMwo2v.js";
import { t as archive_default } from "./archive-B_lkp5rx.js";
import { h as category_default } from "./search-control-CIWcoJN_.js";
import { t as check_default } from "./check-BK5allCs.js";
import { t as envelope_default } from "./envelope-CXrwQEgg.js";
import { t as image_default } from "./image-B20s8V9q.js";
import { n as link_default } from "./link-gRa713_Y.js";
import { i as payment_default, n as shipping_default } from "./shipping-CPLfu1ba.js";
import { n as pin_default } from "./pin-CL8JEWwu.js";
import { n as star_filled_default } from "./star-filled-knC7Rv3K.js";
import { n as trash_default } from "./trash-CPVsrG3O.js";
import { a as Header, c as init_root, i as init_content, n as init_title, o as init_header, r as Content, s as Root, t as Title } from "./title-ClJOk8js.js";
import { n as init_stack, t as Stack } from "./stack-BHmRFw1F.js";
import { f as component_default, p as init_component } from "./input-control-nLdfCkqP.js";
import { n as button_default, r as init_button } from "./button-BxmZjN4X.js";
import { n as init_component$1, t as component_default$1 } from "./component-DbQ3d6xQ.js";
import { d as LAYOUT_LIST, h as LAYOUT_TABLE, l as LAYOUT_ACTIVITY, u as LAYOUT_GRID, y as init_constants } from "./field-types-Xuoe8WDm.js";
import { n as init_filter_sort_and_paginate, t as filterSortAndPaginate } from "./filter-sort-and-paginate-CUWNN5W3.js";
import { n as init_dataviews, t as DataViewsSubComponents } from "./dataviews-DW_lk-uR.js";
import { r as init_build_module$1 } from "./library.story-CbQx3MQ6.js";
//#region ../packages/ui/build-module/card/full-bleed.mjs
function getRuntime() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE) === hash) return true;
	return false;
}
function injectStyle(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument(targetDocument) {
	const runtime = getRuntime();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle(targetDocument, hash, css);
	return () => {
		const count = runtime.documents.get(targetDocument);
		if (count === void 0) return;
		if (count <= 1) {
			runtime.documents.delete(targetDocument);
			return;
		}
		runtime.documents.set(targetDocument, count - 1);
	};
}
function registerStyle(hash, css) {
	const runtime = getRuntime();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle(targetDocument, hash, css);
}
var STYLE_HASH_ATTRIBUTE, style_default, FullBleed;
function init_full_bleed() {
	return (init_full_bleed = __esmMin((() => {
		init_mergeProps(), init_useRender();
		init_react();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("cb866dcef6", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{._02872bf298eadc43__root{--wp-ui-card-padding:var(--wpds-dimension-padding-2xl,24px);--wp-ui-card-header-content-gap:var(--wpds-dimension-gap-xl,24px);--wp-ui-card-header-content-margin:calc(var(--wp-ui-card-header-content-gap) - var(--wp-ui-card-padding));background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:1px solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-lg,8px);color:var(--wpds-color-foreground-content-neutral,#1e1e1e);display:flex;flex-direction:column;overflow:clip}._5dffdaf2a6e669ac__content,.bbccc92e6ba5662d__header{padding:var(--wp-ui-card-padding);&:not(:first-child):not(:last-child){padding-block-end:0}}.bbccc92e6ba5662d__header+._5dffdaf2a6e669ac__content{margin-block-start:var(--wp-ui-card-header-content-margin);padding-block-start:0}.c1fa192587e1b4a6__fullbleed{margin-inline:calc(var(--wp-ui-card-padding)*-1);width:calc(100% + var(--wp-ui-card-padding)*2)}._02872bf298eadc43__root>:is(.bbccc92e6ba5662d__header,._5dffdaf2a6e669ac__content):first-child>.c1fa192587e1b4a6__fullbleed:first-child{margin-block-start:calc(var(--wp-ui-card-padding)*-1)}:is(.bbccc92e6ba5662d__header,._5dffdaf2a6e669ac__content):last-child>.c1fa192587e1b4a6__fullbleed:last-child{margin-block-end:calc(var(--wp-ui-card-padding)*-1)}}}");
		style_default = {
			"root": "_02872bf298eadc43__root",
			"header": "bbccc92e6ba5662d__header",
			"content": "_5dffdaf2a6e669ac__content",
			"fullbleed": "c1fa192587e1b4a6__fullbleed"
		};
		FullBleed = (0, import_react.forwardRef)(function CardFullBleed({ render, ...props }, ref) {
			return useRender({
				defaultTagName: "div",
				render,
				ref,
				props: mergeProps({ className: style_default.fullbleed }, props)
			});
		});
	})))();
}
//#endregion
//#region ../packages/dataviews/src/dataviews/stories/layout-activity.tsx
var import_jsx_dev_runtime$13, _jsxFileName$13, eventTypeIcons, orderEventData, orderEventFields, orderEventActions, LayoutActivityComponent;
function init_layout_activity() {
	return (init_layout_activity = __esmMin((() => {
		init_react();
		init_build_module$1();
		init_button(), init_component();
		init_stack();
		init_dataviews();
		init_constants();
		init_filter_sort_and_paginate();
		import_jsx_dev_runtime$13 = require_jsx_dev_runtime();
		_jsxFileName$13 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-activity.tsx";
		eventTypeIcons = {
			status: check_default,
			payment: payment_default,
			email: envelope_default,
			fulfillment: archive_default,
			shipping: shipping_default,
			review: star_filled_default
		};
		orderEventData = [
			{
				id: 13,
				name: {
					title: "Customer Review Received",
					description: "Customer left a 5-star review: \"Great product and fast shipping!\""
				},
				type: "review",
				categories: ["Review", "Customer"],
				date: "2025-01-22",
				datetime: "2025-01-22T19:45:33Z",
				email: "buzz.lightyear@fictional-store.test",
				orderNumber: "#2502"
			},
			{
				id: 1,
				name: {
					title: "Order Created",
					description: "Order #2502 was created."
				},
				type: "status",
				categories: ["Order", "Status"],
				date: "2025-01-15",
				datetime: "2025-01-15T09:23:15Z",
				email: "buzz.lightyear@fictional-store.test",
				orderNumber: "#2502"
			},
			{
				id: 2,
				name: {
					title: "Payment Received",
					description: "Payment through Credit Card accepted."
				},
				type: "payment",
				categories: ["Payment", "Credit Card"],
				date: "2025-01-15",
				datetime: "2025-01-15T09:23:47Z",
				email: "buzz.lightyear@fictional-store.test",
				orderNumber: "#2502"
			},
			{
				id: 3,
				name: {
					title: "Order Confirmation Sent",
					description: "Order confirmation #1259 sent to buzz.lightyear@fictional-store.test"
				},
				type: "email",
				categories: ["Email", "Communication"],
				date: "2025-01-15",
				datetime: "2025-01-15T09:24:02Z",
				email: "buzz.lightyear@fictional-store.test",
				orderNumber: "#2502"
			},
			{
				id: 4,
				name: {
					title: "Private Note Added",
					description: "Buyer has requested to wait a couple days to send the order, they are not going to be home until the weekend."
				},
				type: "note",
				categories: ["Note", "Internal"],
				date: "2025-01-15",
				datetime: "2025-01-15T14:32:18Z",
				email: "store.admin@fictional-store.test",
				orderNumber: "#2502"
			},
			{
				id: 5,
				name: {
					title: "Status Changed to Processing",
					description: "Order status automatically changed from pending to processing."
				},
				type: "status",
				categories: ["Order", "Status"],
				date: "2025-01-15",
				datetime: "2025-01-15T14:35:00Z",
				orderNumber: "#2502"
			},
			{
				id: 6,
				name: {
					title: "Customer Note Added",
					description: "Customer added note: \"Please leave the package at the back door. Thank you!\""
				},
				type: "note",
				categories: ["Note", "Customer"],
				date: "2025-01-16",
				datetime: "2025-01-16T08:15:42Z",
				email: "buzz.lightyear@fictional-store.test",
				orderNumber: "#2502"
			},
			{
				id: 7,
				name: {
					title: "Items Packed",
					description: "All items have been packed and are ready for shipment."
				},
				type: "fulfillment",
				categories: ["Fulfillment", "Warehouse"],
				date: "2025-01-18",
				datetime: "2025-01-18T10:22:33Z",
				orderNumber: "#2502"
			},
			{
				id: 8,
				name: {
					title: "Shipping Label Created",
					description: "Shipping label created with USPS Priority Mail. Tracking #9400111899562854217803"
				},
				type: "shipping",
				categories: ["Shipping", "USPS"],
				date: "2025-01-18",
				datetime: "2025-01-18T11:05:14Z",
				orderNumber: "#2502"
			},
			{
				id: 9,
				name: {
					title: "Order Shipped",
					description: "Order has been shipped via USPS Priority Mail. Expected delivery: Jan 20, 2025"
				},
				type: "shipping",
				categories: ["Shipping", "Status"],
				date: "2025-01-18",
				datetime: "2025-01-18T16:42:09Z",
				email: "buzz.lightyear@fictional-store.test",
				orderNumber: "#2502"
			},
			{
				id: 10,
				name: {
					title: "Shipment Notification Sent",
					description: "Shipment notification email with tracking information sent to customer."
				},
				type: "email",
				categories: ["Email", "Communication"],
				date: "2025-01-18",
				datetime: "2025-01-18T16:42:25Z",
				email: "buzz.lightyear@fictional-store.test",
				orderNumber: "#2502"
			},
			{
				id: 11,
				name: {
					title: "Package Out for Delivery",
					description: "Package is out for delivery with carrier. Delivery expected today."
				},
				type: "shipping",
				categories: ["Shipping", "Tracking"],
				date: "2025-01-20",
				datetime: "2025-01-20T08:15:00Z",
				orderNumber: "#2502"
			},
			{
				id: 12,
				name: {
					title: "Order Delivered",
					description: "Order successfully delivered and left at back door."
				},
				type: "status",
				categories: [
					"Order",
					"Status",
					"Delivered"
				],
				date: "2025-01-20",
				datetime: "2025-01-20T14:32:51Z",
				orderNumber: "#2502"
			},
			{
				id: 14,
				name: {
					title: "Order Created",
					description: "Order #2503 was created."
				},
				type: "status",
				categories: ["Order", "Status"],
				date: "2025-01-16",
				datetime: "2025-01-16T10:15:30Z",
				email: "woody.pride@fictional-store.test",
				orderNumber: "#2503"
			},
			{
				id: 15,
				name: {
					title: "Payment Received",
					description: "Payment through PayPal accepted."
				},
				type: "payment",
				categories: ["Payment", "PayPal"],
				date: "2025-01-16",
				datetime: "2025-01-16T10:16:05Z",
				email: "woody.pride@fictional-store.test",
				orderNumber: "#2503"
			},
			{
				id: 16,
				name: {
					title: "Order Confirmation Sent",
					description: "Order confirmation #1260 sent to woody.pride@fictional-store.test"
				},
				type: "email",
				categories: ["Email", "Communication"],
				date: "2025-01-16",
				datetime: "2025-01-16T10:16:18Z",
				email: "woody.pride@fictional-store.test",
				orderNumber: "#2503"
			},
			{
				id: 17,
				name: {
					title: "Order Created",
					description: "Order #2501 was created."
				},
				type: "status",
				categories: ["Order", "Status"],
				date: "2025-01-14",
				datetime: "2025-01-14T14:22:45Z",
				email: "rex.green@fictional-store.test",
				orderNumber: "#2501"
			},
			{
				id: 18,
				name: {
					title: "Payment Received",
					description: "Payment through Stripe accepted."
				},
				type: "payment",
				categories: ["Payment", "Stripe"],
				date: "2025-01-14",
				datetime: "2025-01-14T14:23:12Z",
				email: "rex.green@fictional-store.test",
				orderNumber: "#2501"
			},
			{
				id: 19,
				name: {
					title: "Order Shipped",
					description: "Order has been shipped via FedEx Ground. Expected delivery: Jan 18, 2025"
				},
				type: "shipping",
				categories: ["Shipping", "Status"],
				date: "2025-01-15",
				datetime: "2025-01-15T11:30:00Z",
				email: "rex.green@fictional-store.test",
				orderNumber: "#2501"
			},
			{
				id: 20,
				name: {
					title: "Order Delivered",
					description: "Order successfully delivered and signed for."
				},
				type: "status",
				categories: [
					"Order",
					"Status",
					"Delivered"
				],
				date: "2025-01-18",
				datetime: "2025-01-18T13:45:22Z",
				orderNumber: "#2501"
			},
			{
				id: 21,
				name: {
					title: "Order Created",
					description: "Order #2504 was created."
				},
				type: "status",
				categories: ["Order", "Status"],
				date: "2025-01-17",
				datetime: "2025-01-17T16:40:15Z",
				email: "jessie.cowgirl@fictional-store.test",
				orderNumber: "#2504"
			},
			{
				id: 22,
				name: {
					title: "Payment Received",
					description: "Payment through Apple Pay accepted."
				},
				type: "payment",
				categories: ["Payment", "Apple Pay"],
				date: "2025-01-17",
				datetime: "2025-01-17T16:40:42Z",
				email: "jessie.cowgirl@fictional-store.test",
				orderNumber: "#2504"
			},
			{
				id: 23,
				name: {
					title: "Private Note Added",
					description: "Customer requested gift wrapping with a personalized note."
				},
				type: "note",
				categories: ["Note", "Internal"],
				date: "2025-01-17",
				datetime: "2025-01-17T17:15:00Z",
				email: "store.admin@fictional-store.test",
				orderNumber: "#2504"
			}
		];
		orderEventFields = [
			{
				label: "Icon",
				id: "icon",
				type: "media",
				render: ({ item }) => /* @__PURE__ */ (0, import_jsx_dev_runtime$13.jsxDEV)(icon_default, { icon: eventTypeIcons[item.type] || pin_default }, void 0, false, {
					fileName: _jsxFileName$13,
					lineNumber: 361,
					columnNumber: 4
				}, void 0),
				enableSorting: false
			},
			{
				label: "Order",
				id: "orderNumber",
				type: "text",
				enableHiding: true,
				enableSorting: false
			},
			{
				label: "Title",
				id: "title",
				type: "text",
				enableHiding: true,
				enableGlobalSearch: true,
				getValue: ({ item }) => item.name.title,
				enableSorting: false,
				filterBy: { operators: [
					"contains",
					"notContains",
					"startsWith"
				] }
			},
			{
				label: "Description",
				id: "description",
				type: "text",
				enableSorting: false,
				enableGlobalSearch: true,
				getValue: ({ item }) => item.name.description,
				filterBy: { operators: [
					"contains",
					"notContains",
					"startsWith"
				] }
			},
			{
				id: "date",
				label: "Date",
				type: "date",
				enableSorting: false,
				render: ({ item }) => {
					return /* @__PURE__ */ (0, import_jsx_dev_runtime$13.jsxDEV)("span", { children: new Date(item.date).toLocaleDateString("en-US", {
						month: "short",
						day: "numeric",
						year: "numeric"
					}) }, void 0, false, {
						fileName: _jsxFileName$13,
						lineNumber: 402,
						columnNumber: 5
					}, void 0);
				}
			},
			{
				id: "time",
				label: "Time",
				type: "datetime",
				enableSorting: false,
				getValue: ({ item }) => item.datetime,
				render: ({ item }) => {
					return /* @__PURE__ */ (0, import_jsx_dev_runtime$13.jsxDEV)("span", { children: new Date(item.datetime).toLocaleTimeString("en-US", {
						hour: "numeric",
						minute: "2-digit",
						hour12: true
					}) }, void 0, false, {
						fileName: _jsxFileName$13,
						lineNumber: 420,
						columnNumber: 5
					}, void 0);
				}
			},
			{
				id: "datetime",
				label: "Datetime",
				type: "datetime",
				enableSorting: false,
				render: ({ item }) => {
					return /* @__PURE__ */ (0, import_jsx_dev_runtime$13.jsxDEV)("span", { children: [
						new Date(item.datetime).toLocaleDateString("en-US", {
							month: "short",
							day: "numeric",
							year: "numeric"
						}),
						" ",
						new Date(item.datetime).toLocaleTimeString("en-US", {
							hour: "numeric",
							minute: "2-digit",
							hour12: true
						})
					] }, void 0, true, {
						fileName: _jsxFileName$13,
						lineNumber: 437,
						columnNumber: 5
					}, void 0);
				}
			},
			{
				label: "Type",
				id: "type",
				enableHiding: false,
				enableSorting: false,
				elements: [
					{
						value: "status",
						label: "Status"
					},
					{
						value: "payment",
						label: "Payment"
					},
					{
						value: "email",
						label: "Email"
					},
					{
						value: "note",
						label: "Note"
					},
					{
						value: "fulfillment",
						label: "Fulfillment"
					},
					{
						value: "shipping",
						label: "Shipping"
					},
					{
						value: "review",
						label: "Review"
					}
				],
				filterBy: { operators: ["is", "isNot"] }
			},
			{
				label: "Email",
				id: "email",
				type: "email",
				enableSorting: false
			},
			{
				label: "Categories",
				id: "categories",
				header: /* @__PURE__ */ (0, import_jsx_dev_runtime$13.jsxDEV)(Stack, {
					direction: "row",
					gap: "sm",
					justify: "start",
					align: "center",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$13.jsxDEV)(icon_default, { icon: category_default }, void 0, false, {
						fileName: _jsxFileName$13,
						lineNumber: 481,
						columnNumber: 5
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$13.jsxDEV)("span", {
						style: { minWidth: 0 },
						children: "Categories"
					}, void 0, false, {
						fileName: _jsxFileName$13,
						lineNumber: 482,
						columnNumber: 5
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$13,
					lineNumber: 480,
					columnNumber: 4
				}, void 0),
				elements: [
					{
						value: "Order",
						label: "Order"
					},
					{
						value: "Status",
						label: "Status"
					},
					{
						value: "Payment",
						label: "Payment"
					},
					{
						value: "Credit Card",
						label: "Credit Card"
					},
					{
						value: "Email",
						label: "Email"
					},
					{
						value: "Communication",
						label: "Communication"
					},
					{
						value: "Note",
						label: "Note"
					},
					{
						value: "Internal",
						label: "Internal"
					},
					{
						value: "Customer",
						label: "Customer"
					},
					{
						value: "Fulfillment",
						label: "Fulfillment"
					},
					{
						value: "Warehouse",
						label: "Warehouse"
					},
					{
						value: "Shipping",
						label: "Shipping"
					},
					{
						value: "USPS",
						label: "USPS"
					},
					{
						value: "Tracking",
						label: "Tracking"
					},
					{
						value: "Delivered",
						label: "Delivered"
					},
					{
						value: "Review",
						label: "Review"
					}
				],
				type: "array",
				enableGlobalSearch: true,
				enableSorting: false
			}
		];
		orderEventActions = [{
			id: "view-note",
			label: "View",
			isPrimary: true,
			icon: link_default,
			isEligible: (item) => item.type === "note",
			callback: (items) => {
				const item = items[0];
				alert(`View item: "${item.name.title}"\n\n${item.name.description}`);
			}
		}, {
			id: "delete-note",
			label: "Delete…",
			icon: trash_default,
			isEligible: (item) => item.type === "note",
			modalHeader: (items) => items.length > 1 ? `Delete ${items.length} items` : `Delete ${items[0].name.title}`,
			modalFocusOnMount: "firstContentElement",
			supportsBulk: true,
			RenderModal: ({ items, closeModal }) => {
				const label = items.length > 1 ? `Are you sure you want to delete ${items.length} items?` : `Are you sure you want to delete "${items[0].name.title}"?`;
				const onSubmit = () => {
					const item = items[0];
					alert(`Delete note: "${item.name.title}"\n\n${item.name.description}`);
					closeModal?.();
				};
				return /* @__PURE__ */ (0, import_jsx_dev_runtime$13.jsxDEV)(Stack, {
					direction: "column",
					gap: "xl",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$13.jsxDEV)(component_default, { children: label }, void 0, false, {
						fileName: _jsxFileName$13,
						lineNumber: 550,
						columnNumber: 6
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$13.jsxDEV)(Stack, {
						direction: "row",
						gap: "sm",
						justify: "right",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$13.jsxDEV)(button_default, {
							__next40pxDefaultSize: true,
							variant: "tertiary",
							onClick: closeModal,
							children: "Cancel"
						}, void 0, false, {
							fileName: _jsxFileName$13,
							lineNumber: 552,
							columnNumber: 7
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$13.jsxDEV)(button_default, {
							__next40pxDefaultSize: true,
							variant: "primary",
							onClick: onSubmit,
							children: "Delete"
						}, void 0, false, {
							fileName: _jsxFileName$13,
							lineNumber: 559,
							columnNumber: 7
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$13,
						lineNumber: 551,
						columnNumber: 6
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$13,
					lineNumber: 549,
					columnNumber: 5
				}, void 0);
			}
		}];
		LayoutActivityComponent = ({ backgroundColor, fullWidth = false, hasClickableItems = true, groupBy = true, groupByLabel = true, perPageSizes = [
			10,
			25,
			50,
			100
		], showMedia = true }) => {
			const [view, setView] = (0, import_react.useState)({
				type: LAYOUT_ACTIVITY,
				search: "",
				page: 1,
				perPage: 20,
				filters: [],
				fields: [
					"time",
					"categories",
					"orderNumber"
				],
				titleField: "title",
				descriptionField: "description",
				mediaField: "icon",
				showMedia,
				sort: {
					field: "datetime",
					direction: "asc"
				},
				groupBy: groupBy ? {
					field: "date",
					direction: "asc",
					showLabel: groupByLabel
				} : void 0
			});
			(0, import_react.useEffect)(() => {
				setView((prevView) => {
					return {
						...prevView,
						groupBy: groupBy ? {
							field: "date",
							direction: "asc",
							showLabel: groupByLabel
						} : void 0,
						showMedia
					};
				});
			}, [
				showMedia,
				groupBy,
				groupByLabel
			]);
			const { data: shownData, paginationInfo } = (0, import_react.useMemo)(() => {
				return filterSortAndPaginate(orderEventData, view, orderEventFields);
			}, [view]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$13.jsxDEV)("div", {
				style: {
					height: "100%",
					maxWidth: fullWidth ? void 0 : "400px",
					"--wp-dataviews-color-background": backgroundColor
				},
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$13.jsxDEV)(DataViewsSubComponents, {
					getItemId: (item) => item.id.toString(),
					paginationInfo,
					data: shownData,
					view,
					fields: orderEventFields,
					onChangeView: setView,
					actions: orderEventActions,
					isItemClickable: () => hasClickableItems,
					defaultLayouts: { [LAYOUT_ACTIVITY]: { sort: {
						field: "datetime",
						direction: "asc"
					} } },
					config: { perPageSizes }
				}, void 0, false, {
					fileName: _jsxFileName$13,
					lineNumber: 641,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$13,
				lineNumber: 634,
				columnNumber: 3
			}, void 0);
		};
		try {
			LayoutActivityComponent.__docgenInfo = {
				"description": "",
				"displayName": "layoutactivity",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-activity.tsx",
				"methods": [],
				"props": {
					"backgroundColor": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-activity.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "backgroundColor",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"fullWidth": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-activity.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "fullWidth",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"hasClickableItems": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-activity.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "hasClickableItems",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"groupBy": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-activity.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "groupBy",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"groupByLabel": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-activity.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "groupByLabel",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"perPageSizes": {
						"defaultValue": { "value": "[ 10, 25, 50, 100 ]" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-activity.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "perPageSizes",
						"required": false,
						"tags": {},
						"type": { "name": "number[]" }
					},
					"showMedia": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-activity.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "showMedia",
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
//#region ../packages/dataviews/src/dataviews/stories/fixtures.tsx
var import_jsx_dev_runtime$12, _jsxFileName$12, data$1, actions, fields;
function init_fixtures() {
	return (init_fixtures = __esmMin((() => {
		init_build_module$1();
		init_button(), init_component();
		init_stack();
		import_jsx_dev_runtime$12 = require_jsx_dev_runtime();
		_jsxFileName$12 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/fixtures.tsx";
		data$1 = [
			{
				id: 1,
				name: {
					title: "Moon",
					description: "The Moon is Earth's only natural satellite, orbiting at an average distance of 384,400 kilometers with a synchronous rotation that leads to fixed lunar phases as seen from Earth. Its cratered surface and subtle glow define night skies, inspiring exploration missions and influencing tides and biological rhythms worldwide."
				},
				image: "https://live.staticflickr.com/7398/9458193857_e1256123e3_z.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Earth",
					"Moon"
				],
				satellites: 0,
				date: "2021-01-01",
				datetime: "2021-01-01T14:30:00Z",
				email: "moon@example.com",
				author: "lunarian_observer",
				parent: 14,
				level: 2
			},
			{
				id: 2,
				name: {
					title: "Io",
					description: "Moon of Jupiter"
				},
				image: "https://live.staticflickr.com/5482/9460973502_07e8ab81fe_z.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Jupiter",
					"Moon"
				],
				satellites: 0,
				date: "2019-01-02",
				datetime: "2019-01-02T09:15:00Z",
				email: "io@example.com",
				author: "galilean_moon_enthusiast_supreme",
				parent: 16,
				level: 2
			},
			{
				id: 3,
				name: {
					title: "Europa",
					description: "Moon of Jupiter"
				},
				image: "https://live.staticflickr.com/65535/31499273012_baf5f38cc1_z.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Jupiter",
					"Moon"
				],
				satellites: 0,
				date: "2025-01-03",
				datetime: "2025-01-03T16:45:30Z",
				email: "europa@example.com",
				author: "icy_ocean_explorer",
				parent: 16,
				level: 2
			},
			{
				id: 4,
				name: {
					title: "Ganymede",
					description: "Largest moon of Jupiter"
				},
				image: "https://live.staticflickr.com/7816/33436473218_a836235935_k.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Jupiter",
					"Moon"
				],
				satellites: 0,
				date: "2022-01-04",
				datetime: "2022-01-04T12:30:00Z",
				email: "ganymede@example.com",
				author: "jovian_satellite_researcher",
				parent: 16,
				level: 2
			},
			{
				id: 5,
				name: {
					title: "Callisto",
					description: "Outermost Galilean moon of Jupiter"
				},
				image: "https://live.staticflickr.com/804/27604150528_4512448a9c_c.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Jupiter",
					"Moon"
				],
				satellites: 0,
				date: "2021-01-05",
				datetime: "2021-01-05T14:15:30Z",
				email: "callisto@example.com",
				author: "crater_cartography_specialist",
				parent: 16,
				level: 2
			},
			{
				id: 6,
				name: {
					title: "Amalthea",
					description: "Small irregular moon of Jupiter"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Amalthea.gif",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Jupiter",
					"Moon"
				],
				satellites: 0,
				date: "2020-01-06",
				datetime: "2020-01-06T10:45:15Z",
				email: "amalthea@example.com",
				author: "astro_photographer",
				parent: 16,
				level: 2
			},
			{
				id: 7,
				name: {
					title: "Himalia",
					description: "Largest irregular moon of Jupiter"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Cassini-Huygens_Image_of_Himalia.png",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Jupiter",
					"Moon"
				],
				satellites: 0,
				date: "2019-01-07",
				datetime: "2019-01-07T16:20:45Z",
				email: "himalia@example.com",
				author: "irregular_orbit_analyst",
				parent: 16,
				level: 2
			},
			{
				id: 8,
				name: {
					title: "Neptune",
					description: "Ice giant in the Solar system"
				},
				image: "https://live.staticflickr.com/65535/29523683990_000ff4720c_z.jpg",
				type: "Ice giant",
				isPlanet: true,
				categories: [
					"Ice giant",
					"Planet",
					"Solar system"
				],
				satellites: 16,
				date: "2020-01-01",
				datetime: "2020-01-01T11:22:15Z",
				email: "neptune@example.com",
				author: "neptunian_dynamics_professor",
				parent: 38,
				level: 1
			},
			{
				id: 9,
				name: {
					title: "Triton",
					description: "Largest moon of Neptune"
				},
				image: "https://live.staticflickr.com/65535/50728384241_02c5126c30_h.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Neptune",
					"Moon"
				],
				satellites: 0,
				date: "2021-02-01",
				datetime: "2021-02-01T11:30:00Z",
				email: "triton@example.com",
				author: "retrograde_orbit_specialist",
				parent: 8,
				level: 2
			},
			{
				id: 10,
				name: {
					title: "Nereid",
					description: "Irregular moon of Neptune"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Nereid-Voyager2.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Neptune",
					"Moon"
				],
				satellites: 0,
				date: "2020-02-02",
				datetime: "2020-02-02T15:45:30Z",
				email: "nereid@example.com",
				author: "outer_solar_system_voyager_mission_director",
				parent: 8,
				level: 2
			},
			{
				id: 11,
				name: {
					title: "Proteus",
					description: "Second-largest moon of Neptune"
				},
				image: "https://live.staticflickr.com/65535/50727825808_bf427e007b_c.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Neptune",
					"Moon"
				],
				satellites: 0,
				date: "2019-02-03",
				datetime: "2019-02-03T09:20:15Z",
				email: "proteus@example.com",
				author: "space_observer",
				parent: 8,
				level: 2
			},
			{
				id: 12,
				name: {
					title: "Mercury",
					description: "Terrestrial planet in the Solar system"
				},
				image: "https://live.staticflickr.com/813/40199101735_e5e92ffd11_z.jpg",
				type: "Terrestrial",
				isPlanet: true,
				categories: [
					"Terrestrial",
					"Planet",
					"Solar system"
				],
				satellites: 0,
				date: "2020-01-02",
				datetime: "2020-01-02T13:05:45Z",
				email: "mercury@example.com",
				author: "solar_wind_scientist",
				parent: 38,
				level: 1
			},
			{
				id: 13,
				name: {
					title: "Venus",
					description: "La planète Vénus"
				},
				image: "https://live.staticflickr.com/8025/7544560662_900e717727_z.jpg",
				type: "Terrestrial",
				isPlanet: true,
				categories: [
					"Terrestrial",
					"Planet",
					"Solar system"
				],
				satellites: 0,
				date: "2020-01-02",
				datetime: "2020-01-02T08:30:12Z",
				email: "venus@example.com",
				author: "atmospheric_chemistry_expert",
				parent: 38,
				level: 1
			},
			{
				id: 14,
				name: {
					title: "Earth",
					description: "Terrestrial planet in the Solar system"
				},
				image: "https://live.staticflickr.com/3762/9460163562_964fe6af07_z.jpg",
				type: "Terrestrial",
				isPlanet: true,
				categories: [
					"Terrestrial",
					"Planet",
					"Solar system",
					"Earth"
				],
				satellites: 1,
				date: "2023-01-03",
				datetime: "2023-01-03T18:15:30Z",
				email: "earth@example.com",
				author: "planetary_geologist",
				parent: 38,
				level: 1
			},
			{
				id: 15,
				name: {
					title: "Mars",
					description: "Terrestrial planet in the Solar system"
				},
				image: "https://live.staticflickr.com/8151/7651156426_e047f4d219_z.jpg",
				type: "Terrestrial",
				isPlanet: true,
				categories: [
					"Terrestrial",
					"Planet",
					"Solar system"
				],
				satellites: 2,
				date: "2020-01-01",
				datetime: "2020-01-01T20:45:00Z",
				email: "mars@example.com",
				author: "red_planet_explorer",
				parent: 38,
				level: 1
			},
			{
				id: 16,
				name: {
					title: "Jupiter",
					description: "Gas giant in the Solar system"
				},
				image: "https://live.staticflickr.com/2853/9458010071_6e6fc41408_z.jpg",
				type: "Gas giant",
				isPlanet: true,
				categories: [
					"Solar system",
					"Planet",
					"Gas giant"
				],
				satellites: 97,
				date: "2017-01-01",
				datetime: "2017-01-01T00:01:00Z",
				email: "jupiter@example.com",
				author: "gas_giant_meteorologist",
				parent: 38,
				level: 1
			},
			{
				id: 17,
				name: {
					title: "Saturn",
					description: "Gas giant in the Solar system"
				},
				image: "https://live.staticflickr.com/5524/9464658509_fc2d83dff5_z.jpg",
				type: "Gas giant",
				isPlanet: true,
				categories: [
					"Gas giant",
					"Solar system",
					"Planet"
				],
				satellites: 274,
				date: "2020-02-01",
				datetime: "2020-02-01T00:02:00Z",
				email: "saturn@example.com",
				author: "ring_system_analyst",
				parent: 38,
				level: 1
			},
			{
				id: 18,
				name: {
					title: "Uranus",
					description: "Ice giant in the Solar system"
				},
				image: "https://live.staticflickr.com/65535/5553350875_3072df91e2_c.jpg",
				type: "Ice giant",
				isPlanet: true,
				categories: [
					"Planet",
					"Ice giant",
					"Solar system"
				],
				satellites: 28,
				date: "2020-03-01",
				datetime: "2020-03-01T10:15:20Z",
				email: "uranus@example.com",
				author: "axial_tilt_researcher",
				parent: 38,
				level: 1
			},
			{
				id: 19,
				name: {
					title: "TheRoguePlanetWithAVeryLongNameToTestTitleOverflow",
					description: "A long unbroken title, used to check that layouts overflow instead of breaking."
				},
				image: "https://live.staticflickr.com/1357/935805705_119635028c_b.jpg",
				type: "Rogue planet",
				isPlanet: true,
				categories: ["Planet", "Rogue planet"],
				satellites: 0,
				date: "2020-03-01",
				datetime: "2020-03-01T10:15:20Z",
				email: "longunbrokentitle@example.com",
				author: "author_handle_long_enough_to_test_overflow",
				parent: null,
				level: 0
			},
			{
				id: 20,
				name: {
					title: "Titan",
					description: "Largest moon of Saturn"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Titan_in_true_color_by_Kevin_M._Gill.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Saturn",
					"Moon"
				],
				satellites: 0,
				date: "2022-02-15",
				datetime: "2022-02-15T08:30:00Z",
				email: "titan@example.com",
				author: "saturn_system_researcher",
				parent: 17,
				level: 2
			},
			{
				id: 21,
				name: {
					title: "Enceladus",
					description: "Icy moon of Saturn with geysers"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/PIA17202_-_Approaching_Enceladus.jpg/960px-PIA17202_-_Approaching_Enceladus.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Saturn",
					"Moon"
				],
				satellites: 0,
				date: "2023-03-20",
				datetime: "2023-03-20T11:45:00Z",
				email: "enceladus@example.com",
				author: "cryovolcanism_observer",
				parent: 17,
				level: 2
			},
			{
				id: 22,
				name: {
					title: "Mimas",
					description: "Death Star moon of Saturn"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Mimas_Cassini.jpg/960px-Mimas_Cassini.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Saturn",
					"Moon"
				],
				satellites: 0,
				date: "2021-07-12",
				datetime: "2021-07-12T15:20:00Z",
				email: "mimas@example.com",
				author: "impact_crater_analyst",
				parent: 17,
				level: 2
			},
			{
				id: 23,
				name: {
					title: "Charon",
					description: "Largest moon of Pluto"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Charon_in_True_Color_-_High-Res.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Pluto",
					"Moon"
				],
				satellites: 0,
				date: "2020-09-25",
				datetime: "2020-09-25T13:15:00Z",
				email: "charon@example.com",
				author: "pluto_system_mapper",
				parent: 39,
				level: 2
			},
			{
				id: 24,
				name: {
					title: "Phobos",
					description: "Larger moon of Mars"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Phobos_colour_2008.jpg/960px-Phobos_colour_2008.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Mars",
					"Moon"
				],
				satellites: 0,
				date: "2019-06-14",
				datetime: "2019-06-14T07:45:00Z",
				email: "phobos@example.com",
				author: "martian_surface_cartographer",
				parent: 15,
				level: 2
			},
			{
				id: 25,
				name: {
					title: "Deimos",
					description: "Smaller moon of Mars"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/8/86/NASA-Deimos-MarsMoon-20090221.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Mars",
					"Moon"
				],
				satellites: 0,
				date: "2018-11-30",
				datetime: "2018-11-30T16:00:00Z",
				email: "deimos@example.com",
				author: "small_moon_surveyor",
				parent: 15,
				level: 2
			},
			{
				id: 26,
				name: {
					title: "Rhea",
					description: "Second largest moon of Saturn"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/PIA07763_Rhea_full_globe5.jpg/960px-PIA07763_Rhea_full_globe5.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Saturn",
					"Moon"
				],
				satellites: 0,
				date: "2022-08-19",
				datetime: "2022-08-19T10:30:00Z",
				email: "rhea@example.com",
				author: "saturn_geology_specialist",
				parent: 17,
				level: 2
			},
			{
				id: 27,
				name: {
					title: "Iapetus",
					description: "Two-toned moon of Saturn"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Iapetus_trailing_natural_color.jpg/960px-Iapetus_trailing_natural_color.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Saturn",
					"Moon"
				],
				satellites: 0,
				date: "2023-01-22",
				datetime: "2023-01-22T14:20:00Z",
				email: "iapetus@example.com",
				author: "two_tone_surface_expert",
				parent: 17,
				level: 2
			},
			{
				id: 28,
				name: {
					title: "Dione",
					description: "Icy moon of Saturn"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Dione_in_natural_light_%28cropped%29.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Saturn",
					"Moon"
				],
				satellites: 0,
				date: "2021-04-17",
				datetime: "2021-04-17T12:00:00Z",
				email: "dione@example.com",
				author: "icy_surface_geochemist",
				parent: 17,
				level: 2
			},
			{
				id: 29,
				name: {
					title: "Tethys",
					description: "Mid-sized moon of Saturn"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tethys_-_Rev_15_%2837267740632%29.png/960px-Tethys_-_Rev_15_%2837267740632%29.png",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Saturn",
					"Moon"
				],
				satellites: 0,
				date: "2020-12-05",
				datetime: "2020-12-05T09:40:00Z",
				email: "tethys@example.com",
				author: "middle_satellite_researcher",
				parent: 17,
				level: 2
			},
			{
				id: 30,
				name: {
					title: "Miranda",
					description: "Unusual moon of Uranus"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Miranda_mosaic_in_color_-_Voyager_2.png/960px-Miranda_mosaic_in_color_-_Voyager_2.png",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Uranus",
					"Moon"
				],
				satellites: 0,
				date: "2024-02-28",
				datetime: "2024-02-28T11:15:00Z",
				email: "miranda@example.com",
				author: "uranian_moon_geologist",
				parent: 18,
				level: 2
			},
			{
				id: 31,
				name: {
					title: "Ariel",
					description: "Brightest moon of Uranus"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Ariel_in_monochrome.jpg/960px-Ariel_in_monochrome.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Uranus",
					"Moon"
				],
				satellites: 0,
				date: "2023-09-10",
				datetime: "2023-09-10T08:25:00Z",
				email: "ariel@example.com",
				author: "planetary_reflectance_specialist",
				parent: 18,
				level: 2
			},
			{
				id: 32,
				name: {
					title: "Umbriel",
					description: "Dark moon of Uranus"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/PIA00040_Umbrielx2.47.jpg/960px-PIA00040_Umbrielx2.47.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Uranus",
					"Moon"
				],
				satellites: 0,
				date: "2022-05-03",
				datetime: "2022-05-03T15:50:00Z",
				email: "umbriel@example.com",
				author: "dark_surface_researcher",
				parent: 18,
				level: 2
			},
			{
				id: 33,
				name: {
					title: "Titania",
					description: "Largest moon of Uranus"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Titania_-_Jan_24_1986_%2822689891350%29.jpg/960px-Titania_-_Jan_24_1986_%2822689891350%29.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Uranus",
					"Moon"
				],
				satellites: 0,
				date: "2021-10-18",
				datetime: "2021-10-18T13:35:00Z",
				email: "titania@example.com",
				author: "uranian_system_surveyor",
				parent: 18,
				level: 2
			},
			{
				id: 34,
				name: {
					title: "Oberon",
					description: "Outermost major moon of Uranus"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Oberon_in_true_color_by_Kevin_M._Gill.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Uranus",
					"Moon"
				],
				satellites: 0,
				date: "2020-07-22",
				datetime: "2020-07-22T10:05:00Z",
				email: "oberon@example.com",
				author: "outer_uranian_orbitalist",
				parent: 18,
				level: 2
			},
			{
				id: 35,
				name: {
					title: "Ceres",
					description: "Largest object in the asteroid belt"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Ceres_-_RC3_-_Haulani_Crater_%2822381131691%29_%28cropped%29.jpg/960px-Ceres_-_RC3_-_Haulani_Crater_%2822381131691%29_%28cropped%29.jpg",
				type: "Dwarf planet",
				isPlanet: false,
				categories: [
					"Solar system",
					"Dwarf planet",
					"Asteroid belt"
				],
				satellites: 0,
				date: "2024-08-14",
				datetime: "2024-08-14T16:40:00Z",
				email: "ceres@example.com",
				author: "asteroid_belt_specialist",
				parent: 38,
				level: 1
			},
			{
				id: 36,
				name: {
					title: "Makemake",
					description: "Reddish dwarf planet"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Makemake_and_its_moon.jpg/960px-Makemake_and_its_moon.jpg",
				type: "Dwarf planet",
				isPlanet: false,
				categories: [
					"Solar system",
					"Dwarf planet",
					"Trans-Neptunian"
				],
				satellites: 1,
				date: "2022-03-29",
				datetime: "2022-03-29T12:55:00Z",
				email: "makemake@example.com",
				author: "trans_neptunian_researcher",
				parent: 38,
				level: 1
			},
			{
				id: 37,
				name: {
					title: "Haumea",
					description: "Elongated dwarf planet"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Haumea_Hubble.png",
				type: "Dwarf planet",
				isPlanet: false,
				categories: [
					"Solar system",
					"Dwarf planet",
					"Trans-Neptunian"
				],
				satellites: 2,
				date: "2021-11-11",
				datetime: "2021-11-11T09:10:00Z",
				email: "haumea@example.com",
				author: "dwarf_planet_dynamics_specialist",
				parent: 38,
				level: 1
			},
			{
				id: 38,
				name: {
					title: "Sun",
					description: "The star at the center of the Solar system"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/960px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg",
				type: "Star",
				isPlanet: false,
				categories: ["Solar system", "Star"],
				satellites: 8,
				date: "2021-08-21",
				datetime: "2021-08-21T09:00:00Z",
				email: "sun@example.com",
				author: "solar_wind_scientist",
				parent: null,
				level: 0
			},
			{
				id: 39,
				name: {
					title: "Pluto",
					description: "Dwarf planet in the Kuiper belt"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/960px-Pluto_in_True_Color_-_High-Res.jpg",
				type: "Dwarf planet",
				isPlanet: false,
				categories: [
					"Solar system",
					"Dwarf planet",
					"Trans-Neptunian"
				],
				satellites: 5,
				date: "2019-07-14",
				datetime: "2019-07-14T11:50:00Z",
				email: "pluto@example.com",
				author: "pluto_system_mapper",
				parent: 38,
				level: 1
			}
		];
		actions = [{
			id: "delete",
			label: "Delete…",
			icon: trash_default,
			modalHeader: (items) => items.length > 1 ? `Delete ${items.length} items` : `Delete ${items[0].name.title}`,
			modalFocusOnMount: "firstContentElement",
			supportsBulk: true,
			RenderModal: ({ items, closeModal }) => {
				const label = items.length > 1 ? `Are you sure you want to delete ${items.length} items?` : `Are you sure you want to delete "${items[0].name.title}"?`;
				return /* @__PURE__ */ (0, import_jsx_dev_runtime$12.jsxDEV)(Stack, {
					direction: "column",
					gap: "xl",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$12.jsxDEV)(component_default, { children: label }, void 0, false, {
						fileName: _jsxFileName$12,
						lineNumber: 757,
						columnNumber: 6
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$12.jsxDEV)(Stack, {
						direction: "row",
						gap: "sm",
						justify: "right",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$12.jsxDEV)(button_default, {
							__next40pxDefaultSize: true,
							variant: "tertiary",
							onClick: closeModal,
							children: "Cancel"
						}, void 0, false, {
							fileName: _jsxFileName$12,
							lineNumber: 759,
							columnNumber: 7
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$12.jsxDEV)(button_default, {
							__next40pxDefaultSize: true,
							variant: "primary",
							onClick: closeModal,
							children: "Delete"
						}, void 0, false, {
							fileName: _jsxFileName$12,
							lineNumber: 766,
							columnNumber: 7
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$12,
						lineNumber: 758,
						columnNumber: 6
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$12,
					lineNumber: 756,
					columnNumber: 5
				}, void 0);
			}
		}, {
			id: "view",
			label: "View",
			isPrimary: true,
			callback: (items) => {
				const item = items[0];
				alert(`View item: "${item.name.title}"\n\n${item.name.description}`);
			}
		}];
		fields = [
			{
				label: "Image",
				id: "image",
				type: "media",
				header: /* @__PURE__ */ (0, import_jsx_dev_runtime$12.jsxDEV)(Stack, {
					direction: "row",
					gap: "xs",
					justify: "start",
					align: "center",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$12.jsxDEV)(icon_default, { icon: image_default }, void 0, false, {
						fileName: _jsxFileName$12,
						lineNumber: 799,
						columnNumber: 5
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$12.jsxDEV)("span", {
						style: { minWidth: 0 },
						children: "Image"
					}, void 0, false, {
						fileName: _jsxFileName$12,
						lineNumber: 800,
						columnNumber: 5
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$12,
					lineNumber: 798,
					columnNumber: 4
				}, void 0),
				render: ({ item }) => {
					return /* @__PURE__ */ (0, import_jsx_dev_runtime$12.jsxDEV)("img", {
						src: item.image,
						alt: ""
					}, void 0, false, {
						fileName: _jsxFileName$12,
						lineNumber: 804,
						columnNumber: 11
					}, void 0);
				}
			},
			{
				label: "Title",
				id: "title",
				type: "text",
				enableHiding: true,
				enableGlobalSearch: true,
				filterBy: { operators: [
					"contains",
					"notContains",
					"startsWith"
				] },
				isValid: { required: true },
				getValue: ({ item }) => item.name.title,
				setValue: ({ value }) => ({ name: { title: value } })
			},
			{
				id: "date",
				label: "Date",
				type: "date"
			},
			{
				id: "datetime",
				label: "Datetime",
				type: "datetime"
			},
			{
				label: "Type",
				id: "type",
				enableHiding: false,
				elements: [
					{
						value: "Star",
						label: "Star"
					},
					{
						value: "Satellite",
						label: "Satellite"
					},
					{
						value: "Ice giant",
						label: "Ice giant"
					},
					{
						value: "Terrestrial",
						label: "Terrestrial"
					},
					{
						value: "Gas giant",
						label: "Gas giant"
					},
					{
						value: "Dwarf planet",
						label: "Dwarf planet"
					},
					{
						value: "Asteroid",
						label: "Asteroid"
					},
					{
						value: "Comet",
						label: "Comet"
					},
					{
						value: "Kuiper belt object",
						label: "Kuiper belt object"
					},
					{
						value: "Protoplanet",
						label: "Protoplanet"
					},
					{
						value: "Planetesimal",
						label: "Planetesimal"
					},
					{
						value: "Minor planet",
						label: "Minor planet"
					},
					{
						value: "Trans-Neptunian object",
						label: "Trans-Neptunian object"
					},
					{
						value: "Extreme Trans-Neptunian Scattered Disc Object",
						label: "Extreme Trans-Neptunian Scattered Disc Object"
					}
				],
				filterBy: { operators: ["is", "isNot"] }
			},
			{
				id: "isPlanet",
				label: "Is Planet",
				type: "boolean",
				setValue: ({ value }) => ({ isPlanet: value === "true" }),
				elements: [{
					value: true,
					label: "True"
				}, {
					value: false,
					label: "False"
				}]
			},
			{
				label: "Satellites",
				id: "satellites",
				type: "integer",
				enableSorting: true
			},
			{
				label: "Parent",
				id: "parent",
				type: "text",
				elements: data$1.filter(({ id }) => data$1.some(({ parent }) => parent === id)).map(({ id, name }) => ({
					value: id,
					label: name.title
				})),
				filterBy: { operators: ["is", "isNot"] }
			},
			{
				label: "Description",
				id: "description",
				type: "text",
				enableSorting: false,
				enableGlobalSearch: true,
				filterBy: { operators: [
					"contains",
					"notContains",
					"startsWith"
				] },
				getValue: ({ item }) => item.name.description,
				setValue: ({ value }) => ({ name: { description: value } })
			},
			{
				label: "Email",
				id: "email",
				type: "email"
			},
			{
				label: "Categories",
				id: "categories",
				header: /* @__PURE__ */ (0, import_jsx_dev_runtime$12.jsxDEV)(Stack, {
					direction: "row",
					gap: "xs",
					justify: "start",
					align: "center",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$12.jsxDEV)(icon_default, { icon: category_default }, void 0, false, {
						fileName: _jsxFileName$12,
						lineNumber: 923,
						columnNumber: 5
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$12.jsxDEV)("span", {
						style: { minWidth: 0 },
						children: "Categories"
					}, void 0, false, {
						fileName: _jsxFileName$12,
						lineNumber: 924,
						columnNumber: 5
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$12,
					lineNumber: 922,
					columnNumber: 4
				}, void 0),
				elements: [
					{
						value: "Solar system",
						label: "Solar system"
					},
					{
						value: "Satellite",
						label: "Satellite"
					},
					{
						value: "Moon",
						label: "Moon"
					},
					{
						value: "Earth",
						label: "Earth"
					},
					{
						value: "Jupiter",
						label: "Jupiter"
					},
					{
						value: "Planet",
						label: "Planet"
					},
					{
						value: "Ice giant",
						label: "Ice giant"
					},
					{
						value: "Terrestrial",
						label: "Terrestrial"
					},
					{
						value: "Gas giant",
						label: "Gas giant"
					},
					{
						value: "Extreme Outer Solar System Trans-Neptunian Region",
						label: "Extreme Outer Solar System Trans-Neptunian Region"
					}
				],
				type: "array",
				enableGlobalSearch: true
			},
			{
				label: "Author",
				id: "author",
				type: "text",
				enableHiding: false,
				enableGlobalSearch: true,
				elements: [
					{
						value: "lunarian_observer",
						label: "lunarian_observer"
					},
					{
						value: "galilean_moon_enthusiast_supreme",
						label: "galilean_moon_enthusiast_supreme"
					},
					{
						value: "icy_ocean_explorer",
						label: "icy_ocean_explorer"
					},
					{
						value: "jovian_satellite_researcher",
						label: "jovian_satellite_researcher"
					},
					{
						value: "crater_cartography_specialist",
						label: "crater_cartography_specialist"
					},
					{
						value: "astro_photographer",
						label: "astro_photographer"
					},
					{
						value: "irregular_orbit_analyst",
						label: "irregular_orbit_analyst"
					},
					{
						value: "neptunian_dynamics_professor",
						label: "neptunian_dynamics_professor"
					},
					{
						value: "retrograde_orbit_specialist",
						label: "retrograde_orbit_specialist"
					},
					{
						value: "outer_solar_system_voyager_mission_director",
						label: "outer_solar_system_voyager_mission_director"
					},
					{
						value: "space_observer",
						label: "space_observer"
					},
					{
						value: "solar_wind_scientist",
						label: "solar_wind_scientist"
					},
					{
						value: "atmospheric_chemistry_expert",
						label: "atmospheric_chemistry_expert"
					},
					{
						value: "planetary_geologist",
						label: "planetary_geologist"
					},
					{
						value: "red_planet_explorer",
						label: "red_planet_explorer"
					},
					{
						value: "gas_giant_meteorologist",
						label: "gas_giant_meteorologist"
					},
					{
						value: "ring_system_analyst",
						label: "ring_system_analyst"
					},
					{
						value: "axial_tilt_researcher",
						label: "axial_tilt_researcher"
					},
					{
						value: "author_handle_long_enough_to_test_overflow",
						label: "author_handle_long_enough_to_test_overflow"
					}
				],
				filterBy: { operators: ["isAny", "isNone"] }
			}
		];
	})))();
}
//#endregion
//#region ../packages/dataviews/src/dataviews/stories/layout-table.tsx
var import_jsx_dev_runtime$11, _jsxFileName$11, LayoutTableComponent$2;
function init_layout_table() {
	return (init_layout_table = __esmMin((() => {
		init_react();
		init_dataviews();
		init_constants();
		init_filter_sort_and_paginate();
		init_fixtures();
		import_jsx_dev_runtime$11 = require_jsx_dev_runtime();
		_jsxFileName$11 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-table.tsx";
		LayoutTableComponent$2 = ({ backgroundColor, hasClickableItems = true, groupBy = false, groupByLabel = true, perPageSizes = [
			10,
			25,
			50,
			100
		], showMedia = true }) => {
			const [view, setView] = (0, import_react.useState)({
				type: LAYOUT_TABLE,
				search: "",
				page: 1,
				perPage: 10,
				layout: {},
				filters: [],
				fields: ["categories"],
				titleField: "title",
				descriptionField: "description",
				mediaField: "image",
				showMedia
			});
			(0, import_react.useEffect)(() => {
				setView((prevView) => {
					return {
						...prevView,
						groupBy: groupBy ? {
							field: "type",
							direction: "asc",
							showLabel: groupByLabel
						} : void 0,
						showMedia
					};
				});
			}, [
				groupBy,
				groupByLabel,
				showMedia
			]);
			const { data: shownData, paginationInfo } = (0, import_react.useMemo)(() => {
				return filterSortAndPaginate(data$1, view, fields);
			}, [view]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$11.jsxDEV)("div", {
				style: {
					height: "100%",
					"--wp-dataviews-color-background": backgroundColor
				},
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$11.jsxDEV)(DataViewsSubComponents, {
					getItemId: (item) => item.id.toString(),
					paginationInfo,
					data: shownData,
					view,
					fields,
					onChangeView: setView,
					actions,
					renderItemLink: ({ item, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime$11.jsxDEV)("button", {
						style: {
							background: "none",
							border: "none",
							padding: 0
						},
						onClick: () => {
							alert("Clicked: " + item.name.title);
						},
						...props
					}, void 0, false, {
						fileName: _jsxFileName$11,
						lineNumber: 77,
						columnNumber: 6
					}, void 0),
					isItemClickable: () => hasClickableItems,
					defaultLayouts: { [LAYOUT_TABLE]: true },
					config: { perPageSizes }
				}, void 0, false, {
					fileName: _jsxFileName$11,
					lineNumber: 63,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$11,
				lineNumber: 57,
				columnNumber: 3
			}, void 0);
		};
		try {
			LayoutTableComponent$2.__docgenInfo = {
				"description": "",
				"displayName": "LayoutTableComponent",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-table.tsx",
				"methods": [],
				"props": {
					"backgroundColor": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-table.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "backgroundColor",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"hasClickableItems": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-table.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "hasClickableItems",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"groupBy": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-table.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "groupBy",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"groupByLabel": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-table.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "groupByLabel",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"perPageSizes": {
						"defaultValue": { "value": "[ 10, 25, 50, 100 ]" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-table.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "perPageSizes",
						"required": false,
						"tags": {},
						"type": { "name": "number[]" }
					},
					"showMedia": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-table.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "showMedia",
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
//#region ../packages/dataviews/src/dataviews/stories/layout-grid.tsx
var import_jsx_dev_runtime$10, _jsxFileName$10, LayoutTableComponent$1;
function init_layout_grid() {
	return (init_layout_grid = __esmMin((() => {
		init_react();
		init_dataviews();
		init_constants();
		init_filter_sort_and_paginate();
		init_fixtures();
		import_jsx_dev_runtime$10 = require_jsx_dev_runtime();
		_jsxFileName$10 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-grid.tsx";
		LayoutTableComponent$1 = ({ backgroundColor, hasClickableItems = true, groupBy = false, groupByLabel = true, mediaFit = "cover", mediaFitControl = true, perPageSizes = [
			10,
			25,
			50,
			100
		], showMedia = true }) => {
			const [view, setView] = (0, import_react.useState)({
				type: LAYOUT_GRID,
				search: "",
				page: 1,
				perPage: 10,
				filters: [],
				fields: ["categories"],
				titleField: "title",
				descriptionField: "description",
				mediaField: "image",
				showMedia,
				layout: { mediaFit }
			});
			(0, import_react.useEffect)(() => {
				setView((prevView) => {
					return {
						...prevView,
						groupBy: groupBy ? {
							field: "type",
							direction: "asc",
							showLabel: groupByLabel
						} : void 0,
						showMedia,
						layout: {
							...prevView.layout,
							mediaFit
						}
					};
				});
			}, [
				groupBy,
				groupByLabel,
				mediaFit,
				showMedia
			]);
			const { data: shownData, paginationInfo } = (0, import_react.useMemo)(() => {
				return filterSortAndPaginate(data$1, view, fields);
			}, [view]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$10.jsxDEV)("div", {
				style: {
					height: "100%",
					"--wp-dataviews-color-background": backgroundColor
				},
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$10.jsxDEV)(DataViewsSubComponents, {
					getItemId: (item) => item.id.toString(),
					paginationInfo,
					data: shownData,
					view,
					fields,
					onChangeView: setView,
					actions,
					renderItemLink: ({ item, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime$10.jsxDEV)("button", {
						style: {
							background: "none",
							border: "none",
							padding: 0
						},
						onClick: () => {
							alert("Clicked: " + item.name.title);
						},
						...props
					}, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 84,
						columnNumber: 6
					}, void 0),
					isItemClickable: () => hasClickableItems,
					defaultLayouts: { [LAYOUT_GRID]: true },
					config: {
						perPageSizes,
						mediaFitControl
					}
				}, void 0, false, {
					fileName: _jsxFileName$10,
					lineNumber: 70,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$10,
				lineNumber: 64,
				columnNumber: 3
			}, void 0);
		};
		try {
			LayoutTableComponent$1.__docgenInfo = {
				"description": "",
				"displayName": "LayoutTableComponent",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-grid.tsx",
				"methods": [],
				"props": {
					"backgroundColor": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-grid.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "backgroundColor",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"hasClickableItems": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-grid.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "hasClickableItems",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"groupBy": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-grid.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "groupBy",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"groupByLabel": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-grid.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "groupByLabel",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"mediaFit": {
						"defaultValue": { "value": "cover" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-grid.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "mediaFit",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "MediaFit",
							"value": [{ "value": "\"cover\"" }, { "value": "\"contain\"" }]
						}
					},
					"mediaFitControl": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-grid.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "mediaFitControl",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"perPageSizes": {
						"defaultValue": { "value": "[ 10, 25, 50, 100 ]" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-grid.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "perPageSizes",
						"required": false,
						"tags": {},
						"type": { "name": "number[]" }
					},
					"showMedia": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-grid.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "showMedia",
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
//#region ../packages/dataviews/src/dataviews/stories/layout-list.tsx
var import_jsx_dev_runtime$9, _jsxFileName$9, LayoutTableComponent;
function init_layout_list() {
	return (init_layout_list = __esmMin((() => {
		init_react();
		init_dataviews();
		init_constants();
		init_filter_sort_and_paginate();
		init_fixtures();
		import_jsx_dev_runtime$9 = require_jsx_dev_runtime();
		_jsxFileName$9 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-list.tsx";
		LayoutTableComponent = ({ backgroundColor, fullWidth = false, hasClickableItems = true, groupBy = false, groupByLabel = true, perPageSizes = [
			10,
			25,
			50,
			100
		], showMedia = true }) => {
			const [view, setView] = (0, import_react.useState)({
				type: LAYOUT_LIST,
				search: "",
				page: 1,
				perPage: 10,
				filters: [],
				fields: ["categories"],
				titleField: "title",
				descriptionField: "description",
				mediaField: "image",
				showMedia
			});
			(0, import_react.useEffect)(() => {
				setView((prevView) => {
					return {
						...prevView,
						groupBy: groupBy ? {
							field: "type",
							direction: "asc",
							showLabel: groupByLabel
						} : void 0,
						showMedia
					};
				});
			}, [
				groupBy,
				groupByLabel,
				showMedia
			]);
			const { data: shownData, paginationInfo } = (0, import_react.useMemo)(() => {
				return filterSortAndPaginate(data$1, view, fields);
			}, [view]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$9.jsxDEV)("div", {
				style: {
					height: "100%",
					maxWidth: fullWidth ? void 0 : "400px",
					"--wp-dataviews-color-background": backgroundColor
				},
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$9.jsxDEV)(DataViewsSubComponents, {
					getItemId: (item) => item.id.toString(),
					paginationInfo,
					data: shownData,
					view,
					fields,
					onChangeView: setView,
					actions,
					renderItemLink: ({ item, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime$9.jsxDEV)("button", {
						style: {
							background: "none",
							border: "none",
							padding: 0
						},
						onClick: () => {
							alert("Clicked: " + item.name.title);
						},
						...props
					}, void 0, false, {
						fileName: _jsxFileName$9,
						lineNumber: 79,
						columnNumber: 6
					}, void 0),
					isItemClickable: () => hasClickableItems,
					defaultLayouts: { [LAYOUT_LIST]: true },
					config: { perPageSizes }
				}, void 0, false, {
					fileName: _jsxFileName$9,
					lineNumber: 65,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$9,
				lineNumber: 58,
				columnNumber: 3
			}, void 0);
		};
		try {
			LayoutTableComponent.__docgenInfo = {
				"description": "",
				"displayName": "LayoutTableComponent",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-list.tsx",
				"methods": [],
				"props": {
					"backgroundColor": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-list.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "backgroundColor",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"fullWidth": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-list.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "fullWidth",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"hasClickableItems": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-list.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "hasClickableItems",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"groupBy": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-list.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "groupBy",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"groupByLabel": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-list.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "groupByLabel",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"perPageSizes": {
						"defaultValue": { "value": "[ 10, 25, 50, 100 ]" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-list.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "perPageSizes",
						"required": false,
						"tags": {},
						"type": { "name": "number[]" }
					},
					"showMedia": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-list.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "showMedia",
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
//#region ../packages/dataviews/src/dataviews/stories/layout-custom.tsx
/**
* Poster/hero style layout that displays items as large image cards
* with overlaid text content.
*/
function PosterGrid({ items }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)("div", {
		style: {
			display: "grid",
			gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
			gap: "16px",
			padding: "16px 0"
		},
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)("div", {
			style: {
				position: "relative",
				aspectRatio: "4 / 3",
				borderRadius: "8px",
				overflow: "hidden",
				backgroundImage: `url(${item.image})`,
				backgroundSize: "cover",
				backgroundPosition: "center"
			},
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)("div", {
				style: {
					position: "absolute",
					bottom: 0,
					left: 0,
					right: 0,
					padding: "48px 16px 16px",
					background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
					color: "white"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)("h3", {
						style: {
							margin: "0 0 4px",
							fontSize: "18px",
							fontWeight: "var(--wpds-typography-font-weight-emphasis, 600)",
							textShadow: "0 1px 2px rgba(0,0,0,0.5)"
						},
						children: item.name.title
					}, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 47,
						columnNumber: 7
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)("p", {
						style: {
							margin: "0 0 8px",
							fontSize: "13px",
							opacity: .9,
							overflow: "hidden",
							textOverflow: "ellipsis",
							whiteSpace: "nowrap"
						},
						children: item.name.description
					}, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 58,
						columnNumber: 7
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)("div", {
						style: {
							display: "flex",
							gap: "6px"
						},
						children: item.categories.slice(0, 2).map((cat) => /* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)("span", {
							style: {
								fontSize: "11px",
								padding: "2px 8px",
								borderRadius: "4px",
								backgroundColor: "rgba(255,255,255,0.2)"
							},
							children: cat
						}, cat, false, {
							fileName: _jsxFileName$8,
							lineNumber: 72,
							columnNumber: 9
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 70,
						columnNumber: 7
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$8,
				lineNumber: 35,
				columnNumber: 6
			}, this)
		}, item.id, false, {
			fileName: _jsxFileName$8,
			lineNumber: 23,
			columnNumber: 5
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName$8,
		lineNumber: 14,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$8, _jsxFileName$8, LayoutCustomComponent;
function init_layout_custom() {
	return (init_layout_custom = __esmMin((() => {
		init_react();
		init_dataviews();
		init_filter_sort_and_paginate();
		init_fixtures();
		init_constants();
		import_jsx_dev_runtime$8 = require_jsx_dev_runtime();
		_jsxFileName$8 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-custom.tsx";
		LayoutCustomComponent = ({ containerHeight }) => {
			const [view, setView] = (0, import_react.useState)({
				type: LAYOUT_TABLE,
				search: "",
				page: 1,
				perPage: 6,
				filters: [],
				fields: []
			});
			const { data: processedData, paginationInfo } = (0, import_react.useMemo)(() => {
				return filterSortAndPaginate(data$1, view, fields);
			}, [view]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)(DataViewsSubComponents, {
				getItemId: (item) => item.id.toString(),
				paginationInfo,
				data: processedData,
				view,
				fields,
				onChangeView: setView,
				defaultLayouts: { table: true },
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)("div", {
					style: {
						padding: "2px",
						height: containerHeight
					},
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)(DataViewsSubComponents.Search, {}, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 130,
						columnNumber: 5
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)(PosterGrid, { items: processedData }, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 131,
						columnNumber: 5
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 129,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)(DataViewsSubComponents.Pagination, {}, void 0, false, {
					fileName: _jsxFileName$8,
					lineNumber: 133,
					columnNumber: 4
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$8,
				lineNumber: 120,
				columnNumber: 3
			}, void 0);
		};
		try {
			LayoutCustomComponent.__docgenInfo = {
				"description": "Demonstrates a custom poster/hero layout using free composition.\n\nThis story shows how to:\n- Use `<DataViews>` as a context provider with custom children\n- Render a completely custom layout (poster grid) instead of `<DataViews.Layout />`\n- Still leverage DataViews sub-components for search and pagination",
				"displayName": "LayoutCustomComponent",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-custom.tsx",
				"methods": [],
				"props": { "containerHeight": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/layout-custom.tsx",
						"name": "TypeLiteral"
					}],
					"description": "",
					"name": "containerHeight",
					"required": true,
					"tags": {},
					"type": { "name": "string" }
				} },
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/dataviews/stories/hierarchical-levels.tsx
/**
* Simulates what the WordPress REST API does for `orderby_hierarchy` (see
* Gutenberg_Hierarchical_Sort in lib/experimental): filter and sort the whole
* list first, then order it depth-first so that each item sits right below
* its parent, then paginate.
*
* Siblings keep the sort order. Items whose parent is not in the filtered
* list come after all the root trees, grouped by parent, and keep their own
* level so they stay indented as deep as they really are.
*/
function sortByHierarchy(items, view) {
	const { data: sortedItems } = filterSortAndPaginate(items, {
		...view,
		page: void 0,
		perPage: void 0
	}, fields);
	let orderedItems = sortedItems;
	if (view.showLevels) {
		const childrenByParent = /* @__PURE__ */ new Map();
		sortedItems.forEach((item) => {
			childrenByParent.set(item.parent, [...childrenByParent.get(item.parent) ?? [], item]);
		});
		orderedItems = [];
		const visit = (parent) => {
			(childrenByParent.get(parent) ?? []).forEach((item) => {
				orderedItems.push(item);
				visit(item.id);
			});
			childrenByParent.delete(parent);
		};
		visit(null);
		Array.from(childrenByParent.keys()).forEach(visit);
	}
	const page = view.page ?? 1;
	const perPage = view.perPage ?? orderedItems.length;
	return {
		data: orderedItems.slice((page - 1) * perPage, page * perPage),
		paginationInfo: {
			totalItems: orderedItems.length,
			totalPages: Math.ceil(orderedItems.length / perPage)
		}
	};
}
var import_jsx_dev_runtime$7, _jsxFileName$7, HierarchicalLevelsComponent;
function init_hierarchical_levels() {
	return (init_hierarchical_levels = __esmMin((() => {
		init_react();
		init_dataviews();
		init_constants();
		init_filter_sort_and_paginate();
		init_fixtures();
		import_jsx_dev_runtime$7 = require_jsx_dev_runtime();
		_jsxFileName$7 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/hierarchical-levels.tsx";
		HierarchicalLevelsComponent = ({ showLevels = true }) => {
			const [view, setView] = (0, import_react.useState)({
				type: LAYOUT_TABLE,
				search: "",
				page: 1,
				perPage: 50,
				layout: {},
				filters: [],
				fields: ["type", "parent"],
				sort: {
					field: "title",
					direction: "asc"
				},
				titleField: "title",
				mediaField: "image",
				showLevels: true
			});
			(0, import_react.useEffect)(() => {
				setView((prevView) => ({
					...prevView,
					showLevels
				}));
			}, [showLevels]);
			const { data, paginationInfo } = sortByHierarchy(data$1, view);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$7.jsxDEV)(DataViewsSubComponents, {
				getItemId: (item) => item.id.toString(),
				getItemLevel: (item) => item.level,
				data,
				paginationInfo,
				view,
				onChangeView: setView,
				fields,
				defaultLayouts: { table: true }
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 95,
				columnNumber: 3
			}, void 0);
		};
		try {
			HierarchicalLevelsComponent.__docgenInfo = {
				"description": "",
				"displayName": "hierarchicallevels",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/hierarchical-levels.tsx",
				"methods": [],
				"props": { "showLevels": {
					"defaultValue": { "value": "true" },
					"declarations": [{
						"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/hierarchical-levels.tsx",
						"name": "TypeLiteral"
					}],
					"description": "",
					"name": "showLevels",
					"required": false,
					"tags": {},
					"type": { "name": "boolean" }
				} },
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/dataviews/stories/infinite-scroll.tsx
var import_jsx_dev_runtime$6, _jsxFileName$6, InfiniteScroll$1;
function init_infinite_scroll() {
	return (init_infinite_scroll = __esmMin((() => {
		init_react();
		init_dataviews();
		init_constants();
		init_filter_sort_and_paginate();
		init_fixtures();
		import_jsx_dev_runtime$6 = require_jsx_dev_runtime();
		_jsxFileName$6 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/infinite-scroll.tsx";
		InfiniteScroll$1 = () => {
			const [view, setView] = (0, import_react.useState)({
				type: LAYOUT_GRID,
				search: "",
				startPosition: 1,
				perPage: 15,
				filters: [],
				fields: ["satellites"],
				titleField: "title",
				descriptionField: "description",
				mediaField: "image",
				infiniteScrollEnabled: true
			});
			const { data: shownData, paginationInfo } = (0, import_react.useMemo)(() => {
				return filterSortAndPaginate(data$1, view, fields);
			}, [view]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(import_jsx_dev_runtime$6.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)("style", { children: `
			.dataviews-wrapper {
				height: 750px;
				overflow: auto;
			}
		` }, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 31,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(DataViewsSubComponents, {
				getItemId: (item) => item.id.toString(),
				paginationInfo,
				data: shownData,
				view,
				fields,
				onChangeView: setView,
				actions,
				defaultLayouts: {
					[LAYOUT_TABLE]: true,
					[LAYOUT_GRID]: true,
					[LAYOUT_LIST]: true,
					[LAYOUT_ACTIVITY]: true
				}
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 37,
				columnNumber: 4
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 30,
				columnNumber: 3
			}, void 0);
		};
	})))();
}
//#endregion
//#region ../packages/dataviews/src/dataviews/stories/async-infinite-scroll.tsx
var import_jsx_dev_runtime$5, _jsxFileName$5, data, PAGE, LOAD_DELAY_MS, AsyncInfiniteScroll$1;
function init_async_infinite_scroll() {
	return (init_async_infinite_scroll = __esmMin((() => {
		init_react();
		init_dataviews();
		init_constants();
		init_filter_sort_and_paginate();
		init_fixtures();
		import_jsx_dev_runtime$5 = require_jsx_dev_runtime();
		_jsxFileName$5 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/async-infinite-scroll.tsx";
		data = Array.from({ length: 8 }, (_, batch) => data$1.map((item) => ({
			...item,
			id: item.id + batch * 1e3,
			name: {
				...item.name,
				title: `${item.name.title} #${batch + 1}`
			}
		}))).flat();
		PAGE = 20;
		LOAD_DELAY_MS = 800;
		AsyncInfiniteScroll$1 = () => {
			const [view, setView] = (0, import_react.useState)({
				type: LAYOUT_LIST,
				search: "",
				startPosition: 1,
				perPage: PAGE,
				filters: [],
				fields: ["satellites"],
				titleField: "title",
				descriptionField: "description",
				mediaField: "image",
				infiniteScrollEnabled: true
			});
			const [loadedCount, setLoadedCount] = (0, import_react.useState)(PAGE);
			const [isLoading, setIsLoading] = (0, import_react.useState)(false);
			const startPosition = view.startPosition ?? 1;
			const perPage = view.perPage ?? PAGE;
			const needed = Math.min(startPosition - 1 + perPage, data.length);
			(0, import_react.useEffect)(() => {
				if (needed <= loadedCount) return;
				setIsLoading(true);
				const timer = setTimeout(() => {
					setLoadedCount(needed);
					setIsLoading(false);
				}, LOAD_DELAY_MS);
				return () => clearTimeout(timer);
			}, [needed, loadedCount]);
			const loadedData = (0, import_react.useMemo)(() => data.slice(0, loadedCount), [loadedCount]);
			const { data: shownData, paginationInfo } = (0, import_react.useMemo)(() => filterSortAndPaginate(loadedData, view, fields), [loadedData, view]);
			const serverPaginationInfo = (0, import_react.useMemo)(() => ({
				...paginationInfo,
				totalItems: data.length
			}), [paginationInfo]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)("div", {
				style: { height: "100%" },
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)("style", { children: `
			.dataviews-wrapper {
				height: 100%;
				overflow: auto;
			}
		` }, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 83,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(DataViewsSubComponents, {
					getItemId: (item) => item.id.toString(),
					paginationInfo: serverPaginationInfo,
					data: shownData,
					view,
					fields,
					onChangeView: setView,
					isLoading,
					actions,
					defaultLayouts: {
						[LAYOUT_TABLE]: true,
						[LAYOUT_GRID]: true,
						[LAYOUT_LIST]: true
					}
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 89,
					columnNumber: 4
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 82,
				columnNumber: 3
			}, void 0);
		};
		try {
			AsyncInfiniteScroll$1.__docgenInfo = {
				"description": "A realistic network-backed infinite-scroll consumer: the hook advances\n`view.startPosition`, and the consumer fetches that window asynchronously\n(toggling `isLoading`) while reporting the true server total.",
				"displayName": "asyncinfinitescroll",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/async-infinite-scroll.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/dataviews/stories/with-card.tsx
var import_jsx_dev_runtime$4, _jsxFileName$4, WithCardComponent;
function init_with_card() {
	return (init_with_card = __esmMin((() => {
		init_react();
		init_root(), init_header(), init_title(), init_content(), init_full_bleed();
		init_dataviews();
		init_constants();
		init_filter_sort_and_paginate();
		init_fixtures();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/with-card.tsx";
		WithCardComponent = ({ containerHeight }) => {
			const [view, setView] = (0, import_react.useState)({
				type: LAYOUT_TABLE,
				search: "",
				page: 1,
				perPage: 10,
				layout: {},
				filters: [],
				fields: ["categories"],
				titleField: "title",
				descriptionField: "description",
				mediaField: "image"
			});
			const { data: shownData, paginationInfo } = (0, import_react.useMemo)(() => {
				return filterSortAndPaginate(data$1, view, fields);
			}, [view]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(Root, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(Title, { children: "Header" }, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 37,
				columnNumber: 5
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 36,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(Content, {
				style: {
					height: containerHeight,
					minHeight: 0
				},
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(FullBleed, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(DataViewsSubComponents, {
					getItemId: (item) => item.id.toString(),
					paginationInfo,
					data: shownData,
					view,
					fields,
					onChangeView: setView,
					actions: actions.filter((action) => !action.supportsBulk),
					defaultLayouts: {
						[LAYOUT_TABLE]: true,
						[LAYOUT_GRID]: true,
						[LAYOUT_LIST]: true,
						[LAYOUT_ACTIVITY]: true
					}
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 41,
					columnNumber: 6
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 40,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 39,
				columnNumber: 4
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 35,
				columnNumber: 3
			}, void 0);
		};
		try {
			WithCardComponent.__docgenInfo = {
				"description": "",
				"displayName": "withcard",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/with-card.tsx",
				"methods": [],
				"props": { "containerHeight": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/with-card.tsx",
						"name": "TypeLiteral"
					}],
					"description": "",
					"name": "containerHeight",
					"required": true,
					"tags": {},
					"type": { "name": "string" }
				} },
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/dataviews/stories/style.module.css
var heading, header, layout, empty, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		heading = "_heading_1pd9y_1";
		header = "_header_1pd9y_2";
		layout = "_layout_1pd9y_13";
		empty = "_empty_1pd9y_17";
		style_module_default = {
			heading,
			header,
			layout,
			empty
		};
	})))();
}
//#endregion
//#region ../packages/dataviews/src/dataviews/stories/free-composition.tsx
/**
* Custom composition example
*/
function PlanetOverview({ planets }) {
	const moons = planets.reduce((sum, item) => sum + item.satellites, 0);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(import_jsx_dev_runtime$3.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(component_default$1, {
			className: style_module_default.heading,
			level: 2,
			children: __("Solar System numbers")
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 28,
			columnNumber: 4
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("div", {
			className: style_module_default.header,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Stack, {
				direction: "column",
				gap: "lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Stack, {
						direction: "row",
						justify: "start",
						gap: "sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(DataViewsSubComponents.Search, { label: __("Search content") }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 34,
								columnNumber: 7
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(DataViewsSubComponents.FiltersToggle, {}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 35,
								columnNumber: 7
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Stack, {
								direction: "row",
								justify: "end",
								gap: "sm",
								style: { flex: 1 },
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(DataViewsSubComponents.ViewConfig, {}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 42,
									columnNumber: 8
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(DataViewsSubComponents.LayoutSwitcher, {}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 43,
									columnNumber: 8
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 36,
								columnNumber: 7
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 33,
						columnNumber: 6
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(DataViewsSubComponents.FiltersToggled, {}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 46,
						columnNumber: 6
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Root, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Stack, {
						direction: "column",
						gap: "sm",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(component_default, {
							size: 18,
							as: "p",
							children: create_interpolate_element_default(_n("<PlanetsNumber /> planet", "<PlanetsNumber /> planets", planets.length), { PlanetsNumber: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("strong", { children: [planets.length, " "] }, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 59,
								columnNumber: 13
							}, this) })
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 50,
							columnNumber: 9
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(component_default, {
							size: 18,
							as: "p",
							children: create_interpolate_element_default(_n("<SatellitesNumber /> moon", "<SatellitesNumber /> moons", moons), { SatellitesNumber: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("strong", { children: [moons, " "] }, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 76,
								columnNumber: 13
							}, this) })
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 67,
							columnNumber: 9
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 49,
						columnNumber: 8
					}, this) }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 48,
						columnNumber: 7
					}, this) }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 47,
						columnNumber: 6
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Root, {
						style: { width: "100%" },
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Stack, {
							direction: "row",
							justify: "space-between",
							align: "center",
							gap: "sm",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(DataViewsSubComponents.Footer, {}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 92,
								columnNumber: 9
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 86,
							columnNumber: 8
						}, this) }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 85,
							columnNumber: 7
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 84,
						columnNumber: 6
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 32,
				columnNumber: 5
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 31,
			columnNumber: 4
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(DataViewsSubComponents.Layout, { className: style_module_default.layout }, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 98,
			columnNumber: 4
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 27,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$3, _jsxFileName$3, FreeCompositionComponent;
function init_free_composition() {
	return (init_free_composition = __esmMin((() => {
		init_react(), init_create_interpolate_element();
		init_component$1(), init_component(), init_button();
		init_build_module();
		init_root(), init_content(), init_stack();
		init_dataviews();
		init_filter_sort_and_paginate();
		init_fixtures();
		init_constants();
		init_style_module();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/free-composition.tsx";
		FreeCompositionComponent = () => {
			const [view, setView] = (0, import_react.useState)({
				type: LAYOUT_TABLE,
				search: "",
				page: 1,
				perPage: 20,
				layout: { enableMoving: false },
				filters: [],
				fields: ["categories"],
				titleField: "title",
				descriptionField: "description",
				mediaField: "image"
			});
			const { data: processedData, paginationInfo } = (0, import_react.useMemo)(() => {
				return filterSortAndPaginate(data$1, view, fields);
			}, [view]);
			const planets = processedData.filter((item) => item.categories.includes("Planet"));
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(DataViewsSubComponents, {
				getItemId: (item) => item.id.toString(),
				paginationInfo,
				data: processedData,
				view,
				fields,
				actions,
				onChangeView: setView,
				defaultLayouts: {
					table: true,
					grid: true
				},
				empty: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Stack, {
					direction: "column",
					gap: "sm",
					justify: "space-around",
					align: "center",
					className: style_module_default.empty,
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(component_default, {
							size: 18,
							as: "p",
							children: "No planets"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 166,
							columnNumber: 6
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(component_default, {
							variant: "muted",
							children: `Try a different search because “${view.search}” returned no results.`
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 169,
							columnNumber: 6
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(button_default, {
							variant: "secondary",
							__next40pxDefaultSize: true,
							children: "Create new planet"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 170,
							columnNumber: 6
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 159,
					columnNumber: 5
				}, void 0),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(PlanetOverview, { planets }, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 176,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 146,
				columnNumber: 3
			}, void 0);
		};
		try {
			FreeCompositionComponent.__docgenInfo = {
				"description": "Demonstrates how to build a custom layout using DataViews sub-components.\n\nInstead of using the default DataViews UI, this story shows how to:\n- Use `<DataViews>` as a context provider (wrapping custom children)\n- Compose your own layout with built-in sub-components:\n  - `<DataViews.Search />` - Search input\n  - `<DataViews.FiltersToggle />` - Button to show/hide filters\n  - `<DataViews.FiltersToggled />` - The filter UI itself\n  - `<DataViews.Pagination />` - Page navigation\n  - `<DataViews.ViewConfig />` - View settings (columns, density, etc.)\n  - `<DataViews.LayoutSwitcher />` - Switch between table/grid/list views\n  - `<DataViews.Footer />` - Item count and pagination\n  - `<DataViews.Layout />` - The data display (table, grid, etc.)\n\nThis pattern is useful when you need full control over the UI layout\nwhile still leveraging DataViews' data management and state handling.",
				"displayName": "FreeCompositionComponent",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/free-composition.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/dataviews/stories/minimal-ui.tsx
var import_jsx_dev_runtime$2, _jsxFileName$2, MinimalUIComponent;
function init_minimal_ui() {
	return (init_minimal_ui = __esmMin((() => {
		init_react();
		init_dataviews();
		init_filter_sort_and_paginate();
		init_fixtures();
		init_constants();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/minimal-ui.tsx";
		MinimalUIComponent = ({ layout = "table" }) => {
			const [view, setView] = (0, import_react.useState)({
				type: LAYOUT_TABLE,
				search: "",
				page: 1,
				perPage: 10,
				layout: { enableMoving: false },
				filters: [],
				fields: [
					"title",
					"description",
					"categories"
				]
			});
			const { data: shownData, paginationInfo } = (0, import_react.useMemo)(() => {
				return filterSortAndPaginate(data$1, view, fields);
			}, [view]);
			const _fields = fields.map((field) => ({
				...field,
				enableSorting: false,
				enableHiding: false,
				filterBy: false
			}));
			(0, import_react.useEffect)(() => {
				setView((prevView) => ({
					...prevView,
					type: layout
				}));
			}, [layout]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(DataViewsSubComponents, {
				getItemId: (item) => item.id.toString(),
				paginationInfo,
				data: shownData,
				view,
				fields: _fields,
				onChangeView: setView,
				defaultLayouts: { [layout]: true },
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(DataViewsSubComponents.Layout, {}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 52,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(DataViewsSubComponents.Footer, {}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 53,
					columnNumber: 4
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 43,
				columnNumber: 3
			}, void 0);
		};
		try {
			MinimalUIComponent.__docgenInfo = {
				"description": "",
				"displayName": "minimalui",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/minimal-ui.tsx",
				"methods": [],
				"props": { "layout": {
					"defaultValue": { "value": "table" },
					"declarations": [{
						"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/minimal-ui.tsx",
						"name": "TypeLiteral"
					}],
					"description": "",
					"name": "layout",
					"required": false,
					"tags": {},
					"type": {
						"name": "enum",
						"raw": "\"table\" | \"grid\" | \"list\"",
						"value": [
							{ "value": "\"table\"" },
							{ "value": "\"grid\"" },
							{ "value": "\"list\"" }
						]
					}
				} },
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/dataviews/stories/empty.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, PlanetIllustration, CustomEmptyComponent, EmptyComponent;
function init_empty() {
	return (init_empty = __esmMin((() => {
		init_react();
		init_component();
		init_stack();
		init_dataviews();
		init_constants();
		init_fixtures();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/empty.tsx";
		PlanetIllustration = () => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("svg", {
			width: "120",
			height: "120",
			viewBox: "0 0 120 120",
			fill: "none",
			style: { opacity: .6 },
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("circle", {
				cx: "60",
				cy: "60",
				r: "35",
				fill: "#9ca3af"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 22,
				columnNumber: 3
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("ellipse", {
				cx: "60",
				cy: "60",
				rx: "55",
				ry: "12",
				stroke: "#9ca3af",
				strokeWidth: "3",
				fill: "none"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 23,
				columnNumber: 3
			}, void 0)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 15,
			columnNumber: 2
		}, void 0);
		CustomEmptyComponent = () => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Stack, {
			direction: "column",
			align: "center",
			justify: "center",
			gap: "md",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(PlanetIllustration, {}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 36,
				columnNumber: 3
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(component_default, { children: "No celestial bodies found" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 37,
				columnNumber: 3
			}, void 0)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 35,
			columnNumber: 2
		}, void 0);
		EmptyComponent = ({ customEmpty, isLoading }) => {
			const [view, setView] = (0, import_react.useState)({
				type: LAYOUT_TABLE,
				search: "",
				page: 1,
				perPage: 10,
				layout: {},
				filters: [],
				fields: [
					"title",
					"description",
					"categories"
				]
			});
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
				style: {
					display: "flex",
					flexDirection: "column",
					height: "100%"
				},
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DataViewsSubComponents, {
					getItemId: (item) => item.id.toString(),
					paginationInfo: {
						totalItems: 0,
						totalPages: 0
					},
					data: [],
					view,
					fields,
					onChangeView: setView,
					actions,
					defaultLayouts: {
						[LAYOUT_TABLE]: true,
						[LAYOUT_GRID]: true,
						[LAYOUT_LIST]: true,
						[LAYOUT_ACTIVITY]: true
					},
					isLoading,
					empty: customEmpty ? /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(CustomEmptyComponent, {}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 81,
						columnNumber: 27
					}, void 0) : void 0
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 66,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 59,
				columnNumber: 3
			}, void 0);
		};
		try {
			EmptyComponent.__docgenInfo = {
				"description": "",
				"displayName": "empty",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/empty.tsx",
				"methods": [],
				"props": {
					"customEmpty": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/empty.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "customEmpty",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isLoading": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/empty.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "isLoading",
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
//#region ../packages/dataviews/src/dataviews/stories/index.story.tsx
var index_story_exports = /* @__PURE__ */ __exportAll({
	AsyncInfiniteScroll: () => AsyncInfiniteScroll,
	Empty: () => Empty,
	FreeComposition: () => FreeComposition,
	HierarchicalLevels: () => HierarchicalLevels,
	InfiniteScroll: () => InfiniteScroll,
	LayoutActivity: () => LayoutActivity,
	LayoutCustom: () => LayoutCustom,
	LayoutGrid: () => LayoutGrid,
	LayoutList: () => LayoutList,
	LayoutTable: () => LayoutTable,
	MinimalUI: () => MinimalUI,
	WithCard: () => WithCard,
	default: () => meta
});
var import_jsx_dev_runtime, _jsxFileName, meta, LayoutTable, LayoutGrid, LayoutList, LayoutActivity, LayoutCustom, HierarchicalLevels, Empty, MinimalUI, FreeComposition, WithCard, InfiniteScroll, AsyncInfiniteScroll;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_dataviews();
		init_layout_activity();
		init_layout_table();
		init_layout_grid();
		init_layout_list();
		init_layout_custom();
		init_hierarchical_levels();
		init_infinite_scroll();
		init_async_infinite_scroll();
		init_with_card();
		init_free_composition();
		init_minimal_ui();
		init_empty();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			id: "dataviews-dataviews",
			title: "Design System/DataViews/DataViews",
			component: DataViewsSubComponents,
			args: { containerHeight: "auto" },
			argTypes: { containerHeight: {
				control: "select",
				options: [
					"auto",
					"600px",
					"80vh"
				],
				description: "Height of the container"
			} },
			parameters: { layout: "fullscreen" },
			decorators: [(Story, { args, parameters }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: { padding: "1rem" },
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						height: parameters.containerHeight ?? args.containerHeight,
						minHeight: 0
					},
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Story, { containerHeight: args.containerHeight }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 48,
						columnNumber: 6
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 41,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 40,
				columnNumber: 4
			}, void 0)]
		};
		LayoutTable = {
			render: LayoutTableComponent$2,
			args: {
				groupBy: false,
				groupByLabel: true,
				hasClickableItems: true,
				perPageSizes: [
					10,
					25,
					50,
					100
				],
				showMedia: true
			},
			argTypes: {
				backgroundColor: {
					control: "color",
					description: "Background color of the DataViews component"
				},
				groupBy: {
					control: "boolean",
					description: "Whether items are grouped by field"
				},
				groupByLabel: {
					control: "boolean",
					description: "Whether to show the groupBy field label in headers (e.g., \"Date: Dec 15\" vs just \"Dec 15\")"
				},
				hasClickableItems: {
					control: "boolean",
					description: "Are the items clickable"
				},
				perPageSizes: {
					control: "object",
					description: "Array of available page sizes"
				},
				showMedia: {
					control: "boolean",
					description: "Whether to display the media field"
				}
			}
		};
		LayoutGrid = {
			parameters: { a11y: { test: "todo" } },
			render: LayoutTableComponent$1,
			args: {
				groupBy: false,
				groupByLabel: true,
				hasClickableItems: true,
				mediaFit: "cover",
				mediaFitControl: true,
				perPageSizes: [
					10,
					25,
					50,
					100
				],
				showMedia: true
			},
			argTypes: {
				backgroundColor: {
					control: "color",
					description: "Background color of the DataViews component"
				},
				groupBy: {
					control: "boolean",
					description: "Whether items are grouped by field"
				},
				groupByLabel: {
					control: "boolean",
					description: "Whether to show the groupBy field label in headers (e.g., \"Date: Dec 15\" vs just \"Dec 15\")"
				},
				hasClickableItems: {
					control: "boolean",
					description: "Are the items clickable"
				},
				mediaFit: {
					control: "select",
					options: ["cover", "contain"],
					description: "How the media field fills the preview box: cropped to fill it (\"cover\") or fitted inside it (\"contain\"), letterboxing the media so its own aspect ratio stays visible"
				},
				mediaFitControl: {
					control: "boolean",
					description: "Whether the view options offer the \"Original aspect ratio\" toggle, letting users switch the media fit themselves"
				},
				perPageSizes: {
					control: "object",
					description: "Array of available page sizes"
				},
				showMedia: {
					control: "boolean",
					description: "Whether to display the media field"
				}
			}
		};
		LayoutList = {
			render: LayoutTableComponent,
			args: {
				fullWidth: false,
				groupBy: false,
				groupByLabel: true,
				hasClickableItems: true,
				perPageSizes: [
					10,
					25,
					50,
					100
				],
				showMedia: true
			},
			argTypes: {
				backgroundColor: {
					control: "color",
					description: "Background color of the DataViews component"
				},
				fullWidth: {
					control: "boolean",
					description: "Whether to use full width or a contained layout (400px)"
				},
				groupBy: {
					control: "boolean",
					description: "Whether items are grouped by field"
				},
				groupByLabel: {
					control: "boolean",
					description: "Whether to show the groupBy field label in headers (e.g., \"Date: Dec 15\" vs just \"Dec 15\")"
				},
				hasClickableItems: {
					control: "boolean",
					description: "Are the items clickable"
				},
				perPageSizes: {
					control: "object",
					description: "Array of available page sizes"
				},
				showMedia: {
					control: "boolean",
					description: "Whether to display the media field"
				}
			}
		};
		LayoutActivity = {
			render: LayoutActivityComponent,
			args: {
				fullWidth: false,
				groupBy: false,
				groupByLabel: true,
				hasClickableItems: true,
				perPageSizes: [
					10,
					25,
					50,
					100
				],
				showMedia: true
			},
			argTypes: {
				backgroundColor: {
					control: "color",
					description: "Background color of the DataViews component"
				},
				fullWidth: {
					control: "boolean",
					description: "Whether to use full width or a contained layout (400px)"
				},
				groupBy: {
					control: "boolean",
					description: "Whether items are grouped by field"
				},
				groupByLabel: {
					control: "boolean",
					description: "Whether to show the groupBy field label in headers (e.g., \"Date: Dec 15\" vs just \"Dec 15\")"
				},
				hasClickableItems: {
					control: "boolean",
					description: "Are the items clickable"
				},
				perPageSizes: {
					control: "object",
					description: "Array of available page sizes"
				},
				showMedia: {
					control: "boolean",
					description: "Whether to display the media field"
				}
			}
		};
		LayoutCustom = { render: LayoutCustomComponent };
		HierarchicalLevels = {
			render: HierarchicalLevelsComponent,
			args: { showLevels: true },
			argTypes: { showLevels: {
				control: "boolean",
				description: "Whether the table indents each item by its level (`view.showLevels`). When enabled, each item is placed below its parent; when disabled, items follow the sort order only"
			} }
		};
		Empty = {
			render: EmptyComponent,
			args: {
				customEmpty: false,
				isLoading: false
			},
			argTypes: {
				customEmpty: {
					control: "boolean",
					description: "Use custom empty state with planet illustration"
				},
				isLoading: {
					control: "boolean",
					description: "Show loading state"
				}
			}
		};
		MinimalUI = {
			parameters: { a11y: { test: "todo" } },
			render: MinimalUIComponent,
			argTypes: { layout: {
				control: "select",
				options: [
					"table",
					"list",
					"grid",
					"activity"
				],
				defaultValue: "table"
			} }
		};
		FreeComposition = { render: FreeCompositionComponent };
		WithCard = { render: WithCardComponent };
		InfiniteScroll = {
			render: InfiniteScroll$1,
			parameters: { containerHeight: "600px" },
			argTypes: { containerHeight: {
				control: false,
				table: { disable: true }
			} }
		};
		AsyncInfiniteScroll = {
			render: AsyncInfiniteScroll$1,
			parameters: {
				a11y: { test: "todo" },
				containerHeight: "calc(100vh - 2rem)"
			},
			argTypes: { containerHeight: {
				control: false,
				table: { disable: true }
			} }
		};
		try {
			AsyncInfiniteScroll.__docgenInfo = {
				"description": "Infinite scroll where pages load asynchronously (with `isLoading`), like a\nreal network-backed consumer that fetches one window at a time. Reproduces\nthe scroll-position jump that the synchronous story does not.",
				"displayName": "AsyncInfiniteScroll",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		LayoutTable.parameters = {
			...LayoutTable.parameters,
			docs: {
				...LayoutTable.parameters?.docs,
				source: {
					originalSource: "{\n  render: LayoutTableComponent,\n  args: {\n    groupBy: false,\n    groupByLabel: true,\n    hasClickableItems: true,\n    perPageSizes: [10, 25, 50, 100],\n    showMedia: true\n  },\n  argTypes: {\n    backgroundColor: {\n      control: 'color',\n      description: 'Background color of the DataViews component'\n    },\n    groupBy: {\n      control: 'boolean',\n      description: 'Whether items are grouped by field'\n    },\n    groupByLabel: {\n      control: 'boolean',\n      description: 'Whether to show the groupBy field label in headers (e.g., \"Date: Dec 15\" vs just \"Dec 15\")'\n    },\n    hasClickableItems: {\n      control: 'boolean',\n      description: 'Are the items clickable'\n    },\n    perPageSizes: {\n      control: 'object',\n      description: 'Array of available page sizes'\n    },\n    showMedia: {\n      control: 'boolean',\n      description: 'Whether to display the media field'\n    }\n  }\n}",
					...LayoutTable.parameters?.docs?.source
				}
			}
		};
		LayoutGrid.parameters = {
			...LayoutGrid.parameters,
			docs: {
				...LayoutGrid.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    // FIXME: Grid media buttons lack names (button-name).\n    // See: https://github.com/WordPress/gutenberg/issues/81596\n    a11y: {\n      test: 'todo'\n    }\n  },\n  render: LayoutGridComponent,\n  args: {\n    groupBy: false,\n    groupByLabel: true,\n    hasClickableItems: true,\n    mediaFit: 'cover',\n    mediaFitControl: true,\n    perPageSizes: [10, 25, 50, 100],\n    showMedia: true\n  },\n  argTypes: {\n    backgroundColor: {\n      control: 'color',\n      description: 'Background color of the DataViews component'\n    },\n    groupBy: {\n      control: 'boolean',\n      description: 'Whether items are grouped by field'\n    },\n    groupByLabel: {\n      control: 'boolean',\n      description: 'Whether to show the groupBy field label in headers (e.g., \"Date: Dec 15\" vs just \"Dec 15\")'\n    },\n    hasClickableItems: {\n      control: 'boolean',\n      description: 'Are the items clickable'\n    },\n    mediaFit: {\n      control: 'select',\n      options: ['cover', 'contain'],\n      description: 'How the media field fills the preview box: cropped to fill it (\"cover\") or fitted inside it (\"contain\"), letterboxing the media so its own aspect ratio stays visible'\n    },\n    mediaFitControl: {\n      control: 'boolean',\n      description: 'Whether the view options offer the \"Original aspect ratio\" toggle, letting users switch the media fit themselves'\n    },\n    perPageSizes: {\n      control: 'object',\n      description: 'Array of available page sizes'\n    },\n    showMedia: {\n      control: 'boolean',\n      description: 'Whether to display the media field'\n    }\n  }\n}",
					...LayoutGrid.parameters?.docs?.source
				}
			}
		};
		LayoutList.parameters = {
			...LayoutList.parameters,
			docs: {
				...LayoutList.parameters?.docs,
				source: {
					originalSource: "{\n  render: LayoutListComponent,\n  args: {\n    fullWidth: false,\n    groupBy: false,\n    groupByLabel: true,\n    hasClickableItems: true,\n    perPageSizes: [10, 25, 50, 100],\n    showMedia: true\n  },\n  argTypes: {\n    backgroundColor: {\n      control: 'color',\n      description: 'Background color of the DataViews component'\n    },\n    fullWidth: {\n      control: 'boolean',\n      description: 'Whether to use full width or a contained layout (400px)'\n    },\n    groupBy: {\n      control: 'boolean',\n      description: 'Whether items are grouped by field'\n    },\n    groupByLabel: {\n      control: 'boolean',\n      description: 'Whether to show the groupBy field label in headers (e.g., \"Date: Dec 15\" vs just \"Dec 15\")'\n    },\n    hasClickableItems: {\n      control: 'boolean',\n      description: 'Are the items clickable'\n    },\n    perPageSizes: {\n      control: 'object',\n      description: 'Array of available page sizes'\n    },\n    showMedia: {\n      control: 'boolean',\n      description: 'Whether to display the media field'\n    }\n  }\n}",
					...LayoutList.parameters?.docs?.source
				}
			}
		};
		LayoutActivity.parameters = {
			...LayoutActivity.parameters,
			docs: {
				...LayoutActivity.parameters?.docs,
				source: {
					originalSource: "{\n  render: LayoutActivityComponent,\n  args: {\n    fullWidth: false,\n    groupBy: false,\n    groupByLabel: true,\n    hasClickableItems: true,\n    perPageSizes: [10, 25, 50, 100],\n    showMedia: true\n  },\n  argTypes: {\n    backgroundColor: {\n      control: 'color',\n      description: 'Background color of the DataViews component'\n    },\n    fullWidth: {\n      control: 'boolean',\n      description: 'Whether to use full width or a contained layout (400px)'\n    },\n    groupBy: {\n      control: 'boolean',\n      description: 'Whether items are grouped by field'\n    },\n    groupByLabel: {\n      control: 'boolean',\n      description: 'Whether to show the groupBy field label in headers (e.g., \"Date: Dec 15\" vs just \"Dec 15\")'\n    },\n    hasClickableItems: {\n      control: 'boolean',\n      description: 'Are the items clickable'\n    },\n    perPageSizes: {\n      control: 'object',\n      description: 'Array of available page sizes'\n    },\n    showMedia: {\n      control: 'boolean',\n      description: 'Whether to display the media field'\n    }\n  }\n}",
					...LayoutActivity.parameters?.docs?.source
				}
			}
		};
		LayoutCustom.parameters = {
			...LayoutCustom.parameters,
			docs: {
				...LayoutCustom.parameters?.docs,
				source: {
					originalSource: "{\n  render: LayoutCustomComponent\n}",
					...LayoutCustom.parameters?.docs?.source
				}
			}
		};
		HierarchicalLevels.parameters = {
			...HierarchicalLevels.parameters,
			docs: {
				...HierarchicalLevels.parameters?.docs,
				source: {
					originalSource: "{\n  render: HierarchicalLevelsComponent,\n  args: {\n    showLevels: true\n  },\n  argTypes: {\n    showLevels: {\n      control: 'boolean',\n      description: 'Whether the table indents each item by its level (`view.showLevels`). When enabled, each item is placed below its parent; when disabled, items follow the sort order only'\n    }\n  }\n}",
					...HierarchicalLevels.parameters?.docs?.source
				}
			}
		};
		Empty.parameters = {
			...Empty.parameters,
			docs: {
				...Empty.parameters?.docs,
				source: {
					originalSource: "{\n  render: EmptyComponent,\n  args: {\n    customEmpty: false,\n    isLoading: false\n  },\n  argTypes: {\n    customEmpty: {\n      control: 'boolean',\n      description: 'Use custom empty state with planet illustration'\n    },\n    isLoading: {\n      control: 'boolean',\n      description: 'Show loading state'\n    }\n  }\n}",
					...Empty.parameters?.docs?.source
				}
			}
		};
		MinimalUI.parameters = {
			...MinimalUI.parameters,
			docs: {
				...MinimalUI.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    // FIXME: Scroll region is not keyboard-accessible (scrollable-region-focusable).\n    // See: https://github.com/WordPress/gutenberg/issues/81596\n    a11y: {\n      test: 'todo'\n    }\n  },\n  render: MinimalUIComponent,\n  argTypes: {\n    layout: {\n      control: 'select',\n      options: ['table', 'list', 'grid', 'activity'],\n      defaultValue: 'table'\n    }\n  }\n}",
					...MinimalUI.parameters?.docs?.source
				}
			}
		};
		FreeComposition.parameters = {
			...FreeComposition.parameters,
			docs: {
				...FreeComposition.parameters?.docs,
				source: {
					originalSource: "{\n  render: FreeCompositionComponent\n}",
					...FreeComposition.parameters?.docs?.source
				}
			}
		};
		WithCard.parameters = {
			...WithCard.parameters,
			docs: {
				...WithCard.parameters?.docs,
				source: {
					originalSource: "{\n  render: WithCardComponent\n}",
					...WithCard.parameters?.docs?.source
				}
			}
		};
		InfiniteScroll.parameters = {
			...InfiniteScroll.parameters,
			docs: {
				...InfiniteScroll.parameters?.docs,
				source: {
					originalSource: "{\n  render: InfiniteScrollComponent,\n  parameters: {\n    containerHeight: '600px'\n  },\n  argTypes: {\n    containerHeight: {\n      control: false,\n      table: {\n        disable: true\n      }\n    }\n  }\n}",
					...InfiniteScroll.parameters?.docs?.source
				}
			}
		};
		AsyncInfiniteScroll.parameters = {
			...AsyncInfiniteScroll.parameters,
			docs: {
				...AsyncInfiniteScroll.parameters?.docs,
				source: {
					originalSource: "{\n  render: AsyncInfiniteScrollComponent,\n  parameters: {\n    // FIXME: List items lack a required parent (aria-required-parent).\n    // See: https://github.com/WordPress/gutenberg/issues/81596\n    a11y: {\n      test: 'todo'\n    },\n    // Fill the viewport so the list bottom is the window bottom.\n    containerHeight: 'calc(100vh - 2rem)'\n  },\n  argTypes: {\n    containerHeight: {\n      control: false,\n      table: {\n        disable: true\n      }\n    }\n  }\n}",
					...AsyncInfiniteScroll.parameters?.docs?.source
				},
				description: {
					story: "Infinite scroll where pages load asynchronously (with `isLoading`), like a\nreal network-backed consumer that fetches one window at a time. Reproduces\nthe scroll-position jump that the synchronous story does not.",
					...AsyncInfiniteScroll.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
export { init_index_story as n, index_story_exports as t };
