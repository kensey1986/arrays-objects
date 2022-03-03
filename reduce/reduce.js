// const array1 = [1, 2, 3, 4];
// // 0 + 1 + 2 + 3 + 4
// const valorInicial = 0;
// const sumaTotal = array1.reduce(
//   (valorAnterior, valorActual) => valorAnterior + valorActual,
//   0
// );
// console.log(sumaTotal);
// // esperamos como resultado : 10





// // ejemplo histograma 
// const dataDb = [
//   1, 3, 2, 3, 5, 5, 3
//  ];

//  const rta= dataDb.reduce( (obj, item) => {
//      console.log(item);
//      console.log(!obj[item]);
//          if (!obj[item]) {
//              obj[item] = 1;
//          } else{
//              obj[item] = obj[item] + 1;
//          }
//          return obj;
//  }, {} );

// console.log(rta)


// ejemplo Sumar todos los valores de un array
 let total = [0, 1, 2, 3, 8].reduce(function(a, b){ return a + b; });
//  console.log(total);
 //total == 6

// Integrar un array a partir de varios arrays
let integrado = [[0,1], [2,3], [4,5]].reduce(function(a,b) {
    return a.concat(b);
  });

  console.log(integrado);
// integrado es [0, 1, 2, 3, 4, 5]


