import { useState } from 'react';
import { DataResponse } from '../types';
import { API_BASE, API_HOST, API_KEY } from './CONSTANT';

const axios = require('axios').default;

const useStadisticsAll = () => {
	const [data, setData] = useState<DataResponse | null>(null);

	const fetchData = async () => {
		try {
			const apiResult = await axios.get(`${API_BASE}/statistics`, {
				params: {
					country: 'all',
				},
				headers: {
					'x-rapidapi-host': API_HOST,
					'x-rapidapi-key': API_KEY,
				},
			});

			setData(apiResult.data);
		} catch (error) {
			console.error('Error getting info: ', error);
		}
	};

	return {
		data,
		fetchData,
	};
};

export default useStadisticsAll;
