import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_TooltipProvider, t as TooltipProvider } from "./TooltipProvider-CmfsudSe.js";
//#region ../packages/ui/src/tooltip/provider.tsx
function Provider({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TooltipProvider, { ...props }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 5,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName;
function init_provider() {
	return (init_provider = __esmMin((() => {
		init_TooltipProvider();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tooltip/provider.tsx";
		try {
			Provider.__docgenInfo = {
				"description": "",
				"displayName": "Provider",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tooltip/provider.tsx",
				"methods": [],
				"props": {
					"delay": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tooltip/provider/TooltipProvider.d.mts",
							"name": "TooltipProviderProps"
						}],
						"description": "How long to wait before opening the tooltip on hover. Specified in milliseconds.",
						"name": "delay",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tooltip/provider/TooltipProvider.d.mts",
							"name": "TooltipProviderProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"closeDelay": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tooltip/provider/TooltipProvider.d.mts",
							"name": "TooltipProviderProps"
						}],
						"description": "How long to wait before closing a tooltip. Specified in milliseconds.",
						"name": "closeDelay",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tooltip/provider/TooltipProvider.d.mts",
							"name": "TooltipProviderProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"timeout": {
						"defaultValue": { "value": "400" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tooltip/provider/TooltipProvider.d.mts",
							"name": "TooltipProviderProps"
						}],
						"description": "Another tooltip will open instantly if the previous tooltip\nis closed within this timeout. Specified in milliseconds.",
						"name": "timeout",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tooltip/provider/TooltipProvider.d.mts",
							"name": "TooltipProviderProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_provider as n, Provider as t };
