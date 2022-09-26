import { useEffect, useState } from 'react';

const QueryInput = (props) => {
	const {
		requiredProps, 
		setInputFilled,
		//input classes
		inputRoot,
		labelRoot,
		pattern,
		fetchFunction = async () => {},
		fetchDeps=[],
		queryParams,// additional params to fetch request, changes outside component
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
	} = requiredProps;
	const [list, setList] = useState([]);
	const [isActive, setIsActive] = useState(false);
	const onFocusHandler = () => {
		setInputFilled(true);
		setIsActive(true);
	}
	const onChangeHandler = (e) => {
		setValue(e.target.value)
	}
	const onBlurHandler = () =>{
		if(value === ''){
			setInputFilled(false)
		}
		setTimeout(()=>{setIsActive(false)},200)
		//setIsActive(false)
	}
	const handleItemOnClick = (newVal) => {
		setValue(newVal)
	}
	const inputProps = {
		className:`${inputRoot.join(' ')} form__field--query`,
		id,
		type:inputType,
		value,
		required,
		disabled,
		onChange:onChangeHandler,
		onFocus:onFocusHandler,
		onBlur:onBlurHandler,
		autoComplete:"off",
		pattern
	}
	const getData = async () => {
		if(!value) setList([])
		let response = null;
		try{
			response = await fetchFunction({...queryParams, query:value});
		}catch(e){
			console.log(e);
		}
		if(response.data){
			console.log(response)
			setList([...response.data])
		}
	}
	useEffect(()=>{
		console.log(value)
		console.log(queryParams)
		const delayDebounceFn = setTimeout(() => {
			getData();
		}, 500)
		return () => clearTimeout(delayDebounceFn)
	}, [value, ...fetchDeps])
	return(
		<>
			<input 
				{...inputProps}
			/>
			<label 
				htmlFor={id} 
				className={labelRoot.join(' ')}
			>
				{innerText}
			</label>
			{
				isActive
				?<ul className='form__field--query__list content-list'>
					{	
						list?.length
						?list.map(
							(item)=>
							<li
							onClick ={() => handleItemOnClick(item.value)}
							className='content-list__item'
							key={item.value}
							>
								{item.value}
							</li>
						)
						:'ничего не найдено'
					}
				</ul>
				:''
			}
		</>
	)
}
export default QueryInput;