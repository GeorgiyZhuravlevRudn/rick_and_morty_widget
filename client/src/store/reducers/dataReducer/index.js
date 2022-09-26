import { DATA_NAMES } from "../../../utils/consts";

const defaultState ={
	filter:{
		totalCount:0,
		list:[],
	},
	directions:{
		totalCount:0,
		list:[],
	}
}
const ADD_DATA = 'ADD_DATA';
const ADD_DATA_ITEM = 'ADD_DATA_ITEM';
const RM_DATA_ITEM = 'RM_DATA_ITEM';
const UPDATE_DATA_ITEM='UPDATE_DATA_ITEM';
const RM_ALL_DATA = 'RM_ALL_DATA';

export const ASYNC_ADD_DATA = 'ASYNC_ADD_DATA';
export const ASYNC_ADD_DATA_ITEM = 'ASYNC_ADD_DATA_ITEM';
export const ASYNC_RM_DATA_ITEM = 'ASYNC_RM_DATA_ITEM';
export const ASYNC_UPDATE_DATA_ITEM = 'ASYNC_UPDATE_DATA_ITEM';

export const dataReducer = (state = defaultState,  action) => {
	let dataName = '';
	if(action.payload) dataName=action.payload.dataName;// string
	switch(action.type) {
		case ADD_DATA:
			return {
				...state, 
				[dataName]: {
					list:[...state[dataName].list, ...action.payload.list],
					totalCount: action.payload.totalCount,
				}
			}
		case ADD_DATA_ITEM: 
			return {
				...state, 
				[dataName]: {
					list:[...state[dataName].list, action.payload.dataItem],
					totalCount: state[dataName].totalCount + 1,
				}
			}
		case RM_DATA_ITEM: 
			return {
				...state, 
				[dataName]: {
					list: state[dataName].list.filter((c) => c.id !== action.payload.dataItemId),
					totalCount: state[dataName].totalCount - 1,
				}
			}
		case UPDATE_DATA_ITEM: 
			let indexOfItem = 0;
			if(state[dataName].list.length > 0){
				indexOfItem =state[dataName].list.map( item => item.id).indexOf(action.payload.item.id);
			}
			let updList = [...state[dataName].list];
			updList[indexOfItem] = action.payload.item;
			return {
				...state, 
				[dataName]: {
					...state[dataName],
					list:  [...updList]
				}
			}
		case RM_ALL_DATA:
				return {
					...state,
					[dataName]: {
						list:[],
						totalCount:0,
					}
				}
		default:
			return state
	}
}

export const addDataAction = (payload) => ({type: ADD_DATA, payload});
export const addDataItemAction = (payload) => ({type:ADD_DATA_ITEM, payload});
export const rmDataItemAction = (payload) => ({type:RM_DATA_ITEM, payload});
export const updateDataItemAction = (payload) => ({type:UPDATE_DATA_ITEM, payload}); 
export const rmAllDataAction = (payload) => ({type: RM_ALL_DATA, payload}) 

export const asyncAddDataAction = (payload) => ({type: ASYNC_ADD_DATA, payload});
export const asyncAddDataItemAction = (payload) => ({type:ASYNC_ADD_DATA_ITEM, payload});
export const asyncRmDataItemAction = (payload) => ({type:ASYNC_RM_DATA_ITEM, payload});
export const asyncUpdateDataItemAction = (payload) => ({type:ASYNC_UPDATE_DATA_ITEM, payload}); 