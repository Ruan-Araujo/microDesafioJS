/* Importando o módulo */
const {Aluno} = require('./modulo/parte1')

/* Criando os objetos Alunos usando a função construtora */
let alunoI = new Aluno('Ruan Araújo', 2, [5, 0, 10, 10]);
let alunoII = new Aluno('Josefina', 10, [5, 5, 6, 5,]);
let alunoIII = new Aluno('Maricota', 0, [10, 10, 10, 10]);
/* Micro desafio - Passo 3

Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1). */
let curso = {
  nomeCurso: 'CTD',
  notaAprovacao: 7,
  faltasMax: 2,
  listaEstudantes: [],

/* Micro desafio - Passo 4

	Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.
 */
  adicionarAluno: (qualAluno) =>{
    return curso.listaEstudantes.push(qualAluno)
  },
/* Micro desafio - Passo 5

	Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.
 */  
  aprovado: (qualAluno) => {
    let validarAluno = (qualAluno.calcularMedia() >= curso['notaAprovacao'] && 
    qualAluno['qtdFaltas'] <= curso['faltasMax'] ? 'True' : 'False');
    return validarAluno;
  },
  /* Micro desafio - Passo 6

	Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não.
 */
  listaPercorrida: () =>{
    let situacaoAluno = curso.listaEstudantes.map((elemento)=>{
      return curso.aprovado(elemento);
    })
  return situacaoAluno;  
  }
}

/* Adicionando os objetos na no array listaEstudantes */
curso.adicionarAluno(alunoI)
curso.adicionarAluno(alunoII);
curso.adicionarAluno(alunoIII);
/* Varificando se o método para adicionar objetos funciona */
console.log(curso.listaEstudantes);
/* Verificando se o método para calcular média funciona */
console.log(alunoII.calcularMedia());
/* Verificando se o método para validar a aprovação funciona */
console.log(curso.aprovado(alunoII));
/* Verificando se o método para percorrer o array e retornar um array de 
booleanos funciona - Esse foi o que eu tive mais dificuldade pra fazer*/
console.log(curso.listaPercorrida());

/* Micro desafio - Passo 7(modificado)- Brinque com seu sistema */
console.log(`\nBem vindo ao curso:${curso.nomeCurso}\nPara ser aprovado nas disciplinas você dever ter média:${curso.notaAprovacao}\ne o máximo de faltas toleradas é ${curso.faltasMax}\nTem coragem de tankar?`)

console.log('\nCerto aluno desse curso é Marciano Juptonildo:')
let alunoIV = new Aluno('Marciano Juptonildo', 2, [5, 7, 8, 10]);
console.log(alunoIV);

curso.adicionarAluno(alunoIV);
console.log(`\nA classe é composta por:\n`)
console.log(curso.listaEstudantes);

console.log(`A média de notas do Marciano é a seguinte: ${alunoIV.calcularMedia(alunoIV)}`);

console.log(`Ele foi aprovado? ${curso.aprovado(alunoIV)}`);

console.log(`E o resto da turma dele? ${curso.listaPercorrida()}`);
