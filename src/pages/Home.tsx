import React from 'react';
import { UseStadisticsProps } from '../types';
import CountriesTable from './components/CountriesTable';
import Footer from './components/Footer';
import Search from './components/Search';
import Sidebar from './components/Sidebar';
import './home.scss';

const Home = ({ stadisticsData, fetchStadisticsData }: UseStadisticsProps) => (
	<div className='home-page'>
		<Sidebar />

		<div className='right-column'>
			<Search
				stadisticsData={stadisticsData}
				fetchStadisticsData={fetchStadisticsData}
			/>

			<CountriesTable
				stadisticsData={stadisticsData}
				fetchStadisticsData={fetchStadisticsData}
			/>

			<Footer />
		</div>
	</div>
);

export default Home;
