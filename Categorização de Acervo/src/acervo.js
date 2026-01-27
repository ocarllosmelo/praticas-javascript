// Sistema de Categorizaçãode Acervo - Classificação de livros por gênero
// Entrada de Dado;
let nomeDoLivro = "Dom Quixote";
let quantidadeDePaginasDoLivro = 15;
let classificacaoDoLivro;
let ehRaro = true;

// Lógica de Classificação
if(quantidadeDePaginasDoLivro < 100){
    classificacaoDoLivro = "Livreto ou Folheto";

}else if(quantidadeDePaginasDoLivro <= 300){
    classificacaoDoLivro = "Livro Padrão";
    
}else{
    classificacaoDoLivro = "Obra de Referência";
    
}

// Resumo da Classificação
console.log(`O livro: ${nomeDoLivro} é um(a) ${classificacaoDoLivro}. Status Especial:: ${ehRaro ? 'Raro' : 'Comum'}`);