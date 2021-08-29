import React from 'react';
import { UseStadisticsProps } from '../types';
import CountriesTable from './components/CountriesTable';
import DetailsPage from './components/DetailsPage';
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

			<div className='flex-container'>
				<CountriesTable
					stadisticsData={stadisticsData}
					fetchStadisticsData={fetchStadisticsData}
				/>

				<DetailsPage />
			</div>

			<Footer />
		</div>
	</div>
);

export default Home;
