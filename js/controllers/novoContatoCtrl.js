angular.module('listaTelefonica').controller("novoContatoCtrl", function ($scope, $location, contatosAPI, serialGenerator, operadoras) {

    $scope.operadoras = operadoras.data;

    // Adicionar
    $scope.addContato = function (contato) {

        contato.serial = serialGenerator.generate();

        // angular.copy para não alterar a informação adicionada e só adicionar a informação copiada
        // $scope.contatos.push(angular.copy(contato));
        contatosAPI.saveContato(contato).then(function (data) {
            console.log(data)
            // limpar dado
            delete $scope.contato;

            // retornar o formulario limpo novamente
            $scope.contatoForm.$setPristine();
            $location.path("/contatos");
        });


    };

    $scope.voltarListaContatos = function () {

        return $location.path("/contatos")


    };


});
