// NavBar.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  position: relative;
  color: ${({ isActive }) => (isActive ? 'orange' : 'white')};
  text-decoration: none;
  transition: all 0.3s ease;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: white;
    transition: width 0.3s ease; 
    transform-origin: left; 
  }

  &:hover:before {
    width: 100%;
    transform: scaleX(1.02); 
  }
`;

const StyledListItem = styled.li`
  position: relative;
  cursor: pointer;
  color: white;
  transition: all 0.3s ease; 

  &:hover {
    transform: scale(1.04); 
  }
`;

export default function NavBar() {
  const location = useLocation();

  return (
    <Nav className='z-10 relative px-16 py-4 flex justify-between'>
      <Img className='w-24' src={logo} alt="Logo" />
      <Ul className='flex gap-20'>
        <StyledListItem>
          <StyledLink className='py-1' to='/' isActive={location.pathname === '/'}>HOME</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink className='py-1' to='/sobre-nos' isActive={location.pathname === '/sobre-nos'}>SOBRE NÓS</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink className='py-1' to='/contato' isActive={location.pathname === '/contato'}>CONTATO</StyledLink>
        </StyledListItem>
      </Ul>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center; // Alterado para center para centralizar os itens
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 16px 0px;
  }
`;


const Img = styled.img `
   @media screen and (max-width: 768px) {
        width: 72px;
        height: auto;
        margin-right: 40px;
        
    }
`

const Ul = styled.ul `
   @media screen and (max-width: 768px) {
        gap: 32px;
    }
`
