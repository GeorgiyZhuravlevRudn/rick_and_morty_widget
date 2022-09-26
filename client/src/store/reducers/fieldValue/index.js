const defaultState ={
	fields: {},
}
export const ADD_FIELD ='ADD_FIELD';
export const ADD_FIELD_MANY ='ADD_FIELD_MANY';
export const UPDATE_FIELD ='UPDATE_FIELD';
export const RM_FIELD = 'RM_FIELD';
export const RM_ALL_FIELDS = 'RM_ALL_FIELDS';
export const fieldValueReducer = (state = defaultState,  action) => {
	switch(action.type) {
		case ADD_FIELD :
			return {
				...state, 
				fields: {...state.fields, [action.payload.id]:action.payload.value}
			}
		case ADD_FIELD_MANY:
			return {
				...state, 
				fields: {...state.fields, ...action.payload}
			}
		case RM_FIELD :
			let stateCopy = Object.entries({...state.fields});
			return {
				...state, 
				fields: {
					...Object.fromEntries(stateCopy.filter((item) =>  item[0] !== action.payload))
				}
			}
		case UPDATE_FIELD:
			return{
				...state,
				fields: {
					...state.fields,
					[action.payload.id]: action.payload.value,
				}
			}
		case RM_ALL_FIELDS:
			return {
				...state,
				fields: {}
			}
		default:
			return state
	}
}
export const addFieldManyAction = (payload) => ({type:ADD_FIELD_MANY, payload})
export const addFieldAction = (payload) => ({type:ADD_FIELD, payload})
export const rmFieldAction = (payload) => ({type:RM_FIELD, payload})
export const rmAllFieldsAction = () => ({type:RM_ALL_FIELDS}) 