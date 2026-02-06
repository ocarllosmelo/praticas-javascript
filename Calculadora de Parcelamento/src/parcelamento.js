// Calculadora de Parcelamento com Juros
// Dados de Entrada
let valorTotalDaCompra = 100;
const numeroDeParcelas = 4;
const taxaDeJurosDoParcelamento = 15;


// Regra de Negócio
if (numeroDeParcelas > 3) {
     valorTotalDaCompra += taxaDeJurosDoParcelamento;
}

const valorDaParcela = valorTotalDaCompra / numeroDeParcelas;

// Resultado do Parcelamento
console.log(`Compra de R$ ${valorTotalDaCompra.toFixed(2)}. Parcelado em ${numeroDeParcelas}x de R$ ${valorDaParcela.toFixed(2)}`);