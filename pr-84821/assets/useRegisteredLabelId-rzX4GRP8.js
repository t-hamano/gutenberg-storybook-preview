import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as useIsoLayoutEffect, t as init_useIsoLayoutEffect } from "./useIsoLayoutEffect-DDc8Lhn-.js";
import { n as useBaseUiId, t as init_useBaseUiId } from "./useBaseUiId-CESTxyJs.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/utils/useRegisteredLabelId.mjs
function useRegisteredLabelId(idProp, setLabelId) {
	const id = useBaseUiId(idProp);
	useIsoLayoutEffect(() => {
		setLabelId(id);
		return () => {
			setLabelId((currentId) => currentId === id ? void 0 : currentId);
		};
	}, [id, setLabelId]);
	return id;
}
function init_useRegisteredLabelId() {
	return (init_useRegisteredLabelId = __esmMin((() => {
		init_useIsoLayoutEffect();
		init_useBaseUiId();
	})))();
}
//#endregion
export { useRegisteredLabelId as n, init_useRegisteredLabelId as t };
