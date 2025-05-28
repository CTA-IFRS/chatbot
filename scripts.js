let btn = document.getElementById("btn");
const perguntaInput = document.getElementById("pergunta");

btn.onclick = function enviarPergunta() {
  const pergunta = perguntaInput.value;

  fetch('https://danizele.app.n8n.cloud/webhook-test/3bc90cd5-2528-4ec1-a0be-2a01f11145b2', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ mensagem: pergunta })
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
