import {  useMemo, useState } from "react";
import DisciplineItemList from "./DisciplineItemList/DisciplineItemList";
//import DisciplineItemInfo from "./DisciplineItemInfo/DisciplineItemInfo";
import {SUBJECTS_LIMIT} from '../../../utils/consts/ETC'
import { getPageCount } from "../../../utils/pageCount";
import randFieldIdGen from '../../../utils/randFieldIdGen';
const DisciplineItem = (props) => {
	const {discipline, classNames=[''], mainClassName='discipline__list-item'} = props
	const [modalVisible, setModalVisible] = useState(false);
	const onDisciplineItemClick = () => {
		setModalVisible(true);
	}
	const modules = useMemo(() => {
		const {specializedSubjects} = discipline;
		const listsCount = getPageCount(specializedSubjects?.length, SUBJECTS_LIMIT);
		const lists = [];
		for(let i=0; i<listsCount; i++){
			let tempList = [];
			let currPos = i * SUBJECTS_LIMIT;
			for(let pos=currPos; pos<(currPos + SUBJECTS_LIMIT) && pos<specializedSubjects?.length; pos++){
				tempList.push(
					{
						id:specializedSubjects[pos]?.id,
						content:(
							<div className="discipline__item-module-item__text-container item__text-container">
								<p className="item__text discipline__item-list-item__text">
									{specializedSubjects[pos]?.string}
								</p>
							</div>
						)
						,
					}
				)
			}
			lists.push(tempList)
		}
		return lists.map((item,i) => <DisciplineItemList title={`${i+1} модуль`} specializedSubjects={item} key={`module_${randFieldIdGen(1)}`}/>);
	},[discipline?.specializedSubjects])
	return(
		<>
			{/* {
			modalVisible
				?(
					<ModalWindow
						visible={modalVisible} 
						setVisible={setModalVisible}
						modification={'read-only'}
						modalClasses={['Discipline-info']}
					>
						{/* <DisciplineItemInfo
							item={Discipline}
							modalVisible={modalVisible} 
							setModalVisible={setModalVisible} 
						/> }
					</ModalWindow>
				)
				:<></>
			} */}
			
			<div className={`${mainClassName}-wrap ${classNames.join(' ')}`} onClick={()=> onDisciplineItemClick(discipline?.id)}>
				<div className={`${mainClassName}-content`}>
					<div className={`${mainClassName}__title-container`}>
						<h3 className={`${mainClassName}__title`}>
							{discipline?.title}
						</h3>
					</div>
					<div className={`${mainClassName}__modules-container`}>
						{
							modules?.length > 0
							?modules
							:<div>Список модулей пуст</div>
						}
					</div>
				</div>
			</div>
		</>
	)
}
export default DisciplineItem;