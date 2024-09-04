/*
    Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
    preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
    os produtos e exibir o novo preço.
*/

let produtos = [

    { nome: "Shampoo", preco: 15.00, desconto: 0.0 },
    { nome: "Condicionador", preco: 25.00, desconto: 0.0 },
    { nome: "Máscara", preco: 40.00, desconto: 0.0 },
    { nome: "Creme", preco: 30.00, desconto: 0.0 }
]

produtos.forEach(produto => {
    produto.desconto += 0.1
    produto.preco = produto.preco * (1 - produto.desconto)
    console.log(`Produto = ${produto.nome}, valor com desconto = R$ ${produto.preco.toFixed(2)}`)
})
