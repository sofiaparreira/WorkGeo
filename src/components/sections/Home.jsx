import styled from "styled-components";
import banner01 from "../../assets/images/banners/bg-img1.jpg";
import NavBar from "../menu/NavBar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <ContainerImage className="pb-16  sm:pb-64">
        <NavBar />
        <div className="relative z-10 mt-24 sm:mt-40 flex justify-center flex-col">
          <h1 className="text-orange-p font-bold text-5xl tracking-wider text-center">
            WORKGEO
          </h1>
          <Paragraph className="text-white text-center text-lg font-extralight xl:w-2/5 w-3/5 mx-auto mt-16">
            Empresa de engenharia com base tecnológica e foco em
            geoprocessamento, processamento de imagens e inovações para
            Indústria 4.0
          </Paragraph>
          <StyledLink
            to="/sobre-nos"
            className="inline-block text-white py-1 text-lg tracking-wider mx-auto mt-12 items-center gap-4"
          >
            saiba mais
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18"
              width="18"
              viewBox="0 0 512 512"
            >
              <path
                fill="#ffffff"
                d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
              />
            </svg>
          </StyledLink>
        </div>
      </ContainerImage>
    </>
  );
}

const ContainerImage = styled.section`
  background-image: url(${banner01});
  background-size: cover;
  background-position: center;
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
      rgba(0, 0, 0, 0.1) 100%
    );
    z-index: 1;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  position: relative;
  color: white;
  text-decoration: none;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: white;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease-out;
  }

  &:hover:before {
    transform: scaleX(1);
  }
`;


const Paragraph= styled.p `
  @media screen and (max-width: 768px) {
    width: 90%;
  }

`