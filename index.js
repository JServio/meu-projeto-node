/**
 * Arquivo principal do projeto.
 * Demonstra o uso básico de variáveis e funções em Node.js.
 */

// ===== VARIÁVEIS =====

// const: valor que não pode ser reatribuído
const nomeProjeto = "Meu Projeto Node.js";

// let: valor que pode ser alterado depois
let contadorExecucoes = 0;

// Diferentes tipos primitivos
const idade = 25;               // number
const nome = "Vinick";          // string
const ativo = true;             // boolean
const linguagens = ["JS", "Node", "TypeScript"]; // array
const usuario = {               // object
  nome: "Vinick",
  curso: "Análise e Visualização de Dados"
};

// ===== FUNÇÕES =====

// Função tradicional (function declaration)
function saudacao(nome) {
  return `Olá, ${nome}! Bem-vindo ao ${nomeProjeto}.`;
}

// Função com valor padrão de parâmetro
function somar(a, b = 0) {
  return a + b;
}

// Arrow function
const multiplicar = (a, b) => a * b;

// Função que manipula um array (usando outra função como parâmetro)
function listarLinguagens(lista) {
  return lista.map((linguagem, index) => `${index + 1}. ${linguagem}`).join("\n");
}

// Função que incrementa a variável 'let' declarada acima
function registrarExecucao() {
  contadorExecucoes++;
  return contadorExecucoes;
}

// ===== EXECUÇÃO DE EXEMPLO =====

console.log(saudacao(nome));
console.log(`Idade: ${idade} | Ativo: ${ativo}`);
console.log(`Usuário: ${usuario.nome} - ${usuario.curso}`);

console.log("\nSoma:", somar(5, 3));
console.log("Multiplicação:", multiplicar(4, 2));

console.log("\nLinguagens estudadas:");
console.log(listarLinguagens(linguagens));

console.log("\nExecuções registradas:", registrarExecucao());
console.log("Execuções registradas:", registrarExecucao());

module.exports = {
  saudacao,
  somar,
  multiplicar,
  listarLinguagens,
  registrarExecucao
};
