import List from "../../../List/List";

const DisciplineItemList = (props) => {
	const {title='', specializedSubjects=[]} = props;
	return(
		<List listTitle={title} listContent={specializedSubjects} withToggleMob={true} mainClassName={'discipline__list-item__modules-item'}/>
	)
}
export default DisciplineItemList;