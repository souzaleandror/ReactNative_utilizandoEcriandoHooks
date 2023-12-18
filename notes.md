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

#### 10/12/2023

@03-Hooks

@@01
Projeto da aula anterior

Caso queira começar daqui, você pode baixar o projeto da aula anterior neste link.
Lembre-se: caso baixe um projeto do zero, rode os comandos npm install para baixar as dependências do node e, caso for rodar para iOS, cd ios && pod install para baixar as dependências nativas de iOS.

@@02
Lista de produtores

[00:00] Agora que já carregamos esse texto do nosso mock utilizando o ciclo de vida, como o componentDidMount, e também utilizando os estados dentro do componente de classe que vimos na última aula, vamos fazer a parte dos produtores.
[00:16] Olhando aqui no nosso layout, podemos ver que esquecemos de mudar a cor da fonte, ainda está preta. Vamos ajustar a cor da fonte lá no nosso topo e partimos para fazer os produtores e dessa vez vamos utilizar funções ao invés de classe.

[00:33] Começando pelo topo, dentro da nossa tela de topo, “src > telas > Home > componentes > Topo.js”, vamos vir aqui e vamos ajustar o texto de boas-vindas aqui nos estilos e vou colocar aqui color: e vamos colocar uma cor hexadecimal, que vai ser color: #464646, salvamos. Pronto, já temos uma cor um pouco mais clara aqui.

[01:08] Aqui na legenda, também vamos colocar color: #A3A3A3, salvamos e temos também ali a cor do "encontre os melhores produtores" mais clara. Vamos salvar, e partir agora para os nossos produtores. Eu vou fechar esse arquivo aqui. Primeiro, precisamos criar o nosso componente de produtores.

[01:37] Aqui dentro dos componentes da "home", vamos criar um novo aqui chamado "Produtores.js". Ele vai ser irmão do "Topo". Agora, vamos fazer o nosso componente mesmo, importar o react, import React from 'react', também vamos exportar como default a nossa função dessa vez, export default function Produtores(), e retornar alguma coisa.

[02:08] Vamos colocar aqui, só para visualizarmos, um return <Text>Produtores</Text>, só para termos uma ideia de que estamos exibindo o componente certo, e precisamos importar, obviamente, o Text de React Native, import { Text } from 'react-native.

[02:35] Agora utilizamos esse "Produtores.js" lá no nosso "index.js" junto com o "Topo.js". Voltamos aqui no "telas > Home > index.js". Aqui estamos retornando só o "Topo", return <> <Topo>, vamos retornar um fragmento para podermos agrupar mais, fazer mais de um retorno, e além do "Topo", vamos também retornar os produtores, <Produtores/>.

[03:00] Salvando aqui. Temos que importar os produtores também, então import Produtores from './componentes/Produtores, salvamos e agora sim temos o texto "Produtores" que estávamos testando aqui dentro da nossa tela de produtores. Vou abrir aqui até para compararmos o "Topo".

[03:34] Como que nós fazemos para que essa parte aqui de classe que fizemos, o componentDidMount, como que fazemos isso na forma de função? Porque não podemos declarar aqui esse componente componentDidMount, não vai estar dentro aqui da função porque aqui é estendido do "React.Component". Vamos ver como que fica isso em função.

[03:56] No React Native e no React, podemos utilizar algumas funções específicas do React, então vamos importar daqui, vou botar aqui vírgula e as chaves, import React, { } from 'react', que vão fazer algumas coisas muito semelhantes com o ciclo de vida, que é o caso do useEffect, então vamos importar esse useEffect do React, vem lá do React, e vamos utilizar isso aqui dentro da nossa função.

[04:31] Como que vamos fazer? Vamos chamar useEffect, simplesmente chamar a função e dentro dela vamos ter dois parâmetros. O primeiro parâmetro vai ser uma função do que queremos que seja executado e o segundo parâmetro, nesse caso, vai ser um array vazio, isso porque o useEffect pode fazer várias coisas, podemos fazer com que ele funcione parecido com component did mount passando um array vazio aqui. export default function Produtores() { useEffect(() => { }, [].

[05:00] Quando temos um array vazio como segundo parâmetro, o que está aqui dentro vai executar assim que o nosso componente for carregado. Ele vai executar uma vez só quando o componente for carregado. O que queremos rodar aqui dentro? Queremos chamar o carregaProdutores que fizemos lá na nossa aula do Mock.

[05:22] Vamos importar aqui no nosso "Produtores" o carregaProdutores, import { carregaProdutores } e vamos chamar lá do nosso caminho de serviços, então voltamos três pastas dentro de "serviços", { carregaProdutores} from '../../../serviços/carregaDados', e agora chamamos o carregaProdutores aqui dentro do UseEffect. Vou botar aqui const retorno = carregaProdutores().

[06:06] Vamos dar um console.log(retorno) aqui para vermos o que está retornando para vermos o que está passando aqui, quando ser chamado. Vamos salvar. Aqui na nossa tela nada vai acontecer, precisamos olhar lá no terminal. Vamos vir aqui no terminal e temos um erro que tinha acontecido antes, mas temos aqui o log dos produtores, que era o que queríamos mesmo.

[06:32] Temos a nossa lista, tem o título "Produtores", que é isso que estamos chamando aqui, depois que temos que trocar. Temos a nossa lista de produtores com a distância, quantidade de estrelas, a imagem, e temos podemos ver aqui que a imagem não ficou bem certa, está com o número 2, e o nome também do nosso produtor, e é justamente isso que queríamos.

[06:54] Vamos dar uma olhada aqui no que fizemos fez exatamente aqui, chamamos o useEffect que é uma função dentro do React e esse useEffect vai fazer um efeito, vai fazer uma coisa quando o componente for carregado, e só uma vez. Nós vimos como faz dessa forma aqui no método de função e aqui no componente de classe vimos que podemos utilizar o componentDidMount.

[07:21] Se vimos essas duas formas, qual é a melhor forma? Você pode estar se perguntando aqui. Você pode achar: "ah, classe aqui pode ser uma coisa mais complexa", às vezes você nem tinha visto classes ainda, você não está sabendo de todos os conceitos de classe, mas não se preocupe, vamos olhar na documentação do React para entender melhor o que são essas funções que utilizamos, como o useEffect e qual deles é recomendável utilizarmos.

[07:52] Vamos vir aqui na documentação do React. Podemos entrar no React mesmo, não no React Native, na documentação e clicamos aqui em "Hooks > Introdução aos Hooks". O que são Hooks? Essa função que utilizamos, o useEffect é um Hook.

[08:16] O Hook é uma nova adição do React, que faz com que possamos fazer coisas que poderíamos fazer no método de classe também dentro de uma função, sem precisar escrever uma classe, porque antes os componentes de função eram mais limitados que os componentes de classe, hoje não é mais assim, podemos utilizar os Hooks que fazem essas coisas para nós.

[08:40] Vamos descer um pouco aqui, você pode assistir esse vídeo de introdução se você quiser, aqui vai estar em inglês, mas todo o texto está em português. Podemos ver que a motivação, ele fala que é difícil reutilizar a lógica de estado entre componentes e também podemos ver, principalmente, que os componentes completos se tornam mais difíceis de entender.

[09:03] Utilizamos esse método componentDidMount que esta escrito aqui, ele está falando sobre esse método, e ele fala que dentro do componentDidMount podemos fazer um monte de coisa, podemos carregar esses dados, podemos vincular event listeners que fala aqui, várias coisas que não necessariamente tem uma ligação.

[09:24] Você pode ter percebido que quando chamamos aqui no "Topo" o nosso atualizaTopo, fizemos de uma forma diferente, utilizamos uma função aqui. Isso porque se colocamos isso dentro do componentDidMount, o componentDidMount não tem relação com atualizarTopo. Atualizar o topo que queremos que seja feito, mas não necessariamente o componentDidMount está ali para isso.

[09:50] Aqui em function Produtores, por exemplo, no useEffect, poderíamos criar vários useEffects diferentes, mais de um, para fazer as coisas de forma separada. Aqui no componentDidMount não, teríamos que fazer tudo junto, por isso que criamos uma função para separar.

[10:08] Voltando à documentação, temos também uma outra frase aqui que ele coloca como título, que é as "classes confundem tanto pessoas quanto máquinas". Pode ser mais complexo de entendermos o componente no formato de classe, entender o this do JavaScript também que funciona de forma diferente para cada contexto.

[10:28] O React lançou os Hooks que permitem que façamos tudo que quisermos fazer no formato de classe no formato de função também. O próprio React recomenda que utilizemos Hooks ou componentes no formato de função mesmo ao invés dos componentes antigos do formato de classe.

[10:55] Pode ser que você veja em algum projeto antigo também esse formato de classe, então é importante que você entenda como que funciona, pelo menos o básico. Já vimos como fazer no formato de função e também entendemos que o formato de função é mais recomendável para fazermos nos novos projetos, fica um código mais legível, mais fácil.

[11:22] Isso aqui foi o nosso componente com useEffect, no componente de classe íamos ter que criar classe, estendê-la, chamar o componentDidMount, chamar o render, tem vários outros processos ali para nós executarmos para fazer esse simples carregaProdutores.

[11:41] No próximo vídeo, veremos como salvar esses produtores no nosso estado para podermos chamá-los aqui embaixo. Te vejo no próximo vídeo.

@@03
Armazenando produtores

[00:00] Agora que já vimos como fazer para que o useEffect carregue alguma coisa, quando o nosso componente terminar de renderizar, de carregar, vamos partir para o Hook de estado porque é o Hook que vai armazenar os nossos dados dentro do nosso componente, armazenar de forma volátil.
[00:22] Aqui temos o Hook de estado na documentação do React mesmo, podemos ver que precisamos só declarar a constante que vai ser um array que recebe dois parâmetros, que é igual a useState e um valor inicial.

[00:38] O primeiro parâmetro, o primeiro index do array, digamos assim, é o valor que queremos pegar, é o nosso estado mesmo, podemos pegá-lo para exibir na tela, pegá-lo para fazer alguma conta, algo nesse sentido. O segundo é um método, esse método vai permitir que mudemos o nosso estado. Se quisermos mudar o nosso contador nesse exemplo aqui para 2 chamamos o setCount e passaríamos o que queríamos dentro do nosso setCount.

[01:08] Vamos fazer isso nessa aplicação. Aqui no nosso projeto vamos abrir as nossas pastas aqui dentro de “src > telas/Home > componentes > Produtores.js” e vamos fazer o nosso Hook de useState. Primeiro precisamos importá-lo lá do React, aqui onde estamos importando o useEffect vamos importar o useState também. import React, { useEffect, useState } from 'react';.

[01:34] Agora aqui na nossa função de produtores chamamos uma constante que vai receber um array de valores, serão duas posições. O primeiro é o valor do nosso estado, o nome do nosso estado, pode ser o título. Vamos ter dois estados o título e a lista de produtores, começamos com o título e o método que vai alterar esse título, podemos chamar de setTitulo, sinal de igual, useState que é o método que importamos e passamos um valor inicial que pode ser uma string vazia mesmo export default function Produtores(0 { const [titulo, setTitulo] = useState(' ');

[02:22] Agora temos algumas observações aqui que podemos notar: sempre precisamos chamar o useState, esse Hook aqui de useState no começo da nossa função, ele está aqui no começo. Não podemos fazer um if aqui antes e chamar o useState. Não, ele sempre tem que ser declarado lá no começo. Podemos nomear isso daqui para o que quisermos, podemos colocar aqui ao invés de setTitulo atualizaTitulo, não tem problema, podemos colocar o nome que quisermos tanto no estado quanto no método que vai alterar esse estado.

[02:56] O que é legal porque assim podemos fazer com que fique mais legível, que entendamos o que exatamente estamos alterando. Agora vamos usar esse título, temos aqui recebendo do carregaProdutoreso retorno vai ter o título dentro, podemos colocar aqui: setTitulo(retorno.titulo);

[03:26] Aqui dentro do useEffect onde carregamos os produtores vamos pegar o retorno e setar o título desse retorno. Vamos testar se está funcionando, vamos pegar o título que está aqui no nosso useState que criamos e usá-lo aqui no lugar desse texto "Produtores". Eu vou apagar e salvar. Sumiu o texto "Produtores".

[03:50] Agora vamos usar aqui com chaves, o título. return <Text>{ titulo }</Text>. Salvamos e voltou o título de produtores aqui, está funcionando, conseguimos salvar dentro do nosso estado do nosso componente de função dessa vez um estado, uma variável volátil que vai ser apagada quando a aplicação for fechada, então será resetado toda vez.

[04:17] Agora precisamos também da nossa lista, vamos fazer aqui um setLista, mas primeiro precisamos criar o estado para ter esse método setLista. Aqui em cima, embaixo do estado que criamos do título vamos criar um novo estado que vai ser uma constante const [lista, setLista] = useState( [] );

[04:55] No meu caso vou apagar esse console.log, se você quiser deixar para ter alguma referência quando você estiver estudando não tem problema. Vou apagar aqui, setLista dentro aqui do useEffect e embaixo do setTitulo, setLista(retorno.lista);

[05:18] Agora vamos adicionar a nossa lista mesmo. Já aprendemos que podemos utilizar o FlatList, que é um método de chamar listas de forma mais otimizada e vamos precisar passar esse texto aqui como um header.

[05:39] Primeiro podemos começar apagando esse daqui, o texto e adicionando no lugar dele o return FlatList e precisamos passar um parâmetro chamado data que é a nossa lista em si, vou passar aqui. Já adicionamos ela como um estado, por isso está tudo certo, podemos chamá-la de lista. return <FlatList data={Lista} />.

[06:08] Para adicionarmos o título precisamos passar um header, ListHeaderComponent é igual a um componente. Inicialmente vou colocar aqui que é uma função que vai ter o text com o título dentro. ListHeaderComponent={() => <Text>{ titulo</Text>} />;. Passamos aquele text que estávamos retornando aqui para dentro do ListHeaderComponent.

[06:38] Agora para renderizarmos o que tem dentro da lista nós também precisamos ter o renderItem que vai renderizar cada item da nossa lista. Para começarmos, podemos criar uma função que vai renderizar só o nome da lista, só para ficar os textos. Vou chamar aqui os texts só listando o nome do nosso produtor.

[07:06] Aqui do renderItemprecisamos passar pela propriedade item, eu vou abrir essas chaves aqui para fazermos a desconstrução do objeto que está sendo passado como parâmetro, recebemos o item, dentro do nosso item vamos ter o objeto mesmo da nossa lista e podemos pegar diretamente o nome do nosso produtor.

[07:31] Dentro do item, o renderItem já vem com esse objeto item, vamos pegar o nome e exibi-lo aqui como text nome entre chaves também. renderItem={({item: { nome }}) => <Text>{ nome }>/Text>} />;. Vamos salvar e agora temos o título da nossa lista que é "Os Produtores" e uma listagem com os nomes deles.

[07:53] Vamos aproveitar também para estilizar o topo da nossa lista, o título da nossa lista que é esse ListHeaderComponent. Vamos transformar isso em uma função separada para ficar mais organizado, criamos uma constante aqui chamada TopoLista igual a uma função, vai ser uma função que é um componente no fim das contas e retornamos o título. const TopoLista = () => { return <Text>{ titulo }</Text> };.

[08:33] E no lugar do ListHeaderComponent ser uma função colocamos o nosso TopoLista. ListHeaderComponent={TopoLista: />. Recortamos o text e colocou dentro da função de TopoLista para ele ser retornado separadamente. Salvamos e continua funcionando tudo certo.

[08:51] Agora vamos criar os estilos. Vamos embaixo da nossa função no final do arquivo e criamos uma constante chamada estilos import { FlatList, Text, StyleSheet } from 'react-native';. Lembrando que temos que vir aqui em cima no React Native, na importação do React Native e importar também StyleSheet.

[09:15] E podemos passar um objeto e o nome do nosso estilo pode ser título mesmo, título abre e fecha chaves para começarmos a declarar o que queremos ali dentro.

[09:28] Podemos aumentar um pouco esse título colocamos em uma fontSize de 20, podemos também colocar o lineHeight de 32 já que mudamos a fontSize. Margem horizontal, podemos mudar na esquerda e na direita ao mesmo tempo, vamos colocar 16. MarginTop, para dar uma distância do topo, de 16 também e também podemos fazer um fontWeight para declarar que a grossura da fonte vai ser bold, vai ser uma fonte em negrito. const estilos = StyleSheet.create({ titulo: { fontSize: 20, lineHeight: 32, marginHoizontal: 16, marginTop: 16, fontHeight: 'bold', }

[10:09] Salvamos e precisamos aplicar esse estilo título aqui dentro do nosso título. Na nossa constante TopoListavamos vir aqui no text e aplicar a propriedade Style sendo estilos ponto título. return >Text style={estilos.titulo}>{ titulo }</Text>. Salvamos e já temos os nossos produtores aqui.

[10:30] Vamos também pegá-lo e fazê-lo da mesma cor do nosso título aqui que era #464646. Aplicamos aqui a color, color: '#464646'. Salvamos e temos aqui o nosso texto da mesma cor que está o nosso título da home mesmo.

[10:53] Já vimos aqui como fazemos toda essa mesma forma de estados e também de ciclo de vida usando funções. Vimos que é preferível que usemos funções mesmo para que possamos usar os Hooks porque se utilizarmos no formato de classe não conseguimos utilizar os Hooks. Novas bibliotecas, novas features que possam surgir que usem apenas Hooks não serão possíveis se forem executadas em componentes no formato de classe.

[11:24] Vimos como criamos um estado, vimos como podemos fazer efeitos colaterais na nossa aplicação usando o useEffect, passando um array vazio para que ele execute uma vez na nossa aplicação quando a nossa tela estiver carregada. Nós também estamos renderizando aqui a FlatList, uma coisa importante que ficou faltando aqui na FlatList também é o keyExtractor para declararmos qual é a key da nossa lista. Cada um desses precisa ter uma key.

[11:56] Vamos aplicar aqui o keyExtractor e aqui também vai ser o método e não precisamos chamar o item primeiro, podemos chamar direto o que queremos. Vamos chamar o nome mesmo, o nome do restaurante como sendo key, porque aqui no nosso caso não vamos ter nenhum restaurante repetido. Quando você for fazer no ambiente real é legal que você use um ID, um código do produtor, por exemplo, alguma coisa assim como key.

[12:22] Aplicamos aqui a key como sendo o nome. keyExtractor={({nome}) => nome};. Salvamos e nada vai acontecer aqui de diferença, mas vai fazer com que a nossa lista fique mais otimizada e fazer com que ela consiga se achar dentro da lista.

[12:37] Outro ponto importante que nós também precisamos notar é que estamos, aqui no “index.js”, chamando o topo e produtores. O interessante seria que tudo estivesse dentro da nossa lista como header para que ela possa fazer o scroll e também para que ela possa se auto gerenciar. Aqui ela está fazendo scroll só nela mesma, queremos que o scrool fique na tela inteira.

[13:04] Para isso precisamos passar o topo para dentro de produtores e chamá-lo junto do nosso topo de lista, vamos fazer isso. Aqui no “index.js” da “src > tela/Home > index.js” vamos passar <Produtores topo={Topo} />. Esse topo que estamos chamando aqui como componente vamos deletar daqui, podemos deletar até o fragmento para que ele retorne apenas os produtores mesmo.

[13:36] Salvando, estamos passando como parâmetro o topo, sumiu o topo daqui porque apagamos. Vamos receber isso aqui na nossa lista de produtores, no componente de produtores vamos receber um parâmetro da nossa função que vai se chamar topo. O nosso topo é um componente seria legal que aqui ele ficasse com a primeira letra maiúscula vamos dar export default function Produtores({ topo: Topo }) {. Conseguimos renomear uma propriedade se quisermos.

[14:08] Agora chamamos esse topo aqui dentro do TopoLista, vamos adicionar agora o fragmento dessa vez aqui dentro do TopoLista. O nosso text de título vai ficar dentro de um fragmento e antes dele vamos ter o topo como um componente. const TopoLista = () => { return <> <Topo/ <Text style=(estilos.titulo)>{ titulo }</Text> </> };

[14:29] Salvamos e agora já temos o topo aqui novamente e temos a nossa lista funcionando aqui, scrollando a tela inteira. Ainda tem um detalhe aqui que ela não está a tela inteira, podemos ver que está cortando aqui. Podemos corrigir isso de forma muito simples, vamos aqui dentro do “app.js” que está na raiz do projeto e vamos precisar criar um estilo para a nossa Safe Area View.

[14:56] A safe area view precisa está na tela inteira, precisa expandir para a tela inteira. Vamos fazer isso, vamos criar aqui uma constante estilos const estilos = StyleSheet.creat({ telas: { flex: 1. }, vou chamar de tela porque é tela inteira, e essa tela inteira vai ter flex 1. O flex 1 faz com que o componente se expanda verticalmente o máximo que ele puder. Nessa caso aqui que só temos um componente.

[15:34] Só aplicamos aqui o style dentro da safe area view, estilos ponto tela. function App() { return <SafeAreaView style={estilos.tela}>. Vamos salvar e agora temos o scroll na tela inteira, não está mais cortando aqui o nosso texto.

[15:49] Já preparamos os nossos produtores, já arrumamos o título, precisamos fazer os estilos dos produtores. Te vejo em breve para fazermos isso.

https://pt-br.reactjs.org/docs/hooks-state.html

@@04
useEffect vs ComponentDidMount

Primeiro, você aprendeu a usar o componentDidMount() para chamar uma função específica.
Agora, nós aprendemos a usar o `useEffect()` para chamar uma função.COPIAR CÓDIGO
O UseEffect é uma função que vem do React que, se o segundo parâmetro for uma lista vazia ([]), faz uma ação (apenas uma vez) quando um componente é carregado.

Pensando nisso, qual a vantagem de usar o useEffect() ao invés do componentDidMount()?

Componentes no formato de Classe são muito mais simples que componentes no formato de função.
 
Alternativa correta
O componentDidMount() possui a vantagem de não termos de criar uma classe inteira para chamar a função.
 
Alternativa correta
O useEffect() possui a vantagem de não termos de criar uma classe inteira para chamar a função.
 
Alternativa correta!
Isso mesmo! É muito mais vantajosa, para o desenvolvedor e para o compilador, a utilização de Hooks para chamar funções do que criar classes inteiras apenas para chamar uma simples função. Isso facilita a reutilização da lógica com estado entre vários componentes.

@@05
Estilizar a lista #1

[00:00] Agora vamos arrumar a lista de produtores, vamos fazer esses cards bonitos, colocar imagem no título e a distância.
[00:10] Nós não temos um card, um componente card no React Native, vamos ter que fazer esse card na mão. Vamos voltar aqui na nossa lista dentro de “src > telas/Home > componentes > Produtores.js”. Cada vez que passamos pela lista renderizamos um texto.

[00:37] Para não termos que colocar todos esses componentes aqui dentro, vamos criar outro arquivo que vai ser o componente do produtor que vai ser o card mesmo. Aqui dentro dos componentes da Home vamos criar um novo componente chamado “Produtor.js”. Aqui fazemos o import do React import React from 'react';. E também vamos exportar como default o nosso function component produtor. export default function component Produtor() { };

[01:14] Já vamos ter algumas coisas que vão vir dos nossos produtores. Por exemplo, o nome e se olharmos aqui nos mocks temos todo o resto das informações. Vai ser o nome, a imagem, a distância e as estrelas, vamos fazer isso. export default function Produtor({ nome, imagem, distancia, estrelas }).

[01:31] Vamos receber aqui o nome, a imagem, a distância e as estrelas. É isso que vamos passar para o nosso produtor quando chamarmos ele aqui no Produtores, na nossa FlatList na hora de renderizar o item.

[01:56] Para começar vamos fazer igual já estamos exibindo. Vamos retornar apenas um text com o nome do produtor, return <Text>{ nome }</Text>. Estamos retornando dentro do nosso produtor apenas o componente text.

[02:19] Lembrando que temos que importar o componente text de dentro de React Native. import { Text } from 'react-native';. Agora podemos usar esse componente lá no lugar daquele text que estamos utilizando na nossa lista de produtores. Entramos dentro do componente Produtores, vai até o return <FlatList> e vamos alterar o renderItem.

[02:43] Aqui não precisamos mais selecionar apenas o nome, eu vou remover aqui o parâmetro dois pontos abre e fecha chaves com o nome dentro, vai ser só o item mesmo. E dentro do item temos todas essas informações. Ao invés de chamarmos o text passando o nome vamos chamar o nosso Produtor, daqui a pouco importamos ele, e vamos fechá-lo aqui no mesmo componente não precisamos abri-lo. renderItem={({ item }) => <Produtor />}

[03:13] Passaremos como parâmetro todos os parâmetros que estão dentro do item, {...item} />}. Abrimos e fechamos as chaves três pontos item, isso vai fazer uma desconstrução ali e passar cada parâmetro individual. Vamos ter o nome, a distância, a imagem e as estrelas, exatamente o que precisamos. renderItem={({ item }) => <Produtor {...item} />}.

[03:37] Eu vou salvar e importar também o produtores. Vamos no topo do arquivo de produtores import Produtor from './Produtor';, porque ele é irmão aqui nos componentes, é um componente da home.

[04:00] Vamos dar uma olhada no que está acontecendo aqui no simulador. Nada aconteceu, vou colocar uma letra "a" aqui só para ver se está atualizando corretamente. Todos os produtores agora tem um "a" no final, é isso mesmo está igual como estava antes.

[04:17] Agora vamos começar a montar nossa estrutura, começando com adicionar uma view ao redor de tudo. Vamos adicionar esta view, podemos colocar o texto de nome aqui para dentro e ajustar a indentação aqui. Precisamos importar a view do React Native: import { View, Text } from 'react=native';.

[04:44] A primeira coisa que temos olhando nosso layout aqui é a imagem, vamos adicionar a imagem aqui no começo. A imagem já sabemos, adiciona o componente image do React Native importando aqui também. import { View, Text, Image } from 'react=native';. O image vamos ter o source, a imagem porque já a recebemos por parâmetro, o source vai ser a imagem, depois arrumamos os estilos. E podemos também adicionar um accessibilityLabel, Image source={imagem} accessibilityLabel={nome} />.

[05:16] Esse label vai ser mostrado para as pessoas com deficiência visual, pessoas que usam leitor de tela poderão entender melhor o que é essa imagem por esse accessibilityLabel. E podemos colocar aqui como nome mesmo, ao invés de vir a imagem porque a pessoa com deficiência visual não vai conseguir ver a imagem ela vai ver este texto, ela vai ler este texto, deixamos como nome mesmo.

[05:44] É sempre legal adicionarmos accessibilityLabel para que todas as pessoas possam ter acesso à informação que está nessa imagem. Como nesse caso é uma logo não vai ter muita informação, mas se você está mostrando um diagrama, alguma coisa assim, você pode explicar melhor o que está acontecendo nessa imagem por meio desse accessibilityLabel.

[06:06] Depois da imagem podemos adicionar uma nova view porque vai ter várias informações aqui ao lado, essas informações podem ser agrupadas em uma view. Adicionamos mais uma view e o nome que é o título aqui vai ficar dentro dessa view. <View> <Text>{ nome }</Text>. E temos também a distância, vamos adicionar mais um text aqui para a distância. <Text>{ distancia }</Text>.

[06:39] Já formatamos a distância com a letra no final de metros. Se viermos aqui em “Produtores.js” vamos ver que tem o "m" no final, podemos só exibir isso mesmo. Vamos salvar e olhar como é que está ficando. Aqui no preview, e temos a imagem que está muito grande, temos o texto e os metros embaixo, a distância.

@@06
Estilizar a lista #2

[00:00] Vamos começar a fazer os estilos desse nosso card. Primeiro, vamos criar a área do card aqui, colocar uma margem, uma padding aqui também, uma margem interna. Vamos fazer isso, começando com criar a nossa constante aqui dentro de Produtor, estilos const estilos = StyleSheet.create({ });. E aí vamos criar o estilo dessa view ao redor aqui que é a do cartão, vamos chamar de cartão, e aí podemos setar algumas propriedades aqui como backgroundcolor porque ela tem uma cor um pouco mais cinza.
[00:45] Esse backgroundcolor vai ser backgroundColor: '#F6F6F6', temos a margem vertical que é a margem que estará entre um cartão e outro podemos colocar 8, marginVertical: 8, que vai fazer com que tenhamos na verdade 16, porque vamos ter a margem vertical que é em cima e embaixo de cada cartão, juntando a margem de cima de um cartão e a margem de baixo do outro cartão no fim temos 16 entre cada cartão. E podemos colocar uma margem horizontal dessa vez nas laterais de 16 também,marginHorizontal: 16 ele vai ter a mesma distância do topo, vai ser bem simétrico.

[01:28] Vamos ver como é que está ficando. Na verdade, ainda precisamos setar o estilo, vamos adicionar a tag style dentro da nossa view maior <View style ={estilos.cartao}>. Agora sim, temos alguma coisa. Já temos a margem aqui, temos a distância entre os cartões, a cor do cartão mais cinza. Vou separar aqui para conseguirmos ver o simulador enquanto estamos fazendo as alterações.

[02:02] Agora precisamos fazer essa borda arredondada aqui no cartão porque a borda está bem reta. Fazemos isso utilizando o borderRadius, igual no CSS se você já está acostumado, setamos aqui como 6 borderRadius: 6, por exemplo, e aí temos uma borda arredondada. Agora vamos adicionar o flexDirection como row para que as coisas fiquem uma ao lado da outra, adicionamos aqui com row, flexDirection: "row", salvamos e agora temos com que essa segunda view aqui fique toda aqui do lado.

[02:44] Precisamos ajustar essa imagem, que está muito grande e vamos criar um estilo para a imagem, imagem: { width: 48, height: 48, };. Salvamos, precisamos setar aqui o estilo da imagem, dentro da tag image, <Image source ={imagem} style={estilos.imagem} accessibilityLabel; , agora a nossa imagem já está menor.

[03:28] É interessante colocarmos na imagem uma border Radius para ela também ficar arredonda, aqui na imagem eu vou adicionar borderRadius: 6, e agora ela também está arredondada.Precisamos ainda ajustar a margem da imagem para que ela não fique colada no card, vamos adicionar uma margem vertical e como esse é um componente um pouco mais complexo não vamos adicionar padding diretamente no card, vamos controlar as margens dentro do componente interno do cartão.

[04:09] Vamos adicionar uma margem vertical aqui de 16 para ficar a mesma distância que já temos padrão, em cima e embaixo temos 16 e vamos adicionar também a marginLeft de 16 para ficar um espaço antes, marginVertical: 16, marginLeft: 16,.

[04:28] Agora temos a nossa imagem totalmente ajustada. Agora precisamos ajustar o nome e a distância, para isso precisamos adicionar os estilos na nossa view que tem dentro do nome e a distância.

[04:46] Vamos chamar essa view de informações: {, que vai agrupar as informações, criamos um novo estilo chamado informações e dentro dele teremos algumas coisas, por exemplo, flex : 1 para que ele cresça até o final do nosso cartão, flexDirection: ‘row’ para que tanto o green quanto a distância fiquem uma do lado da outra, vamos adicionar aqui row.

[05:20] Salvamos aqui e precisamos setar as informações, dentro da view vamos adicionar <View style={estilos.informacao}>. Pronto, está um ao lado do outro, mas ainda não está um em cada lado e para fazermos isso podemos colocar o justify content que é a forma como o conteúdo vai está ordenado como space-between. O space-between vai adicionar um espaço entre os elementos, between é entre um e outro em inglês. justfyContent: 'space-between',.

[06:03] Agora temos o nome do nosso produtor de um lado e a distância de outro. Agora precisamos ajustar a margem, vamos adicionar a margem esquerda de 8 pixels marginLeft: 8, para ficar um pouco distante, não precisa ser tão distante, também podemos adicionar a margem vertical de 16 marginVertical: 16 para adicionarmos em cima e embaixo e marginRight de 16 também marginRight: 16,. Agora temos cada coisa em um canto.

[06:44] Agora vamos ajustar a fonte do nome e da distância também porque está um pouco diferente. Vamos criar um novo estilo para o nome, já setamos ele aqui em cima no text, no text onde tem o nome vamos adicionar <Text style={estilos.nome}>{ nome }</Text>. E aí podemos ajustar o font size para 14, nome: { fontSize: 14, lineHeight: 22, fontWeight: "bold", }.

[07:27] Salvamos e vai ficar em negrito aqui com o texto de um tamanho diferente. Agora vamos ajustar a distância também, vamos criar um novo estilo. Vamos no texto da distância e já setá-lo como estilo distância, aqui onde tem a distância sendo exibida coloco <Text style={estilos.distancia}>{ distancia }</Text>.

[08:00] A distância vai ser um pouco mais simples, só vamos alterar o tamanho da fonte mesmo, distancia: { fontSize: 12, lineHeight: 19, };. Salvamos e parece que está legal. Faremos as estrelas mais adiante, mas ainda está faltando uma coisa aqui vamos olhar o preview.

[08:26] Temos uma sombra aqui no nosso cartão, para fazer um cartão mesmo geralmente tem essa sombra. Como fazer essa sombra no React Native? Eu vou abrir o simulador de Android, que eu já deixei aberto, e temos a mesma coisa que está acontecendo aqui no simulador de iOS.

[08:46] Para fazermos a sombra no Android é muito simples, vamos vir aqui no estilo do cartão e adicionar elevation e aí um número que queremos elevar, podemos ir testando para ver. Vou adicionar 4. elevation: 4,. Pronto, já temos a sombra dos nossos cartões.

[09:20] Agora vamos dar uma olhada em como está no iOS. Nada aconteceu, porque elevation é uma propriedade apenas do Android, no iOS temos que fazer a sombra de forma diferente. Por isso é importante testar em várias plataformas, algumas coisas são diferentes.

[09:44] Vamos fazer no iOS. Vou jogar o Android para cá e agora o iOS vai ficar aqui do lado. São algumas propriedades que temos que adicionar, eu vou adicionar aqui como um comentário "Android", o elevation é para Android. Vamos fazer aqui iOS, primeiro temos que escolher uma cor com o shadow Color, cor da sombra, essa cor vai ser preta, #000 // iOS shadowColor: "#000 e precisamos setar também um shadowOffset: { que vai ser um objeto e dentro vamos setar um width: 0 e heigth: 2, };.

[10:38] Salvamos e ainda não aconteceu nada. Por fim, precisamos do shadow opacity shadowOpacity: 0.23 e, por fim, shadowRadius: 2.62, }. Vamos salvar e, agora sim, temos a nossa sombra no iOS. Como vocês podem ver, precisamos de vários componentes, várias propriedades diferentes para fazermos a sombra no iOS.

[11:25] O legal é que você pode encontrar alguns simuladores de sombra na internet que fazem esse cálculo para todo para você. Você pode procurar e ele já gera o código tanto para Android quanto para iOS. Sempre é bom você testar nas duas plataformas pelo menos uma vez quando você terminar a aplicação, tentar testar na plataforma que você quer publicar para ver se está tudo certo com layout, se está tudo funcionando porque algumas diferenças existem mesmo assim.

[11:57] Agora que já temos aqui os cartões estilizados tanto em iOS quanto em Android, podemos ver que não notifica nada no Android essas outras propriedades que adicionamos. Fizemos o nosso componente de produtor, vamos agora adicionar as estrelas para podermos fazer a classificação dos nossos produtores.

@@07
Componente de estrelas #1

[00:00] Agora vamos criar o componente de estrelas, vamos fazer essas estrelas e fazer com que elas possam ser clicadas para selecionarmos uma avaliação diferente para o nosso produtor. Claro que essa avaliação vai ser totalmente em tempo de execução, se abrirmos e fecharmos o aplicativo ela vai resetar novamente e vai para uma avaliação randômica que já setamos no nosso Mock.
[00:27] Vamos criar o nosso componente de estrelas. Como ele é um componente mais genérico, podemos adicioná-lo em uma pasta componentes dentro do próprio “src” supondo que queiramos usar as estrelas em outro lugar depois.

[00:42] Vamos criar, dentro de “src”, uma pasta chamada “componentes” e dentro dela vamos criar a “estrelas.js”. É um componente, import React from ´react';. Nós também vamos exportar o nosso componente: export default function Estrelas() { };.

[01:24] Para adicionar os parâmetros dentro da nossa função estrelas precisamos saber quantas estrelas são originalmente. Vamos pegar aqui a quantidade. Como vamos mudar essa quantidade internamente, vamos renomear essa quantidade para quantidade antiga, que é a quantidade original do nosso estrela, mas quando mudarmos pode ser uma quantidade diferente, quantidade: quantidadeAntiga;.

[01:55] Vamos receber o parâmetro quantidade, mas aqui dentro do componente vamos tratar essa quantidade como quantidadeAntiga, vamos chamar dessa forma e não mais de quantidade. Nós também podemos fazer com que essas estrelas sejam editáveis, pode ser que você consiga clicar na estrela e a quantidade de estrelas mude.

[02:21] Vamos passar aqui, editável, pode ser editável mesmo ou o nome que vamos chamar, mas por padrão vai ser false porque vamos ter as nossas estrelas aqui pequenas, dessa forma aqui, só que assim fica muito difícil clicar. Vamos fazer com que quando clicarmos no cartão as estrelas fiquem maiores e aí quando elas ficarem maiores conseguimos clicar e editá-las, editavel = false,.

[02:51] Para isso vamos ter essa outra propriedade de grande, quando a estrela for grande podemos setá-la como editável. Vamos separar essas propriedades para que possamos deixar mais manipulável o nosso componente, mais genérico. Vamos setar aqui como false também, originalmente ela não vai ser grande, mas pode vir a ser, grande = false,.

[03:14] Já temos as nossas propriedades da estrela. Agora precisamos começar a colocar as estrelas dentro da tela mesmo. Vamos chamar essa propriedade estrelas dentro do nosso Produtor, vamos chamá-la logo abaixo do nome. Dentro do produtor temos a nossa view de informações e o nome dentro, vamos criar outra view para armazenar só o nome e as estrelas.

[03:52] Vamos adicionar essa outra view aqui dentro da view de informações e dentro dela vamos ter o nome e as estrelas. <View> <Text style={estilos.nome}>{ nome }</Text>. Importamos o componente que acabamos de criar: <Estrelas /> utilizando as estrelas e importando ele: import Estrelas from '../../../componentes/Estrelas';.

[04:30] Precisamos passar as informações que estamos pedindo aqui na estrela. Para testarmos vamos retornar dentro do componente de estrelas alguma coisa, inicialmente pode ser só um text com estrelas ou um asterisco para simular uma estrela, return <Text>*</Text>.

[04:48] Vamos importar o text de React Native: import { Text } from 'react-native';. Salvamos e aqui também precisamos salvar e pronto, temos uma estrela aqui embaixo. Era isso mesmo que queríamos, queríamos que ficasse embaixo do green. Não precisamos mais mexer muito nos estilos aqui do nosso produtor.

[05:17] Vamos só passar como parâmetro o que estamos querendo receber que é principalmente a quantidade de estrelas. Vamos passar a quantidade como sendo igual abre e fecha chaves as estrelas, que é o já estamos recebendo aqui em cima. <Estrelas quatidade={estrelas} />, que é o que já estamos usando aqui em cima. Agora vamos, finalmente, usar essa propriedade.

[05:44] Nada acontece ainda porque não temos nada printado aqui como um texto. Precisamos agora percorrer, fazer um for pela quantidade de estrelas, vamos sempre percorrer 5 estrelas e vamos preencher apenas as estrelas que estarão aqui nessa quantidade.

[06:04] Primeiro vamos importar essa estrela de fato que é a imagem, já temos a pasta de imagens aqui dentro de “src > assets” e temos a estrela e a estrela cinza, temos a estrela preenchida e a não preenchida. Vamos importar essas duas estrelas aqui no nosso componente de estrelas: import estrela from '../assets/estrela.png';, esse é o nome dela “estrela.png”.

[06:45] Agora vamos copiar aqui e aqui no VS Code podemos selecionar os dois nomes de estrela, selecionei estrela e usando “Command + D” ou "Ctrl + D" e eu posso editar os dois ao mesmo tempo e aí é estrela cinza. import estrelaCinza from '../assets/estrela.png';. Salvamos e nada acontece ainda.

[07:10] Vamos trocar esse text aqui pela estrela, adicionamos uma image source igual a estrela. return <Image source=(estrela) />. Precisamos importar image de React Native aqui no lugar do text: import ( image ) from 'react-native'; e temos uma estrela gigantesca.

[07:33] Vamos ajustar o tamanho da estrela com os estilos. const estilos = StyleSheet.create(); e vamos chamar esse estilo aqui de estrela mesmo. estrela: { }. Inicialmente podemos setar o width como 12 e o heigth como 12 também, width: 12 e height: 12, }. Precisamos aplicar esse estilo, dentro da imagem vamos adicionar return <Image source=(estrela) style(estilos.estrela) />.

[08:19] Salvamos e agora temos uma estrela bem pequena embaixo do nome do nosso produtor. Agora como fazemos para que esse width e esse height sejam maiores quando a propriedade grande que for true, agora a propriedade grande é false. Precisamos fazer uma verificação aqui, se for grande vai ser 12, se não for grande vai ser 36, por exemplo, um tamanho maior.

[08:49] Para fazermos isso precisamos com que esses estilos sejam uma função ao invés de serem estáticos aqui, só estamos criando. Vamos mudar um pouco, vamos fazer uma função. Os estilos, podemos chamá-los até de estilos função que é uma função que vai retornar o style sheet create e vamos ter grande como parâmetro, vamos ter esse valor aqui dentro do nossos estilos, const estilosFuncao = (grande| => styleSheet.create|{.

[09:20] Se for grande, podemos fazer um if em line aqui, uma condição em line dentro da nossa linha, se for grande vai ser 36 se não vai ser 32. width: grande ? 36 : 32,. A mesma coisa aqui no height, se for grande vai ser 36 se não for vai ser 32. height: grande ? 36 : 32,.

[09:39] Precisamos agora ter esses estilos dentro do nosso componente de função, porque agora temos esse estilo função. Fazemos assim: no começo da nossa estrela, do nosso componente aqui dentro da função, criamos uma constante de estilos e ela vai ser igual a chamada da nossa função passando como parâmetro o grande, const estilos = estilosfuncao(grande);

[10:02] Salvamos e continua a mesma coisa porque não é grande aqui. Vamos mudar aqui o padrão de grande para true, já que não estamos passando esse grande pela estrela. grande = true,. Salvamos e pronto, agora temos a estrela grande. Podemos deixar false aqui: grande = false,. E está funcionando essa parte.

[10:22] Agora vamos adicionar uma view aqui no return para que possamos retornar mais estrelas. Vamos adicionar duas estrelas aqui, precisamos importar a view também aqui do React Native. import ( view, Image, StyleSheet ) from 'react-native';. Salvamos e as duas estrelas estão uma embaixo da outra, mas não era isso que queríamos.

[10:47] Precisamos ajustar essa view aqui, passar um estilo para ela e fazer com que o flex direction dela seja row para que uma fique ao lado da outra. Vou chamar aqui o novo estilo estrelas: { flexDirection: 'row',.

[11:15] Setamos o nosso estilo nessa nova view que criamos style igual a estilos ponto estrelas. return <View style=(estilos.estrelas)>. Pronto, agora está uma ao lado da outra. Ainda podemos aqui ser um pouco mais chatos e colocar um margin right na estrela como sendo 2, para dar um espaço. marginRight: 2. Agora as nossas estrelas estão espaçadas uma ao lado da outra.

@@08
Componente de estrelas #2

[00:00] Para adicionar todas as estrelas que queremos precisamos adicionar um for , um looping de repetição. Nós não conseguimos fazer um for da forma tradicional aqui dentro do nosso componente, vamos criar aqui mesmo, dentro da nossa função Estrelas, um render, um componente interno, um mini componente. Ele vai se chamar const: RenderEstrelas = () => { };.
[00:35] Dentro desse render estrelas faremos o que quisermos, se quisermos fazer for fazemos for. Vamos fazer uma renderização, um for, e adicionar dentro de uma array as nossas estrelas. Vamos criar um array de estrelas e depois exibir esse array. Primeiro, vamos criar essa lista, pode ser uma constante lista estrelas que é o nosso array, a nossa lista. const listaEstrelas = [];. Vamos fazer um for let, que vai ser nosso contador, for (let 1 = 0; 1 < 5: i++) { };, vamos percorrer a nossa quantidade de estrelas.

[01:28] A cada vez que percorrermos, vamos adicionar uma nova estrela nessa lista de estrelas. Vamos chamar a lista de estrelas ponto push e o push vai adicionar no fim da nossa lista alguma coisa, que é o nosso item. Podemos adicionar aqui a nossa imagem de estrela, vamos pegar essa imagem aqui e adicionar dentro do push mesmo. listaEstrelas.push <Image source=(estrela) style=(estilos.estrela) /> };. Vamos salvar e nada acontece ainda porque não estamos usando essa lista de estrelas e no fim retornamos essa lista estrelas. return listaEstrelas;

[02:15] Agora ao invés de utilizarmos essas duas imagens vamos tentar utilizar aqui esse <RenderEstrelas />. Vamos salvar e agora temos 5 estrelas em cada um, todas preenchidas. Já temos um erro aqui, um alerta que diz que todos os filhos da lista precisam ter um key único e é verdade, sempre precisamos ter uma key. Ao criar um elemento dentro de uma lista precisamos adicionar essa propriedade key que deve ser única.

[02:53: Vamos fazer isso, mas não teremos só a imagem aqui vamos ter uma imagem que é clicável porque vamos poder clicar nas estrelas depois. Vamos passar aqui ao redor dessa image que está dentro do push um touchable opacity que é aquele componente do React Native que permite que façamos um botão e que esse botão dê aquela sensação de opacidade quando clicamos. O <TouchableOpacity>; vai ser o botão da nossa estrela quando colocarmos a imagem aqui dentro e aqui nesse touchable opacity podemos adicionar a key como sendo o i mesmo, o iterador que vai ser 0 até 4. key=(1);.

[03:46] Precisamos ainda de um onPress, vai ter alguma ação ao clicarmos nesta estrela, por enquanto podemos deixar essa ação vazia mesmo. onPress=({} => {});. E vamos ter também o disable que é quando ainda não podemos editar que será quando podemos, ou seja, negação exclamação editável. disable={!editavel};. Vamos salvar e nada acontece aqui o botão não está sendo clicado, vamos mudar aqui o default para grande e editável por isso adicionamos o true aqui tanto do grande quanto no editável. editavel = true, grande = true,. Se clicarmos agora podemos ver a opacidade funcionando.

[04:33] Agora vamos fazer com que as estrelas sejam a quantidade certa que veio daqui, porque não estamos utilizando essa variável de quantidade ainda. Primeiro vamos setar um state para armazenar essa quantidade de estrelas, const[ quantidade, setQuantidade ] = useState(quantidadeAntiga);, a quantidade antiga é a quantidade que veio do nosso componente de estrelas que passamos lá pelo produtor.

[05:13] Por padrão, vamos começar com a quantidade, mas vamos poder alterá-la quando formos clicando. Vamos usar essa quantidade e precisamos decidir qual é o source da estrela dependendo da quantidade, quando vamos passar é que vamos verificar se a quantidade de estrelas é maior do que a quantidade vamos começar a colocar as estrelas cinzas.

[05:40] Vamos criar um método, antes do render, para ele escolher essa imagem. Vamos criar aqui constante get image que vai ser um método e nesse método vamos fazer um if, se o index que vamos passar aqui como parâmetro vai ser esse i aqui de cada laço do nosso for, se esse index for menor que a quantidade de estrelas que já recebemos vamos retornar a estrela pintada, const getImage = (index) => { if (index < quantidade) se não fazemos um return estrela cinza. { return estrela; }, return estrelaCinza; }.

[06:39] E aí vamos utilizar esse get image no lugar do nosso source da estrela, aqui ao invés adicionarmos na imagem da estrela diretamente a estrela vamos chamar o get image passando o i como parâmetro, o nosso index. Image source=(getImage[i]} style=(estilos.estrela) />. Vamos salvar e agora já temos a quantidade de estrelas pintadas aqui.

[07:03] Ainda falta podermos clicar nelas e alterar. Para isso vamos para o nosso onPress, quando fazemos o onPress vamos alterar essa função vazia para um método que vai setar a quantidade, podemos usar o nosso estado de quantidade que criamos antes, onPress={() => setQuantidade(i + 1)};. Isso porque aqui a quantidade começa do 0 e a nossa quantidade sempre vai ser 1 a 5.

[07:37] Se eu clicar na estrela na posição 0, essa primeira aqui, quer dizer que temos 1 estrela, a quantidade vai ser 0 + 1 que é 1. Vamos salvar e vamos testar, agora estamos clicando nas estrelas e elas estão modificando.

[07:57] Vamos voltar para o editável e grande false porque precisamos fazer com que quando clicamos no cartão é que essas coisas vão acontecer. Agora precisamos voltar para o nosso “Produtor.js”, no nosso componente produtor ao invés desse cartão ser uma view precisamos que ele seja um clicável, ele precisa ser um touchable opacity.

[08:22] Vamos primeiro importar o touchable opacity do React Native, import ( TouchableOpacity ) from 'react-native';, e trocamos aqui a view por touchable opacity, precisamos trocar o fechamento dela também. A primeira e a última view serão touchable opacity e mantemos o estilo. Se salvarmos continua a mesma coisa, mas já podemos clicar.

[08:52] Precisamos fazer com que quando clicamos as estrelas se expandam, fiquem maiores. Vamos criar aqui um state, um estado const igual a useState para que verifique se estamos expandindo ou não as nossas estrelas const [ selecionado, setSelecionado ] = useState();. Lembra de importar o useState ele já importou automaticamente, tem que importar de React e vai ser selecionado e setSelecionado. Vamos ter aqui se o nosso cartão está selecionado ou não, se ele vai ser expandido ou não.

[09:33] Agora precisamos passar essa selecionado aqui para dentro da nossa estrela. Por padrão, o nosso selecionado vai ser falso porque vamos ter as estrelas pequenas e quando tivermos o selecionado como true aqui nas nossas estrelas vamos passar além da quantidade, editável.

[10:00] Quando ele estiver selecionado ele é editável,quantidade=(estrelas) editavel=(selecionado) e também grande, a propriedade de expandir, grande=(selecionado) />;. Se quiséssemos fazer com que essas propriedades sejam independentes, se não quiséssemos deixar como grande só editável, poderia ser também. Nesse caso os dois vão ser a mesma coisa, selecionado.

[10:27] Agora quando clicamos no nosso cartão, no touchable eu passo o nosso cartão precisamos adicionar a propriedade onPress e quando clicamos é que vamos alterar esse selecionado. Vai ser uma função que vai setar o selecionado como sendo um não selecionado, ele vai inverter sempre essa seleção, se for true vai virar false e se for false vai virar true, return <TouchableOpacity style={estilos.cartao} onPress=(() => setSelecionado(selecionado);

[10:58] Vamos salvar e ver o que acontece. Cliquei aqui e expandiu, agora cliquei nas estrelas e ele trocou as estrelas, cliquei novamente e ele diminuiu. Já fizemos o nosso componente de estrelas que é clicável, editável e podemos expandi-lo e deixar de expandir. Inclusive, podemos adicionar vários aqui e o nosso scroll também está funcionando.

[11:27] No próximo, vamos ajustar esse nosso componente de estrelas porque ele ficou bem grande, vamos separar um pouco ele e um outro componente. Te vejo no próximo vídeo.

@@09
Refatorando as estrelas

[00:00] E agora que já terminamos todas as funcionalidades da nossa aplicação, já fizemos os cards que são clicáveis e podemos mudar as estrelas em tempo de execução, é claro, se fecharmos e abrirmos o aplicativo de novo as estrelas irão mudar porque é aleatório e não salva em algum lugar de fato, salva só no estado que é usado em tempo de execução. Podemos olhar novamente o nosso código e ver se tem alguma coisa que podemos refatorar e melhorar o nosso código.
[00:31] Pensando mais no código mesmo e não na performance, podemos ver que esse componente de estrelas tem a função de exibir as estrelas que elas sejam grandes, pequenas, de clicar também e mudar. Poderíamos encapsular essa estrela em um componente de estrela e as estrelas usariam esse componente de estrela dentro.

[00:55] Vamos criar um componente chamado estrela aqui dentro do "src/componentes", vou criar um novo arquivo aqui chamado “estrelas.js”. Importamos: import React from 'react'; e também vamos exportar como default o nosso componente, export default function Estrela() { }; e retornamos alguma coisa o componente de estrela em si.

[01:31] O componente de estrela em si é esse touchable opacity, isso aqui que tem que estar dentro. Eu vou recortar daqui, retirar utilizando as teclas "Ctrl + X" e remover de dentro do render estrelas onde estamos fazendo o push, vou tirar o que está dentro do push e vou fazer return aqui. Agora temos que importar as coisas que vão ficar faltando aqui, precisamos do touchable opacity, vamos importar do React Native: import { touchableOpacity } from 'react-native';. Temos também uma imagem, vamos importar o image de React Native: import { touchableOpacity, Image } from 'react-native';

[02:21] Não precisamos mais dessa key aqui porque já não é mais um for, aqui depois temos que passar lá de novo para o componente e o onPress aqui é o setQuantidade(i + 1);, mas não sabemos o que é i, não sabemos nem o que é a quantidade aqui dentro dessa estrela só sabemos que ela foi clicada, vamos fazer mais genérico aqui. Vamos fazer aqui estrela e nos parâmetros da estrela vamos ter um método que vai se chamar onPress parecido com esse touchable mesmo. export default function Estrela({ onPress }), quando ela for clicada vamos chamar esse método onPress.

[02:57] Quem vai se preocupar com o setQuantidade e "i + 1" serão as estrelas, o nosso componente de estrela. No caso do disable vamos deixar mais genérico também e vai ser se a estrela está desabilitada ou habilitada. Podemos chamar de desabilitada mesmo export default function Estrela({ onPress, desabilitada }), se essa propriedade for true quer dizer que não vamos poder clicar na estrela, ela não vai ter o touchable, por isso passamos simplesmente disable=desabilitada.

[03:32] Agora vamos ver como faremos para mostrar a imagem da estrela. A imagem da estrela vem por meio desse getImage que está no nosso arquivo de estrelas, nós que fizemos ele aqui. Vamos recortar esse método e colar aqui em cima do return da nossa função Estrela, movemos o método getImage que estava nas estrelas aqui para estrela. Vou alterar para ser getImagem já que estamos trabalhando com o código em português, para mostrar que esse código é nosso, uma função que nós fizemos. const getImagem = (index) => {.

[04:12] Nós passávamos como parâmetro o index, não temos mais esse index, não sabemos que index é aqui, por isso não precisamos passar isso como propriedade. Na verdade, a propriedade da estrela mesmo, vai ser se ela está preenchida ou não.

[04:30] Eu vou pressionar "Enter" aqui para deixar as propriedades uma abaixo da outra e outra propriedade vai ser aqui preenchida, eu vou passar para a estrela se ela vai está preenchida ou não. Aqui no getImagem se index é menor do que quantidade? Não, não sabemos disso será se preenchida, que vai ser um parâmetro que vou passar para a minha estrela, retornamos estrela se não retornamos a estrela cinza. const getImagem = (| =o= { if (preenchida) { return estrela; } return estrelaCinza; }

[04:59] Essas estrelas nós não a importamos no arquivo de estrelas porque elas estavam aqui no nosso componente de estrelas. Eu vou recortar aqui das nossas estrelas e colocar aqui no nosso arquivo de estrela a estrela e a estrela cinza, a importação das nossas estrelas. import estrela from '../assets/estrela.png'; import estrelaCinza from '../assets/estrelaCinza.png';

[05:22] Agora eu vou utilizar esse método getImagem aqui onde estamos pegando o source da imagem, eu vou tirar o i e vou acrescentar o m porque mudamos o nome para getImagem. <Image source={getImagem[]} style={estilos.estrela} />.

[05:35] Agora já estamos pegando a imagem de acordo com a estrela preenchida ou não. Faltam ainda os estilos e só temos o estilo da estrela, aqui o estilo da estrela podemos copiar o estilo função todo. Não vou recortar porque tem algumas partes que ainda ficaram lá. Vou copiá-lo aqui no nosso estrela no final e aí vamos ter que saber se essa estrela é grande ou não, precisamos saber.

[06:10] Vai ser mais um parâmetro que vamos receber quando chamamos a estrela grande, vou até colocar uns defaults aqui, uns padrões. Desabilitada vai ser true porque ela começa pequena, grande vai ser false vai começar pequena. export default function Estrela({ onPress, desabilitada = true, preenchida, grande = false, }).

[06:32] Podemos remover esse estilo de estrelas porque esse estilo só está sendo usado lá nas nossas estrelas, o que queremos aqui mesmo é o estilo de estrela. Vou remover essas estrelas do nosso componente de estrela para ficar só a estrela mesmo. Chamamos o estilosFuncao aqui no começo do nosso componente e temos que passar como parâmetro se ele é grande ou não e podemos armazenar o resultado dessa função na nossa constante de estilos. const estilos = estilosFuncao(grande);

[07:15] Aqui já estamos utilizando estilos ponto estrela e o nosso componente de estrela está completo. Agora vamos usar esse componente de estrela lá no nosso componente de estrelas, tanto que aqui já vemos que sumiu porque recortamos, recortamos do push da lista, por isso não temos mais nenhuma estrela.

[07:34] Agora aqui no push das estrelas quando damos listaEstrelas.push vamos colocar a estrela <Estrela |>. Abrimos o componente de estrela que fecha nele mesmo e temos os parâmetros da estrela, precisamos passar o onPress, desabilitada, preenchida e grande, vamos passar essas variáveis.

[07:57] Onpress vai ser o que tínhamos antes mesmo, tínhamos uma função que setava a quantidade sendo "i + 1". Aqui continuamos a ter essa lógica de não está dentro da estrela e sim de está fora, está genérica por fora da estrela, assim podemos fazer com que uma ação de dentro aconteça lá fora. <Estrela onPress=[() => setQuantidade(i + 1)]

[08:31] Depois do onPress temos desabilitada que vai ser se ela está editável ou não. Ela vai estar desabilitada quando ela não for editável. <Estrela desabilitada={!editavel}/>. Por fim temos preenchida e grande. A estrela está preenchida quando o i for menor que a quantidade, o i é o número da estrela, a posição da estrela. Quando a posição for menor que a quantidade de estrelas máxima vai preenchendo, a partir do momento que o i passar desse limite de quantidade aí serão essas estrelas cinzas, as estrelas que não estão preenchidas. <Estrela preenchida={i < quantidade} />.

[09:27] E vamos passar também a propriedade grande, podemos passar direto grande grande porque já recebemos como parâmetro as nossas estrelas. <Estrela grande={grande} />;.

[09:37] Vamos ajustar os nossos estilos também. Agora não precisamos mais de uma função estilos aqui para estrelas porque só estávamos usando grande aqui na estrela que já foi lá para o outro componente. Vamos remover essa parte da estrela aqui, removemos também essa função e vamos chamar de estilos mesmo porque não é mais uma função. Então const estilos = StyleSheet.create({ estrelas:.

[10:05] Agora podemos remover essa parte aqui dentro do nosso componente que chama o estilo função porque os estilos já estão sendo declarados aqui embaixo.

[10:17] Vamos testar. Salvamos e temos um erro que não podemos encontrar a variável estrela. Claro, nós nem importamos ela. Vamos importá-la e também arrumar os outros imports. Primeiro começando com os imports, podemos remover a imagem, o touchable e otouchable opacity.

[10:38] Esse touchable na verdade estava aqui por engano, talvez adicionamos por engano porque nem estávamos usando. import { View, StyleSheet } from 'react-native';. Vamos importar a estrela: import Estrela from './Estrela';, ela é irmã da estrelas.

[10:59] Ainda faltou aqui nas estrelas importarmos o style sheet, vamos vir aqui: import: { TouchableOpacity, Image, StyleSheet } from 'react-native';. Salvando e recarregando temos as estrelas novamente nos lugares delas, mas temos um erro que diz que cada filho em uma lista tem que ter uma key única.

[11:20] Ficou faltando adicionarmos a key porque removemos a key do touchable opacity e passamos novamente para estrela. Dentro do componente estrelas onde fazemos o push da estrela vamos passar uma key que pode ser o i. key=(i);.

[11:38] Salvamos e não tem mais esse erro agora. Agora refatoramos as nossas estrelas para que ficasse um componente de estrelas e um componente da estrela mesmo, da parte só da estrela que vai procurar a imagem, aqui tem várias lógicas dentro dela. E as estrelas fazem essa junção de todas as cinco estrelas.

[12:03] Feita essa refatoração é importante que você olhe o seu código mesmo e veja se precisa refatorar para que o código fique melhor visível para as outras pessoas que podem ter acesso a esse código ou para você mesmo no futuro lembrar o que você fez depois. Fica mais fácil você entender refatorando as coisas e deixando sempre mais legível possível.

[12:26] Como podemos melhorar e usar mais Hooks na nossa aplicação? Em breve vamos avançar com os Hooks e vermos mais Hooks que o React Native disponibiliza.

@@10
Para saber mais: Alternativas para o iOS

Nesta aula, prestamos atenção aos estilos tanto para Android quanto para iOS. No entanto, é muito comum que não tenhamos o hardware específico da Apple para que possamos testar no iOS.
Pensando nisso, será que existem alternativas mais baratas para que possamos validar nossa aplicação para iOS também?

Sim! Não são opções gratuitas, porém, hoje em dia é possível alugar máquinas e acessá-las via internet, como os serviços:

MacinCloud;
Virtual MacOSX.
Também é possível, porém não recomendado e com alta incidência de incompatibilidades de hardware, criar máquinas virtuais dentro de outros sistemas operacionais, instalando o MacOS.

Caso você queira usar alguma dessas alternativas, ainda sim precisa seguir os passos do artigo de configuração para preparar o ambiente de iOS na sessão "Aplicações com React Native iOS".

https://www.macincloud.com/

https://virtualmacosx.com/

https://www.alura.com.br/artigos/configurando-o-ambiente-react-native?_gl=1*1q8r1v6*_ga*MTgwMzIzMjk2Ni4xNjg4ODE5OTcz*_ga_1EPWSW3PCS*MTcwMjQxOTA1Ni4xMjguMS4xNzAyNDIwNjI1LjAuMC4w*_fplc*V0JKS2Z1OG1ITFdMZmROU2EyOGh2dVNZcFRBVnBxVUtNV2dGZHdOcUNsRkYlMkJLdkUxYW9PTjhiTThXNE5TNlQxNVNkc1FPJTJCYlJiS0NCYkpzdzhHM3FlSHB4enI5MGNQcjNWUFFBYnF3b2RzODE0M3kyMVR2UlolMkZsOGhDS05BJTNEJTNE

@@11
Faça como eu fiz

Chegou a hora de você seguir todos os passos realizados por mim durante esta aula. Caso já tenha feito, excelente. Se ainda não, é importante que você execute o que foi visto nos vídeos para poder continuar com a próxima aula.

Continue com os seus estudos, e se houver dúvidas, não hesite em recorrer ao nosso fórum!

@@12
O que aprendemos?

Nessa aula, você aprendeu a:
Modificar a lista de produtores do app Orgs:
Aprendemos o que são os Hooks, uma nova adição do React Native que nos permite a fazer ações de classe dentro dos componentes de função. Vimos um exemplo de Hooks que é o UseEffect e como os componentes de função são mais recomendados.
Usar o State do Hook:
Aplicamos o Hook de useState para criar um estado na lista de produtores do app Orgs.
Criar uma lista de produtores:
No app Orgs, criamos uma lista de produtores. Renderizamos os textos da lista com o renderItem. Implementamos estilos para mostrar uma lista bem bonita no app!
Estilizar a lista de produtores:
Estruturamos a lista, adicionando uma View. Depois inserimos as imagens dos produtores, com um accessibilityLabel para permitir que pessoas cegas possam usar o app! Aplicamos estilos de cor, margens, borda arredondada, alinhamento, distância, tamanho da fonte, sombra no cartão.
Adicionar as estrelas para classificar produtores no App:
Criamos, na pasta src, o componente de estrelas que podem ser clicadas pelo usuário para avaliar os produtores. As propriedades foram a quantidade, tamanho etc. Aplicamos um estilo de tamanho e largura condicionais em função das propriedades das estrelas.
Refatorar as estrelas:
Para diminuir o tamanho do código, organizamos e enxugamos o componente de estrelas.

#### 18/12/2023

@04-Avançando com Hooks

@@01
Projeto da aula anterior

Caso queira começar o curso daqui, você pode baixar o projeto da aula anterior neste link.
Lembre-se: se você baixar um projeto do zero, rode os comandos npm install para baixar as dependências do node. Se for rodar para iOS, digite cd ios && pod install para baixar as dependências nativas de iOS, beleza? Depois de fazer isso, você pode prosseguir no curso!

@@02
Criando um Hook

[00:00] Agora já temos a nossa aplicação pronta, já otimizamos algumas coisas nas estrelas. Vamos avançar um pouco mais com Hooks. Mas antes de vermos outros Hooks que o React Native nos proporciona, vamos criar nosso próprio Hook, é possível que você crie seu próprio Hook.
[00:23] Para fazer isso, primeiro vamos identificar algum lugar onde possamos utilizar esse Hook. Aqui dentro de “src > Telas/Home > componentes > Produtores.js", vamos ver como carregamos os produtores da nossa aplicação. Temos o useEffect aqui que vai chamar o método de carregar produtores e vamos setar o título, setar a lista e isso vai está dentro de um estado.

[00:53] Vamos simplificar isso em um Hook chamado UseProdutores, vamos chamar o Hook que vai nos retornar o título e a lista sem que precisemos fazer tudo isso aqui dentro do componente de produtores. Dentro de "src" vamos criar uma pasta chamada "hooks" e aí podemos criar um arquivo chamado “useProdutores.js”.

[01:29] Agora que criamos um arquivo js começamos importando React, só que não precisamos fazer isso porque não vamos retornar nenhuma tag aqui dentro, mas vamos usar sim o useState e useEffect, precisamos só importá-los. import { useState, useEffect } from 'react';

[02:06] Importamos isso daqui e agora vamos exportar como default uma função como se estivéssemos fazendo um componente. export default function useProdutores() {. O Hook também é uma função, por isso vamos retornar alguma coisa.

[02:32] O Hooke de useState retorna título, o estado, e uma função para setarmos o estado e podemos passar por um parâmetro também o estado inicial. Aqui chamamos produtores e temos como retorno o título e a lista, é isso que vamos retornar.

[02:53] Vamos retornar aqui entre um array, retornamos um array que vai ter o título e a lista. return [titulo, lista];. Nós temos essas variáveis como estados, podemos pegar esses estados aqui dentro de produtores, o estado de título e o estado de lista e jogar aqui dentro do useProdutores. export default function useProdutores() { const [titulo, setTitulo] = useState(' '); e const [lista, setLista] = useState( []);

[03:18] Passamos os estados que estavam lá nos produtores para dentro do Hook “useProdutores.js”. Agora já temos o nosso título e a nossa lista, essas variáveis já existem aqui. Fazendo isso, usando um Hook aqui dentro dessa função, já transformamos essa função em um Hook. Ela é como se fosse um componente, mas sem retorno de tags aqui dentro, retornamos estados mesmo.

[03:53] Agora precisamos fazer o useEffect lá dentro também, vamos copiar esse useEffect aqui e colocar dentro do “useProdutores.js”. Já importamos useEffect, temos o retorno que vai carregar produtores, por isso precisamos importar o carregar produtores também.

[04:12] Copiamos aqui e colamos aqui, mas temos que nos atentar que estamos em outra pasta agora, estamos dentro da pasta “hooks”, o carregaProdutores está aqui em serviços. Vamos voltar somente uma pasta, voltamos uma pasta e entramos em serviços. Ao invés de voltar três pastas, volta só uma pasta. import { carregaProdutores } from './servicos/carregaDados';

[04:41] Vou salvar e nada está acontecendo porque não estamos chamando esse Hook ainda. Já temos aqui o setTitulo e o setLista que já estão inclusos no nosso useState, já temos esses métodos. Teoricamente o nosso Hook já é para estar funcionando.

[04:57] Agora temos tudo isso aqui que é o que passamos para o Hook. Eu vou comentar nesse caso só para verificarmos a diferença entre um código e outro, eu vou selecionar aqui e vou apertar "Command + barra" ou "Ctrl + barra", caso esteja no Windows. Esse aqui eu também posso comentar porque não estamos usando.

[05:20] Agora ao invés de importarmos isso aqui e fazer tudo isso, primeiro vamos importar o nosso Hook. import useProdutores from '../../../hooks/useProdutores;, voltamos três pastas, entramos em hooks e chamamos o useProdutores. Agora usamos o nosso Hook de forma muito simples, criamos uma constante que vai ter um array e que por sua vez vai ter o valores que estamos retornando aqui que são o título e a lista const [titulo, lista] = useProdutores();

[06:17] Agora vamos salvar e nada mudou porque já está funcionando, já temos aqui o nosso título e a nossa lista sendo buscados diretamente do nosso Hook. Olha só como fica mais legível, temos o useProdutores que retorna o título e a lista, só isso. Não precisamos mais criar um estado para o título, criar um estado para a lista, fazer o useEffect para que ele carregue cada vez que esse componente for carregado, podemos simplificar as coisas apenas em useProdutores.

[06:55] Se quiséssemos, por exemplo, chamar esses produtores em alguma outra tela da nossa aplicação no futuro bastaria fazer isso daqui, não precisamos criar os estados e o useEffect novamente, o que é bem legal.

[07:11] Vou apagar aqui os comentários, mas fica muito visível que diminui o código dentro do nosso componente de produtores. Vou apagar os comentários e temos isso daqui. Nós importamos o Hook de useProdutores e usamos ele no nosso componente de produtores. E no useProdutores só passamos o que estava dentro dos Pordutores para cá mesmo, muito simples.

[07:42] Nos próximos vídeos vamos ver como utilizamos Hooks mais avançados do React Native. Já fizemos o nosso próprio Hook, agora vamos utilizar outros Hooks aqui porque temos o useEffect, o useState, mas se digitarmos aqui use tem vários outros Hooks que podemos usar que vêm do React também. Te vejo em breve.

@@03
Hook de redução

[00:00] Nessa aula veremos sobre o Hook de redução. Vamos dar uma olhada em "Telas/Home > componentes > Produtor.js", no nosso Produtor temos o nosso estado selecionado, quando temos o nosso card selecionado ele vai expandir e quando clicamos ele sempre troca, ele sempre é setado como uma negação. Clicamos, ele expande, clicamos e ele "desexpande", ele seleciona e desseleciona.
[00:40] Podemos simplificar isso e passar esse método de inverter já aqui dentro, como se fosse dentro do useState que já dizemos o que vai acontecer quando chamarmos o método. Não vamos utilizar o useState, nesse caso vamos usar o useReduce.

[00:58] Vamos dar uma olhada na documentação o que ele fala sobre esse useReduce. Eu vou abrir a documentação dessa vez do React e não do React Native porque os Hooks existem tanto no React quanto no React Native, eles vêm do React mesmo.

[01:13] Vamos digitar aqui “hooks” e já temos aqui “hooks api de referência”, vamos ver essa API de referência dos Hooks, na documentação acessível neste link.

[01:31] Aqui já temos vários Hooks que o React Native disponibiliza, temos alguns Hooks básicos, o useState, o useEffect que já vimos, e temos alguns Hooks adicionais, também tem o useContext que provavelmente veremos mais para frente em outro curso. O useReduce está aqui como um Hook adicional.

[01:53] Vamos clicar nele e vemos que ele é uma alternativa para o useState. Inclusive, se você quiser acessar isso em português, pode vir aqui em languages e trocar para português do Brasil.

[02:15] Vamos abrir aqui novamente a API de referência dos Hooks dessa vez em português e é só colocar um “pt-br” na frente da URL. Temos o useReduce que é uma alternativa para o useState e ele aceita um tipo que vai ser uma função, primeiro vai ser um estado e uma ação que retorna um novo estado.

[02:39] Aqui temos um exemplo, mas podemos ver que na documentação fica bem complexo. Temos o estado, um dispatch que vai ter um reducer, um método que vai ter uma ação, um tipo, podemos simplificar muito isso.

[02:55] Isso aqui no caso de você estar habituado com Redux, por exemplo, você já vai entender mais ou menos o que é isso aqui. Vamos usar, na nossa aplicação, uma coisa que faz mais sentido para nós, que se aproxima da simplicidade.

[03:11] Vamos usar o useReducer dessa forma aqui, vamos ter um estado que vai ser o selecionado, vamos ter um dispatch que vai ser o método que vai ser o método que vai fazer o toggle, que vai trocar. Quando chamarmos esse dispatch ele vai trocar o valor do estado, invertê-lo.

[03:33] Aqui o useReducer, vamos passar primeiro um método que vai fazer isso, que vai fazer a inversão do nosso estado e o estado inicial que vai ser false porque inicialmente ele não estará selecionado.

[03:49] Vamos fazer isso. Aqui temos o nosso useState, vou comentá-lo para escrevermos aqui embaixo. const [selecionado, inverterSelecionado], invertemos e fazemos igual a useReducer. const [selecionado, inverterSelecionado] = useReducer;

[04:25] Lembrando que precisamos importar o useReducer aqui do React, eu apertei enter e ele já importou sozinho. Agora eu vou dar um enter aqui só para vocês conseguirem ver melhor, vamos ter o primeiro parâmetro um método, esse método vai inverter a seleção vai pegar o selecionado e vai inverter.

[04:47] Vamos olhar aqui, o que temos aqui no reducer são dois parâmetros: o estado e a ação. No nosso caso não vamos precisar da ação, não precisamos ter um tipo, não vai ter esse switch case aqui só queremos fazer uma coisa, só queremos inverter.

[05:08] Vamos ter o nosso estado, vamos ter o nosso estado atual. E dependendo do que retornamos vamos mudar o nosso estado atual. O primeiro parâmetro é o selecionado, é o estado atual e queremos inverter o estado atual, vamos retornar a inversão do selecionado. const [selecionado, inverterSelecionado] = useReducer( (selecionado) => !selecionado;

[05:30] Já temos o nosso método que pega o estado atual que é o selecionado e invertemos esse selecionado. Vamos fazer uma vírgula aqui e o segundo parâmetro é o nosso valor inicial que vai ser o mesmo que está no useState false. const [selecionado, inverterSelecionado] = useReducer( (selecionado) => !selecionado, false );

[05:50] Agora vamos usar esse método inverter selecionado ao invés desse setSelecionado invertido que temos aqui no onPress do touchableOpacity. Vamos apagar tudo isso aqui e é só jogá-lo aqui como o inverterSelecionado não precisamos mais fazer esse outro método.

[06:12] Vamos salvar aqui e abrir a nossa aplicação. Já recarregou aqui e se clicarmos continua funcionando. Imagina agora se tivéssemos uma lógica muito complexa aqui dentro, aqui só estamos invertendo, mas se tivéssemos uma lógica muito complexa poderíamos fazer tudo isso aqui em cima no useReducer e chamamos apenas esse método que é chamado de dispatch. Esse método faria essa lógica toda dentro do reducer.

[06:45] Com isso simplificamos o nosso inverterSelecao. Essa inverterSelecao é uma coisa mais para visualizarmos como pessoa desenvolvedora. Nós, desenvolvedores, veremos essa mudança, mas para o usuário pouco importa.

[07:09] Nos próximos vídeos vamos ver Hooks que fazem com que o usuário perceba essa mudança, que utilizem o nosso aplicativo. No caso de ser um aplicativo muito pesado, vai melhorar a experiência para o usuário como um todo na questão de performance.

[07:27] Vou apagar essa linha que está como comentário e nos próximos vídeos vamos fazer isso. Te vejo em breve.

https://pt-br.reactjs.org/docs/hooks-reference.html

@@04
Hooks existentes

Imagine que você foi contratado por uma empresa de jogos (Nintendo) para criar um aplicativo de celular.
Nesse aplicativo, existe um botão no formato de Pokébola, e quando você clica nessa Pokebola, ela abre.

Porém, o código para alterar a Pokébola não está simplificado:

const [ clicado, setClicado ] = useState(false);

return <TouchablePokeball
        style={style.pokeball}
        onPress={() => setClicado(!clicado)}
>
...COPIAR CÓDIGO
Pensando nisso, como podemos melhorar esse código usando o useReducer?

const [ clicado, inverterClicado ] = useReducer(
(clicado) => !clicado,
false
);

return <TouchablePokeball
        style={style.pokeball}
        onPress={inverterClicado}
>
...
 
Alternativa correta!
Acertou! Muito bem! Usando o useReducer, podemos simplificar a alteração do estado da Pokébola quando clicamos nela, e tem mais: podemos reutilizar o código com muito mais facilidade agora!

@@05
Hook de memória

[00:00] Agora que já usamos os Hooks para melhorar a qualidade do nosso código, utilizamos o useReducer e criamos o nosso próprio Hook customizável, vamos pensar um pouco em como podemos melhorar a performance da nossa aplicação usando Hooks.
[00:13] Vamos focar aqui na distância do nosso produtor, temos um número e metros. Isso vem dos mocks “produtores.js”, aqui temos a distância que é um número aleatório entre 1 e 500 mais letra "m" no final. Vamos supor que queiramos botar esse "m" lá dentro do nosso produtor usando uma função, ao invés de já devolvermos ele aqui com o "m".

[00:41] Caso queiramos ordenar por distância, por exemplo, pode ser uma boa termos um número aqui e não essa string. Vamos remover, eu vou utilizar as teclas "Ctrl + F" aqui para pesquisar tudo o que é esse gerarNumeroAleatorio e aí eu vou expandir aqui para fazer um replace para gerar número aleatório de 1 a 500 sem o "m" no final. Vai ser basicamente igual está nas estrelas, só que de 1 a 500.

[01:08] Vou clicar aqui para atualizar os 5 produtores. Agora temos só um número, não temos mais uma string aqui, vou salvar os nossos produtores. Já atualizei aqui, como é um número aleatório sempre vai mudar e atualizou aqui para ficar só o número sem o "m" no final.

[01:29] Agora vamos vir aqui nos nossos produtores, dentro de “telas/Home > componentes > Produtor.js” e aí aqui dentro de Produtor vamos adicionar esse m. Vamos vir aqui depois do reducer que fizemos, vou criar uma constante chamada distanciaEmMetros e aqui vai ser uma função que vai fazer essa distância em metros em si. Ela vai retornar basicamente a mesma coisa que tínhamos lá, a nossa distância vou abrir essas crases aqui, usar o cifrão e os colchetes para chamar a distância e um "m" no final. const distanciaEmMetros = () => { return '${distancia}m' }

[02:13] Aí eu vou chamar essa distância em metros aqui em baixo para que ela seja armazenada em uma string, distância texto igual a distância em metros. const distanciaTexto = distanciaEmMetros();.

[02:32] Aí podemos remover esse método const distanciaEmMetros aqui de dentro porque ele não necessariamente está utilizando essa variável distancia, podemos passar essa variável por parâmetro, distancia e metros vai receber a distância e jogamos esse método aqui para fora do nosso componente, supondo que ele pode vir até de um arquivo externo. const distanciaEmMetros = (distancia) => { return `${distancia}m`;

[02:53] Distancia e metros vamos ter aqui fora que vai retornar a distância e aqui dentro vai ser distância texto igual a distância em metros passando como parâmetro a distância. const distanciaTexto = distanciaEmMetros(distancia);. Já ficou amarelo aqui, quer dizer que estamos usando ele. E aí no lugar de usarmos a distância aqui dentro do último text vamos passar distanciaTexto. <Text style=(estilos.distancia)>( distanciaTexto )</Text>.

[03:13] Salvamos e agora temos a nossa distância de volta como estava antes. Vamos colocar aqui, antes dessa distância em metros, um console.log, só para ver o que acontece, vou colocar um console.log('distanciaEmMetros');. Cada vez que aparecer esse texto quer dizer que ele chamou esse método.

[03:38] Vamos dar uma olhada no nosso console, distanciaEmMetros apareceu cinco vezes porque temos cinco produtores. Agora vamos clicar aqui e chamou de novo, por quê? Toda vez que eu clico aqui em cima de um dos produtores ele está chamando novamente, isso é porque o nosso componente foi atualizado, mudou aqui a inverter selecionado e aí quando clicamos mudamos a selecionado.

[04:06] E aí ele está fazendo essa distância novamente. Imagina se essa distância em metros fosse um método muito complexo que demorasse para carregar, seria bem lento para a nossa aplicação, além que poderia até consumir mais dados do usuário se isso aqui estivesse fazendo uma requisição para internet ou coisa do tipo.

[04:26] O que podemos fazer para melhorar isso é usar o useMemo, vamos importar aqui junto do useReducer o useMemo. O useMemo salva esse valor na memória, podemos pegar um valor e salvar na memória para que ele não fique sendo recarregado sem necessidade.

[04:50] Eu vou vir aqui em distanciaTexto = useMemo e aí eu abro parênteses e vou fazer uma função aqui que vai retornar essa distância em metros e aí o segundo parâmetro do useMemo vai ser um array com os valores que eu quero que quando eles forem alterados a distanciaTexto vai ser alterada.

[05:14] É parecido com o useEffect também. O que eu quero que aconteça é que sempre que a distância for alterada, a distanciaTexto seja alterada. Se o selecionado for alterado pouco importa, não faz mal, não tem problema, não precisa ser alterado. Vou colocar aqui embaixo só para ficar mais visível e o segundo parâmetro vai ser um array com a distância, apenas isso. const distanciaTexto = useMemo( () => distanciaMetros(distancia), [distancia] };.

[05:40] Vou salvar aqui e pronto, temos aqui a nossa aplicação normal. Vamos dar uma olhada como é que está aqui no nosso terminal. Esse aqui foi o último, vou selecioná-lo para vermos. E agora se eu clico não acontece mais, não está mais gerando um monte de distância em metros ela só está sendo chamada uma vez. Vou recarregar aqui e quando recarrega chama cinco vezes. Cliquei, cliquei aqui também e não atualiza o método novamente.

[06:11] Agora, por exemplo, se eu adicionar o selecionado aqui no array, ele vai começar a atualizar porque o selecionado mudou. Vamos voltar aqui para o terminal e cada vez que eu clico ele vai mudar porque eu coloquei o selecionado como uma variável de dependência desse useMemo, mas eu não quero isso, só quero a distancia mesmo.

[06:36] Pronto, agora eu melhorei, otimizei a performance aqui para que ele não fique chamando esse método em vão. No nosso caso aqui isso estava lá no nosso Mock, mas é só para exemplificar mesmo o uso do useMemo.

[06:51] Poderíamos usar também o useCallBack que é muito semelhante ao useMemo só que ele salva na memória uma função também. Caso você queira saber mais sobre Hooks basta vir aqui na documentação do React dentro do site do React mesmo, não precisa ser do React Native, pesquisamos como Hooks e já vimos aqui que dentro de Hooks podemos vir, por exemplo, nesse menu “Hooks API Reference” do lado direito que é o setting e aqui vamos ter vários Hooks.

[07:23] Aqui está o useMemo, ele retorna um valor memorizado. Lembra que você pode trocar aqui a documentação também para PT-BR, “pt-br.reactjs.org” agora estamos em português brasileiro. Ele vai receber uma função e ele também só vai recuperar o valor quando o array receber uma atualização.

[07:47] Aqui na documentação também tem o useCallBack que é a mesma coisa só que para uma função. Agora vamos ver o que fizemos no nosso projeto, temos a nossa aplicação com o expandir aqui que podemos setar valores diferentes de estrelas na nossa aplicação, fazendo também esse useMemo aqui da nossa distância. Agora podemos usar a nossa distância para ordenar, por exemplo, podemos ordenar por distancia se quisermos. Também fizemos essa lista de produtores otimizada. Com isso, já vimos a maioria dos Hooks de React.

@@06
Para saber mais: Outros Hooks

Neste curso, aprendemos a utilizar vários hooks e até mesmo a criar o nosso próprio hook. A documentação do React lista os hooks como sendo:
Hooks Básicos:

useState: usado para gerenciar estados;
useEffect: usado para gerar efeitos colaterais a certas atualizações;
useContext: usado para gerenciar contextos entre componentes distintos.
Hooks Adicionais:

useReducer: uma alternativa ao useState quando há lógicas complexas;
useCallback: memoriza uma função, que só é atualizada quando os valores recebidos como argumento são atualizados;
useMemo: semelhante ao useCallback, mas ao invés de função, armazena um valor;
useRef: usado normalmente para acessar propriedades de componentes “filhos”;
useImperativeHandle: usado para personalizar o valor da instância que será acessível aos componentes “pais”;
useLayoutEffect: semelhante ao useEffect, porém é disparado na mesma fase que componentDidMount e componentDidUpdate. É preferível o uso do useEffect;
useDebugValue: usado para definir um "label" em hooks customizados que irá aparecer somente em ferramentas de debug.
Caso queira saber mais sobre cada hook do React, acesse esta página da documentação.

@@07
Desafio: Ordenar produtores!

Se você quiser, neste desafio você pode fazer a ordenação dos produtores!
Como já isolamos a distância em números, ao invés de texto, podemos ordenar os produtores por ela. Também é possível ordenar por quantidade de estrelas ou nome, por exemplo.

Comece apenas ordenando por um desses parâmetros, existe até um método do JavaScript que ordena listas. Não vale ordenar por nome direto no mock, viu?

Tente completar este desafio antes, mas, se tiver dúvidas ou quiser um passo a passo para saber a resolução, clique abaixo - porém indicamos fortemente que você tente realizar o desafio por conta própria antes de consultar a solução do desafio.

Resolução do desafio:
Para concluir o desafio, você só precisa ordenar a lista por um dos parâmetros. Assim, o exemplo abaixo ordena a lista por distância dentro do hook de useProdutores.

import { useState, useEffect } from 'react';

import { carregaProdutores } from '../servicos/carregaDados';

export default function useProdutores() {
   const [titulo, setTitulo] = useState('');
   const [lista, setLista] = useState([]);

   useEffect(() => {
       const retorno = carregaProdutores();
       retorno.lista.sort(
           (produtor1, produtor2) => produtor1.distancia - produtor2.distancia,
       );
       setTitulo(retorno.titulo);
       setLista(retorno.lista);
   }, []);

   return [titulo, lista];
}COPIAR CÓDIGO
Neste caso, usamos o método sort das listas em JavaScript, que altera a lista atual para a ordem desejada.

Caso queira acessar diretamente o commit e ver as mudanças, clique aqui!

https://github.com/alura-cursos/react-native-utilizando-e-criando-hooks/commit/cfcef9e81d6a05ccdb6d35b335a8bbaf263607bc

@@08
Faça como eu fiz

Chegou a hora de você seguir todos os passos realizados por mim durante esta aula. Caso já tenha feito, excelente. Se ainda não, é importante que você execute o que foi visto nos vídeos para poder continuar com os próximos cursos que tenham este como pré-requisito.

Continue com os seus estudos, e se houver dúvidas, não hesite em recorrer ao nosso fórum!

@@09
O que aprendemos?

Nessa aula, você aprendeu a:
Criar seu próprio Hook:
Aprendemos a criar um Hook personalizado para o nosso aplicativo, a fim de facilitar a reutilização da função em outros pontos do código.
Utilizar o Hook Reducer:
Vimos como o useState pode complicar a criação de métodos complexos, portanto, para que não tenhamos problemas com funções extensas, usamos o useReducer, que simplifica lógicas extensas.
Utilizar o Hook de Memória:
Com o useMemo, temos a possibilidade de escolher os estados que vão ser atualizados de acordo com o método, melhorando a performance do aplicativo (uma vez que ele não precisa recarregar todos os estados sempre que algum deles mudar).
Parabéns por chegar até aqui!

@@10
Conclusão

[00:00] Parabéns por chegar até aqui e terminar mais um curso de React Native. Nesse curso criamos o nosso próprio aplicativo utilizando o React Native CLI, a interface de linha de comando do React Native mesmo, onde geramos os códigos nativos e instala o ambiente nativo de cada plataforma que queremos publicar o nosso aplicativo.
[00:19] Nesse aplicativo utilizamos Hooks, utilizamos Hooks de estado, Hooks de efeito que são useState, o useEffect. Nós também utilizamos useReducer para criar um método customizável de alteração do nosso estado, nós também utilizamos o useMemo para salvar um valor e evitar recarregamentos desnecessários e até criamos o nosso próprio Hook aqui, criamos o Hook useProdutores para carregar os produtores lá do nosso serviço que fizemos pegando do Mock mesmo.

[00:56] Esse aqui é aplicativo final, criamos uma lista de produtores onde podemos classificar com estrelas em tempo de execução, é claro, elas são aleatórias e cada vez que recarregarmos a aplicação vai mudar, mas ficou muito legal.

[01:12] Com esses conceitos eu quero que você crie o seu próprio aplicativo do seu jeito e compartilhe nas redes sociais para vermos o seu progresso aqui utilizando os cursos da Alura. Não esqueça que se você tiver alguma dúvida, algum elogio ou alguma ideia você pode compartilhar lá no fórum. Pois vamos sempre olhar lá para te ajudar, para te responder.

[01:36] E também agora, na próxima parte, você pode avaliar esse curso, dê uma nota, escreva um comentário para sempre melhorarmos nossos cursos aqui na Alura. Te vejo no próximo curso!

@@11
Produção deste curso

Este curso foi produzido pela equipe de mobile da Alura, incluindo principalmente:
Natalia Kelim Thiel - Instrutura;
Caio Couto Moreira - Instrutor;
André Oliveira Cunha - Instrutor;
Alex Felipe - Instrutor e tech lead;
Chris Rosa - Didática;
Flávia de Oliveira - Produtora de Vídeo.