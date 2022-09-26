import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import tempAlert from "../../../../../utils/tempAlert";
import ClickBox from "./ClickBox";

const ClickBoxes = (props) => {
	const {
		requiredProps, 
		multiple=false,
		constantValue,
		options,
		optionsWithChildren=[]
	} = props
	const {
		id, 
		inputType, 
		value, 
		setValue, 
		disabled, 
		innerText,
		required,
		defaultValue,
	} = requiredProps;
	/**
	 * options - boxes content
	 * defaultValue -  box chosen by default
	 * constantValue - box chosen, cant remove
	 * multiple - can choose multiple options
	 * if !multiple -> !constantValue
	 */
	 const {fields} = useSelector(state=>state.fieldValueReducer)
	const isConstantValue = (value) => {
		if(typeof constantValue === typeof []){
			for(let i = 0; i < constantValue.length; i++){
				if(value === constantValue[i]){
					return true;
				}
			}
		} else {
			return constantValue === value
		}
	}
	// has item in field reducer
	const isItemChosen = (option) => {
		if(multiple && isConstantValue(option)){
			return true;
		}
		if((multiple || optionsWithChildren.length) && value ){
			for(let i = 0; i < value.length;i++){
				if(value[i] === option){
					return true
				}
			}
			return false
		} else if (!multiple && value){
			return value[0] === option
		}
	}
	// adding and deleting field with it children
	const withChildren = (option, children) => {
		const chosen = isItemChosen(option);
		let sortedArr = []
		if(chosen){
			sortedArr = [...value.filter(val => val !== option)];
			for(let i = 0; i < children.length; i++){
				sortedArr = sortedArr.filter(val => val !== children[i]);
			}
			if(sortedArr.length === 0){
				sortedArr= [defaultValue]
			}
		} else {
			if(multiple){
				sortedArr = [...value, option, ...children]
			} else{
				sortedArr = [option, ...children]
			}
		}
		const noDuplicates = sortedArr.filter((item, index) => sortedArr.indexOf(item) === index);
		setValue([...noDuplicates])
	}
	const withParent = (option, parent) => {
		const chosen = isItemChosen(option);
		let sortedArr = []
		if(chosen){
			// if child is chosen -> removing parent + child
			sortedArr = [...value.filter(val => val !== option && val !== parent)];
			if(sortedArr.length === 0){
				sortedArr= [defaultValue]
			}
		} else {
			if(multiple){
				sortedArr = [...value, option]
			} else{
				// if child isnt chosen -> choose only child
				sortedArr = [option]
			}
		}
		const noDuplicates = sortedArr.filter((item, index) => sortedArr.indexOf(item) === index);
		setValue([...noDuplicates])
	}
	const getParent = (possibleChild) => {
		// if object is a child of any parent
		for(let i=0; i<optionsWithChildren.length; i++) {
			const children = optionsWithChildren[i].children.filter(children => children === possibleChild);
			//console.log(children)
			if(children.length){
				return optionsWithChildren[i]
			}
		}
		return false
	}
	const getOptionChildren = (option) => {
		for(let i=0; i<optionsWithChildren.length;i++){
			if(option === optionsWithChildren[i].option){
				return optionsWithChildren[i];
			}
		}
		return false;
	}
	const itemOnClickHandler = (option) => {
		if(isConstantValue(option)){
			return;
		}
		const optionChildren = getOptionChildren(option);
		const optionParent = getParent(option);
		if(optionParent){
			withParent(option, optionParent.option)
			return;
		}
		if(optionChildren){
			withChildren(optionChildren.option, optionChildren.children)
			return;
		}
		const chosen = isItemChosen(option);
		if(multiple && value){
			if(chosen){
				if(value.length === 1){
					if(required){
						// cant unChoose if only 1 element is chosen + required
						tempAlert('должно быть выбрано хотя бы 1 поле',3000,['--invalid']);
						return;
					} else{
						//if !required && value.length ===1
						setValue([])
					}
				} else{
					setValue([...value.filter(val => val !== option)]);
				}
				//setValue([...value.filter(val => val !== option)]);
			} else{
				setValue([...value, option])
			}
			//dispatch(actions.addFieldAction({id:fieldId, value: [...sortedArr]}))
		}else if (!multiple && value){
			if(chosen){
				tempAlert('должно быть выбрано хотя бы 1 поле',3000,['--invalid'])
				return
			}
			setValue([option])
		}
	}
	useEffect(()=>{
		// defaultValue - is array
		if(defaultValue){
			setValue(defaultValue)
		}
		//console.log('multiple', multiple, defaultValue)
		// exists in Form field component
		/*if(multiple && defaultValue){
			dispatch(actions.addFieldAction({id:fieldId, value: [defaultValue]}))
		}else if(!multiple && defaultValue){
			dispatch(actions.addFieldAction({id:fieldId, value:defaultValue}))
		}*/
	},[])
	useEffect(()=>{
		// if(fields[`${id}`]){
		// 	setValue(fields[`${id}`])
		// }
	}, [fields[`${id}`]])
	return(
		<div className={`form__field--clickboxes-container`}>
				{
					options.map(
						option => 
						<ClickBox 
							itemChosen={isItemChosen(option)}
							onClick = {() => itemOnClickHandler(option)}
							key = {option}
							option = {option}
						/>
					)
				}
		</div>
	)
}
export default ClickBoxes;
