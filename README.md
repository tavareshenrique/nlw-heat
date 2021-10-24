<p align="center">
   <img src="https://raw.githubusercontent.com/tavareshenrique/nlw-heat/c8738a578ee24c85264994c65b283be846601447/logo.svg" alt="Nlw Heat" width="280"/>
</p>

<p align="center">
   <a href="https://www.linkedin.com/in/tavareshenrique/">
      <img alt="Henrique Tavares" src="https://img.shields.io/badge/-Henrique Tavares-E859F9?style=flat&logo=Linkedin&logoColor=white" />
   </a>
 <img alt="Repository size" src="https://img.shields.io/github/repo-size/tavareshenrique/nlw-heat-impulse?color=9C5AFC">

  <a aria-label="Last Commit" href="https://github.com/tavareshenrique/nlw-heat-impulse/commits/master">
    <img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/tavareshenrique/nlw-heat-impulse?color=E859F9">
  </a>
  <a href="https://github.com/tavareshenrique/nlw-heat-impulse/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/tavareshenrique/nlw-heat-impulse?color=9C5AFC">
  </a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-E859F9">
</p>

> <b>NLW Heat Impulse</b> é um projeto construído utilizando React, Node, React Native e Elixir durante a NLW Heat da Rocketseat. Esse projeot consiste em um sistema de envios de feedbacks para o DoWhile 2021.

<div align="center">
  <sub>O <strong>NLW Heat Impulse</strong> foi desenvolvido com 💜 pelo
    <a href="https://github.com/tavareshenrique">Henrique Tavares</a>
  </sub>
</div>

# :pushpin: Conteúdo

- [Executando](#construction_worker-executando)
  - [NodeJS](#nodejs)
  - [ReactJS](#reactjs)
  - [React Native](#react_native)
  - [Elixir](#elixir)
- [Autores](#computer-autores)
- [Licença](#closed_book-licença)

# :construction_worker: Executando

## Clone o Reppsitório
```bash
git@github.com:tavareshenrique/nlw-heat-impulse.git
```

## NodeJS

### Acesse a pasta
```bash
cd node_heat
```

### Instale as Dependencias
```bash
yarn
```

### Crie na raiz um arquivo `.env` e informe o `GITHUB_CLIENT_SECRET`, `GITHUB_CLIENT_ID` e `JWT_SECRET` baseado no `.env.example`


### Rode as Migrations

```bash
yarn prisma:migrate:dev
```

### Inicie o Servidor

```bash
yarn dev
```

### Insominia com as Requests
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=NLW%20Heat%20Impulse%20(NodeJS)&uri=https%3A%2F%2Fraw.githubusercontent.com%2Ftavareshenrique%2Fnlw-heat-impulse%2Fmain%2Fnode_heat%2FInsomnia_2021-10-24)

## ReactJS

### Acesse a pasta
```bash
cd react_heat
```

### Instale as Dependencias
```bash
yarn
```

### Crie na raiz um arquivo `.env` e informe o `VITE_GITHUB_CLIENT_ID`, baseado no `.env.example`


### Inicie

```bash
yarn dev
```

_Obs.: Agora só acessar http://localhost:3000_

## React Native

### Acesse a pasta
```bash
cd react_native_heat
```

### Instale as Dependencias
```bash
yarn
```

### Crie na raiz um arquivo `.env` e informe o `GITHUB_CLIENT_ID`, baseado no `.env.example`

### Inicie o App
```bash
yarn start
```

_Obs.: Certifique de ter um emulador instalado_

## Elixir

### Acesse a pasta
```bash
cd elixir_heat
```

_Obs.: Certifique de ter o postgres instalado ou no seu container docker_

### Configurando Banco
- Acesse o arquivo `config/dev.exs` e configure os dados do postgres.
- Acesse o arquivo `config/test.exs` e configure os dados do postgres.

### Rode as Migrations
```bash
mix ecto.migrate
```

### Inicie o Servidor
```bash
 mix phx.server
 ```


# :computer: Autores

<table>
  <tr>
    <td align="center">
      <a href="http://github.com/tavareshenrique/">
        <img src="https://avatars1.githubusercontent.com/u/27022914?v=4" width="100px;" alt="Henrique Tavares"/>
        <br />
        <sub>
          <b>Henrique Tavares</b>
        </sub>
       </a>
       <br />
       <a href="https://www.linkedin.com/in/tavareshenrique/" title="Linkedin">@tavareshenrique</a>
       <br />
       <a href="https://github.com/tavareshenrique/fastfeet-api/commits?author=tavareshenrique" title="Code">💻</a>
    </td>
    <td align="center">
      <a href="http://github.com/tavareshenrique/">
        <img src="https://avatars0.githubusercontent.com/u/28929274?s=200&v=4" width="100px;" alt="Henrique Tavares"/>
        <br />
        <sub>
          <b>Rocketseat</b>
        </sub>
       </a>
       <br />
       <a href="https://github.com/Rocketseat" title="Linkedin">@Rocketseat</a>
       <br />
       <a href="https://github.com/tavareshenrique/fastfeet-api/commits?author=tavareshenrique" title="Creators">🚀</a>
    </td>
  </tr>
</table>

# :closed_book: Licença

Este projeto está sob a licença [MIT](./LICENSE).
