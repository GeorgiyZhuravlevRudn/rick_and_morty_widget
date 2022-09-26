import { API_ROUTE } from "./API_ROUTES"
import { REGISTER } from "../index"
const REGISTER_ROUTE = {
	path: `${API_ROUTE}/${REGISTER}`,
	name:'Регистрация'
}
const REGISTER_ADMIN_ROUTE = {
	path: `${REGISTER_ROUTE.path}/admin`,
	name:'Регистрация администратора'
}
const REGISTER_MANAGER_ROUTE = {
	path: `${REGISTER_ROUTE.path}/manager`,
	name: 'Регистрация менеджера'
}
const REGISTER_CLIENT_ROUTE = {
	path: `${REGISTER_ROUTE.path}/client`,
	name: 'Регистрация клиента'
}

export {
	REGISTER_ROUTE,
	REGISTER_ADMIN_ROUTE,
	REGISTER_MANAGER_ROUTE,
	REGISTER_CLIENT_ROUTE
}