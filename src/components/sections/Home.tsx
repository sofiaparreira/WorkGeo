import styled from 'styled-components';
import banner01 from '../../assets/images/banners/bg-img1.jpg';
import NavBar from '../NavBar';


export default function Home() {
    return (
        <>
            <ContainerImage>
                <NavBar />
                <div className='relative z-10 mt-40 flex justify-center flex-col'>
                    <h1 className='text-orange-p font-bold text-5xl tracking-wider text-center'>WORKGEO</h1>
                    <p className='text-white text-center text-lg font-extralight w-2/5 mx-auto mt-8'>Empresa de engenharia com base tecnológica e foco em geoprocessamento, processamento de imagens e inovações para Indústria 4.0</p>
                    <a className='inline-block border-b border-white px-6 text-white py-1 text-lg tracking-wider mx-auto mt-8'>saiba mais</a>
                </div>
            </ContainerImage>

            
        </>
    );

}


const ContainerImage = styled.section`
    background-image: url(${banner01}); 
    background-size: cover; 
    background-position: center; 
    height: 80vh; 
    position: relative; 

    /* Gradiente de fundo */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.1) 100%);
        z-index: 1; 
    }
`;
