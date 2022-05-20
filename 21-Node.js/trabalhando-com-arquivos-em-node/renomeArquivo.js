let fs = require('fs') //fs significa FILE SYSTEM

fs.rename('teste.txt', 'novoNome.txt', function (error) {

  if (error) { throw error }

  console.log("Arquivo renomeado com sucesso!")

})