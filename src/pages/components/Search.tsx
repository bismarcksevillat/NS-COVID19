import React from 'react'
import './search.scss'

const Search = () => (
	<div className='search-content'>
		<div className='container'>
			<div className='row'>
				<div className='col-12'>
					<h1>Covid-19 Overview </h1>

					<form className="form-control mt-3">
						<input
							type='text'
							placeholder='Search Country'
							className='form-control'
						/>
					</form>
				</div>
			</div>
		</div>
	</div>
)

export default Search
