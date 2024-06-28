import React from 'react';
import Title from '../text/Title';
import CardComment from '../card/CardComment';
import styled from 'styled-components';
import imgFeedback from '../../assets/images/feedback-image.png';

export default function Feedback() {
  return (
    <section className='pt-1 pb-24'>
      <Title text='FEEDBACK DE CLIENTES' />

      <div className='flex justify-around items-center'>
        <CardComment />

        <BgImageFeedback>
          <ContentOverFilter>

            <ContentOrange className='bg-orange-p w-64 px-4 py-4 mx-32 rounded-md'>
              <span className='text-white text-5xl font-semibold'>100%</span>
              <p className='text-white mt-2 text-lg '>Feedbacks Positivos</p>
            </ContentOrange>

          </ContentOverFilter>
        </BgImageFeedback>

      </div>
    </section>
  );
}


const BgImageFeedback = styled.div`
  position: relative;
  width: 522px;
  height: 320px;
  background-image: url(${imgFeedback});
  background-size: cover;
  background-position: center;
  overflow: hidden; /* Garante que o conteúdo não ultrapasse os limites */
`;

const ContentOverFilter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const ContentOrange = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 2;
`;

