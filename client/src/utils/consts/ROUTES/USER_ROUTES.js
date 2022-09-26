import { API_ROUTE } from "./API_ROUTES"
import { USER } from "../index"
/**USERS */
const USER_ROUTE = {
	path: `${API_ROUTE}/${USER}`,
	name:'Пользователи'
}
const USER_ID_ROUTE = {
	path: `${USER_ROUTE.path}/:id`,
	name:'Пользователь'
}
const MAIN_ROUTE ={
	path:`${API_ROUTE}/main`,
	name:''
}
export {
	USER_ROUTE,
	USER_ID_ROUTE,
	MAIN_ROUTE 
}