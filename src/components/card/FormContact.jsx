import { useState } from 'react';
import CardAsideContact from './CardAsideContact';
import axios from 'axios'; 

export default function FormContact() {
  const [phone, setPhone] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  function maskPhone(event) {
    const inputNumber = event.target.value.replace(/\D/g, ''); 
    let maskedNumber = '';

    if (!inputNumber) {
      maskedNumber = ''; 
    } else if (inputNumber.length <= 2) {
      maskedNumber = `(${inputNumber}`;
    } else if (inputNumber.length <= 7) {
      maskedNumber = `(${inputNumber.slice(0, 2)}) ${inputNumber.slice(2)}`;
    } else {
      maskedNumber = `(${inputNumber.slice(0, 2)}) ${inputNumber.slice(2, 7)}-${inputNumber.slice(7, 11)}`;
    }

    setPhone(maskedNumber);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
  
      const response = await axios.post('http://localhost:3001/send-email', {
        nome,
        telefone: phone.replace(/\D/g, ''), 
        email,
        mensagem
      });

      console.log(response.data); 
      alert('Formulário enviado com sucesso!'); 

  
      setNome('');
      setPhone('');
      setEmail('');
      setMensagem('');
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <form className="w mx-24 mt-20 mb-32" onSubmit={handleSubmit}>
      <h2 className="font-semibold text-2xl text-orange-p mb-4">Envie-nos uma mensagem</h2>
      <p className="w-2/4 text-gray-400">
        Agradecemos o seu interesse. Solicitamos que preencha o formulário abaixo com suas
        informações e sua mensagem. Nossa equipe responderá o mais breve possível. Caso prefira,
        você também pode nos contatar diretamente por e-mail ou WhatsApp.
      </p>
      <div className="flex justify-between">
        <div className="w-2/4 mt-12">
          <div className="flex gap-8">
            <input
              className="mb-2 border outline-none flex-grow border-gray-200 rounded-md py-1 px-2 text-black"
              type="text"
              placeholder="Nome"
              style={{ flexGrow: 2 }}
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <input
              className="mb-2 border outline-none border-gray-200 rounded-md py-1 px-2 text-black"
              type="tel"
              placeholder="Telefone"
              style={{ flexGrow: 1 }}
              value={phone}
              onChange={maskPhone}
              required
            />
          </div>
          <input
            className="my-4 border outline-none w-full border-gray-200 rounded-md py-1 px-2 text-black"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className="my-4 border outline-none w-full h-40 border-gray-200 rounded-md py-1 px-2 text-black"
            placeholder="Mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          />
        </div>
        <CardAsideContact />
      </div>
      <button type="submit" className="bg-orange-p px-6 py-2 text-white rounded-md">
        Enviar mensagem
      </button>
    </form>
  );
}
