import React, { useState, useEffect } from 'react';
import db from './../firebase/Config';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';

const AboutInfo = () => {
	const [portfolios, setPortfolios] = useState([]);

	const handleAdd = async (e) => {
		const res = await addDoc(collection(db, 'portfolio'), {
			name: 'Los Angeles',
			state: 'CA',
			country: 'USA',
		});
		console.log(res.id);
	};
	// useEffect(() => {
	// 	db.collection('portfolio').onSnapshot((snapshot) =>
	// 		setPortfolios(snapshot.docs.map((doc) => doc.data()))
	// 	);
	// }, []);

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
				</>;
			})}
		</div>
	);
};

export default AboutInfo;
