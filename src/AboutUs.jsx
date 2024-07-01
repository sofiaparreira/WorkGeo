import React from "react";
import imgAboutUs from "./assets/images/imgAboutUs.png";
import NavBar from "./components/menu/NavBar";
import styled from "styled-components";
import banner01 from "./assets/images/banners/bg-img1.jpg";
import logo from "./assets/images/logo.png";
import CardOurNumbers from "./components/card/CardOurNumbers";
import Feedback from "./components/sections/Feedback";
import Footer from "./components/sections/Footer";
import FooterMobile from "./components/sections/FooterMobile"; // Importe o componente FooterMobile aqui

export default function AboutUs() {
  return (
    <>
      <ContainerImage>
        <NavBar />
        <div className="relative z-10 mt-8 flex justify-center flex-col">
          <h1 className="text-orange-p font-bold text-4xl tracking-wider text-center">
            SOBRE NÓS
          </h1>
        </div>
      </ContainerImage>

      <ContainerPai className="flex justify-around mt-32">
        <img src={imgAboutUs} alt="" />

        <ContentP className="w-2/5 content-wrapper">
          <Logo className="w-32 m-auto" src={logo} alt="" />

          <Paragraph className="mt-16 mb-6">
            Somos uma empresa de engenharia com base tecnológica e foco em
            geoprocessamento, processamento de imagens e inovações para
            Indústria 4.0
          </Paragraph>
          <Paragraph className="mb-6">
            Possuímos expertise na execução de serviços de topografia através de
            aeronaves remotamente pilotadas.
          </Paragraph>
          <Paragraph className="mb-6">
            Atuamos há 12 anos no mercado gerando soluções em modelos, extraímos
            resultados para diversas análises de Engenharia e Ambiental
          </Paragraph>
        </ContentP>
      </ContainerPai>

      <CardOurNumbers />
      <Feedback />

      <FooterWrapper>
        <Footer />
      </FooterWrapper>
      <FooterMobileWrapper>
        <FooterMobile /> {/* Renderize o componente FooterMobile aqui */}
      </FooterMobileWrapper>
    </>
  );
}

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
  height: 28vh;
  position: relative;

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
      rgba(0, 0, 0, 0.2) 100%
    );
    z-index: 1;
  }
`;

const ContainerPai = styled.div`
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 16px; 
  }
`;

const Logo = styled.img`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Paragraph = styled.p`
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 8px 0;
    text-align: justify;
  }
`;

const ContentP = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    padding: 32px 16px; 
  }
`;
