import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import './Components/styles/main.scss';
import './Components/styles/animation.scss';
import Home from './Components/home/Home';

function Routing() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</>
	);
}
export default Routing;
