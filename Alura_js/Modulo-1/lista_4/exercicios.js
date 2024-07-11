// Ex 1:

// function saudacao(nome){
//     console.log(`Boa noite ${nome}`)

// }

// saudacao("Vitor")

// Ex 2:

// function ageConsent(age){
//     if(age >= 18){
//         console.log("You are safe")
//     }
//     else{
//         console.log('Be careful with Drake')
//     }
// }

// ageConsent(15)

// Ex 3:

// function ePalindromo(palavra) {
//     // Remover caracteres não alfanuméricos e converter para minúsculas
//     const limpaPalavra = palavra.toLowerCase().replace(/[^a-z0-9]/g, '');

//     // Inverter a palavra
//     const palavraInvertida = limpaPalavra.split('').reverse().join('');

//     // Comparar a palavra original limpa com a palavra invertida
//     return limpaPalavra === palavraInvertida;
// }

// console.log(ePalindromo("radar"))

// Ex 4:

// function compareNumbers(num1, num2, num3){
//     if(num1 > num2 && num1 > num3){
//         console.log(`${num1} is the bigger number`)}
//     else if(num2 > num1 && num2 > num3){
//         console.log(`${num2} is the bigger number`)
//     }
//     else{
//         console.log(`${num3} is the bigger number`)
//     }
// }

// compareNumbers(10, 20 ,30)