import { useState } from "react";
import ModalWindow from "../../../UI/ModalWindow/ModalWindow";

const ListItem = (props) => {
	const {content=<></>, withModal=false, classNames=[''], mainClassName='list__item'} = props;
	const [modalVisible, setModalVisible] = useState(false);
	const onItemClick = () => {
		if(withModal){
			setModalVisible(true);
		}
	}
	return(
		<>
			{
			modalVisible
				?(
					<ModalWindow
						visible={modalVisible} 
						setVisible={setModalVisible}
						modification={'read-only'}
						modalClasses={[]}
					>
						{/* <DisciplineItemInfo
							item={Discipline}
							modalVisible={modalVisible} 
							setModalVisible={setModalVisible} 
						/> */}
					</ModalWindow>
				)
				:<></>
			}
			
			<li className={`${mainClassName} list__item ${classNames.join(' ')}`} onClick={onItemClick}>
				<div className={`${mainClassName}-content list__item-content`}>
					{content}
				</div>
			</li>
		</>
	)

}
export default ListItem;
