import React from 'react';
import { useParams } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import NavBar from './components/menu/NavBar';
import styled from 'styled-components';
import banner01 from './assets/images/banners/bg-img1.jpg'
const ServiceDetail = () => {
  const { serviceName } = useParams();

  // Exemplo de mapeamento de serviceName para títulos
  const serviceTitles = {
    'calculo-de-volume': 'Cálculo de Volume de Pilhas (material estocado)',
    'monitoramento-de-estoque': 'Monitoramento de estoque (pilhas)',
    'classificacao-de-feicoes': 'Classificação de feições (vetorização)',
  };

  // Verifica se o serviço existe nos títulos
  if (!serviceTitles[serviceName]) {
    return <div>Serviço não encontrado.</div>;
  }

  const title = serviceTitles[serviceName];

  return (
    <div>
        <ContainerImage>
                <NavBar />
                <div className='relative z-10 mt-8 flex justify-center flex-col'>
                    <h1 className='text-orange-p font-bold text-3xl tracking-wider text-center uppercase'>{title}</h1>
                </div>
            </ContainerImage>
   
<p>Página em desenvolvimento</p>
    </div>
  );
};

export default ServiceDetail;


const ContainerImage = styled.section`
    background-image: url(${banner01}); 
    background-size: cover; 
    background-position: center; 
    height: 26vh; 
    position: relative; 

    /* Gradiente de fundo */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.4) 100%);
        z-index: 1; 
    }
`;