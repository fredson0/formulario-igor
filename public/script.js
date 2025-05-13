// Enviar o formulário
document.getElementById("form-contato").addEventListener("submit", async function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  try {
    const resposta = await fetch('/contato', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, mensagem })
    });

    const dados = await resposta.json();
    document.getElementById("resposta").innerText = dados.mensagem;

    this.reset();
  } catch (error) {
    document.getElementById("resposta").innerText = "Erro ao enviar mensagem.";
  }
});

// Função para rolar até o formulário
function rolarParaFormulario() {
  document.getElementById("formulario").scrollIntoView({ behavior: "smooth" });
}
