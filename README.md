# 🌸 Hanami Data Analytics Platform

Sistema Full Stack para ingestão, processamento e visualização de dados de vendas em tempo real.

Projeto desenvolvido com foco em arquitetura escalável, boas práticas de engenharia de software e experiência analítica moderna.

---

## 🚀 Demonstração do Sistema

✔ Upload de arquivos CSV/XLSX  
✔ Processamento e validação automática  
✔ Dashboard analítico interativo  
✔ Autenticação segura com JWT  
✔ Ambiente completo com Docker  

> Este projeto simula um produto SaaS corporativo de análise de dados.

---

## 🧠 Problema Resolvido

Empresas frequentemente possuem dados de vendas espalhados em planilhas sem visualização estratégica.

O Hanami permite:

- Centralizar dados
- Automatizar análises
- Gerar insights visuais
- Apoiar tomada de decisão

---

## 🏗️ Arquitetura do Projeto

O sistema segue arquitetura em camadas:


Controller → Service → Repository → Database


Frontend desacoplado consumindo API REST.

---

### Backend
- Node.js
- Express
- Prisma ORM
- MySQL
- JWT Authentication
- Upload e parser de arquivos
- Logger estruturado
- Documentação Swagger
- Docker

---

### Frontend
- React
- Vite
- TypeScript
- TailwindCSS
- Custom Hooks
- Componentização avançada
- Dashboard com gráficos analíticos

---


## 📊 Funcionalidades Principais

### 🔐 Autenticação
- Login seguro
- Middleware de proteção de rotas
- Token JWT

---


### 📁 Upload Inteligente
- Suporte a CSV e XLSX
- Validação de estrutura
- Tratamento de erros

---


### 📈 Analytics Dashboard
- Gráficos de vendas
- Cards de resumo financeiro
- Filtros dinâmicos
- Insights visuais

---


### 🐳 Ambiente Containerizado
- Dockerfile
- Docker Compose
- Setup rápido e padronizado

---

## ⚙️ Como Executar o Projeto

### ✔ Pré-requisitos
- Docker
- Docker Compose

---

### ✔ Rodar sistema completo

```bash

docker-compose up --build

✔ Backend disponível em
http://localhost:3000

✔ Frontend disponível em
http://localhost:5173

---


📂 Estrutura do Projeto


backend/
 ├ controllers
 ├ services
 ├ repositories
 ├ middlewares
 ├ prisma
 ├ routes
 ├ utils


frontend/
 ├ components
 ├ hooks
 ├ routes
 ├ services
 ├ pages
🧪 Melhorias Futuras

Testes automatizados (Jest)

Refresh Token

Dark Mode

Exportação de relatórios

Deploy em cloud

CI/CD pipeline

---

👩‍💻 Autora

Desenvolvido por Janine Cunha
Estudante Desenvolvedora Full Stack em formação.

Foco em:

Backend

Frontend

APIs

Data Analytics

Inteligência Artificial

---


⭐ Objetivo do Projeto

Projeto criado para:

RECODE PRO AI

Instituto COCA - COLA