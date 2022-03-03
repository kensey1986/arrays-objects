// const array1 = [5, 66, 12, 8, 130, 44];

// const found = array1.find(element => element > 10);

// console.log(found);
// // expected output: 12

/**
 * 
 */
//  const inventario = [
//      {nombre: 'manzanas', cantidad: 7},
//      {nombre: 'bananas', cantidad: 0},
//      {nombre: 'manzanas', cantidad: 2},
//      {nombre: 'cerezas', cantidad: 5}
//  ];

// function esCereza(fruta) {
//     return fruta.nombre === 'manzanas';
// }

// console.log(inventario.find(esCereza));
// // // { nombre: 'cerezas', cantidad: 5 }


/**
 * 
 */

//  const inventario = [
//      {nombre: 'manzanas', cantidad: 2},
//    {nombre: 'bananas', cantidad: 0},
//      {nombre: 'cerezas', cantidad: 5}
//  ];

//  const resultado = inventario.find( fruta => fruta.nombre === 'cerezas' );

//  console.log(resultado); // { nombre: 'cerezas', cantidad: 5 }


/*** */

 function isPrime(element, index, array) {
     let start = 2;
     while (start <= Math.sqrt(element)) {
       if (element % start++ < 1) {
         return false;
       }
     }
     return element > 1;
   }

   console.log([4, 6, 8, 12].find(isPrime)); // undefined, no encontrado
   console.log([4, 5, 8, 12].find(isPrime)); // 5