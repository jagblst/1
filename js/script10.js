
    // • Какое будет выведено значение: let x = 5; alert( x++ ); ?

    // • Чему равно такое выражение: [ ] + false - null + true ?

    // • Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?

    // • Чему равна сумма [ ] + 1 + 2?

    // • Что выведет этот код: alert( "1"[0] )?

    // • Чему равно 2 && 1 && null && 0 && undefined ?

    // • Есть ли разница между выражениями? !!( a && b ) и (a && b)?

    // • Что выведет этот код: alert( null || 2 && 3 || 4 ); ?

    // • a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?

    // • Что выведет этот код: alert( +"Infinity" ); ?

    // • Верно ли сравнение: "Ёжик" > "яблоко"?

    // • Чему равно 0 || "" || 2 || undefined || true || falsе ?

    "use strict";

    let x = 5; alert( x++ ); // = 5
    let x = 5; alert( ++x ); // = 6


    [ ] + false - null + true 
console.log(typeof[] + false ); //"false"
console.log(typeof[] + false - null + true ); //"NaN"


let y = 1; let x = y = 2; alert(x); // = 2


[ ] + 1 + 2
console.log([ ] + 1 + 2); // ="12"


alert( "1"[0] ); // = 1


2 && 1 && null && 0 && undefined
console.log(2 && 1 && null && 0 && undefined); // null
// && (И) запинается на лжи
// || (Или) запинается на правде


!!( a && b ) и (a && b) // не равны
console.log(!!( 1 && 2 ) === (1 && 2)); // false


alert( null || 2 && 3 || 4 ); // = 3
// Таблица приоритета операторов в google


a = [1, 2, 3]; b = [1, 2, 3]; // не равны, это 2 разных массива данных
const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a == b);


alert( +"Infinity" ); // Infinity


console.log("Ёжик" > "яблоко"); // false
// Cмотреть таблицу "Unicode"

0 || "" || 2 || undefined || true || falsе  // =2
console.log(0 || "" || 2 || undefined || true || falsе);