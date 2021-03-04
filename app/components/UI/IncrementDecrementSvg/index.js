import React from 'react';
import { Svg, Circle, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

const IncrementDecrementSvg = ({ plus }) => (
	<Svg width="44" height="44" viewBox="0 0 44 44" fill="none">
		<Circle cx="22" cy="22" r="21.5" fill="white" stroke="#037DD6" />
		<Path
			d={
				plus
					? 'M30.25 20.6875H24.0625V14.5C24.0625 13.7695 23.418 13.125 22.6875 13.125H21.3125C20.5391 13.125 19.9375 13.7695 19.9375 14.5V20.6875H13.75C12.9766 20.6875 12.375 21.332 12.375 22.0625V23.4375C12.375 24.2109 12.9766 24.8125 13.75 24.8125H19.9375V31C19.9375 31.7734 20.5391 32.375 21.3125 32.375H22.6875C23.418 32.375 24.0625 31.7734 24.0625 31V24.8125H30.25C30.9805 24.8125 31.625 24.2109 31.625 23.4375V22.0625C31.625 21.332 30.9805 20.6875 30.25 20.6875Z'
					: 'M30.25 20.6875H13.75C12.9766 20.6875 12.375 21.332 12.375 22.0625V23.4375C12.375 24.2109 12.9766 24.8125 13.75 24.8125H30.25C30.9805 24.8125 31.625 24.2109 31.625 23.4375V22.0625C31.625 21.332 30.9805 20.6875 30.25 20.6875Z'
			}
			fill="#037DD6"
		/>
	</Svg>
);

IncrementDecrementSvg.propTypes = {
	plus: PropTypes.bool
};

export default IncrementDecrementSvg;
