// Configurando o Servidor com o Express

const server = require('./config/server')
require('./config/database')
require('./config/routes')(server)