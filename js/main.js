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
        const square = document.createElement('div');
        square.classList.add('ms_square');
        square.classList.add('ms_bg_4');
        square.append(`Fizz Buzz`);
        container.append(square);
    // se i è moltiplicabile per 5 scrivi Buzz
    } else if (i % 5 == 0) {
        const square = document.createElement('div');
        square.classList.add('ms_square');
        square.classList.add('ms_bg_3');
        square.append(`Buzz`);
        container.append(square);
    // se i è moltiplicabile per 3 scrivi Fizz
    } else if (i % 3 == 0) {
        const square = document.createElement('div');
        square.classList.add('ms_square');
        square.classList.add('ms_bg_2');
        square.append(`Fizz`);
        container.append(square);
    // ALTRIMENTI scrivi il numero che corrisponde a i
    } else {
        const square = document.createElement('div');
        square.classList.add('ms_square');
        square.classList.add('ms_bg_1');
        square.append(i);
        container.append(square);
    }  
}

