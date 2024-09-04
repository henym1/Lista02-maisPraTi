/*
    Objetivo: Crie um array de objetos alunos, cada um com propriedades
    nome, nota1, e nota2. Use for of para calcular a média das notas de cada
    aluno e exibir o nome do aluno junto com sua média.
*/

let alunos = [

    { nome: "Gustavinho", nota1: 4.50, nota2: 8.00 },
    { nome: "Maria Joaquina", nota1: 6.00, nota2: 10 },
    { nome: "Cascão", nota1: 7.30, nota2: 5.00 }
]

let media

for (let aluno of alunos) {
    media = Number((aluno.nota1 + aluno.nota2)/2)
    console.log(`Estudante: ${aluno.nome}, média: ${media} `)
}
