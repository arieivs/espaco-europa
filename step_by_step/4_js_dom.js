// Adicionar classes resposta-certa/errada no ficheiro html
// Adicionar parágrafo com id explicacao no ficheiro html
// Estilizar parágrafo para que o footer não se mexa para baixo quando a explicação aparece

const explicacao = document.getElementById('explicacao')
const respostasCertas = document.querySelectorAll(".resposta-certa");
const respostasErradas = document.querySelectorAll(".resposta-errada");

respostasCertas.forEach(resposta => {
  resposta.addEventListener("click", event => {
    explicacao.innerHTML = "<strong>Correcto!</strong> 🥳 42 (ou 101010 em base binária) é a resposta dada em <em>The Hitchhiker's Guide to the Galaxy</em> de Douglas Adams. <a href='https://en.wikipedia.org/wiki/Phrases_from_The_Hitchhiker%27s_Guide_to_the_Galaxy#The_Answer_to_the_Ultimate_Question_of_Life,_the_Universe,_and_Everything_is_42' target='_blank'>Descobre mais aqui</a>.";
  })
})

respostasErradas.forEach(resposta => {
  resposta.addEventListener("click", event => {
    explicacao.innerHTML = "<strong>Ops, errado...</strong> 😬 <a href='https://en.wikipedia.org/wiki/Phrases_from_The_Hitchhiker%27s_Guide_to_the_Galaxy#The_Answer_to_the_Ultimate_Question_of_Life,_the_Universe,_and_Everything_is_42' target='_blank'>Procura uma pista aqui</a> e tenta outra vez.";
  })
})
