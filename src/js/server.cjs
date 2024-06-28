const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const meuEmailPessoal = 'seuemailpessoal@gmail.com'; // Substitua pelo seu e-mail pessoal

app.post('/send-email', (req, res) => {
  const { nome, telefone, email, mensagem } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sofiapparreira@gmail.com',  // Seu e-mail do Gmail
      pass: 'k*220867'  
    }
  });

  let mailOptions = {
    from: 'sofiapparreira@gmail.com',  // Remetente será o seu e-mail
    to: meuEmailPessoal,  // Destinatário será o seu e-mail pessoal
    subject: 'Formulário de Contato',
    html: `
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Telefone:</strong> ${telefone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensagem:</strong> ${mensagem}</p>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Erro ao enviar email');
    } else {
      console.log('Email enviado: ' + info.response);
      res.status(200).send('Email enviado com sucesso');
    }
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor backend rodando na porta ${PORT}`);
});
