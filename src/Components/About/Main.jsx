import React from 'react';
import MyImg from '../imgs/farrukh.jpg';
const Main = () => {
	return (
		<div className='aboutme-main'>
			<>
				<img width={200} src={MyImg} alt='My information img' />
			</>
			<span>
				<p className='aboutmeText'>
					Hello my dear! I am Musratov Farrux and i'm 21. I am from
					Uzbekistan, and currently i'm living in Samarqand region,
					Payarik. So I started learning Frontend development since
					2020 years from Najot Ta'lim Academy
					<div>
						<b>Why I chose Frontend?</b>
					</div>
					Obcaecati velit nobis beatae, vero esse aliquid sed quaerat.
					Impedit, laudantium.
				</p>
			</span>
		</div>
	);
};

export default Main;
