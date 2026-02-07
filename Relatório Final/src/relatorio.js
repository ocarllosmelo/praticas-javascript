// Relatório Final de Vendas
// Dados de Entrada
let venda = {
    cliente: "Carlos",
    itens: ["Livro A", "Livro B"],
    total: 250.00
}

venda.itens.push("Livro C");

// Regra de Negócio
function descontoNaCompra(compra){
    if(compra.total > 200 || compra.itens.length > 2){
        const desconto = compra.total - (compra.total * 0.15);
        return desconto;
    }else{
        const normal = compra.total;
        return normal;
    }
}

const valorDaCompra = descontoNaCompra(venda);

// Resultado
console.log(`Relatório de Venda: Cliente ${venda.cliente} comprou ${venda.itens.length} livros. Valor final: R$ ${valorDaCompra.toFixed(2)}`)