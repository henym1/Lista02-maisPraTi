/*
    Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
    cliente, produto, e quantidade. Use forEach para criar um objeto que
    agrupa a quantidade total de produtos por cliente.
*/

let pedidos = [

    { cliente: "Agnácio", produto: "telha", quantidade: 150 },
    { cliente: "Bernardo", produto: "tinta", quantidade: 25 },
    { cliente: "Cândido", produto: "papel de parede", quantidade: 300 },
    { cliente: "Débora", produto: "porta", quantidade: 3 },
    { cliente: "Euclides", produto: "telha", quantidade: 30 }
]

let contaProdutos = {}

pedidos.forEach(pedido => {
    if (contaProdutos[pedido.produto]) {
        contaProdutos[pedido.produto] += pedido.quantidade
    } else {
        contaProdutos[pedido.produto] = pedido.quantidade
    }
})


console.log(contaProdutos)
