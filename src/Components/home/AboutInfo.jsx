import React from 'react';
import { Link } from 'react-router-dom';
import farrukh from '../imgs/farrukh.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
const AboutInfo = () => {
	return (
		<div className='aboutinfo'>
			<div className='aboutinfo-1'>
				<img
					className='avatar'
					width={300}
					height={300}
					src={farrukh}
					alt='Hero Farrukh Musratov'
				/>
			</div>
			<div className='aboutinfo-2'>
				<h2 className='title'>Hi, I'm Farrukh</h2>
				<p className='description'>
					21 y.o Frontend developer Strong Junior Software enginer at
					FenixSoft Company
				</p>
				<div className='buttons'>
					<Link className='linkBtn' to='/'>
						About me
					</Link>
					<Link className='linkBtn' to='/'>
						Portfolio
					</Link>
				</div>
				<div className='socialNet'>
					<a href='#' target={'_blank'}>
						<YouTubeIcon />
					</a>
					<a href='#' target={'_blank'}>
						<GitHubIcon />
					</a>
					<a href='#' target={'_blank'}>
						<InstagramIcon />
					</a>
					<a href='#' target={'_blank'}>
						<TelegramIcon />
					</a>
				</div>
			</div>
		</div>
	);
};

export default AboutInfo;
