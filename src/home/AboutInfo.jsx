import React, { useState, useEffect } from 'react';
import db from '../firebase/Config';

const AboutInfo = () => {
	const [portfolios, setPortfolios] = useState([]);
	{
	}
	useEffect(() => {
		db.collection('portfolio').onSnapshot((snapshot) =>
			setPortfolios(snapshot.docs.map((doc) => doc.data()))
		);
	}, []);

	return (
		<div className='aboutInfo'>
			{portfolios.map((portfolia) => {
				<>
					<div className='side1'>
						<img src={portfolia.image} alt='me image' />
					</div>
					<div className='side2'>
						<h1>{portfolia.title}</h1>
						<p>{portfolia.description}</p>
					</div>
					{console.log(portfolia)}
				</>;
			})}
		</div>
	);
};

export default AboutInfo;
