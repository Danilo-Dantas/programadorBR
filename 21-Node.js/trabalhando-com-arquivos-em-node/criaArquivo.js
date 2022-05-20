let fs = require('fs') //fs significa FILE SYSTEM

fs.writeFile('teste.txt', 'Hello World', function (error) {

  if (error) { throw error }

  console.log("Arquivo criado com sucesso!")

})