import { Link, Route, Routes } from 'react-router-dom';
import './Components/styles/main.scss';
import './Components/styles/animation.scss';
import Home from './Components/home/Home';
import Portfolio from './Components/portfolio/Portfolio';

function Routing() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/portfolio' element={<Portfolio />} />
			</Routes>
		</>
	);
}
export default Routing;
