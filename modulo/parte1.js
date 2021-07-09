/* Micro desafio - Passo 1
Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). */

let aluno = {
  nome: 'nomeAluno',
  qtdFaltas: 0,
  notas: [0, 0, 0, 0],

  /* Micro desafio - Passo 2

Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.
 */  
  calcularMedia: () => {
     let calcularMedia = aluno.notas.reduce((acumulador, elementos) => {
       return acumulador + elementos 
     })
  return calcularMedia / aluno.notas.length;
  },
  
  somarFaltas: () => {
    for (let i = 0; i <= aluno.qtdFaltas; i++){
      return aluno.qtdFaltas += i;
    }
  }
};

/* Crie um construtor para ele e importe-o como o módulo aluno.*/ 
function Aluno (nomeAluno, qtdFaltas, notas) {
  this.nomeAluno = nomeAluno;
  this.qtdFaltas = qtdFaltas;
  this.notas = notas;

  this.calcularMedia = () => {
    let calcularMedia = this.notas.reduce((acumulador, elementos) => {
      return acumulador + elementos 
    })
 return calcularMedia / this.notas.length;
 };

  this.somarFaltas = () => {
    for (let i = 0; i <= this.qtdFaltas; i++){
      return this.qtdFaltas += i;
    }
  };
} 

module.exports = {Aluno};
