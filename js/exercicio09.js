/*
    Objetivo: Crie um array de objetos clientes, cada um com propriedades
    nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
    de 30 anos.
*/

let clientes = [

    { nome: "Zé Abóbora", idade: 45, cidade: "Porto Alegre" },
    { nome: "Ana Cenoura", idade: 21, cidade: "Curitiba" },
    { nome: "Maria Repolho", idade: 39, cidade: "São Paulo" },
    { nome: "Lívia Alface", idade: 28, cidade: "Porto Alegre" },
    { nome: "Renato Cebolinha", idade: 80, cidade: "Santa Maria" },
    { nome: "Rosa Batata", idade: 12, cidade: "Maranhão" }
]

let count = 0

clientes.forEach(cliente => {
    if (cliente.idade > 30) {
        count++
    }
})

console.log(`Você possui ${count} clientes com mais de 30 anos.`)
