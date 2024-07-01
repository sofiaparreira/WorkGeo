import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

export default function CardOurNumbers() {
  const [clientsAttended, setClientsAttended] = useState(0);
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [yearsInMarket, setYearsInMarket] = useState(0);
  const [animate, setAnimate] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const animateValue = (setter, endValue, duration) => {
      let start = 0;
      const increment = endValue / (duration / 16); 
      const interval = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          start = endValue;
          clearInterval(interval);
        }
        setter(Math.floor(start));
      }, 16);
    };

    if (animate) {
      animateValue(setClientsAttended, 1200, 2000);
      animateValue(setProjectsCompleted, 60, 2000);
      animateValue(setYearsInMarket, 12, 2000);
    }
  }, [animate]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <ContainerAll ref={cardRef} className='bg-orange-p py-20 px-16 flex justify-around my-32'>
      <ContainerItem className="flex gap-8 items-center">
        <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="40" width="43.5" viewBox="0 0 640 512"><path fill="#ffffff" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" /></svg>
        <div className='flex flex-col text-white'>
          <span className='text-4xl font-semibold py-2'>{projectsCompleted} +</span>
          <span className='text-lg pt-1 font-light'>Projetos Concluídos</span>
        </div>
      </ContainerItem>

      <ContainerItem className="flex gap-8 items-center">
        <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="36" width="36" viewBox="0 0 512 512"><path fill="#ffffff" d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/></svg>
        <div className='flex flex-col text-white'>
          <span className='text-4xl font-semibold py-2'>{clientsAttended} +</span>
          <span className='text-lg pt-1 font-light'>Clientes Atendidos</span>
        </div>
      </ContainerItem>

      <ContainerItem className="flex gap-8 items-center">
        <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="40" width="43.5" viewBox="0 0 640 512"><path fill="#ffffff" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" /></svg>
        <div className='flex flex-col text-white'>
          <span className='text-4xl font-semibold py-2'>{yearsInMarket}</span>
          <span className='text-lg pt-1 font-light'>Anos do Mercado</span>
        </div>
      </ContainerItem>
    </ContainerAll>
  );
}

const ContainerAll = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    margin-top: 32px;
    margin-bottom: 32px;
    gap: 24px;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  @media (min-width: 769px) {
    .text-4xl {
      font-size: 2.5rem;
    }

    .text-lg {
      font-size: 1.125rem;
    }
  }
`;

const ContainerItem = styled.div`
  @media (max-width: 768px) {
    gap: 48px;
    
  }

  .svg-icon {
    @media (max-width: 768px) {
      width: 24px;

    }
  }
`;
