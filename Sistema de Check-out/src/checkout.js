// Sistema de Check-out Simples - Processo de venda de livro
// Dados do produto
const nomeDoLivro = "Confissões de Santo Agostinho";
const precoUnitarioDoLivro = 59.90;
const quantidadeDeLivro = 2;

// Cálculo de estoque e preço
let valorTotalDaCompra = precoUnitarioDoLivro * quantidadeDeLivro;
let desconto = false;

// Regra de desconto
if (valorTotalDaCompra > 100) {
    valorTotalDaCompra = valorTotalDaCompra - (valorTotalDaCompra * (10 / 100));
    desconto = true;
}

// Resumo da compra
console.log(`Livro: ${nomeDoLivro}, valor total: R$${valorTotalDaCompra.toFixed(2)}. Desconto aplicado: ${desconto ? 'Sim' : 'Não'}`);