const defaultState ={
	width:0,
	height:0,
}

export const SET_WINDOW = 'SET_WINDOW';
export const RESET_WINDOW = 'RESET_WINDOW';

export const windowReducer = (state = defaultState,  action) => {
	switch(action.type) {
		case SET_WINDOW:
			return {
				...state,
				width:action.payload.width,
				height:action.payload.height
			}
		case RESET_WINDOW:
			return {
					...state,
					width:0,
					height:0
				}
		default:
			return state
	}
}

export const setWindow = (payload) => ({type:SET_WINDOW, payload})
export const resetWindow = () => ({type:RESET_WINDOW})