import { useEffect, useState } from "react"
import ModalWindow from "../../modalWindow/ModalWindow"
import FormBtn from "../FormBtn"

const ModalBtn = (props) => {
	const {modalComponent, btnProps, title, onClick=()=>{}} = props
	const [isVisible, setIsVisible] = useState(false);
	//Adding setVisible to inner Component
	const formatItem = (item) => {
		const newItem ={
			...item,
			props:{
				...item.props,
				setModalVisible: setIsVisible,
			}
		}
		//console.log('formatted', newItem)
		return newItem;
	}
	//console.log(modalComponent.item)
	return(
		<div className="btn--modal">
			{	
				isVisible
				?(
					<ModalWindow 
						visible={isVisible} 
						setVisible={setIsVisible}
						modification={modalComponent.modification}
						option={modalComponent.option}
					>
						<h2 className='modal__title'>{title}</h2>
						{
							formatItem(modalComponent.item)
						}
					</ModalWindow>
				)
				:''
			}
			<FormBtn {...btnProps} handleClick={()=>{ onClick(); setIsVisible(true)}}/>
		</div>
	)
}
export default ModalBtn;