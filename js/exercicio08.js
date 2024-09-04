/*
    Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
    diretor, e anoLancamento. Use forEach para criar um novo array
    contendo apenas os títulos dos filmes.
*/

let filmes = [

    { titulo: "Forrest Gump", diretor: "Robert Zemeckis", anoLancamento: 1994 },
    { titulo: "Toy Story", diretor: "John Lasseter", anoLancamento: 1995 },
    { titulo: "Monstros S.A.", diretor: "Pete Docter", anoLancamento: 2001 }
]

let titulos = []

filmes.forEach(filme => {
    titulos.push(filme.titulo)
})

console.log(titulos)
