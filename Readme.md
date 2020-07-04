# Desafio de front-end: Nave

:dash: [Deploy da Aplicação](http://navedex.surge.sh/)

[Documentação da API](https://www.postman.com/collections/e6afe4028c2a1e56e577)

<br>

## Escopo

Contruir o **Navedex**: o sistema consiste em uma web app para visualização e criação dos navers, possuindo informações como nomes, idades, cargos, tempo de empresa e projetos que participou.

<br>

## Ferramentas/tecnologia utilizada

O desenvolvimento foi realizado usando a biblioteca [React](https://pt-br.reactjs.org/).

Para guiar o desenvolvimento do layout, usou-se [telas do figma](https://www.figma.com/file/II8UDFm2uJFZaD0FOPcinP/Teste-Fornt-End).

Para as funcionalidades da aplicação, realizou-se a integração com a [api](https://navedex-api.herokuapp.com/v1/) usando a biblioteca [axios](https://github.com/axios/axios).

<br>

## Dificuldades

Nas telas de adicionar e editar Navers, ao invés de usar inputs do tipo "text" em *Idade* e *Tempo de empresa*, como o layout dava a impressão de esperar, optei por utilizar inputs do tipo "date", já que a API esperava receber uma data nestes casos.

Em um ambiente de trabalho eu procuraria conversar com meu time e a equipe de design para descobrir a melhor alternativa.

<br>

## Como rodar a aplicação

No terminal, clone o projeto:
```
git clone 
```

Entre na pasta do projeto:
```
cd navedex/app
```

Instale as dependências:
```
npm install
```

Execute a aplicação:
```
npm start 
```

_OBS_: Para realizar login, utilize os seguintes dados:
- usuário: rezende_rosana@hotmail.com
- senha: nave1234

<br>

## Contribuição

Contribuições com o projeto são muito apreciadas. Para isso:

- Faça um Fork do projeto

- Crie uma branch para sua feature
```
git checkout -b feature
```

- Adicione as mudanças
```
git add . 
```

- _Commit_ as mudanças 
```
git commit -m 'Adicionando a feature X'
```

- Faça o push da branch 
```
git push origin feature
```

- Abra um Pull Request

<br>

## Licença

The [MIT License]() (MIT)

Copyright :copyright: 2020 - Chuck Norris Facts

<br>

## Canais de comunicação

**Rosana-Rezende**: *Desenvolvedora web full-stack | Advogada | MBA em gestão: inteligência de negócios digitais - FGV*

- [Linkedin](https://www.linkedin.com/in/rosanarezende/)
- [Github](https://github.com/rosanarezende)
- [Email](rezende_rosana@hotmail.com)
