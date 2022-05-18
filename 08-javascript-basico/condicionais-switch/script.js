let nota1 = 8.0
let nota2 = 6.0

let media = (nota1 + nota2) / 2

let conceito = ""

if (media >= 8) {
  conceito = "Ótimo"
}
else if (media >= 6.5) {
  conceito = "Bom"
}
else {
  conceito = "Regular"
}

console.log(media)
console.log(conceito)

switch (conceito) {
  case "Ótimo":
    console.log("Parabéns! Você é um ótimo aluno ^^.")
    break
  case "Bom":
    console.log("Você está indo muito bem.")
    break
  case "Regular":
    console.log("Estude mais um pouco.")
    break

  default:
    console.log("Houve algum erro.")
    break
}
