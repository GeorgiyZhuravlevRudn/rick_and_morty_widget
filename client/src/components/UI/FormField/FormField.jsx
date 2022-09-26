import React,{useState, useEffect, useMemo, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../store/reducers/actions";
import ClickBoxes from "./FormFieldSpecs/ClickBoxes/ClickBoxes";
import SelectorInput from "./FormFieldSpecs/SelectorInput/SelectorInput" 
import DefaultInput from "./FormFieldSpecs/DefaultInput/DefaultInput";
import QueryInput from "./FormFieldSpecs/QueryInput/QueryInput";
// forAllClasses - affects on all elms
const FormField = (props) => {
	/**
	 * fields that suites for every inputType
	 * inputType, 
		id,   
		currValue, 
		errorMessage,
		required,
		disabled,
		value,
		setValue
	 */
	const {
		innerText='', 
		inputType='text', 
		id='', 
		spec='', 
		options=[], 
		currValue,
		defaultValue = '',
		errorMessage='',
		pattern,
		required=false,
		disabled,
		optionsWithChildren,
		mask='',
		refresh,
		classNames=[],
		labelClasses=[],
		containerClasses=[],
		forAllClasses=[],
		addedContent,
		refreshVal ='',
		redoHandler=()=>{}
	} = props;
	const dispatch = useDispatch();
	const [inputFilled, setInputFilled] = useState(false);
	const [isInvalid, setIsInvalid] = useState(false);
	const [value, setValue] = useState('');
	const valueRef = useRef('');
	const fieldValue = useSelector(state=>state.fieldValueReducer.fields)
	const inputRoot = ['form__field', ...classNames, ...forAllClasses];
	const labelRoot = ["form__field-label", ...labelClasses,...forAllClasses];
	const containerRoot= ['form__field-container', ...containerClasses,...forAllClasses]
	if (inputFilled) {
		labelRoot.push("form__field-label--active")
	}
	/*if(!required){
		inputRoot.push('form__field--not-required')
	} else if(!isInvalid && inputFilled){
		inputRoot.push('form__field--valid--filled')
	}*/
	const requiredProps = () => {
		return({ 
			inputType, 
			id,   
			currValue, 
			errorMessage,
			required,
			disabled,
			value,
			setValue,
			innerText,
			defaultValue,
			classNames,
			ref:valueRef
		})
	}
	const inputValid = (val) => {
		// if no pattern -> isValid
		val = `${val}`
		if(pattern){
			try{
				const flag = val.match(pattern)
				if(!flag){
					return false
				} else if ( val.length > flag[0].length){
					return false
				}
			} catch(e){
				console.log(e)
			}
			
		}
		return true
	}
	const checkInput = (eventVal) => {
		/**
		 * 1. check if input isEmpty -> remove from reducer
		 * 2. check if input isValid -> add to reducer
		 */
		if(eventVal === '' || eventVal === []){
			//setInputFilled(false);
			dispatch(actions.rmFieldAction(id));
			return;
		} else if (eventVal !== '' && eventVal !== []){
			setInputFilled(true);
			const valid = inputValid(eventVal);
			if(valid) {
				setIsInvalid(false); 
				if(typeof eventVal === typeof []){
					dispatch(actions.addFieldAction({id: id, value:[...eventVal]}));
				} else {
					dispatch(actions.addFieldAction({id: id, value: eventVal}));
				}
			} else {
				setIsInvalid(true); 
				return
			}
		}
	}
	const getSpecItem = (specType) => {
		switch(specType){
			case 'selector':
				return(
					<SelectorInput
						requiredProps={requiredProps()} 
						inputRoot={inputRoot} 
						options={options}
						labelRoot={labelRoot}
					/>
				)
			// case 'date':{
			// 	return(
			// 		<DateInput requiredProps={requiredProps()} inputRoot={inputRoot}/>
			// 	)
			// }
			// case 'time':{
			// 	return(
			// 		<TimeInput requiredProps={requiredProps()} inputRoot={inputRoot}/>
			// 	)
			// }
			// case 'checkbox':{
			// 	return (
			// 		<CheckBox requiredProps={requiredProps()}/>
			// 	)
			// }
			case 'clickboxes':{
				return (
					<ClickBoxes 
						requiredProps={requiredProps()}
						multiple={props.multiple}
						options={options}
						optionsWithChildren={optionsWithChildren}
					/>
				)
			}
			// case 'filter':{
			// 	return (
			// 		<DataFilter
			// 			requiredProps={requiredProps()}
			// 			multiple={props.multiple}
			// 			options={options}
			// 			optionsWithChildren={optionsWithChildren}
			// 		/>
			// 	)
			// }
			// case 'fileLoader':{
			// 	return(
			// 		<FileLoader
			// 			requiredProps={requiredProps()}
			// 			fileAccept = {props.fileAccept}
			// 			multiple = {props.multiple}
			// 			inclDrop = {props.inclDrop}	
			// 		/>
			// 	)
			// }
			case 'query':{
				return(
					<QueryInput
						requiredProps={requiredProps()}
						inputRoot={inputRoot}
						setInputFilled={setInputFilled}
						labelRoot={labelRoot}
						pattern={pattern}
						mask={mask}
						fetchFunction ={props?.fetchFunction}// fetching on query request
						queryParams ={props?.queryParams}
						fetchDeps = {props?.fetchDeps}
					/>
				)
			}
			case 'filter':{
				return <></>
			}
			default:
				return (
					<DefaultInput 
						requiredProps={requiredProps()}
						inputRoot={inputRoot}
						setInputFilled={setInputFilled}
						labelRoot={labelRoot}
						pattern={pattern}
						mask={mask}
					/>
				)
		}
	}
	useEffect(() => {
		console.log(`created ${id}`, value)
		if(currValue)
		{
			checkInput(currValue)
		}
		if(fieldValue[id]){
			checkInput(fieldValue[id])
		}
		if(inputType ==='date'){
			setInputFilled(true);
		}
		return(()=>{
			dispatch(actions.rmFieldAction(id));
			//console.log(id + ' removed')
		})
	},[])
	useEffect(()=>{
		const delayDebounceFn = setTimeout(() => {
			checkInput(value)
		}, 50)
		return () => clearTimeout(delayDebounceFn)
	},[value])
	useEffect(()=>{
		if(refresh){
			checkInput('')
			setInputFilled(false)
			setValue('')
		}
	},[refresh])
	return (
		<div className={`${containerRoot.join(' ')}`}>
			<div className={`form__field-wrap ${forAllClasses.join(' ')}`}>
				{
					getSpecItem(spec)
				}
				{
					isInvalid && inputFilled
					?<span className= {`form__field-span form__field-span--invalid ${forAllClasses.join(' ')}`}>{errorMessage}</span>
					:<span className= {`form__field-span ${forAllClasses.join(' ')}`}>{errorMessage}</span>
				}
			</div>
		</div>
	);

}

export default FormField;