// src/Area.jsx
import React from 'react';
import Title from '../text/Title';
import areaMina from '../../assets/images/area-mina.png';
import areaMeio from '../../assets/images/area-meio.png';
import areaIfra from '../../assets/images/area-infra.png';
import areaAgri from '../../assets/images/area-agri.png';

import styled from 'styled-components';

const Area = () => {
    return (
        <section className='mt-32'>
            <Title text='ÁREAS DE ATUAÇÃO' />
            <div className='flex'>

                <DivImageAreas className='w-screen relative' bgImg={areaMina}>
                    <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70'>
                        <h2 className='text-white text-2xl font-base text-center'>Mineração</h2>
                        <p className='text-white text-center pt-8 px-8'>Monitoramento de áreas, Acompanhamento e Planejamento de lavra, Medição de volume (pilhas de material de estoque, corte e aterro, etc).</p>
                    </div>
                </DivImageAreas>

                <DivImageAreas className='w-screen relative' bgImg={areaMeio}>
                    <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70'>
                        <h2 className='text-white text-2xl font-base text-center'>Meio Ambiente</h2>
                        <p className='text-white text-center pt-8 px-8'>Monitoramento da vegetação e fauna, Combate e monitoramento de erosão, Cálculo de desmatamento e reflorestamento, Análises Multitemporais, Apoio a Licenciamento Ambiental, Inventário Florestal. </p>
                    </div>
                </DivImageAreas>

                <DivImageAreas className='w-screen relative' bgImg={areaIfra}>
                    <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70'>
                        <h2 className='text-white text-2xl font-base text-center'>Infraestrutura</h2>
                        <p className='text-white text-center pt-8 px-8'>Levantamentos cadastrais, Planos Diretores, Regularização Fundiária para valoração e realocação, Projeto de expansão de áreas urbanas e rurais, Mapas Turísticos, Geranciamento Territorial completo.</p>
                    </div>
                </DivImageAreas>

                <DivImageAreas className='w-screen relative' bgImg={areaAgri}>
                    <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70'>
                        <h2 className='text-white text-2xl font-base text-center'>Agricultura e Pecuária</h2>
                        <p className='text-white text-center pt-8 px-8'>Identificação de pragas, Monitoramento de produtividade de lavouras, Avaliação de cultivos, Identificação de áreas para aplicação de insumos á taxa variável.</p>
                    </div>
                </DivImageAreas>

            </div>
        </section>
    );
}

const DivImageAreas = styled.div`
    background-image: url(${props => props.bgImg});
    background-size: cover;
    background-position: center;
    height: 64vh;
    position: relative;

    > div {
        display: none;
        opacity: 0;
        transition: opacity .8s ease-in-out; 
    }

    &:hover > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 1;
    }
`;

export default Area;
