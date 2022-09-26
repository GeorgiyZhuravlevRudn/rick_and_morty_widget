import ListItem from "./ListItem/ListItem"

const ListContent = (props) => {
	const { listContent = [], mainClassName = 'list', classNames = [''] } = props
	return (
		<>
			{
				listContent?.length <=  0
					? <div>Список пуст</div>
					: <div className={` list-container ${mainClassName}-container`}>
						<ul className={`list ${mainClassName} ${classNames.join(' ')}`}>
							{
								listContent.map(listItem => {
									return (
										<ListItem
											key={listItem?.id}
											mainClassName={mainClassName + '-item'}
											{...listItem}
										/>
									)
								})

							}
						</ul>
					</div>
			}
		</>
	)
}
export default ListContent