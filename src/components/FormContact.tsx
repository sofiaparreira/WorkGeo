import React from 'react'

export default function FormContact() {
  return (
    <form className='w-2/3 mx-24 mt-16'>
      <h2 className='font-semibold text-2xl text-orange-p mb-16'>Envie-nos uma mensagem</h2>
      <div className='flex gap-8'>
        <input 
          className='border outline-none border-gray-200 rounded-md py-1 px-2 text-black flex-grow-2/3' 
          type="text" 
          placeholder='Nome' 
          style={{ flexGrow: 2 }} // Usando inline style para definir a proporção
        />
        <input 
          className='border outline-none border-gray-200 rounded-md py-1 px-2 text-black flex-grow-1/3' 
          type="tel" 
          placeholder='Telefone' 
          style={{ flexGrow: 1 }} // Usando inline style para definir a proporção
        />
      </div>
    </form>
  )
}
