import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter} from "react-router-dom";
import AppRouter from './components/AppRouter';
import Loader from "./components/UI/Loader/Loader";
import useWindowDimensions from './hooks/useWindowDimensions';
import './css/styles.min.css';
import actions from "./store/reducers/actions";

export default function App() {
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();
	const {height, width} = useWindowDimensions();
	useEffect(()=>{
		const delayDebounceFn = setTimeout(() => {
			dispatch(actions.setWindow({width,height}))
		}, 100)
		return () => clearTimeout(delayDebounceFn)
	},[width, height])
	return (
		<BrowserRouter basename="/">
			{
				isLoading
				? <div style={{position:'fixed', display: 'flex', justifyContent: 'center',height:'100%', width:'100%'}}><Loader/></div> 
				:<AppRouter/>
			}
		</BrowserRouter>
	);
}

