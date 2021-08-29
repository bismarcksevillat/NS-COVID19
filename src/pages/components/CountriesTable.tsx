import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { useStadistics } from '../../hooks/useStadistics';
import { ListDataProps, Response } from '../../types';
import './countriestable.scss';

const commaNumber = require('comma-number');

const ListHeader = (): JSX.Element => (
	<div className='row list-header align-items-center'>
		<div className='col-12 col-lg-3'>
			<p className="mb-0">Country</p>
		</div>

		<div className='col-12 col-lg-3'>
			<p className="mb-0">Confirmed</p>
		</div>

		<div className='col-12 col-lg-3'>
			<p className="mb-0">Population</p>
		</div>

		<div className='col-12 col-lg-3'>
			<p className="mb-0">Last Updated</p>
		</div>
	</div>
);

const ListData = ({ continent, countries }: ListDataProps) => (
	<>
		<div className='row mx-0'>
			<div className='col-12'>
				<p>
					<b>{continent}</b>
				</p>
			</div>
		</div>

		{countries?.map(country => (
			<div className='row mx-0'>
				<div className='col-12 col-lg-3'>
					<p>{country.country}</p>
				</div>

				<div className='col-12 col-lg-3'>
					<p>{commaNumber(country.cases.total)}</p>
				</div>

				<div className='col-12 col-lg-3'>
					<p>{commaNumber(country.population)}</p>
				</div>

				<div className='col-12 col-lg-3'>
					<p>
						<Moment format='MM/DD/YYYY HH:MM'>{country.time}</Moment>
					</p>
				</div>
			</div>
		))}
	</>
);

const CountriesTable = () => {
	const [countries, setCountries] = useState<Response[] | undefined>(undefined);

	const { stadisticsData, fetchStadisticsData } = useStadistics();

	useEffect(() => {
		fetchStadisticsData(null);
	}, []);

	useEffect(() => {
		const orderedCountries = stadisticsData?.response.sort((a, b) => {
			if (
				a == null ||
				b == null ||
				a.continent == null ||
				b.continent == null
			) {
				return 0;
			}

			return a.continent.localeCompare(b.continent);
		});

		setCountries(orderedCountries);
	}, [stadisticsData]);

	return (
		<div className='countries-list'>
			<div className='container'>
				<div className='row'>
					<div className='col-12 list-bg'>
						<ListHeader />

						<div className='custom-scroll'>
		
								<ListData continent='Ninon' countries={countries} />
	
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CountriesTable;
