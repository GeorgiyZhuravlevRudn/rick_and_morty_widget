/**import CreateDealForm from "../../components/UI/Forms/CreateDealForm/CreateDealForm"
import RegisterForm from "../../components/UI/Forms/RegisterForm"
import ImageLinks from "../../components/UI/ImageLinks/ImageLinks"
import Loader from "../../components/UI/loader/Loader"
import { PHONE_LINK, TG_LINK, WHATSAPP_LINK } from "./LINKS"
import { REGISTER_ADMIN_ROUTE, REGISTER_CLIENT_ROUTE, REGISTER_MANAGER_ROUTE } from "./ROUTES"

export const BTN_CREATE_DEAL = {	
	props: {
		id: 'btn--createDeal',
		children:'Создать сделку'
	},
	item:<CreateDealForm formType='blocks' isModal={true}/>,
	option:'modal__create-deal',
	isModal:true
}
export const BTN_CREATE_DEAL_MOBILE = {
	...BTN_CREATE_DEAL,
	props:{
		...BTN_CREATE_DEAL.props,
		children:'',
		spec:['btn--interactive','btn--add'],
	}
}
export const BTN_LOADER = {
	props:{
		id: 'btn--loader',
		isModal:false,
		classNames:['project_ref--disabled'],
		children:(
			<span>
				<div style={{display: 'flex', justifyContent: 'center',height:'100%', width:'100%'}}>
					<Loader width={20} height={20}/>
				</div> 
			</span>
		),

	}

}
export const BTN_DEALS_LIST = {
	props: {
		id: 'btn--dealsList',
		children:'Список сделок'
	},
	title:'Список сделок',
	//option:'modal__create-deal',
	isModal:true
}
export const BTN_RETURN = {
	props: {
		id: 'btn--return',
		children:'Отменить',
		className: 'btn--return'
	},
	//option:'modal__create-deal',
	isModal:false
}
export const BTN_SAVE = {
	props: {
		id: 'btn--save',
		children:'Сохранить',
		className: 'btn--save'
	},
	isModal:false
}
export const BTN_REMOVE = {
	props: {
		id: 'btn--remove',
		children:'удалить',
		spec:['btn--custom-red']
	},
	//option:'modal__create-deal',
	isModal:false
}
export const BTN_CONTACT = {	
	props: {
		id: 'btn--contact',
		children:'Связаться',
		classNames:['btn--contant']
	},
	item:<ImageLinks imageItems={[TG_LINK,WHATSAPP_LINK,PHONE_LINK]}/>,
	option:'modal__contact',
	isModal:true,
	modification:'read-only',
	title:'Связь с менеджером',
}
export const BTN_CONTACT_MOBILE = {
	...BTN_CONTACT,
	props:{
		...BTN_CONTACT.props,
		children:'',
		spec:['btn--interactive','btn--contact'],
	}
}
export const BTN_REGISTER_ADMIN = {	
	props: {
		id: 'btn--register',
		children:'Регистрация администратора',
		spec:['btn--link']
	},
	item:<RegisterForm isModal={true} formPath={REGISTER_ADMIN_ROUTE.path}/>,
	option:'modal__register--admin',
	isModal:true
}
export const BTN_REGISTER_MANAGER = {	
	props: {
		id: 'btn--register',
		children:'Регистрация менеджера',
		spec:['btn--link']
	},
	item:<RegisterForm isModal={true} formPath={REGISTER_MANAGER_ROUTE.path}/>,
	option:'modal__register--manager',
	isModal:true
}
export const BTN_REGISTER_CLIENT = {	
	props: {
		id: 'btn--register',
		children:'Регистрация клиента',
	},
	item:<RegisterForm isModal={true} formPath={REGISTER_CLIENT_ROUTE.path}/>,
	option:'modal__register--default',
	isModal:true
}
export const BTN_RELOAD = {
	props: {
		id: 'btn--register',
		children:'Регистрация клиента',
	},
	isModal:false,
	
}
export const BTNS_MANAGER = [
	BTN_REGISTER_CLIENT,
	BTN_CREATE_DEAL,
]
export const BTNS_MANAGER_MOBILE = [
	BTN_CREATE_DEAL_MOBILE,
]
export const BTNS_USER = [
	//BTN_CREATE_DEAL,
	BTN_CONTACT,
]
export const BTNS_USER_MOBILE = [
	BTN_CREATE_DEAL_MOBILE,
	BTN_CONTACT,
]**/