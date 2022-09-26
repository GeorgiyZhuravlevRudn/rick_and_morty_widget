import { useEffect, useState } from "react";
import { fetchDisciplines } from "../../http/mbaApi";
import { useDispatch, useSelector } from "react-redux";
import { useFetching } from "../../hooks/useFetching";
import actions from "../../store/reducers/actions";
import TempAlert from "../UI/TempAlert/TempAlert";
import DisciplineList from "./DisciplineList/DisciplineList";
import Loader from "../UI/Loader/Loader";
import FormBtn from "../UI/FormBtn/FormBtn";
import DisciplineResults from "./DisciplineResults/DisciplineResults";
const Discipline = (props) =>{
	const {mainClassName='discipline'} = props;
	const dispatch = useDispatch();
	const { discipline } = useSelector(state => state.disciplineReducer)// obj
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(0);
	const [alertVisible, setAlertVisible] = useState(false)
	const [alertMsg, setAlertMsg] = useState('');
	const [isFull, setIsFull] = useState(false);
	const [fetchData, isLoading, error] = useFetching(async ({ type, reqPage }) => {
		//possible types, species?
		let response = null;
		try {
			response = await fetchDisciplines({page: reqPage, limit})
			let dataList = [];
			//if its button click
			for (let i = 0; i < response?.length; i++) {
				dataList.push({
					content: response[i]
				})
			}
			if (type === 'loadMore') {
				/** if item already exists */
				for (let i = 0; i < discipline.length; i++) {
					for (let j = 0; j < dataList?.length; j++) {
						if (dataList[j]?.content.id === discipline[i].id) {
							dataList.splice(j, 1);
						}
					}
				}
			}
			console.log(dataList)
			// if its filter
			dispatch(actions.addDisciplineAction([...dataList]))
			setIsFull(false);
		} catch (e) {
			setAlertVisible(true);
			setIsFull(true);
			setAlertMsg(error)
		}
	})
	useEffect(() => {
		fetchData({ type: 'loadMore', reqPage: page });
	}, [limit, page])
	useEffect(() => {
		return () => {
			dispatch(actions.refreshDisciplineAction())
		}
	}, [])

	return (
		<div className={`${mainClassName}-wrap`}>
			{
				alertVisible &&
				<TempAlert msg={alertMsg} setVisible={setAlertVisible} targetDate={new Date().getTime() + 3000}/>
			}
			<div className={`${mainClassName}-content`}>
				<div className={`${mainClassName}__title-container`}>
					<h2 className={`${mainClassName}__title title`}>
						Специализированные дисциплины
					</h2>
				</div>
				{
					discipline
						? <DisciplineList list={discipline} />
						: <div>Список пуст</div>
				}
				{isLoading
					&& <div style={{ display: 'flex', justifyContent: 'center', margin: '5rem 0' }}>
						<Loader width='200' height='200'/>
					</div>
				}
				{
					<div className="btn-container">
						<FormBtn
							handleClick={() => setPage(prev => prev + 1)} 
							spec={['btn']} 
							className={
								isFull
								?'btn__loadMore --disabled'
								:'btn__loadMore'
							}
						>
							{
								isFull
								?'Пусто'
								:'Загрузить еще'
							}
						</FormBtn>
					</div>
				}
				<DisciplineResults mainClassName={mainClassName + '-results'}/>
			</div>
		</div>
	)
}
export default Discipline