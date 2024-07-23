import { useState } from "react";
import styled from "styled-components";
import gerdau from '../../assets/images/clients/gerdau.png'

export default function CardComment() {

    const dataFeedbacks = [
        {
            description: '"Sobre a Horus mérito total de vocês, serviço bom, com qualidade e preço justo. Continuem nessa pegada que vão longe, como dizem “foguete não tem ré."',
            company: 'Paulo Roberto',
            name: 'Gerdau Divinopolis',
            img: gerdau,

        }, 
        {
            description: '2 description from this feedback',
            company: '2 name company',
            name: '2 people name',
            img: '',
            
        }
    ]

    const [idItem, setIdItem] = useState(0);
    const nextFeedback = () => {
        setIdItem((idItem + 1) % dataFeedbacks.length)
    }

    const backFeedback = () => {
        setIdItem((idItem - 1 + dataFeedbacks.length) % dataFeedbacks.length);    
    }

    return (
        <ContainerMain className="w-1/3 pl-16 py-16">

            <div className="flex py-4 gap-1">
                
                {[...Array(5)].map((_, index) => (
                    <svg key={index} xmlns="http://www.w3.org/2000/svg" height="14" width="15.75" viewBox="0 0 576 512">
                        <path fill="#f2c626" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                    </svg>
                ))}
            </div>

            <p className="mb-8">{dataFeedbacks[idItem].description}</p>

            <div className="flex items-center">
                <img src={dataFeedbacks[idItem].img} alt="User profile" className="w-10 h-10 rounded-full" />
                <div className="ml-4">
                    <span className="block font-bold">{dataFeedbacks[idItem].name}</span>
                    <span className="block text-sm text-gray-500">{dataFeedbacks[idItem].company}</span>
                </div>

                <div className="flex gap-8 ml-auto">
                    <svg onClick={backFeedback} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="cursor-pointer" height="24" width="24">
                        <path fill="#FD9819" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                    </svg>

                    <svg onClick={nextFeedback} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="cursor-pointer" height="24" width="24">
                        <path fill="#FD9819" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                    </svg>
                </div>
            </div>
        </ContainerMain>
    );
}

const ContainerMain = styled.div`
    @media (max-width: 768px) {
        width: 100%;
        padding: 0 32px;
    }
`;
