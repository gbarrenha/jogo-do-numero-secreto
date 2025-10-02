alert("Boas vindas ao jogo do número secreto!");

let numeroMaximo = 1000; // Deixa o número máximo a ser escolhido como 1000.
const numeroSecreto = parseInt(Math.random() * numeroMaximo) + 1; // Faz a seleção de um número aleatório entre 1 e o número máximo.
//console.log(numeroSecreto); // Apenas para testes, remova essa linha quando for jogar de verdade.

let chute;
let tentativas = 1; // O jogador já começa com 1 tentativa, pois ele fará um chute ao entrar no jogo.

while (chute != numeroSecreto) {
  // Início do laço de repetição.
  chute = prompt(`Digite um número entre 0 e ${numeroMaximo}.`);

  if (chute == numeroSecreto) {
    // Verifica se o chute é igual ao número secreto.
    break;
  } else {
    if (chute > numeroSecreto) {
      // Verifica se o número é maior ou menor que o número secreto.
      alert(`O número secreto é menor que ${chute}.`);
    } else {
      alert(`O número secreto é maior que ${chute}.`);
    }

    tentativas++; // Incrementa o número de tentativas a cada chute errado.
  }
}

let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`; // Verifica se deve usar o plural ou singular de acordo com o número de tentativas.
alert(`Isso aí! Você acertou o número secreto (${numeroSecreto}) com apenas ${tentativas} ${palavraTentativa}!`); // Mensagem final de vitória.
