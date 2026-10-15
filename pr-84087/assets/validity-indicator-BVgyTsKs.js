import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as published_default, r as error_default } from "./published-BuOJO-QD.js";
import { n as init_spinner, t as Spinner } from "./spinner-D2a10I8B.js";
import { n as init_global_css_defense_module, t as global_css_defense_module_default } from "./global-css-defense.module-CSCRyOGP.js";
import { n as init_icon, t as Icon } from "./icon-DD-nOZ1R.js";
import { r as init_build_module } from "./library.story-DawnfKTW.js";
//#region ../packages/ui/src/form/primitives/validity-indicator/style.module.css
var indicator, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		indicator = "_indicator_b2z5n_5";
		style_module_default = {
			indicator,
			"indicator-jump": "_indicator-jump_b2z5n_1",
			"is-invalid": "_is-invalid_b2z5n_26",
			"is-valid": "_is-valid_b2z5n_30",
			"indicator-icon": "_indicator-icon_b2z5n_34",
			"indicator-spinner": "_indicator-spinner_b2z5n_38"
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/validity-indicator/validity-indicator.tsx
/**
* Displays a validity message for a form control, with an icon matching the
* validity state: invalid, valid, or validating (a spinner while an async
* check is pending).
*
* `ControlWithError` renders it automatically; use it directly to give a
* custom validated control the same presentation.
*/
function ValidityIndicator({ id, type, message }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		id,
		className: clsx(global_css_defense_module_default.p, style_module_default.indicator, style_module_default[`is-${type}`]),
		children: [type === "validating" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spinner, { className: style_module_default["indicator-spinner"] }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 37,
			columnNumber: 5
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
			className: style_module_default["indicator-icon"],
			icon: ICON[type],
			size: 16,
			fill: "currentColor"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 39,
			columnNumber: 5
		}, this), message]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 28,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, ICON;
function init_validity_indicator() {
	return (init_validity_indicator = __esmMin((() => {
		init_clsx();
		init_build_module();
		init_icon();
		init_spinner();
		init_global_css_defense_module();
		init_style_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/validity-indicator/validity-indicator.tsx";
		ICON = {
			valid: published_default,
			invalid: error_default
		};
		try {
			ValidityIndicator.__docgenInfo = {
				"description": "Displays a validity message for a form control, with an icon matching the\nvalidity state: invalid, valid, or validating (a spinner while an async\ncheck is pending).\n\n`ControlWithError` renders it automatically; use it directly to give a\ncustom validated control the same presentation.",
				"displayName": "ValidityIndicator",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/validity-indicator/validity-indicator.tsx",
				"methods": [],
				"props": {
					"id": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/validity-indicator/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The `id` to apply to the indicator element, so it can be associated\nwith the control via `aria-describedby`.",
						"name": "id",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"type": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/validity-indicator/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The validation status to indicate.",
						"name": "type",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"invalid\" | \"validating\" | \"valid\"",
							"value": [
								{ "value": "\"invalid\"" },
								{ "value": "\"validating\"" },
								{ "value": "\"valid\"" }
							]
						}
					},
					"message": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/validity-indicator/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The message to display next to the status icon.",
						"name": "message",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_validity_indicator as n, ValidityIndicator as t };
