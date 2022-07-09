import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import './styles/main.scss';
import './styles/animation.scss';
import Home from './home/Home';

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
