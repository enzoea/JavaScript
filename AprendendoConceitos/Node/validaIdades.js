// Aqui, estamos importando o módulo readline do Node.js, 
// que permite interagir com a entrada do usuário no terminal.
const readline = require('readline');

// Estamos criando uma interface de leitura (rl) que lê a entrada do usuário 
// a partir do stdin (entrada padrão) e envia saídas para o stdout (saída padrão).
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Aqui, estamos declarando algumas variáveis para armazenar as idades coletadas, 
// contar o número de maiores de idade, o número de menores de idade e o número 
// total de idades coletadas.
const idades = [];
let contadorMaiorIdade = 0;
let contadorMenorIdade = 0;
let contadorColetadas = 0;

// Definimos uma função chamada coletarIdade. Esta função usa o método question do 
// readline para fazer uma pergunta ao usuário, pedindo que ele insira uma idade.
function coletarIdade() {
  rl.question('Digite uma idade (ou "s" para sair): ', (idade) => {
    // Aqui, estamos verificando se o usuário digitou "s" (para sair) ou se 
    // o limite de 10 idades foi atingido. Se isso acontecer, exibimos o número 
    // de idades coletadas, o número de maiores de idade e o número de menores 
    // de idade. Em seguida, encerramos a interface do readline.
    if (idade === 's' || idade === 'S' || contadorColetadas >= 10) {
      console.log(`Idades coletadas: ${contadorColetadas}`);
      console.log(`Maioridade: ${contadorMaiorIdade}`);
      console.log(`Menoridade: ${contadorMenorIdade}`);
      rl.close();
    } else {
      // Se o usuário não optar por sair, convertemos a entrada idade para um número 
      // inteiro usando parseInt e a adicionamos ao array idades.
      idade = parseInt(idade);
      idades.push(idade);

      // Aqui, verificamos se a idade inserida é maior ou igual a 18. Se for, 
      // incrementamos contadorMaiorIdade. Caso contrário, incrementamos contadorMenorIdade.
      if (idade >= 18) {
        contadorMaiorIdade++;
      } else {
        contadorMenorIdade++;
      }

      // Finalmente, incrementamos contadorColetadas para acompanhar o número total de idades 
      // coletadas e chamamos recursivamente a função coletarIdade para solicitar a próxima idade.
      contadorColetadas++;
      
      // Chamando processo novamente
      coletarIdade();
    }
  });
}

coletarIdade();