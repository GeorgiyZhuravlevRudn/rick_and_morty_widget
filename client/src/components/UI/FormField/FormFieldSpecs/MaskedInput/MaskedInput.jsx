import { useEffect } from 'react';
import MaskInput from 'react-input-mask';
const MaskedInput =(props) => {
	const {
		requiredProps, 
		setInputFilled,
		//input classes
		inputRoot,
		labelRoot,
		pattern
	} = props

	const {
		id, 
		inputType, 
		value, 
		setValue, 
		required, 
		disabled, 
		innerText,
	} = requiredProps;
	const onFocusHandler = () => {
		setInputFilled(true);
	}
	const onBlurHandler = () => {
		if(value === '') {
			setInputFilled(false)
		}
		else {
			setInputFilled(true)
		}
	}
	const onChangeHandler = (e) => {
		setValue(e.target.value)
	}
	useEffect(()=>{
		//setInputFilled(true)
	},[])
	return(
		<>
			<MaskInput
				className={`${inputRoot.join(' ')}`}
				id={id}
				mask="+7(999)-999-99" 
				type={inputType} 
				value={value}
				required={required}
				disabled={disabled}
				onChange={onChangeHandler}
				onFocus={onFocusHandler}
				onBlur={onBlurHandler}
				autoComplete="off"
			/>
			<label 
				htmlFor={id} 
				className={labelRoot.join(' ')}
			>
				{innerText}
			</label>
		</>

	)
}
export default MaskedInput