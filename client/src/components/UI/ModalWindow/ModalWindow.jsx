import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import actions from "../../../store/reducers/actions.js";
import FormBtn from "../FormBtn/FormBtn.jsx";
import classes from './ModalWindow.module.css';
// написать документацию
const ModalWindow = (props) => {
	const {
		children, 
		visible=true, 
		setVisible,  
		modification ='',
		modalClasses = [],// throw a size or any style
		layerModal = false,
		canClose=true
	} = props
	const dispatch = useDispatch();
	const wrapClasses = [classes['modal__wrap']];
	const rootClasses = [classes['modal'],...modalClasses.map(className => classes[className])];
	// modalClasses.forEach(className =>{
	// 	rootClasses.push(classes[className])
	// 	console.log(rootClasses)
	// })
	if ( !visible ) {
		rootClasses.push("visually-hidden");
		document.body.style.overflow = 'auto';
	} else {
		document.body.style.overflow = 'hidden';
	}
	const closeHandler = () => {
		if(!canClose){
			return
		} 
		setVisible(false);
		if(modification !== 'read-only'){
			dispatch(actions.rmAllFieldsAction())
		}
	}
	useEffect(()=>{
		return () => {
			if(!layerModal){
				document.body.style.overflow = 'scroll';
			}
			// dispatch(actions.rmAllFieldsAction())
		}
	},[])
	return(
		<div 
			className = {wrapClasses.join(' ')} 
			onClick={closeHandler}>
			{/* onClick is affecting on all of childs, so we need to do : onClick={(e) => e.stopPropagation()
				for our formWrapper
			*/}
			<div className= {rootClasses.join(' ')}  onClick={(e) => e.stopPropagation()}>
				{
					canClose
					?<FormBtn spec={['btn--close','btn--interactive']} 
					handleClick={closeHandler}
					>x</FormBtn>
					:<></>
				}
				{children}
			</div>
		</div>
	)
};

export default ModalWindow;