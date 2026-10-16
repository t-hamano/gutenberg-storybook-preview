import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { r as format_bold_default, t as format_italic_default } from "./format-italic-D_jr8hit.js";
import { n as link_default } from "./link-B6xih8Jw.js";
import { n as more_default } from "./more-U4HqW_9x.js";
import { n as wordpress_default } from "./wordpress-Dmkk4E44.js";
import { n as init_button, t as Button } from "./button-BqvmAVeL.js";
import { r as init_build_module } from "./library.story-CFsmdbdz.js";
//#region ../packages/components/src/button/stories/index.story.tsx
function GroupedIcons() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GroupContainer, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
			__next40pxDefaultSize: true,
			icon: format_bold_default,
			label: "Bold"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 122,
			columnNumber: 4
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
			__next40pxDefaultSize: true,
			icon: format_italic_default,
			label: "Italic"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 123,
			columnNumber: 4
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
			__next40pxDefaultSize: true,
			icon: link_default,
			label: "Link"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 128,
			columnNumber: 4
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 121,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default, Primary, Secondary, Tertiary, Link, IsDestructive, Icon, GroupContainer;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_build_module();
		init_button();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/button/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-components/Actions/Button",
			id: "components-button",
			component: Button,
			argTypes: {
				"aria-pressed": {
					control: { type: "select" },
					description: "Indicates the current \"pressed\" state, implying it is a toggle button. Implicitly set by `isPressed`, but takes precedence if both are provided.",
					options: [
						void 0,
						"true",
						"false",
						"mixed"
					],
					table: { type: { summary: "boolean | \"true\" | \"false\" | \"mixed\"" } }
				},
				href: { type: {
					name: "string",
					required: false
				} },
				icon: {
					control: { type: "select" },
					options: [
						"wordpress",
						"link",
						"more"
					],
					mapping: {
						wordpress: wordpress_default,
						link: link_default,
						more: more_default
					}
				}
			},
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "global",
					notes: "Will be superseded by [`Button`](?path=/docs/design-system-components-button--docs) in `@wordpress/ui`, but continue using for now."
				}
			}
		};
		Template = (props) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				__next40pxDefaultSize: true,
				...props
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 54,
				columnNumber: 9
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = { children: "Code is poetry" };
		Primary = Template.bind({});
		Primary.args = {
			...Default.args,
			variant: "primary"
		};
		Secondary = Template.bind({});
		Secondary.args = {
			...Default.args,
			variant: "secondary"
		};
		Tertiary = Template.bind({});
		Tertiary.args = {
			...Default.args,
			variant: "tertiary"
		};
		Link = Template.bind({});
		Link.args = {
			...Default.args,
			variant: "link"
		};
		IsDestructive = Template.bind({});
		IsDestructive.args = {
			...Default.args,
			isDestructive: true
		};
		Icon = Template.bind({});
		Icon.args = {
			label: "Code is poetry",
			icon: "wordpress"
		};
		GroupContainer = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			style: { display: "inline-flex" },
			children
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 117,
			columnNumber: 2
		}, void 0);
		try {
			Primary.__docgenInfo = {
				"description": "Primary buttons stand out with bold color fills, making them distinct\nfrom the background. Since they naturally draw attention, each layout should contain\nonly one primary button to guide users toward the most important action.",
				"displayName": "Primary",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/button/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Secondary.__docgenInfo = {
				"description": "Secondary buttons complement primary buttons. Use them for standard actions that may appear alongside a primary action.",
				"displayName": "Secondary",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/button/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Tertiary.__docgenInfo = {
				"description": "Tertiary buttons have minimal emphasis. Use them sparingly to subtly highlight an action.",
				"displayName": "Tertiary",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/button/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Link.__docgenInfo = {
				"description": "Link buttons have low emphasis and blend into the page, making them suitable for supplementary actions,\nespecially those involving navigation away from the current view.",
				"displayName": "Link",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/button/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			IsDestructive.__docgenInfo = {
				"description": "Use this variant for irreversible actions. Apply sparingly and only for actions with significant impact.",
				"displayName": "IsDestructive",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/button/stories/index.story.tsx",
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
					originalSource: "props => {\n  return <Button __next40pxDefaultSize {...props}></Button>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		Primary.parameters = {
			...Primary.parameters,
			docs: {
				...Primary.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <Button __next40pxDefaultSize {...props}></Button>;\n}",
					...Primary.parameters?.docs?.source
				},
				description: {
					story: "Primary buttons stand out with bold color fills, making them distinct\nfrom the background. Since they naturally draw attention, each layout should contain\nonly one primary button to guide users toward the most important action.",
					...Primary.parameters?.docs?.description
				}
			}
		};
		Secondary.parameters = {
			...Secondary.parameters,
			docs: {
				...Secondary.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <Button __next40pxDefaultSize {...props}></Button>;\n}",
					...Secondary.parameters?.docs?.source
				},
				description: {
					story: "Secondary buttons complement primary buttons. Use them for standard actions that may appear alongside a primary action.",
					...Secondary.parameters?.docs?.description
				}
			}
		};
		Tertiary.parameters = {
			...Tertiary.parameters,
			docs: {
				...Tertiary.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <Button __next40pxDefaultSize {...props}></Button>;\n}",
					...Tertiary.parameters?.docs?.source
				},
				description: {
					story: "Tertiary buttons have minimal emphasis. Use them sparingly to subtly highlight an action.",
					...Tertiary.parameters?.docs?.description
				}
			}
		};
		Link.parameters = {
			...Link.parameters,
			docs: {
				...Link.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <Button __next40pxDefaultSize {...props}></Button>;\n}",
					...Link.parameters?.docs?.source
				},
				description: {
					story: "Link buttons have low emphasis and blend into the page, making them suitable for supplementary actions,\nespecially those involving navigation away from the current view.",
					...Link.parameters?.docs?.description
				}
			}
		};
		IsDestructive.parameters = {
			...IsDestructive.parameters,
			docs: {
				...IsDestructive.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <Button __next40pxDefaultSize {...props}></Button>;\n}",
					...IsDestructive.parameters?.docs?.source
				},
				description: {
					story: "Use this variant for irreversible actions. Apply sparingly and only for actions with significant impact.",
					...IsDestructive.parameters?.docs?.description
				}
			}
		};
		Icon.parameters = {
			...Icon.parameters,
			docs: {
				...Icon.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <Button __next40pxDefaultSize {...props}></Button>;\n}",
					...Icon.parameters?.docs?.source
				}
			}
		};
		GroupedIcons.parameters = {
			...GroupedIcons.parameters,
			docs: {
				...GroupedIcons.parameters?.docs,
				source: {
					originalSource: "function GroupedIcons() {\n  return <GroupContainer>\n            <Button __next40pxDefaultSize icon={formatBold} label=\"Bold\" />\n            <Button __next40pxDefaultSize icon={formatItalic} label=\"Italic\" />\n            <Button __next40pxDefaultSize icon={link} label=\"Link\" />\n        </GroupContainer>;\n}",
					...GroupedIcons.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, GroupedIcons, Icon, IsDestructive, Link, Primary, Secondary, Tertiary, meta as default };
