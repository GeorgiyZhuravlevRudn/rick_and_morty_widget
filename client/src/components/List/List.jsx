import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ListContent from "./ListContent/ListContent";
import ListTitle from "./ListTitle/ListTitle";
const List = (props) => {
	const { listTitle = '', listContent = [], mainClassName = 'list', withToggleMob=false,  classNames=[] } = props;
	const [isActive, setIsActive] = useState(true);
	const [toggleVisible,setToggleVisible] = useState(withToggleMob);
	const { width } = useSelector(state => state.windowReducer);
	useEffect(() => {
		if(withToggleMob){
			if (width <= 1023) {
				setToggleVisible(true)
				setIsActive(false)
			} else{
				setToggleVisible(false)
				setIsActive(true);
			}
		}
	}, [width, withToggleMob])
	return (
		<div className={`${mainClassName}-wrap list-wrap ${isActive?`--active`:``}`}>
			<div className={`${mainClassName}-content list-content`}>
				<ListTitle 
					listTitle={listTitle}
					withToggleMob={toggleVisible}
					isActive={isActive}
					setIsActive={setIsActive}
				/>
				{
					isActive &&
					<ListContent listContent={listContent} mainClassName={mainClassName + '__list'}/>
				}
			</div>
		</div>

	)
}
export default List;