import React from 'react';
import Navsection from '../home/NavSection';
import PageInfo from './PageInfo';
import SetupMain from './SetupMain';
import Footer from '../footer/Footer';
const Setup = () => {
	return (
		<div>
			<Navsection />
			<PageInfo />
			<SetupMain />
			<Footer />
		</div>
	);
};

export default Setup;
