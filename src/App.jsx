import { Link, Route, Routes } from 'react-router-dom';
import './Components/styles/main.scss';
import './Components/styles/animation.scss';
import Home from './Components/home/Home';
import Portfolio from './Components/portfolio/Portfolio';
import SetupMain from './Components/setup/Setup';
import About from './Components/About/About';
function Routing() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/portfolio' element={<Portfolio />} />
				<Route path='/setup' element={<SetupMain />} />
				<Route path='/about-me' element={<About />} />
			</Routes>
		</>
	);
}
export default Routing;
