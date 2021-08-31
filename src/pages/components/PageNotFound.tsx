import React from 'react';
import './404.scss';
import notFound from '../img/upsicon.png'

const PageNotFound = () => (
	<div className='not-found'>
		<div className='container'>
			<div className='row'>
				<div className='col-12'>

					<img src={notFound} className="img-fluid" alt="Page not found icon" />
				</div>
			</div>
		</div>
	</div>
);

export default PageNotFound;
