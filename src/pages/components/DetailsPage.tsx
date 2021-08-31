import React, { useEffect } from 'react';
import Moment from 'react-moment';
import { useParams } from 'react-router-dom';
import { useStadistics } from '../../hooks/useStadistics';
import './countrydetail.scss';
import coronaIcon from '../img/coronaicon.png';

const commaNumber = require('comma-number');

const DetailsPage = () => {
	// @ts-ignore
	const { countryName } = useParams();
	const { stadisticsData, fetchStadisticsData, isLoading } = useStadistics();

	useEffect(() => {
		fetchStadisticsData(countryName);
	}, [countryName]);

	return (
		<div className='country-detail' id='details'>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-12'>
						{stadisticsData && stadisticsData.response.length > 0 ? (
							<div className='info-container'>
								<h2>{stadisticsData?.response[0].country}</h2>
								<p className='continent'>
									{stadisticsData?.response[0].continent}
								</p>
								<p className='date'>
									Last update:{' '}
									<Moment format='MM/DD/YYYY HH:MM'>
										{stadisticsData?.response[0].time}
									</Moment>
								</p>

								<div className='results-container d-md-flex flex-row flex-wrap justify-content-flex-start'>
									<div className='info-box'>
										<p className='title'>Confirmed</p>
										<p className='number confirmed'>
											{commaNumber(stadisticsData?.response[0].cases.total)}
										</p>
									</div>
									<div className='info-box'>
										<p className='title'>Active</p>
										<p className='number active'>
											{commaNumber(stadisticsData?.response[0].cases.active)}
										</p>
									</div>
									<div className='info-box'>
										<p className='title'>Recovered</p>
										<p className='number recovered'>
											{commaNumber(stadisticsData?.response[0].cases.recovered)}
										</p>
									</div>
									<div className='info-box'>
										<p className='title'>Deceased</p>
										<p className='number deceased'>
											{commaNumber(stadisticsData?.response[0].deaths.total)}
										</p>
									</div>

									<div className='info-box'>
										<p className='title'>Tests</p>
										<p className='number tests'>
											{commaNumber(stadisticsData?.response[0].cases.total)}
										</p>
									</div>

									<div className='info-box'>
										<p className='title'>Population</p>
										<p className='number population'>
											{commaNumber(stadisticsData?.response[0].population)}
										</p>
									</div>
								</div>
							</div>
						) : (
							<div className='details-error'>
								<div className='container-fluid'>
									<div className='row'>
										<div className='col-12'>
											{!isLoading && (
												<>
													<h2>
														Please select a country from the table, or use the
														Search Country field
													</h2>

													<div className='img-container'>
														<img
															src={coronaIcon}
															className='img-fluid'
															alt='Coronavirus Icon'
														/>
													</div>
												</>
											)}
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailsPage;
