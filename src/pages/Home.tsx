import React from 'react'
import CountriesTable from './components/CountriesTable'
import Footer from './components/Footer'
import Search from './components/Search'
import Sidebar from './components/Sidebar'
import './home.scss'

const Home = () => (
	<div className='home-page'>
		<Sidebar />

		<div className='right-column'>
			<Search />
			
			<CountriesTable />

			<Footer />
		</div>
	</div>
)

export default Home
