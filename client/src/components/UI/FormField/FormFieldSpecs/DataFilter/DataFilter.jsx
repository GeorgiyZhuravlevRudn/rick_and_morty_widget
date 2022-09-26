import { useEffect, useState } from "react";
const DataFilter = (props) => {
	let {filter, setFilter} = props; // queryParams - params for sorting
	return(
		<>
			<input 
				className='form__field'
				type='text'
				required={true}
				value = {filter.query}
				onChange={(e) => setFilter({...filter, query: e.target.value})}
				autoComplete="off"
				id='searchQuery'
			/>
		</>
	)
}
export default DataFilter;