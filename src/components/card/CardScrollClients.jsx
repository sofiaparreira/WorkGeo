import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import cappe_brasil from '../../assets/images/clients/cappe_brasil.png';
import cbmm from '../../assets/images/clients/cbmm.png';
import cimento_tupi from '../../assets/images/clients/cimento_tupi.png';
import ecovias from '../../assets/images/clients/ecovias.png';
import eixo from '../../assets/images/clients/eixo.png';
import gerdau from '../../assets/images/clients/gerdau.png';
import light from '../../assets/images/clients/light.png';
import taesa from '../../assets/images/clients/taesa.png';
import vallourec from '../../assets/images/clients/vallourec.png';
import houer from '../../assets/images/clients/houer.png';
import arcelorMittal from '../../assets/images/clients/arcelorMittal.png';
import diefra from '../../assets/images/clients/diefra.png';
import dnit from '../../assets/images/clients/dnit.png';


const ScrollContainer = styled.div`
    padding: 0 32px 32px 32px;
    overflow-x: auto;
    white-space: nowrap;
    cursor: grab;
    user-select: none;
`;

const ClientLogo = styled.img`
    height: 100%;
    pointer-events: none;
       @media screen and (max-width: 768px) {
        width: 44%;
    }
`;

const MyComponent = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const scrollContainerRef = useRef();

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault(); // Prevent image selection
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // *2 for faster scroll
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <ScrollContainer
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            <ContainerClients className='flex items-center gap-12'>
                <ClientLogo src={vallourec} alt="Vallourec" />
                <ClientLogo src={cimento_tupi} alt="Cimento Tupi" />
                <ClientLogo src={gerdau} alt="Gerdau" />
                <ClientLogo src={houer} alt="Gerdau" />
                <ClientLogo src={cappe_brasil} alt="Cappe Brasil" />
                <ClientLogo src={cbmm} alt="CBMM" />
                <ClientLogo src={ecovias} alt="Ecovias" />
                <ClientLogo src={eixo} alt="Eixo" />
                <ClientLogo src={light} alt="Light" />
                <ClientLogo src={taesa} alt="Taesa" />
                <ClientLogo src={arcelorMittal} alt="Taesa" />
                <ClientLogo src={diefra} alt="Taesa" />
                <ClientLogo src={dnit} alt="Taesa" />
            </ContainerClients>
        </ScrollContainer>
    );
};

export default MyComponent;


const ContainerClients = styled.div `
    @media screen and (max-width: 768px) {
        width: 100%;
        gap: 24px;
    }
`