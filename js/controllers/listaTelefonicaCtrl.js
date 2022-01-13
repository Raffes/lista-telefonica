angular.module('listaTelefonica').controller("listaTelefonicaCtrl", function ($scope, contatos, operadoras, serialGenerator) {

    $scope.title = "Lista Telefônica";

    $scope.contatos = contatos.data;

    $scope.operadoras = operadoras.data;


    // gerar serial
    let generateSerial = function (contatos) {
        contatos.forEach(function (item) {
            item.serial = serialGenerator.generate();
        });
    };

    // Dicas
  // Apagar
    $scope.apagarContatos = function (contatos) {
        // os que não foram selecionado coloque na lista de contatos
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });

    };

    // verifica se tem algum contato selecionado
    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });

    };

    // ordena por meio do click
    $scope.ordenarPor = function (campo) {
        $scope.ordenacao = campo;
        $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
    }

    
    generateSerial($scope.contatos);
});
