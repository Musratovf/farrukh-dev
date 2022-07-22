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
									<li className='item'>
										<a
											target='_blank'
											href='https://www.kns.ru/product/noutbuk-hp-pavilion-15-eg0128ur/'>
											<h2 className='laptopspacesTitle'>
												Hp Laptop
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
									<li className='item'>
										<a
											target={'_blank'}
											href='https://www.kns.ru/product/noutbuk-hp-pavilion-15-eg0128ur/'>
											<h2 className='laptopspacesTitle'>
												Hp Anyware
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
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default SetupMain;
