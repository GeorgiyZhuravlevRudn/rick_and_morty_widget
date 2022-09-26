import { isEmptyCheck } from "./formValidation";
import { getSortedList } from "./getSortedList";
import tempAlert from "./tempAlert";

export const sendData = async (send, fieldObj) => {
	const requiredFields = [...getSortedList(true, 'required', fieldObj.formFields)]
	//check only if required
	const checkForm = isEmptyCheck({requiredFields:requiredFields, fieldValue:fieldObj.fieldValue});
	if(checkForm.isEmpty){
		tempAlert(checkForm.msg, 3000,['--invalid']);
		return;
	}
	let data = send({...fieldObj.fieldValue});
	return data;
}