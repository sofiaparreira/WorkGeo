import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CardServices from '../card/CardServices';
import Title from '../text/Title';
import { Link } from 'react-router-dom';
import img01 from '../../assets/images/imgservices/calculodevolume.jpg'
import img02 from '../../assets/images/imgservices/monitoramentodeestoque.jpg'
import img03 from '../../assets/images/imgservices/classificacaodefeicoes.png'
import img04 from '../../assets/images/imgservices/monitoramentodebarragens.jpg'
import img05 from '../../assets/images/imgservices/estudodacapacidadevolumetricadepatios.jpg'
import img06 from '../../assets/images/imgservices/monitoramentodefaixa.jpg'
import img07 from '../../assets/images/imgservices/contagemindividuos-1.jpg'
import img08 from '../../assets/images/imgservices/analisesambientais.png'




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
    <ServicosSection className='mt-24 xl:mx-40 lg:mx-8 md:mx-2'>
      <Title text='NOSSOS SERVIÇOS' />
      <GridContainer>
        {mobileData.length > 0 ? (
          mobileData.map((text, index) => (
            <Link key={index} to={`/service/${encodeURIComponent(text)}`}>
              <CardServices text={text} />
            </Link>
          ))
        ) : (
          <>
            <Link to="/service/calculo-de-volume">
              <CardServices img={img01}  text='Cálculo de Volume de Pilhas (material estocado)' />
            </Link>

            <Link to='/service/monitoramento-de-estoque'>
              <CardServices img={img02} text='Monitoramento de Estoque (pilhas)' />
            </Link>

            <Link to='/service/classificacao-de-feicoes'>
              <CardServices img={img03} text='Classificação de Feições (vetorização)' />
            </Link>

            <Link to='/service/monitoramento-de-barragens'>
              <CardServices img={img04} text='Monitoramento de Barragens' />
            </Link>

            <Link to='/service/capacidade-volumetrica-de-patios'>
              <CardServices img={img05} text='Estudo de Capacidade Volumétrica de Pátios' />
            </Link>

            <Link to='/service/monitoramento-de-faixa-de-dominio'>
              <CardServices img={img06} text='Monitoramento de Faixa de Domínio/Servidão de Minerodutos' />
            </Link>

            <Link to='/service/contagem-de-individuos'>
              <CardServices img={img07} text='Contagem de Indivíduos' />
            </Link>

            <Link to='/service/analises-ambientais'>
              <CardServices img={img08} text='Análises Ambientais' />
            </Link>
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
