//manipulação do DOM

import { validateInput, getFizzBuzzValue, generateFizzBuzzSequence } from "./fizzbuzzService.js";

const form = document.getElementById('fizzbuzz-form');
const numberInput = document.getElementById('number-input');
const errorMessageEl = document.getElementById('error-message');
const singleResultEl = document.getElementById('single-result');
const sequenceListEl = document.getElementById('sequence-list')

form.addEventListener('submit', (event) => {
  event.preventDefault();
//form.addEventListener('submit', ...): Fica "escutando" quando o usuário clica no botão do formulário.
//Impede que a página recarregue ao enviar o formulário, que é o comportamento padrão dos navegadores.

const rawValue = numberInput.value;
const validation = validateInput(rawValue);
//numberInput.value: Pega o texto exatamente como o usuário digitou no campo de entrada.
//validateInput(rawValue): Envia esse texto para a nossa função de validação e guarda o objeto de retorno na variável validation.

if (!validation.isValid){
    errorMessageEl.textContent = validation.errorMessage;
    singleResultEl.textContent = '-';
    sequenceListEl.innerHTML = '';
    return;
//if (!validation.isValid): Se a validação FALHAR (isValid for false):
//errorMessageEl.textContent = ...: Exibe a mensagem de erro na tela.
//Reseta o resultado individual e limpa a lista.
//return: Para a execução do código aqui (não prossegue para o cálculo).
}

errorMessageEl.textContent = '';
const number = parseInt(rawValue, 10);
//Limpa a mensagem de erro da tela e converte o valor para número inteiro.
const singleResult = getFizzBuzzValue(number);
singleResultEl.textContent = `${number} -> ${singleResult}`;
//getFizzBuzzValue(number): Calcula o resultado individual.
//singleResultEl.textContent = ...: Insere o texto formatado no card de resultado individual no HTML

const sequence = generateFizzBuzzSequence(number);
  renderSequence(sequence);
});
// colore as classes 
function renderSequence(sequence) {
  sequenceListEl.innerHTML = sequence.map((item) => {
    let cssClass = 'sequence-item';
    // adc as classes que levam cores no css
    if (item === 'FizzBuzz') cssClass += ' fizzbuzz';
    else if (item === 'Fizz') cssClass += ' fizz';
    else if (item === 'Buzz') cssClass += ' buzz';
    // 
    // injeta o classe css no html 
    return `<li class="${cssClass}">${item}</li>`;
  }).join('');
}
//sequence.map((item) => ...): Percorre cada item da lista (ex: 'Fizz') e o transforma em uma tag HTML <li>.
//sequenceListEl.innerHTML = ...: Insere o HTML gerado dentro da tag <ul> no documento.

//     (Versão sem lógica de cores (Texto puro):)
// function renderSequence(sequence) {
//  sequenceListEl.innerHTML = sequence.map((item) => {
//    return `<li class="sequence-item">${item}</li>`;
//  }).join('');
//}