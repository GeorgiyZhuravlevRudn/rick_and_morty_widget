import List from "../../List/List"

const DisciplineResults = (props) => {
	const {mainClassName} = props
	return(
		<div className={`${mainClassName}`}>
					<List listContent={[
						{
							id:'practice_modules',
							content:(
								<div className={`${mainClassName}__list-item__text-container item__text-container`}>
									<h5 className={`item__title ${mainClassName}__list-item__title`}>Практические модули</h5>
									<p className={`item__text ${mainClassName}__list-item__text`}>
										Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе
									</p>
								</div>
							)
						},
						{
						id:'final_approvement',
							content:(
								<div className={`${mainClassName}__list-item-appr`}>
									<h5 className={`item__title ${mainClassName}__list-item__title`}>Итоговая аттестация</h5>
									<ul className={`${mainClassName}__list-item__descr`}>
										<li className={`${mainClassName}__list-item__descr-item ${mainClassName}__list-item__text item__text`}>
											Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)
										</li>
										<li className={`${mainClassName}__list-item__descr-item ${mainClassName}__list-item__text item__text`}>
											Защита итоговой аттестационной работы
										</li>
									</ul>
								</div>
							)
						}]} mainClassName={`${mainClassName}`}/>
				</div>
	)
}
export default DisciplineResults