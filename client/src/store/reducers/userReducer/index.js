import User from "../../../utils/classes/User";

const defaultState ={
	isAuth: false,
	user:{},
}
export const SET_IS_AUTH ='SET_IS_AUTH';
export const SET_USER = 'SET_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const CLEAN_USER = 'CLEAN_USER';
export const userReducer = (state = defaultState,  action) => {
	switch(action.type) {
		case SET_IS_AUTH:
			return {...state, isAuth: action.payload}
		case SET_USER:
			return {...state, user: action.payload}
		case UPDATE_USER:
			return {
				...state
			}
		case CLEAN_USER:
			return {...state, isAuth:false, user: {}}
		default:
			return state
	}
}
export const cleanUserAction = () => ({type:CLEAN_USER})
export const updateUserAction = (payload) => ({type:UPDATE_USER, payload})
export const setUserIsAuthAction = (payload) => ({type:SET_IS_AUTH, payload})
export const setUserAction = (payload) => ({type:SET_USER, payload})