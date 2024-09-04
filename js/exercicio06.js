/*
    Objetivo: Crie um array de objetos funcionarios, onde cada objeto
    contém informações como nome, cargo, e salario. Use for of para filtrar
    e exibir apenas os funcionários cujo salário seja maior que um valor
    específico.
*/

let funcionarios = [

    { nome: "Edu", cargo: "Desenvolvedor", salario: 4500 },
    { nome: "Jaques", cargo: "Professor", salario: 3000 },
    { nome: "Hyago", cargo: "Espião", salario: 50000 },
]

for (let funcionario of funcionarios) {
    if (funcionario.salario > 3000) {
        console.log(funcionario)
    }
}
