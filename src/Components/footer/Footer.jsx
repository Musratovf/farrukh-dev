import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
const footer = () => {
	return (
		<div className='footer'>
			<p>
				@ Farrukh - {new Date().getFullYear()} | Made with{' '}
				<FavoriteIcon />
			</p>
		</div>
	);
};

export default footer;
