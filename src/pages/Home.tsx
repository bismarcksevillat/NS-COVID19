import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
				<Router>
					<CountriesTable
						stadisticsData={stadisticsData}
						fetchStadisticsData={fetchStadisticsData}
					/>

					<Switch>
						<Route path='/country/:countryName'>
							<DetailsPage />
						</Route>
					</Switch>
				</Router>
			</div>

			<Footer />
		</div>
	</div>
);

export default Home;
