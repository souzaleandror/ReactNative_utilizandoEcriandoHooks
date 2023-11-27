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