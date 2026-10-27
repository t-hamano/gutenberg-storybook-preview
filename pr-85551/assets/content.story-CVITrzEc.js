import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_stack, t as Stack } from "./stack-BHmRFw1F.js";
import { i as useFormValidity, n as init_dataform, r as init_use_form_validity, t as DataForm } from "./dataform-BmAKafmi.js";
//#region ../packages/dataviews/src/dataform/stories/content.story.tsx
var content_story_exports = /* @__PURE__ */ __exportAll({
	HelpText: () => HelpText,
	HighLevelHelpText: () => HighLevelHelpText,
	Labels: () => Labels,
	Placeholders: () => Placeholders,
	ValidationMessages: () => ValidationMessages,
	default: () => meta
});
var import_jsx_dev_runtime, _jsxFileName, meta, Labels, HelpText, ValidationMessages, HighLevelHelpText, Placeholders;
function init_content_story() {
	return (init_content_story = __esmMin((() => {
		init_react();
		init_stack();
		init_dataform();
		init_use_form_validity();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataform/stories/content.story.tsx";
		meta = {
			id: "dataviews-dataform-content",
			title: "Design System/DataViews/DataForm/Content",
			component: DataForm,
			parameters: { controls: { disable: true } },
			tags: ["!dev", "manifest"]
		};
		Labels = { render: () => {
			const [data, setData] = (0, import_react.useState)({
				name: "",
				email: "",
				phone: ""
			});
			const fields = (0, import_react.useMemo)(() => [
				{
					id: "name",
					label: "Name",
					type: "text"
				},
				{
					id: "email",
					label: "Email",
					type: "email"
				},
				{
					id: "phone",
					label: "Phone number",
					type: "telephone"
				}
			], []);
			const form = (0, import_react.useMemo)(() => ({
				layout: { type: "regular" },
				fields: [
					"name",
					"email",
					"phone"
				]
			}), []);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
				direction: "column",
				gap: "lg",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataForm, {
					data,
					fields,
					form,
					onChange: (edits) => setData((prev) => ({
						...prev,
						...edits
					}))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 66,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 65,
				columnNumber: 4
			}, void 0);
		} };
		HelpText = { render: () => {
			const [data, setData] = (0, import_react.useState)({
				name: "",
				email: "",
				phone: ""
			});
			const fields = (0, import_react.useMemo)(() => [
				{
					id: "name",
					label: "Name",
					type: "text",
					placeholder: "Jane Doe",
					description: "Enter your full legal name as it appears on official documents."
				},
				{
					id: "email",
					label: "Email",
					type: "email",
					placeholder: "you@example.com",
					description: "We will use this to send you important account notifications and updates."
				},
				{
					id: "phone",
					label: "Phone number",
					type: "telephone",
					placeholder: "+1 (555) 123-4567",
					description: "Include your country code. This number will be used for account verification."
				}
			], []);
			const form = (0, import_react.useMemo)(() => ({
				layout: { type: "regular" },
				fields: [
					"name",
					"email",
					"phone"
				]
			}), []);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
				direction: "column",
				gap: "lg",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataForm, {
					data,
					fields,
					form,
					onChange: (edits) => setData((prev) => ({
						...prev,
						...edits
					}))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 133,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 132,
				columnNumber: 4
			}, void 0);
		} };
		ValidationMessages = { render: () => {
			const [data, setData] = (0, import_react.useState)({
				name: "",
				email: "invalid-email",
				phone: "123"
			});
			const fields = (0, import_react.useMemo)(() => [
				{
					id: "name",
					label: "Name",
					type: "text",
					placeholder: "Jane Doe",
					isValid: { required: true }
				},
				{
					id: "email",
					label: "Email",
					type: "email",
					placeholder: "you@example.com",
					isValid: {
						required: true,
						custom: (item) => {
							if (!item.email) return null;
							if (!item.email.includes("@")) return "Please enter a valid email address.";
							return null;
						}
					}
				},
				{
					id: "phone",
					label: "Phone number",
					type: "telephone",
					placeholder: "+1 (555) 123-4567",
					isValid: {
						required: true,
						custom: (item) => {
							if (!item.phone) return null;
							if (item.phone.length < 10) return "Phone number must be at least 10 digits long.";
							return null;
						}
					}
				}
			], []);
			const form = (0, import_react.useMemo)(() => ({
				layout: { type: "regular" },
				fields: [
					"name",
					"email",
					"phone"
				]
			}), []);
			const { validity } = useFormValidity(data, fields, form);
			const containerRef = (0, import_react.useRef)(null);
			(0, import_react.useEffect)(() => {
				if (validity && containerRef.current) containerRef.current.querySelectorAll("input").forEach((input) => {
					input.dispatchEvent(new Event("invalid", { bubbles: false }));
				});
			}, [validity]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				ref: containerRef,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
					direction: "column",
					gap: "xl",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataForm, {
						data,
						fields,
						form,
						validity,
						onChange: (edits) => setData((prev) => ({
							...prev,
							...edits
						}))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 238,
						columnNumber: 6
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 237,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 236,
				columnNumber: 4
			}, void 0);
		} };
		HighLevelHelpText = { render: () => {
			const [data, setData] = (0, import_react.useState)({
				name: "",
				email: "",
				phone: ""
			});
			const fields = (0, import_react.useMemo)(() => [
				{
					id: "name",
					label: "Name",
					type: "text"
				},
				{
					id: "email",
					label: "Email",
					type: "email"
				},
				{
					id: "phone",
					label: "Phone number",
					type: "telephone"
				}
			], []);
			const form = (0, import_react.useMemo)(() => ({
				layout: { type: "regular" },
				fields: [{
					id: "accountForm",
					label: "Account information",
					description: "We collect this information to create your account and provide personalized services. Your data will be kept secure and used only for account management and service improvements.",
					children: [
						"name",
						"email",
						"phone"
					],
					layout: {
						isCollapsible: false,
						summary: "account-form",
						type: "card",
						withHeader: true
					}
				}]
			}), []);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
				direction: "column",
				gap: "lg",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataForm, {
					data,
					fields,
					form,
					onChange: (edits) => setData((prev) => ({
						...prev,
						...edits
					}))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 312,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 311,
				columnNumber: 4
			}, void 0);
		} };
		Placeholders = { render: () => {
			const [data, setData] = (0, import_react.useState)({
				name: "",
				email: "",
				phone: ""
			});
			const fields = (0, import_react.useMemo)(() => [
				{
					id: "name",
					label: "Name",
					type: "text",
					placeholder: "Jane Doe"
				},
				{
					id: "email",
					label: "Email",
					type: "email",
					placeholder: "you@example.com"
				},
				{
					id: "phone",
					label: "Phone number",
					type: "telephone",
					placeholder: "+1 (555) 123-4567"
				}
			], []);
			const form = (0, import_react.useMemo)(() => ({
				layout: { type: "regular" },
				fields: [
					"name",
					"email",
					"phone"
				]
			}), []);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
				direction: "column",
				gap: "lg",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataForm, {
					data,
					fields,
					form,
					onChange: (edits) => setData((prev) => ({
						...prev,
						...edits
					}))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 373,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 372,
				columnNumber: 4
			}, void 0);
		} };
		Labels.parameters = {
			...Labels.parameters,
			docs: {
				...Labels.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => {\n    const [data, setData] = useState<SampleData>({\n      name: '',\n      email: '',\n      phone: ''\n    });\n    const fields: Field<SampleData>[] = useMemo(() => [{\n      id: 'name',\n      label: 'Name',\n      type: 'text'\n    }, {\n      id: 'email',\n      label: 'Email',\n      type: 'email'\n    }, {\n      id: 'phone',\n      label: 'Phone number',\n      type: 'telephone'\n    }], []);\n    const form: Form = useMemo(() => ({\n      layout: {\n        type: 'regular'\n      },\n      fields: ['name', 'email', 'phone']\n    }), []);\n    return <Stack direction=\"column\" gap=\"lg\">\n                <DataForm<SampleData> data={data} fields={fields} form={form} onChange={edits => setData(prev => ({\n        ...prev,\n        ...edits\n      }))} />\n            </Stack>;\n  }\n}",
					...Labels.parameters?.docs?.source
				}
			}
		};
		HelpText.parameters = {
			...HelpText.parameters,
			docs: {
				...HelpText.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => {\n    const [data, setData] = useState<HelpTextData>({\n      name: '',\n      email: '',\n      phone: ''\n    });\n    const fields: Field<HelpTextData>[] = useMemo(() => [{\n      id: 'name',\n      label: 'Name',\n      type: 'text',\n      placeholder: 'Jane Doe',\n      description: 'Enter your full legal name as it appears on official documents.'\n    }, {\n      id: 'email',\n      label: 'Email',\n      type: 'email',\n      placeholder: 'you@example.com',\n      description: 'We will use this to send you important account notifications and updates.'\n    }, {\n      id: 'phone',\n      label: 'Phone number',\n      type: 'telephone',\n      placeholder: '+1 (555) 123-4567',\n      description: 'Include your country code. This number will be used for account verification.'\n    }], []);\n    const form: Form = useMemo(() => ({\n      layout: {\n        type: 'regular'\n      },\n      fields: ['name', 'email', 'phone']\n    }), []);\n    return <Stack direction=\"column\" gap=\"lg\">\n                <DataForm<HelpTextData> data={data} fields={fields} form={form} onChange={edits => setData(prev => ({\n        ...prev,\n        ...edits\n      }))} />\n            </Stack>;\n  }\n}",
					...HelpText.parameters?.docs?.source
				}
			}
		};
		ValidationMessages.parameters = {
			...ValidationMessages.parameters,
			docs: {
				...ValidationMessages.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => {\n    const [data, setData] = useState<ValidationMessagesData>({\n      name: '',\n      email: 'invalid-email',\n      phone: '123'\n    });\n    const fields: Field<ValidationMessagesData>[] = useMemo(() => [{\n      id: 'name',\n      label: 'Name',\n      type: 'text',\n      placeholder: 'Jane Doe',\n      isValid: {\n        required: true\n      }\n    }, {\n      id: 'email',\n      label: 'Email',\n      type: 'email',\n      placeholder: 'you@example.com',\n      isValid: {\n        required: true,\n        custom: item => {\n          if (!item.email) {\n            return null;\n          }\n          if (!item.email.includes('@')) {\n            return 'Please enter a valid email address.';\n          }\n          return null;\n        }\n      }\n    }, {\n      id: 'phone',\n      label: 'Phone number',\n      type: 'telephone',\n      placeholder: '+1 (555) 123-4567',\n      isValid: {\n        required: true,\n        custom: item => {\n          if (!item.phone) {\n            return null;\n          }\n          if (item.phone.length < 10) {\n            return 'Phone number must be at least 10 digits long.';\n          }\n          return null;\n        }\n      }\n    }], []);\n    const form: Form = useMemo(() => ({\n      layout: {\n        type: 'regular'\n      },\n      fields: ['name', 'email', 'phone']\n    }), []);\n    const {\n      validity\n    } = useFormValidity(data, fields, form);\n    const containerRef = useRef<HTMLDivElement>(null);\n\n    // Show validation messages on load without focusing\n    useEffect(() => {\n      if (validity && containerRef.current) {\n        const inputs = containerRef.current.querySelectorAll('input');\n        inputs.forEach(input => {\n          // Dispatch 'invalid' event to trigger the validation message display\n          input.dispatchEvent(new Event('invalid', {\n            bubbles: false\n          }));\n        });\n      }\n    }, [validity]);\n    return <div ref={containerRef}>\n                <Stack direction=\"column\" gap=\"xl\">\n                    <DataForm<ValidationMessagesData> data={data} fields={fields} form={form} validity={validity} onChange={edits => setData(prev => ({\n          ...prev,\n          ...edits\n        }))} />\n                </Stack>\n            </div>;\n  }\n}",
					...ValidationMessages.parameters?.docs?.source
				}
			}
		};
		HighLevelHelpText.parameters = {
			...HighLevelHelpText.parameters,
			docs: {
				...HighLevelHelpText.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => {\n    const [data, setData] = useState<HighLevelHelpTextData>({\n      name: '',\n      email: '',\n      phone: ''\n    });\n    const fields: Field<HighLevelHelpTextData>[] = useMemo(() => [{\n      id: 'name',\n      label: 'Name',\n      type: 'text'\n    }, {\n      id: 'email',\n      label: 'Email',\n      type: 'email'\n    }, {\n      id: 'phone',\n      label: 'Phone number',\n      type: 'telephone'\n    }], []);\n    const form: Form = useMemo(() => ({\n      layout: {\n        type: 'regular'\n      },\n      fields: [{\n        id: 'accountForm',\n        label: 'Account information',\n        description: 'We collect this information to create your account and provide personalized services. Your data will be kept secure and used only for account management and service improvements.',\n        children: ['name', 'email', 'phone'],\n        layout: {\n          isCollapsible: false,\n          summary: 'account-form',\n          type: 'card',\n          withHeader: true\n        }\n      }]\n    }), []);\n    return <Stack direction=\"column\" gap=\"lg\">\n                <DataForm<HighLevelHelpTextData> data={data} fields={fields} form={form} onChange={edits => setData(prev => ({\n        ...prev,\n        ...edits\n      }))} />\n            </Stack>;\n  }\n}",
					...HighLevelHelpText.parameters?.docs?.source
				}
			}
		};
		Placeholders.parameters = {
			...Placeholders.parameters,
			docs: {
				...Placeholders.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => {\n    const [data, setData] = useState<PlaceholdersData>({\n      name: '',\n      email: '',\n      phone: ''\n    });\n    const fields: Field<PlaceholdersData>[] = useMemo(() => [{\n      id: 'name',\n      label: 'Name',\n      type: 'text',\n      placeholder: 'Jane Doe'\n    }, {\n      id: 'email',\n      label: 'Email',\n      type: 'email',\n      placeholder: 'you@example.com'\n    }, {\n      id: 'phone',\n      label: 'Phone number',\n      type: 'telephone',\n      placeholder: '+1 (555) 123-4567'\n    }], []);\n    const form: Form = useMemo(() => ({\n      layout: {\n        type: 'regular'\n      },\n      fields: ['name', 'email', 'phone']\n    }), []);\n    return <Stack direction=\"column\" gap=\"lg\">\n                <DataForm<PlaceholdersData> data={data} fields={fields} form={form} onChange={edits => setData(prev => ({\n        ...prev,\n        ...edits\n      }))} />\n            </Stack>;\n  }\n}",
					...Placeholders.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
export { ValidationMessages as a, Placeholders as i, HighLevelHelpText as n, content_story_exports as o, Labels as r, init_content_story as s, HelpText as t };
