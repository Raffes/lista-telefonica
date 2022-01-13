angular.module("listaTelefonica").factory("contatosAPI", function ($http, config) {
    let _getContatos = function () {
        return $http.get(config.baseUrl + "/contatos.js");
    }

    let _getContato = function (id) {
        return $http.get(config.baseUrl + "/contatos.js/" + id);
    }

    let _saveContato = function (contato) {
        return $http.post(config.baseUrl + "/contatos.js", contato);
    }

    return {
        getContatos: _getContatos,
        getContato: _getContato,
        saveContato: _saveContato
    };
});
