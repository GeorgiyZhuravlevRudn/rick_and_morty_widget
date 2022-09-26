import { useEffect, useState } from "react";
import { useCountdown } from "../../../hooks/useCountdown";

//targetDate={new Date().getTime() + 30000}
const TempAlert = ({msg, targetDate, classNames=[], setVisible, content}) => {
	const [days, hours, minutes, seconds] = useCountdown(targetDate);
	useEffect(()=>{
		if (days + hours + minutes + seconds <= 0) {
			setVisible(false)
		}
	 },[days, hours, minutes, seconds])
	return(
		<div className={`alertWindow ${classNames.join(' ')}`}>
			{
				msg
				?(
					<div className='alertWindow__text-container'>
						<p className='alertWindow__text'>
							{msg}
						</p>
					</div>
				)
				:<></>
			}
			{content}
		</div>
	)
}
export default TempAlert;