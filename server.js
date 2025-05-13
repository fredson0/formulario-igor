const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public')); // serve os arquivos HTML/CSS/JS
app.use(express.json()); // permite ler JSON

app.post('/contato', (req, res) => {
  const { nome, email, mensagem } = req.body;

  if (!nome || !email || !mensagem) {
    return res.status(400).json({ mensagem: "Todos os campos são obrigatórios." });
  }

  // Aqui poderia salvar no banco, mas vamos só exibir no console
  console.log("Mensagem recebida:");
  console.log("Nome:", nome);
  console.log("Email:", email);
  console.log("Mensagem:", mensagem);

  return res.status(200).json({ mensagem: `Obrigado pelo contato, ${nome}!` });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
