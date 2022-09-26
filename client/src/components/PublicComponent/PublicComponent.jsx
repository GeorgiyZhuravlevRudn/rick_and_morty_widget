import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { MAIN_ROUTE } from "../../utils/consts/ROUTES/USER_ROUTES.js";
import { pathNumToId } from "../../utils/pathUtils/pathNum.js";
import Discipline from "../Discipline/Discipline.jsx";
// Component, where we connect all public routes components
// подключаем все компоненты, которые относятся к publicRoutes
const PublicComponent = () => {
	const navigate = useNavigate();
	const {pathname} = useLocation();
	const params = useParams();
	const currentPath = pathNumToId(params?.id, pathname);
	const getComponent = () => {
		switch (currentPath){
			case MAIN_ROUTE.path:{
				return <Discipline/>
			}
			default:
				return <Discipline/>
		}
	}
	useEffect(()=>{
		navigate('../../' + MAIN_ROUTE.path, {replace:true})
	},[pathname])
	return(
		<div className='container user__wrap'>
			<div className='user__content'>
				{
					getComponent()
				}
			</div>
		</div>
	)
}
export default PublicComponent;