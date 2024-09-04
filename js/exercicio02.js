/*
    Objetivo: Crie um objeto livro com propriedades titulo, autor,
    anoPublicacao e genero. Verifique se a propriedade editora existe no
    objeto usando for in. Se não existir, adicione essa propriedade ao objeto.
*/

let livro = {
    titulo: "Tudo é rio",
    autor: "Carla Madeira",
    anoPublicacao: 2014,
    genero: "Romance",
    editora: "Nova"
}

let propriedadeExiste

for (let key in livro) {
    if (key === "editora") {
        propriedadeExiste = true
        break
    }
}

if (!propriedadeExiste) {
    livro.editora = "Record"
}

console.log(livro)
