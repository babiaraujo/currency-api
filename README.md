# Exercício
## Objetivo
Converter o código JavaScript para TypeScript e implementar testes unitários para garantir que a API esteja funcionando corretamente.

## Tarefas
    1. Crie um novo diretório chamado typescript-version.
    2. Converta os arquivos server.js e routes/currency.js para TypeScript.
    3. Use tipos apropriados para variáveis e parâmetros.
    4. Implementação de Testes Unitários

Adicione uma pasta tests no diretório typescript-version.

Use uma ferramenta de teste como Jest para criar e executar testes unitários.

Garanta que todos os endpoints e funções principais sejam testados adequadamente.

## Recursos Úteis

[Documentação do TypeScript](https://www.typescriptlang.org/pt/docs/)

[Documentação do Jest](https://jestjs.io/pt-BR/)

[Documentação do Express.js](https://expressjs.com/pt-br/)


## Passos Adicionais
Configuração do TypeScript

Inicialize o TypeScript no projeto:

```http
  tsc --init
```

Instalação das Dependências para Testes

```http
  npm install --save-dev jest ts-jest @types/jest
```

Configuração do Jest

Adicione o seguinte ao seu package.json:
```http
  "scripts": {
    "test": "jest"
}
```

### Implementação dos Testes

Crie testes unitários para as funções de conversão e para os endpoints da API.