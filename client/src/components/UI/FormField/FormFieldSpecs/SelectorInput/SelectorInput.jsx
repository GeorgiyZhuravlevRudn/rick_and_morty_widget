import { useEffect, useState } from "react";

const SelectorInput = (props) => {
	const {
		requiredProps, 
		options,
		inputRoot,
		labelRoot
	} = props
	const {
		id, 
		value, 
		setValue, 
		disabled, 
		defaultValue,
		innerText,
		required,
		currValue,
	} = requiredProps;
	const [rootClasses , setRootClasses] = useState([...inputRoot]);
	//const [hoveredOption, setHoveredOption] = useState()
	useEffect(()=>{
		setValue(defaultValue);
	},[options])
	useEffect(()=>{
		if(value !== defaultValue){
			setRootClasses(prev => [...prev, '--active'])
		} else{
			setRootClasses(prev => prev.filter(prevClass => prevClass !== '--active'))
		}
	},[value])
	return(
		<>
		<select 
			className={`${rootClasses.join(' ')} form__field--select`}
			onChange={(e)=> setValue(e.target.value)}
			value={value}
			id={id}
			name={id}
			required={required}
			disabled={disabled}
		>
			{
				//<option >{innerText}</option>
			}
			{

				options.map(optionItem => {
					if(optionItem === value){
						return <option className="option --selected" key={optionItem}>{optionItem}</option>	
					}
					return <option className="option" key={optionItem}>{optionItem}</option>	
				})
			}
		</select>
		</>
	)
}
export default SelectorInput