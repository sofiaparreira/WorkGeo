import React from 'react'
import logo from '../../assets//images/logo.png'

const FooterMobile = () => {
  return (
    <footer className='bg-[#303030] text-white py-8 px-2'>
      <div className='flex gap-8'>
        <img className='w-32' src={logo} alt="" />
        <div>
            <h3 className='text-xl mb-4 font-medium'>Contato</h3>
            <p>+55 (15) 99757-7704</p>
            <p>+55 (31) 99234-1063</p>
        </div>    
    </div>
    </footer>
  )
}

export default FooterMobile
