import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { CONTINENTS } from '../../hooks/CONSTANT';
import { useStadistics } from '../../hooks/useStadistics';
import { ListDataProps, Response } from '../../types';
import './countriestable.scss';

const commaNumber = require('comma-number');

const ListHeader = (): JSX.Element => (
	<div className='d-none d-lg-flex row list-header align-items-center'>
		<div className='col-12 col-lg-3'>
			<p className='mb-0'>Country</p>
		</div>

		<div className='col-12 col-lg-3'>
			<p className='mb-0'>Confirmed</p>
		</div>

		<div className='col-12 col-lg-3'>
			<p className='mb-0'>Population</p>
		</div>

		<div className='col-12 col-lg-3'>
			<p className='mb-0'>Last Updated</p>
		</div>
	</div>
);

const ListData = ({ continent, countries }: ListDataProps) => (
	<>
		<div className='row mx-0'>
			<div className='col-12'>
				<h2>
					<b>{continent}</b>
				</h2>
			</div>
		</div>

		{countries
			?.filter(country => country.continent === continent)
			.map(country => (
				// eslint-disable-next-line jsx-a11y/click-events-have-key-events
				<div
					className='row mx-0 country'
			
					role='button'
					tabIndex={0}
				>
					<div className='col-12 col-lg-3'>
						<p>
							<b className='d-lg-none'>Country:</b> {country.country}
						</p>
					</div>

					<div className='col-12 col-lg-3'>
						<p>
							<b className='d-lg-none'>Confirmed:</b>{' '}
							{commaNumber(country.cases.total)}
						</p>
					</div>

					<div className='col-12 col-lg-3'>
						<p>
							<b className='d-lg-none'>Population:</b>{' '}
							{commaNumber(country.population)}
						</p>
					</div>

					<div className='col-12 col-lg-3'>
						<p>
							<b className='d-lg-none'>Last Updated:</b>{' '}
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
							{CONTINENTS.map(continent => (
								<ListData continent={continent} countries={countries} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CountriesTable;
