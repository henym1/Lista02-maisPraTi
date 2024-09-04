/*
    Objetivo: Crie um array de objetos estoque, onde cada objeto tem
    produto, quantidade e minimo. Use forEach para atualizar a quantidade
    dos produtos que estão abaixo do mínimo, duplicando suas quantidades.
*/

let estoque = [

    { produto: "Vassoura", quantidade: 4, minimo: 2 },
    { produto: "Pá", quantidade: 1, minimo: 4 },
    { produto: "Balde", quantidade: 2, minimo: 2 },
    { produto: "Rodo", quantidade: 3, minimo: 4 },
    { produto: "Pano", quantidade: 4, minimo: 10 },
]

estoque.forEach(item => {
    while(item.quantidade < item.minimo) {
        item.quantidade *= 2
    }
})

console.log(estoque)