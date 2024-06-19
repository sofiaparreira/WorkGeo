import React from 'react';
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

const ScrollContainer = styled.div`
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
`;

const ScrollContent = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

const ClientLogo = styled.img`
        width: 144px; /* Tamanho base das imagens */
    height: auto; /* Mantém a proporção da imagem */
    margin-right: 20px; /* Espaçamento entre as imagens */
    flex-shrink: 0; /* Evita que as imagens diminuam de tamanho */
    object-fit: cover; /* Ajusta a imagem dentro do espaço definido */
`;

const MyComponent = () => {
    return (
        <ScrollContainer>
            <ScrollContent>
                <ClientLogo src={cappe_brasil} alt="Cappe Brasil" />
                <ClientLogo src={cbmm} alt="CBMM" />
                <ClientLogo src={cimento_tupi} alt="Cimento Tupi" />
                <ClientLogo src={ecovias} alt="Ecovias" />
                <ClientLogo src={eixo} alt="Eixo" />
                <ClientLogo src={gerdau} alt="Gerdau" />
                <ClientLogo src={light} alt="Light" />
                <ClientLogo src={taesa} alt="Taesa" />
                <ClientLogo src={vallourec} alt="Vallourec" />
            </ScrollContent>
        </ScrollContainer>
    );
};

export default MyComponent;
