/*
    Objetivo: Crie um array de objetos transacoes, onde cada transação tem
    tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
    somando as entradas e subtraindo as saídas.
*/

let transacoes = [
    { tipo: "Entrada", valor: 500 },
    { tipo: "Entrada", valor: 1500 },
    { tipo: "Saída", valor: 200 },
    { tipo: "Entrada", valor: 500 },
    { tipo: "Saída", valor: 1000 },
    { tipo: "Entrada", valor: 100 }
]

let saldo = 0

transacoes.forEach(transacao => {
    if (transacao.tipo === "Entrada") saldo += transacao.valor
    else if (transacao.tipo === "Saída") saldo -= transacao.valor
})

console.log(`Saldo final: R$ ${saldo}`)
