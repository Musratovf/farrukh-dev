import React from 'react';
import SetupImage from '../imgs/setup.jpg';
import { Container, Col, Row } from 'reactstrap';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const SetupMain = () => {
	return (
		<div className='setupMain'>
			{' '}
			<div className='setupImage'>
				<img
					width={300}
					height={800}
					src={SetupImage}
					alt='My Setup image'
				/>
			</div>
			<Container>
				<Row>
					<Col md='8'>
						<div className='mySetup'>
							<span className='laptopspaces'>
								<ul>
									<li>
										<a href=''>
											<h2 className='laptopspacesTitle'>
												Hp Pavilion Laptop
											</h2>
											<ArrowUpwardIcon />
										</a>
									</li>
									<li>Intel Core I7-11th Gen</li>
									<li>16GB RAM (15.8 GB usable )</li>
									<li>HDD 1TB</li>
									<li>Display FHD 15.8</li>
								</ul>
							</span>
							<span className='laptopspaces'>
								<ul>
									<li>
										<a href=''>
											<h2 className='laptopspacesTitle'>
												Hp pavilion Anyware
											</h2>
											<ArrowUpwardIcon />
										</a>
									</li>
									<li>Intel Core I7-11th Gen</li>
									<li>16GB RAM (15.8 GB usable )</li>
									<li>HDD 1TB</li>
									<li>Display FHD 15.8</li>
								</ul>
							</span>
							<span className='keyboarSpaces'>
								<ul>
									<li>
										<h2>Keyboard & Mouse</h2>
									</li>
									<li>Auido by</li>
								</ul>
							</span>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default SetupMain;
