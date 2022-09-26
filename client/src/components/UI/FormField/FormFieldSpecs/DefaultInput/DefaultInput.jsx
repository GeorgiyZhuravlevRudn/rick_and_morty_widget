import { useEffect } from 'react';
import MaskInput from 'react-input-mask';
import { useSelector } from 'react-redux';
const DefaultInput = (props) => {
	const {
		requiredProps, 
		setInputFilled,
		//input classes
		inputRoot,
		labelRoot,
		pattern,
		mask
	} = props

	const {
		id, 
		inputType, 
		value, 
		setValue, 
		required, 
		disabled, 
		innerText,
		ref
	} = requiredProps;
	const onFocusHandler = () => {
		setInputFilled(true);
	}
	const onBlurHandler = () =>{
		if(mask === '+7(999)-999-99-99'){
			if(value==='+7(___)-___-__-__') setInputFilled(false)
		}
		if(value === ''){
			setInputFilled(false)
		}
	}
	const onChangeHandler = (e) => {
		setValue(e.target.value)
	}
	const inputProps = {
		className:`${inputRoot.join(' ')}`,
		id,
		type:inputType,
		value,
		required,
		disabled,
		onChange:onChangeHandler,
		onFocus:onFocusHandler,
		onBlur:onBlurHandler,
		autoComplete:"off",
		pattern,
		ref
	}
	return(
		<>
			{
				mask
				?(
					<MaskInput
						{...inputProps}
						mask={mask}
						maskChar='_'
					/>
				)
				:(
					<input 
						{...inputProps}
					/>
				)
			}
			<label 
				htmlFor={id} 
				className={labelRoot.join(' ')}
			>
				{innerText}
			</label>
		</>
	)
}
export default DefaultInput;