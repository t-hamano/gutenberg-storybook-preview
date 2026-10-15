import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as init_base_control, t as BaseControl } from "./base-control-DsOU5iCO.js";
//#region ../packages/components/src/base-control/hooks.ts
/**
* Generate props for the `BaseControl` and the inner control itself.
*
* Namely, it takes care of generating a unique `id`, properly associating it with the `label` and `help` elements.
*
* @param props
*/
function useBaseControlProps(props) {
	const { help, id: preferredId, ...restProps } = props;
	const uniqueId = use_instance_id_default(BaseControl, "wp-components-base-control", preferredId);
	return {
		baseControlProps: {
			id: uniqueId,
			help,
			...restProps
		},
		controlProps: {
			id: uniqueId,
			...!!help ? { "aria-describedby": `${uniqueId}__help` } : {}
		}
	};
}
function init_hooks() {
	return (init_hooks = __esmMin((() => {
		init_use_instance_id();
		init_base_control();
	})))();
}
//#endregion
export { useBaseControlProps as n, init_hooks as t };
