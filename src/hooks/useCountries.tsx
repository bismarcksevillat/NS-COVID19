import { useState } from 'react';
import { DataResponseCountries } from '../types';
import { API_BASE, API_HOST, API_KEY } from './CONSTANT';

const axios = require('axios').default;

const useCountries = () => {
	const [countriesData, setCountriesData] =
		useState<DataResponseCountries | null>(null);

	const fetchCountriesData = async () => {
		try {
			const apiResult = await axios.get(`${API_BASE}/countries`, {
				headers: {
					'x-rapidapi-host': API_HOST,
					'x-rapidapi-key': API_KEY,
				},
			});

			setCountriesData(apiResult.data);
		} catch (error) {
			console.error('Error getting info: ', error);
		}
	};

	return {
		countriesData,
		fetchCountriesData,
	};
};

export default useCountries;
