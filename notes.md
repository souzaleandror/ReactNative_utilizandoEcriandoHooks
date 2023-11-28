#### 27/11/2023

```
npx expo init gatito
npx expo start
npx expo install react-native-web@~0.19.6 react-dom@18.2.0 @expo/webpack-config
```

Curso de React Native: utilizando e criando Hooks

@01-Projeto

@@01
Apresentação

[00:00] Eu sou a Natalia Kelim Thiel e neste curso de React Native vamos aprender a utilizar hooks do React e também criar os nossos próprios hooks.
[00:10] Não só isso, nós também vamos aprender como fazer aplicações dinâmicas que não são estáticas, que podem mudar em tempo de execução. Também vamos aprender a construir aplicações que não utilizam o Expo, vamos usar o React Native CLI, que é a linha de comando do React Native, utilizando o ambiente nativo.

[00:32] Para fazer esse curso você só precisa ter feito algum componente, saber criar componente, já ter feito uma tela no React Native e você já está apto para fazer esse curso.

[00:44] Nesse curso, vamos utilizar o Orgs, que é um e-commerce de produtos naturais e mais especificamente vamos fazer essa tela de home aqui, onde vamos listar os produtores, nós também vamos poder expandir um produtor e fazer uma classificação diferente ali, mudar as estrelas dele em tempo de execução. Se fecharmos e abrirmos o aplicativo essa informação não será salva, mas pelo menos enquanto estivermos dentro do aplicativo essa informação estará ali.

[01:13] Para fazer isso, vamos utilizar hooks como, por exemplo, o hook de estado para salvar essa classificação, o hook de efeito para carregar os nossos produtores e também vamos criar nossos hooks customizados para ajudar a melhorar a nossa aplicação, o nosso código.

[01:31] Gostou e quer continuar essa jornada no React Native? Venha para o curso, vamos lá.

@@02
Preparando o ambiente

Para este curso, vamos instalar o ambiente do React Native puro. Preparamos este artigo para que você consiga instalar o ambiente em qualquer plataforma e para Android ou iOS.
Lembrando que, para que possamos gerar aplicativos iOS, é necessário ter um computador com sistema MacOS. Já no caso de Android, é possível usar Windows, Linux ou MacOS.

https://www.alura.com.br/artigos/configurando-o-ambiente-react-native?_gl=1*g90fcn*_ga*MTgwMzIzMjk2Ni4xNjg4ODE5OTcz*_ga_1EPWSW3PCS*MTcwMTEyMDE1NC4xMjAuMS4xNzAxMTIxOTQxLjAuMC4w*_fplc*VUE5a25PUkJLamljOWk0MWdBUnVJY2pQeiUyRnFvOXNKOG91bGZmOUJPMVMwQmV6RzFxJTJGaHJ3eCUyQlJVbG54R2JmdjBpWU5mQWklMkIyaXNLeGFnbW10c2dlMDl2RmZNRzE1SENFemQzT3J0NzBZeFFBZmZoYVZnMmtBT2w1Q0NyY1ElM0QlM0Q.

@@03
React Native CLI

[00:00] Neste vídeo, vamos revisar o que já foi instalado na atividade anterior do ambiente de React Native. Para isso, vamos acessar o site do React Native e abrir a documentação na parte que fala do setup de ambiente aqui no Environment setup.
[00:17] Veremos que temos duas opções: o Expo CLI e o React Native CLI. Como já vimos, o Expo tem algumas limitações, por exemplo, não conseguimos acessar o bluetooth, não conseguimos fazer compras integradas com a Apple Store e a Play Store.

[00:34] Se quisermos desenvolver um aplicativo completo mesmo, vamos precisar utilizar o React Native CLI, mas precisaremos também instalar várias SDKs e softwares também para podermos rodar tanto no Android quanto no iOS. Lembrando que se você quiser rodar no iOS você só pode rodar se você tiver um computador MacOS.

[00:58] Confere no artigo se você executou tudo certo para você poder rodar ou no Android ou no iOS, em um desses dois e vamos acompanhar aqui também como verificamos isso no MacOS que é o sistema em que eu estou agora.

[01:14] Para Android ele já diz aqui que precisamos ter o node, precisamos ter o watchman. Não é obrigatório, mas é recomendado, ele fala aqui. É obrigatório que tenhamos a JDK e ele instala aqui a 8. E também o Android Studio.

[01:34] Vamos verificar se isso está instalado mesmo. Esses comandos são possíveis de serem executados em qualquer sistema operacional, precisamos que esses comandos retornem um valor que faça sentido. Por exemplo, precisamos do Java, podemos rodar aqui java -version tanto no Windows, no Mac ou no Linux, e ele vai nos retornar a versão do Java, aqui é a "1.8.0_292".

[02:02] Vamos precisar no node node --version. Aqui está "v16.8". E o npm também, npm -v que o v é abreviado de version. Temos as três coisas principais para rodarmos no Android, além disso vamos precisar instalar o Android Studio.

[02:25] Essa versão aqui é uma versão mais recente do Android Studio, pode ser que ela seja um pouco diferente quando você estiver abrindo, mas a página de configurações é a mesma coisa.

[02:35] Aqui eu vou clicar em "More Actions" para abrir mais ações, mas se você estiver usando outra versão vai ter um botão aqui também para você abrir algumas opções. E vai ter as mesmas opções que tem aqui, eu preciso acessar o SDK Manager que é onde vamos conseguir ver as versões do Android que estão instaladas, as SDKs.

[02:56] É importante que você tenha instalado a versão 10 do Android na API level 29. Se você não tiver, seleciona aqui, aplica e instala na sua máquina. Basta isso para rodarmos no Android.

[03:13] Agora vamos ver o que precisamos para rodar no iOS. No iOS precisaremos também do Node e do npm e vamos precisar de uma coisa a mais que é pod. Vamos checar a versão do pod pod --version, a versão que está aqui é a "1.10.2".

[03:40] Essas SDKs todas aqui você vai poder instalar vendo o artigo da atividade anterior, a atividade "Preparando o ambiente". Volta lá e vê se está tudo instalado. Além disso, para você rodar no iOS, lembrando que só no MacOS você consegue rodar, você vai precisar também instalar o Xcode.

[04:00] Também é recomendável checar as preferências, se em locations você tem uma command line tools selecionada, é recomendável fazer essa checagem.

[04:10] Agora que verificamos tudo o que precisamos para rodar, na próxima aula usaremos o React Native CLI para criar o nosso projeto. O que é esse React Native CLI que falamos, o que é CLI?

[04:26] O CLI nada mais é do que um programa. Mas ao invés de ser um programa que você vai abrir e ver alguma coisa, vamos usá-lo na linha de comando. CLI é Command Line Interface ou Interface de Linha de Comando.

[04:42] Poderemos utilizar comandos como: npx react-native e aqui vamos falar o que queremos rodar, o que queremos executar do React Native. Essa forma de chamarmos aqui passando algum parâmetro é o command line interface do React Native que é parecido até com o Expo também.

[05:03] Se você tiver alguma dúvida do que instalamos não deixe de nos procurar no fórum que vamos te ajudar. Te vejo na próxima aula para começarmos a criação do nosso projeto.

@@04
Criar o projeto e emulador

[00:00] Neste vídeo, começaremos a criar nosso projeto, também vamos olhar um pouco das pastas que o React Native criou para nós e vamos olhar os emuladores do Android.
[00:13] Para começar, vamos criar o nosso projeto. Podemos fazer isso utilizando a linha de comando do React Native, o React Native CLI. Rodaremos aqui: npx. Provavelmente você já viu o npm para rodar alguma coisa que está instalado na sua máquina, já com o npx você consegue rodar pacotes npm sem instalá-los obrigatoriamente. Com o npx você rodar ele sem precisar instalar previamente.

[00:45] Utilizamos o npx react-native, tanto que o React Native na documentação vai nos indicar preferencialmente sempre usar o npx mesmo. npx react-native init, init é a função que vai fazer com que criemos o novo projeto. E o nosso projeto pode se chamar orgsHooks porque vamos trabalhar com o orgs e também vamos trabalhar com Hooks e vamos especificar qual é a versão que vamos usar e vamos usar a 0.65.1, npx react-native init orgsHooks --version 0.65.1.

[01:20] Vou dar um “Enter” aqui e esse processo pode demorar um pouco, pode ser que ele pergunte alguma coisa e você pode dar o yes ou apertar “Enter" para confirmar. Vamos rodar.

[01:30] Agora ele está baixando o template do React Native e ele vai criar essa pasta. Depende do seu computador, depende da internet. E depois de esperarmos a instalação do React Native, teremos uma nova pasta aqui, vou dar um ls para ver quais são as pastas que tem aqui dentro, temos a orgsHooks.

[01:47] Aqui ele também dar uma explicação de como podemos rodar no Android e no iOS caso você já queira rodar, mas vamos dar uma olhada nos arquivos antes. Vamos utilizar um editor de texto simples, neste caso vou usar VS Code, você pode utilizar o editor de texto que você preferir. Pode ser o VS Code também, o Visual Studio Code.

[02:09] Podemos vir aqui no “File > Open” e selecionar essa pasta que acabamos de gerar com o React Native, vou selecioná-la aqui e abrir. Podemos fechar essa aba de welcome e dar uma olhada aqui ao lado esquerdo nos arquivos mesmo, nessa aba “Explorer”. Já de cara temos uma diferença do Expo CLI com o React Native CLI, temos as pastas Android e iOS, essas pastas têm os códigos nativos.

[02:39] A pasta de Android, por exemplo, temos gradle, temos o manifesto, temos códigos Java aqui dentro. Ele vai gerar todo o código Android que precisamos e vamos ter que usar essa pasta Android também. E a pasta iOS, que vai ter o “Podfile” também e vários códigos em nativo iOS. Isso porque o React Native realmente converte para código nativo.

[03:07] Diferentemente do Expo, rodaremos esses códigos nativos na nossa máquina e não diretamente no celular. Temos aqui também a pasta “node_modules” que se já estamos habituados a usar node vamos sempre ter essa pasta que vai armazenar os arquivos das bibliotecas que estamos utilizando.

[03:24] Temos vários arquivos de configuração, mas os mais importantes são o “package.json” que vai ter as versões das dependências que estamos utilizando no Node, no npm, temos também alguns scripts que podem rodar algumas coisas mais facilmente para nós. Temos também o “app.js” que vai ser o arquivo onde vamos começar a desenvolver em React Native mesmo.

[03:51] Antes de rodar nossa aplicação, vamos olhar para ver se o emulador do Android está funcionando, está configurado corretamente, caso você queira rodar no emulador. Eu vou abrir aqui o Android Studio, clicar em “More actions” novamente, lembrando que se for uma versão antiga vai ter outro botão aqui parecido com esse, e agora vamos vir em “AVD Manager”.

[04:17] Aqui no AVD Manager que é o Android Virtual Device Manager, neste caso já temos um device virtual, um emulador criado, mas se você quiser pode criar um novo no botão de create. Você pode selecionar qual é o modelo de celular que você quer.

[04:37] Esses modelos são basicamente para definir qual será o tamanho da tela e talvez algumas configurações de densidade de pixels. Inclusive, você pode configurar aqui qual é o sistema operacional que ele vai rodar, nesse caso o que eu tenho baixado é o iOS, mas você pode baixar outro sistema operacional.

[04:58] Aqui podemos configurar se ele vai está portátil, na vertical ou na horizontal. E nas configurações avançadas também temos algumas configurações que podem ser relevantes para você.

[05:14] Por exemplo, se você tem mais memória na sua máquina você pode alterar aqui a quantidade de memória que o emulador vai utilizar, o que pode ajudar o seu emulador ficar mais rápido ou você liberar um pouco da lentidão que pode ficar no seu computador. Caso queira você pode configurar aqui manualmente, se não quiser pode deixar no padrão mesmo.

[05:38] Quando você clicar em “Finish” ele vai criar um novo emulador. Neste caso não vou criar um novo porque já temos um aqui. E daqui para frente vamos poder começar a rodar a nossa aplicação e editar o “app.js”. Te vejo em breve para fazermos isso.

@@04
Criar o projeto e emulador

[00:00] Neste vídeo, começaremos a criar nosso projeto, também vamos olhar um pouco das pastas que o React Native criou para nós e vamos olhar os emuladores do Android.
[00:13] Para começar, vamos criar o nosso projeto. Podemos fazer isso utilizando a linha de comando do React Native, o React Native CLI. Rodaremos aqui: npx. Provavelmente você já viu o npm para rodar alguma coisa que está instalado na sua máquina, já com o npx você consegue rodar pacotes npm sem instalá-los obrigatoriamente. Com o npx você rodar ele sem precisar instalar previamente.

[00:45] Utilizamos o npx react-native, tanto que o React Native na documentação vai nos indicar preferencialmente sempre usar o npx mesmo. npx react-native init, init é a função que vai fazer com que criemos o novo projeto. E o nosso projeto pode se chamar orgsHooks porque vamos trabalhar com o orgs e também vamos trabalhar com Hooks e vamos especificar qual é a versão que vamos usar e vamos usar a 0.65.1, npx react-native init orgsHooks --version 0.65.1.

[01:20] Vou dar um “Enter” aqui e esse processo pode demorar um pouco, pode ser que ele pergunte alguma coisa e você pode dar o yes ou apertar “Enter" para confirmar. Vamos rodar.

[01:30] Agora ele está baixando o template do React Native e ele vai criar essa pasta. Depende do seu computador, depende da internet. E depois de esperarmos a instalação do React Native, teremos uma nova pasta aqui, vou dar um ls para ver quais são as pastas que tem aqui dentro, temos a orgsHooks.

[01:47] Aqui ele também dar uma explicação de como podemos rodar no Android e no iOS caso você já queira rodar, mas vamos dar uma olhada nos arquivos antes. Vamos utilizar um editor de texto simples, neste caso vou usar VS Code, você pode utilizar o editor de texto que você preferir. Pode ser o VS Code também, o Visual Studio Code.

[02:09] Podemos vir aqui no “File > Open” e selecionar essa pasta que acabamos de gerar com o React Native, vou selecioná-la aqui e abrir. Podemos fechar essa aba de welcome e dar uma olhada aqui ao lado esquerdo nos arquivos mesmo, nessa aba “Explorer”. Já de cara temos uma diferença do Expo CLI com o React Native CLI, temos as pastas Android e iOS, essas pastas têm os códigos nativos.

[02:39] A pasta de Android, por exemplo, temos gradle, temos o manifesto, temos códigos Java aqui dentro. Ele vai gerar todo o código Android que precisamos e vamos ter que usar essa pasta Android também. E a pasta iOS, que vai ter o “Podfile” também e vários códigos em nativo iOS. Isso porque o React Native realmente converte para código nativo.

[03:07] Diferentemente do Expo, rodaremos esses códigos nativos na nossa máquina e não diretamente no celular. Temos aqui também a pasta “node_modules” que se já estamos habituados a usar node vamos sempre ter essa pasta que vai armazenar os arquivos das bibliotecas que estamos utilizando.

[03:24] Temos vários arquivos de configuração, mas os mais importantes são o “package.json” que vai ter as versões das dependências que estamos utilizando no Node, no npm, temos também alguns scripts que podem rodar algumas coisas mais facilmente para nós. Temos também o “app.js” que vai ser o arquivo onde vamos começar a desenvolver em React Native mesmo.

[03:51] Antes de rodar nossa aplicação, vamos olhar para ver se o emulador do Android está funcionando, está configurado corretamente, caso você queira rodar no emulador. Eu vou abrir aqui o Android Studio, clicar em “More actions” novamente, lembrando que se for uma versão antiga vai ter outro botão aqui parecido com esse, e agora vamos vir em “AVD Manager”.

[04:17] Aqui no AVD Manager que é o Android Virtual Device Manager, neste caso já temos um device virtual, um emulador criado, mas se você quiser pode criar um novo no botão de create. Você pode selecionar qual é o modelo de celular que você quer.

[04:37] Esses modelos são basicamente para definir qual será o tamanho da tela e talvez algumas configurações de densidade de pixels. Inclusive, você pode configurar aqui qual é o sistema operacional que ele vai rodar, nesse caso o que eu tenho baixado é o iOS, mas você pode baixar outro sistema operacional.

[04:58] Aqui podemos configurar se ele vai está portátil, na vertical ou na horizontal. E nas configurações avançadas também temos algumas configurações que podem ser relevantes para você.

[05:14] Por exemplo, se você tem mais memória na sua máquina você pode alterar aqui a quantidade de memória que o emulador vai utilizar, o que pode ajudar o seu emulador ficar mais rápido ou você liberar um pouco da lentidão que pode ficar no seu computador. Caso queira você pode configurar aqui manualmente, se não quiser pode deixar no padrão mesmo.

[05:38] Quando você clicar em “Finish” ele vai criar um novo emulador. Neste caso não vou criar um novo porque já temos um aqui. E daqui para frente vamos poder começar a rodar a nossa aplicação e editar o “app.js”. Te vejo em breve para fazermos isso.

@@05
Rodando o projeto

[00:00] Estamos bem perto de começar a desenvolver o layout da nossa aplicação, mas antes precisamos rodá-la de fato, gerar os arquivos que precisamos nativos e colocar nos nossos emuladores, simuladores, celulares, seja lá onde você vai rodar o aplicativo.
[00:17] Para isso, vamos precisar primeiro entrar na classe do projeto, estou aqui no terminal e vou entrar na pasta que React Native gerou para nós, que aqui em nosso caso é OrgsHooks, eu dou um cd orgsHooks para entrar nessa pasta. Temos aqui todos os arquivos do nosso projeto, “app.js”, a pasta Android, a pasta iOS, tudo o que já vimos nas aulas anteriores.

[00:45] Vamos começar rodando o React Native e fazemos isso utilizando novamente o npx e o command line do React Native, e chamamos o comando start para ele startar o bundle do React Native, orgHooks npx react-native start.

[01:04] Igual tínhamos feito no Expo também, muito parecido com o Expo. Vai ficar rodando aqui o bundle do React Native. Esse terminal vamos precisar deixá-lo aberto e abrimos um novo terminal. Aqui no Mac eu vou abrir um terminal aqui do lado, mas você pode clicar lá no seu terminal e abrir uma nova janela, por exemplo. Entrar novamente na pasta do projeto. No meu caso é dentro da pasta "alura/OrgHooks", que é o projeto, e rodar o comando que queremos para executar dentro de algum dos sistemas operacionais.

[01:42] Vamos utilizar o npx react-native e tem dois comandos run- Android e run-ios. Vou rodar no run-ios porque no Mac ele vai ser mais rápido do que no run-android. orgsHooks npx react-native run-ios, roda e espera ele buildar. Vai demorar um tempo, ele vai abrir o simulador e vamos ver a aplicação na tela do simulador. Na primeira vez que isso acontecer pode ser que demore bastante.

[02:11] Já vemos que o bundle carregou, o “index.js” da nossa aplicação, e já temos aqui o layout padrão do React Native com algumas informações de como podemos usar o React Native, rodar, fazer o reload, por exemplo, já que estamos no iOS. Vamos abrir também no Android, é a mesma coisa: npx react-native, não precisamos rodar outro bundle esse aqui que está rodando vai servir tanto para o Android quanto para o iOS porque ele vai cuidar só da parte de Java Script.

[02:48] Aqui rodamos npx react-native run-android. Rodando isso esperamos, o Android demora um pouco mais, ele vai instalar várias coisas, configurar e instalar a aplicação dentro do nosso celular. Aqui, logo de cara, já me deparei com um problema ao rodar o run-android, basta lermos que entendemos qual o problema. Ele diz aqui que a instalação falhou porque não temos espaço suficiente no dispositivo, "insufficient storage".

[03:23] Vamos dar uma olhada no nosso dispositivo. Eu rodei o simulador, você pode fazer isso a partir daquele menu no Android Studio, que já vimos na última aula. Eu vou desinstalar essas versões que eu já tinha antes instalado, você pode até tentar aumentar um pouco no espaço do dispositivo, vamos fazer isso. Eu vou desinstalar tudo o que tínhamos instalado aqui e também vamos abrir o Android Studio, vou vir no menu dos emuladores e vamos configurar esse emulador, vou editá-lo.

[04:01] Aqui nas configurações avançadas temos o quanto de memória interna ele tem e tem 800 Megas, é pouco. Vamos duplicar essa memória, vamos colocar 1600 Megabytes. Vamos dar um finish aqui e restartar o nosso simulador. Vamos aqui e damos um stop e vamos dar um play de novo pra ver o que acontece.

[04:35] Como mudamos uma configuração ele vai iniciar o simulador novamente, ele vai estartar o emulador do zero o que pode demorar um pouco. Como se estivesse ligando o celular de fato, quando só fechamos e abrimos ele volta ao estado que ele estava anteriormente e pronto, agora já temos o celular novamente e vamos dar uma olhada nas configurações e quanto de memória que ele tem.

[05:03] Aqui em storage podemos ver que tem 300 Megas livres. Vamos tentar instalar novamente. npx react-native run-android. Lembrando que o processo pode demorar um pouco, ele vai gerar a APK, que é o pacote de aplicação no Android, e vai instalar no celular. Agora tivemos sucesso e se abrirmos, abriu a mesma tela que abre no iOS.

[05:33] Agora vamos dar uma olhada no “app.js” e entender o que é esse monte de texto que temos aqui. Entrando no nosso editor de texto, no VS Code, podemos acessar o “app.js” e aqui vamos ter todo o código da nossa aplicação, onde falar sobre o React Native, quando rodamos ela é esse texto aqui que aparece.

[05:58] Vamos apagar tudo isso, sem medo, podemos apagar. Agora vamos fazer o que já sabemos, vamos criar um componente React Native. Começamos importando o React, import React from 'react';, para que possamos usar o jsx, para que possamos usar as tags. E aí podemos criar uma função aqui function App() {} e abrimos e fechamos parênteses e abrimos e fechamos chaves aqui e retornamos nessa função qual é o componente que queremos exibir, o nosso app vai ser um componente também.

[06:37] Vamos exibir só um text aqui, um text e escrever Alura. return <Text>Alura</Text>. Aqui temos que lembrar de importar sempre o que estamos usando, se estamos usando o text importamos o text do React Native, import { Text } from 'react-native'; E precisamos também exportar o nosso app, damos um export default App;.

[07:07] Vamos salvar e ver como é que está na nossa aplicação. Aqui no emulador do Android já temos o nosso texto "Alura" já sumiu todo aquele monte de texto e começamos um aplicativo limpo com apenas um texto escrito. Estamos prontos para começar a fazer o layout da aplicação. Vamos dar uma olhada no iOS, temos quase a mesma coisa, mas aquele problema do iOS que o texto fica por baixo da status bar porque a tela do iOS é completa, tudo isso aqui faz parte da tela.

[07:41] E aí temos aquele componente, que você já pode ter visto também, que é o safe area view. É uma view que vai fazer com que essa parte de cima e essa parte de baixo não fique sobre o conteúdo da nossa aplicação. Vamos utilizá-la aqui. import { SafeAreaView, Text } from "react-native';, importamos ela junto com o text de react native e englobamos o text com o safe area view. return <SafeAreaView> <Text>Alura</Text>. Vamos salvar e ver como está no iOS.

[08:24] Agora o nosso texto "Alura" está por baixo da status bar. Na próxima aula, poderemos começar a criar o nosso layout de fato, criar o layout do Orgs que tanto estamos esperando. Te vejo no próximo vídeo.

@@06
Pré-requisitos

Como vimos nos últimos vídeos, precisamos preparar nosso ambiente para começar a usar o React Native CLI.
Quais são os pré-requisitos necessários para começar a trabalhar com React Native na sua máquina?

Precisamos instalar o Node, o JDK, o Android Studio (para iOS), as SDKs, o Xcode (para Windows). Também, é necessário criar o projeto e o emulador.
 
Alternativa correta
Precisamos instalar o Node, o JDK, o Android Studio, as SDKs, o Xcode (para iOS). Também, é necessário criar o projeto e o emulador.
 
Alternativa correta!
Perfeito! Para que possamos rodar o projeto em nossa máquina, precisamos seguir os passos da documentação, instalar e criar cada um dos componentes acima. Vale lembrar que MacOS e Windows têm algumas diferenças.
Alternativa correta
Precisamos instalar o Watchman, o JDK, o Android Studio, as SDKs, o Xcode (para iOS). Também, é necessário criar o projeto e o emulador.
 
Incorreto. O Watchman não é obrigatório. Existe, no entanto, outra dependência que é obrigatória! Checa na documentação e com certeza você vai lembrar :)

@@07
Para saber mais: Expo vs RN

Sabemos que existem diferenças entre utilizar o Expo CLI e React Native CLI, pois o Expo traz facilidades e, ao mesmo tempo, algumas limitações.
Quer saber mais sobre o assunto?

Criamos este artigo para que você possa ficar por dentro das diferenças, como podemos migrar do Expo para o React Native puro e qual deles é mais adequado para suas necessidades.

https://www.alura.com.br/artigos/como-fazer-a-migracao-do-expo-para-react-native-cli?_gl=1*1niuwh3*_ga*MTgwMzIzMjk2Ni4xNjg4ODE5OTcz*_ga_1EPWSW3PCS*MTcwMTEyMDE1NC4xMjAuMS4xNzAxMTIzMDI2LjAuMC4w*_fplc*VUE5a25PUkJLamljOWk0MWdBUnVJY2pQeiUyRnFvOXNKOG91bGZmOUJPMVMwQmV6RzFxJTJGaHJ3eCUyQlJVbG54R2JmdjBpWU5mQWklMkIyaXNLeGFnbW10c2dlMDl2RmZNRzE1SENFemQzT3J0NzBZeFFBZmZoYVZnMmtBT2w1Q0NyY1ElM0QlM0Q.

@@08
Faça como eu fiz

Chegou a hora de você seguir todos os passos realizados por mim durante esta aula. Caso já tenha feito, excelente. Se ainda não, é importante que você execute o que foi visto nos vídeos para poder continuar com a próxima aula.

Continue com os seus estudos, e se houver dúvidas, não hesite em recorrer ao nosso fórum!

@@09
O que aprendemos?

Nessa aula, você aprendeu:
O que é React Native CLI:
O React Native CLI é a interface de linha de comando do React Native puro. Command Line Interface é como um programa, mas no terminal. Usando o CLI não teremos as mesmas facilidades do Expo, como o ambiente simplificado, pois teremos que gerar os arquivos nativos direto na nossa máquina.
Como configurar o ambiente:
Para que possamos programar com o React Native, tivemos que instalar alguns componentes e programas importantes em nossa máquina: o Node, o JDK, o Android Studio, as SDKs, o Xcode, entre outros.
Como criar um Emulador ideal:
Com o intuito de poder visualizar em tempo real nossa aplicação sendo alterada, tivemos de criar um emulador com especificações mínimas para produção de aplicativos - sempre pensando em espaço de disco e memória RAM dedicada.
Como rodar um Projeto:
Aprendemos os comandos necessários para rodar nosso projeto, assim como quais as importâncias dos arquivos criados na criação e, não menos importante, como alterar a tela mudando apenas o conteúdo do APP.js.

#### 27/11/2023

@02-Estados e ciclo de vida

@@01
Projeto da aula anterior

Caso queira começar daqui, você pode baixar o projeto da aula anterior nesse link.
Lembre-se: caso baixe um projeto do zero, rode os comandos npm install para baixar as dependências do node e, caso for rodar para iOS, cd ios && pod install para baixar as dependências nativas de iOS.

https://github.com/alura-cursos/react-native-utilizando-e-criando-hooks/tree/Aula1

@@02
Preparando o ambiente: Imagens do projeto

Durante o curso, você irá utilizar algumas imagens que podem ser baixadas nos links a seguir:
Imagens do projeto
Imagem para referência do layout

https://github.com/alura-cursos/react-native-utilizando-e-criando-hooks/raw/main/assets.zip

https://github.com/alura-cursos/react-native-utilizando-e-criando-hooks/blob/main/Home.png

@@03
Componente do topo

[00:00] Nessa aula vamos, finalmente, começar a desenvolver o layout da nossa aplicação. Vamos desenvolver uma aplicação parecida com essa imagem aqui, vamos ter uma parte do topo onde tem o logo, temos também o texto que fica um pouco maior dizendo: "Olá, Luisa", o nome da pessoa que está logada. Teremos também uma frase: "Encontre os melhores produtores" de subtítulo, digamos assim, e vamos ter uma lista de produtores.
[00:31] Essa lista vai ter uma imagem do produtor, o título que vai ser o nome do produtor, as estrelas que vai ser a classificação do produtor e também a distância. Esses dados serão estáticos na nossa aplicação, porém vamos gerar ali um valor randômico para cada um deles. Quando abrir a aplicação vai gerar as estrelas e a distância, ambas de forma randômica.

[00:56] Além disso, conseguiremos clicar nesse produtor e escolher um nova avaliação para ele. Isso tudo dentro do nosso celular. Se fecharmos a aplicação e abrirmos novamente, vai restartar, vai reiniciar e vai eliminar esses dados, vai trocar cada vez que for aberta. Por isso não vamos enviar nenhum dado para outro lugar, não consultaremos nenhum lugar externo.

[01:22] Agora vamos dar uma olhada no que já temos. Vamos abrir o simulador aqui, lembre-se de deixar a sua aplicação rodando, roda o npx react native start e o npx react native run android ou run ios dependendo de onde você quer rodar a sua aplicação. Eu estou rodando no simulador iOS. E só temos uma tela branca. Para começar a desenvolver nossa aplicação vamos começar pelo topo.

[01:50] Vou abrir o nosso código. Temos aqui o “App.js” que tínhamos começado e aí podemos começar organizando as pastas do nosso projeto para criarmos uma estrutura de telas, e dentro da tela vamos ter o componente topo. Vamos na pasta raiz do projeto e criamos uma pasta chamada “src” que vem de source para armazenar nosso código fonte. Source também pode ser chamado de "fonte".

[02:29] Dentro de source podemos criar também uma pasta chamada “telas” para armazenar nossas telas e vai ter a nossa tela chamada “Home”, que é a única tela que teremos mesmo, vamos desenhar essa tela de home. Dentro da tela home teremos os “componentes” e o componente que vamos criar, que é o componente topo, criaremos um arquivo chamado “Topo.js”.

[03:01] Agora podemos começar a fazer nosso topo aqui, mas antes precisamos também ter a nossa tela de home. Vou criar aqui dentro do “src > telas > Home” a nossa tela “index.js” que vai ser a nossa tela de home mesmo, quando importarmos essa url vai ser a importação do index como já vimos antes.

[03:23] Vamos começar a desenvolver o nosso componente de home que inicialmente chamará só o topo. Começamos no “index.js” importando React sempre, import React from 'react'; e damos um export default function Home() { } que é o nome do nosso componente, é a nossa tela de home. E vamos retornar o topo, return <Topo />, que ainda não temos desenvolvido, mas podemos retorná-lo aqui e importá-lo como: import Topo from './componentes/Topo';.

[04:12] Nada está acontecendo ainda porque não temos nada aqui no topo e também porque ainda estamos chamando o mesmo text aqui no “App.js”. Vamos voltar no “App.js” e chamar, ao invés do <Text>Alura, o index da home. Dentro do SafeAreaView vamos chamar <Home /> e fechar o componente nele mesmo. Podemos remover a importação do text e adicionar a importação do home: import Home from './src/telas/Home' e aí ele já sabe que tem buscar o index aqui dentro.

[05:00] Agora vou salvar e provavelmente vamos ter um erro aqui, porque ainda não implementamos o topo, ele não está não está conseguindo renderizar esse topo aqui, não tem nada aqui. Vamos começar importando: import React from 'react'; e fazemos o export default do nosso componente export default function Topo() { };.

[05:29] Logo abaixo vamos retornar um text para começarmos a ver se está carregando certinho, vou colocar um text escrito "Topo". return <Text>Topo</Text>. Lembrando que para usarmos qualquer componente no React Native precisamos importá-lo também, eu vou importar, import { Text } from 'react-native;

[05:56] Vamos salvar e pronto, já não temos mais erro e agora temos o "Topo" aqui escrito ao invés de "Alura". Isso porque estamos chamando aqui no “App.js” a home e a home está chamando o topo. Vamos começar a desenvolver o nosso topo que vai ser uma view que vai englobar várias informações, vai ter a logo do Orgs, vai ter uma mensagem de boas-vindas e vai ter também uma legenda, um subtítulo ali.

[06:27] Podemos envolver esse text que está no topo com uma view, vamos fazer isso adicionando a view aqui e colocando o text dentro. return <View> <Text>Topo</Text> <View>. Lembrando que estamos usando a view e precisamos importá-la também, junto com text vamos importar a view e vamos ter a nossa imagem de topo. import { View, Text } from 'react-native';

[06:46] De onde vamos pegar essa imagem? Na atividade anterior tem o link de onde você pode baixar essa imagem. Vou mostrar aqui para vocês, caso tenham algum problema, basta acessar o link que vocês têm na atividade anterior e baixar esse Zip aqui com todos os assets.

[07:08] Vou fazer o download na minha pasta e está aqui, você pode extraí-lo e movê-lo para dentro do projeto. O projeto está aqui no meu Visual Studio e se o menu lateral "Explorer" estiver aberto, você pode mover esse “assets” para dentro de “src”.

[07:33] Movi a pasta “assets” para dentro da pasta “src” e aqui estão todas as imagens que vamos precisar para o nosso projeto. Posso fechar o navegador agora e vamos importar a imagem do topo. Aqui no “topo.js” precisamos importar a imagem do topo que é essa logo, vai ser assets/logo.png. Vamos fechar e dentro do topo: import logo e fazemos o caminho, volta três pastas e vai ter os assets, import logo from "../../../assets/logo.png';

[08:26] Agora usaremos essa logo como source dentro do componente de image. Importamos o componente de image do React Native, junto com a view e o text fazemos o import do componente image. import { View, Text, Image } from 'react-native'; E aí chamamos ele dentro da nossa view como primeira coisa, antes do text image e passa o source dele como a logo que acabamos de adicionar. Image source=(logo) />

[08:53] Vamos salvar e pronto, agora temos, no mulador, a imagem, que ainda está grande, mas ainda vamos adicionar os estilos. Vamos primeiro finalizar a nossa estrutura dos textos e partimos para o estilos. Aqui no segundo texto vamos ter o "olá" e o nome da pessoa, vou colocar aqui Olá, Natalia, que é o meu nome, você pode colocar o seu nome, por exemplo, <Text>Olá, Natalia</Text>.

[09:17] Vamos adicionar um último text embaixo que vai ser aquela legenda para chamar atenção para os usuários "Encontre os melhores produtores". <Text>Encontre os melhores produtores</Text>. Vamos ter a imagem de topo dentro de uma view, dentro dessa view ainda teremos um texto e o texto de legenda, teremos um texto maior e outro menor.

[09:44] Agora vamos estilizar isso, como fazemos para que isso fique bonito como vimos no nosso layout. Onde a logo está menor, temos o texto em negrito e um pouco maior e o subtítulo está mais claro e menor do que o título.

[10:04] Vamos voltar e criar os estilos. Criamos uma constante chamada estilos que vai ser igual a StyleSheet.create e abrimos e fechamos um objeto aqui com as chaves. const estilos = StyleSheet.create({ }); Lembrando que precisamos importar o StyleSheet do React Native depois de image. import { View, Text, Image, StyleSheet } from 'react-native';

[10:36] Podemos começar a fazer os nossos estilos. Vamos começar pela view em si, precisamos que ela tenha uma cor de fundo, uma cor mais cinza. Vamos adicionar aqui topo, pode ser esse o nome do nosso bloco de topo aqui como um todo, e podemos colocar um background color e a cor vai ser um hexadecimal que é #F6F6F6. topo: { backgroundColor: '#F6F6F6',.

[11:08] E aí também podemos dar um padding, espaçamento, fazer uma margem interna aqui ao redor para que as coisas não fiquem grudadas nas laterais. padding: 16, e aplicamos o estilo nessa view, utilizamos a tag style return <View style=(estilos.topo)>. Vamos salvar e já temos aqui uma cor de fundo, temos a logo, temos o nosso padding para as coisas não ficarem grudadas nas laterais e agora vamos arrumar essa imagem que está grande.

[11:44] Vamos criar aqui outro estilo dentro do StyleSheet.create que vai se chamar imagem. Basicamente só precisamos definir um width e um height para ela ficar do tamanho que queremos, eu vou definir aqui width 70 que é largura e o height 28, que é a altura. imagem: { width: 70, heigth:28, }; Vamos salvar e não aconteceu nada porque temos que adicionar o estilo dentro da imagem, <image source={logo} style={estilos.imagem} />.

[12:27] E agora temos a nossa imagem, a nossa logo bem pequena. Vamos continuar estilizando o nosso texto, o nosso texto de boas-vindas. Para isso podemos chamar esse estilo boasVindas. Criando o nosso estilo de boas-vindas, primeiro precisamos de espaço do topo, vamos adicionar uma marginTop: 24 e também temos que aumentar a fonte fontSize: 26, e como estamos aumentando fontSize é interessante sempre trabalharmos com o line heigth também, lineHeight: 42, fontWeight: 'bold' }, bold para definirmos a grossura da fonte como sendo negrito.

[13:25] Vamos salvar, e nada aconteceu porque precisamos aplicar aqui dentro do text, no "olá" e no seu nome aplicar o style <Text style=(estilos.boasVindas)>Olá, Natália</Text>. Pronto, agora temos o texto em negrito, está maior e já tem um espaço aqui com uma parte do topo.

[13:48] Vamos fazer o próximo texto que é a legenda. Podemos chamar de legenda mesmo e adicionamos no estilo um objeto, como sempre, e só precisamos definir aqui que o fontSize será 16 e o lineHeight será 26. legenda: { fontSize: 16, lineHeight: 26, }. Agora já temos o nosso subtítulo também feito.

[14:22] Faltou aplicarmos a legenda, no texto da legenda o style é estilos ponto legenda. <Text style=(estilos.legenda)>Encontre os melhores produtores</Text>, agora já temos o texto maior como está em nosso layout.

[14:49] Já vimos também que não é legal deixarmos esse texto fixo aqui, porque se alguém quiser alterar, se vier alguém lá do design ele vai ter que entender todo o código, saber que aqui dentro da tela do componente do topo vai ter esse nome aqui. Ou se quisermos buscar isso de algum outro lugar. Como fazer com que esse texto seja mais dinâmico, seja mais fácil? Precisamos armazenar isso tudo em um lugar separado, não aqui fixo dentro do nosso código.

[15:16] Na próxima aula, vamos criar Mocks com os nossos textos e também criaremos funções que vão simular serviços que carregarão esses dados para nós. Te vejo em breve para fazermos isso.

@@04
Preparando o ambiente: Arquivo de Mock

No próximo vídeo, iremos criar os mocks de exemplo, se você quiser acessar os arquivos diretamente você pode clicar aqui.

https://github.com/alura-cursos/react-native-utilizando-e-criando-hooks/tree/Aula2/src/mocks

@@05
Criando Mocks e serviços

[00:00] Vamos recapitular o que fizemos na aula anterior, no vídeo anterior. Criamos a estrutura de pastas do nosso projeto adicionando o src, as telas e tela de home que tem o index e ela vai chamar apenas o topo porque agora só desenvolvemos o topo. O nosso topo é um componente dentro da nossa tela de home e nesse componente já reforçamos os conceitos de function components, que é o componente no formato de função.
[00:31] Também vimos um pouco sobre estilos para reforçarmos esses conceitos de estilos que já conhecemos. Fizemos com que a nossa tela ficasse parecida com essa daqui adicionando a logo, um título com um texto de boas vindas e também uma legenda falando: "encontre os melhores produtores".

[00:51] Agora que fizemos isso vimos que seria legal que tivéssemos esse texto aqui em outro lugar não misturado no nosso código. E para isso decidimos criar mocks. Vamos fazer isso, vamos criar uma pasta chamada “mocks” dentro do nosso “src” para armazenarmos esses dados fictícios para podermos exibir na nossa aplicação enquanto ainda não temos nenhum lugar externo para buscá-los.

[01:20] Nessa aplicação mesmo, nesse curso não teremos um lugar externo, vamos ter os mocks uma simulação de serviços que vão carregar esses dados. Primeiro, aqui dos mocks, o que podemos fazer é adicionar o topo, o mock de “topo.js”. O “topo.js” nada mais será do que a informação de texto de "olá" e o nome e esse texto "Encontre os melhores produtores".

[01:46] Vamos fazer isso, vamos criar uma constante dentro do “topo.js” chamada topo que vai igual a um objeto e esse objeto vai ter duas chaves, a chave de boas-vindas que vai ser "Olá, Natalia" ou o seu nome ou Alura e também vamos ter a chave de legenda que é esse texto que vai aparecer ali embaixo "encontre os melhores produtores", const topo = { boasVindas: "Olá, Natalia", legenda: "Encontre os melhores produtores", }

[02:21] E precisamos disponibilizar esse topo para fora do nosso arquivo fazendo um export, exportamos o topo como default. export default topo; Já temos aqui o mock do nosso topo e vimos aqui no nosso layout que íamos ter uma lista de produtores. Vamos ter o título, quantidade de estrelas, a distância e a imagem, precisamos salvar todas essas informações de algum lugar também.

[02:51] Vamos criar aqui, como irmão do topo, dentro do mocks criamos outro arquivo chamado “produtores.js” e criamos uma constante chamada produtores e essa constante vai ser um objeto que vai ter o título que é aquele título que está escrito só "Produtores" mesmo e também vai ter a nossa lista de produtores, a lista vai ser um array. Abrindo e fechando colchetes podemos declarar um array e dentro desse array vamos ter vários objetos. const produtores = { títulos: "Produtores", lista: [

[03:37] Vamos ter o nome do produtor, primeiro podemos chamar de Green aí precisamos importar a imagem dele. Antes dos produtores precisaremos importar essa imagem, vou chamar: import green from '../assets/produtores/green.png'. Vamos conferir os assets dos produtores e temos o “green.png”.

[04:22] Aqui onde estávamos declarando a nossa lista dentro da imagem colocamos a imagem do green, imagem: green, e vamos ter a distância. Lembra que íamos fazer um gerador de distância randômico? Para fazer essa distância randômica podemos criar um método que gera números aleatórios para nós. Vamos criar:const gerarNumeroAleatorio = (] => {.

[04:59] Para gerar o número aleatório, no JavaScript temos a função return Math.random() que gera número aleatório entre 0 e 1, um número decimal aleatório. Não é isso que queremos, queremos um número aleatório que esteja entre 1 e 5 no caso das estrelas e pode ser ser entre 1 metro e 500 metros na distância. Precisamos passar como parâmetro o mínimo e o máximo que queremos. const gerarNumeroAleatorio = (min, max) => {

[05:34] Para fazermos o mínimo e o máximo ser aplicado nesse random temos uma fórmula que é de praxe, podemos multiplicar esse math.random abrindo e fechando parênteses pelo máximo menos o mínimo mais 1 e ainda somar o mínimo. return Math.random() * (max - min + 1) + min; Dessa forma teremos um número aleatório entre o mínimo e o máximo e precisamos arredondar esse valor para que ele não fique um valor decimal.

[06:07] Vamos utilizar o math.floor e colocar toda essa conta ali dentro. return Math.floor(Math.random() * (max - min + 1) + min); Com isso vamos gerar um número aleatório entre o número mínimo e o número máximo que passamos como parâmetro. Para a distância queremos gerar um número aleatório entre 1 e 500 metros, por exemplo. E ainda queremos colocar um "m" no final, um "m" de metros. Podemos fazer essa crase e colocar esse texto com cifrão, chaves, fechamos a crase e colocamos um "m", distancia: `${gerarNumeroAleatorio(1, 500)}m`,.

[06:49] Dessa forma conseguimos adicionar um texto dentro de uma string, chamar uma função, uma variável, alguma coisa assim dentro da string e passamos o "m" no final que vai ser o número mais o "m" no final. Precisamos fazer a mesma coisa para as estrelas, as estrelas não precisam de um texto porque elas vão ser um valor número mesmo, podemos chamar direto. Vou gerar número aleatório e vamos ter entre 1 e 5 estrelas, estrelas: gerarNumeroAleatorio(1, 5),

[07:30] Fizemos a nossa lista do Green. Agora precisamos adicionar os outros produtores que são: “Grow”, “Jenny-Jack”, “Potager” e “Salad”. Vamos adicioná-los aqui, vamos duplicar o Green e o segundo pode ser o Salad, precisamos importar a imagem dele também. Eu vou adicionar todas as imagens aqui de uma vez só para podermos fazer mais rápido. Se eu utilizar o atalho "Ctrl + D" ou "command + D" eu posso selecionar a próxima string igual a seleção que tenho selecionada.

[08:09] Se eu der dois cliques no green e apertei "command + D" ele seleciona a próxima vou escrever aqui salad para alterar os dois valores de uma vez só. O próximo vai ser “Jenny Jack” e o arquivo é o jenny-jack e depois temos também o “Grow” que vai ser grow mesmo e, por fim, o “Potager”. import potager from '../assets/produtores/potager.png'; Agora importamos todos os arquivos de imagem, vamos adicionar na nossa lista.

[09:12] Não se pode esquecer de colocar vírgula entre os elementos da lista, o segundo é a salada. Temos que adicionar imagem, salad também, nome: "Salad", imagem: salad. O terceiro é “Jenny Jack”, nome: "Jenny Jack farm", imagem: jenny-jack.

[09:42] O próximo é o Grow. nome: "Grow", imagem: grow, distancia:${gerarNumeroAleatorio(1, 500)}m, estrelas: gerarNumeroAleatorio(1, 5), Lembrando que essa lista está disponível nas atividades, se você quiser adiantar-se pode copiar direto de lá. E, por último, o “Potager”: nome: "Potager", imagem: potager,.

[10:09] Já criamos a nossa lista de produtores, precisamos exportá-la aqui também. export default produtores: que tem o nosso título, a lista e o número randômico também de distância e de estrelas. Agora vamos criar um arquivo de serviço para simular que estamos requisitando esses dados de algum outro lugar, carregando esses dados de algum outro lugar.

[10:37] Para fazer isso podemos vir aqui no “src” e criar uma pasta chamada “servicos” e um arquivo chamado “carregaDados.js” e aí abstraímos esse carregamento de dados, não sabemos muito bem de onde é que vem. Poderia vir do Json, poderia vir do banco de dados, de alguma coisa assim. No caso, agora vamos pegar aqui desse mock que criamos.

[11:06] Precisamos importar os produtores dos mocks, import produtores from "../mocks/produtores"; e também importar o topo dos mocks, import topo from "../mocks/topo"; E aí criamos funções que simulam esse carregamento de dados, podemos começar exportando a primeira função, vamos exportar sem ser default porque usamos as chaves para importá-los no mesmo import.

[11:45] Podemos exportar várias coisas, vamos exportar o método de carregaProdutores que vai ser um método que vai retornar os produtores, somente isso. export const carregaProdutores = () => { return produtores }. Vamos exportar também o método carregaTopo para representar o carregamento do topo e retorna topo. export const carregaTopo = () => { return Topo }.

[12:22] Agora criamos uma interface onde podemos chamar esses métodos, importá-los e usar na nossa aplicação para pegar os produtores e o topo como se estivéssemos fazendo uma requisição mesmo. Esse arquivo de carregar de dados serve para simularmos um carregamento de dados de algum lugar externo, que no nosso caso vai ser do nossos mocks, dos nossos dados fictícios que criamos.

[12:47] Daqui para frente vamos utilizar esse carregamento de dados para mostrar os dados na nossa aplicação sem que utilizemos strings fixas. Nos próximos vídeos vamos ver como fazer isso.

@@6
Estilos

Aprendemos a implementar estilos diversos aos nossos componentes. Agora, observe os estilos abaixo com atenção:
const estilos = StyleSheet.create({
  imagem: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
})COPIAR CÓDIGO
Considerando o trecho de código, como podemos definir qual componente vai receber qual estilo?

Basta definir o ‘source’ na chamada do componente.
<Image source={logo} style={imagem.estilos} />
 <Text style={estilos.boasVindas}>Olá Alura</Text>
 
Alternativa correta
Basta definir o ‘style’ na chamada do componente.
<Image source={logo} style={estilos.imagem} />
 <Text style={estilos.boasVindas}>Olá Alura</Text>
 
Alternativa correta!
Perfeito! Uma vez que temos um componente criado, podemos chamar o parâmetro style e, dentro dele, chamar a constante ‘estilos’, que possui vários modos diferentes, como, por exemplo, o ‘imagem’ e o ‘boasVindas’.
Alternativa correta
Basta definir o ‘source’ na chamada do componente.
<Image source={logo} style={estilos.imagem} />
 <Text source={estilos.boasVindas}>Olá Alura</Text>
 
Alternativa correta
Basta definir o ‘style’ na chamada do componente.
<Image source={logo} style={imagem.estilos} />
 <Text style={estilos.boasVindas}>Olá Alura</Text>

 @@07
Consumindo o serviço

[00:00] Agora que já criamos os nossos mocks, todos os textos que queremos na nossa aplicação e também criamos um serviço para carregar esses dados como se estivéssemos requisitando de algum lugar ou pegando de algum lugar externo. Vamos, então, utilizar esses dados da nossa aplicação.
[00:18] Podemos fazer isso substituindo os textos que já temos aqui no topo. Vamos entrar na tela home,no componente de topo e vamos tentar pensar como que poderíamos chamar o método que criamos de serviços de carregamento de dados. Precisamos chamar o carregaTopo, podemos começar importando esse carregaTopo aqui em cima da logo, por exemplo.

[00:49] Para importar precisamos usar as chaves porque não exportamos como default, estamos exportando dois métodos lá. Vamos chamar carregaTopo e aí fazemos o caminho, volta três pastas, entramos dentro da pasta de serviços e carregaDados. import { carregaTopo } from '../../../servicos/carregaDados';. Agora estamos importando o método carregaTopo de carregaDados.

[01:26] Vamos colocar esse método aonde? Como fazer para que isso carregue apenas uma vez? Porque não queremos ficar sobrecarregando o celular da pessoa, carregando toda hora essa informação supondo que seja de um lugar que demore para carregar, seja uma informação muito pesada. No nosso caso é uma coisa simples, mas no ambiente real você pode encontrar vários outros cenários.

[01:50] Seria legal carregar apenas quando o componente estiver pronto, montado uma vez só. Para fazer isso de uma forma mais didática, podemos utilizar o componente de classe, vamos converter essa nossa função para classe até para termos um exemplo de como é que funciona também em classe, em componentes de classe que você pode em outros projetos e utilizamos o método que tem dentro desse componente de classe porque vai ficar mais fácil entender da primeira vez.

[02:29] Ao invés de exportarmos essa função Topo aqui vamos mudar esse export default, removemos o export default daqui e colocamos ele no final do nosso arquivo, eu vou exportar o topo como default: export default Topo;. E a linha 7, onde está function Topo(), ao invés de function eu vou transformar isso em uma classe adicionando o class aqui. class Topo().

[03:01] Tiramos também o abre e fecha parênteses da função e temos aqui uma classe só que a classe não tem nenhum return e para exibirmos alguma coisa precisamos, para essa classe ser um componente, precisamos estendê-la, porque sendo só uma classe ela não vai ser um componente de verdade nesse componente no formato de classe. class Topo extends React.Component {.

[03:33] Sempre precisamos estender do React.Component e precisamos criar o método render aqui dentro. Podemos criar aqui render() como sendo um função e retornamos isso que estávamos retornando antes na nossa função. return <View style=(estilos.topo)>. Dessa forma temos o mesmo componente de antes, vamos salvar e ver o que acontece.

[04:01] Vou recarregar aqui só para ter certeza se está tudo certo. Vou habilitar o teclado para o device porque às vezes no Mac iOS pode acontecer isso, vou apertar "command + R", recarreguei e está tudo funcionando ainda. Agora vamos fazer aquele processo de chamar o carregaTopo.

[04:24] Podemos utilizar um método da classe do React componente que se chama component... ele até sugere vários outros componentes, outros métodos e é até legal para entendermos o ciclo de vida da nossa aplicação. O ciclo de vida é o que vai acontecer quando o aplicativo nasce, quando ele é atualizado, quando ele carrega, quando ele descarrega ou vai descarregar. Tem vários métodos que podemos utilizar no nosso componente para executar coisas em momentos específicos.

[04:59] No nosso caso queremos quando o componente é montado: componentDidMount () { } abrimos e fechamos parênteses e chaves e podemos executar alguma coisa dentro. Vamos dar um consol.log("Componente Montado"). Podemos ver os consoles.log dentro do nosso console, eu vou salvar aqui, ele já vai recarregar e já vai printar no console. Eu vou abrir o terminal e ele carregou mais uma vez e deu componente montado, printou aqui no console.

[05:40] Aonde está executando o npx react-native start ele vai printar esses valores que printamos. Se eu recarregar aqui ele vai recarregar e vai dizer "Componente Montado" apenas uma vez e é isso que queremos. Voltamos para o nosso Visual Studio Code e agora vamos criar um método chamado atualizaTopo() { e aí esse método vai fazer o carregaTopo(); que, por sua vez, retorna o valor, vamos adicionar uma constante retorno igual a carregaTopo. const retorno = carregaTopo();

[06:23] Agora precisamos chamar esse atualizaTopo aqui do DidMount ao invés do console.log vamos adicioná-lo aqui: componentDidMount() { atualizaTopo();. Pronto, estamos chamando o atualizaTopo aqui dentro e vamos dar um console.log no retorno console.log(retorno);. Salvamos e temos um problema. O que acontece de diferente quando estamos utilizando o componente de classe é que esse método não é uma constante, uma variável que está dentro da nossa função que podemos simplesmente chamá-la.

[07:03] Esse atualizaTopo é um método da nossa classe, para acessarmos o método da nossa classe precisamos utilizar o this, que quer dizer que estou chamando desta classe do topo a função atualizaTopo que está aqui. this.atualizaTopo();. Vamos atualizar aqui salvando e já está funcionando. Olhamos novamente no nosso terminal e vai ter o erro que recebemos aqui em cima, mas logo embaixo já temos o que queríamos mesmo que são os textos: {"boasVindas": "Olá, Natalia", "legenda": "Encontre os melhores produtores"}.

[07:46] Conseguimos carregar o topo. Agora como faz para colocar isso aqui? Daqui a pouco vamos aprender a utilizar os estados que vão nos permitir salvar coisas dentro do componente para que possamos utilizar aqui embaixo. Te vejo na próxima aula.

@@08
Salvando no Estado

[00:00] Já recarregamos o topo, já temos as informações do topo salvas aqui nessa variável dentro desse método. E para usá-la aqui embaixo dentro do render, para criar uma variável que estará dentro do nosso componente, podemos usar os estados que nada mais são do que variáveis que estão ali dentro do componente que quando atualizamos essa variável, automaticamente onde ela está utilizada aqui vai ser atualizado também.
[00:32] Precisamos utilizar um método específico para atualizar essa variável que no caso do class Topo vai ser o set state. Vamos começar criando o estado, o estado vai ser aqui dentro do nosso topo, da nossa classe de topo o state e declaramos que ele é igual a um objeto e dentro desse objeto podemos escolher quais são as variáveis, quais são os estados que queremos armazenar.

[01:04] Queremos armazenar o topo que é um objeto que retorna o boas-vindas. Eu vou setar um valor inicial para esse boas-vindas que vai ser uma string vazia e ele também retorna a legenda que também vai ser uma string vazia. state = { topo: { boasVindas: ' ', legenda: ' ',. Criamos o estado que é um objeto que tem o topo e que também é um objeto que vai ter duas strings boas-vindas e legenda.

[01:35] Precisamos declarar esse topo aqui primeiro, para que não tenhamos problemas aqui embaixo quando formos chamar e também para que o estado já saiba que existe essa variável topo aqui, que existe esse estado topo. Para utilizarmos o estado, neste caso essas variáveis vazias, dentro do nosso componente, vamos começar mudando um texto dentro do nosso estado para conseguirmos ver a mudança.

[02:07] Eu vou colocar aqui "Olá" e "legenda" só para enxergarmos depois removeremos. Aqui embaixo no render vamos remover o "Olá, Natalia", chamamos aqui os nossos colchetes para podermos colocar um código dentro e precisamos pegar o this porque estamos dentro de uma classe, estamos dentro de uma função que está dentro de uma classe.

[02:32] Pegamos o this para pegar a referência da classe <Text style={estilos.boasVindas}>{this.state.topo.boasVindas}. Vamos salvar e já temos o "Olá" que está aqui na referência das boas-vindas. Eu vou apagar esse "Olá" porque não vamos tê-lo no default vai ser só um texto vazio. Vamos fazer a mesma coisa aqui na legenda, vou apagar o texto "Encontre os melhores produtores", vou chamar aqui as chaves.

[03:11] Lembrando que o this só é válido, só funciona dessa forma dentro da classe, na função ele vai ser diferente. Na função geralmente não vamos precisar utilizar isso, no componente de função. Como estamos no componente de classe pegamos a referência da classe, <Text style=(estilos.legenda)>( this.state.topo.legenda )</Text>. Vamos salvar e já temos a legenda. Podemos apagar o que escrevemos dentro do texto da legenda para que o default fique em duas strings vazias mesmo.

[03:48] Não temos mais nada escrito aqui e é isso mesmo que esperamos porque os defaults são vazios. Agora precisamos carregar isso quando o componente carrega e já fizemos isso. Fizemos aqui, pegamos o retorno só que só estamos colocando esse retorno no console, não estamos armazenando ele no estado.

[04:08] Lembra lá no começo que eu falei que íamos utilizar um método para setar esse estado? Não podemos fazer isso daqui: this.state.topo =, não é recomendável fazer isso porque não vamos utilizar o método this.setState() que vai fazer com que esse texto atualize aqui cada vez que mudarmos. Para setarmos um estado, sempre precisamos utilizar o setState no formato de classe.

[04:51] Quando for uma classe utilizamos o this.setState() para setar o estado. O estado que queremos setar é o topo, podemos chamar aqui topo dois pontos retorno this.setState( { topo: retorno });. O topo, que é o nosso estado, vai receber o que está dentro do retorno.

[05:13] Supondo que temos outros estados de qualquer coisa, podemos ter outros nomes, por exemplo: lista. Poderíamos ter uma lista aqui de alguma coisa. Quando setamos aqui que o topo é igual ao retorno, só vamos alterar o topo porque o setStatejá entende que só queremos alterar uma coisa, ele não apaga a lista aqui, dessa forma alteramos apenas o topo.

[05:43] Vamos remover essa lista aqui que não estamos utilizando agora, era só para exemplificar mesmo. Estamos alterando aqui, salvando já vemos que o texto está na nossa tela, que é o texto lá do nosso mock que está sendo carregado pelo serviço.

[06:01] Vou apagar esse console.log, se você quiser você pode deixar. Não é legal deixarmos os consoles.log no ambiente de produção, mas se você quiser para conseguir entender como é que está o fluxo pode deixar. No meu caso eu vou apagar, vamos salvar e continua funcionando aqui.

[06:18] Vamos resumir o que já fizemos. Criamos os mocks de produtores e de topo e estamos utilizando esses mocks de topo aqui, se eu alterar ele vai alterar na nossa tela. Estamos utilizando esses mocks de topo por meio do nosso serviço de carregamento de dados que está sendo carregado apenas uma vez porque estamos utilizando o componente DidMount do React Native no componente de classe.

[06:52] Aprendemos como transformamos o nosso componente de função em componente de classe, que basicamente é declarando uma classe que se chama topo nesse caso e ela estende o React.Component. Para renderizar as coisas utilizamos o render e retorna o nosso jcx, as nossas tags, os nossos componentes.

[07:17] Agora utilizamos o componente DidMount para chamar uma função que carrega o topo e setamos no estado que é uma variável que vai ficar ali em tempo de execução. Se fecharmos e abrirmos a aplicação essa variável vai ser apagada. E aqui como estamos carregando toda vez que abrimos a aplicação, ele vai carregar novamente.

[07:40] Podemos setar, inclusive, o valor default para esse state. Sempre chamamos aqui state = e colocamos aqui os nomes dos nossos estados que neste caso vai ser apenas o topo. Para exibirmos o estado basta chamarmos this, para referência da classe ponto state, porque essa variável da classe, é a propriedade da classe, ponto topo, o nosso nome do nosso estado e ponto boasVindas que é o que tem dentro do nosso estado.

[08:11] Vimos como fazer isso no formato de classe. Na próxima aula, veremos como fazer isso no formato de função que é ao que já estamos habituados. O formato de classe era o inicial lá do React Native, lá no começo só existia classe e depois surgiram as funções. Agora usamos mais funções do que classes porque utilizamos os Hooks e nesse curso vamos aprender a fazer tudo isso que estamos fazendo aqui com classe no formato de funções usando Hooks. Te vejo em breve para continuarmos essa parte.

@@09
Estados

Imagine que você foi contratado por uma empresa que desenvolve aplicativos para Fliperamas. O Fliperama possui uma lista de Consoles com jogos e controles disponíveis.
state = {
   fliperama: {
     jogos: 'Crash Aluracoot, Metal Alura Solid, Alura Dance, The Legend of Alura, Super Alura 64, Alura Party 8',
     controle: '7',
   },
  };COPIAR CÓDIGO
Sempre que um novo jogo ou um novo controle é comprado, os dados são atualizados em uma API que vem de uma função chamada carregaFliperama().

Pensando nisso, como podemos utilizar esse estado?

atualizaFliperama() {
   const fliperama = carregaFliperama();
   this.setState({fliperama});
 }

 componentDidMount() {
   this.atualizaFliperama();
 }
 
Alternativa correta
 componentDidMount() {
   this.atualizaFliperama();
 }

 render() {
   const {jogos, controle} = this.state.fliperama;
   return (
     <View style={estilos.fliperama}>
       <Image source={logo} />
       <Text >{jogos}</Text>
       <Text >{controle}</Text>
     </View>
   );
 }
 
Alternativa correta
atualizaFliperama() {
   const fliperama = carregaFliperama();
   this.setState({fliperama});
 }

 componentDidMount() {
   this.atualizaFliperama();
 }

 render() {
   const {jogos, controle} = this.state.fliperama;
   return (
     <View style={estilos.fliperama}>
       <Image source={logo} />
       <Text >{jogos}</Text>
       <Text >{controle}</Text>
     </View>
   );
 }
 
Alternativa correta!
Correto! Devemos criar uma função que define do estado setState() e usar a função componentDidMount() e, por fim, aplicar na View através de uma função render().

@@10
Para saber mais: Métodos de ciclo de vida

Nesta aula, aprendemos sobre o método componentDidMount, que faz parte do ciclo de vida de componentes de classe. Porém, há vários métodos que podemos usar para eventos do componente, como:
componentDidMount: que, como vimos, é executado quando o componente termina de renderizar;
componentDidUpdate: que é executado quando o componente recebe alguma atualização e não é executado na primeira vez que o componente carrega;
componentWillUnmount: que é executado quando o componente é removido da tela;
componentDidCatch: que é chamado quando a aplicação encontra algum erro durante a renderização, em algum método do ciclo de vida ou no construtor de componentes filhos.
Caso queira saber mais sobre mais métodos de componentes no formato de classe e o momento exato em que são chamados, acesse esta página da documentação.

https://pt-br.reactjs.org/docs/react-component.html

@@11
Faça como eu fiz

Chegou a hora de você seguir todos os passos realizados por mim durante esta aula. Caso já tenha feito, excelente. Se ainda não, é importante que você execute o que foi visto nos vídeos para poder continuar com a próxima aula.

Continue com os seus estudos, e se houver dúvidas, não hesite em recorrer ao nosso fórum!

@@12
O que aprendemos?

Nessa aula, você aprendeu como:
Produzir um Componente:
Criando diferentes partes da tela separadamente, podemos controlá-las separadamente também. Começamos aprendendo como produzir o componente Topo com estilos distintos para cada Texto e imagens disponíveis.
Criar um Mock:
Simulando uma API, criamos um Mock para receber dados como se fosse um serviço externo. Dessa forma, podemos aprender a nos comunicar com uma API sem de fato estar utilizando uma!
Salvar um Estado:
Imaginando que nossos dados externos mudam, nossa aplicação tem que acompanhar as mudanças dos dados e renderizar na tela as tais mudanças. Para isso, aprendemos a criar um estado que se encarrega de mudar o componente na tela sempre que algum dos dados é alterado.