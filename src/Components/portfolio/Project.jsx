import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import GitHubIcon from '@mui/icons-material/GitHub';
import YoutubeClone from '../imgs/toshkent-yoshlarni-sevadi.png';
import InsertLink from '@mui/icons-material/InsertLink';
const Project = () => {
	return (
		<>
			<Container>
				<Row>
					<Col md='12'>
						<div className='projecrCard'>
							<img
								className='portfolio-img'
								src={YoutubeClone}
								alt='Portfolio Image'
							/>
							<img
								className='portfolio-img'
								src={YoutubeClone}
								alt='Portfolio Image'
							/>
							<div className='cardSide'>
								<div className='ProjectAbout'>
									<h3>Toshkent yoshlarni sevadi</h3>
									<p>
										Toshkent yoshlarni sevadi festivalining
										web sayti
									</p>
								</div>
								<div className='projectButtons'>
									<a
										href='https://github.com/Musratovf'
										target={'_blank'}>
										Source <GitHubIcon />
									</a>
									<a
										href='https://tashkent-yoshlarni-sevadi.netlify.app/'
										target={'_blank'}>
										Demo <InsertLink />
									</a>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Project;
