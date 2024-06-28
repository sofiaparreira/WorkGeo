import React from 'react';
import styled from 'styled-components';
import banner01 from '../../assets/images/banners/bg-img1.jpg';

const CardServices = ({ text }) => {
    return (
        <CardContainer className='cursor-pointer'>
            <ImgCard />
            <Paragraph className='text-center w-64 pt-4'>{text}</Paragraph> 
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
    background-image: url(${banner01});
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    border: 8px solid #ccc; /* Cor da borda cinza */
    transition: border-color 0.4s ease-in-out;

    &:hover {
        border-color: orange; /* Mudança da cor da borda para laranja no hover */
    }
       
    @media screen and (max-width: 768px) {
        width: 120px;
        height: 120px;
    }
`;

const Paragraph = styled.p `
    width: 112px;
`

export default CardServices;
