// src/Title.jsx
import React from 'react';
import styled from 'styled-components';

const Title = ({ text }) => {
  return (
    <Titulo className='text-3xl text-orange-p font-bold text-center my-16'>{text}</Titulo>
  );
}

export default Title;


const Titulo = styled.h1 `
  
   @media (max-width: 768px) {
    margin-top: 32px;
   }
`