Tutorial de AngularJS
=====================

Neste tutorial propomos resolver uma tarefa comum em aplicações Web que é a submissão de formulários (como formulários de login, cadastro, etc.) utilizando AngularJS 1.

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