import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CardServices from '../card/CardServices';
import Title from '../text/Title';

export default function Services() {
  const [mobileData, setMobileData] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setMobileData([
          'Volume de Pilhas',
          'Monitoramento de estoque',
          'Classificação de feições',
          'Monitoramento de barragens',
          'Estudo de capacidade volumétrica',
          'Monitoramento de faixa de minerodutos',
          'Estudo de granulometria de rochas',
          'Cálculo de corte e aterro'
        ]);
      } else {
        setMobileData([]);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <ServicosSection className='mt-24 mx-40'>
      <Title text='NOSSOS SERVIÇOS' />
      <GridContainer>
        {mobileData.length > 0 ? (
          mobileData.map((text, index) => (
            <CardServices key={index} text={text} />
          ))
        ) : (
          <>
            <CardServices text='Cálculo de Volume de Pilhas (material estocado)' />
            <CardServices text='Monitoramento de estoque (pilhas)' />
            <CardServices text='Classificação de feições (vetorização)' />
            <CardServices text='Monitoramento de barragens' />
            <CardServices text='Estudo de capacidade volumétrica de pátios' />
            <CardServices text='Monitoramento de faixa de domínio/servidão de minerodutos' />
            <CardServices text='Estudo de granulometria de rochas' />
            <CardServices text='Cálculo de corte e aterro' />
          </>
        )}
      </GridContainer>
    </ServicosSection>
  );
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  justify-items: center;
  margin: 88px 32px;
  row-gap: 88px;
  padding: 32px 0px;

  @media screen and (max-width: 768px) {
    margin: 0px;
    grid-template-columns: repeat(2, 1fr);
      row-gap: 40px;
  }
`;

const ServicosSection = styled.div`
  @media screen and (max-width: 768px) {
    margin: 0px;
  }
`;
