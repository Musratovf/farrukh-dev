import './App.css';
import './styles/main.scss';
import Home from './home/Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Routing() {
	return (
		<Router>
			<Link>
				<Route path='/home' exact component={Home} />
			</Link>
		</Router>
	);
}
export default Routing;
