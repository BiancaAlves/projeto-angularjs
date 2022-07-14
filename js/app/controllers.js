// controler: semelhante ao arquivo TS do Angular 2
// $scope: permite acessar atributos e métodos do controller no HTML
angular
  .module("myModule")
  .controller("indexController", function ($scope) {
    $scope.title = "Home";
    var alunoEditando;

    $scope.alunos = [
      {
        nome: "Bianca",
        email: "bianca@gmail.com",
        nota1: 10,
        nota2: 8,
        nota3: 7,
      },
      {
        nome: "Daniela",
        email: "dani@gmail.com",
        nota1: 8,
        nota2: 7,
        nota3: 8,
      },
      {
        nome: "Julia",
        email: "julia@gmail.com",
        nota1: 7,
        nota2: 9,
        nota3: 8,
      },
    ];

    var init = function () {
      $scope.alunos.forEach(function (aluno) {
        aluno.media = media(aluno);
      });

      limpaForm();
    };

    // Para declarar uma variável que funcione só no js, usar var
    var media = function (aluno) {
      return (
        (parseFloat(aluno.nota1) +
          parseFloat(aluno.nota2) +
          parseFloat(aluno.nota3)) /
        3
      ).toFixed(1);
    };

    // Métodos no scope: Podem ser usados no HTML

    $scope.abreAddAluno = function () {
      $scope.editando = false;
      limpaForm();
      $(".modal").modal("open");
    };

    $scope.addAluno = function (Aluno) {
      Aluno.media = media(Aluno);
      $scope.alunos.unshift(Aluno);
      $(".modal").modal("close");
      limpaForm();
    };

    $scope.abrirEditarAluno = function (Aluno) {
      $(".modal").modal("open");
      $scope.editando = true;

      // Realiza uma cópia do parâmetro Aluno pro ngModel Aluno, sem passar a referência
      angular.copy(Aluno, $scope.Aluno);
      alunoEditando = Aluno;
    };

    $scope.editarAluno = function (Aluno) {
      alunoEditando.nome = Aluno.nome;
      alunoEditando.email = Aluno.email;
      alunoEditando.nota1 = Aluno.nota1;
      alunoEditando.nota2 = Aluno.nota2;
      alunoEditando.nota3 = Aluno.nota3;
      alunoEditando.media = media(Aluno);
      $(".modal").modal("close");
    };

    $scope.deletarAluno = function (Aluno) {
      for (var index in $scope.alunos) {
        var aux = $scope.alunos[index];
        if (aux === Aluno) {
          if (confirm("Deseja excluir o(a) aluno(a) " + Aluno.nome + "?")) {
            $scope.alunos.splice(index, 1);
          }
        }
      }
    };

    var limpaForm = function () {
      $scope.Aluno = {
        nome: "",
        email: "",
        nota1: "",
        nota2: "",
        nota3: "",
      };
    };

    init();
  })
  .controller("contatoController", function ($scope) {
    $scope.title = "Contato";
  });
