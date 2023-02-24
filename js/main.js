/* 
JAVASCRIPT
*/

//definisco le variabili
const container = document.querySelector('.container-sm')

let min = 1;

let max = 100;

//ciclo per generare i numeri necessari
for (let i = min; i <= max; i++) {
    
    // se i è moltiplicabile per 15 scrivi Fizz Buzz
    if (i % 15 == 0) {
        const square = `<div class="ms_square ms_bg_4">Fizz Buzz</div>`;
        container.innerHTML += square;
    // se i è moltiplicabile per 5 scrivi Buzz
    } else if (i % 5 == 0) {
        const square = `<div class="ms_square ms_bg_3">Buzz</div>`;
        container.innerHTML += square;
    // se i è moltiplicabile per 3 scrivi Fizz
    } else if (i % 3 == 0) {
        const square = `<div class="ms_square ms_bg_2">Fizz</div>`;
        container.innerHTML += square;
    // ALTRIMENTI scrivi il numero che corrisponde a i
    } else {
        const square = `<div class="ms_square ms_bg_1">${i}</div>`;
        container.innerHTML += square;
    }  
}