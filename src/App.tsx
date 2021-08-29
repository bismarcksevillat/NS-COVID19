import React, { useEffect } from 'react';
import { useStadistics } from './hooks/useStadistics';
import Home from './pages/Home';

function App() {
	const { stadisticsData, fetchStadisticsData } = useStadistics();

	useEffect(() => {
		fetchStadisticsData('');
	}, []);

	return (
		<div className='App'>
			<Home
				stadisticsData={stadisticsData}
				fetchStadisticsData={fetchStadisticsData}
			/>
		</div>
	);
}

export default App;
