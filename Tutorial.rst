Tutorial de AngularJS
=====================

Neste tutorial propomos resolver uma tarefa comum em aplicações Web que é a submissão de formulários (como formulários de login, cadastro, etc.) utilizando AngularJS 1. Um diferencial deste tutorial é que ele tenta seguir algumas boas práticas no desenvolvimento utilizando AngularJS.

O resultado deste tutorial pode ser visto `aqui <https://italopaiva.github.io/angular-tutorial>`_.

O que é AngularJS ?
-------------------


AngularJS é um framework estrutural para criação de aplicações web dinâmicas que permite extender a sintaxe
do HTML básico para criar componentes para a sua aplicação, abstraindo a manipulação do DOM.
Esta é só uma parte do que o AngularJS pode fazer,
pois ele é um framework completo para criar soluções do lado cliente da aplicação.

O AngularJS é ideal para criar *Single Page Applications* (SPA)!


Porque AngularJS?
-----------------

Como foi dito, o AngularJS é um framework completo para desenvolvimento do lado cliente de aplicações, permitindo desacoplar muito bem a apresentação da aplicação das regras de negócio implementadas no lado servidor. Além disso,
o AngularJS foi construído com testabilidade em mente, o que possibilita testes fáceis e funcionais, permitindo maior confiabilidade no código.

**Por que o Angular 1 e não o 2 ou 4?**

O Angular 1 (vamos utilizar a versão 1.6.x, que é a última 1.x até então) é uma versão utilizada por várias aplicações existentes e conta com diversos plugins e diretivas prontas para auxiliar no desenvolvimento.
Enquanto o Angular 2 e 4 não se popularizarem mais, o Angular 1 ainda terá um grande espaço no mercado.


Instalação
----------

A forma mais simples de "instalar" o Angular é baixando o arquivo minificado e adicionando-o na sua página ou referenciando um CDN (vamos utilizar esta abordagem no tutorial para facilitar).
Ambos podem ser obtidos na página oficial do `AngularJS <https://angularjs.org/>`_.

Uma outra alternativa mais manutenível é utilizar um gerenciador de pacotes, como o `NPM <https://www.npmjs.com/>`_ que é o gerenciador de pacotes default do NodeJS.
Você provavelmente vai querer utilizar um gerenciador de pacotes, pois isso facilita a sua vida na hora de gerenciar as bibliotecas do seu projeto.

Instruções para instalar o Node e o NPM podem ser encontradas `aqui <https://nodejs.org/en/download/>`_.

Após instalar o NPM, execute :code:`npm init` e responda às perguntas para criar o arquivo de configuração do NPM (package.json).
O arquivo *package.json* guarda as informações sobre as dependências do projeto.

Com o NPM instalado e configurado, execute :code:`npm install angular --save` para instalar o AngularJS.
Note que uma pasta chamada *node_modules* será criada para comportar as dependências instaladas pelo NPM.
Além disso, a flag :code:`--save` diz para o NPM que a biblioteca solicitada é uma dependência do projeto e deve ser mantida no arquivo *package.json* (dê uma olhada no seu *package.json* para ver se o Angular não está por lá).

Uma breve introdução ao Angular
-------------------------------

O Angular possui uma arquitetura modular, ou seja, é possível descrever sua aplicação como um conjunto de módulos
independentes que se comunicam entre si para realizar o seu propósito.


De nada adianta utilizar um framework modular e criar apenas um módulo..
DIVIDA SEU PROJETO EM PEQUENOS MÓDULOS!

Folha de estilo e boas práticas para angular podem ser encontradas no repositório do `John Papa <https://github.com/johnpapa/angular-styleguide>`_.


*Hello World!* em AngularJS
---------------------------

Para quê se limitar em saudar apenas o mundo, se é possível escolher o que você deseja saudar?

`Check it out <https://italopaiva.github.io/angular-tutorial/app/hello-world.html>`_

.. code-block:: html

    <!DOCTYPE html>
    <html ng-app>
      <head>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
      </head>
      <body>
        <div>
          <label>Name:</label>
          <input type="text" ng-model="thing" placeholder="Name something to salute...">
          <hr>
          <h1>Hello {{ thing }}!</h1>
        </div>
      </body>
    </html>

A diretiva *ng-app* inicia a aplicação Angular, informando qual o módulo principal da aplicação (por isso é colocada em elementos principais da página (tags <html> ou <body>)).

Utilizando a diretiva *ng-model* do Angular, podemos armazenar o valor que será digitado no campo em uma variável
e utilizá-la em qualquer outro lugar. O Angular 1 utiliza a ligação de dados bidirecional (*two-way data binding*), ou seja,
assim que o valor do campo mudar, o valor da variável é atualizado e propagado.

Legal, não é?!

Formulário de login em Angular
==============================

Agora que já temos uma noção básica do Angular, vamos ver como criar um formulário simples de login que realizaria autenticação em algum servidor de back-end, que é a proposta do tutorial.

Vamos lá, então!

O módulo principal
------------------

Primeiramente vamos criar o nosso módulo principal, que comportará toda a aplicação. Vamos criar uma pasta chamada *app/*, criar um arquivo chamado *app.module.js* para armazenar o nosso módulo, que vamos chamá-lo de *app* também:

.. code-block:: javascript

    (function(){
        'use strict'

        angular.module('app', []);
    })();


.. role:: javascript(code)
   :language: javascript


O código que cria o módulo *app* é a linha :javascript:`angular.module('app', []);`.
O método :code:`module` recebe dois argumentos, o primeiro é o nome do módulo e o segundo é um array contendo as dependências do módulo (as dependências são outros módulos angular).

  **IMPORTANTE**: Se o método :code:`module` for usado passando a lista de dependências, um módulo será criado (como se fosse um *setter*). Se o método :code:`module` for usado somente com o nome do módulo, o módulo solicitado será retornado (como se fosse um *getter*).

A criação do módulo está envolvida em uma IIFE (*Imediately Invoked Function Expression*) para isolar o escopo deste componente, como descrito pela folha de estilos do `John Papa <https://github.com/johnpapa/angular-styleguide/tree/master/a1#iife>`_. Todos os componentes que formos criar serão envolvidos em IIFE.


A página HTML principal
-----------------------

Agora que já temos o nosso módulo principal, vamos criar a página e declará-lo como módulo principal com a diretiva :code:`ng-app` na tag <html>. Vamos chamá-la de *index.html* e colocá-la na pasta *app/*.

.. code-block:: html

  <!DOCTYPE html>
  <html ng-app="app">
    <head>
      <title>Angular Tutorial</title>
      <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>

      <!-- Lembre-se de carregar seus arquivos javascript -->
      <script src="app.module.js"></script>

    </head>
    <body>
      <a href="auth/login.html">Login Page</a>
    </body>
  </html>

Colocamos um link para a página de Login para simplificar o tutorial. Geralmente, SPAs possuem sua página principal e utilizam recursos como o *ng-view* ou *ui-router* para realizar a troca dinãmica de páginas.

Carregamos o arquivo `app.module.js` diretamente na página também para simplificar o tutorial. Existem diversas alternativas para carregar os arquivos javascript da sua aplicação, como o automatizador de tarefas Gulp e o Browserify, por exemplo. Como este não é o foco do tutorial, vamos abstrair essa parte.


A Autenticação (Login)
----------------------

Lembra que o Angular é modular? Pois é, vamos criar um novo módulo para conter tudo relacionado à autenticação.
Vamos criar uma pasta chamada *auth* dentro da pasta *app*, previamente criada, e criar o arquivo *auth.module.js* para declarar o nosso módulo de autenticação, que chamaremos de '*app.auth*' (é uma boa prática explicitar a hierarquia dos módulos no nome do módulo).

.. code-block:: javascript

  (function(){
      'use strict'

      angular.module('app.auth', []);
  })();

Como o nosso módulo principal agora vai depender do módulo auth para ter alguma funcionalidade de autenticação, devemos declarar o módulo '*app.auth*' como dependência do módulo principal.

O arquivo '*app.module.js*' ficará assim agora:

.. code-block:: javascript

  (function(){
      'use strict'

      angular.module('app', [
        'app.auth'
      ]);
  })();


A página de login
-----------------

Dentro da pasta '*app/auth*' vamos criar uma página HTML que será a nossa página de login, vamos chamá-la de '*login.html*'. Esta página conterá o formulário HTML para realizar o login:

.. code-block:: html

  <!DOCTYPE html>
  <html ng-app="app">
    <head>
      <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
      <script src="../app.module.js"></script>
      <script src="auth.module.js"></script>
    </head>
    <body>
      <form novalidate>
          <label for="username">Username</label>
          <input type="text" name="username">
          <br>
          <br>
          <label for="password">Password</label>
          <input type="password" name="password">

          <br><br>
          <button>Login</button>
      </form>
    </body>
  </html>


A Controller de Login
---------------------

Agora, vamos atrelar este formulário a uma controller do angular, para podemos controlar o fluxo da nossa aplicação.

Primeiramente vamos criar a nossa '*LoginController*' dentro do módulo '*app/auth*' em um arquivo chamado '*login.controller.js*':

.. code-block:: javascript

  (function(){
      'use strict';

      angular.module('app.auth').controller('LoginController', LoginController);

      LoginController.$inject = [];

      function LoginController(){
          var vm = this;

          vm.login = login;

          vm.user = {
              username: '',
              password: ''
          };

          function login(){
              // Implementation of the login operation here
          }
      }
  })();

Utilizamos o método :code:`controller` do angular em algum módulo (perceba que criamos essa controller dentro do módulo '*app.auth*') para criar uma controller. O primeiro argumento é o nome da controller e o segundo é uma função que representa a controller. A propriedade **$inject** serve para declarar as dependências daquela controller para que a injeção de dependência do Angular funcione corretamente mesmo com minificação dos arquivos fonte.

Uma boa prática é utilizar o **vm** (*View Model*) na controller (ver `explicação do John Papa <https://github.com/johnpapa/angular-styleguide/tree/master/a1#controlleras-with-vm>`_) para capturar o contexto corrente do objeto (o *this*).

Outra boa prática utilizada é o padrão *Revealing Module*, que diz que a API de um componente deve ser declarada antes de suas implementações (ver `explicação do John Papa <https://github.com/johnpapa/angular-styleguide/tree/master/a1#accessible-members-up-top>`_).


Agora vamos linkar a página de login com a controller de Login.
Isto pode ser feito com a diretiva :code:`ng-controller.
Para linkar os dados informados pelo usuário para alguma variável na controller vamos utilizar a diretiva :code:`ng-model`.
Pra registrar uma função da controller que será acionada quando o botão for clicado, vamos utilizar a diretiva :code:`ng-click`.

.. code-block:: html

  <!DOCTYPE html>
  <html ng-app="app">
    <head>
      <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
      <script src="../app.module.js"></script>
      <script src="auth.module.js"></script>
      <script src="login.controller.js"></script>
    </head>
    <body ng-controller="LoginController as ctrl">
      <form novalidate>
          <label for="username">Username</label>
          <input type="text" name="username" ng-model="ctrl.user.username">
          <br><br>
          <label for="password">Password</label>
          <input type="password" name="password" ng-model="ctrl.user.password">

          <br><br>
          <button ng-click="ctrl.login()">Login</button>
      </form>
    </body>
  </html>

É uma boa prática utilizar a sintaxe *controllerAs* para receber uma nova instância da controller, evitar colocar muita coisa no $scope e permite acessar a API da controller através de um objeto na view (ver `explicação do John Papa <https://github.com/johnpapa/angular-styleguide/tree/master/a1#controlleras-view-syntax>`_).
A variável declarada como *as* (*ctrl* no exemplo acima) representa o *vm* na controller.
