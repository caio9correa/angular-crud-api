# TechStore — CRUD de Produtos com Angular e Node.js

Projeto desenvolvido para a unidade curricular **Interação com APIs**, com o objetivo de integrar um Front-End em Angular a uma API REST em Node.js/Express, utilizando o `HttpClient` do Angular.

O sistema permite gerenciar o catálogo de produtos de um e-commerce fictício (TechStore), com as operações completas de CRUD (Criar, Consultar, Atualizar e Excluir) comunicando-se com uma API local.

## Tecnologias utilizadas

**Front-End**
* Angular 22 (standalone components)
* TypeScript
* Reactive Forms
* HttpClient

**Back-End**
* Node.js
* Express
* CORS

## Estrutura do projeto

```text
angular-crud-api/
├── frontend/   # Aplicação Angular
├── backend/    # API REST em Node.js + Express
└── postman/    # Coleção de testes das rotas da API
```

## O que foi implementado

A tarefa consistia em implementar o `ProdutoService`, responsável por toda a comunicação HTTP entre o Front-End e o Back-End. O arquivo está em:

```text
frontend/src/app/produtos/produto.service.ts
```

Foram implementados os seguintes métodos, cada um consumindo o respectivo endpoint da API:

| Método            | Verbo HTTP | Endpoint             | Descrição                         |
| ------------------ | ---------- | --------------------- | ---------------------------------- |
| `listar()`          | GET        | `/api/products`       | Lista todos os produtos            |
| `buscarPorId(id)`   | GET        | `/api/products/:id`   | Consulta um produto específico     |
| `cadastrar(produto)`| POST       | `/api/products`       | Cadastra um novo produto           |
| `atualizar(id, produto)` | PUT   | `/api/products/:id`   | Atualiza os dados de um produto    |
| `excluir(id)`       | DELETE     | `/api/products/:id`   | Remove um produto                  |

Os componentes de listagem e formulário (já fornecidos prontos) consomem esse serviço, exibindo mensagens de sucesso e erro para o usuário conforme o resultado de cada requisição.

## Como executar o projeto

O Back-End e o Front-End precisam rodar simultaneamente, em dois terminais diferentes.

### 1. Back-End

```bash
cd backend
npm install
npm run dev
```

A API sobe em `http://localhost:3000`. Para conferir se está no ar, acesse `http://localhost:3000/api/products` no navegador.

### 2. Front-End

Em um segundo terminal:

```bash
cd frontend
npm install
npm start
```

A aplicação sobe em `http://localhost:4200`.

## Testando a API

A coleção completa de testes (GET, POST, PUT, DELETE) está disponível na pasta `postman/`, pronta para ser importada no Postman. Ela cobre as cinco operações do CRUD e os respectivos códigos de status esperados (`200`, `201`, `204`).

## Observações

* O Back-End já vinha implementado, junto com as telas, formulários e estilização do Front-End; o foco do projeto foi a camada de integração via `HttpClient`.
* Este é um projeto de estudo, com dados persistidos localmente em um arquivo JSON no Back-End (sem banco de dados).

---

Desenvolvido por Caio Correa Barros.
