# Pokédex

<table>
<tr>
  <td>
    <img src="https://user-images.githubusercontent.com/46497577/161631053-e5dc2646-bdd8-49ae-8f2c-29e9e4f3ced3.png" />
  </td>
  <td>
    <img src="https://user-images.githubusercontent.com/46497577/161631158-932f9a13-2a73-4625-9ef8-c9d2c2f3f966.png" />
  </td>
  <td>
    <img src="https://user-images.githubusercontent.com/46497577/161631461-6f1fbe6a-f54b-44a3-8a3c-0e939bf0e6f4.png" />
  </td>
</tr>
</table>

## Como rodar?
Clone e projeto utilizando o comando abaixo, ou via ssh
```linux 
  git clone https://github.com/igorhernandez/pokedex.git
```

Após isso vamos instalar as dependencias do app, para isso no terminal na raiz do projeto rode:
```linux 
  yarn
```

Instale o expo-cli
```linux 
  npm install --global expo-cli
```
Buildar o app para iOS
```linux 
  yarn ios
```
Buildar o app para android
```linux 
  yarn android
```

Sempre que quiser rodar o app novamente apenas rode
```linux 
  yarn start
```
Após aparecer o expo-cli aperte `i` para iOS e `a` para android.

## Tecnologias utilizadas
- Expo
- Typescript
- ContextApi
- Styled Components
- React Navigation

## Ferramentas
- Jest
- Testing Library
- Eslint
- Prettier
- react-native-svg

### Justificativas técnicas

- Expo
  - Foi utilizado expo ao invés de react-native cli, pois o expo tem diversas facilidades na utilizaçao dos plugins, além de trazer consigo uma
  dev experience excelente, utilizei managed workflow por se tratar de um app com escopo fechado que não se fez necessário a utilização dos módulos
  nativos e mesmo que futuramente fosse necessário poderia utilizar o `expo eject`, já que desde o SDK 38 com o bareworkflow tornou essa possibilidade.
  mais viavel
- Typescript
  - O typescript aumenta a dev experience, sugestões da IDE, permite manter a integridade e confiabilidade do código, fazendo com que os erros possam ser encontrados em tempo de execução ainda no desenvolvimento, evitando assim possiveis problemas em produçao.
- ContextApi
  - Utilizei o context api como state management por se tratar de um projeto com escopo definido com poucos dados e sideEffects, tornando-se assim a melhor opcao.
- Styled Components
  - O Styled Components trás um ótimo ganho na utilização e estilizaçao de componentes em geral, alem de ser bem parecido com o css comum, o que permite devs iniciantes a terem uma curva de aprendizado muito mais facil.
- React Navigation
  - Foi utilizado o react navigation para direcionamento entre telas, passagem de parametros entre telas e navegacao do menu.
- Jest / Testing Library
  - Foi utilizado testing library com jest para realizar os testes unitários dos componentes da nossa aplicação, o que permitem manter a integridade, fidelidade e funcionamento dos componentes.
- react-native-svg
  - Foi utilizado para renderizar SVG no nosso app
- Prettier
  - Utilizado para manter o padrao do projeto com formatacao automatica.
- EsLint
  - Utilizado para manter as melhores praticas e padroes de projeto mobile.
