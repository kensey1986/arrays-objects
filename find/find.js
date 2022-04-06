// const array1 = [5, 43, 66, 12, 8, 130, 44];
// const array1 = [ 'carlos', 'sofia', 'carlos'];

// const found = array1.find((element) => element > 10);
// const found = array1.find((element) => element === 'carlos');

// console.log(found);
// // expected output: 12

/**
 *
 */
 const personas = [
  {nombre: 'carlos', edad: 27, cedula: 14545},
  {nombre: 'juan', edad: 40, cedula: 244545},
  {nombre: 'pepito', edad: 52, cedula: 45453},
  {nombre: 'luis', edad: 55, cedula: 4545454}
];


function encontrarEmpleado (documentoID){
console.log(documentoID);
const empleadoEncontrado = personas.find((empleado) => empleado.cedula === documentoID);
console.log(empleadoEncontrado);
const appNodo = document.getElementById('app');
appNodo.innerHTML += `<li> ${empleadoEncontrado.nombre} - ${empleadoEncontrado.edad} </li>`
}

encontrarEmpleado(4545454);

//  const appNodo = document.getElementById('app');
//  appNodo.innerHTML += `<li> ${element.nombre} - ${element.sueldo} </li>`
//  console.log(found);
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

//  function isPrime(element, index, array) {
//      let start = 2;
//      while (start <= Math.sqrt(element)) {
//        if (element % start++ < 1) {
//          return false;
//        }
//      }
//      return element > 1;
//    }

//    console.log([4, 6, 8, 12].find(isPrime)); // undefined, no encontrado
//    console.log([4, 5, 8, 12].find(isPrime)); // 5