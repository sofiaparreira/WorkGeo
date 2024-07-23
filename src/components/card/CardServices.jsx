import React from 'react';
import styled from 'styled-components';

const CardServices = ({ text, onClick, img }) => {
    return (
        <CardContainer onClick={onClick} className='cursor-pointer'>
            <ImgCard img={img} />
            <Paragraph className='text-center pt-4'>{text}</Paragraph>
        </CardContainer>
    );
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
`;

const ImgCard = styled.div`
    width: 152px;
    height: 152px;
    background-image: ${({ img }) => `url(${img})`};
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    border: 8px solid #ccc;
    transition: border-color 0.4s ease-in-out;

    &:hover {
        border-color: orange;
    }

    @media screen and (max-width: 768px) {
        width: 120px;
        height: 120px;
    }
`;

const Paragraph = styled.p`
    width: 80%;
`;

export default CardServices;
