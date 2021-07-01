<p align="center">
   <img src="./.github/logo.svg" alt="letmeask" width="300"/>
</p>

## Sobre
Projeto desenvolvido durante a Next Level Week #6 da [Rocketseat](https://rocketseat.com.br/)

## Tecnologias utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- [ReactJS](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [Firebase](https://firebase.google.com/?hl=pt)

## Como rodar?

Execute os comandos no seu terminal:

```bash
# Clone o repositório
$ git clone https://github.com/AugustoSavi/NextLevelWeek6.git

# Entre no repositório
$ cd NextLevelWeek6/letmeask

# Instale as dependências
$ yarn install

# Execute a aplicação
$ yarn start
```

Acesse em seu navegador http://localhost:3000/


- [x] Aula 01
- [x] Aula 02
- [ ] Aula 03
- [ ] Aula 04
- [ ] Aula 05

## Aula 03 - Regras de autorização do Firebase

```json
{
  "rules": {
    "rooms": {
      ".read": false,
      ".write": "auth != null",
      "$roomId": {
        ".read": true,
        ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.id)",
        "questions": {
          ".read": true,
          ".write": "auth != null && (!data.exists() || data.parent().child('authorId').val() == auth.id)",
          "likes": {
            ".read": true,
            ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.id)",  
          }
        }
      }
    }
  }
}
```