import { 
	addFieldAction, 
	rmFieldAction, 
	rmAllFieldsAction, 
	addFieldManyAction 
} from "./fieldValue";
import {
	setWindow,
	resetWindow
} from "./windowReducer"
import { 
	setUserIsAuthAction, 
	setUserAction, 
	cleanUserAction,
	updateUserAction
} from "./userReducer";
import { 
	addDataAction,
	addDataItemAction, 
	rmDataItemAction, 
	updateDataItemAction,
	rmAllDataAction,
	asyncAddDataAction, 
	asyncAddDataItemAction, 
	asyncRmDataItemAction, 
	asyncUpdateDataItemAction
} from "./dataReducer";
import {
	setDisciplineAction,
	refreshDisciplineAction,
	addDisciplineAction, 
	rmDisciplineAction, 
	updDisciplineAction,
} from './disciplineReducer'
export default {
	/**WindowReducer */
	setWindow,
	resetWindow,
	/**fieldReducer*/
	addFieldManyAction,
	addFieldAction,
	rmFieldAction,
	rmAllFieldsAction,
	/**userReducer*/
	setUserIsAuthAction,
	setUserAction,
	cleanUserAction,
	updateUserAction,
	/**DataReducer */
	addDataAction,
	addDataItemAction, 
	rmDataItemAction, 
	updateDataItemAction,
	rmAllDataAction,
	asyncAddDataAction, 
	asyncAddDataItemAction, 
	asyncRmDataItemAction, 
	asyncUpdateDataItemAction,
	/** Discipline */
	setDisciplineAction,
	refreshDisciplineAction,
	addDisciplineAction, 
	rmDisciplineAction, 
	updDisciplineAction,
}