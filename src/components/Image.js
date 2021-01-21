import React from 'react';
import styled from 'styled-components';

export default function Image({img}) {
    return (
        <StyledImage src={img}></StyledImage>
    )
}

const StyledImage = styled.img`
width: 25%;
height: 25%;
`