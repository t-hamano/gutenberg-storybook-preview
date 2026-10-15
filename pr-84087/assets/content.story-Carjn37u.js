import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, r as Canvas, u as Meta } from "./blocks-BdcQOi1H.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
import { a as ValidationMessages, i as Placeholders, n as HighLevelHelpText, o as content_story_exports, r as Labels, s as init_content_story$1, t as HelpText } from "./content.story-4F81Jjh6.js";
//#region ../packages/dataviews/src/dataform/stories/content.story.mdx
function _createMdxContent(props) {
	const _components = {
		code: "code",
		h1: "h1",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...useMDXComponents(),
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(Meta, { of: content_story_exports }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "content-elements",
			children: "Content Elements"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Guidance on understanding the semantics and proper usage of content elements in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "DataForm" }),
			" instances, including when and how to use high-level help text, labels, placeholders, field-level help text, and validation messages."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "accessibility",
			children: "Accessibility"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Proper use of content elements is essential for accessibility. Each element serves a specific semantic purpose that assistive technologies rely on:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Labels" }), " are announced by screen readers to identify form fields. Every field must have a label."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Placeholders" }), " provide example input to hint at expected format. They are not a substitute for labels—they disappear on input and are not reliably announced."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Help text" }), " provides additional context that is programmatically associated with fields and read by assistive technologies."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Validation messages" }), " are announced when they appear so users know how to correct errors."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Following these semantics benefits all users, including those navigating with keyboards, using screen readers, or experiencing cognitive challenges." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "high-level-help-text",
			children: "High-level help text"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"High-level help text provides context and guidance for an entire form. It should be used to explain the purpose of the form, the information that will be collected, and how the information will be used. To add high-level help text, use the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "description" }),
			" property on a field group object (a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "FormField" }),
			" type) in the form configuration's ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "fields" }),
			" array that wraps all the form fields as children."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: HighLevelHelpText }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "labels",
			children: "Labels"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "A label tells users what information they need to enter in a field. Labels must be short, clear, and descriptive to avoid confusion." }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: Labels }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "guidelines",
			children: "Guidelines"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)("table", {
			style: { width: "100%" },
			children: [(0, import_jsx_runtime.jsx)("thead", { children: (0, import_jsx_runtime.jsxs)("tr", { children: [(0, import_jsx_runtime.jsx)("th", {
				style: { width: "50%" },
				children: "✅ Do"
			}), (0, import_jsx_runtime.jsx)("th", {
				style: { width: "50%" },
				children: "🚫 Don't"
			})] }) }), (0, import_jsx_runtime.jsxs)("tbody", { children: [
				(0, import_jsx_runtime.jsxs)("tr", { children: [(0, import_jsx_runtime.jsx)("td", {
					style: { width: "50%" },
					children: "Use clear and straightforward language."
				}), (0, import_jsx_runtime.jsx)("td", {
					style: { width: "50%" },
					children: "Use vague or ambiguous terms like \"Information\" or \"Details\"."
				})] }),
				(0, import_jsx_runtime.jsxs)("tr", { children: [(0, import_jsx_runtime.jsx)("td", {
					style: { width: "50%" },
					children: "Limit labels to 1 to 3 concise words."
				}), (0, import_jsx_runtime.jsx)("td", {
					style: { width: "50%" },
					children: "Exceed 3 words—longer labels create visual clutter."
				})] }),
				(0, import_jsx_runtime.jsxs)("tr", { children: [(0, import_jsx_runtime.jsx)("td", {
					style: { width: "50%" },
					children: "Remove filler words and redundant phrasing."
				}), (0, import_jsx_runtime.jsx)("td", {
					style: { width: "50%" },
					children: "Include filler words like \"Please enter your\" or \"Kindly provide\"."
				})] }),
				(0, import_jsx_runtime.jsxs)("tr", { children: [(0, import_jsx_runtime.jsx)("td", {
					style: { width: "50%" },
					children: "Use plain language that users understand."
				}), (0, import_jsx_runtime.jsx)("td", {
					style: { width: "50%" },
					children: "Use technical jargon that users might not understand."
				})] }),
				(0, import_jsx_runtime.jsxs)("tr", { children: [(0, import_jsx_runtime.jsx)("td", {
					style: { width: "50%" },
					children: "Be specific and descriptive."
				}), (0, import_jsx_runtime.jsx)("td", {
					style: { width: "50%" },
					children: "Use generic labels like \"Input\" or \"Field 1\"."
				})] })
			] })]
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "placeholders",
			children: "Placeholders"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "A placeholder provides example input to help users understand the expected format. Use placeholders sparingly, keep them short (1 to 3 words), and use real-world examples where possible. They should only be used for formatting hints or common examples, never as a replacement for labels or instructions." }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: Placeholders }),
		"\n",
		(0, import_jsx_runtime.jsxs)("table", {
			style: { width: "100%" },
			children: [(0, import_jsx_runtime.jsx)("thead", { children: (0, import_jsx_runtime.jsxs)("tr", { children: [(0, import_jsx_runtime.jsx)("th", {
				style: { width: "50%" },
				children: "✅ Good"
			}), (0, import_jsx_runtime.jsx)("th", {
				style: { width: "50%" },
				children: "🚫 Bad"
			})] }) }), (0, import_jsx_runtime.jsxs)("tbody", { children: [(0, import_jsx_runtime.jsxs)("tr", { children: [(0, import_jsx_runtime.jsx)("td", {
				style: { width: "50%" },
				children: "For a name field: \"Jane Doe\"."
			}), (0, import_jsx_runtime.jsx)("td", {
				style: { width: "50%" },
				children: "For a name field: \"Enter your full name here\" (Should be a label or help text, not a placeholder)."
			})] }), (0, import_jsx_runtime.jsxs)("tr", { children: [(0, import_jsx_runtime.jsx)("td", {
				style: { width: "50%" },
				children: "For an email field: \"you@example.com\"."
			}), (0, import_jsx_runtime.jsx)("td", {
				style: { width: "50%" },
				children: "For a password field: \"At least 8 characters\" (Belongs in help text, not a placeholder)."
			})] })] })]
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "help-text",
			children: "Help text"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "For complicated inputs, use help text to explain how the user should proceed. Help text is always visible, appears immediately after the input, and provides essential guidance for completing the input correctly. Help text can also inform users about how their information might be used, providing transparency and context that helps build trust and sets appropriate expectations." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Use help text when the user needs contextual guidance upfront to avoid errors, when the instruction explains why or how to complete the field correctly, when the form field has complex requirements or constraints (e.g., password rules, business logic), or when the information should be accessible without additional interaction." }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: HelpText }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "guidelines-1",
			children: "Guidelines"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)("table", {
			style: { width: "100%" },
			children: [(0, import_jsx_runtime.jsx)("thead", { children: (0, import_jsx_runtime.jsxs)("tr", { children: [(0, import_jsx_runtime.jsx)("th", {
				style: { width: "50%" },
				children: "✅ Do"
			}), (0, import_jsx_runtime.jsx)("th", {
				style: { width: "50%" },
				children: "🚫 Don't"
			})] }) }), (0, import_jsx_runtime.jsxs)("tbody", { children: [
				(0, import_jsx_runtime.jsxs)("tr", { children: [(0, import_jsx_runtime.jsx)("td", {
					style: { width: "50%" },
					children: "Keep help text concise—one to two sentences maximum."
				}), (0, import_jsx_runtime.jsx)("td", {
					style: { width: "50%" },
					children: "Write lengthy paragraphs that overwhelm the user."
				})] }),
				(0, import_jsx_runtime.jsxs)("tr", { children: [(0, import_jsx_runtime.jsx)("td", {
					style: { width: "50%" },
					children: "Provide actionable, contextual guidance about why or how to complete the field."
				}), (0, import_jsx_runtime.jsx)("td", {
					style: { width: "50%" },
					children: "State the obvious or repeat what the label already conveys."
				})] }),
				(0, import_jsx_runtime.jsxs)("tr", { children: [(0, import_jsx_runtime.jsx)("td", {
					style: { width: "50%" },
					children: "Explain requirements or constraints that aren't obvious from the label."
				}), (0, import_jsx_runtime.jsx)("td", {
					style: { width: "50%" },
					children: "Duplicate format examples that belong in placeholders (e.g., \"Use YYYY-MM-DD format\")."
				})] }),
				(0, import_jsx_runtime.jsxs)("tr", { children: [(0, import_jsx_runtime.jsx)("td", {
					style: { width: "50%" },
					children: "Focus on what the user needs to know to succeed."
				}), (0, import_jsx_runtime.jsx)("td", {
					style: { width: "50%" },
					children: "Include unnecessary background information or explanations."
				})] }),
				(0, import_jsx_runtime.jsxs)("tr", { children: [(0, import_jsx_runtime.jsx)("td", {
					style: { width: "50%" },
					children: "Write in plain, user-friendly language."
				}), (0, import_jsx_runtime.jsx)("td", {
					style: { width: "50%" },
					children: "Use technical terms or system-specific jargon."
				})] }),
				(0, import_jsx_runtime.jsxs)("tr", { children: [(0, import_jsx_runtime.jsx)("td", {
					style: { width: "50%" },
					children: "For radios or selects, explain how to choose between options."
				}), (0, import_jsx_runtime.jsx)("td", {
					style: { width: "50%" },
					children: "Use help text to describe what a selected value means after selection."
				})] })
			] })]
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "validation-messages",
			children: "Validation messages"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Validation messages help users understand and fix errors in a form. They should be clear, concise, and actionable to guide users toward correcting their input." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Where possible, messages should infer what is wrong and how the user can fix it." }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: ValidationMessages }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "guidelines-2",
			children: "Guidelines"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)("table", {
			style: { width: "100%" },
			children: [(0, import_jsx_runtime.jsx)("thead", { children: (0, import_jsx_runtime.jsxs)("tr", { children: [(0, import_jsx_runtime.jsx)("th", {
				style: { width: "50%" },
				children: "✅ Good"
			}), (0, import_jsx_runtime.jsx)("th", {
				style: { width: "50%" },
				children: "🚫 Bad"
			})] }) }), (0, import_jsx_runtime.jsx)("tbody", { children: (0, import_jsx_runtime.jsxs)("tr", { children: [(0, import_jsx_runtime.jsx)("td", {
				style: { width: "50%" },
				children: "Name must be at least 2 characters long."
			}), (0, import_jsx_runtime.jsx)("td", {
				style: { width: "50%" },
				children: "Invalid name."
			})] }) })]
		})
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = {
		...useMDXComponents(),
		...props.components
	};
	return MDXLayout ? (0, import_jsx_runtime.jsx)(MDXLayout, {
		...props,
		children: (0, import_jsx_runtime.jsx)(_createMdxContent, { ...props })
	}) : _createMdxContent(props);
}
var import_jsx_runtime, __namedExportsOrder;
function init_content_story() {
	return (init_content_story = __esmMin((() => {
		import_jsx_runtime = require_jsx_runtime();
		init_lib();
		init_blocks();
		init_content_story$1();
		__namedExportsOrder = [];
	})))();
}
//#endregion
init_content_story();
export { __namedExportsOrder, MDXContent as default };
