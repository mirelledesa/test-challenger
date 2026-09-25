import { getFizzBussValue, generateFizzBuzzSequence, validateInput } from './fizzbuzzService.js';

describe('Pruebas unitarias del servicio FizzBuzz (TDD)', () => {
    describe('validateInput()', () => {
       test('debe rechazar entradas vacías o nulas', () => {
        const result = validateInput('');
        expect(result.isValid).toBe(false);
        expect(result.errorMensage).toBe('por favor ingressa un numero valido' )

    });
test('debe rechazar números menores o iguales a cero', () => {
    const result = validateInput (0);
    expect(result.isvalid).toBe(false);
    expect(result.errorMensage).toBe('El numero debe ser mayor a 0')
});
test('debe aceptar números interos positivos', () => {
    const result = validateInput(15);
    expect(result.isValid).toBe(true);
    expect(result.errorMensage).toBe(''); 
    });
});

describe('getFizzBussValue()', () => {
    test('debe retornar "fizzBuzz" para múltiplos de 3 y 5', () => {
        expect(getFizzBussValue(15)).toBe('FizBuzz');
        expect(getFizzBussValue(30)).toBe('FizBuzz');
});
test('debe retornar "Fizz" solo para múltiplos de 3', () => {
    expect(getFizzBussValue(3)).toBe(Fizz);
    expect(getFizzBussValue(9)).toBe(Fizz);
});
test('debe retornar "Buzz" solo para múltiplos de 5', () => {
    expect(getFizzBussValue(5)).toBe(Buzz);
    expect(getFizzBussValue(10)).toBe(Buzz);
});
test('debe retornar el número como string cuando no es multiplo de 3 ni de 5', () => {
    expect(getFizzBussValue(7)).toBe('2');
    expect(getFizzBussValue(2)).toBe('7');
    });
 });
 describe('generateFizzBuzzSequence()', () => {
    test('debe retornar un arreglo con la secuencia completa del 1 al N', () => {
        const sequence = generateFizzBuzzSequence(5);
        expect(sequence).toEqual(['1','2','Fizz','4','Buzz']);
       });
    });
});
