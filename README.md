# Meu Projeto Node.js

Projeto de exemplo com a estrutura básica de uma aplicação Node.js, criado para demonstrar conceitos fundamentais da linguagem JavaScript no ambiente Node.

## O que foi feito

- Criada a estrutura básica de um projeto Node.js:
  - `package.json` com metadados e script de execução (`npm start`)
  - Pasta `src/` contendo o código-fonte
  - `.gitignore` para ignorar arquivos como `node_modules`
- Implementados exemplos de **variáveis**:
  - Declaração com `const` e `let`
  - Tipos primitivos: `number`, `string`, `boolean`
  - Estruturas: `array` e `object`
- Implementados exemplos de **funções**:
  - Função tradicional (`function`)
  - Função com parâmetro padrão
  - Arrow function
  - Função que manipula um array (`map`)
  - Função que atualiza uma variável externa (contador)

## Estrutura de pastas

```
meu-projeto-node/
├── package.json
├── .gitignore
├── README.md
└── src/
    └── index.js
```

## Como executar

Pré-requisito: ter o [Node.js](https://nodejs.org/) instalado.

```bash
# clonar o repositório
git clone <URL_DO_SEU_REPOSITORIO>
cd meu-projeto-node

# executar o projeto
node src/index.js
# ou
npm start
```

## Saída Esperada

O script exibe no console:
- Uma saudação personalizada
- Dados do usuário de exemplo
- Resultado de operações matemáticas (soma e multiplicação)
- Uma lista formatada de linguagens
- O valor de um contador de execuções, incrementado a cada chamada de função
