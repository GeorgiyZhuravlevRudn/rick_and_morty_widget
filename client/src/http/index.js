/*import axios from 'axios';
import { REACT_APP_API_URL } from '../utils/consts';
const $host = axios.create({
	baseURL: REACT_APP_API_URL
})
const $authHost = axios.create({
	baseURL: REACT_APP_API_URL
})
const authInterceptor = config => {
	config.headers.authorization = `Bearer ${localStorage.getItem('token')}`; // bearer+ ' ' + jwt
	//config.headers.authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwicGhvbmUiOiIrNzk2ODc5MDIyODgiLCJpYXQiOjE2NDg3MDc1NTIsImV4cCI6MTY0ODcxMzU1Mn0.0KL6yT94QQJakppFUGXlpBaP77pnkrPuimE_PhT-_Xg`
	return config
}
$authHost.interceptors.request.use(authInterceptor);
export {
	$host,
	$authHost
}*/

  
import axios from 'axios';
import { REACT_APP_API_URL } from '../utils/consts/ROUTES/API_ROUTES';
const $api = axios.create({
	withCredentials: true,
	baseURL: REACT_APP_API_URL,
})

// $api.interceptors.request.use((config) => {
// 	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
// 	return config;
// })
// $api.interceptors.response.use((config) => {
// 	return config;
// },async (error) => {
// 	const originalRequest = error.config;
// 	if (error.response.status == 401 && error.config && !error.config._isRetry) {
// 		originalRequest._isRetry = true;
// 		try {
// 			const {data} = await axios.get(`${REACT_APP_API_URL}/refresh`, {withCredentials: true})
// 			localStorage.setItem('token', data.data.accessToken);
// 			return $api.request(originalRequest);
// 		} catch (e) {
// 			console.log('НЕ АВТОРИЗОВАН')
// 		}
// 	}
// 	throw error;
// })


export {
	$api
};
