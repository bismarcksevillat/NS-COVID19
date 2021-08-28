import React from 'react'
import './sidebar.scss'
import logo from '../img/logo.png'
import house from '../img/house-icon.png'

const Sidebar = () => (
	<header>
		<div className='sidebar-content d-flex flex-row justify-content-between align-items-center flex-md-column'>
			<div className='logo-container'>
				<a href='/' target='_self' title='Covid icon'>
					<img src={logo} className='img-fluid' alt='Imagen' />
				</a>
			</div>

			<nav className='navbar mt-md-5'>
				<ul>
					<li className='active'>
						<a href='/' target='_self' title='Home link'>
							<img src={house} className='img-fluid' alt='House Icon' />
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</header>
)

export default Sidebar
