import FormBtn from "../../UI/FormBtn/FormBtn";

const ListTitle = (props) => {
	const { 
		listTitle = '',
		mainClassName = 'list__title', 
		withToggleMob = false,
		isActive,
		setIsActive,
	} = props;
	const handleClick = () => {
		if(isActive) {
			setIsActive(false)
		} else {
			setIsActive(true)
		}
	}
	return (
		listTitle
		?<div className={`${mainClassName}-container`}>
			{
				withToggleMob
					? (<FormBtn
						spec={['btn--toggle']}
						className={isActive?'btn--collapse-list --active':'btn--collapse-list'}
						handleClick={handleClick}/>
					)
					: <></>
			}
			<h3 className={`${mainClassName}`}>
				{listTitle}
			</h3>
		</div>
		:<></>
	)
}
export default ListTitle;