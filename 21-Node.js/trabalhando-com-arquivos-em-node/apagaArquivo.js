let fs = require('fs') //fs significa FILE SYSTEM

fs.unlink('teste.txt', function (error) {

  if (error) { throw error }

  console.log("Arquivo apagado com sucesso!")

})