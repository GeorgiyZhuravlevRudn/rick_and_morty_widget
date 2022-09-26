import { addManyObjToArr, rmManyObjById, updManyObjById } from "../../../utils/reducerMethods";
const defaultState ={
	discipline:[]
}

export const SET_DISCIPLINE = 'SET_DISCIPLINE';
export const REFRESH_DISCIPLINE='REFRESH_DISCIPLINE';

export const ADD_DISCIPLINE ='ADD_CHARACTER';
export const UPDATE_DISCIPLINE ='UPDATE_CHARACTER';
export const RM_DISCIPLINE ='RM_CHARACTER';

export const disciplineReducer = (state = defaultState,  action) => {
	switch(action.type) {
		//payload = form
		case SET_DISCIPLINE:{
			return{
				...action.payload
			}
		}
		case REFRESH_DISCIPLINE:{
			return{
				...defaultState
			}
		}
		case ADD_DISCIPLINE:{
			/**
			 * payload:{
				* blocks:[
					* {
					* 	pos:0,
					* 	content:{//block}
					*}
				* ]
			 * }
			*/
			return {
				...state, 
				discipline: [...addManyObjToArr(state.discipline, action.payload)]
			}
		}
		case UPDATE_DISCIPLINE:{
			return {
				...state, 
				discipline: [...updManyObjById(state.discipline, action.payload)]
			}
		}
		case RM_DISCIPLINE:{
			return {
				...state, 
				discipline: [...rmManyObjById(state.discipline, action.payload)]
			}
		}
		default:
			return state
	}
}
export const setDisciplineAction = (payload) => ({type:SET_DISCIPLINE, payload})
export const refreshDisciplineAction = () => ({type:REFRESH_DISCIPLINE})
export const addDisciplineAction = (payload) => ({type:ADD_DISCIPLINE, payload})
export const updDisciplineAction = (payload) => ({type:UPDATE_DISCIPLINE, payload})
export const rmDisciplineAction = (payload) => ({type:RM_DISCIPLINE, payload})

