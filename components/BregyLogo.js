import React from 'react';
import styled from 'styled-components';

const bregyLogo =
	'https://github.com/bregydoc/whoiam-pitch/raw/master/images/bregymalpartida.png';

const LogoWrapper = styled.img`
	width: auto;
	height: 50vh;
`;
const BregyLogo = props => {
	return <LogoWrapper {...props} src={bregyLogo} />;
};

export default BregyLogo;
