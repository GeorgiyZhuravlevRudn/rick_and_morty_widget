import DisciplineItem from '../DisciplineItem/DisciplineItem';
const DisciplineList = (props) => {
	const { list=[], mainClassName = 'discipline__list'} = props;
	return (
		<div className={`${mainClassName}-wrap`}>
			<div className={`${mainClassName}-content`}>
				<div className={`${mainClassName} list`}>
					{
						list?.length > 0
							? list.map(listItem => {
								return (
									<DisciplineItem
										key={listItem.id}
										discipline={listItem}
										className={''}
									/>
								)
							})
							: <></>
					}
				</div>
			</div>
		</div>
	)
}
export default DisciplineList;