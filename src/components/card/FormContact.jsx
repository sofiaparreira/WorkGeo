import { useState } from "react";
import CardAsideContact from "./CardAsideContact";
import styled from "styled-components";
import emailjs from '@emailjs/browser'

export default function FormContact() {
  const [phone, setPhone] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function maskPhone(event) {
    const inputNumber = event.target.value.replace(/\D/g, "");
    let maskedNumber = "";

    if (!inputNumber) {
      maskedNumber = "";
    } else if (inputNumber.length <= 2) {
      maskedNumber = `(${inputNumber}`;
    } else if (inputNumber.length <= 7) {
      maskedNumber = `(${inputNumber.slice(0, 2)}) ${inputNumber.slice(2)}`;
    } else {
      maskedNumber = `(${inputNumber.slice(0, 2)}) ${inputNumber.slice(
        2,
        7
      )}-${inputNumber.slice(7, 11)}`;
    }

    setPhone(maskedNumber);
  }

  function sendEmail(e) {
    e.preventDefault(); 
  
    const templateParams = { 
      from_name: nome,
      message: mensagem,
      email: email,
      phonenumber: phone
    }
  
    emailjs.send("service_omv76o9", "template_mm5xnjk", templateParams, "Z7YWN5mROqhT_aLMQ")
      .then((response) => {
        console.log('EMAIL ENVIADO', response.status, response.text);
        alert('Enviado com sucesso')
        setMensagem('');
        setNome('');
        setEmail('');
        setPhone('');

      })
      .catch((error) => {
        console.error('Erro ao enviar email:', error);
      });
  }
  



  return (
    <Form className="w xl:mx-24 mx-8 mt-20 mb-32" onSubmit={sendEmail}>
      <TitleForm className="font-semibold text-2xl text-orange-p mb-4">
        Envie-nos uma mensagem
      </TitleForm>
      <Paragraph className="lg:w-2/4 w-3/5 text-gray-400">
        Agradecemos o seu interesse. Solicitamos que preencha o formulário
        abaixo com suas informações e sua mensagem. Nossa equipe responderá o
        mais breve possível. Caso prefira, você também pode nos contatar
        diretamente por e-mail ou WhatsApp.
      </Paragraph>

      <ContainerPai className="flex justify-between">
        <ContactForm className="lg:w-2/4 w-3/5 mt-12">
          <InputDiv className="flex gap-8">
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
          </InputDiv>
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
        </ContactForm>

        <CardAsideContact />
      </ContainerPai>
      <SubmitWrapper>
        <Submit
          type="submit"
          className="bg-orange-p px-6 py-2 text-white rounded-md"
        >
          Enviar mensagem
        </Submit>
      </SubmitWrapper>

      <ParagraphMobile className="hidden text-gray-400">
        <h2 className="text-lg font-semibold mb-4 text-center mt-4">
          Informações de Contato:{" "}
        </h2>
        <div className="flex justify-between gap-4 items-start mt-2 mb-8">
          <div className="border border-gray-100 py-2 px-2 rounded-md">
            <p className="text-sm mb-4">+55 (15) 99757-7704</p>
            <p className="text-sm ">+55 (31) 99234-1063</p>
            <p className="text-sm ">contato@workgeo.com.br</p>
          </div>
          <div className="border-gray-100 py-2 px-2 rounded-md border">
            <p className="text-sm">
              <span className="font-medium">Localização:</span> <br /> Belo
              Horizotne <br /> Centro, Rua dos dos Tupinambás 179
            </p>
          </div>
        </div>
      </ParagraphMobile>
    </Form>
  );
}

const Paragraph = styled.p`
  @media (max-width: 768px) {
    display: none;
  }
`;

const SubmitWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 769px) {
    justify-content: flex-start;
  }
`;

const Submit = styled.button`
  @media (max-width: 768px) {
    margin: auto;
    text-align: center;
    margin-bottom: 32px;
  }
`;

const ParagraphMobile = styled.div`
  @media (max-width: 768px) {
    display: flex;
    margin: auto 2px;
    width: 100%;
    flex-direction: column;
  }
`;

const Form = styled.form`
  @media (max-width: 768px) {
    width: 96%;
    margin: 16px auto;
  }
`;

const ContainerPai = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0;
  }
`;

const ContactForm = styled.div`
  @media (max-width: 768px) {
    width: 90%;
    margin: 16px auto;
  }
`;

const InputDiv = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const TitleForm = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;
