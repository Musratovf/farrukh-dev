import { Link, Route, Routes } from 'react-router-dom';
import './Components/styles/main.scss';
import './Components/styles/animation.scss';
import Home from './Components/home/Home';
import Portfolio from './Components/portfolio/Portfolio';
import SetupMain from './Components/setup/Setup';

function Routing() {
	return (
		<>
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/portfolio' element={<Portfolio />} />
				<Route path='/setup' element={<SetupMain />} />
			</Routes>
		</>
	);
}
export default Routing;
