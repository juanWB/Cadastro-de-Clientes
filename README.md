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
```

---

## 📜 Scripts Disponíveis

### ▶️ Backend (`/backend`)
```json
"scripts": {
  "dev": "ts-node-dev --respawn src/index.ts",
  "build": "tsc",
  "start": "node build/index.js"
}
```

### ▶️ Frontend (`/frontend`)
```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

---

## ⚙️ Como Executar o Projeto

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/seu-repo.git
```

### 2. Configure o Backend
```bash
cd backend
```

- Crie um arquivo `.env` com as variáveis de conexão com o banco de dados:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=seu_banco
```

- Instale as dependências:
```bash
npm install
```

- Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

### 3. Configure o Frontend
```bash
cd ../frontend
```

- Instale as dependências:
```bash
npm install
```

- Inicie o frontend:
```bash
npm run dev
```

---

## 📌 Observações

- A API **ViaCEP** é utilizada apenas no **frontend**, para autocompletar os campos de endereço a partir do CEP informado.
- Este projeto foi desenvolvido com foco em aprendizado prático e boas práticas em desenvolvimento web **fullstack**.
- Certifique-se de que o **MySQL/WampServer** esteja ativo e configurado corretamente antes de rodar o backend.

---

## 👨‍💻 Autor

Desenvolvido por **Juan Alejandro**  
---
