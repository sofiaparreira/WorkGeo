import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Home from "../../components/sections/Home";
import Services from "../../components/sections/Services";
import Area from "../../components/sections/Area";
import OurPlataform from "../../components/sections/OurPlataform";
import Clients from "../../components/sections/Clients";
import Footer from "../../components/sections/Footer";
import FooterMobile from "../../components/sections/FooterMobile";
import styled from "styled-components";

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

function App() {


  return (
    <>
      <Fade>
        <Home />
      </Fade>
      <Fade>
        <Services />
      </Fade>
      <Fade>
        <Area />
      </Fade>
      <Fade>
        <OurPlataform />
      </Fade>
      <Slide>
        <Clients />
      </Slide>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
      <FooterMobileWrapper>
        <FooterMobile />
      </FooterMobileWrapper>
    
    </>
  );
}

export default App;
