export const fileExists = (allFiles, key) => {
	let flag = false;
	for (let i = 0; i < allFiles.length; i++) {
		if (allFiles[i].name === key) {
			flag = true;
			break;
		}
	}
	return flag;
};
export default fileExists;
