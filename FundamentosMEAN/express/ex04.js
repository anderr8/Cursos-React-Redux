const express = require('express')
const server = express()

server.route('/clientes')
    .get((re, res) => res.send('Lista de Clientes'))
    .post((req, res) => res.send('Novo Cliente'))
    .put((req, res) => res.send('Alterar Cliente'))
    .delete((req, res) => res.send('Remover Cliente'))

    server.listen(3000, () => console.log('Executando...'))