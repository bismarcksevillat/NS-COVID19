/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { CONTINENTS } from '../../hooks/CONSTANT';
import { ListDataProps, Response, UseStadisticsProps } from '../../types';
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

const ListData = ({ continent, countries }: ListDataProps) => {
	const [openContinent, setOpenContinent] = useState(false);

	const countriesByContinent = countries?.filter(
		country => country.continent === continent,
	);

	const handleCollapse = () => {
		setOpenContinent(prevState => !prevState);
	};

	return (
		<>
			{countriesByContinent && countriesByContinent.length > 0 && (
				<>
					<div className='row mx-0'>
						<div className='col-12'>
							<h2
								role='button'
								tabIndex={0}
								onClick={handleCollapse}
								onKeyDown={handleCollapse}
							>
								<b>
									{continent}{' '}
									<i
										className={`fas fa-angle-down ${
											openContinent ? 'opened' : 'closed'
										}`}
									/>
								</b>
							</h2>
						</div>
					</div>

					{openContinent &&
						countriesByContinent &&
						countriesByContinent.map(country => (
							// eslint-disable-next-line jsx-a11y/click-events-have-key-events
							<Link
								className='row mx-0 country'
								to={`/country/${country.country}`}
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
							</Link>
						))}
				</>
			)}
		</>
	);
};

const CountriesTable = ({
	stadisticsData,
	fetchStadisticsData,
}: UseStadisticsProps) => {
	const [countries, setCountries] = useState<Response[] | undefined>(undefined);

	useEffect(() => {
		const orderedCountries = stadisticsData?.response.sort((a, b) => {
			if (a == null || b == null || a.country == null || b.country == null) {
				return 0;
			}

			return a.country.localeCompare(b.country);
		});

		setCountries(orderedCountries);
	}, [stadisticsData]);

	return (
		<div className='countries-list'>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-12 list-bg'>
						{countries && countries.length > 0 ? (
							<>
								<ListHeader />
								<div className='custom-scroll'>
									{CONTINENTS.map((continent, index) => (
										<ListData
											continent={continent}
											countries={countries}
											// eslint-disable-next-line react/no-array-index-key
											key={`listData-${index}`}
										/>
									))}
								</div>
							</>
						) : (
							stadisticsData &&
							!Array.isArray(stadisticsData?.parameters) && (
								<h6>No country found with the search criteria</h6>
							)
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CountriesTable;
