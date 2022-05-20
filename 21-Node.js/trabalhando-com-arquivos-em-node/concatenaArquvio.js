let fs = require('fs') //fs significa FILE SYSTEM



fs.appendFile('teste.txt', ' - Olá Mundo!', function (error) {

  if (error) { throw error }

  console.log("Arquivo atualizado com sucesso!")

})