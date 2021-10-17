const explicacao = document.getElementById('explicacao')
const respostaCerta = document.getElementById('resposta-certa');
const respostaHTML = document.getElementById('resposta-html');
const respostaCSS = document.getElementById('resposta-css');
const respostaRuby = document.getElementById('resposta-ruby');

respostaCerta.addEventListener("click", event => {
  explicacao.innerHTML = "<strong>Correcto!</strong> 🥳";
})

respostaHTML.addEventListener("click", event => {
  explicacao.innerHTML = "<strong>Ops, errado...</strong> 😬 HTML permite-nos dar estrutura e conteúdo à nossa página. Tenta outra vez!";
})

respostaCSS.addEventListener("click", event => {
  explicacao.innerHTML = "<strong>Ops, errado...</strong> 😬 CSS permite-nos dar estilo à nossa página. Tenta outra vez!";
})

respostaRuby.addEventListener("click", event => {
  explicacao.innerHTML = "<strong>Ops, errado...</strong> 😬 Ruby é uma das várias linguagens que pode ser utilizada para backend. Tenta outra vez!";
})
