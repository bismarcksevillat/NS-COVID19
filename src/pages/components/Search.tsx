import React, { useEffect, useRef, useState } from 'react';
import { Hint } from 'react-autocomplete-hint';
import useCountries from '../../hooks/useCountries';
import { UseStadisticsProps } from '../../types';
import './search.scss';

const Search = ({
	stadisticsData,
	fetchStadisticsData,
}: UseStadisticsProps) => {
	const { countriesData, fetchCountriesData } = useCountries();
	const [hintData, setHintData] = useState<string[]>([]);
	const [searchCriteria, setSearchCriteria] = useState('');
	const inputRef = useRef(null);

	const inputOnChange = () => {
		if (inputRef.current) {
			// @ts-ignore
			setSearchCriteria(inputRef.current.value);
		}
	};

	useEffect(() => {
		setTimeout(() => {
			fetchStadisticsData(searchCriteria);
		}, 500);
	}, [searchCriteria]);

	useEffect(() => {
		fetchCountriesData();
	}, []);

	useEffect(() => {
		if (countriesData) setHintData(countriesData?.response || []);
	}, [countriesData]);

	return (
		<div className='search-content'>
			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						<h1>Covid-19 Overview</h1>

						<form className='form-control mt-3'>
							<Hint options={hintData} allowTabFill>
								<input
									ref={inputRef}
									type='text'
									placeholder='Search Country'
									className='form-control'
									value={searchCriteria}
									onChange={inputOnChange}
								/>
							</Hint>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Search;
