//GERVACIO HERNÁNDEZ VIKTOR, FES ARAGON UNAM, INGENIERIA EN COMPUTACION
//TAREA 13 DOMINANTES


function dominante(numers) {
    if (numers.length === 0) {
       return [];
    }
   
    let maxNum = numers[0];
   
    // Encontrar el número más grande en el arreglo
    for (let i = 1; i < numers.length; i++) {
       if (numers[i] > maxNum) {
         maxNum = numers[i];
       }
    }
   
    // Comprobar si cada número es dominante
    let dominanteNumers = [];
    for (let i = 0; i < numers.length; i++) {
       if (numers[i] >= maxNum) {
         dominanteNumers.push(numers[i]);
       }
    }
   
    return dominanteNumers;
   }
   //PRUEBAS 
   console.log(dominante([1, 21, 4, 7, 5])); // [21, 7, 5]
   console.log(dominante([5, 4, 3, 2, 1])); // [5, 4, 3, 2, 1]