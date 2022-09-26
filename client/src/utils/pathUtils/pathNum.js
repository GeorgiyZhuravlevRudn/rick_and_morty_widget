// popping last part - custom id 
export const pathNumToId = (id, pathname) => {
	let path = pathname;
	if(id){
		// popping id -> making '/routename/:id'
		const splittedPath = path.split('/');
		splittedPath.pop();
		path = splittedPath.join('/') + '/:id';
	}
	return path;
}