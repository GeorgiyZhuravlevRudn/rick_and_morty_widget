import { useEffect, useState } from "react";
import { useFetching } from "../../../../../hooks/useFetching";
import { fetchEpisodes } from "../../../../../http/rickApi";
import tempAlert from "../../../../../utils/tempAlert";
import Loader from "../../../../UI/Loader/Loader";
import sleep from '../../../../../utils/sleep.js'
import FormBtn from "../../../../UI/FormBtn/FormBtn";
import TempAlert from "../../../../UI/TempAlert/TempAlert";
import { getPageCount } from "../../../../../utils/pageCount";
import CharacterEpisodes from "./CharacterEpisodes/CharacterEpisodes";
const CharacterItemInfo = (props) => {
	const {
		item = {},
		classNames = [],
		mainClassName = 'character__item-info'
	} = props;
	const [episodes, setEpisodes] = useState([]);
	const getCharacterFieldValue = (fieldName, hasUrl=false) => {
		if(hasUrl){
			if(item[fieldName]?.url !== ''){
				return(
					<div className="item__link-container">
						<a className="item__link link" href={item[fieldName]?.url} target='_blank'>{
							item[fieldName]?.name
								? item[fieldName]?.name
								: 'undefined'
						}</a>
					</div>
				)
			} else{
				return (
					<p className="item__text">
						{
							item[fieldName].name
								? item[fieldName].name
								: 'undefined'
						}
					</p>
				)
			}
		}
		return (<p className="item__text">
			{
				item[fieldName]
					? item[fieldName]
					: 'undefined'
			}
		</p>)
	}
	const [characterInfo, setCharacterInfo] = useState([
		{
			name: 'Species',
			value: getCharacterFieldValue('species'),
		},
		{
			name: 'Gender',
			value: getCharacterFieldValue('gender'),
		},
		{
			name: 'Status',
			value: getCharacterFieldValue('status'),
		},
		{
			name: 'Location',
			value:getCharacterFieldValue('location', true) ,
		},
		{
			name: 'Origin',
			value: getCharacterFieldValue('origin', true) ,
		},
		{
			name: 'Type',
			value: getCharacterFieldValue('type'),
		},
	]);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);
	const [fetchData, isLoading, error] = useFetching(async () => {
		let response = null;
		try {
			/**START OF SERVER-SIDE LIMITING */
			const limitedEpisodes = []; // server-side limiting, but we havent got one in rickAPI
			if (page * limit < item.episode.length) {
				for (let i = (page - 1) * limit; i < page * limit; i++) {
					console.log(item.episode[i])
					limitedEpisodes.push(item.episode[i]);
				}
			} else {
				for (let i = (page - 1) * limit; i < item.episode.length; i++) {
					limitedEpisodes.push(item.episode[i]);
				}
			}
			// if(episodes.length + limit < item.episode.length){
			// 	for(let i=episodes.length; i < page * limit; i++){
			// 		limitedEpisodes.push(item.episode[i]);
			// 	}
			// } else{
			// 	for(let i=episodes.length; i < item.episode.length; i++){
			// 		console.log(i)
			// 		limitedEpisodes.push(item.episode[i]);
			// 	}
			// }
			/**END OF SERVER-SIDE LIMITING */
			console.log('limited', limitedEpisodes)
			const episodeItems = limitedEpisodes.map(item => {
				const itemArr = item.split('/');
				return itemArr[itemArr.length - 1];
			}).join(',');

			response = await fetchEpisodes({ episodes: episodeItems });
		} catch (e) {
			tempAlert(e.response.data.error, 3000, ['--invalid']);
		}
		await sleep(1000)
		if (!Array.isArray(response)) {
			setEpisodes([response])
		} else {
			setEpisodes([...response])
		}
	})
	const getBtnPagination = () => {
		const pageCount = [];
		for (let i = 0; i < getPageCount(item.episode.length, limit); i++) {
			pageCount.push(`${i + 1}`);
		}
		return (
			<div className={`${mainClassName}__nav-container`} style={{ display: 'flex' }}>
				{
					pageCount.length !== 0
						? pageCount.map((pageBtn) => {
							if (parseInt(pageBtn) === page) {
								return (
									<FormBtn
										key={pageBtn}
										spec={['btn--active', 'btn--nav-page']}
										classNames={['btn--nav-page']}
									>
										{pageBtn}
									</FormBtn>
								)
							} else {
								return (
									<FormBtn
										handleClick={() => {
											if (!isLoading) setPage(parseInt(pageBtn))// if Loading-> cant change page
										}}
										key={pageBtn}
										spec={['btn', 'btn--nav-page']}
										classNames={['btn--nav-page']}
									>
										{pageBtn}
									</FormBtn>
								)
							}
						}
						)
						: ''
				}
			</div>
		)
	}
	useEffect(() => {
		fetchData();
	}, [page])
	useEffect(() => {
		console.log(item)
	}, [])
	return (
		<div className={`${mainClassName}-wrap`}>
			<div className={`${mainClassName}-container`}>
				<div className={`${mainClassName}__top-container`}>
					<div className={`${mainClassName}__img-container`}>
						<img className={`${mainClassName}__img`} src={item?.image} alt={item.name + ' image'} />
					</div>
					<CharacterEpisodes episodes={episodes} isLoading={isLoading} mainClassName={mainClassName} getBtnPagination={getBtnPagination} />
				</div>
				<div className={`${mainClassName}__content-container`}>
					<div className="list-wrap">
						<div className='list__title-container'>
							<h3 className='title list__title'>{item?.name}</h3>
						</div>
						<div className='list-container'>
							<ul className="list">
								{
									characterInfo
										? characterInfo.map(item =>
											<li className="list__item" key={item.name}>
												<div className="list__item-content">
													<div className="item__text-container">
														<h4 className="item__title">
															{item.name}:
														</h4>
														{
															item.value
																? item.value
																: 'undefined'
														}
													</div>
												</div>
											</li>

										)
										: <></>
								}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default CharacterItemInfo;