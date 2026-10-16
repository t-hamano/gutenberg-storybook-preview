import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_validity_indicator, t as ValidityIndicator } from "./validity-indicator-BGF5Lcru.js";
//#region ../packages/ui/src/form/primitives/validity-indicator/stories/index.story.tsx
var meta, Invalid, Valid, Validating;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_validity_indicator();
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-ui/Form/Primitives/ValidityIndicator",
			id: "design-system-components-form-primitives-validityindicator",
			component: ValidityIndicator,
			parameters: { componentStatus: { status: "recommended" } }
		};
		Invalid = { args: {
			type: "invalid",
			message: "Please enter a valid URL."
		} };
		Valid = { args: {
			type: "valid",
			message: "This URL is available."
		} };
		Validating = { args: {
			type: "validating",
			message: "Checking availability…"
		} };
		Invalid.parameters = {
			...Invalid.parameters,
			docs: {
				...Invalid.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    type: 'invalid',\n    message: 'Please enter a valid URL.'\n  }\n}",
					...Invalid.parameters?.docs?.source
				}
			}
		};
		Valid.parameters = {
			...Valid.parameters,
			docs: {
				...Valid.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    type: 'valid',\n    message: 'This URL is available.'\n  }\n}",
					...Valid.parameters?.docs?.source
				}
			}
		};
		Validating.parameters = {
			...Validating.parameters,
			docs: {
				...Validating.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    type: 'validating',\n    message: 'Checking availability…'\n  }\n}",
					...Validating.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Invalid, Valid, Validating, meta as default };
