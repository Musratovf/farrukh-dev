import React, { useState, useEffect } from 'react';
import db from '../firebase/config';

const AboutInfo = () => {
	const [portfolios, setPortfolios] = useState([]);
	useEffect(() => {
		db.collection('portfolio').onSnapshot((snapshot) =>
			setPortfolios(snapshot.docs.map((doc) => doc.data()))
		);
	}, []);
	return (
		<div className='aboutInfo'>
			{portfolios.map((portfolios) => {
				<>
					<div className='side1'>
						<img src={portfolios.img} alt='me image' />
					</div>
					<div className='side2'>
						<h1>{portfolios.title}</h1>
						<p>{portfolios.description}</p>
					</div>
				</>;
			})}
		</div>
	);
};

export default AboutInfo;
