// Padronização de Cadastro de Autores
// Dados de Entrada
const nomeDoAutor = " carLoS DRummOnD De aNDRadE ";

// Regras de Padronização
function padronizarNome(nome) {
    const nomePadronizado = nome.trim().toUpperCase();
    return nomePadronizado;
}

const nomeDoAutorPadronizado = padronizarNome(nomeDoAutor);
const quantidadeDeCaracteres = nomeDoAutorPadronizado.length;

// Resultado
console.log(`Autor: ${nomeDoAutorPadronizado} | Total de caracteres: ${quantidadeDeCaracteres}`);


/*//Sem usar função
const nomeAutor = " São TOMÁS DE AQUINO ";

// Regras de padronização
const nomeDoAutorPadronizado = nomeAutor.trim().toUpperCase();
const quantidadeDeCaracteres = nomeDoAutorPadronizado.length;

// Resultado
console.log(`Autor: ${nomeDoAutorPadronizado} | Total de caracteres: ${quantidadeDeCaracteres}`);*/