import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as use_reduced_motion_default, t as init_use_reduced_motion } from "./use-reduced-motion-D9Mdybdt.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { t as chevron_down_default } from "./chevron-down-Xtey2DGs.js";
import { t as chevron_up_default } from "./chevron-up-DMIiK4DC.js";
import { n as wordpress_default } from "./wordpress-BwlgBeE7.js";
import { n as useControlledState, t as init_use_controlled_state } from "./use-controlled-state-CTRYMe6I.js";
import { l as init_use_update_effect, u as useUpdateEffect } from "./use-context-system-6z_jGcZR.js";
import { n as init_input_control, t as InputControl } from "./input-control-Blid3S0A.js";
import { n as init_icon, t as Icon } from "./icon-DxWIlbNr.js";
import { n as init_button, t as Button } from "./button-BO8bp-IJ.js";
import { n as init_panel, t as Panel } from "./panel-CrRqJkFM.js";
import { r as init_build_module } from "./library.story-CbQx3MQ6.js";
//#region ../packages/components/src/panel/row.tsx
function UnforwardedPanelRow({ className, children }, ref) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("div", {
		className: clsx("components-panel__row", className),
		ref,
		children
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 11,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$2, _jsxFileName$2, PanelRow;
function init_row() {
	return (init_row = __esmMin((() => {
		init_clsx();
		init_react();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/panel/row.tsx";
		PanelRow = (0, import_react.forwardRef)(UnforwardedPanelRow);
		PanelRow.displayName = "PanelRow";
		try {
			PanelRow.__docgenInfo = {
				"description": "`PanelRow` is a generic container for rows within a `PanelBody`.\nIt is a flex container with a top margin for spacing.",
				"displayName": "PanelRow",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/panel/row.tsx",
				"methods": [],
				"props": {
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The CSS class to apply to the wrapper element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The content to display within the panel row.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/panel/body.tsx
function UnforwardedPanelBody(props, ref) {
	const { buttonProps = {}, children, className, icon, initialOpen, onToggle = noop, opened, title, scrollAfterOpen = true } = props;
	const [isOpened, setIsOpened] = useControlledState(opened, {
		initial: initialOpen === void 0 ? true : initialOpen,
		fallback: false
	});
	const nodeRef = (0, import_react.useRef)(null);
	const scrollBehavior = use_reduced_motion_default() ? "auto" : "smooth";
	const handleOnToggle = (event) => {
		event.preventDefault();
		const next = !isOpened;
		setIsOpened(next);
		onToggle(next);
	};
	const scrollAfterOpenRef = (0, import_react.useRef)(void 0);
	scrollAfterOpenRef.current = scrollAfterOpen;
	useUpdateEffect(() => {
		if (isOpened && scrollAfterOpenRef.current && nodeRef.current?.scrollIntoView) nodeRef.current.scrollIntoView({
			inline: "nearest",
			block: "nearest",
			behavior: scrollBehavior
		});
	}, [isOpened, scrollBehavior]);
	const classes = clsx("components-panel__body", className, { "is-opened": isOpened });
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
		className: classes,
		ref: useMergeRefs([nodeRef, ref]),
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(PanelBodyTitle, {
			icon,
			isOpened: Boolean(isOpened),
			onClick: handleOnToggle,
			title,
			...buttonProps
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 77,
			columnNumber: 4
		}, this), typeof children === "function" ? children({ opened: Boolean(isOpened) }) : isOpened && children]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 76,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, noop, PanelBodyTitle, PanelBody;
function init_body() {
	return (init_body = __esmMin((() => {
		init_clsx();
		init_use_reduced_motion(), init_use_merge_refs();
		init_react();
		init_build_module();
		init_button();
		init_icon();
		init_use_controlled_state(), init_use_update_effect();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/panel/body.tsx";
		noop = () => {};
		PanelBodyTitle = (0, import_react.forwardRef)(({ isOpened, icon, title, ...props }, ref) => {
			if (!title) return null;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("h2", {
				className: "components-panel__body-title",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Button, {
					__next40pxDefaultSize: true,
					className: "components-panel__body-toggle",
					"aria-expanded": isOpened,
					ref,
					...props,
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("span", {
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Icon, {
								className: "components-panel__arrow",
								icon: isOpened ? chevron_up_default : chevron_down_default
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 119,
								columnNumber: 7
							}, void 0)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 118,
							columnNumber: 6
						}, void 0),
						title,
						icon && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Icon, {
							icon,
							className: "components-panel__icon",
							size: 20
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 126,
							columnNumber: 7
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 107,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 106,
				columnNumber: 4
			}, void 0);
		});
		PanelBody = (0, import_react.forwardRef)(UnforwardedPanelBody);
		PanelBody.displayName = "PanelBody";
		try {
			UnforwardedPanelBody.__docgenInfo = {
				"description": "",
				"displayName": "UnforwardedPanelBody",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/panel/body.tsx",
				"methods": [],
				"props": {
					"buttonProps": {
						"defaultValue": { "value": "{}" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Props that are passed to the `Button` component in title within the\n`PanelBody`.",
						"name": "buttonProps",
						"required": false,
						"tags": {},
						"type": { "name": "WordPressComponentProps<Omit<ButtonAsButtonProps, \"icon\">, \"button\", false>" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The content to display in the `PanelBody`.If a function is provided for\nthis prop, it will receive an object with the `opened` prop as an argument.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode | ((props: { opened: boolean; }) => ReactNode)" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The CSS class to apply to the wrapper element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"icon": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An icon to be shown next to the title.",
						"name": "icon",
						"required": false,
						"tags": {},
						"type": { "name": "Element" }
					},
					"initialOpen": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether or not the panel will start open.",
						"name": "initialOpen",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onToggle": {
						"defaultValue": { "value": "noop" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function that is called any time the component is toggled from its closed\nstate to its opened state, or vice versa.",
						"name": "onToggle",
						"required": false,
						"tags": {},
						"type": { "name": "((next: boolean) => void)" }
					},
					"opened": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "When set to `true`, the component will remain open regardless of the\n`initialOpen` prop and the panel will be prevented from being closed.",
						"name": "opened",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"title": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Title text. It shows even when it is closed.",
						"name": "title",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"scrollAfterOpen": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Scrolls the content into view when visible. This improves the UX when\nmultiple `PanelBody` components are stacked in a scrollable container.",
						"name": "scrollAfterOpen",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			PanelBody.__docgenInfo = {
				"description": "",
				"displayName": "PanelBody",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/panel/body.tsx",
				"methods": [],
				"props": {
					"buttonProps": {
						"defaultValue": { "value": "{}" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Props that are passed to the `Button` component in title within the\n`PanelBody`.",
						"name": "buttonProps",
						"required": false,
						"tags": {},
						"type": { "name": "WordPressComponentProps<Omit<ButtonAsButtonProps, \"icon\">, \"button\", false>" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The content to display in the `PanelBody`.If a function is provided for\nthis prop, it will receive an object with the `opened` prop as an argument.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode | ((props: { opened: boolean; }) => ReactNode)" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The CSS class to apply to the wrapper element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"icon": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An icon to be shown next to the title.",
						"name": "icon",
						"required": false,
						"tags": {},
						"type": { "name": "Element" }
					},
					"initialOpen": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether or not the panel will start open.",
						"name": "initialOpen",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onToggle": {
						"defaultValue": { "value": "noop" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function that is called any time the component is toggled from its closed\nstate to its opened state, or vice versa.",
						"name": "onToggle",
						"required": false,
						"tags": {},
						"type": { "name": "((next: boolean) => void)" }
					},
					"opened": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "When set to `true`, the component will remain open regardless of the\n`initialOpen` prop and the panel will be prevented from being closed.",
						"name": "opened",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"title": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Title text. It shows even when it is closed.",
						"name": "title",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"scrollAfterOpen": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Scrolls the content into view when visible. This improves the UX when\nmultiple `PanelBody` components are stacked in a scrollable container.",
						"name": "scrollAfterOpen",
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
//#region ../packages/components/src/panel/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default, _PanelRow, DisabledSection, WithIcon;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_build_module();
		init_panel();
		init_row();
		init_body();
		init_input_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/panel/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-components/Containers/Panel",
			id: "components-panel",
			component: Panel,
			subcomponents: {
				PanelRow,
				PanelBody
			},
			argTypes: { children: { control: false } },
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "editor",
					notes: "Intended for the block inspector sidebar. For collapsible sections elsewhere, use [`CollapsibleCard`](?path=/docs/design-system-components-collapsiblecard--docs) from `@wordpress/ui` instead."
				}
			}
		};
		Template = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, { ...props }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 28,
			columnNumber: 56
		}, void 0);
		Default = Template.bind({});
		Default.args = {
			header: "My panel",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PanelBody, {
				title: "First section",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PanelRow, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
					background: "#ddd",
					height: 100,
					width: "100%"
				} }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 37,
					columnNumber: 6
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 36,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 35,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PanelBody, {
				title: "Second section",
				initialOpen: false,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PanelRow, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
					background: "#ddd",
					height: 100,
					width: "100%"
				} }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 48,
					columnNumber: 6
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 47,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 46,
				columnNumber: 4
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 34,
				columnNumber: 3
			}, void 0)
		};
		_PanelRow = Template.bind({});
		_PanelRow.args = { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PanelBody, {
			title: "My Profile",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PanelRow, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputControl, { label: "First name" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 70,
				columnNumber: 5
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputControl, { label: "Last name" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 71,
				columnNumber: 5
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 69,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PanelRow, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: { flex: 1 },
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputControl, { label: "Email" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 75,
					columnNumber: 6
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 74,
				columnNumber: 5
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 73,
				columnNumber: 4
			}, void 0)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 68,
			columnNumber: 3
		}, void 0) };
		DisabledSection = Template.bind({});
		DisabledSection.args = {
			...Default.args,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PanelBody, {
				title: "Disabled section",
				initialOpen: false,
				buttonProps: { disabled: true }
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 86,
				columnNumber: 3
			}, void 0)
		};
		WithIcon = Template.bind({});
		WithIcon.args = {
			...Default.args,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PanelBody, {
				title: "Section title",
				icon: wordpress_default,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PanelRow, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
					background: "#ddd",
					height: 100,
					width: "100%"
				} }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 100,
					columnNumber: 5
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 99,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 98,
				columnNumber: 3
			}, void 0)
		};
		try {
			_PanelRow.__docgenInfo = {
				"description": "`PanelRow` is a generic container for rows within a `PanelBody`.\nIt is a flex container with a top margin for spacing.",
				"displayName": "_PanelRow",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/panel/stories/index.story.tsx",
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
					originalSource: "props => <Panel {...props} />",
					...Default.parameters?.docs?.source
				}
			}
		};
		_PanelRow.parameters = {
			..._PanelRow.parameters,
			docs: {
				..._PanelRow.parameters?.docs,
				source: {
					originalSource: "props => <Panel {...props} />",
					..._PanelRow.parameters?.docs?.source
				},
				description: {
					story: "`PanelRow` is a generic container for rows within a `PanelBody`.\nIt is a flex container with a top margin for spacing.",
					..._PanelRow.parameters?.docs?.description
				}
			}
		};
		DisabledSection.parameters = {
			...DisabledSection.parameters,
			docs: {
				...DisabledSection.parameters?.docs,
				source: {
					originalSource: "props => <Panel {...props} />",
					...DisabledSection.parameters?.docs?.source
				}
			}
		};
		WithIcon.parameters = {
			...WithIcon.parameters,
			docs: {
				...WithIcon.parameters?.docs,
				source: {
					originalSource: "props => <Panel {...props} />",
					...WithIcon.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, DisabledSection, WithIcon, _PanelRow, meta as default };
