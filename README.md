# 🔧 CRUD de Clientes - Fullstack

Este é um sistema **CRUD** completo (Fullstack) para gerenciamento de clientes. A aplicação foi construída com **Node.js**, **TypeScript**, **React** e **MySQL**, utilizando o **WampServer** como ambiente de banco de dados local.

---

## 🚀 Tecnologias Utilizadas

### 🔙 Backend
- **Node.js**
- **TypeScript**
- **Express** – para criação de rotas e servidor
- **Zod** – validação de dados
- **mysql2** – integração com o MySQL
- **cors** – para comunicação entre backend e frontend
- **dotenv** – variáveis de ambiente
- **http-status-codes** – padronização de respostas HTTP
- **ts-node-dev** – execução em tempo real no desenvolvimento

### 🔜 Frontend
- **React** (com **TypeScript**)
- **Axios** – para requisições HTTP
- **MUI (Material UI)** – para estilização dos componentes
- **API ViaCEP** – usada para autocompletar dados de endereço via CEP

---

## 🗂️ Estrutura do Projeto

A aplicação é dividida em duas pastas principais:

- `backend/`: Código do servidor, rotas, controllers, conexões com banco.
- `frontend/`: Código do React, interfaces, componentes e consumo da API.

---

## 🧠 Funcionalidades

- ✅ Cadastro de clientes  
- ✅ Listagem geral dos clientes  
- ✅ Edição de dados do cliente  
- ✅ Exclusão de registros  
- ✅ Validação completa no backend (Zod)  
- ✅ Autocompletar endereço no frontend via CEP  
- ✅ Comunicação com banco de dados local (MySQL)

---

## 💾 Requisitos de Banco de Dados

Para funcionamento correto, é necessário:

1. Ter o **WampServer** (ou equivalente) ativo;
2. Criar o banco de dados no MySQL;
3. Criar a **tabela `clientes`** com as seguintes colunas:

```sql
CREATE TABLE clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cnpj VARCHAR(18) NOT NULL,
  nome VARCHAR(255) NOT NULL,
  nome_fantasia VARCHAR(255),
  cep VARCHAR(9),
  logradouro VARCHAR(255),
  bairro VARCHAR(255),
  cidade VARCHAR(255),
  uf VARCHAR(2),
  complemento VARCHAR(255),
  email VARCHAR(255),
  telefone VARCHAR(20)
);
