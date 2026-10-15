import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_form_token_field, t as FormTokenField } from "./form-token-field-s62kCeb2.js";
//#region ../packages/components/src/form-token-field/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, continents, DefaultTemplate, Default, Async, DropdownSelector, WithCustomRenderedItems, ValidateNewTokens;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_form_token_field();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/form-token-field/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			component: FormTokenField,
			title: "Components/@wordpress-components/Selection & Input/Common/FormTokenField",
			id: "components-formtokenfield",
			argTypes: {
				value: { control: false },
				__experimentalValidateInput: { control: false },
				help: { control: "text" }
			},
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "global",
					notes: "Will be superseded by `SearchableChipSelect` in `@wordpress/ui`, but continue using for now."
				}
			}
		};
		continents = [
			"Africa",
			"America",
			"Antarctica",
			"Asia",
			"Europe",
			"Oceania"
		];
		DefaultTemplate = ({ ...args }) => {
			const [selectedContinents, setSelectedContinents] = (0, import_react.useState)([]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormTokenField, {
				...args,
				value: selectedContinents,
				onChange: (tokens) => setSelectedContinents(tokens)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 49,
				columnNumber: 3
			}, void 0);
		};
		Default = DefaultTemplate.bind({});
		Default.args = {
			label: "Type a continent",
			suggestions: continents
		};
		Async = ({ suggestions, ...args }) => {
			const [selectedContinents, setSelectedContinents] = (0, import_react.useState)([]);
			const [availableContinents, setAvailableContinents] = (0, import_react.useState)([]);
			const searchContinents = (input) => {
				const timeout = setTimeout(() => {
					const available = (suggestions || []).filter((continent) => continent.toLowerCase().includes(input.toLowerCase()));
					setAvailableContinents(available);
				}, 1e3);
				return () => clearTimeout(timeout);
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormTokenField, {
				...args,
				value: selectedContinents,
				suggestions: availableContinents,
				onChange: (tokens) => setSelectedContinents(tokens),
				onInputChange: searchContinents
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 88,
				columnNumber: 3
			}, void 0);
		};
		Async.args = {
			label: "Type a continent",
			suggestions: continents
		};
		DropdownSelector = DefaultTemplate.bind({});
		DropdownSelector.args = {
			...Default.args,
			__experimentalExpandOnFocus: true,
			__experimentalAutoSelectFirstMatch: true
		};
		WithCustomRenderedItems = DefaultTemplate.bind({});
		WithCustomRenderedItems.args = {
			...Default.args,
			displayTransform: (token) => `📍 ${token}`,
			__experimentalRenderItem: ({ item }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: `${item} — a nice place to visit` }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 124,
				columnNumber: 3
			}, void 0),
			__experimentalExpandOnFocus: true
		};
		ValidateNewTokens = DefaultTemplate.bind({});
		ValidateNewTokens.args = {
			...Default.args,
			__experimentalValidateInput: (input) => continents.includes(input),
			__experimentalExpandOnFocus: true
		};
		try {
			WithCustomRenderedItems.__docgenInfo = {
				"description": "The rendered content of each token can be customized by passing a\nrender function to the `displayTransform` prop.\n\nSimilarly, each suggestion can be customized by passing a\nrender function to the `__experimentalRenderItem` prop. (This is still an\nexperimental feature and is subject to change.)",
				"displayName": "WithCustomRenderedItems",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/form-token-field/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			ValidateNewTokens.__docgenInfo = {
				"description": "Only values for which the `__experimentalValidateInput` function returns\n`true` will be tokenized. (This is still an experimental feature and is\nsubject to change.)\n\nIn this example, the user can only add tokens that are already in the list.",
				"displayName": "ValidateNewTokens",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/form-token-field/stories/index.story.tsx",
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
					originalSource: "({\n  ...args\n}) => {\n  const [selectedContinents, setSelectedContinents] = useState<ComponentProps<typeof FormTokenField>['value']>([]);\n  return <FormTokenField {...args} value={selectedContinents} onChange={tokens => setSelectedContinents(tokens)} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		Async.parameters = {
			...Async.parameters,
			docs: {
				...Async.parameters?.docs,
				source: {
					originalSource: "({\n  suggestions,\n  ...args\n}) => {\n  const [selectedContinents, setSelectedContinents] = useState<ComponentProps<typeof FormTokenField>['value']>([]);\n  const [availableContinents, setAvailableContinents] = useState<string[]>([]);\n  const searchContinents = (input: string) => {\n    const timeout = setTimeout(() => {\n      const available = (suggestions || []).filter(continent => continent.toLowerCase().includes(input.toLowerCase()));\n      setAvailableContinents(available);\n    }, 1000);\n    return () => clearTimeout(timeout);\n  };\n  return <FormTokenField {...args} value={selectedContinents} suggestions={availableContinents} onChange={tokens => setSelectedContinents(tokens)} onInputChange={searchContinents} />;\n}",
					...Async.parameters?.docs?.source
				}
			}
		};
		DropdownSelector.parameters = {
			...DropdownSelector.parameters,
			docs: {
				...DropdownSelector.parameters?.docs,
				source: {
					originalSource: "({\n  ...args\n}) => {\n  const [selectedContinents, setSelectedContinents] = useState<ComponentProps<typeof FormTokenField>['value']>([]);\n  return <FormTokenField {...args} value={selectedContinents} onChange={tokens => setSelectedContinents(tokens)} />;\n}",
					...DropdownSelector.parameters?.docs?.source
				}
			}
		};
		WithCustomRenderedItems.parameters = {
			...WithCustomRenderedItems.parameters,
			docs: {
				...WithCustomRenderedItems.parameters?.docs,
				source: {
					originalSource: "({\n  ...args\n}) => {\n  const [selectedContinents, setSelectedContinents] = useState<ComponentProps<typeof FormTokenField>['value']>([]);\n  return <FormTokenField {...args} value={selectedContinents} onChange={tokens => setSelectedContinents(tokens)} />;\n}",
					...WithCustomRenderedItems.parameters?.docs?.source
				},
				description: {
					story: "The rendered content of each token can be customized by passing a\nrender function to the `displayTransform` prop.\n\nSimilarly, each suggestion can be customized by passing a\nrender function to the `__experimentalRenderItem` prop. (This is still an\nexperimental feature and is subject to change.)",
					...WithCustomRenderedItems.parameters?.docs?.description
				}
			}
		};
		ValidateNewTokens.parameters = {
			...ValidateNewTokens.parameters,
			docs: {
				...ValidateNewTokens.parameters?.docs,
				source: {
					originalSource: "({\n  ...args\n}) => {\n  const [selectedContinents, setSelectedContinents] = useState<ComponentProps<typeof FormTokenField>['value']>([]);\n  return <FormTokenField {...args} value={selectedContinents} onChange={tokens => setSelectedContinents(tokens)} />;\n}",
					...ValidateNewTokens.parameters?.docs?.source
				},
				description: {
					story: "Only values for which the `__experimentalValidateInput` function returns\n`true` will be tokenized. (This is still an experimental feature and is\nsubject to change.)\n\nIn this example, the user can only add tokens that are already in the list.",
					...ValidateNewTokens.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Async, Default, DropdownSelector, ValidateNewTokens, WithCustomRenderedItems, meta as default };
