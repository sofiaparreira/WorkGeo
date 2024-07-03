import React from 'react';
import Title from '../text/Title';
import sigweb01 from "../../assets/images/sigweb/img1-sigweb.png";
import sigweb02 from "../../assets/images/sigweb/img2-sigweb.png";
import styled from 'styled-components';

export default function OurPlataform() {
    return (
        <section className='mb-48 mt-24'>
            <Title text={'NOSSA PLATAFORMA - SIGWEB'} />

            <Container className='flex justify-between xl:mx-32  mx-8'>

                <ContainerImgs className='gap-8 flex ' >
                    <Imgs className='' src={sigweb01} alt="" />
                    <Imgs className='' src={sigweb02} alt="" />
                </ContainerImgs>

                <ContainerText className='w-1/2 my-auto'>
                    <p>Na WorkGeo, integramos geoprocessamento com tecnologia de ponta para oferecer soluções avançadas em modelos digitais 3D georreferenciados de alta qualidade através da nossa plataforma própria. Além disso, desenvolvemos aplicativos que automatizam processos tanto em campo quanto em escritórios, permitindo uma análise eficiente e a geração de insights estratégicos para nossos clientes. </p>
                    
                    <p className='mt-6 '>Nosso sistema web para monitoramento oferece gestão de inventário e medições, categorização detalhada de itens (como tipo de material e progresso), acesso remoto a resultados como ortofotos de alta qualidade, geolocalização de imperfeições, extração de dimensões automatizada, e visualização completa através de relatórios, vídeos, modelos 3D e imagens em 360 graus. Essas funcionalidades fornecem uma visão abrangente e detalhada para melhor tomada de decisões e eficiência operacional.</p>
                    
                </ContainerText>
            </Container>

           
        </section>
    );
}


const Container = styled.div `
    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin: 16px;
        gap: 32px;
  }

  gap: 0px;
`


const ContainerText = styled.div `
    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 0px
  }
`

const ContainerImgs = styled.div `
    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
  }
        width: 20%;
        heigth: 20%;
`

const Imgs = styled.img`
    @media screen and (max-width: 768px) {
        height: auto;
        max-width: 90%;
        margin: auto;
    }

    width: 100%;
    heigth: auto;
    object-fit: cover


`;

