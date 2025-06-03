let btn = document.getElementById("btn");
const perguntaInput = document.getElementById("pergunta");

btn.onclick = function enviarPergunta() {
  const pergunta = perguntaInput.value;

  fetch('https://danizele.app.n8n.cloud/webhook/teste', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ pergunta: pergunta, sessionId: crypto.randomUUID() })
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById("resposta").textContent = data.output || "Sem resposta.";
    perguntaInput.value = "";
  })
  .catch(error => {
    document.getElementById("resposta").textContent = "Erro ao enviar pergunta.";
    console.error(error);
  });
}
