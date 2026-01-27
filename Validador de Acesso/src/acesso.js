// Validador de Acesso ao Setor Reservado
// Dados do Cliente
const idadeDoCliente = 18;
const temCartaoFidelidade = true;
const acompanhadoDeUmFuncionario = true;

// Verificação de Acesso
const acessoPermitido = idadeDoCliente >=18 && (temCartaoFidelidade || acompanhadoDeUmFuncionario);

// Resultado da Verificação
console.log(`Acesso Permitido: ${acessoPermitido ? 'True' : 'False'}`);