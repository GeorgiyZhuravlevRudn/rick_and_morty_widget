import React, {useState} from 'react';

export const useIsLoading = (cb) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const working = async () => {
		try {
			/*setTimeout(()=> {
				setIsLoading(true);
			},1000)*/
			setIsLoading(true);
			await cb();
		} catch(e) {
			setError(e.message);
		} finally {
			setIsLoading(false);
		}
	}
	return [working, isLoading, error];
}