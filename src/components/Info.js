import React from 'react';
import styled from 'styled-components';

export default function Info({ info }) {
    return (
        <StyledInfo>
        <p>Title: {info.title}</p>
        <p>Copyright: {info.copyright}</p>
        <p>Date: {info.date}</p>
        <p>Explanation: {info.explanation}</p>
        </StyledInfo>
    )
}

const StyledInfo = styled.div`
p {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
    vertical-align: baseline;
}
color: white;
background-color: ${pr => pr.theme.bgcolor};
padding: 1% 5% 1% 5%;
`