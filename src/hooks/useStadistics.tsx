import { useState } from 'react';
import { DataResponse } from '../types';
import { API_BASE, API_HOST, API_KEY } from './CONSTANT';

const axios = require('axios').default;

export const useStadistics = () => {
	const [stadisticsData, setStadisticsData] = useState<DataResponse | null>(
		null,
	);

	const fetchStadisticsData = async (countryNameParam: string) => {
		try {
			const countryName = countryNameParam !== '' ? countryNameParam : null;
			
			const apiResult = await axios.get(`${API_BASE}/statistics`, {
				params: {
					country: countryName,
				},
				headers: {
					'x-rapidapi-host': API_HOST,
					'x-rapidapi-key': API_KEY,
				},
			});

			setStadisticsData(apiResult.data);
		} catch (error) {
			console.error('Error getting info: ', error);
		}
	};

	return {
		stadisticsData,
		fetchStadisticsData,
	};
};

export const useStadisticsAll = () => {
	const [stadisticsAllData, setStadisticsAllData] =
		useState<DataResponse | null>(null);

	const fetchStadisticsAllData = async () => {
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

			setStadisticsAllData(apiResult.data);
		} catch (error) {
			console.error('Error getting info: ', error);
		}
	};

	return {
		stadisticsAllData,
		fetchStadisticsAllData,
	};
};
