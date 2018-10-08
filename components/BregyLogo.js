import React from 'react';
import styled from 'styled-components';

const bregyLogo = '../images/bregyLogo.png';

const LogoWrapper = styled.img`
	width: auto;
	height: 200px;
`;
const BregyLogo = props => {
	return <LogoWrapper {...props} src={bregyLogo} />;
};

export default BregyLogo;
