// for fake requests
//usage await sleep(ms)
const sleep = ms => new Promise(
	resolve => setTimeout(resolve, ms));
export default sleep;