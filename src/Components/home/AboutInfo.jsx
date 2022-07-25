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
					width={450}
					height={450}
					src={farrukh}
					alt='Hero Farrukh Musratov :)'
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
					<Link className='linkBtn' to='/portfolio'>
						Portfolio
					</Link>
				</div>
				<div className='socialNet'>
					<a
						className='socialLink'
						href='https://www.youtube.com/channel/UCY1r0oBGwfZ6eGXYaAJ5z5g'
						target={'_blank'}>
						<YouTubeIcon className='svgIcon' />
					</a>
					<a
						className='socialLink'
						href='https://github.com/Musratovf'
						target={'_blank'}>
						<GitHubIcon className='svgIcon' />
					</a>
					<a
						className='socialLink'
						href='https://www.instagram.com/farrux_musratov/'
						target={'_blank'}>
						<InstagramIcon className='svgIcon' />
					</a>
					<a
						className='socialLink'
						href='https://t.me/Farrux_Musratov'
						target={'_blank'}>
						<TelegramIcon className='svgIcon' />
					</a>
				</div>
			</div>
		</div>
	);
};

export default AboutInfo;
