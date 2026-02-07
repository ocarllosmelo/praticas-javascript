// Ficha Técnica de Livros
// Dados de Entrada
let livro = {
    titulo: "Imitação de Cristo",
    autor: "Tomás de Kempis",
    preco: 45.90,
    estoque: 12,
    ehReligioso: true
}

livro.idioma = "Latim/Português";

// Regra de Negócio
const comprarLivro = 1;

function estoqueDeLivros(livro) {
    if (livro.estoque > 0) {
        livro.estoque -= comprarLivro;
        return livro.estoque;
    } else{
        return 0;
    }
}

const vendaDeLivro = estoqueDeLivros(livro);

// Resultado
console.log(`Livro: "${livro.titulo}" | Autor: ${livro.autor} | Estoque Atual ${vendaDeLivro} | Idioma: ${livro.idioma}.`);