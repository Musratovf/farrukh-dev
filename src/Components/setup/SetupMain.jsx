import React from 'react';
import SetupImage from '../imgs/setup.jpg';
import { Container, Col, Row } from 'reactstrap';
const SetupMain = () => {
	return (
		<div className='setupMain'>
			{' '}
			<div className='setupImage'>
				<img src={SetupImage} alt='My Setup image' />
			</div>
			<Container>
				<Row>
					<Col md='8'>
						<h1>Setup</h1>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default SetupMain;
