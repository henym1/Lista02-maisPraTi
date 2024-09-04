/*
    Objetivo: Dado um objeto produto com várias propriedades, crie uma
    função que retorna um novo objeto contendo apenas as propriedades cujo
    valor seja maior que um valor específico. Use for in para filtrar as
    propriedades. 
*/

let produto = {
    id: 20,
    altura: 30,
    comprimento: 15,
    largura: 10,
    preco: 60
}

let novoProduto = {}

for (let key in produto) {
    if (produto[key] > 25) {
        novoProduto[key] = produto[key]
    }
}

console.log(novoProduto)
