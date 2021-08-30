import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UseStadisticsProps } from '../types';
import CountriesTable from './components/CountriesTable';
import DetailsPage from './components/DetailsPage';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';
import Search from './components/Search';
import Sidebar from './components/Sidebar';
import './home.scss';

const Home = ({ stadisticsData, fetchStadisticsData }: UseStadisticsProps) => (
	<div className='home-page'>
		<Sidebar />

		<div className='right-column'>
			<Router>
				<Switch>
					<Route exact path='/'>
						<Search
							stadisticsData={stadisticsData}
							fetchStadisticsData={fetchStadisticsData}
						/>
						<CountriesTable
							stadisticsData={stadisticsData}
							fetchStadisticsData={fetchStadisticsData}
						/>
					</Route>

					<Route path='/country/:countryName'>
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
					</Route>
					<Route path='*'>
						<PageNotFound />
					</Route>
				</Switch>
			</Router>

			<Footer />
		</div>
	</div>
);

export default Home;
