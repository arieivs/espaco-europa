// Adicionar id resposta-certa e classe resposta-errada no ficheiro html
// Adicionar parágrafo com id explicacao no ficheiro html
// Estilizar elementos li e parágrafo da explicacção

const explicacao = document.getElementById('explicacao')
const respostaCerta = document.getElementById('resposta-certa');
const respostasErradas = document.querySelectorAll('.resposta-errada');

respostaCerta.addEventListener("click", event => {
  explicacao.innerHTML = "<strong>Correcto!</strong> 🥳";
})

respostasErradas.forEach(resposta => {
  resposta.addEventListener("click", event => {
    explicacao.innerHTML = "<strong>Ops, errado...</strong> 😬 Tenta outra vez!";
  })
})
