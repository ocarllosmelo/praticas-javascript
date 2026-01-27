// Sistema de Calculadora de Desconto por Categoria
// Dados do Produto
const categoria = "Bíblias";
let porcentagemDesconto = 0;

// Regra de Desconto por Categoria
switch(categoria){
    case "Infantil":
        porcentagemDesconto = 20;
        break;
    case "Teologia":
        porcentagemDesconto = 15;
        break;
    case "Filosofia":
        porcentagemDesconto = 10;
        break;
    default:
        porcentagemDesconto = 5;
        break;
}

// Resultado do Desconto
console.log(`A categoria: ${categoria} tem ${porcentagemDesconto}% de desconto.`);