import React from 'react';

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <h1 className='text-3xl text-orange-p font-bold text-center my-16'>{text}</h1> 
  );
}

export default Title;