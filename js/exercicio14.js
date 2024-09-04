/*
    Objetivo: Crie um objeto empresa com uma propriedade departamentos,
    que é um array de objetos. Cada departamento tem um nome e uma lista
    de funcionarios. Use for in e for of para iterar sobre os departamentos
    e seus funcionários, exibindo o nome de cada funcionário junto com o
    departamento ao qual pertence.
*/

let empresa = {
    departamentos: [
        { nome: "Salgados", funcionarios: ["Alberto Queijo", "Bernardo Shoyo", "Cadu Xis"] },
        { nome: "Doces", funcionarios: ["Daniela Brigadeiro", "Eduardo Bolo", "Fernando Pudim"] },
        { nome: "Bebidas", funcionarios: ["Gabriel Fanta", "Heitor Suco"] }
    ]
}

for (let key in empresa) {
    for (let departamento of empresa[key]) {
        // console.log(`${key} : ${departamento.funcionarios}`)
        console.log(`Departamento: ${departamento.nome}, funcionários: ${departamento.funcionarios}`)

    }
}
