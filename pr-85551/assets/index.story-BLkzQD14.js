import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as FieldsetRoot, i as init_legend, n as init_description, o as init_root, r as FieldsetLegend, t as FieldsetDescription } from "./description-CdVw7or1.js";
import { n as init_details, t as FieldsetDetails } from "./details-CHu36Ino.js";
import { i as init_shared, t as DETAILS_EXAMPLE } from "./shared-BRqYhAs4.js";
//#region ../packages/ui/src/form/primitives/fieldset/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default, HiddenLegend, WithDetails;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_root(), init_legend(), init_description(), init_details();
		init_shared();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/fieldset/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-ui/Form/Primitives/Fieldset",
			id: "design-system-components-form-primitives-fieldset",
			component: FieldsetRoot,
			subcomponents: {
				"Fieldset.Legend": FieldsetLegend,
				"Fieldset.Description": FieldsetDescription,
				"Fieldset.Details": FieldsetDetails
			},
			parameters: { componentStatus: {
				status: "recommended",
				whereUsed: "global"
			} }
		};
		Default = { args: { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldsetLegend, { children: "Legend" }, "legend", false, {
				fileName: _jsxFileName,
				lineNumber: 29,
				columnNumber: 4
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldsetDescription, { children: "This is a description for the entire fieldset." }, "description", false, {
				fileName: _jsxFileName,
				lineNumber: 30,
				columnNumber: 4
			}, void 0),
			["Apples", "Bananas"].map((fruit) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 36,
					columnNumber: 6
				}, void 0),
				" ",
				fruit
			] }, fruit, true, {
				fileName: _jsxFileName,
				lineNumber: 35,
				columnNumber: 5
			}, void 0))
		] } };
		HiddenLegend = { args: { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldsetLegend, {
			hideFromVision: true,
			children: "Legend"
		}, "legend", false, {
			fileName: _jsxFileName,
			lineNumber: 50,
			columnNumber: 4
		}, void 0), ["Apples", "Bananas"].map((fruit) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 56,
				columnNumber: 6
			}, void 0),
			" ",
			fruit
		] }, fruit, true, {
			fileName: _jsxFileName,
			lineNumber: 55,
			columnNumber: 5
		}, void 0))] } };
		WithDetails = { args: { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldsetLegend, { children: "Legend" }, "legend", false, {
				fileName: _jsxFileName,
				lineNumber: 76,
				columnNumber: 4
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldsetDetails, { children: DETAILS_EXAMPLE }, "details", false, {
				fileName: _jsxFileName,
				lineNumber: 77,
				columnNumber: 4
			}, void 0),
			["Apples", "Bananas"].map((fruit) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 83,
					columnNumber: 6
				}, void 0),
				" ",
				fruit
			] }, fruit, true, {
				fileName: _jsxFileName,
				lineNumber: 82,
				columnNumber: 5
			}, void 0))
		] } };
		try {
			HiddenLegend.__docgenInfo = {
				"description": "When `hideFromVision` is set on `Fieldset.Legend`, the legend is visually\nhidden but remains accessible to screen readers.",
				"displayName": "HiddenLegend",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/fieldset/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithDetails.__docgenInfo = {
				"description": "To add rich content (such as links) to the description, use `Fieldset.Details`.\n\nAlthough this content is not associated with the fieldset using direct semantics,\nit is made discoverable to screen reader users via a visually hidden description,\nalerting them to the presence of additional information below.\n\nIf the content only includes plain text, use `Fieldset.Description` instead,\nso the readout is not unnecessarily verbose for screen reader users.",
				"displayName": "WithDetails",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/fieldset/stories/index.story.tsx",
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
					originalSource: "{\n  args: {\n    children: [<Fieldset.Legend key=\"legend\">Legend</Fieldset.Legend>, <Fieldset.Description key=\"description\">\n                This is a description for the entire fieldset.\n            </Fieldset.Description>, ['Apples', 'Bananas'].map(fruit =>\n    // eslint-disable-next-line jsx-a11y/label-has-associated-control\n    <label key={fruit}>\n                    <input type=\"checkbox\" /> {fruit}\n                </label>)]\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		HiddenLegend.parameters = {
			...HiddenLegend.parameters,
			docs: {
				...HiddenLegend.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: [<Fieldset.Legend hideFromVision key=\"legend\">\n                Legend\n            </Fieldset.Legend>, ['Apples', 'Bananas'].map(fruit =>\n    // eslint-disable-next-line jsx-a11y/label-has-associated-control\n    <label key={fruit}>\n                    <input type=\"checkbox\" /> {fruit}\n                </label>)]\n  }\n}",
					...HiddenLegend.parameters?.docs?.source
				},
				description: {
					story: "When `hideFromVision` is set on `Fieldset.Legend`, the legend is visually\nhidden but remains accessible to screen readers.",
					...HiddenLegend.parameters?.docs?.description
				}
			}
		};
		WithDetails.parameters = {
			...WithDetails.parameters,
			docs: {
				...WithDetails.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: [<Fieldset.Legend key=\"legend\">Legend</Fieldset.Legend>, <Fieldset.Details key=\"details\">\n                {DETAILS_EXAMPLE}\n            </Fieldset.Details>, ['Apples', 'Bananas'].map(fruit =>\n    // eslint-disable-next-line jsx-a11y/label-has-associated-control\n    <label key={fruit}>\n                    <input type=\"checkbox\" /> {fruit}\n                </label>)]\n  }\n}",
					...WithDetails.parameters?.docs?.source
				},
				description: {
					story: "To add rich content (such as links) to the description, use `Fieldset.Details`.\n\nAlthough this content is not associated with the fieldset using direct semantics,\nit is made discoverable to screen reader users via a visually hidden description,\nalerting them to the presence of additional information below.\n\nIf the content only includes plain text, use `Fieldset.Description` instead,\nso the readout is not unnecessarily verbose for screen reader users.",
					...WithDetails.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, HiddenLegend, WithDetails, meta as default };
