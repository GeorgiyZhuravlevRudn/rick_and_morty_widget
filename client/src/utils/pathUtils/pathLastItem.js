export const pathLastItem = (pathname) => {
	const splittedPath = pathname.split('/');
	return splittedPath[splittedPath.length-1];
}