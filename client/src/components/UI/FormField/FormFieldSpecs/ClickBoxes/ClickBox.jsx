import { useState } from "react";
/**
 * TODO
 * 1. include clickboxProps:{
 * 	value:'',
 * 	isModal:bool,
 * 	modalContent:<></>,
 * btnContent:<></>
 * }
 */
const ClickBox = (props) => {
	const {option, itemChosen=false, onClick, clickBoxProps={}} = props
	const {isModal, modalContent} = clickBoxProps;
	const [modalVisible, setModalVisible] = useState(false);
	// const getItemInfo = () => {
	// 	switch(option){
	// 		case SERVICE_TYPES.scan_shooting_3d:{
	// 			return (
	// 				<>
	// 					<h2 className="modal__title" style={{color:'black'}}>Цифровой 3D двойник</h2>
	// 					<p style={{textAlign:'center'}}>
	// 						Облако точек и сферические фотопанорамы.
	// 					</p>
	// 				</>
	// 				)
	// 		}
	// 		case SERVICE_TYPES.cad_2d:{
	// 			return (
	// 				<>
	// 					<h2 className="modal__title" style={{color:'black'}}>Обмерная 2D план</h2>
	// 					<p style={{textAlign:'center'}}>
	// 						2D план, где будут указаны все цепочки размеров, высоты проемов.
	// 					</p>
	// 				</>
	// 				)
	// 		}
	// 		case SERVICE_TYPES.cad_bim_3d:{
	// 			return (
	// 				<>
	// 					<h2 className="modal__title" style={{color:'black'}}>Обмерная 3D модель</h2>
	// 					<p style={{textAlign:'center'}}>
	// 						3D модель, 2D план, облако точек и сферические фотопанорамы
	// 					</p>
	// 				</>
	// 				)
	// 		}
	// 		default:
	// 			return ''
	// 	}
	// }
	const spanClick = (e) => {
		e.stopPropagation(); 
		if(modalContent){
 			setModalVisible(true);
		}
	}
	const inputRoot = ['form__field--clickboxes-item'];
	if(itemChosen){
		inputRoot.push('form__field--clickboxes-item--active')
	}
	return(
		<>
			{/* {
					modalVisible && modalContent
					?(
						<ModalWindow 
							visible={modalVisible} 
							setVisible={setModalVisible}
							option='modal__clickbox-item'
							modification='read-only'
						>
						{
							modalContent
						}
						</ModalWindow>
					)
					:''
			} */}
			<div 
				className={`${inputRoot.join(' ')}`}
				onClick={onClick}
			>
				{option}
				{
					modalContent
					?(
						<span 
							className="form__field--clickboxes-item__span"
							onClick ={spanClick}
						>?</span>
					)
					:''
				}
			</div>
		</>
	)
}
export default ClickBox;