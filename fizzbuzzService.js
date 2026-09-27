const FIZZ_MULTIPLE = 3;
const BUZZ_MULTIPLE = 5;

export function validateInput(input){
// export: Permite que esta função seja importada e usada em outros arquivos (como no app.js ou nos testes unitários). 
// function validateInput(input): Declara uma função chamada validateInput que recebe um parâmetro input (o valor digitado pelo usuário).

const parsedNumber = parseInt(input, 10);
//parseInt(input, 10): Converte o que veio da tela (que sempre chega em texto/string) em número inteiro. O , 10 indica decimal.

if (input === '' || input === null || isNaN(parsedNumber)){
    return {isValid: false, errorMessage: 'Por favor, ingresa un número válido'};
}
if (parsedNumber <= 0) {
    return { isValid: false, errorMessage: 'El número debe ser mayor a 0' };
}
return { isValid: true, errorMessage: '' };
}

export function getFizzBuzzValue(num){
    //Declara a função principal que avalia as regras do FizzBuzz para um único número.
    const isFizz = num % FIZZ_MULTIPLE === 0;
    const isBuzz = num % BUZZ_MULTIPLE === 0;
    //calcula o resto da divisão. Se o resto da divisão por 3 for 0, significa que o número é divisível por 3
    if (isFizz && isBuzz) return 'FizzBuzz';
    if (isFizz) return 'Fizz';
    if (isBuzz) return 'Buzz';

    return String(num);
}

export function generateFizzBuzzSequence(maxNumber){
    const sequence = [];
    for (let i = 1; i <= maxNumber; i++){
        sequence.push(getFizzBuzzValue(i));
    }
    return sequence;
}