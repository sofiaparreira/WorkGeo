import React from 'react';
import styled from 'styled-components';
import banner01 from '../../assets/images/banners/bg-img1.jpg';

interface CardServicesProps {
    text: string; 
}

const CardServices: React.FC<CardServicesProps> = ({ text }) => {
    return (
        <CardContainer>
            <ImgCard className='border-8 border-gray-300' />
            <p className='text-center w-64 pt-4'>{text}</p> 
        </CardContainer>
    );
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px; /* Espaçamento entre os elementos */
`;

const ImgCard = styled.div`
    width: 152px;
    height: 152px;
    background-image: url(${banner01});
    background-size: cover;
    background-position: center;
    border-radius: 50%;
`;

export default CardServices;
