import React from 'react'
import Footer from './components/Footer';
import Search from './components/Search'
import Sidebar from './components/Sidebar'
import './home.scss';

const Home = () => (
	<div className="home-page">
		<Sidebar />

		<div className="right-column">
		<Search />
		<Footer />
		</div>
	</div>
)

export default Home
