// angular: palavra reservada do AngularJS
angular
  .module("myModule", ["ngRoute"])

  // Configurando rotas
  .config(function ($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "./../../templates/home.html",
        controller: "indexController",
      })
      .when("/contato", {
        templateUrl: "./../../templates/contato.html",
        controller: "contatoController",
      });

    // Configurando home como padrão
    $routeProvider.otherwise({ redirectTo: "/home" });
  });
