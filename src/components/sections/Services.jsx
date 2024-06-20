import React from 'react'
import styled from 'styled-components'
import CardServices from '../card/CardServices'
import Title from '../text/Title'

export default function Services() {
  return (
  
      <section className='mt-24 mx-40'>
                <Title text='NOSSOS SERVIÇOS' />
                <GridContainer>
                    <CardServices
                        text='Cálculo de Volume de Pilhas (material estocado)'
                    />
                    <CardServices
                        text='Monitoramento de estoque (pilhas)'
                    />
                    <CardServices
                        text='Classificação de feições (vetorização)'
                    />
                    <CardServices
                        text='Monitoramento de barragens'
                    />

                    <CardServices
                        text='Estudo de capacidade volumétrica de pátios'
                    />
                    <CardServices
                        text='Monitoramento de faixa de domínio/servidão de minerodutos'
                    />
                    <CardServices
                        text='Estudo de granulometria de rochas'
                    />
                    <CardServices
                        text='Cálculo de corte e aterro'
                    />
                </GridContainer>
            </section>

  )
}


const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    justify-items: center;
    margin: 88px 32px;
    row-gap: 88px;
    padding: 32px 0px;
`;
