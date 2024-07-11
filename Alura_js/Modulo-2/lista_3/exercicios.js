// Ex 1:

// const elements = ['um', 'tal', 'de', 'zé', 'da', 'manga']

// for(let i = 0; i < elements.length; i++){
//     console.log(i, elements[i])
// }

// Ex 2:

// const elements = ['um', 'tal', 'de', 'zé', 'da', 'manga']

// function findElement(index){
//     console.log(elements[index])
// }

// findElement(2)

// Ex 3:

// const numbers = [2, 3, 4, 6 ,8 ,9];

// function sumArray(array) {
//     return array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
// }

// const sum = sumArray(numbers);
// console.log(sum);

// Ex 4:

// const numbers = [2, 3, 0.001, 9, 20, 15]

// function minMax(){
//     const smallNumber = Math.min(numbers)
//     const bigNumber = Math.max(numbers)

//     console.log(`The lowest number ir ${smallNumber}, and the biggest number is ${bigNumber}`)
// }

// minMax()

// Ex 5:

// const numbers = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]
// const pares = []
// const impares = []

// for(let i = 0; i < numbers.length; i++){
//     if (numbers[i] % 2 === 0){
//         pares.push(numbers[i])
//     }
//     else{
//         impares.push(numbers[i])
//     }
// }

// console.log(numbers)
// console.log(pares)
// console.log(impares)

// Ex 6:

// const notas = [10, 6.5, 8, 7.5];

// let somaDasNotas = 0;

// for (let i = 0; i < notas.length; i++) {
//     somaDasNotas += notas[i];
// }

// const media = somaDasNotas / notas.length;

// console.log(`A média das notas é ${media}.`);