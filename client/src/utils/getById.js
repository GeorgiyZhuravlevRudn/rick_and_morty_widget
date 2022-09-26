export const getById = (list, id) => {
	if(!list || !id){
		return
	}
	if(list.length !== 0){
		for(let i = 0; i < list.length; i++){
			if(list[i].id === parseInt(id)){
				return list[i];
			} 
		}
	}
	return;
}
export const hasItemById = (list, id) => {
	let item = list.filter(item => item.id === id);
	console.log(item)
	if(item?.length > 0){
		return true
	} else {
		return false
	}
}