const prompt = require('prompt-sync')();

let alcool = 0
let gasolina = 0
let diesel = 0
let resposta = 0

while (resposta !== 4) {
    resposta = Number(input("Escolha seu combustível (1 - Álcool, 2 - Gasolina e 3 - Diesel"))
   if (resposta === 1) {
      alcool++
} else if (resposta === 2) {
      gasolina++
} else if  (resposta === 3) {
      diesel++
}
}

console.log("muito obrigado")
console.log(` Álcool: ${alcool} `)
console.log(` Gasolina: ${gasolina} `)
console.log(` Diesel: ${diesel} `)
