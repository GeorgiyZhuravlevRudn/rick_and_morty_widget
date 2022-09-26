import { $api } from ".";
import { SERVER_ROUTES } from "../utils/consts/ROUTES/SERVER_ROUTES";

export const fetchDisciplines= async (props) => {
	const {
		limit,
		page=1,
	}=props;
	const {data} = await $api.get(SERVER_ROUTES.products, {
		params:{
			_limit: limit,
			_start: limit * page
		}
	})
	return data;
}