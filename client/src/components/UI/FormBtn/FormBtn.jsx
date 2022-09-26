import React, {useState} from 'react';
import classes from './FormBtn.module.css';
const FormBtn = (props) => {
	const {handleClick, type='button', spec, children, id, disabled, className='', classNames=[]} = props;
	const [isActive, setIsActive] = useState(false);
	const rootClasses = [classes['btn'], ...classNames, className];
	const spanClasses = [classes['btn-span']];
	if (spec){
		spec.forEach(
			spec => rootClasses.push(classes[spec])
		)
	}
	if(isActive){
		spanClasses.push(classes['_active'])
	}
	const handleOnClick = (e) => {
		e.preventDefault();
		if(handleClick) handleClick(e);
		console.log(props)
		!isActive
		?setIsActive(true)
		:setIsActive(false)
	}
	return (
		<button 
			className={rootClasses.join(' ')}
			type={type} 
			onClick={handleOnClick}
			disabled={disabled}
			name={id}
			id={id}
		>
			{
				children
				? <span className={classes['btn-span']}>{children}</span>
				: <span className={spanClasses.join(' ')}></span>
			}
		</button>
	)
}
export default FormBtn;