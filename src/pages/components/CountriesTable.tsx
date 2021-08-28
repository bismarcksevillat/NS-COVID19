import React, { useEffect } from 'react';
import useStadistics from '../../hooks/useStadistics';
// import { ListDataProps } from '../../types';
import './countriestable.scss';

const ListHeader = (): JSX.Element => (
	<div className='row'>
		<div className='col-12 col-lg-3'>
			<p>Country</p>
		</div>

		<div className='col-12 col-lg-3'>
			<p>Confirmed</p>
		</div>

		<div className='col-12 col-lg-3'>
			<p>Population</p>
		</div>

		<div className='col-12 col-lg-3'>
			<p>Last Updated</p>
		</div>
	</div>
);

// const ListData = ({ continent, country }: ListDataProps): JSX.Element => (
// 	<>
// 		<div className='row'>
// 			<div className='col-12'>
// 				<p>
// 					<b>North and Central America</b>
// 				</p>
// 			</div>
// 		</div>

// 		<div className='row'>
// 			<div className='col-12 col-lg-3'>
// 				<p>USA</p>
// 			</div>

// 			<div className='col-12 col-lg-3'>
// 				<p>3991255221</p>
// 			</div>

// 			<div className='col-12 col-lg-3'>
// 				<p>36555645646</p>
// 			</div>

// 			<div className='col-12 col-lg-3'>
// 				<p>27/08/2021 184856</p>
// 			</div>
// 		</div>
// 	</>
// );

const CountriesTable = () => {
	const { fetchData, data } = useStadistics();

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<div className='countries-list'>
			<div className='container'>
				<div className='row'>
					<div className='col-12 list-bg'>
						<ListHeader />

						<h1>{data?.results}</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CountriesTable;
