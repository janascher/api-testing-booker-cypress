
<div  align="center">
	<h1>
		🏨 Teste de API Restful-Booker com Cypress
	</h1>
</div>

## 🧐 Descrição

Este repositório contém testes automatizados desenvolvidos durante as aulas do curso "Formação em Teste de Software" da [Iterasys](https://iterasys.com.br/pt), ministrado pelo professor José Correia.

O objetivo deste projeto é validar, utilizando o Cypress, a API de treinamento [Restful-Booker](https://restful-booker.herokuapp.com/apidoc/index.html), que **adota autenticação via token**.

## 📚 Aprendizados

Durante as aulas, foram abordados os seguintes tópicos:
- Criação de comandos customizados para autenticação, criação, atualização parcial e exclusão de reservas;
- Validação de respostas HTTP e extração dinâmica de informações como ID da reserva e token de autenticação.

## 🚀 Funcionalidades Testadas

Os seguintes endpoints da API Restful-Booker foram testados:

- **POST /booking** - Cadastro de uma nova reserva.
- **PATCH /booking/:id** - Atualização parcial de uma reserva.
- **DELETE /booking/:id** - Exclusão de uma reserva.

## 📚 Tecnologias Utilizadas

- **IDE:** VS Code
- **Linguagem:** JavaScript (Node.js)
- **Framework de Teste:** Cypress
- **Gerenciador de Pacotes:** npm

## ⚙️ Configuração do Ambiente

### Pré-requisitos

Certifique-se de ter instalado:
- Node.js (versão 22.14.0 recomendada).
- npm (gerenciador de pacotes do Node.js).

### Iniciando do Zero

#### Definir a versão do Node.js (caso necessário)

Certifique-se de que você está usando a versão correta do Node.js. Caso necessário, use o NVM para definir a versão:

```sh
nvm use 22.14.0
```

Alternativamente, crie um arquivo `.nvmrc` na raiz do projeto para especificar a versão do Node.js:

```sh
echo "22.14.0" > .nvmrc
```

#### Instalar Dependências

Instale o Cypress utilizando o comando abaixo:

```sh
npm install cypress --save-dev
```

> **Nota: O `--save-dev` adiciona as dependências às `devDependencies`, indicando que são necessárias apenas durante o desenvolvimento.

Verifique se o Cypress está instalado adequadamente:
```sh
npx cypress verify
```

Se necessário, abre o Cypress para garantir que está instalado:
```sh
npx cypress open
```

### Clonando o Repositório

#### Clone
Clone este repositório:
```sh
git clone <URL_DO_REPOSITORIO>
```

#### Definir a versão do Node.js (caso necessário)

Certifique-se de que você está usando a versão correta do Node.js. Caso necessário, use o NVM para definir a versão:

```sh
nvm use 22.14.0
```

Alternativamente, crie um arquivo `.nvmrc` na raiz do projeto para especificar a versão do Node.js:

```sh
echo "22.14.0" > .nvmrc
```

#### Instalar Dependências

Execute o seguinte comando para instalar todas as dependências necessárias:

```sh
npm install
```

### 🧪 Execução dos Testes

Para executar os testes automatizados, utilize os seguintes comandos:

- **Abrir o Cypress Test Runner:**

```sh
npx cypress open
```

- **Executar os testes via linha de comando (headless):**

```sh
npx cypress run
```

## 📜 Notas sobre Implementação

Durante a implementação dos testes, algumas abordagens foram ajustadas em relação ao que foi demonstrado em aula:

- **Testes Independentes:** cada teste realiza a limpeza necessária ao final para garantir a independência.
- **Uso de Comandos Customizados:** mais comandos reutilizáveis foram criados dentro da pasta `support/commands.js`, otimizando ações repetitivas como requisições HTTP.
- **Organização dos Testes:** os testes foram organizados de forma a facilitar a manutenção e o entendimento do código.

## 🦸🏻‍♀️ Autor

<div align="center">
  <a href="https://github.com/janascher">
    <img src="https://avatars.githubusercontent.com/u/79182711?v=4" width="150px;" alt="Janaína Scher" style="border-radius: 50%; box-shadow: 0 0 10px rgba(0,0,0,0.2);">
    <br />
    <sub>
      <b>Janaína Scher</b> 👩🏻‍💻
    </sub>
    <br />
    <i>Profissional em Teste de Software e Garantia da Qualidade (QA)</i>
  </a>
</div>