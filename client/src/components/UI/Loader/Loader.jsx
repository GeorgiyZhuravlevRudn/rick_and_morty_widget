import React from "react";
import classes from './Loader.module.css';
const Loader = ({width=100, height=100}) => {
	return(
		<div 
			className={classes['loader']} 
			style={
				{
					width:`${width}px`, 
					height:`${height}px`,
					borderWidth:`${Math.ceil(width/10)}px`
				}
			}
		>
		</div>
	)
}
export default Loader;