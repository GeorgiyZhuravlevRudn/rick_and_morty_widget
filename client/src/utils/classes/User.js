import { userNames } from "../consts/OBJECT_FIELDS";

export default class User {
	constructor(props) {
		const {
			id,
			role ,
			orders=[],
			firstname,
			lastname,
			email,
			phone,
			brand,
			inn,
			bik,
			kpp,
			rs,
			totalPaid,
			bonusPoints,
			currentOrder ,
			tg,
			whatsapp,
			legalPerson
		} = props
		this._id = id;
		this._role = role;
		this._tg=tg;
		this._whatsapp=whatsapp;
		this._orders = orders;
		this._firstname = firstname;
		this._lastname = lastname;
		this._email = email;
		this._phone= phone;
		this._brand = brand;
		this._inn = inn;
		this._bik = bik;
		//this._kpp = kpp;
		this._rs = rs;
		this._totalPaid = totalPaid;
		this._bonusPoints = bonusPoints;
		this._currentOrder = currentOrder;
		this._legalPerson = legalPerson;
	}
	get id(){
		return this._id;
	}
	get role(){
		return this._role
	}
	get orders(){
		return this._orders
	}

	setAnyField(valId, val){
		this[`_${valId}`] = val
	}
	getFieldText(fieldId){
		if(!this[`_${fieldId}`]){
			return (<><span className='item__span'>{userNames[fieldId]}: </span> неизвестно</>);
		}
		return (<><span className='item__span'>{userNames[fieldId]}: </span>{this[`_${fieldId}`]}</>);
	}
	getValue(fieldId){
		return this[`_${fieldId}`];
	}
}
