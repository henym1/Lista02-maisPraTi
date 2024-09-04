/*
    Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
    array de objetos. Cada objeto dentro de itens deve representar um
    produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
    para calcular o valor total do carrinho. 
*/

let carrinho = {
    itens: [
        { nome: "Toddy", quantidade: 2, precoUnitario: 4.50 },
        { nome: "Nescau", quantidade: 1, precoUnitario: 5.00 },
        { nome: "Nesquik", quantidade: 5, precoUnitario: 3.50 },
        { nome: "Granulado", quantidade: 1, precoUnitario: 3.00 },
        { nome: "Chantilly", quantidade: 3, precoUnitario: 9.00 }
    ]
}

let total = 0

carrinho.itens.forEach(item => {
    total += (item.quantidade * item.precoUnitario)
})

console.log(carrinho.itens)
console.log(`Valor total do carrinho: R$ ${total}`)
