// Padronização de Cadastro de Autores
// Dados de entrada
const nomeAutor = " São TOMÁS DE AQUINO ";

// Regras de padronização
const nomeDoAutorPadronizado = nomeAutor.trim().toUpperCase();
const quantidadeDeCaracteres = nomeDoAutorPadronizado.length;

// Resultado
console.log(`Autor: ${nomeDoAutorPadronizado} | Total de caracteres: ${quantidadeDeCaracteres}`);