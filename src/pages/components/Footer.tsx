import React, { useEffect, useState } from 'react';
import useStadisticsAll from '../../hooks/useStadisticsAll';

import './footer.scss';

const commaNumber = require('comma-number');

const Footer = () => {
	const { fetchData, data } = useStadisticsAll();
	const [totalConfirm, setTotalConfirm] = useState<string | null>(null);
	const [totalActive, setTotalActive] = useState<string | null>(null);
	const [totalRecovered, setTotalRecovered] = useState<string | null>(null);
	const [totalDeath, setTotalDeath] = useState<string | null>(null);

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		if (data) {
			setTotalConfirm(commaNumber(data.response[0].cases.total));
			setTotalActive(commaNumber(data.response[0].cases.active));
			setTotalRecovered(commaNumber(data.response[0].cases.recovered));
			setTotalDeath(commaNumber(data.response[0].deaths.total));
		}
	}, [data]);

	return (
		<footer>
			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						<h2 className='mb-3'>Global Overview</h2>

						<div className='global-info-container d-md-flex justify-content-between align-items-center flex-wrap'>
							<div className='info-box'>
								<p className='title'>Confirmed</p>
								<p className='number'>{totalConfirm}</p>
							</div>

							<div className='info-box'>
								<p className='title active-title'>Active</p>
								<p className='number'>{totalActive}</p>
							</div>

							<div className='info-box'>
								<p className='title recovered-title'>Recovered</p>
								<p className='number'>{totalRecovered}</p>
							</div>

							<div className='info-box'>
								<p className='title deceased-title'>Deceased</p>
								<p className='number'>{totalDeath}</p>
							</div>

							<div className='info-box stay-home'>
								<p>
									Stay Home. <span>Save Lives</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
