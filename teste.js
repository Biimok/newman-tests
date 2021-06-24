const newman = require('newman');

newman.run({
    collection: './postman-files/Simple Book API.postman_collection.json', //Collection.json path or URL.
    // environment: './postman-files/Environment.json' //Environment.json path, URL or env variaveis como um objeto.
    // {
    //   "id": "4454509f-00c3-fd32-d56c-ac1537f31415",
    //   "name": "test-env",
    //   "values": [
    //       {
    //           "key": "token",
    //           "value": "999999999999",
    //           "type": "text",
    //           "enabled": true
    //       }
    //   ],
    //   "timestamp": 1404119927461,
    //   "_postman_variable_scope": "environment",
    //   "_postman_exported_at": "2016-10-17T14:26:34.940Z",
    //   "_postman_exported_using": "Postman/4.8.0"
    // },
    //
    // envVar: // env variaveis em um array como objetos key-value string.
    //[
    //   {key:'token', value:'999999999999'}
    // ]
    //
    // globals: '.postman-files/Globals.json' //Global.json path, URL or global variaveis como um objeto.
    // {
    //   "id": "5bfde907-2a1e-8c5a-2246-4aff74b74236",
    //   "name": "test-env",
    //   "values": [
    //       {
    //           "key": "alpha",
    //           "value": "beta",
    //           "type": "text",
    //           "enabled": true
    //       }
    //   ],
    //   "timestamp": 1404119927461,
    //   "_postman_variable_scope": "globals",
    //   "_postman_exported_at": "2016-10-17T14:31:26.200Z",
    //   "_postman_exported_using": "Postman/4.8.0"
    // },
    //
    // globalVar: // env variaveis em um array como objetos key-value string.
    //[
    //   {key:'token', value:'999999999999'}
    // ]
    //
    // iterationCount: 10, // número de iterações que a collection irá rodar.
    //
    // iterationData: './postman-files/testzim.json', // DataSource.json/csv or URL para ser usada como data quando rodando
    // múltiplas iterações.
    //
    // folder: 'Livros', // nome ou ID da pasta/pastas na collection para rodar invés da collection inteira.
    // ['Livros', 'Filmes'],
    //
    // workingDir: '/pathToOtherDir' // o caminho para outro diretório para ser usado como work dir.
    //

    reporters: ['htmlextra'],
    reporter: {
        htmlextra: {
            export: './report.html'
            // template: './template.hbs'
            // logs: true,
            // showOnlyFails: true,
            // noSyntaxHighlighting: true,
            // testPaging: true,
            // browserTitle: "My Newman report",
            // title: "My Newman Report",
            // titleSize: 4,
            // omitHeaders: true,
            // skipHeaders: "Authorization",
            // omitRequestBodies: true,
            // omitResponseBodies: true,
            // hideRequestBody: ["Login"],
            // hideResponseBody: ["Auth Request"],
            // showEnvironmentData: true,
            // skipEnvironmentVars: ["API_KEY"],
            // showGlobalData: true,
            // skipGlobalVars: ["API_TOKEN"],
            // skipSensitiveData: true,
            // showMarkdownLinks: true,
            // showFolderDescription: true,
            // timezone: "Australia/Sydney"
        }
    }
});