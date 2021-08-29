import React from 'react';
import './countrydetail.scss';

const DetailsPage = () => (
	<div className='country-detail'>
		<div className='container-fluid'>
			<div className='row'>
				<div className='col-12'>
					<div className='info-container'>
						<h2>USA</h2>
						<p className='continent'>North & Central America</p>
						<p className='date'>Last update: 27/08/2021 18:45</p>

						<div className='results-container d-md-flex flex-row flex-wrap justify-content-flex-start'>
							<div className='info-box'>
								<p className='title'>Confirmed</p>
								<p className='number confirmed'>215,429,042</p>
							</div>
							<div className='info-box'>
								<p className='title'>Active</p>
								<p className='number active'>8,096,562</p>
							</div>
							<div className='info-box'>
								<p className='title'>Recovered</p>
								<p className='number recovered'>30,785,040</p>
							</div>
							<div className='info-box'>
								<p className='title'>Deceased</p>
								<p className='number deceased'>653,385</p>
							</div>

              <div className='info-box'>
								<p className='title'>Tests</p>
								<p className='number tests'>577,456,207</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default DetailsPage;
