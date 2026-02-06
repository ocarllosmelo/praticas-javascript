// Listagem de Categorias (estoque)
// Dados de Entrada
const categoriasDeLivros = ["Teologia", "Filosofia", "Literatura", "Ciências"];

// Regra de Négocio
function listarCategorias(categorias) {
    const adicionarCategoria = categorias.push("Psicologia");
    const removerPrimeiraCategoria = categorias.shift();
    return categorias;
}

const categoriasDeLivrosAtualizadas = listarCategorias(categoriasDeLivros);
const categoriaIsolada = categoriasDeLivrosAtualizadas[1];

// Resultado
console.log(`Lista completa: ${categoriasDeLivrosAtualizadas.join(", ")} | Categoria isolada: ${categoriaIsolada}`);