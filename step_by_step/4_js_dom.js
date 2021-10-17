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
    let explicacaoConteudo = "<strong>Ops, errado...</strong> 😬";
    if (resposta.id === 'resposta-html') {
      explicacaoConteudo += " HTML permite-nos dar estrutura e conteúdo à nossa página.";
    }
    else if (resposta.id === 'resposta-css') {
      explicacaoConteudo += " CSS permite-nos dar estilo à nossa página.";
    }
    else {
      explicacaoConteudo += " Ruby é uma das várias linguagens que pode ser utilizada para backend.";
    }
    explicacaoConteudo += " Tenta outra vez!";
    explicacao.innerHTML = explicacaoConteudo;
  })
})
