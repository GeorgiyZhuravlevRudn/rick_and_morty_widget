//adding at a specific place in list || pushing to the end
// prevState = array
// payload = array of new objects
export const addManyObjToArr = (prevState=[], payload=[]) => {
	//define pos in payload in the LESS TO HIGH ORDER -> 0,1,2,3...n
	/**
	 * payload:{
	 * objects:[
	 * {
	 * 	pos:0,
	 * content:{//obj
	 * }
	 * }
	 * ]
	 * }
	 */
	//console.log('elements', payload)
	const objects = [...payload]; // arr of elm to add -> updState
	const updState = [...prevState] // prevBlocks
	for(let i = 0; i < objects.length; i++){
		// if array isnt empty
		let hasPos = true
		if(!objects[i]?.pos){
			hasPos = false;
		}
		if(objects[i]?.pos === 0){
			hasPos = true;
		}
		// has pos if pos===0
		//console.log(hasPos)
		if(
			(!hasPos)  // if obj hasnt got pos prop
			|| 
			(updState?.length <= 0) // if currState is empty
			|| 
			(objects[i]?.pos >= updState?.length) // if obj pos bigger than prevState length
		){
			//console.log(objects[i], updState)
			//console.log(!objects[i]?.pos || updState?.length <= 0 || objects[i]?.pos >= updState?.length)
			updState.push(objects[i]?.content);// pushing to the last place
		}else{
			updState.splice(objects[i].pos, 0, objects[i].content); // adding to a specific place in array
		}
	}
	//console.log(updState)
	return updState;
}
// update elm by id in array
// prevState = array of
export const updManyObjById = (prevState=[], payload=[]) => {
	/**
	 * payload:[{},{}]
	 */
	const objects = [...payload]; 
	const updState = [...prevState];
	for(let i = 0; i < objects.length; i++){
		let indexOfItem = updState.map(item => item.id).indexOf(objects[i].id); // searching for index
		if(indexOfItem || indexOfItem === 0) updState[indexOfItem] = objects[i];
	}
	return updState;
}
export const rmManyObjById =(prevState=[], payload=[]) => {
	/**
	 * payload:[{id},{id}]
	 */
	
	 const objects = [...payload]; 
		let updState = [...prevState];
	 for(let i = 0; i < objects?.length; i++){
		console.log(objects[i])
		updState = updState.filter(item => item.id !== objects[i].id)
	}
	return updState;
}