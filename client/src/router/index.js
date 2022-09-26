import PublicComponent from '../components/PublicComponent/PublicComponent.jsx';
import { LOGIN_ROUTE } from '../utils/consts/ROUTES/LOGIN_ROUTES.js';
import { REGISTER_ROUTE } from '../utils/consts/ROUTES/REGISTER_ROUTES.js';
import { MAIN_ROUTE } from '../utils/consts/ROUTES/USER_ROUTES.js';

export const publicRoutes = [
	{ path: MAIN_ROUTE.path, name:  MAIN_ROUTE.name, component: PublicComponent, exact: true },
	{ path: LOGIN_ROUTE.path, name:  LOGIN_ROUTE.name, component: PublicComponent, exact: true },
	{ path: REGISTER_ROUTE.path, name:  REGISTER_ROUTE.name, component: PublicComponent, exact: true },
	{ path: '*', component: PublicComponent, exact: true },
];

export const getRoutes = (routeName) => {
	switch(routeName){
		default:
			return publicRoutes;
	}
}