export function tempAlert(msg, duration, classNames =[]) {
	const el = document.createElement('div');
	el.textContent = msg;
	el.className = `alertWindow ${classNames.join(' ')}`
	document.body.appendChild(el);
	 setTimeout(() => {
		el.parentNode.removeChild(el);
	}, duration);
}
export default tempAlert;
