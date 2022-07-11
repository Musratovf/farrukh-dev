import React, { useState, useEffect } from 'react';
import db from '../firebase/Config';

const AboutInfo = () => {
	const [portfolios, setPortfolios] = useState([]);
	useEffect(() => {
		db.collection('portfolio').onSnapshot((snapshot) =>
			setPortfolios(snapshot.docs.map((doc) => doc.data()))
		);
	}, []);
	return (
		<div className='aboutInfo'>
			{portfolios.map((portfolio) => {
				<>
					<div className='side1'>
						<img src={portfolio.image} alt='me image' />
					</div>
					<div className='side2'>
						<h1>{portfolio.title}</h1>
						<p>{portfolio.description}</p>
					</div>
				</>;
			})}
		</div>
	);
};

export default AboutInfo;
