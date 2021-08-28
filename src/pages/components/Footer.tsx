import './footer.scss'
import React from 'react'

const Footer = () => (
	<footer>
		<div className='container'>
			<div className='row'>
				<div className='col-12'>
					<h2 className="mb-3">Global Overview</h2>

					<div className='global-info-container d-md-flex justify-content-between align-items-center flex-wrap'>
						<div className="info-box">
							<p className="title">Confirmed</p>
							<p className="number">215,429,042</p>
						</div>

						<div className="info-box">
							<p className="title active-title">Active</p>
							<p className="number">18,512,876</p>
						</div>

						<div className="info-box">
							<p className="title recovered-title">Recovered</p>
							<p className="number">193,147,107</p>
						</div>

						<div className="info-box">
							<p className="title deceased-title">Deceased</p>
							<p className="number">4,497,646</p>
						</div>

            <div className="info-box stay-home">
            <p>Stay Home. <span>Save Lives</span></p>
            </div>
					</div>
				</div>
			</div>
		</div>
	</footer>
)

export default Footer
