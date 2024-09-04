/*
    Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
    quantidade e valor. Use forEach para calcular o valor total de vendas de
    todos os produtos.
*/

let vendas = [

    { produto: "Tênis", quantidade: 10, valor: 450 },
    { produto: "Sapato", quantidade: 3, valor: 230 },
    { produto: "Chinelo", quantidade: 15, valor: 80 },
    { produto: "Meia", quantidade: 20, valor: 30 }
]

let faturamento = 0

vendas.forEach(venda => {
    faturamento += (venda.quantidade * venda.valor)
})

console.log(`O valor total da venda de todos os produtos é R$ ${faturamento}`)
