import NavBar from "./components/menu/NavBar";
import banner01 from "./assets/images/banners/bg-img1.jpg";
import styled from "styled-components";
import FormContact from "./components/card/FormContact";
import Footer from "./components/sections/Footer";
import { Link } from "react-router-dom";
import FooterMobile from "./components/sections/FooterMobile";

export default function Contact() {
  return (
    <div>
      <ContainerImage>
        <NavBar />
        <div className="relative z-10 mt-8 flex justify-center flex-col">
          <h1 className="text-orange-p font-bold text-4xl tracking-wider text-center">
            CONTATO
          </h1>
        </div>
      </ContainerImage>

      <FormContact />

      
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
      <FooterMobileWrapper>
        <FooterMobile /> 
      </FooterMobileWrapper>
    </div>
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
      rgba(0, 0, 0, 0.2) 100%
    );
    z-index: 1;
  }
`;
