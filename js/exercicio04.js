/*
    Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
    uma pessoa com nome, idade, e cidade. Use for of para exibir as
    informações de cada pessoa no console.
*/

let pessoas = [

    { nome: "Chrissy", idade: 21, cidade: "New York" },
    { nome: "Nicholas", idade: 25, cidade: "Paris" },
    { nome: "Techzz", idade: 26, cidade: "São Paulo" }
]

for (let pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, idade: ${pessoa.idade}, cidade: ${pessoa.cidade}`)
}
