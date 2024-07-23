import React from "react";
import { useParams } from "react-router-dom";
import { createRoot } from "react-dom/client";
import NavBar from "./components/menu/NavBar";
import styled from "styled-components";
import banner01 from "./assets/images/banners/bg-img1.jpg";
import Footer from "./components/sections/Footer";
import FooterMobile from "./components/sections/FooterMobile";
import calculovolumeimg from "./assets/images/imgservices/calculodevolume.jpg";
import monitoramentoBarragemImg from "./assets/images/imgservices/monitoramentodebarragens.jpg";
import monitoramentoEstoqueImg from "./assets/images/imgservices/monitoramentodeestoque.jpg";
import capacidadeVolumetricaPatios from "./assets/images/imgservices/estudodacapacidadevolumetricadepatios.jpg";
import classificacaoFeicoes from "./assets/images/imgservices/classificacaodefeicoes.png";
import monitoramentoFaixas from "./assets/images/imgservices/monitoramentodefaixa.jpg";
import contagemIndividuos from "./assets/images/imgservices/contagemindividuos-2.jpg";
import analiseAmbiental from "./assets/images/imgservices/analisesambientais.png";








const ServiceDetail = () => {

  const { serviceName } = useParams();

  const serviceTitles = {
    "calculo-de-volume": "Cálculo de Volume de Pilhas (material estocado)",
    "monitoramento-de-estoque": "Monitoramento de estoque (pilhas)",
    "classificacao-de-feicoes": "Classificação de feições (vetorização)",
    "monitoramento-de-barragens": "Monitoramento de Barragens",
    "capacidade-volumetrica-de-patios": "Estudo da Capacidade Volumétrica de Pátios",
    "monitoramento-de-faixa-de-dominio": "Monitoramento de Faixa de Domínio/Servidão de Minerodutos",
    "contagem-de-individuos": "Contagem de Indivíduos",
    "analises-ambientais": "Análises Ambientais",
  };

  const serviceDescription = {
    "calculo-de-volume": "Através das imagens de drone geramos modelos em 3D que possibilitam extração de medidas tanto planimétricas como volumétricas. Para a medição de volumetria das pilhas, o processo de cubagem é feito através de contornos baseados tanto na ortofoto quanto no MDS (modelo digital de superfície), utilizamos o método “pé de pilha” para extração do plano de medição unitário de cada pilha, gerando assim uma medição de volume. Se caso for disponibilizado a densidade do material, apresentamos a massa correspondente da medição.",
    "monitoramento-de-estoque": "Através do processamento de dados, cria-se um processo para acompanhar e gerenciar o fluxo de entrada e saída de produtos em um determinado tempo.",
    "classificacao-de-feicoes": "É um procedimento realizado, que visa converter a representação matricial (imagem) de um produto analógico geoespacial em uma representação vetorial associada a uma representação textual/tabular.",
    "monitoramento-de-barragens": "As estruturas devem ser monitoradas por meios de inspeções visuais rotineiras e análises das leituras obtidas por meio das instrumentações existentes.",
    "capacidade-volumetrica-de-patios": "Capacidade de armazenamento como o volume máximo que uma estrutura pode guardar de produtos. Dessa forma, os estoques podem ficar em pátios, depósitos, galpões e armazéns, por exemplo. Logo, o cálculo da capacidade de armazenamento recai sobre esses locais, a fim de entender quantos produtos podem ser guardados sem o prejuízo de nenhum deles.",
    "monitoramento-de-faixa-de-dominio": "A faixa de domínio é um conjunto de áreas, declarada de utilidade pública, destinadas a construção e operação da rodovia, dispositivo de acessos, dentre outros. A partir desses levantamentos topográficos, são tomadas providências necessários para a preservação da rodovia.",
    "contagem-de-individuos": "As aéreas capturadas com o uso de drones vem servindo de fonte de dados georreferenciados para uma série de aplicações, contagem de indivíduos explora especificamente o potencial das geotecnologias na verificação do espaçamento adotado e na contagem do material de interesse.",
    "analises-ambientais": "Processo de identificar as oportunidades, ameaças, forças e fraquezas, tanto do meio externo como interno, que podem interferir na atuação da empresa, no cumprimento da sua missão e na capacidade em atingir as metas propostas.",
  };

  const serviceImg = {
    "calculo-de-volume": calculovolumeimg,
    "monitoramento-de-estoque": monitoramentoEstoqueImg ,
    "classificacao-de-feicoes": classificacaoFeicoes ,
    "monitoramento-de-barragens": monitoramentoBarragemImg,
    "capacidade-volumetrica-de-patios": capacidadeVolumetricaPatios,
    "monitoramento-de-faixa-de-dominio": monitoramentoFaixas,
    "contagem-de-individuos": contagemIndividuos,
    "analises-ambientais": analiseAmbiental,
  };

  if (!serviceTitles[serviceName]) {
    return <div>Serviço não encontrado.</div>;
  }

  const title = serviceTitles[serviceName];
  const description = serviceDescription[serviceName];
  const image = serviceImg[serviceName];

  return (
    <div>
      <ContainerImage>
        <NavBar />
        <div className="relative z-10 mt-8 flex justify-center flex-col">
          <h1 className="text-orange-p font-bold text-3xl tracking-wider text-center uppercase">
            {title}
          </h1>
        </div>
      </ContainerImage>

      <div className="flex justify-center gap-8 w-3/5 mx-auto mt-32 mb-32 items-center">
        <img className="w-96" src={image} alt="" />
        <p>
          {description}
        </p>
      </div>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
      <FooterMobileWrapper>
        <FooterMobile />
      </FooterMobileWrapper>
    </div>
  );
};

export default ServiceDetail;

const FooterWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const FooterMobileWrapper = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

const ContainerImage = styled.section`
  background-image: url(${banner01});
  background-size: cover;
  background-position: center;
  height: 26vh;
  position: relative;

  /* Gradiente de fundo */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.95) 0%,
      rgba(0, 0, 0, 0.4) 100%
    );
    z-index: 1;
  }
`;
