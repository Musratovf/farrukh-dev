import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import GitHubIcon from '@mui/icons-material/GitHub';
import ToshkentLoves from '../imgs/toshkent-yoshlarni-sevadi.png';
import InsertLink from '@mui/icons-material/InsertLink';
import TokarMebel from '../imgs/tokar-mebel.png';
import GithubApi from '../imgs/github-api.png';
import MaterialUi from '../imgs/material-ui-portfolio.png';
const Project = () => {
	return (
		<>
			<Container>
				<Row>
					<Col className='col' md='12'>
						<div className='projectCard'>
							<img
								className='portfolio-img'
								src={ToshkentLoves}
								alt='Portfolio Image'
							/>
							<div className='ProjectTitles'>
								<div className='projectAbout'>
									<h3 className='projectName'>
										Toshkent yoshlarni sevadi
									</h3>
									<p className='projectDesc'>
										Toshkent yoshlarni sevadi festivalining
										web sayti
									</p>
								</div>
								<div className='projectButtons'>
									<a
										className='buttons'
										href='https://github.com/Musratovf/Toshkent-yoshlarni-sevadi'
										target={'_blank'}>
										Source <GitHubIcon />
									</a>
									<a
										className='buttons'
										href='https://tashkent-yoshlarni-sevadi.netlify.app/'
										target={'_blank'}>
										Demo <InsertLink />
									</a>
								</div>
							</div>
						</div>
						<div className='projectCard'>
							<img
								className='portfolio-img'
								src={TokarMebel}
								alt='tokar mebel Image'
							/>
							<div className='ProjectTitles'>
								<div className='projectAbout'>
									<h3 className='projectName'>
										Tokar mebel Web site
									</h3>
									<p className='projectDesc'>
										Tokar Furniture Factory website
									</p>
								</div>
								<div className='projectButtons'>
									<a
										className='buttons'
										href='https://github.com/Musratovf/Tokar-Mebel'
										target={'_blank'}>
										Source <GitHubIcon />
									</a>
									<a
										className='buttons'
										href='https://tokar-mebel.netlify.app/'
										target={'_blank'}>
										Demo <InsertLink />
									</a>
								</div>
							</div>
						</div>
						<div className='projectCard'>
							<img
								className='portfolio-img'
								src={GithubApi}
								alt='Github clone api img'
							/>
							<div className='ProjectTitles'>
								<div className='projectAbout'>
									<h3 className='projectName'>Github Api</h3>
									<p className='projectDesc'>
										Github API clone
									</p>
								</div>
								<div className='projectButtons'>
									<a
										className='buttons'
										href='https://github.com/Musratovf/Github-Api'
										target={'_blank'}>
										Source <GitHubIcon />
									</a>
									<a
										className='buttons'
										href='https://githubs-api-search.netlify.app/'
										target={'_blank'}>
										Demo <InsertLink />
									</a>
								</div>
							</div>
						</div>
						<div className='projectCard'>
							<img
								className='portfolio-img'
								src={MaterialUi}
								alt='Github clone api img'
							/>
							<div className='ProjectTitles'>
								<div className='projectAbout'>
									<h3 className='projectName'>Material Ui</h3>
									<p className='projectDesc'>
										Material Ui Web site{' '}
									</p>
								</div>
								<div className='projectButtons'>
									<a
										className='buttons'
										href='https://github.com/Musratovf/react-portfolio'
										target={'_blank'}>
										Source <GitHubIcon />
									</a>
									<a
										className='buttons'
										href='https://farrukh-dev.netlify.app/'
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
