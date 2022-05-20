let fs = require('fs') //fs significa FILE SYSTEM

fs.readFile('novoNome.txt', 'UTF-8', function (error) {

  if (error) { throw error }

  console.log(data)

})