export const FIELD_TYPE_INPUT = 'INPUT';
export const BLOCK_TYPE = 'blocks';
export const RAW_FIELDS_TYPE = 'raw_fields';
export const FILTER_TYPES = ['name', 'species', 'type']
export const STATUS = 'status';
export const GENDER = 'gender';
export const FILTER_OPTION = 'filter_option';
export const FILTER_QUERY = 'filter_query';
export const AMOUNT = 'amount';
const FORM_FIELDS = {
	[STATUS]: {
		id: STATUS,
		fieldType: FIELD_TYPE_INPUT,
		options: ['Status', 'Alive', 'Dead', 'unknown'],
		errorMessage: 'выберите один из вариантов',
		spec: 'selector',
		currValue:'Status',
		defaultValue:'Status',
		required: true
	},
	[GENDER]: {
		id: GENDER,
		fieldType: FIELD_TYPE_INPUT,
		options: ['Gender','Male', 'Female', 'Genderless', 'unknown'],
		errorMessage: 'Выберите один из вариантов',
		spec: 'selector',
		innerText: 'Gender',
		currValue:'Gender',
		defaultValue:'Gender',
		required: true
	},
	[FILTER_OPTION]: {
		id: FILTER_OPTION,
		fieldType: FIELD_TYPE_INPUT,
		options: [...FILTER_TYPES],
		spec: 'clickboxes',
		defaultValue: [],
		// constantValue:'name',
		//currValue: [],
		multiple: true,
		required: false,
	},
	[FILTER_QUERY]: {
		id: FILTER_QUERY,
		fieldType: FIELD_TYPE_INPUT,
		type:'text',
		required: true
	},
	[AMOUNT]: {
		id: AMOUNT,
		fieldType: FIELD_TYPE_INPUT,
		innerText: 'Сумма*',
		type: 'number',
		required: true,
	}
}
// setFields inside blocks
// !!!!!!!! make form block as a component -> so it has its own state !!!!!!

/**
 * has single field blocks (without title) -> looks like a regular field
 * blockId:{
 * 	blockTitle:null
 * 	fields:[FORM_FIELD[blockId]]
 * }
 * and multiple fields block
 *  blockId:{
 * 	blockTitle:null || smth
 * 	fields:[FORM_FIELD[fieldId_1],FORM_FIELD[fieldId_2],...,FORM_FIELD[fieldId_n]]
 * }
 * all block ids is const type -> written like an object fields(that we use for an app)
 */
const FORM_BLOCKS = {
	// [IS_LEGAL]:{
	// 	id: IS_LEGAL,
	// 	blockTitle:'',
	// 	classNames:['isLegal'],
	// 	fields:[
	// 		FORM_FIELDS['aaa']
	// 	]
	// },
}

export {
	FORM_FIELDS,
	FORM_BLOCKS
} 